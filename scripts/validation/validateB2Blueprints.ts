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

import { meccaB2Pages } from '../../src/data/mecca/b2/en/pages';
import { meccaB2PagesAr } from '../../src/data/mecca/b2/ar/pages';
import { meccaB2BookDataEn, meccaB2BookDataAr } from '../../src/data/mecca/b2';
import { meccaB2LearningBlueprint } from '../../src/data/mecca/b2/learningBlueprint';
import { meccaB2BlueprintConfig } from '../../src/data/mecca/b2/config';
import { meccaB2HighlightTargets, meccaB2SourcePagesEn, meccaB2SourcePagesAr } from '../../src/data/mecca/b2/source';

import { yunusB2Pages } from '../../src/data/yunusEmre/b2/en/pages';
import { pages as yunusB2PagesAr } from '../../src/data/yunusEmre/b2/ar/pages';
import { yunusEmreB2BookDataEn, yunusEmreB2BookDataAr } from '../../src/data/yunusEmre/b2';
import { yunusEmreB2LearningBlueprint } from '../../src/data/yunusEmre/b2/learningBlueprint';
import { yunusEmreB2BlueprintConfig } from '../../src/data/yunusEmre/b2/config';
import { yunusEmreB2HighlightTargets, yunusEmreB2SourcePagesEn, yunusEmreB2SourcePagesAr } from '../../src/data/yunusEmre/b2/source';

const protectedFields = ['id', 'type', 'title', 'subtitle', 'content', 'image', 'audioUrl', 'syncPoints', 'timedChunks'] as const;
const scoredTypes = new Set(['multiple-choice', 'true-false', 'matching', 'fill-blanks']);

