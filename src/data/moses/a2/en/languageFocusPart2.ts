import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-a2-language-3-could', type: 'matching', title: 'Could: Possibility and Difficulty',
      instructions: 'Match each pattern with its meaning.', question: 'How does Chapter 3 use could and could not?',
      matchingPairs: [
        { left: 'Soldiers could find her baby.', right: 'past possibility or danger' },
        { left: 'She could not sleep at night.', right: 'past inability' },
        { left: 'could + base verb', right: 'possible or able in the past' },
        { left: 'could not + base verb', right: 'not able in the past' },
      ],
      correctAnswer: {
        'Soldiers could find her baby.': 'past possibility or danger', 'She could not sleep at night.': 'past inability',
        'could + base verb': 'possible or able in the past', 'could not + base verb': 'not able in the past',
      },
      explanation: 'Could can express past possibility or ability; could not expresses inability.', feedback: { correct: 'Correct.', incorrect: 'Separate possible danger from inability.' },
    },
    {
      id: 'moses-a2-language-3-instructions-promise', type: 'sequencing', title: 'Instructions and Reassurance',
      instructions: 'Put the sentences in order.', question: 'How does the chapter move from instructions to reassurance?',
      sequencingItems: [
        { id: '1', text: 'Take a basket.' }, { id: '2', text: 'Put your baby in the basket.' },
        { id: '3', text: 'Take the basket to the River Nile.' }, { id: '4', text: 'Allah will protect him.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'Imperatives give instructions; will + verb gives future reassurance.',
      feedback: { correct: 'Correct.', incorrect: 'Put the three commands before the future reassurance.' },
    },
    {
      id: 'moses-a2-language-3-tell-comparison', type: 'multiple-choice', title: 'Reported Instruction',
      instructions: 'Choose the correct pattern.', question: 'Which sentence correctly reports an instruction?',
      options: ['She told her daughter to follow the basket.', 'She told her daughter follow the basket.', 'She told to her daughter to follow the basket.'], correctAnswer: 0,
      explanation: 'Use tell + person + to + base verb.', feedback: { correct: 'Correct.', incorrect: 'Use tell + person + to + verb.' },
    },
    {
      id: 'moses-a2-language-3-production', type: 'reflection', title: 'Use It: Help in a Difficult Situation',
      instructions: 'Create a safe new A2 situation using at least three Chapter 3 patterns.', question: 'Can you describe a difficulty, give an instruction and add reassurance?',
      correctAnswer: null, explanation: 'Use could/could not, an imperative, will + verb, tell + person + to + verb, or a simple comparative.',
      feedback: { correct: 'Keep the situation new and the forms accurate.', incorrect: '' },
      discussionPrompts: [
        { question: 'Describe one difficulty with could/could not.', mode: 'Individual' },
        { question: 'Give one safe instruction.', mode: 'Individual' },
        { question: 'Add one will sentence.', mode: 'Individual' },
        { question: 'Report one instruction.', mode: 'Pair' },
      ],
    },
  ],
};
