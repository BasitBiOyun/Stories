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
    instructions: 'Choose the correct word or phrase to complete each sentence from Chapter 4.',
    question: 'Which forms describe a high point, mark a change in direction, and add information about a place?',
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
    instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 4.',
    question: 'Can you express the same cause and result with a different structure?',
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
    instructions: 'Write or say five to six connected B1 sentences about a real or imagined place, institution, or community. Do not retell Chapter 4.',
    question: 'Can you begin with an “if ... can ...” perspective, describe an earlier high point, mark a later contrast, and explain a short cause-result chain?',
    correctAnswer: null,
    explanation: 'A strong response should develop one coherent account. Useful language from the chapter includes “If we... we can...”, superlative descriptions such as “the most...”, “however”, “because of...”, “caused ... to...”, “which...”, “began to...”, and “failure to ... worsened...”.',
    feedback: {
      correct: 'Keep the time change and the cause-result links explicit so the paragraph reads as one explanation.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Use “If we... we can...” to explain how looking at one factor can improve understanding.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe an earlier strong or successful period with an appropriate comparative or superlative expression.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “however” to mark a later change in direction.', mode: 'Pair' },
      { question: 'Sentences 4–6 — Build a short chain with a cause, an effect on people or conditions, and a final worsening or improvement.', mode: 'Pair' },
    ],
  },
];

/** Chapter 5 English Language Focus, derived only from the locked Chapter 5 story text. */
export const yunusB1LanguageFocusChapter5: Exercise[] = [
  {
    id: 'yunus-b1-language-5-cause-response',
    type: 'multiple-choice',
    title: 'What Does “Would” Show?',
    instructions: 'Read the part of the sentence from Chapter 5. Then choose the best answer.',
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
    question: 'Which words show a surprising change, a result and a consequence in the second paragraph?',
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
    instructions: 'Each sentence from Chapter 5 has one mistake. Tap the wrong word or phrase, then choose the correction.',
    question: 'Which linking form needs a noun, and which needs a full clause?',
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
    id: 'yunus-b1-language-5-production', type: 'reflection', title: 'Explain a Chain of Pressure, Belief, and Result', instructions: 'Write or say five to six connected B1 sentences about a real or imagined social situation. Do not retell Chapter 5.', question: 'Can you explain a difficult condition, describe how people respond, report what they believe will happen, introduce an unexpected development, and finish with a clear result?', correctAnswer: null, explanation: 'A strong response should read as one connected explanation. Useful language from the chapter includes “because of...”, “were looking for...”, “started...”, “because they believed... would...”, “however”, “caused...”, “thus”, and “after that”.', feedback: { correct: 'Keep the relationships explicit so each sentence develops the previous one.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce a difficult condition with “because of...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe how people were trying to respond to that condition.', mode: 'Individual' },
      { question: 'Sentence 3 — Report what they believed would happen next.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “however” to introduce an unexpected new development.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Show one or two consequences with “caused...”, “thus”, or another clear result expression.', mode: 'Pair' },
    ],
  },
];

