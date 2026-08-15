import assert from 'node:assert/strict';
import type { BookData, Exercise, PageData } from '../../src/types';
import type { B1GoldPageConfig } from '../../src/data/b1GoldFactory';
import { highlightPhraseOccurs } from '../../src/lib/highlightTextMatch';

import { adamB1Pages } from '../../src/data/adam/b1/en/pages';
import { adamB1PagesAr } from '../../src/data/adam/b1/ar/pages';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { adamB1GoldConfig } from '../../src/data/adam/b1/gold';

import { abrahamB1Pages } from '../../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../../src/data/abraham/b1/ar/pages';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from '../../src/data/abraham/b1';
import { abrahamB1GoldConfig } from '../../src/data/abraham/b1/gold';

import { mosesB1Pages } from '../../src/data/moses/b1/en/pages';
import { mosesB1PagesAr } from '../../src/data/moses/b1/ar/pages';
import { mosesB1BookDataEn, mosesB1BookDataAr } from '../../src/data/moses/b1';
import { mosesB1RolloutConfig } from '../../src/data/moses/b1/rollout';

import { meccaB1Pages } from '../../src/data/mecca/b1/en/pages';
import { meccaB1PagesAr } from '../../src/data/mecca/b1/ar/pages';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { meccaB1GoldConfig } from '../../src/data/mecca/b1/gold';

import { yunusB1Pages } from '../../src/data/yunusEmre/b1/en/pages';
import { yunusEmreB1PagesAr } from '../../src/data/yunusEmre/b1/ar/pages';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';
import { yunusEmreB1GoldConfig } from '../../src/data/yunusEmre/b1/gold';

const protectedStoryFields = ['id', 'type', 'subtitle', 'image', 'audioUrl', 'syncPoints', 'timedChunks'] as const;
const learningTypes = new Set(['multiple-choice', 'true-false', 'matching', 'fill-blanks', 'tap-reveal']);

type Case = {
  label: string;
  canonical: PageData[];
  book: BookData;
  config: B1GoldPageConfig;
};

const cases: Case[] = [
  { label: 'Adam B1 EN', canonical: adamB1Pages, book: adamB1BookDataEn, config: adamB1GoldConfig },
  { label: 'Adam B1 AR', canonical: adamB1PagesAr, book: adamB1BookDataAr, config: adamB1GoldConfig },
  { label: 'Abraham B1 EN', canonical: abrahamB1Pages, book: abrahamB1BookDataEn, config: abrahamB1GoldConfig },
  { label: 'Abraham B1 AR', canonical: abrahamB1PagesAr, book: abrahamB1BookDataAr, config: abrahamB1GoldConfig },
  { label: 'Moses B1 EN', canonical: mosesB1Pages, book: mosesB1BookDataEn, config: mosesB1RolloutConfig },
  { label: 'Moses B1 AR', canonical: mosesB1PagesAr, book: mosesB1BookDataAr, config: mosesB1RolloutConfig },
  { label: 'Mecca B1 EN', canonical: meccaB1Pages, book: meccaB1BookDataEn, config: meccaB1GoldConfig },
  { label: 'Mecca B1 AR', canonical: meccaB1PagesAr, book: meccaB1BookDataAr, config: meccaB1GoldConfig },
  { label: 'Yunus Emre B1 EN', canonical: yunusB1Pages, book: yunusEmreB1BookDataEn, config: yunusEmreB1GoldConfig },
  { label: 'Yunus Emre B1 AR', canonical: yunusEmreB1PagesAr, book: yunusEmreB1BookDataAr, config: yunusEmreB1GoldConfig },
];

const findPage = (pages: PageData[], id: number, label: string): PageData => {
  const page = pages.find(item => item.id === id);
  assert.ok(page, `${label}: page ${id} is missing.`);
  return page;
};

