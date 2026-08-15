import type { Exercise, PageData, QuizQuestion } from '../types';
import { normalizeHighlightText } from '../lib/highlightTextMatch';
import {
  applyValidatedAdvancedParallelLearning,
  type AdvancedParallelConfig,
} from './advancedParallelLearning';

type SafeAdvancedParallelInput = {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: AdvancedParallelConfig;
};

type SafeAdvancedParallelResult = {
  englishPages: PageData[];
  arabicPages: PageData[];
};

type Language = 'en' | 'ar';

const storyPage = (pages: PageData[], id: number): PageData | undefined =>
  pages.find((page) => page.type === 'story' && page.id === id);

const answerShape = (exercise: Exercise): string => {
  if (typeof exercise.correctAnswer === 'number') return 'number';
  if (typeof exercise.correctAnswer === 'boolean') return 'boolean';
  if (typeof exercise.correctAnswer === 'string') return 'string';
  if (exercise.correctAnswer && typeof exercise.correctAnswer === 'object') return 'object';
  return String(exercise.correctAnswer);
};

const validateSourceParity = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: AdvancedParallelConfig,
): void => {
  config.storyIds.forEach((chapterId) => {
    const en = storyPage(englishPages, chapterId);
    const ar = storyPage(arabicPages, chapterId);
    if (!en || !ar) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} is missing in one language.`);
    }

    const enHotspots = en.hotspots ?? [];
    const arHotspots = ar.hotspots ?? [];
    if (enHotspots.length !== arHotspots.length) {
      throw new Error(
        `[Advanced bilingual source parity] Chapter ${chapterId} hotspot counts differ (EN ${enHotspots.length}, AR ${arHotspots.length}).`,
      );
    }
    enHotspots.forEach((hotspot, index) => {
      if (hotspot.id !== arHotspots[index]?.id) {
        throw new Error(
          `[Advanced bilingual source parity] Chapter ${chapterId} hotspot ${index + 1} IDs differ (EN ${hotspot.id}, AR ${arHotspots[index]?.id ?? 'missing'}).`,
        );
      }
    });

    const enVocabulary = en.vocabulary?.length || 0;
    const arVocabulary = ar.vocabulary?.length || 0;
    if (enVocabulary !== arVocabulary) {
      throw new Error(
        `[Advanced bilingual source parity] Chapter ${chapterId} Word Notes counts differ (EN ${enVocabulary}, AR ${arVocabulary}).`,
      );
    }

    const enQuick = en.exercises?.[0];
    const arQuick = ar.exercises?.[0];
    if (Boolean(enQuick) !== Boolean(arQuick)) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge is missing in one language.`);
    }
    if (!enQuick || !arQuick) return;

    if (enQuick.type !== arQuick.type) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge types differ.`);
    }
    if ((enQuick.options?.length || 0) !== (arQuick.options?.length || 0)) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge option counts differ.`);
    }
    if (answerShape(enQuick) !== answerShape(arQuick)) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge answer shapes differ.`);
    }
  });
};

const cleanArabicText = (value: string): string => value
  .replace(/وفقًا لـالفصل/g, 'وفقًا لما ورد في الفصل')
  .replace(/وWord Notes الخاصة به/g, 'وملاحظات المفردات الخاصة به')
  .replace(/Word Notes/g, 'ملاحظات المفردات');

const cleanArabicExercise = (exercise: Exercise): Exercise => ({
  ...exercise,
  title: exercise.title ? cleanArabicText(exercise.title) : exercise.title,
  instructions: exercise.instructions ? cleanArabicText(exercise.instructions) : exercise.instructions,
  question: exercise.question ? cleanArabicText(exercise.question) : exercise.question,
  explanation: exercise.explanation ? cleanArabicText(exercise.explanation) : exercise.explanation,
  feedback: exercise.feedback
    ? {
        correct: exercise.feedback.correct ? cleanArabicText(exercise.feedback.correct) : exercise.feedback.correct,
        incorrect: exercise.feedback.incorrect ? cleanArabicText(exercise.feedback.incorrect) : exercise.feedback.incorrect,
      }
    : exercise.feedback,
  tapRevealItems: exercise.tapRevealItems?.map((item) => ({
    ...item,
    question: cleanArabicText(item.question),
    answer: cleanArabicText(item.answer),
  })),
  matchingPairs: exercise.matchingPairs?.map((pair) => ({
    ...pair,
    left: cleanArabicText(pair.left),
    right: cleanArabicText(pair.right),
  })),
  quizQuestions: exercise.quizQuestions?.map((item) => ({
    ...item,
    question: cleanArabicText(item.question),
    hint: item.hint ? cleanArabicText(item.hint) : item.hint,
    options: item.options.map((option) => ({ ...option, text: cleanArabicText(option.text) })),
  })),
});

const cleanArabicDerivedCopy = (pages: PageData[]): PageData[] => pages.map((page) => ({
  ...page,
  content: page.type === 'story' ? page.content : cleanArabicText(page.content || ''),
  exercises: page.exercises?.map(cleanArabicExercise),
  vocabularyPairs: page.vocabularyPairs?.map((pair) => ({
    ...pair,
    word: cleanArabicText(pair.word),
    meaning: cleanArabicText(pair.meaning),
  })),
}));

const stripDemoStoryMedia = (pages: PageData[]): PageData[] => pages.map((page) => {
  const image = page.type === 'story' && page.image?.startsWith('https://picsum.photos/') ? '' : page.image;
  const audioUrl = page.audioUrl?.includes('soundhelix.com/examples/mp3/') ? '' : page.audioUrl;
  if (image === page.image && audioUrl === page.audioUrl) return page;
  return { ...page, image, audioUrl };
});

const tokenSet = (value: string, language: Language): Set<string> => new Set(
  normalizeHighlightText(value, language).split(' ').filter((token) => token.length > 2),
);

const nearDuplicate = (left: string, right: string, language: Language): boolean => {
  const leftKey = normalizeHighlightText(left, language);
  const rightKey = normalizeHighlightText(right, language);
  if (!leftKey || !rightKey) return false;
  if (leftKey === rightKey) return true;
  if (leftKey.length >= 16 && rightKey.length >= 16 && (leftKey.includes(rightKey) || rightKey.includes(leftKey))) return true;

  const leftTokens = tokenSet(left, language);
  const rightTokens = tokenSet(right, language);
  if (leftTokens.size < 3 || rightTokens.size < 3) return false;
  const intersection = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  const union = new Set([...leftTokens, ...rightTokens]).size;
  return union > 0 && intersection / union >= 0.92;
};

const validateOptionSet = (
  options: Array<{ text: string; isCorrect: boolean }>,
  language: Language,
  label: string,
): void => {
  const correct = options.filter((option) => option.isCorrect);
  if (correct.length !== 1) {
    throw new Error(`[Advanced distractor guard] ${label} must have exactly one correct option.`);
  }
  options.filter((option) => !option.isCorrect).forEach((option) => {
    if (nearDuplicate(option.text, correct[0].text, language)) {
      throw new Error(`[Advanced distractor guard] ${label} contains a distractor that is effectively the same as the correct answer.`);
    }
  });
};

const validateQuizQuestion = (question: QuizQuestion, language: Language, label: string): void => {
  validateOptionSet(question.options, language, label);
};

const validateGeneratedDistractors = (pages: PageData[], language: Language): void => {
  pages.forEach((page) => page.exercises?.forEach((exercise, exerciseIndex) => {
    if (exercise.type === 'multiple-choice' && exercise.options?.length && typeof exercise.correctAnswer === 'number') {
      validateOptionSet(
        exercise.options.map((text, index) => ({ text, isCorrect: index === exercise.correctAnswer })),
        language,
        `Page ${page.id} activity ${exerciseIndex + 1}`,
      );
    }
    exercise.quizQuestions?.forEach((question, questionIndex) => {
      validateQuizQuestion(question, language, `Page ${page.id} review question ${questionIndex + 1}`);
    });
  }));
};

/**
 * Hardened runtime wrapper for B1/B2 learning material.
 * - fails fast instead of silently truncating EN/AR hotspot or Word Notes mismatches;
 * - verifies hotspot IDs stay aligned between languages;
 * - validates authored Quick Challenge structure before it can become an anchor;
 * - keeps Arabic generated UI copy fully Arabic;
 * - removes random/demo media from effective story/support pages;
 * - rejects duplicate or near-duplicate distractors in activities and review quizzes.
 * Story prose is never modified.
 */
export const applySafeAdvancedParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: SafeAdvancedParallelInput): SafeAdvancedParallelResult => {
  validateSourceParity(englishPages, arabicPages, config);

  const output = applyValidatedAdvancedParallelLearning({ englishPages, arabicPages, config });
  const englishOutput = stripDemoStoryMedia(output.englishPages);
  const arabicOutput = stripDemoStoryMedia(cleanArabicDerivedCopy(output.arabicPages));

  validateGeneratedDistractors(englishOutput, 'en');
  validateGeneratedDistractors(arabicOutput, 'ar');

  return { englishPages: englishOutput, arabicPages: arabicOutput };
};
