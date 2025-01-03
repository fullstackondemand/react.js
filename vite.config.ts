import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '_react/main.js',
        assetFileNames: '_react/style.css',
        chunkFileNames: `assets/[name].[ext]`,
      }
    }
  }
})