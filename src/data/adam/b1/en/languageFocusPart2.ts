import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Content is derived from the actual chapter language and kept separate from
 * story-comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'adam-b1-language-3-reporting-beliefs',
      type: 'matching',
      title: 'Reporting Beliefs and Judgments',
      instructions: 'Match each Chapter 3 expression with the kind of judgment it reports.',
      question: 'How does the narrator show what different characters think without presenting those thoughts as the narrator’s own voice?',
      matchingPairs: [
        { left: 'The angels thought that Adam was amazing.', right: 'reports a positive judgment held by a group' },
        { left: 'Iblis thought that Adam was an unimportant being.', right: 'reports a negative judgment held by one character' },
        { left: 'he believed his origin was superior', right: 'gives the belief used to support a claim' },
      ],
      correctAnswer: {
        'The angels thought that Adam was amazing.': 'reports a positive judgment held by a group',
        'Iblis thought that Adam was an unimportant being.': 'reports a negative judgment held by one character',
        'he believed his origin was superior': 'gives the belief used to support a claim',
      },
      explanation: 'Patterns such as “thought that” and “believed” let a narrator report a character’s viewpoint while keeping that viewpoint separate from the narrator’s own statement.',
      feedback: {
        correct: 'Good. You separated reported viewpoint from narrator voice.',
        incorrect: 'Ask whose judgment each clause belongs to: the narrator, the angels, or Iblis?',
      },
    },
    {
      id: 'adam-b1-language-3-contrast-and-comparison',
      type: 'matching',
      title: 'Contrast and Comparison',
      instructions: 'Match each Chapter 3 pattern with the relationship it builds.',
      question: 'How does the chapter place opposing judgments side by side and compare value?',
      matchingPairs: [
        { left: 'They all admired him, but Iblis didn’t think so.', right: 'contrasts one response with an opposing response' },
        { left: 'I am better than Adam.', right: 'makes a direct comparison of value or status' },
        { left: 'more important and more valuable than Adam', right: 'intensifies a comparative judgment across two qualities' },
        { left: 'However, in the sight of Allah, ...', right: 'signals a strong contrast with the previous viewpoint' },
      ],
      correctAnswer: {
        'They all admired him, but Iblis didn’t think so.': 'contrasts one response with an opposing response',
        'I am better than Adam.': 'makes a direct comparison of value or status',
        'more important and more valuable than Adam': 'intensifies a comparative judgment across two qualities',
        'However, in the sight of Allah, ...': 'signals a strong contrast with the previous viewpoint',
      },
      explanation: '“But” and “however” organize contrast, while “better than” and “more ... than” compare people or qualities. Together they help the paragraph present competing judgments clearly.',
      feedback: {
        correct: 'Correct. You identified both contrast markers and comparative language.',
        incorrect: 'First decide whether the expression contrasts two ideas or compares two values.',
      },
    },
    {
      id: 'adam-b1-language-3-reason-and-result',
      type: 'matching',
      title: 'Reason, Limitation, and Result',
      instructions: 'Match each structure with the relationship it expresses in the chapter.',
      question: 'How does the chapter explain why a judgment was made, show a limitation, and describe a result?',
      matchingPairs: [
        { left: 'because he believed his origin was superior', right: 'gives the reason behind a judgment' },
        { left: 'He couldn’t see and accept that ...', right: 'shows an inability to recognize or accept an idea' },
        { left: 'which made him more valuable', right: 'adds the result or effect of the preceding information' },
        { left: 'greatness did not come from race, color, or group', right: 'states what cannot be treated as the source of a quality' },
      ],
      correctAnswer: {
        'because he believed his origin was superior': 'gives the reason behind a judgment',
        'He couldn’t see and accept that ...': 'shows an inability to recognize or accept an idea',
        'which made him more valuable': 'adds the result or effect of the preceding information',
        'greatness did not come from race, color, or group': 'states what cannot be treated as the source of a quality',
      },
      explanation: 'The chapter links ideas through reason (“because”), limitation (“couldn’t”), result (“which made ...”), and source/origin language (“come from”). These relationships make the argument more connected than a list of separate statements.',
      feedback: {
        correct: 'Good. You tracked how one clause explains or develops another.',
        incorrect: 'Ask whether the clause answers why, shows inability, gives a result, or identifies a source.',
      },
    },
    {
      id: 'adam-b1-language-3-build-a-balanced-judgment',
      type: 'reflection',
      title: 'Build a Balanced Judgment',
      instructions: 'Write or say four connected B1 sentences about a new situation involving two different opinions. Use at least three Chapter 3 language patterns.',
      question: 'Can you report two viewpoints, give a reason, compare them, and then signal your contrasting conclusion without retelling Chapter 3?',
      correctAnswer: null,
      explanation: 'A strong response can use “thought that” or “believed”, add a reason with “because”, make a comparison with “better/more ... than”, and introduce a contrasting conclusion with “but” or “however”.',
      feedback: {
        correct: 'Keep each sentence connected to the same situation and make the contrast clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Report one person’s view with “thought that” or “believed ...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Give the reason using “because ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a comparison with “better than” or “more ... than”.', mode: 'Individual' },
        { question: 'Sentence 4 — Introduce a different conclusion with “but” or “however”.', mode: 'Pair' },
      ],
    },
  ],
};
