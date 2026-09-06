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
  6: [
    {
      id: 'yunus-a2-language-6-change-learning',
      type: 'matching',
      title: 'Language of Change and Learning',
      instructions: 'Match each Chapter 6 expression with what it shows about Yunus’s learning.',
      question: 'How does the chapter describe help, change and learning?',
      matchingPairs: [
        { left: 'Nature and living alone helped the dervish think deeply', right: 'shows support for an action' },
        { left: 'Yunus made his heart purer', right: 'shows a change in a personal quality' },
        { left: 'He learned to be alone with Allah', right: 'describes something he learned to do' },
        { left: 'Woodcutting in nature helped him become a better person', right: 'shows an activity supporting personal growth' },
      ],
      correctAnswer: {
        'Nature and living alone helped the dervish think deeply': 'shows support for an action',
        'Yunus made his heart purer': 'shows a change in a personal quality',
        'He learned to be alone with Allah': 'describes something he learned to do',
        'Woodcutting in nature helped him become a better person': 'shows an activity supporting personal growth',
      },
      explanation: 'Chapter 6 repeatedly uses language such as “helped ... think”, “made ... purer”, “learned to ...” and “helped ... become” to describe learning and personal change.',
      feedback: {
        correct: 'Good. You connected each language pattern with the kind of change or learning it expresses.',
        incorrect: 'Read the middle and final paragraphs again and look for helped, made, learned and become.',
      },
    },
    {
      id: 'yunus-a2-language-6-if-observation',
      type: 'matching',
      title: 'If You Look Closely',
      instructions: 'Rebuild the key observation patterns from the final paragraph.',
      question: 'How does Chapter 6 describe the mountains and connect careful looking with discovery?',
      matchingPairs: [
        { left: 'The mountains are', right: 'quiet and far from people' },
        { left: 'There are', right: 'trees, animals, and rivers' },
        { left: 'If you look closely', right: 'you find a deeper meaning in everything in nature' },
        { left: 'Everything', right: 'tells a story' },
      ],
      correctAnswer: {
        'The mountains are': 'quiet and far from people',
        'There are': 'trees, animals, and rivers',
        'If you look closely': 'you find a deeper meaning in everything in nature',
        'Everything': 'tells a story',
      },
      explanation: 'The paragraph combines place description with a simple condition-result pattern: “If you look closely, you find ...”. The condition tells us what to do; the second part tells us what we can discover.',
      feedback: {
        correct: 'Correct. You rebuilt both the place description and the if-result pattern.',
        incorrect: 'Return to the final paragraph and follow it from the mountain description to “If you look closely ...”.',
      },
    },
    {
      id: 'yunus-a2-language-6-learning-from-nature',
      type: 'reflection',
      title: 'Say It: Learning from a Place',
      instructions: 'Use Chapter 6 language to explain how the mountains and nature helped Yunus learn.',
      question: 'Can you describe the place, the help it gave Yunus and what careful attention can reveal?',
      correctAnswer: null,
      explanation: 'A strong A2 response combines description, help/change language and the chapter’s simple if-result pattern.',
      feedback: {
        correct: 'Use the chapter’s own language to connect place, learning and discovery.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the place: “The mountains were ... and ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Explain support: “Nature helped Yunus ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Explain learning: “He learned to ...” or “Woodcutting helped him become ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Give the observation: “If you look closely, you ...”', mode: 'Pair' },
      ],
    },
  ],
};
