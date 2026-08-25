import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific B1 Language Focus work.
 * Activities are derived from the actual chapter language and are designed to
 * build contextual grammaring rather than repeat story comprehension.
 */
export const adamB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-b1-language-1-source-and-story-time',
      type: 'matching',
      title: 'Source Voice and Story Time',
      instructions: 'Match each Chapter 1 expression with the time perspective it creates.',
      question: 'How does the chapter move between presenting the story as a source and narrating past events?',
      matchingPairs: [
        { left: 'The Holy Qur’an tells his tale', right: 'presents what the source does generally' },
        { left: 'These surahs describe Adam’s tale', right: 'presents information about the source in the present' },
        { left: 'Allah created the sky and the earth', right: 'narrates a completed event in the past' },
        { left: 'the angels began to wait', right: 'moves the past narrative to the next event' },
      ],
      correctAnswer: {
        'The Holy Qur’an tells his tale': 'presents what the source does generally',
        'These surahs describe Adam’s tale': 'presents information about the source in the present',
        'Allah created the sky and the earth': 'narrates a completed event in the past',
        'the angels began to wait': 'moves the past narrative to the next event',
      },
      explanation: 'Chapter 1 uses present forms when it talks about what the Qur’an and its surahs do, then switches to past forms when the story itself begins.',
      feedback: {
        correct: 'Good. You distinguished source commentary from past narration.',
        incorrect: 'Ask whether each sentence describes the source now or tells an event that happened in the story.',
      },
    },
    {
      id: 'adam-b1-language-1-future-from-the-past',
      type: 'matching',
      title: 'Looking Forward from a Past Moment',
      instructions: 'Match each expression with the meaning it carries in the chapter.',
      question: 'How do “was going to” and “would” let the narrator look forward from a past point in the story?',
      matchingPairs: [
        { left: 'He was going to create a human', right: 'a plan announced from a past viewpoint' },
        { left: 'This ruler would live there for many years', right: 'a future situation viewed from the past' },
        { left: 'Allah decided to place a ruler on earth', right: 'a decision made before the future role begins' },
      ],
      correctAnswer: {
        'He was going to create a human': 'a plan announced from a past viewpoint',
        'This ruler would live there for many years': 'a future situation viewed from the past',
        'Allah decided to place a ruler on earth': 'a decision made before the future role begins',
      },
      explanation: 'The narrator is already telling a past story. “Was going to” and “would” therefore describe what was still in the future at that past moment.',
      feedback: {
        correct: 'Correct. You identified future meaning inside a past narrative.',
        incorrect: 'Imagine the narrator standing at the moment when the angels were told. Which actions had not happened yet?',
      },
    },
    {
      id: 'adam-b1-language-1-sequence-and-reporting',
      type: 'matching',
      title: 'Connecting and Reporting Ideas',
      instructions: 'Match each Chapter 1 structure with its communicative job.',
      question: 'How does the chapter connect events and report what was announced?',
      matchingPairs: [
        { left: 'After Allah created the sky and the earth, ...', right: 'places one completed event before another' },
        { left: 'He told the angels that ...', right: 'reports information given to someone' },
        { left: 'He said He decided to ...', right: 'reports a decision inside the narrative' },
        { left: 'began to wait with curiosity', right: 'shows the start of a continuing action or state' },
      ],
      correctAnswer: {
        'After Allah created the sky and the earth, ...': 'places one completed event before another',
        'He told the angels that ...': 'reports information given to someone',
        'He said He decided to ...': 'reports a decision inside the narrative',
        'began to wait with curiosity': 'shows the start of a continuing action or state',
      },
      explanation: 'B1 narration depends on relationships between clauses. “After” orders events, reporting verbs introduce information and decisions, and “began to” marks the start of an action or state.',
      feedback: {
        correct: 'Good. You connected each form with the relationship it creates.',
        incorrect: 'Read the surrounding clause and ask: sequence, reported information, reported decision, or beginning?',
      },
    },
    {
      id: 'adam-b1-language-1-build-a-connected-account',
      type: 'reflection',
      title: 'Build a Connected Account',
      instructions: 'Write or say four connected B1 sentences. Use at least three different Chapter 1 language patterns from this Language Focus.',
      question: 'Can you move from source information into past narration and then describe what was still going to happen?',
      correctAnswer: null,
      explanation: 'A strong response can begin with a present source statement, shift into past narration, order events with “after”, and use “was going to” or “would” for future-from-the-past meaning.',
      feedback: {
        correct: 'Keep the time perspective consistent and connect the ideas rather than writing four unrelated sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Present the source: “The Qur’an tells/describes ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Shift to the story: “After ..., Allah ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Report the announcement: “He told the angels that ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Look forward from that past moment using “was going to” or “would”.', mode: 'Pair' },
      ],
    },
  ],
};
