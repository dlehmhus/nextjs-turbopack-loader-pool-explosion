// Runs `next build` and samples its process tree every 250 ms. Reports the peak
// number of Turbopack webpack-loader pool processes (`pool_entry-...webpack-loaders`)
// and the peak RSS of the whole tree. The build is killed above --limit-gib so a
// runaway build cannot take the machine down.
//
// Usage: node scripts/measure.mjs [--parallelism N] [--limit-gib 24]
//   --parallelism sets TURBO_TASKS_AVAILABLE_PARALLELISM, the per-pool process cap.
//   LOADER_RULES=one|three (env) selects the loader rules in next.config.ts.
import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    parallelism: { type: 'string' },
    'limit-gib': { type: 'string', default: '24' },
  },
});

const root = join(import.meta.dirname, '..');
const GiB = 2 ** 30;
const limit = Number(values['limit-gib']) * GiB;
const nextVersion = JSON.parse(
  readFileSync(join(root, 'node_modules/next/package.json'), 'utf8'),
).version;
const rules = process.env.LOADER_RULES ?? 'three';

const env = { ...process.env, NEXT_TELEMETRY_DISABLED: '1' };
if (values.parallelism) env.TURBO_TASKS_AVAILABLE_PARALLELISM = values.parallelism;

rmSync(join(root, '.next'), { recursive: true, force: true });

const child = spawn(join(root, 'node_modules/.bin/next'), ['build'], {
  cwd: root,
  env,
  detached: true,
  stdio: ['ignore', 'pipe', 'pipe'],
});
let output = '';
child.stdout.on('data', (d) => (output += d));
child.stderr.on('data', (d) => (output += d));

const sample = () => {
  const rows = new Map();
  const ps = execFileSync('ps', ['-axo', 'pid=,ppid=,rss=,command='], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  for (const line of ps.split('\n')) {
    const m = line.trim().match(/^(\d+)\s+(\d+)\s+(\d+)\s+(.*)$/);
    if (m) rows.set(Number(m[1]), { ppid: Number(m[2]), rss: Number(m[3]) * 1024, cmd: m[4] });
  }
  const tree = [];
  const queue = [child.pid];
  while (queue.length) {
    const pid = queue.pop();
    if (!rows.has(pid)) continue;
    tree.push(rows.get(pid));
    for (const [p, r] of rows) if (r.ppid === pid) queue.push(p);
  }
  const pools = tree.filter((r) => r.cmd.includes('pool_entry') && r.cmd.includes('webpack-loaders'));
  return {
    total: tree.reduce((s, r) => s + r.rss, 0),
    poolCount: pools.length,
    poolRss: pools.reduce((s, r) => s + r.rss, 0),
  };
};

const started = Date.now();
let peak = { total: 0, poolCount: 0, poolRss: 0 };
let killed = false;
const timer = setInterval(() => {
  const s = sample();
  peak = {
    total: Math.max(peak.total, s.total),
    poolCount: Math.max(peak.poolCount, s.poolCount),
    poolRss: Math.max(peak.poolRss, s.poolRss),
  };
  if (s.total > limit && !killed) {
    killed = true;
    process.kill(-child.pid, 'SIGKILL');
  }
}, 250);

const exitCode = await new Promise((resolve) => child.on('exit', (code) => resolve(code)));
clearInterval(timer);

const result = {
  next: nextVersion,
  loaderRules: rules,
  parallelism: values.parallelism ?? 'default',
  cores: (await import('node:os')).availableParallelism(),
  exitCode,
  killedAtLimit: killed,
  seconds: Math.round((Date.now() - started) / 100) / 10,
  peakLoaderPoolProcesses: peak.poolCount,
  peakLoaderPoolRssGiB: Math.round((peak.poolRss / GiB) * 100) / 100,
  peakTreeRssGiB: Math.round((peak.total / GiB) * 100) / 100,
};

mkdirSync(join(root, 'results'), { recursive: true });
const name = `next-${nextVersion}_rules-${rules}_p-${result.parallelism}`;
writeFileSync(join(root, 'results', `${name}.json`), JSON.stringify(result, null, 2) + '\n');
if (exitCode !== 0 && !killed) console.error(output.slice(-4000));
console.log(JSON.stringify(result, null, 2));
