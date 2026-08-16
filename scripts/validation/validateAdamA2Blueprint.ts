import assert from 'node:assert/strict';
import type { Exercise, PageData, QuizQuestion } from '../../src/types';
import { applyA2FinalStoryLanguageLock } from '../../src/data/a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights } from '../../src/data/a2HighlightStandard';
import { adamA2BookDataAr, adamA2BookDataEn } from '../../src/data/adam/a2';
import { adamA2PagesQualityFinalized } from '../../src/data/adam/a2/en/qualityFinalization';
import { adamA2PagesArQualityFinalized } from '../../src/data/adam/a2/ar/qualityFinalization';
import { getAdamA2ChapterHighlights } from '../../src/data/adam/a2/highlights';
import { adamA2LearningBlueprint } from '../../src/data/adam/a2/learningBlueprint';

const storyIds = Array.from({ length: 10 }, (_, index) => index + 1);
const glossaryPageIds: [number, number] = [14, 15];

const expectedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2PagesQualityFinalized, 'adam', 'en'),
  { storyIds, glossaryPageIds },
  'en',
);
const expectedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2PagesArQualityFinalized, 'adam', 'ar'),
  { storyIds, glossaryPageIds },
  'ar',
);

const page = (pages: PageData[], id: number) => {
  const value = pages.find(candidate => candidate.id === id);
  assert.ok(value, `Page ${id} is missing.`);
  return value;
};

