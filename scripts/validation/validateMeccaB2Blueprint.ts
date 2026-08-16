import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';
import { meccaB2Pages } from '../../src/data/mecca/b2/en/pages';
import { meccaB2PagesAr } from '../../src/data/mecca/b2/ar/pages';
import { meccaB2BookDataEn, meccaB2BookDataAr } from '../../src/data/mecca/b2';
import { meccaB2LearningBlueprint } from '../../src/data/mecca/b2/learningBlueprint';
import { meccaB2BlueprintConfig } from '../../src/data/mecca/b2/config';
import { meccaB2HighlightTargets, meccaB2SourcePagesEn, meccaB2SourcePagesAr } from '../../src/data/mecca/b2/source';

const protectedFields = ['id', 'type', 'title', 'subtitle', 'content', 'image', 'audioUrl', 'syncPoints', 'timedChunks'] as const;
const scoredTypes = new Set(['multiple-choice', 'true-false', 'matching', 'fill-blanks']);

const page = (pages: PageData[], id: number, label: string): PageData => {
  const found = pages.find(candidate => candidate.id === id);
  assert.ok(found, `${label}: page ${id} is missing.`);
  return found;
};

const validateExercise = (exercise: Exercise, label: string) => {
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok(exercise.feedback?.correct?.trim(), `${label}: correct feedback missing.`);
  assert.ok(exercise.feedback?.incorrect?.trim(), `${label}: incorrect feedback missing.`);
  if (exercise.type === 'multiple-choice') {
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: MC requires at least three options.`);
    assert.equal(new Set(exercise.options ?? []).size, exercise.options?.length ?? 0, `${label}: MC options must be distinct.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: MC answer must be an index.`);
  }
  if (exercise.type === 'true-false') assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: TF answer must be boolean.`);
  if (exercise.type === 'matching') assert.ok((exercise.matchingPairs?.length ?? 0) >= 2, `${label}: matching requires at least two pairs.`);
  if (exercise.type === 'fill-blanks') assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill marker missing.`);
  if (exercise.type === 'tap-reveal') assert.ok((exercise.tapRevealItems?.length ?? 0) >= 1, `${label}: tap content missing.`);
};

const validateSource = (raw: PageData[], source: PageData[], label: string) => {
  assert.equal(source.length, raw.length, `${label}: source page count changed.`);
  assert.deepEqual(source.map(item => [item.id, item.type]), raw.map(item => [item.id, item.type]), `${label}: source page structure changed.`);
  for (const id of meccaB2BlueprintConfig.storyIds) {
    const rawPage = page(raw, id, `${label} raw`);
    const sourcePage = page(source, id, `${label} source`);
    for (const field of protectedFields) assert.deepEqual(sourcePage[field], rawPage[field], `${label} Chapter ${id}: protected source field ${field} changed.`);
    const rawHotspots = new Map((rawPage.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    for (const hotspot of sourcePage.hotspots ?? []) {
      const original = rawHotspots.get(hotspot.id);
      assert.ok(original, `${label} Chapter ${id}: introduced hotspot ${hotspot.id}.`);
      assert.equal(hotspot.x, original.x, `${label} Chapter ${id}: hotspot x changed.`);
      assert.equal(hotspot.y, original.y, `${label} Chapter ${id}: hotspot y changed.`);
    }
  }
};

const validateRuntime = (raw: PageData[], output: PageData[], language: 'en' | 'ar', label: string) => {
  assert.equal(output.length, raw.length, `${label}: runtime page count changed.`);
  assert.deepEqual(output.map(item => [item.id, item.type]), raw.map(item => [item.id, item.type]), `${label}: runtime page structure changed.`);

  for (const id of meccaB2BlueprintConfig.storyIds) {
    const rawPage = page(raw, id, `${label} raw`);
    const runtimePage = page(output, id, label);
    for (const field of protectedFields) assert.deepEqual(runtimePage[field], rawPage[field], `${label} Chapter ${id}: protected runtime field ${field} changed.`);
    assert.equal(runtimePage.animatedWords, undefined, `${label} Chapter ${id}: animatedWords remain.`);
    assert.equal(runtimePage.exercises?.length, 1, `${label} Chapter ${id}: exactly one Quick required.`);
    const quick = runtimePage.exercises?.[0];
    assert.ok(quick?.id.startsWith('blueprint-mecca-b2-quick-'), `${label} Chapter ${id}: Quick is not Blueprint-owned.`);
    validateExercise(quick, `${label} Chapter ${id} Quick`);

    const blueprintChapter = meccaB2LearningBlueprint.chapters.find(chapter => chapter.chapterId === id)!;
    const expectedVocabulary = blueprintChapter.vocabularyTargets.map(target => ({ ...target[language] }));
    assert.deepEqual(runtimePage.vocabulary ?? [], expectedVocabulary, `${label} Chapter ${id}: Word Notes are not Blueprint-owned.`);
    for (const entry of runtimePage.vocabulary ?? []) {
      assert.ok(highlightPhraseOccurs(runtimePage.content, entry.word, language), `${label} Chapter ${id}: Word Note ${entry.word} is not in prose.`);
    }
  }

  const knowledge = page(output, 18, label);
  assert.equal(knowledge.type, 'quiz', `${label}: Knowledge page type changed.`);
  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge must contain 8 activities.`);
  (knowledge.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${label} Knowledge ${index + 1}`));

  const review = page(output, 19, label);
  assert.equal(review.exercises?.length, 1, `${label}: Review must contain one quiz-game.`);
  assert.equal(review.exercises?.[0]?.type, 'quiz-game', `${label}: Review must be quiz-game.`);
  assert.equal(review.exercises?.[0]?.quizQuestions?.length, 8, `${label}: Review must contain 8 questions.`);

  const final = page(output, 22, label);
  assert.equal(final.exercises?.length, 10, `${label}: Final must contain 10 activities.`);
  const finalTypes = new Set((final.exercises ?? []).map(exercise => exercise.type));
  assert.deepEqual([...finalTypes].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${label}: Final interaction variety changed.`);
  (final.exercises ?? []).forEach((exercise, index) => {
    assert.ok(scoredTypes.has(exercise.type), `${label} Final ${index + 1}: unsupported type ${exercise.type}.`);
    validateExercise(exercise, `${label} Final ${index + 1}`);
  });

  const midpoint = Math.ceil(meccaB2BlueprintConfig.storyIds.length / 2);
  const groups = [meccaB2BlueprintConfig.storyIds.slice(0, midpoint), meccaB2BlueprintConfig.storyIds.slice(midpoint)];
  meccaB2BlueprintConfig.glossaryPageIds.forEach((id, index) => {
    const expected = groups[index].flatMap(chapterId => page(output, chapterId, label).vocabulary ?? []);
    assert.deepEqual(page(output, id, label).vocabulary ?? [], expected, `${label}: glossary ${index + 1} is not derived from final Word Notes.`);
  });
};

