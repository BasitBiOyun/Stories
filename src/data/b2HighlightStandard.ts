import type { PageData } from '../types';
import {
  highlightPhraseMatches,
  highlightPhraseOccurs,
  highlightTokenMatches,
  normalizeHighlightText,
  type HighlightLanguage,
} from '../lib/highlightTextMatch';

export type B2HighlightLanguage = 'en' | 'ar';
type HighlightText = NonNullable<PageData['vocabulary']>[number];

export interface B2ExplicitHighlightPair {
  id?: string;
  en: HighlightText;
  ar: HighlightText;
}

export interface B2CanonicalHighlightTarget {
  id: string;
  chapterId: number;
  en: HighlightText;
  ar: HighlightText;
}

export interface B2HighlightStandardConfig {
  storyKey: string;
  storyIds: number[];
  glossaryPageIds: [number, number];
  vocabularyPageId?: number;
  /** Chapters whose legacy EN/AR Word Notes were selected independently must
   * provide reviewed same-concept bilingual pairs here. */
  explicitTargets?: Record<number, readonly B2ExplicitHighlightPair[]>;
}

export interface B2HighlightStandardResult {
  targets: Record<number, readonly B2CanonicalHighlightTarget[]>;
  englishPages: PageData[];
  arabicPages: PageData[];
}

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

const fail = (storyKey: string, message: string): never => {
  throw new Error(`[${storyKey} B2 highlight contract] ${message}`);
};

const storyPage = (
  pages: PageData[],
  chapterId: number,
  storyKey: string,
  language: B2HighlightLanguage,
): PageData => {
  const page = pages.find((item) => item.type === 'story' && item.id === chapterId);
  if (!page) fail(storyKey, `Missing ${language.toUpperCase()} Chapter ${chapterId}.`);
  return page;
};

const visibleSurface = (
  page: PageData,
  word: string,
  language: B2HighlightLanguage,
  storyKey: string,
): string => {
  if (!highlightPhraseOccurs(page.content ?? '', word, language)) {
    fail(storyKey, `${language.toUpperCase()} Chapter ${page.id} target “${word}” does not occur in locked story prose.`);
  }
  return findSurfacePhrase(page.content ?? '', word, language) ?? word;
};

const targetId = (chapterId: number, word: string): string => {
  const normalized = normalizeHighlightText(word, 'en') || word.toLowerCase().trim();
  return `ch${chapterId}-${normalized.replace(/\s+/g, '-')}`;
};

const sameVisibleEnglishTarget = (left: string, right: string): boolean => {
  const leftKey = normalizeHighlightText(left, 'en');
  const rightKey = normalizeHighlightText(right, 'en');
  if (!leftKey || !rightKey) return false;
  return leftKey === rightKey || highlightPhraseMatches(left, right, 'en');
};

const glossaryVocabulary = (
  pages: PageData[],
  storyIds: number[],
): NonNullable<PageData['vocabulary']> => storyIds.flatMap((id) => (
  pages.find((page) => page.type === 'story' && page.id === id)?.vocabulary ?? []
)).map((entry) => ({ ...entry }));

const syncDerivedVocabularyPages = (
  pages: PageData[],
  config: B2HighlightStandardConfig,
  language: B2HighlightLanguage,
): PageData[] => {
  const midpoint = Math.ceil(config.storyIds.length / 2);
  const glossaryParts = [
    glossaryVocabulary(pages, config.storyIds.slice(0, midpoint)),
    glossaryVocabulary(pages, config.storyIds.slice(midpoint)),
  ];
  const allHighlights = glossaryVocabulary(pages, config.storyIds);

  return pages.map((page) => {
    const glossaryIndex = config.glossaryPageIds.indexOf(page.id);
    if (glossaryIndex !== -1) {
      return {
        ...page,
        content: language === 'ar'
          ? glossaryIndex === 0
            ? 'جَمِيعُ الْكَلِمَاتِ وَالْعِبَارَاتِ الْمُظَلَّلَةِ فِي النِّصْفِ الْأَوَّلِ مِنَ الْقِصَّةِ لِلْمُرَاجَعَةِ عَلَى مُسْتَوَى B2.'
            : 'جَمِيعُ الْكَلِمَاتِ وَالْعِبَارَاتِ الْمُظَلَّلَةِ فِي النِّصْفِ الثَّانِي مِنَ الْقِصَّةِ لِلْمُرَاجَعَةِ عَلَى مُسْتَوَى B2.'
          : glossaryIndex === 0
            ? 'All highlighted B2 words and phrases from the first half of the story for review.'
            : 'All highlighted B2 words and phrases from the second half of the story for review.',
        vocabulary: glossaryParts[glossaryIndex],
      };
    }

    if (config.vocabularyPageId && page.id === config.vocabularyPageId) {
      return {
        ...page,
        vocabularyPairs: allHighlights.slice(0, 10).map((entry) => ({
          word: entry.word,
          meaning: entry.definition,
        })),
      };
    }

    return page;
  });
};

