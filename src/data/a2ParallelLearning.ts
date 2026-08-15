import type { Exercise, PageData, QuizQuestion } from '../types';
import type { A2GoldLanguage, A2GoldPageConfig } from './a2GoldFactory';
import { sanitizeA2PlaceholderMedia } from './a2PlaceholderMedia';

interface ParallelLearningResult {
  englishPages: PageData[];
  arabicPages: PageData[];
}

interface ParallelAnchor {
  key: string;
  chapterId: number;
  english: Exercise;
  arabic: Exercise;
}

const insertAt = <T,>(items: T[], item: T, index: number): T[] => {
  const output = [...items];
  output.splice(Math.max(0, Math.min(index, output.length)), 0, item);
  return output;
};

const uniqueStrings = (values: string[]): string[] => {
  const seen = new Set<string>();
  return values.filter((value) => {
    const key = value.trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const chapterLabel = (chapterId: number, language: A2GoldLanguage): string =>
  language === 'ar' ? `الفصل ${chapterId}` : `Chapter ${chapterId}`;

const buildHotspotExercise = (
  page: PageData,
  hotspotIndex: number,
  allStoryPages: PageData[],
  language: A2GoldLanguage,
): Exercise | null => {
  const hotspot = page.hotspots?.[hotspotIndex];
  if (!hotspot) return null;

  const distractors = uniqueStrings([
    ...(page.hotspots || [])
      .filter((_, index) => index !== hotspotIndex)
      .map((item) => item.description),
    ...allStoryPages
      .filter((item) => item.id !== page.id)
      .flatMap((item) => (item.hotspots || []).map((entry) => entry.description)),
  ]).filter((value) => value !== hotspot.description).slice(0, 2);

  if (distractors.length < 2) return null;

  const correctIndex = (page.id + hotspotIndex) % 3;
  const options = insertAt(distractors, hotspot.description, correctIndex);

  return {
    id: `parallel-hotspot-${page.id}-${hotspotIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'تفصيل من الفصل' : 'Chapter Detail',
    instructions: language === 'ar' ? 'اختر المعلومة الموجودة في هذا الفصل.' : 'Choose the detail stated in this chapter.',
    question: language === 'ar'
      ? `أي معلومة ترتبط بـ «${hotspot.title}» في ${chapterLabel(page.id, language)}؟`
      : `Which detail matches “${hotspot.title}” in ${chapterLabel(page.id, language)}?`,
    options,
    correctAnswer: correctIndex,
    explanation: hotspot.description,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذه المعلومة موجودة في الفصل.' : 'Correct. This detail is stated in the chapter.',
      incorrect: language === 'ar'
        ? `ارجع إلى ${chapterLabel(page.id, language)} وابحث عن المعلومة المرتبطة بهذا العنوان.`
        : `Go back to ${chapterLabel(page.id, language)} and find the detail connected to this heading.`,
    },
  };
};

const buildVocabularyExercise = (
  page: PageData,
  vocabularyIndex: number,
  allStoryPages: PageData[],
  language: A2GoldLanguage,
): Exercise | null => {
  const entry = page.vocabulary?.[vocabularyIndex];
  if (!entry) return null;

  const distractors = uniqueStrings([
    ...(page.vocabulary || [])
      .filter((_, index) => index !== vocabularyIndex)
      .map((item) => item.definition),
    ...allStoryPages
      .filter((item) => item.id !== page.id)
      .flatMap((item) => (item.vocabulary || []).map((vocabulary) => vocabulary.definition)),
  ]).filter((value) => value !== entry.definition).slice(0, 2);

  if (distractors.length < 2) return null;

  const correctIndex = (page.id + vocabularyIndex + 1) % 3;
  const options = insertAt(distractors, entry.definition, correctIndex);

  return {
    id: `parallel-vocabulary-${page.id}-${vocabularyIndex}`,
    type: 'multiple-choice',
    title: language === 'ar' ? 'معنى الكلمة' : 'Word Meaning',
    instructions: language === 'ar' ? 'اختر المعنى المستخدم في الفصل.' : 'Choose the meaning used in the chapter.',
    question: language === 'ar'
      ? `ما معنى «${entry.word}» في ${chapterLabel(page.id, language)}؟`
      : `What does “${entry.word}” mean in ${chapterLabel(page.id, language)}?`,
    options,
    correctAnswer: correctIndex,
    explanation: `${entry.word}: ${entry.definition}`,
    feedback: {
      correct: language === 'ar' ? 'صحيح. هذا هو معنى الكلمة في Word Notes.' : 'Correct. This is the Word Notes meaning.',
      incorrect: language === 'ar'
        ? `راجع Word Notes في ${chapterLabel(page.id, language)} ثم حاول مرة أخرى.`
        : `Check the Word Notes in ${chapterLabel(page.id, language)} and try again.`,
    },
  };
};

const storyPagesFor = (pages: PageData[], storyIds: number[]): PageData[] =>
  storyIds
    .map((id) => pages.find((page) => page.id === id))
    .filter((page): page is PageData => Boolean(page));

const buildParallelAnchors = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
): ParallelAnchor[] => {
  const byChapter = new Map<number, ParallelAnchor[]>();

  storyIds.forEach((chapterId) => {
    const englishPage = englishStoryPages.find((page) => page.id === chapterId);
    const arabicPage = arabicStoryPages.find((page) => page.id === chapterId);
    if (!englishPage || !arabicPage) return;

    const chapterAnchors: ParallelAnchor[] = [];
    const hotspotCount = Math.min(englishPage.hotspots?.length || 0, arabicPage.hotspots?.length || 0);
    const vocabularyCount = Math.min(englishPage.vocabulary?.length || 0, arabicPage.vocabulary?.length || 0);
    const maxSlots = Math.max(hotspotCount, vocabularyCount);

    for (let index = 0; index < maxSlots; index += 1) {
      if (index < hotspotCount) {
        const english = buildHotspotExercise(englishPage, index, englishStoryPages, 'en');
        const arabic = buildHotspotExercise(arabicPage, index, arabicStoryPages, 'ar');
        if (english && arabic) {
          chapterAnchors.push({ key: `h:${chapterId}:${index}`, chapterId, english, arabic });
        }
      }

      if (index < vocabularyCount) {
        const english = buildVocabularyExercise(englishPage, index, englishStoryPages, 'en');
        const arabic = buildVocabularyExercise(arabicPage, index, arabicStoryPages, 'ar');
        if (english && arabic) {
          chapterAnchors.push({ key: `v:${chapterId}:${index}`, chapterId, english, arabic });
        }
      }
    }

    byChapter.set(chapterId, chapterAnchors);
  });

  const output: ParallelAnchor[] = [];
  const maxChapterAnchors = Math.max(0, ...storyIds.map((id) => byChapter.get(id)?.length || 0));
  for (let slot = 0; slot < maxChapterAnchors; slot += 1) {
    storyIds.forEach((chapterId) => {
      const anchor = byChapter.get(chapterId)?.[slot];
      if (anchor) output.push(anchor);
    });
  }
  return output;
};

const rotate = <T,>(items: T[], offset: number): T[] => {
  if (!items.length) return [];
  const normalized = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length <= count) return items.slice();
  if (count === 1) return [items[0]];
  const selected: T[] = [];
  const used = new Set<number>();
  for (let index = 0; index < count; index += 1) {
    let sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    while (used.has(sourceIndex) && sourceIndex + 1 < items.length) sourceIndex += 1;
    used.add(sourceIndex);
    selected.push(items[sourceIndex]);
  }
  return selected;
};

const selectStage = (
  anchors: ParallelAnchor[],
  count: number,
  usedKeys: Set<string>,
  offset: number,
): ParallelAnchor[] => {
  const available = rotate(anchors, offset).filter((anchor) => !usedKeys.has(anchor.key));
  const selected = pickEvenly(available, count);
  selected.forEach((anchor) => usedKeys.add(anchor.key));
  return selected;
};

const cloneStageExercise = (
  exercise: Exercise,
  id: string,
  title: string,
): Exercise => ({ ...exercise, id, title });

const toQuizQuestion = (exercise: Exercise, chapterId: number, language: A2GoldLanguage): QuizQuestion => {
  const correctIndex = typeof exercise.correctAnswer === 'number' ? exercise.correctAnswer : 0;
  return {
    question: exercise.question || '',
    options: (exercise.options || []).map((text, index) => ({ text, isCorrect: index === correctIndex })),
    hint: language === 'ar'
      ? `ارجع إلى ${chapterLabel(chapterId, language)} وابحث عن الدليل.`
      : `Go back to ${chapterLabel(chapterId, language)} and find the evidence.`,
  };
};

const buildReviewQuiz = (
  anchors: ParallelAnchor[],
  language: A2GoldLanguage,
): Exercise => ({
  id: 'parallel-review-quiz',
  type: 'quiz-game',
  title: language === 'ar' ? 'تحدي المراجعة' : 'Review Challenge',
  instructions: language === 'ar'
    ? 'أجب عن ثمانية أسئلة من الفصول. إذا أخطأت، ارجع إلى الفصل ثم حاول مرة أخرى.'
    : 'Answer eight chapter-based questions. If you make a mistake, go back to the chapter and try again.',
  question: language === 'ar' ? 'هل تتذكر المعلومات والكلمات الأساسية؟' : 'Can you remember the key facts and words?',
  correctAnswer: null,
  explanation: language === 'ar'
    ? 'كل سؤال مبني على معلومة أو كلمة موجودة في فصول الكتاب.'
    : 'Every question comes from a fact or word in the story chapters.',
  feedback: {
    correct: language === 'ar' ? 'جيد. استخدمت معلومات الفصل.' : 'Good. You used the chapter information.',
    incorrect: language === 'ar' ? 'ارجع إلى الفصل وابحث عن الدليل ثم حاول مرة أخرى.' : 'Go back to the chapter, find the evidence, and try again.',
  },
  hints: language === 'ar'
    ? ['استخدم رقم الفصل في التلميح.', 'ابحث عن العنوان أو Word Notes.', 'اقرأ الدليل ثم حاول مرة أخرى.']
    : ['Use the chapter number in the hint.', 'Look for the heading or Word Notes.', 'Read the evidence and try again.'],
  quizQuestions: anchors.map((anchor) => toQuizQuestion(language === 'ar' ? anchor.arabic : anchor.english, anchor.chapterId, language)),
});

const buildVocabularyPairs = (
  englishStoryPages: PageData[],
  arabicStoryPages: PageData[],
  storyIds: number[],
): { english: NonNullable<PageData['vocabularyPairs']>; arabic: NonNullable<PageData['vocabularyPairs']> } => {
  const candidates: Array<{
    key: string;
    english: { word: string; meaning: string };
    arabic: { word: string; meaning: string };
  }> = [];

  storyIds.forEach((chapterId) => {
    const englishPage = englishStoryPages.find((page) => page.id === chapterId);
    const arabicPage = arabicStoryPages.find((page) => page.id === chapterId);
    if (!englishPage || !arabicPage) return;
    const count = Math.min(englishPage.vocabulary?.length || 0, arabicPage.vocabulary?.length || 0);
    for (let index = 0; index < count; index += 1) {
      const english = englishPage.vocabulary?.[index];
      const arabic = arabicPage.vocabulary?.[index];
      if (!english || !arabic) continue;
      candidates.push({
        key: `v:${chapterId}:${index}`,
        english: { word: english.word, meaning: english.definition },
        arabic: { word: arabic.word, meaning: arabic.definition },
      });
    }
  });

  const selected = pickEvenly(candidates, 6);
  return {
    english: selected.map((item) => item.english),
    arabic: selected.map((item) => item.arabic),
  };
};

const stripDemoStorySync = (page: PageData): PageData => {
  if (page.type !== 'story' || !page.timedChunks?.length) return page;
  const demo = page.timedChunks.length === 1
    && page.timedChunks[0].start === 0
    && page.timedChunks[0].end <= 5
    && /(placeholder|تجريبي)/i.test(page.timedChunks[0].text || '');
  if (!demo) return page;
  const { timedChunks: _timedChunks, syncPoints: _syncPoints, ...withoutDemoSync } = page;
  return withoutDemoSync;
};

const applyLanguagePages = ({
  pages,
  storyIds,
  knowledgeCheckPageId,
  vocabularyPageId,
  reviewPageId,
  finalChallengePageId,
  quickAnchors,
  knowledgeAnchors,
  reviewAnchors,
  finalAnchors,
  vocabularyPairs,
  language,
}: {
  pages: PageData[];
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId: number;
  reviewPageId: number;
  finalChallengePageId: number;
  quickAnchors: Map<number, ParallelAnchor>;
  knowledgeAnchors: ParallelAnchor[];
  reviewAnchors: ParallelAnchor[];
  finalAnchors: ParallelAnchor[];
  vocabularyPairs: NonNullable<PageData['vocabularyPairs']>;
  language: A2GoldLanguage;
}): PageData[] => {
  const staged = pages.map((rawPage) => {
    const page = stripDemoStorySync(rawPage);

    if (storyIds.includes(page.id)) {
      const anchor = quickAnchors.get(page.id);
      if (!anchor) return page;
      const source = language === 'ar' ? anchor.arabic : anchor.english;
      return {
        ...page,
        exercises: [cloneStageExercise(source, `parallel-quick-${page.id}`, language === 'ar' ? 'تحدي سريع' : 'Quick Challenge')],
      };
    }

    if (page.id === knowledgeCheckPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'راجع ثماني معلومات وكلمات من فصول الكتاب. ارجع إلى الفصل عندما تحتاج إلى مساعدة.'
          : 'Review eight facts and words from the story chapters. Return to the chapter whenever you need help.',
        exercises: knowledgeAnchors.map((anchor, index) => cloneStageExercise(
          language === 'ar' ? anchor.arabic : anchor.english,
          `parallel-kc-${index + 1}`,
          language === 'ar' ? `تحقق من الفهم ${index + 1}` : `Knowledge Check ${index + 1}`,
        )),
      };
    }

    if (page.id === vocabularyPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'صل ست كلمات مختارة من فصول الكتاب بمعانيها.'
          : 'Match six selected words from the story chapters with their meanings.',
        vocabularyPairs,
      };
    }

    if (page.id === reviewPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'أكمل تحدي مراجعة من ثمانية أسئلة مبنية على الفصول.'
          : 'Complete an eight-question Review Challenge built from the story chapters.',
        exercises: [buildReviewQuiz(reviewAnchors, language)],
      };
    }

    if (page.id === finalChallengePageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'اختبر تذكرك للقصة في عشرة أسئلة مختلفة مبنية على الفصول.'
          : 'Check what you remember in ten different questions built from the story chapters.',
        exercises: finalAnchors.map((anchor, index) => cloneStageExercise(
          language === 'ar' ? anchor.arabic : anchor.english,
          `parallel-final-${index + 1}`,
          language === 'ar' ? `التحدي النهائي ${index + 1}` : `Final Challenge ${index + 1}`,
        )),
      };
    }

    return page;
  });

  return sanitizeA2PlaceholderMedia(staged);
};

const validateParallelOutput = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2GoldPageConfig,
): void => {
  const vocabularyPageId = config.knowledgeCheckPageId + 1;
  const requirePage = (pages: PageData[], id: number, language: string): PageData => {
    const page = pages.find((item) => item.id === id);
    if (!page) throw new Error(`A2 parallel learning: missing page ${id} in ${language}.`);
    return page;
  };

  config.storyIds.forEach((id) => {
    const en = requirePage(englishPages, id, 'English');
    const ar = requirePage(arabicPages, id, 'Arabic');
    if ((en.exercises?.length || 0) !== 1 || (ar.exercises?.length || 0) !== 1) {
      throw new Error(`A2 parallel learning: Chapter ${id} must have exactly one Quick Challenge in both languages.`);
    }
    if (en.exercises?.[0].type !== ar.exercises?.[0].type) {
      throw new Error(`A2 parallel learning: Chapter ${id} Quick Challenge types do not match.`);
    }
  });

  const englishKnowledge = requirePage(englishPages, config.knowledgeCheckPageId, 'English');
  const arabicKnowledge = requirePage(arabicPages, config.knowledgeCheckPageId, 'Arabic');
  if (englishKnowledge.exercises?.length !== 8 || arabicKnowledge.exercises?.length !== 8) {
    throw new Error('A2 parallel learning: Knowledge Check must contain 8 questions in both languages.');
  }

  const englishVocabulary = requirePage(englishPages, vocabularyPageId, 'English');
  const arabicVocabulary = requirePage(arabicPages, vocabularyPageId, 'Arabic');
  if (englishVocabulary.vocabularyPairs?.length !== 6 || arabicVocabulary.vocabularyPairs?.length !== 6) {
    throw new Error('A2 parallel learning: Vocabulary Challenge must contain 6 pairs in both languages.');
  }

  const englishReview = requirePage(englishPages, config.reviewPageId, 'English').exercises?.[0];
  const arabicReview = requirePage(arabicPages, config.reviewPageId, 'Arabic').exercises?.[0];
  if (englishReview?.type !== 'quiz-game' || arabicReview?.type !== 'quiz-game'
    || englishReview.quizQuestions?.length !== 8 || arabicReview.quizQuestions?.length !== 8) {
    throw new Error('A2 parallel learning: Review Challenge must contain the same 8-question quiz in both languages.');
  }

  const englishFinal = requirePage(englishPages, config.finalChallengePageId, 'English');
  const arabicFinal = requirePage(arabicPages, config.finalChallengePageId, 'Arabic');
  if (englishFinal.exercises?.length !== 10 || arabicFinal.exercises?.length !== 10) {
    throw new Error('A2 parallel learning: Final Challenge must contain 10 questions in both languages.');
  }
};

/**
 * Builds the effective A2 learning layer for English and Arabic with one shared
 * algorithm. Each language reads only its own chapter hotspots and vocabulary,
 * while source coordinates are paired so both books receive the same learning
 * structure and assessment distribution.
 */
export const applyA2ParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2GoldPageConfig;
}): ParallelLearningResult => {
  const englishStoryPages = storyPagesFor(englishPages, config.storyIds);
  const arabicStoryPages = storyPagesFor(arabicPages, config.storyIds);
  const anchors = buildParallelAnchors(englishStoryPages, arabicStoryPages, config.storyIds);

  if (anchors.length < 26) {
    throw new Error(`A2 parallel learning requires at least 26 paired chapter anchors; found ${anchors.length}.`);
  }

  const quickAnchors = new Map<number, ParallelAnchor>();
  config.storyIds.forEach((chapterId, index) => {
    const chapterAnchors = anchors.filter((anchor) => anchor.chapterId === chapterId);
    if (!chapterAnchors.length) throw new Error(`A2 parallel learning: no paired anchors for Chapter ${chapterId}.`);
    quickAnchors.set(chapterId, chapterAnchors[index % chapterAnchors.length]);
  });

  const usedKeys = new Set<string>();
  const knowledgeAnchors = selectStage(anchors, 8, usedKeys, 0);
  const reviewAnchors = selectStage(anchors, 8, usedKeys, Math.floor(anchors.length / 3));
  const finalAnchors = selectStage(anchors, 10, usedKeys, Math.floor((anchors.length * 2) / 3));
  const vocabulary = buildVocabularyPairs(englishStoryPages, arabicStoryPages, config.storyIds);
  const vocabularyPageId = config.knowledgeCheckPageId + 1;

  const output: ParallelLearningResult = {
    englishPages: applyLanguagePages({
      pages: englishPages,
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId,
      reviewPageId: config.reviewPageId,
      finalChallengePageId: config.finalChallengePageId,
      quickAnchors,
      knowledgeAnchors,
      reviewAnchors,
      finalAnchors,
      vocabularyPairs: vocabulary.english,
      language: 'en',
    }),
    arabicPages: applyLanguagePages({
      pages: arabicPages,
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId,
      reviewPageId: config.reviewPageId,
      finalChallengePageId: config.finalChallengePageId,
      quickAnchors,
      knowledgeAnchors,
      reviewAnchors,
      finalAnchors,
      vocabularyPairs: vocabulary.arabic,
      language: 'ar',
    }),
  };

  validateParallelOutput(output.englishPages, output.arabicPages, config);
  return output;
};
