import path from 'path';
import cloudflare from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: cloudflare(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			build: {
				target: 'esnext'
			},
			resolve: {
				alias: {
					$components: path.resolve('src/components/')
				}
			}
		}
	}
};

export default config;
