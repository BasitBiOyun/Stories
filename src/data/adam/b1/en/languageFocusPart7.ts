import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 8 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'adam-b1-language-8-future-necessity-purpose-addition',
      type: 'matching',
      title: 'Future Role, Necessity, Purpose, and Addition',
      instructions: 'Match each Chapter 8 expression with the meaning relationship it builds.',
      question: 'How does the chapter move from an expected role on earth to necessary action and purpose?',
      matchingPairs: [
        { left: 'They would use land to grow crops and keep animals', right: 'uses “would + verb” for expected future action viewed from an earlier point in the story' },
        { left: 'they had to struggle to survive', right: 'uses “had to + verb” to express necessity in a past situation' },
        { left: 'to survive / to keep themselves alive', right: 'uses “to + verb” to express purpose' },
        { left: 'In addition', right: 'adds another related responsibility or difficulty to the previous idea' },
      ],
      correctAnswer: {
        'They would use land to grow crops and keep animals': 'uses “would + verb” for expected future action viewed from an earlier point in the story',
        'they had to struggle to survive': 'uses “had to + verb” to express necessity in a past situation',
        'to survive / to keep themselves alive': 'uses “to + verb” to express purpose',
        'In addition': 'adds another related responsibility or difficulty to the previous idea',
      },
      explanation: 'Chapter 8 combines future-in-the-past expectations with past necessity, purpose infinitives, and an additive connector. These forms help turn a general role into a connected account of what people were expected and required to do.',
      feedback: {
        correct: 'Correct. You separated expected future action, necessity, purpose, and addition.',
        incorrect: 'Ask what each expression does: predict from a past viewpoint, show necessity, explain purpose, or add information.',
      },
    },
    {
      id: 'adam-b1-language-8-means-cause-duration-contrast',
      type: 'matching',
      title: 'Means, Cause, Duration, and Contrast',
      instructions: 'Match each expression with its function in the chapter.',
      question: 'How does Chapter 8 explain how actions are done, why actions happen, and how life develops over time?',
      matchingPairs: [
        { left: 'protect themselves with clothes and weapons', right: 'uses “with + noun” to show the means or tools used for protection' },
        { left: 'because he wanted people not to remember Allah', right: 'uses “because + clause” to explain motive or cause' },
        { left: 'lived on earth for many years', right: 'uses “for + period” to express duration' },
        { left: 'both good and difficult times', right: 'places two contrasting kinds of experience inside one balanced expression' },
      ],
      correctAnswer: {
        'protect themselves with clothes and weapons': 'uses “with + noun” to show the means or tools used for protection',
        'because he wanted people not to remember Allah': 'uses “because + clause” to explain motive or cause',
        'lived on earth for many years': 'uses “for + period” to express duration',
        'both good and difficult times': 'places two contrasting kinds of experience inside one balanced expression',
      },
      explanation: 'The chapter does more than list events: “with” shows means, “because” gives a motive, “for” marks duration, and “both ... and ...” balances contrasting experiences within the same life period.',
      feedback: {
        correct: 'Good. You identified means, cause, duration, and balanced contrast.',
        incorrect: 'Look for the tool used, the reason given, the time period, and the two contrasted experiences.',
      },
    },
    {
      id: 'adam-b1-language-8-connect-a-survival-account',
      type: 'multiple-choice',
      title: 'Connect a Survival Account',
      instructions: 'Choose the sentence that best combines necessity, purpose, and addition in natural B1 English.',
      question: 'Which sentence uses the Chapter 8 relationships most clearly?',
      options: [
        'They had to build a shelter to stay safe. In addition, they had to find food because winter was coming.',
        'They would shelter because addition had to safe food.',
        'To they had to survive, in addition because shelter.',
      ],
      correctAnswer: 0,
      explanation: 'The first sentence uses “had to” for necessity, “to stay safe” for purpose, “in addition” to add another need, and “because” to explain a reason. The relationships are clear and connected rather than isolated.',
      feedback: {
        correct: 'Correct. The sentence connects necessity, purpose, addition, and cause naturally.',
        incorrect: 'Choose the option where each connector has a clear job and the clauses form a coherent short account.',
      },
    },
    {
      id: 'adam-b1-language-8-build-new-responsibility-account',
      type: 'reflection',
      title: 'Build a New Responsibility Account',
      instructions: 'Write or say four connected B1 sentences about people beginning life in a difficult new place. Use at least four Chapter 8 patterns.',
      question: 'Can you use the chapter’s language to connect an expected role, necessity, purpose, addition, and cause in a new context?',
      correctAnswer: null,
      explanation: 'A strong response may use “would + verb” for an expected role, “had to + verb” for necessity, “to + verb” for purpose, “in addition” to add another demand, “with + noun” for means, “because + clause” for cause, or “for + period” for duration.',
      feedback: {
        correct: 'Keep the four sentences connected so the role, necessity, purpose, and reason form one coherent account.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State what the people would do in their new role.', mode: 'Individual' },
        { question: 'Sentence 2 — State something they had to do and explain its purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Sentence 3 — Add another need with “In addition” and show a means with “with + noun”.', mode: 'Individual' },
        { question: 'Sentence 4 — Give a reason with “because ...” and, if natural, add a duration with “for ...”.', mode: 'Pair' },
      ],
    },
  ],
};
