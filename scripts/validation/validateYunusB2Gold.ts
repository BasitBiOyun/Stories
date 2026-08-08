import assert from 'node:assert/strict';
import type { Exercise, PageData } from '../../src/types';
import { yunusB2Pages } from '../../src/data/yunusEmre/b2/en/pages';
import { yunusEmreB2PagesAr } from '../../src/data/yunusEmre/b2/ar/pages';
import { yunusEmreB2BookDataEn, yunusEmreB2BookDataAr } from '../../src/data/yunusEmre/b2';
import { yunusB2GoldContract } from '../../src/data/yunusEmre/b2/gold';
import { yunusB2GoldContractAr } from '../../src/data/yunusEmre/b2/goldAr';

const protectedFields = ['id','type','title','subtitle','content','image','audioUrl','animatedWords','syncPoints','timedChunks'] as const;
const findPage = (pages: PageData[], id: number): PageData => {
  const page = pages.find((candidate) => candidate.id === id);
  assert.ok(page, `Yunus B2: page ${id} missing.`);
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

const validateBook = ({
  sourcePages,
  finalPages,
  teacherGuide,
  selfStudyGuide,
  studentGuideText,
  teacherGuideMetadata,
  language,
}: {
  sourcePages: PageData[];
  finalPages: PageData[];
  teacherGuide: typeof yunusEmreB2BookDataEn.teacherGuide;
  selfStudyGuide: typeof yunusEmreB2BookDataEn.selfStudyGuide;
  studentGuideText?: string;
  teacherGuideMetadata: typeof yunusEmreB2BookDataEn.teacherGuideMetadata;
  language: 'en' | 'ar';
}) => {
  const contract = language === 'en' ? yunusB2GoldContract : yunusB2GoldContractAr;
  const tag = `Yunus B2 ${language.toUpperCase()}`;
  assert.equal(finalPages.length, sourcePages.length, `${tag}: page count changed.`);
  assert.deepEqual(finalPages.map((page) => [page.id, page.type]), sourcePages.map((page) => [page.id, page.type]), `${tag}: page sequence changed.`);

  for (const id of contract.storyIds) {
    const source = findPage(sourcePages, id);
    const final = findPage(finalPages, id);
    for (const field of protectedFields) assert.deepEqual(final[field], source[field], `${tag} ch${id}: protected ${field} changed.`);
    const sh = source.hotspots ?? [];
    const fh = final.hotspots ?? [];
    assert.equal(fh.length, sh.length, `${tag} ch${id}: hotspot count changed.`);
    sh.forEach((hotspot, index) => {
      assert.equal(fh[index].id, hotspot.id, `${tag} ${hotspot.id}: id changed.`);
      assert.equal(fh[index].x, hotspot.x, `${tag} ${hotspot.id}: x changed.`);
      assert.equal(fh[index].y, hotspot.y, `${tag} ${hotspot.id}: y changed.`);
    });
    for (const hotspot of fh) {
      if (language === 'en') assert.ok(/^The chapter presents this in Yunus Emre/.test(hotspot.description), `${tag} ${hotspot.id}: attribution framing missing.`);
      else assert.ok(/^يقدم الفصل هذه الفكرة في سياق يونس إمره/.test(hotspot.description), `${tag} ${hotspot.id}: attribution framing missing.`);
    }
    assert.equal(final.exercises?.length, 1, `${tag} ch${id}: one visible Quick Challenge required.`);
    objective(final.exercises![0], `${tag} ch${id} Quick Challenge`);
  }

  assert.deepEqual(findPage(finalPages, 14), findPage(sourcePages, 14), `${tag}: References page 14 changed.`);
  const knowledge = findPage(finalPages, 15);
  const vocabulary = findPage(finalPages, 16);
  const glossary1 = findPage(finalPages, 17);
  const glossary2 = findPage(finalPages, 18);
  const review = findPage(finalPages, 19);
  const finalChallenge = findPage(finalPages, 20);
  assert.equal(knowledge.exercises?.length, 8, `${tag}: Knowledge must contain 8 objective questions.`);
  assert.equal(vocabulary.vocabularyPairs?.length, 10, `${tag}: Vocabulary must contain 10 pairs.`);
  assert.ok((glossary1.vocabulary?.length ?? 0) >= 18, `${tag}: Glossary 1 must contain >=18 entries.`);
  assert.ok((glossary2.vocabulary?.length ?? 0) >= 18, `${tag}: Glossary 2 must contain >=18 entries.`);
  assert.equal(review.exercises?.length, 8, `${tag}: Review must contain 8 objective questions.`);
  assert.equal(finalChallenge.exercises?.length, 10, `${tag}: Final must contain 10 objective questions.`);
  for (const [items, label] of [[knowledge.exercises ?? [], 'Knowledge'], [review.exercises ?? [], 'Review'], [finalChallenge.exercises ?? [], 'Final']] as const) {
    items.forEach((item, index) => objective(item, `${tag} ${label} ${index + 1}`));
    balance(items, `${tag} ${label}`);
  }

  assert.equal(teacherGuide.length, 13, `${tag}: Teacher Guide must have 13 sections.`);
  assert.equal(selfStudyGuide.length, 13, `${tag}: Self-Study must have 13 sections.`);
  for (let index = 0; index < 13; index += 1) {
    const page = findPage(finalPages, index + 1);
    const expected = language === 'en' ? `Chapter ${page.id}: ${page.title}` : `الفصل ${page.id}: ${page.title}`;
    assert.equal(teacherGuide[index].chapter, expected, `${tag} Teacher ${index + 1}: label mismatch.`);
    assert.equal(selfStudyGuide[index].chapter, expected, `${tag} Self-Study ${index + 1}: label mismatch.`);
    assert.equal(teacherGuide[index].extraResources, undefined, `${tag} Teacher ${index + 1}: unsupported resources.`);
  }
  assert.equal(teacherGuideMetadata?.implementationPlans?.optionC?.steps?.length, 13, `${tag}: optionC must cover 13 chapters.`);
  assert.ok(studentGuideText?.includes(language === 'en' ? '13 canonical narrative chapters' : 'الفصول السردية الثلاثة عشر'), `${tag}: learner guide chapter count missing.`);

  for (const id of [8, 9, 10, 11, 12, 13]) {
    const ex = findPage(finalPages, id).exercises![0];
    const derived = `${ex.title} ${ex.instructions} ${ex.question} ${ex.explanation} ${ex.feedback?.correct} ${ex.feedback?.incorrect}`;
    if (language === 'en') assert.ok(/According to|Yunus Emre|Yunus’s|chapter|his thought|his philosophy/i.test(derived), `${tag} ch${id}: Sûfî/literary attribution missing.`);
    else assert.ok(/وفقاً|يونس إمره|الفصل|فكر|فلسفة/.test(derived), `${tag} ch${id}: Sûfî/literary attribution missing.`);
  }

  const glossaryText = [...(glossary1.vocabulary ?? []), ...(glossary2.vocabulary ?? [])]
    .filter((entry) => language === 'en'
      ? /vahdet-i vücut|mystic|mystical|sufism|islamic mysticism|divine love|intellect|true and only reality|absolute reality/i.test(entry.word)
      : /وحدة الوجود|التصوف|الصوفي|الحقيقة|العقل|الحب/.test(entry.word.normalize('NFKD').replace(/\p{M}/gu, '')));
  for (const entry of glossaryText) {
    if (language === 'en') assert.ok(/^In the chapter’s presentation of Yunus Emre/.test(entry.definition), `${tag} glossary ${entry.word}: attribution missing.`);
    else assert.ok(/^في عرض الفصل لفكر يونس إمره/.test(entry.definition), `${tag} glossary ${entry.word}: attribution missing.`);
  }

  const violentDerived = `${findPage(finalPages, 5).exercises?.[0]?.question} ${findPage(finalPages, 5).exercises?.[0]?.explanation}`;
  if (language === 'en') assert.ok(!/slaughtered|swords|women and children.*captive|blood.*ruins/i.test(violentDerived), `${tag} ch5: graphic historical violence amplified.`);
  else assert.ok(!/ذبح|السيوف|النساء والأطفال.*أسر|الدماء/.test(violentDerived), `${tag} ch5: graphic historical violence amplified.`);
};

validateBook({
  sourcePages: yunusB2Pages,
  finalPages: yunusEmreB2BookDataEn.pages,
  teacherGuide: yunusEmreB2BookDataEn.teacherGuide,
  selfStudyGuide: yunusEmreB2BookDataEn.selfStudyGuide,
  studentGuideText: yunusEmreB2BookDataEn.studentGuideText,
  teacherGuideMetadata: yunusEmreB2BookDataEn.teacherGuideMetadata,
  language: 'en',
});
validateBook({
  sourcePages: yunusEmreB2PagesAr,
  finalPages: yunusEmreB2BookDataAr.pages,
  teacherGuide: yunusEmreB2BookDataAr.teacherGuide,
  selfStudyGuide: yunusEmreB2BookDataAr.selfStudyGuide,
  studentGuideText: yunusEmreB2BookDataAr.studentGuideText,
  teacherGuideMetadata: yunusEmreB2BookDataAr.teacherGuideMetadata,
  language: 'ar',
});

console.log('Yunus Emre B2 Gold: PASS');
console.log('- EN+AR 13 canonical narrative chapters protected');
console.log('- References page 14 preserved');
console.log('- Knowledge 8 / Vocabulary 10 / Review 8 / Final 10');
console.log('- Teacher Guide 13 / Self-Study 13');
console.log('- hotspot/exercise/glossary attribution safeguards enforced');
console.log('- historical violence not amplified in derived exercise copy');
