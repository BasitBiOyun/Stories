import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { adamB2Pages } from '../../src/data/adam/b2/en/pages';
import { adamB2BookDataEn } from '../../src/data/adam/b2';
import { adamB2GoldContract } from '../../src/data/adam/b2/gold';

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
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Adam B2 EN: page ${id} is missing.`);
  return page;
};

const validateObjective = (exercise: Exercise, label: string) => {
  assert.ok(
    exercise.type === 'multiple-choice' || exercise.type === 'true-false',
    `${label}: objective item must be multiple-choice or true-false.`,
  );
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 20, `${label}: retry feedback is too thin.`);

  if (exercise.type === 'multiple-choice') {
    assert.equal(exercise.options?.length, 3, `${label}: exactly three options required.`);
    assert.equal(new Set(exercise.options).size, 3, `${label}: options must be distinct.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: correct answer must be an option index.`);
    assert.ok(
      typeof exercise.correctAnswer === 'number'
        && exercise.correctAnswer >= 0
        && exercise.correctAnswer < 3,
      `${label}: correct-answer index is invalid.`,
    );
  } else {
    assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: true-false answer must be boolean.`);
  }
};

const validateAnswerBalance = (exercises: Exercise[], label: string) => {
  const mc = exercises.filter((exercise) => exercise.type === 'multiple-choice');
  if (mc.length < 3) return;
  const positions = mc.map((exercise) => exercise.correctAnswer as number);
  assert.ok(new Set(positions).size >= 2, `${label}: correct answers are concentrated in one option position.`);
};

assert.equal(adamB2BookDataEn.level, 'B2');
assert.equal(adamB2BookDataEn.pages.length, adamB2Pages.length, 'Adam B2 EN: page count changed.');
assert.deepEqual(
  adamB2BookDataEn.pages.map((page) => [page.id, page.type]),
  adamB2Pages.map((page) => [page.id, page.type]),
  'Adam B2 EN: page ids/types changed.',
);

for (const id of adamB2GoldContract.storyIds) {
  const source = findPage(adamB2Pages, id);
  const final = findPage(adamB2BookDataEn.pages, id);

  for (const field of protectedStoryFields) {
    assert.deepEqual(final[field], source[field], `Adam B2 EN chapter ${id}: protected field ${field} changed.`);
  }

  const sourceHotspots = source.hotspots ?? [];
  const finalHotspots = final.hotspots ?? [];
  assert.equal(finalHotspots.length, sourceHotspots.length, `Adam B2 EN chapter ${id}: hotspot count changed.`);
  sourceHotspots.forEach((hotspot, index) => {
    const current = finalHotspots[index];
    assert.ok(current, `Adam B2 EN chapter ${id}: hotspot ${index + 1} missing.`);
    assert.equal(current.id, hotspot.id, `Adam B2 EN ${hotspot.id}: hotspot id changed.`);
    assert.equal(current.x, hotspot.x, `Adam B2 EN ${hotspot.id}: hotspot x changed.`);
    assert.equal(current.y, hotspot.y, `Adam B2 EN ${hotspot.id}: hotspot y changed.`);
  });

  assert.equal(final.exercises?.length, 1, `Adam B2 EN chapter ${id}: exactly one visible Quick Challenge required by current UI.`);
  validateObjective(final.exercises![0], `Adam B2 EN chapter ${id} Quick Challenge`);

  const vocabulary = final.vocabulary ?? [];
  assert.ok(vocabulary.length >= 3 && vocabulary.length <= 7, `Adam B2 EN chapter ${id}: Word Notes must contain 3–7 reviewed items.`);
  const keys = vocabulary.map((entry) => entry.word.toLowerCase().trim());
  assert.equal(new Set(keys).size, keys.length, `Adam B2 EN chapter ${id}: duplicate Word Notes found.`);
  vocabulary.forEach((entry) => {
    assert.ok(entry.word.trim(), `Adam B2 EN chapter ${id}: empty Word Note word.`);
    assert.ok(entry.definition.trim(), `Adam B2 EN chapter ${id}: empty Word Note definition.`);
  });
}

