import type { Exercise } from '../../../../types';

/** Chapter 4 English Language Focus, derived only from the locked Chapter 4 story text. */
export const yunusB1LanguageFocusChapter4: Exercise[] = [
  {
    id: 'yunus-b1-language-4-condition-perspective',
    type: 'multiple-choice',
    title: 'Why Does the Chapter Begin with “If”?',
    instructions: 'Read the first sentence of Chapter 4. Then choose the best answer.',
    question: '“If we take a closer look at this historical atmosphere, we can better understand Anatolia …” What is the writer telling the reader?',
    options: [
      'People must study history before they are allowed to read about Yunus Emre.',
      'Learning about the history of that time will help us understand the place better.',
      'The writer is not sure that the history of Anatolia is true.',
      'Anatolia was easier to understand in the past than it is today.',
    ],
    correctAnswer: 1,
    explanation: '“If + present simple, … can + verb” gives a condition and a possible result. The condition is an approach (taking a closer look at the history), and “can better understand” is what becomes possible if we follow it. The writer uses “we” to invite the reader to look at the history together before the chapter tells it.',
    feedback: {
      correct: 'Correct. The “if” part gives an approach, and “can” shows the understanding that becomes possible.',
      incorrect: 'Read the sentence again. The “if” part is not a rule or a doubt. What becomes possible when we look closely at the history?',
    },
  },
  {
    id: 'yunus-b1-language-4-contrast-change',
    type: 'choose-form',
    title: 'Strength, Change and Place',
    instructions: 'Choose the correct words for each sentence from Chapter 4.',
    question: 'When was the state strong, and what changed?',
    formChoices: [
      {
        sentence: 'The rule of the Anatolian Seljuk Sultan Alaeddin I (1220–1237) was [choice] period of the Seljuks.',
        options: ['the more powerful and brilliant', 'the most powerful and brilliant', 'most powerful and brilliant'],
        answer: 1,
      },
      {
        sentence: '[choice] … the Seljuk economic and social structure began to decline.',
        options: ['However,', 'Therefore,', 'For example,'],
        answer: 0,
      },
      {
        sentence: '… Anatolia—the land [choice] Yunus Emre lived and recited his unforgettable verses.',
        options: ['which', 'where', 'when'],
        answer: 1,
      },
    ],
    correctAnswer: null,
    explanation: 'The superlative “the most + adjective” with “the” evaluates Alaeddin I’s rule as the highest point of the Seljuks. “However” turns the story in a new direction: after the strongest period comes a decline. “Where” begins a clause about a place (the land where he lived); “which” would need a subject or object after it, and “when” is for time.',
    feedback: {
      correct: 'Correct. You chose the superlative, the contrast word and the place word.',
      incorrect: 'Read the second paragraph of Chapter 4 again. Is the sentence praising the best period, turning to a change, or describing a place?',
    },
  },
  {
    id: 'yunus-b1-language-4-cause-chain',
    type: 'transformation',
    title: 'Same Cause, New Sentence',
    instructions: 'Write the missing words. Keep the same meaning.',
    question: 'How else can we say why things got worse?',
    transformItems: [
      {
        source: 'The Mongol invasion caused many people to migrate to Anatolia from Central Asia …',
        frame: 'Many people migrated to Anatolia from Central Asia [blank] the Mongol invasion.',
        answers: ['because of', 'as a result of', 'due to', 'as a consequence of', 'owing to'],
      },
      {
        source: '… Giyaseddin Keyhüsrev II’s failure to manage this situation worsened the social and economic chaos.',
        frame: 'The social and economic chaos got worse because Giyaseddin Keyhüsrev II [blank] this situation.',
        answers: ['failed to manage', 'did not manage', 'didn’t manage', 'didn\'t manage', 'could not manage', 'couldn’t manage', 'couldn\'t manage', 'was unable to manage', 'failed to handle', 'did not manage to control'],
      },
    ],
    correctAnswer: null,
    explanation: '“X caused people to + verb” puts the cause first. With “because of / as a result of + noun”, the result comes first and the cause comes at the end. “Someone’s failure to + verb” is a noun phrase; as a clause it becomes “someone failed to + verb” (or “did not manage to …”). “Worsened” means “made worse”, so the result can be said as “got worse”.',
    feedback: {
      correct: 'Well done. You kept the same cause and result in a new structure.',
      incorrect: 'Ask what the cause is in each sentence from Chapter 4 and what happened because of it. Then fit that cause into the new frame.',
    },
  },
  {
    id: 'yunus-b1-language-4-production',
    type: 'reflection',
    title: 'Explain How a Situation Changes Over Time',
    instructions: 'Write or say five or six sentences about a place that changed over time.',
    question: 'What was the place like before, and what changed?',
    correctAnswer: null,
    explanation: 'A strong response should develop one coherent account. Useful language from the chapter includes “If we... we can...”, superlative descriptions such as “the most...”, “however”, “because of...”, “caused ... to...”, “which...”, “began to...”, and “failure to ... worsened...”.',
    feedback: {
      correct: 'Keep the time change and the cause-result links explicit so the paragraph reads as one explanation.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Start: “If we look at …, we can better understand …”', mode: 'Individual' },
      { question: 'Sentence 2 — Describe a good time: “… years ago, … was the busiest …”', mode: 'Individual' },
      { question: 'Sentence 3 — Show a change: “However, …”', mode: 'Pair' },
      { question: 'Sentences 4–6 — Give a cause, its effect and how it ended.', mode: 'Pair' },
    ],
  },
];

