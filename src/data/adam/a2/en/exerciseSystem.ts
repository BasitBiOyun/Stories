import type { Exercise } from '../../../../types';
import {
  adamA2FinalChallengeExercises,
  adamA2KnowledgeCheckExercises,
  adamA2QuickChallenges,
  adamA2VocabularyChallengePairs,
} from './exercises';

/**
 * Active polished exercise system for Adam A2 English.
 * The legacy exercises.ts remains as the source for already-strong activities,
 * while weak items are replaced here without touching story prose.
 */
export const adamA2QuickChallengesPolished: Record<number, Exercise> = {
  ...adamA2QuickChallenges,
  3: {
    id: 'adam-a2-quick-3',
    type: 'matching',
    title: 'Origin, Knowledge and Value',
    instructions: 'Match each Chapter 3 idea with the detail that completes it.',
    question: 'How does Chapter 3 contrast origin with what truly makes a person valuable?',
    matchingPairs: [
      { left: "Iblis's origin", right: 'fire' },
      { left: "Adam's origin", right: 'soil' },
      { left: "Iblis's mistake", right: 'thinking his origin made him better' },
      { left: 'Useful knowledge', right: 'helps people do good and stop bad' },
    ],
    correctAnswer: {
      "Iblis's origin": 'fire',
      "Adam's origin": 'soil',
      "Iblis's mistake": 'thinking his origin made him better',
      'Useful knowledge': 'helps people do good and stop bad',
    },
    explanation: 'The chapter names fire and soil, but its main contrast is between pride in origin and the value of useful knowledge.',
    feedback: {
      correct: 'Correct. You connected the details with the chapter’s central contrast.',
      incorrect: 'Separate the two origins from the lesson about pride and useful knowledge.',
    },
  },
  8: {
    id: 'adam-a2-quick-8',
    type: 'matching',
    title: 'The Two Brothers and Their Offerings',
    instructions: 'Match each Chapter 8 detail with the correct brother or idea.',
    question: 'What work and offering does the chapter connect with each brother?',
    matchingPairs: [
      { left: "Habil's work", right: 'shepherd' },
      { left: "Qabil's work", right: 'farmer' },
      { left: "Habil's offering", right: 'his best and healthiest sheep' },
      { left: "Qabil's offering", right: 'a handful of his crops' },
    ],
    correctAnswer: {
      "Habil's work": 'shepherd',
      "Qabil's work": 'farmer',
      "Habil's offering": 'his best and healthiest sheep',
      "Qabil's offering": 'a handful of his crops',
    },
    explanation: 'The chapter introduces each brother’s work and then contrasts what each one chose to offer.',
    feedback: {
      correct: 'Correct. You connected both jobs and both offerings accurately.',
      incorrect: 'Reread Chapter 8 from the brothers’ jobs to the two offerings.',
    },
  },
};

export const adamA2KnowledgeCheckExercisesPolished: Exercise[] = adamA2KnowledgeCheckExercises.map(exercise => {
  if (exercise.id !== 'adam-a2-kc-4') return exercise;
  return {
    id: 'adam-a2-kc-4',
    type: 'true-false',
    title: 'The Tree Warning',
    instructions: 'Decide whether the statement agrees with Chapter 4.',
    question: 'Adam and Eve were free to go near every tree in Paradise.',
    correctAnswer: false,
    explanation: 'Chapter 4 gives one clear exception: they were told not to go near one tree.',
    feedback: {
      correct: 'Correct. You noticed the one restriction in the chapter.',
      incorrect: 'Reread the final warning in Chapter 4 and look for the one exception.',
    },
  };
});

export const adamA2VocabularyChallengePairsPolished = adamA2VocabularyChallengePairs;

// The existing Final Challenge already follows the locked A2 distribution
// (3 MC + 2 T/F + 2 matching + 2 fill blanks + 1 sequencing) and remains
// the whole-story mastery assessment. Language Review is wired separately.
export const adamA2FinalChallengeExercisesPolished: Exercise[] = adamA2FinalChallengeExercises;