const correctQuizIndex = (question: QuizQuestion) => question.options.findIndex(option => option.isCorrect);
const assertExerciseParity = (en: Exercise, ar: Exercise, where: string) => {
  assert.equal(en.type, ar.type, `${where}: EN/AR exercise type differs.`);
  assert.equal(typeof en.correctAnswer, typeof ar.correctAnswer, `${where}: EN/AR answer shape differs.`);
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

assert.equal(adamA2LearningBlueprint.level, 'A2');
assert.equal(adamA2LearningBlueprint.storyId, 'adam');
assert.equal(adamA2LearningBlueprint.chapters.length, 10, 'Adam A2 blueprint must contain ten chapters.');

const allEvidenceIds = new Set<string>();
const allAssessmentIds = new Set<string>();
const authoredQuestionsEn = new Set<string>();
const authoredQuestionsAr = new Set<string>();

for (const chapter of adamA2LearningBlueprint.chapters) {
  assert.equal(chapter.evidencePoints.length, 4, `Chapter ${chapter.chapterId}: expected four manual learning points.`);
  assert.equal(chapter.assessmentItems.length, 4, `Chapter ${chapter.chapterId}: expected four manual assessment items.`);
  assert.deepEqual(
    chapter.assessmentItems.map(item => item.eligibleStages[0]).sort(),
    ['final', 'knowledge', 'quick', 'review'],
    `Chapter ${chapter.chapterId}: must have one exclusive item for each assessment stage.`,
  );
  assert.ok(chapter.assessmentItems.every(item => item.eligibleStages.length === 1), `Chapter ${chapter.chapterId}: assessment items must be stage-exclusive.`);

  const localEvidence = new Set(chapter.evidencePoints.map(point => point.id));
  assert.equal(localEvidence.size, 4, `Chapter ${chapter.chapterId}: learning points must be unique.`);
  chapter.evidencePoints.forEach(point => {
    assert.ok(!allEvidenceIds.has(point.id), `Duplicate learning point: ${point.id}`);
    allEvidenceIds.add(point.id);
  });

  chapter.assessmentItems.forEach(item => {
    assert.ok(localEvidence.has(item.learningPointId), `${item.id}: learning point is outside its chapter.`);
    assert.ok(!allAssessmentIds.has(item.id), `Duplicate assessment item: ${item.id}`);
    allAssessmentIds.add(item.id);
    assertExerciseParity({ ...item.exercise.en, id: item.id }, { ...item.exercise.ar, id: item.id }, item.id);
    authoredQuestionsEn.add(item.exercise.en.question || '');
    authoredQuestionsAr.add(item.exercise.ar.question || '');
  });
}
assert.equal(allEvidenceIds.size, 40, 'Adam A2 blueprint must contain forty distinct learning points.');
assert.equal(allAssessmentIds.size, 40, 'Adam A2 blueprint must contain forty distinct assessment items.');

for (const [language, book, expected] of [
  ['EN', adamA2BookDataEn, expectedEn],
  ['AR', adamA2BookDataAr, expectedAr],
] as const) {
  assert.equal(book.pages.length, expected.length, `${language}: page count changed.`);
  for (const id of storyIds) {
    const runtime = page(book.pages, id);
    const source = page(expected, id);
    assert.equal(runtime.type, source.type, `${language} Chapter ${id}: page type changed.`);
    assert.equal(runtime.title, source.title, `${language} Chapter ${id}: story title changed.`);
    assert.equal(runtime.content, source.content, `${language} Chapter ${id}: story prose changed.`);
    assert.equal(runtime.image, source.image, `${language} Chapter ${id}: story image changed.`);
    assert.equal(runtime.audioUrl, source.audioUrl, `${language} Chapter ${id}: story audio changed.`);
    assert.deepEqual(runtime.hotspots, source.hotspots, `${language} Chapter ${id}: hotspot data changed.`);
    assert.equal(runtime.exercises?.length, 1, `${language} Chapter ${id}: expected one Quick Challenge.`);
    assert.ok(runtime.exercises?.[0].id.startsWith('blueprint-adam-a2-quick-'), `${language} Chapter ${id}: Quick Challenge is not blueprint-authored.`);
  }
}

for (const id of storyIds) {
  const en = page(adamA2BookDataEn.pages, id);
  const ar = page(adamA2BookDataAr.pages, id);
  assert.deepEqual(en.vocabulary, getAdamA2ChapterHighlights(id, 'en'), `Chapter ${id}: English Word Notes changed from canonical highlights.`);
  assert.deepEqual(ar.vocabulary, getAdamA2ChapterHighlights(id, 'ar'), `Chapter ${id}: Arabic Word Notes changed from canonical highlights.`);
  assertExerciseParity(en.exercises![0], ar.exercises![0], `Chapter ${id} Quick Challenge`);
}

const knowledgeEn = page(adamA2BookDataEn.pages, 11).exercises || [];
const knowledgeAr = page(adamA2BookDataAr.pages, 11).exercises || [];
assert.equal(knowledgeEn.length, 8, 'English Knowledge Check must contain eight activities.');
assert.equal(knowledgeAr.length, 8, 'Arabic Knowledge Check must contain eight activities.');
knowledgeEn.forEach((exercise, index) => assertExerciseParity(exercise, knowledgeAr[index], `Knowledge ${index + 1}`));

const vocabularyEn = page(adamA2BookDataEn.pages, 12).vocabularyPairs || [];
const vocabularyAr = page(adamA2BookDataAr.pages, 12).vocabularyPairs || [];
assert.equal(vocabularyEn.length, 6, 'English Vocabulary Challenge must contain six pairs.');
assert.equal(vocabularyAr.length, 6, 'Arabic Vocabulary Challenge must contain six pairs.');

const reviewEn = page(adamA2BookDataEn.pages, 13).exercises?.[0];
const reviewAr = page(adamA2BookDataAr.pages, 13).exercises?.[0];
assert.equal(reviewEn?.type, 'quiz-game', 'English Review must use quiz-game.');
assert.equal(reviewAr?.type, 'quiz-game', 'Arabic Review must use quiz-game.');
assert.equal(reviewEn?.quizQuestions?.length, 8, 'English Review must contain eight questions.');
assert.equal(reviewAr?.quizQuestions?.length, 8, 'Arabic Review must contain eight questions.');
reviewEn!.quizQuestions!.forEach((question, index) => {
  const arQuestion = reviewAr!.quizQuestions![index];
  assert.equal(question.options.length, arQuestion.options.length, `Review ${index + 1}: EN/AR option count differs.`);
  assert.equal(correctQuizIndex(question), correctQuizIndex(arQuestion), `Review ${index + 1}: EN/AR answer logic differs.`);
});

const finalEn = page(adamA2BookDataEn.pages, 16).exercises || [];
const finalAr = page(adamA2BookDataAr.pages, 16).exercises || [];
assert.equal(finalEn.length, 10, 'English Final Challenge must contain ten activities.');
assert.equal(finalAr.length, 10, 'Arabic Final Challenge must contain ten activities.');
finalEn.forEach((exercise, index) => assertExerciseParity(exercise, finalAr[index], `Final ${index + 1}`));

const glossaryExpectedEn1 = [1, 2, 3, 4, 5].flatMap(id => getAdamA2ChapterHighlights(id, 'en'));
const glossaryExpectedEn2 = [6, 7, 8, 9, 10].flatMap(id => getAdamA2ChapterHighlights(id, 'en'));
const glossaryExpectedAr1 = [1, 2, 3, 4, 5].flatMap(id => getAdamA2ChapterHighlights(id, 'ar'));
const glossaryExpectedAr2 = [6, 7, 8, 9, 10].flatMap(id => getAdamA2ChapterHighlights(id, 'ar'));
assert.deepEqual(page(adamA2BookDataEn.pages, 14).vocabulary, glossaryExpectedEn1, 'English glossary Chapters 1–5 changed.');
assert.deepEqual(page(adamA2BookDataEn.pages, 15).vocabulary, glossaryExpectedEn2, 'English glossary Chapters 6–10 changed.');
assert.deepEqual(page(adamA2BookDataAr.pages, 14).vocabulary, glossaryExpectedAr1, 'Arabic glossary Chapters 1–5 changed.');
assert.deepEqual(page(adamA2BookDataAr.pages, 15).vocabulary, glossaryExpectedAr2, 'Arabic glossary Chapters 6–10 changed.');

assert.equal(adamA2BookDataEn.teacherGuide.length, 10, 'English Teacher Guide must contain ten chapter sections.');
assert.equal(adamA2BookDataAr.teacherGuide.length, 10, 'Arabic Teacher Guide must contain ten chapter sections.');
assert.equal(adamA2BookDataEn.selfStudyGuide.length, 10, 'English Self-Study Guide must contain ten chapter sections.');
assert.equal(adamA2BookDataAr.selfStudyGuide.length, 10, 'Arabic Self-Study Guide must contain ten chapter sections.');
assert.ok(adamA2BookDataEn.teacherGuide.every(section => section.extraResources === undefined), 'English Teacher Guide claims an unsupplied resource.');
assert.ok(adamA2BookDataAr.teacherGuide.every(section => section.extraResources === undefined), 'Arabic Teacher Guide claims an unsupplied resource.');

const runtimeQuestionsEn = [
  ...storyIds.map(id => page(adamA2BookDataEn.pages, id).exercises?.[0].question || ''),
  ...knowledgeEn.map(exercise => exercise.question || ''),
  ...(reviewEn?.quizQuestions || []).map(question => question.question),
  ...finalEn.map(exercise => exercise.question || ''),
];
const runtimeQuestionsAr = [
  ...storyIds.map(id => page(adamA2BookDataAr.pages, id).exercises?.[0].question || ''),
  ...knowledgeAr.map(exercise => exercise.question || ''),
  ...(reviewAr?.quizQuestions || []).map(question => question.question),
  ...finalAr.map(exercise => exercise.question || ''),
];
assert.equal(runtimeQuestionsEn.length, 36, 'English runtime must contain 36 assessed questions across all stages.');
assert.equal(runtimeQuestionsAr.length, 36, 'Arabic runtime must contain 36 assessed questions across all stages.');
assert.equal(new Set(runtimeQuestionsEn).size, 36, 'English runtime repeats an assessment question.');
assert.equal(new Set(runtimeQuestionsAr).size, 36, 'Arabic runtime repeats an assessment question.');
runtimeQuestionsEn.forEach(question => assert.ok(authoredQuestionsEn.has(question), `Runtime English question was not manually authored in the blueprint: ${question}`));
runtimeQuestionsAr.forEach(question => assert.ok(authoredQuestionsAr.has(question), `Runtime Arabic question was not manually authored in the blueprint: ${question}`));

const exerciseTypes = new Set<string>();
storyIds.forEach(id => exerciseTypes.add(page(adamA2BookDataEn.pages, id).exercises![0].type));
knowledgeEn.forEach(exercise => exerciseTypes.add(exercise.type));
finalEn.forEach(exercise => exerciseTypes.add(exercise.type));
for (const type of ['multiple-choice', 'true-false', 'matching', 'fill-blanks', 'tap-reveal']) {
  assert.ok(exerciseTypes.has(type), `Adam A2 runtime is missing ${type} variety.`);
}

console.log('Adam A2 manual bilingual blueprint: PASS');
console.log('- 10 chapters / 40 distinct manual learning points');
console.log('- 36 non-repeated runtime assessment questions: 10 Quick + 8 Knowledge + 8 Review + 10 Final');
console.log('- every runtime assessment question comes from the manual blueprint');
console.log('- English/Arabic exercise structure and answer logic are parallel');
console.log('- canonical story prose, images, audio, hotspots, Word Notes, and glossaries are preserved');
console.log('- Teacher Guide and Self-Study Guide are blueprint-authored chapter by chapter');
