import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-a2-language-4-frequency', type: 'matching', title: 'Frequency and Duty',
      instructions: 'Match each Chapter 4 pattern with its job.', question: 'How does the chapter describe repeated treatment and duty?',
      matchingPairs: [
        { left: 'always / often', right: 'shows frequency' },
        { left: 'every + singular noun', right: 'includes all members one by one' },
        { left: 'job was to + verb', right: 'describes a regular task' },
        { left: 'had to + verb', right: 'shows past necessity' },
      ],
      correctAnswer: { 'always / often': 'shows frequency', 'every + singular noun': 'includes all members one by one', 'job was to + verb': 'describes a regular task', 'had to + verb': 'shows past necessity' },
      explanation: 'Chapter 4 combines frequency, routine and obligation.', feedback: { correct: 'Correct.', incorrect: 'Separate frequency, routine and necessity.' },
    },
    {
      id: 'mecca-a2-language-4-purpose', type: 'multiple-choice', title: 'Purpose',
      instructions: 'Choose the sentence that correctly uses to + verb for purpose.', question: 'Which sentence explains why an action was done?',
      options: ['They called him names to hurt his feelings.', 'They called him names for hurt his feelings.', 'They called him names hurting to his feelings.'], correctAnswer: 0,
      explanation: '“To + base verb” can explain purpose.', feedback: { correct: 'Correct.', incorrect: 'Use to + base verb.' },
    },
    {
      id: 'mecca-a2-language-4-obligation', type: 'fill-blanks', title: 'Past Obligation',
      instructions: 'Complete the sentence with one word.', question: 'Which word completes the chapter pattern?',
      fillBlanksText: 'Bilal [blank] to be patient and work hard every day.', correctAnswer: 'had',
      explanation: '“Had to + verb” expresses a past necessity.', feedback: { correct: 'Correct.', incorrect: 'Use the past necessity pattern.' },
    },
    {
      id: 'mecca-a2-language-4-production', type: 'reflection', title: 'Describe a Difficult Routine',
      instructions: 'Write or say four short A2 sentences about a difficult daily routine.', question: 'Can you use frequency, duty, purpose and obligation?', correctAnswer: null,
      explanation: 'Use at least three Chapter 4 patterns.', feedback: { correct: 'Keep it short and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use always or often.', mode: 'Individual' },
        { question: 'Add “His/Her job was to ...”.', mode: 'Individual' },
        { question: 'Add one purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Finish with “had to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