const validateGeneratedExercise = (exercise: Exercise, label: string) => {
  assert.ok(learningTypes.has(exercise.type), `${label}: unsupported unified exercise type ${exercise.type}.`);
  assert.ok(exercise.question?.trim(), `${label}: question text is missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation is missing.`);
  assert.ok(exercise.feedback?.correct?.trim(), `${label}: correct feedback is missing.`);
  assert.ok(exercise.feedback?.incorrect?.trim(), `${label}: retry feedback is missing.`);

  if (exercise.type === 'multiple-choice') {
    const options = exercise.options ?? [];
    assert.ok(options.length >= 3, `${label}: multiple-choice item needs at least three options.`);
    assert.equal(new Set(options).size, options.length, `${label}: duplicate answer options found.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: correct answer must be an option index.`);
  }
  if (exercise.type === 'true-false') assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: true-false answer must be boolean.`);
  if (exercise.type === 'matching') assert.ok((exercise.matchingPairs?.length ?? 0) >= 3, `${label}: matching needs at least three pairs.`);
  if (exercise.type === 'fill-blanks') assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill-blank marker missing.`);
  if (exercise.type === 'tap-reveal') assert.ok((exercise.tapRevealItems?.length ?? 0) >= 1, `${label}: tap-reveal item missing.`);
};

