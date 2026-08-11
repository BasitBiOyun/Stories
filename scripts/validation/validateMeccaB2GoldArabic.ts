import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { meccaB2PagesAr } from '../../src/data/mecca/b2/ar/pages';
import { meccaB2BookDataAr } from '../../src/data/mecca/b2';
import { meccaB2GoldContractAr } from '../../src/data/mecca/b2/goldAr';

const protectedFields = ['id','type','title','subtitle','content','image','audioUrl','syncPoints','timedChunks'] as const;
const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Mecca B2 AR: page ${id} missing.`);
  return page;
};
const objective = (exercise: Exercise, label: string) => {
  assert.ok(exercise.type === 'multiple-choice' || exercise.type === 'true-false', `${label}: objective type required.`);
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 20, `${label}: retry feedback too thin.`);
  if (exercise.type === 'multiple-choice') {
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: at least three options required.`);
    assert.equal(new Set(exercise.options).size, exercise.options!.length, `${label}: duplicate options.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: numeric answer required.`);
    assert.ok(typeof exercise.correctAnswer === 'number' && exercise.correctAnswer >= 0 && exercise.correctAnswer < exercise.options!.length, `${label}: invalid answer index.`);
  } else assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: boolean answer required.`);
};
const balance = (items: Exercise[], label: string) => {
  const mc = items.filter((item) => item.type === 'multiple-choice');
  if (mc.length >= 3) assert.ok(new Set(mc.map((item) => item.correctAnswer as number)).size >= 2, `${label}: answer positions concentrated.`);
};

assert.equal(meccaB2BookDataAr.pages.length, meccaB2PagesAr.length, 'Mecca B2 AR: page count changed.');
assert.deepEqual(meccaB2BookDataAr.pages.map((page) => [page.id, page.type]), meccaB2PagesAr.map((page) => [page.id, page.type]), 'Mecca B2 AR: page sequence changed.');
for (const id of meccaB2GoldContractAr.storyIds) {
  const source = findPage(meccaB2PagesAr, id);
  const final = findPage(meccaB2BookDataAr.pages, id);
  for (const field of protectedFields) assert.deepEqual(final[field], source[field], `Mecca B2 AR ch${id}: protected ${field} changed.`);
  const sh = source.hotspots ?? [];
  const fh = final.hotspots ?? [];
  assert.equal(fh.length, sh.length, `Mecca B2 AR ch${id}: hotspot count changed.`);
  sh.forEach((hotspot, index) => {
    assert.equal(fh[index].id, hotspot.id, `Mecca B2 AR ${hotspot.id}: id changed.`);
    assert.equal(fh[index].x, hotspot.x, `Mecca B2 AR ${hotspot.id}: x changed.`);
    assert.equal(fh[index].y, hotspot.y, `Mecca B2 AR ${hotspot.id}: y changed.`);
  });
  assert.equal(final.exercises?.length, 1, `Mecca B2 AR ch${id}: one visible Quick Challenge required.`);
  objective(final.exercises![0], `Mecca B2 AR ch${id} Quick Challenge`);
}

const knowledge = findPage(meccaB2BookDataAr.pages, 18);
const review = findPage(meccaB2BookDataAr.pages, 19);
const glossary1 = findPage(meccaB2BookDataAr.pages, 20);
const glossary2 = findPage(meccaB2BookDataAr.pages, 21);
const finalChallenge = findPage(meccaB2BookDataAr.pages, 22);
assert.equal(knowledge.exercises?.length, 8, 'Mecca B2 AR: Knowledge must contain 8 objective questions.');
assert.equal(review.exercises?.length, 8, 'Mecca B2 AR: Review must contain 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Mecca B2 AR: Final must contain 10 objective questions.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Mecca B2 AR: Glossary 1 must contain >=18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Mecca B2 AR: Glossary 2 must contain >=18 entries.');
for (const [items, label] of [[knowledge.exercises ?? [], 'Knowledge'], [review.exercises ?? [], 'Review'], [finalChallenge.exercises ?? [], 'Final']] as const) {
  items.forEach((item, index) => objective(item, `Mecca B2 AR ${label} ${index + 1}`));
  balance(items, `Mecca B2 AR ${label}`);
}

assert.equal(meccaB2BookDataAr.teacherGuide.length, 17, 'Mecca B2 AR: Teacher Guide must have 17 sections.');
assert.equal(meccaB2BookDataAr.selfStudyGuide.length, 17, 'Mecca B2 AR: Self-Study must have 17 sections.');
for (let index = 0; index < 17; index += 1) {
  const page = findPage(meccaB2BookDataAr.pages, index + 1);
  const expected = `الفصل ${page.id}: ${page.title}`;
  assert.equal(meccaB2BookDataAr.teacherGuide[index].chapter, expected, `Mecca B2 AR Teacher ${index + 1}: label mismatch.`);
  assert.equal(meccaB2BookDataAr.selfStudyGuide[index].chapter, expected, `Mecca B2 AR Self-Study ${index + 1}: label mismatch.`);
  assert.equal(meccaB2BookDataAr.teacherGuide[index].extraResources, undefined, `Mecca B2 AR Teacher ${index + 1}: unsupported resources.`);
}
assert.equal(meccaB2BookDataAr.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length, 17, 'Mecca B2 AR: optionC must cover 17 chapters.');

const ch15 = findPage(meccaB2BookDataAr.pages, 15).exercises![0];
const ch15Derived = `${ch15.title} ${ch15.question} ${ch15.explanation} ${ch15.feedback?.correct} ${ch15.feedback?.incorrect}`;
assert.ok(!/صخرة|صدر|أوراق الشجر|صراخ الأطفال|موت الأطفال|يموتون من الجوع/.test(ch15Derived), 'Mecca B2 AR ch15: derived exercise amplifies graphic suffering details.');
assert.ok(/الضعفاء|حماية|ضغط|مقاطعة|المعارضة/.test(ch15Derived), 'Mecca B2 AR ch15: structural vulnerability focus missing.');
const ch10 = findPage(meccaB2BookDataAr.pages, 10).exercises![0];
assert.ok(/المكانة|واحدة|النساء|يختلف/.test(`${ch10.question} ${ch10.explanation}`), 'Mecca B2 AR ch10: variation in women’s position missing.');
const ch17 = findPage(meccaB2BookDataAr.pages, 17).exercises![0];
assert.ok(/وفقاً للفصل/.test(ch17.question ?? ''), 'Mecca B2 AR ch17: chapter-attribution framing missing.');

console.log('Mecca B2 Arabic Gold: PASS');
console.log('- 17 canonical story chapters protected');
console.log('- Knowledge 8 / Review 8 / Final 10');
console.log('- Glossary >=18 + >=18');
console.log('- Teacher Guide 17 / Self-Study 17');
console.log('- sensitive-content derived copy remains structural and non-graphic');
