# Turbopack 16.4: one webpack-loader process pool per loader chain × context, so `next build` spawns hundreds of Node.js processes

Next.js **16.4.0**, Turbopack, `next build`, default `turbopackPluginRuntimeStrategy` (`'childProcesses'`).

In 16.3.8 every webpack loader in a build runs in **one** shared pool of Node.js
child processes, capped at `available_parallelism()` processes.

In 16.4.0 the build creates **a separate pool for every loader chain in every
module context** (RSC, SSR, client, edge, proxy, …). Each pool is again capped at
`available_parallelism()`. The number of loader processes is therefore
`pools × cores` instead of `cores`.

On this trivial app (three pass-through loaders, 360 tiny modules, 18-core
machine), peak build memory goes from **3.7 GiB to 21 GiB**. In our production app
(11 loader rules) the build grows to **40–59 GiB** on CI nodes with many cores,
where it gets OOM-killed or evicted. It built in about 15 GiB on 16.3.8.

## Quickstart

```bash
pnpm install
pnpm measure                     # next build, sampled; prints peak loader processes and RSS
pnpm measure --parallelism 2     # caps each pool at 2 processes; the count then shows the number of pools
```

Compare with 16.3.8:

```bash
pnpm add -E next@16.3.8
pnpm measure --parallelism 2
```

`scripts/measure.mjs` runs `next build` and samples the process tree every
250 ms. It counts processes whose command line contains
`pool_entry-[turbopack-node]_transforms_webpack-loaders`. It kills the build
above `--limit-gib` (default 24) so the machine stays usable.

`--parallelism N` sets `TURBO_TASKS_AVAILABLE_PARALLELISM`, the cap for each
pool. With a cap of 2, a single pool can never exceed 2 processes, so any count
above 2 means more than one pool.

## Results

macOS 27, Apple Silicon, 18 cores, Node.js 24.21.0. Raw data in `results/`.

| Next.js | loader rules | per-pool cap | peak loader processes | peak loader RSS | peak build RSS |
| ------- | ------------ | ------------ | --------------------: | --------------: | -------------: |
| 16.3.8  | three        | 2            |                 **2** |        0.25 GiB |       2.44 GiB |
| 16.4.0  | three        | 2            |                **57** |        3.34 GiB |       5.16 GiB |
| 16.3.8  | one          | 2            |                     2 |        0.15 GiB |       2.47 GiB |
| 16.4.0  | one          | 2            |                    17 |        0.92 GiB |       2.70 GiB |
| 16.3.8  | three        | default (18) |                **19** |        1.32 GiB |   **3.74 GiB** |
| 16.4.0  | three        | default (18) |               **349** |       18.91 GiB |  **21.06 GiB** |

- With a cap of 2, 16.3.8 never goes above 2 processes: a single pool. 16.4.0
  reaches 57 processes, which is about 28 pools.
- The pool count grows with the number of loader chains: one rule gives about 8
  pools, three overlapping rules about 28.
- With the default cap, the pools fill up to the core count: 349 processes,
  each a full Node.js runtime of about 50–100 MB.

## Source tree

`scripts/generate.mjs` (already run; output committed) writes 120 server
components, 120 client components and 120 utility modules. They are imported
from every module context: `app/page.tsx` (RSC, SSR, client), `app/edge/page.tsx`
(edge runtime), `app/api/hello/route.ts`, `proxy.ts` and `pages/legacy.tsx`.

`next.config.ts` registers three pass-through loaders (`loaders/*.js`, each a
5 ms busy loop that returns the source unchanged) on overlapping globs:

```ts
'*.tsx':             { loaders: ['./loaders/a.js'] },
'*.ts':              { loaders: ['./loaders/b.js'] },
'*.{js,jsx,ts,tsx}': { loaders: ['./loaders/c.js'] },
```

`LOADER_RULES=one` keeps only the first rule.

## Likely cause

[#95732 "Turbopack: loader change invalidation"](https://github.com/vercel/next.js/pull/95732)
(commit `f80a4b4dd`, first released in 16.4.0) changed the invalidation input
passed to the loader pool. In `turbopack/crates/turbopack-node/src/transforms/webpack.rs`:

```diff
-additional_invalidation: Completion::immutable().to_resolved().await?,
+additional_invalidation: loaders_changed,   // loaders_changed(loaders, project_path,
+                                            //   config_tracing_context, resolve_options_context)
```

`additional_invalidation` is one of the arguments that `get_evaluate_pool` in
`evaluate.rs` is cached by. In 16.3.8 it was a shared constant, so all loader
evaluations shared one `EvaluatePool`. In 16.4.0 it is a `Vc` specific to each
loader chain and each context's resolve options, so each combination gets its
own pool. Each pool has `concurrency: available_parallelism()` and calls
`pre_warm()`.

The pool implementation itself (`process_pool/mod.rs`) is unchanged between
v16.3.8 and v16.4.0 apart from attribute renames. Canary has the same code as
16.4.0.

A possible fix: keep loader-change invalidation, but leave it out of the pool's
cache key. For example, await `loaders_changed` in the transform instead of
passing it to `get_evaluate_pool`, or share a single process budget across pools.

## Workarounds

- Stay on 16.3.8.
- Set `TURBO_TASKS_AVAILABLE_PARALLELISM` to something small. This lowers the
  cap for every pool, and it also limits Turbopack's own parallelism. It only
  shrinks the problem: in the production app, 4 still meant over 100 processes.
- `turbopackPluginRuntimeStrategy: 'workerThreads'` is not available on Node.js
  24.13.1 and newer (falls back to `'childProcesses'`).
