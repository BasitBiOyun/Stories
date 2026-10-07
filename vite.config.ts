import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';

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

// Books that are not published yet (hiddenStoryCatalog in storyCatalog.ts) are built into files
// named assets/hidden-*.js. When PREVIEW_KEY is set on the server, those files are only sent to a
// browser that opened the preview link with that key (deploy/server.mjs), so the unpublished texts
// cannot be downloaded by anyone who reads the app's code.
const hiddenStoryIds = (): string[] => {
  const source = readFileSync(path.resolve(__dirname, 'src/core/content/storyCatalog.ts'), 'utf8');
  const start = source.indexOf('export const hiddenStoryCatalog');
  if (start < 0) return [];
  const block = source.slice(start, source.indexOf('\n];', start));
  return [...block.matchAll(/^    id: '([A-Za-z0-9]+)'/gm)].map(match => match[1]);
};
const hiddenDataFolders = hiddenStoryIds().map(id => `${path.sep}src${path.sep}data${path.sep}${id}${path.sep}`);
const isHiddenModule = (id: string) => hiddenDataFolders.some(folder => id.includes(folder));

// The preview branch is deployed by Cloud Build; GitHub Actions are not required for this path.
export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), inlineEntryCss()],
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
      rollupOptions: {
        output: {
          chunkFileNames: chunk =>
            chunk.moduleIds.length > 0 && chunk.moduleIds.every(isHiddenModule)
              ? 'assets/hidden-[name]-[hash].js'
              : 'assets/[name]-[hash].js',
        },
      },
    },
    server: {
      // AI Studio can disable HMR through DISABLE_HMR during automated edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
