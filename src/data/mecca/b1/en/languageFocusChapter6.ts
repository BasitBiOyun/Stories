import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 6 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'mecca-b1-language-6-continuation',
      type: 'matching',
      title: 'Showing Continued Activity',
      instructions: 'Match each expression with the meaning relationship it creates.',
      question: 'How does the chapter describe activities that continued over time and their effect on the city?',
      matchingPairs: [
        { left: 'idol worshippers continued to visit and walk around the Ka’ba', right: 'shows an activity continuing over a period of time' },
        { left: 'These practices kept Mecca active during the pilgrimage season.', right: 'shows an activity maintaining a continuing state' },
        { left: 'This religious activity also helped business grow quickly.', right: 'shows one activity contributing to a wider development' },
      ],
      correctAnswer: {
        'idol worshippers continued to visit and walk around the Ka’ba': 'shows an activity continuing over a period of time',
        'These practices kept Mecca active during the pilgrimage season.': 'shows an activity maintaining a continuing state',
        'This religious activity also helped business grow quickly.': 'shows one activity contributing to a wider development',
      },
      explanation: 'The chapter uses “continue to”, “keep + object + adjective”, and “help + object + verb” to describe continuity, maintained conditions and contribution to change.',
      feedback: {
        correct: 'Correct. You distinguished continuing action, maintained state and contribution.',
        incorrect: 'Ask whether the expression tells us that an action continued, a condition stayed active, or one activity supported another development.',
      },
    },
    {
      id: 'mecca-b1-language-6-sequence-background',
      type: 'matching',
      title: 'Organising Historical Events',
      instructions: 'Match each expression with its function in the narrative.',
      question: 'How does the writer organise recurring activity, sequence and historical background?',
      matchingPairs: [
        { left: 'People attended these fairs first and then went to Arafat.', right: 'orders two actions clearly in sequence' },
        { left: 'At the beginning of the 7th century...', right: 'places the description inside a historical time frame' },
        { left: 'The Quraysh tribe controlled the most important trade routes and wealth in Arabia.', right: 'describes an established situation at that time' },
      ],
      correctAnswer: {
        'People attended these fairs first and then went to Arafat.': 'orders two actions clearly in sequence',
        'At the beginning of the 7th century...': 'places the description inside a historical time frame',
        'The Quraysh tribe controlled the most important trade routes and wealth in Arabia.': 'describes an established situation at that time',
      },
      explanation: '“First ... then ...” sequences actions, while a time frame plus past simple can establish the historical situation in which later effects are explained.',
      feedback: {
        correct: 'Good. You identified sequence and historical framing.',
        incorrect: 'Look for the phrase that orders actions, the phrase that sets the time, and the sentence that states the situation within that time.',
      },
    },
    {
      id: 'mecca-b1-language-6-result-comparison',
      type: 'matching',
      title: 'Explaining Unequal Change',
      instructions: 'Match each expression with what it communicates.',
      question: 'How does the final paragraph show a practice, its consequence and opposite changes for two groups?',
      matchingPairs: [
        { left: 'lending money with usury was widespread', right: 'describes a practice as common across the city' },
        { left: 'This made the rich richer', right: 'shows one practice causing an increase in a group’s condition' },
        { left: 'and the poor poorer', right: 'shows the opposite group changing in a more negative direction' },
      ],
      correctAnswer: {
        'lending money with usury was widespread': 'describes a practice as common across the city',
        'This made the rich richer': 'shows one practice causing an increase in a group’s condition',
        'and the poor poorer': 'shows the opposite group changing in a more negative direction',
      },
      explanation: 'The text combines a statement of prevalence with “make + object + comparative” to show how one system can push two groups in opposite directions.',
      feedback: {
        correct: 'Correct. You identified prevalence, cause and contrasting change.',
        incorrect: 'Decide which phrase tells us the practice was common and which phrases show how the two groups changed differently.',
      },
    },
    {
      id: 'mecca-b1-language-6-production',
      type: 'reflection',
      title: 'Explain a System and Its Effects',
      instructions: 'Write or say six connected B1 sentences about a different event, school, community or economic situation. Do not retell Chapter 6.',
      question: 'Can you describe a continuing activity, organise two actions in sequence, set a time frame, explain a widespread practice and show how it affected two groups differently?',
      correctAnswer: null,
      explanation: 'A strong response should form one connected paragraph using language such as “continued to...”, “kept...”, “first... then...”, a historical or situational time frame, “was widespread”, and “made ... more/less ...” or another clear cause-and-result comparison.',
      feedback: {
        correct: 'Keep the paragraph connected and make each form express a real relationship between ideas.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe an activity that “continued to” happen.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain what that activity “kept” active, busy, open or connected.', mode: 'Individual' },
        { question: 'Sentence 3 — Order two related actions with “first ... then ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Set a clear time frame for the situation.', mode: 'Pair' },
        { question: 'Sentence 5 — Describe one practice as common or widespread.', mode: 'Pair' },
        { question: 'Sentence 6 — Show how that practice affected two groups differently.', mode: 'Pair' },
      ],
    },
  ],
};
