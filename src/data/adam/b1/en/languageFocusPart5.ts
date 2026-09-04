import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 6 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'adam-b1-language-6-success-causation-earlier-past',
      type: 'matching',
      title: 'Success, Influence, and an Earlier Warning',
      instructions: 'Match each Chapter 6 expression with the meaning relationship it creates.',
      question: 'How does the chapter show a successful action, influence on other people, and an event that happened earlier?',
      matchingPairs: [
        { left: 'Iblis managed to trick them', right: 'shows that an attempted action was successfully completed' },
        { left: 'He convinced them to believe his lies', right: 'shows one person influencing others to accept an idea' },
        { left: 'the warning Allah had given them', right: 'places the giving of the warning before the later forgetting' },
      ],
      correctAnswer: {
        'Iblis managed to trick them': 'shows that an attempted action was successfully completed',
        'He convinced them to believe his lies': 'shows one person influencing others to accept an idea',
        'the warning Allah had given them': 'places the giving of the warning before the later forgetting',
      },
      explanation: '“Manage to + verb” marks successful completion, “convince + person + to + verb” shows influence, and the past perfect “had given” makes an earlier past event clear in relation to a later one.',
      feedback: {
        correct: 'Correct. You separated successful action, influence, and earlier past time.',
        incorrect: 'Ask whether the phrase shows success, persuasion, or an event that happened before another past event.',
      },
    },
    {
      id: 'adam-b1-language-6-sequence-change-discovery',
      type: 'matching',
      title: 'Building a Sequence of Change',
      instructions: 'Match each expression with the role it plays in the unfolding sequence.',
      question: 'How does Chapter 6 move from actions to feelings, change, and discovery?',
      matchingPairs: [
        { left: 'stretched out his hand, picked one of the fruits and offered it to Eve', right: 'links several completed actions in chronological order' },
        { left: 'When Adam finished eating', right: 'marks the point in time before the next reaction' },
        { left: 'he felt that his heart was filled with pain, sadness and shame', right: 'describes an emotional state after the action' },
        { left: 'the surrounding atmosphere changed and the internal harmony ceased', right: 'presents two resulting changes in the situation' },
        { left: 'Adam discovered that he and his wife were uncovered', right: 'introduces a realization using “discover that + clause”' },
      ],
      correctAnswer: {
        'stretched out his hand, picked one of the fruits and offered it to Eve': 'links several completed actions in chronological order',
        'When Adam finished eating': 'marks the point in time before the next reaction',
        'he felt that his heart was filled with pain, sadness and shame': 'describes an emotional state after the action',
        'the surrounding atmosphere changed and the internal harmony ceased': 'presents two resulting changes in the situation',
        'Adam discovered that he and his wife were uncovered': 'introduces a realization using “discover that + clause”',
      },
      explanation: 'The paragraph combines coordinated past actions with a “when” time clause, a feeling expression with “felt that ...”, resulting changes, and “discover that + clause” to move the narrative forward coherently.',
      feedback: {
        correct: 'Good. You tracked action, time, feeling, change, and realization across the paragraph.',
        incorrect: 'Decide whether each phrase advances actions, marks time, describes emotion, shows change, or introduces a realization.',
      },
    },
    {
      id: 'adam-b1-language-6-result-purpose-cause',
      type: 'matching',
      title: 'Result, Purpose, and Cause',
      instructions: 'Match each expression with the relationship it expresses.',
      question: 'How does the final paragraph explain what followed, what the characters intended to do, and why?',
      matchingPairs: [
        { left: 'their private parts became visible', right: 'shows a change of state with “become + adjective”' },
        { left: 'so they both started cutting tree leaves', right: 'introduces a result that follows from the discovery' },
        { left: 'to cover themselves', right: 'states the purpose of cutting the leaves' },
        { left: 'because a sense of shame (hayâ) is part of inborn human nature', right: 'gives a reason for the reaction described' },
        { left: 'They hurried to hide their private parts', right: 'shows urgent action directed toward a goal' },
      ],
      correctAnswer: {
        'their private parts became visible': 'shows a change of state with “become + adjective”',
        'so they both started cutting tree leaves': 'introduces a result that follows from the discovery',
        'to cover themselves': 'states the purpose of cutting the leaves',
        'because a sense of shame (hayâ) is part of inborn human nature': 'gives a reason for the reaction described',
        'They hurried to hide their private parts': 'shows urgent action directed toward a goal',
      },
      explanation: '“Become + adjective” marks a change of state, “so” links a result, “to + verb” can express purpose, “because” introduces a reason, and “hurry to + verb” presents an urgent goal-directed action.',
      feedback: {
        correct: 'Correct. You distinguished change, result, purpose, cause, and urgent goal.',
        incorrect: 'Look for what changed, what happened as a result, what the action was for, and which clause explains why.',
      },
    },
    {
      id: 'adam-b1-language-6-build-consequence-chain',
      type: 'reflection',
      title: 'Build a Consequence Chain',
      instructions: 'Write or say four connected B1 sentences about a new situation in which an earlier warning is forgotten, an action creates a change, and someone reacts for a clear purpose. Use at least three Chapter 6 patterns.',
      question: 'Can you use the chapter’s language to build a new action → change → reaction sequence without retelling Chapter 6?',
      correctAnswer: null,
      explanation: 'A strong response may use “managed to ...”, “convinced + person + to ...”, “had + past participle”, “when ...”, “became ...”, “so ...”, “to + verb” for purpose, and “because ...”.',
      feedback: {
        correct: 'Keep the sequence easy to follow and make the purpose and cause explicit.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Mention an earlier warning or instruction using a past-perfect form such as “had given” or “had told”.', mode: 'Individual' },
        { question: 'Sentence 2 — Show a successful action or influence with “managed to ...” or “convinced + person + to ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Describe a change and its result using “became ...” and/or “so ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Explain the reaction with a purpose phrase “to ...” and a reason with “because ...”.', mode: 'Pair' },
      ],
    },
  ],
};
