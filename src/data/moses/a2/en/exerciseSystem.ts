import type { Exercise } from '../../../../types';
import {
  mosesA2FinalChallengeExercises,
  mosesA2KnowledgeCheckExercises,
  mosesA2QuickChallenges,
  mosesA2VocabularyChallengePairs,
} from './exercises';

/** Active polished Moses A2 English exercise system. */
export const mosesA2QuickChallengesPolished: Record<number, Exercise> = {
  ...mosesA2QuickChallenges,
  1: {
    id: 'moses-a2-quick-1', type: 'matching', title: 'Power and Belief',
    instructions: 'Match each Chapter 1 detail with the correct idea.', question: 'What contrast does Chapter 1 build?',
    matchingPairs: [
      { left: 'Pharaoh’s claim', right: 'he said that he was a god' },
      { left: 'Pharaoh’s rule', right: 'he treated people cruelly' },
      { left: 'The Children of Israel', right: 'believed in one Allah' },
      { left: 'Their situation', right: 'they lived under Pharaoh’s oppression' },
    ],
    correctAnswer: {
      'Pharaoh’s claim': 'he said that he was a god',
      'Pharaoh’s rule': 'he treated people cruelly',
      'The Children of Israel': 'believed in one Allah',
      'Their situation': 'they lived under Pharaoh’s oppression',
    },
    explanation: 'Chapter 1 contrasts Pharaoh’s false claim and cruel rule with the belief and difficult situation of the Children of Israel.',
    feedback: { correct: 'Correct. You rebuilt the chapter’s central contrast.', incorrect: 'Separate Pharaoh’s claim and actions from the belief and situation of the Children of Israel.' },
  },
  6: {
    id: 'moses-a2-quick-6', type: 'matching', title: 'Mistake, Feeling and Prayer',
    instructions: 'Match each Chapter 6 detail with what happened.', question: 'How did Moses respond to the accidental death?',
    matchingPairs: [
      { left: 'The accident', right: 'Moses caused a man’s death without intending it' },
      { left: 'His feeling', right: 'he was deeply sorry' },
      { left: 'His prayer', right: 'he asked Allah to forgive him' },
    ],
    correctAnswer: {
      'The accident': 'Moses caused a man’s death without intending it',
      'His feeling': 'he was deeply sorry',
      'His prayer': 'he asked Allah to forgive him',
    },
    explanation: 'The chapter separates the unintended act from Moses’s regret and his request for forgiveness.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the chapter from the accident to Moses’s feeling and then his prayer.' },
  },
  11: {
    id: 'moses-a2-quick-11', type: 'matching', title: 'Signs, Companion and Mission',
    instructions: 'Match each Chapter 11 detail with its role.', question: 'What prepared Moses for the mission?',
    matchingPairs: [
      { left: 'The shining hand', right: 'a sign of Allah’s power' },
      { left: 'Harun', right: 'Moses’s brother and companion' },
      { left: 'The palace', right: 'the place Moses and Harun went to deliver the message' },
      { left: 'The message', right: 'Allah is the most powerful' },
    ],
    correctAnswer: {
      'The shining hand': 'a sign of Allah’s power',
      Harun: 'Moses’s brother and companion',
      'The palace': 'the place Moses and Harun went to deliver the message',
      'The message': 'Allah is the most powerful',
    },
    explanation: 'Chapter 11 brings together a sign, a companion, a destination and the message Moses must deliver.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sign, who went with Moses, where they went and what message they carried.' },
  },
  13: {
    id: 'moses-a2-quick-13', type: 'matching', title: 'The Sign and Two Responses',
    instructions: 'Match each Chapter 13 detail with what happened.', question: 'How did the great sign lead to different responses?',
    matchingPairs: [
      { left: 'Moses’s stick', right: 'became a huge snake' },
      { left: 'The huge snake', right: 'swallowed what the magicians had made' },
      { left: 'The magicians', right: 'believed in the Lord of Moses and Harun' },
      { left: 'Pharaoh', right: 'remained arrogant and continued to harm the believers' },
    ],
    correctAnswer: {
      'Moses’s stick': 'became a huge snake',
      'The huge snake': 'swallowed what the magicians had made',
      'The magicians': 'believed in the Lord of Moses and Harun',
      Pharaoh: 'remained arrogant and continued to harm the believers',
    },
    explanation: 'The chapter connects the sign with belief from the magicians and continued rejection from Pharaoh.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the scene from the stick to the snake, then compare the magicians with Pharaoh.' },
  },
};

export const mosesA2KnowledgeCheckExercisesPolished: Exercise[] = mosesA2KnowledgeCheckExercises;
export const mosesA2VocabularyChallengePairsPolished = mosesA2VocabularyChallengePairs;

export const mosesA2FinalChallengeExercisesPolished: Exercise[] = mosesA2FinalChallengeExercises.map(exercise => {
  if (exercise.id === 'moses-a2-final-6') {
    return {
      id: 'moses-a2-final-6', type: 'matching', title: 'Stages and Purposes', instructions: 'Match each stage with its main role in the story.',
      question: 'What was happening in each stage?',
      matchingPairs: [
        { left: 'Midian', right: 'Moses found a new life away from Pharaoh’s rule' },
        { left: 'Return to Egypt', right: 'Moses carried Allah’s message back toward Pharaoh' },
        { left: 'The palace', right: 'Moses and Harun delivered the message and showed the signs' },
      ],
      correctAnswer: {
        Midian: 'Moses found a new life away from Pharaoh’s rule',
        'Return to Egypt': 'Moses carried Allah’s message back toward Pharaoh',
        'The palace': 'Moses and Harun delivered the message and showed the signs',
      },
      explanation: 'These stages move Moses from safety in Midian into the mission he was given for Egypt.',
      feedback: { correct: 'Correct.', incorrect: 'Think about what Midian gave Moses, why he returned, and what happened at the palace.' },
    };
  }
  if (exercise.id === 'moses-a2-final-7') {
    return {
      id: 'moses-a2-final-7', type: 'matching', title: 'Need and Response', instructions: 'Match each problem or need with Moses’s response.',
      question: 'How did Moses act in different journeys?',
      matchingPairs: [
        { left: 'He was tired and thirsty in Midian', right: 'he looked for water' },
        { left: 'The two sisters needed help at the well', right: 'he watered their sheep' },
        { left: 'His family was cold on the return journey', right: 'he went toward the fire' },
      ],
      correctAnswer: {
        'He was tired and thirsty in Midian': 'he looked for water',
        'The two sisters needed help at the well': 'he watered their sheep',
        'His family was cold on the return journey': 'he went toward the fire',
      },
      explanation: 'Across the journey episodes, Moses notices a need and takes a practical next step.',
      feedback: { correct: 'Correct.', incorrect: 'Review the well scene and the cold return journey.' },
    };
  }
  return exercise;
});
