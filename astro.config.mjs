import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_BASE is set only for the GitHub Pages preview (e.g. /degmark-website). The live site uses '/'.
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.degmarkeng.com',
  base,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
  vite: { plugins: [tailwindcss()] },
});
