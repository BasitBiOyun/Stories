import type { ExerciseType, Level } from '../../types';

export interface LevelExercisePolicy {
  finalChallengeQuestions: number;
  allowedTypes: readonly ExerciseType[];
  minimumExplanationLength: number;
  expectations: readonly string[];
}

/**
 * Target standard for the next content-quality phase.
 * Existing exercises are not rewritten by the platform-foundation refactor.
 */
export const exercisePolicyByLevel: Record<Level, LevelExercisePolicy> = {
  A2: {
    finalChallengeQuestions: 8,
    allowedTypes: ['true-false', 'multiple-choice', 'matching', 'sequencing', 'fill-blanks', 'tap-reveal', 'reflection', 'quiz-game'],
    minimumExplanationLength: 20,
    expectations: [
      'Questions use short, concrete language.',
      'Answers are directly recoverable from the chapter.',
      'Distractors avoid unnecessary linguistic traps.',
      'Vocabulary focuses on high-value chapter words.',
    ],
  },
  B1: {
    finalChallengeQuestions: 9,
    allowedTypes: ['true-false', 'multiple-choice', 'matching', 'sequencing', 'fill-blanks', 'drag-drop', 'tap-reveal', 'reflection', 'quiz-game'],
    minimumExplanationLength: 30,
    expectations: [
      'Questions include cause, result, sequence, and character motivation.',
      'Distractors remain plausible but text-grounded.',
      'Learners produce short explanations and summaries.',
      'Vocabulary includes collocations and contextual meaning.',
    ],
  },
  B2: {
    finalChallengeQuestions: 10,
    allowedTypes: ['true-false', 'multiple-choice', 'matching', 'sequencing', 'fill-blanks', 'drag-drop', 'tap-reveal', 'reflection', 'quiz-game'],
    minimumExplanationLength: 40,
    expectations: [
      'Questions require inference, comparison, evaluation, or synthesis.',
      'Distractors represent credible misunderstandings of the text.',
      'Learners justify answers with evidence from the chapter.',
      'Vocabulary includes nuanced, academic, and topic-specific use.',
    ],
  },
};
