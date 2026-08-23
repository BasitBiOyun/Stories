import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 11 onward. */
export const mosesA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  11: [
    {
      id: 'moses-a2-language-11-command-message',
      type: 'matching',
      title: 'Instruction and Message',
      instructions: 'Match each Chapter 11 expression with its communicative function.',
      question: 'How does the chapter move from a direct instruction to a mission?',
      matchingPairs: [
        { left: 'Put your hand into your chest.', right: 'gives a direct instruction with an imperative' },
        { left: 'Now take it out.', right: 'gives the next action in a sequence of instructions' },
        { left: 'Go to the king.', right: 'directs someone to a place for a task' },
        { left: 'Tell him Allah is the most powerful.', right: 'tells someone what message to communicate' },
      ],
      correctAnswer: {
        'Put your hand into your chest.': 'gives a direct instruction with an imperative',
        'Now take it out.': 'gives the next action in a sequence of instructions',
        'Go to the king.': 'directs someone to a place for a task',
        'Tell him Allah is the most powerful.': 'tells someone what message to communicate',
      },
      explanation: 'Chapter 11 uses imperatives such as “put”, “take”, “go” and “tell” to give actions and communicate a mission.',
      feedback: { correct: 'Correct. You identified instruction, sequence, movement and message.', incorrect: 'Look again at Allah’s direct words to Moses.' },
    },
    {
      id: 'moses-a2-language-11-change-role',
      type: 'matching',
      title: 'Change and New Role',
      instructions: 'Match each expression with the kind of change it describes.',
      question: 'How does the chapter describe visible change and a change in role?',
      matchingPairs: [
        { left: 'your hand is now shining', right: 'describes a new visible state with be + adjective/participle' },
        { left: 'Moses became a Messenger of Allah', right: 'uses become to show a change into a new role' },
        { left: 'Allah made him His prophet', right: 'uses make + person + complement to give a new status' },
        { left: 'they did not believe in Allah', right: 'uses did not + base verb for a negative past response' },
      ],
      correctAnswer: {
        'your hand is now shining': 'describes a new visible state with be + adjective/participle',
        'Moses became a Messenger of Allah': 'uses become to show a change into a new role',
        'Allah made him His prophet': 'uses make + person + complement to give a new status',
        'they did not believe in Allah': 'uses did not + base verb for a negative past response',
      },
      explanation: 'The chapter uses “is now ...”, “became”, “made + person + complement” and a negative past form to describe changes and responses.',
      feedback: { correct: 'Correct. You separated visible state, new role, assigned status and negative response.', incorrect: 'Compare the sentences about the shining hand, Moses’s new role and the king’s response.' },
    },
    {
      id: 'moses-a2-language-11-companion-purpose',
      type: 'matching',
      title: 'Companion and Purpose',
      instructions: 'Match the story language with what it expresses.',
      question: 'How does Moses describe going with another person and going somewhere for a purpose?',
      matchingPairs: [
        { left: 'Moses took his brother Harun with him.', right: 'uses take + person + with to show accompaniment' },
        { left: 'went to the palace', right: 'describes movement to a destination' },
        { left: 'to give the message of Allah', right: 'uses to + verb to explain purpose' },
        { left: 'went to the palace to give the message', right: 'connects destination with the reason for going there' },
      ],
      correctAnswer: {
        'Moses took his brother Harun with him.': 'uses take + person + with to show accompaniment',
        'went to the palace': 'describes movement to a destination',
        'to give the message of Allah': 'uses to + verb to explain purpose',
        'went to the palace to give the message': 'connects destination with the reason for going there',
      },
      explanation: '“Take ... with” expresses accompaniment, while “to + verb” explains why someone goes to a place.',
      feedback: { correct: 'Correct. You identified companion, destination and purpose.', incorrect: 'Read the sentence about Harun and the palace again.' },
    },
    {
      id: 'moses-a2-language-11-production',
      type: 'reflection',
      title: 'Use It: A Small Mission',
      instructions: 'Imagine you have a simple school or family task. Write or say four short sentences using at least three Chapter 11 language frames.',
      question: 'Can you give an instruction, say who goes with you, explain a purpose and describe a change or result?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use an imperative, “take + person + with”, “go to + place”, “to + verb” for purpose, “become”, or “make + person + complement”.',
      feedback: { correct: 'Use the Chapter 11 language in a new everyday task instead of retelling Moses’s mission.', incorrect: '' },
      discussionPrompts: [
        { question: 'Instruction — Give one clear command: “Take ...”, “Go ...” or “Tell ...”.', mode: 'Pair' },
        { question: 'Companion — Say who will go with you.', mode: 'Individual' },
        { question: 'Purpose — Explain why you are going somewhere using “to + verb”.', mode: 'Individual' },
        { question: 'Result — Say how someone or something becomes different after the task.', mode: 'Individual' },
      ],
    },
  ],
};
