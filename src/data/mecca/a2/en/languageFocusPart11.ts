import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-a2-language-12-habit-message', type: 'matching', title: 'Habit, Meaning and Equality',
      instructions: 'Match each Chapter 12 pattern with its job.', question: 'How does the chapter connect Bilal’s routine with the Prophet’s teaching?',
      matchingPairs: [
        { left: 'used to + verb', right: 'describes a repeated past habit' },
        { left: 'which means + clause', right: 'explains the meaning of words' },
        { left: 'told + person + to + verb', right: 'reports an instruction' },
        { left: 'all + plural noun + are', right: 'makes a general statement about everyone' },
      ],
      correctAnswer: { 'used to + verb': 'describes a repeated past habit', 'which means + clause': 'explains the meaning of words', 'told + person + to + verb': 'reports an instruction', 'all + plural noun + are': 'makes a general statement about everyone' },
      explanation: 'Chapter 12 combines past habit, explanation, instruction and general statements.', feedback: { correct: 'Correct.', incorrect: 'Separate habit, meaning, instruction and general truth.' },
    },
    {
      id: 'mecca-a2-language-12-habit', type: 'multiple-choice', title: 'Past Habit',
      instructions: 'Choose the sentence that describes a repeated past habit.', question: 'Which sentence is correct?',
      options: ['Bilal used to start the morning call very early.', 'Bilal use to started the morning call.', 'Bilal was use to start the morning call.'], correctAnswer: 0,
      explanation: 'Use “used to + base verb” for a repeated past habit.', feedback: { correct: 'Correct.', incorrect: 'Use used to followed by the base verb.' },
    },
    {
      id: 'mecca-a2-language-12-instruction', type: 'fill-blanks', title: 'Reported Instruction',
      instructions: 'Complete the pattern.', question: 'Which word is missing?',
      fillBlanksText: 'The Prophet (pbuh) told him [blank] repeat it every morning.', correctAnswer: 'to',
      explanation: 'Use told + person + to + verb.', feedback: { correct: 'Correct.', incorrect: 'Use to before the instructed action.' },
    },
    {
      id: 'mecca-a2-language-12-production', type: 'reflection', title: 'Explain a Routine and a Principle',
      instructions: 'Write or say four short A2 sentences about a routine and one fair principle.', question: 'Can you use used to, which means, told ... to, and all ... are?', correctAnswer: null,
      explanation: 'Use at least three Chapter 12 patterns.', feedback: { correct: 'Keep the language simple and respectful.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “used to ...”.', mode: 'Individual' },
        { question: 'Explain one phrase with “which means ...”.', mode: 'Individual' },
        { question: 'Report one instruction.', mode: 'Individual' },
        { question: 'End with an “All ... are ...” statement.', mode: 'Pair' },
      ],
    },
  ],
};
