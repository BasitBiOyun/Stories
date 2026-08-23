import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific Language Focus work for Moses A2.
 * Activities practise language genuinely present in each chapter without
 * duplicating the chapter comprehension Quick Challenge.
 */
export const mosesA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-a2-language-1-past-description',
      type: 'matching',
      title: 'Describing People in a Past Story',
      instructions: 'Match each Chapter 1 sentence chunk with the language job it does.',
      question: 'How does Chapter 1 describe Moses, Pharaoh and the Children of Israel in the past?',
      matchingPairs: [
        { left: 'Moses was a great Messenger of Allah.', right: 'identifies and describes a person in the past' },
        { left: 'Pharaoh was the king of Egypt.', right: 'states a past role or position' },
        { left: 'He was an unfair and cruel ruler.', right: 'adds qualities to a person in the past' },
        { left: 'They were the grandchildren of Jacob and Joseph.', right: 'states a past family relationship' },
      ],
      correctAnswer: {
        'Moses was a great Messenger of Allah.': 'identifies and describes a person in the past',
        'Pharaoh was the king of Egypt.': 'states a past role or position',
        'He was an unfair and cruel ruler.': 'adds qualities to a person in the past',
        'They were the grandchildren of Jacob and Joseph.': 'states a past family relationship',
      },
      explanation: 'Chapter 1 repeatedly uses “was” and “were” to identify people, state roles and relationships, and describe qualities in a past narrative.',
      feedback: {
        correct: 'Good. You connected “was/were” with different description functions.',
        incorrect: 'Ask whether each sentence gives identity, a role, a quality, or a relationship.',
      },
    },
    {
      id: 'moses-a2-language-1-belief-thought',
      type: 'matching',
      title: 'Belief, Thought and Negative Meaning',
      instructions: 'Match each Chapter 1 pattern with what it communicates.',
      question: 'How does the chapter talk about belief and ideas?',
      matchingPairs: [
        { left: 'He did not believe in Allah.', right: 'gives a negative belief in the past' },
        { left: 'He thought he was a god.', right: 'reports what Pharaoh believed about himself' },
        { left: 'They believed in one Allah.', right: 'states the Children of Israel’s belief' },
        { left: 'They did not think the king was a god.', right: 'reports a negative idea or belief in the past' },
      ],
      correctAnswer: {
        'He did not believe in Allah.': 'gives a negative belief in the past',
        'He thought he was a god.': 'reports what Pharaoh believed about himself',
        'They believed in one Allah.': 'states the Children of Israel’s belief',
        'They did not think the king was a god.': 'reports a negative idea or belief in the past',
      },
      explanation: 'Use past forms such as “believed” and “thought” to report beliefs and ideas. “Did not + base verb” makes a past statement negative.',
      feedback: {
        correct: 'Correct. You separated positive and negative belief/thought patterns.',
        incorrect: 'Look at “believed”, “thought”, and the pattern “did not + base verb”.',
      },
    },
    {
      id: 'moses-a2-language-1-cause-result',
      type: 'sequencing',
      title: 'Explaining Cause and Result',
      instructions: 'Put the chunks in order to rebuild a Chapter 1 cause-result idea.',
      question: 'How can the chapter connect Pharaoh’s fear with his cruel treatment?',
      sequencingItems: [
        { id: '1', text: 'The king feared the Children of Israel.' },
        { id: '2', text: 'Because of his fear,' },
        { id: '3', text: 'he was rude to them' },
        { id: '4', text: 'and forced them to do dangerous work.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: '“Because of + noun” introduces a cause. Chapter 1 uses “Because of his fear” to explain why Pharaoh treated the Children of Israel cruelly.',
      feedback: {
        correct: 'Good. You rebuilt the cause-result relationship.',
        incorrect: 'Begin with the fear, then use “Because of his fear” before the result.',
      },
    },
    {
      id: 'moses-a2-language-1-contrast-production',
      type: 'reflection',
      title: 'Say It: Describe and Explain',
      instructions: 'Write or say three or four short A2 sentences. Use at least two patterns from this Language Focus.',
      question: 'Can you describe two people or groups with different beliefs or behaviour and explain one reason?',
      correctAnswer: null,
      explanation: 'A strong response can use “was/were” for description, “believed/thought” for ideas, “did not + verb” for a negative past statement, and “because of” for a reason.',
      feedback: {
        correct: 'Use the patterns accurately and keep the contrast clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a person or group with “was/were”.', mode: 'Individual' },
        { question: 'Sentence 2 — State a belief with “believed” or “thought”.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a negative idea with “did not + verb”.', mode: 'Individual' },
        { question: 'Sentence 4 — Give a reason with “because of ...”.', mode: 'Pair' },
      ],
    },
  ],
};
