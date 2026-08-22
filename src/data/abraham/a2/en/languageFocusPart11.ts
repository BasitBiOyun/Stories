import type { Exercise } from '../../../../types';

/**
 * Chapter 14 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge about building the Ka'ba and the final message.
 */
export const abrahamA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  14: [
    {
      id: 'abraham-a2-language-14-time-task',
      type: 'matching',
      title: 'Time and an Important Task',
      instructions: 'Match each Chapter 14 expression with the language job it performs.',
      question: 'How does the chapter show repeated past actions, purpose, and a task given to someone?',
      matchingPairs: [
        { left: 'During that time', right: 'places an event inside a period of time' },
        { left: 'visited Mecca several times', right: 'several times shows that an action happened more than once' },
        { left: 'to see his family', right: 'to + verb can explain the purpose of an action' },
        { left: 'Allah asked Abraham to build', right: 'ask + person + to + verb gives a task or request' },
      ],
      correctAnswer: {
        'During that time': 'places an event inside a period of time',
        'visited Mecca several times': 'several times shows that an action happened more than once',
        'to see his family': 'to + verb can explain the purpose of an action',
        'Allah asked Abraham to build': 'ask + person + to + verb gives a task or request',
      },
      explanation: 'Chapter 14 uses time expressions to locate and repeat actions, “to + verb” for purpose, and “ask + person + to + verb” for a task.',
      feedback: {
        correct: 'Good. You identified time, repetition, purpose and task language.',
        incorrect: 'Ask what each expression answers: when, how often, why, or what someone was asked to do.',
      },
    },
    {
      id: 'abraham-a2-language-14-future-certainty',
      type: 'matching',
      title: 'Promise and Certainty',
      instructions: 'Match each expression with its function.',
      question: 'How do Abraham and Ishmael talk about a future action and show certainty?',
      matchingPairs: [
        { left: 'you will help me with it', right: 'will + verb talks about a future action' },
        { left: 'I will help you', right: 'will + verb can express a promise or willingness' },
        { left: 'for sure', right: 'shows that the speaker is certain' },
        { left: 'an important job', right: 'adjective + noun describes the kind of task' },
      ],
      correctAnswer: {
        'you will help me with it': 'will + verb talks about a future action',
        'I will help you': 'will + verb can express a promise or willingness',
        'for sure': 'shows that the speaker is certain',
        'an important job': 'adjective + noun describes the kind of task',
      },
      explanation: 'The chapter uses “will + verb” for future action and willingness, while “for sure” adds certainty.',
      feedback: {
        correct: 'Correct. You separated future meaning, willingness and certainty.',
        incorrect: 'Look at Ishmael’s answer and notice which words make his promise sound certain.',
      },
    },
    {
      id: 'abraham-a2-language-14-after-still-connection',
      type: 'matching',
      title: 'After, Still and Connection',
      instructions: 'Match the chapter expressions with what they do.',
      question: 'How does the final chapter connect one completed action, something continuing today, and people across time?',
      matchingPairs: [
        { left: 'After Abraham built the Sacred Ka’ba', right: 'after + past event shows that another event comes later' },
        { left: 'people still visit the House of Allah', right: 'still + present verb shows that an action continues now' },
        { left: 'to make Hajj', right: 'to + verb explains the purpose of the visit' },
        { left: 'One of them was Muhammad', right: 'one of + plural group identifies one member of a larger group' },
      ],
      correctAnswer: {
        'After Abraham built the Sacred Ka’ba': 'after + past event shows that another event comes later',
        'people still visit the House of Allah': 'still + present verb shows that an action continues now',
        'to make Hajj': 'to + verb explains the purpose of the visit',
        'One of them was Muhammad': 'one of + plural group identifies one member of a larger group',
      },
      explanation: 'Chapter 14 uses “after” for sequence, “still” for continuation, “to + verb” for purpose, and “one of” to connect one person to a larger family line.',
      feedback: {
        correct: 'Good. You identified sequence, continuation, purpose and group connection.',
        incorrect: 'Notice which phrase points backward in time, which continues to today, and which selects one person from a group.',
      },
    },
    {
      id: 'abraham-a2-language-14-production',
      type: 'reflection',
      title: 'Say It: A Shared Task',
      instructions: 'Write or say four or five short A2 sentences about an important task two people do together. Use at least four Chapter 14 language patterns. Do not retell the Ka’ba scene or repeat the final message.',
      question: 'Can you explain when the task happens, why it is done, who will help, and what continues after it is finished?',
      correctAnswer: null,
      explanation: 'A strong response can use “during...”, “several times”, “to + verb” for purpose, “ask + person + to + verb”, “will + verb”, “for sure”, “after + past event”, “still + present verb”, or “one of...”.',
      feedback: {
        correct: 'Use the Chapter 14 patterns to make one short, connected situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Time — Start with “During...” or say how many times something happens.', mode: 'Individual' },
        { question: 'Purpose — Explain why the task is done with “to + verb”.', mode: 'Individual' },
        { question: 'Help — Use “ask + person + to + verb” and answer with “will + verb”.', mode: 'Pair' },
        { question: 'Certainty — Add “for sure” where it sounds natural.', mode: 'Pair' },
        { question: 'Continuation — Finish with “After...” and something that “still” happens now.', mode: 'Individual' },
      ],
    },
  ],
};
