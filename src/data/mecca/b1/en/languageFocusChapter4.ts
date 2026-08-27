import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 4 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-b1-language-4-succession',
      type: 'matching',
      title: 'Following Changes in Control',
      instructions: 'Match each expression with the historical relationship it shows.',
      question: 'How does the chapter move from one period of control to another?',
      matchingPairs: [
        { left: 'After Abraham ... completed his mission ... he returned to Palestine.', right: 'marks one completed stage before the next development' },
        { left: 'Later, the Khuza’a tribe came to Mecca ... and took control of the city.', right: 'moves the account forward to a new ruling group' },
        { left: 'Later, in the 5th century, the Quraysh tribe took over the city and the Ka’ba.', right: 'places another change of control at a later historical point' },
      ],
      correctAnswer: {
        'After Abraham ... completed his mission ... he returned to Palestine.': 'marks one completed stage before the next development',
        'Later, the Khuza’a tribe came to Mecca ... and took control of the city.': 'moves the account forward to a new ruling group',
        'Later, in the 5th century, the Quraysh tribe took over the city and the Ka’ba.': 'places another change of control at a later historical point',
      },
      explanation: '“After” closes one stage, while “later” moves the reader to a new historical period or ruler.',
      feedback: {
        correct: 'Correct. You identified how the writer organises successive historical stages.',
        incorrect: 'Look for the expression that closes an earlier stage and the expressions that introduce later ones.',
      },
    },
    {
      id: 'mecca-b1-language-4-change-and-practice',
      type: 'matching',
      title: 'Showing Cultural Change',
      instructions: 'Match each clause with the type of change it expresses.',
      question: 'How does the text show a change in religious practice under new rule?',
      matchingPairs: [
        { left: 'Under Khuza’a rule, people forgot the religion of Abraham...', right: 'describes a changed condition during a period of rule' },
        { left: '...and started worshipping many idols.', right: 'shows the beginning of a new practice' },
        { left: 'the Quraysh tribe took over the city and the Ka’ba', right: 'shows a transfer of control to another group' },
      ],
      correctAnswer: {
        'Under Khuza’a rule, people forgot the religion of Abraham...': 'describes a changed condition during a period of rule',
        '...and started worshipping many idols.': 'shows the beginning of a new practice',
        'the Quraysh tribe took over the city and the Ka’ba': 'shows a transfer of control to another group',
      },
      explanation: 'The chapter combines a time frame (“under ... rule”), a change-of-state verb (“forgot”), a beginning verb (“started”), and a transfer expression (“took over”).',
      feedback: {
        correct: 'Good. You separated changed condition, new practice, and transfer of control.',
        incorrect: 'Ask whether each expression describes a condition, the start of an action, or a new group taking control.',
      },
    },
    {
      id: 'mecca-b1-language-4-reason-background',
      type: 'matching',
      title: 'Explaining Reasons and Historical Background',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does the chapter explain economic choices and the wider historical setting?',
      matchingPairs: [
        { left: 'Because people could not farm in this dry land, they made money through trade.', right: 'connects a limitation with the action people chose instead' },
        { left: 'When Islam began, the Byzantine and Sassanid empires were powerful states.', right: 'sets the historical background at the time another event began' },
        { left: 'They traded with both the north and south of Arabia.', right: 'adds the activity that characterises that wider regional context' },
      ],
      correctAnswer: {
        'Because people could not farm in this dry land, they made money through trade.': 'connects a limitation with the action people chose instead',
        'When Islam began, the Byzantine and Sassanid empires were powerful states.': 'sets the historical background at the time another event began',
        'They traded with both the north and south of Arabia.': 'adds the activity that characterises that wider regional context',
      },
      explanation: '“Because” gives a reason, while “when + past” can anchor a wider background situation at a historical moment.',
      feedback: {
        correct: 'Correct. You distinguished reason from background and supporting detail.',
        incorrect: 'Decide whether the sentence explains why, sets the time background, or adds information about that background.',
      },
    },
    {
      id: 'mecca-b1-language-4-production',
      type: 'reflection',
      title: 'Explain a Historical Change',
      instructions: 'Write or say six connected B1 sentences about a different historical place or community. Do not retell Chapter 4.',
      question: 'Can you show an earlier stage, a later change of control, one change in practice, one limitation and response, and a wider background situation?',
      correctAnswer: null,
      explanation: 'A strong response should form one connected paragraph. Useful patterns include “after...”, “later...”, “under ... rule...”, “started + -ing”, “because ... could not..., ...”, and “when ... began, ... was/were ...”.',
      feedback: {
        correct: 'Keep the sequence clear and make each connector show a real relationship between ideas.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Close an earlier stage with “after...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Introduce a later change with “later...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Describe life “under” a new period or authority.', mode: 'Individual' },
        { question: 'Sentence 4 — Show a new practice with “started + -ing”.', mode: 'Pair' },
        { question: 'Sentence 5 — Use “because ... could not..., ...” to explain an alternative action.', mode: 'Pair' },
        { question: 'Sentence 6 — Add wider background with “when ... began, ... was/were ...”.', mode: 'Pair' },
      ],
    },
  ],
};
