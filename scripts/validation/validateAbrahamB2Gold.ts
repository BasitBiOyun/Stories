import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { abrahamB2Pages } from '../../src/data/abraham/b2/en/pages';
import { abrahamB2BookDataEn } from '../../src/data/abraham/b2';
import { abrahamB2GoldContract } from '../../src/data/abraham/b2/gold';

const protectedFields = ['id','type','title','subtitle','content','image','audioUrl','syncPoints','timedChunks'] as const;
const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Abraham B2 EN: page ${id} missing.`);
  return page;
};
const validateObjective = (exercise: Exercise, label: string) => {
  assert.ok(exercise.type === 'multiple-choice' || exercise.type === 'true-false', `${label}: objective type required.`);
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 20, `${label}: retry feedback too thin.`);
  if (exercise.type === 'multiple-choice') {
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: at least three options required.`);
    assert.equal(new Set(exercise.options).size, exercise.options!.length, `${label}: duplicate options.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: numeric answer index required.`);
    assert.ok(typeof exercise.correctAnswer === 'number' && exercise.correctAnswer >= 0 && exercise.correctAnswer < exercise.options!.length, `${label}: invalid answer index.`);
  } else assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: boolean answer required.`);
};
const validateAnswerBalance = (items: Exercise[], label: string) => {
  const mc = items.filter((item) => item.type === 'multiple-choice');
  if (mc.length < 3) return;
  assert.ok(new Set(mc.map((item) => item.correctAnswer as number)).size >= 2, `${label}: answer positions concentrated.`);
};

assert.equal(abrahamB2BookDataEn.pages.length, abrahamB2Pages.length, 'Abraham B2 EN: page count changed.');
assert.deepEqual(abrahamB2BookDataEn.pages.map((page) => [page.id, page.type]), abrahamB2Pages.map((page) => [page.id, page.type]), 'Abraham B2 EN: page sequence changed.');

for (const id of abrahamB2GoldContract.storyIds) {
  const source = findPage(abrahamB2Pages, id);
  const final = findPage(abrahamB2BookDataEn.pages, id);
  for (const field of protectedFields) assert.deepEqual(final[field], source[field], `Abraham B2 EN ch${id}: protected ${field} changed.`);
  const sourceHotspots = source.hotspots ?? [];
  const finalHotspots = final.hotspots ?? [];
  assert.equal(finalHotspots.length, sourceHotspots.length, `Abraham B2 EN ch${id}: hotspot count changed.`);
  sourceHotspots.forEach((hotspot, index) => {
    const current = finalHotspots[index];
    assert.equal(current.id, hotspot.id, `Abraham B2 EN ${hotspot.id}: id changed.`);
    assert.equal(current.x, hotspot.x, `Abraham B2 EN ${hotspot.id}: x changed.`);
    assert.equal(current.y, hotspot.y, `Abraham B2 EN ${hotspot.id}: y changed.`);
  });
  assert.equal(final.exercises?.length, 1, `Abraham B2 EN ch${id}: exactly one visible Quick Challenge required.`);
  validateObjective(final.exercises![0], `Abraham B2 EN ch${id} Quick Challenge`);
}

assert.deepEqual(findPage(abrahamB2BookDataEn.pages, 36), findPage(abrahamB2Pages, 36), 'Abraham B2 EN: canonical References page 36 changed.');

const review = findPage(abrahamB2BookDataEn.pages, 37);
const glossary1 = findPage(abrahamB2BookDataEn.pages, 38);
const glossary2 = findPage(abrahamB2BookDataEn.pages, 39);
const finalChallenge = findPage(abrahamB2BookDataEn.pages, 40);
assert.equal(review.exercises?.length, 8, 'Abraham B2 EN: Review must contain 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Abraham B2 EN: Final must contain 10 objective questions.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Abraham B2 EN: Glossary 1 must contain >=18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Abraham B2 EN: Glossary 2 must contain >=18 entries.');
review.exercises!.forEach((item, index) => validateObjective(item, `Abraham B2 EN Review ${index + 1}`));
finalChallenge.exercises!.forEach((item, index) => validateObjective(item, `Abraham B2 EN Final ${index + 1}`));
validateAnswerBalance(review.exercises!, 'Abraham B2 EN Review');
validateAnswerBalance(finalChallenge.exercises!, 'Abraham B2 EN Final');

assert.equal(abrahamB2BookDataEn.teacherGuide.length, 35, 'Abraham B2 EN: Teacher Guide must have 35 sections.');
assert.equal(abrahamB2BookDataEn.selfStudyGuide.length, 35, 'Abraham B2 EN: Self-Study must have 35 sections.');
for (let index = 0; index < 35; index += 1) {
  const page = findPage(abrahamB2BookDataEn.pages, index + 1);
  const expected = `Chapter ${page.id}: ${page.title}`;
  assert.equal(abrahamB2BookDataEn.teacherGuide[index].chapter, expected, `Abraham B2 EN Teacher ${index + 1}: label mismatch.`);
  assert.equal(abrahamB2BookDataEn.selfStudyGuide[index].chapter, expected, `Abraham B2 EN Self-Study ${index + 1}: label mismatch.`);
  assert.equal(abrahamB2BookDataEn.teacherGuide[index].extraResources, undefined, `Abraham B2 EN Teacher ${index + 1}: unsupported resources.`);
}
assert.ok(abrahamB2BookDataEn.studentGuideText?.includes('35 canonical narrative chapters'), 'Abraham B2 EN: learner guide missing 35-chapter statement.');
assert.ok(abrahamB2BookDataEn.studentGuideText?.includes('no dedicated Knowledge Check page'), 'Abraham B2 EN: canonical no-Knowledge exception not documented in learner guide.');
assert.equal(abrahamB2BookDataEn.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length, 35, 'Abraham B2 EN: optionC must cover 35 chapters.');

const ch1 = findPage(abrahamB2BookDataEn.pages, 1).exercises![0];
assert.ok(/directly supported|actually establishes/i.test(`${ch1.title} ${ch1.question}`), 'Abraham B2 EN ch1: unsupported halilullah-reason correction missing.');
const ch4 = findPage(abrahamB2BookDataEn.pages, 4).exercises![0];
assert.ok(/different ideas|some sources|caution/i.test(`${ch4.question} ${ch4.explanation}`), 'Abraham B2 EN ch4: historical caution missing.');
const ch5 = findPage(abrahamB2BookDataEn.pages, 5).exercises![0];
assert.ok(/another narration|attributed reports|report/i.test(`${ch5.question} ${ch5.explanation}`), 'Abraham B2 EN ch5: narration attribution missing.');
const ch31 = findPage(abrahamB2BookDataEn.pages, 31).exercises![0];
assert.ok(/dream|sacrifice/i.test(`${ch31.question} ${ch31.explanation}`), 'Abraham B2 EN ch31: wrong legacy Jurham question remains active.');

console.log('Abraham B2 English Gold: PASS');
console.log('- 35 canonical narrative chapters protected');
console.log('- References page 36 preserved');
console.log('- Review 8 / Final 10; no invented Knowledge page');
console.log('- Teacher Guide 35 / Self-Study 35');
console.log('- historical/source attribution safeguards present');
