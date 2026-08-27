import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 8 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-b1-language-8-cause-purpose',
      type: 'matching',
      title: 'Cause, Result and Purpose',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter explain why strength and sons mattered in tribal life?',
      matchingPairs: [
        { left: 'Life in the desert was very hard, so physical strength was extremely important.', right: 'connects a difficult condition to its result' },
        { left: 'Men were often seen as valuable because they were fighters in wars.', right: 'gives a reason for a social judgement' },
        { left: 'To earn respect from other tribes, families wanted to have many sons.', right: 'expresses the purpose behind an action or preference' },
      ],
      correctAnswer: {
        'Life in the desert was very hard, so physical strength was extremely important.': 'connects a difficult condition to its result',
        'Men were often seen as valuable because they were fighters in wars.': 'gives a reason for a social judgement',
        'To earn respect from other tribes, families wanted to have many sons.': 'expresses the purpose behind an action or preference',
      },
      explanation: 'The chapter uses “so” for result, “because” for reason and “to + verb” for purpose. These forms explain relationships rather than simply list facts.',
      feedback: {
        correct: 'Correct. You identified result, reason and purpose.',
        incorrect: 'Ask which sentence gives a result, which explains why, and which tells the purpose of an action.',
      },
    },
    {
      id: 'mecca-b1-language-8-protection',
      type: 'matching',
      title: 'Describing Protection and Its Absence',
      instructions: 'Match each expression with what it communicates.',
      question: 'How does the writer describe what happens when tribal protection is missing?',
      matchingPairs: [
        { left: 'Without a tribe', right: 'sets a condition in which an important support is absent' },
        { left: 'people could not easily protect their lives or property', right: 'shows limited ability in that condition' },
        { left: 'A person outside tribal protection was in great danger.', right: 'describes the resulting state or risk' },
      ],
      correctAnswer: {
        'Without a tribe': 'sets a condition in which an important support is absent',
        'people could not easily protect their lives or property': 'shows limited ability in that condition',
        'A person outside tribal protection was in great danger.': 'describes the resulting state or risk',
      },
      explanation: '“Without...” introduces an absent condition, “could not...” expresses limited ability, and the following clause describes the danger that results.',
      feedback: {
        correct: 'Good. You traced condition, limited ability and resulting danger.',
        incorrect: 'Separate the missing condition from the inability and the final state.',
      },
    },
    {
      id: 'mecca-b1-language-8-obligation-concession',
      type: 'matching',
      title: 'Obligation and “Even When”',
      instructions: 'Match each expression with its function in the sentence.',
      question: 'How does the chapter present strong tribal expectations?',
      matchingPairs: [
        { left: 'They had to protect and honor their tribe', right: 'expresses a strong social obligation' },
        { left: 'in every situation', right: 'shows that the expectation was presented as general and continuing' },
        { left: 'even when the tribe did something wrong', right: 'adds a contrasting situation that does not cancel the obligation' },
      ],
      correctAnswer: {
        'They had to protect and honor their tribe': 'expresses a strong social obligation',
        'in every situation': 'shows that the expectation was presented as general and continuing',
        'even when the tribe did something wrong': 'adds a contrasting situation that does not cancel the obligation',
      },
      explanation: '“Had to” marks obligation, while “even when” introduces a situation that would normally challenge or limit that obligation. The activity focuses on how the language works rather than asking the chapter’s moral-comprehension question again.',
      feedback: {
        correct: 'Correct. You identified obligation, scope and concession.',
        incorrect: 'Find the phrase of necessity, the phrase showing broad scope, and the phrase introducing an unexpected contrast.',
      },
    },
    {
      id: 'mecca-b1-language-8-production',
      type: 'reflection',
      title: 'Explain Rules, Support and Consequences',
      instructions: 'Write or say six connected B1 sentences about a different group, team, club or community. Do not retell Chapter 8.',
      question: 'Can you explain a difficult condition, give a reason and a purpose, show what people could not do without support, and describe one strong obligation with “even when”?',
      correctAnswer: null,
      explanation: 'A strong response should use connected language such as “so”, “because”, “to + verb”, “without...”, “could not...”, “had to...” and “even when...” where they fit naturally.',
      feedback: {
        correct: 'Keep the six sentences connected so each structure expresses a real relationship between ideas.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a difficult condition.', mode: 'Individual' },
        { question: 'Sentence 2 — Give one result with “so”.', mode: 'Individual' },
        { question: 'Sentence 3 — Explain a reason with “because”.', mode: 'Individual' },
        { question: 'Sentence 4 — State a purpose with “to + verb”.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain what people could not do without one kind of support.', mode: 'Pair' },
        { question: 'Sentence 6 — State one obligation and add an “even when” contrast.', mode: 'Pair' },
      ],
    },
  ],
};
