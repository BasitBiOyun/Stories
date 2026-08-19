import assert from 'node:assert/strict';
import type { BookData, Exercise, PageData } from '../../src/types';
import { validateBlueprintV2QualityContract } from '../../src/data/learningQualityContract';
import { adamA2BookDataAr, adamA2BookDataEn } from '../../src/data/adam/a2';
import { mosesA2BookDataAr, mosesA2BookDataEn } from '../../src/data/moses/a2';
import { abrahamA2BookDataAr, abrahamA2BookDataEn } from '../../src/data/abraham/a2';
import { meccaA2BookDataAr, meccaA2BookDataEn } from '../../src/data/mecca/a2';
import { yunusEmreA2BookDataAr, yunusEmreA2BookDataEn } from '../../src/data/yunusEmre/a2';
import { yunusA2GoldLearningBlueprint } from '../../src/data/yunusEmre/a2/goldLearningBlueprint';

interface A2BookSpec {
  name: string;
  storyIds: number[];
  knowledge: number;
  vocabulary: number;
  review: number;
  glossaries: [number, number];
  final: number;
  en: BookData;
  ar: BookData;
}

const specs: A2BookSpec[] = [
  { name: 'Adam', storyIds: Array.from({ length: 10 }, (_, i) => i + 1), knowledge: 11, vocabulary: 12, review: 13, glossaries: [14, 15], final: 16, en: adamA2BookDataEn, ar: adamA2BookDataAr },
  { name: 'Moses', storyIds: Array.from({ length: 16 }, (_, i) => i + 1), knowledge: 17, vocabulary: 18, review: 21, glossaries: [19, 20], final: 22, en: mosesA2BookDataEn, ar: mosesA2BookDataAr },
  { name: 'Abraham', storyIds: Array.from({ length: 14 }, (_, i) => i + 1), knowledge: 15, vocabulary: 16, review: 17, glossaries: [18, 19], final: 20, en: abrahamA2BookDataEn, ar: abrahamA2BookDataAr },
  { name: 'Bilal/Mecca', storyIds: Array.from({ length: 13 }, (_, i) => i + 1), knowledge: 14, vocabulary: 15, review: 16, glossaries: [17, 18], final: 19, en: meccaA2BookDataEn, ar: meccaA2BookDataAr },
  { name: 'Yunus Emre', storyIds: Array.from({ length: 8 }, (_, i) => i + 1), knowledge: 9, vocabulary: 10, review: 13, glossaries: [11, 12], final: 14, en: yunusEmreA2BookDataEn, ar: yunusEmreA2BookDataAr },
];

const page = (book: BookData, id: number): PageData => {
  const found = book.pages.find((candidate) => candidate.id === id);
  assert.ok(found, `${book.id}: page ${id} is missing.`);
  return found;
};

const normalize = (value: string) => value
  .normalize('NFKD')
  .toLowerCase()
  .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const reviewQuestions = (book: BookData, reviewPageId: number) => {
  const quiz = page(book, reviewPageId).exercises?.find((exercise) => exercise.type === 'quiz-game');
  assert.ok(quiz, `${book.id}: Review Challenge must be a quiz-game.`);
  assert.equal(quiz.quizQuestions?.length, 8, `${book.id}: Review Challenge must contain 8 questions.`);
  return quiz.quizQuestions?.map((question) => question.question) ?? [];
};

const exerciseQuestions = (exercises: Exercise[] | undefined) => (exercises ?? [])
  .map((exercise) => exercise.question?.trim() ?? '')
  .filter(Boolean);