/** Chapter 5 English Language Focus, derived only from the locked Chapter 5 story text. */
export const yunusB1LanguageFocusChapter5: Exercise[] = [
  {
    id: 'yunus-b1-language-5-cause-response',
    type: 'multiple-choice',
    title: 'What Does “Would” Show?',
    instructions: 'Read the words from Chapter 5. Then choose the best answer.',
    question: '“… they believed these leaders would save them.” What does “would save” tell us?',
    options: [
      'The leaders really saved the Turkmen in the end.',
      'The Turkmen used to be saved by the leaders again and again.',
      'At that time, the Turkmen expected to be saved in the future.',
      'The Turkmen politely asked the leaders to save them.',
    ],
    correctAnswer: 2,
    explanation: '“Would” is the past form of “will”. After a past verb like “believed”, it shows a future that people expected at that time: they thought, “These leaders will save us.” The sentence does not say that the leaders really saved them. In fact, the chapter says the Seljuk forces put an end to the rebellion.',
    feedback: {
      correct: 'Correct. “Believed … would” reports what people expected, seen from that time in the past.',
      incorrect: 'Read the first paragraph of Chapter 5 again. Did the rebellion succeed in the end? So is “would save” a fact or an expectation?',
    },
  },
  {
    id: 'yunus-b1-language-5-past-viewpoint',
    type: 'word-bank',
    title: 'Linking Events in a Chain',
    instructions: 'Complete the lines from Chapter 5 with words from the bank. Two words are not needed.',
    question: 'What happened, and what did it lead to?',
    fillBlanksText: '[blank], this situation gave the Mongols in Azerbaijan the courage to attack the Seljuk Empire. In 1242, the Mongols captured Erzurum and killed its people. This disaster [blank] deep sorrow and fear among the Seljuk people. … The Mongols used the classic false retreat and circling tactic. [blank], they easily defeated the Seljuks.',
    wordBank: ['caused', 'However', 'Thus', 'made', 'Because'],
    correctAnswer: ['However', 'caused', 'Thus'],
    explanation: '“However” marks an unexpected turn: the Seljuks had just ended the rebellion, but this same situation gave the Mongols courage. “Cause + noun” shows what an event produced (“caused deep sorrow and fear”); we do not say “made sorrow”. “Thus” introduces a result of what was just described: the tactic worked, so they won easily. “Because” cannot stand alone with a comma before a sentence.',
    feedback: {
      correct: 'Well done. You linked the turn, the emotional result and the military result.',
      incorrect: 'Read the second paragraph of Chapter 5 again. Which blank starts a surprising new development, and which one follows from the tactic?',
    },
  },
  {
    id: 'yunus-b1-language-5-contrast-result',
    type: 'error-correction',
    title: 'Because or Because Of?',
    instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
    question: 'Can you choose between “because” and “because of”?',
    errorItems: [
      {
        sentence: 'Because many economic and social problems, the Turkmen people were looking for a way out and started a revolt against the state.',
        error: 'Because',
        options: ['Although', 'Because of', 'Since'],
        answer: 1,
      },
      {
        sentence: 'They followed spiritual leaders called \'Baba\', because of they believed these leaders would save them.',
        error: 'because of',
        options: ['because', 'due to', 'so'],
        answer: 0,
      },
      {
        sentence: 'After that, the Mongols destroyed and raided Sivas, Kayseri, and Erzincan, left not a single stone standing.',
        error: 'left',
        options: ['to leave', 'leaving', 'leaves'],
        answer: 1,
      },
    ],
    correctAnswer: null,
    explanation: '“Because of” is followed by a noun phrase (“because of many economic and social problems”). “Because” is followed by a clause with a subject and a verb (“because they believed …”). After a comma, an -ing clause can add the result of the main action: “…, leaving not a single stone standing.”',
    feedback: {
      correct: 'Well done. You chose “because of” before a noun, “because” before a clause, and an -ing form for the result.',
      incorrect: 'Look at what comes after each linking word: a noun phrase or a subject + verb? Then check the sentences in Chapter 5.',
    },
  },
  {
    id: 'yunus-b1-language-5-production', type: 'reflection', title: 'Explain a Chain of Pressure, Belief, and Result', instructions: 'Write or say five or six sentences about a hard time for a town or village.', question: 'What did people hope for, and what really happened?', correctAnswer: null, explanation: 'A strong response should read as one connected explanation. Useful language from the chapter includes “because of...”, “were looking for...”, “started...”, “because they believed... would...”, “however”, “caused...”, “thus”, and “after that”.', feedback: { correct: 'Keep the relationships explicit so each sentence develops the previous one.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Give the problem: “Because of …, …”', mode: 'Individual' },
      { question: 'Sentence 2 — Say what people were doing: “Families were …ing …”', mode: 'Individual' },
      { question: 'Sentence 3 — Say what they believed: “They believed that … would …”', mode: 'Pair' },
      { question: 'Sentence 4 — Add a surprise: “However, …”', mode: 'Pair' },
      { question: 'Sentences 5–6 — Give the result: “This caused … . Thus, …”', mode: 'Pair' },
    ],
  },
];

