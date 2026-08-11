import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { mosesB2Pages } from '../../src/data/moses/b2/en/pages';
import { mosesB2BookDataEn } from '../../src/data/moses/b2';
import { mosesB2GoldContract } from '../../src/data/moses/b2/gold';

const protectedStoryFields = [
  'id',
  'type',
  'title',
  'subtitle',
  'content',
  'image',
  'audioUrl',
  'syncPoints',
  'timedChunks',
] as const;

const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Moses B2 EN: page ${id} is missing.`);
  return page;
};

const validateObjective = (exercise: Exercise, label: string) => {
  assert.equal(exercise.type, 'multiple-choice', `${label}: Gold objective item must be multiple-choice.`);
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.equal(exercise.options?.length, 3, `${label}: exactly three options required.`);
  assert.equal(new Set(exercise.options).size, 3, `${label}: options must be distinct.`);
  assert.equal(typeof exercise.correctAnswer, 'number', `${label}: correct answer must be an option index.`);
  assert.ok(
    typeof exercise.correctAnswer === 'number'
      && exercise.correctAnswer >= 0
      && exercise.correctAnswer < 3,
    `${label}: correct-answer index is invalid.`,
  );
  assert.ok((exercise.explanation?.trim().length ?? 0) >= 40, `${label}: B2 explanation is too thin.`);
  assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 30, `${label}: retry feedback is too thin.`);
};

const validateAnswerBalance = (exercises: Exercise[], label: string) => {
  const positions = exercises.map((exercise) => exercise.correctAnswer as number);
  assert.ok(new Set(positions).size >= 2, `${label}: correct answers are concentrated in one option position.`);
};

assert.equal(mosesB2BookDataEn.level, 'B2');
assert.equal(mosesB2BookDataEn.pages.length, mosesB2Pages.length, 'Moses B2 EN: page count changed.');
assert.deepEqual(
  mosesB2BookDataEn.pages.map((page) => [page.id, page.type]),
  mosesB2Pages.map((page) => [page.id, page.type]),
  'Moses B2 EN: page ids/types changed.',
);

for (const id of mosesB2GoldContract.storyIds) {
  const source = findPage(mosesB2Pages, id);
  const final = findPage(mosesB2BookDataEn.pages, id);

  for (const field of protectedStoryFields) {
    assert.deepEqual(final[field], source[field], `Moses B2 EN chapter ${id}: protected field ${field} changed.`);
  }

  const sourceHotspots = source.hotspots ?? [];
  const finalHotspots = final.hotspots ?? [];
  assert.equal(finalHotspots.length, sourceHotspots.length, `Moses B2 EN chapter ${id}: hotspot count changed.`);
  sourceHotspots.forEach((hotspot, index) => {
    const current = finalHotspots[index];
    assert.ok(current, `Moses B2 EN chapter ${id}: hotspot ${index + 1} missing.`);
    assert.equal(current.id, hotspot.id, `Moses B2 EN ${hotspot.id}: hotspot id changed.`);
    assert.equal(current.x, hotspot.x, `Moses B2 EN ${hotspot.id}: hotspot x changed.`);
    assert.equal(current.y, hotspot.y, `Moses B2 EN ${hotspot.id}: hotspot y changed.`);
  });

  assert.equal(final.exercises?.length, 1, `Moses B2 EN chapter ${id}: exactly one visible Quick Challenge required by current UI.`);
  validateObjective(final.exercises![0], `Moses B2 EN chapter ${id} Quick Challenge`);

  const vocabulary = final.vocabulary ?? [];
  assert.ok(vocabulary.length >= 4 && vocabulary.length <= 7, `Moses B2 EN chapter ${id}: Word Notes must contain 4–7 reviewed items.`);
  const vocabularyKeys = vocabulary.map((entry) => entry.word.toLowerCase().trim());
  assert.equal(new Set(vocabularyKeys).size, vocabularyKeys.length, `Moses B2 EN chapter ${id}: duplicate Word Notes found.`);
  vocabulary.forEach((entry) => {
    assert.ok(entry.word.trim(), `Moses B2 EN chapter ${id}: empty Word Note word.`);
    assert.ok(entry.definition.trim(), `Moses B2 EN chapter ${id}: empty Word Note definition.`);
  });
}

const knowledge = findPage(mosesB2BookDataEn.pages, mosesB2GoldContract.knowledgeCheckPageId);
const vocabularyPage = findPage(mosesB2BookDataEn.pages, mosesB2GoldContract.vocabularyPageId);
const glossary1 = findPage(mosesB2BookDataEn.pages, mosesB2GoldContract.glossaryPageIds[0]);
const glossary2 = findPage(mosesB2BookDataEn.pages, mosesB2GoldContract.glossaryPageIds[1]);
const review = findPage(mosesB2BookDataEn.pages, mosesB2GoldContract.reviewPageId);
const finalChallenge = findPage(mosesB2BookDataEn.pages, mosesB2GoldContract.finalChallengePageId);

assert.equal(knowledge.exercises?.length, 8, 'Moses B2 EN: Knowledge Check must have 8 objective questions.');
assert.equal(review.exercises?.length, 8, 'Moses B2 EN: Review Challenge must have 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Moses B2 EN: Final Challenge must have 10 dedicated objective questions.');
assert.equal(vocabularyPage.vocabularyPairs?.length, 10, 'Moses B2 EN: Vocabulary Challenge must have 10 pairs.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Moses B2 EN: Glossary Part 1 must have at least 18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Moses B2 EN: Glossary Part 2 must have at least 18 entries.');

for (const [items, label] of [
  [knowledge.exercises ?? [], 'Knowledge Check'],
  [review.exercises ?? [], 'Review Challenge'],
  [finalChallenge.exercises ?? [], 'Final Challenge'],
] as const) {
  items.forEach((exercise, index) => validateObjective(exercise, `Moses B2 EN ${label} ${index + 1}`));
  validateAnswerBalance(items, `Moses B2 EN ${label}`);
}

assert.equal(mosesB2BookDataEn.teacherGuide.length, 24, 'Moses B2 EN: Teacher Guide must align to all 24 canonical story chapters.');
assert.equal(mosesB2BookDataEn.selfStudyGuide.length, 24, 'Moses B2 EN: Self-Study Guide must align to all 24 canonical story chapters.');

for (let index = 0; index < 24; index += 1) {
  const story = findPage(mosesB2BookDataEn.pages, index + 1);
  const expectedLabel = `Chapter ${story.id}: ${story.title}`;
  const teacher = mosesB2BookDataEn.teacherGuide[index];
  const selfStudy = mosesB2BookDataEn.selfStudyGuide[index];

  assert.equal(teacher.chapter, expectedLabel, `Moses B2 EN Teacher Guide ${index + 1}: chapter label is misaligned.`);
  assert.equal(selfStudy.chapter, expectedLabel, `Moses B2 EN Self-Study ${index + 1}: chapter label is misaligned.`);
  assert.equal(teacher.extraResources, undefined, `Moses B2 EN Teacher Guide ${index + 1}: unsupported resource claim remains.`);
  assert.ok(teacher.objectives.length >= 3, `Moses B2 EN Teacher Guide ${index + 1}: objectives are too thin.`);
  assert.ok(teacher.lessonPlan.trim(), `Moses B2 EN Teacher Guide ${index + 1}: lesson plan missing.`);
  assert.ok(selfStudy.lessonPlan.trim(), `Moses B2 EN Self-Study ${index + 1}: study routine missing.`);
  assert.ok(selfStudy.interactiveTips.length >= 1, `Moses B2 EN Self-Study ${index + 1}: interactive guidance missing.`);
}

assert.ok(mosesB2BookDataEn.studentGuideText?.includes('You will study 24 chapters:'), 'Moses B2 EN: whole-book learner guide still has the wrong chapter count.');
assert.ok(!mosesB2BookDataEn.studentGuideText?.includes('You will study 20 chapters:'), 'Moses B2 EN: legacy 20-chapter statement remains.');
assert.ok(mosesB2BookDataEn.studentGuideText?.includes('### Chapter 24:'), 'Moses B2 EN: learner guide chapter focus does not reach Chapter 24.');
assert.ok(mosesB2BookDataEn.teacherGuideMetadata?.targetLearners?.includes('B2'), 'Moses B2 EN: Teacher Guide metadata does not identify B2 learners.');
assert.equal(
  mosesB2BookDataEn.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length,
  24,
  'Moses B2 EN: extended Teacher Guide plan must cover 24 chapters.',
);

const historicalCautionQuestion = findPage(mosesB2BookDataEn.pages, 2).exercises?.[0]?.question ?? '';
assert.ok(historicalCautionQuestion.includes('level of certainty'), 'Moses B2 EN chapter 2: historical-caution Quick Challenge missing.');
const historicalCautionExplanation = findPage(mosesB2BookDataEn.pages, 2).exercises?.[0]?.explanation ?? '';
assert.ok(/unknown|probably|cautious/i.test(historicalCautionExplanation), 'Moses B2 EN chapter 2: historical uncertainty was flattened into certainty.');

console.log('Moses B2 English Gold Pilot: PASS');
console.log('- 24 canonical story chapters protected');
console.log('- 24 visible B2 reasoning Quick Challenges');
console.log('- Knowledge 8 / Review 8 / Final 10');
console.log('- Vocabulary 10 / Glossary >=18 + >=18');
console.log('- Teacher Guide 24 / Self-Study Guide 24');
console.log('- unsupported Teacher Guide worksheets removed');
console.log('- historical-source caution preserved in derived learning copy');