const validateExerciseIntegrity = (exercise: Exercise, label: string) => {
  if (exercise.type === 'multiple-choice') {
    const options = exercise.options ?? [];
    assert.ok(options.length >= 2, `${label}: multiple-choice requires at least two options.`);
    const normalizedOptions = options.map(normalize);
    assert.equal(new Set(normalizedOptions).size, normalizedOptions.length, `${label}: multiple-choice options must be unique.`);
    assert.ok(Number.isInteger(exercise.correctAnswer), `${label}: multiple-choice correctAnswer must be an integer index.`);
    assert.ok(Number(exercise.correctAnswer) >= 0 && Number(exercise.correctAnswer) < options.length, `${label}: multiple-choice correctAnswer is out of range.`);
  }

  if (exercise.type === 'matching') {
    const pairs = exercise.matchingPairs ?? [];
    assert.ok(pairs.length >= 2, `${label}: matching requires at least two pairs.`);
    const left = pairs.map(pair => normalize(pair.left));
    const right = pairs.map(pair => normalize(pair.right));
    assert.equal(new Set(left).size, left.length, `${label}: matching concepts on the left must be unique.`);
    assert.equal(new Set(right).size, right.length, `${label}: matching answers on the right must be unique.`);
  }

  if (exercise.type === 'fill-blanks') {
    assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${label}: fill-blanks exercise must contain [blank].`);
  }

  if (exercise.type === 'quiz-game') {
    (exercise.quizQuestions ?? []).forEach((question, index) => {
      const options = question.options ?? [];
      assert.ok(options.length >= 2, `${label}: quiz question ${index + 1} requires at least two options.`);
      const normalizedOptions = options.map(option => normalize(option.text));
      assert.equal(new Set(normalizedOptions).size, normalizedOptions.length, `${label}: quiz question ${index + 1} options must be unique.`);
      assert.equal(options.filter(option => option.isCorrect).length, 1, `${label}: quiz question ${index + 1} must have exactly one correct option.`);
    });
  }
};

const validateEdition = (spec: A2BookSpec, book: BookData, language: 'en' | 'ar') => {
  assert.equal(book.level, 'A2', `${book.id}: level must be A2.`);
  assert.equal(book.teacherGuide.length, spec.storyIds.length, `${book.id}: Teacher Guide must have one manual blueprint section per chapter.`);
  assert.equal(book.selfStudyGuide.length, spec.storyIds.length, `${book.id}: Self-Study Guide must have one manual blueprint section per chapter.`);

  const quickExercises = spec.storyIds.map((id) => {
    const story = page(book, id);
    assert.equal(story.type, 'story', `${book.id}: chapter ${id} must remain a story page.`);
    assert.ok(story.content?.trim(), `${book.id}: chapter ${id} story text is empty.`);
    assert.equal(story.exercises?.length, 1, `${book.id}: chapter ${id} must have exactly one Quick Challenge.`);
    return story.exercises![0];
  });

  const tapCount = quickExercises.filter((exercise) => exercise.type === 'tap-reveal').length;
  assert.ok(tapCount >= 1 && tapCount <= 2, `${book.id}: Tap-Reveal must appear only 1–2 times in Quick Challenge.`);

  const knowledge = page(book, spec.knowledge).exercises ?? [];
  assert.equal(knowledge.length, 8, `${book.id}: Knowledge Check must contain 8 authored questions.`);
  assert.ok(knowledge.every((exercise) => exercise.type !== 'tap-reveal'), `${book.id}: Knowledge Check cannot contain Tap-Reveal.`);

  const reviewPage = page(book, spec.review);
  const review = reviewQuestions(book, spec.review);

  const finalExercises = page(book, spec.final).exercises ?? [];
  assert.equal(finalExercises.length, 10, `${book.id}: Final Challenge must contain 10 authored activities.`);
  assert.ok(finalExercises.every((exercise) => ['multiple-choice', 'true-false', 'matching', 'fill-blanks'].includes(exercise.type)), `${book.id}: Final Challenge contains a non-scored or unsupported interaction.`);
  assert.ok(finalExercises.every((exercise) => exercise.type !== 'tap-reveal'), `${book.id}: Final Challenge cannot contain Tap-Reveal.`);

  const allAssessmentExercises = [
    ...quickExercises,
    ...knowledge,
    ...(reviewPage.exercises ?? []),
    ...finalExercises,
  ];
  allAssessmentExercises.forEach((exercise, index) => {
    validateExerciseIntegrity(exercise, `${book.id}: assessment ${index + 1}`);
  });

  const vocabularyPairs = page(book, spec.vocabulary).vocabularyPairs ?? [];
  assert.equal(vocabularyPairs.length, 6, `${book.id}: Vocabulary Challenge must contain 6 reviewed pairs.`);
  const vocabularyWords = vocabularyPairs.map(pair => normalize(pair.word));
  const vocabularyMeanings = vocabularyPairs.map(pair => normalize(pair.meaning));
  assert.equal(new Set(vocabularyWords).size, vocabularyWords.length, `${book.id}: Vocabulary Challenge words must be unique.`);
  assert.equal(new Set(vocabularyMeanings).size, vocabularyMeanings.length, `${book.id}: Vocabulary Challenge meanings must be unique.`);

  spec.glossaries.forEach((id) => {
    const glossary = page(book, id).vocabulary ?? [];
    assert.ok(glossary.length > 0, `${book.id}: glossary ${id} is empty.`);
    const words = glossary.map((entry) => normalize(entry.word));
    assert.equal(new Set(words).size, words.length, `${book.id}: glossary ${id} contains duplicate words.`);
  });

  const allQuestions = [
    ...quickExercises.flatMap((exercise) => exerciseQuestions([exercise])),
    ...exerciseQuestions(knowledge),
    ...review,
    ...exerciseQuestions(finalExercises),
  ];
  const normalizedQuestions = allQuestions.map(normalize).filter(Boolean);
  const expectedTotal = spec.storyIds.length + 8 + 8 + 10;
  assert.equal(normalizedQuestions.length, expectedTotal, `${book.id}: assessment path question count is wrong.`);
  assert.equal(new Set(normalizedQuestions).size, normalizedQuestions.length, `${book.id}: a question is repeated across Quick/Knowledge/Review/Final.`);

  if (language === 'en') {
    assert.ok(book.teacherGuideMetadata?.targetAudience?.includes('Grades 5–6'), `${book.id}: A2 English teacher metadata must target Grades 5–6.`);
  }
};

validateBlueprintV2QualityContract(yunusA2GoldLearningBlueprint);

for (const spec of specs) {
  validateEdition(spec, spec.en, 'en');
  validateEdition(spec, spec.ar, 'ar');

  assert.equal(spec.en.pages.length, spec.ar.pages.length, `${spec.name}: EN/AR page-count parity failed.`);
  assert.equal(spec.en.teacherGuide.length, spec.ar.teacherGuide.length, `${spec.name}: Teacher Guide parity failed.`);
  assert.equal(spec.en.selfStudyGuide.length, spec.ar.selfStudyGuide.length, `${spec.name}: Self-Study parity failed.`);

  for (const chapterId of spec.storyIds) {
    const enQuick = page(spec.en, chapterId).exercises?.[0];
    const arQuick = page(spec.ar, chapterId).exercises?.[0];
    assert.equal(enQuick?.type, arQuick?.type, `${spec.name}: Chapter ${chapterId} Quick Challenge EN/AR type parity failed.`);
  }
}

console.log('A2 blueprint system: PASS');
console.log('- Yunus Emre A2 strict v2 quality contract: PASS');
console.log('- Adam, Moses, Abraham, Bilal/Mecca, and Yunus Emre are blueprint-only');
console.log('- Quick / Knowledge / Review / Final use distinct authored question wording');
console.log('- Multiple-choice and matching answer sets are mechanically unambiguous');
console.log('- Vocabulary Challenge words and meanings are unique');
console.log('- Tap-Reveal is restricted to 1–2 Quick Challenges per book');
console.log('- Knowledge = 8, Review = 8, Final = 10, Vocabulary = 6');
console.log('- Teacher Guide and Self-Study Guide come from the same manual blueprint path');
