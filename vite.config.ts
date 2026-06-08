import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png'],
			manifest: {
				name: 'JS/TS Flashcards',
				short_name: 'Flashcards',
				description: 'Карточки для повторения JS, TS, React',
				theme_color: '#0f172a',
				background_color: '#ffffff',
				display: 'standalone',
				orientation: 'portrait',
				icons: [
					{ src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
					{ src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
				],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: [path.resolve(__dirname, 'src/styles/mixins')],
				additionalData: `
                @use "breakpoints" as *;
                @use "hover" as *;
                @use "font-face" as *;
            `,
			},
		},
	},
});
