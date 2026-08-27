import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 13 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-b1-language-13-escalation',
      type: 'matching',
      title: 'Showing a Change in Pressure',
      instructions: 'Match each expression with the relationship it adds to the paragraph.',
      question: 'How does the chapter move from an earlier situation to a more serious one?',
      matchingPairs: [
        { left: 'At first, the leaders of Mecca only mocked Islam.', right: 'sets the earlier stage and limits the action to mockery' },
        { left: 'But when the Quran criticized the idols and warned against false worship, their opposition became violent.', right: 'marks a change after a new development and contrasts it with the earlier stage' },
        { left: 'The leaders of Mecca went further.', right: 'signals that the next action increases the level of pressure' },
      ],
      correctAnswer: {
        'At first, the leaders of Mecca only mocked Islam.': 'sets the earlier stage and limits the action to mockery',
        'But when the Quran criticized the idols and warned against false worship, their opposition became violent.': 'marks a change after a new development and contrasts it with the earlier stage',
        'The leaders of Mecca went further.': 'signals that the next action increases the level of pressure',
      },
      explanation: '“At first” establishes an earlier stage, “but when” introduces a contrasting change linked to a new event, and “went further” signals escalation without needing to repeat the chapter’s comprehension answer.',
      feedback: {
        correct: 'Correct. You identified earlier stage, change and escalation.',
        incorrect: 'Look for the phrase that starts the sequence, the phrase that marks a change, and the phrase that signals stronger pressure.',
      },
    },
    {
      id: 'mecca-b1-language-13-habit-command',
      type: 'matching',
      title: 'Repeated Actions and Reported Orders',
      instructions: 'Match each form with the meaning it expresses.',
      question: 'How does the text distinguish repeated behaviour from a command?',
      matchingPairs: [
        { left: 'Whenever Prophet Muhammad (as) walked by, they laughed...', right: 'describes a repeated reaction triggered by the same situation' },
        { left: 'His master, Umayya, often took him out in the hot midday sun.', right: 'uses “often” to show repeated past behaviour' },
        { left: 'ordered him to give up his religion', right: 'reports a command with “order + person + to + verb”' },
      ],
      correctAnswer: {
        'Whenever Prophet Muhammad (as) walked by, they laughed...': 'describes a repeated reaction triggered by the same situation',
        'His master, Umayya, often took him out in the hot midday sun.': 'uses “often” to show repeated past behaviour',
        'ordered him to give up his religion': 'reports a command with “order + person + to + verb”',
      },
      explanation: '“Whenever” and “often” build repeated past behaviour, while “ordered him to...” reports what one person commanded another person to do.',
      feedback: {
        correct: 'Good. You separated repeated behaviour from a reported command.',
        incorrect: 'Find the repeated-time markers first, then the structure that reports an order.',
      },
    },
    {
      id: 'mecca-b1-language-13-vulnerability-purpose',
      type: 'matching',
      title: 'Describing Vulnerability and Purpose',
      instructions: 'Match each expression with its function.',
      question: 'How does the chapter describe who was especially vulnerable and why supporters used their money?',
      matchingPairs: [
        { left: 'those without powerful friends', right: 'defines a group by something they did not have' },
        { left: 'One of them was Bilal, an Abyssinian slave...', right: 'moves from a general group to one specific example and adds identifying information' },
        { left: 'spent their money to support the Muslims', right: 'uses “to + verb” to express the purpose of spending money' },
      ],
      correctAnswer: {
        'those without powerful friends': 'defines a group by something they did not have',
        'One of them was Bilal, an Abyssinian slave...': 'moves from a general group to one specific example and adds identifying information',
        'spent their money to support the Muslims': 'uses “to + verb” to express the purpose of spending money',
      },
      explanation: 'The text first defines a vulnerable group, then gives Bilal as a specific example, and later uses “to support” to explain purpose.',
      feedback: {
        correct: 'Correct. You identified group description, example and purpose.',
        incorrect: 'Separate the general group, the specific person, and the phrase that answers “Why did they spend the money?”',
      },
    },
    {
      id: 'mecca-b1-language-13-production',
      type: 'reflection',
      title: 'Describe a Situation That Becomes More Serious',
      instructions: 'Write or say six connected B1 sentences about a different school, community or historical situation. Do not retell Chapter 13.',
      question: 'Can you describe how a problem began, became more serious, involved repeated behaviour, included an order, affected a vulnerable group and led someone to act for a purpose?',
      correctAnswer: null,
      explanation: 'A strong response should use “at first”, a change with “but when”, a repeated-past pattern with “whenever” or “often”, a reported command with “ordered/told + person + to + verb”, a group description with “those without...”, and a purpose phrase with “to + verb”.',
      feedback: {
        correct: 'Keep the six sentences connected so the reader can follow the change, repeated behaviour, command, vulnerability and purpose.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the earlier stage with “At first...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Show a change with “But when...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Add repeated past behaviour with “whenever” or “often”.', mode: 'Individual' },
        { question: 'Sentence 4 — Report an order with “ordered/told + person + to + verb”.', mode: 'Pair' },
        { question: 'Sentence 5 — Describe a group with “those without...”.', mode: 'Pair' },
        { question: 'Sentence 6 — Explain an action’s purpose with “to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
