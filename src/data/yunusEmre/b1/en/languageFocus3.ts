import type { Exercise } from '../../../../types';

/** Chapter 9 English Language Focus, derived only from the locked Chapter 9 story text. */
export const yunusB1LanguageFocusChapter9: Exercise[] = [
  {
    id: 'yunus-b1-language-9-result-purpose',
    type: 'sequencing',
    title: 'Follow the Chain of Ideas',
    instructions: 'Put the sentences from the first part of Chapter 9 in the right order. Use the linking words to help you.',
    question: 'How do “as a result of”, “in this way”, “the main goal” and “this unity” link the ideas together?',
    sequencingItems: [
      { id: 'a', text: 'In this way, every creature is an image, but only Allah is truly real.' },
      { id: 'b', text: 'His words remind us of Allah’s commands for achieving this unity.' },
      { id: 'c', text: 'As a result of creation, the original unity lost its unity and multiple existence appeared.' },
      { id: 'd', text: 'The main goal for humans is to reach unity with Allah.' },
      { id: 'e', text: 'All creations in the world are just reflections of Allah’s names.' },
    ],
    correctAnswer: ['c', 'e', 'a', 'd', 'b'],
    explanation: '“As a result of + noun” opens the explanation with a cause (creation) and its result. “In this way” points back to the idea just before it (creations are reflections), so it must follow that sentence. “The main goal … is to + verb” states an aim, and “this unity” in the last sentence points back to that aim. “For + -ing” (for achieving) shows purpose, and “remind us of” brings something important back to mind.',
    feedback: {
      correct: 'Correct. You used the linking words to rebuild the chain from result to goal to purpose.',
      incorrect: 'Look for the words that point back: “In this way” needs an idea before it, and “this unity” needs a unity that was already mentioned. Then check Chapter 9.',
    },
  },
  {
    id: 'yunus-b1-language-9-should-general-case',
    type: 'multiple-choice',
    title: 'What Does “Should” Mean in the Poem?',
    instructions: 'Read the lines of the poem in Chapter 9. Then choose the best answer.',
    question: '“Anyone who claims to be a Muslim should know the requirements of Islam, / He should follow Allah’s command and pray the five daily prayers” What does “should” express in these lines?',
    options: [
      'a guess that the person probably knows it already',
      'something that the person did in the past',
      'a duty that is expected of every person in this group',
      'a wish that the person may or may not have',
    ],
    correctAnswer: 2,
    explanation: '“Anyone who …” means every person who fits the description, not one particular person. “Should + base verb” here expresses what is expected of that person: a duty or responsibility. In other contexts, “should” can also be a guess (“He should be home by now”), but the poem is about what a person is expected to know and do.',
    feedback: {
      correct: 'Correct. “Anyone who … should …” states what is expected of every person in the group.',
      incorrect: 'Read the lines again. Is the poem guessing, telling a story about the past, or saying what a person who claims to be a Muslim is expected to do?',
    },
  },
  {
    id: 'yunus-b1-language-9-parallel-relationship',
    type: 'error-correction',
    title: 'Find and Fix the Mistake',
    instructions: 'Each sentence from the end of Chapter 9 has one mistake. Tap the wrong word or phrase, then choose the correction.',
    question: 'Can you correct a superlative and keep a two-way relationship balanced?',
    errorItems: [
      {
        sentence: 'Love is a very important theme in Yunus Emre’s works. It is most important part of his philosophy.',
        error: 'most important part',
        options: ['the more important part', 'the most important part', 'most importantly part'],
        answer: 1,
      },
      {
        sentence: 'Those who love the Creator love the created, and those who love the created love also the Creator.',
        error: 'love also',
        options: ['also loves', 'loves also', 'also love'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: 'A superlative after a verb needs “the”: “It is the most important part”. It shows that love is above every other part of his philosophy. “Those who + verb” means “the people who …”, so the verb is plural (love). “Also” normally comes before the main verb: “… also love the Creator”. The two halves use the same pattern in reverse, which shows a relationship that works in both directions.',
    feedback: {
      correct: 'Well done. You corrected the superlative and kept the two halves balanced.',
      incorrect: 'Read the last paragraph of Chapter 9 again. What small word comes before “most important”? Where does “also” go: before or after the verb?',
    },
  },
  {
    id: 'yunus-b1-language-9-production', type: 'reflection', title: 'Explain a Goal and the Responsibilities Around It', instructions: 'Write or say five to six connected B1 sentences about a goal in school, community life, teamwork, health, or another everyday context. Do not retell Chapter 9.', question: 'Can you move from a result or situation to a goal, explain a purpose, state a general responsibility, and finish with two connected general statements?', correctAnswer: null, explanation: 'Useful language from the chapter includes “as a result of...”, “in this way...”, “the main goal is to...”, “for achieving...”, “remind us of...”, “anyone who... should...”, and “those who..., and those who... also...”.', feedback: { correct: 'Keep the paragraph connected: establish the situation, state the goal, explain what helps achieve it, and end with a broader responsibility or relationship.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce a situation or result with “as a result of...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Develop the consequence with “in this way...”.', mode: 'Individual' },
      { question: 'Sentence 3 — State the main goal with “the main goal is to...”.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain a purpose with “for achieving...” or mention something that reminds people of an important responsibility.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Use “anyone who... should...” and/or a balanced “those who..., and those who... also...” relationship.', mode: 'Pair' },
    ],
  },
];

/** Chapter 10 English Language Focus, derived only from the locked Chapter 10 story text. */
export const yunusB1LanguageFocusChapter10: Exercise[] = [
  {
    id: 'yunus-b1-language-10-condition-explanation',
    type: 'matching',
    title: 'What Do These Phrases Mean?',
    instructions: 'Match each phrase from Chapter 10 with its meaning in plain English.',
    question: 'What do these phrases from the chapter and the poem mean?',
    matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
    matchingPairs: [
      { left: 'the throne of the Lord', right: 'the place where Allah reveals Himself' },
      { left: 'breaking a heart', right: 'hurting someone deeply' },
      { left: 'unfortunate in both worlds', right: 'unhappy in this life and the next' },
      { left: 'since eternity', right: 'with no beginning in time' },
    ],
    correctAnswer: {
      'the throne of the Lord': 'the place where Allah reveals Himself',
      'breaking a heart': 'hurting someone deeply',
      'unfortunate in both worlds': 'unhappy in this life and the next',
      'since eternity': 'with no beginning in time',
    },
    explanation: 'The chapter explains its own image with “that is”: the heart is “the throne of the Lord,” that is, the place where Allah reveals Himself. “Breaking a heart” is not physical; it means hurting a person’s feelings deeply. “Both worlds” are this life and the next. “Since eternity” means from a time that has no beginning.',
    feedback: {
      correct: 'Good. You understood the images and phrases of Chapter 10.',
      incorrect: 'Read Chapter 10 and the poem again. Look for “that is”: it tells you what one of the images means.',
    },
  },
  {
    id: 'yunus-b1-language-10-describe-as',
    type: 'choose-form',
    title: 'Situation, Interpretation and Addition',
    instructions: 'Choose the correct word or form to complete each sentence from Chapter 10.',
    question: 'Which forms show a general result, an interpretation and an added value?',
    formChoices: [
      {
        sentence: 'According to him, where love is absent, negative emotions such as anger, heartbreak and separation [choice].',
        options: ['arises', 'arise', 'arising'],
        answer: 1,
      },
      {
        sentence: 'For this reason, he described breaking a heart [choice] destroying Allah’s house.',
        options: ['like', 'to be', 'as'],
        answer: 2,
      },
      {
        sentence: 'Yunus Emre emphasizes [choice] heart but also intellect as a value …',
        options: ['not only', 'either', 'both'],
        answer: 0,
      },
    ],
    correctAnswer: null,
    explanation: '“Where X is absent, Y arise” describes what generally happens in a situation without something; the subject “negative emotions” is plural, so the verb is “arise”. “Describe A as B” gives an interpretation of A (a learner error is “describe … like …”). “Not only … but also …” adds a second value and gives it equal weight; “both” would need “and”, and “either” would need “or”.',
    feedback: {
      correct: 'Correct. You chose the forms for a general result, an interpretation and an added value.',
      incorrect: 'Read Chapter 10 again. Check the subject of “arise”, the word that always follows “described …”, and the partner of “but also”.',
    },
  },
  {
    id: 'yunus-b1-language-10-addition-duration',
    type: 'sentence-building',
    title: 'Build the Description of the Heart',
    instructions: 'Tap the pieces to rebuild this sentence from Chapter 10.',
    question: 'Where does the “that” clause go when it describes a noun?',
    sentenceChunks: [
      'Heart is',
      'the eye',
      'that sees',
      'the truth',
      'and the center',
      'of understanding.',
    ],
    correctAnswer: null,
    explanation: 'A “that” clause comes directly after the noun it describes: “the eye that sees the truth”. It tells us which eye the writer means. “And” then adds a second description of the heart: “the center of understanding”.',
    feedback: {
      correct: 'Well done. The “that” clause follows the noun it describes.',
      incorrect: 'Start with “Heart is”, then name what the heart is. Put “that sees” right after the noun it describes. Check the sentence after the poem in Chapter 10.',
    },
  },
  {
    id: 'yunus-b1-language-10-production', type: 'reflection', title: 'Explain Why a Value Matters', instructions: 'Write or say five to six connected B1 sentences about a value in friendship, family life, school, teamwork, or community life. Do not retell Chapter 10.', question: 'Can you describe what happens when a value is absent, clarify what the value means, explain a consequence, add a second related value, and show why the idea remains important over time?', correctAnswer: null, explanation: 'Useful language from the chapter includes “where ... is absent, ... arise”, “that is...”, “for this reason...”, “describe ... as ...”, “the ... that ...”, “not only ... but also ...”, and “has existed since/for ...”.', feedback: { correct: 'Keep the paragraph connected: situation, clarification, consequence, added value, and continued importance.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Name a value and say what it brings.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “where ... is absent...” to describe a likely negative result.', mode: 'Individual' },
      { question: 'Sentence 3 — Clarify the value with “that is...” or a “that...” clause.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “for this reason...” and/or “describe ... as ...” to explain a consequence.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Add another related value with “not only ... but also ...” and, if natural, show continuity with “has existed since/for ...”.', mode: 'Pair' },
    ],
  },
];

/** Chapter 11 English Language Focus, derived only from the locked Chapter 11 story text. */
export const yunusB1LanguageFocusChapter11: Exercise[] = [
  {
    id: 'yunus-b1-language-11-purpose-necessity',
    type: 'drag-drop',
    title: 'Whose Words Are These?',
    instructions: 'Read each part of Chapter 11. Is it the writer reporting Yunus Emre’s view, Yunus Emre’s own words from a poem, or the words of the Prophet Muhammad (pbuh)? Put it in the right group.',
    question: 'How does the chapter show whose idea or words we are reading?',
    dragDropGroups: [
      {
        group: 'The writer reports Yunus’s view',
        items: [
          'He highlights that … heart and intellect must support one another.',
          'According to him, death is the best advisor for humanity …',
        ],
      },
      {
        group: 'Yunus’s own words (poem)',
        items: [
          '“May your intelligence / wisdom save you from all troubles”',
          '“Whoever comes into this world must later leave it”',
        ],
      },
      {
        group: 'The Prophet’s words',
        items: [
          '“Those who remember death the most and prepare best for what comes after it are the wisest.”',
        ],
      },
    ],
    correctAnswer: {
      'The writer reports Yunus’s view': [
        'He highlights that … heart and intellect must support one another.',
        'According to him, death is the best advisor for humanity …',
      ],
      'Yunus’s own words (poem)': [
        '“May your intelligence / wisdom save you from all troubles”',
        '“Whoever comes into this world must later leave it”',
      ],
      'The Prophet’s words': [
        '“Those who remember death the most and prepare best for what comes after it are the wisest.”',
      ],
    },
    explanation: 'Reporting verbs and phrases such as “He highlights that …” and “According to him, …” show that the writer is telling us Yunus’s view in the writer’s own words. Quotation marks show exact words. The chapter introduces the poems with “He says:” and the saying of the Prophet with “as the Prophet Muhammad (pbuh) said:”.',
    feedback: {
      correct: 'Correct. You separated reported views from exact quoted words.',
      incorrect: 'Look for quotation marks and for the words that introduce them: “He says:” or “as the Prophet … said:”. Without quotation marks, the writer is reporting the view.',
    },
  },
  {
    id: 'yunus-b1-language-11-must-relationship',
    type: 'transformation',
    title: 'Say It Another Way',
    instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 11.',
    question: 'Can you report a view and make a general statement with a different structure?',
    transformItems: [
      {
        source: 'According to him, death is the best advisor for humanity …',
        frame: 'He [blank] that death is the best advisor for humanity.',
        answers: ['believes', 'believed', 'thinks', 'thought', 'says', 'said', 'claims', 'claimed', 'feels', 'felt', 'argues', 'argued', 'highlights', 'highlighted'],
      },
      {
        source: 'A person who lives with an understanding of death’s advisory role lives a meaningful and honest life.',
        frame: '[blank] lives with an understanding of death’s advisory role lives a meaningful and honest life.',
        answers: ['Whoever', 'Anyone who', 'Anybody who', 'Everyone who', 'Everybody who', 'Every person who', 'Someone who'],
      },
    ],
    correctAnswer: null,
    explanation: '“According to + person” can be changed into a reporting verb with “that”: “He believes / says that …”. “A person who …” makes a general statement about people; “whoever” or “anyone who” says the same thing about any person who meets the condition. Note that “whoever” already contains “who”, so we do not add another “who”.',
    feedback: {
      correct: 'Well done. You kept the meaning with a new structure.',
      incorrect: 'For the first frame, use a reporting verb such as “believes” or “says”. For the second, think of a word that means “any person who”.',
    },
  },
  {
    id: 'yunus-b1-language-11-source-generalisation',
    type: 'choose-form',
    title: 'Goal and Supporting Voice',
    instructions: 'Choose the correct word or form to complete each sentence from Chapter 11.',
    question: 'Which forms state a goal and connect a view with a supporting voice?',
    formChoices: [
      {
        sentence: 'He highlights that for a person [choice] salvation, heart and intellect must support one another.',
        options: ['reaching', 'to reach', 'reaches'],
        answer: 1,
      },
      {
        sentence: 'According to him, death is the best advisor for humanity, [choice] the Prophet Muhammad (pbuh) said: …',
        options: ['although', 'so that', 'as'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: '“For + person + to + verb” states a goal and who has it: for a person to reach salvation. The main clause then says what is necessary for that goal: “heart and intellect must support one another”. “As + someone + said” connects a view with an earlier voice that supports it, so the reader sees that the idea has a respected source.',
    feedback: {
      correct: 'Correct. You chose the goal pattern and the word that brings in a supporting voice.',
      incorrect: 'Read the first sentence of Chapter 11 and the sentence about death again. Which form follows “for a person”? Which word introduces a saying that agrees with the view?',
    },
  },
  {
    id: 'yunus-b1-language-11-production', type: 'reflection', title: 'Explain a Principle and Its Consequence', instructions: 'Write or say five to six connected B1 sentences about a principle for learning, friendship, teamwork, family life, or personal growth. Do not retell Chapter 11.', question: 'Can you state a goal, explain what must happen to reach it, attribute one idea to another person or source, and finish with a general statement about people and consequences?', correctAnswer: null, explanation: 'Useful language from the chapter includes “for a person to...”, “must...”, “According to...”, “as ... said...”, “a person who...”, and “whoever...”. Use only the patterns that fit your topic naturally.', feedback: { correct: 'Keep the response connected: goal, necessary relationship, attributed idea, explanation, and general consequence.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — State a goal using “for ... to ...” if natural.', mode: 'Individual' },
      { question: 'Sentence 2 — Explain what two actions, qualities, or people must do for that goal.', mode: 'Individual' },
      { question: 'Sentence 3 — Attribute a useful idea with “According to...” or “as ... said...”.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain why that idea matters in your chosen context.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Finish with “a person who...” or “whoever...” to express a broader consequence or principle.', mode: 'Pair' },
    ],
  },
];

/** Chapter 12 English Language Focus, derived only from the locked Chapter 12 story text. */
export const yunusB1LanguageFocusChapter12: Exercise[] = [
  {
    id: 'yunus-b1-language-12-meaning-relations',
    type: 'drag-drop',
    title: 'Principles and Bad Habits',
    instructions: 'Sort the words from Chapter 12. Is it a moral principle to build, or a bad habit to avoid?',
    question: 'What kind of word does the chapter use for the principles, and what kind for the bad habits?',
    dragDropGroups: [
      {
        group: 'Moral principles (nouns)',
        items: ['honesty', 'patience', 'humility', 'generosity'],
      },
      {
        group: 'Bad habits (adjectives after “being”)',
        items: ['arrogant', 'stingy', 'greedy', 'jealous'],
      },
    ],
    correctAnswer: {
      'Moral principles (nouns)': ['honesty', 'patience', 'humility', 'generosity'],
      'Bad habits (adjectives after “being”)': ['arrogant', 'stingy', 'greedy', 'jealous'],
    },
    explanation: 'The principles are nouns that name qualities: honesty, patience, humility, generosity. The bad habits are adjectives that describe people, so the chapter puts them after “being”: “bad habits like being arrogant, stingy, greedy …”. Many pairs are related: generous → generosity, humble → humility, patient → patience, honest → honesty.',
    feedback: {
      correct: 'Correct. You separated the principles (nouns) from the bad habits (adjectives).',
      incorrect: 'Look at the first paragraph of Chapter 12. Which words come after “such as”, and which come after “like being”?',
    },
  },
  {
    id: 'yunus-b1-language-12-guidance',
    type: 'word-bank',
    title: 'Define, Give Examples, Guide',
    instructions: 'Complete the lines from Chapter 12 with words from the bank. Two words are not needed.',
    question: 'Which forms follow “is about”, “teach people” and “like”?',
    fillBlanksText: 'Yunus believes that true morality is about [blank] up bad habits that are not suitable for people. Moral principles [blank] as honesty, patience, humility, generosity, respect, trust in Allah, and modesty are important in Yunus Emre’s works. … He also taught people [blank] avoid bad habits like [blank] arrogant, stingy, greedy, selfish, or jealous, and gossiping.',
    wordBank: ['to', 'giving', 'being', 'such', 'give', 'be'],
    correctAnswer: ['giving', 'such', 'to', 'being'],
    explanation: '“About” is a preposition, so it is followed by an -ing form: “is about giving up”. “Such as” introduces examples of a larger group. “Teach + person + to + verb” shows guidance toward an action. “Like” is also a preposition here, so the verb after it takes -ing: “like being arrogant”.',
    feedback: {
      correct: 'Well done. You used -ing after prepositions and “to + verb” after “teach people”.',
      incorrect: 'Check the first paragraph of Chapter 12. Remember: after a preposition (about, like) we use -ing.',
    },
  },
  {
    id: 'yunus-b1-language-12-balanced-role',
    type: 'error-correction',
    title: 'Find and Fix the Mistake',
    instructions: 'Each sentence from Chapter 12 has one mistake. Tap the wrong word or phrase, then choose the correction.',
    question: 'Can you correct a verb form and a “not only … but also …” pattern?',
    errorItems: [
      {
        sentence: 'With these principles, Yunus Emre teach people the path to an honest life.',
        error: 'teach',
        options: ['teaching', 'teaches', 'is teach'],
        answer: 1,
      },
      {
        sentence: 'Yunus Emre\'s poems are not only literary works and also a moral guide.',
        error: 'and also',
        options: ['but also', 'or also', 'so also'],
        answer: 0,
      },
    ],
    correctAnswer: null,
    explanation: '“With these principles” shows the means: the principles are what Yunus uses to guide people. The subject “Yunus Emre” is singular, so the present simple verb takes -s: “teaches”. “Not only … but also …” is a fixed pair: it adds a second role (a moral guide) and gives it the same importance as the first (literary works).',
    feedback: {
      correct: 'Well done. You corrected the verb and completed the fixed pair.',
      incorrect: 'Read Chapter 12 again. Is “Yunus Emre” one person or many? Which word always goes with “not only … also”?',
    },
  },
  {
    id: 'yunus-b1-language-12-production', type: 'reflection', title: 'Define a Value and Turn It into Action', instructions: 'Write or say five to six connected B1 sentences about one value in school, friendship, family life, teamwork, or personal growth. Do not retell Chapter 12.', question: 'Can you define the value, give examples, show how it guides action, contrast a helpful behaviour with one to avoid, and describe a wider role or result?', correctAnswer: null, explanation: 'Useful language from the chapter includes “is about + -ing”, “such as...”, “with these principles...”, “teach someone to...”, “avoid...”, and “not only... but also...”. Use only the forms that fit your topic naturally.', feedback: { correct: 'Keep the response connected: definition, examples, guidance, contrast in behaviour, and a wider role or result.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Define the value using “is about + -ing” or another natural definition.', mode: 'Individual' },
      { question: 'Sentence 2 — Give two or three examples with “such as...” if useful.', mode: 'Individual' },
      { question: 'Sentence 3 — Explain how the value can guide people using “with...” or “teach ... to ...”.', mode: 'Pair' },
      { question: 'Sentence 4 — Contrast one action to build with one behaviour to avoid.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Use “not only ... but also ...” or another suitable connector to explain the value’s wider role or effect.', mode: 'Pair' },
    ],
  },
];

/** Chapter 13 English Language Focus, derived only from the locked Chapter 13 story text. */
export const yunusB1LanguageFocusChapter13: Exercise[] = [
  {
    id: 'yunus-b1-language-13-relations',
    type: 'matching',
    title: 'What Do the Lines Mean?',
    instructions: 'Read the lines of the poems in Chapter 13. Match each line with its meaning.',
    question: 'What do Yunus Emre’s lines about patience and anger say?',
    matchingHeadings: { left: 'From the poems', right: 'Meaning' },
    matchingPairs: [
      { left: 'Patience is the foundation of an everlasting kingdom', right: 'Success that lasts is built on patience.' },
      { left: 'those who are blessed with patience will reach greatness', right: 'People given the gift of patience will one day become great.' },
      { left: 'Whoever possesses patience rises to the heavens', right: 'Any patient person reaches a very high spiritual place.' },
      { left: 'Whoever is filled with anger loses their faith', right: 'A person full of anger has their belief taken away.' },
      { left: 'If faith is required, one must give up rage', right: 'To keep your belief, you have to leave anger behind.' },
    ],
    correctAnswer: {
      'Patience is the foundation of an everlasting kingdom': 'Success that lasts is built on patience.',
      'those who are blessed with patience will reach greatness': 'People given the gift of patience will one day become great.',
      'Whoever possesses patience rises to the heavens': 'Any patient person reaches a very high spiritual place.',
      'Whoever is filled with anger loses their faith': 'A person full of anger has their belief taken away.',
      'If faith is required, one must give up rage': 'To keep your belief, you have to leave anger behind.',
    },
    explanation: 'The lines use patterns that turn one observation into a general principle. “Those who … will …” links a group of people with a future result. “Whoever …” means any person who meets the condition. “If …, one must …” gives a condition and then a strong general duty; “one” means any person, not one particular person.',
    feedback: {
      correct: 'Good. You understood the meaning of each line.',
      incorrect: 'Read the poems in Chapter 13 again. Which line gives a future result, which gives a condition and a duty, and which describe what happens to any patient or angry person?',
    },
  },
  {
    id: 'yunus-b1-language-13-general-result',
    type: 'multiple-choice',
    title: 'Who Is “One”?',
    instructions: 'Read the line from the poem in Chapter 13. Then choose the best answer.',
    question: '“If faith is required, one must give up rage” Who does “one” refer to in this line?',
    options: [
      'one particular person that Yunus is speaking to',
      'Yunus Emre himself and nobody else',
      'any person in general',
      'the first person in a list',
    ],
    correctAnswer: 2,
    explanation: '“One” can be an impersonal pronoun meaning “any person” or “people in general”. With “must”, it gives advice that is true for everybody, not for one named person. In everyday English we often say “you” with the same meaning: “If you want to keep your faith, you must give up rage.”',
    feedback: {
      correct: 'Correct. “One must …” gives a general duty for any person.',
      incorrect: 'Read the whole line again. Does the poem name a person, or does it give advice that applies to everyone?',
    },
  },
  {
    id: 'yunus-b1-language-13-condition-guidance',
    type: 'word-bank',
    title: 'Linking the Verses',
    instructions: 'Complete the lines from Chapter 13 with words from the bank. Three words are not needed.',
    question: 'Which words introduce the verses, show what a warning is about, and bring Yunus’s work into the present?',
    fillBlanksText: '[blank] another verse, he talks about “patience” and says: … In the following verse, he warns [blank] “rage and arrogance”: … It is clear that Yunus Emre was an important person of his era, and his poems are [blank] valuable today as a moral guide for future generations. His works are as [blank]:',
    wordBank: ['still', 'In', 'follows', 'against', 'following', 'yet', 'At'],
    correctAnswer: ['In', 'against', 'still', 'follows'],
    explanation: 'We say “in a verse” (like “in a poem”, “in a book”). “Warn against + noun” names the danger someone tells us to avoid. “Still” shows that something from the past continues now: the poems were valuable then and are valuable today. “As follows:” is a fixed phrase that introduces a list.',
    feedback: {
      correct: 'Well done. You linked the verses and brought the poems into the present.',
      incorrect: 'Read the lines between the poems and the last paragraph of Chapter 13 again. Which preposition goes with “verse”? Which fixed phrase introduces a list?',
    },
  },
  {
    id: 'yunus-b1-language-13-production', type: 'reflection', title: 'Build a Short Principle-and-Result Paragraph', instructions: 'Write or say five connected B1 sentences about a principle in school, friendship, teamwork, family life, or personal growth. Do not retell Chapter 13.', question: 'Can you introduce one principle, generalise who it affects, show a result, add a related warning or contrast, and finish with practical guidance?', correctAnswer: null, explanation: 'Useful language from the chapter includes “those who ... will ...”, “whoever ...”, “if ...”, “one must ...”, and a transition such as “in another case” or “in the following example”. Use only the forms that fit your message naturally.', feedback: { correct: 'Keep the response connected: principle, general condition, consequence, related warning or example, and final guidance.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce the principle and why it matters.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “those who ... will ...” or another natural group-and-result pattern.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “whoever ...” to make a broader generalisation.', mode: 'Pair' },
      { question: 'Sentence 4 — Add a related warning, contrast, or second example with a suitable transition.', mode: 'Pair' },
      { question: 'Sentence 5 — Use “if ... one must ...” or another natural condition-and-guidance structure.', mode: 'Pair' },
    ],
  },
];
