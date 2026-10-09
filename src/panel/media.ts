import { initializeApp } from '@firebase/app';
import { getDownloadURL, getStorage, listAll, ref } from '@firebase/storage';
import { api } from './api';
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

interface FolderFile {
  path: string;
  name: string;
  url: string;
}

/**
 * The files in some folders. The panel's server lists them in one request, with their addresses
 * (it keeps the answer for a minute); without a server the browser asks Storage itself.
 */
const folderCache = new Map<string, Promise<FolderFile[] | null>>();
const listFolders = (folders: string[]): Promise<(FolderFile[] | null)[]> => {
  const missing = folders.filter(folder => !folderCache.has(folder));
  if (missing.length) {
    const asked = api
      .mediaFolders(missing)
      .then(result => result.folders)
      .catch(async () => {
        const fromBrowser: Record<string, FolderFile[] | null> = {};
        await Promise.all(
          missing.map(async folder => {
            try {
              const listing = await listAll(ref(bucket(), folder));
              fromBrowser[folder] = await Promise.all(listing.items.map(async item => ({ path: item.fullPath, name: item.name, url: await getDownloadURL(item).catch(() => '') })));
            } catch {
              fromBrowser[folder] = null;
            }
          }),
        );
        return fromBrowser;
      });
    for (const folder of missing) {
      const one = asked.then(all => all[folder] ?? null);
      folderCache.set(folder, one);
      one.catch(() => folderCache.delete(folder));
    }
  }
  return Promise.all(folders.map(folder => folderCache.get(folder)!));
};

export const chapterFiles = (storyId: string, level: string, kind: MediaKind): Promise<Record<number, ChapterFile>> => {
  const key = `${storyId}:${level}:${kind}`;
  const cached = cache.get(key);
  if (cached) return cached;
  const request = (async () => {
    const folders = manifestFolders(storyId, level, kind);
    const listings = await listFolders(folders);
    // A folder that does not exist lists as empty; null means it could not be read at all.
    if (listings.length > 0 && listings.every(listing => listing === null)) throw new Error('Storage could not be read');
    const found: Record<number, ChapterFile> = {};
    for (const listing of listings) {
      const items = (listing ?? []).filter(item => EXTENSIONS[kind].test(item.name)).sort((a, b) => a.name.localeCompare(b.name));
      for (const item of items) {
        const chapter = parseChapterNumber(item.name);
        // Earlier folders win, as in the app.
        if (chapter !== null && !found[chapter]) found[chapter] = { chapter, path: item.path, url: item.url, name: item.name };
      }
    }
    return found;
  })();
  cache.set(key, request);
  request.catch(() => cache.delete(key));
  return request;
};

export const forgetChapterFiles = () => {
  cache.clear();
  folderCache.clear();
};

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
