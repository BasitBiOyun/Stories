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
  5: [
    {
      id: 'abraham-a2-language-5-belief-reason-and-question',
      type: 'matching',
      title: 'Belief, Reason and Questions',
      instructions: 'Match each Chapter 5 expression with what the speaker is doing.',
      question: 'How does Abraham state a belief, reject an idea, ask for a reason and explain his position?',
      matchingPairs: [
        { left: 'I believe in Allah', right: 'states a belief clearly' },
        { left: 'I do not worship stone idols', right: 'states what the speaker rejects or does not do' },
        { left: 'because Allah is the one and only God', right: 'gives a reason' },
        { left: 'Why do you bow down to these objects?', right: 'asks another person for a reason' },
      ],
      correctAnswer: {
        'I believe in Allah': 'states a belief clearly',
        'I do not worship stone idols': 'states what the speaker rejects or does not do',
        'because Allah is the one and only God': 'gives a reason',
        'Why do you bow down to these objects?': 'asks another person for a reason',
      },
      explanation: 'Chapter 5 combines a positive belief statement, a negative statement, “because” for giving a reason, and “Why ...?” for asking for one.',
      feedback: {
        correct: 'Good. You separated stating a belief, rejecting an action, giving a reason and asking for one.',
        incorrect: 'Ask whether the sentence tells what someone believes, what they do not do, why something is true, or asks another person why.',
      },
    },
    {
      id: 'abraham-a2-language-5-reason-and-result',
      type: 'sequencing',
      title: 'From Reason to Position',
      instructions: 'Put the chunks in order to rebuild Abraham’s statement.',
      question: 'How does Chapter 5 connect a position with its reason?',
      sequencingItems: [
        { id: '1', text: 'I believe in Allah.' },
        { id: '2', text: 'I do not worship stone idols,' },
        { id: '3', text: 'because' },
        { id: '4', text: 'Allah is the one and only God.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'The speaker first states a belief and position, then uses “because” to explain the reason. “Because” answers the question “Why?”.',
      feedback: {
        correct: 'Correct. You connected the position to its reason.',
        incorrect: 'State the belief first. Then give the negative position and add its reason with “because”.',
      },
    },
    {
      id: 'abraham-a2-language-5-when-and-power',
      type: 'matching',
      title: 'When Something Happens — and What Can Help',
      instructions: 'Match each Chapter 5 chunk with the language job it performs.',
      question: 'How does the chapter talk about recurring situations and the ability to help?',
      matchingPairs: [
        { left: 'when I need them', right: 'names a recurring situation in which something happens' },
        { left: 'when I am sick', right: 'names another recurring situation or condition' },
        { left: 'He heals me', right: 'states what happens in that situation' },
        { left: 'They have no power to help you', right: 'says that someone or something lacks the ability to help' },
      ],
      correctAnswer: {
        'when I need them': 'names a recurring situation in which something happens',
        'when I am sick': 'names another recurring situation or condition',
        'He heals me': 'states what happens in that situation',
        'They have no power to help you': 'says that someone or something lacks the ability to help',
      },
      explanation: 'With the present simple, “when ...” can introduce a situation that happens again or is generally true. “Have no power to + verb” expresses lack of ability or power.',
      feedback: {
        correct: 'Good. You connected recurring situations with their results and recognized language for lack of power.',
        incorrect: 'Separate the “when ...” situation from what happens, then find the expression that means “cannot really help”.',
      },
    },
    {
      id: 'abraham-a2-language-5-position-production',
      type: 'reflection',
      title: 'Say It: Belief, Reason and General Situations',
      instructions: 'Write or say four short A2 sentences using the Chapter 5 language patterns below. Do not retell why the people followed their fathers.',
      question: 'Can you state a position, give a reason, describe a general situation and talk about ability?',
      correctAnswer: null,
      explanation: 'A strong response can combine “I believe ...”, a negative sentence with “because”, “When ...” for a general situation, and “has/has no power to ...” for ability.',
      feedback: {
        correct: 'Keep each sentence simple and make the reason or situation clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Belief — Begin with “I believe ...”', mode: 'Individual' },
        { question: 'Reason — Add “I do not ... because ...”', mode: 'Individual' },
        { question: 'General situation — Write “When I ... , ...”', mode: 'Individual' },
        { question: 'Ability — Finish with “... has/has no power to ...”', mode: 'Pair' },
      ],
    },
  ],
};
