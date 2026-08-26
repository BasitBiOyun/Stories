import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-b1-language-11-purpose-assurance',
      type: 'matching',
      title: 'Purpose and Assurance',
      instructions: 'Match each expression with the meaning or relationship it creates in Chapter 11.',
      question: 'How does the chapter express purpose, knowledge, and confidence about the future?',
      matchingPairs: [
        { left: 'Give them blessings so that they may give thanks', right: 'connects a prayer with its hoped-for purpose or result' },
        { left: 'Hagar knew that Abraham was doing what Allah told him', right: 'reports what Hagar understood about another person’s action' },
        { left: 'Allah will never let us die', right: 'expresses a strong negative prediction or assurance' },
        { left: 'He will surely protect us', right: 'adds strong certainty to a future statement' },
      ],
      correctAnswer: {
        'Give them blessings so that they may give thanks': 'connects a prayer with its hoped-for purpose or result',
        'Hagar knew that Abraham was doing what Allah told him': 'reports what Hagar understood about another person’s action',
        'Allah will never let us die': 'expresses a strong negative prediction or assurance',
        'He will surely protect us': 'adds strong certainty to a future statement',
      },
      explanation: 'The chapter uses so that for purpose/result, knew that for understood information, and will never / will surely for strong future assurance.',
      feedback: {
        correct: 'Correct. You distinguished purpose, reported understanding, and strong future assurance.',
        incorrect: 'Ask whether each expression explains why, reports what someone knows, or shows certainty about the future.',
      },
    },
    {
      id: 'abraham-b1-language-11-need-process',
      type: 'matching',
      title: 'From Need to Action',
      instructions: 'Match each expression with its function in the action sequence.',
      question: 'How does Chapter 11 move from a difficult situation to purposeful action?',
      matchingPairs: [
        { left: 'their food and water ran out', right: 'shows that a supply becomes completely unavailable' },
        { left: 'Hagar needed to feed her child', right: 'states a necessity that motivates the next action' },
        { left: 'started running from one hill to another', right: 'marks the beginning of an ongoing action' },
        { left: 'looking for water and food', right: 'explains the purpose of the running' },
      ],
      correctAnswer: {
        'their food and water ran out': 'shows that a supply becomes completely unavailable',
        'Hagar needed to feed her child': 'states a necessity that motivates the next action',
        'started running from one hill to another': 'marks the beginning of an ongoing action',
        'looking for water and food': 'explains the purpose of the running',
      },
      explanation: 'The paragraph creates a connected sequence: problem → need → beginning of action → purpose.',
      feedback: {
        correct: 'Correct. You followed how the chapter links necessity to action.',
        incorrect: 'Separate the problem, the need, the start of the action, and the purpose of that action.',
      },
    },
    {
      id: 'abraham-b1-language-11-ritual-description',
      type: 'matching',
      title: 'Describing a Practice',
      instructions: 'Match each expression with the job it does in an explanatory paragraph.',
      question: 'How does the chapter explain sa’y as a continuing religious practice?',
      matchingPairs: [
        { left: 'is known as “sa’y”', right: 'gives the accepted name for an action or practice' },
        { left: 'Muslims must complete the ritual', right: 'expresses obligation' },
        { left: 'after performing the tawaf', right: 'shows when one action happens in relation to another' },
        { left: 'This ritual involves walking back and forth', right: 'explains what the practice includes' },
      ],
      correctAnswer: {
        'is known as “sa’y”': 'gives the accepted name for an action or practice',
        'Muslims must complete the ritual': 'expresses obligation',
        'after performing the tawaf': 'shows when one action happens in relation to another',
        'This ritual involves walking back and forth': 'explains what the practice includes',
      },
      explanation: 'Passive naming, must, after + -ing, and involves + -ing help explain a practice clearly and efficiently.',
      feedback: {
        correct: 'Correct. You identified how definition, obligation, sequence, and description work together.',
        incorrect: 'Check whether the phrase names the practice, gives a rule, locates it in a sequence, or explains what it includes.',
      },
    },
    {
      id: 'abraham-b1-language-11-connected-production',
      type: 'reflection',
      title: 'Explain a Process Clearly',
      instructions: 'Write or say five connected B1 sentences about a non-story routine, practice, or difficult situation. Do not retell Chapter 11.',
      question: 'Can you connect a purpose, a need, a developing action, an obligation, and a short explanation of the process?',
      correctAnswer: null,
      explanation: 'A strong response can use so that, need to, start + -ing, look for, must, after + -ing, is known as, or involves + -ing when natural.',
      feedback: {
        correct: 'Keep the five sentences connected as one short explanation rather than isolated examples.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State the situation or goal.', mode: 'Individual' },
        { question: 'Sentence 2 — Express a need or purpose with need to or so that.', mode: 'Individual' },
        { question: 'Sentence 3 — Show the beginning of an action with start + -ing or another natural structure.', mode: 'Individual' },
        { question: 'Sentence 4 — Add one rule or obligation with must if appropriate.', mode: 'Individual' },
        { question: 'Sentence 5 — Explain what the process includes or what happens after another step.', mode: 'Pair' },
      ],
    },
  ],
};
