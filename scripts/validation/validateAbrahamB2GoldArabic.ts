import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { abrahamB2PagesAr } from '../../src/data/abraham/b2/ar/pages';
import { abrahamB2BookDataAr } from '../../src/data/abraham/b2';
import { abrahamB2GoldContractAr } from '../../src/data/abraham/b2/goldAr';

const protectedFields = ['id','type','title','subtitle','content','image','audioUrl','animatedWords','syncPoints','timedChunks'] as const;
const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Abraham B2 AR: page ${id} missing.`);
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
const balance = (items: Exercise[], label: string) => {
  const mc = items.filter((item) => item.type === 'multiple-choice');
  if (mc.length >= 3) assert.ok(new Set(mc.map((item) => item.correctAnswer as number)).size >= 2, `${label}: answer positions concentrated.`);
};

assert.equal(abrahamB2BookDataAr.pages.length, abrahamB2PagesAr.length, 'Abraham B2 AR: page count changed.');
assert.deepEqual(abrahamB2BookDataAr.pages.map((page) => [page.id, page.type]), abrahamB2PagesAr.map((page) => [page.id, page.type]), 'Abraham B2 AR: page sequence changed.');
for (const id of abrahamB2GoldContractAr.storyIds) {
  const source = findPage(abrahamB2PagesAr, id);
  const final = findPage(abrahamB2BookDataAr.pages, id);
  for (const field of protectedFields) assert.deepEqual(final[field], source[field], `Abraham B2 AR ch${id}: protected ${field} changed.`);
  const sh = source.hotspots ?? [];
  const fh = final.hotspots ?? [];
  assert.equal(fh.length, sh.length, `Abraham B2 AR ch${id}: hotspot count changed.`);
  sh.forEach((hotspot, index) => {
    assert.equal(fh[index].id, hotspot.id, `Abraham B2 AR ${hotspot.id}: id changed.`);
    assert.equal(fh[index].x, hotspot.x, `Abraham B2 AR ${hotspot.id}: x changed.`);
    assert.equal(fh[index].y, hotspot.y, `Abraham B2 AR ${hotspot.id}: y changed.`);
  });
  assert.equal(final.exercises?.length, 1, `Abraham B2 AR ch${id}: one visible Quick Challenge required.`);
  validateObjective(final.exercises![0], `Abraham B2 AR ch${id} Quick Challenge`);
}
assert.deepEqual(findPage(abrahamB2BookDataAr.pages, 36), findPage(abrahamB2PagesAr, 36), 'Abraham B2 AR: References page 36 changed.');

const review = findPage(abrahamB2BookDataAr.pages, 37);
const glossary1 = findPage(abrahamB2BookDataAr.pages, 38);
const glossary2 = findPage(abrahamB2BookDataAr.pages, 39);
const finalChallenge = findPage(abrahamB2BookDataAr.pages, 40);
assert.equal(review.exercises?.length, 8, 'Abraham B2 AR: Review must contain 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Abraham B2 AR: Final must contain 10 objective questions.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Abraham B2 AR: Glossary 1 must contain >=18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Abraham B2 AR: Glossary 2 must contain >=18 entries.');
review.exercises!.forEach((item, index) => validateObjective(item, `Abraham B2 AR Review ${index + 1}`));
finalChallenge.exercises!.forEach((item, index) => validateObjective(item, `Abraham B2 AR Final ${index + 1}`));
balance(review.exercises!, 'Abraham B2 AR Review');
balance(finalChallenge.exercises!, 'Abraham B2 AR Final');

assert.equal(abrahamB2BookDataAr.teacherGuide.length, 35, 'Abraham B2 AR: Teacher Guide must have 35 sections.');
assert.equal(abrahamB2BookDataAr.selfStudyGuide.length, 35, 'Abraham B2 AR: Self-Study must have 35 sections.');
for (let index = 0; index < 35; index += 1) {
  const page = findPage(abrahamB2BookDataAr.pages, index + 1);
  const expected = `الفصل ${page.id}: ${page.title}`;
  assert.equal(abrahamB2BookDataAr.teacherGuide[index].chapter, expected, `Abraham B2 AR Teacher ${index + 1}: label mismatch.`);
  assert.equal(abrahamB2BookDataAr.selfStudyGuide[index].chapter, expected, `Abraham B2 AR Self-Study ${index + 1}: label mismatch.`);
  assert.equal(abrahamB2BookDataAr.teacherGuide[index].extraResources, undefined, `Abraham B2 AR Teacher ${index + 1}: unsupported resources.`);
}
assert.ok(abrahamB2BookDataAr.studentGuideText?.includes('الفصول السردية الخمسة والثلاثين'), 'Abraham B2 AR: learner guide missing 35-chapter statement.');
assert.ok(abrahamB2BookDataAr.studentGuideText?.includes('لا توجد صفحة Knowledge مستقلة'), 'Abraham B2 AR: no-Knowledge exception missing.');
assert.equal(abrahamB2BookDataAr.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length, 35, 'Abraham B2 AR: optionC must cover 35 chapters.');
assert.ok(/خليل الله|يدعمها الفصل/.test(findPage(abrahamB2BookDataAr.pages, 1).exercises![0].question ?? ''), 'Abraham B2 AR ch1 correction missing.');
assert.ok(/المصادر|الترجيح|اختلاف/.test(`${findPage(abrahamB2BookDataAr.pages, 4).exercises![0].question} ${findPage(abrahamB2BookDataAr.pages, 4).exercises![0].explanation}`), 'Abraham B2 AR ch4 historical caution missing.');
assert.ok(/رواية|منقولة|نسبة/.test(`${findPage(abrahamB2BookDataAr.pages, 5).exercises![0].question} ${findPage(abrahamB2BookDataAr.pages, 5).exercises![0].explanation}`), 'Abraham B2 AR ch5 attribution missing.');
assert.ok(/رؤيا|المنام|يذبح/.test(`${findPage(abrahamB2BookDataAr.pages, 31).exercises![0].question} ${findPage(abrahamB2BookDataAr.pages, 31).exercises![0].explanation}`), 'Abraham B2 AR ch31 focus correction missing.');

console.log('Abraham B2 Arabic Gold: PASS');
console.log('- 35 canonical narrative chapters protected');
console.log('- References page 36 preserved');
console.log('- Review 8 / Final 10; no invented Knowledge page');
console.log('- Teacher Guide 35 / Self-Study 35');
console.log('- source attribution safeguards present');