/** Chapter 6 English Language Focus, derived only from the locked Chapter 6 story text. */
export const yunusB1LanguageFocusChapter6: Exercise[] = [
  {
    id: 'yunus-b1-language-6-focus-and-effect',
    type: 'drag-drop',
    title: 'Who Is the Subject?',
    instructions: 'Does the subject do the action, or does the action happen to it? Sort the sentences.',
    question: 'Who does the action in each sentence?',
    dragDropGroups: [
      {
        group: 'Active: the subject acts',
        items: [
          'They caused a lot of destruction, sadness, and misery everywhere they went.',
          'These events created an atmosphere of panic in Anatolia …',
          'After 1277, the Mongols began to administer Anatolia …',
        ],
      },
      {
        group: 'Passive: the action happens to the subject',
        items: [
          'The men were killed by the sword.',
          'The women and children were taken captive …',
          '… in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire …',
        ],
      },
    ],
    correctAnswer: {
      'Active: the subject acts': [
        'They caused a lot of destruction, sadness, and misery everywhere they went.',
        'These events created an atmosphere of panic in Anatolia …',
        'After 1277, the Mongols began to administer Anatolia …',
      ],
      'Passive: the action happens to the subject': [
        'The men were killed by the sword.',
        'The women and children were taken captive …',
        '… in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire …',
      ],
    },
    explanation: 'The passive is “was/were + past participle”. It puts the people or places that suffered in first position: the men, the women and children, the lands of Anatolia. The doer is often not named, because the focus is on what happened to the victims. Note: “by the sword” names the weapon, not the doer.',
    feedback: {
      correct: 'Correct. You separated the sentences about the doers from the sentences about those affected.',
      incorrect: 'Look for “was/were + past participle” (killed, taken, attached). In those sentences the subject does not act; something happens to it.',
    },
  },
  {
    id: 'yunus-b1-language-6-change-over-time',
    type: 'choose-form',
    title: 'Step by Step to Dependence',
    instructions: 'Choose the correct words for each sentence from Chapter 6.',
    question: 'How did the Seljuk state slowly lose its power?',
    formChoices: [
      {
        sentence: 'Finally, an agreement was made with the Mongols, but in time the Seljuks [choice] dependent on them.',
        options: ['become', 'have become', 'became'],
        answer: 2,
      },
      {
        sentence: 'The Seljuk sultans acted [choice] government officials for the Mongols.',
        options: ['almost like', 'most like', 'almost alike'],
        answer: 0,
      },
      {
        sentence: 'A significant part of state income began [choice] to the Mongols every year.',
        options: ['to send', 'to be sent', 'sending'],
        answer: 1,
      },
    ],
    correctAnswer: null,
    explanation: '“In time … became + adjective” shows a slow change of state in the past. “Almost like + noun” compares: the sultans were not really Mongol officials, but they behaved nearly as if they were. The income did not send anything; someone sent it, so the passive infinitive is needed: “began to be sent”.',
    feedback: {
      correct: 'Correct. You showed the change of state, the comparison and the passive process.',
      incorrect: 'Read the second paragraph of Chapter 6 again. Did the income send something, or was it sent? Is the chapter saying the sultans were officials, or nearly like them?',
    },
  },
  {
    id: 'yunus-b1-language-6-comparison-result',
    type: 'transformation',
    title: 'Keep the Meaning, Change the Focus',
    instructions: 'Write the missing words. Keep the same meaning.',
    question: 'How else can we say these lines from Chapter 6?',
    transformItems: [
      {
        source: '… this tax increased continuously and this made both the state and the people poorer.',
        frame: 'Because this tax increased continuously, both the state and the people [blank].',
        answers: ['became poorer', 'got poorer', 'grew poorer', 'were made poorer', 'became poor', 'got poor'],
      },
      {
        source: 'After 1277, the Mongols began to administer Anatolia through the commanders and governors that they sent.',
        frame: 'After 1277, Anatolia [blank] by the Mongols through the commanders and governors that they sent.',
        answers: ['began to be administered', 'started to be administered', 'was administered', 'began being administered', 'was governed', 'began to be governed'],
      },
    ],
    correctAnswer: null,
    explanation: '“Make + object + comparative adjective” (made the people poorer) shows a result. With the affected people as the subject, the same result is “the people became / got poorer”. In the passive, the object of the active sentence (Anatolia) becomes the subject, and the doer can follow with “by”: “Anatolia began to be administered by the Mongols.”',
    feedback: {
      correct: 'Well done. You kept the result and changed the focus of the sentence.',
      incorrect: 'Ask who or what was affected in each sentence from Chapter 6. Put that person or place first and use “became + adjective” or “(began to) be + past participle”.',
    },
  },
  {
    id: 'yunus-b1-language-6-production', type: 'reflection', title: 'Describe a Process of Losing Control', instructions: 'Write or say five or six sentences about a group that slowly loses control.', question: 'How does the group lose control, step by step?', correctAnswer: null, explanation: 'A strong response should develop as one short process. Useful language from the chapter includes “was/were + past participle”, “in time”, “became...”, “almost like...”, “began to be...”, “however”, “made ... + adjective”, “through...”, and “was/were directly attached to...”.', feedback: { correct: 'Keep the stages connected so the reader can see who is affected, how the situation changes, and what the final consequence is.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Say what happened to the group: “… was bought by …”', mode: 'Individual' },
      { question: 'Sentence 2 — Show a change: “In time, … became …”', mode: 'Individual' },
      { question: 'Sentence 3 — Compare: “… acted almost like …”', mode: 'Pair' },
      { question: 'Sentence 4 — Show a new start: “Soon, … began to be …”', mode: 'Pair' },
      { question: 'Sentences 5–6 — Give the result: “However, … . This made …”', mode: 'Pair' },
    ],
  },
];

