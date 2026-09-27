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
      question: '“Additionally, by addressing negative traits such as arrogance, anger, stinginess, greed, envy, backbiting, and slander, he has warned people to stay away from these harmful habits.” What does “by addressing …” tell us?',
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

const reviewFeedback={correct:'Correct. You used the language relationship developed across the book.',incorrect:'Not yet. Revisit the relevant Language Focus patterns and try again.'};
const reviewMatch=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'Match each discourse form with its cumulative function.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback:reviewFeedback});
const reviewMc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'Choose the strongest B2 formulation.',question:q,options:o,correctAnswer:a,explanation:e,feedback:reviewFeedback});
const reviewFill=(id:string,title:string,q:string,text:string,a:string,e:string):Exercise=>({id,type:'fill-blanks',title,instructions:'Complete the sentence with the most coherent connector.',question:q,fillBlanksText:text,correctAnswer:a,explanation:e,feedback:reviewFeedback});
const reviewRefl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'Write a coherent B2 response using the cumulative language resources.',question:q,correctAnswer:null,explanation:e,feedback:reviewFeedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});
const reviewSeq=(id:string,title:string,q:string,items:{id:string;text:string}[],ans:string[],e:string):Exercise=>({id,type:'sequencing',title,instructions:'Order the discourse moves.',question:q,sequencingItems:items,correctAnswer:ans,explanation:e,feedback:reviewFeedback});

export const yunusB2LanguageReviewExercises: Exercise[] = [
reviewMatch('yu-b2-lr1','Source Framing and Qualification','Match the language with the claim strength it creates.',[{left:'According to historical accounts',right:'attributes a claim to historical reporting'},{left:'Some sources note',right:'limits the claim to part of the source tradition'},{left:'widely accepted view',right:'signals broad acceptance without absolute certainty'},{left:'the chapter presents',right:'keeps an interpretation inside the book’s own framing'}],'B2 readers should control the strength and source of historical and theological claims.'),
reviewMatch('yu-b2-lr2','Cause, Process and Concession','Match each connector with the relationship it is best suited to express.',[{left:'due to / because of',right:'cause'},{left:'as a result / led to',right:'consequence'},{left:'in time / finally',right:'development in a process'},{left:'nevertheless / however',right:'concession or contrast'}],'The historical chapters repeatedly depend on precise relations rather than lists of facts.'),
reviewSeq('yu-b2-lr3','From Event to Interpretation','Order the moves in a strong B2 historical paragraph.',[{id:'a',text:'State the historical condition with source-aware language.'},{id:'b',text:'Connect interacting causes rather than naming only one.'},{id:'c',text:'Show the consequence or turning point.'},{id:'d',text:'Explain why that context matters for interpreting Yunus.'}],['a','b','c','d'],'A coherent paragraph moves from evidence to relationship to interpretation.'),
reviewMc('yu-b2-lr4','Comparison Without Overstatement','Which sentence uses comparison responsibly?',['The Seljuk sultans acted almost as if they were Mongol civil officials, showing severe dependency without claiming literal identity.','The Seljuk sultans literally became Mongol civil officials in every sense.','The comparison proves the Seljuks no longer existed immediately after the agreement.'],0,'“As if” and “almost” qualify an interpretive comparison.'),
reviewFill('yu-b2-lr5','Concession and Limitation','Complete the relationship.','Statesmen made efforts to reduce the pressure. [blank], the structural dependency continued.','Nevertheless','The connector concedes the effort while preserving the larger limitation.'),
reviewMatch('yu-b2-lr6','Concept → Ethical Implication','Match the conceptual language with the kind of move it supports.',[{left:'from this perspective',right:'introduces a viewpoint before interpretation'},{left:'therefore / for this reason',right:'draws a consequence from a preceding idea'},{left:'is described as / that is',right:'defines or clarifies a metaphorical concept'},{left:'must / can',right:'distinguishes necessity from possibility'}],'The later chapters require careful movement from concept to moral consequence.'),
reviewMc('yu-b2-lr7','Dual and Expanded Meaning','Which formulation best models the book’s cumulative discourse?',['Yunus is important not only as a literary figure but also as a moral-spiritual voice shaped by and responding to his historical world.','Yunus is either a poet or a Sûfî, but the two roles cannot be connected.','Historical context completely explains every idea in his poetry.'],0,'The book combines roles and context without collapsing one into the other.'),
reviewRefl('yu-b2-lr8','Cumulative B2 Production','Write a 7–9 sentence paragraph explaining how the book moves from historical crisis to a lasting moral-literary legacy.',['Use one source-framing phrase, one cause-result relation, one concession/contrast connector, one concept-to-consequence connector, and one not only/but also or both/and structure.'],'This final Language Review task asks learners to select language resources for meaning across the whole book rather than answer a comprehension question.')
];
