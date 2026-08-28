import type { Exercise } from '../../../../types';

/** Chapter 7 English Language Focus, derived only from the locked Chapter 7 story text. */
export const yunusB1LanguageFocusChapter7: Exercise[] = [
  {
    id: 'yunus-b1-language-7-context-action',
    type: 'matching',
    title: 'Context and Action at the Same Time',
    instructions: 'Match each story pattern with the relationship it helps express. Focus on the language, not on recalling story facts.',
    question: 'How does Chapter 7 connect historical circumstances with actions happening inside them?',
    matchingPairs: [
      { left: 'During the same period', right: 'places another event or situation in the same time frame' },
      { left: 'under Mongol pressure', right: 'adds a circumstance that helps explain movement or action' },
      { left: 'They were spreading... and establishing...', right: 'presents two ongoing, parallel activities in the background' },
      { left: 'So in such an environment', right: 'moves from the earlier situation to a response that developed within it' },
    ],
    correctAnswer: {
      'During the same period': 'places another event or situation in the same time frame',
      'under Mongol pressure': 'adds a circumstance that helps explain movement or action',
      'They were spreading... and establishing...': 'presents two ongoing, parallel activities in the background',
      'So in such an environment': 'moves from the earlier situation to a response that developed within it',
    },
    explanation: 'The chapter combines time, pressure, ongoing activity, and a result-like transition. This lets the writer explain actions as part of a larger situation instead of listing events separately.',
    feedback: {
      correct: 'Correct. You distinguished time, circumstance, ongoing background, and transition to a response.',
      incorrect: 'Ask whether each expression mainly gives the time, the pressure around an action, an ongoing background activity, or a transition from context to response.',
    },
  },
  {
    id: 'yunus-b1-language-7-influence-response',
    type: 'multiple-choice',
    title: 'Influence and Response',
    instructions: 'Choose the passage that most naturally connects influence with a response to other people.',
    question: 'Which short passage best uses the chapter’s patterns to show influence, response, and a means of reaching people?',
    options: [
      'The teacher was influential among young people, so she tried to respond to their efforts to understand difficult changes. Conversation became her most influential tool.',
      'The teacher influential young people respond efforts changes tool because among.',
      'The teacher was influential, so she avoided responding to anyone and had no way of communicating with them.',
    ],
    correctAnswer: 0,
    explanation: 'Chapter 7 uses patterns such as “influential among...”, “tried to respond to people’s efforts to make sense of...”, and “his most influential tool” to connect a person’s role with the needs of others and the means used to reach them.',
    feedback: {
      correct: 'Correct. The passage connects influence, response to a need, and an effective tool.',
      incorrect: 'Look for a passage that links being influential among a group with responding to their efforts and using a clear tool or means.',
    },
  },
  {
    id: 'yunus-b1-language-7-source-inspiration',
    type: 'multiple-choice',
    title: 'Source and Inspiration',
    instructions: 'Choose the version that most clearly distinguishes a foundation from an additional influence.',
    question: 'Which sentence best reflects the difference between “comes from” and “was inspired by” in the chapter?',
    options: [
      'Her basic approach comes from long experience, and she was also inspired by the ideas and examples of earlier teachers.',
      'Her approach inspired comes earlier by from experience teachers ideas.',
      'Her approach has no source, but it comes only from people who had no influence on her.',
    ],
    correctAnswer: 0,
    explanation: '“Comes from” identifies a foundation or source. “Was inspired by” adds another influence. Using both lets a writer describe more than one layer behind a person’s ideas or practice.',
    feedback: {
      correct: 'Correct. The sentence separates a foundation from an additional source of inspiration.',
      incorrect: 'Find the sentence that first names where an approach comes from and then adds another influence with “was inspired by”.',
    },
  },
  {
    id: 'yunus-b1-language-7-production',
    type: 'reflection',
    title: 'Build a Response from Its Context',
    instructions: 'Write or say five to six connected B1 sentences about a real or imagined person who appears in a difficult situation and responds to a need in the community. Do not retell Chapter 7.',
    question: 'Can you establish the situation, show ongoing activity, explain the person’s response and tool, and identify the sources of their ideas?',
    correctAnswer: null,
    explanation: 'Useful language from the chapter includes “during the same period”, “under ... pressure”, “were ...-ing and ...-ing”, “so in such an environment”, “tried to respond to...”, “efforts to make sense of...”, “most influential tool”, “comes from...”, and “was inspired by...”.',
    feedback: {
      correct: 'Keep the sentences connected so the context leads naturally to the response, the tool, and the sources of influence.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Introduce a difficult situation or pressure.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe two activities that were happening during the same period.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “so” or a similar connector to move from the situation to the person’s response.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain what the person tried to respond to and name an influential tool or means.', mode: 'Pair' },
      { question: 'Sentences 5–6 — State what the person’s approach comes from and add another source of inspiration.', mode: 'Pair' },
    ],
  },
];