assert.equal(meccaB2LearningBlueprint.level, 'B2');
assert.equal(meccaB2LearningBlueprint.storyId, 'mecca');
assert.equal(meccaB2LearningBlueprint.chapters.length, 17);
const allItems = meccaB2LearningBlueprint.chapters.flatMap(chapter => chapter.assessmentItems);
const stageItems = (stage: 'quick' | 'knowledge' | 'review' | 'final') => allItems.filter(item => item.eligibleStages.includes(stage));
assert.equal(allItems.length, 43, 'Mecca B2: expected 43 unique assessment items.');
assert.equal(stageItems('quick').length, 17, 'Mecca B2: Quick count changed.');
assert.equal(stageItems('knowledge').length, 8, 'Mecca B2: Knowledge count changed.');
assert.equal(stageItems('review').length, 8, 'Mecca B2: Review count changed.');
assert.equal(stageItems('final').length, 10, 'Mecca B2: Final count changed.');

const learningPoints = allItems.map(item => item.learningPointId);
assert.equal(new Set(learningPoints).size, learningPoints.length, 'Mecca B2: assessed learning point repeated.');
const taps = allItems.filter(item => item.exercise.en.type === 'tap-reveal');
assert.deepEqual(taps.map(item => item.id).sort(), ['mecca-b2-c15-quick', 'mecca-b2-c8-quick'].sort(), 'Mecca B2: Tap-Reveal policy changed.');
taps.forEach(item => assert.deepEqual(item.eligibleStages, ['quick'], `${item.id}: Tap-Reveal must be Quick-only.`));

const reviewTypes = stageItems('review').map(item => item.exercise.en.type);
assert.equal(reviewTypes.filter(type => type === 'multiple-choice').length, 4, 'Mecca B2: Review needs 4 MC.');
assert.equal(reviewTypes.filter(type => type === 'true-false').length, 4, 'Mecca B2: Review needs 4 TF.');
assert.equal(new Set(reviewTypes).size, 2, 'Mecca B2: Review may only use MC and TF before quiz-game conversion.');
const authoredFinalTypes = new Set(stageItems('final').map(item => item.exercise.en.type));
assert.deepEqual([...authoredFinalTypes].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], 'Mecca B2: Final must preserve four scored types.');

validateSource(meccaB2Pages, meccaB2SourcePagesEn, 'Mecca B2 EN');
validateSource(meccaB2PagesAr, meccaB2SourcePagesAr, 'Mecca B2 AR');

