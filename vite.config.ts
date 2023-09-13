import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths';
// import svg from '@neodx/svg/vite';

export default defineConfig({
  plugins: [
    react(),
    // tsconfigPaths(),
    // svg({
    //   root: './src/assets',
    //   group: true,
    //   output: 'public',
    //   definitions: 'src/shared/ui/icon/sprite.h.ts',
    //   resetColors: {
    //     replaceUnknown: 'currentColor'
    //   }
    // })
  ],
  publicDir: './public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  }
})
