import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Each chapter is read before authoring; activities stay grounded in the chapter
 * and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'adam-a2-language-4-wants-plans',
      type: 'matching',
      title: 'Wants, Plans and Other People',
      instructions: 'Match each Chapter 4 sentence with the language job it does.',
      question: 'How does the chapter describe what Iblis wanted or did not want another person to experience?',
      matchingPairs: [
        { left: 'He didn’t want Allah to be nice with Adam', right: 'says what he did not want another person to do' },
        { left: 'He wanted Adam to lose Allah’s love', right: 'says what he wanted another person to experience' },
        { left: 'He waited for a chance', right: 'describes waiting for an opportunity' },
        { left: 'just like himself', right: 'connects Adam’s possible situation with Iblis’s own situation' },
      ],
      correctAnswer: {
        'He didn’t want Allah to be nice with Adam': 'says what he did not want another person to do',
        'He wanted Adam to lose Allah’s love': 'says what he wanted another person to experience',
        'He waited for a chance': 'describes waiting for an opportunity',
        'just like himself': 'connects Adam’s possible situation with Iblis’s own situation',
      },
      explanation: 'Chapter 4 uses “want + person + to + verb” to describe what Iblis wanted another person to do or experience. The negative form “didn’t want ... to ...” gives the opposite meaning.',
      feedback: {
        correct: 'Good. You identified desire, negative desire, opportunity and comparison.',
        incorrect: 'Return to the first paragraph and look closely at “didn’t want ... to ...”, “wanted Adam to ...”, “chance” and “just like”.',
      },
    },
    {
      id: 'adam-a2-language-4-telling-warning',
      type: 'matching',
      title: 'Telling Someone What to Do — or Not Do',
      instructions: 'Match each Chapter 4 pattern with its communicative function.',
      question: 'How does the chapter give a warning and a prohibition?',
      matchingPairs: [
        { left: 'Allah told Adam to be careful about Iblis', right: 'tells someone to do something' },
        { left: 'Allah told Adam and Eve not to go near one tree', right: 'tells someone not to do something' },
        { left: 'tell + person + to + verb', right: 'pattern for an instruction or advice' },
        { left: 'tell + person + not to + verb', right: 'pattern for a negative instruction or warning' },
      ],
      correctAnswer: {
        'Allah told Adam to be careful about Iblis': 'tells someone to do something',
        'Allah told Adam and Eve not to go near one tree': 'tells someone not to do something',
        'tell + person + to + verb': 'pattern for an instruction or advice',
        'tell + person + not to + verb': 'pattern for a negative instruction or warning',
      },
      explanation: 'The chapter gives both a positive warning and a negative instruction. “Told + person + to ...” asks for an action; adding “not” before “to” tells the person to avoid an action.',
      feedback: {
        correct: 'Correct. You separated positive and negative instructions.',
        incorrect: 'Compare the sentence about being careful with the sentence about the tree. Look for “to” and “not to”.',
      },
    },
    {
      id: 'adam-a2-language-4-beginnings-comparison',
      type: 'matching',
      title: 'New Situations and Comparison',
      instructions: 'Match each Chapter 4 expression with what it adds to the story.',
      question: 'How does the chapter show that a new feeling or situation begins and describe Paradise?',
      matchingPairs: [
        { left: 'Adam started to feel lonely', right: 'shows the beginning of a feeling' },
        { left: 'They started to live together', right: 'shows the beginning of a new situation' },
        { left: 'more wonderful than we can imagine', right: 'makes a comparison about how wonderful Paradise was' },
        { left: 'But Allah had only one warning', right: 'introduces a contrast after the positive description' },
      ],
      correctAnswer: {
        'Adam started to feel lonely': 'shows the beginning of a feeling',
        'They started to live together': 'shows the beginning of a new situation',
        'more wonderful than we can imagine': 'makes a comparison about how wonderful Paradise was',
        'But Allah had only one warning': 'introduces a contrast after the positive description',
      },
      explanation: '“Started to + verb” marks the beginning of a feeling or action. “More ... than ...” makes a comparison, while “but” changes direction and introduces the warning.',
      feedback: {
        correct: 'Good. You followed the move from a new situation to description and then contrast.',
        incorrect: 'Look for “started to”, “more ... than” and “but” in the second paragraph.',
      },
    },
    {
      id: 'adam-a2-language-4-give-a-warning',
      type: 'reflection',
      title: 'Say It: Give a Clear Warning',
      instructions: 'Write or say three or four short A2 sentences using Chapter 4 language. Describe a situation, a change and a warning.',
      question: 'Can you use the chapter’s language to explain what someone wants and then give clear advice or a warning?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses one “want + person + to” idea, one “started to” sentence, and a positive or negative instruction with “tell + person + (not) to”.',
      feedback: {
        correct: 'Use the sentence starters to connect desire, change and warning clearly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Desire: “He wanted ... to ...” or “He didn’t want ... to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — New situation: “... started to ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Advice: “... told ... to ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Warning: “... told ... not to ...”', mode: 'Pair' },
      ],
    },
  ],
};
