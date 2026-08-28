import type { Exercise } from '../../../../types';

/** Chapter 12 English Language Focus, derived only from the locked Chapter 12 story text. */
export const yunusB1LanguageFocusChapter12: Exercise[] = [
  {
    id: 'yunus-b1-language-12-meaning-relations',
    type: 'matching',
    title: 'Define, Exemplify, Contrast, and Describe',
    instructions: 'Match each expression from the chapter with the meaning-making job it performs. Focus on how the language shapes the idea, not on recalling the list of virtues.',
    question: 'How do these patterns explain morality and organise contrasting habits?',
    matchingPairs: [
      { left: 'is about + -ing', right: 'defines an idea through an action or process' },
      { left: 'such as ...', right: 'introduces representative examples of a larger group' },
      { left: 'with these principles, ...', right: 'shows the means or basis used to achieve an outcome' },
      { left: 'teach someone to ...', right: 'expresses guidance toward an action or behaviour' },
      { left: 'avoid ...', right: 'expresses deliberate distance from an unwanted behaviour' },
      { left: 'not only ... but also ...', right: 'adds a second role and gives it equal importance' },
    ],
    correctAnswer: {
      'is about + -ing': 'defines an idea through an action or process',
      'such as ...': 'introduces representative examples of a larger group',
      'with these principles, ...': 'shows the means or basis used to achieve an outcome',
      'teach someone to ...': 'expresses guidance toward an action or behaviour',
      'avoid ...': 'expresses deliberate distance from an unwanted behaviour',
      'not only ... but also ...': 'adds a second role and gives it equal importance',
    },
    explanation: 'Chapter 12 defines morality through action, gives examples, shows how principles guide behaviour, contrasts what people should build with what they should avoid, and presents poetry as having more than one role.',
    feedback: {
      correct: 'Correct. You identified how the chapter moves from definition and examples to guidance and balanced addition.',
      incorrect: 'Ask whether the expression defines, gives examples, shows means, guides behaviour, marks avoidance, or adds a second equal role.',
    },
  },
  {
    id: 'yunus-b1-language-12-guidance',
    type: 'multiple-choice',
    title: 'Turn Principles into Practical Guidance',
    instructions: 'Choose the option that naturally combines a principle with guidance about what to do and what to avoid.',
    question: 'Which sentence best transfers the chapter pattern to a new context?',
    options: [
      'With these principles, a coach can teach players to support one another and avoid blaming teammates after mistakes.',
      'With these principles, a coach can teach players supporting one another and avoid to blame teammates after mistakes.',
      'With these principles, a coach avoids that players because support is principle.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter uses “with ...” to show the basis for guidance, “teach ... to ...” for the desired action, and “avoid + -ing/noun” for behaviour that should be left behind.',
    feedback: {
      correct: 'Correct. The sentence links a guiding principle with one constructive action and one behaviour to avoid.',
      incorrect: 'Look for “teach + person + to + verb” and a natural “avoid + -ing/noun” structure.',
    },
  },
  {
    id: 'yunus-b1-language-12-balanced-role',
    type: 'multiple-choice',
    title: 'Give Something Two Connected Roles',
    instructions: 'Choose the sentence that uses “not only ... but also ...” to describe two meaningful roles without simply listing facts.',
    question: 'Which sentence is the most coherent?',
    options: [
      'A school library is not only a place for reading but also a space where students can learn from one another.',
      'A school library not only is a place for reading but also students learning each other.',
      'A school library is only for reading but also not a space for learning.',
    ],
    correctAnswer: 0,
    explanation: '“Not only ... but also ...” works best when it joins two parallel, compatible roles and presents both as important.',
    feedback: {
      correct: 'Correct. The two roles are parallel and contribute to one larger description.',
      incorrect: 'Choose the option where both sides of “not only ... but also ...” have matching structure and compatible meaning.',
    },
  },
  {
    id: 'yunus-b1-language-12-production',
    type: 'reflection',
    title: 'Define a Value and Turn It into Action',
    instructions: 'Write or say five to six connected B1 sentences about one value in school, friendship, family life, teamwork, or personal growth. Do not retell Chapter 12.',
    question: 'Can you define the value, give examples, show how it guides action, contrast a helpful behaviour with one to avoid, and describe a wider role or result?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “is about + -ing”, “such as...”, “with these principles...”, “teach someone to...”, “avoid...”, and “not only... but also...”. Use only the forms that fit your topic naturally.',
    feedback: {
      correct: 'Keep the response connected: definition, examples, guidance, contrast in behaviour, and a wider role or result.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Define the value using “is about + -ing” or another natural definition.', mode: 'Individual' },
      { question: 'Sentence 2 — Give two or three examples with “such as...” if useful.', mode: 'Individual' },
      { question: 'Sentence 3 — Explain how the value can guide people using “with...” or “teach ... to ...”.', mode: 'Pair' },
      { question: 'Sentence 4 — Contrast one action to build with one behaviour to avoid.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Use “not only ... but also ...” or another suitable connector to explain the value’s wider role or effect.', mode: 'Pair' },
    ],
  },
];
