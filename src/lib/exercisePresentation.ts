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

const seededRandom = (seed: string) => {
  let state = hashSeed(seed) || 1;
  return () => {
    // xorshift32: small, deterministic and good enough for presentation order.
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
};

/**
 * Deterministic shuffle in which no item keeps its authored position.
 * A plain rotation preserves the relative order, so one known pair reveals
 * the rest; a seeded derangement does not, and stays stable across renders.
 */
export const presentDeranged = <T,>(items: readonly T[], seed: string): T[] => {
  if (items.length <= 1) return [...items];
  const random = seededRandom(seed);
  for (let attempt = 0; attempt < 64; attempt += 1) {
    const order = items.map((_, index) => index);
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    if (order.every((originalIndex, displayIndex) => originalIndex !== displayIndex)) {
      return order.map(index => items[index]);
    }
  }
  return items.map((_, index) => items[(index + 1) % items.length]);
};

/** Keep left concepts stable for reading, but move the right column away from
 * the authored row alignment so learners must actually make a match. */
export const presentMatchingMeanings = (exercise: Exercise): string[] =>
  presentDeranged((exercise.matchingPairs ?? []).map((pair) => pair.right), `${exercise.id}:matching`);

/** Hide internal CEFR level prefixes from learner-facing exercise titles. */
export const presentExerciseTitle = (exercise: Pick<Exercise, 'title'>): string =>
  (exercise.title ?? '').replace(/^(?:A2|B1|B2)\b\s*[:\-–—]?\s*/i, '').trim();
