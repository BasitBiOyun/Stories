import assert from 'node:assert/strict';
import { adamA2Pages } from '../../src/data/adam/a2/en/pages';
import { adamA2PagesForLearning } from '../../src/data/adam/a2/en/learningMaterials';
import { adamA2TeacherGuide } from '../../src/data/adam/a2/en/teacherGuide';
import { adamA2SelfStudyGuide } from '../../src/data/adam/a2/en/selfStudyGuide';
import { adamA2FinalReviewExercises } from '../../src/data/adam/a2/en/exercises';

const invariantStoryFields = [
  'id',
  'type',
  'title',
  'subtitle',
  'content',
  'image',
  'audioUrl',
  'vocabulary',
  'hotspots',
  'animatedWords',
  'syncPoints',
  'timedChunks',
] as const;

assert.equal(adamA2PagesForLearning.length, adamA2Pages.length, 'Learning overlay must keep the same page count.');

for (let id = 1; id <= 10; id += 1) {
  const canonical = adamA2Pages.find((page) => page.id === id);
  const learning = adamA2PagesForLearning.find((page) => page.id === id);
  assert.ok(canonical, `Canonical story page ${id} is missing.`);
  assert.ok(learning, `Learning story page ${id} is missing.`);

  for (const field of invariantStoryFields) {
    assert.deepEqual(
      learning[field],
      canonical[field],
      `Adam A2 story page ${id} changed protected field ${field}.`,
    );
  }

  assert.equal(learning.exercises?.length, 1, `Story page ${id} must have exactly one Quick Challenge activity.`);
}

const knowledgeCheck = adamA2PagesForLearning.find((page) => page.id === 11);
assert.ok(knowledgeCheck, 'Knowledge Check page is missing.');
assert.equal(knowledgeCheck.exercises?.length, 8, 'Knowledge Check must contain exactly 8 reinforcement questions.');

const reviewQuiz = adamA2FinalReviewExercises.find((exercise) => exercise.type === 'quiz-game');
assert.ok(reviewQuiz, 'Review Challenge quiz-game is missing.');
assert.equal(reviewQuiz.quizQuestions?.length, 8, 'Review Challenge must contain exactly 8 questions (4 + 4 in print).');

const finalChallenge = adamA2PagesForLearning.find((page) => page.id === 16);
assert.ok(finalChallenge, 'Final Challenge page is missing.');
assert.equal(finalChallenge.exercises?.length, 10, 'Final Challenge must contain exactly 10 objective questions (5 + 5 in print).');
assert.ok(
  finalChallenge.exercises?.every((exercise) => exercise.type === 'multiple-choice' || exercise.type === 'true-false'),
  'Final Challenge questions must be objective multiple-choice or true-false items.',
);

assert.equal(adamA2TeacherGuide.length, 10, 'Teacher Guide must cover all 10 story chapters.');
assert.equal(adamA2SelfStudyGuide.length, 10, 'Self-Study Guide must cover all 10 story chapters.');

for (let index = 0; index < 10; index += 1) {
  assert.match(adamA2TeacherGuide[index].chapter, new RegExp(`^Chapter ${index + 1}:`), `Teacher Guide section ${index + 1} is not chapter-aligned.`);
  assert.match(adamA2SelfStudyGuide[index].chapter, new RegExp(`^Chapter ${index + 1}:`), `Self-Study Guide section ${index + 1} is not chapter-aligned.`);
}

console.log('Adam A2 learning-material contract: PASS');
console.log('- protected story text/image/audio/sync fields unchanged for Chapters 1–10');
console.log('- 10 chapter Quick Challenges');
console.log('- 8-question Knowledge Check');
console.log('- 8-question Review Challenge');
console.log('- 10-question Final Challenge');
console.log('- 10 Teacher Guide sections');
console.log('- 10 Self-Study Guide sections');
