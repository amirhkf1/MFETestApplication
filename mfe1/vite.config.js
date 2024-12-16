import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  
  plugins: [
    vue(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.vue',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});