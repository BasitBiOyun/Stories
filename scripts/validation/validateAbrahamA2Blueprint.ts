import assert from 'node:assert/strict';
import type { Exercise, PageData, QuizQuestion } from '../../src/types';
import type { BlueprintStage } from '../../src/data/learningBlueprint';
import { abrahamA2BookDataAr, abrahamA2BookDataEn } from '../../src/data/abraham/a2';
import { abrahamA2LearningBlueprint } from '../../src/data/abraham/a2/learningBlueprint';
import {
  abrahamA2HighlightTargets,
  abrahamA2PagesFinalAr,
  abrahamA2PagesFinalEn,
} from '../../src/data/abraham/a2/goldFinal';

const storyIds = Array.from({ length: 14 }, (_, index) => index + 1);
const expectedStageChapters: Record<BlueprintStage, number[]> = {
  quick: storyIds,
  knowledge: [1, 3, 5, 7, 9, 11, 13, 14],
  review: [2, 4, 6, 8, 10, 12, 13, 14],
  final: [1, 2, 4, 5, 7, 8, 10, 11, 13, 14],
};

const page = (pages: PageData[], id: number) => {
  const value = pages.find(candidate => candidate.id === id);
  assert.ok(value, `Page ${id} is missing.`);
  return value;
};

const correctQuizIndex = (question: QuizQuestion) => question.options.findIndex(option => option.isCorrect);

const assertExerciseParity = (en: Exercise, ar: Exercise, where: string) => {
  assert.equal(en.type, ar.type, `${where}: EN/AR exercise type differs.`);
  assert.equal(Array.isArray(en.correctAnswer), Array.isArray(ar.correctAnswer), `${where}: EN/AR answer array shape differs.`);
  assert.equal(en.correctAnswer === null, ar.correctAnswer === null, `${where}: EN/AR null answer shape differs.`);
  assert.equal(typeof en.correctAnswer, typeof ar.correctAnswer, `${where}: EN/AR answer type differs.`);
  if (en.type === 'multiple-choice') {
    assert.equal(en.options?.length, ar.options?.length, `${where}: EN/AR option count differs.`);
    assert.equal(en.correctAnswer, ar.correctAnswer, `${where}: EN/AR correct option index differs.`);
  }
  if (en.type === 'true-false') assert.equal(en.correctAnswer, ar.correctAnswer, `${where}: EN/AR true/false logic differs.`);
  if (en.type === 'matching') assert.equal(en.matchingPairs?.length, ar.matchingPairs?.length, `${where}: EN/AR matching count differs.`);
  if (en.type === 'fill-blanks') {
    assert.ok(en.fillBlanksText?.includes('[blank]'), `${where}: English fill blank is missing.`);
    assert.ok(ar.fillBlanksText?.includes('[blank]'), `${where}: Arabic fill blank is missing.`);
  }
  if (en.type === 'tap-reveal') assert.equal(en.tapRevealItems?.length, ar.tapRevealItems?.length, `${where}: EN/AR Tap-Reveal count differs.`);
};

assert.equal(abrahamA2LearningBlueprint.level, 'A2');
assert.equal(abrahamA2LearningBlueprint.storyId, 'abraham');
assert.equal(abrahamA2LearningBlueprint.chapters.length, 14, 'Abraham A2 blueprint must contain fourteen chapters.');

const allEvidenceIds = new Set<string>();
const allAssessmentIds = new Set<string>();
const allLearningPointUses = new Set<string>();
const authoredQuestionsEn = new Set<string>();
const authoredQuestionsAr = new Set<string>();
const tapItems: string[] = [];

