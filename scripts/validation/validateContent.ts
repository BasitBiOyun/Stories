import { bookRegistry } from '../../src/core/content/bookRegistry';
import { exercisePolicyByLevel } from '../../src/core/content/exercisePolicy';
import type { BookData, Exercise, PageData } from '../../src/types';

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

const result: ValidationResult = { errors: [], warnings: [] };
const error = (message: string) => result.errors.push(message);
const warn = (message: string) => result.warnings.push(message);

const validateExercise = (bookKey: string, page: PageData, exercise: Exercise, seenIds: Set<string>) => {
  if (!exercise.id?.trim()) error(`${bookKey} page ${page.id}: exercise has no id.`);
  if (seenIds.has(exercise.id)) error(`${bookKey}: duplicate exercise id ${exercise.id}.`);
  seenIds.add(exercise.id);

  if (!exercise.type) error(`${bookKey} page ${page.id}: exercise ${exercise.id} has no type.`);
  if (exercise.correctAnswer === undefined && exercise.type !== 'reflection' && exercise.type !== 'tap-reveal') {
    error(`${bookKey} page ${page.id}: exercise ${exercise.id} has no correct answer.`);
  }
  if (!exercise.feedback?.correct?.trim() || !exercise.feedback?.incorrect?.trim()) {
    warn(`${bookKey} page ${page.id}: exercise ${exercise.id} has incomplete feedback.`);
  }
  if (exercise.type === 'multiple-choice' && exercise.options?.length && !exercise.options.includes(String(exercise.correctAnswer))) {
    warn(`${bookKey} page ${page.id}: multiple-choice answer is not one of its options (${exercise.id}).`);
  }
};

const countFinalQuestions = (book: BookData): number => {
  const finalPage = book.pages.find(page => page.type === 'final-challenge');
  if (!finalPage) return 0;
  return (finalPage.exercises ?? []).reduce((total, exercise) => total + (exercise.quizQuestions?.length ?? 1), 0);
};

const validateBook = (key: string, book: BookData) => {
  if (!book.pages.length) error(`${key}: book has no pages.`);
  const pageIds = new Set<number>();
  const exerciseIds = new Set<string>();

  for (const page of book.pages) {
    if (pageIds.has(page.id)) error(`${key}: duplicate page id ${page.id}.`);
    pageIds.add(page.id);

    if (!page.title?.trim()) error(`${key} page ${page.id}: title is empty.`);
    if (typeof page.content !== 'string') error(`${key} page ${page.id}: content is not a string.`);
    if (page.hotspots?.some(hotspot => hotspot.x < 0 || hotspot.x > 100 || hotspot.y < 0 || hotspot.y > 100)) {
      error(`${key} page ${page.id}: hotspot coordinates must be between 0 and 100.`);
    }
    for (const exercise of page.exercises ?? []) validateExercise(key, page, exercise, exerciseIds);
  }

  const finalQuestionCount = countFinalQuestions(book);
  const target = exercisePolicyByLevel[book.level].finalChallengeQuestions;
  if (finalQuestionCount === 0) {
    warn(`${key}: final challenge is missing or contains no questions.`);
  } else if (finalQuestionCount !== target) {
    warn(`${key}: final challenge has ${finalQuestionCount} questions; target for ${book.level} is ${target}.`);
  }

  if (!book.teacherGuide?.length) warn(`${key}: teacher guide is empty.`);
  if (!book.selfStudyGuide?.length && !book.studentGuideSections?.length && !book.studentGuideText?.trim()) {
    warn(`${key}: self-study guide is empty.`);
  }
};

const main = async () => {
  const registryKeys = new Set<string>();
  for (const definition of bookRegistry) {
    const key = `${definition.storyId}:${definition.level}`;
    if (registryKeys.has(key)) error(`Duplicate registry entry: ${key}.`);
    registryKeys.add(key);

    const pair = await definition.load();
    validateBook(`${key}:en`, pair.en);
    validateBook(`${key}:ar`, pair.ar);

    if (pair.en.level !== definition.level || pair.ar.level !== definition.level) {
      error(`${key}: BookData level does not match registry level.`);
    }

    const enStoryIds = pair.en.pages.filter(page => page.type === 'story').map(page => page.id).join(',');
    const arStoryIds = pair.ar.pages.filter(page => page.type === 'story').map(page => page.id).join(',');
    if (enStoryIds !== arStoryIds) warn(`${key}: English and Arabic story-page ids are not aligned.`);
  }

  for (const warning of result.warnings) console.warn(`WARN: ${warning}`);
  for (const validationError of result.errors) console.error(`ERROR: ${validationError}`);

  console.log(`Validated ${bookRegistry.length} registered level books (${bookRegistry.length * 2} language variants).`);
  console.log(`${result.errors.length} error(s), ${result.warnings.length} warning(s).`);
  if (result.errors.length) process.exitCode = 1;
};

await main();
