import type { PageData } from '../types';

const stripBoldMarkers = (value: string): string => value.replaceAll('**', '');

const stripValue = <T>(value: T): T => {
  if (typeof value === 'string') return stripBoldMarkers(value) as T;
  if (Array.isArray(value)) return value.map(item => stripValue(item)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, stripValue(item)]),
    ) as T;
  }
  return value;
};

/**
 * Mechanical formatting cleanup for data rendered as plain React text.
 * Removes only unsupported Markdown bold markers (`**`); words, punctuation,
 * POEM markers, ids, coordinates, media and timing values remain unchanged.
 */
export const stripUnsupportedBoldMarkdown = (pages: PageData[]): PageData[] => (
  pages.map(page => stripValue(page))
);