/** Chapter 6 English Language Focus, derived only from the locked Chapter 6 story text. */
export const yunusB1LanguageFocusChapter6: Exercise[] = [
  {
    id: 'yunus-b1-language-6-focus-and-effect',
    type: 'drag-drop',
    title: 'Who Is the Subject?',
    instructions: 'Read each sentence from Chapter 6. Is the subject the one who acts, or the person or thing that the action happens to? Put it in the right group.',
    question: 'When does the chapter use the passive, and what does it put in focus?',
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
    instructions: 'Choose the correct word or phrase to complete each sentence from Chapter 6.',
    question: 'Which forms show a change of state, a comparison and a process that started?',
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
    instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 6.',
    question: 'Can you say the same result or the same action with a different structure?',
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
    id: 'yunus-b1-language-6-production', type: 'reflection', title: 'Describe a Process of Losing Control', instructions: 'Write or say five to six connected B1 sentences about a real, historical, or imagined situation in which a person, group, or organisation gradually loses control. Do not retell Chapter 6.', question: 'Can you keep the affected side in focus, show change over time, compare its new role with an earlier one, and finish with a clear consequence?', correctAnswer: null, explanation: 'A strong response should develop as one short process. Useful language from the chapter includes “was/were + past participle”, “in time”, “became...”, “almost like...”, “began to be...”, “however”, “made ... + adjective”, “through...”, and “was/were directly attached to...”.', feedback: { correct: 'Keep the stages connected so the reader can see who is affected, how the situation changes, and what the final consequence is.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce something that happened to the affected person, group, or organisation.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “in time” or “became...” to show a change in status or independence.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “almost like...” to compare the new role with another role.', mode: 'Pair' },
      { question: 'Sentence 4 — Show a new process beginning, using “began to...” or “began to be...”.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Add a contrast or worsening development and finish with a clear effect using “made...”, another result expression, or a final passive sentence.', mode: 'Pair' },
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
    question: '“Yunus’s understanding of Sûfîsm comes from the Qur’an and the Prophet\'s Sunnah. He was also inspired by the ideas and experiences of earlier Muslim Sûfîs.” How are the two sources different?',
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
    instructions: 'Each sentence from Chapter 7 has one mistake. Tap the wrong word or phrase, then choose the correction.',
    question: 'Can you correct a parallel -ing form, a preposition and a verb pattern?',
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
    question: 'Which words place the events in time, name the pressure, and lead to Yunus’s response?',
    fillBlanksText: 'Anatolia was experiencing total chaos. [blank] the same period, the shaykhs from the regions of Turkestan, Khorasan and Iran came to Anatolia [blank] Mongol pressure. … So in [blank] an environment, Yunus Emre also appeared as a wise Sûfî / dervish and travelled around Anatolia. … Poetry was his [blank] influential tool.',
    wordBank: ['under', 'During', 'most', 'such', 'While', 'so', 'more'],
    correctAnswer: ['During', 'under', 'such', 'most'],
    explanation: '“During + noun” places an event inside a period; “while” needs a clause (while + subject + verb). “Under … pressure” shows the force behind an action. “Such an environment” points back to everything described before: chaos, pressure and new teachers. “His most influential tool” is a superlative: poetry was the strongest of his ways of reaching people.',
    feedback: {
      correct: 'Well done. You placed the events in time and linked the situation with Yunus’s response.',
      incorrect: 'Check the first two paragraphs of Chapter 7. Remember: “during” comes before a noun, and a superlative after “his” needs “most”.',
    },
  },
  {
    id: 'yunus-b1-language-7-production', type: 'reflection', title: 'Build a Response from Its Context', instructions: 'Write or say five to six connected B1 sentences about a real or imagined person who appears in a difficult situation and responds to a need in the community. Do not retell Chapter 7.', question: 'Can you establish the situation, show ongoing activity, explain the person’s response and tool, and identify the sources of their ideas?', correctAnswer: null, explanation: 'Useful language from the chapter includes “during the same period”, “under ... pressure”, “were ...-ing and ...-ing”, “so in such an environment”, “helped people make sense of...”, “influential among...”, “most influential tool”, “comes from...”, and “was inspired by...”.', feedback: { correct: 'Keep the sentences connected so the context leads naturally to the response, the tool, and the sources of influence.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce a difficult situation or pressure.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe two activities that were happening during the same period.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “so” or a similar connector to move from the situation to the person’s response.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain how the person helped people (“helped people + verb”) and name their most influential tool or means.', mode: 'Pair' },
      { question: 'Sentences 5–6 — State what the person’s approach comes from and add another source of inspiration.', mode: 'Pair' },
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
    question: 'What do these phrases from the chapter and the poem mean?',
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
    question: 'Which words define an idea, show whose view it is, and draw a conclusion?',
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
    instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 8.',
    question: 'How else can you say that there is only one true reality?',
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
    id: 'yunus-b1-language-8-production', type: 'reflection', title: 'Explain an Idea from Definition to Conclusion', instructions: 'Write or say five to six connected B1 sentences about a principle, belief, or important idea from school, community life, science, or everyday experience. Do not retell Chapter 8.', question: 'Can you define the idea, attribute a viewpoint, add explanatory information, draw a consequence, and end with a general statement about people?', correctAnswer: null, explanation: 'Useful language from the chapter includes “the idea of ... which means ...”, “according to ...”, “..., which is/was ...”, “so ...”, “there is only one ..., and that is ...”, and “whoever ...”.', feedback: { correct: 'Keep the paragraph connected: define the idea first, develop it, then move to a consequence or general statement.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce an idea and define it with “which means...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Attribute a viewpoint with “according to...”.', mode: 'Individual' },
      { question: 'Sentence 3 — Add extra information with a “which” clause.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “so” to show a conclusion or consequence.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Identify one central point with “there is only one..., and that is...” or finish with a general “whoever...” statement.', mode: 'Pair' },
    ],
  },
];
