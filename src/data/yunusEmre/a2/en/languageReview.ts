import type { Exercise } from '../../../../types';

/**
 * Cumulative language review for Yunus Emre A2.
 * Each task recycles grammar and communicative functions already encountered
 * in the chapter-specific Language Focus work. It does not replace the
 * whole-story Final Challenge.
 */
export const yunusA2LanguageReviewExercises: Exercise[] = [
  {
    id: 'yunus-a2-language-review-1-past-biography',
    type: 'matching',
    title: 'Biography in the Past',
    instructions: 'Match each base form with the past form used to tell Yunus Emre’s life story.',
    question: 'Which forms help us talk about finished events in a biography?',
    matchingPairs: [
      { left: 'be born', right: 'was born' },
      { left: 'become', right: 'became' },
      { left: 'travel', right: 'traveled' },
      { left: 'live', right: 'lived' },
    ],
    correctAnswer: {
      'be born': 'was born',
      become: 'became',
      travel: 'traveled',
      live: 'lived',
    },
    explanation: 'Chapter 1 uses past forms to build a short biography: Yunus was born, became a dervish, traveled and lived in a particular historical period.',
    feedback: {
      correct: 'Good. You rebuilt the main past-biography forms.',
      incorrect: 'Think back to Chapter 1 and the language used for completed life events.',
    },
  },
  {
    id: 'yunus-a2-language-review-2-character-habits',
    type: 'matching',
    title: 'Character and Past Habits',
    instructions: 'Match the beginnings with the Chapter 2 language that completes them naturally.',
    question: 'How can we describe what people were like and what they regularly did?',
    matchingPairs: [
      { left: 'Dervishes were', right: 'kind and cheerful' },
      { left: 'They tried to', right: 'understand everyone' },
      { left: 'They shared', right: 'what they had with the needy' },
      { left: 'They could call', right: 'themselves poor' },
    ],
    correctAnswer: {
      'Dervishes were': 'kind and cheerful',
      'They tried to': 'understand everyone',
      'They shared': 'what they had with the needy',
      'They could call': 'themselves poor',
    },
    explanation: 'The chapter combines “were + adjective” with useful action chunks such as “tried to”, “shared” and “could call” to describe past character and behaviour.',
    feedback: {
      correct: 'Correct. You connected descriptions of character with past actions and habits.',
      incorrect: 'Use the Chapter 2 patterns: were + quality, tried to + action, shared + object, could call + name.',
    },
  },
  {
    id: 'yunus-a2-language-review-3-need-duty-possibility',
    type: 'matching',
    title: 'Need, Duty and Possibility',
    instructions: 'Match each Chapter 3 expression with its communicative meaning.',
    question: 'What different meanings do needs, must, can’t and less express?',
    matchingPairs: [
      { left: 'A dervish needs a wounded heart', right: 'describes a need' },
      { left: 'He must be tongueless when people make fun of him', right: 'states a strong requirement' },
      { left: 'You can’t be a dervish', right: 'says something is not possible' },
      { left: 'They ate, spoke and slept less', right: 'describes smaller amounts in a disciplined routine' },
    ],
    correctAnswer: {
      'A dervish needs a wounded heart': 'describes a need',
      'He must be tongueless when people make fun of him': 'states a strong requirement',
      'You can’t be a dervish': 'says something is not possible',
      'They ate, spoke and slept less': 'describes smaller amounts in a disciplined routine',
    },
    explanation: 'Chapter 3 uses different forms for different purposes: need, strong requirement, impossibility and reduced amount within a disciplined way of life.',
    feedback: {
      correct: 'Good. You distinguished the functions instead of only naming the forms.',
      incorrect: 'Ask what each expression communicates: need, strong duty, impossibility, or a smaller amount.',
    },
  },
  {
    id: 'yunus-a2-language-review-4-service-routine',
    type: 'matching',
    title: 'Service, Promise and Routine',
    instructions: 'Match each Chapter 4 language chunk with the job it does.',
    question: 'How does the story express readiness, a promise, a request and frequency?',
    matchingPairs: [
      { left: 'was willing to serve', right: 'shows readiness to help' },
      { left: 'I will do whatever service you ask of me', right: 'makes a promise or commitment' },
      { left: 'Taptuk asked Yunus to collect wood', right: 'reports a request or instruction' },
      { left: 'every day / never / always', right: 'shows how often something happened' },
    ],
    correctAnswer: {
      'was willing to serve': 'shows readiness to help',
      'I will do whatever service you ask of me': 'makes a promise or commitment',
      'Taptuk asked Yunus to collect wood': 'reports a request or instruction',
      'every day / never / always': 'shows how often something happened',
    },
    explanation: 'Chapter 4 links service to several real language functions: willingness, commitment, reported requests and repeated routines.',
    feedback: {
      correct: 'Correct. You connected each form with its practical function.',
      incorrect: 'Think about whether each chunk shows readiness, commitment, a request, or frequency.',
    },
  },
  {
    id: 'yunus-a2-language-review-5-appearance-reality',
    type: 'fill-blanks',
    title: 'Appearance and Reality',
    instructions: 'Complete the sentence with the contrast word used to move from first impression to deeper meaning.',
    question: 'Which word shows that the deeper reality is different from the first impression?',
    fillBlanksText: 'It looks like Yunus is working with wood to fix crooked pieces, [blank] in fact he is training and fixing his own heart and ego.',
    correctAnswer: 'but',
    explanation: '“But” creates the contrast at the centre of Chapter 5: the work looks physical on the outside, but it also has an inner meaning.',
    feedback: {
      correct: 'Correct. “But” signals the move from appearance to deeper reality.',
      incorrect: 'The second idea corrects or contrasts with the first impression. Which simple contrast word does that?',
    },
  },
  {
    id: 'yunus-a2-language-review-6-change-condition',
    type: 'matching',
    title: 'Change, Learning and Discovery',
    instructions: 'Match each Chapter 6 pattern with what it communicates.',
    question: 'How can we describe support, personal change, learning and a condition-result link?',
    matchingPairs: [
      { left: 'Nature helped him think deeply', right: 'shows support for an action' },
      { left: 'He made his heart purer', right: 'shows a change in a quality' },
      { left: 'He learned to be alone in the mountains', right: 'describes an action he learned' },
      { left: 'If you look closely, you find a deeper meaning', right: 'connects a condition with its result' },
    ],
    correctAnswer: {
      'Nature helped him think deeply': 'shows support for an action',
      'He made his heart purer': 'shows a change in a quality',
      'He learned to be alone in the mountains': 'describes an action he learned',
      'If you look closely, you find a deeper meaning': 'connects a condition with its result',
    },
    explanation: 'Chapter 6 gives several useful ways to describe learning and change, then uses a simple if-result pattern to connect careful observation with discovery.',
    feedback: {
      correct: 'Good. You recognised four different ways the chapter builds meaning.',
      incorrect: 'Focus on the key verbs and linker: helped, made, learned, and if.',
    },
  },
  {
    id: 'yunus-a2-language-review-7-narrative-time',
    type: 'sequencing',
    title: 'Narrative Time',
    instructions: 'Put the Chapter 7 time-linked sentences in story order.',
    question: 'How do time expressions help a listener follow a short narrative?',
    sequencingItems: [
      { id: '1', text: 'One day, Taptuk gave the students the flower task.' },
      { id: '2', text: 'In the late afternoon, Yunus returned with a single daisy.' },
      { id: '3', text: 'Yunus explained why he could not cut the other flowers.' },
      { id: '4', text: 'When it started to get dark, a daisy called out to him.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'A short narrative becomes easier to follow when events are organised with clear time signals such as “One day”, “in the late afternoon” and “when...”.',
    feedback: {
      correct: 'Correct. You used the time language to rebuild the narrative.',
      incorrect: 'Follow the time signals from the beginning of the day toward darkness.',
    },
  },
  {
    id: 'yunus-a2-language-review-8-transfer',
    type: 'reflection',
    title: 'Use the Closing Language',
    instructions: 'Use four language patterns from Chapter 8 to give a short daily-life message.',
    question: 'Can you use the book’s language to report advice, express responsibility, give advice and state a result?',
    correctAnswer: null,
    explanation: 'This final Language Review task transfers the grammar and functions from the story into a short A2 message of your own.',
    feedback: {
      correct: 'Use all four starters to produce a clear, meaningful message.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — “Yunus tells us to ...”', mode: 'Individual' },
      { question: 'Sentence 2 — “We must ...”', mode: 'Individual' },
      { question: 'Sentence 3 — “We should ... because/so ...”', mode: 'Pair' },
      { question: 'Sentence 4 — “This helps us ...”', mode: 'Pair' },
    ],
  },
];
