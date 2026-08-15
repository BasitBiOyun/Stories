import type { BookData, PageData } from '../../types';
import type { BookPair, Language } from './contracts';
import { inferLearningSystemConfig, runLearningSystem } from '../../data/learningSystem';
import { buildLearningGuideBundle, type LearningGuideBundle, type LearningGuideStructure } from '../../data/learningGuideSystem';
import { getLearningLevelPolicy } from '../../data/learningLevelPolicy';

const isReferencePage = (page: PageData): boolean => {
  const title = page.title.trim().toLocaleLowerCase();
  return title === 'references'
    || title === 'reference'
    || title === 'المراجع'
    || title === 'مراجع'
    || title.startsWith('references —')
    || title.startsWith('المراجع —');
};

const inferRuntimeConfig = (book: BookData) => inferLearningSystemConfig(
  book.pages.filter(page => !isReferencePage(page)),
  book.level,
);

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

/**
 * Authoritative UI finalization for every registered A2/B1/B2 book.
 *
 * Book-specific modules prepare and lock their chapter data. From this point on,
 * one level-independent Learning System owns chapter activities, whole-book
 * assessments, EN/AR parity, and every guide. Level differences come only from
 * the shared Learning Level Policy.
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
    throw new Error('[Book Finalization] EN/AR page-role contracts differ.');
  }

  const learning = runLearningSystem({
    englishPages: pair.en.pages,
    arabicPages: pair.ar.pages,
    config,
  });
  const structure = guideStructure(config);
  const englishReferences = pair.en.pages.filter(isReferencePage);
  const arabicReferences = pair.ar.pages.filter(isReferencePage);
  if (englishReferences.length !== arabicReferences.length) {
    throw new Error(`[Book Finalization] Reference page counts differ: EN=${englishReferences.length}, AR=${arabicReferences.length}.`);
  }

  const englishGuide = addReferenceGuidance(
    buildLearningGuideBundle({
      pages: learning.englishPages,
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
      pages: learning.arabicPages,
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
    en: makeBook(pair.en, learning.englishPages, englishGuide),
    ar: makeBook(pair.ar, learning.arabicPages, arabicGuide),
  };
};
