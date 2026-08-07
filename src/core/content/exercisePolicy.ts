import type { ExerciseType, Level } from '../../types';

export interface LevelExercisePolicy {
  reviewChallengeQuestions: number;
  finalChallengeQuestions: number;
  allowedTypes: readonly ExerciseType[];
  minimumExplanationLength: number;
  expectations: readonly string[];
}

/**
 * Binding learning-material policy.
 *
 * Questions in Stories are not designed only to measure performance.
 * Their purpose depends on the reading stage:
 * - while reading: teach and reinforce the information in the current text;
 * - post reading: help learners retrieve, organise, and remember information;
 * - final challenge: revisit the whole text with clear recall/evidence prompts.
 *
 * A2 and B1 Quick Challenges are primarily formative/reinforcing.
 * B2 may combine reinforcement, assessment, and challenge more explicitly.
 */
export const exercisePolicyByLevel: Record<Level, LevelExercisePolicy> = {
  A2: {
    reviewChallengeQuestions: 8,
    finalChallengeQuestions: 10,
    allowedTypes: ['true-false', 'multiple-choice', 'matching', 'sequencing', 'fill-blanks', 'tap-reveal', 'reflection', 'quiz-game'],
    minimumExplanationLength: 20,
    expectations: [
      'While-reading Quick Challenges reinforce and reteach before they measure.',
      'Questions use short, concrete language that fits an informative reading text.',
      'Answers are directly recoverable from the current chapter or clearly named review scope.',
      'Wrong-answer feedback directs the learner back to evidence and supports a second attempt.',
      'Distractors avoid tricks and unnecessary linguistic difficulty.',
      'Post-reading questions emphasise remembering, sequencing, matching, and simple cause/result.',
      'Vocabulary focuses on high-value words actually used in the text.',
    ],
  },
  B1: {
    reviewChallengeQuestions: 8,
    finalChallengeQuestions: 10,
    allowedTypes: ['true-false', 'multiple-choice', 'matching', 'sequencing', 'fill-blanks', 'drag-drop', 'tap-reveal', 'reflection', 'quiz-game'],
    minimumExplanationLength: 30,
    expectations: [
      'While-reading Quick Challenges remain primarily formative and reinforcing.',
      'Questions fit the informational/narrative organisation of the source text.',
      'Questions include cause, result, sequence, motivation, and contextual vocabulary.',
      'Wrong-answer feedback supports rereading and evidence recovery before scoring emphasis.',
      'Distractors remain plausible but text-grounded.',
      'Learners produce short explanations and summaries after comprehension is secured.',
      'Final questions emphasise whole-text retrieval and remembering important ideas.',
    ],
  },
  B2: {
    reviewChallengeQuestions: 8,
    finalChallengeQuestions: 10,
    allowedTypes: ['true-false', 'multiple-choice', 'matching', 'sequencing', 'fill-blanks', 'drag-drop', 'tap-reveal', 'reflection', 'quiz-game'],
    minimumExplanationLength: 40,
    expectations: [
      'Question sets may combine reinforcement, assessment, and genuine challenge.',
      'Questions use the discourse structure and evidence of the source text.',
      'Questions require inference, comparison, evaluation, synthesis, or evidence selection where appropriate.',
      'Distractors represent credible misunderstandings of the text.',
      'Feedback still supports evidence-based correction rather than only reporting a score.',
      'Learners justify answers with textual evidence.',
      'Final questions revisit the whole text while allowing higher-level reasoning.',
    ],
  },
};
