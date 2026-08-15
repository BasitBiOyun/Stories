import type { BookPair } from '../core/content/contracts';
import { normalizeHighlightText } from '../lib/highlightTextMatch';

export type A2BilingualCardLanguage = 'en' | 'ar';

export type A2BilingualCardEntry = {
  word: string;
  definition: string;
  language: A2BilingualCardLanguage;
};

type A2BilingualCardPair = {
  en: Omit<A2BilingualCardEntry, 'language'>;
  ar: Omit<A2BilingualCardEntry, 'language'>;
};

const activePairs = new Map<string, A2BilingualCardPair>();

const pairKey = (
  language: A2BilingualCardLanguage,
  word: string,
  definition: string,
): string => [
  language,
  normalizeHighlightText(word, language),
  definition.trim(),
].join('\u0000');

/**
 * Registers only the currently loaded A2 book. Story vocabulary is already the
 * validated canonical EN↔AR target set, in the same chapter/index order, so the
 * card layer does not invent or duplicate translations.
 *
 * Passing null clears the registry when a non-A2 book becomes active.
 */
export const setActiveA2BilingualBookPair = (pair: BookPair | null): void => {
  activePairs.clear();
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

    // Never guess across a broken pair. The A2 aggregate validator should make
    // this impossible, but runtime cards fail closed if the contract ever drifts.
    if (englishVocabulary.length !== arabicVocabulary.length) return;

    englishVocabulary.forEach((englishEntry, index) => {
      const arabicEntry = arabicVocabulary[index];
      if (
        !englishEntry.word.trim()
        || !englishEntry.definition?.trim()
        || !arabicEntry?.word.trim()
        || !arabicEntry.definition?.trim()
      ) return;

      const cardPair: A2BilingualCardPair = {
        en: { word: englishEntry.word, definition: englishEntry.definition },
        ar: { word: arabicEntry.word, definition: arabicEntry.definition },
      };

      activePairs.set(
        pairKey('en', englishEntry.word, englishEntry.definition),
        cardPair,
      );
      activePairs.set(
        pairKey('ar', arabicEntry.word, arabicEntry.definition),
        cardPair,
      );
    });
  });
};

export const getActiveA2BilingualCounterpart = (
  language: A2BilingualCardLanguage,
  word: string,
  definition: string,
): A2BilingualCardEntry | null => {
  const pair = activePairs.get(pairKey(language, word, definition));
  if (!pair) return null;

  if (language === 'ar') {
    return { ...pair.en, language: 'en' };
  }
  return { ...pair.ar, language: 'ar' };
};
