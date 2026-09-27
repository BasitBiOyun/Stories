import type { Exercise } from '../../../../types';

/**
 * Manually authored Yunus Emre B1 Language Focus (Chapters 1–3), derived from the actual English story text.
 * Each chapter follows Notice → Build → Use: learners first discover what a form does in a real chapter
 * sentence, then practise it in context, then use it in a new situation. Every quoted sentence comes from
 * the English chapter.
 */
export const yunusB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'yunus-b1-language-1-definition-method',
      type: 'multiple-choice',
      title: 'What Does “By + -ing” Tell Us?',
      instructions: 'Read the sentence from Chapter 1. Then choose the best answer.',
      question: '“A Sûfî is a person who aims to get closer to Allah by following Islamic mysticism.” What does “by following Islamic mysticism” tell us?',
      options: [
        'why a person decides to become a Sûfî',
        'how a Sûfî tries to reach this aim',
        'what happens after a Sûfî reaches this aim',
        'when a person starts to follow this path',
      ],
      correctAnswer: 1,
      explanation: 'The sentence is built in three steps. “A person who …” defines a person by what they do. “Aims to + verb” gives the aim (to get closer to Allah). “By + -ing” gives the method: the way the aim is reached (by following Islamic mysticism). Compare: “She improved her English by reading every day.”',
      feedback: {
        correct: 'Correct. “By + -ing” names the way or method used to reach an aim.',
        incorrect: 'Read the sentence again. The aim is “to get closer to Allah”. Does “by following …” give a reason, a time, or the way this aim is reached?',
      },
    },
    {
      id: 'yunus-b1-language-1-parallel-actions',
      type: 'error-correction',
      title: 'Keep the List Parallel',
      instructions: 'Each sentence from Chapter 1 has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Which form do the principles in the list and the phrase after “In addition to” need?',
      errorItems: [
        {
          sentence: 'Sûfis follow moral principles such as seeking to improve and become better people, being patient in times of need, give generously …',
          error: 'give',
          options: ['giving', 'to give', 'gave'],
          answer: 0,
        },
        {
          sentence: '… responding to evil with kindness, and not attach importance to worldly matters such as wealth, status, and fame.',
          error: 'not attach',
          options: ['not to attach', 'not attaching', 'no attaching'],
          answer: 1,
        },
        {
          sentence: 'In addition to be a Sûfî, Yunus Emre was one of the first to write and say poems in simple Turkish.',
          error: 'to be',
          options: ['being', 'for being', 'to being'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'The list of principles after “such as” uses the same form every time: seeking, being, giving, doing, responding, not attaching. Keeping the list parallel makes the principles sound like parts of one way of life. The negative form is “not + -ing”. “In addition to” is a preposition, so it is followed by an -ing form: “In addition to being a Sûfî …”.',
      feedback: {
        correct: 'Well done. You kept the list parallel and used -ing after “in addition to”.',
        incorrect: 'Look at the second paragraph of Chapter 1: every principle in the list starts with an -ing form. Then check the first words of the third paragraph.',
      },
    },
    {
      id: 'yunus-b1-language-1-addition-description-result',
      type: 'transformation',
      title: 'Say It Another Way',
      instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 1.',
      question: 'Can you express the same aim, contribution and reputation with a different structure?',
      transformItems: [
        {
          source: 'A Sûfî is a person who aims to get closer to Allah by following Islamic mysticism.',
          frame: 'A Sûfî follows Islamic mysticism [blank] get closer to Allah.',
          answers: ['to', 'in order to', 'so as to'],
        },
        {
          source: 'The words and phrases which he used helped develop a better literary Turkish.',
          frame: 'He used words and phrases [blank] develop a better literary Turkish.',
          answers: ['which helped', 'that helped', 'which helped to', 'that helped to'],
        },
        {
          source: 'Yunus Emre is known as one of the founders of Turkish Sûfî literature.',
          frame: 'People [blank] Yunus Emre as one of the founders of Turkish Sûfî literature.',
          answers: ['know', 'see', 'regard', 'recognise', 'recognize', 'remember'],
        },
      ],
      correctAnswer: null,
      explanation: '“By + -ing” gives the method; when the method comes first, “(in order) to + verb” gives the aim: “follows Islamic mysticism to get closer to Allah”. A “which/that” clause can describe the words and at the same time say what they did: “words and phrases which helped develop …”. “Help + verb” needs no “to”, but “help to + verb” is also correct. “Is known as” is the passive of “people know … as”.',
      feedback: {
        correct: 'Well done. You kept the meaning and changed the structure.',
        incorrect: 'Look at each sentence from Chapter 1 again: what is the aim, what did his words do, and how do people see him? Then fit that meaning into the new frame.',
      },
    },
    {
      id: 'yunus-b1-language-1-production',
      type: 'reflection',
      title: 'Describe a Person, Practice, and Contribution',
      instructions: 'Write or say five to six connected B1 sentences about a real or imagined teacher, thinker, artist, or community figure. Do not retell Chapter 1.',
      question: 'Can you define the person, explain one aim and how it is pursued, list two or three principles in parallel form, and add a contribution or reputation?',
      correctAnswer: null,
      explanation: 'A strong answer should form one short connected paragraph. Useful patterns include “a person who...”, “aims to... by -ing...”, parallel -ing forms, “without -ing...”, “in addition to...”, “which...”, “helped...”, and “is known as...”.',
      feedback: {
        correct: 'Keep the ideas connected so the paragraph develops one clear description.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Define the person with “a person who...”.', mode: 'Individual' },
        { question: 'Sentence 2 — State one aim and explain the method with “by + -ing”.', mode: 'Individual' },
        { question: 'Sentence 3–4 — Give two or three principles using parallel forms; use “without” or a negative form where natural.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Add another role, contribution, or reputation using “in addition to...”, “which...”, “helped...”, or “is known as...”.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'yunus-b1-language-2-cause-balance-effect',
      type: 'matching',
      title: 'What Do These Phrases Mean?',
      instructions: 'Match each phrase from Chapter 2 with its meaning in plain English.',
      question: 'How does the first paragraph explain why people love Yunus Emre’s works?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'due to his style', right: 'because of the way he writes' },
        { left: 'neither too simple nor too complex', right: 'in the middle: not basic and not hard' },
        { left: 'combine great literary quality with simple language', right: 'are artistic and plain at the same time' },
        { left: 'helps people understand his writings and sayings easily', right: 'lets readers follow his words without effort' },
        { left: 'still have a significant influence on Turkish culture and society', right: 'continue to shape Turkish life today' },
      ],
      correctAnswer: {
        'due to his style': 'because of the way he writes',
        'neither too simple nor too complex': 'in the middle: not basic and not hard',
        'combine great literary quality with simple language': 'are artistic and plain at the same time',
        'helps people understand his writings and sayings easily': 'lets readers follow his words without effort',
        'still have a significant influence on Turkish culture and society': 'continue to shape Turkish life today',
      },
      explanation: '“Due to + noun” gives a reason, like “because of”. “Neither … nor …” says no to both extremes, so the style is balanced. “Combine A with B” joins two qualities. “Help + person + verb” shows what something makes possible. “Still” shows that an influence from the past continues now.',
      feedback: {
        correct: 'Good. You understood how the paragraph gives a reason, a balance, a combination, an effect and a continuing influence.',
        incorrect: 'Read the first paragraph of Chapter 2 again. Ask which phrase gives a reason, which one describes a balance, and which one says the influence continues today.',
      },
    },
    {
      id: 'yunus-b1-language-2-source-stance',
      type: 'choose-form',
      title: 'Report History Carefully',
      instructions: 'Choose the word or phrase that completes each sentence from Chapter 2.',
      question: 'How does the writer show where information comes from and how certain it is?',
      formChoices: [
        {
          sentence: '[choice] historical sources, he lived during the same era as important people like Hacı Bektaş-ı Veli and Mevlana Celaleddin Rumi.',
          options: ['Due to', 'According to', 'According'],
          answer: 1,
        },
        {
          sentence: 'He was born [choice] 1240–1241 …',
          options: ['around', 'exactly in', 'since'],
          answer: 0,
        },
        {
          sentence: 'Some sources [choice] that he received a good madrasa education …',
          options: ['says', 'tell', 'say'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“According to + source” shows where the information comes from; “due to” gives a reason, not a source. “Around” shows an approximate date: the sources do not agree on one exact year, so the chapter gives a range. “Some sources say that …” shows that only part of the evidence reports this, so it is less certain. “Sources” is plural, so the verb is “say”; “tell” needs a person after it (tell someone).',
      feedback: {
        correct: 'Correct. You kept the writer’s careful attitude to historical evidence.',
        incorrect: 'Read the second paragraph of Chapter 2 again. Notice how the writer names the source, gives approximate dates, and shows that only some sources report the education.',
      },
    },
    {
      id: 'yunus-b1-language-2-education-contrast',
      type: 'word-bank',
      title: 'Two Kinds of Learning',
      instructions: 'Complete the lines from Chapter 2 with words from the bank. Two words are not needed.',
      question: 'How does the chapter add a second kind of learning and explain what the tekke was?',
      fillBlanksText: '… he received a good madrasa education and had a strong knowledge of Arabic, Persian, and the Islamic sciences of his time. But he [blank] studied Allah’s love and morals at the tekke, [blank] was a place where Sûfî education was [blank] under the guidance of a sheikh (spiritual tutor).',
      wordBank: ['also', 'which', 'taught', 'who', 'teaching'],
      correctAnswer: ['also', 'which', 'taught'],
      explanation: '“But … also” adds a second kind of learning without cancelling the first: he studied at the madrasa and at the tekke. “Which” (not “who”) introduces extra information about a place or thing. “Was taught” is passive: the focus is on the education, not on the person who taught it.',
      feedback: {
        correct: 'Well done. You added the second kind of learning and explained the tekke correctly.',
        incorrect: 'Check the last sentence of Chapter 2. Remember: “who” is for people, and after “was” we need a past participle for the passive.',
      },
    },
    {
      id: 'yunus-b1-language-2-production',
      type: 'reflection',
      title: 'Write a Balanced, Evidence-Aware Profile',
      instructions: 'Write or say five to six connected B1 sentences about a real or imagined writer, artist, teacher, or historical figure. Do not retell Chapter 2.',
      question: 'Can you evaluate one quality between two extremes, explain why it is effective, report one source-based claim carefully, and connect two kinds of learning or experience?',
      correctAnswer: null,
      explanation: 'A strong response should develop one short profile rather than separate answers. Useful patterns include “due to...”, “neither too... nor too...”, “combine... with...”, “helps ... + verb”, “still...”, “according to...”, “some sources say that...”, “around...”, “but ... also...”, and a “which/where” clause when useful.',
      feedback: {
        correct: 'Keep the evaluation, evidence, and learning experiences connected in one coherent profile.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1–2 — Give a balanced evaluation and explain its effect or reason.', mode: 'Individual' },
        { question: 'Sentence 3 — Combine two strengths or qualities in one sentence.', mode: 'Individual' },
        { question: 'Sentence 4 — Report one claim with an appropriate source marker or approximate detail.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Add a second kind of learning or experience and explain the place or guidance involved.', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'yunus-b1-language-3-addition-emphasis',
      type: 'drag-drop',
      title: 'Adding Information or Showing Cause?',
      instructions: 'Read each sentence from Chapter 3. Does it add more information, or does it show a cause or a result? Put it in the right group.',
      question: 'How are the two paragraphs of Chapter 3 built differently?',
      dragDropGroups: [
        {
          group: 'Adds more information',
          items: [
            'They were also important community organizations that helped people and brought them together.',
            'Furthermore, they received support from government officials.',
            'These places were very important for fine arts too, especially poetry.',
          ],
        },
        {
          group: 'Shows a cause or a result',
          items: [
            'The Anatolian Seljuks were seriously weakened by the Babai revolts in the 13th century.',
            'The defeat caused the Mongols\' invasion of Anatolia.',
            'Because of these hard circumstances, Anatolia faced serious political, economic, and social problems.',
          ],
        },
      ],
      correctAnswer: {
        'Adds more information': [
          'They were also important community organizations that helped people and brought them together.',
          'Furthermore, they received support from government officials.',
          'These places were very important for fine arts too, especially poetry.',
        ],
        'Shows a cause or a result': [
          'The Anatolian Seljuks were seriously weakened by the Babai revolts in the 13th century.',
          'The defeat caused the Mongols\' invasion of Anatolia.',
          'Because of these hard circumstances, Anatolia faced serious political, economic, and social problems.',
        ],
      },
      explanation: 'The first paragraph builds a fuller picture of the tekkes: “not only … also”, “furthermore” and “too” add points, and “especially” highlights one example. The second paragraph builds a chain: “weakened by” names a cause, “caused” gives a result, and “because of + noun” links the hard circumstances to the problems.',
      feedback: {
        correct: 'Correct. You saw that the first paragraph adds information and the second builds a cause-and-result chain.',
        incorrect: 'Look for adding words (also, furthermore, too) and for cause-and-result words (weakened by, caused, because of).',
      },
    },
    {
      id: 'yunus-b1-language-3-overlap-change',
      type: 'choose-form',
      title: 'Background and Event',
      instructions: 'Choose the correct form to complete each sentence from Chapter 3.',
      question: 'Which form shows a situation that was still continuing, and which shows a new event?',
      formChoices: [
        {
          sentence: 'While the negative effects of these revolts [choice], the defeat at Kösedağ …',
          options: ['were still feeling', 'were still being felt', 'are still being felt'],
          answer: 1,
        },
        {
          sentence: 'While the negative effects …, the defeat at Kösedağ [choice].',
          options: ['took place', 'has taken place', 'takes place'],
          answer: 0,
        },
        {
          sentence: 'People were struggling to [choice] these tough situations.',
          options: ['cope', 'cope with', 'coping with'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“While” + past continuous sets up a background situation that was still going on. The effects did not feel anything; people felt them, so the form is passive: “were still being felt”. The new, finished event is in the past simple: “the defeat … took place”. “Cope with + noun” means to manage a difficult situation.',
      feedback: {
        correct: 'Correct. You separated the continuing background from the new event.',
        incorrect: 'Read the second paragraph of Chapter 3. Which part was still continuing, and which event happened during it? Remember that “cope” needs “with” before a noun.',
      },
    },
    {
      id: 'yunus-b1-language-3-cause-result-coping',
      type: 'transformation',
      title: 'Same Cause, New Sentence',
      instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 3.',
      question: 'Can you express the same cause and result with a different structure?',
      transformItems: [
        {
          source: 'The Anatolian Seljuks were seriously weakened by the Babai revolts in the 13th century.',
          frame: 'The Babai revolts [blank] the Anatolian Seljuks in the 13th century.',
          answers: ['seriously weakened', 'weakened', 'badly weakened'],
        },
        {
          source: 'The defeat caused the Mongols\' invasion of Anatolia.',
          frame: 'The Mongols invaded Anatolia [blank] the defeat.',
          answers: ['because of', 'as a result of', 'due to', 'as a consequence of'],
        },
      ],
      correctAnswer: null,
      explanation: 'A passive sentence with “by” puts the affected side first: “The Seljuks were weakened by the revolts.” The active sentence puts the cause first: “The revolts weakened the Seljuks.” “X caused Y” can also be said the other way round: “Y happened because of / as a result of X.”',
      feedback: {
        correct: 'Well done. You kept the same cause and result in a new structure.',
        incorrect: 'Ask who or what did the action in each sentence from Chapter 3, and what happened because of it. Then fit that into the new frame.',
      },
    },
    {
      id: 'yunus-b1-language-3-production',
      type: 'reflection',
      title: 'Explain Change in a Difficult Period',
      instructions: 'Write or say five to six connected B1 sentences about a real or imagined community facing change. Do not retell Chapter 3.',
      question: 'Can you broaden a description, highlight one important example, show an ongoing situation interrupted by a new event, and explain a cause-result-response chain?',
      correctAnswer: null,
      explanation: 'A strong response should form one connected account. Useful patterns include “not only ... but also...”, “furthermore”, “too”, “especially”, “while ... was/were still...”, “caused...”, “because of...”, and “struggle to cope with...”.',
      feedback: {
        correct: 'Keep the ideas connected so the description develops into a clear sequence of pressure, change, and response.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1–2 — Describe a place, group, or organization with “not only ... but also...” and add one further point.', mode: 'Individual' },
        { question: 'Sentence 3 — Highlight one example with “especially” or add a useful “who/which” clause.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “while” to place a new event inside an ongoing past situation.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Explain one cause, one consequence, and how people tried to cope.', mode: 'Pair' },
      ],
    },
  ],
};
