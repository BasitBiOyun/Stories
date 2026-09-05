import type { Exercise } from '../../../../types';

export const abrahamA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-a2-language-8-degree-and-result',
      type: 'matching',
      title: 'Degree and Result',
      instructions: 'Match each Chapter 8 expression with what it shows.',
      question: 'How does the chapter connect strong qualities with results?',
      matchingPairs: [
        { left: 'too arrogant to accept their mistake', right: 'a quality prevents an action' },
        { left: 'so huge that it was dangerous to go near it', right: 'a strong quality leads to a result' },
        { left: 'so hot', right: 'emphasises a very high degree' },
        { left: 'Birds could not fly over the flames', right: 'expresses past inability' },
      ],
      correctAnswer: {
        'too arrogant to accept their mistake': 'a quality prevents an action',
        'so huge that it was dangerous to go near it': 'a strong quality leads to a result',
        'so hot': 'emphasises a very high degree',
        'Birds could not fly over the flames': 'expresses past inability',
      },
      explanation: '“Too ... to”, “so ... that”, and “could not” express degree, result and inability.',
      feedback: { correct: 'Good. You matched degree and result patterns correctly.', incorrect: 'Look again at “too”, “so ... that”, and “could not”.' },
    },
    {
      id: 'abraham-a2-language-8-purpose',
      type: 'fill-blanks',
      title: 'Purpose with To',
      instructions: 'Complete the Chapter 8 sentence with the purpose marker.',
      question: 'Which word shows why people came from many towns?',
      fillBlanksText: 'People from many different towns came [blank] watch Abraham.',
      correctAnswer: 'to',
      explanation: '“To + base verb” can explain purpose: they came to watch Abraham.',
      feedback: { correct: 'Correct. “To watch” gives the purpose.', incorrect: 'Use the short purpose marker before the base verb “watch”.' },
    },
    {
      id: 'abraham-a2-language-8-commands-and-sequence',
      type: 'drag-drop',
      title: 'Commands, Duration and Sequence',
      instructions: 'Sort the Chapter 8 expressions by their function.',
      question: 'Which expressions are commands, and which organise time?',
      dragDropGroups: [
        { group: 'Commands', items: ['Burn him!', 'Punish him!'] },
        { group: 'Time and sequence', items: ['for days', 'finally'] },
      ],
      correctAnswer: {
        Commands: ['Burn him!', 'Punish him!'],
        'Time and sequence': ['for days', 'finally'],
      },
      explanation: 'Imperatives give commands. “For days” shows duration and “finally” marks the last stage.',
      feedback: { correct: 'Correct. You separated commands from time expressions.', incorrect: 'Look for base-verb commands and the two expressions about time.' },
    },
    {
      id: 'abraham-a2-language-8-production',
      type: 'reflection',
      title: 'Say It: Describe a Dangerous Plan',
      instructions: 'Write or say four short A2 sentences using Chapter 8 patterns.',
      question: 'Can you describe degree, inability, purpose and sequence?',
      correctAnswer: null,
      explanation: 'Use a pattern with “too” or “so”, one “could not” sentence, one purpose with “to”, and one time marker.',
      feedback: { correct: 'Keep the description short and connected.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “too ... to” or “so ... that”.', mode: 'Individual' },
        { question: 'Add “could not + verb”.', mode: 'Individual' },
        { question: 'Add a purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Finish with “finally”.', mode: 'Pair' },
      ],
    },
  ],
};
