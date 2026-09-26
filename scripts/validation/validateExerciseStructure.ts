import type { BookData, Exercise } from '../../src/types';
import { bookRegistry } from '../../src/core/content/bookRegistry';

type Language = 'en' | 'ar';

/**
 * Technical integrity only: every check here protects rendering or scoring.
 * Pedagogical quality is reviewed manually (docs/MANUAL_CONTENT_AUTHORING_STANDARD.md).
 */

const duplicates = (values: readonly string[]): string[] => {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  values.forEach(value => {
    const key = value.trim();
    if (seen.has(key)) repeated.add(key);
    seen.add(key);
  });
  return [...repeated];
};

const validateExercise = (exercise: Exercise, where: string): string[] => {
  const errors: string[] = [];
  const at = `${where} ${exercise.id}`;

  switch (exercise.type) {
    case 'matching': {
      const pairs = exercise.matchingPairs ?? [];
      if (pairs.length < 2) errors.push(`${at}: matching needs at least 2 pairs`);
      const repeatedLeft = duplicates(pairs.map(pair => pair.left));
      const repeatedRight = duplicates(pairs.map(pair => pair.right));
      if (repeatedLeft.length) errors.push(`${at}: repeated left item(s) ${JSON.stringify(repeatedLeft)}`);
      if (repeatedRight.length) errors.push(`${at}: repeated right item(s) ${JSON.stringify(repeatedRight)} make the matching impossible to complete`);
      break;
    }
    case 'multiple-choice': {
      const options = exercise.options ?? [];
      if (options.length < 2) errors.push(`${at}: multiple-choice needs at least 2 options`);
      if (!Number.isInteger(exercise.correctAnswer) || exercise.correctAnswer < 0 || exercise.correctAnswer >= options.length) {
        errors.push(`${at}: correctAnswer is not a valid option index`);
      }
      const repeated = duplicates(options);
      if (repeated.length) errors.push(`${at}: repeated option(s) ${JSON.stringify(repeated)}`);
      break;
    }
    case 'drag-drop': {
      const groups = exercise.dragDropGroups ?? [];
      const answer = (exercise.correctAnswer ?? {}) as Record<string, string[]>;
      if (groups.length < 2) errors.push(`${at}: drag-drop needs at least 2 groups`);
      const items = groups.flatMap(group => group.items);
      const repeated = duplicates(items);
      if (repeated.length) errors.push(`${at}: an item appears in more than one group ${JSON.stringify(repeated)}`);
      groups.forEach(group => {
        const expected = answer[group.group] ?? [];
        if (expected.length !== group.items.length || group.items.some(item => !expected.includes(item))) {
          errors.push(`${at}: correctAnswer disagrees with group "${group.group}"`);
        }
      });
      break;
    }
    case 'sequencing': {
      const ids = (exercise.sequencingItems ?? []).map(item => item.id);
      const answer = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.map(String) : [];
      if (ids.length < 2) errors.push(`${at}: sequencing needs at least 2 items`);
      if (answer.length !== ids.length || ids.some(id => !answer.includes(id))) {
        errors.push(`${at}: correctAnswer is not a permutation of the sequencing item ids`);
      }
      break;
    }
    case 'fill-blanks': {
      if (!/\[blank\]|_{3,}/.test(exercise.fillBlanksText ?? '')) errors.push(`${at}: fill-blanks text has no [blank]`);
      const answers = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer : [exercise.correctAnswer];
      if (!answers.length || answers.some(answer => typeof answer !== 'string' || !answer.trim())) {
        errors.push(`${at}: fill-blanks needs a non-empty expected answer`);
      }
      break;
    }
    case 'choose-form': {
      const items = exercise.formChoices ?? [];
      if (!items.length) errors.push(`${at}: choose-form needs formChoices`);
      items.forEach((item, index) => {
        if ((item.sentence.match(/\[choice\]/g) ?? []).length !== 1) errors.push(`${at}: item ${index + 1} needs exactly one [choice]`);
        if (item.options.length < 2) errors.push(`${at}: item ${index + 1} needs at least 2 options`);
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) errors.push(`${at}: item ${index + 1} answer is not a valid option index`);
        if (duplicates(item.options).length) errors.push(`${at}: item ${index + 1} repeats an option`);
      });
      break;
    }
    case 'word-bank': {
      const blanks = (exercise.fillBlanksText?.match(/\[blank\]/g) ?? []).length;
      const expected = Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.map(String) : [];
      const bank = [...(exercise.wordBank ?? [])];
      if (!blanks) errors.push(`${at}: word-bank text has no [blank]`);
      if (expected.length !== blanks) errors.push(`${at}: word-bank needs one expected answer per [blank] (${blanks} blanks, ${expected.length} answers)`);
      expected.forEach(answer => {
        const index = bank.indexOf(answer);
        if (index < 0) errors.push(`${at}: expected answer "${answer}" is not available in the word bank`);
        else bank.splice(index, 1);
      });
      if (!bank.length) errors.push(`${at}: word bank needs at least one distractor`);
      break;
    }
    case 'error-correction': {
      const items = exercise.errorItems ?? [];
      if (!items.length) errors.push(`${at}: error-correction needs errorItems`);
      items.forEach((item, index) => {
        if (!item.error || !item.sentence.includes(item.error)) errors.push(`${at}: item ${index + 1} error text is not in its sentence`);
        if (item.options.length < 2) errors.push(`${at}: item ${index + 1} needs at least 2 correction options`);
        if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) errors.push(`${at}: item ${index + 1} answer is not a valid option index`);
        if (item.options[item.answer] === item.error) errors.push(`${at}: item ${index + 1} correction is identical to the error`);
      });
      break;
    }
    case 'sentence-building': {
      const chunks = exercise.sentenceChunks ?? [];
      if (chunks.length < 3) errors.push(`${at}: sentence-building needs at least 3 chunks`);
      if (Array.isArray(exercise.correctAnswer)) {
        exercise.correctAnswer.forEach((order: unknown, index: number) => {
          if (!Array.isArray(order) || [...order].sort().join('\u0000') !== [...chunks].sort().join('\u0000')) {
            errors.push(`${at}: alternative order ${index + 1} does not use exactly the authored chunks`);
          }
        });
      }
      break;
    }
    case 'transformation': {
      const items = exercise.transformItems ?? [];
      if (!items.length) errors.push(`${at}: transformation needs transformItems`);
      items.forEach((item, index) => {
        if ((item.frame.match(/\[blank\]/g) ?? []).length !== 1) errors.push(`${at}: item ${index + 1} frame needs exactly one [blank]`);
        if (!item.answers.length || item.answers.some(answer => !answer.trim())) errors.push(`${at}: item ${index + 1} needs accepted answers`);
      });
      break;
    }
    default:
      break;
  }

  return errors;
};

