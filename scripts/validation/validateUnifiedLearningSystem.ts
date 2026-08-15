import type { BookData, PageData } from '../../src/types';
import { bookRegistry } from '../../src/core/content/bookRegistry';
import { getLearningLevelPolicy } from '../../src/data/learningLevelPolicy';
import { inferLearningSystemConfig } from '../../src/data/learningSystem';
import { applyResolvedAssets, isValidAudioUrl, isValidImageUrl, parseChapterNumber } from '../../src/core/storage/storageAssetLoader';

const fail = (message: string): never => { throw new Error(`[Unified Learning Validation] ${message}`); };
const assert = (condition: unknown, message: string): asserts condition => { if (!condition) fail(message); };
const isReferencePage = (page: PageData) => /^(references?|المراجع|مراجع)(?:\s*[—:-].*)?$/i.test(page.title.trim());
const nonReferencePages = (book: BookData) => book.pages.filter(page => !isReferencePage(page));

const forbiddenArabicUiTerms = /\b(?:Quick Challenge|Word Notes?|Review Challenge|Final Challenge|Knowledge Check|Teacher Guide|Self-Study Guide)\b/i;
const containsForbiddenArabic = (value: unknown): boolean => {
  if (typeof value === 'string') return forbiddenArabicUiTerms.test(value);
  if (Array.isArray(value)) return value.some(containsForbiddenArabic);
  if (value && typeof value === 'object') return Object.values(value as Record<string, unknown>).some(containsForbiddenArabic);
  return false;
};

const checkMediaPair = (en: BookData, ar: BookData, label: string) => {
  const clean = applyResolvedAssets(
    { en, ar },
    { images: {}, englishAudio: {}, arabicAudio: {} },
  );
  const arById = new Map(clean.ar.pages.map(page => [page.id, page]));

  clean.en.pages.forEach(enPage => {
    const arPage = arById.get(enPage.id);
    if (enPage.type !== 'story' || arPage?.type !== 'story') return;
    assert(!enPage.image || isValidImageUrl(enPage.image), `${label} EN page ${enPage.id} has invalid image after media reconciliation.`);
    assert(!arPage.image || isValidImageUrl(arPage.image), `${label} AR page ${arPage.id} has invalid image after media reconciliation.`);
    assert(enPage.image === arPage.image, `${label} page ${enPage.id} EN/AR images are not the same chapter image.`);
    assert(!enPage.audioUrl || isValidAudioUrl(enPage.audioUrl), `${label} EN page ${enPage.id} has invalid audio.`);
    assert(!arPage.audioUrl || isValidAudioUrl(arPage.audioUrl), `${label} AR page ${arPage.id} has invalid audio.`);
    assert(!(enPage.audioUrl && arPage.audioUrl && enPage.audioUrl === arPage.audioUrl), `${label} page ${enPage.id} uses the same narration URL for EN and AR.`);
    assert(!enPage.syncPoints?.length && !enPage.timedChunks?.length, `${label} EN page ${enPage.id} retains obsolete sync metadata.`);
    assert(!arPage.syncPoints?.length && !arPage.timedChunks?.length, `${label} AR page ${arPage.id} retains obsolete sync metadata.`);
  });
};

