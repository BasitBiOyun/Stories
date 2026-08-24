import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 15 onward. */
export const mosesA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  15: [
    {
      id: 'moses-a2-language-15-position-reassurance',
      type: 'matching',
      title: 'Position and Reassurance',
      instructions: 'Match each Chapter 15 expression with what it communicates.',
      question: 'How does the chapter describe danger around the group and give reassurance?',
      matchingPairs: [
        { left: 'The sea was in front of them.', right: 'uses in front of + person to describe position' },
        { left: 'The king and his army were behind them.', right: 'uses behind + person to describe position' },
        { left: 'Calm down!', right: 'uses an imperative to tell people to become calm' },
        { left: 'Allah is with us and will help us.', right: 'uses will + verb to give reassurance about future help' },
      ],
      correctAnswer: {
        'The sea was in front of them.': 'uses in front of + person to describe position',
        'The king and his army were behind them.': 'uses behind + person to describe position',
        'Calm down!': 'uses an imperative to tell people to become calm',
        'Allah is with us and will help us.': 'uses will + verb to give reassurance about future help',
      },
      explanation: 'The scene uses place expressions to show the difficult situation, then an imperative and “will” to reassure the group.',
      feedback: { correct: 'Correct. You identified position, a calming instruction and future reassurance.', incorrect: 'Reread the sentences that describe where the sea and army were and what Moses said to his people.' },
    },
    {
      id: 'moses-a2-language-15-change-result',
      type: 'matching',
      title: 'Change and Result',
      instructions: 'Match each story expression with its language function.',
      question: 'How does Chapter 15 describe a change and its result?',
      matchingPairs: [
        { left: 'The sea parted.', right: 'uses a past verb to report a completed change' },
        { left: 'The waves became high walls.', right: 'uses become + noun phrase to describe a new state' },
        { left: 'They could see the sandy ground.', right: 'uses could + verb for ability in the past' },
        { left: 'Allah made a road in the sea for them.', right: 'uses make + object to describe creating something for someone' },
      ],
      correctAnswer: {
        'The sea parted.': 'uses a past verb to report a completed change',
        'The waves became high walls.': 'uses become + noun phrase to describe a new state',
        'They could see the sandy ground.': 'uses could + verb for ability in the past',
        'Allah made a road in the sea for them.': 'uses make + object to describe creating something for someone',
      },
      explanation: 'The chapter moves from a completed change to a new state, a new ability and a new path.',
      feedback: { correct: 'Correct. You separated the change, new state, ability and result.', incorrect: 'Follow what changed after the sea opened and what the people could then see and use.' },
    },
    {
      id: 'moses-a2-language-15-safe-movement',
      type: 'matching',
      title: 'Moving Safely',
      instructions: 'Match the language with what it tells us.',
      question: 'How does the ending describe safe movement through a place?',
      matchingPairs: [
        { left: 'go to a safe place', right: 'uses go to + place to show destination' },
        { left: 'a road in the sea', right: 'uses in + place to locate something inside an area' },
        { left: 'walked between the walls of water', right: 'uses between + plural noun to show position in the middle of two sides' },
        { left: 'safely walked', right: 'uses an adverb to describe how an action happened' },
      ],
      correctAnswer: {
        'go to a safe place': 'uses go to + place to show destination',
        'a road in the sea': 'uses in + place to locate something inside an area',
        'walked between the walls of water': 'uses between + plural noun to show position in the middle of two sides',
        'safely walked': 'uses an adverb to describe how an action happened',
      },
      explanation: 'The ending combines destination and place language with “between” and the adverb “safely” to describe movement.',
      feedback: { correct: 'Correct. You identified destination, location, position and manner.', incorrect: 'Look again at the final sentences describing the road and how the people walked.' },
    },
    {
      id: 'moses-a2-language-15-production',
      type: 'reflection',
      title: 'Use It: Find a Safe Route',
      instructions: 'Imagine friends need to move through a crowded school, park or station. Write or say four short sentences using at least three Chapter 15 language frames.',
      question: 'Can you describe where things are, reassure someone, describe a change and explain how to move safely?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use “in front of…”, “behind…”, “Calm down!”, “will + verb”, “became…”, “could + verb”, “between…”, or an adverb such as “safely”.',
      feedback: { correct: 'Use the Chapter 15 language in a new everyday route situation instead of retelling the sea scene.', incorrect: '' },
      discussionPrompts: [
        { question: 'Position — Say what is in front of or behind the group.', mode: 'Individual' },
        { question: 'Reassurance — Give one calming instruction and say what will happen.', mode: 'Pair' },
        { question: 'Change — Describe one thing that became different.', mode: 'Individual' },
        { question: 'Route — Explain where to walk using “between” and an adverb.', mode: 'Individual' },
      ],
    },
  ],
};
