import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 11 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'moses-b1-language-11-sequence-result',
      type: 'matching',
      title: 'Sequence and Immediate Result',
      instructions: 'Match each expression with the relationship it creates in the event sequence.',
      question: 'How does the chapter connect actions with the changes that follow them?',
      matchingPairs: [
        { left: 'Once the sticks and ropes fell to the ground', right: 'marks the moment after which their appearance changes' },
        { left: 'they looked just like snakes', right: 'describes the apparent result of the magicians’ action' },
        { left: 'Moses threw down his staff', right: 'states the new action after Allah’s command' },
        { left: 'it turned into a huge snake', right: 'states the immediate visible result of that action' },
      ],
      correctAnswer: {
        'Once the sticks and ropes fell to the ground': 'marks the moment after which their appearance changes',
        'they looked just like snakes': 'describes the apparent result of the magicians’ action',
        'Moses threw down his staff': 'states the new action after Allah’s command',
        'it turned into a huge snake': 'states the immediate visible result of that action',
      },
      explanation: 'The chapter uses time markers and change-of-state language to move clearly from action to visible outcome.',
      feedback: {
        correct: 'Correct. You followed how the text links action and result.',
        incorrect: 'Look for the time marker, the action, and the phrase that describes what changes afterward.',
      },
    },
    {
      id: 'moses-b1-language-11-command-response',
      type: 'matching',
      title: 'Command, Action and Response',
      instructions: 'Match each line with the function it performs in the exchange.',
      question: 'How does direct speech move the scene forward?',
      matchingPairs: [
        { left: '“Throw down your staff!”', right: 'gives a direct instruction' },
        { left: 'Moses threw down his staff', right: 'shows the instruction being carried out' },
        { left: '“We believe in the Lord of Moses and Harun!”', right: 'expresses the magicians’ new position in direct speech' },
        { left: '“Be rude to them!”', right: 'shows Pharaoh giving a harsh order after the event' },
      ],
      correctAnswer: {
        '“Throw down your staff!”': 'gives a direct instruction',
        'Moses threw down his staff': 'shows the instruction being carried out',
        '“We believe in the Lord of Moses and Harun!”': 'expresses the magicians’ new position in direct speech',
        '“Be rude to them!”': 'shows Pharaoh giving a harsh order after the event',
      },
      explanation: 'Direct speech is used for commands and declarations, while the surrounding narration shows the action or consequence that follows.',
      feedback: {
        correct: 'Correct. You distinguished instruction, action, declaration, and order.',
        incorrect: 'Separate the lines that tell someone what to do from the line that states a new belief.',
      },
    },
    {
      id: 'moses-b1-language-11-witness-persistence-cause',
      type: 'matching',
      title: 'Witness, Persistence and Cause',
      instructions: 'Match each expression with the meaning or discourse function it adds.',
      question: 'How does the chapter describe who saw the event and who continued resisting?',
      matchingPairs: [
        { left: 'The magicians who witnessed this miracle', right: 'uses a relative clause to identify the magicians through what they saw' },
        { left: 'The king still refused to believe in Allah', right: 'shows that the refusal continued despite the new event' },
        { left: 'because he was arrogant', right: 'gives the reason for the continued refusal' },
        { left: 'He continued to trouble Moses and his people', right: 'shows an action continuing over time' },
      ],
      correctAnswer: {
        'The magicians who witnessed this miracle': 'uses a relative clause to identify the magicians through what they saw',
        'The king still refused to believe in Allah': 'shows that the refusal continued despite the new event',
        'because he was arrogant': 'gives the reason for the continued refusal',
        'He continued to trouble Moses and his people': 'shows an action continuing over time',
      },
      explanation: 'The text combines identification, persistence, and cause to explain how different people react and how one response continues.',
      feedback: {
        correct: 'Good. You identified relative description, persistence, and cause.',
        incorrect: 'Find the words that mean “even after this”, “for this reason”, and “kept doing”.',
      },
    },
    {
      id: 'moses-b1-language-11-connected-production',
      type: 'reflection',
      title: 'Describe a Turning Point',
      instructions: 'Write or say five connected B1 sentences about a non-story situation in which an instruction leads to an action, the action produces a result, one group changes its view, and another person keeps resisting. Do not retell the chapter.',
      question: 'Can you connect command, action, result, changed response, and continued resistance in one short paragraph?',
      correctAnswer: null,
      explanation: 'Useful language includes “Once...”, “When...”, a direct imperative, “turned into/became...”, “who...”, “still...”, “continued to...”, and “because...”.',
      feedback: {
        correct: 'Keep the five sentences connected around one situation and make the cause of the continued resistance clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give a direct instruction.', mode: 'Individual' },
        { question: 'Sentence 2 — Show the action and use “Once...” or “When...” to connect it with the result.', mode: 'Individual' },
        { question: 'Sentence 3 — Describe a group who saw the result and changed its view.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “still” or “continued to” for someone who did not change.', mode: 'Pair' },
        { question: 'Sentence 5 — Use “because” to explain why the resistance continued.', mode: 'Pair' },
      ],
    },
  ],
};
