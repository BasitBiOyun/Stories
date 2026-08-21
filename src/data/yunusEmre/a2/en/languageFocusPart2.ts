import type { Exercise } from '../../../../types';

/**
 * Continued manually authored Language Focus work for later chapters.
 * Every chapter is read first; nothing here is generated from a fixed exercise template.
 */
export const yunusA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  5: [
    {
      id: 'yunus-a2-language-5-question-functions',
      type: 'matching',
      title: 'Questions That Make Us Think',
      instructions: 'Match each Chapter 5 question with the job it does.',
      question: 'How do the questions in Chapter 5 ask for reasons or information?',
      matchingPairs: [
        { left: 'So why was he doing that?', right: 'asks for the reason behind a past action' },
        { left: 'Is there no crooked wood in the mountains?', right: 'asks whether something exists' },
        { left: 'Why do you always bring straight pieces?', right: 'asks for the reason behind a repeated habit' },
      ],
      correctAnswer: {
        'So why was he doing that?': 'asks for the reason behind a past action',
        'Is there no crooked wood in the mountains?': 'asks whether something exists',
        'Why do you always bring straight pieces?': 'asks for the reason behind a repeated habit',
      },
      explanation: 'Chapter 5 uses questions for different communicative purposes. “Why” asks for a reason, while “Is there...?” checks whether something exists.',
      feedback: {
        correct: 'Correct. You identified what information each question is trying to get.',
        incorrect: 'Look at the information each question expects: a reason or an answer about existence.',
      },
    },
    {
      id: 'yunus-a2-language-5-appearance-reality',
      type: 'matching',
      title: 'From Appearance to Reality',
      instructions: 'Match each story expression with the meaning relationship it creates.',
      question: 'How does Chapter 5 move from what the work looks like to what it really means?',
      matchingPairs: [
        { left: 'It looks like ...', right: 'introduces a first impression' },
        { left: 'But in fact ...', right: 'corrects the first impression and gives the deeper meaning' },
        { left: 'Every time he uses the axe ...', right: 'introduces something that happens repeatedly' },
        { left: 'This service taught him how to ...', right: 'shows a result of the experience or learning' },
      ],
      correctAnswer: {
        'It looks like ...': 'introduces a first impression',
        'But in fact ...': 'corrects the first impression and gives the deeper meaning',
        'Every time he uses the axe ...': 'introduces something that happens repeatedly',
        'This service taught him how to ...': 'shows a result of the experience or learning',
      },
      explanation: 'The chapter deliberately moves from appearance to deeper meaning. These chunks help the reader follow that change and understand what Yunus learns from the work.',
      feedback: {
        correct: 'Good. You followed the chapter’s move from first impression to deeper meaning and result.',
        incorrect: 'Read the middle paragraph in order: first impression, correction, repeated action, then learning.',
      },
    },
    {
      id: 'yunus-a2-language-5-explain-deeper-meaning',
      type: 'reflection',
      title: 'Say It: What the Work Really Means',
      instructions: 'Explain the deeper meaning of Yunus’s work in four short sentences using Chapter 5 language.',
      question: 'Can you move from what the work looks like to what Yunus is really learning?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses the chapter’s own discourse pattern: first impression, deeper reality, repeated action and learning.',
      feedback: {
        correct: 'Use the four sentence starters to explain the chapter’s deeper meaning clearly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — First impression: “At first, it looks like Yunus is ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Deeper meaning: “But in fact, he is ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Repeated change: “Every time he ..., he ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Learning: “This service taught him how to ...”', mode: 'Pair' },
      ],
    },
  ],
};
