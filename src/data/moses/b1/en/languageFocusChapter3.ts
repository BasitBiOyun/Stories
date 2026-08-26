import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 3 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-b1-language-3-guidance-sequence',
      type: 'matching',
      title: 'Turning Guidance into a Sequence of Actions',
      instructions: 'Match each expression with the job it does in the chapter.',
      question: 'How does the chapter move from guidance to action and then to a new situation?',
      matchingPairs: [
        { left: 'Put your baby in the basket.', right: 'gives a direct instruction' },
        { left: 'Take the basket to the River Nile.', right: 'adds the next step in the instruction sequence' },
        { left: 'The basket was carried away by the waters.', right: 'focuses on what happened to the basket rather than who caused it' },
        { left: 'Soon, the waves brought the basket ashore...', right: 'moves the narrative forward to the next result' },
      ],
      correctAnswer: {
        'Put your baby in the basket.': 'gives a direct instruction',
        'Take the basket to the River Nile.': 'adds the next step in the instruction sequence',
        'The basket was carried away by the waters.': 'focuses on what happened to the basket rather than who caused it',
        'Soon, the waves brought the basket ashore...': 'moves the narrative forward to the next result',
      },
      explanation: 'The chapter combines direct imperatives, passive narration, and sequence markers to turn guidance into a clear chain of actions and results.',
      feedback: {
        correct: 'Correct. You identified instruction, passive focus, and narrative progression.',
        incorrect: 'Ask whether each form gives an instruction, shifts focus to the affected object, or advances the sequence.',
      },
    },
    {
      id: 'moses-b1-language-3-trust-contrast',
      type: 'matching',
      title: 'Expressing Worry, Trust and Contrast',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the narrator show that worry and trust exist at the same time?',
      matchingPairs: [
        { left: 'Moses’s mother was very worried', right: 'states her emotional condition' },
        { left: 'She was so sad, but she knew that Allah was kinder...', right: 'contrasts strong sadness with continuing trust' },
        { left: 'Allah was their Lord and also the Lord of the Nile.', right: 'adds a second parallel idea with “also”' },
        { left: 'while carrying the baby', right: 'places one action inside another ongoing action' },
      ],
      correctAnswer: {
        'Moses’s mother was very worried': 'states her emotional condition',
        'She was so sad, but she knew that Allah was kinder...': 'contrasts strong sadness with continuing trust',
        'Allah was their Lord and also the Lord of the Nile.': 'adds a second parallel idea with “also”',
        'while carrying the baby': 'places one action inside another ongoing action',
      },
      explanation: 'The chapter does not present emotion as a single idea. “But” keeps trust active beside sadness, “also” adds parallel information, and “while” links simultaneous actions.',
      feedback: {
        correct: 'Good. You distinguished emotion, contrast, addition, and simultaneous action.',
        incorrect: 'Look for the connector and ask what relationship it creates between the ideas.',
      },
    },
    {
      id: 'moses-b1-language-3-description-and-decision',
      type: 'matching',
      title: 'Describing Character and Making a Decision',
      instructions: 'Match each structure with its communicative function.',
      question: 'How does the chapter describe Queen Asiye and then show her decision?',
      matchingPairs: [
        { left: 'The queen, who was different from her husband, was good...', right: 'adds extra descriptive information about the queen' },
        { left: 'When Queen Asiye saw the baby, she felt a strong love for him.', right: 'links a new feeling to the moment that caused it' },
        { left: 'While she was looking at the baby...', right: 'sets the background action for what she says next' },
        { left: 'I will take him to the palace and look after him.', right: 'expresses a decision about a future action' },
      ],
      correctAnswer: {
        'The queen, who was different from her husband, was good...': 'adds extra descriptive information about the queen',
        'When Queen Asiye saw the baby, she felt a strong love for him.': 'links a new feeling to the moment that caused it',
        'While she was looking at the baby...': 'sets the background action for what she says next',
        'I will take him to the palace and look after him.': 'expresses a decision about a future action',
      },
      explanation: 'The chapter combines added description, time clauses, background action, and “will” for a decision. Together they make the scene more connected and purposeful.',
      feedback: {
        correct: 'Correct. You identified description, timing, background, and future decision.',
        incorrect: 'Ask whether the structure describes a person, locates an event in time, sets background, or states a decision.',
      },
    },
    {
      id: 'moses-b1-language-3-connected-production',
      type: 'reflection',
      title: 'Describe a Difficult Decision',
      instructions: 'Write or say five connected B1 sentences about a person who receives guidance, feels worried, and then makes a decision.',
      question: 'Can you combine instruction, sequence, contrast, background action, and a future decision in one short account?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include a direct imperative, a passive sentence, “but”, “while”, “when”, and “will” for a decision.',
      feedback: {
        correct: 'Keep the paragraph connected so each sentence develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give one direct instruction.', mode: 'Individual' },
        { question: 'Sentence 2 — Show what happened next, using a passive form if natural.', mode: 'Individual' },
        { question: 'Sentence 3 — Express worry or sadness, then contrast it with trust or confidence using “but”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add background with “while” or timing with “when”.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a clear decision using “will”.', mode: 'Pair' },
      ],
    },
  ],
};
