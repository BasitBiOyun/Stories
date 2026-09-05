import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart12: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-a2-language-13-comparison', type: 'matching', title: 'Equality and Comparison',
      instructions: 'Match each Chapter 13 pattern with its job.', question: 'How does the chapter compare people and explain what matters?',
      matchingPairs: [
        { left: 'not better than', right: 'rejects a claim of superiority' },
        { left: 'because of + noun', right: 'gives a reason before a noun phrase' },
        { left: 'too + adjective + to + verb', right: 'shows that a condition prevents an action' },
        { left: 'What matters is + noun phrase', right: 'states what is important' },
      ],
      correctAnswer: { 'not better than': 'rejects a claim of superiority', 'because of + noun': 'gives a reason before a noun phrase', 'too + adjective + to + verb': 'shows that a condition prevents an action', 'What matters is + noun phrase': 'states what is important' },
      explanation: 'Chapter 13 combines equality language with reason, degree and importance.', feedback: { correct: 'Correct.', incorrect: 'Separate comparison, reason, degree and importance.' },
    },
    {
      id: 'mecca-a2-language-13-degree', type: 'multiple-choice', title: 'Too ... to ...',
      instructions: 'Choose the correct sentence.', question: 'Which sentence correctly shows that sadness prevented an action?',
      options: ['Bilal was too sad to call the prayer.', 'Bilal was too sad calling the prayer.', 'Bilal too was sad to called the prayer.'], correctAnswer: 0,
      explanation: 'Use too + adjective + to + base verb.', feedback: { correct: 'Correct.', incorrect: 'Use too + adjective + to + base verb.' },
    },
    {
      id: 'mecca-a2-language-13-importance', type: 'fill-blanks', title: 'What Is Important?',
      instructions: 'Complete the statement.', question: 'Which word completes the chapter pattern?',
      fillBlanksText: 'What [blank] is the heart and good actions.', correctAnswer: 'matters',
      explanation: '“What matters is ...” introduces what the speaker considers important.', feedback: { correct: 'Correct.', incorrect: 'Use the verb from the final paragraph.' },
    },
    {
      id: 'mecca-a2-language-13-production', type: 'reflection', title: 'State a Fair Principle',
      instructions: 'Write or say four short A2 sentences about fairness and what makes a person valuable.', question: 'Can you compare fairly, give a reason and state what matters?', correctAnswer: null,
      explanation: 'Use at least three Chapter 13 patterns without adding claims outside the chapter’s theme.', feedback: { correct: 'Keep the message respectful and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “not better than ...”.', mode: 'Individual' },
        { question: 'Give one reason with “because of ...”.', mode: 'Individual' },
        { question: 'Use one “too ... to ...” sentence in a neutral example.', mode: 'Individual' },
        { question: 'Finish with “What matters is ...”.', mode: 'Pair' },
      ],
    },
  ],
};
