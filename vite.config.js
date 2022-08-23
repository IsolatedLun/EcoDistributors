import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		host: true
	},
	build: {
		outDir: './dist'
	}
};

export default config;
