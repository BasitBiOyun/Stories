// The content panel reads the book files over the network, so they are copied next to it, with
// two small files made from them: a summary of every book (for the panel's home page and book
// list) and a search index (for "search everything"). The server only sends /content/ to the
// preview link or to a signed-in team member.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { PageData } from '../../src/types';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const out = `${root}/dist/content`;
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(`${root}/src/content/books`, `${out}/books`, { recursive: true });
cpSync(`${root}/src/content/guides`, `${out}/guides`, { recursive: true });
for (const file of ['stories.json', 'bookCatalog.json', 'entityCards.json']) {
  try {
    cpSync(`${root}/src/content/${file}`, `${out}/${file}`);
  } catch {
    /* optional file */
  }
}
mkdirSync(`${out}/tts`, { recursive: true });
cpSync(`${root}/tts/requests.json`, `${out}/tts/requests.json`);
cpSync(`${root}/tts/arabic_requests.json`, `${out}/tts/arabic_requests.json`);

interface EditionFile {
  storyId: string;
  level: string;
  language: 'en' | 'ar';
  collection: string;
  book: { title: string; pages: PageData[] };
}

interface NarrationRequest {
  id: string;
  storagePath: string;
  chapterNumber?: number;
  narrationText: string;
}

const readJson = <T>(path: string): T => JSON.parse(readFileSync(path, 'utf8')) as T;
const narration = [
  ...readJson<{ requests: NarrationRequest[] }>(`${root}/tts/requests.json`).requests.map(item => ({ ...item, language: 'en' })),
  ...readJson<{ requests: NarrationRequest[] }>(`${root}/tts/arabic_requests.json`).requests.map(item => ({ ...item, language: 'ar' })),
];

/** The Storage path inside a Firebase download address. */
const storagePath = (url?: string): string | null => {
  const match = /\/o\/([^?]+)/.exec(url ?? '');
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
};

const words = (text: string) => (text.match(/[\p{L}\p{N}’']+/gu) ?? []).length;
const isEntity = (definition?: string) => String(definition ?? '').startsWith('__historical_entity__:');

/**
 * Whether a chapter's recording was made from its current text: the newest narration request for
 * the same Storage file holds the text it was made from. Older recordings made before the queue
 * existed are "unknown", not wrong.
 */
const audioState = (page: PageData, language: 'en' | 'ar'): 'current' | 'stale' | 'unknown' | 'none' => {
  const path = storagePath(page.audioUrl);
  if (!path) return 'none';
  const requests = narration.filter(item => item.language === language && item.storagePath === path);
  const latest = requests[requests.length - 1];
  if (!latest) return 'unknown';
  return latest.narrationText === `${page.title}\n\n${page.content}` ? 'current' : 'stale';
};

const editions = [];
const search: [number, number, string, string][] = [];
const files = readdirSync(`${root}/src/content/books`).filter(name => name.endsWith('.json')).sort();

const collect = (value: unknown, path: string, add: (path: string, text: string) => void) => {
  if (typeof value === 'string') {
    if (value.trim() && !value.startsWith('http') && !value.startsWith('__historical_entity__')) add(path, value);
    return;
  }
  if (Array.isArray(value)) value.forEach((item, index) => collect(item, `${path}.${index}`, add));
  else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      if (['id', 'type', 'image', 'audioUrl', 'syncPoints', 'timedChunks', 'map', 'entityBookKey'].includes(key)) continue;
      collect(item, `${path}.${key}`, add);
    }
  }
};

for (const name of files) {
  const edition = name.replace(/\.json$/, '');
  const file = readJson<EditionFile>(`${root}/src/content/books/${name}`);
  const index = editions.length;
  const pages = file.book.pages.map((page, pageIndex) => {
    collect({ ...page, content: undefined }, `pages.${pageIndex}`, (path, text) => search.push([index, page.id, path, text.slice(0, 200)]));
    (page.content ?? '').split(/\n\s*\n/).forEach((paragraph, paragraphIndex) => {
      if (paragraph.trim()) search.push([index, page.id, `pages.${pageIndex}.content#${paragraphIndex}`, paragraph.slice(0, 200)]);
    });
    const vocabulary = page.vocabulary ?? [];
    return {
      id: page.id,
      type: page.type,
      title: page.title,
      words: page.type === 'story' ? words(page.content ?? '') : 0,
      wordNotes: vocabulary.filter(item => !isEntity(item.definition)).length,
      places: vocabulary.filter(item => isEntity(item.definition)).length,
      hotspots: page.hotspots?.length ?? 0,
      quick: page.exercises?.length ?? 0,
      focus: page.languageFocusExercises?.length ?? 0,
      group: Boolean(page.groupTask),
      beforeYouRead: Boolean(page.beforeYouRead),
      iCan: page.iCan?.length ?? 0,
      image: page.image ?? '',
      audio: page.type === 'story' ? audioState(page, file.language) : 'none',
      audioPath: storagePath(page.audioUrl),
    };
  });
  editions.push({
    edition,
    storyId: file.storyId,
    level: file.level,
    language: file.language,
    collection: file.collection,
    title: file.book.title,
    pages,
  });
}

writeFileSync(`${out}/panel-summary.json`, JSON.stringify({ builtAt: new Date().toISOString(), editions }));
writeFileSync(`${out}/search-index.json`, JSON.stringify({ editions: editions.map(item => item.edition), entries: search }));
console.log(`[panel] book files, summary (${editions.length} editions) and search index (${search.length} texts) written to dist/content`);
