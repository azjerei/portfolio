import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  preview: {
    port: 3001,
    strictPort: true,
  },
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    origin: 'http://0.0.0.0:3001',
  }
});
