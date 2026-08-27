import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://panduanislam.my',
  integrations: [sitemap()],
  compressHTML: true,
});
