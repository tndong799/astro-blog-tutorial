import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: 'stirring-basbousa-2b1aa9.netlify.app',
});
