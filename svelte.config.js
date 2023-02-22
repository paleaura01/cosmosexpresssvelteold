import adapter from '@sveltejs/adapter-node';
import {vitePreprocess} from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/src', // or '/'
      // assets: '/cosmosexpresssvelte/images',
    },
  },
  preprocess: vitePreprocess(),
};

export default config;