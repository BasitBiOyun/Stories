import type { Exercise } from '../../../../types';

/**
 * B2 Language Focus for Yunus Emre, Chapters 1–4.
 * Each chapter follows Notice → Build → Use. Every quoted sentence comes from
 * the English chapter text; quoted verses are only read, sorted or matched.
 */
const reflectionFeedback = { correct: 'Well done. Check that each target pattern carries a clear relationship in your paragraph.', incorrect: 'Return to the chapter sentences that use these patterns and model your own sentences on them.' };
const refl = (id: string, title: string, instructions: string, q: string, p: string[], e: string): Exercise => ({ id, type: 'reflection', title, instructions, question: q, correctAnswer: null, explanation: e, feedback: reflectionFeedback, discussionPrompts: p.map(question => ({ question, mode: 'Individual' })) });

export const yunusB2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'yu-b2-lf1-1',
      type: 'multiple-choice',
      title: 'Outer and Inner',
      instructions: 'Read the sentence from Chapter 1. Then choose what “whereas” does.',
      question: '“The outer part relates to the body’s acts of worship, whereas the inner side handles the morality and intentions of the heart.” What does “whereas” do in this sentence?',
      options: [
        'It shows that the inner side takes the place of the outer part.',
        'It shows that the outer part is the cause of the inner side.',
        'It contrasts two different sides of the same lifestyle, and Sûfîs keep both.',
        'It shows that the inner side came later in time than the outer part.',
      ],
      correctAnswer: 2,
      explanation: '“Whereas” sets two ideas side by side to show how they differ. The previous sentence says Sûfîs live “within the outer (visible) and inner norms of Islam”, so the contrast describes two complementary dimensions, not a choice between them and not a sequence in time.',
      feedback: {
        correct: 'Correct. “Whereas” contrasts the two sides without removing either one.',
        incorrect: 'Read the sentence just before it: Sûfîs maintain a lifestyle within the outer and inner norms of Islam. Does one side replace the other?',
      },
    },
    {
      id: 'yu-b2-lf1-2',
      type: 'transformation',
      title: 'Adding a Second Identity',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say that Yunus Emre had a second role?',
      transformItems: [
        {
          source: 'In addition to his standing as a Sûfî, Yunus Emre was one of the first to create and perform poetry from the heart in plain Turkish.',
          frame: 'Yunus Emre was a Sûfî. [blank], he was one of the first to create and perform poetry from the heart in plain Turkish.',
          answers: ['In addition', 'Moreover', 'Furthermore', 'Besides', 'What is more', 'In addition to this', 'Besides this', 'Besides that', 'Also'],
        },
        {
          source: 'He was also one of the Turkish poets to play a crucial role in the development of Old Anatolian Turkish.',
          frame: '[blank] one of the first to write poetry in plain Turkish, he played a crucial role in the development of Old Anatolian Turkish.',
          answers: ['In addition to being', 'Besides being', 'As well as being', 'Apart from being', 'Aside from being'],
        },
      ],
      correctAnswer: null,
      explanation: 'A linking adverb such as “In addition” or “Moreover” starts a new sentence and adds to the previous one. “In addition to” is a preposition, so it needs a noun (“his standing as a Sûfî”) or an -ing form (“being one of the first …”).',
      feedback: {
        correct: 'Well done. You added the second role with a linker and with “in addition to + -ing”.',
        incorrect: 'Look at how the second paragraph of Chapter 1 begins: “In addition to his standing …”. After “to” in this phrase, use a noun or a verb with -ing.',
      },
    },
    {
      id: 'yu-b2-lf1-4',
      type: 'error-correction',
      title: 'Principles Without Mistakes',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'What form of the verb comes after “of” and “without”?',
      errorItems: [
        {
          sentence: 'Sûfîs adhere to moral principles that include the pursuit of become better people, the ability to remain patient during difficult times, …',
          error: 'of become',
          options: ['of to become', 'of becoming', 'for become'],
          answer: 1,
        },
        {
          sentence: '… the act of giving generously without expect any return, the act of doing good to all individuals without prejudice, …',
          error: 'without expect',
          options: ['without expecting', 'without to expect', 'without expected'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After a preposition (of, without, in addition to), English uses a noun or an -ing form: “the pursuit of becoming better people”, “giving generously without expecting any return”. “Without expecting any return” also sets an ethical condition: the giving is not an exchange.',
      feedback: {
        correct: 'Correct. Both prepositions are followed by an -ing form.',
        incorrect: 'Find the list of moral principles in the first paragraph of Chapter 1 and look at the verb form after “of” and “without”.',
      },
    },
    refl('yu-b2-lf1-3', 'Two Dimensions', 'Write a short paragraph about Yunus Emre’s two roles.', 'Why is Yunus Emre important in two ways?', ['Write 5–6 sentences. Use “whereas” or “while” once, and “in addition to” once.'], 'A B2 response should connect spiritual and literary importance without reducing either one.'),
  ],
  2: [
    {
      id: 'yu-b2-lf2-1',
      type: 'drag-drop',
      title: 'Source or Fact?',
      instructions: 'Put each sentence from Chapter 2 in the right group.',
      question: 'Does the writer give a source or a view, or say it directly?',
      dragDropGroups: [
        {
          group: 'The writer reports or qualifies the claim',
          items: [
            'According to historical accounts, he was a contemporary of famous figures such as Hacı Bektaş-ı Veli, Mevlana Celaleddin-i Rumi, and Saru Saltuk.',
            'He is considered the founder of Turkish Sûfî literature.',
            'Some sources note that he received a good madrasa education …',
          ],
        },
        {
          group: 'The writer states the claim directly',
          items: [
            'His philosophy includes fundamental values that have a significant influence on Turkish culture and ethics in Turkish society.',
            '… the tekke, which was a place where Sûfî education was taught under the guidance of a sheikh (spiritual tutor).',
            '… tekkes were not just institutions that offered Sûfî training but they were also important civil society organizations …',
          ],
        },
      ],
      correctAnswer: {
        'The writer reports or qualifies the claim': [
          'According to historical accounts, he was a contemporary of famous figures such as Hacı Bektaş-ı Veli, Mevlana Celaleddin-i Rumi, and Saru Saltuk.',
          'He is considered the founder of Turkish Sûfî literature.',
          'Some sources note that he received a good madrasa education …',
        ],
        'The writer states the claim directly': [
          'His philosophy includes fundamental values that have a significant influence on Turkish culture and ethics in Turkish society.',
          '… the tekke, which was a place where Sûfî education was taught under the guidance of a sheikh (spiritual tutor).',
          '… tekkes were not just institutions that offered Sûfî training but they were also important civil society organizations …',
        ],
      },
      explanation: 'Biographical details about a medieval poet are often uncertain, so the writer frames them: “According to historical accounts” attributes a claim, “Some sources note” limits the claim to part of the tradition, and “is considered” reports a general judgement. Descriptions of his philosophy and of tekkes are given directly.',
      feedback: {
        correct: 'Correct. You separated source-framed claims from direct statements.',
        incorrect: 'Look at the start of each sentence: does it name a source, a view or a judgement (“is considered”), or does it simply state the fact?',
      },
    },
    {
      id: 'yu-b2-lf2-2',
      type: 'multiple-choice',
      title: 'Keep the Source Caution',
      instructions: 'Choose the version that is just as sure as the writer.',
      question: '“According to the widely accepted view, he was born in 1240–41 and died in 1320–21.” Which version is just as sure?',
      options: [
        'It has been proven beyond doubt that he was born in 1240–41 and died in 1320–21.',
        'Most scholars accept that he was born in 1240–41 and died in 1320–21.',
        'Nobody has any idea when he was born or when he died.',
        'Only one old source claims that he was born in 1240–41 and died in 1320–21.',
      ],
      correctAnswer: 1,
      explanation: '“The widely accepted view” means that many, but not necessarily all, experts agree. “Most scholars accept that …” keeps this broad but not absolute agreement. “Proven beyond doubt” overclaims, “Nobody has any idea” ignores the agreement, and “Only one old source” underclaims it.',
      feedback: {
        correct: 'Correct. The rewrite keeps broad agreement without turning it into certainty.',
        incorrect: 'Look again at the second paragraph of Chapter 2. Does “widely accepted” mean proven, unknown, or accepted by many?',
      },
    },
    {
      id: 'yu-b2-lf2-3',
      type: 'word-bank',
      title: 'Balanced Style, Wider Education',
      instructions: 'Complete the lines from Chapter 2 with words from the bank. Three words are not needed.',
      question: 'Which words complete the lines about his style and his education?',
      fillBlanksText: 'His style is [blank] too simple [blank] too complex. Thus, his works [blank] have literary value and are easy to understand. … However, his education was not [blank] to madrasas.',
      wordBank: ['neither', 'nor', 'both', 'limited', 'either', 'or', 'whether'],
      correctAnswer: ['neither', 'nor', 'both', 'limited'],
      explanation: '“Neither … nor …” rejects both extremes and places the style in the middle. “Both … and …” gives the works two qualities at once. “Not limited to” widens the scope: his education included the madrasa but went beyond it, to the tekke. “Either … or” would offer a choice, which the text does not.',
      feedback: {
        correct: 'Correct. The style avoids two extremes, the works have two qualities, and his education reaches beyond the madrasa.',
        incorrect: 'Check the first and third paragraphs of Chapter 2. Remember that “neither” pairs with “nor”, and “both” pairs with “and”.',
      },
    },
    refl('yu-b2-lf2-4', 'Write With Source Caution', 'Write a short, careful paragraph about Yunus’s education.', 'What do the sources say about his education?', ['Write 5–7 sentences. Use “According to …” once, and “not only” or “not limited to” once.'], 'The task combines historical caution with coherent educational synthesis.'),
  ],
  3: [
    {
      id: 'yu-b2-lf3-1',
      type: 'drag-drop',
      title: 'Time, Cause or Condition?',
      instructions: 'Put each sentence from Chapter 3 in the right group.',
      question: 'Does the sentence say when, why, or what happens “if …”?',
      dragDropGroups: [
        {
          group: 'Time: what happened when',
          items: [
            'The 13th and 14th centuries, the period in which Yunus Emre was born and lived, coincided with hard times.',
            'This was immediately followed by the defeat at Kösedağ.',
          ],
        },
        {
          group: 'Cause and result: why something happened',
          items: [
            'The defeat at Kösedağ facilitated the Mongols’ invasion of Anatolia.',
            'Anatolia faced political, economic, and social hardships as a result of these assaults.',
          ],
        },
        {
          group: 'Condition: what careful study makes possible',
          items: [
            'If we take a closer look at this historical atmosphere, we can better understand Anatolia …',
          ],
        },
      ],
      correctAnswer: {
        'Time: what happened when': [
          'The 13th and 14th centuries, the period in which Yunus Emre was born and lived, coincided with hard times.',
          'This was immediately followed by the defeat at Kösedağ.',
        ],
        'Cause and result: why something happened': [
          'The defeat at Kösedağ facilitated the Mongols’ invasion of Anatolia.',
          'Anatolia faced political, economic, and social hardships as a result of these assaults.',
        ],
        'Condition: what careful study makes possible': [
          'If we take a closer look at this historical atmosphere, we can better understand Anatolia …',
        ],
      },
      explanation: '“Coincided with” and “was followed by” place events in time. “Facilitated” (made easier) and “as a result of” link causes and results. “If we take a closer look …, we can better understand …” is a condition that turns history into a tool for interpreting Yunus.',
      feedback: {
        correct: 'Correct. The chapter builds a chain from time to cause and then to interpretation.',
        incorrect: 'Focus on the verb or phrase that links the ideas: does it say when, why, or what we gain if we look closely?',
      },
    },
    {
      id: 'yu-b2-lf3-2',
      type: 'transformation',
      title: 'Rewrite the Historical Chain',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say what came first and what caused what?',
      transformItems: [
        {
          source: 'The defeat at Kösedağ facilitated the Mongols’ invasion of Anatolia.',
          frame: 'The defeat at Kösedağ made it [blank] for the Mongols to invade Anatolia.',
          answers: ['easier', 'much easier'],
        },
        {
          source: 'Anatolia faced political, economic, and social hardships as a result of these assaults.',
          frame: 'These assaults [blank] political, economic, and social hardships in Anatolia.',
          answers: ['caused', 'led to', 'brought', 'brought about', 'resulted in', 'created', 'produced'],
        },
        {
          source: 'This was immediately followed by the defeat at Kösedağ.',
          frame: 'The defeat at Kösedağ came immediately [blank] this.',
          answers: ['after'],
        },
      ],
      correctAnswer: null,
      explanation: '“Facilitate” means “make easier”. “X happened as a result of Y” can be turned round: “Y caused / led to / resulted in X”. In the passive “A was followed by B”, B comes after A.',
      feedback: {
        correct: 'Well done. You kept the same relationships with new structures.',
        incorrect: 'Ask which event came first and which event made the other possible. Then check the second paragraph of Chapter 3.',
      },
    },
    refl('yu-b2-lf3-3', 'Context Before Interpretation', 'Write a short paragraph about the hard times Yunus lived in.', 'Why should we look at Yunus’s times first?', ['Use “followed by”, “as a result” and “therefore” or “so”.'], 'The production task turns chronological facts into a coherent explanatory chain.'),
  ],
  4: [
    {
      id: 'yu-b2-lf4-1',
      type: 'multiple-choice',
      title: 'What Does “Even” Add?',
      instructions: 'Read the sentence from Chapter 4. Then choose what “even” adds.',
      question: '“Giyaseddin Keyhüsrev II’s failure to manage this situation even worsened the social and economic chaos.” What does “even” show?',
      options: [
        'The chaos began only because of his failure.',
        'The chaos already existed, and his failure made it still worse.',
        'His failure made the chaos less serious than before.',
        'His failure and the chaos happened at different times.',
      ],
      correctAnswer: 1,
      explanation: '“Even” before “worsened” shows intensification: the chaos already existed because of poor governance, population growth and migration, and the sultan’s failure added to it. The chapter does not give a single cause.',
      feedback: {
        correct: 'Correct. “Even” shows that an already serious situation became worse.',
        incorrect: 'Look at the causes listed before this sentence in Chapter 4. Was the chaos already there before his failure?',
      },
    },
    {
      id: 'yu-b2-lf4-2',
      type: 'error-correction',
      title: 'Cause and Purpose',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'How do we say why something happened, and what it was for?',
      errorItems: [
        {
          sentence: 'However, because the poor governance of his son, Giyaseddin Keyhüsrev II (1237–1246), the Seljuk economic and social structure began to decline.',
          error: 'because the poor governance',
          options: ['since the poor governance', 'because the poor governing', 'due to the poor governance'],
          answer: 2,
        },
        {
          sentence: 'The nomadic Oguz and Turkmen tribes, who had migrated to Anatolia from Central Asia for escape the Mongol invasion, were exhausted from wandering …',
          error: 'for escape',
          options: ['to escape', 'for to escape', 'so escape'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Due to” (like “because of”) is followed by a noun phrase: “due to the poor governance of his son”. “Because” and “since” need a full clause with a verb. Purpose is expressed with “to + verb”: “to escape the Mongol invasion”.',
      feedback: {
        correct: 'Correct. A noun phrase follows “due to”, and “to + verb” shows purpose.',
        incorrect: 'Check the first paragraph of Chapter 4: what comes after “due to”, and how does the text say why the tribes migrated?',
      },
    },
    {
      id: 'yu-b2-lf4-3',
      type: 'transformation',
      title: 'Same Causes, New Words',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say the causes of the chaos?',
      transformItems: [
        {
          source: 'Giyaseddin Keyhüsrev II’s failure to manage this situation even worsened the social and economic chaos.',
          frame: 'Because Giyaseddin Keyhüsrev II [blank] this situation, the social and economic chaos became even worse.',
          answers: ['failed to manage', 'did not manage', 'didn’t manage', "didn't manage", 'could not manage', 'couldn’t manage', "couldn't manage", 'was unable to manage', 'was not able to manage'],
        },
        {
          source: 'When the migrations caused by the Mongol invasion were added to this, the lives of people in Anatolia were totally turned upside down.',
          frame: 'When the migrations caused by the Mongol invasion were added to this, they [blank] the lives of people in Anatolia upside down.',
          answers: ['turned', 'totally turned', 'completely turned'],
        },
      ],
      correctAnswer: null,
      explanation: 'A noun phrase such as “his failure to manage” packs a whole event into a subject; after “because” you need a clause with a verb (“he failed to manage”). The passive “were turned upside down” focuses on the people affected; the active “they turned … upside down” puts the migrations first as the cause.',
      feedback: {
        correct: 'Well done. You kept each cause while changing the structure.',
        incorrect: 'Ask who did what: who failed, and what turned people’s lives upside down? Then write the verb in the past simple.',
      },
    },
    refl('yu-b2-lf4-4', 'Multi-Cause Explanation', 'Write a paragraph about the causes of the Babai uprising.', 'Why did the Babai uprising happen?', ['Use “due to”, “when … was added” and “worsened” or “intensified”.'], 'B2 historical explanation should show interaction rather than list isolated facts.'),
  ],
};
