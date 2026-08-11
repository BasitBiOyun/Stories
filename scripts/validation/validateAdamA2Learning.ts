import assert from 'node:assert/strict';
import type { PageData, TeacherGuideSection } from '../../src/types';

import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesForLearning } from '../../src/data/adam/a2/en/learningMaterials';
import { adamA2PagesQualityFinalized, adamA2TeacherGuideQualityFinalized } from '../../src/data/adam/a2/en/qualityFinalization';
import { adamA2SelfStudyGuide } from '../../src/data/adam/a2/en/selfStudyGuide';

import { adamA2PagesAr } from '../../src/data/adam/a2/ar/pages';
import { adamA2PagesArForLearning } from '../../src/data/adam/a2/ar/learningMaterials';
import { adamA2PagesArQualityFinalized, adamA2TeacherGuideArQualityFinalized } from '../../src/data/adam/a2/ar/qualityFinalization';
import { adamA2SelfStudyGuideAr } from '../../src/data/adam/a2/ar/selfStudyGuide';
import { adamA2HotspotsGoldAr, adamA2HotspotsGoldEn } from '../../src/data/adam/a2/hotspotsGold';

const protectedStoryFields = [
  'id', 'type', 'title', 'subtitle', 'image', 'audioUrl',
  'animatedWords', 'syncPoints',
] as const;

const applyApprovedAdamMechanicalFixes = (value: string, pageId: number, language: 'en' | 'ar'): string => {
  if (language !== 'en') return value;
  if (pageId === 7) return value.replaceAll('They had also lots of children.', 'They also had lots of children.');
  if (pageId === 9) return value.replaceAll('his brother dead body', "his brother's dead body");
  return value;
};

const normalized = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '')
  .trim();

const words = (value: string): number => value.trim().split(/\s+/).filter(Boolean).length;

