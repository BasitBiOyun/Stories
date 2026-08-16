import assert from 'node:assert/strict';
import type { BookData, PageData, TeacherGuideSection } from '../../src/types';
import { highlightPhraseOccurs } from '../../src/lib/highlightTextMatch';
import { normalizeHotspotSourceText } from '../../src/data/storyHotspotSourceLock';
import type { A2CanonicalHighlightTarget } from '../../src/data/a2HighlightStandard';

import { abrahamA2PagesEn } from '../../src/data/abraham/a2/en/pages';
import { abrahamA2PagesAr } from '../../src/data/abraham/a2/ar/pages';
import { abrahamA2BookDataEn, abrahamA2BookDataAr } from '../../src/data/abraham/a2';
import { abrahamA2GoldConfig } from '../../src/data/abraham/a2/gold';
import { abrahamA2HighlightTargets } from '../../src/data/abraham/a2/goldFinal';

import { meccaA2Pages } from '../../src/data/mecca/a2/en/pages';
import { meccaA2PagesAr } from '../../src/data/mecca/a2/ar/pages';
import { meccaA2BookDataEn, meccaA2BookDataAr } from '../../src/data/mecca/a2';
import { meccaA2GoldConfig } from '../../src/data/mecca/a2/gold';

import { mosesA2Pages } from '../../src/data/moses/a2/en/pages';
import { mosesA2PagesAr } from '../../src/data/moses/a2/ar/pages';
import { mosesA2BookDataEn, mosesA2BookDataAr } from '../../src/data/moses/a2';
import { mosesA2GoldConfig } from '../../src/data/moses/a2/gold';
import { mosesA2HighlightTargets } from '../../src/data/moses/a2/goldFinal';

import { yunusA2Pages } from '../../src/data/yunusEmre/a2/en/pages';
import { yunusEmreA2PagesAr } from '../../src/data/yunusEmre/a2/ar/pages';
import { yunusEmreA2BookDataEn, yunusEmreA2BookDataAr } from '../../src/data/yunusEmre/a2';
import { yunusA2GoldConfig } from '../../src/data/yunusEmre/a2/gold';

const MOSES_A2_CH11_AUDIO = 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fa2%2Faudio%2F10_Chapter_11_The_Signs_of_Allah.mp3?alt=media&token=5ae1efb5-a3ed-4cd0-b6df-e0486199c964';
const SCORED_FINAL_TYPES = ['multiple-choice', 'true-false', 'matching', 'fill-blanks'];
const LEGACY_FINAL_TYPES = ['multiple-choice', 'true-false'];

const learnerJargon = [
  'reinforcement', 'retrieval', 'recap', 'independently', 'informative narrative',
  'factual sequencing', 'cognitive load', 'differentiation', 'assessment evidence',
  'whole-story recall', 'find the evidence',
];

const words = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;
const sourceContains = (content: string, excerpt: string, language: 'en' | 'ar') =>
  normalizeHotspotSourceText(content, language).includes(normalizeHotspotSourceText(excerpt, language));

const applyApprovedYunusMechanicalFix = (value: string, storyName: string, pageId: number, language: 'en' | 'ar') => {
  if (storyName !== 'Yunus Emre' || language !== 'en' || pageId !== 7) return value;
  return value.replace(
    'Yunus replied, “My teacher” “I walked around the fields,',
    'Yunus replied, “My teacher, I walked around the fields,',
  );
};

const expectedAudioUrl = (canonical: PageData, storyName: string, pageId: number, language: 'en' | 'ar') =>
  storyName === 'Moses' && language === 'ar' && pageId === 11
    ? MOSES_A2_CH11_AUDIO
    : canonical.audioUrl;

const allGuideText = (sections: TeacherGuideSection[]) => sections.flatMap(section => [
  section.chapter,
  ...section.objectives,
  section.pedagogy,
  section.grammarFocus || '',
  section.pronunciationFocus || '',
  section.lessonPlan,
  ...section.discussionPoints,
  section.differentiation.fastFinishers,
  section.differentiation.strugglingLearners,
  ...section.interactiveTips,
  ...(section.assessmentTools?.rubric || []),
  ...(section.assessmentTools?.exitTicket || []),
]).join(' ').toLowerCase();

