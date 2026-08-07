import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://namabayiislam.com',
  integrations: [sitemap()],
  compressHTML: true,
});
