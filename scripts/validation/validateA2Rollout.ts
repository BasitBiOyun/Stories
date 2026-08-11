import assert from 'node:assert/strict';
import type { BookData, PageData, TeacherGuideSection } from '../../src/types';
import { highlightPhraseOccurs } from '../../src/lib/highlightTextMatch';

import { abrahamA2PagesEn } from '../../src/data/abraham/a2/en/pages';
import { abrahamA2PagesAr } from '../../src/data/abraham/a2/ar/pages';
import { abrahamA2BookDataEn, abrahamA2BookDataAr } from '../../src/data/abraham/a2';
import { abrahamA2GoldConfig } from '../../src/data/abraham/a2/gold';

import { meccaA2Pages } from '../../src/data/mecca/a2/en/pages';
import { meccaA2PagesAr } from '../../src/data/mecca/a2/ar/pages';
import { meccaA2BookDataEn, meccaA2BookDataAr } from '../../src/data/mecca/a2';
import { meccaA2GoldConfig } from '../../src/data/mecca/a2/gold';

import { mosesA2Pages } from '../../src/data/moses/a2/en/pages';
import { mosesA2PagesAr } from '../../src/data/moses/a2/ar/pages';
import { mosesA2BookDataEn, mosesA2BookDataAr } from '../../src/data/moses/a2';
import { mosesA2GoldConfig } from '../../src/data/moses/a2/gold';

import { yunusA2Pages } from '../../src/data/yunusEmre/a2/en/pages';
import { yunusEmreA2PagesAr } from '../../src/data/yunusEmre/a2/ar/pages';
import { yunusEmreA2BookDataEn, yunusEmreA2BookDataAr } from '../../src/data/yunusEmre/a2';
import { yunusA2GoldConfig } from '../../src/data/yunusEmre/a2/gold';

const protectedStoryFields = [
  'id', 'type', 'title', 'subtitle', 'image', 'audioUrl', 'syncPoints',
] as const;

const learnerJargon = [
  'reinforcement', 'retrieval', 'recap', 'independently', 'informative narrative',
  'factual sequencing', 'cognitive load', 'differentiation', 'assessment evidence',
  'whole-story recall', 'find the evidence',
];

const words = (value: string): number => value.trim().split(/\s+/).filter(Boolean).length;

