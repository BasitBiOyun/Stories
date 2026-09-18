import type { BookData, PageData } from '../../types';
import type { BookPair, Language } from './contracts';
import { inferLearningSystemConfig, runLearningSystem } from '../../data/learningSystem';
import { buildLearningGuideBundle, type LearningGuideBundle, type LearningGuideStructure } from '../../data/learningGuideSystem';
import { getLearningLevelPolicy } from '../../data/learningLevelPolicy';
import { preparePairedLearningSources } from '../../data/learningSourcePairing';
import { isLearningReferencePage, narrativeLearningPages } from '../../data/learningPageRoles';

const inferRuntimeConfig = (book: BookData) => {
  const pages = narrativeLearningPages(book.pages);
  try {
    return inferLearningSystemConfig(pages, book.level);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const roles = pages.map(page => `${page.id}:${page.type}:${page.title}`).join(' | ');
    throw new Error(`${message} Effective page roles: ${roles}`);
  }
};

const addReferenceGuidance = (
  bundle: LearningGuideBundle,
  language: Language,
  referencePages: PageData[],
): LearningGuideBundle => {
  if (!referencePages.length) return bundle;

  const pageList = referencePages.map(page => `${page.id}. ${page.title}`).join(language === 'ar' ? '، ' : ', ');
  const section = language === 'ar'
    ? {
        title: 'صفحات المراجع',
        icon: 'BookMarked',
        text: 'تظهر صفحة المراجع مستقلة عن اختبارات الفهم والمراجعة. استخدمها لمعرفة المصادر المدرجة في الكتاب، ولا تعاملها بوصفها فصلاً سردياً أو بديلاً عن أي تقييم.',
        points: [`صفحات المراجع: ${pageList}`, 'المراجع مستقلة عن اختبار الفهم', 'لا تُنشأ منها أسئلة تلقائياً'],
      }
    : {
        title: 'Reference Pages',
        icon: 'BookMarked',
        text: 'Reference pages remain separate from Knowledge Check and review. Use them to see the sources listed by the book; they are not story chapters and never replace an assessment.',
        points: [`Reference pages: ${pageList}`, 'References are separate from Knowledge Check', 'No automatic questions are generated from references'],
      };

  const marker = language === 'ar' ? '## بعد نهاية الفصول' : '## After the chapters';
  const referenceText = language === 'ar'
    ? `## صفحات المراجع\n${pageList}\n\nهذه الصفحات مستقلة عن الفصول السردية وعن اختبارات الفهم والمراجعة. لا تُستخدم مصدراً تلقائياً للأسئلة.\n\n`
    : `## Reference pages\n${pageList}\n\nThese pages are separate from narrative chapters and from Knowledge Check/review. They are never used as automatic question sources.\n\n`;

  return {
    ...bundle,
    studentGuideSections: [...bundle.studentGuideSections.slice(0, 6), section, ...bundle.studentGuideSections.slice(6)],
    studentGuideText: bundle.studentGuideText.includes(marker)
      ? bundle.studentGuideText.replace(marker, `${referenceText}${marker}`)
      : `${bundle.studentGuideText}\n\n${referenceText}`,
  };
};

const guideStructure = (config: ReturnType<typeof inferRuntimeConfig>): LearningGuideStructure => {
  const policy = getLearningLevelPolicy(config.level);
  return {
    knowledgeCount: config.knowledgeCount ?? policy.knowledgeCount,
    vocabularyCount: config.vocabularyCount ?? policy.vocabularyCount,
    reviewCount: config.reviewCount ?? policy.reviewCount,
    finalCount: config.finalCount ?? policy.finalCount,
    hasVocabularyPage: typeof config.vocabularyPageId === 'number',
    glossaryCount: config.glossaryPageIds.length,
  };
};

const makeBook = (
  source: BookData,
  pages: PageData[],
  bundle: LearningGuideBundle,
): BookData => ({
  ...source,
  pages,
  teacherGuide: bundle.teacherGuide,
  selfStudyGuide: bundle.selfStudyGuide,
  teacherGuideMetadata: bundle.teacherGuideMetadata,
  studentGuideSections: bundle.studentGuideSections,
  studentGuideMetadata: bundle.studentGuideMetadata,
  studentGuideText: bundle.studentGuideText,
});

