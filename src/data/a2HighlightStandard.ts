import type { PageData } from '../types';
import { highlightPhraseMatches, highlightPhraseOccurs, normalizeHighlightText } from '../lib/highlightTextMatch';
import { fallbackDefinitions, arabicAnimatedDefinitions } from './fallbackVocab';
import { arabicHighlightDefinitions } from './arabicHighlightDefinitions';

export type A2HighlightLanguage = 'en' | 'ar';

type HighlightText = NonNullable<PageData['vocabulary']>[number];

export interface A2CanonicalHighlightTarget {
  id: string;
  chapterId: number;
  en: HighlightText;
  ar: HighlightText;
}

export type A2ArabicHighlightOverride = {
  word: string;
  definition?: string;
};

export type A2ArabicHighlightOverrides = Record<
  number,
  Record<string, string | A2ArabicHighlightOverride>
>;

export interface A2HighlightStandardConfig {
  storyKey: string;
  storyIds: number[];
  glossaryPageIds: [number, number];
  arabicOverrides?: A2ArabicHighlightOverrides;
}

export interface A2HighlightStandardResult {
  targets: Record<number, readonly A2CanonicalHighlightTarget[]>;
  englishPages: PageData[];
  arabicPages: PageData[];
}

const PENDING_ARABIC_DEFINITION = '__PENDING_REVIEWED_ARABIC_DEFINITION__';

const arabicFallbackDefinitions = new Map<string, string>([
  ...Object.entries(arabicAnimatedDefinitions).map(([word, definition]) => [
    normalizeHighlightText(word, 'ar'),
    definition,
  ] as const),
  ...Object.entries(arabicHighlightDefinitions),
]);

const englishFallbackDefinition = (word: string): string | undefined => {
  const key = word.toLowerCase().trim();
  return fallbackDefinitions[key]
    ?? Object.entries(fallbackDefinitions).find(([candidate]) => (
      normalizeHighlightText(candidate, 'en') === normalizeHighlightText(word, 'en')
    ))?.[1];
};

const arabicFallbackDefinition = (word: string): string | undefined => (
  arabicFallbackDefinitions.get(normalizeHighlightText(word, 'ar'))
);

const fail = (storyKey: string, message: string): never => {
  throw new Error(`[${storyKey} A2 highlight contract] ${message}`);
};

const storyPage = (
  pages: PageData[],
  chapterId: number,
  storyKey: string,
  language: A2HighlightLanguage,
): PageData => {
  const page = pages.find((item) => item.type === 'story' && item.id === chapterId);
  if (!page) fail(storyKey, `Missing ${language.toUpperCase()} Chapter ${chapterId}.`);
  return page;
};

const overrideFor = (
  config: A2HighlightStandardConfig,
  chapterId: number,
  englishWord: string,
): A2ArabicHighlightOverride | undefined => {
  const chapterOverrides = config.arabicOverrides?.[chapterId];
  if (!chapterOverrides) return undefined;
  const normalized = normalizeHighlightText(englishWord, 'en');
  const match = Object.entries(chapterOverrides).find(([candidate]) => (
    normalizeHighlightText(candidate, 'en') === normalized
  ));
  if (!match) return undefined;
  return typeof match[1] === 'string' ? { word: match[1] } : match[1];
};

const resolveArabicAnimatedDefinition = (
  word: string,
  page: PageData,
  explicit?: string,
): string | undefined => {
  if (explicit?.trim()) return explicit;
  const direct = arabicFallbackDefinition(word);
  if (direct?.trim()) return direct;
  const sameWord = page.vocabulary?.find((entry) => (
    normalizeHighlightText(entry.word, 'ar') === normalizeHighlightText(word, 'ar')
  ));
  return sameWord?.definition?.trim() ? sameWord.definition : undefined;
};

const targetId = (chapterId: number, word: string): string => {
  const normalized = normalizeHighlightText(word, 'en') || word.toLowerCase().trim();
  const slug = normalized.replace(/\s+/g, '-');
  return `ch${chapterId}-${slug}`;
};

const glossaryVocabulary = (
  pages: PageData[],
  storyIds: number[],
): NonNullable<PageData['vocabulary']> => storyIds.flatMap((id) => (
  pages.find((page) => page.type === 'story' && page.id === id)?.vocabulary ?? []
)).map((entry) => ({ ...entry }));

const isSameVisibleEnglishTarget = (surface: string, selected: string): boolean => {
  const surfaceNormalized = normalizeHighlightText(surface, 'en');
  const selectedNormalized = normalizeHighlightText(selected, 'en');
  if (!surfaceNormalized || !selectedNormalized) return false;
  if (surfaceNormalized === selectedNormalized) return true;

  // StoryPage lets a singular vocabulary target highlight its short inflected
  // surface form on the same page (idol/idols, camel/camels, rope/ropes, etc.).
  return highlightPhraseMatches(surface, selected, 'en');
};

