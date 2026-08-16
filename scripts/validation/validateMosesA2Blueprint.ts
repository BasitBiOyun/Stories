import assert from 'node:assert/strict';
import type { Exercise, PageData, QuizQuestion } from '../../src/types';
import { mosesA2BookDataAr, mosesA2BookDataEn } from '../../src/data/moses/a2';
import { mosesA2LearningBlueprint } from '../../src/data/moses/a2/learningBlueprint';
import {
  mosesA2HighlightTargets,
  mosesA2PagesFinalAr,
  mosesA2PagesFinalEn,
} from '../../src/data/moses/a2/goldFinal';

const storyIds = Array.from({ length: 16 }, (_, index) => index + 1);
const MOSES_A2_CH11_AUDIO = 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fa2%2Faudio%2F10_Chapter_11_The_Signs_of_Allah.mp3?alt=media&token=5ae1efb5-a3ed-4cd0-b6df-e0486199c964';

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
  if (en.type === 'tap-reveal') assert.equal(en.tapRevealItems?.length, ar.tapRevealItems?.length, `${where}: EN/AR tap-reveal count differs.`);
};

assert.equal(mosesA2LearningBlueprint.level, 'A2');
assert.equal(mosesA2LearningBlueprint.storyId, 'moses');
assert.equal(mosesA2LearningBlueprint.chapters.length, 16, 'Moses A2 blueprint must contain sixteen chapters.');

const allEvidenceIds = new Set<string>();
const allAssessmentIds = new Set<string>();
const allLearningPointUses = new Set<string>();
const authoredQuestionsEn = new Set<string>();
const authoredQuestionsAr = new Set<string>();
const tapItems: string[] = [];

