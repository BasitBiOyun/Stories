import type { Exercise } from '../../../../types';

/** Chapter 6 English Language Focus, derived only from the locked Chapter 6 story text. */
export const yunusB1LanguageFocusChapter6: Exercise[] = [
  {
    id: 'yunus-b1-language-6-focus-and-effect',
    type: 'matching',
    title: 'Who or What Is Put in Focus?',
    instructions: 'Match each story pattern with what it helps the writer foreground. Focus on how the sentence is built, not on recalling the event.',
    question: 'How does Chapter 6 shift attention from the people who act to the people, places, and institutions affected by events?',
    matchingPairs: [
      { left: 'The men were killed with swords.', right: 'puts the affected people in focus rather than naming the doer' },
      { left: 'The women and children were taken captive and forced to go...', right: 'links two things done to the same affected group' },
      { left: 'an agreement was made with the Mongols', right: 'focuses on the agreement and its result rather than who negotiated it' },
      { left: 'the lands of Anatolia were directly attached to the Ilkhanate Empire', right: 'presents a political change as something imposed on a place' },
    ],
    correctAnswer: {
      'The men were killed with swords.': 'puts the affected people in focus rather than naming the doer',
      'The women and children were taken captive and forced to go...': 'links two things done to the same affected group',
      'an agreement was made with the Mongols': 'focuses on the agreement and its result rather than who negotiated it',
      'the lands of Anatolia were directly attached to the Ilkhanate Empire': 'presents a political change as something imposed on a place',
    },
    explanation: 'Chapter 6 often places affected people, agreements, income, and territory at the beginning of the sentence. This helps the text describe what happened to them, not only who caused it.',
    feedback: {
      correct: 'Correct. You identified how sentence focus changes when the affected person or thing becomes the subject.',
      incorrect: 'Ask whether the sentence is mainly interested in the doer or in the person, thing, or place affected by the action.',
    },
  },
  {
    id: 'yunus-b1-language-6-change-over-time',
    type: 'multiple-choice',
    title: 'Building Change Over Time',
    instructions: 'Choose the passage that most naturally shows a gradual change rather than a list of disconnected facts.',
    question: 'Which short passage best uses the chapter’s language of developing dependence and control?',
    options: [
      'An agreement was made, but in time the weaker side became dependent. A large part of its income began to be sent away, and later outside officials began to administer the region.',
      'An agreement was made. Dependence income officials region yesterday tomorrow.',
      'An agreement was made, so nothing changed afterwards and no later development needs to be connected.',
    ],
    correctAnswer: 0,
    explanation: 'Expressions such as “in time”, “became dependent”, “began to be sent”, “after 1277”, and “began to administer” let the writer show a process developing across time.',
    feedback: {
      correct: 'Correct. The passage presents change as a connected process with clear stages.',
      incorrect: 'Look for a passage that marks gradual change and later stages with time expressions and verbs such as “became” and “began”.',
    },
  },
  {
    id: 'yunus-b1-language-6-comparison-result',
    type: 'multiple-choice',
    title: 'Showing Degree, Comparison, and Result',
    instructions: 'Choose the version that best preserves the relationships used in the chapter.',
    question: 'Which sentence set most clearly moves from a comparison to a worsening condition and then to its effect?',
    options: [
      'The rulers acted almost like officials for another power. However, the tax kept increasing, and this made both the state and the people poorer.',
      'The rulers almost officials however tax poorer because like continuously.',
      'The rulers acted independently, and the increasing tax made everyone richer.',
    ],
    correctAnswer: 0,
    explanation: '“Almost like” expresses an approximate comparison. “However” introduces a worsening development, and “made ... poorer” expresses the effect of that development on two groups.',
    feedback: {
      correct: 'Correct. The relationships of comparison, contrast, and result are all clear.',
      incorrect: 'Find the version with an approximate comparison, a contrast marker, and a clear result with “made + object + adjective”.',
    },
  },
  {
    id: 'yunus-b1-language-6-production',
    type: 'reflection',
    title: 'Describe a Process of Losing Control',
    instructions: 'Write or say five to six connected B1 sentences about a real, historical, or imagined situation in which a person, group, or organisation gradually loses control. Do not retell Chapter 6.',
    question: 'Can you keep the affected side in focus, show change over time, compare its new role with an earlier one, and finish with a clear consequence?',
    correctAnswer: null,
    explanation: 'A strong response should develop as one short process. Useful language from the chapter includes “was/were + past participle”, “in time”, “became...”, “almost like...”, “began to be...”, “however”, “made ... + adjective”, “through...”, and “was/were directly attached to...”.',
    feedback: {
      correct: 'Keep the stages connected so the reader can see who is affected, how the situation changes, and what the final consequence is.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Introduce something that happened to the affected person, group, or organisation.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “in time” or “became...” to show a change in status or independence.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “almost like...” to compare the new role with another role.', mode: 'Pair' },
      { question: 'Sentence 4 — Show a new process beginning, using “began to...” or “began to be...”.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Add a contrast or worsening development and finish with a clear effect using “made...”, another result expression, or a final passive sentence.', mode: 'Pair' },
    ],
  },
];
