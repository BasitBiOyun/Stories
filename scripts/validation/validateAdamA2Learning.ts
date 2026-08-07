import assert from 'node:assert/strict';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesForLearning } from '../../src/data/adam/a2/en/learningMaterials';
import {
  adamA2PagesQualityFinalized,
  adamA2TeacherGuideQualityFinalized,
} from '../../src/data/adam/a2/en/qualityFinalization';
import { adamA2SelfStudyGuide } from '../../src/data/adam/a2/en/selfStudyGuide';

const protectedStoryFields = [
  'id',
  'type',
  'title',
  'subtitle',
  'content',
  'image',
  'audioUrl',
  'hotspots',
  'animatedWords',
  'syncPoints',
  'timedChunks',
] as const;

const normalized = (value: string): string => value.toLowerCase().trim();

assert.equal(adamA2PagesForLearning.length, adamA2Pages.length, 'Learning overlay must keep the same page count.');
assert.equal(adamA2PagesQualityFinalized.length, adamA2Pages.length, 'Final quality layer must keep the same page count.');

for (let id = 1; id <= 10; id += 1) {
  const canonical = adamA2Pages.find((page) => page.id === id);
  const learning = adamA2PagesForLearning.find((page) => page.id === id);
  const finalized = adamA2PagesQualityFinalized.find((page) => page.id === id);

  assert.ok(canonical, `Canonical story page ${id} is missing.`);
  assert.ok(learning, `Learning story page ${id} is missing.`);
  assert.ok(finalized, `Finalized story page ${id} is missing.`);

  for (const field of protectedStoryFields) {
    assert.deepEqual(
      learning[field],
      canonical[field],
      `Adam A2 learning overlay changed protected field ${field} on story page ${id}.`,
    );
    assert.deepEqual(
      finalized[field],
      canonical[field],
      `Adam A2 final quality layer changed protected field ${field} on story page ${id}.`,
    );
  }

  assert.equal(finalized.exercises?.length, 1, `Story page ${id} must have exactly one Quick Challenge activity.`);
  assert.ok((finalized.vocabulary?.length ?? 0) >= 3, `Story page ${id} must contain at least three reviewed vocabulary items.`);

  const vocabularyWords = finalized.vocabulary?.map((entry) => normalized(entry.word)) ?? [];
  assert.equal(new Set(vocabularyWords).size, vocabularyWords.length, `Story page ${id} contains duplicate vocabulary entries.`);
  finalized.vocabulary?.forEach((entry) => {
    assert.ok(entry.word.trim(), `Story page ${id} contains an empty vocabulary word.`);
    assert.ok(entry.definition.trim(), `Story page ${id} vocabulary ${entry.word} has an empty definition.`);
  });

  canonical.animatedWords?.forEach((word) => {
    if (normalized(canonical.content).includes(normalized(word))) {
      assert.ok(
        vocabularyWords.includes(normalized(word)),
        `Story page ${id} highlighted word ${word} is missing from finalized Word Notes vocabulary.`,
      );
    }
  });
}

const knowledgeCheck = adamA2PagesQualityFinalized.find((page) => page.id === 11);
assert.ok(knowledgeCheck, 'Knowledge Check page is missing.');
assert.equal(knowledgeCheck.exercises?.length, 8, 'Knowledge Check must contain exactly 8 reinforcement questions.');

const reviewPage = adamA2PagesQualityFinalized.find((page) => page.id === 13);
assert.ok(reviewPage, 'Final Review page is missing.');
const reviewQuiz = reviewPage.exercises?.find((exercise) => exercise.type === 'quiz-game');
assert.ok(reviewQuiz, 'Review Challenge quiz-game is missing.');
assert.equal(reviewQuiz.quizQuestions?.length, 8, 'Review Challenge must contain exactly 8 questions (4 + 4 in print).');
const reflection = reviewPage.exercises?.find((exercise) => exercise.type === 'reflection');
assert.ok(reflection, 'Final Review reflection is missing.');
assert.ok(reflection.feedback.incorrect.trim(), 'Reflection guidance must not contain empty incorrect feedback.');

const finalChallenge = adamA2PagesQualityFinalized.find((page) => page.id === 16);
assert.ok(finalChallenge, 'Final Challenge page is missing.');
assert.equal(finalChallenge.exercises?.length, 10, 'Final Challenge must contain exactly 10 objective questions (5 + 5 in print).');
assert.ok(
  finalChallenge.exercises?.every((exercise) => exercise.type === 'multiple-choice' || exercise.type === 'true-false'),
  'Final Challenge questions must be objective multiple-choice or true-false items.',
);

const glossaryPart1 = adamA2PagesQualityFinalized.find((page) => page.id === 14);
const glossaryPart2 = adamA2PagesQualityFinalized.find((page) => page.id === 15);
assert.equal(glossaryPart1?.vocabulary?.length, 12, 'Master Glossary Part 1 must contain 12 selected key words.');
assert.equal(glossaryPart2?.vocabulary?.length, 12, 'Master Glossary Part 2 must contain 12 selected key words.');
const secondHalfGlossary = new Set(glossaryPart2?.vocabulary?.map((entry) => normalized(entry.word)) ?? []);
for (const requiredWord of ['crow', 'panic', 'worldwide']) {
  assert.ok(secondHalfGlossary.has(requiredWord), `Master Glossary Part 2 must include ${requiredWord} from later chapters.`);
}

assert.equal(adamA2TeacherGuideQualityFinalized.length, 10, 'Teacher Guide must cover all 10 story chapters.');
assert.equal(adamA2SelfStudyGuide.length, 10, 'Self-Study Guide must cover all 10 story chapters.');

for (let index = 0; index < 10; index += 1) {
  assert.match(adamA2TeacherGuideQualityFinalized[index].chapter, new RegExp(`^Chapter ${index + 1}:`), `Teacher Guide section ${index + 1} is not chapter-aligned.`);
  assert.equal(adamA2TeacherGuideQualityFinalized[index].extraResources, undefined, `Teacher Guide section ${index + 1} must not claim unsupplied worksheet resources.`);
  assert.match(adamA2SelfStudyGuide[index].chapter, new RegExp(`^Chapter ${index + 1}:`), `Self-Study Guide section ${index + 1} is not chapter-aligned.`);
}

console.log('Adam A2 English finalized learning-material contract: PASS');
console.log('- canonical story/chapter/image/audio/hotspot/highlight/sync fields unchanged for Chapters 1–10');
console.log('- reviewed A2 Word Notes vocabulary across all 10 chapters');
console.log('- selected Master Glossary covers both halves including late-story vocabulary');
console.log('- 10 chapter Quick Challenges');
console.log('- 8-question Knowledge Check');
console.log('- 8-question Review Challenge');
console.log('- 10-question Final Challenge');
console.log('- reflection feedback is learner-supportive and non-empty');
console.log('- 10 chapter-aligned Teacher Guide sections with no unsupplied worksheet claims');
console.log('- 10 chapter-aligned Self-Study Guide sections');