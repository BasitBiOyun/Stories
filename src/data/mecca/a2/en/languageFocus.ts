import type { Exercise } from '../../../../types';

/** Chapter-specific English Language Focus for Mecca A2. */
export const meccaA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mecca-a2-language-1-biography', type: 'matching', title: 'Talking About a Life',
      instructions: 'Match each Chapter 1 pattern with its language job.', question: 'How does the chapter give basic facts about Bilal?',
      matchingPairs: [
        { left: 'was born in + place', right: 'gives a birthplace' },
        { left: 'was / were + noun phrase', right: 'describes identity or background in the past' },
        { left: 'thought + clause', right: 'reports a past belief' },
        { left: 'made + person + noun/adjective', right: 'shows a change or effect' },
      ],
      correctAnswer: {
        'was born in + place': 'gives a birthplace',
        'was / were + noun phrase': 'describes identity or background in the past',
        'thought + clause': 'reports a past belief',
        'made + person + noun/adjective': 'shows a change or effect',
      },
      explanation: 'Chapter 1 combines simple biography language with reported beliefs and change.',
      feedback: { correct: 'Correct.', incorrect: 'Separate birthplace, past identity, past belief and change.' },
    },
    {
      id: 'mecca-a2-language-1-belief', type: 'multiple-choice', title: 'Reporting a Past Belief',
      instructions: 'Choose the sentence that reports what people believed in the past.', question: 'Which sentence uses thought + clause correctly?',
      options: ['People thought Bilal had no power.', 'People think Bilal had no power yesterday.', 'People was thought Bilal had no power.'], correctAnswer: 0,
      explanation: '“Thought + clause” reports a belief held in the past.',
      feedback: { correct: 'Correct.', incorrect: 'Use the past form thought followed by a complete clause.' },
    },
    {
      id: 'mecca-a2-language-1-change', type: 'fill-blanks', title: 'Showing Change',
      instructions: 'Complete the sentence with the past form of make.', question: 'Which word shows the change in Bilal’s status?',
      fillBlanksText: 'Islam [blank] him a free and great man.', correctAnswer: 'made',
      explanation: '“Made + person + noun/adjective” can show a change or effect.',
      feedback: { correct: 'Correct.', incorrect: 'Use the past form of make.' },
    },
    {
      id: 'mecca-a2-language-1-production', type: 'reflection', title: 'Use the Patterns',
      instructions: 'Write or say four short A2 sentences about a real or imaginary person.', question: 'Can you combine background, belief and change?', correctAnswer: null,
      explanation: 'Use chapter language rather than retelling the Quick Challenge.',
      feedback: { correct: 'Use at least three different patterns.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “was born in ...”.', mode: 'Individual' },
        { question: 'Add one “was/were ...” background fact.', mode: 'Individual' },
        { question: 'Report an old belief with “People thought ...”.', mode: 'Individual' },
        { question: 'Show a change with “made ...”.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'mecca-a2-language-2-past-society', type: 'matching', title: 'Describing a Past Society',
      instructions: 'Match each Chapter 2 pattern with its job.', question: 'How does the chapter describe conditions before Islam?',
      matchingPairs: [
        { left: 'was called + name', right: 'says what something was known as' },
        { left: 'there was + noun', right: 'says a situation existed in the past' },
        { left: 'many + plural noun', right: 'shows a large number' },
        { left: 'a lot of + noun', right: 'shows a large amount' },
      ],
      correctAnswer: {
        'was called + name': 'says what something was known as',
        'there was + noun': 'says a situation existed in the past',
        'many + plural noun': 'shows a large number',
        'a lot of + noun': 'shows a large amount',
      },
      explanation: 'These patterns help describe names, conditions and quantities in the past.',
      feedback: { correct: 'Correct.', incorrect: 'Check whether the pattern names, describes existence, number or amount.' },
    },
    {
      id: 'mecca-a2-language-2-contrast', type: 'multiple-choice', title: 'Showing Contrast',
      instructions: 'Choose the best connector.', question: 'Rich people lived in luxury, ___ many poor people lived in need.',
      options: ['but', 'because of', 'when'], correctAnswer: 0,
      explanation: '“But” connects two contrasting situations.',
      feedback: { correct: 'Correct.', incorrect: 'Choose the connector that shows contrast.' },
    },
    {
      id: 'mecca-a2-language-2-result', type: 'fill-blanks', title: 'Cause and Result',
      instructions: 'Complete the result phrase with one word.', question: 'Which word completes the chapter pattern?',
      fillBlanksText: 'Because of this, the rich [blank] richer and the poor became poorer.', correctAnswer: 'became',
      explanation: '“Became + comparative adjective” shows a change over time.',
      feedback: { correct: 'Correct.', incorrect: 'Use the past form that means changed into a new state.' },
    },
    {
      id: 'mecca-a2-language-2-production', type: 'reflection', title: 'Describe a Past Community',
      instructions: 'Write or say four short A2 sentences about an imaginary town in the past.', question: 'Can you describe a condition, contrast two groups and give one result?', correctAnswer: null,
      explanation: 'Use “there was”, quantity language, “but”, and “because of this”.',
      feedback: { correct: 'Keep the description short and connected.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “There was ...”.', mode: 'Individual' },
        { question: 'Add “many ...” or “a lot of ...”.', mode: 'Individual' },
        { question: 'Contrast two situations with “but”.', mode: 'Individual' },
        { question: 'End with “Because of this, ... became ...”.', mode: 'Pair' },
      ],
    },
  ],
};