interface GoldConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
}

type HighlightTargets = Record<number, readonly A2CanonicalHighlightTarget[]>;

type Edition = {
  canonical: PageData[];
  book: BookData;
};

type BookContract = {
  name: string;
  config: GoldConfig;
  vocabPage: number;
  blueprint: boolean;
  highlightTargets?: HighlightTargets;
  en: Edition;
  ar: Edition;
};

const expectedGlossaryCounts = (contract: BookContract) => {
  if (!contract.blueprint || !contract.highlightTargets) return [12, 12];
  const midpoint = Math.ceil(contract.config.storyIds.length / 2);
  return [
    contract.config.storyIds.slice(0, midpoint).flatMap(id => contract.highlightTargets?.[id] ?? []).length,
    contract.config.storyIds.slice(midpoint).flatMap(id => contract.highlightTargets?.[id] ?? []).length,
  ];
};

const validateEdition = (
  contract: BookContract,
  language: 'en' | 'ar',
  edition: Edition,
) => {
  const label = `${contract.name} A2 ${language === 'en' ? 'English' : 'Arabic'}`;
  const { canonical: canonicalPages, book } = edition;
  const { config } = contract;

  assert.equal(book.pages.length, canonicalPages.length, `${label}: page count changed.`);
  assert.equal(book.level, 'A2', `${label}: level must remain A2.`);

  for (const id of config.storyIds) {
    const canonical = canonicalPages.find(page => page.id === id);
    const finalized = book.pages.find(page => page.id === id);
    assert.ok(canonical, `${label}: canonical chapter ${id} missing.`);
    assert.ok(finalized, `${label}: finalized chapter ${id} missing.`);

    for (const field of ['id', 'type', 'title', 'subtitle', 'image'] as const) {
      assert.deepEqual(finalized[field], canonical[field], `${label}: protected field ${field} changed in chapter ${id}.`);
    }
    assert.equal(finalized.audioUrl, expectedAudioUrl(canonical, contract.name, id, language), `${label}: audio URL changed unexpectedly in chapter ${id}.`);
    assert.equal(
      finalized.content,
      applyApprovedYunusMechanicalFix(canonical.content, contract.name, id, language),
      `${label}: canonical prose changed beyond the approved mechanical correction in chapter ${id}.`,
    );

    if (contract.name === 'Abraham' && language === 'en') {
      assert.equal(finalized.syncPoints, undefined, `${label}: obsolete timestamp sync metadata should stay removed in chapter ${id}.`);
      assert.equal(finalized.timedChunks, undefined, `${label}: obsolete timed chunks should stay removed in chapter ${id}.`);
    } else {
      assert.deepEqual(finalized.syncPoints, canonical.syncPoints, `${label}: sync points changed in chapter ${id}.`);
      assert.deepEqual(
        finalized.timedChunks,
        canonical.timedChunks?.map(chunk => ({
          ...chunk,
          text: applyApprovedYunusMechanicalFix(chunk.text, contract.name, id, language),
        })),
        `${label}: timed chunks changed in chapter ${id}.`,
      );
    }

    assert.equal(finalized.exercises?.length, canonical.exercises?.length, `${label}: chapter ${id} Quick Challenge count changed.`);
    assert.ok((finalized.vocabulary?.length || 0) >= 3, `${label}: chapter ${id} needs at least 3 Word Notes items.`);
    finalized.vocabulary?.forEach(entry => {
      assert.ok(entry.word.trim() && entry.definition.trim(), `${label}: chapter ${id} has an incomplete Word Notes entry.`);
      assert.ok(highlightPhraseOccurs(finalized.content, entry.word, language), `${label}: Word Notes item ${entry.word} is not grounded in chapter ${id}.`);
    });
    finalized.animatedWords?.forEach(word => {
      assert.ok(highlightPhraseOccurs(finalized.content, word, language), `${label}: animated highlight ${word} is not grounded in chapter ${id}.`);
    });

    const canonicalHotspots = canonical.hotspots || [];
    const expectedHotspots = contract.name === 'Moses' && id === 2
      ? canonicalHotspots.filter(hotspot => hotspot.id !== 'h2-3')
      : canonicalHotspots;
    const finalHotspots = finalized.hotspots || [];
    assert.equal(finalHotspots.length, expectedHotspots.length, `${label}: hotspot count changed in chapter ${id}.`);
    expectedHotspots.forEach((hotspot, index) => {
      const current = finalHotspots[index];
      assert.ok(current, `${label}: hotspot ${index + 1} missing in chapter ${id}.`);
      assert.equal(current.id, hotspot.id, `${label}: hotspot id changed in chapter ${id}.`);
      assert.equal(current.x, hotspot.x, `${label}: hotspot x changed for ${hotspot.id}.`);
      assert.equal(current.y, hotspot.y, `${label}: hotspot y changed for ${hotspot.id}.`);
      assert.ok(words(current.title) <= 4, `${label}: hotspot ${hotspot.id} title is too long.`);
      assert.ok(words(current.description) <= (language === 'en' ? 28 : 34), `${label}: hotspot ${hotspot.id} description is too long.`);
      assert.ok(sourceContains(finalized.content, current.title, language), `${label}: hotspot ${hotspot.id} title is not grounded in its chapter.`);
      assert.ok(sourceContains(finalized.content, current.description, language), `${label}: hotspot ${hotspot.id} description is not grounded in its chapter.`);
    });
  }

  const knowledge = book.pages.find(page => page.id === config.knowledgeCheckPageId);
  assert.equal(knowledge?.exercises?.length, 8, `${label}: Knowledge Check must have exactly 8 questions.`);

  const review = book.pages.find(page => page.id === config.reviewPageId);
  const reviewQuiz = review?.exercises?.find(exercise => exercise.type === 'quiz-game');
  assert.equal(reviewQuiz?.quizQuestions?.length, 8, `${label}: Review Challenge must have exactly 8 questions.`);

  const finalChallenge = book.pages.find(page => page.id === config.finalChallengePageId);
  assert.equal(finalChallenge?.exercises?.length, 10, `${label}: Final Challenge must have exactly 10 questions.`);
  const allowedFinalTypes = contract.blueprint ? SCORED_FINAL_TYPES : LEGACY_FINAL_TYPES;
  assert.ok(finalChallenge?.exercises?.every(exercise => allowedFinalTypes.includes(exercise.type)), `${label}: Final Challenge contains an unapproved exercise type.`);
  if (contract.blueprint) {
    assert.ok(finalChallenge?.exercises?.every(exercise => exercise.type !== 'tap-reveal'), `${label}: blueprint Final Challenge must never use Tap-Reveal.`);
    assert.ok(new Set((finalChallenge?.exercises || []).map(exercise => exercise.type)).size >= 3, `${label}: blueprint Final must preserve at least three scored interaction types.`);
  }

  const [expectedGlossary1, expectedGlossary2] = expectedGlossaryCounts(contract);
  const glossary1 = book.pages.find(page => page.id === config.glossaryPageIds[0]);
  const glossary2 = book.pages.find(page => page.id === config.glossaryPageIds[1]);
  assert.equal(glossary1?.vocabulary?.length, expectedGlossary1, `${label}: Master Glossary Part 1 has the wrong reviewed-entry count.`);
  assert.equal(glossary2?.vocabulary?.length, expectedGlossary2, `${label}: Master Glossary Part 2 has the wrong reviewed-entry count.`);
  for (const glossary of [glossary1, glossary2]) {
    const list = glossary?.vocabulary || [];
    const normalized = list.map(entry => entry.word.toLowerCase().trim());
    assert.equal(new Set(normalized).size, normalized.length, `${label}: glossary contains duplicate words.`);
  }

  const vocabularyPage = book.pages.find(page => page.id === contract.vocabPage);
  assert.equal(vocabularyPage?.vocabularyPairs?.length, 6, `${label}: Vocabulary Challenge must have exactly 6 reviewed pairs.`);

  assert.equal(book.teacherGuide.length, config.storyIds.length, `${label}: Teacher Guide must have one section per chapter.`);
  assert.equal(book.selfStudyGuide.length, config.storyIds.length, `${label}: Self-Study Guide must have one section per chapter.`);
  book.teacherGuide.forEach((section, index) => assert.equal(section.extraResources, undefined, `${label}: Teacher Guide chapter ${index + 1} claims an unsupplied resource.`));
  book.selfStudyGuide.forEach((section, index) => assert.equal(section.extraResources, undefined, `${label}: Self-Study chapter ${index + 1} claims an unsupplied resource.`));

  if (language === 'en') {
    const learnerText = `${allGuideText(book.selfStudyGuide)} ${(book.studentGuideText || '').toLowerCase()}`;
    learnerJargon.forEach(banned => assert.ok(!learnerText.includes(banned), `${label}: learner-facing material contains banned jargon: ${banned}.`));
    assert.ok(book.teacherGuideMetadata?.targetAudience?.includes('Grades 5–6'), `${label}: Teacher Guide metadata must target Grades 5–6 EFL learners.`);
    assert.ok(book.studentGuideMetadata?.whoIsThisFor?.includes('Grades 5–6'), `${label}: Self-Study metadata must target Grades 5–6 EFL learners.`);
  }
};

