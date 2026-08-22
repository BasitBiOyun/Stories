import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Abraham A2 Language Focus work.
 * Each chapter is grounded in its own story language and kept separate from comprehension retrieval.
 */
export const abrahamA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  4: [
    {
      id: 'abraham-a2-language-4-time-and-turning-points',
      type: 'matching',
      title: 'Time and Turning Points',
      instructions: 'Match each Chapter 4 time expression with the job it does in the story.',
      question: 'How does the chapter move from the night to Abraham’s new understanding?',
      matchingPairs: [
        { left: 'Abraham stayed all night', right: 'shows how long the first situation continued' },
        { left: 'In the morning the sun came out', right: 'moves the story to a new time' },
        { left: 'When he saw the bright sun', right: 'introduces the event that starts a new thought' },
        { left: 'when it set', right: 'introduces the event that changes his thinking' },
      ],
      correctAnswer: {
        'Abraham stayed all night': 'shows how long the first situation continued',
        'In the morning the sun came out': 'moves the story to a new time',
        'When he saw the bright sun': 'introduces the event that starts a new thought',
        'when it set': 'introduces the event that changes his thinking',
      },
      explanation: 'Chapter 4 uses duration and time markers to organize the scene. “All night” shows duration, “In the morning” changes the time, and “When ...” connects an event with Abraham’s next thought or conclusion.',
      feedback: {
        correct: 'Good. You connected each time expression with its narrative function.',
        incorrect: 'Ask whether each expression shows duration, a new time, or an event that causes the next thought.',
      },
    },
    {
      id: 'abraham-a2-language-4-if-future-result',
      type: 'sequencing',
      title: 'If This Happens, Then What?',
      instructions: 'Put the chunks in order to rebuild Abraham’s prayer.',
      question: 'How does Chapter 4 connect a condition with a future result?',
      sequencingItems: [
        { id: '1', text: 'If Allah doesn’t show me' },
        { id: '2', text: 'the right way,' },
        { id: '3', text: 'I will be' },
        { id: '4', text: 'on the wrong path.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'The chapter uses “If + present form, will + base verb” to connect a possible condition with its future result: “If Allah doesn’t show me the right way, I will be on the wrong path.”',
      feedback: {
        correct: 'Correct. You rebuilt the condition-result pattern.',
        incorrect: 'Begin with “If ...”, complete the condition, then add the future result with “will”.',
      },
    },
    {
      id: 'abraham-a2-language-4-duty-and-guidance',
      type: 'matching',
      title: 'Duty, Guidance and Instructions',
      instructions: 'Match each Chapter 4 expression with its communication function.',
      question: 'How does the chapter express responsibility and guide another person?',
      matchingPairs: [
        { left: 'he had to guide his people', right: 'expresses a responsibility or duty' },
        { left: 'Follow me', right: 'gives a direct instruction or invitation' },
        { left: 'I will guide you on the right way', right: 'offers or promises future guidance' },
        { left: 'Stop worshipping stones', right: 'tells someone to stop an action' },
      ],
      correctAnswer: {
        'he had to guide his people': 'expresses a responsibility or duty',
        'Follow me': 'gives a direct instruction or invitation',
        'I will guide you on the right way': 'offers or promises future guidance',
        'Stop worshipping stones': 'tells someone to stop an action',
      },
      explanation: '“Had to” expresses a past responsibility. An imperative such as “Follow me” gives a direct instruction, “I will ...” can promise or offer future action, and “Stop + -ing” tells someone to end an action.',
      feedback: {
        correct: 'Good. You separated duty, instruction, future guidance and stopping an action.',
        incorrect: 'Ask whether the expression describes responsibility, directs another person, promises future help, or tells someone to stop.',
      },
    },
    {
      id: 'abraham-a2-language-4-guidance-production',
      type: 'reflection',
      title: 'Say It: Condition, Duty and Guidance',
      instructions: 'Write or say three or four short A2 sentences using Chapter 4 language. Use at least three of the patterns below.',
      question: 'Can you give simple guidance and explain a responsibility without retelling the Quick Challenge?',
      correctAnswer: null,
      explanation: 'A strong response can use “If ... will ...” for a condition and result, “have to” for responsibility, an imperative for guidance, and “I will ...” for a future promise or offer.',
      feedback: {
        correct: 'Keep the message short and make each language function clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Condition — Begin with “If ... , I will ...”', mode: 'Individual' },
        { question: 'Duty — Add “I have to ...” or “We have to ...”', mode: 'Individual' },
        { question: 'Guidance — Give one direct instruction such as “Follow ...” or “Stop ...”', mode: 'Individual' },
        { question: 'Future help — Finish with “I will help/guide ...”', mode: 'Pair' },
      ],
    },
  ],
};
