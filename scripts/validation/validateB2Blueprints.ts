import assert from 'node:assert/strict';
import type { BookData, Exercise, PageData } from '../../src/types';
import type { LearningBlueprint } from '../../src/data/learningBlueprint';
import type { B2CanonicalHighlightTarget } from '../../src/data/b2HighlightStandard';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';

import { adamB2Pages } from '../../src/data/adam/b2/en/pages';
import { adamB2PagesAr } from '../../src/data/adam/b2/ar/pages';
import { adamB2BookDataEn, adamB2BookDataAr } from '../../src/data/adam/b2';
import { adamB2LearningBlueprint } from '../../src/data/adam/b2/learningBlueprint';
import { adamB2BlueprintConfig } from '../../src/data/adam/b2/config';
import { adamB2HighlightTargets, adamB2SourcePagesEn, adamB2SourcePagesAr } from '../../src/data/adam/b2/source';

import { mosesB2Pages } from '../../src/data/moses/b2/en/pages';
import { pages as mosesB2PagesAr } from '../../src/data/moses/b2/ar/pages';
import { mosesB2BookDataEn, mosesB2BookDataAr } from '../../src/data/moses/b2';
import { mosesB2LearningBlueprint } from '../../src/data/moses/b2/learningBlueprint';
import { mosesB2BlueprintConfig } from '../../src/data/moses/b2/config';
import { mosesB2HighlightTargets, mosesB2SourcePagesEn, mosesB2SourcePagesAr } from '../../src/data/moses/b2/source';

import { abrahamB2Pages } from '../../src/data/abraham/b2/en/pages';
import { abrahamB2PagesAr } from '../../src/data/abraham/b2/ar/pages';
import { abrahamB2BookDataEn, abrahamB2BookDataAr } from '../../src/data/abraham/b2';
import { abrahamB2LearningBlueprint } from '../../src/data/abraham/b2/learningBlueprint';
import { abrahamB2BlueprintConfig } from '../../src/data/abraham/b2/config';
import { abrahamB2HighlightTargets, abrahamB2SourcePagesEn, abrahamB2SourcePagesAr } from '../../src/data/abraham/b2/source';

const protectedFields = ['id', 'type', 'title', 'subtitle', 'content', 'image', 'audioUrl', 'syncPoints', 'timedChunks'] as const;
const scoredTypes = new Set(['multiple-choice', 'true-false', 'matching', 'fill-blanks']);

type Config = {
  storyIds: readonly number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  glossaryPageIds: readonly [number, number] | readonly number[];
  reviewPageId: number;
  finalChallengePageId: number;
};

type BlueprintCase = {
  label: string;
  storyId: string;
  blueprint: LearningBlueprint;
  config: Config;
  rawEn: PageData[];
  rawAr: PageData[];
  sourceEn: PageData[];
  sourceAr: PageData[];
  bookEn: BookData;
  bookAr: BookData;
  targets: Record<number, readonly B2CanonicalHighlightTarget[]>;
  tapIds: string[];
  runtimeTypeOverrides?: Partial<Record<number, PageData['type']>>;
};

