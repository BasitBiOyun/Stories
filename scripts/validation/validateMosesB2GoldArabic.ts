import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { mosesB2PagesAr } from '../../src/data/moses/b2/ar/pages';
import { mosesB2BookDataAr } from '../../src/data/moses/b2';
import { mosesB2GoldContractAr } from '../../src/data/moses/b2/goldLearningAr';

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
  assert.ok(page, `Moses B2 AR: page ${id} is missing.`);
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
  assert.ok((exercise.explanation?.trim().length ?? 0) >= 30, `${label}: B2 explanation is too thin.`);
  assert.ok((exercise.feedback?.incorrect?.trim().length ?? 0) >= 25, `${label}: retry feedback is too thin.`);
};

const validateAnswerBalance = (exercises: Exercise[], label: string) => {
  const positions = exercises.map((exercise) => exercise.correctAnswer as number);
  assert.ok(new Set(positions).size >= 2, `${label}: correct answers are concentrated in one option position.`);
};

assert.equal(mosesB2BookDataAr.level, 'B2');
assert.equal(mosesB2BookDataAr.pages.length, mosesB2PagesAr.length, 'Moses B2 AR: page count changed.');
assert.deepEqual(
  mosesB2BookDataAr.pages.map((page) => [page.id, page.type]),
  mosesB2PagesAr.map((page) => [page.id, page.type]),
  'Moses B2 AR: page ids/types changed.',
);

for (const id of mosesB2GoldContractAr.storyIds) {
  const source = findPage(mosesB2PagesAr, id);
  const final = findPage(mosesB2BookDataAr.pages, id);

  for (const field of protectedStoryFields) {
    assert.deepEqual(final[field], source[field], `Moses B2 AR chapter ${id}: protected field ${field} changed.`);
  }

  const sourceHotspots = source.hotspots ?? [];
  const finalHotspots = final.hotspots ?? [];
  assert.equal(finalHotspots.length, sourceHotspots.length, `Moses B2 AR chapter ${id}: hotspot count changed.`);
  sourceHotspots.forEach((hotspot, index) => {
    const current = finalHotspots[index];
    assert.ok(current, `Moses B2 AR chapter ${id}: hotspot ${index + 1} missing.`);
    assert.equal(current.id, hotspot.id, `Moses B2 AR ${hotspot.id}: hotspot id changed.`);
    assert.equal(current.x, hotspot.x, `Moses B2 AR ${hotspot.id}: hotspot x changed.`);
    assert.equal(current.y, hotspot.y, `Moses B2 AR ${hotspot.id}: hotspot y changed.`);
  });

  assert.equal(final.exercises?.length, 1, `Moses B2 AR chapter ${id}: exactly one visible Quick Challenge required by current UI.`);
  validateObjective(final.exercises![0], `Moses B2 AR chapter ${id} Quick Challenge`);

  const vocabulary = final.vocabulary ?? [];
  assert.ok(vocabulary.length <= 7, `Moses B2 AR chapter ${id}: Word Notes may contain up to 7 reviewed source-grounded items.`);
  const vocabularyKeys = vocabulary.map((entry) => entry.word.normalize('NFKD').replace(/\p{M}/gu, '').trim());
  assert.equal(new Set(vocabularyKeys).size, vocabularyKeys.length, `Moses B2 AR chapter ${id}: duplicate Word Notes found.`);
  vocabulary.forEach((entry) => {
    assert.ok(entry.word.trim(), `Moses B2 AR chapter ${id}: empty Word Note word.`);
    assert.ok(entry.definition.trim(), `Moses B2 AR chapter ${id}: empty Word Note definition.`);
  });
}

const knowledge = findPage(mosesB2BookDataAr.pages, mosesB2GoldContractAr.knowledgeCheckPageId);
const vocabularyPage = findPage(mosesB2BookDataAr.pages, mosesB2GoldContractAr.vocabularyPageId);
const glossary1 = findPage(mosesB2BookDataAr.pages, mosesB2GoldContractAr.glossaryPageIds[0]);
const glossary2 = findPage(mosesB2BookDataAr.pages, mosesB2GoldContractAr.glossaryPageIds[1]);
const review = findPage(mosesB2BookDataAr.pages, mosesB2GoldContractAr.reviewPageId);
const finalChallenge = findPage(mosesB2BookDataAr.pages, mosesB2GoldContractAr.finalChallengePageId);

assert.equal(knowledge.exercises?.length, 8, 'Moses B2 AR: Knowledge Check must have 8 objective questions.');
assert.equal(review.exercises?.length, 8, 'Moses B2 AR: Review Challenge must have 8 objective questions.');
assert.equal(finalChallenge.exercises?.length, 10, 'Moses B2 AR: Final Challenge must have 10 dedicated objective questions.');
assert.equal(vocabularyPage.vocabularyPairs?.length, 10, 'Moses B2 AR: Vocabulary Challenge must have 10 pairs.');
assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, 'Moses B2 AR: Glossary Part 1 must have at least 18 entries.');
assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, 'Moses B2 AR: Glossary Part 2 must have at least 18 entries.');

