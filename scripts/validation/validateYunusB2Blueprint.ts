import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';
import { yunusB2Pages } from '../../src/data/yunusEmre/b2/en/pages';
import { pages as yunusEmreB2PagesAr } from '../../src/data/yunusEmre/b2/ar/pages';
import { yunusEmreB2BookDataEn, yunusEmreB2BookDataAr } from '../../src/data/yunusEmre/b2';
import { yunusEmreB2LearningBlueprint } from '../../src/data/yunusEmre/b2/learningBlueprint';
import { yunusEmreB2BlueprintConfig } from '../../src/data/yunusEmre/b2/config';
import { yunusEmreB2HighlightTargets, yunusEmreB2SourcePagesAr, yunusEmreB2SourcePagesEn } from '../../src/data/yunusEmre/b2/source';

const protectedFields = ['id','type','title','subtitle','content','image','audioUrl','syncPoints','timedChunks'] as const;
const scoredTypes = new Set(['multiple-choice','true-false','matching','fill-blanks']);
const page = (pages: PageData[], id: number, label: string): PageData => {
  const found = pages.find(candidate => candidate.id === id);
  assert.ok(found, `${label}: page ${id} missing.`);
  return found;
};
const validateExercise = (exercise: Exercise, label: string) => {
  assert.ok(exercise.question?.trim(), `${label}: question missing.`);
  assert.ok(exercise.explanation?.trim(), `${label}: explanation missing.`);
  assert.ok(exercise.feedback?.correct?.trim(), `${label}: correct feedback missing.`);
  assert.ok(exercise.feedback?.incorrect?.trim(), `${label}: incorrect feedback missing.`);
  if (exercise.type === 'multiple-choice') {
    assert.ok((exercise.options?.length ?? 0) >= 3, `${label}: MC needs three options.`);
    assert.equal(new Set(exercise.options ?? []).size, exercise.options?.length ?? 0, `${label}: duplicate options.`);
    assert.equal(typeof exercise.correctAnswer, 'number', `${label}: MC answer must be numeric.`);
  }
  if (exercise.type === 'true-false') assert.equal(typeof exercise.correctAnswer, 'boolean', `${label}: TF answer must be boolean.`);
  if (exercise.type === 'matching') assert.ok((exercise.matchingPairs?.length ?? 0) >= 2, `${label}: matching needs two pairs.`);
  if (exercise.type === 'fill-blanks') assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill marker missing.`);
  if (exercise.type === 'tap-reveal') assert.ok((exercise.tapRevealItems?.length ?? 0) >= 1, `${label}: tap content missing.`);
};
const validateLayer = (raw: PageData[], current: PageData[], language: 'en' | 'ar', label: string, runtime: boolean) => {
  assert.equal(current.length, raw.length, `${label}: page count changed.`);
  assert.deepEqual(current.map(item => [item.id,item.type]), raw.map(item => [item.id,item.type]), `${label}: page structure changed.`);
  for (const id of yunusEmreB2BlueprintConfig.storyIds) {
    const before = page(raw,id,`${label} raw`);
    const after = page(current,id,label);
    for (const field of protectedFields) assert.deepEqual(after[field], before[field], `${label} Ch${id}: ${field} changed.`);
    const rawHotspots = new Map((before.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    for (const hotspot of after.hotspots ?? []) {
      const original = rawHotspots.get(hotspot.id);
      assert.ok(original, `${label} Ch${id}: new hotspot ${hotspot.id}.`);
      assert.equal(hotspot.x, original.x, `${label} Ch${id}: hotspot x changed.`);
      assert.equal(hotspot.y, original.y, `${label} Ch${id}: hotspot y changed.`);
    }
    if (!runtime) continue;
    assert.equal(after.animatedWords, undefined, `${label} Ch${id}: animatedWords remain.`);
    assert.equal(after.exercises?.length, 1, `${label} Ch${id}: one Quick required.`);
    validateExercise(after.exercises![0], `${label} Ch${id} Quick`);
    const chapter = yunusEmreB2LearningBlueprint.chapters.find(candidate => candidate.chapterId === id)!;
    assert.deepEqual(after.vocabulary ?? [], chapter.vocabularyTargets.map(target => ({...target[language]})), `${label} Ch${id}: Word Notes not Blueprint-owned.`);
    for (const entry of after.vocabulary ?? []) assert.ok(highlightPhraseOccurs(after.content, entry.word, language), `${label} Ch${id}: Word Note not in prose: ${entry.word}`);
  }
  const rawRefs = page(raw,14,`${label} raw refs`);
  const refs = page(current,14,`${label} refs`);
  for (const field of protectedFields) assert.deepEqual(refs[field], rawRefs[field], `${label}: References ${field} changed.`);
  assert.equal(refs.exercises, undefined, `${label}: References page must not be a learning chapter.`);
  if (!runtime) return;
  assert.equal(page(current,15,label).exercises?.length,8,`${label}: Knowledge must be 8.`);
  assert.equal(page(current,16,label).vocabularyPairs?.length,10,`${label}: Vocabulary must be 10.`);
  const review = page(current,19,label);
  assert.equal(review.exercises?.length,1,`${label}: Review must be one quiz-game.`);
  assert.equal(review.exercises?.[0]?.type,'quiz-game',`${label}: Review must be quiz-game.`);
  assert.equal(review.exercises?.[0]?.quizQuestions?.length,8,`${label}: Review must be 8.`);
  const final = page(current,20,label);
  assert.equal(final.exercises?.length,10,`${label}: Final must be 10.`);
  assert.deepEqual([...new Set((final.exercises ?? []).map(item => item.type))].sort(), ['fill-blanks','matching','multiple-choice','true-false'], `${label}: Final type mix changed.`);
  for (const exercise of final.exercises ?? []) { assert.ok(scoredTypes.has(exercise.type), `${label}: unsupported Final type.`); validateExercise(exercise, `${label} Final`); }
  const midpoint = Math.ceil(yunusEmreB2BlueprintConfig.storyIds.length / 2);
  const groups = [yunusEmreB2BlueprintConfig.storyIds.slice(0,midpoint), yunusEmreB2BlueprintConfig.storyIds.slice(midpoint)];
  yunusEmreB2BlueprintConfig.glossaryPageIds.forEach((id,index) => {
    const expected = groups[index].flatMap(chapterId => page(current,chapterId,label).vocabulary ?? []);
    assert.deepEqual(page(current,id,label).vocabulary ?? [], expected, `${label}: glossary ${index + 1} drift.`);
  });
};

assert.equal(yunusEmreB2LearningBlueprint.id,'yunus-emre-b2');
assert.equal(yunusEmreB2LearningBlueprint.storyId,'yunusEmre');
assert.equal(yunusEmreB2LearningBlueprint.level,'B2');
assert.equal(yunusEmreB2LearningBlueprint.chapters.length,13);
const allItems = yunusEmreB2LearningBlueprint.chapters.flatMap(chapter => chapter.assessmentItems);
const stage = (value: 'quick'|'knowledge'|'review'|'final') => allItems.filter(item => item.eligibleStages.includes(value));
assert.equal(allItems.length,39,'Yunus Emre B2: expected 39 unique items.');
assert.equal(stage('quick').length,13);
assert.equal(stage('knowledge').length,8);
assert.equal(stage('review').length,8);
assert.equal(stage('final').length,10);
assert.equal(new Set(allItems.map(item => item.learningPointId)).size,39,'Yunus Emre B2: repeated learning point.');
const taps = allItems.filter(item => item.exercise.en.type === 'tap-reveal');
assert.deepEqual(taps.map(item => item.id).sort(), ['yunus-b2-c3-quick','yunus-b2-c8-quick'].sort());
taps.forEach(item => assert.deepEqual(item.eligibleStages,['quick'],`${item.id}: Tap must be Quick-only.`));
const reviewTypes = stage('review').map(item => item.exercise.en.type);
assert.equal(reviewTypes.filter(type => type === 'multiple-choice').length,4,'Review needs 4 MC.');
assert.equal(reviewTypes.filter(type => type === 'true-false').length,4,'Review needs 4 TF.');
assert.deepEqual([...new Set(stage('final').map(item => item.exercise.en.type))].sort(), ['fill-blanks','matching','multiple-choice','true-false']);

validateLayer(yunusB2Pages,yunusEmreB2SourcePagesEn,'en','Yunus B2 EN source',false);
validateLayer(yunusEmreB2PagesAr,yunusEmreB2SourcePagesAr,'ar','Yunus B2 AR source',false);
for (const chapter of yunusEmreB2LearningBlueprint.chapters) {
  assert.equal(chapter.evidencePoints.length,chapter.assessmentItems.length,`Ch${chapter.chapterId}: evidence mismatch.`);
  assert.ok(chapter.objectives.length >= 2,`Ch${chapter.chapterId}: objectives missing.`);
  const enRaw = page(yunusB2Pages,chapter.chapterId,'EN raw');
  const arRaw = page(yunusEmreB2PagesAr,chapter.chapterId,'AR raw');
  chapter.evidencePoints.forEach(point => {
    assert.ok(highlightPhraseOccurs(enRaw.content,point.evidence.en,'en'),`${point.id}: EN evidence not in prose.`);
    assert.ok(highlightPhraseOccurs(arRaw.content,point.evidence.ar,'ar'),`${point.id}: AR evidence not in prose.`);
  });
  const targets = yunusEmreB2HighlightTargets[chapter.chapterId] ?? [];
  assert.equal(chapter.vocabularyTargets.length,targets.length,`Ch${chapter.chapterId}: Word Note count drift.`);
  chapter.vocabularyTargets.forEach((target,index) => {
    assert.equal(normalizeHighlightText(target.en.word,'en'),normalizeHighlightText(targets[index].en.word,'en'),`Ch${chapter.chapterId}: EN target drift.`);
    assert.equal(normalizeHighlightText(target.ar.word,'ar'),normalizeHighlightText(targets[index].ar.word,'ar'),`Ch${chapter.chapterId}: AR target drift.`);
    assert.equal(target.en.definition,targets[index].en.definition,`Ch${chapter.chapterId}: EN definition drift.`);
    assert.equal(target.ar.definition,targets[index].ar.definition,`Ch${chapter.chapterId}: AR definition drift.`);
  });
}
validateLayer(yunusB2Pages,yunusEmreB2BookDataEn.pages,'en','Yunus B2 EN',true);
validateLayer(yunusEmreB2PagesAr,yunusEmreB2BookDataAr.pages,'ar','Yunus B2 AR',true);
for (const [book,label,timing,selfTiming] of [[yunusEmreB2BookDataEn,'EN','55 minutes','40 minutes'],[yunusEmreB2BookDataAr,'AR','55 دقيقة','40 دقيقة']] as const) {
  assert.equal(book.teacherGuide.length,13,`${label}: Teacher Guide count.`);
  assert.equal(book.selfStudyGuide.length,13,`${label}: Self Study count.`);
  book.teacherGuide.forEach((guide,index) => { assert.equal(guide.timing,timing,`${label} Teacher ${index + 1}: timing.`); assert.equal(guide.extraResources,undefined,`${label} Teacher ${index + 1}: external resources.`); assert.ok(/120[–-]150/.test(guide.lessonPlan),`${label} Teacher ${index + 1}: writing target.`); });
  book.selfStudyGuide.forEach((guide,index) => assert.equal(guide.timing,selfTiming,`${label} Self ${index + 1}: timing.`));
}
yunusEmreB2BlueprintConfig.storyIds.forEach(id => assert.equal(page(yunusEmreB2BookDataEn.pages,id,'EN').exercises?.[0]?.type,page(yunusEmreB2BookDataAr.pages,id,'AR').exercises?.[0]?.type,`Ch${id}: EN/AR Quick parity.`));
for (const chapterId of [8,9,10,11,12,13]) {
  const chapter = yunusEmreB2LearningBlueprint.chapters.find(candidate => candidate.chapterId === chapterId)!;
  chapter.assessmentItems.forEach(item => {
    const en = `${item.exercise.en.question ?? ''} ${item.exercise.en.explanation ?? ''}`;
    const ar = `${item.exercise.ar.question ?? ''} ${item.exercise.ar.explanation ?? ''}`;
    assert.ok(/according to|chapter|yunus emre|yunus’s|yunus'|in yunus/i.test(en),`Ch${chapterId} ${item.id}: EN attribution missing.`);
    assert.ok(/وفقًا|وفقاً|الفصل|يونس إمره|فكر|فلسفة/.test(ar),`Ch${chapterId} ${item.id}: AR attribution missing.`);
  });
}
const ch5 = yunusEmreB2LearningBlueprint.chapters.find(chapter => chapter.chapterId === 5)!;
const ch5En = ch5.assessmentItems.map(item => `${item.exercise.en.question ?? ''} ${item.exercise.en.explanation ?? ''}`).join(' ');
const ch5Ar = ch5.assessmentItems.map(item => `${item.exercise.ar.question ?? ''} ${item.exercise.ar.explanation ?? ''}`).join(' ');
assert.ok(!/slaughtered|swords|women and children.*captive|blood.*ruins/i.test(ch5En),'Ch5: graphic violence amplified in EN.');
assert.ok(!/ذبح|السيوف|النساء والأطفال.*أسر|الدماء/.test(ch5Ar),'Ch5: graphic violence amplified in AR.');
const ch13Targets = yunusEmreB2HighlightTargets[13] ?? [];
assert.ok(!ch13Targets.some(target => /risalet|nush|divan/i.test(normalizeHighlightText(target.en.word,'en'))),'Ch13: non-prose work title leaked into Word Notes.');
assert.ok(yunusEmreB2BookDataEn.studentGuideText?.includes('13 canonical narrative chapters'));
assert.ok(yunusEmreB2BookDataEn.studentGuideText?.includes('Page 14'));
assert.ok(yunusEmreB2BookDataAr.studentGuideText?.includes('الفصول السردية الثلاثة عشر'));
assert.ok(yunusEmreB2BookDataAr.studentGuideText?.includes('الصفحة 14'));
console.log('Yunus Emre B2 Blueprint Contract: PASS');
console.log('- 13 narrative chapters + protected References page 14');
console.log('- Quick 13 / Knowledge 8 / Vocabulary 10 / Review 8 / Final 10');
console.log('- attribution and non-graphic historical safeguards preserved');
