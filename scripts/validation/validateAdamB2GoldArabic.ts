import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { adamB2PagesAr } from '../../src/data/adam/b2/ar/pages';
import { adamB2BookDataAr } from '../../src/data/adam/b2';
import { adamB2GoldContractAr } from '../../src/data/adam/b2/goldAr';

const protectedStoryFields = [
  'id', 'type', 'title', 'subtitle', 'content', 'image', 'audioUrl', 'syncPoints', 'timedChunks',
] as const;

const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Adam B2 AR: page ${id} is missing.`);
  return page;
};

const validateObjective = (exercise: Exercise, label: string) => {
  assert.ok(exercise.type === 'multiple-choice' || exercise.type === 'true-false', `${label}: objective type required.`);
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 20, `${label}: retry feedback too thin.`);
  if (exercise.type === 'multiple-choice') {
    assert.equal(exercise.options?.length, 3, `${label}: three options required.`);
    assert.equal(new Set(exercise.options).size, 3, `${label}: options must be distinct.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: numeric answer index required.`);
    assert.ok(typeof exercise.correctAnswer === 'number' && exercise.correctAnswer >= 0 && exercise.correctAnswer < 3, `${label}: invalid answer index.`);
  } else {
    assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: boolean answer required.`);
  }
};

const validateAnswerBalance = (items: Exercise[], label: string) => {
  const mc = items.filter((exercise) => exercise.type === 'multiple-choice');
  if (mc.length < 3) return;
  assert.ok(new Set(mc.map((exercise) => exercise.correctAnswer as number)).size >= 2, `${label}: answer positions are concentrated.`);
};

assert.equal(adamB2BookDataAr.level, 'B2');
assert.equal(adamB2BookDataAr.pages.length, adamB2PagesAr.length, 'Adam B2 AR: page count changed.');
assert.deepEqual(
  adamB2BookDataAr.pages.map((page) => [page.id, page.type]),
  adamB2PagesAr.map((page) => [page.id, page.type]),
  'Adam B2 AR: page id/type sequence changed.',
);

for (const id of adamB2GoldContractAr.storyIds) {
  const source = findPage(adamB2PagesAr, id);
  const final = findPage(adamB2BookDataAr.pages, id);
  for (const field of protectedStoryFields) {
    assert.deepEqual(final[field], source[field], `Adam B2 AR chapter ${id}: protected field ${field} changed.`);
  }

  const sourceHotspots = source.hotspots ?? [];
  const finalHotspots = final.hotspots ?? [];
  assert.equal(finalHotspots.length, sourceHotspots.length, `Adam B2 AR chapter ${id}: hotspot count changed.`);
  sourceHotspots.forEach((hotspot, index) => {
    const current = finalHotspots[index];
    assert.ok(current, `Adam B2 AR chapter ${id}: hotspot ${index + 1} missing.`);
    assert.equal(current.id, hotspot.id, `Adam B2 AR ${hotspot.id}: id changed.`);
    assert.equal(current.x, hotspot.x, `Adam B2 AR ${hotspot.id}: x changed.`);
    assert.equal(current.y, hotspot.y, `Adam B2 AR ${hotspot.id}: y changed.`);
  });

  assert.equal(final.exercises?.length, 1, `Adam B2 AR chapter ${id}: one visible Quick Challenge required.`);
  validateObjective(final.exercises![0], `Adam B2 AR chapter ${id} Quick Challenge`);

  const vocabulary = final.vocabulary ?? [];
  assert.ok(vocabulary.length <= 7, `Adam B2 AR chapter ${id}: Word Notes may contain up to 7 reviewed source-grounded items.`);
  const keys = vocabulary.map((entry) => entry.word.normalize('NFKD').replace(/\p{M}/gu, '').trim());
  assert.equal(new Set(keys).size, keys.length, `Adam B2 AR chapter ${id}: duplicate Word Notes.`);
}

const knowledge = findPage(adamB2BookDataAr.pages, adamB2GoldContractAr.knowledgeCheckPageId);
const review = findPage(adamB2BookDataAr.pages, adamB2GoldContractAr.reviewPageId);
const glossary1 = findPage(adamB2BookDataAr.pages, adamB2GoldContractAr.glossaryPageIds[0]);
const glossary2 = findPage(adamB2BookDataAr.pages, adamB2GoldContractAr.glossaryPageIds[1]);
const finalChallenge = findPage(adamB2BookDataAr.pages, adamB2GoldContractAr.finalChallengePageId);

assert.equal(knowledge.exercises?.length, 8, 'Adam B2 AR: Knowledge Check must have 8 objective questions.');
assert.equal(review.exercises?.length, 8, 'Adam B2 AR: Review Challenge must have 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Adam B2 AR: Final Challenge must have 10 objective questions.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Adam B2 AR: Glossary Part 1 must have at least 18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Adam B2 AR: Glossary Part 2 must have at least 18 entries.');

for (const [items, label] of [
  [knowledge.exercises ?? [], 'Knowledge Check'],
  [review.exercises ?? [], 'Review Challenge'],
  [finalChallenge.exercises ?? [], 'Final Challenge'],
] as const) {
  items.forEach((exercise, index) => validateObjective(exercise, `Adam B2 AR ${label} ${index + 1}`));
  validateAnswerBalance(items, `Adam B2 AR ${label}`);
}

assert.equal(adamB2BookDataAr.teacherGuide.length, 17, 'Adam B2 AR: Teacher Guide must have 17 chapter sections.');
assert.equal(adamB2BookDataAr.selfStudyGuide.length, 17, 'Adam B2 AR: Self-Study Guide must have 17 chapter sections.');
for (let index = 0; index < 17; index += 1) {
  const story = findPage(adamB2BookDataAr.pages, index + 1);
  const expected = `الفصل ${story.id}: ${story.title}`;
  assert.equal(adamB2BookDataAr.teacherGuide[index].chapter, expected, `Adam B2 AR Teacher Guide ${index + 1}: chapter mismatch.`);
  assert.equal(adamB2BookDataAr.selfStudyGuide[index].chapter, expected, `Adam B2 AR Self-Study ${index + 1}: chapter mismatch.`);
  assert.equal(adamB2BookDataAr.teacherGuide[index].extraResources, undefined, `Adam B2 AR Teacher Guide ${index + 1}: unsupported resources remain.`);
}

assert.ok(adamB2BookDataAr.studentGuideText?.includes('الفصول السبعة عشر'), 'Adam B2 AR: whole-book guide does not state 17 chapters.');
assert.equal(adamB2BookDataAr.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length, 17, 'Adam B2 AR: extended plan must cover 17 chapters.');

const sourceCaution = findPage(adamB2BookDataAr.pages, 2).exercises?.[0];
assert.ok(/المصادر|ترجيح|بعض/.test(`${sourceCaution?.question ?? ''} ${sourceCaution?.explanation ?? ''}`), 'Adam B2 AR chapter 2: source attribution safeguard missing.');
const treeCaution = findPage(adamB2BookDataAr.pages, 8).exercises?.[0];
assert.ok(/القرآن|علماء الإسلام|لم يصف/.test(`${treeCaution?.question ?? ''} ${treeCaution?.explanation ?? ''}`), 'Adam B2 AR chapter 8: tree/source-framing safeguard missing.');

console.log('Adam B2 Arabic Gold: PASS');
console.log('- 17 canonical story chapters protected');
console.log('- Knowledge 8 / Review 8 / Final 10');
console.log('- Glossary >=18 + >=18');
console.log('- Teacher Guide 17 / Self-Study Guide 17');
console.log('- attribution/source-framing safeguards preserved');
