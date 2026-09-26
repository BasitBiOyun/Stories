import type { Exercise } from '../../../../types';

const feedback = { correct: 'Correct. You used the chapter language and relationship accurately.', incorrect: 'Not yet. Return to the chapter wording and check the relationship the form expresses.' };
const reflect=(id:string,title:string,question:string,prompts:string[],explanation:string):Exercise=>({id,type:'reflection',title,instructions:'Use the target language to produce a short B2 response.',question,correctAnswer:null,explanation,feedback,discussionPrompts:prompts.map(q=>({question:q,mode:'Individual'}))});

const ch8Harmed = [
  'orphans were oppressed',
  'the weak were looked down on',
  'the goods and property of small sellers were unjustly seized by force',
];
const ch8Named = [
  'an agreement was made by some Quraysh tribes',
  'those who oppressed and treated people unfairly were generally wealthy and powerful individuals',
  'a merchant had sold goods to Ubayy b. Halef',
];

const ch7Practice = [
  'The Quraysh added to their wealth through lending at usury.',
  'They imposed enormous borrowing rates on debts.',
];
const ch7Result = [
  'This system was designed to make the rich richer and the poor poorer.',
  'There was a huge gap between the rich and the poor even in the most basic human relationships.',
  '… there were rich people who ate from gold plates and drank from silver cups and crystal glasses, but there were also poor people who could barely survive.',
];

