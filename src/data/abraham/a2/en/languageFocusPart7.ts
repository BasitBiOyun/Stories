import type { Exercise } from '../../../../types';

/**
 * Chapter 10 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge about why the sun question defeated Nimrod's claim.
 */
export const abrahamA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-a2-language-10-thought-intention',
      type: 'matching',
      title: 'What He Heard, Thought and Wanted',
      instructions: 'Match each Chapter 10 expression with the language job it performs.',
      question: 'How does the chapter report information, thoughts and intentions?',
      matchingPairs: [
        { left: 'He heard about the miracle', right: 'heard about + noun tells what information reached someone' },
        { left: 'He thought Abraham was not an ordinary person', right: 'thought + clause reports an idea in someone’s mind' },
        { left: 'he wanted to meet him', right: 'wanted to + verb expresses an intention or desire' },
        { left: 'He called him and asked, “Who is your God?”', right: 'called + person and asked introduces a direct question' },
      ],
      correctAnswer: {
        'He heard about the miracle': 'heard about + noun tells what information reached someone',
        'He thought Abraham was not an ordinary person': 'thought + clause reports an idea in someone’s mind',
        'he wanted to meet him': 'wanted to + verb expresses an intention or desire',
        'He called him and asked, “Who is your God?”': 'called + person and asked introduces a direct question',
      },
      explanation: 'Chapter 10 uses “heard about” for information, “thought + clause” for an idea, and “wanted to + verb” for intention before the dialogue begins.',
      feedback: {
        correct: 'Good. You separated information, thought, intention and direct questioning.',
        incorrect: 'Ask what each phrase tells us: information received, an idea, a desire, or a question.',
      },
    },
    {
      id: 'abraham-a2-language-10-commands-let',
      type: 'matching',
      title: 'Commands and Let',
      instructions: 'Match each expression with how it controls another person’s action.',
      question: 'How does Nimrod give orders and allow an action?',
      matchingPairs: [
        { left: 'He ordered his guards to bring two slaves', right: 'order + person + to + verb reports a command' },
        { left: 'Kill one of the slaves', right: 'base verb at the start gives a direct command' },
        { left: 'let him go', right: 'let + person + base verb allows an action' },
        { left: 'I let the second slave live', right: 'let + person + base verb means allow the person to do or remain in that state' },
      ],
      correctAnswer: {
        'He ordered his guards to bring two slaves': 'order + person + to + verb reports a command',
        'Kill one of the slaves': 'base verb at the start gives a direct command',
        'let him go': 'let + person + base verb allows an action',
        'I let the second slave live': 'let + person + base verb means allow the person to do or remain in that state',
      },
      explanation: 'A direct imperative starts with the base verb. “Order + person + to + verb” reports a command, while “let + person + base verb” expresses permission or allowing.',
      feedback: {
        correct: 'Correct. You distinguished direct orders, reported orders and permission.',
        incorrect: 'Look at whether the sentence commands directly, reports a command, or allows an action.',
      },
    },
    {
      id: 'abraham-a2-language-10-ability-cause',
      type: 'matching',
      title: 'Ability, Challenge and Result',
      instructions: 'Match each Chapter 10 expression with its function.',
      question: 'How does the dialogue test ability and show the result of an event?',
      matchingPairs: [
        { left: 'Can you make the sun rise from the west?', right: 'Can you + verb asks whether someone has the ability to do something' },
        { left: 'make the sun rise', right: 'make + object + base verb means cause something to happen' },
        { left: 'Nimrod couldn’t do this', right: 'could not + verb expresses inability in the past' },
        { left: 'This made Nimrod more angry', right: 'make + person + adjective shows that something causes a feeling or state' },
      ],
      correctAnswer: {
        'Can you make the sun rise from the west?': 'Can you + verb asks whether someone has the ability to do something',
        'make the sun rise': 'make + object + base verb means cause something to happen',
        'Nimrod couldn’t do this': 'could not + verb expresses inability in the past',
        'This made Nimrod more angry': 'make + person + adjective shows that something causes a feeling or state',
      },
      explanation: '“Can” asks about present ability, “couldn’t” describes past inability, and “make” can mean either cause an action or cause a feeling/state.',
      feedback: {
        correct: 'Good. You identified ability, causation and emotional result.',
        incorrect: 'Separate the question about ability from the two different uses of “make”.',
      },
    },
    {
      id: 'abraham-a2-language-10-production',
      type: 'reflection',
      title: 'Say It: A Claim and a Test',
      instructions: 'Write or say four or five short A2 sentences about a person who makes a claim and another person who tests it. Use at least four Chapter 10 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you report a thought, give or report a command, ask about ability, and show a result?',
      correctAnswer: null,
      explanation: 'A strong response can use “thought + clause”, “wanted to + verb”, “ordered ... to ...”, a direct imperative, “let ... + verb”, “Can you ...?”, “couldn’t ...”, or “made ... + adjective”.',
      feedback: {
        correct: 'Use the patterns to create a short, clear situation with a claim, a test and a result.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Thought or intention — Use “thought + clause” or “wanted to + verb”.', mode: 'Individual' },
        { question: 'Command — Use an imperative or “ordered + person + to + verb”.', mode: 'Individual' },
        { question: 'Permission — Add “let + person + base verb” if it fits.', mode: 'Individual' },
        { question: 'Ability — Ask one question with “Can you ...?” and answer with “can/can’t/couldn’t”.', mode: 'Individual' },
        { question: 'Result — End with “This made ... + adjective”.', mode: 'Pair' },
      ],
    },
  ],
};
