import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
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