const validateLanguage = ({
  label,
  language,
  canonicalPages,
  learningPages,
  finalizedPages,
  teacherGuide,
  selfStudyGuide,
  teacherChapterPattern,
  selfStudyChapterPattern,
  requiredLateGlossaryWords,
  hotspotMap,
}: {
  label: string;
  language: 'en' | 'ar';
  canonicalPages: PageData[];
  learningPages: PageData[];
  finalizedPages: PageData[];
  teacherGuide: TeacherGuideSection[];
  selfStudyGuide: TeacherGuideSection[];
  teacherChapterPattern: (index: number) => RegExp;
  selfStudyChapterPattern: (index: number) => RegExp;
  requiredLateGlossaryWords: string[];
  hotspotMap: Record<string, { title: string; description: string }>;
}) => {
  assert.equal(learningPages.length, canonicalPages.length, `${label}: learning overlay must keep the same page count.`);
  assert.equal(finalizedPages.length, canonicalPages.length, `${label}: final quality layer must keep the same page count.`);

  const expectedHotspotIds = new Set<string>();

  for (let id = 1; id <= 10; id += 1) {
    const canonical = canonicalPages.find((page) => page.id === id);
    const learning = learningPages.find((page) => page.id === id);
    const finalized = finalizedPages.find((page) => page.id === id);

    assert.ok(canonical, `${label}: canonical story page ${id} is missing.`);
    assert.ok(learning, `${label}: learning story page ${id} is missing.`);
    assert.ok(finalized, `${label}: finalized story page ${id} is missing.`);

    for (const field of protectedStoryFields) {
      assert.deepEqual(learning[field], canonical[field], `${label}: learning overlay changed protected field ${field} on page ${id}.`);
      assert.deepEqual(finalized[field], canonical[field], `${label}: final quality layer changed protected field ${field} on page ${id}.`);
    }

    assert.equal(learning.content, canonical.content, `${label}: learning overlay changed canonical content on page ${id}.`);
    assert.deepEqual(learning.timedChunks, canonical.timedChunks, `${label}: learning overlay changed timed chunks on page ${id}.`);
    assert.equal(
      finalized.content,
      applyApprovedAdamMechanicalFixes(canonical.content, id, language),
      `${label}: finalized content differs from canonical text beyond approved mechanical fixes on page ${id}.`,
    );
    assert.deepEqual(
      finalized.timedChunks,
      canonical.timedChunks?.map(chunk => ({
        ...chunk,
        text: applyApprovedAdamMechanicalFixes(chunk.text, id, language),
      })),
      `${label}: finalized timed chunks differ beyond approved mechanical fixes on page ${id}.`,
    );

    // Hotspot geometry remains canonical; only reviewed title/description copy may change.
    assert.deepEqual(learning.hotspots, canonical.hotspots, `${label}: learning overlay must not change canonical hotspot data before final review.`);
    const originalHotspots = canonical.hotspots || [];
    const finalHotspots = finalized.hotspots || [];
    assert.equal(finalHotspots.length, originalHotspots.length, `${label}: hotspot count changed on page ${id}.`);
    originalHotspots.forEach((hotspot, index) => {
      expectedHotspotIds.add(hotspot.id);
      const current = finalHotspots[index];
      const reviewed = hotspotMap[hotspot.id];
      assert.ok(reviewed, `${label}: hotspot ${hotspot.id} was not reviewed.`);
      assert.equal(current.id, hotspot.id, `${label}: hotspot id changed on page ${id}.`);
      assert.equal(current.x, hotspot.x, `${label}: hotspot x changed for ${hotspot.id}.`);
      assert.equal(current.y, hotspot.y, `${label}: hotspot y changed for ${hotspot.id}.`);
      assert.equal(current.title, reviewed.title, `${label}: hotspot ${hotspot.id} does not use reviewed title copy.`);
      assert.equal(current.description, reviewed.description, `${label}: hotspot ${hotspot.id} does not use reviewed description copy.`);
      assert.ok(current.title.trim() && current.description.trim(), `${label}: hotspot ${hotspot.id} contains empty copy.`);
      assert.ok(
        words(current.description) <= (language === 'en' ? 28 : 34),
        `${label}: hotspot ${hotspot.id} is too long for A2.`,
      );
    });

    assert.equal(finalized.exercises?.length, 1, `${label}: story page ${id} must have exactly one Quick Challenge.`);
    assert.ok((finalized.vocabulary?.length ?? 0) >= 3, `${label}: story page ${id} must contain at least three reviewed vocabulary items.`);

    const vocabularyWords = finalized.vocabulary?.map((entry) => normalized(entry.word)) ?? [];
    assert.equal(new Set(vocabularyWords).size, vocabularyWords.length, `${label}: story page ${id} contains duplicate vocabulary entries.`);
    finalized.vocabulary?.forEach((entry) => {
      assert.ok(entry.word.trim(), `${label}: story page ${id} contains an empty vocabulary word.`);
      assert.ok(entry.definition.trim(), `${label}: story page ${id} vocabulary ${entry.word} has an empty definition.`);
    });
  }

  assert.deepEqual(new Set(Object.keys(hotspotMap)), expectedHotspotIds, `${label}: hotspot review map must exactly cover canonical hotspot IDs.`);

  const knowledgeCheck = finalizedPages.find((page) => page.id === 11);
  assert.ok(knowledgeCheck, `${label}: Knowledge Check page is missing.`);
  assert.equal(knowledgeCheck.exercises?.length, 8, `${label}: Knowledge Check must contain exactly 8 questions.`);

  const vocabularyChallenge = finalizedPages.find((page) => page.id === 12);
  assert.equal(vocabularyChallenge?.vocabularyPairs?.length, 6, `${label}: Vocabulary Challenge must contain exactly 6 reviewed pairs.`);

  const reviewPage = finalizedPages.find((page) => page.id === 13);
  assert.ok(reviewPage, `${label}: Final Review page is missing.`);
  const reviewQuiz = reviewPage.exercises?.find((exercise) => exercise.type === 'quiz-game');
  assert.ok(reviewQuiz, `${label}: Review Challenge quiz-game is missing.`);
  assert.equal(reviewQuiz.quizQuestions?.length, 8, `${label}: Review Challenge must contain exactly 8 questions.`);
  const reflection = reviewPage.exercises?.find((exercise) => exercise.type === 'reflection');
  assert.ok(reflection, `${label}: Final Review reflection is missing.`);
  assert.ok(reflection.feedback.incorrect.trim(), `${label}: reflection guidance must not contain empty incorrect feedback.`);

  const finalChallenge = finalizedPages.find((page) => page.id === 16);
  assert.ok(finalChallenge, `${label}: Final Challenge page is missing.`);
  assert.equal(finalChallenge.exercises?.length, 10, `${label}: Final Challenge must contain exactly 10 questions.`);
  assert.ok(
    finalChallenge.exercises?.every((exercise) => exercise.type === 'multiple-choice' || exercise.type === 'true-false'),
    `${label}: Final Challenge questions must be objective multiple-choice or true-false items.`,
  );

  const glossaryPart1 = finalizedPages.find((page) => page.id === 14);
  const glossaryPart2 = finalizedPages.find((page) => page.id === 15);
  assert.equal(glossaryPart1?.vocabulary?.length, 12, `${label}: Master Glossary Part 1 must contain 12 selected words.`);
  assert.equal(glossaryPart2?.vocabulary?.length, 12, `${label}: Master Glossary Part 2 must contain 12 selected words.`);
  const secondHalfGlossary = new Set(glossaryPart2?.vocabulary?.map((entry) => normalized(entry.word)) ?? []);
  for (const requiredWord of requiredLateGlossaryWords) {
    assert.ok(secondHalfGlossary.has(normalized(requiredWord)), `${label}: Master Glossary Part 2 must include ${requiredWord}.`);
  }

  assert.equal(teacherGuide.length, 10, `${label}: Teacher Guide must cover all 10 chapters.`);
  assert.equal(selfStudyGuide.length, 10, `${label}: Self-Study Guide must cover all 10 chapters.`);
  for (let index = 0; index < 10; index += 1) {
    assert.match(teacherGuide[index].chapter, teacherChapterPattern(index), `${label}: Teacher Guide section ${index + 1} is not chapter-aligned.`);
    assert.equal(teacherGuide[index].extraResources, undefined, `${label}: Teacher Guide section ${index + 1} must not claim unsupplied worksheets.`);
    assert.match(selfStudyGuide[index].chapter, selfStudyChapterPattern(index), `${label}: Self-Study Guide section ${index + 1} is not chapter-aligned.`);
  }
};

