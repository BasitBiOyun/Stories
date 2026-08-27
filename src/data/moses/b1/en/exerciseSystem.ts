import type { Exercise } from '../../../../types';
import {
  mosesB1QuickChallenges,
  mosesB1KnowledgeCheckExercises,
  mosesB1VocabularyChallengePairs,
  mosesB1FinalChallengeExercises,
} from './exercises';

export const mosesB1PolishedQuickChallenges = mosesB1QuickChallenges;
export const mosesB1PolishedKnowledgeCheckExercises = mosesB1KnowledgeCheckExercises;
export const mosesB1PolishedVocabularyChallengePairs = mosesB1VocabularyChallengePairs;

export const mosesB1PolishedFinalChallengeExercises: Exercise[] = mosesB1FinalChallengeExercises.map((exercise) => {
  if (exercise.id === 'moses-b1-final-6') {
    return {
      ...exercise,
      title: 'Cause and Consequence Across the Journey',
      instructions: 'Match each turning point with the consequence that follows it.',
      question: 'How do key events open new stages in Moses’s journey?',
      matchingPairs: [
        { left: 'A friend warns Moses about the soldiers', right: 'Moses leaves Egypt and reaches Midian' },
        { left: 'The sisters tell their father about Moses’s help', right: 'Moses is invited to their home and offered work' },
        { left: 'Allah calls Moses and gives him signs', right: 'Moses returns to the public mission of confronting Pharaoh' },
      ],
      correctAnswer: {
        'A friend warns Moses about the soldiers': 'Moses leaves Egypt and reaches Midian',
        'The sisters tell their father about Moses’s help': 'Moses is invited to their home and offered work',
        'Allah calls Moses and gives him signs': 'Moses returns to the public mission of confronting Pharaoh',
      },
      explanation: 'The three links connect danger with exile, compassion with settlement, and divine calling with the public mission against Pharaoh.',
      feedback: { correct: 'Correct.', incorrect: 'Trace the major transitions from Egypt to Midian and from Midian back to the mission in Egypt.' },
    };
  }

  if (exercise.id === 'moses-b1-final-7') {
    return {
      ...exercise,
      title: 'Claim and Evidence Across the Story',
      instructions: 'Match each broader claim with the strongest supporting evidence.',
      question: 'Which story evidence best supports each interpretation?',
      matchingPairs: [
        { left: 'Moses acts to help vulnerable people', right: 'he waters the sisters’ sheep when he sees their difficulty' },
        { left: 'Pharaoh’s arrogance survives repeated warnings', right: 'he claims the opened sea is the result of his own order' },
        { left: 'Moses responds to serious error with responsibility', right: 'he regrets the accidental death and asks Allah for forgiveness' },
      ],
      correctAnswer: {
        'Moses acts to help vulnerable people': 'he waters the sisters’ sheep when he sees their difficulty',
        'Pharaoh’s arrogance survives repeated warnings': 'he claims the opened sea is the result of his own order',
        'Moses responds to serious error with responsibility': 'he regrets the accidental death and asks Allah for forgiveness',
      },
      explanation: 'The task links three book-level interpretations to evidence from different stages of the story: helping others, refusing evidence, and accepting responsibility.',
      feedback: { correct: 'Correct.', incorrect: 'Choose the concrete action that most directly supports each broader claim.' },
    };
  }

  return exercise;
});
