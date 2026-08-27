import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 10 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-b1-language-10-group-contrast',
      type: 'matching',
      title: 'Describing Main Groups and Exceptions',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter describe a dominant religious pattern while still showing exceptions?',
      matchingPairs: [
        { left: 'most people in Arabia worshipped idols', right: 'describes the main pattern in a large group without saying everyone was the same' },
        { left: 'Only a few people followed religions like Christianity.', right: 'marks a small exception to the main pattern' },
        { left: 'Some people, called Hanifs, followed the old religion of Abraham.', right: 'introduces another limited group with a different practice' },
      ],
      correctAnswer: {
        'most people in Arabia worshipped idols': 'describes the main pattern in a large group without saying everyone was the same',
        'Only a few people followed religions like Christianity.': 'marks a small exception to the main pattern',
        'Some people, called Hanifs, followed the old religion of Abraham.': 'introduces another limited group with a different practice',
      },
      explanation: '“Most”, “only a few” and “some” let the writer describe social patterns accurately without overgeneralizing.',
      feedback: {
        correct: 'Correct. You identified majority, exception and limited-group language.',
        incorrect: 'Look for the expressions that mean “the majority”, “a small exception” and “one limited group”.',
      },
    },
    {
      id: 'mecca-b1-language-10-passive-location',
      type: 'matching',
      title: 'Where Things Were Located',
      instructions: 'Match each language choice with its function.',
      question: 'How does the chapter describe location while keeping the idols, not the people who placed them, in focus?',
      matchingPairs: [
        { left: 'They were kept in and around the Ka’ba and in homes.', right: 'uses passive voice to focus on location and the objects rather than the people who placed them there' },
        { left: 'including Lat, Manat, and Uzza', right: 'adds examples inside a larger group' },
        { left: 'in and around the Ka’ba and in homes', right: 'combines several location phrases compactly' },
      ],
      correctAnswer: {
        'They were kept in and around the Ka’ba and in homes.': 'uses passive voice to focus on location and the objects rather than the people who placed them there',
        'including Lat, Manat, and Uzza': 'adds examples inside a larger group',
        'in and around the Ka’ba and in homes': 'combines several location phrases compactly',
      },
      explanation: 'The passive “were kept” foregrounds the objects and their location. “Including” adds examples, while linked prepositional phrases build a fuller spatial description.',
      feedback: {
        correct: 'Good. You separated passive focus, examples and location detail.',
        incorrect: 'Find the passive verb first, then the phrase that introduces examples, then the grouped locations.',
      },
    },
    {
      id: 'mecca-b1-language-10-belief-purpose-decision',
      type: 'matching',
      title: 'Belief, Purpose and Decision-Making',
      instructions: 'Match each expression with the meaning relation it carries.',
      question: 'How does the chapter report what people believed and how those beliefs affected actions?',
      matchingPairs: [
        { left: 'they thought these idols helped them talk to Allah', right: 'reports a belief or interpretation held by a group' },
        { left: 'before making decisions', right: 'shows that one action happened prior to a later choice' },
        { left: 'checked omens before making decisions', right: 'links a belief-based practice to decision-making behavior' },
      ],
      correctAnswer: {
        'they thought these idols helped them talk to Allah': 'reports a belief or interpretation held by a group',
        'before making decisions': 'shows that one action happened prior to a later choice',
        'checked omens before making decisions': 'links a belief-based practice to decision-making behavior',
      },
      explanation: '“Thought” reports belief rather than fact. “Before + -ing” places one action earlier than another and helps explain how beliefs shaped decisions.',
      feedback: {
        correct: 'Correct. You identified reported belief and time-before-decision language.',
        incorrect: 'Separate the phrase that reports what people believed from the phrase that shows what happened before a decision.',
      },
    },
    {
      id: 'mecca-b1-language-10-production',
      type: 'reflection',
      title: 'Describe Beliefs Without Overgeneralizing',
      instructions: 'Write or say six connected B1 sentences about a different historical or modern community. Do not retell Chapter 10.',
      question: 'Can you describe a majority pattern, add one or two exceptions, use one passive location sentence, report a belief with “thought/believed”, and explain how that belief influenced a decision?',
      correctAnswer: null,
      explanation: 'A strong response should use precise group language such as “most”, “some” or “only a few”, plus a passive form, reported belief, and a clear before/decision relationship.',
      feedback: {
        correct: 'Keep the sentences connected so each language choice helps explain a real relationship.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State the main pattern with “most”.', mode: 'Individual' },
        { question: 'Sentence 2 — Add a small exception with “only a few” or “some”.', mode: 'Individual' },
        { question: 'Sentence 3 — Use a passive sentence to describe where an object, practice or symbol was found.', mode: 'Individual' },
        { question: 'Sentence 4 — Report what a group thought or believed.', mode: 'Pair' },
        { question: 'Sentence 5 — Show an action that happened before a decision.', mode: 'Pair' },
        { question: 'Sentence 6 — Explain how the belief influenced the decision or behavior.', mode: 'Pair' },
      ],
    },
  ],
};
