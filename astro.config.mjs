// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simonarnost.github.io',
  base: '/alephone',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