const books: BookContract[] = [
  {
    name: 'Abraham', config: abrahamA2GoldConfig, vocabPage: 16, blueprint: true, highlightTargets: abrahamA2HighlightTargets,
    en: { canonical: abrahamA2PagesEn, book: abrahamA2BookDataEn },
    ar: { canonical: abrahamA2PagesAr, book: abrahamA2BookDataAr },
  },
  {
    name: 'Mecca / Bilal', config: meccaA2GoldConfig, vocabPage: 15, blueprint: false,
    en: { canonical: meccaA2Pages, book: meccaA2BookDataEn },
    ar: { canonical: meccaA2PagesAr, book: meccaA2BookDataAr },
  },
  {
    name: 'Moses', config: mosesA2GoldConfig, vocabPage: 18, blueprint: true, highlightTargets: mosesA2HighlightTargets,
    en: { canonical: mosesA2Pages, book: mosesA2BookDataEn },
    ar: { canonical: mosesA2PagesAr, book: mosesA2BookDataAr },
  },
  {
    name: 'Yunus Emre', config: yunusA2GoldConfig, vocabPage: 10, blueprint: false,
    en: { canonical: yunusA2Pages, book: yunusEmreA2BookDataEn },
    ar: { canonical: yunusEmreA2PagesAr, book: yunusEmreA2BookDataAr },
  },
];