for (const chapter of abrahamA2LearningBlueprint.chapters) {
  assert.equal(chapter.evidencePoints.length, 4, `Chapter ${chapter.chapterId}: expected four manually selected learning points.`);
  assert.ok(chapter.assessmentItems.length >= 2 && chapter.assessmentItems.length <= 4, `Chapter ${chapter.chapterId}: unexpected assessment count.`);
  assert.ok(chapter.assessmentItems.every(item => item.eligibleStages.length === 1), `Chapter ${chapter.chapterId}: every assessment must be stage-exclusive.`);
  assert.equal(chapter.assessmentItems.filter(item => item.eligibleStages[0] === 'quick').length, 1, `Chapter ${chapter.chapterId}: exactly one Quick Challenge is required.`);

  const localEvidence = new Set(chapter.evidencePoints.map(point => point.id));
  assert.equal(localEvidence.size, 4, `Chapter ${chapter.chapterId}: evidence points must be unique.`);
  chapter.evidencePoints.forEach(point => {
    assert.ok(!allEvidenceIds.has(point.id), `Duplicate evidence point: ${point.id}`);
    allEvidenceIds.add(point.id);
  });

  chapter.assessmentItems.forEach(item => {
    assert.ok(localEvidence.has(item.learningPointId), `${item.id}: learning point is outside its chapter.`);
    assert.ok(!allAssessmentIds.has(item.id), `Duplicate assessment ID: ${item.id}`);
    assert.ok(!allLearningPointUses.has(item.learningPointId), `${item.id}: learning point is assessed more than once.`);
    allAssessmentIds.add(item.id);
    allLearningPointUses.add(item.learningPointId);
    assertExerciseParity({ ...item.exercise.en, id: item.id }, { ...item.exercise.ar, id: item.id }, item.id);
    authoredQuestionsEn.add(item.exercise.en.question || '');
    authoredQuestionsAr.add(item.exercise.ar.question || '');
    if (item.exercise.en.type === 'tap-reveal') {
      tapItems.push(item.id);
      assert.deepEqual(item.eligibleStages, ['quick'], `${item.id}: Tap-Reveal must be Quick-only.`);
    }
  });
}

assert.equal(allEvidenceIds.size, 56, 'Abraham A2 must contain 56 distinct manually selected learning points.');
assert.equal(allAssessmentIds.size, 40, 'Abraham A2 should author exactly the 40 activities used at runtime.');
assert.equal(authoredQuestionsEn.size, 40, 'English authored assessment questions must all be distinct.');
assert.equal(authoredQuestionsAr.size, 40, 'Arabic authored assessment questions must all be distinct.');
assert.deepEqual(tapItems.sort(), ['abraham-a2-c3-quick', 'abraham-a2-c8-quick'], 'Abraham A2 must contain exactly two Quick-only Tap-Reveal activities.');

for (const stage of ['quick', 'knowledge', 'review', 'final'] as BlueprintStage[]) {
  const actual = abrahamA2LearningBlueprint.chapters
    .filter(chapter => chapter.assessmentItems.some(item => item.eligibleStages[0] === stage))
    .map(chapter => chapter.chapterId);
  assert.deepEqual(actual, expectedStageChapters[stage], `${stage}: chapter coverage differs from the reviewed whole-book plan.`);
}
assert.equal(new Set([...expectedStageChapters.knowledge, ...expectedStageChapters.review]).size, 14, 'Knowledge and Review together must cover all fourteen chapters.');

for (const [label, book, source] of [
  ['EN', abrahamA2BookDataEn, abrahamA2PagesFinalEn],
  ['AR', abrahamA2BookDataAr, abrahamA2PagesFinalAr],
] as const) {
  for (const id of storyIds) {
    const runtime = page(book.pages, id);
    const canonical = page(source, id);
    assert.equal(runtime.title, canonical.title, `${label} Chapter ${id}: story title changed.`);
    assert.equal(runtime.content, canonical.content, `${label} Chapter ${id}: story prose changed.`);
    assert.equal(runtime.image, canonical.image, `${label} Chapter ${id}: story image changed.`);
    assert.equal(runtime.audioUrl, canonical.audioUrl, `${label} Chapter ${id}: story audio changed.`);
    assert.equal(runtime.exercises?.length, 1, `${label} Chapter ${id}: expected one Quick Challenge.`);
    assert.ok(runtime.exercises?.[0].id.startsWith('blueprint-abraham-a2-quick-'), `${label} Chapter ${id}: Quick Challenge is not blueprint-authored.`);
  }
}

