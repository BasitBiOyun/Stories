import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 5 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'mecca-b1-language-5-cause-change',
      type: 'matching',
      title: 'From Location to Change',
      instructions: 'Match each expression with the relationship it shows.',
      question: 'How does the chapter connect Mecca’s position with change over time?',
      matchingPairs: [
        { left: 'Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.', right: 'connects a geographical reason with its result' },
        { left: 'From the early 6th century, Mecca became a major trading center.', right: 'places a change from a particular historical period onward' },
        { left: 'Hashim ... helped grow Mecca’s economy.', right: 'shows a person contributing to an ongoing development' },
      ],
      correctAnswer: {
        'Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.': 'connects a geographical reason with its result',
        'From the early 6th century, Mecca became a major trading center.': 'places a change from a particular historical period onward',
        'Hashim ... helped grow Mecca’s economy.': 'shows a person contributing to an ongoing development',
      },
      explanation: 'The writer combines cause and result with time framing and a contribution expression to explain development rather than list isolated facts.',
      feedback: {
        correct: 'Correct. You identified cause, historical change and contribution.',
        incorrect: 'Ask whether the expression explains why something happened, when a change developed, or who helped that development.',
      },
    },
    {
      id: 'mecca-b1-language-5-enabling',
      type: 'matching',
      title: 'Showing What Became Possible',
      instructions: 'Match each form with what it communicates.',
      question: 'How does the chapter show that agreements and safer conditions changed what people could do?',
      matchingPairs: [
        { left: 'These agreements allowed merchants to travel safely and trade...', right: 'shows that an arrangement made an action possible for other people' },
        { left: 'The sacred months ... made the region safer.', right: 'shows one condition causing a new state' },
        { left: 'more people could visit the city', right: 'shows increased possibility or opportunity' },
      ],
      correctAnswer: {
        'These agreements allowed merchants to travel safely and trade...': 'shows that an arrangement made an action possible for other people',
        'The sacred months ... made the region safer.': 'shows one condition causing a new state',
        'more people could visit the city': 'shows increased possibility or opportunity',
      },
      explanation: '“Allow + person + to + verb”, “make + object + adjective”, and “could + verb” all describe different kinds of possibility and effect.',
      feedback: {
        correct: 'Good. You distinguished permission/enabling, caused state and possibility.',
        incorrect: 'Look at who or what changes: a person’s possible action, the condition of a place, or an opportunity.',
      },
    },
    {
      id: 'mecca-b1-language-5-behaviour-purpose',
      type: 'matching',
      title: 'Describing Behaviour and Purpose',
      instructions: 'Match each expression with its function in the paragraph.',
      question: 'How does the chapter describe behaviour during the sacred months and the purpose of travel?',
      matchingPairs: [
        { left: 'people focused on worship', right: 'describes what people gave their attention to' },
        { left: 'stayed away from fighting', right: 'describes deliberately avoiding an activity' },
        { left: 'visit the city to make Hajj', right: 'states the purpose of visiting the city' },
      ],
      correctAnswer: {
        'people focused on worship': 'describes what people gave their attention to',
        'stayed away from fighting': 'describes deliberately avoiding an activity',
        'visit the city to make Hajj': 'states the purpose of visiting the city',
      },
      explanation: 'The text uses “focus on”, “stay away from”, and “to + verb” to organise behaviour and purpose clearly.',
      feedback: {
        correct: 'Correct. You identified attention, avoidance and purpose.',
        incorrect: 'Decide whether each phrase tells us what people concentrated on, avoided, or intended to do.',
      },
    },
    {
      id: 'mecca-b1-language-5-production',
      type: 'reflection',
      title: 'Explain How Conditions Create Opportunity',
      instructions: 'Write or say six connected B1 sentences about a different place, event or community. Do not retell Chapter 5.',
      question: 'Can you explain a reason, a change over time, an agreement or rule, a safer/easier condition, what people could then do, and their purpose?',
      correctAnswer: null,
      explanation: 'A strong response should form one connected paragraph using relationships such as “because...”, “from...”, “allowed ... to...”, “made ... safer/easier”, “could...”, and “to + verb” for purpose.',
      feedback: {
        correct: 'Keep the paragraph connected and make every language choice express a clear relationship.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give a reason with “because...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Show a change beginning from a particular time.', mode: 'Individual' },
        { question: 'Sentence 3 — Describe an agreement, rule or action that “allowed” people to do something.', mode: 'Individual' },
        { question: 'Sentence 4 — Show how it “made” a place or situation safer, easier or more open.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain what people “could” do as a result.', mode: 'Pair' },
        { question: 'Sentence 6 — Finish with “to + verb” to state their purpose.', mode: 'Pair' },
      ],
    },
  ],
};
