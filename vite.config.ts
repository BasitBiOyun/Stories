import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, loadEnv, type Plugin } from 'vite';

// The app's one stylesheet goes inside index.html, so the first paint does not wait for a second
// request (PageSpeed: render-blocking request). index.html is never cached, the CSS file is still emitted.
const inlineEntryCss = (): Plugin => ({
  name: 'inline-entry-css',
  apply: 'build',
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      return html.replace(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/g, (tag, fileName: string) => {
        const asset = ctx.bundle?.[fileName];
        if (!asset || asset.type !== 'asset') return tag;
        return `<style>${String(asset.source)}</style>`;
      });
    },
  },
});

// The preview branch is deployed by Cloud Build; GitHub Actions are not required for this path.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss(), inlineEntryCss()],
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