for (const id of storyIds) {
  const expectedEn = (abrahamA2HighlightTargets[id] ?? []).map(target => target.en);
  const expectedAr = (abrahamA2HighlightTargets[id] ?? []).map(target => target.ar);
  const en = page(abrahamA2BookDataEn.pages, id);
  const ar = page(abrahamA2BookDataAr.pages, id);
  assert.deepEqual(en.vocabulary, expectedEn, `Chapter ${id}: English Word Notes differ from reviewed highlights.`);
  assert.deepEqual(ar.vocabulary, expectedAr, `Chapter ${id}: Arabic Word Notes differ from reviewed highlights.`);
  assertExerciseParity(en.exercises![0], ar.exercises![0], `Chapter ${id} Quick Challenge`);
}

const knowledgeEn = page(abrahamA2BookDataEn.pages, 15).exercises || [];
const knowledgeAr = page(abrahamA2BookDataAr.pages, 15).exercises || [];
assert.equal(knowledgeEn.length, 8, 'English Knowledge Check must contain eight activities.');
assert.equal(knowledgeAr.length, 8, 'Arabic Knowledge Check must contain eight activities.');
knowledgeEn.forEach((exercise, index) => assertExerciseParity(exercise, knowledgeAr[index], `Knowledge ${index + 1}`));

const vocabularyEn = page(abrahamA2BookDataEn.pages, 16).vocabularyPairs || [];
const vocabularyAr = page(abrahamA2BookDataAr.pages, 16).vocabularyPairs || [];
assert.equal(vocabularyEn.length, 6, 'English Vocabulary Challenge must contain six pairs.');
assert.equal(vocabularyAr.length, 6, 'Arabic Vocabulary Challenge must contain six pairs.');

const reviewEn = page(abrahamA2BookDataEn.pages, 17).exercises?.[0];
const reviewAr = page(abrahamA2BookDataAr.pages, 17).exercises?.[0];
assert.equal(reviewEn?.type, 'quiz-game', 'English Review must use quiz-game.');
assert.equal(reviewAr?.type, 'quiz-game', 'Arabic Review must use quiz-game.');
assert.equal(reviewEn?.quizQuestions?.length, 8, 'English Review must contain eight questions.');
assert.equal(reviewAr?.quizQuestions?.length, 8, 'Arabic Review must contain eight questions.');
reviewEn!.quizQuestions!.forEach((question, index) => {
  const arQuestion = reviewAr!.quizQuestions![index];
  assert.equal(question.options.length, arQuestion.options.length, `Review ${index + 1}: EN/AR option count differs.`);
  assert.equal(correctQuizIndex(question), correctQuizIndex(arQuestion), `Review ${index + 1}: EN/AR answer logic differs.`);
});

const finalEn = page(abrahamA2BookDataEn.pages, 20).exercises || [];
const finalAr = page(abrahamA2BookDataAr.pages, 20).exercises || [];
assert.equal(finalEn.length, 10, 'English Final Challenge must contain ten activities.');
assert.equal(finalAr.length, 10, 'Arabic Final Challenge must contain ten activities.');
finalEn.forEach((exercise, index) => assertExerciseParity(exercise, finalAr[index], `Final ${index + 1}`));
assert.ok(finalEn.every(exercise => ['multiple-choice', 'true-false', 'matching', 'fill-blanks'].includes(exercise.type)), 'Final Challenge contains an unsupported or Tap-Reveal activity.');
assert.ok(new Set(finalEn.map(exercise => exercise.type)).size >= 3, 'Final Challenge should preserve at least three scored interaction types.');

const glossaryExpectedEn1 = storyIds.slice(0, 7).flatMap(id => (abrahamA2HighlightTargets[id] ?? []).map(target => target.en));
const glossaryExpectedEn2 = storyIds.slice(7).flatMap(id => (abrahamA2HighlightTargets[id] ?? []).map(target => target.en));
const glossaryExpectedAr1 = storyIds.slice(0, 7).flatMap(id => (abrahamA2HighlightTargets[id] ?? []).map(target => target.ar));
const glossaryExpectedAr2 = storyIds.slice(7).flatMap(id => (abrahamA2HighlightTargets[id] ?? []).map(target => target.ar));
assert.deepEqual(page(abrahamA2BookDataEn.pages, 18).vocabulary, glossaryExpectedEn1, 'English glossary Chapters 1–7 differs from reviewed highlights.');
assert.deepEqual(page(abrahamA2BookDataEn.pages, 19).vocabulary, glossaryExpectedEn2, 'English glossary Chapters 8–14 differs from reviewed highlights.');
assert.deepEqual(page(abrahamA2BookDataAr.pages, 18).vocabulary, glossaryExpectedAr1, 'Arabic glossary Chapters 1–7 differs from reviewed highlights.');
assert.deepEqual(page(abrahamA2BookDataAr.pages, 19).vocabulary, glossaryExpectedAr2, 'Arabic glossary Chapters 8–14 differs from reviewed highlights.');

