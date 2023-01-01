import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import autoprefixer from 'autoprefixer';
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';
import postcssSortMediaQueries from 'postcss-sort-media-queries';
import cssDeclarationSorter from 'css-declaration-sorter';

// https://vitejs.dev/config/
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
    postcss: {
      plugins: [
        autoprefixer({
          cascade: false,
        }),
        postcssCombineDuplicatedSelectors,
        postcssSortMediaQueries,
        cssDeclarationSorter({
          order: 'smacss',
        }),
      ],
    },
  },
  build: {
    root: './',
    outDir: '../dist',
  },
});
