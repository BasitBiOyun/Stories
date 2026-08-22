import type { Exercise } from '../../../../types';
import {
  abrahamA2FinalChallengeExercises,
  abrahamA2KnowledgeCheckExercises,
  abrahamA2QuickChallenges,
  abrahamA2VocabularyChallengePairs,
} from './exercises';

/** Active polished Abraham A2 English exercise system. */
export const abrahamA2QuickChallengesPolished: Record<number, Exercise> = {
  ...abrahamA2QuickChallenges,
  1: {
    id: 'abraham-a2-quick-1', type: 'matching', title: 'People and Powerless Objects',
    instructions: 'Match each Chapter 1 detail with the correct idea.', question: 'What contrast does Abraham notice?',
    matchingPairs: [
      { left: 'People', right: 'made wishes to the objects' },
      { left: 'Hearing', right: 'the stone objects could not hear' },
      { left: 'Movement', right: 'the stone objects could not move' },
      { left: 'Understanding', right: 'the stone objects could not understand' },
    ],
    correctAnswer: {
      People: 'made wishes to the objects', Hearing: 'the stone objects could not hear', Movement: 'the stone objects could not move', Understanding: 'the stone objects could not understand',
    },
    explanation: 'The chapter contrasts what people asked from the objects with the objects’ complete lack of human abilities.',
    feedback: { correct: 'Correct. You rebuilt the contrast from four details.', incorrect: 'Return to the final sentences and separate what people did from what the objects could not do.' },
  },
  9: {
    id: 'abraham-a2-quick-9', type: 'matching', title: 'Miracle and Response',
    instructions: 'Match each Chapter 9 detail with what happened.', question: 'What changed, and what stayed the same?',
    matchingPairs: [
      { left: 'The fire', right: 'became cool' },
      { left: 'Abraham', right: 'was safe' },
      { left: 'The people', right: 'were amazed' },
      { left: 'Their position', right: 'remained against Abraham' },
    ],
    correctAnswer: { 'The fire': 'became cool', Abraham: 'was safe', 'The people': 'were amazed', 'Their position': 'remained against Abraham' },
    explanation: 'The miracle changed the danger around Abraham, but it did not automatically change the people’s position.',
    feedback: { correct: 'Correct.', incorrect: 'Separate the change in the fire from Abraham’s safety and the people’s reaction.' },
  },
  12: {
    id: 'abraham-a2-quick-12', type: 'matching', title: 'Trust and Action',
    instructions: 'Match each Chapter 12 idea with the detail that completes it.', question: 'How does Hagar combine trust with action?',
    matchingPairs: [
      { left: 'Hagar’s trust', right: 'Allah will protect us' },
      { left: 'Her problem', right: 'food and water were gone' },
      { left: 'Her action', right: 'she searched' },
      { left: 'Her movement', right: 'she ran from hill to hill' },
    ],
    correctAnswer: { 'Hagar’s trust': 'Allah will protect us', 'Her problem': 'food and water were gone', 'Her action': 'she searched', 'Her movement': 'she ran from hill to hill' },
    explanation: 'The chapter presents trust and active effort together.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the chapter from Hagar’s belief to the problem and then to what she did.' },
  },
};

export const abrahamA2KnowledgeCheckExercisesPolished: Exercise[] = abrahamA2KnowledgeCheckExercises;
export const abrahamA2VocabularyChallengePairsPolished = abrahamA2VocabularyChallengePairs;

export const abrahamA2FinalChallengeExercisesPolished: Exercise[] = abrahamA2FinalChallengeExercises.map(exercise => {
  if (exercise.id === 'abraham-a2-final-6') {
    return {
      id: 'abraham-a2-final-6', type: 'matching', title: 'Journey, Need and Purpose', instructions: 'Match each later-story action with its reason or purpose.',
      question: 'Why do these actions happen?',
      matchingPairs: [
        { left: 'Abraham leaves Babylon', right: 'carry the message to other lands' },
        { left: 'Hagar searches', right: 'find food and water for her child' },
        { left: 'Hagar runs from hill to hill', right: 'continue looking when the valley has no supplies' },
      ],
      correctAnswer: {
        'Abraham leaves Babylon': 'carry the message to other lands',
        'Hagar searches': 'find food and water for her child',
        'Hagar runs from hill to hill': 'continue looking when the valley has no supplies',
      },
      explanation: 'The later chapters repeatedly connect purposeful action with a difficult situation.',
      feedback: { correct: 'Correct.', incorrect: 'Use the stated reasons in Chapters 11–12.' },
    };
  }
  if (exercise.id === 'abraham-a2-final-7') {
    return {
      id: 'abraham-a2-final-7', type: 'matching', title: 'From Water to Community', instructions: 'Match each development with the next result named in the story.',
      question: 'How does the valley develop after Zamzam appears?',
      matchingPairs: [
        { left: 'Zamzam water', right: 'makes life possible in the valley' },
        { left: 'The water source', right: 'draws more people to the area' },
        { left: 'The growing settlement', right: 'becomes the city called Mecca' },
      ],
      correctAnswer: {
        'Zamzam water': 'makes life possible in the valley',
        'The water source': 'draws more people to the area',
        'The growing settlement': 'becomes the city called Mecca',
      },
      explanation: 'Chapter 13 links water, settlement and the growth of Mecca in a clear cause-result chain.',
      feedback: { correct: 'Correct.', incorrect: 'Follow Chapter 13 from the appearance of water to the arrival of people and then the city.' },
    };
  }
  return exercise;
});
