import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { adamB1Pages } from '../../src/data/adam/b1/en/pages';
import { adamB1PagesAr } from '../../src/data/adam/b1/ar/pages';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { adamB1LearningBlueprint } from '../../src/data/adam/b1/learningBlueprint';
import { adamB1BlueprintConfig } from '../../src/data/adam/b1/config';
import { highlightPhraseOccurs } from '../../src/lib/highlightTextMatch';

const protectedFields = ['id', 'type', 'title', 'subtitle', 'content', 'image', 'audioUrl', 'syncPoints', 'timedChunks'] as const;
const scoredTypes = new Set(['multiple-choice', 'true-false', 'matching', 'fill-blanks']);

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

const allItems = adamB1LearningBlueprint.chapters.flatMap(chapter => chapter.assessmentItems);
assert.equal(adamB1LearningBlueprint.level, 'B1');
assert.equal(adamB1LearningBlueprint.storyId, 'adam');
assert.equal(adamB1LearningBlueprint.chapters.length, 12, 'Adam B1 Blueprint must contain 12 chapters.');
assert.equal(allItems.length, 38, 'Adam B1 Blueprint must contain exactly 38 authored assessment items.');

const stageCount = (stage: 'quick' | 'knowledge' | 'review' | 'final') => allItems.filter(item => item.eligibleStages.includes(stage)).length;
assert.equal(stageCount('quick'), 12, 'Adam B1 Quick count must be 12.');
assert.equal(stageCount('knowledge'), 8, 'Adam B1 Knowledge count must be 8.');
assert.equal(stageCount('review'), 8, 'Adam B1 Review count must be 8.');
assert.equal(stageCount('final'), 10, 'Adam B1 Final count must be 10.');

const learningPoints = allItems.map(item => item.learningPointId);
assert.equal(new Set(learningPoints).size, learningPoints.length, 'Adam B1 repeats an assessed learning point.');
const taps = allItems.filter(item => item.exercise.en.type === 'tap-reveal');
assert.deepEqual(taps.map(item => item.id).sort(), ['adam-b1-c10-quick', 'adam-b1-c5-quick'], 'Adam B1 Tap-Reveal policy changed.');
taps.forEach(item => assert.deepEqual(item.eligibleStages, ['quick'], `${item.id}: Tap-Reveal must be Quick-only.`));

for (const chapter of adamB1LearningBlueprint.chapters) {
  const enSource = page(adamB1Pages, chapter.chapterId, 'Adam B1 EN source');
  const arSource = page(adamB1PagesAr, chapter.chapterId, 'Adam B1 AR source');
  assert.ok(chapter.objectives.length >= 2, `Chapter ${chapter.chapterId}: at least two objectives required.`);
  assert.equal(chapter.evidencePoints.length, chapter.assessmentItems.length, `Chapter ${chapter.chapterId}: every selected evidence point should be assessed exactly once.`);
  chapter.evidencePoints.forEach(point => {
    assert.ok(highlightPhraseOccurs(enSource.content, point.evidence.en, 'en'), `${point.id}: English evidence is not in raw story prose.`);
    assert.ok(highlightPhraseOccurs(arSource.content, point.evidence.ar, 'ar'), `${point.id}: Arabic evidence is not in raw story prose.`);
  });
}