const cases: BlueprintCase[] = [
  {
    label: 'Adam B2',
    storyId: 'adam',
    blueprint: adamB2LearningBlueprint,
    config: adamB2BlueprintConfig,
    rawEn: adamB2Pages,
    rawAr: adamB2PagesAr,
    sourceEn: adamB2SourcePagesEn,
    sourceAr: adamB2SourcePagesAr,
    bookEn: adamB2BookDataEn,
    bookAr: adamB2BookDataAr,
    targets: adamB2HighlightTargets,
    tapIds: ['adam-b2-c3-quick', 'adam-b2-c8-quick'],
  },
  {
    label: 'Moses B2',
    storyId: 'moses',
    blueprint: mosesB2LearningBlueprint,
    config: mosesB2BlueprintConfig,
    rawEn: mosesB2Pages,
    rawAr: mosesB2PagesAr,
    sourceEn: mosesB2SourcePagesEn,
    sourceAr: mosesB2SourcePagesAr,
    bookEn: mosesB2BookDataEn,
    bookAr: mosesB2BookDataAr,
    targets: mosesB2HighlightTargets,
    tapIds: ['moses-b2-c3-quick', 'moses-b2-c8-quick'],
  },
  {
    label: 'Abraham B2',
    storyId: 'abraham',
    blueprint: abrahamB2LearningBlueprint,
    config: abrahamB2BlueprintConfig,
    rawEn: abrahamB2Pages,
    rawAr: abrahamB2PagesAr,
    sourceEn: abrahamB2SourcePagesEn,
    sourceAr: abrahamB2SourcePagesAr,
    bookEn: abrahamB2BookDataEn,
    bookAr: abrahamB2BookDataAr,
    targets: abrahamB2HighlightTargets,
    tapIds: ['abraham-b2-c8-quick', 'abraham-b2-c27-quick'],
    runtimeTypeOverrides: { 36: 'quiz' },
  },
];

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
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: multiple-choice needs at least three options.`);
    assert.equal(new Set(exercise.options ?? []).size, exercise.options?.length ?? 0, `${label}: multiple-choice options must be distinct.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: multiple-choice answer must be an index.`);
  }
  if (exercise.type === 'true-false') assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: true-false answer must be boolean.`);
  if (exercise.type === 'matching') assert.ok((exercise.matchingPairs?.length ?? 0) >= 2, `${label}: matching needs at least two pairs.`);
  if (exercise.type === 'fill-blanks') assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill-blanks marker missing.`);
  if (exercise.type === 'tap-reveal') assert.ok((exercise.tapRevealItems?.length ?? 0) >= 1, `${label}: tap-reveal content missing.`);
};

const validateSourceLayer = (rawPages: PageData[], sourcePages: PageData[], storyIds: readonly number[], label: string) => {
  assert.equal(sourcePages.length, rawPages.length, `${label}: source layer changed page count.`);
  assert.deepEqual(sourcePages.map(item => [item.id, item.type]), rawPages.map(item => [item.id, item.type]), `${label}: source layer changed page structure.`);

  for (const id of storyIds) {
    const raw = page(rawPages, id, `${label} raw`);
    const source = page(sourcePages, id, `${label} source`);
    for (const field of protectedFields) assert.deepEqual(source[field], raw[field], `${label} Chapter ${id}: source layer changed protected field ${field}.`);

    const rawHotspots = new Map((raw.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    for (const hotspot of source.hotspots ?? []) {
      const original = rawHotspots.get(hotspot.id);
      assert.ok(original, `${label} Chapter ${id}: source layer introduced hotspot ${hotspot.id}.`);
      assert.equal(hotspot.x, original.x, `${label} Chapter ${id} ${hotspot.id}: x coordinate changed.`);
      assert.equal(hotspot.y, original.y, `${label} Chapter ${id} ${hotspot.id}: y coordinate changed.`);
    }
  }
};

const validateLanguage = (
  current: BlueprintCase,
  label: string,
  rawPages: PageData[],
  outputPages: PageData[],
  language: 'en' | 'ar',
) => {
  const { blueprint, config } = current;
  assert.equal(outputPages.length, rawPages.length, `${label}: page count changed.`);
  const expectedStructure = rawPages.map(item => [item.id, current.runtimeTypeOverrides?.[item.id] ?? item.type]);
  assert.deepEqual(outputPages.map(item => [item.id, item.type]), expectedStructure, `${label}: page structure changed outside approved runtime type overrides.`);

  for (const id of config.storyIds) {
    const raw = page(rawPages, id, `${label} raw`);
    const output = page(outputPages, id, label);
    for (const field of protectedFields) assert.deepEqual(output[field], raw[field], `${label} Chapter ${id}: protected field ${field} changed.`);
    assert.equal(output.animatedWords, undefined, `${label} Chapter ${id}: legacy animatedWords remain.`);
    assert.equal(output.exercises?.length, 1, `${label} Chapter ${id}: exactly one Quick Challenge required.`);
    const quick = output.exercises?.[0];
    assert.ok(quick?.id.startsWith(`blueprint-${blueprint.id}-quick-`), `${label} Chapter ${id}: Quick Challenge is not Blueprint-owned.`);
    validateExercise(quick, `${label} Chapter ${id} Quick`);

    const blueprintChapter = blueprint.chapters.find(chapter => chapter.chapterId === id)!;
    const expectedVocabulary = blueprintChapter.vocabularyTargets.map(target => ({ ...target[language] }));
    assert.deepEqual(output.vocabulary ?? [], expectedVocabulary, `${label} Chapter ${id}: runtime Word Notes are not Blueprint-owned.`);
    (output.vocabulary ?? []).forEach(entry => {
      assert.ok(highlightPhraseOccurs(output.content, entry.word, language), `${label} Chapter ${id}: Word Note ${entry.word} is not in story prose.`);
    });

    const rawHotspots = new Map((raw.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    for (const hotspot of output.hotspots ?? []) {
      const original = rawHotspots.get(hotspot.id);
      assert.ok(original, `${label} Chapter ${id}: runtime introduced hotspot ${hotspot.id}.`);
      assert.equal(hotspot.x, original.x, `${label} Chapter ${id} ${hotspot.id}: runtime x coordinate changed.`);
      assert.equal(hotspot.y, original.y, `${label} Chapter ${id} ${hotspot.id}: runtime y coordinate changed.`);
    }
  }

  const knowledge = page(outputPages, config.knowledgeCheckPageId, label);
  assert.equal(knowledge.type, 'quiz', `${label}: Knowledge Check page must be a quiz surface.`);
  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge Check must contain 8 activities.`);
  (knowledge.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${label} Knowledge ${index + 1}`));

  if (config.vocabularyPageId) {
    const vocabularyPage = page(outputPages, config.vocabularyPageId, label);
    assert.equal(vocabularyPage.vocabularyPairs?.length, 10, `${label}: Vocabulary Challenge must contain 10 pairs.`);
  }

  const review = page(outputPages, config.reviewPageId, label);
  assert.equal(review.exercises?.length, 1, `${label}: Review must contain one quiz-game.`);
  assert.equal(review.exercises?.[0]?.type, 'quiz-game', `${label}: Review must use quiz-game.`);
  assert.equal(review.exercises?.[0]?.quizQuestions?.length, 8, `${label}: Review must contain 8 authored questions.`);

  const final = page(outputPages, config.finalChallengePageId, label);
  assert.equal(final.exercises?.length, 10, `${label}: Final Challenge must contain 10 activities.`);
  const finalTypes = new Set((final.exercises ?? []).map(exercise => exercise.type));
  assert.deepEqual([...finalTypes].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${label}: Final interaction variety changed.`);
  (final.exercises ?? []).forEach((exercise, index) => {
    assert.ok(scoredTypes.has(exercise.type), `${label} Final ${index + 1}: unsupported Final type ${exercise.type}.`);
    validateExercise(exercise, `${label} Final ${index + 1}`);
  });

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const groups = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
  config.glossaryPageIds.forEach((id, index) => {
    const glossary = page(outputPages, id, label);
    const expected = groups[index].flatMap(chapterId => page(outputPages, chapterId, label).vocabulary ?? []);
    assert.deepEqual(glossary.vocabulary ?? [], expected, `${label}: glossary ${index + 1} is not derived exactly from final Word Notes.`);
  });
};

