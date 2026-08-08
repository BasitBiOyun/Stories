import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { mosesB1Pages } from '../../src/data/moses/b1/en/pages';
import { mosesB1BookDataEn } from '../../src/data/moses/b1';
import { mosesB1GoldContract } from '../../src/data/moses/b1/goldFinal';

const protectedStoryFields = [
  'id',
  'type',
  'title',
  'subtitle',
  'content',
  'image',
  'audioUrl',
  'animatedWords',
  'syncPoints',
  'timedChunks',
] as const;

const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find(item => item.id === id);
  assert.ok(page, `Moses B1: page ${id} is missing.`);
  return page;
};

const validateObjectiveQuestion = (exercise: Exercise, label: string) => {
  const options = exercise.options ?? [];
  const correctIndex = exercise.correctAnswer;

  assert.equal(exercise.type, 'multiple-choice', `${label}: objective pilot item must be multiple-choice.`);
  assert.equal(options.length, 3, `${label}: multiple-choice item must have three options.`);
  assert.equal(typeof correctIndex, 'number', `${label}: correct answer must be an option index.`);
  assert.ok(
    typeof correctIndex === 'number'
      && correctIndex >= 0
      && correctIndex < options.length,
    `${label}: correct answer index is invalid.`,
  );
  assert.equal(new Set(options).size, options.length, `${label}: duplicate answer options found.`);
  assert.ok((exercise.explanation?.trim().length ?? 0) >= 30, `${label}: explanation is too thin for B1.`);
  assert.ok(exercise.feedback.incorrect.trim(), `${label}: retry feedback must point the learner back to evidence.`);
};

const validateAnswerPositionBalance = (page: PageData, label: string) => {
  const positions = (page.exercises ?? [])
    .filter(exercise => exercise.type === 'multiple-choice')
    .map(exercise => exercise.correctAnswer)
    .filter((value): value is number => typeof value === 'number');

  assert.ok(positions.length > 0, `${label}: no objective questions found.`);
  assert.ok(new Set(positions).size >= 3, `${label}: correct answers are concentrated in too few option positions.`);
};

assert.equal(mosesB1BookDataEn.level, 'B1', 'Moses B1: level changed.');
assert.equal(mosesB1BookDataEn.pages.length, mosesB1Pages.length, 'Moses B1: page count changed.');

for (const id of mosesB1GoldContract.storyIds) {
  const canonical = findPage(mosesB1Pages, id);
  const finalized = findPage(mosesB1BookDataEn.pages, id);

  for (const field of protectedStoryFields) {
    assert.deepEqual(finalized[field], canonical[field], `Moses B1 chapter ${id}: protected field ${field} changed.`);
  }

  const canonicalHotspots = canonical.hotspots ?? [];
  const finalHotspots = finalized.hotspots ?? [];
  assert.equal(finalHotspots.length, canonicalHotspots.length, `Moses B1 chapter ${id}: hotspot count changed.`);

  canonicalHotspots.forEach((hotspot, index) => {
    const current = finalHotspots[index];
    assert.ok(current, `Moses B1 chapter ${id}: hotspot ${index + 1} is missing.`);
    assert.equal(current.id, hotspot.id, `Moses B1 chapter ${id}: hotspot id changed.`);
    assert.equal(current.x, hotspot.x, `Moses B1 ${hotspot.id}: hotspot x changed.`);
    assert.equal(current.y, hotspot.y, `Moses B1 ${hotspot.id}: hotspot y changed.`);
    assert.ok(current.title.trim(), `Moses B1 ${hotspot.id}: empty hotspot title.`);
    assert.ok(current.description.trim(), `Moses B1 ${hotspot.id}: empty hotspot description.`);
  });

  assert.equal(finalized.exercises?.length, 1, `Moses B1 chapter ${id}: exactly one Quick Challenge is required.`);
  const quick = finalized.exercises?.[0];
  assert.ok(quick, `Moses B1 chapter ${id}: Quick Challenge is missing.`);
  validateObjectiveQuestion(quick, `Moses B1 chapter ${id} Quick Challenge`);

  const vocabulary = finalized.vocabulary ?? [];
  assert.ok(vocabulary.length >= 4 && vocabulary.length <= 5, `Moses B1 chapter ${id}: Word Notes must contain 4–5 reviewed items.`);
  vocabulary.forEach(entry => {
    assert.ok(entry.word.trim(), `Moses B1 chapter ${id}: empty vocabulary word.`);
    assert.ok(entry.definition.trim(), `Moses B1 chapter ${id}: empty vocabulary definition.`);
  });
}

const quickPositions = mosesB1GoldContract.storyIds.map(id => {
  const exercise = findPage(mosesB1BookDataEn.pages, id).exercises?.[0];
  assert.ok(exercise && typeof exercise.correctAnswer === 'number', `Moses B1 chapter ${id}: missing answer position.`);
  return exercise.correctAnswer as number;
});
assert.ok(new Set(quickPositions).size >= 3, 'Moses B1: Quick Challenge correct answers are not position-balanced.');