for (const [items, label] of [
  [knowledge.exercises ?? [], 'Knowledge Check'],
  [review.exercises ?? [], 'Review Challenge'],
  [finalChallenge.exercises ?? [], 'Final Challenge'],
] as const) {
  items.forEach((exercise, index) => validateObjective(exercise, `Moses B2 AR ${label} ${index + 1}`));
  validateAnswerBalance(items, `Moses B2 AR ${label}`);
}

assert.equal(mosesB2BookDataAr.teacherGuide.length, 24, 'Moses B2 AR: Teacher Guide must align to all 24 canonical story chapters.');
assert.equal(mosesB2BookDataAr.selfStudyGuide.length, 24, 'Moses B2 AR: Self-Study Guide must align to all 24 canonical story chapters.');

for (let index = 0; index < 24; index += 1) {
  const story = findPage(mosesB2BookDataAr.pages, index + 1);
  const expectedLabel = `الفصل ${story.id}: ${story.title}`;
  const teacher = mosesB2BookDataAr.teacherGuide[index];
  const selfStudy = mosesB2BookDataAr.selfStudyGuide[index];

  assert.equal(teacher.chapter, expectedLabel, `Moses B2 AR Teacher Guide ${index + 1}: chapter label is misaligned.`);
  assert.equal(selfStudy.chapter, expectedLabel, `Moses B2 AR Self-Study ${index + 1}: chapter label is misaligned.`);
  assert.equal(teacher.extraResources, undefined, `Moses B2 AR Teacher Guide ${index + 1}: unsupported resource claim remains.`);
  assert.ok(teacher.objectives.length >= 3, `Moses B2 AR Teacher Guide ${index + 1}: objectives are too thin.`);
  assert.ok(teacher.lessonPlan.trim(), `Moses B2 AR Teacher Guide ${index + 1}: lesson plan missing.`);
  assert.ok(selfStudy.lessonPlan.trim(), `Moses B2 AR Self-Study ${index + 1}: study routine missing.`);
  assert.ok(selfStudy.interactiveTips.length >= 1, `Moses B2 AR Self-Study ${index + 1}: interactive guidance missing.`);
}

const sections = mosesB2BookDataAr.studentGuideSections ?? [];
const structuredGuide = sections.flatMap((section) => [section.title, section.text, ...(section.points ?? [])]).join('\n');
assert.ok(/24 فصلاً/.test(structuredGuide), 'Moses B2 AR: structured Self-Study UI does not reference 24 chapters.');
assert.ok(/10 أسئلة/.test(structuredGuide), 'Moses B2 AR: structured Self-Study UI does not describe the 10-question final challenge.');
assert.ok(mosesB2BookDataAr.studentGuideText?.includes('ستدرس 24 فصلاً'), 'Moses B2 AR: whole-book guide does not state the canonical 24 chapters.');
assert.ok(mosesB2BookDataAr.studentGuideText?.includes('8 أسئلة موضوعية'), 'Moses B2 AR: learner guide does not describe the 8-question review.');
assert.ok(mosesB2BookDataAr.studentGuideText?.includes('10 أسئلة موضوعية'), 'Moses B2 AR: learner guide does not describe the 10-question final challenge.');
assert.equal(
  mosesB2BookDataAr.teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length,
  24,
  'Moses B2 AR: extended Teacher Guide plan must cover 24 chapters.',
);

const historicalCautionQuestion = findPage(mosesB2BookDataAr.pages, 2).exercises?.[0]?.question ?? '';
assert.ok(/درجة اليقين|الحذر التاريخي/.test(historicalCautionQuestion), 'Moses B2 AR chapter 2: historical-caution Quick Challenge missing.');
const historicalCautionExplanation = findPage(mosesB2BookDataAr.pages, 2).exercises?.[0]?.explanation ?? '';
assert.ok(/غير معروف|على الأرجح|المصادر|ترجيح/.test(historicalCautionExplanation), 'Moses B2 AR chapter 2: historical uncertainty was flattened into certainty.');

console.log('Moses B2 Arabic Gold Pilot: PASS');
console.log('- 24 canonical story chapters protected');
console.log('- 24 Arabic B2 evidence/reasoning Quick Challenges');
console.log('- Knowledge 8 / Review 8 / Final 10');
console.log('- Vocabulary 10 / Glossary >=18 + >=18');
console.log('- Teacher Guide 24 / Self-Study Guide 24');
console.log('- unsupported Teacher Guide resources removed');
console.log('- historical-source caution preserved in Arabic derived learning copy');
