import type { Exercise } from '../../../../types';

/**
 * Chapter 12 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge about Hagar's trust and her search from hill to hill.
 */
export const abrahamA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-a2-language-12-instructions-belief',
      type: 'matching',
      title: 'Instructions, Knowledge and Certainty',
      instructions: 'Match each Chapter 12 expression with the language job it performs.',
      question: 'How does the chapter report an instruction, knowledge and strong belief about the future?',
      matchingPairs: [
        { left: 'told his wife to stay near one of the hills', right: 'tell + person + to + verb reports an instruction' },
        { left: 'Hagar knew that this was part of Allah’s plan', right: 'know that + clause reports something a person understands as true' },
        { left: 'Allah will never let us die', right: 'will never + verb expresses a strong negative belief about the future' },
        { left: 'He will surely protect us', right: 'will surely + verb expresses strong confidence about the future' },
      ],
      correctAnswer: {
        'told his wife to stay near one of the hills': 'tell + person + to + verb reports an instruction',
        'Hagar knew that this was part of Allah’s plan': 'know that + clause reports something a person understands as true',
        'Allah will never let us die': 'will never + verb expresses a strong negative belief about the future',
        'He will surely protect us': 'will surely + verb expresses strong confidence about the future',
      },
      explanation: 'Chapter 12 uses “told ... to” for an instruction, “knew that” for knowledge, and “will never / will surely” for strong beliefs about the future.',
      feedback: {
        correct: 'Good. You separated instruction, knowledge and future certainty.',
        incorrect: 'Ask what each phrase does: gives an instruction, reports knowledge, or expresses strong future belief.',
      },
    },
    {
      id: 'abraham-a2-language-12-prayer-purpose',
      type: 'matching',
      title: 'Prayer and Purpose',
      instructions: 'Match each expression with its function in the chapter.',
      question: 'How does Chapter 12 express requests and the purpose behind them?',
      matchingPairs: [
        { left: 'asked Allah to protect his family', right: 'ask + person + to + verb expresses a request' },
        { left: 'asked Allah to give them blessings', right: 'ask + person + to + verb can introduce another requested action' },
        { left: 'so they could thank Him', right: 'so + subject + could + verb explains the purpose or hoped-for result' },
        { left: 'had to give food to her child', right: 'had to + verb expresses something necessary in the past' },
      ],
      correctAnswer: {
        'asked Allah to protect his family': 'ask + person + to + verb expresses a request',
        'asked Allah to give them blessings': 'ask + person + to + verb can introduce another requested action',
        'so they could thank Him': 'so + subject + could + verb explains the purpose or hoped-for result',
        'had to give food to her child': 'had to + verb expresses something necessary in the past',
      },
      explanation: 'The chapter combines request language with a purpose/result clause and “had to” for past necessity.',
      feedback: {
        correct: 'Correct. You identified requests, purpose and necessity.',
        incorrect: 'Look for what Abraham asks for, why he asks for blessings, and what Hagar needed to do.',
      },
    },
    {
      id: 'abraham-a2-language-12-lack-search',
      type: 'matching',
      title: 'When Something Is Missing',
      instructions: 'Match each Chapter 12 phrase with what it communicates.',
      question: 'How does the chapter describe lack, searching and the absence of help?',
      matchingPairs: [
        { left: 'no fruit, no trees, no food, and no water', right: 'no + noun lists things that are absent' },
        { left: 'had no food and water left', right: 'have no ... left means nothing remains' },
        { left: 'looked for food and water', right: 'look for + noun means try to find something' },
        { left: 'there was no water and nobody to help her', right: 'there was no / nobody to ... expresses absence of a thing and a helper' },
      ],
      correctAnswer: {
        'no fruit, no trees, no food, and no water': 'no + noun lists things that are absent',
        'had no food and water left': 'have no ... left means nothing remains',
        'looked for food and water': 'look for + noun means try to find something',
        'there was no water and nobody to help her': 'there was no / nobody to ... expresses absence of a thing and a helper',
      },
      explanation: 'Chapter 12 repeatedly uses simple A2 patterns for saying what is missing, what remains, what someone searches for and whether help is available.',
      feedback: {
        correct: 'Good. You distinguished absence, nothing remaining, searching and lack of help.',
        incorrect: 'Notice the difference between “no ...”, “no ... left”, “look for ...”, and “nobody to ...”.',
      },
    },
    {
      id: 'abraham-a2-language-12-production',
      type: 'reflection',
      title: 'Say It: Need, Request and Action',
      instructions: 'Write or say four or five short A2 sentences about a difficult situation. Use at least four Chapter 12 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you describe what is missing, what someone needs to do, what they ask for and what they believe will happen?',
      correctAnswer: null,
      explanation: 'A strong response can use “there is/was no ...”, “have no ... left”, “had to + verb”, “look for + noun”, “ask + person + to + verb”, “so ... could ...”, “will never ...”, or “will surely ...”.',
      feedback: {
        correct: 'Use the chapter patterns to make one short, connected situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Situation — Say what is missing with “There is/was no ...” or “We have no ... left.”', mode: 'Individual' },
        { question: 'Need — Add “had to + verb”.', mode: 'Individual' },
        { question: 'Request — Use “asked ... to + verb”.', mode: 'Individual' },
        { question: 'Purpose — Add “so ... could ...”.', mode: 'Individual' },
        { question: 'Belief — Finish with “will never ...” or “will surely ...”.', mode: 'Pair' },
      ],
    },
  ],
};
