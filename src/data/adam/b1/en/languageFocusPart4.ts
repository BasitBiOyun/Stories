import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 5 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'adam-b1-language-5-beginning-state-role',
      type: 'matching',
      title: 'Beginning a State and Giving a Role',
      instructions: 'Match each Chapter 5 expression with the function it performs.',
      question: 'How does the chapter show a new feeling, a new activity, and the role of a person?',
      matchingPairs: [
        { left: 'he started to feel lonely', right: 'shows the beginning of a new state or feeling' },
        { left: 'They began living in Paradise', right: 'shows the beginning of an activity or situation' },
        { left: 'a wife called Eve', right: 'identifies a person by the name given to her' },
        { left: 'to be his companion', right: 'expresses the intended role or purpose' },
      ],
      correctAnswer: {
        'he started to feel lonely': 'shows the beginning of a new state or feeling',
        'They began living in Paradise': 'shows the beginning of an activity or situation',
        'a wife called Eve': 'identifies a person by the name given to her',
        'to be his companion': 'expresses the intended role or purpose',
      },
      explanation: 'The chapter uses “start to + verb” and “begin + -ing” to present beginnings. “Called + name” identifies a person, while “to be ...” can express the role or purpose intended for that person.',
      feedback: {
        correct: 'Correct. You separated beginning, identification, and intended role.',
        incorrect: 'Ask whether the phrase shows a beginning, names a person, or explains a role.',
      },
    },
    {
      id: 'adam-b1-language-5-comparison-and-restriction',
      type: 'matching',
      title: 'Comparison and a Negative Instruction',
      instructions: 'Match each structure with the relationship it expresses.',
      question: 'How does the chapter compare Paradise with human imagination and express the one restriction?',
      matchingPairs: [
        { left: 'more wonderful than we can imagine', right: 'compares one degree of quality with the limit of what people can imagine' },
        { left: 'we can imagine', right: 'expresses ability or possibility' },
        { left: 'asked them not to go near one tree', right: 'reports a negative instruction directed to other people' },
      ],
      correctAnswer: {
        'more wonderful than we can imagine': 'compares one degree of quality with the limit of what people can imagine',
        'we can imagine': 'expresses ability or possibility',
        'asked them not to go near one tree': 'reports a negative instruction directed to other people',
      },
      explanation: '“More ... than ...” builds a comparison, “can + verb” expresses ability or possibility, and “ask + object + not to + verb” reports a negative instruction or request.',
      feedback: {
        correct: 'Good. You identified comparison, ability, and negative instruction.',
        incorrect: 'Look for the part that compares, the modal that shows ability, and the pattern that reports what someone should not do.',
      },
    },
    {
      id: 'adam-b1-language-5-time-manner-condition',
      type: 'matching',
      title: 'Time, Manner, and Conditional Result',
      instructions: 'Match each Chapter 5 expression with the relationship it creates.',
      question: 'How does the paragraph connect the setting, the way an action is presented, and a claimed result?',
      matchingPairs: [
        { left: 'When Adam and Eve were happy in Paradise', right: 'sets the time or background for the next event' },
        { left: 'came near them pretending to be their friend', right: 'shows how the action was presented at the same time' },
        { left: 'if they ate from that one tree', right: 'introduces the condition in a claimed cause-result relationship' },
        { left: 'they would never die', right: 'gives the claimed result of that condition' },
      ],
      correctAnswer: {
        'When Adam and Eve were happy in Paradise': 'sets the time or background for the next event',
        'came near them pretending to be their friend': 'shows how the action was presented at the same time',
        'if they ate from that one tree': 'introduces the condition in a claimed cause-result relationship',
        'they would never die': 'gives the claimed result of that condition',
      },
      explanation: 'A “when” clause gives the background time. An -ing phrase such as “pretending ...” can show manner or a simultaneous action. “If + past ... would + verb” presents a conditional relationship here inside the reported claim.',
      feedback: {
        correct: 'Correct. You tracked time, manner, condition, and result across one connected paragraph.',
        incorrect: 'Decide whether each phrase gives background time, manner, a condition, or its result.',
      },
    },
    {
      id: 'adam-b1-language-5-build-advice-situation',
      type: 'reflection',
      title: 'Build a New Advice Situation',
      instructions: 'Write or say four connected B1 sentences about a new situation with a beginning, one clear restriction, and a conditional result. Use at least three Chapter 5 patterns.',
      question: 'Can you reuse the chapter’s language relationships in a new situation without retelling Chapter 5?',
      correctAnswer: null,
      explanation: 'A strong response may use “started to ...”, “began + -ing”, “more ... than ...”, “asked + person + not to ...”, “when ...”, and an “if ... would ...” relationship.',
      feedback: {
        correct: 'Keep the sentences connected and make the restriction and result easy to follow.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Show the beginning of a feeling or activity with “started to ...” or “began + -ing”.', mode: 'Individual' },
        { question: 'Sentence 2 — Add a comparison with “more ... than ...” if it fits your situation.', mode: 'Individual' },
        { question: 'Sentence 3 — Report one negative instruction with “asked + person + not to ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a condition and result with “if ... would ...” or another natural conditional pattern.', mode: 'Pair' },
      ],
    },
  ],
};
