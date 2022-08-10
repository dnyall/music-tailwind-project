import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [vue()],

// 	//add by daniyal
// 	// server: {
// 	// 	hmr: true,
// 	// },
// 	// 	server: {
// 	// 	hmr: {
// 	// 		protocol: 'ws',
// 	// 		host: 'localhost'
// 	// 	}
// 	// },
// })
export default defineConfig(({ command }) => {
	return {
		plugins: [vue()],
		resolve: {
			alias: [
				{
					find: "@vue/runtime-core",
					replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
				},
			],
		},
	};
});
