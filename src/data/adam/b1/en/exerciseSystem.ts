import type { Exercise } from '../../../../types';
import {
  adamB1QuickChallenges,
  adamB1KnowledgeCheckExercises,
  adamB1VocabularyChallengePairs,
  adamB1FinalChallengeExercises,
} from './exercises';

export const adamB1PolishedQuickChallenges: Record<number, Exercise> = {
  ...adamB1QuickChallenges,
  2: {
    ...adamB1QuickChallenges[2],
    matchingPairs: [
      { left: 'Soil from different lands', right: 'different human skin colors' },
      { left: 'Life and intellect', right: 'learning and understanding' },
      { left: 'Full knowledge', right: 'goodness and responsibility on earth' },
    ],
    correctAnswer: {
      'Soil from different lands': 'different human skin colors',
      'Life and intellect': 'learning and understanding',
      'Full knowledge': 'goodness and responsibility on earth',
    },
    explanation: 'The chapter connects varied soil with human diversity, intellect with learning, and knowledge with goodness and responsibility on earth.',
  },
};

export const adamB1PolishedKnowledgeCheckExercises = adamB1KnowledgeCheckExercises;
export const adamB1PolishedVocabularyChallengePairs = adamB1VocabularyChallengePairs;

export const adamB1PolishedFinalChallengeExercises: Exercise[] = adamB1FinalChallengeExercises.map((exercise) => {
  if (exercise.id === 'adam-b1-final-6') {
    return {
      ...exercise,
      title: 'Danger and Answer',
      instructions: 'Match each danger or failure with the later event that exposes or answers it.',
      question: 'How does the book develop these ideas across different chapters?',
      matchingPairs: [
        { left: 'Iblis is identified as an enemy', right: 'he later approaches Adam and Eve as if he were a friend' },
        { left: 'Iblis wants people to forget Allah', right: 'messengers repeatedly remind people of Allah' },
        { left: 'Arrogance blocks admitting error', right: 'Adam and Eve admit their mistake, learn, and repent' },
      ],
      correctAnswer: {
        'Iblis is identified as an enemy': 'he later approaches Adam and Eve as if he were a friend',
        'Iblis wants people to forget Allah': 'messengers repeatedly remind people of Allah',
        'Arrogance blocks admitting error': 'Adam and Eve admit their mistake, learn, and repent',
      },
      explanation: 'The task connects three recurring patterns across the book: hidden danger, guidance against forgetting, and repentance as the opposite of arrogance.',
      feedback: { correct: 'Correct.', incorrect: 'Connect Chapters 4–5, 7, and 8–9.' },
    };
  }

  if (exercise.id === 'adam-b1-final-7') {
    return {
      ...exercise,
      title: 'Adam’s Roles Across the Story',
      instructions: 'Match each role with the stage where it becomes important.',
      question: 'How does Adam’s responsibility develop across the whole book?',
      matchingPairs: [
        { left: 'Ruler / khalifa on earth', right: 'announced near the beginning as a human role on earth' },
        { left: 'Messenger', right: 'becomes a community-guidance role after a community forms' },
        { left: 'Father and ancestor', right: 'his family and descendants carry the story and its guidance forward' },
      ],
      correctAnswer: {
        'Ruler / khalifa on earth': 'announced near the beginning as a human role on earth',
        Messenger: 'becomes a community-guidance role after a community forms',
        'Father and ancestor': 'his family and descendants carry the story and its guidance forward',
      },
      explanation: 'The story develops Adam’s responsibility from stewardship, to guidance, to a legacy that continues through later generations.',
      feedback: { correct: 'Correct.', incorrect: 'Compare the opening, Chapter 9, and the final chapter.' },
    };
  }

  return exercise;
});
