import type { Exercise } from '../../../../types';

/**
 * Manually authored continuation of Adam A2 Language Focus work.
 * Each chapter is read before authoring; activities practise language that is
 * genuinely visible and useful in that chapter instead of repeating comprehension.
 */
export const adamA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'adam-a2-language-3-comparing-value',
      type: 'matching',
      title: 'Comparing Importance and Value',
      instructions: 'Match each Chapter 3 comparison with what it compares.',
      question: 'How does the chapter use comparative language to show Iblis’s judgement and the value of knowledge?',
      matchingPairs: [
        { left: 'better than Adam', right: 'compares two people in Iblis’s judgement' },
        { left: 'more important than Adam', right: 'compares importance' },
        { left: 'more valuable than Adam', right: 'compares value' },
        { left: 'made Adam more valuable', right: 'shows a change in value' },
      ],
      correctAnswer: {
        'better than Adam': 'compares two people in Iblis’s judgement',
        'more important than Adam': 'compares importance',
        'more valuable than Adam': 'compares value',
        'made Adam more valuable': 'shows a change in value',
      },
      explanation: 'Chapter 3 repeatedly uses comparative forms such as “better than”, “more important than” and “more valuable”. It later uses “made Adam more valuable” to explain how useful knowledge changes the judgement of value.',
      feedback: {
        correct: 'Good. You identified comparison and change in value as two different language jobs.',
        incorrect: 'Return to the paragraphs about Iblis’s judgement and useful knowledge. Look for “than” and “more valuable”.',
      },
    },
    {
      id: 'adam-a2-language-3-reporting-beliefs',
      type: 'matching',
      title: 'What Someone Thinks and Believes',
      instructions: 'Match each Chapter 3 chunk with the job it does.',
      question: 'How does the chapter report Iblis’s ideas without presenting them as facts?',
      matchingPairs: [
        { left: 'Iblis said, “I am better than Adam.”', right: 'reports his own words' },
        { left: 'He thought he was more important', right: 'reports a thought or opinion' },
        { left: 'He believed his origin was better', right: 'reports a belief' },
        { left: 'Iblis couldn’t see that Adam had perfect knowledge', right: 'shows that he failed to understand something' },
      ],
      correctAnswer: {
        'Iblis said, “I am better than Adam.”': 'reports his own words',
        'He thought he was more important': 'reports a thought or opinion',
        'He believed his origin was better': 'reports a belief',
        'Iblis couldn’t see that Adam had perfect knowledge': 'shows that he failed to understand something',
      },
      explanation: 'The chapter separates a person’s view from the narrator’s message through verbs such as “said”, “thought” and “believed”. “Couldn’t see that ...” adds the idea that Iblis failed to understand an important truth.',
      feedback: {
        correct: 'Correct. You connected speaking, thinking, believing and failing to understand with their functions.',
        incorrect: 'Read each sentence and ask: Is he speaking, thinking, believing, or failing to understand?',
      },
    },
    {
      id: 'adam-a2-language-3-cause-result',
      type: 'matching',
      title: 'Cause, Result and Ability',
      instructions: 'Match each Chapter 3 pattern with the meaning relationship it creates.',
      question: 'How does the chapter explain why useful knowledge matters?',
      matchingPairs: [
        { left: 'This knowledge made Adam more valuable', right: 'shows a result or change' },
        { left: 'Useful knowledge makes people great', right: 'shows what something can cause' },
        { left: 'because with this knowledge humans can do good', right: 'gives a reason' },
        { left: 'humans can do good and stop bad', right: 'describes ability or possibility' },
      ],
      correctAnswer: {
        'This knowledge made Adam more valuable': 'shows a result or change',
        'Useful knowledge makes people great': 'shows what something can cause',
        'because with this knowledge humans can do good': 'gives a reason',
        'humans can do good and stop bad': 'describes ability or possibility',
      },
      explanation: 'The chapter uses “make + object + adjective” for a result, “because” for a reason, and “can + verb” for what useful knowledge enables people to do.',
      feedback: {
        correct: 'Good. You followed the chapter from cause to result and then to ability.',
        incorrect: 'Look for “made/makes”, “because” and “can” and decide what job each form does.',
      },
    },
    {
      id: 'adam-a2-language-3-explain-the-mistake',
      type: 'reflection',
      title: 'Say It: Explain the Wrong Judgement',
      instructions: 'Give three or four short A2 sentences using Chapter 3 language. Explain the judgement, the mistake and the value of useful knowledge.',
      question: 'Can you explain what Iblis believed and why the chapter says useful knowledge is more important?',
      correctAnswer: null,
      explanation: 'A strong A2 response reports Iblis’s belief, uses one comparison, contrasts it with the chapter’s message, and gives a reason or result connected to useful knowledge.',
      feedback: {
        correct: 'Use Chapter 3 language to report a belief, compare ideas, and explain a reason or result.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Report a belief: “Iblis thought/believed that ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Add his comparison: “He thought he was ... than Adam.”', mode: 'Individual' },
        { question: 'Sentence 3 — Contrast the message: “But useful knowledge ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Give a reason or result with “because”, “can”, or “made”.', mode: 'Pair' },
      ],
    },
  ],
};