for (const chapter of mosesA2LearningBlueprint.chapters) {
  assert.equal(chapter.evidencePoints.length, 4, `Chapter ${chapter.chapterId}: expected four manual learning points.`);
  assert.equal(chapter.assessmentItems.length, 4, `Chapter ${chapter.chapterId}: expected four manual assessment items.`);
  assert.deepEqual(
    chapter.assessmentItems.map(item => item.eligibleStages[0]).sort(),
    ['final', 'knowledge', 'quick', 'review'],
    `Chapter ${chapter.chapterId}: must have one exclusive item for each stage.`,
  );
  assert.ok(chapter.assessmentItems.every(item => item.eligibleStages.length === 1), `Chapter ${chapter.chapterId}: items must be stage-exclusive.`);

  const localEvidence = new Set(chapter.evidencePoints.map(point => point.id));
  assert.equal(localEvidence.size, 4, `Chapter ${chapter.chapterId}: learning points must be unique.`);
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

assert.equal(allEvidenceIds.size, 64, 'Moses A2 blueprint must contain 64 distinct learning points.');
assert.equal(allAssessmentIds.size, 64, 'Moses A2 blueprint must contain 64 distinct assessment items.');
assert.deepEqual(tapItems.sort(), ['moses-a2-c10-quick', 'moses-a2-c3-quick'], 'Moses A2 must contain exactly two Quick-only Tap-Reveal activities.');

for (const [label, book, source] of [
  ['EN', mosesA2BookDataEn, mosesA2PagesFinalEn],
  ['AR', mosesA2BookDataAr, mosesA2PagesFinalAr],
] as const) {
  for (const id of storyIds) {
    const runtime = page(book.pages, id);
    const canonical = page(source, id);
    assert.equal(runtime.title, canonical.title, `${label} Chapter ${id}: story title changed.`);
    assert.equal(runtime.content, canonical.content, `${label} Chapter ${id}: story prose changed.`);
    assert.equal(runtime.image, canonical.image, `${label} Chapter ${id}: story image changed.`);
    if (label === 'AR' && id === 11) {
      assert.equal(runtime.audioUrl, MOSES_A2_CH11_AUDIO, 'Arabic Chapter 11 must use the real audio MP3 instead of the image URL.');
    } else {
      assert.equal(runtime.audioUrl, canonical.audioUrl, `${label} Chapter ${id}: story audio changed unexpectedly.`);
    }
    assert.equal(runtime.exercises?.length, 1, `${label} Chapter ${id}: expected one Quick Challenge.`);
    assert.ok(runtime.exercises?.[0].id.startsWith('blueprint-moses-a2-quick-'), `${label} Chapter ${id}: Quick Challenge is not blueprint-authored.`);
  }
}

for (const id of storyIds) {
  const expectedEn = (mosesA2HighlightTargets[id] ?? []).map(target => target.en);
  const expectedAr = (mosesA2HighlightTargets[id] ?? []).map(target => target.ar);
  const en = page(mosesA2BookDataEn.pages, id);
  const ar = page(mosesA2BookDataAr.pages, id);
  assert.deepEqual(en.vocabulary, expectedEn, `Chapter ${id}: English Word Notes differ from reviewed highlights.`);
  assert.deepEqual(ar.vocabulary, expectedAr, `Chapter ${id}: Arabic Word Notes differ from reviewed highlights.`);
  assertExerciseParity(en.exercises![0], ar.exercises![0], `Chapter ${id} Quick Challenge`);
}

const knowledgeEn = page(mosesA2BookDataEn.pages, 17).exercises || [];
const knowledgeAr = page(mosesA2BookDataAr.pages, 17).exercises || [];
assert.equal(knowledgeEn.length, 8, 'English Knowledge Check must contain eight activities.');
assert.equal(knowledgeAr.length, 8, 'Arabic Knowledge Check must contain eight activities.');
knowledgeEn.forEach((exercise, index) => assertExerciseParity(exercise, knowledgeAr[index], `Knowledge ${index + 1}`));

const vocabularyEn = page(mosesA2BookDataEn.pages, 18).vocabularyPairs || [];
const vocabularyAr = page(mosesA2BookDataAr.pages, 18).vocabularyPairs || [];
assert.equal(vocabularyEn.length, 6, 'English Vocabulary Challenge must contain six pairs.');
assert.equal(vocabularyAr.length, 6, 'Arabic Vocabulary Challenge must contain six pairs.');

const reviewEn = page(mosesA2BookDataEn.pages, 21).exercises?.[0];
const reviewAr = page(mosesA2BookDataAr.pages, 21).exercises?.[0];
assert.equal(reviewEn?.type, 'quiz-game', 'English Review must use quiz-game.');
assert.equal(reviewAr?.type, 'quiz-game', 'Arabic Review must use quiz-game.');
assert.equal(reviewEn?.quizQuestions?.length, 8, 'English Review must contain eight questions.');
assert.equal(reviewAr?.quizQuestions?.length, 8, 'Arabic Review must contain eight questions.');
reviewEn!.quizQuestions!.forEach((question, index) => {
  const arQuestion = reviewAr!.quizQuestions![index];
  assert.equal(question.options.length, arQuestion.options.length, `Review ${index + 1}: EN/AR option count differs.`);
  assert.equal(correctQuizIndex(question), correctQuizIndex(arQuestion), `Review ${index + 1}: EN/AR answer logic differs.`);
});

const finalEn = page(mosesA2BookDataEn.pages, 22).exercises || [];
const finalAr = page(mosesA2BookDataAr.pages, 22).exercises || [];
assert.equal(finalEn.length, 10, 'English Final Challenge must contain ten activities.');
assert.equal(finalAr.length, 10, 'Arabic Final Challenge must contain ten activities.');
finalEn.forEach((exercise, index) => assertExerciseParity(exercise, finalAr[index], `Final ${index + 1}`));
assert.ok(finalEn.every(exercise => ['multiple-choice', 'true-false', 'matching', 'fill-blanks'].includes(exercise.type)), 'Final Challenge contains an unsupported or Tap-Reveal activity.');
assert.ok(new Set(finalEn.map(exercise => exercise.type)).size >= 3, 'Final Challenge should preserve interaction variety with at least three scored exercise types.');

const glossaryExpectedEn1 = storyIds.slice(0, 8).flatMap(id => (mosesA2HighlightTargets[id] ?? []).map(target => target.en));
const glossaryExpectedEn2 = storyIds.slice(8).flatMap(id => (mosesA2HighlightTargets[id] ?? []).map(target => target.en));
const glossaryExpectedAr1 = storyIds.slice(0, 8).flatMap(id => (mosesA2HighlightTargets[id] ?? []).map(target => target.ar));
const glossaryExpectedAr2 = storyIds.slice(8).flatMap(id => (mosesA2HighlightTargets[id] ?? []).map(target => target.ar));
assert.deepEqual(page(mosesA2BookDataEn.pages, 19).vocabulary, glossaryExpectedEn1, 'English glossary Chapters 1–8 differs from canonical highlights.');
assert.deepEqual(page(mosesA2BookDataEn.pages, 20).vocabulary, glossaryExpectedEn2, 'English glossary Chapters 9–16 differs from canonical highlights.');
assert.deepEqual(page(mosesA2BookDataAr.pages, 19).vocabulary, glossaryExpectedAr1, 'Arabic glossary Chapters 1–8 differs from canonical highlights.');
assert.deepEqual(page(mosesA2BookDataAr.pages, 20).vocabulary, glossaryExpectedAr2, 'Arabic glossary Chapters 9–16 differs from canonical highlights.');

assert.equal(mosesA2BookDataEn.teacherGuide.length, 16, 'English Teacher Guide must contain sixteen sections.');
assert.equal(mosesA2BookDataAr.teacherGuide.length, 16, 'Arabic Teacher Guide must contain sixteen sections.');
assert.equal(mosesA2BookDataEn.selfStudyGuide.length, 16, 'English Self-Study Guide must contain sixteen sections.');
assert.equal(mosesA2BookDataAr.selfStudyGuide.length, 16, 'Arabic Self-Study Guide must contain sixteen sections.');
assert.ok(mosesA2BookDataEn.teacherGuide.every(section => section.extraResources === undefined), 'English Teacher Guide claims an unsupplied resource.');
assert.ok(mosesA2BookDataAr.teacherGuide.every(section => section.extraResources === undefined), 'Arabic Teacher Guide claims an unsupplied resource.');

const runtimeQuestionsEn = [
  ...storyIds.map(id => page(mosesA2BookDataEn.pages, id).exercises?.[0].question || ''),
  ...knowledgeEn.map(exercise => exercise.question || ''),
  ...(reviewEn?.quizQuestions || []).map(question => question.question),
  ...finalEn.map(exercise => exercise.question || ''),
];
const runtimeQuestionsAr = [
  ...storyIds.map(id => page(mosesA2BookDataAr.pages, id).exercises?.[0].question || ''),
  ...knowledgeAr.map(exercise => exercise.question || ''),
  ...(reviewAr?.quizQuestions || []).map(question => question.question),
  ...finalAr.map(exercise => exercise.question || ''),
];
assert.equal(runtimeQuestionsEn.length, 42, 'English runtime must contain 42 assessed questions: 16 Quick + 8 Knowledge + 8 Review + 10 Final.');
assert.equal(runtimeQuestionsAr.length, 42, 'Arabic runtime must contain 42 assessed questions: 16 Quick + 8 Knowledge + 8 Review + 10 Final.');
assert.equal(new Set(runtimeQuestionsEn).size, 42, 'English runtime repeats an assessment question.');
assert.equal(new Set(runtimeQuestionsAr).size, 42, 'Arabic runtime repeats an assessment question.');
runtimeQuestionsEn.forEach(question => assert.ok(authoredQuestionsEn.has(question), `Runtime English question was not manually authored: ${question}`));
runtimeQuestionsAr.forEach(question => assert.ok(authoredQuestionsAr.has(question), `Runtime Arabic question was not manually authored: ${question}`));

const exerciseTypes = new Set<string>();
storyIds.forEach(id => exerciseTypes.add(page(mosesA2BookDataEn.pages, id).exercises![0].type));
knowledgeEn.forEach(exercise => exerciseTypes.add(exercise.type));
finalEn.forEach(exercise => exerciseTypes.add(exercise.type));
for (const type of ['multiple-choice', 'true-false', 'matching', 'fill-blanks', 'tap-reveal']) {
  assert.ok(exerciseTypes.has(type), `Moses A2 runtime is missing ${type} variety.`);
}

console.log('Moses A2 manual bilingual blueprint: PASS');
console.log('- 16 chapters / 64 distinct manual learning points / 64 stage-exclusive authored activities');
console.log('- 42 non-repeated runtime assessment questions: 16 Quick + 8 Knowledge + 8 Review + 10 Final');
console.log('- exactly two Tap-Reveal activities, both Quick-only; Final has no Tap-Reveal');
console.log('- English/Arabic structures and answer logic are parallel while each language remains grounded in its own text');
console.log('- reviewed Word Notes feed chapter vocabulary, Vocabulary Challenge, and full two-part glossary');
console.log('- story prose and images preserved; Arabic Chapter 11 audio URL corrected to the real MP3');
console.log('- Teacher Guide and Self-Study Guide are blueprint-authored chapter by chapter');
