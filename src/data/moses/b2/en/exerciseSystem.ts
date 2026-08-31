import type { Exercise } from '../../../../types';
import {
  mosesB2QuickChallenges,
  mosesB2KnowledgeCheckExercises,
  mosesB2VocabularyChallengePairs,
  mosesB2FinalChallengeExercises,
} from './exercises';

const feedback = {
  correct: 'Correct. Your answer is supported by evidence across the story.',
  incorrect: 'Not yet. Reconnect the claim with evidence from the relevant chapters and try again.',
};

const matching = (id: string, question: string, pairs: { left: string; right: string }[], explanation: string): Exercise => ({
  id,
  type: 'matching',
  title: 'Final Challenge',
  instructions: 'Match each idea with the cross-chapter evidence or issue that best fits it.',
  question,
  matchingPairs: pairs,
  correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
  explanation,
  feedback,
});

const fill = (id: string, question: string, fillBlanksText: string, correctAnswer: string, explanation: string): Exercise => ({
  id,
  type: 'fill-blanks',
  title: 'Final Challenge',
  instructions: 'Complete the synthesis with the most meaningful story language.',
  question,
  fillBlanksText,
  correctAnswer,
  explanation,
  feedback,
});

const finalOverrides: Record<string, Exercise> = {
  'mo-b2-f6': matching(
    'mo-b2-f6',
    'Match each person or group with the action that most clearly reveals a value or stance.',
    [
      { left: 'Asiye', right: 'Uses compassion and persuasion to protect the baby inside a violent political environment' },
      { left: 'Moses at the well', right: 'Serves others despite his own exhaustion and thirst' },
      { left: 'The magicians', right: 'Let expert recognition of the sign outweigh political safety' },
      { left: 'Moses at the sea', right: 'Expresses trust before a visible route of escape appears' },
    ],
    'The four actions connect compassion, service, evidence-based conviction, and trust with observable choices across different stages of the story.',
  ),
  'mo-b2-f7': matching(
    'mo-b2-f7',
    'Match each conflict with the deeper issue it develops across the narrative.',
    [
      { left: 'Nile projects and forced labor', right: 'Resource control is tied to exploited manpower and political authority' },
      { left: 'Moses asks for the Israelites’ release', right: 'Freedom and lordship confront Pharaoh’s claim to own people' },
      { left: 'The contest with the magicians', right: 'Evidence and expert recognition confront managed public illusion' },
      { left: 'Calf worship after liberation', right: 'Physical freedom does not remove the need for continuing moral guidance' },
    ],
    'These conflicts synthesize political, evidential, and moral problems rather than retesting isolated chapter facts.',
  ),
  'mo-b2-f8': fill(
    'mo-b2-f8',
    'Complete the cross-chapter analysis of Pharaoh’s rule.',
    'The Nile chapters connect control of resources and manpower with Pharaoh’s political [blank].',
    'authority',
    'The early chapters repeatedly connect control of the Nile, large projects, forced labor, administration, and Pharaoh’s authority.',
  ),
  'mo-b2-f9': fill(
    'mo-b2-f9',
    'Complete the synthesis of the story after physical liberation.',
    'The ending shows that escape from oppression does not remove the continuing need for [blank].',
    'guidance',
    'After the Red Sea, the narrative continues with questions of worship, the Torah, disobedience, and Moses’s continuing effort to guide his people.',
  ),
};

export const mosesB2QuickChallengesPolished = mosesB2QuickChallenges;
export const mosesB2KnowledgeCheckExercisesPolished = mosesB2KnowledgeCheckExercises;
export const mosesB2VocabularyChallengePairsPolished = mosesB2VocabularyChallengePairs;
export const mosesB2FinalChallengeExercisesPolished: Exercise[] = mosesB2FinalChallengeExercises.map(
  exercise => finalOverrides[exercise.id] ?? exercise,
);
