import { readFileSync } from 'fs'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	const host = env.SERVER_HOST
	const isProduction = mode === 'production'

	console.log(`Mode: ${mode}`)
	console.log(`isProduction: ${isProduction}`)
	console.log(`Server Host: ${host}`)

	return {
		server: isProduction
			? false
			: {
					host,
					port: 5174,
					hmr: { host },
					https: {
						key: readFileSync(env.SERVER_HTTPS_KEY),
						cert: readFileSync(env.SERVER_HTTPS_CERT),
					},
				},
		plugins: [
			laravel({
				input: [
					'resources/css/app.css',
					'resources/css/panel/app.css',
					'resources/js/app.js',
					'resources/js/react/App.jsx',
					'resources/js/panel/trumbowygInit.js',
				],
				refresh: true,
			}),
			react(),
			tsconfigPaths(),
		],

		// resolve: {
		// 	alias: {
		// 		'@': 'resources/js/react',
		// 		'@': 'resources/js/react',
		// 		'@': 'resources/js/react',
		// 	},
		// },

		resolve: {
			alias: {
				'@': path.resolve(__dirname, './resources/js/react'),
				'@img': path.resolve(__dirname, './resources/img'),
				'@css': path.resolve(__dirname, './resources/css'),
			},
		},
	}
})
