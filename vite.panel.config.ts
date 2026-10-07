import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * The content panel is built on its own, into dist/panel, so the app's own bundle is exactly
 * what it was. The server only sends these files to a browser that opened the preview link
 * (deploy/server.mjs), because the panel is a work tool, not a public page.
 */
export default defineConfig({
  plugins: [react()],
  base: '/panel/',
  publicDir: false,
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  build: {
    outDir: 'dist/panel',
    emptyOutDir: true,
    rollupOptions: { input: path.resolve(__dirname, 'panel.html') },
  },
});
