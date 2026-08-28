import type { Exercise } from '../../../../types';

/** Chapter 10 English Language Focus, derived only from the locked Chapter 10 story text. */
export const yunusB1LanguageFocusChapter10: Exercise[] = [
  {
    id: 'yunus-b1-language-10-condition-explanation',
    type: 'matching',
    title: 'Build the Relationship Between Ideas',
    instructions: 'Match each expression from the chapter with the meaning-making job it performs. Focus on how the language connects ideas, not on recalling chapter facts.',
    question: 'How do these expressions organise condition, explanation, reason, and description?',
    matchingPairs: [
      { left: 'where ... is absent, ... arise', right: 'shows what tends to happen in a situation where something is missing' },
      { left: 'that is, ...', right: 'restates an idea more clearly or explains what it means' },
      { left: 'For this reason, ...', right: 'introduces a response or conclusion based on the previous idea' },
      { left: 'describe ... as ...', right: 'presents one action, person, or thing in terms of another idea' },
      { left: 'the ... that ...', right: 'adds information that identifies or explains a noun' },
    ],
    correctAnswer: {
      'where ... is absent, ... arise': 'shows what tends to happen in a situation where something is missing',
      'that is, ...': 'restates an idea more clearly or explains what it means',
      'For this reason, ...': 'introduces a response or conclusion based on the previous idea',
      'describe ... as ...': 'presents one action, person, or thing in terms of another idea',
      'the ... that ...': 'adds information that identifies or explains a noun',
    },
    explanation: 'These patterns help a B1 learner move from a situation to an explanation, give a reasoned response, and define an idea more precisely.',
    feedback: {
      correct: 'Correct. You identified how the chapter links and clarifies ideas.',
      incorrect: 'Ask whether the expression presents a situation, clarifies an idea, gives a reasoned result, describes something in another way, or adds identifying information.',
    },
  },
  {
    id: 'yunus-b1-language-10-describe-as',
    type: 'multiple-choice',
    title: 'Describe One Idea Through Another',
    instructions: 'Choose the sentence that uses “describe ... as ...” naturally to interpret an action or quality.',
    question: 'Which sentence best transfers the chapter pattern to a new context?',
    options: [
      'The coach described ignoring a teammate as damaging the trust of the whole group.',
      'The coach described ignore a teammate as damage the trust of the whole group.',
      'The coach described because a teammate, so the sentence cannot compare one action with another idea.',
    ],
    correctAnswer: 0,
    explanation: '“Describe + noun/-ing form + as + noun/-ing form” can present an action or idea through another interpretation. The chapter uses this pattern to give moral weight to an action.',
    feedback: {
      correct: 'Correct. The sentence interprets one action by presenting it as another meaningful consequence.',
      incorrect: 'Choose the option with a complete “describe ... as ...” relationship and natural -ing forms.',
    },
  },
  {
    id: 'yunus-b1-language-10-addition-duration',
    type: 'multiple-choice',
    title: 'Add a Second Value and Show Continuity',
    instructions: 'Choose the sentence that combines “not only ... but also ...” with a natural expression of something continuing from the past until now.',
    question: 'Which sentence is grammatically and functionally closest to the chapter patterns?',
    options: [
      'The tradition values not only knowledge but also compassion, and this principle has existed for centuries.',
      'The tradition values not only knowledge but also compassion, and this principle existed since centuries.',
      'The tradition values knowledge only, because “not only ... but also ...” cannot add a second value.',
    ],
    correctAnswer: 0,
    explanation: '“Not only ... but also ...” adds balanced emphasis to a second idea. “Has existed for/since ...” links a past beginning or duration with continued relevance in the present.',
    feedback: {
      correct: 'Correct. The sentence adds a second value and expresses continuity naturally.',
      incorrect: 'Look for balanced addition and a present-perfect form that connects the past with the present.',
    },
  },
  {
    id: 'yunus-b1-language-10-production',
    type: 'reflection',
    title: 'Explain Why a Value Matters',
    instructions: 'Write or say five to six connected B1 sentences about a value in friendship, family life, school, teamwork, or community life. Do not retell Chapter 10.',
    question: 'Can you describe what happens when a value is absent, clarify what the value means, explain a consequence, add a second related value, and show why the idea remains important over time?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “where ... is absent, ... arise”, “that is...”, “for this reason...”, “describe ... as ...”, “the ... that ...”, “not only ... but also ...”, and “has existed since/for ...”.',
    feedback: {
      correct: 'Keep the paragraph connected: situation, clarification, consequence, added value, and continued importance.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Name a value and say what it brings.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “where ... is absent...” to describe a likely negative result.', mode: 'Individual' },
      { question: 'Sentence 3 — Clarify the value with “that is...” or a “that...” clause.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “for this reason...” and/or “describe ... as ...” to explain a consequence.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Add another related value with “not only ... but also ...” and, if natural, show continuity with “has existed since/for ...”.', mode: 'Pair' },
    ],
  },
];
