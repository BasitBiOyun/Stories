import type { Exercise } from '../../../../types';

/** Chapter 14 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter14: Record<number, Exercise[]> = {
  14: [
    {
      id: 'adam-b2-language-14-negative-coordination',
      type: 'matching',
      title: 'Read Layered Negation',
      instructions: 'Match each Chapter 14 expression with the discourse effect it creates.',
      question: 'How does the chapter use negation to show that several restraints fail at the same time?',
      matchingPairs: [
        { left: 'did nothing to lessen the hatred', right: 'shows that the brotherly appeal produces no calming effect' },
        { left: 'nor did he show fear of Allah’s punishment', right: 'adds a second failed restraint without restarting the argument' },
        { left: 'Even familial considerations were given up', right: 'signals that a further expected restraint also collapses' },
        { left: 'did not know what to do with his brother’s corpse', right: 'shifts from moral failure to practical inability after the act' },
      ],
      correctAnswer: {
        'did nothing to lessen the hatred': 'shows that the brotherly appeal produces no calming effect',
        'nor did he show fear of Allah’s punishment': 'adds a second failed restraint without restarting the argument',
        'Even familial considerations were given up': 'signals that a further expected restraint also collapses',
        'did not know what to do with his brother’s corpse': 'shifts from moral failure to practical inability after the act',
      },
      explanation: 'The chapter layers failed restraints through negative and additive structures, then moves from moral refusal to helplessness after the crime.',
      feedback: {
        correct: 'Correct. You tracked how the negation builds a chain of failed restraints rather than treating each sentence separately.',
        incorrect: 'Ask what each negative form adds: no calming effect, no fear, no family restraint, or no practical knowledge.',
      },
    },
    {
      id: 'adam-b2-language-14-passive-focus',
      type: 'multiple-choice',
      title: 'Notice What the Passive Foregrounds',
      instructions: 'Choose the strongest analysis of the wording.',
      question: 'Why does the sentence “Even familial considerations were given up” use a passive form effectively in this paragraph?',
      options: [
        'It foregrounds the collapse of a moral restraint rather than who performs the act of abandoning it.',
        'It hides the fact that Qabil is involved and therefore removes his responsibility.',
        'It changes the event into an uncertain report whose source is unknown.',
      ],
      correctAnswer: 0,
      explanation: 'The surrounding sentences already make Qabil the actor. The passive shifts attention to the restraint that disappears, intensifying the moral progression without weakening responsibility.',
      feedback: {
        correct: 'Correct. The passive changes information focus, not responsibility or certainty.',
        incorrect: 'Keep Qabil’s responsibility from the surrounding context and ask what the sentence chooses to foreground.',
      },
    },
    {
      id: 'adam-b2-language-14-development-purpose',
      type: 'matching',
      title: 'Track Developing State and Purpose',
      instructions: 'Match each expression with the relationship it contributes to the later paragraph.',
      question: 'How does the chapter move from an ongoing burden to the purpose of the raven scene?',
      matchingPairs: [
        { left: 'He carried it on his back, wandering from place to place trying to hide it.', right: 'presents an ongoing action together with an attempted purpose' },
        { left: 'His anger had now lessened, and his heart was burdened with guilt.', right: 'marks a changed internal state after the crime' },
        { left: 'He was getting tired under the burden of the corpse.', right: 'shows a condition developing progressively over time' },
        { left: 'As a mercy, and to show that the highness of a human had to be preserved even after death, Allah sent two ravens', right: 'frames the raven episode through mercy and an explicit purpose' },
      ],
      correctAnswer: {
        'He carried it on his back, wandering from place to place trying to hide it.': 'presents an ongoing action together with an attempted purpose',
        'His anger had now lessened, and his heart was burdened with guilt.': 'marks a changed internal state after the crime',
        'He was getting tired under the burden of the corpse.': 'shows a condition developing progressively over time',
        'As a mercy, and to show that the highness of a human had to be preserved even after death, Allah sent two ravens': 'frames the raven episode through mercy and an explicit purpose',
      },
      explanation: 'The paragraph combines progressive development, changed state and purpose framing so that the raven episode follows from an accumulating physical and moral burden.',
      feedback: {
        correct: 'Correct. You followed how grammar organises change, duration and purpose across the paragraph.',
        incorrect: 'Separate ongoing action, changed state, developing condition and stated purpose.',
      },
    },
    {
      id: 'adam-b2-language-14-production',
      type: 'reflection',
      title: 'Build a Consequence-and-Realisation Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which someone ignores several restraints, faces an accumulating consequence, and then learns through an unexpected example. Use one layered negative structure such as “not... nor...”, one passive form to foreground a result or lost restraint, one expression of a developing state such as “was becoming / was getting...”, and one purpose expression such as “to show / in order to...”. Do not retell Chapter 14.',
      question: 'Can you use information focus, developing-state language and purpose framing to build a coherent consequence-and-realisation paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response should use the target structures to organise discourse: failed restraints → visible consequence → developing burden → purposeful learning moment.',
      feedback: {
        correct: 'Keep the passive focused on information structure, make the developing state genuinely gradual, and ensure the purpose clause explains why the final example matters.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Restraints — Which two warnings or considerations are ignored?', mode: 'Individual' },
        { question: 'Focus — Which result is better foregrounded with a passive form?', mode: 'Individual' },
        { question: 'Development — What burden or condition grows over time?', mode: 'Pair' },
        { question: 'Purpose — What does the final example teach or demonstrate?', mode: 'Pair' },
      ],
    },
  ],
};
