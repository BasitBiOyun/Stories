import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../lib/firebase';
import type { BookData, PageData } from '../../types';
import type { BookPair } from '../content/contracts';
import type { BookAssetManifest, ResolvedBookAssets, StoragePathCandidates } from './contracts';

const EMPTY_ASSETS: ResolvedBookAssets = { images: {}, arabicAudio: {} };
const cache = new Map<string, Promise<Record<number, string>>>();

export const parseChapterNumber = (name: string): number | null => {
  const chapterMatch = name.match(/chapter\s*[-_]?\s*(\d+)/i);
  if (chapterMatch) return Number.parseInt(chapterMatch[1], 10);

  const shortMatch = name.match(/(?:\b|_)ch\s*[-_]?\s*(\d+)/i);
  if (shortMatch) return Number.parseInt(shortMatch[1], 10);

  const cleanedName = name
    .replace(/\b[ab][12]\b/i, '')
    .replace(/^[ab][12]\s*[-_]?\s*/i, '');
  const numericMatch = cleanedName.match(/(\d+)/);
  return numericMatch ? Number.parseInt(numericMatch[1], 10) : null;
};

const loadFirstPopulatedFolder = async ({ paths, kind }: StoragePathCandidates): Promise<Record<number, string>> => {
  const key = `${kind}:${paths.join('|')}`;
  const existing = cache.get(key);
  if (existing) return existing;

  const request = (async () => {
    for (const path of paths) {
      try {
        const result = await listAll(ref(storage, path));
        if (result.items.length === 0) continue;

        const entries = await Promise.all(
          result.items.map(async item => {
            const chapterNumber = parseChapterNumber(item.name);
            if (chapterNumber === null) return null;
            try {
              return [chapterNumber, await getDownloadURL(item)] as const;
            } catch (error) {
              console.error(`Unable to resolve ${kind} asset ${item.fullPath}`, error);
              return null;
            }
          }),
        );

        return Object.fromEntries(entries.filter((entry): entry is readonly [number, string] => entry !== null));
      } catch (error) {
        console.warn(`Storage path unavailable: ${path}`, error);
      }
    }

    return {};
  })();

  cache.set(key, request);
  return request;
};

export const loadBookAssets = async (manifest: BookAssetManifest): Promise<ResolvedBookAssets> => {
  if (!manifest.sharedImages && !manifest.arabicAudio) return EMPTY_ASSETS;

  const [images, arabicAudio] = await Promise.all([
    manifest.sharedImages ? loadFirstPopulatedFolder(manifest.sharedImages) : Promise.resolve({}),
    manifest.arabicAudio ? loadFirstPopulatedFolder(manifest.arabicAudio) : Promise.resolve({}),
  ]);

  return { images, arabicAudio };
};

const applyPageAssets = (
  pages: PageData[],
  images: Record<number, string>,
  audio: Record<number, string> = {},
): PageData[] => pages.map(page => ({
  ...page,
  ...(images[page.id] ? { image: images[page.id] } : {}),
  ...(audio[page.id] ? { audioUrl: audio[page.id] } : {}),
}));

/**
 * Creates derived view models only. Canonical BookData objects and their story text are never mutated.
 */
export const applyResolvedAssets = (pair: BookPair, assets: ResolvedBookAssets): BookPair => {
  const en: BookData = {
    ...pair.en,
    pages: applyPageAssets(pair.en.pages, assets.images),
  };

  const englishImages = Object.fromEntries(en.pages.filter(page => Boolean(page.image)).map(page => [page.id, page.image]));
  const ar: BookData = {
    ...pair.ar,
    pages: applyPageAssets(pair.ar.pages, englishImages, assets.arabicAudio),
  };

  return { en, ar };
};