assert.equal(abrahamA2BookDataEn.teacherGuide.length, 14, 'English Teacher Guide must contain fourteen sections.');
assert.equal(abrahamA2BookDataAr.teacherGuide.length, 14, 'Arabic Teacher Guide must contain fourteen sections.');
assert.equal(abrahamA2BookDataEn.selfStudyGuide.length, 14, 'English Self-Study Guide must contain fourteen sections.');
assert.equal(abrahamA2BookDataAr.selfStudyGuide.length, 14, 'Arabic Self-Study Guide must contain fourteen sections.');
assert.ok(abrahamA2BookDataEn.teacherGuide.every(section => section.extraResources === undefined), 'English Teacher Guide claims an unsupplied resource.');
assert.ok(abrahamA2BookDataAr.teacherGuide.every(section => section.extraResources === undefined), 'Arabic Teacher Guide claims an unsupplied resource.');

const runtimeQuestionsEn = [
  ...storyIds.map(id => page(abrahamA2BookDataEn.pages, id).exercises?.[0].question || ''),
  ...knowledgeEn.map(exercise => exercise.question || ''),
  ...(reviewEn?.quizQuestions || []).map(question => question.question),
  ...finalEn.map(exercise => exercise.question || ''),
];
const runtimeQuestionsAr = [
  ...storyIds.map(id => page(abrahamA2BookDataAr.pages, id).exercises?.[0].question || ''),
  ...knowledgeAr.map(exercise => exercise.question || ''),
  ...(reviewAr?.quizQuestions || []).map(question => question.question),
  ...finalAr.map(exercise => exercise.question || ''),
];
assert.equal(runtimeQuestionsEn.length, 40, 'English runtime must contain 40 assessed questions: 14 Quick + 8 Knowledge + 8 Review + 10 Final.');
assert.equal(runtimeQuestionsAr.length, 40, 'Arabic runtime must contain 40 assessed questions: 14 Quick + 8 Knowledge + 8 Review + 10 Final.');
assert.equal(new Set(runtimeQuestionsEn).size, 40, 'English runtime repeats an assessment question.');
assert.equal(new Set(runtimeQuestionsAr).size, 40, 'Arabic runtime repeats an assessment question.');
runtimeQuestionsEn.forEach(question => assert.ok(authoredQuestionsEn.has(question), `Runtime English question was not manually authored: ${question}`));
runtimeQuestionsAr.forEach(question => assert.ok(authoredQuestionsAr.has(question), `Runtime Arabic question was not manually authored: ${question}`));

const exerciseTypes = new Set<string>();
storyIds.forEach(id => exerciseTypes.add(page(abrahamA2BookDataEn.pages, id).exercises![0].type));
knowledgeEn.forEach(exercise => exerciseTypes.add(exercise.type));
finalEn.forEach(exercise => exerciseTypes.add(exercise.type));
for (const type of ['multiple-choice', 'true-false', 'matching', 'fill-blanks', 'tap-reveal']) {
  assert.ok(exerciseTypes.has(type), `Abraham A2 runtime is missing ${type} variety.`);
}

console.log('Abraham A2 manual bilingual blueprint: PASS');
console.log('- 14 chapters / 56 distinct manual learning points / 40 runtime-authored activities');
console.log('- 40 non-repeated runtime questions: 14 Quick + 8 Knowledge + 8 Review + 10 Final');
console.log('- exactly two Tap-Reveal activities, both Quick-only; Final has no Tap-Reveal');
console.log('- Knowledge + Review together cover all fourteen chapters');
console.log('- English/Arabic structure and answer logic are parallel and grounded in each story text');
console.log('- reviewed Word Notes feed chapter vocabulary and the complete two-part glossary');
console.log('- story prose, images, and audio are preserved');
console.log('- Teacher Guide and Self-Study Guide are blueprint-authored chapter by chapter');
