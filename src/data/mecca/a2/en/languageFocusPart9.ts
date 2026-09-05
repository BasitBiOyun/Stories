import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-a2-language-10-condition-price', type: 'matching', title: 'Price, Condition and Freedom',
      instructions: 'Match each Chapter 10 pattern with its job.', question: 'How does the chapter describe price and freedom?',
      matchingPairs: [
        { left: 'agreed to + verb', right: 'shows acceptance of an action' },
        { left: 'If you offered ..., I would ...', right: 'describes an unreal or imagined condition' },
        { left: 'no longer + noun/adjective', right: 'shows that an earlier state has ended' },
        { left: 'could + verb', right: 'shows past possibility or ability' },
      ],
      correctAnswer: { 'agreed to + verb': 'shows acceptance of an action', 'If you offered ..., I would ...': 'describes an unreal or imagined condition', 'no longer + noun/adjective': 'shows that an earlier state has ended', 'could + verb': 'shows past possibility or ability' },
      explanation: 'Chapter 10 uses agreement, imagined conditions and change of status.', feedback: { correct: 'Correct.', incorrect: 'Separate agreement, condition, ended state and ability.' },
    },
    {
      id: 'mecca-a2-language-10-condition', type: 'multiple-choice', title: 'Imagined Condition',
      instructions: 'Choose the sentence that follows the chapter pattern.', question: 'Which sentence is correct?',
      options: ['If you asked me for more, I would still pay.', 'If you ask me for more, I would paid.', 'If you asked me for more, I will still paid.'], correctAnswer: 0,
      explanation: 'The chapter uses if + past with would + base verb for an imagined condition.', feedback: { correct: 'Correct.', incorrect: 'Use asked in the if-clause and would + base verb in the result.' },
    },
    {
      id: 'mecca-a2-language-10-status', type: 'fill-blanks', title: 'A Changed Status',
      instructions: 'Complete the expression.', question: 'Which word completes the phrase?',
      fillBlanksText: 'Bilal was now a free man and no [blank] a slave.', correctAnswer: 'longer',
      explanation: '“No longer” shows that a previous state has ended.', feedback: { correct: 'Correct.', incorrect: 'Use the two-word expression meaning not anymore.' },
    },
    {
      id: 'mecca-a2-language-10-production', type: 'reflection', title: 'Describe a Change',
      instructions: 'Write or say four short A2 sentences about a positive change in someone’s situation.', question: 'Can you use agreement, an imagined condition and no longer?', correctAnswer: null,
      explanation: 'Use at least three Chapter 10 patterns.', feedback: { correct: 'Keep the example realistic and simple.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “agreed to ...”.', mode: 'Individual' },
        { question: 'Add one “If ..., I would ...” sentence.', mode: 'Individual' },
        { question: 'Use “no longer ...”.', mode: 'Individual' },
        { question: 'Add one could/couldn’t sentence.', mode: 'Pair' },
      ],
    },
  ],
};
