import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific B2 Language Focus for Mecca Before Islam (EN).
 * Each chapter follows Notice → Build → Use: learners first discover what a form
 * does in real chapter sentences, then practise it in context, then use it in a
 * short connected B2 response. Every quoted sentence comes from the English chapter.
 */
const feedback = { correct: 'Correct. You used the chapter language and relationship accurately.', incorrect: 'Not yet. Return to the chapter wording and check the relationship the form expresses.' };
const reflect = (id:string,title:string,question:string,prompts:string[],explanation:string):Exercise => ({ id,type:'reflection',title,instructions:'Use the target language to produce a short B2 response.',question,correctAnswer:null,explanation,feedback,discussionPrompts:prompts.map(q=>({question:q,mode:'Individual'})) });
const pairsToAnswer = (pairs:{left:string;right:string}[]) => Object.fromEntries(pairs.map(p=>[p.left,p.right]));

const ch2Pairs = [
  { left: 'The meaning of "ignorance" is not the lack of science or the lack of knowledge.', right: 'Rules out a meaning the reader might expect' },
  { left: '… because people did not truly know Allah and lacked justice, order, and peace in both their personal and social lives.', right: 'Gives the real reason behind the name' },
  { left: 'Although the word “jahiliyyah” essentially describes the pre-Islamic period of the Arabs, …', right: 'Accepts a limit before going beyond it' },
  { left: 'On the contrary, he believed it could arise again at any moment and warned people against it.', right: 'Turns from what he did not think to what he did think' },
];

