import { getState } from './store';
import { splitEdition } from './util';

/**
 * What the app inside the panel's frame borrows from the panel (src/content/contentSource.ts and
 * src/content/panelPreview.ts): the edited book and guide files, and the pictures and recordings
 * waiting in the basket. Both are same-origin pages, so this is a plain object on `window`.
 */
interface Overrides {
  images?: Record<number, string>;
  englishAudio?: Record<number, string>;
  arabicAudio?: Record<number, string>;
}

export const installBridge = () => {
  (window as unknown as { __panelPreview: unknown }).__panelPreview = {
    read: (kind: 'books' | 'guides', name: string) => {
      const draft = getState().drafts[`src/content/${kind}/${name}.json`];
      return draft ? structuredClone(draft.value) : undefined;
    },
    assets: (storyId: string, level: string): Overrides | null => {
      const media = getState().basket?.media ?? [];
      if (media.length === 0) return null;
      const overrides: Required<Overrides> = { images: {}, englishAudio: {}, arabicAudio: {} };
      for (const item of media) {
        if (!item.edition || !item.chapter) continue;
        const edition = splitEdition(item.edition);
        if (edition.storyId !== storyId || edition.level !== level.toUpperCase()) continue;
        if (item.kind === 'image') overrides.images[item.chapter] = item.url;
        else if (edition.language === 'ar') overrides.arabicAudio[item.chapter] = item.url;
        else overrides.englishAudio[item.chapter] = item.url;
      }
      return overrides;
    },
  };
};