for (const chapter of meccaB2LearningBlueprint.chapters) {
  assert.ok(chapter.objectives.length >= 2, `Mecca B2 Chapter ${chapter.chapterId}: objectives missing.`);
  assert.equal(chapter.evidencePoints.length, chapter.assessmentItems.length, `Mecca B2 Chapter ${chapter.chapterId}: evidence/assessment mismatch.`);
  const enRaw = page(meccaB2Pages, chapter.chapterId, 'Mecca B2 EN raw');
  const arRaw = page(meccaB2PagesAr, chapter.chapterId, 'Mecca B2 AR raw');
  chapter.evidencePoints.forEach(point => {
    assert.ok(highlightPhraseOccurs(enRaw.content, point.evidence.en, 'en'), `${point.id}: EN evidence not in raw prose.`);
    assert.ok(highlightPhraseOccurs(arRaw.content, point.evidence.ar, 'ar'), `${point.id}: AR evidence not in raw prose.`);
  });
  const canonical = meccaB2HighlightTargets[chapter.chapterId] ?? [];
  assert.equal(chapter.vocabularyTargets.length, canonical.length, `Mecca B2 Chapter ${chapter.chapterId}: canonical Word Note count mismatch.`);
  chapter.vocabularyTargets.forEach((target, index) => {
    assert.equal(normalizeHighlightText(target.en.word, 'en'), normalizeHighlightText(canonical[index].en.word, 'en'), `Mecca B2 Chapter ${chapter.chapterId}: EN target drift.`);
    assert.equal(normalizeHighlightText(target.ar.word, 'ar'), normalizeHighlightText(canonical[index].ar.word, 'ar'), `Mecca B2 Chapter ${chapter.chapterId}: AR target drift.`);
  });
}

validateRuntime(meccaB2Pages, meccaB2BookDataEn.pages, 'en', 'Mecca B2 EN');
validateRuntime(meccaB2PagesAr, meccaB2BookDataAr.pages, 'ar', 'Mecca B2 AR');

assert.equal(meccaB2BookDataEn.teacherGuide.length, 17, 'Mecca B2 EN Teacher Guide count mismatch.');
assert.equal(meccaB2BookDataAr.teacherGuide.length, 17, 'Mecca B2 AR Teacher Guide count mismatch.');
assert.equal(meccaB2BookDataEn.selfStudyGuide.length, 17, 'Mecca B2 EN Self-Study count mismatch.');
assert.equal(meccaB2BookDataAr.selfStudyGuide.length, 17, 'Mecca B2 AR Self-Study count mismatch.');
meccaB2BookDataEn.teacherGuide.forEach((guide, index) => {
  assert.equal(guide.timing, '55 minutes', `Mecca B2 EN Teacher ${index + 1}: timing changed.`);
  assert.ok(/120[–-]150/.test(guide.lessonPlan), `Mecca B2 EN Teacher ${index + 1}: analytical writing target missing.`);
});
meccaB2BookDataAr.teacherGuide.forEach((guide, index) => {
  assert.equal(guide.timing, '55 دقيقة', `Mecca B2 AR Teacher ${index + 1}: timing changed.`);
  assert.ok(/120[–-]150/.test(guide.lessonPlan), `Mecca B2 AR Teacher ${index + 1}: analytical writing target missing.`);
});

meccaB2BlueprintConfig.storyIds.forEach(id => {
  const enQuick = page(meccaB2BookDataEn.pages, id, 'Mecca B2 EN').exercises?.[0];
  const arQuick = page(meccaB2BookDataAr.pages, id, 'Mecca B2 AR').exercises?.[0];
  assert.equal(enQuick?.type, arQuick?.type, `Mecca B2 Chapter ${id}: EN/AR Quick type parity changed.`);
});

const womenQuick = meccaB2LearningBlueprint.chapters.find(chapter => chapter.chapterId === 10)?.assessmentItems.find(item => item.id === 'mecca-b2-c10-quick');
assert.ok(womenQuick, 'Mecca B2: Chapter 10 nuance Quick missing.');
assert.ok(/social status|tribe|not always the same/i.test(`${womenQuick.exercise.en.question} ${womenQuick.exercise.en.explanation}`), 'Mecca B2: Chapter 10 EN social-status nuance missing.');
assert.ok(/المكانة|الاجتماعية|القبيلة|واحد/.test(`${womenQuick.exercise.ar.question} ${womenQuick.exercise.ar.explanation}`), 'Mecca B2: Chapter 10 AR social-status nuance missing.');

const closingReview = meccaB2LearningBlueprint.chapters.find(chapter => chapter.chapterId === 17)?.assessmentItems.find(item => item.eligibleStages.includes('review'));
assert.ok(closingReview, 'Mecca B2: Chapter 17 source-framing Review missing.');
assert.ok(/closing chapter|term|wider moral/i.test(`${closingReview.exercise.en.question} ${closingReview.exercise.en.explanation}`), 'Mecca B2: Chapter 17 EN framing safeguard missing.');

console.log('Mecca B2 Blueprint Contract: PASS');
console.log('- 17 Quick; Knowledge 8; Review 8 (4 MC + 4 TF); Final 10');
console.log('- raw EN/AR story prose and protected fields unchanged');
console.log('- Tap-Reveal restricted to Chapters 8 and 15 Quick');
console.log('- runtime Word Notes and glossaries are Blueprint-owned');
console.log('- B2 evidence/interpretation writing and sensitive-history safeguards preserved');
