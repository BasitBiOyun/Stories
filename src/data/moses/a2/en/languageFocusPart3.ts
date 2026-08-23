import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 4 onward. */
export const mosesA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-a2-language-4-past-actions',
      type: 'matching',
      title: 'Following Past Actions',
      instructions: 'Match each Chapter 4 sentence with the job it does in the story.',
      question: 'How does Chapter 4 connect people, actions and places in the past?',
      matchingPairs: [
        { left: 'The basket came to the waterside.', right: 'describes movement to a place' },
        { left: 'The servants saw the basket and took it to the king and queen.', right: 'connects two completed past actions' },
        { left: 'Moses’s sister ran to the Queen.', right: 'describes movement toward a person' },
        { left: 'She lived nearby.', right: 'describes where someone lived' },
      ],
      correctAnswer: {
        'The basket came to the waterside.': 'describes movement to a place',
        'The servants saw the basket and took it to the king and queen.': 'connects two completed past actions',
        'Moses’s sister ran to the Queen.': 'describes movement toward a person',
        'She lived nearby.': 'describes where someone lived',
      },
      explanation: 'The chapter uses simple past verbs and place expressions to show who moved, what happened next, and where people were.',
      feedback: { correct: 'Correct. You followed the past actions and place language.', incorrect: 'Look at the verb first, then ask where the person or object moves or stays.' },
    },
    {
      id: 'moses-a2-language-4-different-from',
      type: 'matching',
      title: 'Describing and Contrasting People',
      instructions: 'Match each expression with its function.',
      question: 'How does the chapter show what Queen Asiye was like?',
      matchingPairs: [
        { left: 'She was different from her husband.', right: 'contrasts one person with another' },
        { left: 'She was good and kind-hearted.', right: 'describes a person with adjectives' },
        { left: 'different from + person', right: 'a useful pattern for showing a contrast' },
        { left: 'be + adjective', right: 'a useful pattern for describing someone' },
      ],
      correctAnswer: {
        'She was different from her husband.': 'contrasts one person with another',
        'She was good and kind-hearted.': 'describes a person with adjectives',
        'different from + person': 'a useful pattern for showing a contrast',
        'be + adjective': 'a useful pattern for describing someone',
      },
      explanation: '“Different from” makes a contrast. “Be + adjective” describes a person or thing.',
      feedback: { correct: 'Correct. You separated contrast from description.', incorrect: 'Find the phrase that compares two people, then the adjectives that describe Asiye.' },
    },
    {
      id: 'moses-a2-language-4-will-command',
      type: 'matching',
      title: 'Decision, Prediction and Command',
      instructions: 'Match the chapter language with what the speaker is doing.',
      question: 'What do “will” and the imperative do in Chapter 4?',
      matchingPairs: [
        { left: 'I will take him to the palace and look after him.', right: 'expresses a decision about what the speaker will do' },
        { left: 'She will be a good nurse for the baby.', right: 'expresses an expectation about another person' },
        { left: 'Find a nurse for the baby.', right: 'gives a direct command' },
        { left: 'will + base verb', right: 'can express a future decision or expectation' },
      ],
      correctAnswer: {
        'I will take him to the palace and look after him.': 'expresses a decision about what the speaker will do',
        'She will be a good nurse for the baby.': 'expresses an expectation about another person',
        'Find a nurse for the baby.': 'gives a direct command',
        'will + base verb': 'can express a future decision or expectation',
      },
      explanation: 'Chapter 4 uses “will + base verb” for future decisions and expectations, while a base verb at the start of a sentence can give a direct command.',
      feedback: { correct: 'Correct. You identified decision, expectation and command.', incorrect: 'Ask who is speaking and whether the sentence tells, predicts, or commands.' },
    },
    {
      id: 'moses-a2-language-4-production',
      type: 'reflection',
      title: 'Use It: A Helpful Plan',
      instructions: 'Create a new A2 situation about helping someone. Write or say three or four short sentences using at least three frames below.',
      question: 'Can you describe a helpful person, contrast two people, state a decision and give one simple instruction?',
      correctAnswer: null,
      explanation: 'A strong response can use “be + adjective”, “different from”, “I will + verb”, and one imperative such as “Call ...” or “Find ...”.',
      feedback: { correct: 'Use the patterns to communicate a new helpful plan rather than retelling Chapter 4.', incorrect: '' },
      discussionPrompts: [
        { question: 'Description — Describe a helpful person with two adjectives.', mode: 'Individual' },
        { question: 'Contrast — Use “different from” in one short sentence.', mode: 'Individual' },
        { question: 'Decision — Say what you will do to help.', mode: 'Individual' },
        { question: 'Instruction — Give one safe, simple command.', mode: 'Pair' },
      ],
    },
  ],
};
