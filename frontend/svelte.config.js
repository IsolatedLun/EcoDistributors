import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			assets: 'build/assets',
			fallback: 'index.html',
			prerender: { default: true }
		})
	}
};

export default config;