/**
 * Canonical B2 reader contract:
 * - English owns the learning-target set.
 * - Arabic supplies the exact locked-story surface for the same concept.
 * - `vocabulary` is the only runtime highlight mechanism; legacy animatedWords disappear.
 * - reader-hidden repeated targets are removed from both languages together.
 * - Master Glossary and Vocabulary-in-Context derive from final targets.
 */
export const applyB2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: B2HighlightStandardConfig,
): B2HighlightStandardResult => {
  const seenEnglishKeys = new Set<string>();
  const seenArabicKeys = new Set<string>();
  const targets: Record<number, readonly B2CanonicalHighlightTarget[]> = {};

  for (const chapterId of config.storyIds) {
    const enPage = storyPage(englishPages, chapterId, config.storyKey, 'en');
    const arPage = storyPage(arabicPages, chapterId, config.storyKey, 'ar');
    const explicit = config.explicitTargets?.[chapterId];
    const chapterTargets: B2CanonicalHighlightTarget[] = [];
    const chapterEnglishWords: string[] = [];

    const candidatePairs: B2ExplicitHighlightPair[] = explicit
      ? explicit.map((pair) => ({ ...pair, en: { ...pair.en }, ar: { ...pair.ar } }))
      : (() => {
          const enVocabulary = enPage.vocabulary ?? [];
          const arVocabulary = arPage.vocabulary ?? [];
          if (enVocabulary.length !== arVocabulary.length) {
            fail(
              config.storyKey,
              `Chapter ${chapterId} legacy EN/AR Word Notes cannot be paired safely `
              + `(EN ${enVocabulary.length}, AR ${arVocabulary.length}). Add explicitTargets for this chapter.`,
            );
          }
          return enVocabulary.map((entry, index) => ({
            en: { ...entry },
            ar: { ...arVocabulary[index] },
          }));
        })();

    for (const pair of candidatePairs) {
      if (!pair.en.word.trim() || !pair.en.definition?.trim()) {
        fail(config.storyKey, `English Chapter ${chapterId} contains an empty target or definition.`);
      }
      if (!pair.ar.word.trim() || !pair.ar.definition?.trim()) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} pair for “${pair.en.word}” has an empty target or definition.`);
      }

      const enKey = normalizeHighlightText(pair.en.word, 'en');
      if (!enKey || seenEnglishKeys.has(enKey)) continue;
      if (chapterEnglishWords.some((selected) => sameVisibleEnglishTarget(pair.en.word, selected))) continue;

      const enSurface = visibleSurface(enPage, pair.en.word, 'en', config.storyKey);
      const arSurface = visibleSurface(arPage, pair.ar.word, 'ar', config.storyKey);
      const arKey = normalizeHighlightText(arSurface, 'ar');

      if (arKey && seenArabicKeys.has(arKey)) {
        seenEnglishKeys.add(enKey);
        chapterEnglishWords.push(pair.en.word);
        continue;
      }

      const target: B2CanonicalHighlightTarget = {
        id: pair.id ?? targetId(chapterId, pair.en.word),
        chapterId,
        en: { word: enSurface, definition: pair.en.definition },
        ar: { word: arSurface, definition: pair.ar.definition },
      };
      chapterTargets.push(target);
      seenEnglishKeys.add(enKey);
      if (arKey) seenArabicKeys.add(arKey);
      chapterEnglishWords.push(pair.en.word);
    }

    if (!chapterTargets.length) fail(config.storyKey, `Chapter ${chapterId} has no canonical bilingual B2 highlight targets.`);
    if (chapterTargets.length > 7) {
      fail(config.storyKey, `Chapter ${chapterId} has ${chapterTargets.length} targets; B2 allows at most 7.`);
    }
    targets[chapterId] = chapterTargets;
  }

  const applyLanguage = (pages: PageData[], language: B2HighlightLanguage): PageData[] => {
    const storyIds = new Set(config.storyIds);
    const standardized = pages.map((page) => {
      if (page.type !== 'story' || !storyIds.has(page.id)) return page;
      return {
        ...page,
        vocabulary: (targets[page.id] ?? []).map((target) => ({ ...target[language] })),
        animatedWords: undefined,
      };
    });
    return syncDerivedVocabularyPages(standardized, config, language);
  };

  const result: B2HighlightStandardResult = {
    targets,
    englishPages: applyLanguage(englishPages, 'en'),
    arabicPages: applyLanguage(arabicPages, 'ar'),
  };
  validateB2HighlightStandard(result.englishPages, result.arabicPages, result.targets, config);
  return result;
};

export const validateB2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  targets: Record<number, readonly B2CanonicalHighlightTarget[]>,
  config: B2HighlightStandardConfig,
): void => {
  const errors: string[] = [];
  const record = (message: string): void => { errors.push(message); };
  const seenArabicRuntimeTargets = new Map<string, string>();

  for (const chapterId of config.storyIds) {
    const enPage = englishPages.find((page) => page.type === 'story' && page.id === chapterId);
    const arPage = arabicPages.find((page) => page.type === 'story' && page.id === chapterId);
    if (!enPage || !arPage) {
      record(`Chapter ${chapterId} is missing in one language.`);
      continue;
    }

    const expected = targets[chapterId] ?? [];
    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];
    if (enPage.animatedWords?.length || arPage.animatedWords?.length) record(`Chapter ${chapterId} still contains legacy animatedWords.`);
    if (enVocabulary.length !== expected.length || arVocabulary.length !== expected.length) {
      record(`Chapter ${chapterId} target count mismatch (EN ${enVocabulary.length}, AR ${arVocabulary.length}, canonical ${expected.length}).`);
    }

    expected.forEach((target, index) => {
      const enEntry = enVocabulary[index];
      const arEntry = arVocabulary[index];
      if (!enEntry || !arEntry) {
        record(`Chapter ${chapterId} target ${target.id} is missing at runtime.`);
        return;
      }
      if (!enEntry.definition?.trim() || !arEntry.definition?.trim()) record(`Chapter ${chapterId} target ${target.id} has an empty learner definition.`);
      if (!highlightPhraseOccurs(enPage.content ?? '', enEntry.word, 'en')) record(`English Chapter ${chapterId} target “${enEntry.word}” is not in story prose.`);
      if (!highlightPhraseOccurs(arPage.content ?? '', arEntry.word, 'ar')) record(`Arabic Chapter ${chapterId} target “${arEntry.word}” is not in story prose.`);

      const arKey = normalizeHighlightText(arEntry.word, 'ar');
      const previous = seenArabicRuntimeTargets.get(arKey);
      if (arKey && previous && previous !== target.id) record(`Arabic target “${arEntry.word}” is reused by ${previous} and ${target.id}; the reader would hide one.`);
      if (arKey) seenArabicRuntimeTargets.set(arKey, target.id);
    });
  }

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const halves = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
  config.glossaryPageIds.forEach((pageId, index) => {
    const expectedEn = glossaryVocabulary(englishPages, halves[index]);
    const expectedAr = glossaryVocabulary(arabicPages, halves[index]);
    const actualEn = englishPages.find((page) => page.id === pageId)?.vocabulary ?? [];
    const actualAr = arabicPages.find((page) => page.id === pageId)?.vocabulary ?? [];
    if (actualEn.length !== expectedEn.length || actualAr.length !== expectedAr.length) record(`Glossary page ${pageId} is not synchronized with final story highlights.`);

    expectedEn.forEach((entry, entryIndex) => {
      const actual = actualEn[entryIndex];
      if (!actual || normalizeHighlightText(actual.word, 'en') !== normalizeHighlightText(entry.word, 'en') || actual.definition !== entry.definition) {
        record(`English glossary page ${pageId} diverged from story highlight “${entry.word}”.`);
      }
    });
    expectedAr.forEach((entry, entryIndex) => {
      const actual = actualAr[entryIndex];
      if (!actual || normalizeHighlightText(actual.word, 'ar') !== normalizeHighlightText(entry.word, 'ar') || actual.definition !== entry.definition) {
        record(`Arabic glossary page ${pageId} diverged from a final story highlight.`);
      }
    });
  });

  if (config.vocabularyPageId) {
    const expectedEn = glossaryVocabulary(englishPages, config.storyIds).slice(0, 10);
    const expectedAr = glossaryVocabulary(arabicPages, config.storyIds).slice(0, 10);
    const actualEn = englishPages.find((page) => page.id === config.vocabularyPageId)?.vocabularyPairs ?? [];
    const actualAr = arabicPages.find((page) => page.id === config.vocabularyPageId)?.vocabularyPairs ?? [];
    if (actualEn.length !== expectedEn.length || actualAr.length !== expectedAr.length) record(`Vocabulary page ${config.vocabularyPageId} is not synchronized with final highlights.`);
  }

  if (errors.length) fail(config.storyKey, `${errors.length} error(s):\n- ${errors.join('\n- ')}`);
};
