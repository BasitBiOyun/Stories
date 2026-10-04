import type { Exercise } from '../../../../types';

/**
 * Chapter-specific A2 Language Focus for Moses — Chapters 3–9.
 * Look → Practise → Use. Every quoted sentence comes from the English chapter text.
 */
export const mosesA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-a2-language-3-could',
      type: 'choose-form',
      title: 'Could or Could Not?',
      instructions: 'Choose could or could not for each sentence.',
      question: 'Was something possible, or was she not able?',
      formChoices: [
        { sentence: 'His mother was afraid that soldiers [choice] find her baby.', options: ['could not', 'could'], answer: 1 },
        { sentence: 'So, she [choice] sleep at night.', options: ['could', 'could not'], answer: 1 },
      ],
      correctAnswer: null,
      explanation: 'Could + base verb can show that something was possible in the past: soldiers could find her baby (this was the danger). Could not + base verb shows that someone was not able to do something: she could not sleep.',
      feedback: {
        correct: 'Correct. The danger was possible, so she was not able to sleep.',
        incorrect: 'Read the first sentences of Chapter 3. What was the mother afraid of? What happened at night because of this?',
      },
    },
    {
      id: 'moses-a2-language-3-instructions-promise',
      type: 'word-bank',
      title: 'What Did She Do?',
      instructions: 'Fill each gap from the word bank. Two words are not needed.',
      question: 'What did Moses’s mother do? What did the water do?',
      fillBlanksText: 'Moses’s mother [blank] the baby Moses in a basket and [blank] it to the river. … The water [blank] it away.',
      wordBank: ['put', 'took', 'carried', 'take', 'carry'],
      correctAnswer: ['put', 'took', 'carried'],
      explanation: 'The story tells us what happened, so the verbs are in the past: put (put is the same in the present and the past), took (take → took) and carried (carry → carried). Allah’s words to Moses’s mother are read as they are; we do not change them.',
      feedback: {
        correct: 'Correct. You chose the past forms that tell the story.',
        incorrect: 'Read the sentences after Allah’s words in Chapter 3 again. What did Moses’s mother do? Use the past form.',
      },
    },
    {
      id: 'moses-a2-language-3-tell-comparison',
      type: 'error-correction',
      title: 'Told Her To … / Kinder Than',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the two sentences about Moses’s mother?',
      errorItems: [
        {
          sentence: 'Moses’s mother was very worried and told her daughter follow the basket.',
          error: 'follow',
          options: ['following', 'to follow', 'followed'],
          answer: 1,
        },
        {
          sentence: 'But she knew that Allah was more kind to the baby Moses than she was.',
          error: 'more kind',
          options: ['kinder', 'more kinder', 'kindest'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Tell + person + to + base verb reports an instruction: told her daughter to follow. For a short adjective, add -er + than to compare: kind → kinder than.',
      feedback: {
        correct: 'Well done. Told her daughter to follow, and kinder than.',
        incorrect: 'Find the two sentences near the end of Chapter 3. What word comes before follow? How do we compare with kind?',
      },
    },
    {
      id: 'moses-a2-language-3-production', type: 'reflection', title: 'Use It: Help in a Difficult Situation',
      instructions: 'Say four short sentences about helping someone with a problem.', question: 'Can you help someone with a problem?',
      correctAnswer: null, explanation: 'Use could/could not, an imperative, will + verb, tell + person + to + verb, or a simple comparative.',
      feedback: { correct: 'Keep the situation new and the forms accurate.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say the problem: “… could not …”', mode: 'Individual' },
        { question: 'Sentence 2 — Tell them what to do: “Look …”', mode: 'Individual' },
        { question: 'Sentence 3 — Help them feel better: “Don’t worry. I will …”', mode: 'Individual' },
        { question: 'Sentence 4 — Say what someone told them: “… told him/her to …”', mode: 'Pair' },
      ],
    },
  ],
};

