import type { Exercise } from '../../../../types';

/**
 * Additional manually authored Moses A2 Language Focus activities.
 * Each chapter is grounded in its own story language and kept separate from comprehension work.
 */
export const mosesA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-a2-language-3-could',
      type: 'matching',
      title: 'Could: Possibility and Difficulty',
      instructions: 'Match each Chapter 3 sentence with what “could” communicates in that situation.',
      question: 'How does Chapter 3 use “could” and “could not”?',
      matchingPairs: [
        { left: 'Soldiers could find her baby.', right: 'shows a possible danger' },
        { left: 'She could not sleep at night.', right: 'shows that she was unable to sleep' },
        { left: 'could + base verb', right: 'can describe a past possibility or ability' },
        { left: 'could not + base verb', right: 'can describe something a person was unable to do' },
      ],
      correctAnswer: {
        'Soldiers could find her baby.': 'shows a possible danger',
        'She could not sleep at night.': 'shows that she was unable to sleep',
        'could + base verb': 'can describe a past possibility or ability',
        'could not + base verb': 'can describe something a person was unable to do',
      },
      explanation: 'In Chapter 3, “could” appears in two useful A2 jobs: a possible danger and an ability/difficulty. “Could not + base verb” gives the negative form.',
      feedback: {
        correct: 'Correct. You separated possibility from inability.',
        incorrect: 'Ask whether the sentence means “this was possible” or “she was unable to do this”.',
      },
    },
    {
      id: 'moses-a2-language-3-instructions-promise',
      type: 'sequencing',
      title: 'Instructions and Reassurance',
      instructions: 'Put the chunks in order to rebuild the pattern used in Allah’s instruction to Moses’s mother.',
      question: 'How does the chapter move from direct instructions to reassurance?',
      sequencingItems: [
        { id: '1', text: 'Take a basket.' },
        { id: '2', text: 'Put your baby in the basket.' },
        { id: '3', text: 'Take the basket to the River Nile.' },
        { id: '4', text: 'Allah will protect him.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Imperatives such as “Take” and “Put” give direct instructions. “Will + base verb” can then express what will happen later or give reassurance about the future.',
      feedback: {
        correct: 'Good. You followed the instruction → reassurance pattern.',
        incorrect: 'Place the three commands first, then the sentence with “will”.',
      },
    },
    {
      id: 'moses-a2-language-3-tell-comparison',
      type: 'matching',
      title: 'Telling Someone What to Do and Comparing',
      instructions: 'Match each Chapter 3 pattern with its language function.',
      question: 'What two other useful patterns appear near the end of the chapter?',
      matchingPairs: [
        { left: 'She told her daughter to follow the basket.', right: 'reports an instruction given to another person' },
        { left: 'tell + person + to + verb', right: 'gives the pattern for reporting what someone should do' },
        { left: 'Allah was kinder to the baby Moses than her.', right: 'compares two people using a comparative adjective' },
        { left: 'kinder ... than', right: 'shows that one person has more of a quality than another' },
      ],
      correctAnswer: {
        'She told her daughter to follow the basket.': 'reports an instruction given to another person',
        'tell + person + to + verb': 'gives the pattern for reporting what someone should do',
        'Allah was kinder to the baby Moses than her.': 'compares two people using a comparative adjective',
        'kinder ... than': 'shows that one person has more of a quality than another',
      },
      explanation: 'Chapter 3 uses “tell + person + to + verb” for a reported instruction and “comparative adjective + than” for comparison.',
      feedback: {
        correct: 'Correct. You identified both the reported-instruction and comparison patterns.',
        incorrect: 'Look for who receives an instruction, then look for the word “than”.',
      },
    },
    {
      id: 'moses-a2-language-3-production',
      type: 'reflection',
      title: 'Use It: Help in a Difficult Situation',
      instructions: 'Create a new, safe A2 situation. Write or say three or four short sentences using at least three of the frames below.',
      question: 'Can you describe a difficulty, give instructions, add reassurance, and report one instruction?',
      correctAnswer: null,
      explanation: 'A strong response can use “could/could not”, an imperative, “will + verb”, and “tell + person + to + verb”. A simple comparative with “-er ... than” may also be added.',
      feedback: {
        correct: 'Keep the situation new and use each pattern for its real communication job.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Difficulty — Make one sentence with “could” or “could not”.', mode: 'Individual' },
        { question: 'Instruction — Give one safe command such as “Take this map.”', mode: 'Individual' },
        { question: 'Reassurance — Add one sentence with “will + verb”.', mode: 'Individual' },
        { question: 'Report — Say what one person told another person to do.', mode: 'Pair' },
      ],
    },
  ],
};
