import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific A2 Language Focus work for Yunus Emre.
 * Each chapter follows Look → Practise → Use: learners first look at a form in a
 * real chapter sentence, then practise it in context, then use it in speaking.
 * Every quoted sentence comes from the English chapter. Lines of Yunus Emre’s
 * poem are only read and matched to their meaning; they are never gapped or changed.
 */
export const yunusA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'yunus-a2-language-1-past-life-forms',
      type: 'matching',
      title: 'Past Forms in a Life Story',
      instructions: 'Chapter 1 tells the story of Yunus Emre’s life. Match each verb with its past form from the chapter.',
      question: 'Which past forms does Chapter 1 use to tell finished events?',
      matchingHeadings: { left: 'Verb', right: 'Past form in Chapter 1' },
      matchingPairs: [
        { left: 'become', right: 'became' },
        { left: 'write', right: 'wrote' },
        { left: 'say', right: 'said' },
        { left: 'speak', right: 'spoke' },
      ],
      correctAnswer: {
        become: 'became',
        write: 'wrote',
        say: 'said',
        speak: 'spoke',
      },
      explanation: 'A life story tells finished events, so Chapter 1 uses past forms. These four verbs are irregular: they do not take -ed. “He became a dervish.” “He wrote and said them in simple Turkish.” “He also spoke of the greatness and oneness of Allah.”',
      feedback: {
        correct: 'Good. You know the irregular past forms in Yunus Emre’s life story.',
        incorrect: 'Look at Chapter 1 again. Find “became”, “wrote”, “said” and “spoke”. They do not end in -ed.',
      },
    },
    {
      id: 'yunus-a2-language-1-meaning-links',
      type: 'word-bank',
      title: 'Because, After, When',
      instructions: 'Complete the sentences from Chapter 1 with words from the bank. Two words are not needed.',
      question: 'Which word gives a reason, which word shows the order of events, and which word gives a time?',
      fillBlanksText: 'People could easily understand his poems [blank] he … them in simple Turkish. … [blank] he completed his madrasa education, he followed the way of the dervishes … Yunus was 33 or 34 years old [blank] Mevlana died.',
      wordBank: ['because', 'After', 'when', 'so', 'but'],
      correctAnswer: ['because', 'After', 'when'],
      explanation: '“Because” gives a reason: people understood his poems because he used simple Turkish. “After” shows the order of events: first his madrasa education, then the dervish way. “When” links a fact to a time: Yunus was 33 or 34 at the time Mevlana died.',
      feedback: {
        correct: 'Correct. You used because for a reason, after for the order of events and when for a time.',
        incorrect: 'Read the first and last paragraphs of Chapter 1 again. Ask: Is it a reason? Is it the next event? Is it a time?',
      },
    },
    {
      id: 'yunus-a2-language-1-mini-biography',
      type: 'reflection',
      title: 'Say It: Mini Biography',
      instructions: 'Use Chapter 1 to give a short three-sentence biography. Speak in complete sentences.',
      question: 'Can you retell three important facts about Yunus Emre using the chapter’s language?',
      correctAnswer: null,
      explanation: 'A clear A2 response can combine a birth fact, an education or life-change fact, and one more past event from the chapter.',
      feedback: {
        correct: 'Use three accurate past-life sentences from Chapter 1.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Start with birth: “Yunus Emre was born ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Continue with change: “After he completed ..., he became ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Add one more fact: “He traveled ...”, “He lived ...”, or “He was ... when ...”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'yunus-a2-language-2-past-habit-chunks',
      type: 'multiple-choice',
      title: 'Why Did They Say “Poor”?',
      instructions: 'Read the sentences from Chapter 2. Then choose the best answer.',
      question: '“Dervishes were fully aware that they were in need of Allah in every way. That is why, even if they were rich, they always called themselves poor.” Why did the dervishes call themselves poor?',
      options: [
        'They had no money.',
        'They knew that they needed Allah in every way.',
        'They wanted people to give them charity.',
      ],
      correctAnswer: 1,
      explanation: '“That is why” points back to the sentence before it. That sentence gives the reason: they knew they needed Allah. “Even if they were rich” means: also at times when they had money. So “poor” here is not about money.',
      feedback: {
        correct: 'Correct. “That is why” points back to the reason: they needed Allah in every way.',
        incorrect: 'Look at the sentence before “That is why”. It gives the reason. And “even if they were rich” tells us they sometimes had money.',
      },
    },
    {
      id: 'yunus-a2-language-2-reason-contrast-links',
      type: 'choose-form',
      title: 'But, Because Of, Were Not',
      instructions: 'Choose the correct word or words to complete each sentence from Chapter 2.',
      question: 'Which form fits each sentence about the dervishes?',
      formChoices: [
        {
          sentence: 'If they were wealthy, their wealth was not in their hearts, [choice] in their hands to give to charity.',
          options: ['and', 'but', 'so'],
          answer: 1,
        },
        {
          sentence: '[choice] the Creator, they forgave and tolerated the others.',
          options: ['Because', 'Even if', 'Because of'],
          answer: 2,
        },
        {
          sentence: 'They were kind and cheerful; they [choice] cold or sulky.',
          options: ['were not', 'did not', 'not were'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Not … but …” takes away one idea and gives the right one: not in their hearts, but in their hands. “Because of” comes before a noun (“because of the Creator”); “because” needs a full sentence after it. With an adjective in the past, use “were not”: “they were not cold or sulky”.',
      feedback: {
        correct: 'Well done. You chose the right linking word and the right past form.',
        incorrect: 'Read Chapter 2 again. Is there a noun after the gap or a full sentence? Is the word after the gap an adjective (cold, sulky)?',
      },
    },
    {
      id: 'yunus-a2-language-2-character-portrait',
      type: 'reflection',
      title: 'Say It: Character Portrait',
      instructions: 'Describe the dervishes in three short sentences using language from Chapter 2.',
      question: 'Can you describe both their character and their actions without simply copying one sentence?',
      correctAnswer: null,
      explanation: 'A strong A2 response combines one character description, one repeated action and one contrast or reason from the chapter.',
      feedback: {
        correct: 'Use accurate Chapter 2 language to describe character, action and contrast.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe character: “They were ... and ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Describe an action: “They tried to ...” or “They shared ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Add a contrast or reason: “They called themselves poor, but ...” or “Because of ..., they ...”', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'yunus-a2-language-3-need-must-cant',
      type: 'matching',
      title: 'What Does the Poem Mean?',
      instructions: 'Read the lines from Yunus Emre’s poem in Chapter 3. Match each line with its meaning.',
      question: 'What does a dervish need to be like, and what must he do?',
      matchingHeadings: { left: 'Line from the poem', right: 'Meaning' },
      matchingPairs: [
        { left: 'He needs to be as easy going as a sheep.', right: 'He is calm and gentle with everyone.' },
        { left: 'He must be without hands when someone hits him.', right: 'He does not fight back.' },
        { left: 'He must be tongueless when people make fun of him.', right: 'He says nothing back to rude people.' },
        { left: 'A dervish needs to be without any desires (selfless).', right: 'He wants nothing for himself.' },
      ],
      correctAnswer: {
        'He needs to be as easy going as a sheep.': 'He is calm and gentle with everyone.',
        'He must be without hands when someone hits him.': 'He does not fight back.',
        'He must be tongueless when people make fun of him.': 'He says nothing back to rude people.',
        'A dervish needs to be without any desires (selfless).': 'He wants nothing for himself.',
      },
      explanation: 'The poem uses pictures, not real body parts: “without hands” means he does not hit back, and “tongueless” means he does not answer rude words. “Needs to” and “must” tell us what is necessary for a dervish. The last line of each verse, “You can’t be a dervish”, says that this path is very hard.',
      feedback: {
        correct: 'Good. You understood the pictures in the poem.',
        incorrect: 'Read the poem again. Ask: What does a person “without hands” not do? What does a “tongueless” person not do?',
      },
    },
    {
      id: 'yunus-a2-language-3-living-with-less',
      type: 'choose-form',
      title: 'Ate, Slept, Spent',
      instructions: 'These sentences from Chapter 3 are about the past. Choose the correct past form.',
      question: 'How did the dervishes live?',
      formChoices: [
        {
          sentence: 'Dervishes had a way of life of their own. They [choice] less, …',
          options: ['eated', 'ate', 'eat'],
          answer: 1,
        },
        {
          sentence: '… spoke less, [choice] less, …',
          options: ['sleep', 'sleeped', 'slept'],
          answer: 2,
        },
        {
          sentence: '… and [choice] their time on useful activities.',
          options: ['spent', 'spended', 'spend'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Eat”, “sleep” and “spend” are irregular verbs. Their past forms are “ate”, “slept” and “spent”, not “eated”, “sleeped” or “spended”. With “less”, the sentence shows a simple, disciplined life.',
      feedback: {
        correct: 'Correct. You used the irregular past forms.',
        incorrect: 'Look at the paragraph after the poem in Chapter 3. These verbs do not take -ed in the past.',
      },
    },
    {
      id: 'yunus-a2-language-3-difficult-path',
      type: 'reflection',
      title: 'Say It: The Difficult Path',
      instructions: 'Use the language of Chapter 3 to explain the dervish path in three short sentences.',
      question: 'Can you combine a need, a strong requirement and one disciplined habit?',
      correctAnswer: null,
      explanation: 'A strong A2 response reuses the chapter’s own language functions rather than memorising a grammar rule.',
      feedback: {
        correct: 'Use one sentence with needs, one with must, and one about the disciplined way of life.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State a need: “A dervish needs ...”', mode: 'Individual' },
        { question: 'Sentence 2 — State a strong requirement: “He must ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Describe the lifestyle: “Dervishes ate/spoke/slept less and ...”', mode: 'Pair' },
      ],
    },
  ],
  4: [
    {
      id: 'yunus-a2-language-4-service-language',
      type: 'true-false',
      title: 'How Often?',
      instructions: 'Read the sentence from Chapter 4. Is the statement true or false?',
      question: '“But he never cut or brought green or crooked wood.” — Statement: Yunus sometimes brought crooked wood to the dervish house.',
      correctAnswer: false,
      explanation: '“Never” means “not one time”. So Yunus did not bring crooked wood at any time. Chapter 4 also uses “every day” (a daily action) and “always” (at all times) to show Yunus’s routine.',
      feedback: {
        correct: 'Correct. “Never” means not one time, so the statement is false.',
        incorrect: 'Look at the word “never” in the sentence. Does it mean “sometimes” or “not one time”?',
      },
    },
    {
      id: 'yunus-a2-language-4-frequency-routine',
      type: 'word-bank',
      title: 'A Promise and a Routine',
      instructions: 'Complete the lines from Chapter 4 with words from the bank. Two words are not needed.',
      question: 'Which words show Yunus’s promise, Taptuk’s request and Yunus’s routine?',
      fillBlanksText: 'He told his master, “I [blank] do whatever service you ask of me.” … Taptuk asked Yunus [blank] collect wood from the mountain. [blank] day, Yunus carried wood on his back from the mountain. … He [blank] said, “Crooked wood cannot go into the dervish house.”',
      wordBank: ['will', 'to', 'Every', 'always', 'for', 'am'],
      correctAnswer: ['will', 'to', 'Every', 'always'],
      explanation: '“I will …” makes a promise. “Asked + person + to + verb” tells us what someone asked another person to do: “asked Yunus to collect wood”. “Every day” is a daily action, and “always” means at all times. Learners often say “I am do” or “asked him for collect”, but English needs “I will do” and “asked him to collect”.',
      feedback: {
        correct: 'Well done. You completed the promise, the request and the routine.',
        incorrect: 'Read the second and third paragraphs of Chapter 4 again. After “asked Yunus”, which small word comes before “collect”?',
      },
    },
    {
      id: 'yunus-a2-language-4-service-routine',
      type: 'reflection',
      title: 'Say It: Service and Routine',
      instructions: 'Use Chapter 4 language to describe Yunus’s attitude and daily service in three short sentences.',
      question: 'Can you combine willingness, a promise and a repeated routine?',
      correctAnswer: null,
      explanation: 'A strong A2 response moves from language noticed in the chapter to a short spoken description of Yunus’s behaviour.',
      feedback: {
        correct: 'Use one sentence about willingness, one about his promise, and one about his daily routine.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe readiness: “Yunus was willing to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Report his promise: “He said, ‘I will ...’”', mode: 'Individual' },
        { question: 'Sentence 3 — Describe the routine: “Every day he ..., but he never ...”', mode: 'Pair' },
      ],
    },
  ],
};
