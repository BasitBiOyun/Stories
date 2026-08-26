import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'abraham-b1-language-5-reason-result',
      type: 'matching',
      title: 'Reasons and Results',
      instructions: 'Match each Chapter 5 expression with the relationship it creates.',
      question: 'How does the chapter connect reasons, situations, and results?',
      matchingPairs: [
        { left: 'I do not worship your idols because Allah is the one and only true God.', right: 'gives a reason with because' },
        { left: 'People got furious when they heard him.', right: 'uses when to connect a reaction to the event that triggers it' },
        { left: 'because of this, we do the same', right: 'presents an earlier cause or basis for a present action' },
        { left: 'heals me when I am sick', right: 'uses when to describe the situation in which an action happens' },
      ],
      correctAnswer: {
        'I do not worship your idols because Allah is the one and only true God.': 'gives a reason with because',
        'People got furious when they heard him.': 'uses when to connect a reaction to the event that triggers it',
        'because of this, we do the same': 'presents an earlier cause or basis for a present action',
        'heals me when I am sick': 'uses when to describe the situation in which an action happens',
      },
      explanation: 'Chapter 5 repeatedly links actions and beliefs to reasons or situations rather than listing events separately.',
      feedback: {
        correct: 'Correct. You identified how reason and situation expressions organise the argument.',
        incorrect: 'Check whether the expression explains why something happens or tells you when it happens.',
      },
    },
    {
      id: 'abraham-b1-language-5-persistence-purpose',
      type: 'matching',
      title: 'Persistence and Purpose',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does the chapter show continued effort and intended change?',
      matchingPairs: [
        { left: 'did not give up', right: 'shows persistence despite resistance' },
        { left: 'tried to show them the right way', right: 'shows an attempt to help or influence others' },
        { left: 'wanted them to reconsider their beliefs', right: 'expresses a desired change in another person’s thinking' },
        { left: 'They ignored him, though.', right: 'adds a contrasting result despite his continued effort' },
      ],
      correctAnswer: {
        'did not give up': 'shows persistence despite resistance',
        'tried to show them the right way': 'shows an attempt to help or influence others',
        'wanted them to reconsider their beliefs': 'expresses a desired change in another person’s thinking',
        'They ignored him, though.': 'adds a contrasting result despite his continued effort',
      },
      explanation: 'The chapter contrasts Abraham’s continuing purpose with the people’s refusal to respond.',
      feedback: {
        correct: 'Correct. You distinguished attempt, persistence, desired change, and contrast.',
        incorrect: 'Ask whether the expression shows effort, refusal to stop, an intended change, or an opposite result.',
      },
    },
    {
      id: 'abraham-b1-language-5-action-patterns',
      type: 'matching',
      title: 'Who Does What?',
      instructions: 'Match each verb pattern with the kind of relationship it expresses.',
      question: 'How do the verb patterns show action, influence, and response?',
      matchingPairs: [
        { left: 'try to + verb', right: 'attempt an action' },
        { left: 'want + person + to + verb', right: 'express a desired action or change by another person' },
        { left: 'tell + person + clause', right: 'direct a message toward someone' },
        { left: 'reply / ignore', right: 'show different responses to another person’s words' },
      ],
      correctAnswer: {
        'try to + verb': 'attempt an action',
        'want + person + to + verb': 'express a desired action or change by another person',
        'tell + person + clause': 'direct a message toward someone',
        'reply / ignore': 'show different responses to another person’s words',
      },
      explanation: 'These patterns help the chapter move from Abraham’s intention to the people’s response.',
      feedback: {
        correct: 'Correct. You connected the verb patterns to attempt, influence, communication, and response.',
        incorrect: 'Focus on who performs the action and whether the pattern shows an attempt, a desired change, a message, or a response.',
      },
    },
    {
      id: 'abraham-b1-language-5-connected-response',
      type: 'reflection',
      title: 'Build a Persuasion Scene',
      instructions: 'Write or say four connected B1 sentences about someone trying to change another person’s mind. Do not retell Chapter 5.',
      question: 'Can you connect a reason, an attempt, persistence, and a contrasting response in one short scene?',
      correctAnswer: null,
      explanation: 'A strong response can use because, try to, not give up or continue, want someone to..., and though/but to keep one coherent situation.',
      feedback: {
        correct: 'Keep all four sentences in one situation and make the contrast logically follow from the attempt.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State a belief or decision and give a reason with because.', mode: 'Individual' },
        { question: 'Sentence 2 — Show an attempt with try to + verb.', mode: 'Individual' },
        { question: 'Sentence 3 — Show persistence or a desired change with did not give up / wanted ... to ....', mode: 'Individual' },
        { question: 'Sentence 4 — Add a contrasting response with but or though.', mode: 'Pair' },
      ],
    },
  ],
};
