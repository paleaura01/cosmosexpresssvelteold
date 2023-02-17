import adapter from '@sveltejs/adapter-node';
import {vitePreprocess} from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '', // or '/'
      // assets: '/cosmosexpresssvelte/images',
    },
  },
  preprocess: vitePreprocess(),
};

export default config;