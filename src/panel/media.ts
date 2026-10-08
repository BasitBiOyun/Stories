import { initializeApp } from '@firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from '@firebase/storage';
import { firebaseConfig } from '../lib/firebaseConfig';
import { getStorageManifest } from '../core/storage/storageManifests';
import { parseChapterNumber } from '../core/storage/storageAssetLoader';
import type { Level } from '../types';
import type { StoryId } from '../core/content/contracts';

/**
 * Which file in Storage the app shows for each chapter. The app looks through a book's folders
 * (src/core/storage/storageManifests.ts) and takes the first file whose name carries the chapter
 * number; the panel does the same, so a new picture replaces exactly the file the app shows.
 */

export interface ChapterFile {
  chapter: number;
  path: string;
  url: string;
  name: string;
}

let storage: ReturnType<typeof getStorage> | null = null;
const bucket = () => (storage ??= getStorage(initializeApp(firebaseConfig, 'panel-media')));

const cache = new Map<string, Promise<Record<number, ChapterFile>>>();

export type MediaKind = 'image' | 'englishAudio' | 'arabicAudio';

const EXTENSIONS: Record<MediaKind, RegExp> = {
  image: /\.(png|jpe?g|webp|avif|gif)$/i,
  englishAudio: /\.(mp3|m4a|aac|wav|ogg|opus)$/i,
  arabicAudio: /\.(mp3|m4a|aac|wav|ogg|opus)$/i,
};

export const manifestFolders = (storyId: string, level: string, kind: MediaKind): string[] => {
  const manifest = getStorageManifest(storyId as StoryId, level.toUpperCase() as Level);
  const entry = kind === 'image' ? manifest.sharedImages : kind === 'englishAudio' ? manifest.englishAudio : manifest.arabicAudio;
  return [...(entry?.paths ?? [])];
};

export const chapterFiles = (storyId: string, level: string, kind: MediaKind): Promise<Record<number, ChapterFile>> => {
  const key = `${storyId}:${level}:${kind}`;
  const cached = cache.get(key);
  if (cached) return cached;
  const request = (async () => {
    const found: Record<number, ChapterFile> = {};
    for (const folder of manifestFolders(storyId, level, kind)) {
      try {
        const result = await listAll(ref(bucket(), folder));
        const items = result.items.filter(item => EXTENSIONS[kind].test(item.name)).sort((a, b) => a.name.localeCompare(b.name));
        for (const item of items) {
          const chapter = parseChapterNumber(item.name);
          if (chapter === null || found[chapter]) continue;
          found[chapter] = { chapter, path: item.fullPath, url: await getDownloadURL(item).catch(() => ''), name: item.name };
        }
      } catch {
        // A folder that does not exist is simply skipped, as the app does.
      }
    }
    return found;
  })();
  cache.set(key, request);
  request.catch(() => cache.delete(key));
  return request;
};

export const forgetChapterFiles = () => cache.clear();

/** Where a new file for a chapter goes when the book has none yet: the first folder, a clear name. */
export const newChapterPath = (storyId: string, level: string, kind: MediaKind, chapter: number, extension: string) => {
  const folder = manifestFolders(storyId, level, kind)[0] ?? `${storyId}/${level.toLowerCase()}/${kind === 'image' ? 'images' : 'audio'}`;
  const base = kind === 'image' ? `${storyId}_${level.toLowerCase()}_ch${chapter}` : `chapter ${chapter}`;
  return `${folder}/${base}.${extension}`;
};

/** The Storage path inside a Firebase download address. */
export const storagePathOf = (url?: string): string | null => {
  const match = /\/o\/([^?]+)/.exec(url ?? '');
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
};

/** A smaller copy of a Storage picture, made by the server (deploy/server.mjs, /media-image). */
export const thumb = (url: string, width = 480) =>
  url.startsWith('https://firebasestorage.googleapis.com/') ? `/media-image?w=${width}&src=${encodeURIComponent(url)}` : url;
