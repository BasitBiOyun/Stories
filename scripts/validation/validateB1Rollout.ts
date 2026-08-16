import assert from 'node:assert/strict';
import type { BookData, Exercise, PageData } from '../../src/types';
import { highlightPhraseOccurs } from '../../src/lib/highlightTextMatch';

import { yunusB1Pages } from '../../src/data/yunusEmre/b1/en/pages';
import { yunusEmreB1PagesAr } from '../../src/data/yunusEmre/b1/ar/pages';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';
import { yunusEmreB1GoldConfig } from '../../src/data/yunusEmre/b1/gold';

type LegacyConfig = {
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number] | number[];
  finalChallengePageId: number;
};

type Case = {
  label: string;
  language: 'en' | 'ar';
  canonical: PageData[];
  book: BookData;
  config: LegacyConfig;
};

/** Temporary rollout contract for the last B1 book not yet migrated to Blueprint. */
const cases: Case[] = [
  { label: 'Yunus Emre B1 EN', language: 'en', canonical: yunusB1Pages, book: yunusEmreB1BookDataEn, config: yunusEmreB1GoldConfig },
  { label: 'Yunus Emre B1 AR', language: 'ar', canonical: yunusEmreB1PagesAr, book: yunusEmreB1BookDataAr, config: yunusEmreB1GoldConfig },
];

const page = (pages: PageData[], id: number, label: string) => {
  const found = pages.find(candidate => candidate.id === id);
  assert.ok(found, `${label}: page ${id} missing.`);
  return found;
};

const validateExercise = (exercise: Exercise, label: string) => {
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok(exercise.feedback?.correct?.trim() && exercise.feedback?.incorrect?.trim(), `${label}: feedback missing.`);
};

for (const current of cases) {
  const { label, language, canonical, book, config } = current;
  assert.equal(book.level, 'B1', `${label}: level changed.`);
  assert.equal(book.pages.length, canonical.length, `${label}: page count changed.`);
  assert.deepEqual(book.pages.map(item => [item.id, item.type]), canonical.map(item => [item.id, item.type]), `${label}: page structure changed.`);

  for (const id of config.storyIds) {
    const source = page(canonical, id, label);
    const output = page(book.pages, id, label);
    assert.equal(output.content.replaceAll('**', ''), source.content.replaceAll('**', ''), `${label} Chapter ${id}: story prose changed.`);
    assert.equal(output.image, source.image, `${label} Chapter ${id}: image changed.`);
    assert.equal(output.audioUrl, source.audioUrl, `${label} Chapter ${id}: audio changed.`);
    assert.equal(output.exercises?.length, 1, `${label} Chapter ${id}: exactly one Quick Challenge required.`);
    const quick = output.exercises?.[0];
    assert.ok(quick?.id.startsWith('learning-b1-quick-'), `${label} Chapter ${id}: legacy Quick ownership changed before migration.`);
    validateExercise(quick, `${label} Chapter ${id} Quick`);
    (output.vocabulary ?? []).forEach(entry => assert.ok(highlightPhraseOccurs(output.content, entry.word, language), `${label} Chapter ${id}: Word Note ${entry.word} is not in story prose.`));
    assert.equal(output.animatedWords, undefined, `${label} Chapter ${id}: animatedWords remain.`);
  }

  const knowledge = page(book.pages, config.knowledgeCheckPageId, label);
  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge Check must contain 8 activities.`);
  (knowledge.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${label} Knowledge ${index + 1}`));

  const review = page(book.pages, config.reviewPageId, label);
  assert.equal(review.exercises?.length, 1, `${label}: Review must contain one quiz-game.`);
  assert.equal(review.exercises?.[0]?.type, 'quiz-game', `${label}: Review must use quiz-game.`);
  assert.equal(review.exercises?.[0]?.quizQuestions?.length, 8, `${label}: Review must contain 8 questions.`);

  const final = page(book.pages, config.finalChallengePageId, label);
  assert.equal(final.exercises?.length, 10, `${label}: Final Challenge must contain 10 activities.`);
  (final.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${label} Final ${index + 1}`));

  if (config.vocabularyPageId) {
    const vocabulary = page(book.pages, config.vocabularyPageId, label);
    assert.equal(vocabulary.vocabularyPairs?.length, 10, `${label}: Vocabulary Challenge must contain 10 pairs.`);
  }

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const groups = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
  config.glossaryPageIds.forEach((id, index) => {
    const glossary = page(book.pages, id, label);
    const expected = groups[index].flatMap(chapterId => page(book.pages, chapterId, label).vocabulary ?? []);
    assert.deepEqual(glossary.vocabulary ?? [], expected, `${label}: glossary is not derived from final Word Notes.`);
  });

  assert.equal(book.teacherGuide.length, config.storyIds.length, `${label}: Teacher Guide section count mismatch.`);
  assert.equal(book.selfStudyGuide.length, config.storyIds.length, `${label}: Self-Study Guide section count mismatch.`);
}

console.log('B1 legacy rollout: PASS');
console.log(`- ${cases.length} unmigrated B1 language variants checked`);
console.log('- Adam, Moses, Abraham, and Mecca B1 are intentionally excluded and covered by validateB1Blueprints.ts');
