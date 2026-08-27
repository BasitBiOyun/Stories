import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 9 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-b1-language-9-contrast-status',
      type: 'matching',
      title: 'Status, Difference and Contrast',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter describe differences in people’s social position?',
      matchingPairs: [
        { left: 'depending on their wealth and family', right: 'shows that a condition changes according to another factor' },
        { left: 'Rich women, like Khadija, could run their own businesses.', right: 'gives one example of greater ability or independence' },
        { left: 'However, many poor women had no rights...', right: 'introduces a strong contrast with the previous example' },
      ],
      correctAnswer: {
        'depending on their wealth and family': 'shows that a condition changes according to another factor',
        'Rich women, like Khadija, could run their own businesses.': 'gives one example of greater ability or independence',
        'However, many poor women had no rights...': 'introduces a strong contrast with the previous example',
      },
      explanation: 'The chapter uses “depending on” to show variation and “however” to mark contrast. “Could” describes ability or possibility in that social situation.',
      feedback: {
        correct: 'Correct. You identified variation, ability and contrast.',
        incorrect: 'Look for the phrase that shows changing conditions, the phrase that shows ability, and the connector that introduces contrast.',
      },
    },
    {
      id: 'mecca-b1-language-9-cause-passive',
      type: 'matching',
      title: 'Cause and Passive Focus',
      instructions: 'Match each form with what it does in the chapter.',
      question: 'How does the writer explain causes and describe actions when the affected people are the focus?',
      matchingPairs: [
        { left: 'because they wanted sons to increase their power in society', right: 'gives a reason for an attitude or action' },
        { left: 'Slaves faced brutal conditions', right: 'keeps the affected people as the subject of the sentence' },
        { left: 'were bought and sold like animals', right: 'uses passive voice to focus on what happened to them rather than who did it' },
      ],
      correctAnswer: {
        'because they wanted sons to increase their power in society': 'gives a reason for an attitude or action',
        'Slaves faced brutal conditions': 'keeps the affected people as the subject of the sentence',
        'were bought and sold like animals': 'uses passive voice to focus on what happened to them rather than who did it',
      },
      explanation: '“Because” explains cause. The passive “were bought and sold” highlights the people affected by the action and leaves the actor in the background.',
      feedback: {
        correct: 'Good. You separated cause from information focus.',
        incorrect: 'Find the reason marker first, then compare the active description with the passive one.',
      },
    },
    {
      id: 'mecca-b1-language-9-poetry-functions',
      type: 'matching',
      title: 'Building a Multi-Function Description',
      instructions: 'Match each language choice with its function.',
      question: 'How does the final paragraph build a compact description of poetry’s social role?',
      matchingPairs: [
        { left: 'Poetry kept tribal history alive, praised tribes, and criticized enemies.', right: 'uses a parallel verb list to show several functions clearly' },
        { left: 'Poets were also very important in social life.', right: 'adds another important group to the chapter with “also”' },
        { left: 'poets were like the media of the people', right: 'uses a comparison to explain an unfamiliar historical role through a familiar modern idea' },
      ],
      correctAnswer: {
        'Poetry kept tribal history alive, praised tribes, and criticized enemies.': 'uses a parallel verb list to show several functions clearly',
        'Poets were also very important in social life.': 'adds another important group to the chapter with “also”',
        'poets were like the media of the people': 'uses a comparison to explain an unfamiliar historical role through a familiar modern idea',
      },
      explanation: 'The writer combines addition, parallel verbs and comparison to explain several social functions efficiently.',
      feedback: {
        correct: 'Correct. You identified addition, parallel structure and comparison.',
        incorrect: 'Look for “also”, the series of three verbs, and the comparison with modern media.',
      },
    },
    {
      id: 'mecca-b1-language-9-production',
      type: 'reflection',
      title: 'Describe Unequal Roles and Social Functions',
      instructions: 'Write or say six connected B1 sentences about a different historical or modern community. Do not retell Chapter 9.',
      question: 'Can you show how people’s opportunities vary, add a contrast, explain one cause, use one passive sentence, and describe an institution through several parallel verbs or a comparison?',
      correctAnswer: null,
      explanation: 'A strong response should use language such as “depending on...”, “however”, “because”, a passive form, and a clear list of parallel verbs or a useful comparison.',
      feedback: {
        correct: 'Keep the ideas connected so the grammar shows real relationships rather than appearing as separate examples.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe how opportunities vary depending on one factor.', mode: 'Individual' },
        { question: 'Sentence 2 — Give one contrasting example with “however”.', mode: 'Individual' },
        { question: 'Sentence 3 — Explain one reason with “because”.', mode: 'Individual' },
        { question: 'Sentence 4 — Use a passive sentence to focus on people affected by an action.', mode: 'Pair' },
        { question: 'Sentence 5 — Describe one institution with two or three parallel verbs.', mode: 'Pair' },
        { question: 'Sentence 6 — Add a comparison that helps explain its social role.', mode: 'Pair' },
      ],
    },
  ],
};
