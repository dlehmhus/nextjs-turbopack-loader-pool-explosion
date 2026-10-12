// Generates the source tree: N server components, N client components and N
// utility modules, imported from every kind of module context Next.js has
// (app RSC + SSR + client, an edge route, a route handler, proxy, a pages route).
// Usage: node scripts/generate.mjs [N=120]
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const N = Number(process.argv[2] ?? 120);
const root = join(import.meta.dirname, '..');

for (const dir of ['app', 'pages', 'components', 'lib']) {
  rmSync(join(root, dir), { recursive: true, force: true });
}

const write = (path, content) => {
  const file = join(root, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

const range = [...Array(N).keys()];

for (const i of range) {
  write(
    `lib/u${i}.ts`,
    `export const value${i} = (input: string): string => \`u${i}:\${input}\`;\n`,
  );
  write(
    `components/server/S${i}.tsx`,
    `import { value${i} } from '../../lib/u${i}';\n\n` +
      `export function S${i}() {\n  return <p>{value${i}('server')}</p>;\n}\n`,
  );
  write(
    `components/client/C${i}.tsx`,
    `'use client';\n\nimport { useState } from 'react';\n\nimport { value${i} } from '../../lib/u${i}';\n\n` +
      `export function C${i}() {\n  const [n, setN] = useState(0);\n` +
      `  return <button onClick={() => setN(n + 1)}>{value${i}(String(n))}</button>;\n}\n`,
  );
}

const imports = (kind, prefix) =>
  range.map((i) => `import { ${kind}${i} } from '${prefix}/${kind === 'S' ? 'server' : 'client'}/${kind}${i}';`).join('\n');
const jsx = (kind) => range.map((i) => `      <${kind}${i} />`).join('\n');
const utilImports = (prefix) =>
  range.map((i) => `import { value${i} } from '${prefix}/u${i}';`).join('\n');
const utilCalls = range.map((i) => `value${i}('x')`).join(', ');

write(
  'app/layout.tsx',
  `export default function RootLayout({ children }: { children: React.ReactNode }) {\n` +
    `  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );\n}\n`,
);

const page = (prefix, extra = '') =>
  `${imports('S', prefix)}\n${imports('C', prefix)}\n${extra}\n` +
  `export default function Page() {\n  return (\n    <main>\n${jsx('S')}\n${jsx('C')}\n    </main>\n  );\n}\n`;

write('app/page.tsx', page('../components'));
write('app/edge/page.tsx', page('../../components', "\nexport const runtime = 'edge';\n"));

write(
  'app/api/hello/route.ts',
  `${utilImports('../../../lib')}\n\nexport function GET() {\n  return Response.json([${utilCalls}]);\n}\n`,
);

write(
  'proxy.ts',
  `import { NextResponse } from 'next/server';\n\n${utilImports('./lib')}\n\n` +
    `export function proxy() {\n  const res = NextResponse.next();\n` +
    `  res.headers.set('x-values', [${utilCalls}].length.toString());\n  return res;\n}\n`,
);

write(
  'pages/legacy.tsx',
  `${imports('C', '../components')}\n\nexport default function Legacy() {\n  return (\n    <main>\n${jsx('C')}\n    </main>\n  );\n}\n`,
);

console.log(`generated ${N} server components, ${N} client components, ${N} utils`);
