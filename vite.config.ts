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

// Books that are not published yet (the books marked hidden in src/content/stories.json) are built into files
// named assets/hidden-*.js. When PREVIEW_KEY is set on the server, those files are only sent to a
// browser that opened the preview link with that key (deploy/server.mjs), so the unpublished texts
// cannot be downloaded by anyone who reads the app's code.
const hiddenStoryIds = (): string[] => {
  const file = JSON.parse(readFileSync(path.resolve(__dirname, 'src/content/stories.json'), 'utf8')) as {
    stories: { id: string; hidden?: boolean }[];
  };
  return file.stories.filter(story => story.hidden).map(story => story.id);
};
// Content files are named <storyId>-<level>-<language>.json under src/content.
const hiddenContentPrefixes = hiddenStoryIds().map(id => `${path.sep}src${path.sep}content${path.sep}`.concat(`$$${id}-`));
const isHiddenModule = (id: string) => hiddenContentPrefixes.some(prefix => {
  const [folder, start] = prefix.split('$$');
  const index = id.indexOf(folder);
  if (index < 0) return false;
  const rest = id.slice(index + folder.length);
  return rest.startsWith(`books${path.sep}${start}`) || rest.startsWith(`guides${path.sep}${start}`);
});

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
