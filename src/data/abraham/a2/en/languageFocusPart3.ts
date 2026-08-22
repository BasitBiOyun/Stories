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
      type: 'matching',
      title: 'Set the Scene, Then Move the Story',
      instructions: 'Match each Chapter 6 expression with its language function.',
      question: 'How does the chapter introduce things in a scene and connect one past event to the next?',
      matchingPairs: [
        { left: 'There was a big festival soon', right: 'introduces one thing or event in the scene' },
        { left: 'There were plates of food in front of them', right: 'introduces more than one thing in the scene' },
        { left: 'When the town was empty', right: 'gives the past situation that makes the next action possible' },
        { left: 'he went into the big house', right: 'states the action that follows that situation' },
      ],
      correctAnswer: {
        'There was a big festival soon': 'introduces one thing or event in the scene',
        'There were plates of food in front of them': 'introduces more than one thing in the scene',
        'When the town was empty': 'gives the past situation that makes the next action possible',
        'he went into the big house': 'states the action that follows that situation',
      },
      explanation: 'Use “There was ...” for one thing and “There were ...” for more than one. “When + past simple” can introduce the situation or event before another past action.',
      feedback: {
        correct: 'Correct. You used scene-setting language and connected the past events.',
        incorrect: 'First separate singular “There was” from plural “There were”. Then connect the “When ...” situation with the action after it.',
      },
    },
    {
      id: 'abraham-a2-language-6-action-in-progress-and-sequence',
      type: 'matching',
      title: 'Questions, Change and Action Sequence',
      instructions: 'Match each expression from the idol-house scene with its language job.',
      question: 'How does Chapter 6 ask about an action, describe a change and show actions developing in sequence?',
      matchingPairs: [
        { left: 'Why don’t you eat the food?', right: 'asks why an expected action is not happening' },
        { left: 'It is getting cold', right: 'describes a change happening at that moment' },
        { left: 'began to break the stone gods', right: 'shows the start of an action' },
        { left: 'one after another', right: 'shows repeated actions happening in sequence' },
      ],
      correctAnswer: {
        'Why don’t you eat the food?': 'asks why an expected action is not happening',
        'It is getting cold': 'describes a change happening at that moment',
        'began to break the stone gods': 'shows the start of an action',
        'one after another': 'shows repeated actions happening in sequence',
      },
      explanation: '“Why don’t you ...?” asks about an action that is not happening here. “Is getting ...” describes a change in progress, “begin to + verb” marks the start of an action, and “one after another” organizes repeated actions.',
      feedback: {
        correct: 'Good. You identified the question, the changing situation, the start of an action and the sequence marker.',
        incorrect: 'Look for the question form first, then the changing situation, then the expression that begins an action and the phrase that orders repeated actions.',
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
      feedback: {
        correct: 'Keep the sequence clear and use each pattern for its real function.',
        incorrect: '',
      },
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
