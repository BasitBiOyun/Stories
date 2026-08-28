import type { Exercise } from '../../../../types';

/** Chapter 13 English Language Focus, derived only from the locked Chapter 13 story text. */
export const yunusB1LanguageFocusChapter13: Exercise[] = [
  {
    id: 'yunus-b1-language-13-relations',
    type: 'matching',
    title: 'Generalise, Predict, and Give Guidance',
    instructions: 'Match each pattern from the chapter with the meaning-making job it performs. Focus on how the language builds a general principle rather than on recalling the moral lesson itself.',
    question: 'How do these patterns turn an observation into wider guidance?',
    matchingPairs: [
      { left: 'those who ... will ...', right: 'connects a defined group with a likely or promised future result' },
      { left: 'whoever ...', right: 'makes a general statement that applies to any person meeting the condition' },
      { left: 'if ...', right: 'sets the condition under which the following idea becomes relevant' },
      { left: 'one must ...', right: 'expresses impersonal necessity or strong guidance' },
      { left: 'in the following verse ...', right: 'moves the discourse to a new but related example or warning' },
    ],
    correctAnswer: {
      'those who ... will ...': 'connects a defined group with a likely or promised future result',
      'whoever ...': 'makes a general statement that applies to any person meeting the condition',
      'if ...': 'sets the condition under which the following idea becomes relevant',
      'one must ...': 'expresses impersonal necessity or strong guidance',
      'in the following verse ...': 'moves the discourse to a new but related example or warning',
    },
    explanation: 'Chapter 13 repeatedly moves from a quality or condition to a wider consequence, then uses impersonal guidance and discourse markers to organise related examples.',
    feedback: {
      correct: 'Correct. You identified how the chapter generalises, links conditions with consequences, and shifts between related examples.',
      incorrect: 'Ask whether the pattern identifies a group, generalises to anyone, sets a condition, expresses necessity, or moves to another example.',
    },
  },
  {
    id: 'yunus-b1-language-13-general-result',
    type: 'multiple-choice',
    title: 'Express a General Result',
    instructions: 'Choose the sentence that naturally transfers the chapter pattern to a new context.',
    question: 'Which sentence best expresses a general condition and its usual result?',
    options: [
      'Whoever listens carefully to both sides usually understands the disagreement more clearly.',
      'Whoever will listen carefully to both sides understanding the disagreement more clearly.',
      'Whoever listened carefully because the disagreement must clearly.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter uses “whoever ...” to introduce a condition that can apply to any person, followed by a general consequence.',
    feedback: {
      correct: 'Correct. The sentence gives a complete general condition and a natural result.',
      incorrect: 'Choose the option where “whoever” introduces a complete action and the main clause gives the resulting general statement.',
    },
  },
  {
    id: 'yunus-b1-language-13-condition-guidance',
    type: 'multiple-choice',
    title: 'Turn a Condition into Guidance',
    instructions: 'Choose the sentence that uses a condition and impersonal necessity coherently.',
    question: 'Which sentence best follows the chapter pattern “if ... one must ...”?',
    options: [
      'If trust is important in a team, one must speak honestly when a problem appears.',
      'If trust important in a team, one must speaking honestly when a problem appears.',
      'If trust is important in a team, one must to honest because problem.',
    ],
    correctAnswer: 0,
    explanation: 'The condition identifies when the principle matters, and “one must + base verb” expresses a strong general requirement without naming a particular person.',
    feedback: {
      correct: 'Correct. The condition and the guidance form one clear meaning relationship.',
      incorrect: 'Look for a complete “if” clause followed by “one must + base verb”.',
    },
  },
  {
    id: 'yunus-b1-language-13-production',
    type: 'reflection',
    title: 'Build a Short Principle-and-Result Paragraph',
    instructions: 'Write or say five connected B1 sentences about a principle in school, friendship, teamwork, family life, or personal growth. Do not retell Chapter 13.',
    question: 'Can you introduce one principle, generalise who it affects, show a result, add a related warning or contrast, and finish with practical guidance?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “those who ... will ...”, “whoever ...”, “if ...”, “one must ...”, and a transition such as “in another case” or “in the following example”. Use only the forms that fit your message naturally.',
    feedback: {
      correct: 'Keep the response connected: principle, general condition, consequence, related warning or example, and final guidance.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Introduce the principle and why it matters.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “those who ... will ...” or another natural group-and-result pattern.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “whoever ...” to make a broader generalisation.', mode: 'Pair' },
      { question: 'Sentence 4 — Add a related warning, contrast, or second example with a suitable transition.', mode: 'Pair' },
      { question: 'Sentence 5 — Use “if ... one must ...” or another natural condition-and-guidance structure.', mode: 'Pair' },
    ],
  },
];
