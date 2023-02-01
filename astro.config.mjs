import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://dcmaglione.com',
    base: '/websitev2',
    integrations: [mdx(), sitemap()],
});