const checkBook = async (definition: (typeof bookRegistry)[number]) => {
  const pair = await definition.load();
  const label = `${definition.storyId}:${definition.level}`;
  assert(pair.en.level === definition.level && pair.ar.level === definition.level, `${label} level mismatch.`);

  const enConfig = inferLearningSystemConfig(nonReferencePages(pair.en), pair.en.level);
  const arConfig = inferLearningSystemConfig(nonReferencePages(pair.ar), pair.ar.level);
  assert(JSON.stringify(enConfig.storyIds) === JSON.stringify(arConfig.storyIds), `${label} EN/AR story IDs differ.`);
  assert(enConfig.knowledgeCheckPageId === arConfig.knowledgeCheckPageId, `${label} Knowledge page differs by language.`);
  assert(enConfig.vocabularyPageId === arConfig.vocabularyPageId, `${label} Vocabulary page differs by language.`);
  assert(enConfig.reviewPageId === arConfig.reviewPageId, `${label} Review page differs by language.`);
  assert(enConfig.finalChallengePageId === arConfig.finalChallengePageId, `${label} Final page differs by language.`);
  assert(JSON.stringify(enConfig.glossaryPageIds) === JSON.stringify(arConfig.glossaryPageIds), `${label} glossary pages differ by language.`);

  const policy = getLearningLevelPolicy(pair.en.level);
  assert(pair.en.teacherGuide.length === enConfig.storyIds.length, `${label} EN Teacher Guide count differs from chapter count.`);
  assert(pair.ar.teacherGuide.length === enConfig.storyIds.length, `${label} AR Teacher Guide count differs from chapter count.`);
  assert(pair.en.selfStudyGuide.length === enConfig.storyIds.length, `${label} EN Self-Study count differs from chapter count.`);
  assert(pair.ar.selfStudyGuide.length === enConfig.storyIds.length, `${label} AR Self-Study count differs from chapter count.`);

  for (const id of enConfig.storyIds) {
    const enPage = pair.en.pages.find(page => page.id === id && page.type === 'story');
    const arPage = pair.ar.pages.find(page => page.id === id && page.type === 'story');
    assert(enPage && arPage, `${label} chapter ${id} missing in one language.`);
    assert(enPage.exercises?.length === 1 && arPage.exercises?.length === 1, `${label} chapter ${id} must have exactly one Quick Challenge.`);
    const enExercise = enPage.exercises[0];
    const arExercise = arPage.exercises[0];
    assert(enExercise.id.startsWith(`learning-${definition.level.toLowerCase()}-quick-`), `${label} chapter ${id} does not use unified Quick Challenge.`);
    assert(enExercise.type === arExercise.type, `${label} chapter ${id} Quick Challenge types differ.`);
  }

  const knowledgeEn = pair.en.pages.find(page => page.id === enConfig.knowledgeCheckPageId)?.exercises ?? [];
  const knowledgeAr = pair.ar.pages.find(page => page.id === arConfig.knowledgeCheckPageId)?.exercises ?? [];
  assert(knowledgeEn.length === policy.knowledgeCount && knowledgeAr.length === policy.knowledgeCount, `${label} Knowledge Check count must be ${policy.knowledgeCount}.`);

  if (enConfig.vocabularyPageId) {
    const vocabularyEn = pair.en.pages.find(page => page.id === enConfig.vocabularyPageId)?.vocabularyPairs ?? [];
    const vocabularyAr = pair.ar.pages.find(page => page.id === arConfig.vocabularyPageId)?.vocabularyPairs ?? [];
    assert(vocabularyEn.length === policy.vocabularyCount && vocabularyAr.length === policy.vocabularyCount, `${label} Vocabulary Challenge count must be ${policy.vocabularyCount}.`);
  }

  const reviewEn = pair.en.pages.find(page => page.id === enConfig.reviewPageId)?.exercises?.[0];
  const reviewAr = pair.ar.pages.find(page => page.id === arConfig.reviewPageId)?.exercises?.[0];
  assert(reviewEn?.type === 'quiz-game' && reviewAr?.type === 'quiz-game', `${label} Review must use quiz-game.`);
  assert(reviewEn.quizQuestions?.length === policy.reviewCount && reviewAr.quizQuestions?.length === policy.reviewCount, `${label} Review count must be ${policy.reviewCount}.`);

  const finalEn = pair.en.pages.find(page => page.id === enConfig.finalChallengePageId)?.exercises ?? [];
  const finalAr = pair.ar.pages.find(page => page.id === arConfig.finalChallengePageId)?.exercises ?? [];
  assert(finalEn.length === policy.finalCount && finalAr.length === policy.finalCount, `${label} Final count must be ${policy.finalCount}.`);

  const types = new Set<string>();
  for (const id of enConfig.storyIds) pair.en.pages.find(page => page.id === id)?.exercises?.forEach(exercise => types.add(exercise.type));
  knowledgeEn.forEach(exercise => types.add(exercise.type));
  finalEn.forEach(exercise => types.add(exercise.type));
  for (const type of ['multiple-choice', 'true-false', 'matching', 'fill-blanks', 'tap-reveal']) {
    assert(types.has(type), `${label} does not contain required ${type} variety.`);
  }

  assert(pair.en.teacherGuideMetadata?.level === definition.level, `${label} EN Teacher Guide metadata level missing/wrong.`);
  assert(pair.ar.teacherGuideMetadata?.level === definition.level, `${label} AR Teacher Guide metadata level missing/wrong.`);
  assert(pair.en.studentGuideMetadata?.level === definition.level, `${label} EN Student Guide metadata level missing/wrong.`);
  assert(pair.ar.studentGuideMetadata?.level === definition.level, `${label} AR Student Guide metadata level missing/wrong.`);
  assert(Boolean(pair.en.studentGuideText?.trim()) && Boolean(pair.ar.studentGuideText?.trim()), `${label} Student Guide text missing.`);
  assert(Boolean(pair.en.studentGuideSections?.length) && Boolean(pair.ar.studentGuideSections?.length), `${label} Student Guide sections missing.`);
  assert(!containsForbiddenArabic({
    teacherGuide: pair.ar.teacherGuide,
    selfStudyGuide: pair.ar.selfStudyGuide,
    teacherGuideMetadata: pair.ar.teacherGuideMetadata,
    studentGuideMetadata: pair.ar.studentGuideMetadata,
    studentGuideSections: pair.ar.studentGuideSections,
    studentGuideText: pair.ar.studentGuideText,
  }), `${label} Arabic guides retain English UI terminology.`);

  const manifest = definition.storage;
  assert(Boolean(manifest.sharedImages?.paths.length), `${label} has no shared image storage candidates.`);
  assert(Boolean(manifest.englishAudio?.paths.length), `${label} has no English audio storage candidates.`);
  assert(Boolean(manifest.arabicAudio?.paths.length), `${label} has no Arabic audio storage candidates.`);

  checkMediaPair(pair.en, pair.ar, label);
  return label;
};

const main = async () => {
  assert(parseChapterNumber('chapter_12.mp3') === 12, 'chapter parser failed chapter_12.mp3');
  assert(parseChapterNumber('yunus_a2_ch7.png') === 7, 'chapter parser failed yunus_a2_ch7.png');
  assert(parseChapterNumber('00_Chapter_1.mp3') === 1, 'chapter parser failed 00_Chapter_1.mp3');

  const labels: string[] = [];
  for (const definition of bookRegistry) labels.push(await checkBook(definition));
  assert(labels.length === 15, `Expected 15 registered story-level books, found ${labels.length}.`);
  console.log(`Unified Learning System validated for ${labels.length} books:`);
  labels.forEach(label => console.log(`- ${label}`));
};

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
