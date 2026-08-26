import type { Exercise } from '../../../../types';
import {
  adamB2FinalChallengeExercises,
  adamB2KnowledgeCheckExercises,
  adamB2QuickChallenges,
  adamB2VocabularyChallengePairs,
} from './exercises';

/** Active polished Adam B2 English exercise system. */
export const adamB2QuickChallengesPolished: Record<number, Exercise> = {
  ...adamB2QuickChallenges,
  3: {
    id: 'adam-b2-qc-3',
    type: 'matching',
    title: 'Knowledge and Human Capacity',
    instructions: 'Match each textual idea with the role the chapter gives it.',
    question: 'How does Chapter 3 connect knowledge with human capacity?',
    matchingPairs: [
      { left: 'Learning the names', right: 'capacity for language, reasoning, culture, and civilization' },
      { left: 'The angels admit their limits', right: 'knowledge is shown as a gift rather than self-created superiority' },
      { left: 'Adam identifies what he has learned', right: 'knowledge becomes demonstrated ability rather than an abstract possession' },
    ],
    correctAnswer: {
      'Learning the names': 'capacity for language, reasoning, culture, and civilization',
      'The angels admit their limits': 'knowledge is shown as a gift rather than self-created superiority',
      'Adam identifies what he has learned': 'knowledge becomes demonstrated ability rather than an abstract possession',
    },
    explanation: 'The chapter links taught knowledge with wider human capacities, while the dialogue also shows both the limits and the demonstrated use of knowledge.',
    feedback: { correct: 'Correct.', incorrect: 'Separate what is taught, what the angels acknowledge, and what Adam is then able to demonstrate.' },
  },
  9: {
    id: 'adam-b2-qc-9',
    type: 'matching',
    title: 'Repentance as a Process',
    instructions: 'Match each response with what it shows.',
    question: 'How does Chapter 9 define moral recovery?',
    matchingPairs: [
      { left: 'Recognizing the wrong', right: 'the person searches for fault within the self rather than protecting pride' },
      { left: 'Turning immediately to Allah', right: 'repentance becomes an active change of direction' },
      { left: 'Continuing under guidance', right: 'recovery becomes a renewed pattern of responsible action rather than a moment of regret' },
    ],
    correctAnswer: {
      'Recognizing the wrong': 'the person searches for fault within the self rather than protecting pride',
      'Turning immediately to Allah': 'repentance becomes an active change of direction',
      'Continuing under guidance': 'recovery becomes a renewed pattern of responsible action rather than a moment of regret',
    },
    explanation: 'The chapter presents recovery as recognition, return, and a renewed direction shaped by guidance.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the movement from admitting fault to returning and then living differently under guidance.' },
  },
  16: {
    id: 'adam-b2-qc-16',
    type: 'matching',
    title: 'A Prophetic Legacy',
    instructions: 'Match each final action with its meaning in the chapter.',
    question: 'How does Adam prepare later generations before his death?',
    matchingPairs: [
      { left: 'Appoints Seth as successor', right: 'guidance is entrusted to continue after Adam' },
      { left: 'Teaches worship and responsibility', right: 'the next generation receives practices as well as authority' },
      { left: 'Warns about Iblis and future prophets', right: 'later generations receive both a warning and a promise of continuing guidance' },
    ],
    correctAnswer: {
      'Appoints Seth as successor': 'guidance is entrusted to continue after Adam',
      'Teaches worship and responsibility': 'the next generation receives practices as well as authority',
      'Warns about Iblis and future prophets': 'later generations receive both a warning and a promise of continuing guidance',
    },
    explanation: 'The chapter presents legacy as succession, teaching, warning, and confidence that guidance will continue.',
    feedback: { correct: 'Correct.', incorrect: 'Separate who receives responsibility, what is taught, and what Adam says about future guidance.' },
  },
};

export const adamB2KnowledgeCheckExercisesPolished: Exercise[] = adamB2KnowledgeCheckExercises;
export const adamB2VocabularyChallengePairsPolished = adamB2VocabularyChallengePairs;

export const adamB2FinalChallengeExercisesPolished: Exercise[] = adamB2FinalChallengeExercises.map(exercise => {
  if (exercise.id === 'adam-b2-final-8') {
    return {
      id: 'adam-b2-final-8',
      type: 'fill-blanks',
      title: 'Final Challenge 8',
      instructions: 'Complete the whole-book synthesis with the most precise concept.',
      question: 'What principle repeatedly connects human freedom with moral consequence across the book?',
      fillBlanksText: 'Across the story, the freedom to choose is repeatedly linked with [blank], because decisions lead to moral consequences and require an answer from the person who makes them.',
      correctAnswer: 'accountability',
      explanation: 'From Iblis and Adam to Habil and Qabil, the book repeatedly connects choice with responsibility for what follows.',
      feedback: { correct: 'Correct.', incorrect: 'Think about what the book repeatedly places beside moral choice when actions lead to consequences.' },
    };
  }
  return exercise;
});
