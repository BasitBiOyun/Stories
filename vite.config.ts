import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';

// The preview branch is deployed by Cloud Build; GitHub Actions are not required for this path.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'lucide-react': path.resolve(__dirname, 'src/components/ui/icons.tsx'),
      },
    },
    build: {
      manifest: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
    },
    server: {
      // AI Studio can disable HMR through DISABLE_HMR during automated edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
