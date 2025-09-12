import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // This is to load your global variables into every component automatically
        additionalData: `@use "@/styles/_global.scss" as *;`,
        quietDeps: true // Suppress deprecation warnings in the console
      }
    }
  }
})
