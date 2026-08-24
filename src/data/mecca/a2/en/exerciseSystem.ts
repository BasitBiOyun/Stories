import type { Exercise } from '../../../../types';
import {
  meccaA2FinalChallengeExercises,
  meccaA2QuickChallenges,
  meccaA2VocabularyChallengePairs,
} from './exercises';
import { meccaA2KnowledgeCheckExercises } from './knowledgeCheck';

/** Active polished Bilal / Mecca A2 English exercise system. */
export const meccaA2QuickChallengesPolished: Record<number, Exercise> = {
  ...meccaA2QuickChallenges,
  1: {
    id: 'mecca-a2-quick-1', type: 'matching', title: 'Bilal’s Place',
    instructions: 'Match each Chapter 1 idea with the detail that supports it.',
    question: 'What does Chapter 1 establish about Bilal and his story?',
    matchingPairs: [
      { left: 'Beginning', right: 'Bilal was born in Mecca into slavery' },
      { left: 'Historic role', right: 'Bilal became the first person to call the Adhan in Islamic history' },
      { left: 'Human value', right: 'skin color or slavery does not make a person less valuable' },
    ],
    correctAnswer: {
      Beginning: 'Bilal was born in Mecca into slavery',
      'Historic role': 'Bilal became the first person to call the Adhan in Islamic history',
      'Human value': 'skin color or slavery does not make a person less valuable',
    },
    explanation: 'Chapter 1 connects Bilal’s difficult beginning with his later historic role and the lesson about human value.',
    feedback: { correct: 'Correct.', incorrect: 'Use the opening and closing ideas of Chapter 1.' },
  },
  4: {
    id: 'mecca-a2-quick-4', type: 'matching', title: 'Work and Treatment',
    instructions: 'Match each part of Bilal’s daily life with the chapter evidence.',
    question: 'What made Bilal’s daily life difficult?',
    matchingPairs: [
      { left: 'Daytime work', right: 'he cared for camels under the hot sun' },
      { left: 'Evening duty', right: 'he brought food and wine to his master' },
      { left: 'Treatment', right: 'the family was rude and did not respect him' },
    ],
    correctAnswer: {
      'Daytime work': 'he cared for camels under the hot sun',
      'Evening duty': 'he brought food and wine to his master',
      Treatment: 'the family was rude and did not respect him',
    },
    explanation: 'The chapter shows hard work, evening duties and disrespect together.',
    feedback: { correct: 'Correct.', incorrect: 'Separate Bilal’s work from the way the family treated him.' },
  },
  10: {
    id: 'mecca-a2-quick-10', type: 'matching', title: 'Bought and Freed',
    instructions: 'Match each Chapter 10 event with the correct detail or result.',
    question: 'How did Bilal’s situation change?',
    matchingPairs: [
      { left: 'The price', right: 'Umayya accepted five pieces of gold' },
      { left: 'Abu Bakr bought Bilal', right: 'Bilal was rescued from Umayya' },
      { left: 'Abu Bakr freed Bilal', right: 'Bilal was no longer a slave' },
    ],
    correctAnswer: {
      'The price': 'Umayya accepted five pieces of gold',
      'Abu Bakr bought Bilal': 'Bilal was rescued from Umayya',
      'Abu Bakr freed Bilal': 'Bilal was no longer a slave',
    },
    explanation: 'The chapter moves from the agreed price to rescue and then freedom.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the sale and what Abu Bakr did immediately after it.' },
  },
  12: {
    id: 'mecca-a2-quick-12', type: 'matching', title: 'Adhan and Equality',
    instructions: 'Match each Chapter 12 idea with its detail.',
    question: 'What does Chapter 12 connect?',
    matchingPairs: [
      { left: 'Morning Adhan', right: 'Bilal added “Prayer is better than sleep”' },
      { left: 'Farewell Sermon', right: 'people should not be disrespected because of skin color' },
      { left: 'Equality', right: 'a person’s race does not make that person better than another' },
    ],
    correctAnswer: {
      'Morning Adhan': 'Bilal added “Prayer is better than sleep”',
      'Farewell Sermon': 'people should not be disrespected because of skin color',
      Equality: 'a person’s race does not make that person better than another',
    },
    explanation: 'The chapter connects a detail about the Adhan with a wider teaching about equality.',
    feedback: { correct: 'Correct.', incorrect: 'Use the Adhan detail and the equality teaching near the end of the chapter.' },
  },
};