export const meccaB2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
6:[
  {
    id: 'me-b2-lf6a',
    type: 'multiple-choice',
    title: 'What Does “This” Refer To?',
    instructions: 'Read the lines from Chapter 6. Then choose what “This” refers to.',
    question: '“During this period, the Silk Road … became unusable in the 6th century CE due to the wars between the Byzantine and Sassanid empires. This made the Red Sea route and the overland route through Arabia highly important.” What does “This” refer to?',
    options: [
      'the Byzantine and Sassanid empires',
      'the Silk Road itself, as a trade route',
      'the fact that the Silk Road had become unusable',
      'the 6th century CE as a period',
    ],
    correctAnswer: 2,
    explanation: '“This” at the start of a sentence often sums up the whole situation in the previous sentence, so the writer can turn it into the cause of something new: the Silk Road became unusable → this made the other routes important. Using “This made …” links two causal steps into a chain instead of listing two separate facts.',
    feedback: {
      correct: 'Correct. “This” sums up the whole previous event and turns it into a cause.',
      incorrect: 'Ask what made the Red Sea route important. Was it the empires themselves, or what had happened to the Silk Road?',
    },
  },
  {
    id: 'me-b2-lf6b',
    type: 'transformation',
    title: 'Expressing Cause in Different Ways',
    instructions: 'Rewrite each sentence from Chapter 6 by completing the new frame. Keep the cause–result meaning of the original.',
    question: 'How can the same cause be expressed with a clause, a noun phrase or a causing verb?',
    transformItems: [
      {
        source: 'Because of its extensive trade activities, Mecca was described as the "Republic of Traders."',
        frame: 'Mecca was described as the "Republic of Traders" because [blank].',
        answers: ['it had extensive trade activities', 'its trade activities were extensive', 'of its extensive trade activities', 'it had such extensive trade activities', 'its trade activities were so extensive', 'it carried out extensive trade activities', 'it was involved in extensive trade activities'],
      },
      {
        source: 'The safe environment created by the sacred months … made it possible for more people to perform the Hajj.',
        frame: 'Due to the safe environment [blank] the sacred months, more people were able to perform the Hajj.',
        answers: ['created by', 'that was created by', 'which was created by'],
      },
      {
        source: 'During this period, the Silk Road … became unusable in the 6th century CE due to the wars between the Byzantine and Sassanid empires.',
        frame: 'In the 6th century CE, the wars between the Byzantine and Sassanid empires [blank] the Silk Road unusable.',
        answers: ['made', 'rendered'],
      },
    ],
    correctAnswer: null,
    explanation: '“Because” needs a clause (it had extensive trade activities); “because of” and “due to” need a noun phrase (its extensive trade activities, the safe environment …). A cause can also become the subject of a causing verb: “The wars made the Silk Road unusable.” B2 writers switch between these patterns to connect several causes without repeating the same structure.',
    feedback: {
      correct: 'Well done. You expressed the same causes with a clause, a noun phrase and a causing verb.',
      incorrect: 'Look at what follows each gap: after “because”, write a full clause; after “the safe environment”, add a short participle phrase; before “the Silk Road unusable”, use a verb that means “caused it to be”.',
    },
  },
  reflect('me-b2-lf6c','Explain Interacting Causes','How did war, sacred time and pilgrimage reinforce Mecca’s trade?',['Write 5–6 sentences using due to or because of, this made…, in addition, and a final therefore/so conclusion.'],'A B2 explanation should connect several mechanisms into one coherent causal account.')
],
7:[
  {
    id: 'me-b2-lf7a',
    type: 'drag-drop',
    title: 'Practice and Social Result',
    instructions: 'Sort the sentences from Chapter 7. Does each one describe an economic practice, or the social result of such practices?',
    question: 'How does the chapter move from what money lenders did to what happened to society?',
    dragDropGroups: [
      { group: 'Economic practice', items: ch7Practice },
      { group: 'Social result', items: ch7Result },
    ],
    correctAnswer: { 'Economic practice': ch7Practice, 'Social result': ch7Result },
    explanation: 'The chapter first describes practices (lending at usury, imposing enormous borrowing rates) and then their effects on the whole society (a huge gap, extreme contrasts between luxury and survival). “This system was designed to make the rich richer and the poor poorer” is a result stated as a purpose: the two comparatives moving in opposite directions show a gap that widens both ways, and “was designed to” is the writer’s strong interpretation that the result was not an accident.',
    feedback: {
      correct: 'Correct. You separated what people did with money from what it did to society.',
      incorrect: 'Ask of each sentence: is this something the Quraysh or money lenders did, or is it a picture of society as a result?',
    },
  },
  {
    id: 'me-b2-lf7b',
    type: 'choose-form',
    title: 'Linking Practice and Social Result',
    instructions: 'Choose the correct form to complete each sentence from Chapter 7.',
    question: 'Which forms connect an economic practice with its result for society?',
    formChoices: [
      { sentence: '[choice] the money trade, there was a wealthy aristocracy in the city.', options: ['As a result', 'As a result of', 'Because'], answer: 1 },
      { sentence: 'Vices of drinking and gambling were also [choice] common that this was also one reason why people were constantly falling into debt.', options: ['such', 'too', 'so'], answer: 2 },
      { sentence: 'Because large amounts of wealth [choice] in the hands of certain individuals, there were extreme divisions between social classes.', options: ['were concentrated', 'was concentrated', 'were concentrating'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: '“As a result of + noun phrase” names a cause at the start of a sentence; “As a result” alone is followed by a comma and a full clause. “So + adjective + that …” links a high degree with its result; “such” needs a noun (such a common habit that …), and “too” means “more than enough” and does not take “that”. “Were concentrated” is passive: the writer describes the state of the wealth, not an action of the wealth itself.',
    feedback: {
      correct: 'Well done. You linked each practice to its social result with the right form.',
      incorrect: 'Check the first two paragraphs of Chapter 7. What comes after each gap: a noun phrase, an adjective + that, or a description of where the wealth was?',
    },
  },
  reflect('me-b2-lf7c','Explain a System, Not a Fact','Can you show how one practice affects an entire social structure?',['Write a short paragraph linking usury, debt, concentrated wealth and class division. Use as a result, so…that, and one paired comparative such as richer/poorer or stronger/weaker.'],'B2 analysis should make the mechanism between economic practice and social outcome explicit.')
],
8:[
  {
    id: 'me-b2-lf8a',
    type: 'drag-drop',
    title: 'Who Is in Focus?',
    instructions: 'Sort the phrases from Chapter 8. Is the doer of the action left unnamed, or is the doer named?',
    question: 'How does the chapter keep attention on the people who were harmed?',
    dragDropGroups: [
      { group: 'Doer not named: the focus is on who or what was harmed', items: ch8Harmed },
      { group: 'Doer named', items: ch8Named },
    ],
    correctAnswer: {
      'Doer not named: the focus is on who or what was harmed': ch8Harmed,
      'Doer named': ch8Named,
    },
    explanation: 'Passive sentences without “by …” keep the orphans, the weak and the small sellers in focus and leave the oppressor unnamed. The writer names the oppressors separately and generally: “those who oppressed … were generally wealthy and powerful individuals”. “An agreement was made by some Quraysh tribes” is also passive, but the “by” phrase names the doers while the agreement stays at the front of the sentence.',
    feedback: {
      correct: 'Correct. You noticed when the passive hides the doer and when a “by” phrase names it.',
      incorrect: 'For each phrase, ask: can I tell who did the action? Look carefully for a “by” phrase or a named person or group.',
    },
  },
  {
    id: 'me-b2-lf8b',
    type: 'transformation',
    title: 'Change the Focus',
    instructions: 'Complete each new version of a sentence from Chapter 8. Keep the meaning of the original.',
    question: 'What changes when the doer becomes the subject, or when reported words become direct speech?',
    transformItems: [
      {
        source: 'To prevent such incidents, an agreement was made by some Quraysh tribes to help people who had been oppressed in Mecca.',
        frame: 'To prevent such incidents, some Quraysh tribes [blank] to help people who had been oppressed in Mecca.',
        answers: ['made an agreement', 'agreed', 'came to an agreement', 'reached an agreement', 'made an agreement with each other'],
      },
      {
        source: 'The members of the organization told him to go to Ubayy and demand his money again, and to inform him that if he did not pay, they would collect it themselves.',
        frame: 'The merchant told Ubayy: “If you do not pay, they [blank] it themselves.”',
        answers: ['will collect', 'are going to collect'],
      },
    ],
    correctAnswer: null,
    explanation: 'In the active version the Quraysh tribes become the subject, so the sentence is about who acted; the chapter’s passive keeps the agreement itself in the foreground. In reported speech the writer uses “if he did not pay, they would collect it”; when the merchant says the words directly, the tenses move forward again: “If you do not pay, they will collect it themselves.” The conditional shows that the pact had real pressure behind it.',
    feedback: {
      correct: 'Well done. You changed the focus and turned the reported warning into direct speech.',
      incorrect: 'In the first frame, the tribes are the subject: what did they do? In the second, the merchant is speaking now, about the future: which form follows “If you do not pay, they …”?',
    },
  },
  reflect('me-b2-lf8c','Conditional Enforcement','How did Hilfü’l-Fudûl turn principle into practical pressure?',['Write 4–5 sentences about the unpaid merchant. Include if he did not pay…, they would…, one passive form, and one purpose clause.'],'The chapter’s conditional shows that justice was backed by a stated consequence, not only moral advice.')
],
9:[
  {
    id: 'me-b2-lf9a',
    type: 'multiple-choice',
    title: 'Keep the Writer’s Judgment',
    instructions: 'Read paragraphs 3 and 4 of Chapter 9 again. Then choose the version that keeps the writer’s judgment.',
    question: 'Which sentence keeps the writer’s evaluation of pre-Islamic generosity?',
    options: [
      'The admirable qualities of the Arabs before Islam, like generosity, were driven entirely by arrogance, with no real goodness at all.',
      'The admirable qualities of the Arabs before Islam, like generosity, were driven mostly by arrogance rather than real goodness.',
      'The admirable qualities of the Arabs before Islam, like generosity, were driven mostly by real goodness rather than arrogance.',
      'The admirable qualities of the Arabs before Islam, like generosity, had nothing to do with arrogance.',
    ],
    correctAnswer: 1,
    explanation: '“Mostly” limits the claim: arrogance was the main motive, but the writer does not say it was the only one. “Rather than” compares two possible motives and prefers one. The same balance runs through the whole chapter: the Hilfu’l-Fudûl and Arab hospitality are real positive evidence, yet the camel contest is also called “a type of gambling”. The writer praises the action and still questions the motive.',
    feedback: {
      correct: 'Correct. You kept both the qualifier “mostly” and the direction of the contrast.',
      incorrect: 'Look at the first sentence of paragraph 4. Which motive does the writer see as the main one, and is it described as the only motive?',
    },
  },
  {
    id: 'me-b2-lf9b',
    type: 'error-correction',
    title: 'Qualifying and Adding',
    instructions: 'Each sentence from Chapter 9 has one mistake. Tap the wrong words, then choose the correction.',
    question: 'Can you correct the forms that qualify, add evidence and describe a repeated action?',
    errorItems: [
      {
        sentence: 'As the example of the Hilfu’l-Fudûl shows, it certainly doesn’t make sense to call the pre-Islamic era entire negative.',
        error: 'entire negative',
        options: ['entire negatively', 'entirely negative', 'entirely negatively'],
        answer: 1,
      },
      {
        sentence: 'In addition this, for instance, the Arabs before Islam were known for their extraordinary generosity and hospitality.',
        error: 'In addition this',
        options: ['In addition to this', 'In addition of this', 'Addition to this'],
        answer: 0,
      },
      {
        sentence: 'Until one side gave up, camels continued to slaughter, and at the end, the victor became well-known for his generosity.',
        error: 'continued to slaughter',
        options: ['continued being slaughter', 'continued to slaughtered', 'continued to be slaughtered'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: 'An adverb qualifies an adjective: “entirely negative”. “In addition to this” adds new evidence and needs “to”. The camels did not slaughter anything; they were slaughtered, so the passive infinitive is needed: “continued to be slaughtered”. These forms help the writer add positive evidence while keeping a balanced judgment.',
    feedback: {
      correct: 'Well done. You corrected the qualifier, the adding phrase and the passive.',
      incorrect: 'Check paragraph 3 of Chapter 9. Which word can describe an adjective? Which small word follows “In addition”? Who does the slaughtering?',
    },
  },
  reflect('me-b2-lf9c','Make a Balanced Historical Judgment','Can you praise an action while still evaluating its motive?',['Write a 5-sentence evaluation of pre-Islamic generosity using not entirely…, in addition, however, and rather than.'],'B2 evaluation should preserve positive evidence while also explaining the chapter’s criticism.')
]
};