const validateLanguage = (label: string, sourcePages: PageData[], outputPages: PageData[], language: 'en' | 'ar') => {
  assert.equal(outputPages.length, sourcePages.length, `${label}: page count changed.`);
  assert.deepEqual(outputPages.map(item => [item.id, item.type]), sourcePages.map(item => [item.id, item.type]), `${label}: page structure changed.`);

  for (const id of adamB1BlueprintConfig.storyIds) {
    const source = page(sourcePages, id, `${label} source`);
    const output = page(outputPages, id, label);
    for (const field of protectedFields) assert.deepEqual(output[field], source[field], `${label} Chapter ${id}: protected story field ${field} changed.`);
    assert.equal(output.animatedWords, undefined, `${label} Chapter ${id}: legacy animatedWords remain.`);
    assert.equal(output.exercises?.length, 1, `${label} Chapter ${id}: exactly one Quick Challenge required.`);
    const quick = output.exercises?.[0];
    assert.ok(quick?.id.startsWith('blueprint-adam-b1-quick-'), `${label} Chapter ${id}: Quick Challenge is not Blueprint-owned.`);
    validateExercise(quick, `${label} Chapter ${id} Quick`);
    (output.vocabulary ?? []).forEach(entry => {
      assert.ok(highlightPhraseOccurs(output.content, entry.word, language), `${label} Chapter ${id}: Word Note ${entry.word} is not in story prose.`);
    });
  }

  const knowledge = page(outputPages, adamB1BlueprintConfig.knowledgeCheckPageId, label);
  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge Check must contain 8 activities.`);
  (knowledge.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${label} Knowledge ${index + 1}`));

  const review = page(outputPages, adamB1BlueprintConfig.reviewPageId, label);
  assert.equal(review.exercises?.length, 1, `${label}: Review must contain one quiz-game.`);
  assert.equal(review.exercises?.[0]?.type, 'quiz-game', `${label}: Review must use quiz-game.`);
  assert.equal(review.exercises?.[0]?.quizQuestions?.length, 8, `${label}: Review must contain 8 authored questions.`);

  const final = page(outputPages, adamB1BlueprintConfig.finalChallengePageId, label);
  assert.equal(final.exercises?.length, 10, `${label}: Final Challenge must contain 10 activities.`);
  const finalTypes = new Set((final.exercises ?? []).map(exercise => exercise.type));
  assert.ok(finalTypes.size >= 3, `${label}: Final Challenge must preserve at least three interaction types.`);
  (final.exercises ?? []).forEach((exercise, index) => {
    assert.ok(scoredTypes.has(exercise.type), `${label} Final ${index + 1}: unsupported Final type ${exercise.type}.`);
    validateExercise(exercise, `${label} Final ${index + 1}`);
  });

  const midpoint = Math.ceil(adamB1BlueprintConfig.storyIds.length / 2);
  const groups = [adamB1BlueprintConfig.storyIds.slice(0, midpoint), adamB1BlueprintConfig.storyIds.slice(midpoint)];
  adamB1BlueprintConfig.glossaryPageIds.forEach((id, index) => {
    const glossary = page(outputPages, id, label);
    const expected = groups[index].flatMap(chapterId => page(outputPages, chapterId, label).vocabulary ?? []);
    assert.deepEqual(glossary.vocabulary ?? [], expected, `${label}: glossary ${index + 1} is not derived exactly from final Word Notes.`);
  });
};

validateLanguage('Adam B1 EN', adamB1Pages, adamB1BookDataEn.pages, 'en');
validateLanguage('Adam B1 AR', adamB1PagesAr, adamB1BookDataAr.pages, 'ar');
assert.equal(adamB1BookDataEn.teacherGuide.length, 12, 'Adam B1 EN Teacher Guide must have 12 sections.');
assert.equal(adamB1BookDataAr.teacherGuide.length, 12, 'Adam B1 AR Teacher Guide must have 12 sections.');
assert.equal(adamB1BookDataEn.selfStudyGuide.length, 12, 'Adam B1 EN Self-Study Guide must have 12 sections.');
assert.equal(adamB1BookDataAr.selfStudyGuide.length, 12, 'Adam B1 AR Self-Study Guide must have 12 sections.');

console.log('B1 Blueprint Contract: PASS');
console.log('- Adam B1 EN/AR: 12 chapters, 38 unique assessment points');
console.log('- Quick 12; Knowledge 8; Review 8; Final 10');
console.log('- raw story prose and protected story fields unchanged');
console.log('- Tap-Reveal restricted to two Quick Challenges');
console.log('- Word Notes, glossaries, Teacher Guide and Self-Study Guide derive from the reviewed Blueprint path');