/**
 * Rebuild glossary pages from the final reader-visible story highlights.
 * Run this after source/surface locks so the glossary always mirrors the exact
 * word forms and definitions that the learner can click in the story.
 */
export const syncA2GlossariesFromStoryHighlights = (
  pages: PageData[],
  config: Pick<A2HighlightStandardConfig, 'storyIds' | 'glossaryPageIds'>,
  language: A2HighlightLanguage,
): PageData[] => {
  const midpoint = Math.ceil(config.storyIds.length / 2);
  const glossaries = [
    glossaryVocabulary(pages, config.storyIds.slice(0, midpoint)),
    glossaryVocabulary(pages, config.storyIds.slice(midpoint)),
  ];

  return pages.map((page) => {
    const glossaryIndex = config.glossaryPageIds.indexOf(page.id);
    if (glossaryIndex === -1) return page;
    return {
      ...page,
      content: language === 'ar'
        ? glossaryIndex === 0
          ? 'جَمِيعُ الْكَلِمَاتِ الْمُظَلَّلَةِ فِي النِّصْفِ الْأَوَّلِ مِنَ الْقِصَّةِ لِلْمُرَاجَعَةِ.'
          : 'جَمِيعُ الْكَلِمَاتِ الْمُظَلَّلَةِ فِي النِّصْفِ الثَّانِي مِنَ الْقِصَّةِ لِلْمُرَاجَعَةِ.'
        : glossaryIndex === 0
          ? 'All highlighted words from the first half of the story for review.'
          : 'All highlighted words from the second half of the story for review.',
      vocabulary: glossaries[glossaryIndex],
    };
  });
};

/**
 * Consolidates the currently configured English A2 reader highlights into one
 * bilingual canonical target set. English is the only selection authority.
 * Arabic contributes only the same target's surface form and learner definition.
 *
 * Legacy page.vocabulary / page.animatedWords are treated only as migration input.
 * The returned story pages contain one runtime source: page.vocabulary.
 */
export const applyA2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2HighlightStandardConfig,
): A2HighlightStandardResult => {
  // StoryPage suppresses an exact configured word once it appeared in an earlier
  // page, while inflection matching happens only among candidates on the current
  // page. Mirror those two rules separately here.
  const seenEnglishKeys = new Set<string>();
  const targets: Record<number, readonly A2CanonicalHighlightTarget[]> = {};

  for (const chapterId of config.storyIds) {
    const enPage = storyPage(englishPages, chapterId, config.storyKey, 'en');
    const arPage = storyPage(arabicPages, chapterId, config.storyKey, 'ar');
    const chapterTargets: A2CanonicalHighlightTarget[] = [];
    const chapterSelectedWords: string[] = [];
    const alreadyCoveredOnChapter = (word: string): boolean => (
      chapterSelectedWords.some((selected) => isSameVisibleEnglishTarget(word, selected))
    );
    const remember = (word: string): void => {
      const key = normalizeHighlightText(word, 'en');
      if (key) seenEnglishKeys.add(key);
      chapterSelectedWords.push(word);
    };

    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    enVocabulary.forEach((entry, index) => {
      const key = normalizeHighlightText(entry.word, 'en');
      if (!key || seenEnglishKeys.has(key) || alreadyCoveredOnChapter(entry.word)) return;
      const explicit = overrideFor(config, chapterId, entry.word);
      const arEntry = arVocabulary[index];
      if (!explicit && !arEntry) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} has no vocabulary pair for English target “${entry.word}”.`);
      }
      const arWord = explicit?.word ?? arEntry!.word;
      // Some legacy Arabic migration inputs have a correct surface form but no
      // learner definition. Do not fail before the reviewed definition lock gets
      // a chance to bind the canonical English target to its vocalized Arabic
      // definition. The sentinel deliberately has no Arabic diacritics, so the
      // final Arabic definition contract will still fail if review coverage is
      // actually missing.
      const arDefinition = explicit?.definition ?? arEntry?.definition ?? PENDING_ARABIC_DEFINITION;
      chapterTargets.push({
        id: targetId(chapterId, entry.word),
        chapterId,
        en: { ...entry },
        ar: { word: arWord, definition: arDefinition },
      });
      remember(entry.word);
    });

    const enAnimated = enPage.animatedWords ?? [];
    const arAnimated = arPage.animatedWords ?? [];

    enAnimated.forEach((word, index) => {
      const key = normalizeHighlightText(word, 'en');
      if (!key || seenEnglishKeys.has(key) || alreadyCoveredOnChapter(word)) return;

      const explicit = overrideFor(config, chapterId, word);
      const arWord = explicit?.word ?? arAnimated[index];
      if (!arWord) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} has no pair for English highlight “${word}”.`);
      }

      const enDefinition = englishFallbackDefinition(word);
      if (!enDefinition?.trim()) {
        fail(config.storyKey, `English Chapter ${chapterId} highlight “${word}” has no learner definition.`);
      }

      const arDefinition = resolveArabicAnimatedDefinition(arWord, arPage, explicit?.definition)
        ?? PENDING_ARABIC_DEFINITION;

      chapterTargets.push({
        id: targetId(chapterId, word),
        chapterId,
        en: { word, definition: enDefinition },
        ar: { word: arWord, definition: arDefinition },
      });
      remember(word);
    });

    targets[chapterId] = chapterTargets;
  }

  const applyLanguage = (pages: PageData[], language: A2HighlightLanguage): PageData[] => {
    const storyIds = new Set(config.storyIds);
    const standardized = pages.map((page) => {
      if (page.type !== 'story' || !storyIds.has(page.id)) return page;
      return {
        ...page,
        vocabulary: (targets[page.id] ?? []).map((target) => ({ ...target[language] })),
        animatedWords: undefined,
      };
    });
    return syncA2GlossariesFromStoryHighlights(standardized, config, language);
  };

  return {
    targets,
    englishPages: applyLanguage(englishPages, 'en'),
    arabicPages: applyLanguage(arabicPages, 'ar'),
  };
};