/** Chapter 7 English Language Focus, derived only from the locked Chapter 7 story text. */
export const yunusB1LanguageFocusChapter7: Exercise[] = [
  {
    id: 'yunus-b1-language-7-context-action',
    type: 'multiple-choice',
    title: 'A Foundation and an Inspiration',
    instructions: 'Read the last two sentences of Chapter 7. Then choose the best answer.',
    question: '“Yunus’s understanding of Sûfîsm comes from the Qur’an and the Prophet’s (pbuh) Sunnah. He was also inspired by the ideas and experiences of earlier Muslim Sûfîs.” How are the two sources different?',
    options: [
      'The earlier Sûfîs are the foundation, and the Qur’an and the Sunnah are an extra inspiration.',
      'Both sentences say exactly the same thing in different words.',
      'The Qur’an and the Sunnah are the foundation, and the earlier Sûfîs are an extra inspiration.',
      'The second sentence shows that Yunus disagreed with the earlier Sûfîs.',
    ],
    correctAnswer: 2,
    explanation: '“Comes from” names the origin or foundation of something. “Was also inspired by” adds a second, additional influence: ideas and experiences that encouraged him. The word “also” shows that this influence is added to the foundation, not placed above it.',
    feedback: {
      correct: 'Correct. “Comes from” gives the foundation, and “was also inspired by” adds another influence.',
      incorrect: 'Look at the verbs: “comes from” and “was also inspired by”. Which one names the origin, and which one adds something with “also”?',
    },
  },
  {
    id: 'yunus-b1-language-7-influence-response',
    type: 'error-correction',
    title: 'Find and Fix the Mistake',
    instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
    question: 'Can you fix the sentences about the dervishes?',
    errorItems: [
      {
        sentence: 'They were spreading a simple understanding of Islam and established popular Sûfîsm.',
        error: 'established',
        options: ['establish', 'establishing', 'to establish'],
        answer: 1,
      },
      {
        sentence: 'These dervishes were influential between nomads.',
        error: 'between',
        options: ['among', 'on', 'at'],
        answer: 0,
      },
      {
        sentence: 'As a Sûfî, he helped people making sense of life during those hard days.',
        error: 'making',
        options: ['made', 'make', 'makes'],
        answer: 1,
      },
    ],
    correctAnswer: null,
    explanation: 'In “were spreading … and establishing …”, both verbs share “were”, so both need the -ing form: two activities going on at the same time. We are influential “among” a group of people. “Help + person + base verb” shows what someone makes possible for others: “helped people make sense of life”.',
    feedback: {
      correct: 'Well done. You kept the parallel -ing forms, the preposition and the verb pattern correct.',
      incorrect: 'Compare each sentence with Chapter 7: the end of the first paragraph and the second paragraph.',
    },
  },
  {
    id: 'yunus-b1-language-7-source-inspiration',
    type: 'word-bank',
    title: 'Time, Pressure and Response',
    instructions: 'Complete the lines from Chapter 7 with words from the bank. Three words are not needed.',
    question: 'What was happening, and how did Yunus Emre help?',
    fillBlanksText: 'Anatolia was experiencing total chaos. [blank] the same period, the shaykhs from the regions of Turkestan, Khorasan and Iran came to Anatolia [blank] Mongol pressure. … So in [blank] an environment, Yunus Emre also appeared as a wise Sûfî and dervish and travelled around Anatolia. … Poetry was his [blank] influential tool.',
    wordBank: ['under', 'During', 'most', 'such', 'While', 'so', 'more'],
    correctAnswer: ['During', 'under', 'such', 'most'],
    explanation: '“During + noun” places an event inside a period; “while” needs a clause (while + subject + verb). “Under … pressure” shows the force behind an action. “Such an environment” points back to everything described before: chaos, pressure and new teachers. “His most influential tool” is a superlative: poetry was the strongest of his ways of reaching people.',
    feedback: {
      correct: 'Well done. You placed the events in time and linked the situation with Yunus’s response.',
      incorrect: 'Check the first two paragraphs of Chapter 7. Remember: “during” comes before a noun, and a superlative after “his” needs “most”.',
    },
  },
  {
    id: 'yunus-b1-language-7-production', type: 'reflection', title: 'Build a Response from Its Context', instructions: 'Write or say five or six sentences about someone who helped people in a hard time.', question: 'What was the problem, and how did the person help?', correctAnswer: null, explanation: 'Useful language from the chapter includes “during the same period”, “under ... pressure”, “were ...-ing and ...-ing”, “so in such an environment”, “helped people make sense of...”, “influential among...”, “most influential tool”, “comes from...”, and “was inspired by...”.', feedback: { correct: 'Keep the sentences connected so the context leads naturally to the response, the tool, and the sources of influence.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Give the problem: “Last winter, …”', mode: 'Individual' },
      { question: 'Sentence 2 — Say what people were doing: “During that time, … were …ing …”', mode: 'Individual' },
      { question: 'Sentence 3 — Bring in the person: “So …, … also offered help.”', mode: 'Pair' },
      { question: 'Sentence 4 — Say how she helped: “She helped people … . Her … was her most useful tool.”', mode: 'Pair' },
      { question: 'Sentences 5–6 — Say where her ideas come from: “Her way … comes from … . She was also inspired by …”', mode: 'Pair' },
    ],
  },
];

