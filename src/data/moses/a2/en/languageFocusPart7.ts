import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 10 onward. */
export const mosesA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  10: [
    {
      id: 'moses-a2-language-10-setting-change',
      type: 'matching',
      title: 'A Changing Setting',
      instructions: 'Match each Chapter 10 expression with what it does in the scene.',
      question: 'How does the chapter describe the journey and the changing conditions?',
      matchingPairs: [
        { left: 'It was winter.', right: 'gives background information about the season' },
        { left: 'There was nobody on the way.', right: 'says that no person was present there' },
        { left: 'It was getting dark and cold.', right: 'shows conditions changing gradually' },
        { left: 'They were in a valley between mountains.', right: 'locates the family in a place' },
      ],
      correctAnswer: {
        'It was winter.': 'gives background information about the season',
        'There was nobody on the way.': 'says that no person was present there',
        'It was getting dark and cold.': 'shows conditions changing gradually',
        'They were in a valley between mountains.': 'locates the family in a place',
      },
      explanation: 'The chapter combines past background with “there was” and “was getting + adjective” to build a changing travel scene.',
      feedback: { correct: 'Correct. You identified background, absence, change and location.', incorrect: 'Look at the sentences just before Moses sees the fire.' },
    },
    {
      id: 'moses-a2-language-10-purpose-future',
      type: 'matching',
      title: 'Plan and Purpose',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does Moses tell his family what to do and explain his plan?',
      matchingPairs: [
        { left: 'Wait here.', right: 'uses an imperative to give a direct instruction' },
        { left: 'I will get some fire.', right: 'expresses what the speaker plans or intends to do next' },
        { left: 'to get warm', right: 'uses to + verb to explain purpose' },
        { left: 'I will get some fire to get warm.', right: 'connects a future action with its purpose' },
      ],
      correctAnswer: {
        'Wait here.': 'uses an imperative to give a direct instruction',
        'I will get some fire.': 'expresses what the speaker plans or intends to do next',
        'to get warm': 'uses to + verb to explain purpose',
        'I will get some fire to get warm.': 'connects a future action with its purpose',
      },
      explanation: '“Wait” gives an instruction, “will + verb” states the next intended action, and “to + verb” explains why the action is done.',
      feedback: { correct: 'Correct. You separated instruction, future action and purpose.', incorrect: 'Read Moses’s words to his family and notice what he will do and why.' },
    },
    {
      id: 'moses-a2-language-10-commands-change',
      type: 'matching',
      title: 'Listen and Act',
      instructions: 'Match the story language with its function.',
      question: 'How are direct commands and a sudden change expressed on the mountain?',
      matchingPairs: [
        { left: 'Listen to me.', right: 'a direct command telling someone to pay attention' },
        { left: 'Put down your walking stick!', right: 'an imperative telling someone to perform an action' },
        { left: 'Moses put down his walking stick.', right: 'reports the completed action in the past' },
        { left: 'It turned into a big snake.', right: 'uses turn into to describe a change from one thing to another' },
      ],
      correctAnswer: {
        'Listen to me.': 'a direct command telling someone to pay attention',
        'Put down your walking stick!': 'an imperative telling someone to perform an action',
        'Moses put down his walking stick.': 'reports the completed action in the past',
        'It turned into a big snake.': 'uses turn into to describe a change from one thing to another',
      },
      explanation: 'Chapter 10 contrasts imperative commands with Moses’s completed response and uses “turn into” for transformation.',
      feedback: { correct: 'Correct. You distinguished commands, response and transformation.', incorrect: 'Compare Allah’s commands with the sentences describing what Moses then did.' },
    },
    {
      id: 'moses-a2-language-10-production',
      type: 'reflection',
      title: 'Use It: A Cold Evening',
      instructions: 'Imagine you are with your family or friends on a cold evening. Write or say four short sentences using at least three Chapter 10 language frames.',
      question: 'Can you describe changing conditions, give an instruction, state a next action and explain its purpose?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use “It is getting + adjective”, “There is/are ...”, an imperative, “I will + verb”, “to + verb” for purpose, or “turn into”.',
      feedback: { correct: 'Use the Chapter 10 language in a new everyday situation instead of retelling the mountain scene.', incorrect: '' },
      discussionPrompts: [
        { question: 'Setting — Describe one condition that is changing: “It is getting ...”.', mode: 'Individual' },
        { question: 'Instruction — Tell another person to do one simple thing.', mode: 'Pair' },
        { question: 'Plan — Say what you will do next.', mode: 'Individual' },
        { question: 'Purpose — Add why you will do it with “to + verb”.', mode: 'Individual' },
      ],
    },
  ],
};
