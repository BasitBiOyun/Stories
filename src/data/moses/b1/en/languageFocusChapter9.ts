import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 9 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'moses-b1-language-9-command-response',
      type: 'matching',
      title: 'Command, Action and Result',
      instructions: 'Match each expression with the role it plays in the sequence.',
      question: 'How does the chapter move from direct instruction to visible result?',
      matchingPairs: [
        { left: 'Put down your walking stick!', right: 'gives a direct command' },
        { left: 'Moses put down his staff on the ground.', right: 'shows the command being carried out' },
        { left: 'It turned into a big snake!', right: 'shows the immediate result of the action' },
        { left: 'Put your hand into your chest. Now take it out.', right: 'uses two linked imperatives to guide a sequence of actions' },
      ],
      correctAnswer: {
        'Put down your walking stick!': 'gives a direct command',
        'Moses put down his staff on the ground.': 'shows the command being carried out',
        'It turned into a big snake!': 'shows the immediate result of the action',
        'Put your hand into your chest. Now take it out.': 'uses two linked imperatives to guide a sequence of actions',
      },
      explanation: 'The passage repeatedly uses imperative commands, then reports Moses’s response and the result that follows. This creates a clear instruction → action → result pattern.',
      feedback: {
        correct: 'Correct. You identified the language that builds the command-response-result sequence.',
        incorrect: 'Separate the direct instruction from Moses’s action and the result that follows it.',
      },
    },
    {
      id: 'moses-b1-language-9-reported-mission',
      type: 'matching',
      title: 'From Direct Words to Reported Mission',
      instructions: 'Match the language with the function it performs.',
      question: 'How does the text shift from direct speech to a reported mission?',
      matchingPairs: [
        { left: 'Show these signs to the Pharaoh.', right: 'directly tells Moses what to do' },
        { left: 'Tell him of the power of Allah.', right: 'adds a second direct instruction' },
        { left: 'Allah told Moses to go to Egypt', right: 'reports an instruction with “told + person + to + verb”' },
        { left: 'and show the Pharaoh the signs and warn him', right: 'links several parts of the same mission in one reported structure' },
      ],
      correctAnswer: {
        'Show these signs to the Pharaoh.': 'directly tells Moses what to do',
        'Tell him of the power of Allah.': 'adds a second direct instruction',
        'Allah told Moses to go to Egypt': 'reports an instruction with “told + person + to + verb”',
        'and show the Pharaoh the signs and warn him': 'links several parts of the same mission in one reported structure',
      },
      explanation: 'The chapter first gives direct commands, then summarizes the mission with “told Moses to...”. This lets the narrative move from quoted speech to a compact report of responsibility.',
      feedback: {
        correct: 'Good. You distinguished direct commands from reported instruction.',
        incorrect: 'Look for the difference between exact quoted words and the later sentence that summarizes the mission.',
      },
    },
    {
      id: 'moses-b1-language-9-role-change',
      type: 'matching',
      title: 'Message, Change and Next Step',
      instructions: 'Match each expression with the meaning it adds to the final part of the chapter.',
      question: 'How does the chapter show that the mountain encounter changes Moses’s role and direction?',
      matchingPairs: [
        { left: 'After this message from Allah', right: 'marks the event that comes before the change' },
        { left: 'Moses became a Messenger of Allah, a prophet.', right: 'expresses a new role or state' },
        { left: 'Upon this', right: 'connects the new role with the next action' },
        { left: 'Moses headed to Egypt.', right: 'shows the mission becoming movement and action' },
      ],
      correctAnswer: {
        'After this message from Allah': 'marks the event that comes before the change',
        'Moses became a Messenger of Allah, a prophet.': 'expresses a new role or state',
        'Upon this': 'connects the new role with the next action',
        'Moses headed to Egypt.': 'shows the mission becoming movement and action',
      },
      explanation: '“After this...” places the message before the change, “became” marks a new state, and “Upon this” links that change to the next action in the narrative.',
      feedback: {
        correct: 'Correct. You followed the language of transition from message to new role and action.',
        incorrect: 'Find the phrase that marks what happened first, the verb that signals a new role, and the connector that leads to the next action.',
      },
    },
    {
      id: 'moses-b1-language-9-connected-production',
      type: 'reflection',
      title: 'Explain a New Responsibility',
      instructions: 'Write or say five connected B1 sentences about someone who receives instructions, carries them out, takes on a new responsibility, and then begins a new task. Do not retell the chapter.',
      question: 'Can you connect direct instruction, reported instruction, change of role and next action naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes an imperative, “told + person + to...”, “After this...”, “became...”, and a final sentence showing the next action.',
      feedback: {
        correct: 'Keep the five sentences connected so the responsibility develops clearly from instruction to action.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give a short direct instruction with an imperative.', mode: 'Individual' },
        { question: 'Sentence 2 — Report the instruction using “told + person + to + verb”.', mode: 'Individual' },
        { question: 'Sentence 3 — Show that the instruction was carried out and had a result.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “After this...” and “became...” to show a new role or responsibility.', mode: 'Pair' },
        { question: 'Sentence 5 — Show the next action that follows from that responsibility.', mode: 'Pair' },
      ],
    },
  ],
};
