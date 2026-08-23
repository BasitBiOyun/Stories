import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mecca-a2-language-7-telling-wanting',
      type: 'matching',
      title: 'Telling and Wanting',
      instructions: 'Match each Chapter 7 expression with the job it does.',
      question: 'How does the chapter report information and Bilal’s intention?',
      matchingPairs: [
        { left: 'Abu Bakr told Bilal about the new religion', right: 'tell + person + about + noun introduces a topic or subject' },
        { left: 'Bilal told Abu Bakr that he wanted to be a Muslim', right: 'tell + person + that + clause reports information or a statement' },
        { left: 'he wanted to be a Muslim', right: 'want to + base verb expresses a wish or intention' },
        { left: 'Abu Bakr was very happy to hear this', right: 'be happy to + verb expresses a positive reaction to an action or event' },
      ],
      correctAnswer: {
        'Abu Bakr told Bilal about the new religion': 'tell + person + about + noun introduces a topic or subject',
        'Bilal told Abu Bakr that he wanted to be a Muslim': 'tell + person + that + clause reports information or a statement',
        'he wanted to be a Muslim': 'want to + base verb expresses a wish or intention',
        'Abu Bakr was very happy to hear this': 'be happy to + verb expresses a positive reaction to an action or event',
      },
      explanation: 'Chapter 7 uses “tell ... about”, “tell ... that”, “want to”, and “happy to” to move from sharing information to expressing intention and reaction.',
      feedback: {
        correct: 'Correct. You separated topic, reported information, intention and reaction.',
        incorrect: 'Look at what Abu Bakr told Bilal, what Bilal told Abu Bakr, what Bilal wanted, and Abu Bakr’s reaction.',
      },
    },
    {
      id: 'mecca-a2-language-7-time-linking',
      type: 'matching',
      title: 'Linking Events in Time',
      instructions: 'Match each time expression with its function.',
      question: 'How does Chapter 7 connect one past event to another?',
      matchingPairs: [
        { left: 'After Bilal met Abu Bakr, he went back home', right: 'after + past clause shows that one event happened later than another' },
        { left: 'He could not sleep during the night', right: 'could not + base verb expresses past inability' },
        { left: 'He stayed awake', right: 'stay + adjective describes continuing in the same state' },
        { left: 'When Umayya learned this, he became very angry', right: 'when + past clause links a past event with the reaction that followed' },
      ],
      correctAnswer: {
        'After Bilal met Abu Bakr, he went back home': 'after + past clause shows that one event happened later than another',
        'He could not sleep during the night': 'could not + base verb expresses past inability',
        'He stayed awake': 'stay + adjective describes continuing in the same state',
        'When Umayya learned this, he became very angry': 'when + past clause links a past event with the reaction that followed',
      },
      explanation: 'The chapter uses “after” and “when” to organize events, while “could not” and “stayed” describe Bilal’s condition during the night.',
      feedback: {
        correct: 'Good. You identified time order, inability and continuing state.',
        incorrect: 'Focus on “After...”, “could not...”, “stayed awake”, and “When...”.',
      },
    },
    {
      id: 'mecca-a2-language-7-knowing-future',
      type: 'matching',
      title: 'Knowing What Would Happen',
      instructions: 'Match each expression with its meaning or language function.',
      question: 'How does the chapter report Bilal’s knowledge about the future from a past point of view?',
      matchingPairs: [
        { left: 'He knew that life would be difficult', right: 'knew that + clause reports information or belief held in the past' },
        { left: 'life would be difficult', right: 'would + base verb can describe a future situation viewed from the past' },
        { left: 'after becoming a Muslim', right: 'after + -ing form can introduce a later stage or situation' },
        { left: 'In the end, he accepted Islam', right: 'in the end signals the final result after thought or difficulty' },
      ],
      correctAnswer: {
        'He knew that life would be difficult': 'knew that + clause reports information or belief held in the past',
        'life would be difficult': 'would + base verb can describe a future situation viewed from the past',
        'after becoming a Muslim': 'after + -ing form can introduce a later stage or situation',
        'In the end, he accepted Islam': 'in the end signals the final result after thought or difficulty',
      },
      explanation: 'Chapter 7 combines “knew that”, future-in-the-past “would”, “after + -ing”, and “in the end” to describe expectation and final outcome.',
      feedback: {
        correct: 'Correct. You identified past knowledge, future expectation and final result.',
        incorrect: 'Find “knew that”, “would be”, “after becoming”, and “in the end”.',
      },
    },
    {
      id: 'mecca-a2-language-7-production',
      type: 'reflection',
      title: 'Say It: Share, Expect and Decide',
      instructions: 'Write or say four short A2 sentences about an imaginary person who receives information, says what they want, expects a difficulty, and reaches a final decision. Use at least three Chapter 7 language patterns. Do not retell Bilal’s decision.',
      question: 'Can you use Chapter 7 language in a new decision situation?',
      correctAnswer: null,
      explanation: 'A strong response can use “told ... about”, “told ... that”, “wanted to”, “knew that ... would ...”, “after ...”, “when ...”, and “in the end”.',
      feedback: {
        correct: 'Create a new situation with information, intention, expectation and a final result.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Information — Begin with “Someone told ... about ...”.', mode: 'Individual' },
        { question: 'Intention — Add “He/She said that he/she wanted to ...”.', mode: 'Individual' },
        { question: 'Expectation — Use “He/She knew that ... would ...”.', mode: 'Individual' },
        { question: 'Result — Finish with “In the end, ...”.', mode: 'Pair' },
      ],
    },
  ],
};
