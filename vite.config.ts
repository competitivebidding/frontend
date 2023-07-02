import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  publicDir: './public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@feauters': path.resolve(__dirname, './src/feauters'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  }
})
