// For the GitHub Pages preview only: prefixes root-relative links in the built HTML with SITE_BASE.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = (process.env.SITE_BASE || '').replace(/\/$/, '');
if (!base) process.exit(0);
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
let n = 0;
for (const f of walk('dist').filter((f) => f.endsWith('.html'))) {
  const s = readFileSync(f, 'utf8');
  const out = s.replace(/(href|src|action)="\/(?!\/)/g, (m, a) => `${a}="${base}/`).replaceAll(`${base}${base}/`, `${base}/`);
  if (out !== s) { writeFileSync(f, out); n++; }
}
console.log(`prefix-base: updated ${n} HTML files with ${base}`);
