import type { Exercise } from '../../../../types';

/**
 * A2 Language Focus work for the final story chapters of Yunus Emre (Look → Practise → Use).
 * Every quoted sentence comes from the English chapter text.
 */
export const yunusA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  7: [
    {
      id: 'yunus-a2-language-7-story-sequence',
      type: 'sequencing',
      title: 'Tell the Flower Story in Order',
      instructions: 'Put the sentences from Chapter 7 in the order the events happen.',
      question: 'What happened first, next and last?',
      sequencingItems: [
        { id: '1', text: 'One day, Taptuk Emre said to his students, “Today, all of you go up the mountain and bring me flowers.”' },
        { id: '2', text: 'They picked flowers and ran back to their teacher.' },
        { id: '3', text: 'Yunus was the last to return.' },
        { id: '4', text: 'They whispered in each other’s ears, “Just look at him! …”' },
        { id: '5', text: 'Yunus replied, “My teacher, I walked around the fields, …”' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: '“One day” starts a story. Then the dervishes pick flowers and come back; Yunus comes back last, “in the late afternoon”. Some dervishes laugh at him, Taptuk asks about the daisy, and Yunus answers.',
      feedback: {
        correct: 'Correct. You told the story in the right order.',
        incorrect: 'Read Chapter 7 again. Start with “One day”. Who comes back first: the other dervishes or Yunus?',
      },
    },
    {
      id: 'yunus-a2-language-7-quantity-groups',
      type: 'choose-form',
      title: 'Some, Any, A Single',
      instructions: 'Choose the correct word to complete each sentence from Chapter 7.',
      question: 'How many dervishes? How many flowers?',
      formChoices: [
        {
          sentence: '[choice] dervishes were making fun of Yunus.',
          options: ['Any', 'Some', 'Every'],
          answer: 1,
        },
        {
          sentence: '“Just look at him! All he could find was [choice] daisy!”',
          options: ['a single', 'a some', 'any'],
          answer: 0,
        },
        {
          sentence: 'I could not cut [choice] of them.',
          options: ['none', 'some', 'any'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Some” means part of a group, not everyone: some dervishes laughed. “A single” means only one: a single daisy. After “not”, use “any”: “I could not cut any of them” means he cut not one flower. “Could not … none” is a double negative, so it is wrong.',
      feedback: {
        correct: 'Well done. You used some, a single and any correctly.',
        incorrect: 'Read the second paragraph of Chapter 7. Did all the dervishes laugh, or only part of the group? Which word comes after “not”?',
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
  8: [
    {
      id: 'yunus-a2-language-8-advice-necessity-result',
      type: 'multiple-choice',
      title: 'Must or Should?',
      instructions: 'Read the two parts of sentences from Chapter 8. Then choose the best answer.',
      question: 'A: “Our hearts must be full of love for Him …” B: “… we should do it well and correctly …” Which word gives the stronger rule?',
      options: [
        'should',
        'must',
        'They are the same.',
      ],
      correctAnswer: 1,
      explanation: '“Must” is strong: it says something is necessary. “Should” is softer: it gives good advice. Both come before the base verb: “must be”, “should do”. In “Every job is important, so we should do it well”, “so” shows the result of the first idea.',
      feedback: {
        correct: 'Correct. “Must” is stronger than “should”.',
        incorrect: 'Read the last paragraph of Chapter 8 again. Think: a school rule says “You must …”; a friend’s advice says “You should …”. Which one is stronger?',
      },
    },
    {
      id: 'yunus-a2-language-8-so-result',
      type: 'matching',
      title: 'Yunus’s Message',
      instructions: 'Match the beginnings and endings to make sentences from Chapter 8.',
      question: 'Which ending completes each sentence about Yunus’s message?',
      matchingHeadings: { left: 'Beginning', right: 'Ending' },
      matchingPairs: [
        { left: 'Yunus tells us', right: 'to always remember Allah in our hearts' },
        { left: 'He says that we', right: 'must always do our best when we work' },
        { left: 'This helps us', right: 'live a meaningful and fruitful life' },
        { left: 'At least pick me', right: 'and let my life end in the hands of a dervish' },
      ],
      correctAnswer: {
        'Yunus tells us': 'to always remember Allah in our hearts',
        'He says that we': 'must always do our best when we work',
        'This helps us': 'live a meaningful and fruitful life',
        'At least pick me': 'and let my life end in the hands of a dervish',
      },
      explanation: '“Tell + person + to + verb” gives someone’s advice: “Yunus tells us to always remember Allah.” “Help + person + verb” shows a good result: “This helps us live a meaningful life.” “Let + person/thing + verb” asks for permission: “let my life end in the hands of a dervish”.',
      feedback: {
        correct: 'Good. You rebuilt the sentences of Yunus’s message.',
        incorrect: 'Read Chapter 8 again. After “tells us”, we need “to”. After “helps us”, we need a verb without “to”.',
      },
    },
    {
      id: 'yunus-a2-language-8-daily-life-message',
      type: 'reflection',
      title: 'Say It: A Meaningful Daily Life',
      instructions: 'Use the final chapter’s language to give four short pieces of advice for daily life.',
      question: 'Can you apply Yunus’s closing lesson to your own daily actions using tells us to, must, should and helps us?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language from the story to a simple personal message about everyday behaviour.',
      feedback: {
        correct: 'Use the sentence starters to turn the chapter’s language into clear daily-life advice.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Report the message: “Yunus tells us to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — State a strong responsibility: “We must ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Give practical advice: “We should ... because/so ...”', mode: 'Pair' },
        { question: 'Sentence 4 — State the result: “This helps us ...”', mode: 'Pair' },
      ],
    },
  ],
};
