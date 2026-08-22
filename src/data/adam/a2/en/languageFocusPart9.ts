import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Chapter 10 is read in full before authoring; activities stay grounded in the
 * chapter and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'adam-a2-language-10-advice',
      type: 'matching',
      title: 'Should: Giving Advice',
      instructions: 'Match each Chapter 10 expression with the language job it does.',
      question: 'How does the chapter use should and other advice language to tell people how to behave?',
      matchingPairs: [
        { left: 'good people should stay away from jealousy', right: 'gives advice about something to avoid' },
        { left: 'good people should control their anger', right: 'gives advice about self-control' },
        { left: 'It tells them to be well-behaved', right: 'uses tell + person + to + verb to give guidance' },
        { left: 'It tells them to be kind to others', right: 'gives positive guidance about how to treat people' },
      ],
      correctAnswer: {
        'good people should stay away from jealousy': 'gives advice about something to avoid',
        'good people should control their anger': 'gives advice about self-control',
        'It tells them to be well-behaved': 'uses tell + person + to + verb to give guidance',
        'It tells them to be kind to others': 'gives positive guidance about how to treat people',
      },
      explanation: '“Should + verb” gives advice. “Tell + person + to + verb” is another useful way to give guidance about what someone should do.',
      feedback: {
        correct: 'Correct. You separated advice about avoiding something, controlling behaviour and doing something positive.',
        incorrect: 'Look for should and tells them to. Then ask what behaviour each expression recommends.',
      },
    },
    {
      id: 'adam-a2-language-10-past-necessity-change',
      type: 'matching',
      title: 'Had To and Became: Duty and Change',
      instructions: 'Match each expression with what it shows in the story.',
      question: 'How does Chapter 10 describe a responsibility in the past and a change over time?',
      matchingPairs: [
        { left: 'He had to continue his life', right: 'uses had to + verb for a past necessity or responsibility' },
        { left: 'He got old over the years', right: 'shows a gradual change with got + adjective' },
        { left: 'He lost both of his sons on the same day', right: 'describes a completed past event with a past-tense verb' },
        { left: 'Adam became very sad', right: 'uses became + adjective to show a change of state' },
      ],
      correctAnswer: {
        'He had to continue his life': 'uses had to + verb for a past necessity or responsibility',
        'He got old over the years': 'shows a gradual change with got + adjective',
        'He lost both of his sons on the same day': 'describes a completed past event with a past-tense verb',
        'Adam became very sad': 'uses became + adjective to show a change of state',
      },
      explanation: 'The chapter combines past events with “had to + verb” for necessity and “became/got + adjective” for changes in a person’s state over time.',
      feedback: {
        correct: 'Good. You noticed the difference between an event, a responsibility and a change of state.',
        incorrect: 'Focus on had to, became and got. Each expression tells us a different kind of information about the past.',
      },
    },
    {
      id: 'adam-a2-language-10-continuing-message',
      type: 'matching',
      title: 'Still, Tell and Help: A Message That Continues',
      instructions: 'Match each chapter expression with its function.',
      question: 'How does the final chapter show that a message can continue and guide people?',
      matchingPairs: [
        { left: 'This message still advises people', right: 'uses still to show that something continues now' },
        { left: 'It tells them to be well-behaved', right: 'uses tell + person + to + verb for guidance' },
        { left: 'The stories of His messengers help us to live an honest life', right: 'uses help + person + to + verb to show a positive result or support' },
        { left: 'love and respect Allah', right: 'joins two actions with and' },
      ],
      correctAnswer: {
        'This message still advises people': 'uses still to show that something continues now',
        'It tells them to be well-behaved': 'uses tell + person + to + verb for guidance',
        'The stories of His messengers help us to live an honest life': 'uses help + person + to + verb to show a positive result or support',
        'love and respect Allah': 'joins two actions with and',
      },
      explanation: '“Still” shows continuation. “Tell someone to ...” gives guidance, while “help someone to ...” explains how something supports a positive action or result.',
      feedback: {
        correct: 'Correct. You connected continuation, guidance, support and joined actions.',
        incorrect: 'First find still, tells ... to and help ... to. Then decide what each pattern does.',
      },
    },
    {
      id: 'adam-a2-language-10-use-it',
      type: 'reflection',
      title: 'Say It: Advice, Responsibility and Help',
      instructions: 'Write or say four short A2 sentences. Use the Chapter 10 patterns in everyday situations.',
      question: 'Can you give advice, describe a past responsibility, show change over time and explain how something helps you?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of advice, past necessity, change and positive guidance to familiar situations.',
      feedback: {
        correct: 'Use the sentence starters to make short, clear and meaningful sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Advice: “People should ... / should stay away from ...”', mode: 'Individual' },
        { question: 'Past responsibility: “Yesterday / last week, I had to ...”', mode: 'Individual' },
        { question: 'Change: “Over time, I became / got ...”', mode: 'Individual' },
        { question: 'Positive support: “... helps me to ...” or “My family/teacher tells me to ...”', mode: 'Pair' },
      ],
    },
  ],
};
