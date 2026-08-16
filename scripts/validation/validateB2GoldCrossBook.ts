import assert from 'node:assert/strict';
import type { BookData, Exercise } from '../../src/types';
import { meccaB2BookDataEn, meccaB2BookDataAr } from '../../src/data/mecca/b2';
import { yunusEmreB2BookDataEn, yunusEmreB2BookDataAr } from '../../src/data/yunusEmre/b2';

/** Temporary cross-book Gold contract for B2 books not yet migrated to Blueprint. */
const books: { label: string; book: BookData }[] = [
  { label: 'Mecca B2 EN', book: meccaB2BookDataEn },
  { label: 'Mecca B2 AR', book: meccaB2BookDataAr },
  { label: 'Yunus Emre B2 EN', book: yunusEmreB2BookDataEn },
  { label: 'Yunus Emre B2 AR', book: yunusEmreB2BookDataAr },
];

const isObjective = (exercise: Exercise): boolean =>
  exercise.type === 'multiple-choice' || exercise.type === 'true-false';

for (const { label, book } of books) {
  assert.equal(book.level, 'B2', `${label}: wrong CEFR level.`);
  assert.ok(book.pages.length > 0, `${label}: pages are missing.`);
  assert.ok(book.teacherGuide.length > 0, `${label}: Teacher Guide is missing.`);
  assert.ok(book.selfStudyGuide.length > 0, `${label}: Self-Study Guide is missing.`);

  let objectiveCount = 0;
  for (const page of book.pages) {
    for (const exercise of page.exercises ?? []) {
      if (!isObjective(exercise)) continue;
      objectiveCount += 1;
      const prefix = `${label} page ${page.id} exercise ${exercise.id}`;
      assert.ok(exercise.question?.trim(), `${prefix}: question missing.`);
      assert.ok((exercise.explanation?.trim().length ?? 0) >= 20, `${prefix}: explanation is too thin.`);
      assert.ok((exercise.feedback?.correct?.trim().length ?? 0) >= 20, `${prefix}: correct feedback is too thin/generic.`);
      assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 20, `${prefix}: incorrect feedback is too thin/generic.`);

      if (exercise.type === 'multiple-choice') {
        assert.ok((exercise.options?.length ?? 0) >= 3, `${prefix}: multiple-choice requires at least three options.`);
        assert.equal(new Set(exercise.options).size, exercise.options!.length, `${prefix}: duplicate options found.`);
        assert.equal(typeof exercise.correctAnswer, 'number', `${prefix}: multiple-choice answer must be numeric.`);
        assert.ok(
          typeof exercise.correctAnswer === 'number'
            && exercise.correctAnswer >= 0
            && exercise.correctAnswer < exercise.options!.length,
          `${prefix}: multiple-choice answer index is invalid.`,
        );
      } else {
        assert.equal(typeof exercise.correctAnswer, 'boolean', `${prefix}: true-false answer must be boolean.`);
      }
    }
  }

  assert.ok(objectiveCount >= 10, `${label}: effective book contains too few objective Gold items.`);
}

console.log('B2 legacy Gold cross-book contract: PASS');
console.log(`- ${books.length} unmigrated EN/AR B2 variants loaded`);
console.log('- Adam, Moses, and Abraham B2 are excluded because they are validated by validateB2Blueprints.ts');
console.log('- objective items have evidence explanations');
console.log('- correct and incorrect feedback are useful, not generic');
console.log('- MC/TF answer structures are valid');
