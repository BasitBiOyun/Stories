import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 9 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'adam-b1-language-9-time-change-continuation',
      type: 'matching',
      title: 'Time, Change, and Continuation',
      instructions: 'Match each Chapter 9 expression with the relationship it builds in the narrative.',
      question: 'How does the chapter show when events happen, when a role changes, and when an action continues?',
      matchingPairs: [
        { left: 'At that time', right: 'locates a situation at a particular stage in the past' },
        { left: 'After a period of time, when a community came out', right: 'connects a later event with a time clause' },
        { left: 'Adam became the first Messenger', right: 'uses “became” to show a change of role or state' },
        { left: 'Allah never stopped sending messengers and sacred texts', right: 'uses “never stopped + -ing” to show continuation over time' },
      ],
      correctAnswer: {
        'At that time': 'locates a situation at a particular stage in the past',
        'After a period of time, when a community came out': 'connects a later event with a time clause',
        'Adam became the first Messenger': 'uses “became” to show a change of role or state',
        'Allah never stopped sending messengers and sacred texts': 'uses “never stopped + -ing” to show continuation over time',
      },
      explanation: 'Chapter 9 organizes its ideas with time expressions, a change-of-state verb, and a continuation pattern. Together they help the reader follow development across time rather than read isolated facts.',
      feedback: {
        correct: 'Correct. You identified time reference, later sequence, change of role, and continuation.',
        incorrect: 'Ask whether the expression locates time, introduces a later stage, marks a new state, or shows that an action continued.',
      },
    },
    {
      id: 'adam-b1-language-9-teaching-purpose-direction',
      type: 'matching',
      title: 'Teaching, Direction, and Purpose',
      instructions: 'Match each pattern with its communicative function.',
      question: 'How does Chapter 9 express teaching, directing people, and acting for a purpose?',
      matchingPairs: [
        { left: 'started teaching people to live righteously and act honestly', right: 'uses “start + -ing” and “teach + person + to + verb” to introduce ongoing instruction' },
        { left: 'taught their children to pray only to Allah and be aware of Iblis', right: 'uses “teach + person + to + verb” to express guidance about what someone should do' },
        { left: 'sent many other messengers to show people the right path', right: 'uses “to + verb” after an action to express purpose' },
        { left: 'wanted to make people keep Allah in their minds', right: 'uses “want to + verb” and “make + person + base verb” to express intention and influence' },
      ],
      correctAnswer: {
        'started teaching people to live righteously and act honestly': 'uses “start + -ing” and “teach + person + to + verb” to introduce ongoing instruction',
        'taught their children to pray only to Allah and be aware of Iblis': 'uses “teach + person + to + verb” to express guidance about what someone should do',
        'sent many other messengers to show people the right path': 'uses “to + verb” after an action to express purpose',
        'wanted to make people keep Allah in their minds': 'uses “want to + verb” and “make + person + base verb” to express intention and influence',
      },
      explanation: 'The chapter repeatedly uses teaching and purpose structures to show how one person guides another. The forms are useful beyond this story whenever we explain instruction, intention, or influence.',
      feedback: {
        correct: 'Good. You separated teaching, guidance, purpose, and intended influence.',
        incorrect: 'Look for who teaches whom, what action follows “to”, and where the sentence expresses intention or influence.',
      },
    },
    {
      id: 'adam-b1-language-9-connect-time-purpose-result',
      type: 'multiple-choice',
      title: 'Connect Time, Purpose, and Result',
      instructions: 'Choose the option that uses Chapter 9 relationships naturally in a new B1 context.',
      question: 'Which short passage clearly connects a later stage, a new role, purpose, and a general result?',
      options: [
        'After a few months, when the group became larger, Mira became its coordinator. She started teaching new members to use the system safely. She made a guide to help them work independently, because if people understand the process, they make fewer mistakes.',
        'After because Mira became to teaching, if the guide people fewer mistakes.',
        'Mira started coordinator when purpose and people make to safely because.',
      ],
      correctAnswer: 0,
      explanation: 'The first passage uses a time clause, “became” for a new role, “started teaching” for instruction, “to help” for purpose, and an if-clause for a general result. The ideas form a coherent B1 paragraph.',
      feedback: {
        correct: 'Correct. The paragraph connects time, role change, teaching, purpose, and result naturally.',
        incorrect: 'Choose the option where each structure has a clear job and the sentences build one connected situation.',
      },
    },
    {
      id: 'adam-b1-language-9-build-guidance-paragraph',
      type: 'reflection',
      title: 'Build a Guidance Paragraph',
      instructions: 'Write or say four connected B1 sentences about someone who begins guiding a group. Use at least four Chapter 9 patterns.',
      question: 'Can you use the chapter’s language to show time, a new role, teaching, purpose, continuation, and a general result in a new context?',
      correctAnswer: null,
      explanation: 'A strong response may use “after ... / when ...”, “became ...”, “started teaching ... to ...”, “never stopped + -ing”, “to + verb” for purpose, “wanted to ...”, “make + person + base verb”, or “if + present, present” for a general result.',
      feedback: {
        correct: 'Keep the four sentences connected so the role change, teaching, purpose, and result form one coherent paragraph.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Use “after ...” or “when ...” and “became” to introduce a new stage or role.', mode: 'Individual' },
        { question: 'Sentence 2 — Use “started teaching ... to ...” to explain what guidance began.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a purpose with “to + verb” or an intention with “wanted to ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add either continuation with “never stopped + -ing” or a general result with “if + present, present”.', mode: 'Pair' },
      ],
    },
  ],
};