/** Chapter 8 English Language Focus, derived only from the locked Chapter 8 story text. */
export const yunusB1LanguageFocusChapter8: Exercise[] = [
  {
    id: 'yunus-b1-language-8-definition-viewpoint',
    type: 'matching',
    title: 'What Do These Phrases Mean?',
    instructions: 'Match each phrase from Chapter 8 with its meaning in plain English.',
    question: 'What do these phrases from Chapter 8 mean?',
    matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
    matchingPairs: [
      { left: 'a vivid love', right: 'a strong and lively feeling' },
      { left: 'the source of all things', right: 'where everything comes from' },
      { left: 'a key idea for Yunus Emre', right: 'a central belief in his thinking' },
      { left: 'an enemy to his own soul', right: 'someone who harms himself' },
    ],
    correctAnswer: {
      'a vivid love': 'a strong and lively feeling',
      'the source of all things': 'where everything comes from',
      'a key idea for Yunus Emre': 'a central belief in his thinking',
      'an enemy to his own soul': 'someone who harms himself',
    },
    explanation: '“Vivid” describes something strong and full of life. A “source” is where something begins or comes from. A “key” idea is the most important one, the idea that opens the others. In the poem, a person who is “an enemy to his own soul” is harming himself, not someone else.',
    feedback: {
      correct: 'Good. You understood the key phrases of the chapter and the poem.',
      incorrect: 'Read Chapter 8 and the poem again. Ask which phrase is about a feeling, which is about an origin, which is about importance, and which is about harm.',
    },
  },
  {
    id: 'yunus-b1-language-8-one-true-focus',
    type: 'word-bank',
    title: 'Define, Report, Conclude',
    instructions: 'Complete the lines from Chapter 8 with words from the bank. Three words are not needed.',
    question: 'Which word fits each gap?',
    fillBlanksText: 'One of the most important basic spiritual principles in his works is the idea of Tawhid, [blank] means the Oneness of Allah. [blank] Yunus Emre, Allah, the Creator, is the source of all things. [blank] everything is connected to Him.',
    wordBank: ['So', 'which', 'According to', 'who', 'Due to', 'But'],
    correctAnswer: ['which', 'According to', 'So'],
    explanation: '“…, which means …” adds a definition to a word or idea; “who” is only for people. “According to + person” shows whose view the writer is reporting; “due to” gives a reason, not a viewpoint. “So” draws a conclusion from the idea before it: if Allah is the source of all things, then everything is connected to Him. “But” would show a contrast that is not there.',
    feedback: {
      correct: 'Well done. You defined the idea, reported the view and drew the conclusion.',
      incorrect: 'Read the second paragraph of Chapter 8 again. Which blank gives a definition, which names whose view it is, and which draws a conclusion?',
    },
  },
  {
    id: 'yunus-b1-language-8-whoever-condition',
    type: 'transformation',
    title: 'Only One: Say It Another Way',
    instructions: 'Write the missing words. Keep the same meaning.',
    question: 'How else can we say that there is only one true reality?',
    transformItems: [
      {
        source: 'The Creator is the true and only reality.',
        frame: 'Nothing is truly real [blank] the Creator.',
        answers: ['except', 'but', 'other than', 'apart from', 'except for', 'besides'],
      },
      {
        source: '… there is only one true existence in the universe, and that is Allah.',
        frame: 'Allah is [blank] true existence in the universe.',
        answers: ['the only', 'the one and only', 'the one', 'the single', 'the one single'],
      },
    ],
    correctAnswer: null,
    explanation: '“There is only one …, and that is …” first limits the possibilities to one, then names it. The same idea can be said with “the only …” (Allah is the only true existence) or negatively with “nothing … except / other than …”. All these patterns single out one thing and leave out everything else.',
    feedback: {
      correct: 'Well done. You kept the “only one” meaning in a new structure.',
      incorrect: 'Look at the last sentence before the poem in Chapter 8. It limits the choice to one and then names it. In the first frame, which word means “and nothing else”?',
    },
  },
  {
    id: 'yunus-b1-language-8-production', type: 'reflection', title: 'Explain an Idea from Definition to Conclusion', instructions: 'Write or say five or six sentences about an important idea, for example fair play.', question: 'What does the idea mean, and why does it matter?', correctAnswer: null, explanation: 'Useful language from the chapter includes “the idea of ... which means ...”, “according to ...”, “..., which is/was ...”, “so ...”, “there is only one ..., and that is ...”, and “whoever ...”.', feedback: { correct: 'Keep the paragraph connected: define the idea first, develop it, then move to a consequence or general statement.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Explain the idea: “… is …, which means …”', mode: 'Individual' },
      { question: 'Sentence 2 — Give a view: “According to …, …”', mode: 'Individual' },
      { question: 'Sentence 3 — Add information: “This idea, which …, …”', mode: 'Pair' },
      { question: 'Sentence 4 — Give a result: “So …”', mode: 'Pair' },
      { question: 'Sentences 5–6 — End: “There is only one …, and that is …” or “Whoever …”', mode: 'Pair' },
    ],
  },
];
