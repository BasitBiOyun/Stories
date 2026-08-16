import assert from 'node:assert/strict';
import type { BookData, Exercise, PageData } from '../../src/types';
import type { LearningBlueprint } from '../../src/data/learningBlueprint';
import type { B1CanonicalHighlightTarget } from '../../src/data/b1HighlightStandard';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';

import { adamB1Pages } from '../../src/data/adam/b1/en/pages';
import { adamB1PagesAr } from '../../src/data/adam/b1/ar/pages';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { adamB1LearningBlueprint } from '../../src/data/adam/b1/learningBlueprint';
import { adamB1BlueprintConfig } from '../../src/data/adam/b1/config';
import { adamB1HighlightTargets } from '../../src/data/adam/b1/source';

import { mosesB1Pages } from '../../src/data/moses/b1/en/pages';
import { mosesB1PagesAr } from '../../src/data/moses/b1/ar/pages';
import { mosesB1BookDataEn, mosesB1BookDataAr } from '../../src/data/moses/b1';
import { mosesB1LearningBlueprint } from '../../src/data/moses/b1/learningBlueprint';
import { mosesB1BlueprintConfig } from '../../src/data/moses/b1/config';
import { mosesB1HighlightTargets } from '../../src/data/moses/b1/source';

import { abrahamB1Pages } from '../../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../../src/data/abraham/b1/ar/pages';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from '../../src/data/abraham/b1';
import { abrahamB1LearningBlueprint } from '../../src/data/abraham/b1/learningBlueprint';
import { abrahamB1BlueprintConfig } from '../../src/data/abraham/b1/config';
import { abrahamB1HighlightTargets } from '../../src/data/abraham/b1/source';

const protectedFields = ['id', 'type', 'title', 'subtitle', 'content', 'image', 'audioUrl', 'syncPoints', 'timedChunks'] as const;
const scoredTypes = new Set(['multiple-choice', 'true-false', 'matching', 'fill-blanks']);

type B1BlueprintConfig = {
  storyIds: readonly number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  glossaryPageIds: readonly [number, number] | readonly number[];
  reviewPageId: number;
  finalChallengePageId: number;
};

type BlueprintCase = {
  label: string;
  blueprint: LearningBlueprint;
  config: B1BlueprintConfig;
  rawEn: PageData[];
  rawAr: PageData[];
  bookEn: BookData;
  bookAr: BookData;
  targets: Record<number, readonly B1CanonicalHighlightTarget[]>;
  tapIds: string[];
};

const cases: BlueprintCase[] = [
  {
    label: 'Adam B1',
    blueprint: adamB1LearningBlueprint,
    config: adamB1BlueprintConfig,
    rawEn: adamB1Pages,
    rawAr: adamB1PagesAr,
    bookEn: adamB1BookDataEn,
    bookAr: adamB1BookDataAr,
    targets: adamB1HighlightTargets,
    tapIds: ['adam-b1-c10-quick', 'adam-b1-c5-quick'],
  },
  {
    label: 'Moses B1',
    blueprint: mosesB1LearningBlueprint,
    config: mosesB1BlueprintConfig,
    rawEn: mosesB1Pages,
    rawAr: mosesB1PagesAr,
    bookEn: mosesB1BookDataEn,
    bookAr: mosesB1BookDataAr,
    targets: mosesB1HighlightTargets,
    tapIds: ['moses-b1-c12-quick', 'moses-b1-c3-quick'],
  },
  {
    label: 'Abraham B1',
    blueprint: abrahamB1LearningBlueprint,
    config: abrahamB1BlueprintConfig,
    rawEn: abrahamB1Pages,
    rawAr: abrahamB1PagesAr,
    bookEn: abrahamB1BookDataEn,
    bookAr: abrahamB1BookDataAr,
    targets: abrahamB1HighlightTargets,
    tapIds: ['abraham-b1-c10-quick', 'abraham-b1-c5-quick'],
  },
];

const page = (pages: PageData[], id: number, label: string) => {
  const found = pages.find(candidate => candidate.id === id);
  assert.ok(found, `${label}: page ${id} is missing.`);
  return found;
};

