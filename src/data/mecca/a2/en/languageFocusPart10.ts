import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-a2-language-11-change-choice', type: 'matching', title: 'Change, Time and Choice',
      instructions: 'Match each Chapter 11 pattern with its job.', question: 'How does the chapter connect Bilal’s freedom with the first Adhan?',
      matchingPairs: [
        { left: 'after + clause', right: 'shows one event happened later than another' },
        { left: 'wanted someone to + verb', right: 'expresses a desired action by another person' },
        { left: 'chose + person', right: 'shows a selection' },
        { left: 'even when + clause', right: 'shows something remained true despite difficulty' },
      ],
      correctAnswer: { 'after + clause': 'shows one event happened later than another', 'wanted someone to + verb': 'expresses a desired action by another person', 'chose + person': 'shows a selection', 'even when + clause': 'shows something remained true despite difficulty' },
      explanation: 'Chapter 11 uses time, selection and contrast-with-difficulty language.', feedback: { correct: 'Correct.', incorrect: 'Separate time, desire, selection and contrast.' },
    },
    {
      id: 'mecca-a2-language-11-purpose', type: 'multiple-choice', title: 'Choosing Someone for a Task',
      instructions: 'Choose the correct sentence.', question: 'Which sentence correctly expresses the Prophet’s wish?',
      options: ['He wanted someone to call people to prayer.', 'He wanted someone call people to prayer.', 'He wanted to someone called people to prayer.'], correctAnswer: 0,
      explanation: 'Use wanted + person + to + base verb.', feedback: { correct: 'Correct.', incorrect: 'Put the person before to + base verb.' },
    },
    {
      id: 'mecca-a2-language-11-time', type: 'fill-blanks', title: 'Connecting Events',
      instructions: 'Complete the time phrase.', question: 'Which word connects the Hijrah with the next event?',
      fillBlanksText: '[blank] the Hijrah, the Prophet (pbuh) wanted someone to call people to prayer.', correctAnswer: 'After',
      explanation: '“After + noun/event” places one event later than another.', feedback: { correct: 'Correct.', incorrect: 'Use the chapter time connector.' },
    },
    {
      id: 'mecca-a2-language-11-production', type: 'reflection', title: 'Choose Someone for a Task',
      instructions: 'Write or say four short A2 sentences about choosing someone for a positive group task.', question: 'Can you use after, wanted someone to, chose and even when?', correctAnswer: null,
      explanation: 'Use at least three Chapter 11 patterns.', feedback: { correct: 'Keep the example positive and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “After ...”.', mode: 'Individual' },
        { question: 'Use “wanted someone to ...”.', mode: 'Individual' },
        { question: 'Say who was chosen.', mode: 'Individual' },
        { question: 'Add one “even when ...” sentence.', mode: 'Pair' },
      ],
    },
  ],
};
