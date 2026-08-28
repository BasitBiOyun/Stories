import type { Exercise } from '../../../../types';

/** Chapter 8 English Language Focus, derived only from the locked Chapter 8 story text. */
export const yunusB1LanguageFocusChapter8: Exercise[] = [
  {
    id: 'yunus-b1-language-8-definition-viewpoint',
    type: 'matching',
    title: 'Define, Attribute, Connect',
    instructions: 'Match each pattern from the chapter with the job it performs in a text. Focus on meaning and function, not on recalling the chapter’s ideas.',
    question: 'How does Chapter 8 define an idea, attribute a viewpoint, and connect one idea to another?',
    matchingPairs: [
      { left: 'the idea of ... which means ...', right: 'defines or explains a key concept' },
      { left: 'According to ...', right: 'shows whose viewpoint or interpretation is being reported' },
      { left: 'the source of all things. So ...', right: 'moves from a stated basis to a conclusion or consequence' },
      { left: '..., which was a key idea for ...', right: 'adds extra information about an already identified idea' },
    ],
    correctAnswer: {
      'the idea of ... which means ...': 'defines or explains a key concept',
      'According to ...': 'shows whose viewpoint or interpretation is being reported',
      'the source of all things. So ...': 'moves from a stated basis to a conclusion or consequence',
      '..., which was a key idea for ...': 'adds extra information about an already identified idea',
    },
    explanation: 'The chapter does more than state beliefs. It defines terms, marks a viewpoint, draws a consequence with “so”, and adds explanatory information with a relative clause.',
    feedback: {
      correct: 'Correct. You identified four different discourse functions.',
      incorrect: 'Ask whether the expression defines, attributes a viewpoint, draws a consequence, or adds extra information.',
    },
  },
  {
    id: 'yunus-b1-language-8-one-true-focus',
    type: 'multiple-choice',
    title: 'Focus on One True Choice',
    instructions: 'Choose the sentence that most naturally uses the chapter’s pattern for singling out one true or central option.',
    question: 'Which sentence best mirrors “there is only one true ..., and that is ...” without copying the story content?',
    options: [
      'For this team, there is only one final goal, and that is to finish the project safely.',
      'For this team, there one only final goal and that safely project finish.',
      'For this team, there are many final goals, and that is the only one although none is central.',
    ],
    correctAnswer: 0,
    explanation: 'The pattern “there is only one ..., and that is ...” narrows several possibilities to one central choice and then identifies it clearly.',
    feedback: {
      correct: 'Correct. The sentence first limits the possibilities and then identifies the single central choice.',
      incorrect: 'Look for a sentence that uses “there is only one ...” and then names that one choice with “and that is ...”.',
    },
  },
  {
    id: 'yunus-b1-language-8-whoever-condition',
    type: 'multiple-choice',
    title: 'Whoever: A General Human Case',
    instructions: 'Choose the sentence in which “whoever” introduces a general case about any person who does something.',
    question: 'Which sentence uses “whoever” in the same generalising way as the poem?',
    options: [
      'Whoever ignores the warning must accept the consequences of that choice.',
      'Whoever the warning because consequences choice the.',
      'Whoever refers to one named person who has already been identified in the previous sentence.',
    ],
    correctAnswer: 0,
    explanation: 'In the poem, “whoever” does not name one specific person. It means any person who meets the condition described after it.',
    feedback: {
      correct: 'Correct. “Whoever” introduces a general human case rather than a named individual.',
      incorrect: 'Choose the sentence where the meaning is “any person who...”.',
    },
  },
  {
    id: 'yunus-b1-language-8-production',
    type: 'reflection',
    title: 'Explain an Idea from Definition to Conclusion',
    instructions: 'Write or say five to six connected B1 sentences about a principle, belief, or important idea from school, community life, science, or everyday experience. Do not retell Chapter 8.',
    question: 'Can you define the idea, attribute a viewpoint, add explanatory information, draw a consequence, and end with a general statement about people?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “the idea of ... which means ...”, “according to ...”, “..., which is/was ...”, “so ...”, “there is only one ..., and that is ...”, and “whoever ...”.',
    feedback: {
      correct: 'Keep the paragraph connected: define the idea first, develop it, then move to a consequence or general statement.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Introduce an idea and define it with “which means...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Attribute a viewpoint with “according to...”.', mode: 'Individual' },
      { question: 'Sentence 3 — Add extra information with a “which” clause.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “so” to show a conclusion or consequence.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Identify one central point with “there is only one..., and that is...” or finish with a general “whoever...” statement.', mode: 'Pair' },
    ],
  },
];
