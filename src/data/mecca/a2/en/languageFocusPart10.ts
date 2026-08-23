import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the Chapter 11 story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-a2-language-11-time-change',
      type: 'matching',
      title: 'Time and Change',
      instructions: 'Match each Chapter 11 expression with the language job it does.',
      question: 'How does the chapter show when things happened and how Bilal’s situation changed?',
      matchingPairs: [
        { left: 'After Bilal became free', right: 'after + clause places one event later than another event' },
        { left: 'he became one of the Prophet’s most beloved and respected friends', right: 'became shows a change of state or role' },
        { left: 'After many years of hardship in Mecca', right: 'after + time period places an event later in the story' },
        { left: 'After the Hijrah', right: 'after + event marks a new stage in time' },
      ],
      correctAnswer: {
        'After Bilal became free': 'after + clause places one event later than another event',
        'he became one of the Prophet’s most beloved and respected friends': 'became shows a change of state or role',
        'After many years of hardship in Mecca': 'after + time period places an event later in the story',
        'After the Hijrah': 'after + event marks a new stage in time',
      },
      explanation: 'Chapter 11 repeatedly uses “after” to move the story forward and “became” to describe a new state or role.',
      feedback: {
        correct: 'Correct. You identified language for sequence and change.',
        incorrect: 'Look again at the expressions beginning with “After” and at “became”.',
      },
    },
    {
      id: 'mecca-a2-language-11-wants-permission',
      type: 'matching',
      title: 'Wanting and Allowing',
      instructions: 'Match the Chapter 11 pattern with its function.',
      question: 'How does the chapter express wishes, permission and instructions?',
      matchingPairs: [
        { left: 'the Prophet wanted to be alone', right: 'want to + verb expresses what someone wishes to do' },
        { left: 'he allowed only Bilal to stay with him', right: 'allow + person + to + verb gives permission' },
        { left: 'the Prophet told the Muslims to move to Medina', right: 'tell + person + to + verb gives an instruction' },
        { left: 'the Prophet wanted someone to call people to prayer', right: 'want + person + to + verb expresses a desired action by another person' },
      ],
      correctAnswer: {
        'the Prophet wanted to be alone': 'want to + verb expresses what someone wishes to do',
        'he allowed only Bilal to stay with him': 'allow + person + to + verb gives permission',
        'the Prophet told the Muslims to move to Medina': 'tell + person + to + verb gives an instruction',
        'the Prophet wanted someone to call people to prayer': 'want + person + to + verb expresses a desired action by another person',
      },
      explanation: 'These patterns separate a person’s own wish, permission, instruction, and a wish for another person to act.',
      feedback: {
        correct: 'Good. You separated wanting, allowing and telling someone to do something.',
        incorrect: 'Ask who will do the action in each sentence and whether the sentence gives permission, an instruction, or a wish.',
      },
    },
    {
      id: 'mecca-a2-language-11-contrast-result',
      type: 'matching',
      title: 'Even When and That Is Why',
      instructions: 'Match each expression with what it means in the sentence.',
      question: 'How does Chapter 11 connect difficulty, courage and result?',
      matchingPairs: [
        { left: 'Even when people hurt him', right: 'even when introduces a difficult situation that did not change the main action' },
        { left: 'he shouted fearlessly', right: 'an adverb describes how he shouted' },
        { left: 'That is why', right: 'introduces a result or conclusion from the previous idea' },
        { left: 'So Bilal gave the first Adhan', right: 'so introduces the result that follows from the explanation' },
      ],
      correctAnswer: {
        'Even when people hurt him': 'even when introduces a difficult situation that did not change the main action',
        'he shouted fearlessly': 'an adverb describes how he shouted',
        'That is why': 'introduces a result or conclusion from the previous idea',
        'So Bilal gave the first Adhan': 'so introduces the result that follows from the explanation',
      },
      explanation: 'The chapter uses “even when” for contrast and “that is why/so” to connect a reason with a result.',
      feedback: {
        correct: 'Correct. You identified contrast, manner and result language.',
        incorrect: 'Focus on “Even when”, “fearlessly”, “That is why” and “So”.',
      },
    },
    {
      id: 'mecca-a2-language-11-production',
      type: 'reflection',
      title: 'Say It: A New Role',
      instructions: 'Create a new A2 situation about school, a team or a family task. Say or write four short sentences: use “after” to show sequence, “wanted ... to ...” or “allowed ... to ...”, “even when” for a difficult situation, and “so/that is why” for a result. Do not retell Chapter 11.',
      question: 'Can you use Chapter 11 language to describe a new situation with sequence, permission or intention, difficulty and result?',
      correctAnswer: null,
      explanation: 'A strong response uses the four Chapter 11 language functions naturally in one simple new situation.',
      feedback: {
        correct: 'Use the four language frames in one clear situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sequence — Use “after”.', mode: 'Individual' },
        { question: 'Wish or permission — Use “wanted ... to ...” or “allowed ... to ...”.', mode: 'Individual' },
        { question: 'Difficulty — Use “even when”.', mode: 'Individual' },
        { question: 'Result — Use “so” or “that is why”.', mode: 'Pair' },
      ],
    },
  ],
};
