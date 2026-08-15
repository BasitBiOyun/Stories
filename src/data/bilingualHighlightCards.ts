import type { BookPair } from '../core/content/contracts';
import { highlightPhraseMatches, normalizeHighlightText } from '../lib/highlightTextMatch';

export type BilingualCardLanguage = 'en' | 'ar';

export type BilingualCardEntry = {
  word: string;
  definition: string;
  language: BilingualCardLanguage;
};

type BilingualCardPair = {
  en: Omit<BilingualCardEntry, 'language'>;
  ar: Omit<BilingualCardEntry, 'language'>;
};

let activePairs: BilingualCardPair[] = [];

const sameVisibleTarget = (
  surface: string,
  canonical: string,
  language: BilingualCardLanguage,
): boolean => {
  const surfaceNormalized = normalizeHighlightText(surface, language);
  const canonicalNormalized = normalizeHighlightText(canonical, language);
  if (!surfaceNormalized || !canonicalNormalized) return false;
  if (surfaceNormalized === canonicalNormalized) return true;
  return highlightPhraseMatches(surface, canonical, language)
    || highlightPhraseMatches(canonical, surface, language);
};

/**
 * Registers the currently active book only. The A2/B1/B2 highlight standards
 * already guarantee that final EN and AR story vocabularies are canonical pairs
 * in the same chapter/index order. This layer only exposes the existing pair to
 * the tooltip; it never translates or invents a counterpart.
 */
export const setActiveBilingualBookPair = (pair: BookPair | null): void => {
  activePairs = [];
  if (!pair) return;

  const arabicStoryPages = new Map(
    pair.ar.pages
      .filter((page) => page.type === 'story')
      .map((page) => [page.id, page] as const),
  );

  pair.en.pages.forEach((englishPage) => {
    if (englishPage.type !== 'story') return;
    const arabicPage = arabicStoryPages.get(englishPage.id);
    if (!arabicPage) return;

    const englishVocabulary = englishPage.vocabulary ?? [];
    const arabicVocabulary = arabicPage.vocabulary ?? [];

    // Fail closed in the UI if a future content regression escapes validation.
    if (englishVocabulary.length !== arabicVocabulary.length) return;

    englishVocabulary.forEach((englishEntry, index) => {
      const arabicEntry = arabicVocabulary[index];
      if (
        !englishEntry.word.trim()
        || !englishEntry.definition?.trim()
        || !arabicEntry?.word.trim()
        || !arabicEntry.definition?.trim()
      ) return;

      activePairs.push({
        en: { word: englishEntry.word, definition: englishEntry.definition },
        ar: { word: arabicEntry.word, definition: arabicEntry.definition },
      });
    });
  });
};

export const getActiveBilingualCounterpart = (
  language: BilingualCardLanguage,
  word: string,
  definition: string,
): BilingualCardEntry | null => {
  const normalizedDefinition = definition.trim();
  if (!normalizedDefinition) return null;

  const candidates = activePairs.filter((candidate) => (
    candidate[language].definition.trim() === normalizedDefinition
  ));
  const normalizedSurface = normalizeHighlightText(word, language);

  // Canonical surface wins. Morphology matching is only a fallback for the
  // actual prose surface (plural, clitic, inflected form, etc.). This prevents
  // a nearby Arabic form with the same learner definition from stealing a pair.
  const exactPair = candidates.find((candidate) => (
    normalizeHighlightText(candidate[language].word, language) === normalizedSurface
  ));
  const pair = exactPair ?? candidates.find((candidate) => (
    sameVisibleTarget(word, candidate[language].word, language)
  ));
  if (!pair) return null;

  if (language === 'ar') {
    return { ...pair.en, language: 'en' };
  }
  return { ...pair.ar, language: 'ar' };
};
