import type { Exercise } from '../../../../types';

/** Chapter 11 English Language Focus, derived only from the locked Chapter 11 story text. */
export const yunusB1LanguageFocusChapter11: Exercise[] = [
  {
    id: 'yunus-b1-language-11-purpose-necessity',
    type: 'matching',
    title: 'Purpose, Necessity, Viewpoint, and Generalisation',
    instructions: 'Match each expression from the chapter with the meaning-making job it performs. Focus on how the language works, not on recalling chapter facts.',
    question: 'How do these patterns organise purpose, necessity, attributed viewpoints, and general statements?',
    matchingPairs: [
      { left: 'for a person to ...', right: 'introduces a goal or condition needed for a desired outcome' },
      { left: 'must ...', right: 'presents something as necessary or unavoidable' },
      { left: 'According to him, ...', right: 'attributes an idea to a particular person or viewpoint' },
      { left: 'as ... said, ...', right: 'connects a statement with a supporting source or earlier voice' },
      { left: 'A person who ...', right: 'makes a general statement about people with a particular behaviour or quality' },
      { left: 'Whoever ...', right: 'extends a statement to any person who meets the condition' },
    ],
    correctAnswer: {
      'for a person to ...': 'introduces a goal or condition needed for a desired outcome',
      'must ...': 'presents something as necessary or unavoidable',
      'According to him, ...': 'attributes an idea to a particular person or viewpoint',
      'as ... said, ...': 'connects a statement with a supporting source or earlier voice',
      'A person who ...': 'makes a general statement about people with a particular behaviour or quality',
      'Whoever ...': 'extends a statement to any person who meets the condition',
    },
    explanation: 'Chapter 11 uses these patterns to express a goal, present necessity, identify whose view is being reported, support an idea with another voice, and form general statements about people.',
    feedback: {
      correct: 'Correct. You identified how the chapter moves from purpose and necessity to viewpoint and generalisation.',
      incorrect: 'Ask whether the expression gives a goal, marks necessity, identifies a source, supports a statement, or generalises about people.',
    },
  },
  {
    id: 'yunus-b1-language-11-must-relationship',
    type: 'multiple-choice',
    title: 'Use “Must” to Express a Necessary Relationship',
    instructions: 'Choose the sentence that uses the chapter pattern naturally to show that two things need to work together for a goal.',
    question: 'Which sentence best transfers the pattern to a new context?',
    options: [
      'For a team to solve a difficult problem, careful planning and open communication must support one another.',
      'For a team solving a difficult problem, careful planning must supporting open communication one another.',
      'A team reaches every goal automatically, so “must” cannot express a necessary relationship.',
    ],
    correctAnswer: 0,
    explanation: '“For + noun/person + to + verb” can frame a goal, while “must + base verb” expresses what is necessary for that goal. The chapter combines these functions in one connected idea.',
    feedback: {
      correct: 'Correct. The sentence links a goal with a necessary relationship between two elements.',
      incorrect: 'Look for “for ... to ...” followed by “must + base verb” in a complete, meaningful relationship.',
    },
  },
  {
    id: 'yunus-b1-language-11-source-generalisation',
    type: 'multiple-choice',
    title: 'Move from a Viewpoint to a General Statement',
    instructions: 'Choose the option that first attributes an idea and then develops it into a natural general statement.',
    question: 'Which two-sentence sequence is the clearest and most coherent?',
    options: [
      'According to the mentor, mistakes can be useful teachers. A person who reflects on a mistake can make a better decision next time.',
      'According to the mentor mistakes can be useful teachers. A person who reflecting on a mistake can making a better decision next time.',
      'According to the mentor, mistakes can be useful teachers. Whoever, because, the next decision.',
    ],
    correctAnswer: 0,
    explanation: '“According to ...” marks the source of a viewpoint, while “a person who ...” can turn that idea into a wider statement about behaviour and consequence.',
    feedback: {
      correct: 'Correct. The first sentence identifies the viewpoint and the second develops it into a general relationship.',
      incorrect: 'Choose the option with a complete source phrase and a grammatical “a person who ...” statement.',
    },
  },
  {
    id: 'yunus-b1-language-11-production',
    type: 'reflection',
    title: 'Explain a Principle and Its Consequence',
    instructions: 'Write or say five to six connected B1 sentences about a principle for learning, friendship, teamwork, family life, or personal growth. Do not retell Chapter 11.',
    question: 'Can you state a goal, explain what must happen to reach it, attribute one idea to another person or source, and finish with a general statement about people and consequences?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “for a person to...”, “must...”, “According to...”, “as ... said...”, “a person who...”, and “whoever...”. Use only the patterns that fit your topic naturally.',
    feedback: {
      correct: 'Keep the response connected: goal, necessary relationship, attributed idea, explanation, and general consequence.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — State a goal using “for ... to ...” if natural.', mode: 'Individual' },
      { question: 'Sentence 2 — Explain what two actions, qualities, or people must do for that goal.', mode: 'Individual' },
      { question: 'Sentence 3 — Attribute a useful idea with “According to...” or “as ... said...”.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain why that idea matters in your chosen context.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Finish with “a person who...” or “whoever...” to express a broader consequence or principle.', mode: 'Pair' },
    ],
  },
];
