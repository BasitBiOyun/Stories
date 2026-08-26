import type { Exercise } from '../../../../types';
import {
  abrahamB1FinalChallengeExercises,
  abrahamB1KnowledgeCheckExercises,
  abrahamB1QuickChallenges,
  abrahamB1VocabularyChallengePairs,
} from './exercises';

export const abrahamB1QuickChallengesPolished = abrahamB1QuickChallenges;
export const abrahamB1KnowledgeCheckExercisesPolished = abrahamB1KnowledgeCheckExercises;
export const abrahamB1VocabularyChallengePairsPolished = abrahamB1VocabularyChallengePairs;

const finalOverrides: Record<string, Exercise> = {
  'abraham-b1-final-5': {
    id: 'abraham-b1-final-5',
    type: 'true-false',
    title: 'Hajj and Memory',
    instructions: 'Decide whether the statement agrees with Chapter 13.',
    question: 'The story presents Hajj as a later practice with no connection to events involving Abraham and his family.',
    correctAnswer: false,
    explanation: 'Chapter 13 explicitly connects Hajj with events involving Abraham and his family.',
    feedback: {
      correct: 'Correct. The story links Hajj with their remembered actions and experiences.',
      incorrect: 'Find the sentence about Hajj after the Ka’ba is rebuilt and note whose events it recalls.',
    },
  },
  'abraham-b1-final-6': {
    id: 'abraham-b1-final-6',
    type: 'matching',
    title: 'Evidence and Interpretation',
    instructions: 'Match each detail with what it shows in the story.',
    question: 'What does each piece of evidence help the reader understand?',
    matchingPairs: [
      { left: 'People could not approach the fire', right: 'shows that the punishment itself created extreme physical danger' },
      { left: 'Birds could not fly over the flames', right: 'shows how intense the heat became' },
      { left: 'The people were shocked by the miracle but their anger remained', right: 'shows that amazement did not end their opposition' },
    ],
    correctAnswer: {
      'People could not approach the fire': 'shows that the punishment itself created extreme physical danger',
      'Birds could not fly over the flames': 'shows how intense the heat became',
      'The people were shocked by the miracle but their anger remained': 'shows that amazement did not end their opposition',
    },
    explanation: 'The first two details establish the severity of the danger; the third separates amazement at the miracle from a genuine change of belief.',
    feedback: {
      correct: 'Correct. You connected evidence to interpretation rather than only recalling events.',
      incorrect: 'Use the danger details in Chapter 8 and the people’s reaction at the start of Chapter 9.',
    },
  },
  'abraham-b1-final-7': {
    id: 'abraham-b1-final-7',
    type: 'matching',
    title: 'Action and Continuity',
    instructions: 'Match each action with the later meaning or result stated in the story.',
    question: 'How do these actions continue beyond the immediate moment?',
    matchingPairs: [
      { left: 'Hagar runs between the two hills seven times', right: 'is remembered as sa’y in Hajj and Umrah' },
      { left: 'People settle near Zamzam', right: 'the barren valley develops into the growing settlement of Mecca' },
      { left: 'Abraham and Ishmael find the old foundations', right: 'they build the Ka’ba on the earlier base' },
    ],
    correctAnswer: {
      'Hagar runs between the two hills seven times': 'is remembered as sa’y in Hajj and Umrah',
      'People settle near Zamzam': 'the barren valley develops into the growing settlement of Mecca',
      'Abraham and Ishmael find the old foundations': 'they build the Ka’ba on the earlier base',
    },
    explanation: 'The final chapters connect immediate actions with later settlement, worship, and continuing religious memory.',
    feedback: {
      correct: 'Correct. You connected actions with their longer-term consequences and meaning.',
      incorrect: 'Review the end of Chapter 11 and Chapters 12–13, then match each action with what follows from it.',
    },
  },
};

export const abrahamB1FinalChallengeExercisesPolished: Exercise[] =
  abrahamB1FinalChallengeExercises.map(exercise => finalOverrides[exercise.id] ?? exercise);
