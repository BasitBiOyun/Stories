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

const protectedStoryFields = [
  'id',
  'type',
  'subtitle',
  'image',
  'audioUrl',
  'syncPoints',
  'timedChunks',
] as const;

type Case = {
  label: string;
  canonical: PageData[];
  book: BookData;
  config: B1GoldPageConfig;
  minWordNotes?: number;
};

const cases: Case[] = [
  { label: 'Adam B1 EN', canonical: adamB1Pages, book: adamB1BookDataEn, config: adamB1GoldConfig },
  { label: 'Adam B1 AR', canonical: adamB1PagesAr, book: adamB1BookDataAr, config: adamB1GoldConfig },
  { label: 'Abraham B1 EN', canonical: abrahamB1Pages, book: abrahamB1BookDataEn, config: abrahamB1GoldConfig },
  { label: 'Abraham B1 AR', canonical: abrahamB1PagesAr, book: abrahamB1BookDataAr, config: abrahamB1GoldConfig },
  { label: 'Moses B1 EN', canonical: mosesB1Pages, book: mosesB1BookDataEn, config: mosesB1RolloutConfig, minWordNotes: 4 },
  { label: 'Moses B1 AR', canonical: mosesB1PagesAr, book: mosesB1BookDataAr, config: mosesB1RolloutConfig },
  { label: 'Mecca B1 EN', canonical: meccaB1Pages, book: meccaB1BookDataEn, config: meccaB1GoldConfig },
  { label: 'Mecca B1 AR', canonical: meccaB1PagesAr, book: meccaB1BookDataAr, config: meccaB1GoldConfig },
  { label: 'Yunus Emre B1 EN', canonical: yunusB1Pages, book: yunusEmreB1BookDataEn, config: yunusEmreB1GoldConfig },
  { label: 'Yunus Emre B1 AR', canonical: yunusEmreB1PagesAr, book: yunusEmreB1BookDataAr, config: yunusEmreB1GoldConfig },
];

const findPage = (pages: PageData[], id: number, label: string): PageData => {
  const page = pages.find((item) => item.id === id);
  assert.ok(page, `${label}: page ${id} is missing.`);
  return page;
};

