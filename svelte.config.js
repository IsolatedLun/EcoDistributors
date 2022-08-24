import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			out: 'dist',
			pages: './ecoBackend/frontend/templates/',
			assets: './ecoBackend/frontend/static/',

			fallback: true,
			precompress: false
		}),

		prerender: {
			default: false
		}
	}
};

export default config;
