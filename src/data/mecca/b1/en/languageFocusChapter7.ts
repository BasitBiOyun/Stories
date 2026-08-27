import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 7 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mecca-b1-language-7-cause-inability',
      type: 'matching',
      title: 'Explaining Cause and Inability',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter explain why debt became difficult to escape?',
      matchingPairs: [
        { left: 'Many people were in debt and could not pay back their debts', right: 'describes inability in a difficult situation' },
        { left: 'because of high interest', right: 'gives the cause of that difficulty' },
        { left: 'these habits often pushed people deeper into debt', right: 'shows an action or habit causing a worse result' },
      ],
      correctAnswer: {
        'Many people were in debt and could not pay back their debts': 'describes inability in a difficult situation',
        'because of high interest': 'gives the cause of that difficulty',
        'these habits often pushed people deeper into debt': 'shows an action or habit causing a worse result',
      },
      explanation: 'The text combines “could not + verb”, “because of + noun” and “push + object + into...” to explain limitation, cause and worsening consequence.',
      feedback: {
        correct: 'Correct. You identified inability, cause and worsening result.',
        incorrect: 'Ask which phrase shows inability, which names the cause, and which shows the situation becoming worse.',
      },
    },
    {
      id: 'mecca-b1-language-7-contrast',
      type: 'matching',
      title: 'Contrasting Two Social Realities',
      instructions: 'Match each expression with its discourse function.',
      question: 'How does the writer place two very different living conditions side by side?',
      matchingPairs: [
        { left: 'While the rich lived in luxury...', right: 'opens one side of a simultaneous contrast' },
        { left: 'the poor struggled to survive.', right: 'presents the contrasting condition of another group' },
        { left: 'with gold plates and silver cups', right: 'adds concrete detail that strengthens the contrast' },
      ],
      correctAnswer: {
        'While the rich lived in luxury...': 'opens one side of a simultaneous contrast',
        'the poor struggled to survive.': 'presents the contrasting condition of another group',
        'with gold plates and silver cups': 'adds concrete detail that strengthens the contrast',
      },
      explanation: '“While” can contrast two conditions happening in the same society, and concrete details make the difference clearer without needing another factual question.',
      feedback: {
        correct: 'Good. You identified contrast and supporting detail.',
        incorrect: 'Look for the connector that sets up contrast, the opposite condition, and the detail that makes the difference vivid.',
      },
    },
    {
      id: 'mecca-b1-language-7-values-reported-view',
      type: 'matching',
      title: 'Showing Values and Reported Objections',
      instructions: 'Match each expression with what it communicates.',
      question: 'How does the chapter show what powerful people valued and how some reacted to Muhammad’s call?',
      matchingPairs: [
        { left: 'money and tribe were the most important values', right: 'states the priorities a group placed above others' },
        { left: 'When Prophet Muhammad started calling people to Islam...', right: 'sets the time and situation for the reaction that follows' },
        { left: 'some rich leaders asked why Muhammad should be the leader', right: 'reports an objection or viewpoint rather than stating it as the writer’s own position' },
      ],
      correctAnswer: {
        'money and tribe were the most important values': 'states the priorities a group placed above others',
        'When Prophet Muhammad started calling people to Islam...': 'sets the time and situation for the reaction that follows',
        'some rich leaders asked why Muhammad should be the leader': 'reports an objection or viewpoint rather than stating it as the writer’s own position',
      },
      explanation: 'The chapter moves from group priorities to a time frame and then to reported viewpoint. This helps distinguish description from the attitudes attributed to historical actors.',
      feedback: {
        correct: 'Correct. You separated values, time framing and reported viewpoint.',
        incorrect: 'Decide which expression names priorities, which sets the moment, and which reports what another group questioned.',
      },
    },
    {
      id: 'mecca-b1-language-7-production',
      type: 'reflection',
      title: 'Describe Inequality Without Retelling the Story',
      instructions: 'Write or say six connected B1 sentences about a different school, workplace or community situation. Do not retell Chapter 7.',
      question: 'Can you explain a cause, describe inability, contrast two groups, state a group’s priorities and report one person’s objection?',
      correctAnswer: null,
      explanation: 'A strong response should connect ideas with language such as “because of...”, “could not...”, “while...”, “the most important...”, “when...”, and “asked why...” or a natural equivalent.',
      feedback: {
        correct: 'Keep the paragraph connected and use each form to express a real relationship between ideas.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a difficult situation.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain one cause with “because of...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Show what one group could not do.', mode: 'Individual' },
        { question: 'Sentence 4 — Contrast two groups with “while...”.', mode: 'Pair' },
        { question: 'Sentence 5 — State what one group considered most important.', mode: 'Pair' },
        { question: 'Sentence 6 — Report an objection with “asked why...”.', mode: 'Pair' },
      ],
    },
  ],
};
