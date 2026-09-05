import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-a2-language-3-change-comparison', type: 'matching', title: 'Change and Comparison',
      instructions: 'Match each Chapter 3 pattern with its job.', question: 'How does the chapter compare people and show change?',
      matchingPairs: [
        { left: 'were getting + comparative', right: 'shows continuing change in the past' },
        { left: 'the most + adjective', right: 'compares one group with all others' },
        { left: 'one of the + superlative + plural noun', right: 'places one person inside a top group' },
        { left: 'from + place', right: 'shows origin' },
      ],
      correctAnswer: {
        'were getting + comparative': 'shows continuing change in the past',
        'the most + adjective': 'compares one group with all others',
        'one of the + superlative + plural noun': 'places one person inside a top group',
        'from + place': 'shows origin',
      },
      explanation: 'Chapter 3 uses comparison, change and origin language to describe Mecca and its social structure.',
      feedback: { correct: 'Correct.', incorrect: 'Separate change, comparison and origin.' },
    },
    {
      id: 'mecca-a2-language-3-place', type: 'multiple-choice', title: 'Describing a Place',
      instructions: 'Choose the sentence with the chapter pattern for a place and its function.', question: 'Which sentence is correct?',
      options: ['Mecca was a center for buying and selling slaves.', 'Mecca was a center buy and sell slaves.', 'Mecca were a center for buying slaves.'], correctAnswer: 0,
      explanation: '“Was a center for + -ing” says what a place was important for.',
      feedback: { correct: 'Correct.', incorrect: 'Use was a center for + -ing.' },
    },
    {
      id: 'mecca-a2-language-3-time', type: 'fill-blanks', title: 'Time and Intention',
      instructions: 'Complete the sentence with the time connector.', question: 'Which word introduces the event that changed Umayya’s response?',
      fillBlanksText: '[blank] Prophet Muhammad (pbuh) started teaching Islam, Umayya wanted the message to stop.', correctAnswer: 'When',
      explanation: '“When + past clause” gives the time or background for another past event.',
      feedback: { correct: 'Correct.', incorrect: 'Use the chapter connector that introduces a past event.' },
    },
    {
      id: 'mecca-a2-language-3-production', type: 'reflection', title: 'Describe a Changing City',
      instructions: 'Write or say four short A2 sentences about an imaginary city.', question: 'Can you describe place, change, comparison and intention?', correctAnswer: null,
      explanation: 'Use at least three Chapter 3 patterns.', feedback: { correct: 'Keep the four sentences connected.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “was a center for ...”.', mode: 'Individual' },
        { question: 'Add “were getting ...”.', mode: 'Individual' },
        { question: 'Use one superlative.', mode: 'Individual' },
        { question: 'Add “When ..., someone wanted ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
