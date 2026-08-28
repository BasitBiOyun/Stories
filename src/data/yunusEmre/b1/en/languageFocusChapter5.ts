import type { Exercise } from '../../../../types';

/** Chapter 5 English Language Focus, derived only from the locked Chapter 5 story text. */
export const yunusB1LanguageFocusChapter5: Exercise[] = [
  {
    id: 'yunus-b1-language-5-cause-response',
    type: 'matching',
    title: 'Building Cause and Response',
    instructions: 'Match each expression with the relationship it creates. Focus on meaning, not historical recall.',
    question: 'How does the chapter connect difficult conditions, people’s responses, and later consequences?',
    matchingPairs: [
      { left: 'Because of many economic and social problems...', right: 'introduces a cause before describing a response' },
      { left: 'because they believed these leaders would save them', right: 'gives the reason for following the leaders and reports an expected future from a past viewpoint' },
      { left: 'This disaster caused deep sorrow and fear...', right: 'shows the emotional result produced by an event' },
      { left: 'Thus, they easily defeated the Seljuks.', right: 'marks a result that follows from the tactic just described' },
    ],
    correctAnswer: {
      'Because of many economic and social problems...': 'introduces a cause before describing a response',
      'because they believed these leaders would save them': 'gives the reason for following the leaders and reports an expected future from a past viewpoint',
      'This disaster caused deep sorrow and fear...': 'shows the emotional result produced by an event',
      'Thus, they easily defeated the Seljuks.': 'marks a result that follows from the tactic just described',
    },
    explanation: 'Chapter 5 repeatedly links causes with responses and results. It also reports what people believed would happen from their position in the past.',
    feedback: {
      correct: 'Correct. You identified four different ways the text builds cause, reason, expectation, and result.',
      incorrect: 'Ask whether each expression introduces a cause, explains a reason, reports an expectation, or signals a result.',
    },
  },
  {
    id: 'yunus-b1-language-5-past-viewpoint',
    type: 'multiple-choice',
    title: 'Reporting a Future Seen from the Past',
    instructions: 'Choose the sentence that best keeps the viewpoint used in the chapter.',
    question: 'Which sentence naturally reports what a group believed at that earlier time?',
    options: [
      'They followed the leaders because they believed the leaders would save them.',
      'They followed the leaders because they believe the leaders will save them yesterday.',
      'They followed the leaders because the leaders save them before they believed it.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter uses “believed ... would save” to report an expectation that was still in the future from a past point of view.',
    feedback: {
      correct: 'Good. The sentence keeps both the past viewpoint and the later expected action.',
      incorrect: 'Look for a past reporting verb followed by “would” for something expected to happen later from that past viewpoint.',
    },
  },
  {
    id: 'yunus-b1-language-5-contrast-result',
    type: 'multiple-choice',
    title: 'Connecting Contrast and Consequence',
    instructions: 'Choose the version that creates the clearest logical movement between the ideas.',
    question: 'Which short passage best moves from one outcome to an unexpected new development and then to its consequence?',
    options: [
      'The revolt was suppressed with difficulty. However, this gave another power courage to attack. The attack caused fear, and later a successful tactic led to defeat.',
      'The revolt was suppressed with difficulty because however another power attack fear tactic.',
      'The revolt ended, so there was no contrast, no further consequence, and no need to connect the ideas.',
    ],
    correctAnswer: 0,
    explanation: '“However” marks a change in direction, while expressions such as “caused...” and “thus...” show consequences. Together they help a B1 explanation develop across several sentences.',
    feedback: {
      correct: 'Correct. The ideas are connected through contrast first and consequence afterwards.',
      incorrect: 'Choose the passage that uses a contrast marker for the new development and clear cause-result language for what follows.',
    },
  },
  {
    id: 'yunus-b1-language-5-production',
    type: 'reflection',
    title: 'Explain a Chain of Pressure, Belief, and Result',
    instructions: 'Write or say five to six connected B1 sentences about a real or imagined social situation. Do not retell Chapter 5.',
    question: 'Can you explain a difficult condition, describe how people respond, report what they believe will happen, introduce an unexpected development, and finish with a clear result?',
    correctAnswer: null,
    explanation: 'A strong response should read as one connected explanation. Useful language from the chapter includes “because of...”, “were looking for...”, “started...”, “because they believed... would...”, “however”, “caused...”, “thus”, and “after that”.',
    feedback: {
      correct: 'Keep the relationships explicit so each sentence develops the previous one.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Introduce a difficult condition with “because of...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe how people were trying to respond to that condition.', mode: 'Individual' },
      { question: 'Sentence 3 — Report what they believed would happen next.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “however” to introduce an unexpected new development.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Show one or two consequences with “caused...”, “thus”, or another clear result expression.', mode: 'Pair' },
    ],
  },
];