const validateCase = ({ label, canonical, book, config }: Case) => {
  const language: 'en' | 'ar' = label.endsWith(' AR') ? 'ar' : 'en';
  const stripApprovedBold = (value: string) => value.replaceAll('**', '');
  assert.equal(book.level, 'B1', `${label}: level changed.`);
  assert.equal(book.pages.length, canonical.length, `${label}: page count changed.`);
  assert.deepEqual(book.pages.map(page => [page.id, page.type]), canonical.map(page => [page.id, page.type]), `${label}: page ids/types changed.`);

  const observedTypes = new Set<string>();

  for (const id of config.storyIds) {
    const source = findPage(canonical, id, label);
    const final = findPage(book.pages, id, label);

    for (const field of protectedStoryFields) assert.deepEqual(final[field], source[field], `${label} chapter ${id}: protected field ${field} changed.`);
    assert.equal(final.title, stripApprovedBold(source.title), `${label} chapter ${id}: title changed beyond approved formatting cleanup.`);
    assert.equal(final.content, stripApprovedBold(source.content), `${label} chapter ${id}: canonical prose changed beyond approved formatting cleanup.`);

    const finalHotspots = final.hotspots ?? [];
    const sourceHotspotIds = new Set((source.hotspots ?? []).map(hotspot => hotspot.id));
    finalHotspots.forEach(hotspot => {
      assert.ok(sourceHotspotIds.has(hotspot.id), `${label} chapter ${id}: effective hotspot ${hotspot.id} is not from the authored chapter.`);
      assert.ok(hotspot.title.trim() && hotspot.description.trim(), `${label} chapter ${id}: hotspot ${hotspot.id} is incomplete.`);
    });

    assert.equal(final.exercises?.length, 1, `${label} chapter ${id}: exactly one Quick Challenge is required.`);
    const quick = final.exercises?.[0];
    assert.ok(quick, `${label} chapter ${id}: Quick Challenge missing.`);
    assert.ok(quick.id.startsWith('learning-b1-quick-'), `${label} chapter ${id}: Quick Challenge is not owned by unified B1 learning system.`);
    validateGeneratedExercise(quick, `${label} chapter ${id} Quick Challenge`);
    observedTypes.add(quick.type);

    const vocabulary = final.vocabulary ?? [];
    assert.ok(vocabulary.length >= 1 && vocabulary.length <= 5, `${label} chapter ${id}: Word Notes must contain 1–5 reviewed items.`);
    const vocabKeys = vocabulary.map(entry => entry.word.toLowerCase().trim());
    assert.equal(new Set(vocabKeys).size, vocabKeys.length, `${label} chapter ${id}: duplicate Word Notes found.`);
    vocabulary.forEach(entry => {
      assert.ok(entry.word.trim() && entry.definition.trim(), `${label} chapter ${id}: incomplete Word Note.`);
      assert.ok(highlightPhraseOccurs(final.content, entry.word, language), `${label} chapter ${id}: vocabulary ${entry.word} is not grounded in the chapter.`);
    });
    assert.equal(final.animatedWords, undefined, `${label} chapter ${id}: legacy animatedWords must not remain at runtime.`);
  }

  const knowledge = findPage(book.pages, config.knowledgeCheckPageId, label);
  const review = findPage(book.pages, config.reviewPageId, label);
  const finalChallenge = findPage(book.pages, config.finalChallengePageId, label);

  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge Check must have 8 activities.`);
  (knowledge.exercises ?? []).forEach((exercise, index) => {
    validateGeneratedExercise(exercise, `${label} Knowledge ${index + 1}`);
    observedTypes.add(exercise.type);
  });

  assert.equal(review.exercises?.length, 1, `${label}: Review must use one unified quiz-game exercise.`);
  const reviewGame = review.exercises?.[0];
  assert.equal(reviewGame?.type, 'quiz-game', `${label}: Review must use quiz-game.`);
  assert.equal(reviewGame?.quizQuestions?.length, 8, `${label}: Review quiz-game must contain 8 questions.`);

  assert.equal(finalChallenge.exercises?.length, 10, `${label}: Final Challenge must have 10 activities.`);
  (finalChallenge.exercises ?? []).forEach((exercise, index) => {
    validateGeneratedExercise(exercise, `${label} Final ${index + 1}`);
    observedTypes.add(exercise.type);
  });

  for (const type of learningTypes) assert.ok(observedTypes.has(type), `${label}: unified B1 output is missing ${type} variety.`);

  if (config.vocabularyPageId) {
    const vocabularyPage = findPage(book.pages, config.vocabularyPageId, label);
    const pairs = vocabularyPage.vocabularyPairs ?? [];
    assert.equal(pairs.length, 10, `${label}: Vocabulary Challenge must have 10 pairs.`);
    const words = pairs.map(pair => pair.word.toLowerCase().trim());
    assert.equal(new Set(words).size, words.length, `${label}: Vocabulary Challenge has duplicate words.`);
  }

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const glossaryStoryGroups = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
  config.glossaryPageIds.map(id => findPage(book.pages, id, label)).forEach((glossary, index) => {
    const expected = glossaryStoryGroups[index].flatMap(storyId => findPage(book.pages, storyId, label).vocabulary ?? []);
    assert.deepEqual(glossary.vocabulary ?? [], expected, `${label}: ${glossary.title} must derive exactly from final Word Notes.`);
  });

  assert.equal(book.teacherGuide.length, config.storyIds.length, `${label}: Teacher Guide must have one section per story chapter.`);
  assert.equal(book.selfStudyGuide.length, config.storyIds.length, `${label}: Self-Study Guide must have one section per story chapter.`);
  book.teacherGuide.forEach((section, index) => {
    assert.equal(section.extraResources, undefined, `${label} Teacher Guide ${index + 1}: unsupported resource claim remains.`);
    assert.ok(section.objectives.length >= 3 && section.lessonPlan.trim(), `${label} Teacher Guide ${index + 1}: section is incomplete.`);
  });
  book.selfStudyGuide.forEach((section, index) => {
    assert.ok(section.lessonPlan.trim() && section.interactiveTips.length >= 1, `${label} Self-Study ${index + 1}: section is incomplete.`);
  });
};

cases.forEach(validateCase);

console.log('B1 Rollout Unified Contract: PASS');
console.log(`- ${cases.length} finalized B1 language variants validated`);
console.log('- canonical story prose and protected story fields remain unchanged');
console.log('- effective hotspots may be a safe bilingual subset of authored chapter hotspots');
console.log('- one level-aware Quick Challenge per chapter');
console.log('- Knowledge = 8; Review quiz-game = 8; Final = 10; Vocabulary = 10 where present');
console.log('- multiple-choice, true-false, matching, fill-blanks, and tap-reveal variety enforced');
console.log('- glossary remains exact final Word Notes derivation');
console.log('- Teacher Guide and Self-Study Guide remain chapter-complete and source-grounded');
