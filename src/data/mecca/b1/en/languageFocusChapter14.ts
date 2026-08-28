import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 14 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter14: Record<number, Exercise[]> = {
  14: [
    {
      id: 'mecca-b1-language-14-survival-perception',
      type: 'matching',
      title: 'Survival and What Could Be Heard',
      instructions: 'Match each expression with the meaning it adds to the situation.',
      question: 'How does the chapter show extreme need and its visible effects?',
      matchingPairs: [
        { left: 'others even ate tree leaves to survive', right: 'uses “to + verb” to express the purpose of a desperate action' },
        { left: 'The cries of hungry children could be heard everywhere.', right: 'uses a passive form to focus on what was widely perceived rather than who heard it' },
        { left: 'Some died of hunger, and others even ate tree leaves...', right: 'contrasts two different consequences within the same crisis' },
      ],
      correctAnswer: {
        'others even ate tree leaves to survive': 'uses “to + verb” to express the purpose of a desperate action',
        'The cries of hungry children could be heard everywhere.': 'uses a passive form to focus on what was widely perceived rather than who heard it',
        'Some died of hunger, and others even ate tree leaves...': 'contrasts two different consequences within the same crisis',
      },
      explanation: 'The paragraph combines purpose, passive perception and contrasting consequences to show the seriousness of the boycott without turning the task into another comprehension question.',
      feedback: {
        correct: 'Correct. You identified purpose, passive focus and contrasting consequences.',
        incorrect: 'Look for the phrase answering “Why?”, the passive “could be heard”, and the contrast between different outcomes.',
      },
    },
    {
      id: 'mecca-b1-language-14-continuation-resistance',
      type: 'matching',
      title: 'Continuing an Action and Resisting Change',
      instructions: 'Match each form with its function in the paragraph.',
      question: 'How does the chapter contrast a continued call for change with refusal to change?',
      matchingPairs: [
        { left: 'continued to ask people to stop worshipping idols', right: 'shows that an action continued despite pressure' },
        { left: 'did not want to change', right: 'expresses refusal or lack of willingness' },
        { left: 'did not want to think about punishment', right: 'extends that refusal from behaviour to facing consequences' },
      ],
      correctAnswer: {
        'continued to ask people to stop worshipping idols': 'shows that an action continued despite pressure',
        'did not want to change': 'expresses refusal or lack of willingness',
        'did not want to think about punishment': 'extends that refusal from behaviour to facing consequences',
      },
      explanation: '“Continued to...” marks persistence, while “did not want to...” repeatedly expresses resistance to change or reflection.',
      feedback: {
        correct: 'Good. You separated persistence from unwillingness.',
        incorrect: 'Find the form that shows continuation, then the two forms that express refusal.',
      },
    },
    {
      id: 'mecca-b1-language-14-cause-consequence',
      type: 'matching',
      title: 'Cause, Consequence and Social Pressure',
      instructions: 'Match each expression with the relationship it expresses.',
      question: 'How does the text build reasons for hostility and pressure?',
      matchingPairs: [
        { left: 'Losing the idols meant losing wealth and influence, so they became hostile to Islam.', right: 'links one feared consequence to a resulting attitude with “so”' },
        { left: 'because people feared losing their tribe’s protection', right: 'gives the reason for tribal loyalty becoming a challenge' },
        { left: 'hurting people, making money unfairly, drinking alcohol...', right: 'groups parallel -ing forms to list behaviours being judged' },
      ],
      correctAnswer: {
        'Losing the idols meant losing wealth and influence, so they became hostile to Islam.': 'links one feared consequence to a resulting attitude with “so”',
        'because people feared losing their tribe’s protection': 'gives the reason for tribal loyalty becoming a challenge',
        'hurting people, making money unfairly, drinking alcohol...': 'groups parallel -ing forms to list behaviours being judged',
      },
      explanation: 'The chapter uses “so” for consequence, “because” for reason, and parallel -ing forms to build a clear list of actions.',
      feedback: {
        correct: 'Correct. You identified consequence, reason and parallel listing.',
        incorrect: 'Separate the result marker “so”, the reason marker “because”, and the repeated -ing forms.',
      },
    },
    {
      id: 'mecca-b1-language-14-production',
      type: 'reflection',
      title: 'Explain Why People Resist Change',
      instructions: 'Write or say five to six connected B1 sentences about a different school, social or historical situation. Do not retell Chapter 14.',
      question: 'Can you explain a difficult situation, what people continued to do, what they refused to change, what consequence they feared, and why that fear affected their behaviour?',
      correctAnswer: null,
      explanation: 'A strong response should include a purpose phrase with “to + verb”, one continuation pattern with “continued to...”, one unwillingness pattern with “did not want to...”, one cause-result link with “so”, and one reason with “because”.',
      feedback: {
        correct: 'Keep the ideas connected so the reader can follow the situation, persistence, resistance, feared consequence and reason.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a difficult situation and one action done for a purpose.', mode: 'Individual' },
        { question: 'Sentence 2 — Say what someone continued to do.', mode: 'Individual' },
        { question: 'Sentence 3 — Say what another person or group did not want to change.', mode: 'Individual' },
        { question: 'Sentence 4 — Explain a feared consequence and its result with “so”.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Give the reason with “because” and add one short list of related actions if natural.', mode: 'Pair' },
      ],
    },
  ],
};
