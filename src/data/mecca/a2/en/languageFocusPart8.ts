import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-a2-language-9-response', type: 'matching', title: 'Reaction and Request',
      instructions: 'Match each Chapter 9 pattern with its job.', question: 'How does the chapter describe Abu Bakr’s response?',
      matchingPairs: [
        { left: 'heard that + clause', right: 'reports information someone received' },
        { left: 'right away', right: 'shows immediate action' },
        { left: 'asked + person + to + verb', right: 'reports a request' },
        { left: 'did not want to + verb', right: 'shows an unwilling intention' },
      ],
      correctAnswer: { 'heard that + clause': 'reports information someone received', 'right away': 'shows immediate action', 'asked + person + to + verb': 'reports a request', 'did not want to + verb': 'shows an unwilling intention' },
      explanation: 'Chapter 9 moves from information to immediate action and repeated requests.', feedback: { correct: 'Correct.', incorrect: 'Separate information, speed, request and intention.' },
    },
    {
      id: 'mecca-a2-language-9-question', type: 'multiple-choice', title: 'Asking About a Past Action',
      instructions: 'Choose the grammatically correct question.', question: 'Which question uses did + base verb correctly?',
      options: ['What did he do wrong?', 'What did he did wrong?', 'What he did do wrong?'], correctAnswer: 0,
      explanation: 'Past questions use did + subject + base verb.', feedback: { correct: 'Correct.', incorrect: 'After did, use the base verb.' },
    },
    {
      id: 'mecca-a2-language-9-request', type: 'fill-blanks', title: 'Reporting a Request',
      instructions: 'Complete the request pattern.', question: 'Which word is missing?',
      fillBlanksText: 'Abu Bakr asked Umayya [blank] sell Bilal to him.', correctAnswer: 'to',
      explanation: 'Use asked + person + to + verb.', feedback: { correct: 'Correct.', incorrect: 'Use to before the requested action.' },
    },
    {
      id: 'mecca-a2-language-9-production', type: 'reflection', title: 'Respond to a Problem',
      instructions: 'Write or say four short A2 sentences about hearing of a safe everyday problem and helping.', question: 'Can you report information, act quickly, ask a question and make a request?', correctAnswer: null,
      explanation: 'Use at least three Chapter 9 patterns.', feedback: { correct: 'Keep the response practical and safe.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “I heard that ...”.', mode: 'Individual' },
        { question: 'Add “right away”.', mode: 'Individual' },
        { question: 'Ask one did-question.', mode: 'Individual' },
        { question: 'Use “asked ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
