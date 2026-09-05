import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-a2-language-8-dialogue', type: 'matching', title: 'Questions, Answers and Pressure',
      instructions: 'Match each Chapter 8 pattern with its job.', question: 'How does the chapter build the confrontation?',
      matchingPairs: [
        { left: 'Is it true? / Did you ...?', right: 'asks for confirmation about a past action' },
        { left: 'refused to + verb', right: 'shows that someone would not do an action' },
        { left: 'forced + person + to + verb', right: 'shows pressure or compulsion' },
        { left: 'If + present, will + verb', right: 'connects a condition with a future result' },
      ],
      correctAnswer: {
        'Is it true? / Did you ...?': 'asks for confirmation about a past action',
        'refused to + verb': 'shows that someone would not do an action',
        'forced + person + to + verb': 'shows pressure or compulsion',
        'If + present, will + verb': 'connects a condition with a future result',
      },
      explanation: 'Chapter 8 combines questioning, refusal, pressure and condition-result language.',
      feedback: { correct: 'Correct.', incorrect: 'Separate question, refusal, pressure and condition.' },
    },
    {
      id: 'mecca-a2-language-8-refusal', type: 'multiple-choice', title: 'Refusing an Action',
      instructions: 'Choose the correct sentence.', question: 'Which sentence correctly uses refused to + verb?',
      options: ['Bilal refused to worship the idols.', 'Bilal refused worship the idols.', 'Bilal refused to worshipped the idols.'], correctAnswer: 0,
      explanation: 'Use “refused to + base verb”.', feedback: { correct: 'Correct.', incorrect: 'Use refused to followed by the base verb.' },
    },
    {
      id: 'mecca-a2-language-8-condition', type: 'fill-blanks', title: 'Condition and Result',
      instructions: 'Complete the future result.', question: 'Which helper completes the sentence?',
      fillBlanksText: 'If you speak well of our idols, you [blank] be free.', correctAnswer: 'will',
      explanation: 'The chapter uses if + present with will + verb for a future result.', feedback: { correct: 'Correct.', incorrect: 'Use the future helper in the result clause.' },
    },
    {
      id: 'mecca-a2-language-8-production', type: 'reflection', title: 'Use the Language Safely',
      instructions: 'Write or say four short A2 sentences about refusing unfair pressure in a safe everyday situation.', question: 'Can you use a question, refusal and condition-result pattern?', correctAnswer: null,
      explanation: 'Transfer the language without recreating the violent scene.', feedback: { correct: 'Use at least three Chapter 8 patterns.', incorrect: '' },
      discussionPrompts: [
        { question: 'Ask one past yes/no question.', mode: 'Individual' },
        { question: 'Use “refused to ...”.', mode: 'Individual' },
        { question: 'Use “forced ... to ...” only in a safe non-violent example.', mode: 'Individual' },
        { question: 'Finish with an if–will sentence.', mode: 'Pair' },
      ],
    },
  ],
};
