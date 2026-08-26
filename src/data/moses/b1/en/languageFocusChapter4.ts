import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 4 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-b1-language-4-instruction-prediction',
      type: 'matching',
      title: 'From Instruction to Prediction',
      instructions: 'Match each expression with the function it performs in the scene.',
      question: 'How does the chapter move from a direct instruction to a confident prediction?',
      matchingPairs: [
        { left: 'Find a nurse for the baby.', right: 'gives a direct instruction' },
        { left: 'I know a good woman.', right: 'states knowledge that supports the next suggestion' },
        { left: 'She lives nearby.', right: 'adds practical information about the woman' },
        { left: 'She will be a good nurse for the baby.', right: 'makes a confident prediction about a future role' },
      ],
      correctAnswer: {
        'Find a nurse for the baby.': 'gives a direct instruction',
        'I know a good woman.': 'states knowledge that supports the next suggestion',
        'She lives nearby.': 'adds practical information about the woman',
        'She will be a good nurse for the baby.': 'makes a confident prediction about a future role',
      },
      explanation: 'The scene combines an imperative, present knowledge, supporting detail, and “will” to move quickly from a problem to a proposed solution.',
      feedback: {
        correct: 'Correct. You identified instruction, supporting information, and future prediction.',
        incorrect: 'Ask whether the expression commands, gives evidence, or predicts a future role.',
      },
    },
    {
      id: 'moses-b1-language-4-purpose-result-reason',
      type: 'matching',
      title: 'Showing Purpose, Result and Reason',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How are actions and explanations connected in the chapter?',
      matchingPairs: [
        { left: 'she brought her mother to be Moses’s nurse', right: 'shows the purpose of bringing her mother' },
        { left: 'Allah sent Moses back to his mother', right: 'presents the result of the events that came before' },
        { left: 'People always remember her because of her goodness and courage.', right: 'gives the reason for remembering Queen Asiye' },
        { left: 'because he was originally not from a family of the palace', right: 'explains why Moses felt close to the Children of Israel' },
      ],
      correctAnswer: {
        'she brought her mother to be Moses’s nurse': 'shows the purpose of bringing her mother',
        'Allah sent Moses back to his mother': 'presents the result of the events that came before',
        'People always remember her because of her goodness and courage.': 'gives the reason for remembering Queen Asiye',
        'because he was originally not from a family of the palace': 'explains why Moses felt close to the Children of Israel',
      },
      explanation: '“To be” expresses purpose, while “because/because of” explains reasons. The narrative also uses the return to his mother as the result of the preceding chain of actions.',
      feedback: {
        correct: 'Good. You distinguished purpose, result, and reason.',
        incorrect: 'Look for the language that answers “for what purpose?”, “what happened as a result?”, or “why?”.',
      },
    },
    {
      id: 'moses-b1-language-4-growth-identity',
      type: 'matching',
      title: 'Describing Growth and Identity',
      instructions: 'Match each structure with what it tells us about Moses over time.',
      question: 'How does the language show development from childhood to young adulthood?',
      matchingPairs: [
        { left: 'Moses grew up safely in the palace.', right: 'describes a gradual development over time' },
        { left: 'Years passed', right: 'moves the narrative forward across a long period' },
        { left: 'Moses became a strong young man.', right: 'shows a change into a new state or stage of life' },
        { left: 'He was always willing to help the weak people.', right: 'describes a continuing personal tendency' },
      ],
      correctAnswer: {
        'Moses grew up safely in the palace.': 'describes a gradual development over time',
        'Years passed': 'moves the narrative forward across a long period',
        'Moses became a strong young man.': 'shows a change into a new state or stage of life',
        'He was always willing to help the weak people.': 'describes a continuing personal tendency',
      },
      explanation: 'The chapter combines time movement, “grow up”, “become”, and repeated-state language with “always” to describe development and character.',
      feedback: {
        correct: 'Correct. You identified time progression, change of state, and continuing tendency.',
        incorrect: 'Ask whether each expression advances time, shows change, or describes a repeated characteristic.',
      },
    },
    {
      id: 'moses-b1-language-4-connected-production',
      type: 'reflection',
      title: 'Explain How a Person Grows into a Role',
      instructions: 'Write or say five connected B1 sentences about a person who receives help, grows over time, and develops a clear sense of responsibility or identity.',
      question: 'Can you connect instruction, purpose, reason, change over time, and a continuing personal quality?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include an imperative, “to + verb” for purpose, “because/because of” for reason, “became” for change, and “always” for a continuing tendency.',
      feedback: {
        correct: 'Keep the account connected so each sentence develops the same person and situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give one direct instruction or piece of guidance.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain an action and its purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one reason with “because” or “because of”.', mode: 'Individual' },
        { question: 'Sentence 4 — Show a later change using “became” or another natural change expression.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a continuing quality using “always” or another frequency expression.', mode: 'Pair' },
      ],
    },
  ],
};
