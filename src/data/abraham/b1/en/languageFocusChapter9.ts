import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-b1-language-9-contrast-result',
      type: 'matching',
      title: 'Contrast, Persistence, and Result',
      instructions: 'Match each Chapter 9 expression with the relationship it creates.',
      question: 'How does the chapter connect people’s reactions and Nimrod’s decisions?',
      matchingPairs: [
        { left: 'People felt embarrassed by the miracle, yet their anger and arrogance remained unchanged', right: 'contrasts one reaction with a continuing attitude' },
        { left: 'however, their rage didn’t calm down', right: 'shows that Abraham’s efforts did not change the result' },
        { left: 'He realized that Abraham was not an ordinary person, so he decided to meet him', right: 'connects a conclusion with the decision that follows' },
        { left: 'This made Nimrod even more angry', right: 'shows the result of the final challenge' },
      ],
      correctAnswer: {
        'People felt embarrassed by the miracle, yet their anger and arrogance remained unchanged': 'contrasts one reaction with a continuing attitude',
        'however, their rage didn’t calm down': 'shows that Abraham’s efforts did not change the result',
        'He realized that Abraham was not an ordinary person, so he decided to meet him': 'connects a conclusion with the decision that follows',
        'This made Nimrod even more angry': 'shows the result of the final challenge',
      },
      explanation: 'The chapter uses yet, however, so, and result expressions to connect changing reactions, continuing attitudes, and consequences.',
      feedback: {
        correct: 'Correct. You identified contrast, consequence, and result across the narrative.',
        incorrect: 'Check whether each expression contrasts two ideas, explains a decision, or shows what happened as a result.',
      },
    },
    {
      id: 'abraham-b1-language-9-reported-orders',
      type: 'matching',
      title: 'Reporting Orders and Decisions',
      instructions: 'Match each structure with the function it performs in the scene.',
      question: 'How does Chapter 9 report what Nimrod orders and decides?',
      matchingPairs: [
        { left: 'He ordered his guards to bring two slaves', right: 'reports an order with order + person + to + verb' },
        { left: 'told them to be put to death', right: 'reports an instruction while focusing on what would happen to them' },
        { left: 'I let the second slave live', right: 'expresses allowing someone to remain alive' },
        { left: 'let him go', right: 'uses a direct imperative to give an immediate command' },
      ],
      correctAnswer: {
        'He ordered his guards to bring two slaves': 'reports an order with order + person + to + verb',
        'told them to be put to death': 'reports an instruction while focusing on what would happen to them',
        'I let the second slave live': 'expresses allowing someone to remain alive',
        'let him go': 'uses a direct imperative to give an immediate command',
      },
      explanation: 'B1 narratives can report commands in different ways depending on whether the speaker, receiver, or action is in focus.',
      feedback: {
        correct: 'Correct. You distinguished reported orders, passive focus, permission, and direct commands.',
        incorrect: 'Look at who gives the order, who receives it, and whether the sentence reports or directly gives the command.',
      },
    },
    {
      id: 'abraham-b1-language-9-ability-challenge',
      type: 'matching',
      title: 'Claiming and Testing Ability',
      instructions: 'Match each expression with the function it performs.',
      question: 'How does the debate move from a claim of ability to a test of that claim?',
      matchingPairs: [
        { left: 'I can give life and death', right: 'makes a strong claim about present ability' },
        { left: 'Can you make the sun rise from the west?', right: 'tests whether the claimed ability can be demonstrated' },
        { left: 'Nimrod was unable to do this', right: 'states inability after the challenge' },
        { left: 'only Allah has the power to do that', right: 'limits the ability to one source and excludes others' },
      ],
      correctAnswer: {
        'I can give life and death': 'makes a strong claim about present ability',
        'Can you make the sun rise from the west?': 'tests whether the claimed ability can be demonstrated',
        'Nimrod was unable to do this': 'states inability after the challenge',
        'only Allah has the power to do that': 'limits the ability to one source and excludes others',
      },
      explanation: 'The chapter contrasts a claim of ability with a test, an inability result, and an exclusivity statement.',
      feedback: {
        correct: 'Correct. You tracked how language moves from claim to test to result.',
        incorrect: 'Separate the initial claim, the challenge, the inability, and the statement of exclusive power.',
      },
    },
    {
      id: 'abraham-b1-language-9-connected-production',
      type: 'reflection',
      title: 'Challenge a Claim with Evidence',
      instructions: 'Write or say four connected B1 sentences about a new situation in which someone makes a claim and another person tests it. Do not retell Chapter 9.',
      question: 'Can you connect a claim, a reason or decision, a challenge, and the final result?',
      correctAnswer: null,
      explanation: 'A strong response can use can/can’t, so, however/yet, order/tell/let if natural, and a final result expression such as was unable to or this made....',
      feedback: {
        correct: 'Keep the four sentences connected as one short exchange or narrative.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State a claim using can or another ability expression.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain why someone decides to test the claim using so, because, or another natural connector.', mode: 'Individual' },
        { question: 'Sentence 3 — Write the challenge as a direct question or instruction.', mode: 'Individual' },
        { question: 'Sentence 4 — Report the outcome using was able/unable to, however/yet, or this made....', mode: 'Pair' },
      ],
    },
  ],
};
