import type { Exercise } from '../../../../types';

/**
 * B2 Language Focus for Yunus Emre, Chapters 9–13.
 * Each chapter follows Notice → Build → Use. Every quoted sentence comes from
 * the English chapter text; quoted verses are only read, sorted or matched.
 */
const reflectionFeedback = { correct: 'Well done. Check that each target pattern carries a clear relationship in your paragraph.', incorrect: 'Return to the chapter sentences that use these patterns and model your own sentences on them.' };
const refl = (id: string, title: string, q: string, p: string[], e: string): Exercise => ({ id, type: 'reflection', title, instructions: 'Produce a short analytical B2 response.', question: q, correctAnswer: null, explanation: e, feedback: reflectionFeedback, discussionPrompts: p.map(question => ({ question, mode: 'Individual' })) });

export const yunusB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  9: [
    {
      id: 'yu-b2-lf9-1',
      type: 'drag-drop',
      title: 'Purpose, Conclusion or Reason?',
      instructions: 'Read each sentence from Chapter 9. What does it do in the argument? Put it in the right group.',
      question: 'How does the chapter connect reality, love and unity?',
      dragDropGroups: [
        {
          group: 'It states a goal or purpose',
          items: [
            'The ultimate purpose of humanity is to reach unity with Allah.',
            'The purpose of love is to reach Allah and achieve unity in His presence.',
          ],
        },
        {
          group: 'It draws a conclusion from the ideas before it',
          items: [
            'In this sense, everything which is created is a reflection …',
            'Therefore, those who love the Creator love the created, …',
            'From this perspective, love and unity, which lie at the essence of his thought, are interrelated.',
          ],
        },
        {
          group: 'It gives a reason for the previous claim',
          items: [
            'For, according to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.',
          ],
        },
      ],
      correctAnswer: {
        'It states a goal or purpose': [
          'The ultimate purpose of humanity is to reach unity with Allah.',
          'The purpose of love is to reach Allah and achieve unity in His presence.',
        ],
        'It draws a conclusion from the ideas before it': [
          'In this sense, everything which is created is a reflection …',
          'Therefore, those who love the Creator love the created, …',
          'From this perspective, love and unity, which lie at the essence of his thought, are interrelated.',
        ],
        'It gives a reason for the previous claim': [
          'For, according to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.',
        ],
      },
      explanation: '“The (ultimate) purpose of … is to + verb” names a goal. “In this sense”, “Therefore” and “From this perspective” show that an idea follows from what came before. At the start of a sentence, “For” is a formal word meaning “because”: it explains why love and unity are interrelated.',
      feedback: {
        correct: 'Correct. You separated goals, conclusions and a reason.',
        incorrect: 'Look at the first words of each sentence. Is it naming a goal, drawing a conclusion, or explaining why? Note that “For” at the start of a sentence can mean “because”.',
      },
    },
    {
      id: 'yu-b2-lf9-2',
      type: 'word-bank',
      title: 'Where Love Stands',
      instructions: 'Complete the lines from Chapter 9 with words from the bank. Some words are not needed.',
      question: 'Which words complete the fixed expressions the writer uses to show how central love is?',
      fillBlanksText: 'Love, another important value that stands [blank] in Yunus Emre’s works, lies at the [blank] of his philosophy. … The love extends [blank] the love of Allah.',
      wordBank: ['out', 'core', 'to', 'up', 'off', 'on'],
      correctAnswer: ['out', 'core', 'to'],
      explanation: '“Stand out” means to be easy to notice because it is more important than others. “Lie at the core of” means to be the most central part of something. “Extend to” means to reach as far as something else. These fixed expressions help the writer present love as the centre of Yunus’s thought.',
      feedback: {
        correct: 'Correct. You completed three fixed expressions that show the central place of love.',
        incorrect: 'Read the third paragraph of Chapter 9 again. Which small word follows “stand” when something is especially noticeable, and which word follows “extends”?',
      },
    },
    refl('yu-b2-lf9-3', 'Connect Ideas Across Paragraphs', 'Explain how the chapter moves from “everything is a reflection” to love, harmony and religious practice.', ['Use in this sense, therefore, and while or at the same time.'], 'B2 discourse work should connect the conceptual and practical layers.'),
  ],
  10: [
    {
      id: 'yu-b2-lf10-1',
      type: 'matching',
      title: 'Three Types of Intellect',
      instructions: 'Match each expression from Chapter 10 with its meaning.',
      question: 'How does Yunus Emre describe intellect and its types?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'the practical reason', right: 'helps a person see how this world functions and keep daily life going' },
        { left: 'the limited intellect', right: 'gives knowledge about how the life after death is ordered' },
        { left: 'the universal intellect', right: 'leads a person to act with devotion to Allah' },
        { left: '“a light from Allah that has existed since eternity”', right: 'Yunus’s description of intellect in general' },
      ],
      correctAnswer: {
        'the practical reason': 'helps a person see how this world functions and keep daily life going',
        'the limited intellect': 'gives knowledge about how the life after death is ordered',
        'the universal intellect': 'leads a person to act with devotion to Allah',
        '“a light from Allah that has existed since eternity”': 'Yunus’s description of intellect in general',
      },
      explanation: 'The chapter defines each type of intellect with a relative clause: “which enables a person to understand how the world works”, “which teaches a person about the order of the hereafter”, “which guides one to behave with piety”. The phrase “describing it as …” introduces how Yunus sees intellect as a whole.',
      feedback: {
        correct: 'Correct. Each type of intellect is defined by what it does.',
        incorrect: 'Read the last paragraph of Chapter 10 and look at the clause that begins with “which” after each type of intellect.',
      },
    },
    {
      id: 'yu-b2-lf10-2',
      type: 'error-correction',
      title: 'Describing and Clarifying',
      instructions: 'Each sentence has one mistake. Tap the wrong word, then choose the correction.',
      question: 'Which forms does the writer use to describe, clarify and draw conclusions?',
      errorItems: [
        {
          sentence: 'Therefore, for Yunus Emre the love and the oneness of Allah is the values at the foundation of moral behavior.',
          error: 'is',
          options: ['are', 'was', 'be'],
          answer: 0,
        },
        {
          sentence: 'It is “the throne of the Lord,” that is, the place which Allah manifests Himself.',
          error: 'which',
          options: ['that', 'where', 'whom'],
          answer: 1,
        },
        {
          sentence: 'For this reason, he described breaking a heart like destroying Allah’s house.',
          error: 'like',
          options: ['such as', 'as', 'to'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: 'A subject joined with “and” (“the love and the oneness of Allah”) takes a plural verb: “are the values”. “That is” introduces a clarification, and a place is followed by “where” (or “in which”): “the place where Allah manifests Himself”. The verb “describe” takes “as”: “describe X as Y”. “For this reason” turns the description of the heart into a moral conclusion.',
      feedback: {
        correct: 'Correct. You fixed the agreement, the relative word for a place and the pattern “describe X as Y”.',
        incorrect: 'Check the first two paragraphs of Chapter 10: how many things are “the values”, what word follows “the place”, and which word follows “described breaking a heart”?',
      },
    },
    refl('yu-b2-lf10-3', 'Clarify, Then Infer', 'Explain the heart metaphor and one moral consequence without presenting the metaphor as a literal anatomical claim.', ['Use is described as, that is, and for this reason.'], 'The task practices clarification and responsible inference.'),
  ],
  11: [
    {
      id: 'yu-b2-lf11-1',
      type: 'drag-drop',
      title: 'Must and May',
      instructions: 'Read each line from Chapter 11. What does “must” or “may” express? Put it in the right group.',
      question: 'Does “must” always mean the same thing?',
      dragDropGroups: [
        {
          group: 'must: something is necessary to reach a goal',
          items: [
            '… for a person to reach salvation, heart and reason must support one another.',
          ],
        },
        {
          group: 'must: something will certainly happen to everyone',
          items: [
            'Whoever comes into this world must eventually leave it,',
            'A guest in this world, one day they must set out for their homeland',
          ],
        },
        {
          group: 'may: a wish or prayer for someone',
          items: [
            'May your intelligence / wisdom save you from all troubles',
            'May happiness be yours for all the months and years to come',
          ],
        },
      ],
      correctAnswer: {
        'must: something is necessary to reach a goal': [
          '… for a person to reach salvation, heart and reason must support one another.',
        ],
        'must: something will certainly happen to everyone': [
          'Whoever comes into this world must eventually leave it,',
          'A guest in this world, one day they must set out for their homeland',
        ],
        'may: a wish or prayer for someone': [
          'May your intelligence / wisdom save you from all troubles',
          'May happiness be yours for all the months and years to come',
        ],
      },
      explanation: 'In the prose sentence, “must” states a necessary condition: salvation needs heart and reason to work together. In the verse about death, “must” expresses inevitability: no one can avoid leaving this world. At the start of a sentence, “May …” expresses a wish or a prayer, not permission or possibility.',
      feedback: {
        correct: 'Correct. You saw that “must” can express necessity or inevitability, and that “May …” can express a wish.',
        incorrect: 'Ask what each line is about: a goal someone needs to reach, something that happens to every human, or a good wish for someone.',
      },
    },
    {
      id: 'yu-b2-lf11-2',
      type: 'transformation',
      title: 'Saying It Another Way',
      instructions: 'Complete each sentence so that it keeps the meaning of the chapter sentence. Type only the missing words.',
      question: 'Can you express purpose, comparison and role with different structures?',
      transformItems: [
        {
          source: '… he emphasizes that for a person to reach salvation, heart and reason must support one another.',
          frame: '… he emphasizes that heart and reason must support one another [blank] a person can reach salvation.',
          answers: ['so that', 'in order that', 'so'],
        },
        {
          source: 'According to him, death is the best advisor for humanity, …',
          frame: 'According to him, there is no [blank] advisor for humanity than death.',
          answers: ['better', 'greater'],
        },
        {
          source: 'A person who lives with an understanding of death’s advisory role lives a meaningful and righteous life.',
          frame: 'A person who lives with an understanding of the role of death as an [blank] lives a meaningful and righteous life.',
          answers: ['advisor', 'adviser'],
        },
      ],
      correctAnswer: null,
      explanation: '“For a person to reach salvation” (for + person + to-infinitive) expresses purpose; a clause with “so that … can” says the same thing. A superlative (“the best advisor”) can be rephrased as “no better advisor than”. The adjective “advisory” describes a role; the noun “advisor” names the person or thing that gives advice.',
      feedback: {
        correct: 'Well done. You kept the meaning with a new structure.',
        incorrect: 'Check the purpose, the comparison and the word form in each item. Then read the first and second paragraphs of Chapter 11 again.',
      },
    },
    refl('yu-b2-lf11-3', 'Mortality as Advice', 'Explain how awareness of death can function as an advisor in the chapter’s moral framework.', ['Use must, can, and rather than. Write 5–6 sentences.'], 'The response should distinguish moral guidance from automatic cause.'),
  ],
  12: [
    {
      id: 'yu-b2-lf12-1',
      type: 'multiple-choice',
      title: 'How Did He Warn People?',
      instructions: 'Read the sentence from Chapter 12. Then choose what “by addressing …” shows.',
      question: '“Additionally, by addressing negative traits such as arrogance, anger, stinginess, greed, envy, backbiting, and slander, he warned people to stay away from these harmful habits.” What does “by addressing …” tell us?',
      options: [
        'why people had these negative traits',
        'the way he warned people: by speaking directly about these traits',
        'the time when he warned people about these traits',
        'the result of the warning: people stopped these habits',
      ],
      correctAnswer: 1,
      explanation: '“By + -ing” shows the method: how someone does something. Yunus warned people by speaking directly about the negative traits. “Such as” then introduces examples of these traits. The sentence does not say why people had them or whether they stopped.',
      feedback: {
        correct: 'Correct. “By + -ing” tells us how he warned people.',
        incorrect: 'Ask which question “by addressing …” answers: why, when, how, or with what result? Then read the first paragraph of Chapter 12.',
      },
    },
    {
      id: 'yu-b2-lf12-2',
      type: 'error-correction',
      title: 'Defining Morality Correctly',
      instructions: 'Each sentence has one mistake. Tap the wrong word or words, then choose the correction.',
      question: 'Which forms follow “consists of”, and which verbs agree with their subjects?',
      errorItems: [
        {
          sentence: 'According to Yunus, morality consists of abandon behaviors unbecoming of humans.',
          error: 'abandon',
          options: ['to abandon', 'abandoning', 'abandoned'],
          answer: 1,
        },
        {
          sentence: 'Values such as honesty, patience, humility, generosity, respect, trust in Allah, and modesty is important in Yunus Emre’s works.',
          error: 'is important',
          options: ['are important', 'being important', 'be important'],
          answer: 0,
        },
        {
          sentence: 'Through these values, Yunus Emre teach people the path to a righteous life.',
          error: 'teach',
          options: ['teaching', 'teaches', 'is teach'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“Consist of” is followed by a noun or an -ing form: “consists of abandoning”. In a long subject, find the head noun: “Values (such as honesty, …) are important”, because the examples after “such as” do not change the plural subject. A singular subject in the present simple takes -s: “Yunus Emre teaches”.',
      feedback: {
        correct: 'Correct. You fixed the form after “consists of” and the subject–verb agreement.',
        incorrect: 'Read the first paragraph of Chapter 12 again. What comes after “of”, and what is the main subject of each sentence?',
      },
    },
    {
      id: 'yu-b2-lf12-3',
      type: 'sentence-building',
      title: 'Two Functions at Once',
      instructions: 'Put the chunks in order to build the chapter’s claim about Yunus Emre’s poems.',
      question: 'How does the writer give the poems two functions in one sentence?',
      sentenceChunks: ['Yunus Emre\'s poems', 'are not only', 'literary works', 'but also', 'a moral guide'],
      correctAnswer: [['Yunus Emre\'s poems', 'are not only', 'a moral guide', 'but also', 'literary works']],
      explanation: '“Not only … but also …” adds a second, often more surprising, quality to the first. The poems are literary works, and they also guide people’s behaviour. The two parts after “not only” and “but also” have the same form (two noun phrases).',
      feedback: {
        correct: 'Correct. The sentence gives the poems a literary and a moral function.',
        incorrect: 'Start with the subject and the verb. Then put “not only” before the first quality and “but also” before the second one.',
      },
    },
    refl('yu-b2-lf12-4', 'Balanced Moral Paragraph', 'Write a paragraph contrasting two virtues with two harmful traits from the chapter.', ['Use such as, while, and not only ... but also.'], 'The production task organizes moral contrast without turning it into a vocabulary list.'),
  ],
};

export const yunusB2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  13: [
    {
      id: 'yu-b2-lf13-1',
      type: 'matching',
      title: 'Verses on Patience and Anger',
      instructions: 'Match each line of Yunus Emre’s verses in Chapter 13 with its meaning.',
      question: 'What do the verses teach about patience, anger and arrogance?',
      matchingHeadings: { left: 'From the verses', right: 'Meaning' },
      matchingPairs: [
        { left: '“Whoever possesses patience rises to the heavens,”', right: 'A person who can endure calmly reaches the highest spiritual rank.' },
        { left: '“For within patience lies every kind of skill”', right: 'Every kind of ability is hidden inside calm endurance.' },
        { left: '“Whoever is filled with anger loses their faith”', right: 'Uncontrolled rage takes away a person’s belief.' },
        { left: '“If faith is required, one must give up anger and arrogance”', right: 'To keep your belief, you have to leave rage and pride behind.' },
      ],
      correctAnswer: {
        '“Whoever possesses patience rises to the heavens,”': 'A person who can endure calmly reaches the highest spiritual rank.',
        '“For within patience lies every kind of skill”': 'Every kind of ability is hidden inside calm endurance.',
        '“Whoever is filled with anger loses their faith”': 'Uncontrolled rage takes away a person’s belief.',
        '“If faith is required, one must give up anger and arrogance”': 'To keep your belief, you have to leave rage and pride behind.',
      },
      explanation: '“Whoever …” means “any person who …” and introduces a general truth. In “For within patience lies every kind of skill”, “For” means “because”, and the order is inverted for emphasis (every kind of skill lies within patience). The second verse moves from a result (losing faith) to a necessary action (“one must give up …”).',
      feedback: {
        correct: 'Correct. You matched each line with its meaning.',
        incorrect: 'Read the two verses at the start of Chapter 13 again. Which lines speak about a reward, which about a hidden ability, which about a loss and which about what a person has to do?',
      },
    },
    {
      id: 'yu-b2-lf13-2',
      type: 'transformation',
      title: 'Stance and Addition',
      instructions: 'Complete each sentence so that it keeps the meaning of the chapter sentence. Type only the missing words.',
      question: 'How can you keep the writer’s certainty and the two parts of the legacy with different structures?',
      transformItems: [
        {
          source: 'It is obvious that Yunus Emre was not only a prominent figure in his own time but also left a lasting legacy.',
          frame: '[blank], Yunus Emre was not only a prominent figure in his own time but also left a lasting legacy.',
          answers: ['Obviously', 'Clearly', 'Evidently', 'Undoubtedly', 'Without doubt', 'Without a doubt', 'Of course'],
        },
        {
          source: 'It is obvious that Yunus Emre was not only a prominent figure in his own time but also left a lasting legacy.',
          frame: 'It is obvious that Yunus Emre left a lasting legacy [blank] being a prominent figure in his own time.',
          answers: ['in addition to', 'as well as', 'besides', 'apart from', 'aside from'],
        },
        {
          source: 'His writings are valuable not only as literary works but also as a moral guide for future generations.',
          frame: 'His writings are valuable [blank] as literary works and as a moral guide for future generations.',
          answers: ['both'],
        },
      ],
      correctAnswer: null,
      explanation: '“It is obvious that …” and a stance adverb such as “Obviously” or “Clearly” both show that the writer is certain. “Not only … but also” can be rephrased with “in addition to / as well as + -ing”, or with “both … and” when the two parts are equal.',
      feedback: {
        correct: 'Well done. You kept the writer’s certainty and both parts of the legacy.',
        incorrect: 'Read the last paragraph of Chapter 13 again. Which one-word adverb means “it is obvious that”, and which structures add a second quality?',
      },
    },
    refl('yu-b2-lf13-3', 'Final Synthesis', 'Write a 6–8 sentence conclusion explaining why Yunus Emre remains significant in this book.', ['Connect language/literature, historical context, Sûfî thought and moral guidance. Use both ... and plus one present-perfect form such as has continued to.'], 'The task asks learners to synthesize the whole book through B2 discourse rather than recall one fact.'),
  ],
};

export const yunusB2LanguageReviewExercises: Exercise[] = [
  // NOTICE — what the book's language does to a claim, across chapters.
  {
    id: 'yunus-b2-language-review-1-whose-claim', type: 'drag-drop', title: 'Notice: Whose Claim Is It?',
    instructions: 'Read each sentence from the book. Who is responsible for the claim: historical sources, Yunus Emre, or the writer? Put it in the right group.',
    question: 'How does the writer show whose claim each sentence makes?',
    dragDropGroups: [
      { group: 'The writer reports what sources or scholars say', items: ['Some sources note that he received a good madrasa education …', 'According to the widely accepted view, he was born in 1240–41 and died in 1320–21.', 'Sources say: “The Mongols slaughtered the people of the great cities and towns …”'] },
      { group: 'The writer reports Yunus Emre’s own view', items: ['For, according to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.', 'In his view, purity of the heart is essential for the proper performance of acts of worship.', 'According to Yunus, morality consists of abandoning behaviors unbecoming of humans.'] },
      { group: 'The writer makes the claim in their own voice', items: ['Society was struggling to cope with these trials.', 'These events created an atmosphere of panic in Anatolia that had never been seen before.', 'Anatolia was experiencing total chaos.'] },
    ],
    correctAnswer: {
      'The writer reports what sources or scholars say': ['Some sources note that he received a good madrasa education …', 'According to the widely accepted view, he was born in 1240–41 and died in 1320–21.', 'Sources say: “The Mongols slaughtered the people of the great cities and towns …”'],
      'The writer reports Yunus Emre’s own view': ['For, according to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.', 'In his view, purity of the heart is essential for the proper performance of acts of worship.', 'According to Yunus, morality consists of abandoning behaviors unbecoming of humans.'],
      'The writer makes the claim in their own voice': ['Society was struggling to cope with these trials.', 'These events created an atmosphere of panic in Anatolia that had never been seen before.', 'Anatolia was experiencing total chaos.'],
    },
    explanation: 'The book keeps three voices apart. “Some sources note”, “Sources say:” and “the widely accepted view” report historical sources or scholars, often where the details are uncertain. “According to him”, “In his view” and “According to Yunus” keep a religious or moral idea as Yunus’s own. Sentences with no frame are the writer’s own claims about the period. When you summarise the book, keep the frame: do not turn a source’s report or Yunus’s view into a plain fact.',
    feedback: { correct: 'Well done. You separated the sources, Yunus’s view and the writer’s own voice.', incorrect: 'Look at the start of each sentence. Is there a frame such as “Some sources note” or “In his view”? If there is no frame, the writer is speaking.' },
  },
  {
    id: 'yunus-b2-language-review-2-concession', type: 'multiple-choice', title: 'Notice: Accept, Then Qualify',
    instructions: 'Read the three sentences from Chapters 2, 6 and 8. Then choose what the linking word at the start of each one does.',
    question: 'Chapter 2: “However, his education was not limited to madrasas.” Chapter 6: “Nevertheless, these efforts were not enough.” Chapter 8: “Nonetheless, this multiple existence is nothing but manifestations of the names of Allah.” What do “However”, “Nevertheless” and “Nonetheless” do?',
    options: [
      'They show that the sentence before was wrong and should be forgotten.',
      'They accept the sentence before and then add a point that limits it or goes against what we might expect from it.',
      'They give the reason for the sentence before.',
      'They introduce an example of the sentence before.',
    ],
    correctAnswer: 1,
    explanation: 'All three are linkers of concession. The earlier point stays true: Yunus had a good madrasa education; the statesmen did make efforts; unity did break into many things. The next sentence then limits it or goes against the expectation it creates. “Nevertheless” and “Nonetheless” are more formal than “However” and mean “even so”.',
    feedback: { correct: 'Correct. A concession linker keeps the first point and qualifies it.', incorrect: 'Read the sentence before each one in its chapter. Is that earlier point cancelled, or is it still true?' },
  },
  {
    id: 'yunus-b2-language-review-3-perception-comparison', type: 'true-false', title: 'Notice: Seen, Not Literally True',
    instructions: 'Read the two sentences from Chapters 5 and 6. Is the statement true or false?',
    question: 'Chapter 5: “In the eyes of the Turkmen, these spiritual fathers were divine saviors.” Chapter 6: “The Seljuk sultans began to act almost as if they were Mongols’ civil officials.” Statement: In both sentences, the writer states as a literal fact what these people really were.',
    correctAnswer: false,
    explanation: 'False. “In the eyes of the Turkmen” limits the claim to how one group saw the fathers; the writer does not say that they really were saviors. “As if” + a past form (“were”) compares the sultans with officials and marks the comparison as not literally true, and “almost” softens it further. B2 writers use such frames to keep perception and interpretation apart from fact.',
    feedback: { correct: 'Correct. One sentence reports a group’s perception; the other makes a non-literal comparison.', incorrect: 'Look at the frames: “In the eyes of …” and “almost as if …”. Whose view is it, and is the comparison literal?' },
  },
  // BUILD — controlled practice in the book's own sentences.
  {
    id: 'yunus-b2-language-review-4-linking-relations', type: 'word-bank', title: 'Build: Contrast, Cause and Conclusion',
    instructions: 'Complete the sentences from Chapters 1, 3, 6 and 9 with words from the bank. Two words are not needed.',
    question: 'Which word contrasts, which gives a cause, which links a cause to its result, and which draws a conclusion?',
    fillBlanksText: 'The outer part relates to the body’s acts of worship, [blank] the inner side handles the morality and intentions of the heart. … Anatolia faced political, economic, and social hardships [blank] these assaults. … The weakening of the Seljuk Sultanate of Konya [blank] the rapid emergence of small principalities in Anatolia. … Love for the created is an extension of the love of Allah. [blank], those who love the Creator love the created, …',
    wordBank: ['whereas', 'as a result of', 'led to', 'Therefore', 'because', 'despite'],
    correctAnswer: ['whereas', 'as a result of', 'led to', 'Therefore'],
    explanation: '“Whereas” sets two sides of one lifestyle against each other. “As a result of” + a noun phrase gives the cause of the hardships; “because” would need a full clause with a verb, and “despite” would make the assaults something that did not stop the hardships, which is illogical. “Led to” + a noun phrase links a cause (the weakening) to its result (the emergence). “Therefore” opens a sentence that draws a conclusion from the one before.',
    feedback: { correct: 'Well done. You chose each linker for its relationship and its grammar.', incorrect: 'For each gap, ask two questions: which relationship is it (contrast, cause, result, conclusion)? And what follows the gap: a clause, a noun phrase or a new sentence?' },
  },
  {
    id: 'yunus-b2-language-review-5-overclaims', type: 'error-correction', title: 'Build: No More Than the Book Says',
    instructions: 'Each sentence claims more than the book does: one word or phrase makes it too strong. Tap it, then choose the version that keeps the writer’s claim.',
    question: 'Can you remove the overclaim in each sentence?',
    errorItems: [
      { sentence: 'If we take a closer look at this historical atmosphere, we can fully understand Anatolia …', error: 'fully', options: ['perfectly', 'better', 'finally'], answer: 1 },
      { sentence: 'All state income began to be sent to the Mongols every year.', error: 'All', options: ['The whole of', 'Every part of', 'A significant part of'], answer: 2 },
      { sentence: 'He succeeded in responding to people’s efforts to make sense of life in hard days …', error: 'succeeded in responding', options: ['tried to respond', 'managed to respond', 'was able to respond'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'The writer measures each claim. Studying the historical atmosphere helps us understand Anatolia better, not completely. “A significant part of” state income went to the Mongols, not all of it. And Yunus “tried to respond”: “tried to” reports his effort without claiming success, while “succeeded in”, “managed to” and “was able to” claim that he achieved it.',
    feedback: { correct: 'Well done. You kept the writer’s degree, quantity and certainty.', incorrect: 'Compare with the book: Chapter 3 (a closer look), Chapter 6 (state income) and Chapter 7 (Yunus’s response). Which word does the writer really use?' },
  },
  {
    id: 'yunus-b2-language-review-6-nominalisation', type: 'transformation', title: 'Build: Events as Nouns, Events as Verbs',
    instructions: 'Complete each sentence so that it keeps the meaning of the sentence from the book. Type only the missing word or words.',
    question: 'Can you turn an event into a noun, and a noun back into a verb?',
    transformItems: [
      { source: 'He expanded the country’s borders and established a navy in the Mediterranean and Black Seas.', frame: 'His rule saw the [blank] of the country’s borders and the establishment of a navy in the Mediterranean and Black Seas.', answers: ['expansion', 'extension', 'widening'] },
      { source: 'Starting in the 13th century, the Turkmen population grew in Anatolia.', frame: 'Starting in the 13th century, there was a [blank] in the Turkmen population in Anatolia.', answers: ['growth', 'rise', 'increase', 'steady growth', 'steady rise', 'steady increase'] },
      { source: 'Following their easy victory at Kösedağ, the Mongols destroyed and plundered Sivas, Kayseri, and Erzincan, …', frame: 'After they had [blank] easily at Kösedağ, the Mongols destroyed and plundered Sivas, Kayseri, and Erzincan.', answers: ['won', 'won the battle', 'won a victory', 'triumphed', 'defeated the Seljuks', 'beaten the Seljuks'] },
    ],
    correctAnswer: null,
    explanation: 'History writing often packs an event into a noun: expand → expansion, grow → growth, win → victory. The noun can then be the subject or object of another verb, as in “The defeat at Kösedağ facilitated the Mongols’ invasion of Anatolia.” When a verb becomes a noun, an adverb becomes an adjective (they won easily → their easy victory). A clause with a verb shows more clearly who did what.',
    feedback: { correct: 'Well done. You moved between verbs and nouns without changing the meaning.', incorrect: 'Find the event in each sentence from the book (expanded, grew, victory). Then give the noun or verb form that fits the new sentence.' },
  },
  {
    id: 'yunus-b2-language-review-7-two-sides', type: 'choose-form', title: 'Build: Two Sides in One Sentence',
    instructions: 'Choose the word or words that complete each sentence from Chapters 2 and 10.',
    question: 'Which pair of words adds a second side to the first?',
    formChoices: [
      { sentence: 'At that time, tekkes were not just institutions that offered Sûfî training [choice] they were also important civil society organizations …', options: ['but', 'and', 'so'], answer: 0 },
      { sentence: 'He also studied [choice] divine love and morals at the tekke, …', options: ['either', 'both', 'neither'], answer: 1 },
      { sentence: 'Yunus Emre emphasizes not only the heart [choice] the intellect as a value, …', options: ['and also', 'as well', 'but also'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: '“Not just … but … also” and “not only … but also” keep the first side and add a second, often less expected one: tekkes were training places and also civil society organizations; Yunus values the heart and also the intellect. “Both … and” joins two equal parts. “Either … or” would offer a choice and “neither … nor” would reject both, so they cannot go with “and”.',
    feedback: { correct: 'Correct. Each sentence keeps two sides together.', incorrect: 'Look at the word that goes with the gap: “not just”, “and”, “not only”. Which word is its partner?' },
  },
  // USE — take the language into new, everyday contexts.
  {
    id: 'yunus-b2-language-review-8-new-context', type: 'word-bank', title: 'Use: The Old Covered Bazaar',
    instructions: 'This paragraph is not from the book. Complete it with language you reviewed. Three words are not needed.',
    question: 'Can you use the book’s language of sources, cause, concession and addition in a local history report?',
    fillBlanksText: 'Our class studied the history of the old covered bazaar in the centre of our town. [blank] the town archive, it was built more than two hundred years ago. Some older residents say that it was once the busiest market in the region. In the 1990s, many of its shops closed [blank] the opening of large shopping centres. [blank], a group of craftspeople did not give up and kept their workshops open. Today the bazaar is not only a place for shopping [blank] a meeting point for families and visitors. It seems that caring for old places can protect them, although it cannot solve every problem.',
    wordBank: ['According to', 'as a result of', 'Nevertheless', 'but also', 'because', 'Although', 'and also'],
    correctAnswer: ['According to', 'as a result of', 'Nevertheless', 'but also'],
    explanation: '“According to” names the source of a fact, and “Some older residents say that …” reports a memory without making it a certainty. “As a result of” + a noun phrase gives the cause (“because” would need a clause). “Nevertheless” accepts the closures and adds the craftspeople’s different choice. “Not only … but also” adds a second role. The last sentence qualifies the conclusion with “It seems that …” and “although …”, like the careful claims in the book.',
    feedback: { correct: 'Well done. You used the book’s language in a new report.', incorrect: 'For each gap, ask: is it a source, a cause, a concession or a second role? Then check what follows: a noun phrase, a comma, or the second part of a pair.' },
  },
  {
    id: 'yunus-b2-language-review-9-new-context', type: 'transformation', title: 'Use: Careful Claims at School',
    instructions: 'These sentences are from a school report and are not from the book. Each one claims too much. Complete the careful version. Type only the missing word or words.',
    question: 'In a class survey, 21 of 28 students chose a spring trip. Can you rewrite each claim so that it matches the evidence?',
    transformItems: [
      { source: 'Everyone in our class agrees that the school trip should be in spring.', frame: '[blank] students in our class think that the school trip should be in spring.', answers: ['Most', 'Many', 'Most of the', 'The majority of', 'The majority of the', 'Three quarters of the', 'Three-quarters of the'] },
      { source: 'The new sports hall caused all the problems in our school budget.', frame: 'The new sports hall [blank] to the problems in our school budget.', answers: ['contributed', 'has contributed', 'partly contributed', 'may have contributed', 'might have contributed', 'added'] },
      { source: 'Our survey proves that students read less because of their phones.', frame: 'Our survey [blank] that students read less because of their phones.', answers: ['suggests', 'indicates', 'seems to show', 'appears to show', 'may show', 'might show', 'implies'] },
    ],
    correctAnswer: null,
    explanation: 'Careful writers match the claim to the evidence. A quantifier (“Most students”) replaces “Everyone” when not all agree. “Contributed to” names one cause among others instead of “caused all”. A reporting verb such as “suggests” or “indicates” shows that evidence supports a claim without proving it. The book does the same with “Some sources note”, “A significant part of” and “tried to”.',
    feedback: { correct: 'Well done. Your claims now match the evidence.', incorrect: 'Ask for each sentence: how many people, how much of the cause, and how sure can we be? Choose a word that says only that much.' },
  },
  {
    id: 'yunus-b2-language-review-10-transfer', type: 'reflection', title: 'Use: Take a Position',
    instructions: 'Write a short argued paragraph (6–8 sentences): Should every class in our school do a community project each term, for example helping older neighbours, cleaning a park or collecting books? State your position, give evidence with its source, and qualify your claim. Plan your sentences with a partner first.',
    question: 'Can you use the language of the whole book to argue a position carefully?',
    correctAnswer: null,
    explanation: 'Example: “In my view, a community project each term would be not only useful for our town but also good for us as learners. According to our class survey, most students would like to take part. Some teachers note that students who help others often feel more responsible. Last year, our book collection led to a new reading corner in a village school. As a result of this project, many of us understood our neighbours better. Nevertheless, a project every term could take time away from exams. Therefore, I suggest short projects that are planned together with teachers. Our experience suggests that community work can support learning, although it cannot replace lessons.”',
    feedback: { correct: 'Check your paragraph: a clear position; not only … but also; a source (According to …, Some … note that …); cause and result (as a result of, led to, Therefore); a concession (Nevertheless, However); a careful claim (most, suggests, may) instead of an overclaim.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — Your position with two sides: “In my view, … would be not only … but also …”', mode: 'Individual' },
      { question: 'Sentences 2–3 — Evidence with its source: “According to …, …” / “Some … note that …”', mode: 'Individual' },
      { question: 'Sentences 4–5 — Cause and result: “… led to …” / “As a result of …, …” / “Therefore, …”', mode: 'Pair' },
      { question: 'Sentences 6–8 — Qualify your claim: “Nevertheless, …” / “This suggests that …, although …”', mode: 'Pair' },
    ],
  },
];