const validateExercise = (exercise: Exercise, label: string) => {
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok(exercise.feedback?.correct?.trim(), `${label}: correct feedback missing.`);
  assert.ok(exercise.feedback?.incorrect?.trim(), `${label}: incorrect feedback missing.`);
  if (exercise.type === 'multiple-choice') {
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: multiple-choice needs at least three options.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: multiple-choice answer must be an index.`);
  }
  if (exercise.type === 'true-false') assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: true-false answer must be boolean.`);
  if (exercise.type === 'matching') assert.ok((exercise.matchingPairs?.length ?? 0) >= 2, `${label}: matching needs at least two pairs.`);
  if (exercise.type === 'fill-blanks') assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill-blanks marker missing.`);
  if (exercise.type === 'tap-reveal') assert.ok((exercise.tapRevealItems?.length ?? 0) >= 1, `${label}: tap-reveal content missing.`);
};

const validateCase = (current: BlueprintCase) => {
  const { label, blueprint, config, rawEn, rawAr, bookEn, bookAr, targets, tapIds } = current;
  const allItems = blueprint.chapters.flatMap(chapter => chapter.assessmentItems);
  const stageItems = (stage: 'quick' | 'knowledge' | 'review' | 'final') => allItems.filter(item => item.eligibleStages.includes(stage));

  assert.equal(blueprint.level, 'B1', `${label}: Blueprint level changed.`);
  assert.equal(blueprint.chapters.length, config.storyIds.length, `${label}: chapter count mismatch.`);
  assert.equal(allItems.length, config.storyIds.length + 26, `${label}: authored assessment count must equal one Quick per chapter plus 26 whole-book items.`);
  assert.equal(stageItems('quick').length, config.storyIds.length, `${label}: Quick count must equal chapter count.`);
  assert.equal(stageItems('knowledge').length, 8, `${label}: Knowledge count must be 8.`);
  assert.equal(stageItems('review').length, 8, `${label}: Review count must be 8.`);
  assert.equal(stageItems('final').length, 10, `${label}: Final count must be 10.`);

  const learningPoints = allItems.map(item => item.learningPointId);
  assert.equal(new Set(learningPoints).size, learningPoints.length, `${label}: an assessed learning point is repeated.`);

  const taps = allItems.filter(item => item.exercise.en.type === 'tap-reveal');
  assert.deepEqual(taps.map(item => item.id).sort(), [...tapIds].sort(), `${label}: Tap-Reveal policy changed.`);
  taps.forEach(item => assert.deepEqual(item.eligibleStages, ['quick'], `${item.id}: Tap-Reveal must be Quick-only.`));

  const reviewTypes = stageItems('review').map(item => item.exercise.en.type);
  assert.equal(reviewTypes.filter(type => type === 'multiple-choice').length, 4, `${label}: Review must contain 4 multiple-choice items.`);
  assert.equal(reviewTypes.filter(type => type === 'true-false').length, 4, `${label}: Review must contain 4 true-false items.`);
  assert.equal(new Set(reviewTypes).size, 2, `${label}: Review may only use MC and True/False before quiz-game conversion.`);

  const finalAuthoredTypes = new Set(stageItems('final').map(item => item.exercise.en.type));
  assert.deepEqual([...finalAuthoredTypes].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${label}: Final must preserve all four scored interaction types.`);

  for (const chapter of blueprint.chapters) {
    const enSource = page(rawEn, chapter.chapterId, `${label} EN raw source`);
    const arSource = page(rawAr, chapter.chapterId, `${label} AR raw source`);
    assert.ok(chapter.objectives.length >= 2, `${label} Chapter ${chapter.chapterId}: at least two objectives required.`);
    assert.equal(chapter.evidencePoints.length, chapter.assessmentItems.length, `${label} Chapter ${chapter.chapterId}: every selected evidence point should be assessed exactly once.`);

    chapter.evidencePoints.forEach(point => {
      assert.ok(highlightPhraseOccurs(enSource.content, point.evidence.en, 'en'), `${point.id}: English evidence is not in raw story prose.`);
      assert.ok(highlightPhraseOccurs(arSource.content, point.evidence.ar, 'ar'), `${point.id}: Arabic evidence is not in raw story prose.`);
    });

    const canonicalTargets = targets[chapter.chapterId] ?? [];
    assert.equal(chapter.vocabularyTargets.length, canonicalTargets.length, `${label} Chapter ${chapter.chapterId}: Blueprint/canonical Word Note count mismatch.`);
    chapter.vocabularyTargets.forEach((target, index) => {
      const canonical = canonicalTargets[index];
      assert.ok(canonical, `${label} Chapter ${chapter.chapterId}: missing canonical Word Note ${index + 1}.`);
      assert.equal(normalizeHighlightText(target.en.word, 'en'), normalizeHighlightText(canonical.en.word, 'en'), `${label} Chapter ${chapter.chapterId}: English Blueprint Word Note differs from canonical target.`);
      assert.equal(normalizeHighlightText(target.ar.word, 'ar'), normalizeHighlightText(canonical.ar.word, 'ar'), `${label} Chapter ${chapter.chapterId}: Arabic Blueprint Word Note differs from canonical target.`);
      assert.equal(target.en.definition, canonical.en.definition, `${label} Chapter ${chapter.chapterId}: English Word Note definition differs from canonical target.`);
      assert.equal(target.ar.definition, canonical.ar.definition, `${label} Chapter ${chapter.chapterId}: Arabic Word Note definition differs from canonical target.`);
    });
  }

  const validateLanguage = (languageLabel: string, rawPages: PageData[], outputPages: PageData[], language: 'en' | 'ar') => {
    assert.equal(outputPages.length, rawPages.length, `${languageLabel}: page count changed.`);
    assert.deepEqual(outputPages.map(item => [item.id, item.type]), rawPages.map(item => [item.id, item.type]), `${languageLabel}: page structure changed.`);

    for (const id of config.storyIds) {
      const source = page(rawPages, id, `${languageLabel} raw source`);
      const output = page(outputPages, id, languageLabel);
      for (const field of protectedFields) assert.deepEqual(output[field], source[field], `${languageLabel} Chapter ${id}: protected story field ${field} changed.`);
      assert.equal(output.animatedWords, undefined, `${languageLabel} Chapter ${id}: legacy animatedWords remain.`);
      assert.equal(output.exercises?.length, 1, `${languageLabel} Chapter ${id}: exactly one Quick Challenge required.`);
      const quick = output.exercises?.[0];
      assert.ok(quick?.id.startsWith(`blueprint-${blueprint.id}-quick-`), `${languageLabel} Chapter ${id}: Quick Challenge is not Blueprint-owned.`);
      validateExercise(quick, `${languageLabel} Chapter ${id} Quick`);

      const blueprintChapter = blueprint.chapters.find(chapter => chapter.chapterId === id)!;
      const expectedVocabulary = blueprintChapter.vocabularyTargets.map(target => ({ ...target[language] }));
      assert.deepEqual(output.vocabulary ?? [], expectedVocabulary, `${languageLabel} Chapter ${id}: runtime Word Notes are not Blueprint-owned.`);
      (output.vocabulary ?? []).forEach(entry => assert.ok(highlightPhraseOccurs(output.content, entry.word, language), `${languageLabel} Chapter ${id}: Word Note ${entry.word} is not in story prose.`));
    }

    const knowledge = page(outputPages, config.knowledgeCheckPageId, languageLabel);
    assert.equal(knowledge.exercises?.length, 8, `${languageLabel}: Knowledge Check must contain 8 activities.`);
    (knowledge.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${languageLabel} Knowledge ${index + 1}`));

    if (config.vocabularyPageId) {
      const vocabularyPage = page(outputPages, config.vocabularyPageId, languageLabel);
      assert.equal(vocabularyPage.vocabularyPairs?.length, 10, `${languageLabel}: Vocabulary in Context must contain 10 pairs.`);
    }

    const review = page(outputPages, config.reviewPageId, languageLabel);
    assert.equal(review.exercises?.length, 1, `${languageLabel}: Review must contain one quiz-game.`);
    assert.equal(review.exercises?.[0]?.type, 'quiz-game', `${languageLabel}: Review must use quiz-game.`);
    assert.equal(review.exercises?.[0]?.quizQuestions?.length, 8, `${languageLabel}: Review must contain 8 authored questions.`);

    const final = page(outputPages, config.finalChallengePageId, languageLabel);
    assert.equal(final.exercises?.length, 10, `${languageLabel}: Final Challenge must contain 10 activities.`);
    const finalTypes = new Set((final.exercises ?? []).map(exercise => exercise.type));
    assert.deepEqual([...finalTypes].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${languageLabel}: Final Challenge interaction variety changed.`);
    (final.exercises ?? []).forEach((exercise, index) => {
      assert.ok(scoredTypes.has(exercise.type), `${languageLabel} Final ${index + 1}: unsupported Final type ${exercise.type}.`);
      validateExercise(exercise, `${languageLabel} Final ${index + 1}`);
    });

    const midpoint = Math.ceil(config.storyIds.length / 2);
    const groups = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
    config.glossaryPageIds.forEach((id, index) => {
      const glossary = page(outputPages, id, languageLabel);
      const expected = groups[index].flatMap(chapterId => page(outputPages, chapterId, languageLabel).vocabulary ?? []);
      assert.deepEqual(glossary.vocabulary ?? [], expected, `${languageLabel}: glossary ${index + 1} is not derived exactly from final Word Notes.`);
    });
  };

  validateLanguage(`${label} EN`, rawEn, bookEn.pages, 'en');
  validateLanguage(`${label} AR`, rawAr, bookAr.pages, 'ar');

  assert.equal(bookEn.teacherGuide.length, config.storyIds.length, `${label} EN Teacher Guide chapter count mismatch.`);
  assert.equal(bookAr.teacherGuide.length, config.storyIds.length, `${label} AR Teacher Guide chapter count mismatch.`);
  assert.equal(bookEn.selfStudyGuide.length, config.storyIds.length, `${label} EN Self-Study Guide chapter count mismatch.`);
  assert.equal(bookAr.selfStudyGuide.length, config.storyIds.length, `${label} AR Self-Study Guide chapter count mismatch.`);

  config.storyIds.forEach(id => {
    const enQuick = page(bookEn.pages, id, `${label} EN`).exercises?.[0];
    const arQuick = page(bookAr.pages, id, `${label} AR`).exercises?.[0];
    assert.equal(enQuick?.type, arQuick?.type, `${label} Chapter ${id}: EN/AR Quick type parity changed.`);
  });
};

cases.forEach(validateCase);

console.log('B1 Blueprint Contract: PASS');
console.log(`- ${cases.length} migrated B1 books validated in both languages`);
console.log('- one Quick per chapter; Knowledge 8; Review 8 (4 MC + 4 TF); Final 10 (4 scored interaction types)');
console.log('- raw story prose and protected story fields unchanged');
console.log('- Tap-Reveal restricted to two Quick Challenges per migrated book');
console.log('- Word Notes, glossaries, Teacher Guide and Self-Study Guide derive from the reviewed Blueprint path');
