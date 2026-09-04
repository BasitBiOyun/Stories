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
  2: [
    {
      id: 'adam-b1-language-2-cause-and-result',
      type: 'matching',
      title: 'Building Cause and Result',
      instructions: 'Match each Chapter 2 connector with the relationship it creates.',
      question: 'How does the chapter turn one idea into a reason or result without using separate, disconnected sentences?',
      matchingPairs: [
        { left: 'That’s why humans have different skin colors.', right: 'points back to a reason already given' },
        { left: '..., so the children of Adam are ...', right: 'introduces a result that follows from the previous clause' },
        { left: 'from a handful of dust from different lands', right: 'adds source/origin detail inside the same idea' },
      ],
      correctAnswer: {
        'That’s why humans have different skin colors.': 'points back to a reason already given',
        '..., so the children of Adam are ...': 'introduces a result that follows from the previous clause',
        'from a handful of dust from different lands': 'adds source/origin detail inside the same idea',
      },
      explanation: 'Chapter 2 uses “that’s why” and “so” to make cause-result relationships explicit, while repeated “from” phrases add origin details without breaking the sentence apart.',
      feedback: {
        correct: 'Good. You identified how the chapter links reasons, results, and origin details.',
        incorrect: 'Ask whether the expression points backward to a reason, forward to a result, or adds where something came from.',
      },
    },
    {
      id: 'adam-b1-language-2-report-and-command',
      type: 'matching',
      title: 'Reporting and Giving a Command',
      instructions: 'Match each form with its communicative job in Chapter 2.',
      question: 'How does the chapter move from reporting a statement to quoting an instruction?',
      matchingPairs: [
        { left: 'Prophet Muhammad said that ...', right: 'reports information from a named speaker' },
        { left: 'Allah told His angels ...', right: 'introduces words directed to specific listeners' },
        { left: 'After I have created Adam and given him life and knowledge, ...', right: 'sets a condition in time that must be completed before the next action' },
        { left: 'show respect to him', right: 'gives a direct instruction' },
      ],
      correctAnswer: {
        'Prophet Muhammad said that ...': 'reports information from a named speaker',
        'Allah told His angels ...': 'introduces words directed to specific listeners',
        'After I have created Adam and given him life and knowledge, ...': 'sets a condition in time that must be completed before the next action',
        'show respect to him': 'gives a direct instruction',
      },
      explanation: 'The chapter combines reported speech with direct quotation. Inside the quotation, “after” establishes the earlier action and the imperative gives the instruction that follows.',
      feedback: {
        correct: 'Correct. You tracked both the reporting frame and the instruction inside it.',
        incorrect: 'Separate the speaker-reporting frame from the exact instruction inside the quotation.',
      },
    },
    {
      id: 'adam-b1-language-2-purpose-sequence-comparison',
      type: 'matching',
      title: 'Purpose, Sequence, and Comparison',
      instructions: 'Match the Chapter 2 pattern with the relationship it expresses.',
      question: 'How does the second paragraph explain purpose, move the story forward, and compare amounts?',
      matchingPairs: [
        { left: 'life and intellect to learn and understand', right: 'expresses the purpose connected with what was given' },
        { left: 'Later, He taught him ...', right: 'moves the account to a subsequent stage' },
        { left: 'more knowledge than the angels', right: 'compares the amount or degree of knowledge' },
      ],
      correctAnswer: {
        'life and intellect to learn and understand': 'expresses the purpose connected with what was given',
        'Later, He taught him ...': 'moves the account to a subsequent stage',
        'more knowledge than the angels': 'compares the amount or degree of knowledge',
      },
      explanation: 'The infinitive can express purpose, “later” organizes the sequence, and “more ... than” creates a comparative relationship. Together they make the paragraph more connected and precise.',
      feedback: {
        correct: 'Good. You identified three different relationships built by short language patterns.',
        incorrect: 'Ask: why was something given, when did the next step happen, and what two things are being compared?',
      },
    },
    {
      id: 'adam-b1-language-2-connected-explanation',
      type: 'reflection',
      title: 'Build a Connected Explanation',
      instructions: 'Write or say four connected sentences about a new learning situation. Use at least three Chapter 2 patterns without retelling the chapter.',
      question: 'Can you explain a reason and result, report what someone said, show purpose, and make a comparison in one short coherent response?',
      correctAnswer: null,
      explanation: 'For example, you can introduce what a teacher said, explain why a learner received a tool, use “so” or “that’s why” for the result, and finish with a “more ... than” comparison.',
      feedback: {
        correct: 'Keep the ideas connected so each sentence develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Report information with “said that” or “told ...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Give a reason and result using “so” or “that’s why”.', mode: 'Individual' },
        { question: 'Sentence 3 — Express purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a comparison with “more ... than”.', mode: 'Pair' },
      ],
    },
  ],
};