const validateLanguage = (book: BookData, language: Language, label: string): { errors: string[]; languageFocusCount: number } => {
  const errors: string[] = [];
  const ids: string[] = [];
  let languageFocusCount = 0;

  book.pages.forEach(page => {
    const where = `${label} ${language.toUpperCase()} page ${page.id}`;
    // Chapter pages carry a Quick Challenge; non-chapter story pages (e.g. References) do not.
    if (page.type === 'story' && (page.exercises ?? []).length) {
      const languageFocus = page.languageFocusExercises ?? [];
      if (!languageFocus.length) errors.push(`${where}: story page has no Language Focus exercises`);
      languageFocusCount += languageFocus.length;
      languageFocus.forEach(exercise => {
        ids.push(exercise.id);
        errors.push(...validateExercise(exercise, `${where} Language Focus`));
      });
    }
    (page.exercises ?? []).forEach(exercise => {
      if (!exercise) return;
      ids.push(exercise.id);
      errors.push(...validateExercise(exercise, where));
    });
  });

  const repeatedIds = duplicates(ids);
  if (repeatedIds.length) errors.push(`${label} ${language.toUpperCase()}: repeated exercise id(s) ${JSON.stringify(repeatedIds)}`);

  return { errors, languageFocusCount };
};

const main = async () => {
  console.log('============================================================');
  console.log('STORIES EXERCISE STRUCTURE VALIDATION');
  console.log('Loads every registered EN/AR book through the real UI finalizer.');
  console.log('============================================================');

  const failures: Array<{ label: string; errors: string[] }> = [];

  for (const definition of bookRegistry) {
    const label = `${definition.storyId} ${definition.level}`;
    try {
      const pair = await definition.load();
      const en = validateLanguage(pair.en, 'en', label);
      const ar = validateLanguage(pair.ar, 'ar', label);
      const errors = [...en.errors, ...ar.errors];
      if (errors.length) failures.push({ label, errors });
      else console.log(`[PASS] ${label} — Language Focus EN/AR ${en.languageFocusCount}/${ar.languageFocusCount}`);
    } catch (error) {
      failures.push({ label, errors: [error instanceof Error ? error.message : String(error)] });
    }
  }

  if (failures.length) {
    console.error('\n============================================================');
    console.error(`EXERCISE STRUCTURE VALIDATION FAILED — ${failures.length} book(s)`);
    console.error('============================================================');
    failures.forEach(({ label, errors }) => {
      console.error(`\n[FAIL] ${label}`);
      errors.forEach(error => console.error(`  - ${error}`));
    });
    process.exit(1);
  }

  console.log(`\nAll ${bookRegistry.length} registered book-level bundles passed exercise structure validation.`);
};

await main();
