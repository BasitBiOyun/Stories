import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific B1 Language Focus work for Abraham.
 * Activities are derived from the actual chapter language and do not duplicate
 * the chapter comprehension role of Quick Challenge.
 */
export const abrahamB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-b1-language-1-time-frame',
      type: 'matching',
      title: 'Building the Time Frame',
      instructions: 'Match each Chapter 1 expression with the time relationship it creates.',
      question: 'How does the chapter place Abraham’s childhood inside a much earlier historical setting?',
      matchingPairs: [
        { left: 'A very long time ago', right: 'opens a distant past narrative' },
        { left: 'about 4,000 years ago', right: 'adds a more specific past-time reference' },
        { left: 'when he was at a very young age', right: 'links an event to a stage of his life' },
        { left: 'Since his childhood', right: 'connects a state with its starting point in childhood' },
      ],
      correctAnswer: {
        'A very long time ago': 'opens a distant past narrative',
        'about 4,000 years ago': 'adds a more specific past-time reference',
        'when he was at a very young age': 'links an event to a stage of his life',
        'Since his childhood': 'connects a state with its starting point in childhood',
      },
      explanation: 'The chapter does more than use past tense. It layers broad historical time, a more exact reference, a life-stage clause, and a starting-point expression to organise the narrative.',
      feedback: {
        correct: 'Good. You identified four different ways of locating information in time.',
        incorrect: 'Ask whether the expression opens the distant past, gives a date-like reference, links an event to a life stage, or marks a starting point.',
      },
    },
    {
      id: 'abraham-b1-language-1-ability-and-possibility',
      type: 'matching',
      title: 'Ability, Possibility, and Reasoning',
      instructions: 'Match each structure with the meaning it carries in Chapter 1.',
      question: 'How does the chapter use “could” to express different kinds of possibility and ability?',
      matchingPairs: [
        { left: 'He could not understand how ...', right: 'shows difficulty accepting or making sense of an idea' },
        { left: 'how an intelligent person could make a statue ...', right: 'presents a possible action inside an indirect question' },
        { left: 'which could help or harm him', right: 'describes an ability or power attributed to something' },
        { left: 'They could not even move ... on their own', right: 'expresses absence of independent ability' },
      ],
      correctAnswer: {
        'He could not understand how ...': 'shows difficulty accepting or making sense of an idea',
        'how an intelligent person could make a statue ...': 'presents a possible action inside an indirect question',
        'which could help or harm him': 'describes an ability or power attributed to something',
        'They could not even move ... on their own': 'expresses absence of independent ability',
      },
      explanation: 'The same modal form contributes different meanings depending on the surrounding clause: understanding, possibility, attributed power, or inability.',
      feedback: {
        correct: 'Correct. You interpreted “could” from context rather than treating it as one fixed meaning.',
        incorrect: 'Read the whole clause around “could” and ask what kind of meaning the speaker is building there.',
      },
    },
    {
      id: 'abraham-b1-language-1-describing-and-linking',
      type: 'matching',
      title: 'Adding Detail Without Starting a New Sentence',
      instructions: 'Match each Chapter 1 structure with the detail it adds.',
      question: 'How does the chapter pack extra information into connected noun phrases and clauses?',
      matchingPairs: [
        { left: 'a boy named Abraham', right: 'identifies the boy by name' },
        { left: 'statues made from wood and stone', right: 'describes what the statues were made from' },
        { left: 'a god which could help or harm him', right: 'adds an attributed ability to the noun “god”' },
        { left: 'a large house of worship full of idols', right: 'adds a descriptive state to the place' },
      ],
      correctAnswer: {
        'a boy named Abraham': 'identifies the boy by name',
        'statues made from wood and stone': 'describes what the statues were made from',
        'a god which could help or harm him': 'adds an attributed ability to the noun “god”',
        'a large house of worship full of idols': 'adds a descriptive state to the place',
      },
      explanation: 'B1 writing becomes more compact and connected when extra detail is attached directly to a noun instead of being broken into several short sentences.',
      feedback: {
        correct: 'Good. You saw how the chapter expands noun phrases and clauses to make description more precise.',
        incorrect: 'Find the main noun first, then ask what extra information the rest of the phrase adds about it.',
      },
    },
    {
      id: 'abraham-b1-language-1-connected-observation',
      type: 'reflection',
      title: 'Build a Connected Observation',
      instructions: 'Write or say four connected B1 sentences about a person noticing something surprising in a new place. Use at least three Chapter 1 language patterns without retelling the story.',
      question: 'Can you combine time framing, an indirect “how” idea, ability/possibility, and added description in one short coherent response?',
      correctAnswer: null,
      explanation: 'A strong response can open with a past-time expression, describe a person or object with added detail, use “could/could not” in context, and include a sentence such as “She could not understand how ...”.',
      feedback: {
        correct: 'Keep all four sentences focused on the same situation and make the language relationships clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the time with “a long time ago”, “when ...”, or another suitable past-time frame.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe a person, place, or object with an added phrase such as “named ...”, “made from ...”, or “full of ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “could” or “could not” to express ability, possibility, or difficulty understanding.', mode: 'Individual' },
        { question: 'Sentence 4 — Add an indirect idea with “could not understand how ...” and connect it to the same situation.', mode: 'Pair' },
      ],
    },
  ],
};