validateLanguage({
  label: 'Adam A2 English',
  language: 'en',
  canonicalPages: adamA2Pages,
  learningPages: adamA2PagesForLearning,
  finalizedPages: adamA2PagesQualityFinalized,
  teacherGuide: adamA2TeacherGuideQualityFinalized,
  selfStudyGuide: adamA2SelfStudyGuide,
  teacherChapterPattern: (index) => new RegExp(`^Chapter ${index + 1}:`),
  selfStudyChapterPattern: (index) => new RegExp(`^Chapter ${index + 1}:`),
  requiredLateGlossaryWords: ['crow', 'panic', 'worldwide'],
  hotspotMap: adamA2HotspotsGoldEn,
});

validateLanguage({
  label: 'Adam A2 Arabic',
  language: 'ar',
  canonicalPages: adamA2PagesAr,
  learningPages: adamA2PagesArForLearning,
  finalizedPages: adamA2PagesArQualityFinalized,
  teacherGuide: adamA2TeacherGuideArQualityFinalized,
  selfStudyGuide: adamA2SelfStudyGuideAr,
  teacherChapterPattern: (index) => new RegExp(`^الفصل ${index + 1}:`),
  selfStudyChapterPattern: (index) => new RegExp(`^الفصل ${index + 1}:`),
  requiredLateGlossaryWords: ['غراب', 'يحفر', 'الحسد'],
  hotspotMap: adamA2HotspotsGoldAr,
});

// EN–AR parity: equivalent structure and cognitive load, not literal translation.
for (let id = 1; id <= 10; id += 1) {
  const en = adamA2PagesQualityFinalized.find((page) => page.id === id);
  const ar = adamA2PagesArQualityFinalized.find((page) => page.id === id);
  assert.equal(en?.exercises?.length, ar?.exercises?.length, `EN–AR parity: chapter ${id} Quick Challenge count differs.`);
  assert.equal(en?.hotspots?.length, ar?.hotspots?.length, `EN–AR parity: chapter ${id} hotspot count differs.`);
}
assert.equal(
  adamA2PagesQualityFinalized.find((page) => page.id === 11)?.exercises?.length,
  adamA2PagesArQualityFinalized.find((page) => page.id === 11)?.exercises?.length,
  'EN–AR parity: Knowledge Check count differs.',
);
assert.equal(
  adamA2PagesQualityFinalized.find((page) => page.id === 13)?.exercises?.find((exercise) => exercise.type === 'quiz-game')?.quizQuestions?.length,
  adamA2PagesArQualityFinalized.find((page) => page.id === 13)?.exercises?.find((exercise) => exercise.type === 'quiz-game')?.quizQuestions?.length,
  'EN–AR parity: Review Challenge count differs.',
);
assert.equal(
  adamA2PagesQualityFinalized.find((page) => page.id === 16)?.exercises?.length,
  adamA2PagesArQualityFinalized.find((page) => page.id === 16)?.exercises?.length,
  'EN–AR parity: Final Challenge count differs.',
);

console.log('Adam A2 English + Arabic finalized learning-material contract: PASS');
console.log('- canonical story/chapter/image/audio/sync fields preserved in both languages');
console.log('- only the approved Adam A2 mechanical prose/timing corrections are permitted');
console.log('- every hotspot reviewed; ids and coordinates preserved');
console.log('- 10 chapter Quick Challenges per language');
console.log('- 8-question Knowledge Check per language');
console.log('- 6-pair Vocabulary Challenge per language');
console.log('- 8-question Review Challenge per language');
console.log('- 10-question Final Challenge per language');
console.log('- reviewed A2 vocabulary and two-part Master Glossary per language');
console.log('- 10 chapter-aligned Teacher Guide sections per language');
console.log('- 10 chapter-aligned Self-Study Guide sections per language');
console.log('- EN–AR structure parity enforced without requiring literal translation');
