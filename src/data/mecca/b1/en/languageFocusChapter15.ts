import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 15 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter15: Record<number, Exercise[]> = {
  15: [
    {
      id: 'mecca-b1-language-15-pressure-condition',
      type: 'matching',
      title: 'Pressure, Choice and Possible Consequences',
      instructions: 'Match each expression with the meaning or relationship it builds in the paragraph.',
      question: 'How does the chapter show strong social pressure and the possible result of resisting it?',
      matchingPairs: [
        { left: 'tribal loyalty was so strong that freedom of choice was difficult', right: 'uses “so ... that” to connect intensity with its consequence' },
        { left: 'If someone left the tribe’s way, that person could lose protection.', right: 'uses “if” plus “could” to present a possible consequence of a choice' },
        { left: 'tried to prevent members of their tribes from becoming Muslim', right: 'uses “prevent + person + from + -ing” to express an attempt to stop an action or change' },
      ],
      correctAnswer: {
        'tribal loyalty was so strong that freedom of choice was difficult': 'uses “so ... that” to connect intensity with its consequence',
        'If someone left the tribe’s way, that person could lose protection.': 'uses “if” plus “could” to present a possible consequence of a choice',
        'tried to prevent members of their tribes from becoming Muslim': 'uses “prevent + person + from + -ing” to express an attempt to stop an action or change',
      },
      explanation: 'The paragraph combines degree, condition and prevention to explain how social pressure can limit a person’s choices without simply retesting the chapter’s main idea.',
      feedback: {
        correct: 'Correct. You identified intensity, possible consequence and prevention.',
        incorrect: 'Look for “so ... that”, the “if” sentence with “could”, and the phrase beginning with “prevent”.',
      },
    },
    {
      id: 'mecca-b1-language-15-claim-reality',
      type: 'matching',
      title: 'Reported Claims and a Contrasting View',
      instructions: 'Match each form with the function it performs in the text.',
      question: 'How does the chapter separate what one group claimed from the interpretation that follows?',
      matchingPairs: [
        { left: 'The Quraysh leaders said Islam was breaking up families and destroying unity.', right: 'reports another group’s claim without presenting it as the narrator’s own conclusion' },
        { left: 'In reality, Islam was calling people to a better form of unity...', right: 'signals a contrast between the reported claim and the text’s interpretation' },
        { left: 'unity based on justice, mercy, and belief in one Allah', right: 'uses “based on” to state the principles that form the foundation of something' },
      ],
      correctAnswer: {
        'The Quraysh leaders said Islam was breaking up families and destroying unity.': 'reports another group’s claim without presenting it as the narrator’s own conclusion',
        'In reality, Islam was calling people to a better form of unity...': 'signals a contrast between the reported claim and the text’s interpretation',
        'unity based on justice, mercy, and belief in one Allah': 'uses “based on” to state the principles that form the foundation of something',
      },
      explanation: 'The text first reports a claim, then marks a contrasting interpretation with “In reality”, and finally defines the basis of the alternative model.',
      feedback: {
        correct: 'Good. You separated reported viewpoint, contrast and foundation.',
        incorrect: 'Find the reporting verb “said”, the contrast marker “In reality”, and the phrase with “based on”.',
      },
    },
    {
      id: 'mecca-b1-language-15-value-contrast',
      type: 'matching',
      title: 'Explaining Equal Human Value',
      instructions: 'Match each expression with the language function it performs.',
      question: 'How does the final paragraph express standards, equality and contrast?',
      matchingPairs: [
        { left: 'told people to be fair, respectful, and merciful', right: 'uses “tell + person + to + verb” to report guidance about behaviour' },
        { left: 'Background, wealth, gender, and social power do not make one person more valuable than another.', right: 'uses “make + object + adjective” in the negative to reject a claimed basis for greater value' },
        { left: 'Jahiliyyah means a society without justice and mercy; Islam is the opposite because it brings peace and fairness.', right: 'defines one concept, contrasts it with another, and gives a reason with “because”' },
      ],
      correctAnswer: {
        'told people to be fair, respectful, and merciful': 'uses “tell + person + to + verb” to report guidance about behaviour',
        'Background, wealth, gender, and social power do not make one person more valuable than another.': 'uses “make + object + adjective” in the negative to reject a claimed basis for greater value',
        'Jahiliyyah means a society without justice and mercy; Islam is the opposite because it brings peace and fairness.': 'defines one concept, contrasts it with another, and gives a reason with “because”',
      },
      explanation: 'The paragraph combines reported guidance, a negative value judgement pattern, definition, contrast and reason to express a general social principle.',
      feedback: {
        correct: 'Correct. You identified guidance, rejected inequality and connected definition with contrast and reason.',
        incorrect: 'Look for “told ... to”, the sentence with “do not make”, and the final definition followed by “because”.',
      },
    },
    {
      id: 'mecca-b1-language-15-production',
      type: 'reflection',
      title: 'Explain Pressure and a Fairer Alternative',
      instructions: 'Write or say five to six connected B1 sentences about a different school, community or historical situation. Do not retell Chapter 15.',
      question: 'Can you describe a strong social pressure, explain a possible consequence, report what one group claimed, contrast that claim with another view, and describe a fairer principle?',
      correctAnswer: null,
      explanation: 'A strong response should naturally use one “so ... that” relationship, one “if ... could ...” consequence, one prevention phrase, one reported claim, one contrast marker such as “In reality” or “however”, and one sentence explaining what a fair system is based on.',
      feedback: {
        correct: 'Keep the response connected so the reader can follow the pressure, consequence, reported claim, contrast and alternative principle.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a pressure that was so strong that it affected people’s choices.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain what could happen if someone resisted that pressure.', mode: 'Individual' },
        { question: 'Sentence 3 — Say how a person or group tried to prevent a change.', mode: 'Individual' },
        { question: 'Sentence 4 — Report what that group said or believed.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Contrast the claim with another view and explain what the fairer alternative is based on.', mode: 'Pair' },
      ],
    },
  ],
};
