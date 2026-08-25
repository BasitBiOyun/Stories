import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 10 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'adam-b1-language-10-growth-role-habit',
      type: 'matching',
      title: 'Growth, Roles, and Regular Work',
      instructions: 'Match each Chapter 10 expression with the job it does in the narrative.',
      question: 'How does the chapter show growing up, taking on a role, and doing regular work?',
      matchingPairs: [
        { left: 'The children grew up to be strong and healthy young adults.', right: 'shows development from childhood to a later state' },
        { left: 'When they grew up, Habil became a shepherd.', right: 'uses a time clause and “became” to introduce a new role' },
        { left: 'He kept cows, sheep and other animals.', right: 'describes regular work connected with Habil’s role' },
        { left: 'Qabil was a farmer; he worked on the farm and grew crops.', right: 'adds connected actions that explain what a role involved' },
      ],
      correctAnswer: {
        'The children grew up to be strong and healthy young adults.': 'shows development from childhood to a later state',
        'When they grew up, Habil became a shepherd.': 'uses a time clause and “became” to introduce a new role',
        'He kept cows, sheep and other animals.': 'describes regular work connected with Habil’s role',
        'Qabil was a farmer; he worked on the farm and grew crops.': 'adds connected actions that explain what a role involved',
      },
      explanation: 'Chapter 10 moves from childhood to adulthood, then links each brother with a role and the repeated work connected with that role. These patterns are useful when describing how a person develops and what their work involves.',
      feedback: {
        correct: 'Correct. You separated development, role change, and regular work.',
        incorrect: 'Ask whether the sentence shows a later state, a new role, or the actions that belong to that role.',
      },
    },
    {
      id: 'adam-b1-language-10-contrast-purpose-obligation',
      type: 'matching',
      title: 'Contrast, Purpose, and Obligation',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does Chapter 10 connect a problem, a purpose, an obligation, and contrasting choices?',
      matchingPairs: [
        { left: 'To solve the problem, they had to offer an offering to Allah.', right: 'combines purpose with a past obligation' },
        { left: 'Habil brought his best and healthiest sheep, but Qabil brought just a handful of his crops.', right: 'uses “but” to contrast two choices in one sentence' },
        { left: 'Qabil didn’t care to please Allah and his father.', right: 'uses a negative verb pattern to show lack of concern or intention' },
        { left: 'However, real goodness is giving out the best and the most loved.', right: 'uses “however” to shift from the example to a contrasting general principle' },
      ],
      correctAnswer: {
        'To solve the problem, they had to offer an offering to Allah.': 'combines purpose with a past obligation',
        'Habil brought his best and healthiest sheep, but Qabil brought just a handful of his crops.': 'uses “but” to contrast two choices in one sentence',
        'Qabil didn’t care to please Allah and his father.': 'uses a negative verb pattern to show lack of concern or intention',
        'However, real goodness is giving out the best and the most loved.': 'uses “however” to shift from the example to a contrasting general principle',
      },
      explanation: 'The chapter does more than list events: it explains why an action was required, contrasts two responses, and then moves from the specific situation to a general idea.',
      feedback: {
        correct: 'Good. You identified purpose, obligation, contrast, and the move to a general principle.',
        incorrect: 'Look for the infinitive of purpose, “had to”, the contrast markers “but/however”, and the negative pattern after “didn’t care”.',
      },
    },
    {
      id: 'adam-b1-language-10-build-connected-comparison',
      type: 'multiple-choice',
      title: 'Build a Connected Comparison',
      instructions: 'Choose the passage that uses Chapter 10 relationships naturally in a new B1 context.',
      question: 'Which passage clearly connects development, roles, purpose, obligation, and contrast?',
      options: [
        'When Lina and Derya grew up, they chose different jobs. Lina became a nurse, while Derya became a designer. To finish their training, they had to complete long projects, but they worked in very different ways. Lina planned every step carefully; however, Derya preferred to experiment before making a final plan.',
        'When grew up Lina became while Derya. To finish because had to but however different.',
        'Lina and Derya role different to completing had jobs however because when.',
      ],
      correctAnswer: 0,
      explanation: 'The first passage uses a time clause with “grew up”, “became” for new roles, “to + verb” for purpose, “had to” for obligation, and “while/but/however” to organize contrast across connected sentences.',
      feedback: {
        correct: 'Correct. The passage connects the ideas and uses each structure for a clear purpose.',
        incorrect: 'Choose the option where time, new roles, purpose, obligation, and contrast form one coherent paragraph.',
      },
    },
    {
      id: 'adam-b1-language-10-compare-two-choices',
      type: 'reflection',
      title: 'Compare Two Choices',
      instructions: 'Write or say four connected B1 sentences about two people who respond differently to the same task. Use at least four Chapter 10 patterns.',
      question: 'Can you use the chapter’s language to show development or role, purpose, obligation, contrasting actions, and a general principle in a new situation?',
      correctAnswer: null,
      explanation: 'A strong response may use “when ... grew up”, “became ...”, “to + verb” for purpose, “had to ...”, “but/while/however” for contrast, “didn’t care to ...”, and a pattern such as “real responsibility is + -ing ...” to express a general principle.',
      feedback: {
        correct: 'Keep the four sentences connected so the contrast grows naturally from the shared task.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Introduce the two people and, if useful, a change of role with “when ...” and “became ...”.', mode: 'Individual' },
        { question: 'Sentence 2 — State the shared purpose and obligation with “to + verb” and “had to ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Contrast their actions with “but”, “while”, or “however”.', mode: 'Individual' },
        { question: 'Sentence 4 — State a general principle using “... is + -ing ...” or another natural Chapter 10 pattern.', mode: 'Pair' },
      ],
    },
  ],
};