for (const contract of books) {
  validateEdition(contract, 'en', contract.en);
  validateEdition(contract, 'ar', contract.ar);
  assert.equal(contract.en.book.pages.length, contract.ar.book.pages.length, `${contract.name}: EN/AR page-count parity failed.`);
  assert.equal(contract.en.book.teacherGuide.length, contract.ar.book.teacherGuide.length, `${contract.name}: EN/AR Teacher Guide parity failed.`);
  assert.equal(contract.en.book.selfStudyGuide.length, contract.ar.book.selfStudyGuide.length, `${contract.name}: EN/AR Self-Study parity failed.`);
}

assert.ok(!yunusEmreA2BookDataEn.title.toLowerCase().includes('prophet'), 'Yunus Emre metadata must not imply that Yunus Emre was a prophet.');
assert.ok(!yunusEmreA2BookDataAr.title.includes('الأنبياء'), 'Arabic Yunus Emre metadata must not place him under a prophet title.');
assert.ok(!meccaA2BookDataEn.title.toLowerCase().includes('stories of the prophets'), 'Bilal/Mecca title must identify the actual subject instead of implying Bilal is a prophet.');

console.log('A2 rollout source-lock contract: PASS');
console.log('- Abraham and Moses use the blueprint A2 contract; Mecca/Bilal and Yunus Emre remain on the legacy contract until migration');
console.log('- story prose/title/image/audio and approved media/mechanical exceptions are source-locked');
console.log('- obsolete Abraham English timestamp-following metadata remains removed');
console.log('- Word Notes and hotspots remain grounded in their own chapters');
console.log('- Knowledge = 8, Review = 8, Final = 10, Vocabulary Challenge = 6');
console.log('- blueprint Finals allow scored MC/TF/matching/fill variety and forbid Tap-Reveal');
console.log('- blueprint glossaries follow complete reviewed highlight sets; legacy glossaries remain 12 + 12');
console.log('- Teacher Guide and Self-Study Guide keep one section per story chapter');
