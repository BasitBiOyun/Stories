import type { Exercise } from '../../../../types';

export const abrahamA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-a2-language-9-anything-nothing-only',
      type: 'matching',
      title: 'Anything, Nothing and Only',
      instructions: 'Match each Chapter 9 expression with its function.',
      question: 'How does the chapter express open possibility, zero quantity, limitation and strong negation?',
      matchingPairs: [
        { left: 'Is there anything you wish for?', right: 'asks openly whether there is something wanted' },
        { left: 'Nothing from you!', right: 'means no thing is wanted' },
        { left: 'It only burnt the ropes', right: 'limits the result to one thing' },
        { left: 'not harmed at all', right: 'strengthens a negative meaning' },
      ],
      correctAnswer: {
        'Is there anything you wish for?': 'asks openly whether there is something wanted',
        'Nothing from you!': 'means no thing is wanted',
        'It only burnt the ropes': 'limits the result to one thing',
        'not harmed at all': 'strengthens a negative meaning',
      },
      explanation: '“Anything”, “nothing”, “only”, and “not ... at all” each add a different meaning.',
      feedback: { correct: 'Good. You distinguished the four meanings.', incorrect: 'Focus on the key words: anything, nothing, only, and at all.' },
    },
    {
      id: 'abraham-a2-language-9-change-and-time',
      type: 'drag-drop',
      title: 'Change and Time',
      instructions: 'Sort the Chapter 9 expressions into change language and time language.',
      question: 'Which phrases show change, and which tell us when events happen?',
      dragDropGroups: [
        { group: 'Change', items: ['The fire became cool and safe', 'The fire turned into a garden'] },
        { group: 'Time', items: ['when the flames cooled', 'At that moment'] },
      ],
      correctAnswer: {
        Change: ['The fire became cool and safe', 'The fire turned into a garden'],
        Time: ['when the flames cooled', 'At that moment'],
      },
      explanation: '“Become + adjective” and “turn into + noun” show change; “when” and “at that moment” organise time.',
      feedback: { correct: 'Correct. You separated change from time.', incorrect: 'Look for the two phrases that describe a new state.' },
    },
    {
      id: 'abraham-a2-language-9-reaction-contrast-still',
      type: 'fill-blanks',
      title: 'A Situation That Continues',
      instructions: 'Complete the Chapter 9 sentence with the word that shows continuation.',
      question: 'Which word shows that the people continued to oppose Abraham?',
      fillBlanksText: 'They were [blank] against him.',
      correctAnswer: 'still',
      explanation: '“Still” shows that a situation continues without changing.',
      feedback: { correct: 'Correct. “Still” marks continuation.', incorrect: 'Use the word meaning “the situation continued”.' },
    },
    {
      id: 'abraham-a2-language-9-production',
      type: 'reflection',
      title: 'Say It: A Surprising Change',
      instructions: 'Write or say four short A2 sentences using Chapter 9 patterns.',
      question: 'Can you describe change, time, reaction and continuation?',
      correctAnswer: null,
      explanation: 'Use “became” or “turned into”, one time linker, one reaction, and “still”.',
      feedback: { correct: 'Make the four sentences form one short situation.', incorrect: '' },
      discussionPrompts: [
        { question: 'Describe one change.', mode: 'Individual' },
        { question: 'Add “when” or “at that moment”.', mode: 'Individual' },
        { question: 'Describe a reaction.', mode: 'Individual' },
        { question: 'Use “still” to show what continued.', mode: 'Pair' },
      ],
    },
  ],
};