export const meccaB2LanguageFocusExercises: Record<number, Exercise[]> = {
1: [
  {
    id: 'me-b2-lf1a',
    type: 'sequencing',
    title: 'From the Wider World to Mecca',
    instructions: 'Put these five sentences from Chapter 1 in the order the writer uses them. Use the reference words and the transition signal to help you.',
    question: 'How does the opening move from the wider world to one city and one era?',
    sequencingItems: [
      { id: 'c', text: 'The rivalry between these two superpowers exhausted both sides.' },
      { id: 'e', text: 'The city we are talking about is Mecca, and the time period is called the Age of Ignorance.' },
      { id: 'a', text: 'One of the most important developments of the Middle Ages … was the rise of Islam.' },
      { id: 'd', text: 'After describing the broad background of the time, take a closer look at the city and the era in which Prophet Muhammad (pbuh) lived and Islam rose.' },
      { id: 'b', text: 'Two superpowers of the time were the Christian Romano-Byzantine Empire … and the Persians ruled by the Zoroastrian Sassanids …' },
    ],
    correctAnswer: ['a', 'b', 'c', 'd', 'e'],
    explanation: 'The writer opens with a big claim about the Middle Ages, then names the two empires “of the time”. “These two superpowers” can only follow the sentence that introduces them. “After describing the broad background …” is an explicit transition that closes the wide frame, and “The city we are talking about” finally narrows the focus to Mecca. Reference words (these, the time) and transition signals make the zoom from region to city visible.',
    feedback: {
      correct: 'Well done. You followed the reference words and the transition from the broad background to Mecca.',
      incorrect: 'Look for what each sentence depends on: “these two superpowers” needs an earlier sentence that names them, and “After describing the broad background” must come after that background.',
    },
  },
  {
    id: 'me-b2-lf1b',
    type: 'error-correction',
    title: 'Cause and Relative Clauses',
    instructions: 'Each sentence from Chapter 1 has one mistake. Tap the wrong words, then choose the correction.',
    question: 'Can you correct the cause clause and the relative clauses the writer uses to build the background?',
    errorItems: [
      {
        sentence: '… with its capital city Constantinople (which we now call it Istanbul) …',
        error: 'call it Istanbul',
        options: ['call Istanbul', 'calling Istanbul', 'call it as Istanbul'],
        answer: 0,
      },
      {
        sentence: 'On the other hand, because of the Arabs lived in tribes, there was no political unity on the Arabian Peninsula.',
        error: 'because of the Arabs lived',
        options: ['due to the Arabs lived', 'because the Arabs lived', 'because of the Arabs lived in'],
        answer: 1,
      },
      {
        sentence: 'The Age of Ignorance is the pre-Islamic era in the Arabian Peninsula who covers the period from the 5th century to the beginning of the revelation (vahiy) in 610.',
        error: 'who covers',
        options: ['whom covers', 'who cover', 'that covers'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: 'In a relative clause, “which” already stands for the object, so no extra “it” is added: “which we now call Istanbul”. “Because” is followed by a full clause (the Arabs lived in tribes); “because of” and “due to” need a noun phrase. For a period or thing, use “that” or “which”, not “who”: “the pre-Islamic era … that covers the period …”.',
    feedback: {
      correct: 'Well done. You corrected the relative clauses and the cause clause.',
      incorrect: 'Check the second and third paragraphs and the last sentence of Chapter 1: which pronoun or linker does the writer actually use?',
    },
  },
  reflect('me-b2-lf1c','Frame a Historical Introduction','Can you move from a broad context to a precise local focus?',['Write 4–5 sentences: introduce the Byzantine-Sassanid rivalry, contrast it with Arabia, then narrow the focus to Mecca. Use because and a contrast linker.'],'A B2 introduction should show how the larger context relates to the local subject rather than listing facts separately.')
],
2: [
  {
    id: 'me-b2-lf2a',
    type: 'matching',
    title: 'Defining by Contrast',
    instructions: 'Match each part of Chapter 2 with what the writer is doing in it.',
    question: 'How does the chapter build a careful definition of Jahiliyyah?',
    matchingHeadings: { left: 'From the chapter', right: 'What the writer is doing' },
    matchingPairs: ch2Pairs,
    correctAnswer: pairsToAnswer(ch2Pairs),
    explanation: 'The chapter defines a difficult term in steps: it first rejects a misleading meaning (“is not the lack of science …”), then gives the intended reason (“because …”), then concedes the historical scope (“Although … essentially describes the pre-Islamic period …”) and finally extends it: “On the contrary” replaces the idea that Jahiliyyah belongs only to the past with the Prophet’s opposite view.',
    feedback: {
      correct: 'Correct. You identified the rejection, explanation, concession and extension in the definition.',
      incorrect: 'Reread the first and third paragraphs of Chapter 2. Ask of each part: does it reject, explain, accept a limit, or replace one view with another?',
    },
  },
  {
    id: 'me-b2-lf2b',
    type: 'word-bank',
    title: 'Adding, Emphasising, Restating',
    instructions: 'Complete the lines from Chapter 2 with expressions from the bank. Two expressions are not needed.',
    question: 'Which expressions add information, strengthen a point, and restate it in other words?',
    fillBlanksText: 'The Quran points to the ignorance and barbarism of the pre-Islamic era, [blank] the violence, hatred, bloodshed, and other moral decline that dominated the lives of the pagan community. … The Jahiliyyah is the “age of barbarism.” [blank], the Prophet described Islam as the opposite of barbarism. An ignorant person is wild, is a slave to their desires, follows their animalistic feelings, and is brutal and aggressive; [blank], a “barbarian.”',
    wordBank: ['as well as', 'In fact', 'in other words', 'On the contrary', 'for example'],
    correctAnswer: ['as well as', 'In fact', 'in other words'],
    explanation: '“As well as” adds further items to the same list (the violence, hatred …). “In fact” strengthens the previous claim with supporting evidence: the Prophet himself described Islam as the opposite of barbarism. “In other words” introduces a restatement: the long description of an ignorant person is summed up in one word, “barbarian”. “On the contrary” would need a denied idea before it, and “for example” would need a specific case, not a summary.',
    feedback: {
      correct: 'Correct. You chose the expressions that add, strengthen and restate.',
      incorrect: 'Check paragraphs 2 and 3 of Chapter 2. Is the writer adding to a list, supporting a claim, or summing up a description in one word?',
    },
  },
  reflect('me-b2-lf2c','Define Without Oversimplifying','How can you define a difficult term precisely?',['Write a 4-sentence definition of Jahiliyyah using not simply…, because…, although…, and on the contrary or another suitable contrast expression.'],'B2 definitions should distinguish a concept from nearby but inaccurate meanings.')
],
3: [
  {
    id: 'me-b2-lf3a',
    type: 'multiple-choice',
    title: 'How Certain Is the Writer?',
    instructions: 'Read paragraph 4 of Chapter 3 again. Then choose the sentence that keeps the writer’s level of certainty.',
    question: 'The writer makes a claim about when city life began in Mecca. Which version keeps the writer’s stance?',
    options: [
      'It is a proven fact that city life began here only with the building of the Ka’ba.',
      'It can be said that city life began here only with the building of the Ka’ba.',
      'It can be said that city life began here long before the building of the Ka’ba.',
      'Nobody can say anything about when city life began here.',
    ],
    correctAnswer: 1,
    explanation: '“It can be said that …” marks the sentence as the writer’s interpretation, drawn from the evidence around it, not as a quoted source or a proven fact. Compare the sentences that carry a reference in brackets, such as “(Surah Ibrahim: 37)” or “(See Âl-i Imran, 96.)”: there the writer points to a source. B2 historical writing keeps these two kinds of statement apart.',
    feedback: {
      correct: 'Correct. The writer offers a careful interpretation, neither a proven fact nor a refusal to judge.',
      incorrect: 'Find the sentence that begins “It can be said that …” in paragraph 4. Does it present a certain fact, or a reasonable interpretation? And what does it say about the Ka’ba?',
    },
  },
  {
    id: 'me-b2-lf3b',
    type: 'choose-form',
    title: 'Source, Focus and Earlier Past',
    instructions: 'Choose the correct form to complete each sentence from Chapter 3.',
    question: 'Which forms describe a source, put a place in focus, and show a situation that existed before another past event?',
    formChoices: [
      { sentence: 'Mecca [choice] in the Holy Quran as “a valley where no crops grow” (Surah Ibrahim: 37).', options: ['describes', 'is described', 'is describing'], answer: 1 },
      { sentence: 'It was also in this city [choice] the last Prophet, Muhammad (pbuh), was born and spent 52 years of his life …', options: ['which', 'what', 'that'], answer: 2 },
      { sentence: 'When Prophet Abraham (as) brought his son Ishmael and his wife Hagar to the city and left them there, the Zamzam water [choice] yet been discovered, so there was no population living there.', options: ['had not', 'has not', 'was not'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'The passive “Mecca is described in the Holy Quran as …” keeps Mecca in focus and tells us what the source says about it. “It was … in this city that …” is a cleft sentence: it puts “this city” in focus, and it always uses “that”. “Had not yet been discovered” (past perfect passive) shows that the water was still undiscovered before Abraham’s arrival, another past event.',
    feedback: {
      correct: 'Well done. You chose the passive, the cleft sentence and the past perfect correctly.',
      incorrect: 'Check paragraphs 1, 4 and 5 of Chapter 3. Who describes Mecca? Which word follows “It was also in this city …”? Which past event came first?',
    },
  },
  reflect('me-b2-lf3c','Evidence and Interpretation','Can you separate source statement from interpretation?',['Write 4–5 sentences about why Mecca became a settlement. Use one passive source statement, one cautious phrase such as it can be said, and one counterfactual sentence about the migration quotation.'],'B2 historical writing should distinguish what a source says from what the writer infers.')
],
4: [
  {
    id: 'me-b2-lf4a',
    type: 'multiple-choice',
    title: 'What Does “Since” Mean Here?',
    instructions: 'Read the sentence from Chapter 4. Then choose the meaning of “Since”.',
    question: '“Since the surroundings of the city were not suitable for agriculture, people tried to make a living through trade.” What does “Since” mean in this sentence?',
    options: [
      'From the time when: it gives the starting point of trade.',
      'Although: it introduces a surprising contrast.',
      'Because: it gives the background reason for turning to trade.',
      'After: it gives the next step in a sequence.',
    ],
    correctAnswer: 2,
    explanation: '“Since” can mean “because” or “from the time when”. Here it gives a reason that the reader can easily accept (the land was not suitable for farming), and the main clause gives the result (people turned to trade). The time meaning of “since” usually goes with a perfect tense: “People have traded here since the 5th century.”',
    feedback: {
      correct: 'Correct. “Since” gives the known background reason for the economic change.',
      incorrect: 'Ask what the land and the trade have to do with each other. Is the first clause a starting time, or a reason?',
    },
  },
  {
    id: 'me-b2-lf4b',
    type: 'word-bank',
    title: 'Marking a Long History',
    instructions: 'Complete the lines from Chapter 4 with time expressions from the bank. Three words are not needed.',
    question: 'Which time expressions organise several centuries of Meccan history?',
    fillBlanksText: '[blank] the discovery of the Zamzam water, the Jurhumites (Cürhümlüler) from Yemen settled in Mecca. … [blank], when Ishmael grew up, Abraham (as) came to the city to reconstruct the Holy Ka’ba with his son. … [blank] the rule of this tribe, people forgot the religion of Abraham (as) (monotheism) and spread idolatry throughout the city. [blank] the 5th century, the administration of Mecca and the Ka’ba passed to the Quraysh tribe.',
    wordBank: ['After', 'Later', 'During', 'In', 'While', 'Since', 'Before'],
    correctAnswer: ['After', 'Later', 'During', 'In'],
    explanation: '“After + noun” places one event later than another (the settlement came after Zamzam was found). “Later” is an adverb that moves the story forward on its own. “During + noun” covers the whole length of a period (the rule of the Khuza’a). “In the 5th century” names a point on the timeline. “While” needs a clause, not a noun, and “since” as a time word needs a perfect tense, so neither fits these past simple sentences.',
    feedback: {
      correct: 'Correct. You used the time expressions that turn a long history into a clear account.',
      incorrect: 'Check the first two paragraphs of Chapter 4. Which blanks are followed by a noun, which one by a comma, and which one names a century?',
    },
  },
  reflect('me-b2-lf4c','Explain a Multi-Stage Change','How did religion, political control and geography shape Mecca?',['Write a short paragraph using after, later, during, and since to connect at least four changes from the chapter.'],'B2 chronology becomes analytical when time markers also reveal changing causes and institutions.')
],
5: [
  {
    id: 'me-b2-lf5a',
    type: 'drag-drop',
    title: 'Evidence or Judgment?',
    instructions: 'Sort the sentences from Chapter 5. Does each one report a fact or figure, or does it give the writer’s judgment or conclusion?',
    question: 'Where does the writer report evidence, and where does the writer draw a conclusion from it?',
    dragDropGroups: [
      {
        group: 'Reported fact or figure',
        items: [
          'At that time, the typical Roman trade ship had a carrying capacity of around 100–150 tons.',
          'Suhayl b. Amr and Uthman Ibn Affan were shipowners from the Quraysh tribe.',
          'Abyssinia was also a place with which the Quraysh had trade relations by sea.',
        ],
      },
      {
        group: 'Writer’s judgment or conclusion',
        items: [
          'This number shows us how large the trade was.',
          'Hashim ibn Abd Manaf, the great-grandfather of Muhammad (as), played a key role in boosting the economy of Mecca.',
        ],
      },
    ],
    correctAnswer: {
      'Reported fact or figure': [
        'At that time, the typical Roman trade ship had a carrying capacity of around 100–150 tons.',
        'Suhayl b. Amr and Uthman Ibn Affan were shipowners from the Quraysh tribe.',
        'Abyssinia was also a place with which the Quraysh had trade relations by sea.',
      ],
      'Writer’s judgment or conclusion': [
        'This number shows us how large the trade was.',
        'Hashim ibn Abd Manaf, the great-grandfather of Muhammad (as), played a key role in boosting the economy of Mecca.',
      ],
    },
    explanation: 'A fact or figure can be checked (a ship’s capacity, who owned ships, where trade went). A judgment evaluates or interprets: “This number shows us …” draws a conclusion from the caravan figures, and “played a key role” is the writer’s assessment of Hashim’s importance. Notice that even the figure is careful: “around 100–150 tons”.',
    feedback: {
      correct: 'Correct. You separated the evidence from the conclusions the writer draws from it.',
      incorrect: 'Ask of each sentence: could I check this in a record, or is the writer telling me what something means or how important it was?',
    },
  },
  {
    id: 'me-b2-lf5b',
    type: 'error-correction',
    title: 'Remove the Overclaim',
    instructions: 'In each sentence one word makes the claim stronger than the chapter allows. Tap it, then choose the chapter’s more careful wording.',
    question: 'Can you keep the numbers and the change over time as careful as the writer does?',
    errorItems: [
      {
        sentence: 'These caravans numbered exactly 2,500 camels.',
        error: 'exactly',
        options: ['at least', 'up to', 'more than'],
        answer: 1,
      },
      {
        sentence: 'This meant precisely 2–3 shiploads of cargo.',
        error: 'precisely',
        options: ['approximately', 'definitely', 'only'],
        answer: 0,
      },
      {
        sentence: 'So, beginning with the settlement of the Quraysh tribe in Mecca in the mid-5th century A.D., the city of Mecca suddenly developed into a center of trade.',
        error: 'suddenly',
        options: ['immediately', 'finally', 'gradually'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: '“Up to” gives an upper limit: the largest caravans reached 2,500 camels, not every caravan. “Approximately” marks a comparison as an estimate. “Gradually” presents Mecca’s growth as a process over time, which fits the chapter’s dates (from the mid-5th century to the early 6th century). Careful historical writing keeps claims in proportion to the evidence.',
    feedback: {
      correct: 'Well done. You replaced each overclaim with the chapter’s careful wording.',
      incorrect: 'Reread paragraphs 2–4 of Chapter 5. Does the writer give an exact number, an upper limit or an estimate? Did Mecca change quickly or over a long time?',
    },
  },
  reflect('me-b2-lf5c','Evidence-Based Scale','Can you use numerical evidence without overclaiming?',['Write 4–5 sentences explaining the scale of Quraysh trade. Include up to, approximately, a comparison with ship capacity, and a cautious conclusion.'],'B2 source use requires accurate quantities plus a proportionate interpretation.')
]
};