for (const current of cases) {
  const { label, storyId, blueprint, config, rawEn, rawAr, sourceEn, sourceAr, bookEn, bookAr, targets, tapIds } = current;
  const allItems = blueprint.chapters.flatMap(chapter => chapter.assessmentItems);
  const stageItems = (stage: 'quick' | 'knowledge' | 'review' | 'final') => allItems.filter(item => item.eligibleStages.includes(stage));

  assert.equal(blueprint.level, 'B2', `${label}: Blueprint level changed.`);
  assert.equal(blueprint.storyId, storyId, `${label}: Blueprint story id changed.`);
  assert.equal(blueprint.chapters.length, config.storyIds.length, `${label}: chapter count mismatch.`);
  assert.equal(allItems.length, config.storyIds.length + 26, `${label}: authored assessment count must equal one Quick per chapter plus 26 whole-book items.`);
  assert.equal(stageItems('quick').length, config.storyIds.length, `${label}: Quick count must equal chapter count.`);
  assert.equal(stageItems('knowledge').length, 8, `${label}: Knowledge count must be 8.`);
  assert.equal(stageItems('review').length, 8, `${label}: Review count must be 8.`);
  assert.equal(stageItems('final').length, 10, `${label}: Final count must be 10.`);

  const learningPoints = allItems.map(item => item.learningPointId);
  assert.equal(new Set(learningPoints).size, learningPoints.length, `${label}: an assessed learning point is repeated.`);

  const taps = allItems.filter(item => item.exercise.en.type === 'tap-reveal');
  assert.deepEqual(taps.map(item => item.id).sort(), [...tapIds].sort(), `${label}: Tap-Reveal policy changed.`);
  taps.forEach(item => assert.deepEqual(item.eligibleStages, ['quick'], `${item.id}: Tap-Reveal must be Quick-only.`));

  const reviewTypes = stageItems('review').map(item => item.exercise.en.type);
  assert.equal(reviewTypes.filter(type => type === 'multiple-choice').length, 4, `${label}: Review must contain 4 multiple-choice items.`);
  assert.equal(reviewTypes.filter(type => type === 'true-false').length, 4, `${label}: Review must contain 4 true-false items.`);
  assert.equal(new Set(reviewTypes).size, 2, `${label}: Review may only use MC and True/False before quiz-game conversion.`);

  const finalTypes = new Set(stageItems('final').map(item => item.exercise.en.type));
  assert.deepEqual([...finalTypes].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${label}: Final must preserve all four scored interaction types.`);

  validateSourceLayer(rawEn, sourceEn, config.storyIds, `${label} EN`);
  validateSourceLayer(rawAr, sourceAr, config.storyIds, `${label} AR`);

  for (const chapter of blueprint.chapters) {
    const enRaw = page(rawEn, chapter.chapterId, `${label} EN raw`);
    const arRaw = page(rawAr, chapter.chapterId, `${label} AR raw`);
    assert.ok(chapter.objectives.length >= 2, `${label} Chapter ${chapter.chapterId}: at least two objectives required.`);
    assert.equal(chapter.evidencePoints.length, chapter.assessmentItems.length, `${label} Chapter ${chapter.chapterId}: every selected evidence point should be assessed exactly once.`);

    chapter.evidencePoints.forEach(point => {
      assert.ok(highlightPhraseOccurs(enRaw.content, point.evidence.en, 'en'), `${point.id}: English evidence is not in raw story prose.`);
      assert.ok(highlightPhraseOccurs(arRaw.content, point.evidence.ar, 'ar'), `${point.id}: Arabic evidence is not in raw story prose.`);
    });

    const canonicalTargets = targets[chapter.chapterId] ?? [];
    assert.equal(chapter.vocabularyTargets.length, canonicalTargets.length, `${label} Chapter ${chapter.chapterId}: Blueprint/canonical Word Note count mismatch.`);
    chapter.vocabularyTargets.forEach((target, index) => {
      const canonical = canonicalTargets[index];
      assert.ok(canonical, `${label} Chapter ${chapter.chapterId}: missing canonical Word Note ${index + 1}.`);
      assert.equal(normalizeHighlightText(target.en.word, 'en'), normalizeHighlightText(canonical.en.word, 'en'), `${label} Chapter ${chapter.chapterId}: English Word Note differs from canonical target.`);
      assert.equal(normalizeHighlightText(target.ar.word, 'ar'), normalizeHighlightText(canonical.ar.word, 'ar'), `${label} Chapter ${chapter.chapterId}: Arabic Word Note differs from canonical target.`);
      assert.equal(target.en.definition, canonical.en.definition, `${label} Chapter ${chapter.chapterId}: English Word Note definition differs from canonical target.`);
      assert.equal(target.ar.definition, canonical.ar.definition, `${label} Chapter ${chapter.chapterId}: Arabic Word Note definition differs from canonical target.`);
    });
  }

  validateLanguage(current, `${label} EN`, rawEn, bookEn.pages, 'en');
  validateLanguage(current, `${label} AR`, rawAr, bookAr.pages, 'ar');

  assert.equal(bookEn.teacherGuide.length, config.storyIds.length, `${label} EN Teacher Guide count mismatch.`);
  assert.equal(bookAr.teacherGuide.length, config.storyIds.length, `${label} AR Teacher Guide count mismatch.`);
  assert.equal(bookEn.selfStudyGuide.length, config.storyIds.length, `${label} EN Self-Study Guide count mismatch.`);
  assert.equal(bookAr.selfStudyGuide.length, config.storyIds.length, `${label} AR Self-Study Guide count mismatch.`);

  bookEn.teacherGuide.forEach((guide, index) => {
    assert.equal(guide.timing, '55 minutes', `${label} EN Teacher Guide ${index + 1}: B2 timing changed.`);
    assert.equal(guide.extraResources, undefined, `${label} EN Teacher Guide ${index + 1}: unsupported external resource remains.`);
    assert.ok(/120[–-]150/.test(guide.lessonPlan), `${label} EN Teacher Guide ${index + 1}: B2 analytical writing target missing.`);
  });
  bookAr.teacherGuide.forEach((guide, index) => {
    assert.equal(guide.timing, '55 دقيقة', `${label} AR Teacher Guide ${index + 1}: B2 timing changed.`);
    assert.equal(guide.extraResources, undefined, `${label} AR Teacher Guide ${index + 1}: unsupported external resource remains.`);
    assert.ok(/120[–-]150/.test(guide.lessonPlan), `${label} AR Teacher Guide ${index + 1}: B2 analytical writing target missing.`);
  });
  bookEn.selfStudyGuide.forEach((guide, index) => assert.equal(guide.timing, '40 minutes', `${label} EN Self-Study ${index + 1}: B2 timing changed.`));
  bookAr.selfStudyGuide.forEach((guide, index) => assert.equal(guide.timing, '40 دقيقة', `${label} AR Self-Study ${index + 1}: B2 timing changed.`));

  config.storyIds.forEach(id => {
    const enQuick = page(bookEn.pages, id, `${label} EN`).exercises?.[0];
    const arQuick = page(bookAr.pages, id, `${label} AR`).exercises?.[0];
    assert.equal(enQuick?.type, arQuick?.type, `${label} Chapter ${id}: EN/AR Quick type parity changed.`);
  });

  if (storyId === 'adam') {
    const treeQuick = blueprint.chapters.find(chapter => chapter.chapterId === 8)?.assessmentItems.find(item => item.id === 'adam-b2-c8-quick');
    assert.ok(treeQuick, `${label}: Chapter 8 source-limit Quick missing.`);
    assert.ok(/not describe|not tell|not identify/i.test(`${treeQuick.exercise.en.question} ${treeQuick.exercise.en.explanation}`), `${label}: Chapter 8 English tree source-limit safeguard missing.`);
    assert.ok(/لا (يصف|يخبر|يحدد)/.test(`${treeQuick.exercise.ar.question} ${treeQuick.exercise.ar.explanation}`), `${label}: Chapter 8 Arabic tree source-limit safeguard missing.`);

    const sourceItem = blueprint.chapters.find(chapter => chapter.chapterId === 12)?.assessmentItems.find(item => item.id === 'adam-b2-c12-knowledge');
    assert.ok(sourceItem, `${label}: Chapter 12 source-discipline Knowledge item missing.`);
    assert.ok(/names|details|wisdom|Qur/i.test(`${sourceItem.exercise.en.question} ${sourceItem.exercise.en.explanation}`), `${label}: Chapter 12 English source-discipline safeguard missing.`);
    assert.ok(/الأسماء|التفاصيل|الحكمة|القرآن/.test(`${sourceItem.exercise.ar.question} ${sourceItem.exercise.ar.explanation}`), `${label}: Chapter 12 Arabic source-discipline safeguard missing.`);
  }

  if (storyId === 'moses') {
    const chronology = blueprint.chapters.find(chapter => chapter.chapterId === 2)?.assessmentItems.find(item => item.eligibleStages.includes('review'));
    assert.ok(chronology, `${label}: Chapter 2 historical-source Review item missing.`);
    assert.ok(/probably|historical caution|unknown|exact date/i.test(`${chronology.exercise.en.question} ${chronology.exercise.en.explanation}`), `${label}: Chapter 2 English historical qualification missing.`);
    assert.ok(/الأرجح|الحذر|غير معروف|التاريخ الدقيق/.test(`${chronology.exercise.ar.question} ${chronology.exercise.ar.explanation}`), `${label}: Chapter 2 Arabic historical qualification missing.`);

    const savedChapter = page(sourceEn, 4, `${label} EN source`);
    assert.ok(!(savedChapter.vocabulary ?? []).some(entry => normalizeHighlightText(entry.word, 'en') === 'survive'), `${label}: stale Chapter 4 survive Word Note remains.`);
    assert.ok(highlightPhraseOccurs(savedChapter.content, 'he was miraculously saved', 'en'), `${label}: Chapter 4 canonical saved wording is missing.`);
  }

  if (storyId === 'abraham') {
    const historicalCaution = blueprint.chapters.find(chapter => chapter.chapterId === 4)?.assessmentItems.find(item => item.eligibleStages.includes('quick'));
    assert.ok(historicalCaution, `${label}: Chapter 4 historical-source Quick missing.`);
    assert.ok(/completely certain|different ideas|some sources|is believed/i.test(`${historicalCaution.exercise.en.question} ${historicalCaution.exercise.en.explanation}`), `${label}: Chapter 4 English historical qualification missing.`);
    assert.ok(/يقيني|آراء مختلفة|بعض المصادر|يُعتقد|يعتقد/.test(`${historicalCaution.exercise.ar.question} ${historicalCaution.exercise.ar.explanation}`), `${label}: Chapter 4 Arabic historical qualification missing.`);

    assert.equal(page(bookEn.pages, 36, `${label} EN`).type, 'quiz', `${label}: EN raw References surface was not reused as Knowledge Check.`);
    assert.equal(page(bookAr.pages, 36, `${label} AR`).type, 'quiz', `${label}: AR raw References surface was not reused as Knowledge Check.`);
    assert.equal(page(rawEn, 36, `${label} EN raw`).type, 'story', `${label}: EN raw References page was edited.`);
    assert.equal(page(rawAr, 36, `${label} AR raw`).type, 'story', `${label}: AR raw References page was edited.`);
  }
}

console.log('B2 Blueprint Contract: PASS');
console.log(`- ${cases.length} migrated B2 books validated in both languages`);
console.log('- one Quick per chapter; Knowledge 8; Review 8 (4 MC + 4 TF); Final 10 (4 scored interaction types)');
console.log('- raw story prose and protected story fields unchanged');
console.log('- Tap-Reveal restricted to two Quick Challenges per migrated book');
console.log('- B2 Teacher/Self-Study guides enforce evidence vs interpretation and 120–150 word analytical writing');
console.log('- book-specific source-limit, historical-qualification, and approved page-surface safeguards are preserved');