export const validateA2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  targets: Record<number, readonly A2CanonicalHighlightTarget[]>,
  config: A2HighlightStandardConfig,
): void => {
  for (const chapterId of config.storyIds) {
    const enPage = storyPage(englishPages, chapterId, config.storyKey, 'en');
    const arPage = storyPage(arabicPages, chapterId, config.storyKey, 'ar');
    const expected = targets[chapterId] ?? [];
    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    if (enPage.animatedWords?.length || arPage.animatedWords?.length) {
      fail(config.storyKey, `Chapter ${chapterId} still has legacy animatedWords after standardization.`);
    }
    if (enVocabulary.length !== expected.length || arVocabulary.length !== expected.length) {
      fail(config.storyKey, `Chapter ${chapterId} EN/AR highlight counts diverged from the canonical target count.`);
    }

    expected.forEach((target, index) => {
      const enEntry = enVocabulary[index];
      const arEntry = arVocabulary[index];
      if (!enEntry?.definition?.trim() || !arEntry?.definition?.trim()) {
        fail(config.storyKey, `Chapter ${chapterId} target ${target.id} has an empty definition.`);
      }
      if (!highlightPhraseOccurs(enPage.content ?? '', enEntry.word, 'en')) {
        fail(config.storyKey, `English Chapter ${chapterId} target “${enEntry.word}” is not in the story prose.`);
      }
      if (!highlightPhraseOccurs(arPage.content ?? '', arEntry.word, 'ar')) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} target “${arEntry.word}” is not in the story prose.`);
      }
    });
  }

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const expectedGlossaries = [
    glossaryVocabulary(englishPages, config.storyIds.slice(0, midpoint)),
    glossaryVocabulary(englishPages, config.storyIds.slice(midpoint)),
  ];
  const expectedArabicGlossaries = [
    glossaryVocabulary(arabicPages, config.storyIds.slice(0, midpoint)),
    glossaryVocabulary(arabicPages, config.storyIds.slice(midpoint)),
  ];

  config.glossaryPageIds.forEach((pageId, index) => {
    const enGlossary = englishPages.find((page) => page.id === pageId)?.vocabulary ?? [];
    const arGlossary = arabicPages.find((page) => page.id === pageId)?.vocabulary ?? [];
    const expectedEn = expectedGlossaries[index];
    const expectedAr = expectedArabicGlossaries[index];
    if (enGlossary.length !== expectedEn.length || arGlossary.length !== expectedAr.length) {
      fail(config.storyKey, `Glossary page ${pageId} is not synchronized with the canonical story highlights.`);
    }
    expectedEn.forEach((entry, entryIndex) => {
      const glossaryEntry = enGlossary[entryIndex];
      if (!glossaryEntry || normalizeHighlightText(glossaryEntry.word, 'en') !== normalizeHighlightText(entry.word, 'en') || glossaryEntry.definition !== entry.definition) {
        fail(config.storyKey, `English glossary page ${pageId} diverged from story highlight ${entry.word}.`);
      }
    });
    expectedAr.forEach((entry, entryIndex) => {
      const glossaryEntry = arGlossary[entryIndex];
      if (!glossaryEntry || normalizeHighlightText(glossaryEntry.word, 'ar') !== normalizeHighlightText(entry.word, 'ar') || glossaryEntry.definition !== entry.definition) {
        fail(config.storyKey, `Arabic glossary page ${pageId} diverged from a final story highlight.`);
      }
    });
  });
};
