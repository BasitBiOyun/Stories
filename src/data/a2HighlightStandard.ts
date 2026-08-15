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
  requireExplicitArabicTargets?: boolean;
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

const englishVocabularyDefinitionForSurface = (
  pages: PageData[],
  word: string,
): string | undefined => {
  const normalized = normalizeHighlightText(word, 'en');
  if (!normalized) return undefined;
  for (const page of pages) {
    if (page.type !== 'story') continue;
    const entry = page.vocabulary?.find((candidate) => (
      normalizeHighlightText(candidate.word, 'en') === normalized
    ));
    if (entry?.definition?.trim()) return entry.definition;
  }
  return undefined;
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

const simpleEnglishInflectionEquivalent = (leftRaw: string, rightRaw: string): boolean => {
  const left = normalizeHighlightText(leftRaw, 'en');
  const right = normalizeHighlightText(rightRaw, 'en');
  if (!left || !right || left.includes(' ') || right.includes(' ')) return false;

  const singularPluralForms = (word: string): Set<string> => {
    const forms = new Set<string>([word, `${word}s`, `${word}es`]);
    if (word.endsWith('y') && word.length > 1) forms.add(`${word.slice(0, -1)}ies`);
    return forms;
  };

  return singularPluralForms(left).has(right) || singularPluralForms(right).has(left);
};

const overrideFor = (
  config: A2HighlightStandardConfig,
  chapterId: number,
  englishWord: string,
): A2ArabicHighlightOverride | undefined => {
  const chapterOverrides = config.arabicOverrides?.[chapterId];
  if (!chapterOverrides) return undefined;
  const normalized = normalizeHighlightText(englishWord, 'en');
  const match = Object.entries(chapterOverrides).find(([candidate]) => {
    const candidateNormalized = normalizeHighlightText(candidate, 'en');
    return candidateNormalized === normalized
      || simpleEnglishInflectionEquivalent(candidate, englishWord);
  });
  if (!match) return undefined;
  return typeof match[1] === 'string' ? { word: match[1] } : match[1];
};

const arabicVocabularyEntryForSurface = (
  page: PageData,
  word: string,
): HighlightText | undefined => page.vocabulary?.find((entry) => (
  normalizeHighlightText(entry.word, 'ar') === normalizeHighlightText(word, 'ar')
));

const resolveArabicAnimatedDefinition = (
  word: string,
  page: PageData,
  explicit?: string,
): string | undefined => {
  if (explicit?.trim()) return explicit;
  const direct = arabicFallbackDefinition(word);
  if (direct?.trim()) return direct;
  const sameWord = arabicVocabularyEntryForSurface(page, word);
  return sameWord?.definition?.trim() ? sameWord.definition : undefined;
};

const targetId = (chapterId: number, word: string): string => {
  const normalized = normalizeHighlightText(word, 'en') || word.toLowerCase().trim();
  return `ch${chapterId}-${normalized.replace(/\s+/g, '-')}`;
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
  return highlightPhraseMatches(surface, selected, 'en');
};

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

export const applyA2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2HighlightStandardConfig,
): A2HighlightStandardResult => {
  const seenEnglishKeys = new Set<string>();
  const seenArabicKeys = new Set<string>();
  const targets: Record<number, readonly A2CanonicalHighlightTarget[]> = {};
  const requiresExplicitArabicTargets = config.requireExplicitArabicTargets ?? Boolean(config.arabicOverrides);

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
    const reserveArabicTarget = (arWord: string, englishWord: string): boolean => {
      const key = normalizeHighlightText(arWord, 'ar');
      if (key && seenArabicKeys.has(key)) {
        // The reader suppresses an exact Arabic target once it has already been
        // highlighted on an earlier chapter. Suppress the paired English target
        // too so bilingual visible counts remain equal instead of failing later.
        remember(englishWord);
        return false;
      }
      if (key) seenArabicKeys.add(key);
      return true;
    };

    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    enVocabulary.forEach((entry, index) => {
      const key = normalizeHighlightText(entry.word, 'en');
      if (!key || seenEnglishKeys.has(key) || alreadyCoveredOnChapter(entry.word)) return;

      // A runtime highlight must be visible in the locked English prose. Legacy
      // word-note phrases such as "take out" when the prose says "take it out"
      // remain source metadata but are not promoted into an invisible highlight.
      if (!highlightPhraseOccurs(enPage.content ?? '', entry.word, 'en')) return;

      const explicit = overrideFor(config, chapterId, entry.word);
      if (requiresExplicitArabicTargets && !explicit) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} needs an explicit pair for English target “${entry.word}”.`);
      }

      const positionalEntry = arVocabulary[index];
      if (!explicit && !positionalEntry) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} has no vocabulary pair for English target “${entry.word}”.`);
      }

      const arWord = explicit?.word ?? positionalEntry!.word;
      if (!reserveArabicTarget(arWord, entry.word)) return;

      const matchingEntry = explicit ? arabicVocabularyEntryForSurface(arPage, arWord) : positionalEntry;
      // Position is never allowed to choose the Arabic WORD once a book is mapped.
      // It may still provide the already-reviewed definition for the same legacy
      // vocabulary slot; the final reviewed-definition lock validates/replaces it.
      const arDefinition = explicit?.definition
        ?? matchingEntry?.definition
        ?? positionalEntry?.definition
        ?? PENDING_ARABIC_DEFINITION;

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
      if (!highlightPhraseOccurs(enPage.content ?? '', word, 'en')) return;

      const explicit = overrideFor(config, chapterId, word);
      if (requiresExplicitArabicTargets && !explicit) {
        // Legacy animatedWords are not canonical learning targets by themselves.
        // In a mapped bilingual A2 book they are promoted only when the reviewed
        // EN→AR target map explicitly opts them in.
        return;
      }

      const arWord = explicit?.word ?? arAnimated[index];
      if (!arWord) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} has no pair for English highlight “${word}”.`);
      }
      if (!reserveArabicTarget(arWord, word)) return;

      const enDefinition = englishFallbackDefinition(word)
        ?? englishVocabularyDefinitionForSurface(englishPages, word);
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
  const errors: string[] = [];
  const record = (message: string): void => { errors.push(message); };
  const seenArabicRuntimeTargets = new Map<string, string>();

  for (const chapterId of config.storyIds) {
    const enPage = englishPages.find((item) => item.type === 'story' && item.id === chapterId);
    const arPage = arabicPages.find((item) => item.type === 'story' && item.id === chapterId);

    if (!enPage) record(`Missing EN Chapter ${chapterId}.`);
    if (!arPage) record(`Missing AR Chapter ${chapterId}.`);
    if (!enPage || !arPage) continue;

    const expected = targets[chapterId] ?? [];
    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    if (enPage.animatedWords?.length || arPage.animatedWords?.length) {
      record(`Chapter ${chapterId} still has legacy animatedWords after standardization.`);
    }
    if (enVocabulary.length !== expected.length || arVocabulary.length !== expected.length) {
      record(
        `Chapter ${chapterId} EN/AR highlight counts diverged from the canonical target count `
        + `(EN ${enVocabulary.length}, AR ${arVocabulary.length}, canonical ${expected.length}).`,
      );
    }

    expected.forEach((target, index) => {
      const enEntry = enVocabulary[index];
      const arEntry = arVocabulary[index];
      if (!enEntry || !arEntry) {
        record(`Chapter ${chapterId} target ${target.id} is missing from the runtime EN/AR vocabulary.`);
        return;
      }
      if (!enEntry.definition?.trim() || !arEntry.definition?.trim()) {
        record(`Chapter ${chapterId} target ${target.id} has an empty definition.`);
      }
      if (!highlightPhraseOccurs(enPage.content ?? '', enEntry.word, 'en')) {
        record(`English Chapter ${chapterId} target “${enEntry.word}” is not in the story prose.`);
      }
      if (!highlightPhraseOccurs(arPage.content ?? '', arEntry.word, 'ar')) {
        record(`Arabic Chapter ${chapterId} target “${arEntry.word}” is not in the story prose.`);
      }

      const runtimeArabicKey = normalizeHighlightText(arEntry.word, 'ar');
      const previousTarget = seenArabicRuntimeTargets.get(runtimeArabicKey);
      if (runtimeArabicKey && previousTarget && previousTarget !== target.id) {
        record(
          `Arabic target “${arEntry.word}” is reused by ${previousTarget} and ${target.id}; `
          + 'the reader would hide one of them and EN/AR visible counts would diverge.',
        );
      }
      if (runtimeArabicKey) seenArabicRuntimeTargets.set(runtimeArabicKey, target.id);
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
      record(`Glossary page ${pageId} is not synchronized with the canonical story highlights.`);
    }
    expectedEn.forEach((entry, entryIndex) => {
      const glossaryEntry = enGlossary[entryIndex];
      if (!glossaryEntry
        || normalizeHighlightText(glossaryEntry.word, 'en') !== normalizeHighlightText(entry.word, 'en')
        || glossaryEntry.definition !== entry.definition) {
        record(`English glossary page ${pageId} diverged from story highlight ${entry.word}.`);
      }
    });
    expectedAr.forEach((entry, entryIndex) => {
      const glossaryEntry = arGlossary[entryIndex];
      if (!glossaryEntry
        || normalizeHighlightText(glossaryEntry.word, 'ar') !== normalizeHighlightText(entry.word, 'ar')
        || glossaryEntry.definition !== entry.definition) {
        record(`Arabic glossary page ${pageId} diverged from a final story highlight.`);
      }
    });
  });

  if (errors.length) {
    fail(config.storyKey, `${errors.length} error(s):\n- ${errors.join('\n- ')}`);
  }
};