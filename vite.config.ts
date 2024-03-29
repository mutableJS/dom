import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			fileName: 'index',
			formats: ['umd', 'es'],
			name: '@mutablejs/dom',
		},
		minify: false,
		rollupOptions: {
			external: ['@mutablejs/core'],
		},
	},
	server: { port: 3000 },
});
