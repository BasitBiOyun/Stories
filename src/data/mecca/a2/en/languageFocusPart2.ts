import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-a2-language-3-change-comparison',
      type: 'matching',
      title: 'Describing Change and Power',
      instructions: 'Match each Chapter 3 expression with the job it does.',
      question: 'How does the chapter show change and compare people in Mecca?',
      matchingPairs: [
        { left: 'the poor were getting poorer', right: 'were getting + comparative adjective shows a change that was continuing' },
        { left: 'the rich were getting richer', right: 'were getting + comparative adjective can show change in the opposite direction' },
        { left: 'the most powerful people in the city', right: 'the most + adjective compares one group with all the others' },
        { left: 'one of the richest and most powerful leaders', right: 'one of the + superlative + plural noun places one person inside a top group' },
      ],
      correctAnswer: {
        'the poor were getting poorer': 'were getting + comparative adjective shows a change that was continuing',
        'the rich were getting richer': 'were getting + comparative adjective can show change in the opposite direction',
        'the most powerful people in the city': 'the most + adjective compares one group with all the others',
        'one of the richest and most powerful leaders': 'one of the + superlative + plural noun places one person inside a top group',
      },
      explanation: 'Chapter 3 uses comparative and superlative language to show changing conditions and differences in power.',
      feedback: {
        correct: 'Good. You identified language for continuing change and strong comparison.',
        incorrect: 'Look for “-er” forms for change and “the most / one of the ...-est” for comparison.',
      },
    },
    {
      id: 'mecca-a2-language-3-place-purpose',
      type: 'matching',
      title: 'Talking About Places and Purpose',
      instructions: 'Match each expression with its function.',
      question: 'How does Chapter 3 describe places and what happened there?',
      matchingPairs: [
        { left: 'Slave markets were very common in Arabia', right: 'were + adjective describes a general past condition' },
        { left: 'Mecca was a center for buying and selling slaves', right: 'was a center for + -ing says what a place was important for' },
        { left: 'slaves from different lands', right: 'from + place shows origin' },
        { left: 'especially from Abyssinia', right: 'especially highlights one important example from a larger group' },
      ],
      correctAnswer: {
        'Slave markets were very common in Arabia': 'were + adjective describes a general past condition',
        'Mecca was a center for buying and selling slaves': 'was a center for + -ing says what a place was important for',
        'slaves from different lands': 'from + place shows origin',
        'especially from Abyssinia': 'especially highlights one important example from a larger group',
      },
      explanation: 'The chapter combines past description, place function and origin language to explain the setting.',
      feedback: {
        correct: 'Correct. You separated description, place function, origin and emphasis.',
        incorrect: 'Ask whether the phrase describes a place, says what it was used for, or tells where people came from.',
      },
    },
    {
      id: 'mecca-a2-language-3-time-intention',
      type: 'matching',
      title: 'Connecting Events and Intentions',
      instructions: 'Match each Chapter 3 pattern with what it expresses.',
      question: 'How does the chapter connect a new event with Umayya’s response?',
      matchingPairs: [
        { left: 'He became a major enemy of Islam', right: 'became + noun phrase shows a change in role or state' },
        { left: 'When Prophet Muhammad (pbuh) started teaching Islam', right: 'when + past clause gives the time/background for another event' },
        { left: 'started teaching Islam', right: 'started + -ing shows the beginning of an activity' },
        { left: 'Umayya wanted this message to stop', right: 'wanted + person/thing + to + verb expresses a desired result' },
      ],
      correctAnswer: {
        'He became a major enemy of Islam': 'became + noun phrase shows a change in role or state',
        'When Prophet Muhammad (pbuh) started teaching Islam': 'when + past clause gives the time/background for another event',
        'started teaching Islam': 'started + -ing shows the beginning of an activity',
        'Umayya wanted this message to stop': 'wanted + person/thing + to + verb expresses a desired result',
      },
      explanation: '“When” connects events in time, “started + -ing” marks a beginning, and “wanted ... to ...” expresses a desired outcome.',
      feedback: {
        correct: 'Good. You identified time, beginning, change and intention language.',
        incorrect: 'Find the time word first, then the verbs showing beginning, change and desire.',
      },
    },
    {
      id: 'mecca-a2-language-3-production',
      type: 'reflection',
      title: 'Say It: Describe a Changing City',
      instructions: 'Write or say four short A2 sentences about an imaginary city in the past. Use at least three Chapter 3 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you describe a place, compare groups, and connect a new event with someone’s intention?',
      correctAnswer: null,
      explanation: 'A strong response can use “was a center for + -ing”, “were getting + comparative”, “one of the + superlative”, “when + past clause”, or “wanted ... to ...”.',
      feedback: {
        correct: 'Build a short description with a place function, one comparison and a clear time/intention link.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Place — Use “It was a center for ...”.', mode: 'Individual' },
        { question: 'Change — Add “People were getting ...”.', mode: 'Individual' },
        { question: 'Comparison — Use “one of the most ...”.', mode: 'Individual' },
        { question: 'Time and intention — Add “When ..., someone wanted ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