const knowledge = findPage(adamB2BookDataEn.pages, adamB2GoldContract.knowledgeCheckPageId);
const review = findPage(adamB2BookDataEn.pages, adamB2GoldContract.reviewPageId);
const glossary1 = findPage(adamB2BookDataEn.pages, adamB2GoldContract.glossaryPageIds[0]);
const glossary2 = findPage(adamB2BookDataEn.pages, adamB2GoldContract.glossaryPageIds[1]);
const finalChallenge = findPage(adamB2BookDataEn.pages, adamB2GoldContract.finalChallengePageId);

assert.equal(knowledge.exercises?.length, 8, 'Adam B2 EN: Knowledge Check must have 8 objective questions.');
assert.equal(review.exercises?.length, 8, 'Adam B2 EN: Review Challenge must have 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Adam B2 EN: Final Challenge must have 10 objective questions.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Adam B2 EN: Glossary Part 1 must have at least 18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Adam B2 EN: Glossary Part 2 must have at least 18 entries.');

for (const [items, label] of [
  [knowledge.exercises ?? [], 'Knowledge Check'],
  [review.exercises ?? [], 'Review Challenge'],
  [finalChallenge.exercises ?? [], 'Final Challenge'],
] as const) {
  items.forEach((exercise, index) => validateObjective(exercise, `Adam B2 EN ${label} ${index + 1}`));
  validateAnswerBalance(items, `Adam B2 EN ${label}`);
}

assert.equal(adamB2BookDataEn.teacherGuide.length, 17, 'Adam B2 EN: Teacher Guide must align to all 17 canonical chapters.');
assert.equal(adamB2BookDataEn.selfStudyGuide.length, 17, 'Adam B2 EN: Self-Study Guide must align to all 17 canonical chapters.');

for (let index = 0; index < 17; index += 1) {
  const story = findPage(adamB2BookDataEn.pages, index + 1);
  const expectedLabel = `Chapter ${story.id}: ${story.title}`;
  const teacher = adamB2BookDataEn.teacherGuide[index];
  const selfStudy = adamB2BookDataEn.selfStudyGuide[index];
  assert.equal(teacher.chapter, expectedLabel, `Adam B2 EN Teacher Guide ${index + 1}: chapter label is misaligned.`);
  assert.equal(selfStudy.chapter, expectedLabel, `Adam B2 EN Self-Study ${index + 1}: chapter label is misaligned.`);
  assert.equal(teacher.extraResources, undefined, `Adam B2 EN Teacher Guide ${index + 1}: unsupported resource claim remains.`);
  assert.ok(teacher.objectives.length >= 3, `Adam B2 EN Teacher Guide ${index + 1}: objectives are too thin.`);
  assert.ok(teacher.lessonPlan.trim(), `Adam B2 EN Teacher Guide ${index + 1}: lesson plan missing.`);
  assert.ok(selfStudy.lessonPlan.trim(), `Adam B2 EN Self-Study ${index + 1}: lesson plan missing.`);
}

assert.ok(adamB2BookDataEn.studentGuideText?.includes('17 canonical chapters'), 'Adam B2 EN: Self-Study guide does not state the 17 canonical chapters.');
assert.equal(
  adamB2BookDataEn.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length,
  17,
  'Adam B2 EN: extended Teacher Guide plan must cover 17 chapters.',
);

const chapter8Question = findPage(adamB2BookDataEn.pages, 8).exercises?.[0]?.question ?? '';
assert.ok(/limits|tree|Qur.?an/i.test(chapter8Question), 'Adam B2 EN chapter 8: source-framing Quick Challenge is missing.');
const chapter8Explanation = findPage(adamB2BookDataEn.pages, 8).exercises?.[0]?.explanation ?? '';
assert.ok(/not described|does not identify|scholar/i.test(chapter8Explanation), 'Adam B2 EN chapter 8: source limits are not preserved.');

console.log('Adam B2 English Gold: PASS');
console.log('- 17 canonical story chapters protected');
console.log('- 17 evidence/reasoning Quick Challenges');
console.log('- Knowledge 8 / Review 8 / Final 10');
console.log('- Glossary >=18 + >=18');
console.log('- Teacher Guide 17 / Self-Study Guide 17');
console.log('- source-framing safeguards preserved');