type Config = {
  storyIds: readonly number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  glossaryPageIds: readonly number[];
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
    label: 'Adam B2', storyId: 'adam', blueprint: adamB2LearningBlueprint, config: adamB2BlueprintConfig,
    rawEn: adamB2Pages, rawAr: adamB2PagesAr, sourceEn: adamB2SourcePagesEn, sourceAr: adamB2SourcePagesAr,
    bookEn: adamB2BookDataEn, bookAr: adamB2BookDataAr, targets: adamB2HighlightTargets,
    tapIds: ['adam-b2-c3-quick', 'adam-b2-c8-quick'],
  },
  {
    label: 'Moses B2', storyId: 'moses', blueprint: mosesB2LearningBlueprint, config: mosesB2BlueprintConfig,
    rawEn: mosesB2Pages, rawAr: mosesB2PagesAr, sourceEn: mosesB2SourcePagesEn, sourceAr: mosesB2SourcePagesAr,
    bookEn: mosesB2BookDataEn, bookAr: mosesB2BookDataAr, targets: mosesB2HighlightTargets,
    tapIds: ['moses-b2-c3-quick', 'moses-b2-c8-quick'],
  },
  {
    label: 'Abraham B2', storyId: 'abraham', blueprint: abrahamB2LearningBlueprint, config: abrahamB2BlueprintConfig,
    rawEn: abrahamB2Pages, rawAr: abrahamB2PagesAr, sourceEn: abrahamB2SourcePagesEn, sourceAr: abrahamB2SourcePagesAr,
    bookEn: abrahamB2BookDataEn, bookAr: abrahamB2BookDataAr, targets: abrahamB2HighlightTargets,
    tapIds: ['abraham-b2-c8-quick', 'abraham-b2-c27-quick'], runtimeTypeOverrides: { 36: 'quiz' },
  },
  {
    label: 'Mecca B2', storyId: 'mecca', blueprint: meccaB2LearningBlueprint, config: meccaB2BlueprintConfig,
    rawEn: meccaB2Pages, rawAr: meccaB2PagesAr, sourceEn: meccaB2SourcePagesEn, sourceAr: meccaB2SourcePagesAr,
    bookEn: meccaB2BookDataEn, bookAr: meccaB2BookDataAr, targets: meccaB2HighlightTargets,
    tapIds: ['mecca-b2-c8-quick', 'mecca-b2-c15-quick'],
  },
  {
    label: 'Yunus Emre B2', storyId: 'yunusEmre', blueprint: yunusEmreB2LearningBlueprint, config: yunusEmreB2BlueprintConfig,
    rawEn: yunusB2Pages, rawAr: yunusB2PagesAr, sourceEn: yunusEmreB2SourcePagesEn, sourceAr: yunusEmreB2SourcePagesAr,
    bookEn: yunusEmreB2BookDataEn, bookAr: yunusEmreB2BookDataAr, targets: yunusEmreB2HighlightTargets,
    tapIds: ['yunus-b2-c3-quick', 'yunus-b2-c8-quick'],
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
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: MC needs at least three options.`);
    assert.equal(new Set(exercise.options ?? []).size, exercise.options?.length ?? 0, `${label}: MC options must be distinct.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: MC answer must be numeric.`);
  }
  if (exercise.type === 'true-false') assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: TF answer must be boolean.`);
  if (exercise.type === 'matching') assert.ok((exercise.matchingPairs?.length ?? 0) >= 2, `${label}: matching needs at least two pairs.`);
  if (exercise.type === 'fill-blanks') assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill marker missing.`);
  if (exercise.type === 'tap-reveal') assert.ok((exercise.tapRevealItems?.length ?? 0) >= 1, `${label}: tap content missing.`);
};

const validateSourceLayer = (rawPages: PageData[], sourcePages: PageData[], storyIds: readonly number[], label: string) => {
  assert.equal(sourcePages.length, rawPages.length, `${label}: source page count changed.`);
  assert.deepEqual(sourcePages.map(item => [item.id, item.type]), rawPages.map(item => [item.id, item.type]), `${label}: source page structure changed.`);
  for (const id of storyIds) {
    const raw = page(rawPages, id, `${label} raw`);
    const source = page(sourcePages, id, `${label} source`);
    for (const field of protectedFields) assert.deepEqual(source[field], raw[field], `${label} Chapter ${id}: protected source field ${field} changed.`);
    const rawHotspots = new Map((raw.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    for (const hotspot of source.hotspots ?? []) {
      const original = rawHotspots.get(hotspot.id);
      assert.ok(original, `${label} Chapter ${id}: source introduced hotspot ${hotspot.id}.`);
      assert.equal(hotspot.x, original.x, `${label} Chapter ${id}: hotspot x changed.`);
      assert.equal(hotspot.y, original.y, `${label} Chapter ${id}: hotspot y changed.`);
    }
  }
};

const validateLanguage = (current: BlueprintCase, label: string, rawPages: PageData[], outputPages: PageData[], language: 'en' | 'ar') => {
  const { blueprint, config } = current;
  assert.equal(outputPages.length, rawPages.length, `${label}: page count changed.`);
  const expectedStructure = rawPages.map(item => [item.id, current.runtimeTypeOverrides?.[item.id] ?? item.type]);
  assert.deepEqual(outputPages.map(item => [item.id, item.type]), expectedStructure, `${label}: page structure changed outside approved runtime overrides.`);

  for (const id of config.storyIds) {
    const raw = page(rawPages, id, `${label} raw`);
    const output = page(outputPages, id, label);
    for (const field of protectedFields) assert.deepEqual(output[field], raw[field], `${label} Chapter ${id}: protected field ${field} changed.`);
    assert.equal(output.animatedWords, undefined, `${label} Chapter ${id}: animatedWords remain.`);
    assert.equal(output.exercises?.length, 1, `${label} Chapter ${id}: exactly one Quick required.`);
    const quick = output.exercises?.[0];
    assert.ok(quick?.id.startsWith(`blueprint-${blueprint.id}-quick-`), `${label} Chapter ${id}: Quick is not Blueprint-owned.`);
    validateExercise(quick, `${label} Chapter ${id} Quick`);

    const blueprintChapter = blueprint.chapters.find(chapter => chapter.chapterId === id)!;
    assert.deepEqual(output.vocabulary ?? [], blueprintChapter.vocabularyTargets.map(target => ({ ...target[language] })), `${label} Chapter ${id}: Word Notes are not Blueprint-owned.`);
    for (const entry of output.vocabulary ?? []) {
      assert.ok(highlightPhraseOccurs(output.content, entry.word, language), `${label} Chapter ${id}: Word Note ${entry.word} is not in prose.`);
    }

    const rawHotspots = new Map((raw.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    for (const hotspot of output.hotspots ?? []) {
      const original = rawHotspots.get(hotspot.id);
      assert.ok(original, `${label} Chapter ${id}: runtime introduced hotspot ${hotspot.id}.`);
      assert.equal(hotspot.x, original.x, `${label} Chapter ${id}: runtime hotspot x changed.`);
      assert.equal(hotspot.y, original.y, `${label} Chapter ${id}: runtime hotspot y changed.`);
    }
  }

  const knowledge = page(outputPages, config.knowledgeCheckPageId, label);
  assert.equal(knowledge.type, 'quiz', `${label}: Knowledge page must be quiz.`);
  assert.equal(knowledge.exercises?.length, 8, `${label}: Knowledge must contain 8 activities.`);
  (knowledge.exercises ?? []).forEach((exercise, index) => validateExercise(exercise, `${label} Knowledge ${index + 1}`));

  if (config.vocabularyPageId) {
    assert.equal(page(outputPages, config.vocabularyPageId, label).vocabularyPairs?.length, 10, `${label}: Vocabulary Challenge must contain 10 pairs.`);
  }

  const review = page(outputPages, config.reviewPageId, label);
  assert.equal(review.exercises?.length, 1, `${label}: Review must contain one quiz-game.`);
  assert.equal(review.exercises?.[0]?.type, 'quiz-game', `${label}: Review must use quiz-game.`);
  assert.equal(review.exercises?.[0]?.quizQuestions?.length, 8, `${label}: Review must contain 8 authored questions.`);

  const final = page(outputPages, config.finalChallengePageId, label);
  assert.equal(final.exercises?.length, 10, `${label}: Final must contain 10 activities.`);
  assert.deepEqual([...new Set((final.exercises ?? []).map(exercise => exercise.type))].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${label}: Final interaction variety changed.`);
  (final.exercises ?? []).forEach((exercise, index) => {
    assert.ok(scoredTypes.has(exercise.type), `${label} Final ${index + 1}: unsupported type ${exercise.type}.`);
    validateExercise(exercise, `${label} Final ${index + 1}`);
  });

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const groups = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
  config.glossaryPageIds.forEach((id, index) => {
    const expected = groups[index].flatMap(chapterId => page(outputPages, chapterId, label).vocabulary ?? []);
    assert.deepEqual(page(outputPages, id, label).vocabulary ?? [], expected, `${label}: glossary ${index + 1} is not derived exactly from final Word Notes.`);
  });
};

