import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.degmarkeng.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
  vite: { plugins: [tailwindcss()] },
});
