import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Poster-Ratio/',
  root: '.',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
