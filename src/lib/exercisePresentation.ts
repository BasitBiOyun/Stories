import type { Exercise, QuizQuestion } from '../types';

const hashSeed = (seed: string): number => {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

/**
 * Rotate rather than randomly shuffle so the presentation is stable between
 * renders and screenshots, while authored answer indexes remain untouched.
 * When an authored MC answer is index 0, a non-zero rotation guarantees it is
 * not presented as A.
 */
export const presentMultipleChoice = (exercise: Exercise) => {
  const options = exercise.options ?? [];
  if (options.length <= 1) {
    return options.map((text, displayIndex) => ({ text, originalIndex: displayIndex }));
  }

  const maxOffset = options.length - 1;
  const offset = 1 + (hashSeed(exercise.id) % maxOffset);
  return options.map((_, displayIndex) => {
    const originalIndex = (displayIndex + offset) % options.length;
    return { text: options[originalIndex], originalIndex };
  });
};

export const presentQuizOptions = (question: QuizQuestion, seed: string) => {
  const options = question.options ?? [];
  if (options.length <= 1) return options;
  const maxOffset = options.length - 1;
  const offset = 1 + (hashSeed(seed) % maxOffset);
  return options.map((_, displayIndex) => options[(displayIndex + offset) % options.length]);
};

/** Keep left concepts stable for reading, but move the right column away from
 * the authored row alignment so learners must actually make a match. */
export const presentMatchingMeanings = (exercise: Exercise): string[] => {
  const meanings = (exercise.matchingPairs ?? []).map((pair) => pair.right);
  if (meanings.length <= 1) return meanings;
  const maxOffset = meanings.length - 1;
  const offset = 1 + (hashSeed(`${exercise.id}:matching`) % maxOffset);
  return meanings.map((_, displayIndex) => meanings[(displayIndex + offset) % meanings.length]);
};

/** Hide internal CEFR level prefixes from learner-facing exercise titles. */
export const presentExerciseTitle = (exercise: Pick<Exercise, 'title'>): string =>
  (exercise.title ?? '').replace(/^(?:A2|B1|B2)\s*[:\-–—]?\s*/i, '').trim();
