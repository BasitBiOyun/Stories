import type { BookData, PageData } from '../../types';
import type { BookPair } from '../content/contracts';
import type { AssetKind, BookAssetManifest, ResolvedBookAssets, StoragePathCandidates } from './contracts';

export const EMPTY_RESOLVED_ASSETS: ResolvedBookAssets = { images: {}, englishAudio: {}, arabicAudio: {} };
const cache = new Map<string, Promise<Record<number, string>>>();

const IMAGE_EXTENSION = /\.(?:png|jpe?g|webp|avif|gif)$/i;
const AUDIO_EXTENSION = /\.(?:mp3|m4a|aac|wav|ogg|opus)$/i;

const extensionMatchesKind = (name: string, kind: AssetKind) =>
  kind === 'image' ? IMAGE_EXTENSION.test(name) : AUDIO_EXTENSION.test(name);

export const parseChapterNumber = (name: string): number | null => {
  const decoded = decodeURIComponent(name);
  const chapterMatch = decoded.match(/chapter\s*[-_ ]?\s*(\d+)/i);
  if (chapterMatch) return Number.parseInt(chapterMatch[1], 10);

  const shortMatch = decoded.match(/(?:\b|_)ch\s*[-_ ]?\s*(\d+)/i);
  if (shortMatch) return Number.parseInt(shortMatch[1], 10);

  const cleanedName = decoded
    .replace(/\b[ab][12]\b/i, '')
    .replace(/^[ab][12]\s*[-_ ]?\s*/i, '');
  const numericMatch = cleanedName.match(/(\d+)/);
  return numericMatch ? Number.parseInt(numericMatch[1], 10) : null;
};

/**
 * Candidate folders are merged rather than stopping at the first populated one.
 * Earlier paths have priority, while later legacy folders may fill missing chapters.
 */
const loadMergedFolders = async ({ paths, kind }: StoragePathCandidates): Promise<Record<number, string>> => {
  const key = `${kind}:${paths.join('|')}`;
  const existing = cache.get(key);
  if (existing) return existing;

  const request = (async () => {
    const [{ getDownloadURL, listAll, ref }, { storage }] = await Promise.all([
      import('firebase/storage'),
      import('../../lib/firebase'),
    ]);
    const resolved: Record<number, string> = {};

    for (const path of paths) {
      try {
        const result = await listAll(ref(storage, path));
        const items = [...result.items]
          .filter(item => extensionMatchesKind(item.name, kind))
          .sort((left, right) => left.name.localeCompare(right.name));

        for (const item of items) {
          const chapterNumber = parseChapterNumber(item.name);
          if (chapterNumber === null || resolved[chapterNumber]) continue;
          try {
            resolved[chapterNumber] = await getDownloadURL(item);
          } catch (error) {
            console.error(`Unable to resolve ${kind} asset ${item.fullPath}`, error);
          }
        }
      } catch (error) {
        console.warn(`Storage path unavailable: ${path}`, error);
      }
    }

    return resolved;
  })();

  cache.set(key, request);
  return request;
};

export const loadBookAssets = async (manifest: BookAssetManifest): Promise<ResolvedBookAssets> => {
  if (!manifest.sharedImages && !manifest.englishAudio && !manifest.arabicAudio) return EMPTY_RESOLVED_ASSETS;

  const [images, englishAudio, arabicAudio] = await Promise.all([
    manifest.sharedImages ? loadMergedFolders(manifest.sharedImages) : Promise.resolve({}),
    manifest.englishAudio ? loadMergedFolders(manifest.englishAudio) : Promise.resolve({}),
    manifest.arabicAudio ? loadMergedFolders(manifest.arabicAudio) : Promise.resolve({}),
  ]);

  return { images, englishAudio, arabicAudio };
};

const decodedPath = (value: string) => {
  try {
    return decodeURIComponent(value).toLowerCase();
  } catch {
    return value.toLowerCase();
  }
};

const levelFromAssetUrl = (value?: string): 'a2' | 'b1' | 'b2' | null => {
  if (!value) return null;
  const match = decodedPath(value).match(/(?:^|[\s/_-])(a2|b1|b2)(?=$|[\s/_.-])/i);
  return match ? match[1].toLowerCase() as 'a2' | 'b1' | 'b2' : null;
};

export const isValidImageUrl = (value?: string): boolean => {
  if (!value) return false;
  const decoded = decodedPath(value);
  if (decoded.includes('picsum.photos')) return false;
  return IMAGE_EXTENSION.test(decoded.split('?')[0])
    || /(?:\/|%2f)images?(?:\/|%2f)/i.test(value);
};

export const isValidAudioUrl = (value?: string): boolean => {
  if (!value) return false;
  const decoded = decodedPath(value);
  if (/\.(?:png|jpe?g|webp|avif|gif)(?:\?|$)/i.test(decoded)) return false;
  return AUDIO_EXTENSION.test(decoded.split('?')[0])
    || /(?:\/|%2f)audio(?:\/|%2f)/i.test(value) && !/\.(?:png|jpe?g|webp|avif|gif)(?:\?|$)/i.test(decoded);
};

