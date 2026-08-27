import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 11 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-b1-language-11-cause-power',
      type: 'matching',
      title: 'Belief, Society and Power',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter explain why a new belief could also affect politics and economics?',
      matchingPairs: [
        { left: 'Politics, economics, and religion are connected.', right: 'states that several parts of social life influence one another' },
        { left: 'Beliefs shape how people live.', right: 'shows that ideas can influence behavior and social life' },
        { left: 'That is why powerful groups in Mecca did not like Islam.', right: 'gives a result or reaction based on the previous explanation' },
      ],
      correctAnswer: {
        'Politics, economics, and religion are connected.': 'states that several parts of social life influence one another',
        'Beliefs shape how people live.': 'shows that ideas can influence behavior and social life',
        'That is why powerful groups in Mecca did not like Islam.': 'gives a result or reaction based on the previous explanation',
      },
      explanation: 'The chapter first gives a general relationship, then explains the effect of beliefs, and finally uses “That is why” to connect this to a reaction from powerful groups.',
      feedback: {
        correct: 'Correct. You identified the explanation-to-result pattern.',
        incorrect: 'Find the general statement first, then the effect of beliefs, then the sentence that gives the reaction.',
      },
    },
    {
      id: 'mecca-b1-language-11-future-community',
      type: 'matching',
      title: 'A New Community and Future Difference',
      instructions: 'Match each phrase with its function in the paragraph.',
      question: 'How does the chapter describe a new identity and a future difference?',
      matchingPairs: [
        { left: 'From the beginning', right: 'sets an early starting point for the change' },
        { left: 'Muslims were a new community', right: 'describes a new group identity' },
        { left: 'They were going to be different from the people around them.', right: 'expresses a future development viewed from a past point in the story' },
      ],
      correctAnswer: {
        'From the beginning': 'sets an early starting point for the change',
        'Muslims were a new community': 'describes a new group identity',
        'They were going to be different from the people around them.': 'expresses a future development viewed from a past point in the story',
      },
      explanation: '“From the beginning” marks when the change starts, while “were going to be” presents a later development from a past viewpoint.',
      feedback: {
        correct: 'Good. You separated starting point, identity and future-from-past meaning.',
        incorrect: 'Look for the phrase about when the change starts and the phrase that points forward from the past.',
      },
    },
    {
      id: 'mecca-b1-language-11-hearing-response-contrast',
      type: 'matching',
      title: 'From Hearing to Response',
      instructions: 'Match each expression with the relationship it shows.',
      question: 'How does the chapter connect hearing the message with different reactions?',
      matchingPairs: [
        { left: 'When they heard Prophet Muhammad (as) read the Quran', right: 'sets the event that comes before their reaction' },
        { left: 'they were sure it was from Allah', right: 'reports the conclusion or certainty they reached' },
        { left: 'However, many leaders ignored the Quran and stood against the Prophet (as).', right: 'contrasts one group’s response with the opposing reaction of another group' },
      ],
      correctAnswer: {
        'When they heard Prophet Muhammad (as) read the Quran': 'sets the event that comes before their reaction',
        'they were sure it was from Allah': 'reports the conclusion or certainty they reached',
        'However, many leaders ignored the Quran and stood against the Prophet (as).': 'contrasts one group’s response with the opposing reaction of another group',
      },
      explanation: '“When” links an event to a reaction, “were sure” expresses strong certainty, and “However” introduces an opposing response.',
      feedback: {
        correct: 'Correct. You identified time, certainty and contrast.',
        incorrect: 'Separate the time clause, the conclusion of certainty, and the contrasting response.',
      },
    },
    {
      id: 'mecca-b1-language-11-production',
      type: 'reflection',
      title: 'Explain a Social Change',
      instructions: 'Write or say six connected B1 sentences about a different social, school, historical or community change. Do not retell Chapter 11.',
      question: 'Can you explain how an idea affected a group, show a future change from a past viewpoint, and compare two different reactions?',
      correctAnswer: null,
      explanation: 'A strong answer should include a general relationship, a clear cause/result link, a new group identity or role, one “was/were going to” sentence, a time clause with “when”, and a contrast with “however”.',
      feedback: {
        correct: 'Keep the six sentences connected so the reader can follow the change and the different reactions.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State how two parts of the situation are connected.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain how an idea or belief affected behavior.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “That is why” to show a result or reaction.', mode: 'Individual' },
        { question: 'Sentence 4 — Describe a new identity, role or community.', mode: 'Pair' },
        { question: 'Sentence 5 — Use “was/were going to” for a later development viewed from the past.', mode: 'Pair' },
        { question: 'Sentence 6 — Use “When...” and “However...” to compare two reactions.', mode: 'Pair' },
      ],
    },
  ],
};
