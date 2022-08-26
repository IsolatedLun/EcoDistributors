import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			assets: 'build/assets',
			out: 'build',
			fallback: 'index.html',
			precompress: false,
			prerender: { enabled: false },
			ssr: false
		})
	}
};

export default config;