export const mosesA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-a2-language-4-past-actions',
      type: 'drag-drop',
      title: 'Going Somewhere or Being Somewhere?',
      instructions: 'Put each part of Chapter 4 in the right group.',
      question: 'Going to a place, or where something is?',
      dragDropGroups: [
        {
          group: 'Going to a place or person',
          items: [
            'Soon, the basket came to the waterside.',
            'The palace servants saw the basket and took it to the king and the queen',
            'She ran to the queen',
          ],
        },
        {
          group: 'Where something is',
          items: [
            'It was near the king’s palace.',
            'She lives nearby.',
          ],
        },
      ],
      correctAnswer: {
        'Going to a place or person': [
          'Soon, the basket came to the waterside.',
          'The palace servants saw the basket and took it to the king and the queen',
          'She ran to the queen',
        ],
        'Where something is': [
          'It was near the king’s palace.',
          'She lives nearby.',
        ],
      },
      explanation: 'A movement verb + to shows where someone or something goes: came to, took it to, ran to. Near and nearby say where something is. The sister says “She lives nearby” in the present because the woman still lives there when she speaks.',
      feedback: {
        correct: 'Correct. To + place shows movement; near and nearby show position.',
        incorrect: 'Look for a movement verb + to. Near and nearby tell us where something is.',
      },
    },
    {
      id: 'moses-a2-language-4-different-from',
      type: 'matching',
      title: 'Words About the Queen',
      instructions: 'Match each word from Chapter 4 with its meaning.',
      question: 'What do these words from Chapter 4 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'different from', right: 'not like' },
        { left: 'kind-hearted', right: 'gentle and caring' },
        { left: 'accepted', right: 'said yes' },
        { left: 'placed', right: 'put' },
      ],
      correctAnswer: {
        'different from': 'not like',
        'kind-hearted': 'gentle and caring',
        accepted: 'said yes',
        placed: 'put',
      },
      explanation: 'The queen was different from her husband: she was not like him. She believed in Allah and was kind-hearted. Remember: we say different from, not different than or different of.',
      feedback: {
        correct: 'Correct. These words help us describe the queen and what happened.',
        incorrect: 'Read the sentences about Queen Asiye in Chapter 4 again. What did the king do when she asked to keep the baby?',
      },
    },
    {
      id: 'moses-a2-language-4-will-command',
      type: 'choose-form',
      title: 'A Decision and an Order',
      instructions: 'Choose the correct word for each sentence from Chapter 4.',
      question: 'Which word shows a decision, and which word gives an order?',
      formChoices: [
        { sentence: 'She told her husband, “I [choice] take him to the palace and look after him.”', options: ['am', 'will', 'was'], answer: 1 },
        { sentence: 'She said to her servants, “[choice] a nurse for the baby.”', options: ['Found', 'Finds', 'Find'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'I will + base verb shows a decision the speaker makes now. An order starts with the base verb and has no subject: Find a nurse.',
      feedback: {
        correct: 'Correct. Will for the queen’s decision, the base verb for her order.',
        incorrect: 'Read what the queen says to her husband and to her servants in Chapter 4.',
      },
    },
    {
      id: 'moses-a2-language-4-production', type: 'reflection', title: 'Use It: A Helpful Plan', instructions: 'Say four short sentences about a helpful neighbour.', question: 'Can you describe a helpful person and your plan?',
      correctAnswer: null, explanation: 'Use be + adjective, different from, will + verb and an imperative.', feedback: { correct: 'Keep the example new and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the person: “Our … is … and …”', mode: 'Individual' }, { question: 'Sentence 2 — Compare: “She/He is different from …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what you will do: “I will …”', mode: 'Individual' }, { question: 'Sentence 4 — Ask someone to do something: “Put …, please.”', mode: 'Pair' },
      ],
    },
  ],
  5: [
    {
      id: 'moses-a2-language-5-care-growth',
      type: 'matching',
      title: 'Care and Change',
      instructions: 'Match each word from Chapter 5 with its meaning.',
      question: 'What do these words from Chapter 5 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'take care of', right: 'look after' },
        { left: 'grew up', right: 'got older' },
        { left: 'became', right: 'started to be' },
        { left: 'the weak people', right: 'people with little power or strength' },
        { left: 'bazaar', right: 'a busy market' },
      ],
      correctAnswer: {
        'take care of': 'look after',
        'grew up': 'got older',
        became: 'started to be',
        'the weak people': 'people with little power or strength',
        bazaar: 'a busy market',
      },
      explanation: 'Take care of and look after have the same meaning; the chapter uses both. Grew up and became show change over time: Moses grew up in a safe place and became a strong young man.',
      feedback: {
        correct: 'Correct. You found words for care and for change.',
        incorrect: 'Read Chapter 5 again. Which two phrases does the chapter use for the mother’s care?',
      },
    },
    {
      id: 'moses-a2-language-5-habits-reasons',
      type: 'word-bank',
      title: 'Always and Because',
      instructions: 'Fill each gap from the word bank. Two words are not needed.',
      question: 'Which word means “all the time”, and which gives a reason?',
      fillBlanksText: 'Moses grew up in a safe place, in the house of the king. He [blank] loved Allah. … He loved the Children of Israel [blank] his mother was from the Children of Israel.',
      wordBank: ['always', 'because', 'because of', 'never'],
      correctAnswer: ['always', 'because'],
      explanation: 'Always shows that something was true all the time. Because + subject + verb gives a reason (because his mother was …). Because of goes before a noun only, for example because of his fear.',
      feedback: {
        correct: 'Correct. Always for something true all the time, because for the reason.',
        incorrect: 'Read Chapter 5 again. Did Moses love Allah all the time? After the second blank there is a subject and a verb (his mother was).',
      },
    },
    {
      id: 'moses-a2-language-5-background-event',
      type: 'true-false',
      title: 'Walking, Then Seeing',
      instructions: 'Read the sentences from Chapter 5. True or false?',
      question: '“One day he was walking in the bazaar. He saw two men fighting.” — Moses started walking after he saw the two men.',
      correctAnswer: false,
      explanation: 'Was walking (was + -ing) shows an action that was already happening. Saw (simple past) shows a new event in the middle of that action. So Moses was walking first, and then he saw the men.',
      feedback: {
        correct: 'Correct. The walking was already happening when he saw the men.',
        incorrect: 'Look again: was walking describes an action in progress. The new event, saw, happened during the walk.',
      },
    },
    {
      id: 'moses-a2-language-5-production', type: 'reflection', title: 'Use It: Someone Who Helps', instructions: 'Say four short sentences about someone who helps others.', question: 'Who helps others in your life?',
      correctAnswer: null, explanation: 'Use look after/take care of, became, always, because, or was/were + -ing.', feedback: { correct: 'Use the language in a new situation.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say who they look after: “My … looks after …”', mode: 'Individual' }, { question: 'Sentence 2 — Say how they changed: “She/He became …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what they are always like: “She/He is always …”', mode: 'Individual' }, { question: 'Sentence 4 — Give a reason: “She/He likes … because …”', mode: 'Pair' },
      ],
    },
  ],
};

