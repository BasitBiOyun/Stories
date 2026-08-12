import type { PageData } from '../types';
import {
  highlightPhraseOccurs,
  highlightTokenMatches,
  normalizeHighlightText,
  type HighlightLanguage,
} from '../lib/highlightTextMatch';
import { arabicAnimatedDefinitions } from './fallbackVocab';
import { arabicHighlightDefinitions } from './arabicHighlightDefinitions';

const rawWordTokens = (value: string): string[] => (
  value.match(/[\p{L}\p{N}\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06EDـ’'’-]+/gu) ?? []
);

const findSurfacePhrase = (
  content: string,
  requested: string,
  language: HighlightLanguage,
): string | undefined => {
  const contentWords = rawWordTokens(content);
  const requestedWords = rawWordTokens(requested);
  if (!requestedWords.length) return undefined;

  for (let start = 0; start <= contentWords.length - requestedWords.length; start += 1) {
    const matches = requestedWords.every((requestedWord, offset) => (
      highlightTokenMatches(contentWords[start + offset], requestedWord, language)
    ));
    if (matches) return contentWords.slice(start, start + requestedWords.length).join(' ');
  }
  return undefined;
};

const normalizedArabicDefinitions = new Map<string, string>([
  ...Object.entries(arabicAnimatedDefinitions).map(([word, definition]) => [
    normalizeHighlightText(word, 'ar'),
    definition,
  ] as const),
  ...Object.entries(arabicHighlightDefinitions),
]);

const enrichArabicAnimatedDefinitions = (page: PageData): PageData => {
  if (page.type !== 'story' || !page.animatedWords?.length) return page;

  const vocabulary = [...(page.vocabulary ?? [])];
  const exactVocabularyWords = new Set(
    vocabulary.map((entry) => normalizeHighlightText(entry.word, 'ar'))
  );

  for (const animatedWord of page.animatedWords) {
    const normalized = normalizeHighlightText(animatedWord, 'ar');
    if (!normalized || exactVocabularyWords.has(normalized)) continue;

    const definition = normalizedArabicDefinitions.get(normalized);
    if (!definition?.trim()) continue;

    vocabulary.push({ word: animatedWord, definition });
    exactVocabularyWords.add(normalized);
  }

  return vocabulary.length === (page.vocabulary?.length ?? 0)
    ? page
    : { ...page, vocabulary };
};

/**
 * Preserve reviewed vocabulary/animated-word choices while ensuring the stored
 * display key is a form that actually occurs in the chapter. This is especially
 * useful in Arabic, where a reviewed lemma may appear in prose with a short
 * clitic or pronoun suffix (for example فضول -> بفضول, أصل -> أصله).
 *
 * Definitions, selection intent, counts and canonical story prose are not
 * changed by the surface-form pass. A2 may additionally request definition
 * enrichment: in that mode an animated surface form receives a vocabulary
 * definition only when a reviewed, non-generic definition is already available.
 */
export const applyHighlightSurfaceForms = (
  pages: PageData[],
  language: HighlightLanguage,
  options: { enrichArabicDefinitions?: boolean } = {},
): PageData[] => pages.map((page) => {
  if (page.type !== 'story') return page;
  const content = page.content ?? '';

  const vocabulary = page.vocabulary?.map((entry) => {
    if (!highlightPhraseOccurs(content, entry.word, language)) return entry;
    const surface = findSurfacePhrase(content, entry.word, language);
    if (!surface) return entry;
    return normalizeHighlightText(surface, language) === normalizeHighlightText(entry.word, language)
      ? entry
      : { ...entry, word: surface };
  });

  const animatedWords = page.animatedWords?.map((word) => {
    if (!highlightPhraseOccurs(content, word, language)) return word;
    const surface = findSurfacePhrase(content, word, language);
    if (!surface) return word;
    return normalizeHighlightText(surface, language) === normalizeHighlightText(word, language)
      ? word
      : surface;
  });

  const surfaced = { ...page, vocabulary, animatedWords };
  return language === 'ar' && options.enrichArabicDefinitions
    ? enrichArabicAnimatedDefinitions(surfaced)
    : surfaced;
});
