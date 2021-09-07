import path from 'path'
import { ConfigEnv, defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  plugins: [
    vue(),
    VitePluginElementPlus({
      format: mode === 'development' ? 'esm' : 'cjs',
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      page: path.resolve(__dirname, "src/page"),
      comps: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
      api: path.resolve(__dirname, "src/api"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://sslguala.ce04.com",
        changeOrigin: true,
        rewrite: (_path) => _path.replace(/^\/api/, ""),
      },
    },
  },
})
