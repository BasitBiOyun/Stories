import type { PageData } from '../types';
import {
  highlightPhraseOccurs,
  highlightTokenMatches,
  normalizeHighlightText,
  type HighlightLanguage,
} from '../lib/highlightTextMatch';

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

/**
 * Preserve reviewed vocabulary/animated-word choices while ensuring the stored
 * display key is a form that actually occurs in the chapter. This is especially
 * useful in Arabic, where a reviewed lemma may appear in prose with a short
 * clitic or pronoun suffix (for example فضول -> بفضول, أصل -> أصله).
 *
 * Definitions, selection intent, counts and canonical story prose are not
 * changed. Items with no defensible surface-form match are deliberately left
 * untouched so the validator can still report them for manual review.
 */
export const applyHighlightSurfaceForms = (
  pages: PageData[],
  language: HighlightLanguage,
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

  return { ...page, vocabulary, animatedWords };
});