const validateObjective = (exercise: Exercise, label: string) => {
  assert.ok(
    exercise.type === 'multiple-choice' || exercise.type === 'true-false',
    `${label}: scored item must be multiple-choice or true-false.`,
  );
  assert.ok(exercise.question?.trim(), `${label}: question text is missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation is missing.`);
  assert.ok(exercise.feedback?.correct?.trim(), `${label}: correct feedback is missing.`);
  assert.ok(exercise.feedback?.incorrect?.trim(), `${label}: retry feedback is missing.`);

  if (exercise.type === 'multiple-choice') {
    const options = exercise.options ?? [];
    assert.ok(options.length >= 3, `${label}: multiple-choice item needs at least three options.`);
    assert.equal(new Set(options).size, options.length, `${label}: duplicate answer options found.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: correct answer must be an option index.`);
    assert.ok(
      typeof exercise.correctAnswer === 'number'
        && exercise.correctAnswer >= 0
        && exercise.correctAnswer < options.length,
      `${label}: correct answer index is invalid.`,
    );
  } else {
    assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: true-false answer must be boolean.`);
  }
};

const validateAnswerBalance = (exercises: Exercise[], label: string) => {
  const positions = exercises
    .filter((exercise) => exercise.type === 'multiple-choice' && typeof exercise.correctAnswer === 'number')
    .map((exercise) => exercise.correctAnswer as number);
  if (positions.length >= 3) {
    assert.ok(new Set(positions).size >= 2, `${label}: correct answers are concentrated in one option position.`);
  }
};

const validateCase = ({ label, canonical, book, config, minWordNotes = 3 }: Case) => {
  const language: 'en' | 'ar' = label.endsWith(' AR') ? 'ar' : 'en';
  const stripApprovedBold = (value: string) => value.replaceAll('**', '');
  assert.equal(book.level, 'B1', `${label}: level changed.`);
  assert.equal(book.pages.length, canonical.length, `${label}: page count changed.`);
  assert.deepEqual(
    book.pages.map((page) => [page.id, page.type]),
    canonical.map((page) => [page.id, page.type]),
    `${label}: page ids/types changed.`,
  );

  for (const id of config.storyIds) {
    const source = findPage(canonical, id, label);
    const final = findPage(book.pages, id, label);

    for (const field of protectedStoryFields) {
      assert.deepEqual(final[field], source[field], `${label} chapter ${id}: protected field ${field} changed.`);
    }
    assert.equal(final.title, stripApprovedBold(source.title), `${label} chapter ${id}: title changed beyond approved formatting cleanup.`);
    assert.equal(final.content, stripApprovedBold(source.content), `${label} chapter ${id}: canonical prose changed beyond approved formatting cleanup.`);

    const sourceHotspots = source.hotspots ?? [];
    const finalHotspots = final.hotspots ?? [];
    assert.equal(finalHotspots.length, sourceHotspots.length, `${label} chapter ${id}: hotspot count changed.`);
    sourceHotspots.forEach((hotspot, index) => {
      const current = finalHotspots[index];
      assert.ok(current, `${label} chapter ${id}: hotspot ${index + 1} missing.`);
      assert.equal(current.id, hotspot.id, `${label} chapter ${id}: hotspot id changed.`);
      assert.equal(current.x, hotspot.x, `${label} ${hotspot.id}: hotspot x changed.`);
      assert.equal(current.y, hotspot.y, `${label} ${hotspot.id}: hotspot y changed.`);
      assert.ok(current.title.trim(), `${label} ${hotspot.id}: hotspot title is empty.`);
      assert.ok(current.description.trim(), `${label} ${hotspot.id}: hotspot description is empty.`);
    });

    assert.equal(final.exercises?.length, 1, `${label} chapter ${id}: exactly one Quick Challenge is required.`);
    const quick = final.exercises?.[0];
    assert.ok(quick, `${label} chapter ${id}: Quick Challenge missing.`);
    assert.ok(quick.explanation?.trim(), `${label} chapter ${id}: Quick Challenge explanation missing.`);
    assert.ok(quick.feedback?.incorrect?.trim(), `${label} chapter ${id}: Quick Challenge retry feedback missing.`);

    const vocabulary = final.vocabulary ?? [];
    assert.ok(
      vocabulary.length >= minWordNotes && vocabulary.length <= 5,
      `${label} chapter ${id}: Word Notes must contain ${minWordNotes}–5 safe reviewed items.`,
    );
    const vocabKeys = vocabulary.map((entry) => entry.word.toLowerCase().trim());
    assert.equal(new Set(vocabKeys).size, vocabKeys.length, `${label} chapter ${id}: duplicate Word Notes found.`);
    vocabulary.forEach((entry) => {
      assert.ok(entry.word.trim(), `${label} chapter ${id}: empty vocabulary word.`);
      assert.ok(entry.definition.trim(), `${label} chapter ${id}: empty vocabulary definition.`);
    });
    vocabulary.forEach((entry) => {
      assert.ok(highlightPhraseOccurs(final.content, entry.word, language), `${label} chapter ${id}: vocabulary ${entry.word} is not grounded in the chapter.`);
    });
    final.animatedWords?.forEach((word) => {
      assert.ok(highlightPhraseOccurs(final.content, word, language), `${label} chapter ${id}: animated highlight ${word} is not grounded in the chapter.`);
    });
  }

  const knowledge = findPage(book.pages, config.knowledgeCheckPageId, label);
  const review = findPage(book.pages, config.reviewPageId, label);
  const finalChallenge = findPage(book.pages, config.finalChallengePageId, label);

  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge Check must have 8 questions.`);
  assert.equal(review.exercises?.length, 8, `${label}: Review Challenge must have 8 questions.`);
  assert.equal(finalChallenge.exercises?.length, 10, `${label}: Final Challenge must have 10 questions.`);

  for (const [page, pageLabel] of [
    [knowledge, 'Knowledge Check'],
    [review, 'Review Challenge'],
    [finalChallenge, 'Final Challenge'],
  ] as const) {
    const exercises = page.exercises ?? [];
    exercises.forEach((exercise, index) => validateObjective(exercise, `${label} ${pageLabel} ${index + 1}`));
    validateAnswerBalance(exercises, `${label} ${pageLabel}`);
  }

  if (config.vocabularyPageId) {
    const vocabularyPage = findPage(book.pages, config.vocabularyPageId, label);
    const pairs = vocabularyPage.vocabularyPairs ?? [];
    assert.equal(pairs.length, 10, `${label}: Vocabulary in Context must have 10 pairs.`);
    const words = pairs.map((pair) => pair.word.toLowerCase().trim());
    assert.equal(new Set(words).size, words.length, `${label}: Vocabulary in Context has duplicates.`);
  }

  const glossaries = config.glossaryPageIds.map((id) => findPage(book.pages, id, label));
  for (const glossary of glossaries) {
    const entries = glossary.vocabulary ?? [];
    assert.ok(entries.length >= 18, `${label}: each Master Glossary part must contain at least 18 reviewed entries.`);
    const keys = entries.map((entry) => entry.word.toLowerCase().trim());
    assert.equal(new Set(keys).size, keys.length, `${label} ${glossary.title}: duplicate glossary entries found.`);
  }
  const glossaryCounts = glossaries.map((page) => page.vocabulary?.length ?? 0);
  assert.ok(Math.abs(glossaryCounts[0] - glossaryCounts[1]) <= 6, `${label}: glossary sections are too unbalanced.`);

  assert.equal(book.teacherGuide.length, config.storyIds.length, `${label}: Teacher Guide must have one section per story chapter.`);
  assert.equal(book.selfStudyGuide.length, config.storyIds.length, `${label}: Self-Study Guide must have one section per story chapter.`);

  book.teacherGuide.forEach((section, index) => {
    assert.equal(section.extraResources, undefined, `${label} Teacher Guide ${index + 1}: unsupported resource claim remains.`);
    assert.ok(section.objectives.length >= 3, `${label} Teacher Guide ${index + 1}: objectives are too thin.`);
    assert.ok(section.lessonPlan.trim(), `${label} Teacher Guide ${index + 1}: lesson plan missing.`);
    assert.ok(section.discussionPoints.length >= 1, `${label} Teacher Guide ${index + 1}: discussion points missing.`);
  });

  book.selfStudyGuide.forEach((section, index) => {
    assert.ok(section.lessonPlan.trim(), `${label} Self-Study ${index + 1}: study routine missing.`);
    assert.ok(section.interactiveTips.length >= 1, `${label} Self-Study ${index + 1}: interactive guidance missing.`);
  });
};

cases.forEach(validateCase);

console.log('B1 Rollout Gold: PASS');
console.log(`- ${cases.length} finalized B1 language variants validated`);
console.log('- Adam, Abraham, Moses, Mecca, and Yunus Emre: EN + AR');
console.log('- canonical story text/image/audio/timing and hotspot coordinates preserved');
console.log('- one chapter Quick Challenge per story chapter');
console.log('- Knowledge Check = 8; Review Challenge = 8; Final Challenge = 10');
console.log('- dedicated objective Final Challenge sets use stable chapter-grounded questions');
console.log('- Master Glossary = two reviewed sections with at least 18 entries each');
console.log('- unsupported Teacher Guide worksheet/resource claims removed');
