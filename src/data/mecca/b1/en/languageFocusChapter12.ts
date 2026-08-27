import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 12 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-b1-language-12-quantity-threat',
      type: 'matching',
      title: 'Small Numbers and Perceived Threat',
      instructions: 'Match each expression with the meaning it adds to the paragraph.',
      question: 'How does the chapter describe who accepted Islam and how Quraysh leaders interpreted the new message?',
      matchingPairs: [
        { left: 'almost none of Mecca’s super-rich people became Muslims', right: 'shows that only a very small number from one social group accepted the new faith' },
        { left: 'The leaders of Quraysh felt that Islam was a danger to their power', right: 'reports how the leaders interpreted the situation' },
        { left: 'did not accept it', right: 'states their response to that perceived threat' },
      ],
      correctAnswer: {
        'almost none of Mecca’s super-rich people became Muslims': 'shows that only a very small number from one social group accepted the new faith',
        'The leaders of Quraysh felt that Islam was a danger to their power': 'reports how the leaders interpreted the situation',
        'did not accept it': 'states their response to that perceived threat',
      },
      explanation: '“Almost none” limits quantity strongly, while “felt that...” reports a viewpoint rather than presenting the leaders’ interpretation as a neutral fact.',
      feedback: {
        correct: 'Correct. You separated quantity, viewpoint and response.',
        incorrect: 'Look first for the quantity expression, then for the leaders’ interpretation, then for their response.',
      },
    },
    {
      id: 'mecca-b1-language-12-reason-status',
      type: 'matching',
      title: 'Explaining Status and Priorities',
      instructions: 'Match each expression with its function.',
      question: 'How does the chapter explain why the leaders had prestige and what they wanted to preserve?',
      matchingPairs: [
        { left: 'other tribes respected them because of trade and the idols in the Ka’ba', right: 'gives reasons for their social respect' },
        { left: 'making them the prestigious caretakers of pilgrimage', right: 'adds a result or social role created by the previous situation' },
        { left: 'Keeping their power and unity was very important for them.', right: 'turns an action into the subject of the sentence to emphasize a priority' },
      ],
      correctAnswer: {
        'other tribes respected them because of trade and the idols in the Ka’ba': 'gives reasons for their social respect',
        'making them the prestigious caretakers of pilgrimage': 'adds a result or social role created by the previous situation',
        'Keeping their power and unity was very important for them.': 'turns an action into the subject of the sentence to emphasize a priority',
      },
      explanation: 'The paragraph moves from reason (“because of”), to a resulting role (“making them...”), and then to a priority expressed with an -ing clause as the subject.',
      feedback: {
        correct: 'Good. You identified reason, resulting role and priority.',
        incorrect: 'Find what explains the respect, what role results from it, and what the leaders considered important to preserve.',
      },
    },
    {
      id: 'mecca-b1-language-12-contrast-purpose',
      type: 'matching',
      title: 'Old Practice, New Rule, Social Purpose',
      instructions: 'Match each expression with the relationship it shows.',
      question: 'How does the final paragraph contrast practices and explain the purpose of new duties?',
      matchingPairs: [
        { left: 'Quraysh used unfair money systems like usury, but the Quran forbade this', right: 'contrasts an existing practice with a new prohibition' },
        { left: 'and allowed only honest trade', right: 'adds the permitted alternative after the prohibition' },
        { left: 'commanded zakat and sadaqah to help the poor', right: 'uses “to + verb” to express the purpose of the command' },
      ],
      correctAnswer: {
        'Quraysh used unfair money systems like usury, but the Quran forbade this': 'contrasts an existing practice with a new prohibition',
        'and allowed only honest trade': 'adds the permitted alternative after the prohibition',
        'commanded zakat and sadaqah to help the poor': 'uses “to + verb” to express the purpose of the command',
      },
      explanation: '“But” introduces a contrast, “and” adds the permitted alternative, and “to help” explains purpose rather than another event in the sequence.',
      feedback: {
        correct: 'Correct. You identified contrast, addition and purpose.',
        incorrect: 'Separate the old practice, the permitted alternative, and the phrase that explains why a duty is commanded.',
      },
    },
    {
      id: 'mecca-b1-language-12-production',
      type: 'reflection',
      title: 'Explain Resistance to Change',
      instructions: 'Write or say six connected B1 sentences about a different school, community or historical change. Do not retell Chapter 12.',
      question: 'Can you explain why a powerful group resisted a change, what it wanted to preserve, and how a new rule challenged an old practice?',
      correctAnswer: null,
      explanation: 'A strong answer should include a quantity expression, a reported viewpoint with “felt/thought that”, a reason with “because/because of”, an -ing clause as subject to express a priority, a contrast with “but”, and a purpose phrase with “to + verb”.',
      feedback: {
        correct: 'Keep the six sentences connected so the reader can follow the group’s position, priority, contrast and purpose.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Use “almost all / almost none / only a few” to describe a group.', mode: 'Individual' },
        { question: 'Sentence 2 — Report a viewpoint with “felt/thought that...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give a reason with “because” or “because of”.', mode: 'Individual' },
        { question: 'Sentence 4 — Use an -ing form as the subject: “Keeping/Protecting/Changing ... was important.”', mode: 'Pair' },
        { question: 'Sentence 5 — Contrast an old practice with a new rule using “but”.', mode: 'Pair' },
        { question: 'Sentence 6 — Explain the purpose of the new rule with “to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