export const mosesA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  6: [
    {
      id: 'moses-a2-language-6-purpose-accident',
      type: 'multiple-choice',
      title: 'What Does “Accidentally” Mean?',
      instructions: 'Read the sentence from Chapter 6. Choose the best meaning.',
      question: '“He was so sorry because he accidentally caused someone’s death.” What does accidentally tell us?',
      options: ['He wanted to do it.', 'He did not plan to do it.', 'He did it many times.'],
      correctAnswer: 1,
      explanation: 'Accidentally means not on purpose: Moses did not plan or want this result. That is why he was so sorry and asked Allah to forgive him.',
      feedback: {
        correct: 'Correct. Accidentally means he did not plan it.',
        incorrect: 'Read Chapter 6 again. Why did Moses run to the man? Was the result his plan?',
      },
    },
    {
      id: 'moses-a2-language-6-feeling-reason',
      type: 'choose-form',
      title: 'Why? — To … / Because …',
      instructions: 'Choose the correct words for each sentence from Chapter 6.',
      question: 'Which words tell us why something happened?',
      formChoices: [
        { sentence: 'Moses ran [choice] him.', options: ['helping', 'to help', 'for help'], answer: 1 },
        { sentence: 'Allah forgave him [choice] He is Kind and Loving.', options: ['so', 'but', 'because'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'To + base verb gives the purpose of an action: Moses ran to help him. Because + subject + verb gives a reason: because He is Kind and Loving.',
      feedback: {
        correct: 'Correct. To help gives the purpose, because gives the reason.',
        incorrect: 'Read Chapter 6 again. Why did Moses run? Why did Allah forgive him?',
      },
    },
    {
      id: 'moses-a2-language-6-warning-language',
      type: 'error-correction',
      title: 'A Friend’s Warning',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the verbs about now and about the future?',
      errorItems: [
        {
          sentence: '“The king’s soldiers are look for you. You killed an Egyptian.”',
          error: 'are look',
          options: ['are looking', 'is looking', 'looking'],
          answer: 0,
        },
        {
          sentence: '“Now they are going catch you. Run away from the city.”',
          error: 'going catch',
          options: ['going catching', 'go to catch', 'going to catch'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'Are + verb-ing shows what is happening now: are looking for you. Are going to + base verb shows what the man expects will happen soon: are going to catch you.',
      feedback: {
        correct: 'Well done. Are looking for now, are going to catch for the future.',
        incorrect: 'Read the man’s words at the end of Chapter 6. Be + -ing for now; be going to + base verb for the future.',
      },
    },
    { id:'moses-a2-language-6-production', type:'reflection', title:'Use It: Give a Safe Warning', instructions: 'Say four short sentences about a small accident at home.', question: 'Can you say what happened and warn someone?', correctAnswer:null, explanation:'Use to + verb, because, present continuous, be going to/will and an imperative.', feedback:{correct:'Keep the situation safe and new.',incorrect:''}, discussionPrompts:[{ question: 'Sentence 1 — Say why you went: “I went to … to …”',mode:'Individual'},{ question: 'Sentence 2 — Say what happened and why: “… because …”',mode:'Individual'},{ question: 'Sentence 3 — Say what is happening now: “Now … is …-ing …”',mode:'Individual'},{ question: 'Sentence 4 — Warn someone: “Be careful! …”',mode:'Pair'}] },
  ],
  7: [
    {
      id: 'moses-a2-language-7-journey-sequence',
      type: 'choose-form',
      title: 'At the Well',
      instructions: 'Choose the correct word for each sentence from Chapter 7.',
      question: 'Is it one, or more than one? Which word fits?',
      formChoices: [
        { sentence: 'There [choice] many men around the water.', options: ['was', 'were'], answer: 1 },
        { sentence: 'They [choice] watering their animals.', options: ['was', 'are', 'were'], answer: 2 },
        { sentence: 'Two girls [choice] sitting far from the water.', options: ['were', 'was', 'are'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'There were + plural noun tells us what was in a place. Were + verb-ing (were watering, were sitting) describes what people were doing at that moment in the past. Use were, not was, with more than one person.',
      feedback: {
        correct: 'Correct. You used were with more than one person.',
        incorrect: 'Read the well scene in Chapter 7. Many men, they and two girls are more than one person.',
      },
    },
    {
      id: 'moses-a2-language-7-reason-result',
      type: 'word-bank',
      title: 'Arriving and Looking',
      instructions: 'Fill each gap from the word bank. Two words are not needed.',
      question: 'Which small words fit the sentences?',
      fillBlanksText: 'After many days, he arrived [blank] Midian. … Moses was tired and thirsty. [blank], he looked [blank] water.',
      wordBank: ['at', 'So', 'for', 'Because', 'to'],
      correctAnswer: ['at', 'So', 'for'],
      explanation: 'We say arrive at a place, not arrive to. So introduces the result: he was thirsty, so he looked for water. Look for means try to find.',
      feedback: {
        correct: 'Correct. Arrived at, So, and looked for.',
        incorrect: 'Read Chapter 7 again. What did Moses do because he was thirsty? Which word goes after arrived?',
      },
    },
    {
      id: 'moses-a2-language-7-scene-actions',
      type: 'matching',
      title: 'Journey Words',
      instructions: 'Match each word from Chapter 7 with its meaning.',
      question: 'What do these words from Chapter 7 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'escaped from', right: 'ran away from' },
        { left: 'guided', right: 'showed the way' },
        { left: 'thirsty', right: 'needing a drink' },
        { left: 'a well', right: 'a deep hole in the ground with water' },
        { left: 'shepherds', right: 'people who look after sheep' },
      ],
      correctAnswer: {
        'escaped from': 'ran away from',
        guided: 'showed the way',
        thirsty: 'needing a drink',
        'a well': 'a deep hole in the ground with water',
        shepherds: 'people who look after sheep',
      },
      explanation: 'These words help us follow Moses’s journey: he escaped from the soldiers, Allah guided him, and he was thirsty when he found a well with shepherds.',
      feedback: {
        correct: 'Correct. You know the key words of the journey.',
        incorrect: 'Read Chapter 7 again. Find each word and look at the sentence around it.',
      },
    },
    { id:'moses-a2-language-7-production', type:'reflection', title:'Use It: Describe an Arrival', instructions: 'Say four short sentences about a trip you made.', question: 'Where did you go, and what did you see?', correctAnswer:null, explanation:'Use after, arrived at, so, looked for, there were and was/were + -ing.', feedback:{correct:'Use the forms in a new situation.',incorrect:''}, discussionPrompts:[{ question: 'Sentence 1 — Say where you arrived: “After …, we arrived at …”',mode:'Individual'},{ question: 'Sentence 2 — Say what you needed: “I was …, so I …”',mode:'Individual'},{ question: 'Sentence 3 — Say what you looked for: “Then I looked for …”',mode:'Individual'},{ question: 'Sentence 4 — Say what people were doing: “Some … were …-ing …”',mode:'Pair'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  8: [
    {
      id: 'moses-a2-language-8-question-ability',
      type: 'multiple-choice',
      title: 'What Does “Cannot” Mean?',
      instructions: 'Read the girls’ words. Choose the best meaning.',
      question: '“Our father is very old. He cannot come with us.” What does cannot come tell us?',
      options: ['He does not want to come.', 'He will come later.', 'He is not able to come.'],
      correctAnswer: 2,
      explanation: 'Cannot + base verb means someone is not able to do something now. Their father is very old, so he is not able to come to the well.',
      feedback: {
        correct: 'Correct. Cannot means he is not able.',
        incorrect: 'Read the girls’ answer in Chapter 8 again. Why can their father not come?',
      },
    },
    {
      id: 'moses-a2-language-8-purpose-result',
      type: 'sentence-building',
      title: 'Build Moses’s Question',
      instructions: 'Tap the pieces to build Moses’s question from Chapter 8.',
      question: 'Where do aren’t and you go in a Why question?',
      sentenceChunks: ['Why', 'aren’t', 'you', 'taking', 'your sheep', 'to drink water?'],
      correctAnswer: null,
      explanation: 'In a question, the helping verb comes before the subject: Why + aren’t + you + verb-ing …? This question asks why an action is not happening now.',
      feedback: {
        correct: 'Correct. Why + aren’t + you + taking …?',
        incorrect: 'Read the first line of Chapter 8. In a question, aren’t comes before you.',
      },
    },
    {
      id: 'moses-a2-language-8-time-waiting',
      type: 'error-correction',
      title: 'Fix the Sisters’ Words',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sisters’ words?',
      errorItems: [
        {
          sentence: '“There is no young men in our house to help us. So, we take the sheep to the water.”',
          error: 'There is no',
          options: ['There no', 'There are no', 'There are any'],
          answer: 1,
        },
        {
          sentence: '“We did not wait for the other shepherds leave the well.”',
          error: 'leave',
          options: ['to leave', 'leaving', 'left'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'There are no + plural noun says that something is not there: There are no young men. Wait for + person + to + base verb: wait for the other shepherds to leave.',
      feedback: {
        correct: 'Well done. There are no young men, and wait for the shepherds to leave.',
        incorrect: 'Read the sisters’ words in Chapter 8. Young men is plural. What small word comes before leave?',
      },
    },
    { id:'moses-a2-language-8-production', type:'reflection', title:'Use It: Explain a Shared Task', instructions: 'Say four short sentences about a job you share at home.', question: 'Who helps at home, and who cannot?', correctAnswer:null, explanation:'Use Why aren’t you...?, cannot, There are no..., so, wait for, when or early.', feedback:{correct:'Keep the example new and clear.',incorrect:''}, discussionPrompts:[{ question: 'Sentence 1 — Ask a question: “Why aren’t you …?”',mode:'Pair'},{ question: 'Sentence 2 — Say what someone cannot do: “… cannot …”',mode:'Individual'},{ question: 'Sentence 3 — Give a result: “…, so I …”',mode:'Individual'},{ question: 'Sentence 4 — Say when: “When we finished …, …”',mode:'Individual'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  9: [
    {
      id: 'moses-a2-language-9-reason-need',
      type: 'word-bank',
      title: 'Couldn’t, Needed, Because',
      instructions: 'Fill each gap from the word bank. Two words are not needed.',
      question: 'Which word fits each gap?',
      fillBlanksText: 'He was very old, so he [blank] help his daughters. … Moses accepted the job [blank] he was a stranger in Midian. He [blank] a job and a house.',
      wordBank: ['couldn’t', 'because', 'needed', 'so', 'can’t'],
      correctAnswer: ['couldn’t', 'because', 'needed'],
      explanation: 'Couldn’t + base verb means he was not able in the past. Because gives the reason for Moses’s choice. Needed + noun says what was necessary for him.',
      feedback: {
        correct: 'Correct. Couldn’t, because and needed each do a different job.',
        incorrect: 'Read Chapter 9 again. The story is in the past. Why did Moses accept the job?',
      },
    },
    {
      id: 'moses-a2-language-9-want-offer',
      type: 'choose-form',
      title: 'Want To, Decided To',
      instructions: 'Choose the correct words for each sentence from Chapter 9.',
      question: 'What comes after “want” and “decided”?',
      formChoices: [
        { sentence: 'Shu’ayb (pbuh) said, “Go and call the young man. I want [choice] him for his work.”', options: ['thank', 'to thank', 'thanking'], answer: 1 },
        { sentence: 'After ten years, Moses decided [choice] back to Egypt.', options: ['going', 'go', 'to go'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'Want to + base verb shows what someone wishes to do. Decided to + base verb shows a choice about the future.',
      feedback: {
        correct: 'Correct. Want to thank and decided to go.',
        incorrect: 'Read Chapter 9 again. After want and decided, use to + base verb.',
      },
    },
    {
      id: 'moses-a2-language-9-life-sequence',
      type: 'sequencing',
      title: 'Moses’s New Life',
      instructions: 'Put the sentences from Chapter 9 in story order.',
      question: 'Which time words help you find the order?',
      sequencingItems: [
        { id: '1', text: 'Moses came to the house.' },
        { id: '2', text: 'Shu’ayb (pbuh) offered Moses a job.' },
        { id: '3', text: 'Later, he married one of the sisters.' },
        { id: '4', text: 'After ten years, Moses decided …' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Later and After ten years move the story forward in time. They help the reader follow a long period of Moses’s life.',
      feedback: {
        correct: 'Correct. Later and After ten years show the order.',
        incorrect: 'Read Chapter 9 again. Look for Later and After ten years.',
      },
    },
    { id:'moses-a2-language-9-production', type:'reflection', title:'Use It: A New Opportunity', instructions: 'Say four short sentences about a new plan for your class.', question: 'What do you need, and what will you do?', correctAnswer:null, explanation:'Use need, because, want to, offer/accept, later, after + time or decide to.', feedback:{correct:'Use the forms in a new situation.',incorrect:''}, discussionPrompts:[{ question: 'Sentence 1 — Say what you need: “Our class needs …”',mode:'Individual'},{ question: 'Sentence 2 — Say why: “We need it because …”',mode:'Individual'},{ question: 'Sentence 3 — Say what someone wants or offers: “… wants to …” / “I offered to …”',mode:'Pair'},{ question: 'Sentence 4 — Say what you decided: “Later, we decided to …”',mode:'Individual'}] },
  ],
};
