import type { Exercise } from '../../../../types';

/** Chapter 4 English Language Focus, derived only from the locked Chapter 4 story text. */
export const yunusB1LanguageFocusChapter4: Exercise[] = [
  {
    id: 'yunus-b1-language-4-condition-perspective',
    type: 'matching',
    title: 'Using a Condition to Open a Historical Explanation',
    instructions: 'Match each expression with the meaning relationship it creates.',
    question: 'How does the opening sentence connect a closer look at history with a better understanding of place and context?',
    matchingPairs: [
      { left: 'If we take a closer look at this historical atmosphere...', right: 'sets a condition or approach for gaining deeper understanding' },
      { left: 'we can better understand Anatolia', right: 'states the possible result of taking that approach' },
      { left: 'the land where Yunus Emre lived and recited...', right: 'adds identifying information about Anatolia and connects place with a person’s experience' },
    ],
    correctAnswer: {
      'If we take a closer look at this historical atmosphere...': 'sets a condition or approach for gaining deeper understanding',
      'we can better understand Anatolia': 'states the possible result of taking that approach',
      'the land where Yunus Emre lived and recited...': 'adds identifying information about Anatolia and connects place with a person’s experience',
    },
    explanation: 'The sentence uses “if” to present an approach and “can” to show the understanding that becomes possible. The “where” clause then connects the place with Yunus Emre’s life.',
    feedback: {
      correct: 'Correct. You followed the movement from condition to possible result and then to place description.',
      incorrect: 'Ask which part gives the condition, which part gives the possible result, and which part adds information about Anatolia.',
    },
  },
  {
    id: 'yunus-b1-language-4-contrast-change',
    type: 'multiple-choice',
    title: 'From a High Point to Decline',
    instructions: 'Choose the sentence that best preserves the chapter’s contrast and time relationship.',
    question: 'Which sentence most naturally connects an earlier period of strength with a later period of decline?',
    options: [
      'Alaeddin I’s reign was one of the Seljuks’ strongest periods; however, under his son the economic and social structure began to decline.',
      'Alaeddin I’s reign was powerful because his son had already caused the decline before it began.',
      'Alaeddin I’s reign and the later decline happened for exactly the same reason, so there is no contrast between them.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter first evaluates Alaeddin I’s reign with strong superlative language and then uses “however” to signal a change in direction under the next ruler.',
    feedback: {
      correct: 'Good. The sentence keeps both the chronological change and the contrast.',
      incorrect: 'Look for a sentence that first establishes strength, then marks a later change with contrast rather than treating the two periods as identical.',
    },
  },
  {
    id: 'yunus-b1-language-4-cause-chain',
    type: 'sequencing',
    title: 'Reconstructing a Cause-and-Change Chain',
    instructions: 'Put the language moves in an order that builds a coherent explanation. Focus on how the relationships are expressed, not on recalling dates.',
    question: 'How can a B1 explanation move from pressure to movement, social change, and a worsening situation?',
    sequencingItems: [
      { id: '1', text: 'A major pressure caused many people to move from one region to another.' },
      { id: '2', text: 'This change affected the lives of the local population.' },
      { id: '3', text: 'The number of newcomers then grew.' },
      { id: '4', text: 'A failure to manage the situation worsened the social and economic problems.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'Chapter 4 uses several cause-result patterns: “caused ... to migrate”, “which ... turned the lives ... upside down”, and “failure to manage this situation worsened...”. The point is to build a connected chain rather than four isolated facts.',
    feedback: {
      correct: 'Correct. You built a coherent chain from cause through change to worsening conditions.',
      incorrect: 'Start with the pressure that causes movement, then show the effect of that movement, the continuing change, and finally the result of poor management.',
    },
  },
  {
    id: 'yunus-b1-language-4-production',
    type: 'reflection',
    title: 'Explain How a Situation Changes Over Time',
    instructions: 'Write or say five to six connected B1 sentences about a real or imagined place, institution, or community. Do not retell Chapter 4.',
    question: 'Can you begin with an “if ... can ...” perspective, describe an earlier high point, mark a later contrast, and explain a short cause-result chain?',
    correctAnswer: null,
    explanation: 'A strong response should develop one coherent account. Useful language from the chapter includes “If we... we can...”, superlative descriptions such as “the most...”, “however”, “because of...”, “caused ... to...”, “which...”, “began to...”, and “failure to ... worsened...”.',
    feedback: {
      correct: 'Keep the time change and the cause-result links explicit so the paragraph reads as one explanation.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Use “If we... we can...” to explain how looking at one factor can improve understanding.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe an earlier strong or successful period with an appropriate comparative or superlative expression.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “however” to mark a later change in direction.', mode: 'Pair' },
      { question: 'Sentences 4–6 — Build a short chain with a cause, an effect on people or conditions, and a final worsening or improvement.', mode: 'Pair' },
    ],
  },
];
