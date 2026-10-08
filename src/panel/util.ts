export type Path = (string | number)[];

export const parsePath = (text: string): Path =>
  text
    .split('.')
    .filter(Boolean)
    .map(part => (/^\d+$/.test(part) ? Number(part) : part));

export const pathText = (path: Path) => path.join('.');

export const getIn = (value: unknown, path: Path): unknown => {
  let current = value;
  for (const key of path) {
    if (current === null || current === undefined) return undefined;
    current = (current as Record<string | number, unknown>)[key];
  }
  return current;
};

/** A copy of `value` with one place changed; the rest is shared, not copied. */
export const setIn = <T>(value: T, path: Path, next: unknown): T => {
  if (path.length === 0) return next as T;
  const [key, ...rest] = path;
  const container = (value ?? (typeof key === 'number' ? [] : {})) as Record<string | number, unknown>;
  const copy = (Array.isArray(container) ? [...container] : { ...container }) as Record<string | number, unknown>;
  const updated = setIn(container[key], rest, next);
  if (updated === undefined && !Array.isArray(copy)) delete copy[key];
  else copy[key] = updated;
  return copy as T;
};

export const bookPath = (edition: string) => `src/content/books/${edition}.json`;
export const guidePath = (edition: string) => `src/content/guides/${edition}.json`;
export const STORIES_PATH = 'src/content/stories.json';
export const ENTITY_CARDS_PATH = 'src/content/entityCards.json';
export const TTS_PATH = { en: 'tts/requests.json', ar: 'tts/arabic_requests.json' } as const;

export const editionOf = (storyId: string, level: string, language: string) => `${storyId}-${level.toLowerCase()}-${language}`;

export const splitEdition = (edition: string) => {
  const [storyId, level, language] = edition.split('-');
  return { storyId, level: level.toUpperCase(), language: language as 'en' | 'ar' };
};

/** What a path in the repository is, in words. */
export const describeFile = (path: string, storyName: (id: string) => string): string => {
  const book = /^src\/content\/(books|guides)\/([a-zA-Z]+)-(\w\d)-(\w\w)\.json$/.exec(path);
  if (book) {
    const [, kind, storyId, level, language] = book;
    return `${storyName(storyId)} · ${level.toUpperCase()} · ${language === 'ar' ? 'Arapça' : 'İngilizce'}${kind === 'guides' ? ' · öğretmen ve öğrenci rehberi' : ''}`;
  }
  if (path === STORIES_PATH) return 'Kitap listesi (adlar, açıklamalar, görünürlük)';
  if (path === ENTITY_CARDS_PATH) return 'Places & People kartları';
  if (path === TTS_PATH.en) return 'İngilizce seslendirme listesi';
  if (path === TTS_PATH.ar) return 'Arapça seslendirme listesi';
  return path;
};

export const plain = (markdown: string) =>
  markdown
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

/** For comparing what the app shows with what the file holds: same letters, no styling. */
export const normalize = (text: string) =>
  plain(text)
    .normalize('NFC')
    .replace(/[ً-ْٰ]/g, '')
    .replace(/[‘’`´]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/…/g, '...')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

export const paragraphs = (content: string) => content.split(/\n\s*\n/);

export const timeAgo = (iso?: string) => {
  if (!iso) return '';
  const seconds = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return 'az önce';
  if (seconds < 3600) return `${Math.round(seconds / 60)} dakika önce`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} saat önce`;
  if (seconds < 86400 * 7) return `${Math.round(seconds / 86400)} gün önce`;
  return new Date(iso).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const wordCount = (text: string) => (text.match(/[\p{L}\p{N}’']+/gu) ?? []).length;

export const clone = <T>(value: T): T => (value === undefined ? value : (JSON.parse(JSON.stringify(value)) as T));
