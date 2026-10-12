import type { NextConfig } from 'next';

// Three trivial pass-through loaders on overlapping globs, the shape of a real
// app that runs e.g. a CSS-in-JS loader on *.tsx, something else on *.ts and a
// string-replace loader on every source file. LOADER_RULES=one keeps only the
// first rule, to show that the pool count scales with the number of loader chains.
const rules = process.env.LOADER_RULES ?? 'three';

const turbopackRules: NonNullable<NextConfig['turbopack']>['rules'] =
  rules === 'one'
    ? { '*.tsx': { loaders: ['./loaders/a.js'] } }
    : {
        '*.tsx': { loaders: ['./loaders/a.js'] },
        '*.ts': { loaders: ['./loaders/b.js'] },
        '*.{js,jsx,ts,tsx}': { loaders: ['./loaders/c.js'] },
      };

const nextConfig: NextConfig = {
  turbopack: { rules: turbopackRules },
};

export default nextConfig;