const normalizeSource = (value: string, language: 'en' | 'ar'): string => {
  let normalized = value
    .normalize('NFKC')
    .replaceAll('**', '')
    .replace(/\s+/g, ' ')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .toLocaleLowerCase()
    .trim();

  if (language === 'ar') {
    normalized = normalized
      .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
      .replace(/ـ/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي');
  }

  return normalized;
};

const sourceContains = (content: string, excerpt: string, language: 'en' | 'ar'): boolean =>
  normalizeSource(content, language).includes(normalizeSource(excerpt, language));

const applyApprovedYunusMechanicalFix = (value: string, storyName: string, pageId: number, language: 'en' | 'ar'): string => {
  if (storyName !== 'Yunus Emre' || language !== 'en' || pageId !== 7) return value;
  return value.replace(
    'Yunus replied, “My teacher” “I walked around the fields,',
    'Yunus replied, “My teacher, I walked around the fields,',
  );
};

const allGuideText = (sections: TeacherGuideSection[]): string => sections.flatMap((section) => [
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

const validateEdition = ({
  storyName,
  label,
  language,
  canonicalPages,
  book,
  config,
  vocabularyPageId,
}: {
  storyName: string;
  label: string;
  language: 'en' | 'ar';
  canonicalPages: PageData[];
  book: BookData;
  config: GoldConfig;
  vocabularyPageId: number;
}) => {
  assert.equal(book.pages.length, canonicalPages.length, `${label}: page count changed.`);
  assert.equal(book.level, 'A2', `${label}: level must remain A2.`);

  for (const id of config.storyIds) {
    const canonical = canonicalPages.find((page) => page.id === id);
    const finalized = book.pages.find((page) => page.id === id);
    assert.ok(canonical, `${label}: canonical chapter ${id} missing.`);
    assert.ok(finalized, `${label}: finalized chapter ${id} missing.`);

    for (const field of protectedStoryFields) {
      assert.deepEqual(finalized[field], canonical[field], `${label}: protected field ${field} changed in chapter ${id}.`);
    }

    assert.equal(
      finalized.content,
      applyApprovedYunusMechanicalFix(canonical.content, storyName, id, language),
      `${label}: canonical prose changed beyond the approved mechanical correction in chapter ${id}.`,
    );
    assert.deepEqual(
      finalized.timedChunks,
      canonical.timedChunks?.map(chunk => ({
        ...chunk,
        text: applyApprovedYunusMechanicalFix(chunk.text, storyName, id, language),
      })),
      `${label}: timed chunks changed beyond the approved mechanical correction in chapter ${id}.`,
    );

    assert.equal(finalized.exercises?.length, canonical.exercises?.length, `${label}: chapter ${id} Quick Challenge count changed.`);
    assert.ok((finalized.vocabulary?.length || 0) >= 3, `${label}: chapter ${id} needs at least 3 Word Notes items.`);
    finalized.vocabulary?.forEach((entry) => {
      assert.ok(entry.word.trim(), `${label}: chapter ${id} has an empty Word Notes word.`);
      assert.ok(entry.definition.trim(), `${label}: chapter ${id} has an empty definition.`);
    });
    finalized.vocabulary?.forEach((entry) => {
      assert.ok(
        highlightPhraseOccurs(finalized.content, entry.word, language),
        `${label}: Word Notes item ${entry.word} is not grounded in chapter ${id}.`,
      );
    });
    finalized.animatedWords?.forEach((word) => {
      assert.ok(
        highlightPhraseOccurs(finalized.content, word, language),
        `${label}: animated highlight ${word} is not grounded in chapter ${id}.`,
      );
    });

    const originalHotspots = canonical.hotspots || [];
    const finalHotspots = finalized.hotspots || [];
    assert.equal(finalHotspots.length, originalHotspots.length, `${label}: hotspot count changed in chapter ${id}.`);

    originalHotspots.forEach((hotspot, index) => {
      const current = finalHotspots[index];
      assert.ok(current, `${label}: hotspot ${index + 1} missing in chapter ${id}.`);
      assert.equal(current.id, hotspot.id, `${label}: hotspot id changed in chapter ${id}.`);
      assert.equal(current.x, hotspot.x, `${label}: hotspot x changed for ${hotspot.id}.`);
      assert.equal(current.y, hotspot.y, `${label}: hotspot y changed for ${hotspot.id}.`);
      assert.ok(current.title.trim(), `${label}: hotspot ${hotspot.id} title is empty.`);
      assert.ok(current.description.trim(), `${label}: hotspot ${hotspot.id} description is empty.`);
      assert.ok(words(current.title) <= 4, `${label}: hotspot ${hotspot.id} title exceeds the A2 source-lock limit.`);
      assert.ok(words(current.description) <= (language === 'en' ? 28 : 34), `${label}: hotspot ${hotspot.id} is too long for A2.`);
      assert.ok(
        sourceContains(finalized.content, current.title, language),
        `${label}: hotspot ${hotspot.id} title is not a direct phrase from the same chapter.`,
      );
      assert.ok(
        sourceContains(finalized.content, current.description, language),
        `${label}: hotspot ${hotspot.id} description is not a direct extract from the same chapter.`,
      );
    });
  }

  const knowledge = book.pages.find((page) => page.id === config.knowledgeCheckPageId);
  assert.equal(knowledge?.exercises?.length, 8, `${label}: Knowledge Check must have exactly 8 questions.`);

  const review = book.pages.find((page) => page.id === config.reviewPageId);
  const reviewQuiz = review?.exercises?.find((exercise) => exercise.type === 'quiz-game');
  assert.equal(reviewQuiz?.quizQuestions?.length, 8, `${label}: Review Challenge must have exactly 8 questions.`);
  const reflection = review?.exercises?.find((exercise) => exercise.type === 'reflection');
  if (reflection) assert.ok(reflection.feedback.incorrect.trim(), `${label}: reflection needs supportive non-empty incorrect feedback.`);

  const finalChallenge = book.pages.find((page) => page.id === config.finalChallengePageId);
  assert.equal(finalChallenge?.exercises?.length, 10, `${label}: Final Challenge must have exactly 10 questions.`);
  assert.ok(finalChallenge?.exercises?.every((exercise) => exercise.type === 'multiple-choice' || exercise.type === 'true-false'), `${label}: Final Challenge must use objective MC/TF items.`);

  const glossary1 = book.pages.find((page) => page.id === config.glossaryPageIds[0]);
  const glossary2 = book.pages.find((page) => page.id === config.glossaryPageIds[1]);
  assert.equal(glossary1?.vocabulary?.length, 12, `${label}: Master Glossary Part 1 must have 12 entries.`);
  assert.equal(glossary2?.vocabulary?.length, 12, `${label}: Master Glossary Part 2 must have 12 entries.`);
  for (const glossary of [glossary1, glossary2]) {
    const list = glossary?.vocabulary || [];
    const normalized = list.map((entry) => entry.word.toLowerCase().trim());
    assert.equal(new Set(normalized).size, normalized.length, `${label}: glossary contains duplicate words.`);
  }

  const vocabularyPage = book.pages.find((page) => page.id === vocabularyPageId);
  assert.equal(vocabularyPage?.vocabularyPairs?.length, 6, `${label}: Vocabulary Challenge must have exactly 6 reviewed pairs.`);

  assert.equal(book.teacherGuide.length, config.storyIds.length, `${label}: Teacher Guide must have one section per chapter.`);
  assert.equal(book.selfStudyGuide.length, config.storyIds.length, `${label}: Self-Study Guide must have one section per chapter.`);
  book.teacherGuide.forEach((section, index) => {
    assert.equal(section.extraResources, undefined, `${label}: Teacher Guide chapter ${index + 1} claims an unsupplied resource.`);
  });
  book.selfStudyGuide.forEach((section, index) => {
    assert.equal(section.extraResources, undefined, `${label}: Self-Study chapter ${index + 1} claims an unsupplied resource.`);
  });

  if (language === 'en') {
    const text = `${allGuideText(book.selfStudyGuide)} ${(book.studentGuideText || '').toLowerCase()}`;
    for (const banned of learnerJargon) {
      assert.ok(!text.includes(banned), `${label}: learner-facing Self-Study language contains banned jargon: ${banned}.`);
    }
    assert.ok(book.teacherGuideMetadata?.targetAudience?.includes('Grades 5–6'), `${label}: Teacher Guide metadata must target Grades 5–6 EFL learners.`);
    assert.ok(book.studentGuideMetadata?.whoIsThisFor?.includes('Grades 5–6'), `${label}: Self-Study metadata must target Grades 5–6 EFL learners.`);
  }
};

const books = [
  {
    name: 'Abraham', config: abrahamA2GoldConfig, vocabPage: 16,
    en: { canonical: abrahamA2PagesEn, book: abrahamA2BookDataEn },
    ar: { canonical: abrahamA2PagesAr, book: abrahamA2BookDataAr },
  },
  {
    name: 'Mecca / Bilal', config: meccaA2GoldConfig, vocabPage: 15,
    en: { canonical: meccaA2Pages, book: meccaA2BookDataEn },
    ar: { canonical: meccaA2PagesAr, book: meccaA2BookDataAr },
  },
  {
    name: 'Moses', config: mosesA2GoldConfig, vocabPage: 18,
    en: { canonical: mosesA2Pages, book: mosesA2BookDataEn },
    ar: { canonical: mosesA2PagesAr, book: mosesA2BookDataAr },
  },
  {
    name: 'Yunus Emre', config: yunusA2GoldConfig, vocabPage: 10,
    en: { canonical: yunusA2Pages, book: yunusEmreA2BookDataEn },
    ar: { canonical: yunusEmreA2PagesAr, book: yunusEmreA2BookDataAr },
  },
] as const;

for (const item of books) {
  validateEdition({ storyName: item.name, label: `${item.name} A2 English`, language: 'en', canonicalPages: item.en.canonical, book: item.en.book, config: item.config, vocabularyPageId: item.vocabPage });
  validateEdition({ storyName: item.name, label: `${item.name} A2 Arabic`, language: 'ar', canonicalPages: item.ar.canonical, book: item.ar.book, config: item.config, vocabularyPageId: item.vocabPage });

  assert.equal(item.en.book.pages.length, item.ar.book.pages.length, `${item.name}: EN/AR page-count parity failed.`);
  assert.equal(item.en.book.teacherGuide.length, item.ar.book.teacherGuide.length, `${item.name}: EN/AR Teacher Guide parity failed.`);
  assert.equal(item.en.book.selfStudyGuide.length, item.ar.book.selfStudyGuide.length, `${item.name}: EN/AR Self-Study parity failed.`);
}

assert.ok(!yunusEmreA2BookDataEn.title.toLowerCase().includes('prophet'), 'Yunus Emre metadata must not imply that Yunus Emre was a prophet.');
assert.ok(!yunusEmreA2BookDataAr.title.includes('الأنبياء'), 'Arabic Yunus Emre metadata must not place him under a prophet title.');
assert.ok(!meccaA2BookDataEn.title.toLowerCase().includes('stories of the prophets'), 'Bilal/Mecca title must identify the actual subject instead of implying Bilal is a prophet.');

console.log('A2 rollout source-lock contract: PASS');
console.log('- Abraham, Mecca/Bilal, Moses, and Yunus Emre checked in English + Arabic');
console.log('- canonical story text/title/image/audio/timing fields preserved, except the approved Yunus punctuation fix');
console.log('- every hotspot keeps canonical geometry and uses a short same-chapter source phrase/extract');
console.log('- chapter Word Notes >= 3; Vocabulary Challenge = 6 reviewed pairs');
console.log('- Knowledge Check = 8; Review Challenge = 8; Final Challenge = 10');
console.log('- Master Glossary = 12 + 12');
console.log('- Teacher Guide and Self-Study Guide = one section per story chapter');
console.log('- Grades 5–6 A2 learner-language rule enforced for English Self-Study material');
console.log('- misleading prophet-series metadata corrected for Yunus Emre and Bilal/Mecca');
