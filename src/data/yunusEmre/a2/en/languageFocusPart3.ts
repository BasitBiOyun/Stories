import type { Exercise } from '../../../../types';

/**
 * Manually authored Language Focus work for the final story chapters.
 * Each chapter is read in full before authoring; no fixed exercise template is used.
 */
export const yunusA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  7: [
    {
      id: 'yunus-a2-language-7-story-sequence',
      type: 'sequencing',
      title: 'Tell the Flower Story in Order',
      instructions: 'Put the Chapter 7 events in the order they happen.',
      question: 'How does the story move from Taptuk’s task to the daisy calling out to Yunus?',
      sequencingItems: [
        { id: '1', text: 'One day, Taptuk asked the students to go to the mountain and bring flowers.' },
        { id: '2', text: 'The dervishes picked flowers and ran back to their teacher.' },
        { id: '3', text: 'In the late afternoon, Yunus returned with a single daisy.' },
        { id: '4', text: 'Some dervishes made fun of him, and Taptuk asked about the daisy.' },
        { id: '5', text: 'Yunus explained that he heard the flowers saying the name of Allah and could not cut them.' },
        { id: '6', text: 'When it started to get dark, a daisy called out to Yunus.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5', '6'],
      explanation: 'Chapter 7 is a short narrative. Time expressions such as “One day”, “in the late afternoon” and “when it started to get dark” help the reader follow the sequence of events.',
      feedback: {
        correct: 'Correct. You rebuilt the event sequence from the task to the daisy’s call.',
        incorrect: 'Use the time expressions and follow who acts first: Taptuk, the dervishes, Yunus, then the daisy.',
      },
    },
    {
      id: 'yunus-a2-language-7-quantity-groups',
      type: 'matching',
      title: 'All, Some, One and Any',
      instructions: 'Match each Chapter 7 expression with the amount or group it describes.',
      question: 'How does the chapter show a whole group, part of a group, one item and none from a group?',
      matchingPairs: [
        { left: 'all of you / all the dervishes', right: 'the whole group' },
        { left: 'some dervishes', right: 'only part of the group' },
        { left: 'a single daisy', right: 'one flower only' },
        { left: 'I could not cut any of them', right: 'not one flower from the group' },
      ],
      correctAnswer: {
        'all of you / all the dervishes': 'the whole group',
        'some dervishes': 'only part of the group',
        'a single daisy': 'one flower only',
        'I could not cut any of them': 'not one flower from the group',
      },
      explanation: 'The chapter uses simple quantity language very carefully: “all” for the whole group, “some” for part of it, “a single” for one only, and “any” after a negative to mean not one from the group.',
      feedback: {
        correct: 'Good. You connected each quantity expression with the amount it describes.',
        incorrect: 'Ask whether the expression means everyone, only part of the group, exactly one, or none.',
      },
    },
    {
      id: 'yunus-a2-language-7-retell-daisy',
      type: 'reflection',
      title: 'Say It: Retell the Daisy Scene',
      instructions: 'Retell Chapter 7 in four short sentences. Use the chapter’s time and quantity language.',
      question: 'Can you tell the main events clearly without copying the whole paragraph?',
      correctAnswer: null,
      explanation: 'A strong A2 retelling uses a clear event order and simple expressions such as all, some, a single, could not, and when.',
      feedback: {
        correct: 'Use the sentence starters to keep the story clear and in order.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Start the event: “One day, Taptuk asked all the students to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Contrast Yunus with the group: “The dervishes ..., but Yunus ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Explain his reason: “He could not cut any flowers because ...”', mode: 'Pair' },
        { question: 'Sentence 4 — End this chapter: “When it started to get dark, ...”', mode: 'Pair' },
      ],
    },
  ],
};
