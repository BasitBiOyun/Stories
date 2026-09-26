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
