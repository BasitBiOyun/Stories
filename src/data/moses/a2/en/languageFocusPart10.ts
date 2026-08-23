import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 13 onward. */
export const mosesA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  13: [
    {
      id: 'moses-a2-language-13-arrival-action',
      type: 'matching',
      title: 'Arrival and Action',
      instructions: 'Match each Chapter 13 expression with what it communicates.',
      question: 'How does the chapter describe arrival, accompanying objects and actions in progress?',
      matchingPairs: [
        { left: 'He invited his magicians to the palace.', right: 'uses invite + person + to + place for an invitation' },
        { left: 'The magicians came with sticks in their hands.', right: 'uses come with + noun to show what someone brings or has' },
        { left: 'Some were holding ropes.', right: 'uses were + -ing for an action in progress in the past' },
        { left: 'They put down the sticks and ropes on the ground.', right: 'uses put down + object to describe placing something on a surface' },
      ],
      correctAnswer: {
        'He invited his magicians to the palace.': 'uses invite + person + to + place for an invitation',
        'The magicians came with sticks in their hands.': 'uses come with + noun to show what someone brings or has',
        'Some were holding ropes.': 'uses were + -ing for an action in progress in the past',
        'They put down the sticks and ropes on the ground.': 'uses put down + object to describe placing something on a surface',
      },
      explanation: 'The opening combines invitation language, “with” for accompanying objects, past continuous for an action in progress and “put down” for placement.',
      feedback: { correct: 'Correct. You identified invitation, accompaniment, ongoing action and placement.', incorrect: 'Reread the opening lines about how the magicians arrived and what they did with the sticks and ropes.' },
    },
    {
      id: 'moses-a2-language-13-command-change',
      type: 'matching',
      title: 'Command, Change and Speed',
      instructions: 'Match the story language with its function.',
      question: 'How does Chapter 13 give a command and describe a sudden change?',
      matchingPairs: [
        { left: 'Throw your stick!', right: 'uses an imperative to give a direct command' },
        { left: 'Moses threw down his stick.', right: 'uses the past form threw to report the completed action' },
        { left: 'It turned into a huge snake.', right: 'uses turn into to describe transformation' },
        { left: 'His stick quickly ate all the snakes.', right: 'uses an adverb such as quickly to show how an action happens' },
      ],
      correctAnswer: {
        'Throw your stick!': 'uses an imperative to give a direct command',
        'Moses threw down his stick.': 'uses the past form threw to report the completed action',
        'It turned into a huge snake.': 'uses turn into to describe transformation',
        'His stick quickly ate all the snakes.': 'uses an adverb such as quickly to show how an action happens',
      },
      explanation: 'The chapter moves from a direct command to a completed action, a transformation and a fast result.',
      feedback: { correct: 'Correct. You separated the command, completed action, transformation and manner.', incorrect: 'Follow the stick scene from Allah’s command to the result.' },
    },
    {
      id: 'moses-a2-language-13-reason-continuation',
      type: 'matching',
      title: 'Reason and Continuing Action',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does the ending explain a reason and show that an action continues?',
      matchingPairs: [
        { left: 'The king still did not believe in Allah.', right: 'uses still + negative verb to show that a situation has not changed' },
        { left: 'because he was arrogant', right: 'uses because to give a reason' },
        { left: 'He continued to harm Moses and his people.', right: 'uses continue to + verb for an action that keeps happening' },
        { left: 'day and night', right: 'uses a time expression to show repeated or ongoing action' },
      ],
      correctAnswer: {
        'The king still did not believe in Allah.': 'uses still + negative verb to show that a situation has not changed',
        'because he was arrogant': 'uses because to give a reason',
        'He continued to harm Moses and his people.': 'uses continue to + verb for an action that keeps happening',
        'day and night': 'uses a time expression to show repeated or ongoing action',
      },
      explanation: 'The ending uses “still” for an unchanged situation, “because” for reason and “continue to” plus a time expression for ongoing action.',
      feedback: { correct: 'Correct. You identified unchanged situation, reason and continuation.', incorrect: 'Look again at the final sentences about Pharaoh.' },
    },
    {
      id: 'moses-a2-language-13-production',
      type: 'reflection',
      title: 'Use It: A Small Demonstration',
      instructions: 'Imagine a simple classroom demonstration, game or experiment. Write or say four short sentences using at least three Chapter 13 language frames.',
      question: 'Can you describe what people brought, give a command, describe a change and explain what continued?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use “came with…”, “was/were + -ing”, an imperative, “turned into…”, an adverb such as “quickly”, “because…”, or “continued to + verb”.',
      feedback: { correct: 'Use the Chapter 13 language in a new everyday situation instead of retelling the magicians scene.', incorrect: '' },
      discussionPrompts: [
        { question: 'Arrival — Say what someone came with or was holding.', mode: 'Pair' },
        { question: 'Command — Give one short instruction using an imperative.', mode: 'Individual' },
        { question: 'Change — Describe something changing with “turned into”.', mode: 'Individual' },
        { question: 'Reason or continuation — Add “because…” or “continued to + verb”.', mode: 'Individual' },
      ],
    },
  ],
};