const reorderLearningFlow = (
  pages: PageData[],
  config: ReturnType<typeof inferRuntimeConfig>,
): PageData[] => {
  const orderedIds = [
    config.knowledgeCheckPageId,
    ...config.glossaryPageIds,
    config.vocabularyPageId,
    config.reviewPageId,
    config.finalChallengePageId,
  ].filter((id): id is number => typeof id === 'number');

  const roleIds = new Set(orderedIds);
  const rolePositions = pages
    .map((page, index) => roleIds.has(page.id) ? index : -1)
    .filter(index => index >= 0);
  const pageById = new Map(pages.map(page => [page.id, page] as const));
  const orderedPages = orderedIds
    .map(id => pageById.get(id))
    .filter((page): page is PageData => Boolean(page));

  if (rolePositions.length !== orderedPages.length) {
    throw new Error(
      `[Book Finalization] Learning flow cannot be reordered safely. Positions=${rolePositions.length}, pages=${orderedPages.length}.`,
    );
  }

  const output = [...pages];
  rolePositions.forEach((position, index) => {
    output[position] = orderedPages[index];
  });
  return output;
};

const normalizeVocabularyContextText = (value: string): string => value
  .toLocaleLowerCase()
  .replace(/[\u064B-\u0652\u0670]/g, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ؤ/g, 'و')
  .replace(/ئ/g, 'ي')
  .replace(/\s+/g, ' ')
  .trim();

