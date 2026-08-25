import type { Exercise } from '../../../../types';

/** Chapter 11 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'adam-b2-language-11-time-pressure',
      type: 'matching',
      title: 'Track Pressure Across Time',
      instructions: 'Match each Chapter 11 expression with the relationship it creates in the discourse.',
      question: 'How does the chapter make Adam’s earthly life feel continuous and demanding rather than a list of isolated events?',
      matchingPairs: [
        { left: 'No sooner had one ended than another began.', right: 'compresses two events to show that the next struggle follows almost immediately' },
        { left: 'He also had to work hard to keep himself alive.', right: 'adds another continuing necessity to the pressure already described' },
        { left: 'Above all, he had to struggle with the spirit of evil.', right: 'ranks the moral struggle as more important than the earlier practical difficulties' },
        { left: 'The battle between good and evil is continuous...', right: 'moves from Adam’s individual experience to an ongoing general condition' },
      ],
      correctAnswer: {
        'No sooner had one ended than another began.': 'compresses two events to show that the next struggle follows almost immediately',
        'He also had to work hard to keep himself alive.': 'adds another continuing necessity to the pressure already described',
        'Above all, he had to struggle with the spirit of evil.': 'ranks the moral struggle as more important than the earlier practical difficulties',
        'The battle between good and evil is continuous...': 'moves from Adam’s individual experience to an ongoing general condition',
      },
      explanation: 'The chapter uses inversion, additive sequencing and evaluative ranking to build a sense of continuous pressure. These choices organise the paragraph, not just individual sentences.',
      feedback: {
        correct: 'Correct. You tracked how time, addition and ranking shape the argument.',
        incorrect: 'Look for the expression that compresses time, the phrases that add obligations, and the phrase that ranks one struggle above the others.',
      },
    },
    {
      id: 'adam-b2-language-11-obligation-purpose',
      type: 'multiple-choice',
      title: 'Read Obligation as Purposeful Action',
      instructions: 'Choose the interpretation that best explains the repeated pattern.',
      question: 'What is the main effect of repeating “had to” in “had to face...”, “had to work...”, “had to protect...”, and “had to maintain, cultivate, construct, and populate...” ?',
      options: [
        'It builds a chain of responsibilities that defines earthly life through necessary action.',
        'It shows that all actions were optional but happened by coincidence.',
        'It reports only physical survival and excludes moral or social responsibility.',
      ],
      correctAnswer: 0,
      explanation: 'Repeated “had to” gives the chapter a responsibility frame. The obligations range from survival to moral struggle, stewardship and raising future generations.',
      feedback: {
        correct: 'Correct. The repetition creates a coherent responsibility structure.',
        incorrect: 'Compare the verbs after “had to”: they cover survival, moral struggle, stewardship and family responsibility.',
      },
    },
    {
      id: 'adam-b2-language-11-contrast-consequence',
      type: 'matching',
      title: 'Connect Contrast and Consequence',
      instructions: 'Match each expression with the discourse function it performs.',
      question: 'How does Chapter 11 contrast two paths and explain the consequences of each?',
      matchingPairs: [
        { left: 'Satan wants human beings not to remember Allah, yet...', right: 'introduces a contrast between deception and the meaning the chapter associates with remembrance' },
        { left: 'the removal of Allah from the human mind means the removal of meaning and purpose...', right: 'presents one condition as carrying a wider consequence for human life' },
        { left: 'those who follow Allah’s guidance should fear nothing', right: 'defines one group through a relative clause and states its expected outcome' },
        { left: 'while those who disobey Allah and follow Iblis...', right: 'sets the contrasting group and outcome against the first group' },
      ],
      correctAnswer: {
        'Satan wants human beings not to remember Allah, yet...': 'introduces a contrast between deception and the meaning the chapter associates with remembrance',
        'the removal of Allah from the human mind means the removal of meaning and purpose...': 'presents one condition as carrying a wider consequence for human life',
        'those who follow Allah’s guidance should fear nothing': 'defines one group through a relative clause and states its expected outcome',
        'while those who disobey Allah and follow Iblis...': 'sets the contrasting group and outcome against the first group',
      },
      explanation: 'The chapter does more than state two positions. “Yet,” “means,” “those who,” and “while” connect cause, identity and contrasting consequences across the argument.',
      feedback: {
        correct: 'Good. You identified how the paragraph builds contrasting paths and consequences.',
        incorrect: 'Separate contrast markers from cause/consequence language and from the relative clauses that define the two groups.',
      },
    },
    {
      id: 'adam-b2-language-11-production',
      type: 'reflection',
      title: 'Build a Responsibility Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which a person or group enters a demanding new environment. Do not retell Chapter 11. Use “no sooner... than...” or an equivalent compressed-time structure once. Use “had to” or another necessity form at least twice for different kinds of responsibility. Rank one responsibility with “above all” or an equivalent expression. Contrast two possible paths with “while” or “yet”, and explain one wider consequence with “means” or an equivalent cause-result frame.',
      question: 'Can you organise time, necessity, priority, contrast and consequence across one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses grammar to organise a whole argument: pressure develops over time, responsibilities accumulate, priorities are ranked, and consequences are contrasted.',
      feedback: {
        correct: 'Keep the paragraph coherent: each structure should advance the same situation rather than appear as an isolated grammar example.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Time pressure — Which two events happen with almost no gap?', mode: 'Individual' },
        { question: 'Necessity — Which practical and non-practical responsibilities must be handled?', mode: 'Individual' },
        { question: 'Priority — Which responsibility matters most, and how will you signal that?', mode: 'Pair' },
        { question: 'Contrast and consequence — What two paths can you contrast, and what does one choice lead to?', mode: 'Pair' },
      ],
    },
  ],
};