for (const current of cases) {
  const { label, storyId, blueprint, config, rawEn, rawAr, sourceEn, sourceAr, bookEn, bookAr, targets, tapIds } = current;
  const allItems = blueprint.chapters.flatMap(chapter => chapter.assessmentItems);
  const stageItems = (stage: 'quick' | 'knowledge' | 'review' | 'final') => allItems.filter(item => item.eligibleStages.includes(stage));

  assert.equal(blueprint.level, 'B2', `${label}: Blueprint level changed.`);
  assert.equal(blueprint.storyId, storyId, `${label}: Blueprint story id changed.`);
  assert.equal(blueprint.chapters.length, config.storyIds.length, `${label}: chapter count mismatch.`);
  assert.equal(allItems.length, config.storyIds.length + 26, `${label}: assessment total must equal one Quick per chapter plus 26 whole-book items.`);
  assert.equal(stageItems('quick').length, config.storyIds.length, `${label}: Quick count mismatch.`);
  assert.equal(stageItems('knowledge').length, 8, `${label}: Knowledge count mismatch.`);
  assert.equal(stageItems('review').length, 8, `${label}: Review count mismatch.`);
  assert.equal(stageItems('final').length, 10, `${label}: Final count mismatch.`);
  assert.equal(new Set(allItems.map(item => item.learningPointId)).size, allItems.length, `${label}: assessed learning point repeated.`);

  const taps = allItems.filter(item => item.exercise.en.type === 'tap-reveal');
  assert.deepEqual(taps.map(item => item.id).sort(), [...tapIds].sort(), `${label}: Tap-Reveal policy changed.`);
  taps.forEach(item => assert.deepEqual(item.eligibleStages, ['quick'], `${item.id}: Tap-Reveal must be Quick-only.`));

  const reviewTypes = stageItems('review').map(item => item.exercise.en.type);
  assert.equal(reviewTypes.filter(type => type === 'multiple-choice').length, 4, `${label}: Review must contain 4 MC.`);
  assert.equal(reviewTypes.filter(type => type === 'true-false').length, 4, `${label}: Review must contain 4 TF.`);
  assert.equal(new Set(reviewTypes).size, 2, `${label}: Review may only use MC and TF before quiz-game conversion.`);
  assert.deepEqual([...new Set(stageItems('final').map(item => item.exercise.en.type))].sort(), ['fill-blanks', 'matching', 'multiple-choice', 'true-false'], `${label}: Final must preserve all four scored types.`);

  validateSourceLayer(rawEn, sourceEn, config.storyIds, `${label} EN`);
  validateSourceLayer(rawAr, sourceAr, config.storyIds, `${label} AR`);

  for (const chapter of blueprint.chapters) {
    const enRaw = page(rawEn, chapter.chapterId, `${label} EN raw`);
    const arRaw = page(rawAr, chapter.chapterId, `${label} AR raw`);
    assert.ok(chapter.objectives.length >= 2, `${label} Chapter ${chapter.chapterId}: objectives missing.`);
    assert.equal(chapter.evidencePoints.length, chapter.assessmentItems.length, `${label} Chapter ${chapter.chapterId}: evidence/assessment mismatch.`);
    chapter.evidencePoints.forEach(point => {
      assert.ok(highlightPhraseOccurs(enRaw.content, point.evidence.en, 'en'), `${point.id}: EN evidence not in raw prose.`);
      assert.ok(highlightPhraseOccurs(arRaw.content, point.evidence.ar, 'ar'), `${point.id}: AR evidence not in raw prose.`);
    });
    const canonicalTargets = targets[chapter.chapterId] ?? [];
    assert.equal(chapter.vocabularyTargets.length, canonicalTargets.length, `${label} Chapter ${chapter.chapterId}: canonical Word Note count mismatch.`);
    chapter.vocabularyTargets.forEach((target, index) => {
      const canonical = canonicalTargets[index];
      assert.ok(canonical, `${label} Chapter ${chapter.chapterId}: missing canonical Word Note ${index + 1}.`);
      assert.equal(normalizeHighlightText(target.en.word, 'en'), normalizeHighlightText(canonical.en.word, 'en'), `${label} Chapter ${chapter.chapterId}: EN Word Note drift.`);
      assert.equal(normalizeHighlightText(target.ar.word, 'ar'), normalizeHighlightText(canonical.ar.word, 'ar'), `${label} Chapter ${chapter.chapterId}: AR Word Note drift.`);
      assert.equal(target.en.definition, canonical.en.definition, `${label} Chapter ${chapter.chapterId}: EN definition drift.`);
      assert.equal(target.ar.definition, canonical.ar.definition, `${label} Chapter ${chapter.chapterId}: AR definition drift.`);
    });
  }

  validateLanguage(current, `${label} EN`, rawEn, bookEn.pages, 'en');
  validateLanguage(current, `${label} AR`, rawAr, bookAr.pages, 'ar');

  assert.equal(bookEn.teacherGuide.length, config.storyIds.length, `${label} EN Teacher Guide count mismatch.`);
  assert.equal(bookAr.teacherGuide.length, config.storyIds.length, `${label} AR Teacher Guide count mismatch.`);
  assert.equal(bookEn.selfStudyGuide.length, config.storyIds.length, `${label} EN Self-Study count mismatch.`);
  assert.equal(bookAr.selfStudyGuide.length, config.storyIds.length, `${label} AR Self-Study count mismatch.`);
  bookEn.teacherGuide.forEach((guide, index) => {
    assert.equal(guide.timing, '55 minutes', `${label} EN Teacher ${index + 1}: timing changed.`);
    assert.equal(guide.extraResources, undefined, `${label} EN Teacher ${index + 1}: unsupported external resource.`);
    assert.ok(/120[–-]150/.test(guide.lessonPlan), `${label} EN Teacher ${index + 1}: writing target missing.`);
  });
  bookAr.teacherGuide.forEach((guide, index) => {
    assert.equal(guide.timing, '55 دقيقة', `${label} AR Teacher ${index + 1}: timing changed.`);
    assert.equal(guide.extraResources, undefined, `${label} AR Teacher ${index + 1}: unsupported external resource.`);
    assert.ok(/120[–-]150/.test(guide.lessonPlan), `${label} AR Teacher ${index + 1}: writing target missing.`);
  });
  bookEn.selfStudyGuide.forEach((guide, index) => assert.equal(guide.timing, '40 minutes', `${label} EN Self ${index + 1}: timing changed.`));
  bookAr.selfStudyGuide.forEach((guide, index) => assert.equal(guide.timing, '40 دقيقة', `${label} AR Self ${index + 1}: timing changed.`));

  config.storyIds.forEach(id => {
    assert.equal(page(bookEn.pages, id, `${label} EN`).exercises?.[0]?.type, page(bookAr.pages, id, `${label} AR`).exercises?.[0]?.type, `${label} Chapter ${id}: EN/AR Quick parity changed.`);
  });

  if (storyId === 'adam') {
    const treeQuick = blueprint.chapters.find(chapter => chapter.chapterId === 8)?.assessmentItems.find(item => item.id === 'adam-b2-c8-quick');
    assert.ok(treeQuick, `${label}: Chapter 8 source-limit Quick missing.`);
    assert.ok(/not describe|not tell|not identify/i.test(`${treeQuick.exercise.en.question} ${treeQuick.exercise.en.explanation}`), `${label}: tree source-limit safeguard missing.`);
    const sourceItem = blueprint.chapters.find(chapter => chapter.chapterId === 12)?.assessmentItems.find(item => item.id === 'adam-b2-c12-knowledge');
    assert.ok(sourceItem, `${label}: Chapter 12 source-discipline item missing.`);
    assert.ok(/names|details|wisdom|Qur/i.test(`${sourceItem.exercise.en.question} ${sourceItem.exercise.en.explanation}`), `${label}: source-discipline safeguard missing.`);
  }

  if (storyId === 'moses') {
    const chronology = blueprint.chapters.find(chapter => chapter.chapterId === 2)?.assessmentItems.find(item => item.eligibleStages.includes('review'));
    assert.ok(chronology, `${label}: historical-source Review missing.`);
    assert.ok(/probably|historical caution|unknown|exact date/i.test(`${chronology.exercise.en.question} ${chronology.exercise.en.explanation}`), `${label}: historical qualification missing.`);
    const savedChapter = page(sourceEn, 4, `${label} EN source`);
    assert.ok(!(savedChapter.vocabulary ?? []).some(entry => normalizeHighlightText(entry.word, 'en') === 'survive'), `${label}: stale survive Word Note remains.`);
    assert.ok(highlightPhraseOccurs(savedChapter.content, 'he was miraculously saved', 'en'), `${label}: canonical saved wording missing.`);
  }

  if (storyId === 'abraham') {
    const historicalCaution = blueprint.chapters.find(chapter => chapter.chapterId === 4)?.assessmentItems.find(item => item.eligibleStages.includes('quick'));
    assert.ok(historicalCaution, `${label}: historical-source Quick missing.`);
    assert.ok(/completely certain|different ideas|some sources|is believed/i.test(`${historicalCaution.exercise.en.question} ${historicalCaution.exercise.en.explanation}`), `${label}: historical qualification missing.`);
    assert.equal(page(bookEn.pages, 36, `${label} EN`).type, 'quiz', `${label}: EN approved Knowledge surface missing.`);
    assert.equal(page(bookAr.pages, 36, `${label} AR`).type, 'quiz', `${label}: AR approved Knowledge surface missing.`);
    assert.equal(page(rawEn, 36, `${label} EN raw`).type, 'story', `${label}: EN raw References surface was edited.`);
    assert.equal(page(rawAr, 36, `${label} AR raw`).type, 'story', `${label}: AR raw References surface was edited.`);
  }

  if (storyId === 'mecca') {
    const womenQuick = blueprint.chapters.find(chapter => chapter.chapterId === 10)?.assessmentItems.find(item => item.id === 'mecca-b2-c10-quick');
    assert.ok(womenQuick, `${label}: Chapter 10 nuance Quick missing.`);
    assert.ok(/social status|tribe|not always the same/i.test(`${womenQuick.exercise.en.question} ${womenQuick.exercise.en.explanation}`), `${label}: women/social-status nuance missing.`);
    const closingReview = blueprint.chapters.find(chapter => chapter.chapterId === 17)?.assessmentItems.find(item => item.eligibleStages.includes('review'));
    assert.ok(closingReview, `${label}: Chapter 17 framing Review missing.`);
    assert.ok(/closing chapter|term|wider moral/i.test(`${closingReview.exercise.en.question} ${closingReview.exercise.en.explanation}`), `${label}: closing source framing missing.`);
  }

  if (storyId === 'yunusEmre') {
    for (const [rawPages, sourcePages, outputPages, language] of [[rawEn, sourceEn, bookEn.pages, 'en'], [rawAr, sourceAr, bookAr.pages, 'ar']] as const) {
      const rawRefs = page(rawPages, 14, `${label} ${language} raw refs`);
      const sourceRefs = page(sourcePages, 14, `${label} ${language} source refs`);
      const outputRefs = page(outputPages, 14, `${label} ${language} refs`);
      for (const field of protectedFields) {
        assert.deepEqual(sourceRefs[field], rawRefs[field], `${label} ${language}: source References ${field} changed.`);
        assert.deepEqual(outputRefs[field], rawRefs[field], `${label} ${language}: runtime References ${field} changed.`);
      }
      assert.equal(sourceRefs.exercises, undefined, `${label} ${language}: References source must not be instructional.`);
      assert.equal(outputRefs.exercises, undefined, `${label} ${language}: References runtime must not be instructional.`);
    }
    for (const chapterId of [8, 9, 10, 11, 12, 13]) {
      const chapter = blueprint.chapters.find(candidate => candidate.chapterId === chapterId)!;
      chapter.assessmentItems.forEach(item => {
        assert.ok(/according to|chapter|yunus emre|yunus’s|yunus'|in yunus/i.test(`${item.exercise.en.question ?? ''} ${item.exercise.en.explanation ?? ''}`), `${label} Chapter ${chapterId}: EN attribution missing.`);
        assert.ok(/وفقًا|وفقاً|الفصل|يونس إمره|فكر|فلسفة/.test(`${item.exercise.ar.question ?? ''} ${item.exercise.ar.explanation ?? ''}`), `${label} Chapter ${chapterId}: AR attribution missing.`);
      });
    }
    const ch5 = blueprint.chapters.find(chapter => chapter.chapterId === 5)!;
    const ch5En = ch5.assessmentItems.map(item => `${item.exercise.en.question ?? ''} ${item.exercise.en.explanation ?? ''}`).join(' ');
    const ch5Ar = ch5.assessmentItems.map(item => `${item.exercise.ar.question ?? ''} ${item.exercise.ar.explanation ?? ''}`).join(' ');
    assert.ok(!/slaughtered|swords|women and children.*captive|blood.*ruins/i.test(ch5En), `${label}: graphic violence amplified in EN derived material.`);
    assert.ok(!/ذبح|السيوف|النساء والأطفال.*أسر|الدماء/.test(ch5Ar), `${label}: graphic violence amplified in AR derived material.`);
    const ch13Targets = targets[13] ?? [];
    assert.ok(!ch13Targets.some(target => /risalet|nush|divan/i.test(normalizeHighlightText(target.en.word, 'en'))), `${label}: non-prose work title leaked into Chapter 13 Word Notes.`);
    assert.ok(bookEn.studentGuideText?.includes('13 canonical narrative chapters'), `${label}: EN learner chapter count missing.`);
    assert.ok(bookEn.studentGuideText?.includes('Page 14'), `${label}: EN References framing missing.`);
    assert.ok(bookAr.studentGuideText?.includes('الفصول السردية الثلاثة عشر'), `${label}: AR learner chapter count missing.`);
    assert.ok(bookAr.studentGuideText?.includes('الصفحة 14'), `${label}: AR References framing missing.`);
  }
}

console.log('B2 Blueprint Contract: PASS');
console.log(`- ${cases.length} migrated B2 books validated in both languages`);
console.log('- one Quick per chapter; Knowledge 8; Review 8 (4 MC + 4 TF); Final 10 (4 scored interaction types)');
console.log('- Vocabulary Challenge = 10 where the canonical book has a vocabulary page');
console.log('- raw story prose and protected story fields unchanged');
console.log('- B2 Teacher/Self-Study guides enforce evidence vs interpretation and 120–150 word analytical writing');
console.log('- all five B2 books use Blueprint-only runtime validation; book-specific source and attribution safeguards are preserved');
