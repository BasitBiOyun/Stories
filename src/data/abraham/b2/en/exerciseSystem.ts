import type { Exercise } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';

const feedback = {
  correct: 'Correct. Your answer is supported by the story as a whole.',
  incorrect: 'Not yet. Compare the relevant chapters and try again.',
};

const finalOverrides: Record<string, Exercise> = {
  'ab-b2-f4': {
    id: 'ab-b2-f4',
    type: 'true-false',
    title: 'Final Challenge',
    instructions: 'Decide whether the claim is supported by the story.',
    question: 'Chapter 33 distinguishes animal sacrifice as an earlier prophetic practice from the human sacrifice it attributes to idolaters.',
    correctAnswer: true,
    explanation: 'The chapter says prophets before Abraham also offered animal sacrifices and contrasts this with human sacrifice attributed to idolaters.',
    feedback,
  },
  'ab-b2-f6': {
    id: 'ab-b2-f6',
    type: 'matching',
    title: 'Final Challenge',
    instructions: 'Match each setting with the analytical change it creates.',
    question: 'How does setting sharpen Abraham’s argument across different stages of the story?',
    correctAnswer: {},
    matchingPairs: [
      {
        left: 'His father worships, makes, and sells idols',
        right: 'the disagreement combines belief with family and livelihood',
      },
      {
        left: 'The festival leaves the temple empty with food before silent statues',
        right: 'the setting enables a practical test of the idols’ claimed agency',
      },
      {
        left: 'Nimrod claims power over life and death from a royal position',
        right: 'the debate shifts from political control to a cosmic order the ruler cannot command',
      },
    ],
    explanation: 'The three settings change what can be tested: family authority, idol agency, and the limits of political power.',
    feedback,
  },
  'ab-b2-f7': {
    id: 'ab-b2-f7',
    type: 'matching',
    title: 'Final Challenge',
    instructions: 'Match each family or place connection with the later legacy described in the narrative.',
    question: 'How does the story extend Abraham’s legacy beyond one person and one location?',
    correctAnswer: {},
    matchingPairs: [
      {
        left: 'Ishmael’s line',
        right: 'Mecca/Hijaz and the line connected with Prophet Muhammad in the narrative',
      },
      {
        left: 'Isaac’s line',
        right: 'the line connected with Jacob and later prophets in the narrative',
      },
      {
        left: 'The restored Ka‘ba',
        right: 'a continuing place of worship and pilgrimage presented for people beyond one family branch',
      },
    ],
    explanation: 'The ending combines family lines with a transregional place of worship, so the legacy is both genealogical and geographic.',
    feedback,
  },
  'ab-b2-f8': {
    id: 'ab-b2-f8',
    type: 'fill-blanks',
    title: 'Final Challenge',
    instructions: 'Complete the cross-chapter synthesis with the best analytical word.',
    question: 'Complete the contrast across the idol and Nimrod debates.',
    fillBlanksText: 'Abraham repeatedly moves the argument away from inherited or political [blank] and toward evidence that can be examined.',
    correctAnswer: 'authority',
    explanation: 'The idolaters appeal to inherited practice and Nimrod relies on royal power; Abraham repeatedly redirects the argument toward observable or testable evidence.',
    feedback,
  },
  'ab-b2-f9': {
    id: 'ab-b2-f9',
    type: 'fill-blanks',
    title: 'Final Challenge',
    instructions: 'Complete the whole-story synthesis with the best concept.',
    question: 'Complete the synthesis of the closing family chapters.',
    fillBlanksText: 'From sacrifice to building and pilgrimage, the closing chapters turn family submission into a continuing [blank].',
    correctAnswer: 'legacy',
    explanation: 'The final chapters connect submission, the Ka‘ba, pilgrimage, descendants, and continuing guidance into a lasting legacy.',
    feedback,
  },
};

export const abrahamB2QuickChallengesPolished = abrahamB2QuickChallenges;
export const abrahamB2KnowledgeCheckExercisesPolished = abrahamB2KnowledgeCheckExercises;
export const abrahamB2VocabularyChallengePairsPolished = abrahamB2VocabularyChallengePairs;
export const abrahamB2FinalChallengeExercisesPolished = abrahamB2FinalChallengeExercises.map(
  exercise => finalOverrides[exercise.id] ?? exercise,
);
