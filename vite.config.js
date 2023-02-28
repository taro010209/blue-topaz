import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs-extra';

export default defineConfig({
  plugins: [vue()],
  base: './',
  root: 'src',
  server: {
    port: 1111,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/assets/scss/mixin.scss";`,
      },
    },
  },
  build: {
    outDir: '../dist',
  },
});

const srcDir = path.resolve(__dirname, 'src', 'assets', 'img');
const destDir = path.resolve(__dirname, 'dist', 'assets', 'img');
fs.ensureDirSync(destDir);
fs.copySync(srcDir, destDir);