const knowledge = findPage(mosesB1BookDataEn.pages, mosesB1GoldContract.knowledgeCheckPageId);
assert.equal(knowledge.exercises?.length, mosesB1GoldContract.knowledgeQuestionCount, 'Moses B1: Knowledge Check must have 8 questions.');

const review = findPage(mosesB1BookDataEn.pages, mosesB1GoldContract.reviewPageId);
assert.equal(review.exercises?.length, mosesB1GoldContract.reviewQuestionCount, 'Moses B1: Review Challenge must have 8 questions.');

const finalChallenge = findPage(mosesB1BookDataEn.pages, mosesB1GoldContract.finalChallengePageId);
assert.equal(finalChallenge.exercises?.length, mosesB1GoldContract.finalQuestionCount, 'Moses B1: Final Challenge must have 10 questions.');

for (const [page, label] of [
  [knowledge, 'Knowledge Check'],
  [review, 'Review Challenge'],
  [finalChallenge, 'Final Challenge'],
] as const) {
  page.exercises?.forEach((exercise, index) => validateObjectiveQuestion(exercise, `Moses B1 ${label} question ${index + 1}`));
  validateAnswerPositionBalance(page, `Moses B1 ${label}`);
}

const vocabularyPage = findPage(mosesB1BookDataEn.pages, mosesB1GoldContract.vocabularyPageId);
const vocabularyPairs = vocabularyPage.vocabularyPairs ?? [];
assert.equal(vocabularyPairs.length, 10, 'Moses B1: Vocabulary in Context must contain 10 reviewed pairs.');
assert.equal(
  new Set(vocabularyPairs.map(pair => pair.word.toLowerCase().trim())).size,
  vocabularyPairs.length,
  'Moses B1: Vocabulary in Context contains duplicate words.',
);

const glossary1 = findPage(mosesB1BookDataEn.pages, mosesB1GoldContract.glossaryPageIds[0]);
const glossary2 = findPage(mosesB1BookDataEn.pages, mosesB1GoldContract.glossaryPageIds[1]);
const glossaryCounts = [glossary1.vocabulary?.length ?? 0, glossary2.vocabulary?.length ?? 0];
assert.ok(glossaryCounts.every(count => count >= 18), 'Moses B1: each glossary section must contain at least 18 reviewed entries.');
assert.ok(Math.abs(glossaryCounts[0] - glossaryCounts[1]) <= 6, 'Moses B1: glossary sections must remain reasonably balanced.');

for (const glossary of [glossary1, glossary2]) {
  const normalized = (glossary.vocabulary ?? []).map(entry => entry.word.toLowerCase().trim());
  assert.equal(new Set(normalized).size, normalized.length, `${glossary.title}: duplicate glossary entries found.`);
}

assert.equal(mosesB1BookDataEn.teacherGuide.length, mosesB1GoldContract.storyIds.length, 'Moses B1: Teacher Guide must have one section per chapter.');
assert.equal(mosesB1BookDataEn.selfStudyGuide.length, mosesB1GoldContract.storyIds.length, 'Moses B1: Self-Study Guide must have one section per chapter.');
assert.ok(mosesB1BookDataEn.teacherGuideMetadata?.targetLearners?.includes('B1'), 'Moses B1: Teacher Guide metadata must identify B1 learners.');
assert.ok(mosesB1BookDataEn.studentGuideMetadata?.whoIsThisFor?.includes('B1'), 'Moses B1: Self-Study metadata must identify B1 learners.');

mosesB1BookDataEn.teacherGuide.forEach((section, index) => {
  assert.equal(section.extraResources, undefined, `Moses B1 Teacher Guide chapter ${index + 1}: unsupported external/worksheet resource claim remains.`);
  assert.ok(section.objectives.length >= 3, `Moses B1 Teacher Guide chapter ${index + 1}: objectives are too thin.`);
  assert.ok(section.lessonPlan.trim(), `Moses B1 Teacher Guide chapter ${index + 1}: lesson plan missing.`);
});

mosesB1BookDataEn.selfStudyGuide.forEach((section, index) => {
  assert.ok(section.lessonPlan.trim(), `Moses B1 Self-Study chapter ${index + 1}: study routine missing.`);
  assert.ok(section.interactiveTips.length >= 1, `Moses B1 Self-Study chapter ${index + 1}: interactive guidance missing.`);
});

console.log('Moses B1 English Gold pilot: PASS');
console.log('- 13 canonical story chapters preserved');
console.log('- hotspot ids and coordinates preserved');
console.log('- 13 B1 evidence-based chapter Quick Challenges with balanced answer positions');
console.log('- Knowledge Check = 8; Review Challenge = 8; Final Challenge = 10 objective questions');
console.log('- scored question sets use all three answer positions and evidence-based retry feedback');
console.log('- chapter Word Notes = 4–5 reviewed items; Vocabulary in Context = 10 pairs');
console.log('- Master Glossary remains split and balanced');
console.log('- Teacher Guide keeps chapter-specific pedagogy but removes unsupported worksheet claims');
console.log('- Self-Study Guide retains one chapter-specific section per story chapter');