export const meccaA2KnowledgeCheckExercisesPolished: Exercise[] = meccaA2KnowledgeCheckExercises;
export const meccaA2VocabularyChallengePairsPolished = meccaA2VocabularyChallengePairs;

export const meccaA2FinalChallengeExercisesPolished: Exercise[] = meccaA2FinalChallengeExercises.map(exercise => {
  if (exercise.id === 'mecca-a2-final-4') {
    return {
      id: 'mecca-a2-final-4', type: 'true-false', title: 'A Changed Place in Society',
      instructions: 'Decide whether the statement is true or false.',
      question: 'Across the story, Bilal moves from being controlled by a master to having a respected public role.',
      correctAnswer: true,
      explanation: 'Bilal begins in slavery and later becomes trusted with the public duty of calling people to prayer.',
      feedback: { correct: 'Correct.', incorrect: 'Connect Bilal’s position in Chapters 1–4 with his role in Chapter 11.' },
    };
  }
  if (exercise.id === 'mecca-a2-final-6') {
    return {
      id: 'mecca-a2-final-6', type: 'matching', title: 'Turning Points',
      instructions: 'Match each turning point with its result.',
      question: 'What changed after each important action?',
      matchingPairs: [
        { left: 'Bilal hears the new message', right: 'he begins thinking about a different way to understand faith and human value' },
        { left: 'Bilal visits Abu Bakr', right: 'he learns more and asks questions about the new religion' },
        { left: 'Abu Bakr buys and frees Bilal', right: 'Bilal leaves slavery and can live as a free believer' },
      ],
      correctAnswer: {
        'Bilal hears the new message': 'he begins thinking about a different way to understand faith and human value',
        'Bilal visits Abu Bakr': 'he learns more and asks questions about the new religion',
        'Abu Bakr buys and frees Bilal': 'Bilal leaves slavery and can live as a free believer',
      },
      explanation: 'These turning points change Bilal’s understanding, decision-making and social condition.',
      feedback: { correct: 'Correct.', incorrect: 'Follow the story from hearing, to learning, to freedom.' },
    };
  }
  if (exercise.id === 'mecca-a2-final-7') {
    return {
      id: 'mecca-a2-final-7', type: 'matching', title: 'Later Story and Meaning',
      instructions: 'Match each later event with what it shows in the wider story.',
      question: 'What does each event add to Bilal’s story?',
      matchingPairs: [
        { left: 'Bilal gives the Adhan', right: 'a man once treated as powerless now has a trusted public duty' },
        { left: 'Farewell Sermon teaching', right: 'people should not be judged as better or worse because of race or skin color' },
        { left: 'Bilal leaves Medina later', right: 'the story also shows his deep personal sadness after the Prophet’s death' },
      ],
      correctAnswer: {
        'Bilal gives the Adhan': 'a man once treated as powerless now has a trusted public duty',
        'Farewell Sermon teaching': 'people should not be judged as better or worse because of race or skin color',
        'Bilal leaves Medina later': 'the story also shows his deep personal sadness after the Prophet’s death',
      },
      explanation: 'The final chapters connect public responsibility, equality and Bilal’s personal response to loss.',
      feedback: { correct: 'Correct.', incorrect: 'Use Chapters 11–13 and match each event with its wider meaning.' },
    };
  }
  return exercise;
});