const removeUnusedSyncMetadata = (page: PageData): PageData => {
  const { syncPoints: _syncPoints, timedChunks: _timedChunks, ...rest } = page;
  return rest;
};

const reconciledImage = (
  pageId: number,
  englishPage: PageData | undefined,
  arabicPage: PageData | undefined,
  images: Record<number, string>,
): string => {
  if (isValidImageUrl(images[pageId])) return images[pageId];
  if (isValidImageUrl(englishPage?.image)) return englishPage!.image;
  if (isValidImageUrl(arabicPage?.image)) return arabicPage!.image;
  return '';
};

const reconciledAudio = (
  pageId: number,
  source: PageData | undefined,
  resolved: Record<number, string>,
  forbiddenUrl = '',
): string => {
  if (isValidAudioUrl(resolved[pageId])) return resolved[pageId];

  const fallback = isValidAudioUrl(source?.audioUrl) ? source!.audioUrl! : '';
  if (!fallback) return '';
  if (forbiddenUrl && fallback === forbiddenUrl) return '';

  // A legacy fallback must never cross CEFR levels. This protects books whose
  // old Arabic page data still points at an A2 English recording while the
  // Storage resolver is expected to supply the correct B1/B2 narration.
  const fallbackLevel = levelFromAssetUrl(fallback);
  const referenceLevel = levelFromAssetUrl(forbiddenUrl);
  if (fallbackLevel && referenceLevel && fallbackLevel !== referenceLevel) return '';

  return fallback;
};

const reconcilePagePair = (
  englishPage: PageData,
  arabicPage: PageData | undefined,
  assets: ResolvedBookAssets,
): { english: PageData; arabic?: PageData } => {
  const isStory = englishPage.type === 'story' && arabicPage?.type === 'story';
  if (!isStory) {
    const english = {
      ...removeUnusedSyncMetadata(englishPage),
      image: isValidImageUrl(englishPage.image) ? englishPage.image : '',
      audioUrl: isValidAudioUrl(englishPage.audioUrl) ? englishPage.audioUrl : '',
    };
    if (!arabicPage) return { english };
    const arabic = {
      ...removeUnusedSyncMetadata(arabicPage),
      image: isValidImageUrl(arabicPage.image) ? arabicPage.image : '',
      audioUrl: isValidAudioUrl(arabicPage.audioUrl) ? arabicPage.audioUrl : '',
    };
    return { english, arabic };
  }

  const image = reconciledImage(englishPage.id, englishPage, arabicPage, assets.images);
  const englishAudio = reconciledAudio(englishPage.id, englishPage, assets.englishAudio);
  const arabicAudio = reconciledAudio(englishPage.id, arabicPage, assets.arabicAudio, englishAudio);

  return {
    english: {
      ...removeUnusedSyncMetadata(englishPage),
      image,
      audioUrl: englishAudio,
    },
    arabic: {
      ...removeUnusedSyncMetadata(arabicPage),
      image,
      audioUrl: arabicAudio,
    },
  };
};

/**
 * Central media reconciliation. Story prose is untouched. For every chapter:
 * - one reviewed/resolved image is shared by EN and AR,
 * - EN and AR narration are resolved independently,
 * - an image can never be accepted as audio,
 * - the same narration URL is never used for both languages,
 * - legacy sync metadata is removed because the UI no longer uses it for highlighting.
 */
export const applyResolvedAssets = (pair: BookPair, assets: ResolvedBookAssets): BookPair => {
  const arabicById = new Map(pair.ar.pages.map(page => [page.id, page]));
  const paired = pair.en.pages.map(englishPage => reconcilePagePair(
    englishPage,
    arabicById.get(englishPage.id),
    assets,
  ));
  const englishPages = paired.map(item => item.english);
  const arabicFromPairs = new Map(paired.flatMap(item => item.arabic ? [[item.arabic.id, item.arabic] as const] : []));
  const englishById = new Map(englishPages.map(page => [page.id, page]));

  const arabicPages = pair.ar.pages.map(arabicPage => {
    const pairedPage = arabicFromPairs.get(arabicPage.id);
    if (pairedPage) return pairedPage;

    const englishPage = englishById.get(arabicPage.id);
    if (englishPage?.type === 'story' && arabicPage.type === 'story') {
      const image = reconciledImage(arabicPage.id, englishPage, arabicPage, assets.images);
      const englishAudio = englishPage.audioUrl || '';
      return {
        ...removeUnusedSyncMetadata(arabicPage),
        image,
        audioUrl: reconciledAudio(arabicPage.id, arabicPage, assets.arabicAudio, englishAudio),
      };
    }

    return {
      ...removeUnusedSyncMetadata(arabicPage),
      image: isValidImageUrl(arabicPage.image) ? arabicPage.image : '',
      audioUrl: isValidAudioUrl(arabicPage.audioUrl) ? arabicPage.audioUrl : '',
    };
  });

  const en: BookData = { ...pair.en, pages: englishPages };
  const ar: BookData = { ...pair.ar, pages: arabicPages };
  return { en, ar };
};
