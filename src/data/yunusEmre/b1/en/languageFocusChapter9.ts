import type { Exercise } from '../../../../types';

/** Chapter 9 English Language Focus, derived only from the locked Chapter 9 story text. */
export const yunusB1LanguageFocusChapter9: Exercise[] = [
  {
    id: 'yunus-b1-language-9-result-purpose',
    type: 'matching',
    title: 'From Cause to Purpose',
    instructions: 'Match each expression from the chapter with the job it performs in a connected explanation. Focus on function rather than recalling the chapter content.',
    question: 'How does Chapter 9 move from a cause or result to a goal, a means, or a reminder?',
    matchingPairs: [
      { left: 'As a result of ...', right: 'introduces an outcome that follows from an earlier cause or process' },
      { left: 'In this way, ...', right: 'shows a consequence or explains how the previous idea leads forward' },
      { left: 'The main goal ... is to ...', right: 'states an aim clearly' },
      { left: 'for achieving ...', right: 'shows the purpose of an action or instruction' },
      { left: 'remind us of ...', right: 'brings an important rule, idea, or responsibility back to attention' },
    ],
    correctAnswer: {
      'As a result of ...': 'introduces an outcome that follows from an earlier cause or process',
      'In this way, ...': 'shows a consequence or explains how the previous idea leads forward',
      'The main goal ... is to ...': 'states an aim clearly',
      'for achieving ...': 'shows the purpose of an action or instruction',
      'remind us of ...': 'brings an important rule, idea, or responsibility back to attention',
    },
    explanation: 'The chapter links ideas through result, consequence, goal, purpose, and reminder. These expressions help a B1 learner build an explanation instead of producing isolated sentences.',
    feedback: {
      correct: 'Correct. You identified how the expressions organise an explanation.',
      incorrect: 'Ask whether the expression presents a result, develops a consequence, states a goal, gives a purpose, or recalls an important responsibility.',
    },
  },
  {
    id: 'yunus-b1-language-9-should-general-case',
    type: 'multiple-choice',
    title: 'A General Responsibility',
    instructions: 'Choose the sentence that naturally combines a general person reference with “should” to express an expected or responsible action.',
    question: 'Which sentence best mirrors the pattern “Anyone who ... should ...” in a new context?',
    options: [
      'Anyone who joins the project should understand the safety rules before starting work.',
      'Anyone who joins the project should understood the safety rules before starts work.',
      'Anyone who joins the project describes one named person, so “should” cannot express responsibility.',
    ],
    correctAnswer: 0,
    explanation: '“Anyone who ...” refers to any person who meets the condition, while “should ...” expresses an expected, advisable, or responsible action for that group.',
    feedback: {
      correct: 'Correct. The sentence gives a general condition and then states what is expected of anyone in that situation.',
      incorrect: 'Look for a sentence meaning “every person who meets this condition is expected to do this”.',
    },
  },
  {
    id: 'yunus-b1-language-9-parallel-relationship',
    type: 'multiple-choice',
    title: 'Build a Two-Way Relationship',
    instructions: 'Choose the sentence that uses balanced parallel clauses to show a relationship working in both directions.',
    question: 'Which sentence most naturally follows the chapter’s pattern “Those who ... ..., and those who ... also ...”?',
    options: [
      'Those who listen carefully understand others better, and those who understand others also communicate more thoughtfully.',
      'Those who listen carefully understand others better, and those who understanding others also communicates thoughtful.',
      'Those who listen carefully because the second clause must repeat exactly the same words without adding a related idea.',
    ],
    correctAnswer: 0,
    explanation: 'The repeated “those who ...” structure creates balance between two related general statements. “Also” then adds the second relationship without breaking that parallel shape.',
    feedback: {
      correct: 'Correct. The two clauses are balanced and connected as related general truths.',
      incorrect: 'Choose the option with two complete, parallel “those who ...” clauses and a meaningful relationship between them.',
    },
  },
  {
    id: 'yunus-b1-language-9-production',
    type: 'reflection',
    title: 'Explain a Goal and the Responsibilities Around It',
    instructions: 'Write or say five to six connected B1 sentences about a goal in school, community life, teamwork, health, or another everyday context. Do not retell Chapter 9.',
    question: 'Can you move from a result or situation to a goal, explain a purpose, state a general responsibility, and finish with two connected general statements?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “as a result of...”, “in this way...”, “the main goal is to...”, “for achieving...”, “remind us of...”, “anyone who... should...”, and “those who..., and those who... also...”.',
    feedback: {
      correct: 'Keep the paragraph connected: establish the situation, state the goal, explain what helps achieve it, and end with a broader responsibility or relationship.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Introduce a situation or result with “as a result of...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Develop the consequence with “in this way...”.', mode: 'Individual' },
      { question: 'Sentence 3 — State the main goal with “the main goal is to...”.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain a purpose with “for achieving...” or mention something that reminds people of an important responsibility.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Use “anyone who... should...” and/or a balanced “those who..., and those who... also...” relationship.', mode: 'Pair' },
    ],
  },
];
