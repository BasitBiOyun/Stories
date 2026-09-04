import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Abraham A2 Language Focus work.
 * Each chapter is grounded in its own story language and kept separate from comprehension retrieval.
 */
export const abrahamA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-a2-language-6-intention-plan-and-secrecy',
      type: 'matching',
      title: 'Intention, Plan and Secrecy',
      instructions: 'Match each Chapter 6 expression with what it does in the story.',
      question: 'How does the chapter express an intention, a plan and keeping that plan secret?',
      matchingPairs: [
        { left: 'wanted to show his people', right: 'expresses what Abraham intended to do' },
        { left: 'made a plan to break all their stone gods', right: 'expresses a planned future action in the story' },
        { left: 'did not tell anyone about his plan', right: 'says that no other person was told' },
        { left: 'got an axe and waited', right: 'shows preparation before the next action' },
      ],
      correctAnswer: {
        'wanted to show his people': 'expresses what Abraham intended to do',
        'made a plan to break all their stone gods': 'expresses a planned future action in the story',
        'did not tell anyone about his plan': 'says that no other person was told',
        'got an axe and waited': 'shows preparation before the next action',
      },
      explanation: 'Chapter 6 uses “want to + verb” for intention and “make a plan to + verb” for a plan. “Did not tell anyone” is a past negative sentence with “anyone”, and the next action shows preparation.',
      feedback: {
        correct: 'Good. You separated intention, planning, secrecy and preparation.',
        incorrect: 'Ask whether each expression tells what Abraham wanted, planned, kept secret, or did to prepare.',
      },
    },
    {
      id: 'abraham-a2-language-6-setting-and-when',
      type: 'drag-drop',
      title: 'Set the Scene, Then Move the Story',
      instructions: 'Sort the Chapter 6 expressions by the language job they perform.',
      question: 'Which expressions set the scene, and which connect a situation to the next action?',
      dragDropGroups: [
        { group: 'Scene setting', items: ['There was a big festival soon', 'There were plates of food in front of them'] },
        { group: 'Situation and next action', items: ['When the town was empty', 'he went into the big house'] },
      ],
      correctAnswer: {
        'Scene setting': ['There was a big festival soon', 'There were plates of food in front of them'],
        'Situation and next action': ['When the town was empty', 'he went into the big house'],
      },
      explanation: '“There was ...” introduces one thing and “There were ...” introduces more than one. “When + past simple” can give the situation before the next past action.',
      feedback: {
        correct: 'Correct. You separated scene-setting language from the situation-action link.',
        incorrect: 'Look first for “There was/were”, then for the “When ...” situation and the action that follows.',
      },
    },
    {
      id: 'abraham-a2-language-6-action-in-progress-and-sequence',
      type: 'multiple-choice',
      title: 'A Change in Progress',
      instructions: 'Choose the expression that describes a change happening at that moment.',
      question: 'Which Chapter 6 expression uses “get + adjective” in the continuous form to show change?',
      options: ['It is getting cold.', 'Why don’t you eat the food?', 'Abraham began to break the stone gods.'],
      correctAnswer: 0,
      explanation: '“It is getting cold” describes a change in progress. The chapter also uses “began to + verb” for the start of an action and “one after another” for sequence.',
      feedback: {
        correct: 'Correct. “Is getting cold” describes a change happening at that moment.',
        incorrect: 'Choose the sentence that describes something gradually changing.',
      },
    },
    {
      id: 'abraham-a2-language-6-plan-production',
      type: 'reflection',
      title: 'Say It: A Simple Plan and Sequence',
      instructions: 'Write or say four or five short A2 sentences about a simple plan. Use at least four Chapter 6 language patterns below. Do not explain why Abraham left the largest idol unbroken.',
      question: 'Can you express an intention, set a scene and tell a short sequence clearly?',
      correctAnswer: null,
      explanation: 'A strong response can use “wanted to ...”, “made a plan to ...”, “There was/were ...”, “When ...”, “began to ...”, and a sequence expression such as “one after another” or “In the end”.',
      feedback: { correct: 'Keep the sequence clear and use each pattern for its real function.', incorrect: '' },
      discussionPrompts: [
        { question: 'Intention — Begin with “I wanted to ...”', mode: 'Individual' },
        { question: 'Plan — Add “I made a plan to ...”', mode: 'Individual' },
        { question: 'Setting/time — Use “There was/were ...” or “When ...”', mode: 'Individual' },
        { question: 'Action — Add “I began to ...”', mode: 'Individual' },
        { question: 'Sequence/result — Finish with “one after another” or “In the end ...”', mode: 'Pair' },
      ],
    },
  ],
};