const preparedStoryContext = (
  page: PageData,
  word: string,
  preferred?: string,
): string | undefined => {
  const normalizedWord = normalizeVocabularyContextText(word);

  if (
    preferred?.trim()
    && normalizeVocabularyContextText(preferred).includes(normalizedWord)
  ) {
    return preferred.trim();
  }

  const source = (page.content ?? '')
    .replace(/\[[^\]]+\]/g, ' ')
    .replace(/[*_#>`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!source) return undefined;

  const sentence = source
    .split(/(?<=[.!?؟])\s+/)
    .map(value => value.trim())
    .find(value => normalizeVocabularyContextText(value).includes(normalizedWord));

  if (!sentence) return undefined;
  return sentence.length > 240 ? `${sentence.slice(0, 237).trim()}…` : sentence;
};

const pickPreparedTargets = (
  english: BookData,
  arabic: BookData,
): {
  english: NonNullable<PageData['vocabularyPairs']>;
  arabic: NonNullable<PageData['vocabularyPairs']>;
} => {
  const targetCount = getLearningLevelPolicy(english.level).vocabularyCount;
  const englishGlossaryByWord = new Map(
    english.pages
      .filter(page => page.type === 'glossary')
      .flatMap(page => page.vocabulary ?? [])
      .map(item => [item.word.trim().toLocaleLowerCase('en-US'), item] as const)
  );
  const arabicGlossaryByWord = new Map(
    arabic.pages
      .filter(page => page.type === 'glossary')
      .flatMap(page => page.vocabulary ?? [])
      .map(item => [item.word.trim().toLocaleLowerCase('ar'), item] as const)
  );
  const paired: Array<{
    english: NonNullable<PageData['vocabularyPairs']>[number];
    arabic: NonNullable<PageData['vocabularyPairs']>[number];
  }> = [];

  english.pages
    .filter(page => page.type === 'story')
    .forEach(englishPage => {
      const arabicPage = arabic.pages.find(page => page.type === 'story' && page.id === englishPage.id);
      if (!arabicPage) {
        throw new Error(
          `[Prepared Book Finalization] ${english.id} chapter ${englishPage.id} is missing in Arabic.`,
        );
      }

      const englishVocabulary = englishPage.vocabulary ?? [];
      const arabicVocabulary = arabicPage.vocabulary ?? [];
      if (englishVocabulary.length !== arabicVocabulary.length) {
        throw new Error(
          `[Prepared Book Finalization] ${english.id} chapter ${englishPage.id} Word Notes differ: EN=${englishVocabulary.length}, AR=${arabicVocabulary.length}.`,
        );
      }

      englishVocabulary.forEach((englishEntry, index) => {
        const arabicEntry = arabicPage.vocabulary?.[index];
        if (!arabicEntry?.word?.trim() || !arabicEntry.definition?.trim()) return;
        if (!englishEntry.word?.trim() || !englishEntry.definition?.trim()) return;

        const englishDetail = englishGlossaryByWord.get(
          englishEntry.word.trim().toLocaleLowerCase('en-US'),
        ) ?? englishEntry;
        const arabicDetail = arabicGlossaryByWord.get(
          arabicEntry.word.trim().toLocaleLowerCase('ar'),
        ) ?? arabicEntry;

        paired.push({
          english: {
            word: englishDetail.word,
            meaning: englishDetail.definition,
            context: preparedStoryContext(
              englishPage,
              englishDetail.word,
              englishDetail.storyExample ?? englishDetail.example ?? englishEntry.storyExample ?? englishEntry.example,
            ),
            chapter: englishDetail.chapter ?? englishPage.id,
            chapterTitle: englishDetail.chapterTitle ?? englishPage.title,
            partOfSpeech: englishDetail.partOfSpeech ?? englishEntry.partOfSpeech,
          },
          arabic: {
            word: arabicDetail.word,
            meaning: arabicDetail.definition,
            context: preparedStoryContext(
              arabicPage,
              arabicDetail.word,
              arabicDetail.storyExample ?? arabicDetail.example ?? arabicEntry.storyExample ?? arabicEntry.example,
            ),
            chapter: arabicDetail.chapter ?? arabicPage.id,
            chapterTitle: arabicDetail.chapterTitle ?? arabicPage.title,
            partOfSpeech: arabicDetail.partOfSpeech ?? arabicEntry.partOfSpeech,
          },
        });
      });
    });

  const seen = new Set<string>();
  const uniquePaired = paired.filter(pair => {
    const key = `${pair.english.word.trim().toLocaleLowerCase('en-US')}::${pair.arabic.word.trim().toLocaleLowerCase('ar')}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  if (uniquePaired.length < targetCount) {
    throw new Error(
      `[Prepared Book Finalization] ${english.id} ${english.level} needs ${targetCount} unique paired target words; found ${uniquePaired.length}.`,
    );
  }

  const policy = getLearningLevelPolicy(english.level);
  const contextRich = uniquePaired.filter(pair => pair.english.context && pair.arabic.context);

  if (contextRich.length < policy.vocabularyContextCount) {
    throw new Error(
      `[Prepared Book Finalization] ${english.id} ${english.level} needs ${policy.vocabularyContextCount} bilingual story-context vocabulary targets; found ${contextRich.length}.`,
    );
  }

  const pickEven = <T,>(items: T[], count: number): T[] => {
    if (count <= 0) return [];
    if (items.length <= count) return items.slice();
    return Array.from({ length: count }, (_, index) => {
      const sourceIndex = count <= 1
        ? 0
        : Math.round(index * (items.length - 1) / (count - 1));
      return items[sourceIndex];
    });
  };

  const contextTargets = pickEven(contextRich, policy.vocabularyContextCount);
  const contextKeys = new Set(
    contextTargets.map(pair =>
      `${pair.english.word.trim().toLocaleLowerCase('en-US')}::${pair.arabic.word.trim().toLocaleLowerCase('ar')}`
    )
  );
  const remaining = uniquePaired.filter(pair => {
    const key = `${pair.english.word.trim().toLocaleLowerCase('en-US')}::${pair.arabic.word.trim().toLocaleLowerCase('ar')}`;
    return !contextKeys.has(key);
  });
  const selected = [
    ...contextTargets,
    ...pickEven(remaining, targetCount - contextTargets.length),
  ];

  return {
    english: selected.map(pair => pair.english),
    arabic: selected.map(pair => pair.arabic),
  };
};

const reorderPreparedLearningFlow = (pages: PageData[]): PageData[] => {
  const knowledge = pages.filter(page => page.type === 'quiz');
  const glossaries = pages.filter(page => page.type === 'glossary');
  const vocabulary = pages.filter(page => page.type === 'vocabulary-match');
  const review = pages.filter(page => page.type === 'exercises');
  const finalChallenge = pages.filter(page => page.type === 'final-challenge');

  if (!knowledge.length || !glossaries.length || !vocabulary.length || !review.length || !finalChallenge.length) {
    throw new Error(
      `[Prepared Book Finalization] Learning flow is incomplete: knowledge=${knowledge.length}, glossary=${glossaries.length}, vocabulary=${vocabulary.length}, review=${review.length}, final=${finalChallenge.length}.`,
    );
  }

  const ordered = [
    ...knowledge,
    ...glossaries,
    ...vocabulary,
    ...review,
    ...finalChallenge,
  ];
  const roleIds = new Set(ordered.map(page => page.id));
  const positions = pages
    .map((page, index) => roleIds.has(page.id) ? index : -1)
    .filter(index => index >= 0);

  if (positions.length !== ordered.length) {
    throw new Error(
      `[Prepared Book Finalization] Learning flow cannot be reordered safely. Positions=${positions.length}, pages=${ordered.length}.`,
    );
  }

  const output = [...pages];
  positions.forEach((position, index) => {
    output[position] = ordered[index];
  });
  return output;
};

const finalizePreparedLanguage = (
  book: BookData,
  vocabularyPairs: NonNullable<PageData['vocabularyPairs']>,
  language: Language,
): BookData => {
  const policy = getLearningLevelPolicy(book.level);
  const enriched = book.pages.map(page => page.type === 'vocabulary-match'
    ? {
        ...page,
        title: language === 'ar' ? 'تحدي المفردات' : 'Vocabulary Challenge',
        content: language === 'ar'
          ? `تدرّب على ${policy.vocabularyCount} كلمة أو عبارة مستهدفة عبر المطابقة والسياق والاسترجاع.`
          : `Practise ${policy.vocabularyCount} target words through matching, context and recall.`,
        vocabularyPairs,
      }
    : page);

  return {
    ...book,
    pages: reorderPreparedLearningFlow(enriched),
  };
};

/**
 * Prepared books keep their reviewed/manual learning content. This lightweight
 * UI finalizer only normalizes the vocabulary study flow and enriches the
 * existing Vocabulary Challenge from the reviewed story Word Notes.
 */
export const finalizePreparedBookPairForUi = (pair: BookPair): BookPair => {
  if (pair.en.level !== pair.ar.level) {
    throw new Error(
      `[Prepared Book Finalization] EN/AR levels differ: ${pair.en.level} vs ${pair.ar.level}.`,
    );
  }

  const englishGlossaries = pair.en.pages.filter(page => page.type === 'glossary').length;
  const arabicGlossaries = pair.ar.pages.filter(page => page.type === 'glossary').length;
  const englishVocabularyPages = pair.en.pages.filter(page => page.type === 'vocabulary-match').length;
  const arabicVocabularyPages = pair.ar.pages.filter(page => page.type === 'vocabulary-match').length;

  if (englishGlossaries !== arabicGlossaries || englishVocabularyPages !== arabicVocabularyPages) {
    throw new Error(
      `[Prepared Book Finalization] EN/AR vocabulary page roles differ for ${pair.en.id} ${pair.en.level}.`,
    );
  }

  if (!englishVocabularyPages) return pair;

  const targets = pickPreparedTargets(pair.en, pair.ar);
  return {
    en: finalizePreparedLanguage(pair.en, targets.english, 'en'),
    ar: finalizePreparedLanguage(pair.ar, targets.arabic, 'ar'),
  };
};

/**
 * Authoritative UI finalization for every registered A2/B1/B2 book.
 * Book modules may prepare/lock chapter data, but one Learning System owns all
 * effective activities, assessments and guides. Level differences come only
 * from the shared Learning Level Policy.
 */
export const finalizeBookPairForUi = (pair: BookPair): BookPair => {
  if (pair.en.level !== pair.ar.level) {
    throw new Error(`[Book Finalization] EN/AR levels differ: ${pair.en.level} vs ${pair.ar.level}.`);
  }

  const config = inferRuntimeConfig(pair.en);
  const arabicConfig = inferRuntimeConfig(pair.ar);
  const comparableEnglish = JSON.stringify({
    storyIds: config.storyIds,
    knowledgeCheckPageId: config.knowledgeCheckPageId,
    vocabularyPageId: config.vocabularyPageId,
    reviewPageId: config.reviewPageId,
    glossaryPageIds: config.glossaryPageIds,
    finalChallengePageId: config.finalChallengePageId,
  });
  const comparableArabic = JSON.stringify({
    storyIds: arabicConfig.storyIds,
    knowledgeCheckPageId: arabicConfig.knowledgeCheckPageId,
    vocabularyPageId: arabicConfig.vocabularyPageId,
    reviewPageId: arabicConfig.reviewPageId,
    glossaryPageIds: arabicConfig.glossaryPageIds,
    finalChallengePageId: arabicConfig.finalChallengePageId,
  });
  if (comparableEnglish !== comparableArabic) {
    throw new Error(`[Book Finalization] EN/AR page-role contracts differ. EN=${comparableEnglish} AR=${comparableArabic}`);
  }

  const pairedSources = preparePairedLearningSources({
    englishPages: pair.en.pages,
    arabicPages: pair.ar.pages,
    storyIds: config.storyIds,
  });
  const learning = runLearningSystem({
    englishPages: pairedSources.englishPages,
    arabicPages: pairedSources.arabicPages,
    config,
  });
  const englishLearningPages = reorderLearningFlow(learning.englishPages, config);
  const arabicLearningPages = reorderLearningFlow(learning.arabicPages, config);
  const structure = guideStructure(config);
  const englishReferences = pair.en.pages.filter(isLearningReferencePage);
  const arabicReferences = pair.ar.pages.filter(isLearningReferencePage);
  if (englishReferences.length !== arabicReferences.length) {
    throw new Error(`[Book Finalization] Reference page counts differ: EN=${englishReferences.length}, AR=${arabicReferences.length}.`);
  }

  const englishGuide = addReferenceGuidance(
    buildLearningGuideBundle({
      pages: englishLearningPages,
      storyIds: config.storyIds,
      level: config.level,
      language: 'en',
      bookTitle: pair.en.title,
      structure,
    }),
    'en',
    englishReferences,
  );
  const arabicGuide = addReferenceGuidance(
    buildLearningGuideBundle({
      pages: arabicLearningPages,
      storyIds: config.storyIds,
      level: config.level,
      language: 'ar',
      bookTitle: pair.ar.title,
      structure,
    }),
    'ar',
    arabicReferences,
  );

  return {
    en: makeBook(pair.en, englishLearningPages, englishGuide),
    ar: makeBook(pair.ar, arabicLearningPages, arabicGuide),
  };
};
