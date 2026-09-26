import type { Exercise } from '../types';

/**
 * Answer normalisation shared by typed and chip-based answers.
 * Arabic answers are accepted with or without tashkeel and with common
 * hamza/alif/ta marbuta spelling variants, as learners type them.
 */
export const normalizeAnswer = (value: unknown): string => String(value ?? '')
  .trim()
  .toLocaleLowerCase()
  .normalize('NFKC')
  .replace(/[ؐ-ًؚ-ٰٟۖ-ۭ]/g, '')
  .replace(/ـ/g, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ؤ/g, 'و')
  .replace(/ئ/g, 'ي')
  .replace(/ة/g, 'ه')
  .replace(/[’‘`]/g, "'")
  .replace(/[.,!?;:"“”«»()،؛؟]/g, '')
  .replace(/\s+/g, ' ')
  .trim();

export const answersMatch = (given: unknown, accepted: readonly unknown[]): boolean => {
  const normalized = normalizeAnswer(given);
  return normalized.length > 0 && accepted.some(candidate => normalizeAnswer(candidate) === normalized);
};

/** Chip identity for chosen (not typed) answers: only Unicode form and outer spaces are ignored. */
const exactChip = (value: unknown): string => String(value ?? '').normalize('NFC').trim();

/** word-bank: correctAnswer lists the expected chip text for each [blank], in order. */
export const wordBankExpected = (exercise: Exercise): string[] =>
  Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.map(String) : [];

/** sentence-building: the authored chunk order plus any other accepted orders. */
export const sentenceBuildingAccepted = (exercise: Exercise): string[][] => {
  const authored = exercise.sentenceChunks ?? [];
  const alternatives = Array.isArray(exercise.correctAnswer)
    ? exercise.correctAnswer.filter((order: unknown): order is string[] => Array.isArray(order))
    : [];
  return [authored, ...alternatives];
};

export interface ErrorCorrectionAnswer {
  found: boolean;
  choice: number | null;
}

/**
 * Per-item correctness for the item-based language types. Returns null for
 * types this module does not score.
 */
export const scoreLanguageItems = (exercise: Exercise, answer: unknown): boolean[] | null => {
  switch (exercise.type) {
    case 'choose-form': {
      const choices = Array.isArray(answer) ? answer : [];
      return (exercise.formChoices ?? []).map((item, index) => choices[index] === item.answer);
    }
    case 'word-bank': {
      // Chips are chosen, not typed, so compare exactly: distractors may differ only in tashkeel.
      const placed = Array.isArray(answer) ? answer : [];
      return wordBankExpected(exercise).map((expected, index) => exactChip(placed[index]) === exactChip(expected));
    }
    case 'error-correction': {
      const items = Array.isArray(answer) ? answer as ErrorCorrectionAnswer[] : [];
      return (exercise.errorItems ?? []).map((item, index) => Boolean(items[index]?.found) && items[index]?.choice === item.answer);
    }
    case 'sentence-building': {
      const built = Array.isArray(answer) ? answer.map(exactChip) : [];
      const ok = sentenceBuildingAccepted(exercise).some(order =>
        order.length === built.length && order.every((chunk, index) => exactChip(chunk) === built[index]));
      return [ok];
    }
    case 'transformation': {
      const typed = Array.isArray(answer) ? answer : [];
      return (exercise.transformItems ?? []).map((item, index) => answersMatch(typed[index], item.answers));
    }
    default:
      return null;
  }
};

export const isLanguageItemType = (type: Exercise['type']): boolean =>
  type === 'choose-form'
  || type === 'word-bank'
  || type === 'error-correction'
  || type === 'sentence-building'
  || type === 'transformation';
