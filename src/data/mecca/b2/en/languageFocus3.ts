import type { Exercise } from '../../../../types';

const feedback={correct:'Correct. You used the chapter language and relationship accurately.',incorrect:'Not yet. Return to the chapter wording and check the relationship the form expresses.'};
const reflect=(id:string,title:string,question:string,prompts:string[],explanation:string,instructions:string='Use the target language to produce a short B2 response.'):Exercise=>({id,type:'reflection',title,instructions,question,correctAnswer:null,explanation,feedback,discussionPrompts:prompts.map(q=>({question:q,mode:'Individual'}))});
const pairsToAnswer=(pairs:{left:string;right:string}[])=>Object.fromEntries(pairs.map(p=>[p.left,p.right]));

const ch11Pairs=[
  { left: 'Poetry was used to keep the tribe’s history alive.', right: 'an archive that keeps records of the past' },
  { left: 'It told stories about brave ancestors and hard times.', right: 'documentaries that celebrate a community’s heroes' },
  { left: 'It also praised the tribe’s family and criticized enemies.', right: 'publicity for one side and attacks on its rivals' },
  { left: '… poets praised conflict and war rather than peace.', right: 'coverage that stirs up hostility' },
  { left: 'There were very few poets who invited the tribes to peace and urged them to stay away from fighting.', right: 'rare voices calling for calm' },
];
const ch12Pairs=[
  { left: 'Actually, the Arabs of the Age of Ignorance accepted the presence of a higher God known as "Allah."', right: 'Corrects what the reader might assume' },
  { left: 'Although they mainly worshipped idols, they believed “Allah” to be the creator.', right: 'Holds together two beliefs that seem to clash' },
  { left: 'Idols were seen as go-betweens (mediators).', right: 'Reports how people viewed something, not the writer’s own view' },
  { left: 'Oddly enough they did not believe in the Resurrection and Afterlife.', right: 'Signals that the writer finds the next fact surprising' },
  { left: 'No doubt, pilgrimage to the Ka’ba was the most popular and common form of worship.', right: 'Presents a claim with full certainty' },
];
const ch14Pairs=[
  { left: 'The population of Mecca … was between 5,000 and 10,000.', right: 'The exact number is unknown, so a lowest and a highest estimate are given.' },
  { left: '… there was almost no one from Mecca’s super-rich among the 46 people who became Muslims.', right: 'Perhaps one or two of the wealthiest, but hardly any.' },
  { left: 'Many of the first Muslims were the poor and the slaves.', right: 'A large share of a group, but not all of it.' },
  { left: 'In the first few years of the call to Islam, …', right: 'Limits the claim to an early stage.' },
];
const ch17Pairs=[
  { left: 'The term both refers to pre-Islamic Arabia and also describes any culture, society or way of thinking that comes from human arrogance.', right: 'Gives one term two meanings at the same time' },
  { left: 'Whether they are slaves, women, poor, or the weak, they all deserve respect.', right: 'Includes every group without exception' },
  { left: 'On the other hand, Islam is all about making the world a fairer and more peaceful place.', right: 'Turns to the opposite side of the comparison' },
  { left: 'Islam has always stood against it and will continue to do so.', right: 'Links the past with the future' },
  { left: 'The dreadful situation in the twenty-first century reminds us of the dark period of ignorance in seventh-century Mecca.', right: 'Compares the present with the historical case' },
];

export const meccaB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
10:[
  {
    id: 'me-b2-lf10a',
    type: 'multiple-choice',
    title: 'Loyalty Without Limits',
    instructions: 'Read the sentence from Chapter 10. Then choose what the final phrase adds.',
    question: '“It was important to work for the tribe and to honor and defend it in every circumstance, no matter what the tribe did.” What does “no matter what the tribe did” add?',
    options: [
      'Loyalty depended on whether the tribe acted fairly.',
      'Members could choose when to defend the tribe.',
      'Loyalty was expected even when the tribe acted wrongly.',
      'The tribe rarely did anything important.',
    ],
    correctAnswer: 2,
    explanation: '“No matter what …” removes every condition: whatever the tribe did, the member had to defend it. Together with “in every circumstance”, it makes the duty unlimited. This prepares the chapter’s criticism of blind tribal loyalty. Notice the contrast with the next paragraph, where the writer carefully limits claims about women instead of making them unlimited.',
    feedback: {
      correct: 'Correct. The phrase makes loyalty unconditional, even when the tribe was wrong.',
      incorrect: 'Look at “in every circumstance” in the same sentence. Does “no matter what the tribe did” add a condition, or remove all conditions?',
    },
  },
  {
    id: 'me-b2-lf10b',
    type: 'word-bank',
    title: 'Limiting a Generalisation',
    instructions: 'Complete the lines from Chapter 10 with expressions from the bank. Three expressions are not needed.',
    question: 'Which expressions stop the writer from turning one experience into a rule for all women?',
    fillBlanksText: 'The position of Arab women before Islam was not [blank] the same. It changed [blank] their social status and tribes. [blank] limitations from society, some women managed to gain a degree of freedom. … [blank], many women from lower social and economic groups were mistreated and disadvantaged.',
    wordBank: ['always', 'according to', 'Despite', 'However', 'Although', 'Therefore', 'in spite'],
    correctAnswer: ['always', 'according to', 'Despite', 'However'],
    explanation: '“Not always the same” rejects one universal claim. “According to” names the factors that made experiences different. “Despite + noun phrase” admits the limitations and still adds the exception; “Although” would need a full clause, and “in spite” needs “of”. “However” then returns to the broader, harsher pattern for lower-status women. Together they keep the description qualified in both directions.',
    feedback: {
      correct: 'Correct. You chose the expressions that limit, explain, concede and contrast.',
      incorrect: 'Check paragraphs 3 and 4 of Chapter 10. Which blank needs a word after “not”, which needs a preposition before “their social status”, and which one is followed by a noun phrase?',
    },
  },
  reflect('me-b2-lf10c','Write a Qualified Comparison','Were all women’s lives the same?',['Use “not always”, “according to”, “despite” and “however”. Give Khadija or Hind as one example.'],'B2 social description should make the scope and limits of a claim visible.','Write or say five or six sentences comparing the lives of different women.')
],
11:[
  {
    id: 'me-b2-lf11a',
    type: 'matching',
    title: 'Poets as a Media Outlet',
    instructions: 'The writer says poets were “in a sense” the media. Match each job with a media role.',
    question: 'How were poets like today’s media?',
    matchingHeadings: { left: 'From the chapter', right: 'Modern media role' },
    matchingPairs: ch11Pairs,
    correctAnswer: pairsToAnswer(ch11Pairs),
    explanation: '“In a sense” is a hedge: it tells the reader that the comparison is partly true, not exact. Poetry kept records, celebrated heroes, promoted one side, stirred up conflict and, rarely, called for peace, as media can do today; but it had no modern technology and served the interests of a tribe. Notice too the passive “Poetry was used to …”, which puts poetry’s social function in focus rather than any single poet.',
    feedback: {
      correct: 'Correct. You mapped each function of poetry onto a modern media role.',
      incorrect: 'Reread the last paragraph of Chapter 11. For each line, ask what the poem did for the tribe: record, celebrate, promote and attack, inflame, or calm?',
    },
  },
  {
    id: 'me-b2-lf11b',
    type: 'transformation',
    title: 'Passive or Active?',
    instructions: 'Complete the new sentence. Say who did the action. Keep the meaning.',
    question: 'Who did each action, and why does the chapter not say?',
    transformItems: [
      { source: 'They were bought and sold like animals.', frame: 'People [blank] them like animals.', answers: ['bought and sold', 'sold and bought'] },
      { source: 'They were employed in various tasks as well as for people’s personal service.', frame: 'Their owners [blank] them in various tasks as well as for people’s personal service.', answers: ['employed', 'used'] },
      { source: 'Tribes were honored in poems, and poets praised conflict and war rather than peace.', frame: 'Poets [blank] tribes in poems, and they praised conflict and war rather than peace.', answers: ['honored', 'honoured'] },
    ],
    correctAnswer: null,
    explanation: 'The active version must name a doer (people, their owners, poets). The chapter’s passive leaves the doer out, so attention stays on the enslaved people and on how the institution treated them. For an institution, the passive often suits the writer better: it describes what regularly happened within a system rather than one person’s actions.',
    feedback: {
      correct: 'Well done. You turned the passive sentences into active ones and kept their meaning.',
      incorrect: 'Keep the past simple and use the same verb as the original: “were bought and sold” → “bought and sold”; “were employed” → “employed”; “were honored” → “honored”.',
    },
  },
  reflect('me-b2-lf11c','Compare Material and Cultural Power','How did slavery and poetry give some people more power?',['Use “both … and …”, “more … than”, “yet”, and “… was / were seen as …”.'],'The chapter places an economic institution beside a cultural communication system, allowing a B2 comparison of different kinds of power.','Write or say a short paragraph comparing slavery and poetry in that society.')
],
12:[
  {
    id: 'me-b2-lf12a',
    type: 'matching',
    title: 'The Writer’s Voice in a Belief System',
    instructions: 'Match each sentence from Chapter 12 with what the writer is doing in it.',
    question: 'How does the writer signal certainty, surprise, concession and reported belief?',
    matchingHeadings: { left: 'From the chapter', right: 'What the writer is doing' },
    matchingPairs: ch12Pairs,
    correctAnswer: pairsToAnswer(ch12Pairs),
    explanation: '“Actually” corrects a likely assumption (that idol-worshippers had no idea of Allah). “Although” concedes the dominant practice while adding a belief that existed beside it. “Were seen as” reports how people viewed idols, not what the writer believes. “Oddly enough” shows the writer’s surprise, and “No doubt” presents a claim as certain. These stance markers let the writer describe a belief system and still show his own position.',
    feedback: {
      correct: 'Correct. You identified how the writer corrects, concedes, reports, reacts and asserts.',
      incorrect: 'Focus on the first words of each sentence (Actually, Although, Oddly enough, No doubt) and on the verb “were seen as”. What does each tell you about the writer’s attitude?',
    },
  },
  {
    id: 'me-b2-lf12b',
    type: 'choose-form',
    title: 'Adding Context and Description',
    instructions: 'Choose the correct form to complete each sentence from Chapter 12.',
    question: 'Which forms add background about time, identify a group of people, and describe a practice?',
    formChoices: [
      { sentence: 'Every tribe walked around the Ka’ba during the pilgrimage season, [choice] fighting was forbidden and disputes between the tribes ended.', options: ['which', 'when', 'where'], answer: 1 },
      { sentence: 'In Mecca there were some Hanifs [choice] believed in the religion of Abraham (pbuh), but idolatry was dominant.', options: ['which', 'whose', 'who'], answer: 2 },
      { sentence: 'Before Islam, stones [choice] in front of the Ka’ba and people worshipped in groups.', options: ['were placed', 'placed', 'had placed'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'After a time noun such as “the pilgrimage season”, a “when” clause adds background: here it explains why the season brought temporary peace. “Who” identifies people (the Hanifs who believed …). “Stones were placed” is passive because the chapter describes a practice, not a particular person who did it.',
    feedback: {
      correct: 'Well done. You chose the time clause, the relative pronoun and the passive correctly.',
      incorrect: 'Check paragraphs 1–3 of Chapter 12. Does the first gap follow a time, a place or a thing? Is the second about people? Did the stones place themselves?',
    },
  },
  reflect('me-b2-lf12c','Explain a Religious Contradiction','What did people believe, and why was it strange?',['Use “although”, “but”, “… were seen as …”, and say what the idols were for.'],'B2 explanation should hold together beliefs that appear inconsistent while staying faithful to the source.','Write or say five sentences about the beliefs of people in Mecca.')
],
13:[
  {
    id: 'me-b2-lf13a',
    type: 'multiple-choice',
    title: 'From Claim to Conclusion',
    instructions: 'Read the opening of Chapter 13. Then choose the job of “So”.',
    question: '“Politics, economics, and religion are three interconnected areas. Religion and beliefs determine every aspect of life. So, it is understandable that Islam faced opposition from both politically and economically powerful groups in Mecca.” What is the job of “So” here?',
    options: [
      'It adds a new, separate topic about Mecca’s groups.',
      'It draws a conclusion from the claim that the three areas are connected.',
      'It introduces an example of a religious belief.',
      'It contrasts religion with politics and economics.',
    ],
    correctAnswer: 1,
    explanation: '“So” introduces a conclusion that follows from what came before. The writer first states a general principle (the three areas are interconnected; religion shapes every aspect of life) and then applies it: a new religion was bound to affect political and economic power. “It is understandable that …” adds the writer’s evaluation: the opposition was predictable, though not justified.',
    feedback: {
      correct: 'Correct. “So” turns the general principle into a conclusion about Mecca.',
      incorrect: 'Read the first two sentences again. Does the third sentence start a new topic, or does it follow logically from them?',
    },
  },
  {
    id: 'me-b2-lf13b',
    type: 'transformation',
    title: 'Packing and Unpacking Sentences',
    instructions: 'Complete the new sentence. Keep the meaning of the original.',
    question: 'How can we make these sentences shorter, or longer?',
    transformItems: [
      {
        source: 'It touched their hearts and minds, making them cry and feel deep respect, even causing their hair to stand on end.',
        frame: 'It touched their hearts and minds, and this [blank] cry and feel deep respect.',
        answers: ['made them', 'caused them to'],
      },
      {
        source: 'The wealth they got through trade, as well as the respect they received from other tribes, made the Quraysh the leaders of their region.',
        frame: 'Not only the wealth they got through trade but also [blank] made the Quraysh the leaders of their region.',
        answers: ['the respect they received from other tribes', 'the respect that they received from other tribes', 'the respect which they received from other tribes', 'the respect received from other tribes'],
      },
      {
        source: 'However, a large group led by the tribal leaders denied his prophethood and opposed him fiercely.',
        frame: 'However, a large group [blank] the tribal leaders denied his prophethood and opposed him fiercely.',
        answers: ['that was led by', 'which was led by', 'who were led by', 'that were led by', 'which were led by'],
      },
    ],
    correctAnswer: null,
    explanation: 'The participle clause “making them cry …” is a compact way of saying “and this made them cry …”: it presents the effect of the Qur’an on the listeners. “As well as” adds a second cause to the subject, just as “not only … but also” does. “A large group led by …” is a shortened relative clause (a group that was led by …). B2 writers use these forms to link cause, effect and description without long chains of “and”.',
    feedback: {
      correct: 'Well done. You unpacked the compact forms into full clauses.',
      incorrect: 'Check paragraphs 2 and 3 of Chapter 13. What did the recitation do to the listeners? What second factor made the Quraysh leaders? Who led the large group?',
    },
  },
  reflect('me-b2-lf13c','Explain Interconnected Opposition','Why could a religious message worry rich and powerful people?',['Use “interconnected”, “so”, “as well as”, “however” and one cause and result.'],'B2 synthesis should show how changes in one domain can create consequences in another.','Write or say five or six sentences about why the leaders feared the message.')
]
};

export const meccaB2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
14:[
  {
    id: 'me-b2-lf14a',
    type: 'matching',
    title: 'How Many, Exactly?',
    instructions: 'Match each expression from Chapter 14 with what it tells us precisely.',
    question: 'How do the chapter’s quantity and time expressions keep its claims accurate?',
    matchingHeadings: { left: 'From the chapter', right: 'What it tells us' },
    matchingPairs: ch14Pairs,
    correctAnswer: pairsToAnswer(ch14Pairs),
    explanation: 'A range (between … and …) is honest about an unknown figure. “Almost no one” means a very small number without claiming zero. “Many” describes a major pattern without saying that every early Muslim was poor or enslaved. “In the first few years” limits the whole claim to one stage. These choices stop the chapter from overclaiming.',
    feedback: {
      correct: 'Correct. You matched each expression with the precise meaning it carries.',
      incorrect: 'Reread the first paragraph of Chapter 14. Which expression gives two numbers, which means “hardly any”, which means “a large part”, and which one is about time?',
    },
  },
  {
    id: 'me-b2-lf14b',
    type: 'error-correction',
    title: 'Precise Groups, Precise Links',
    instructions: 'Each sentence from Chapter 14 has one mistake. Tap the wrong words, then choose the correction.',
    question: 'Can you fix the words that link and describe the groups?',
    errorItems: [
      {
        sentence: 'Indeed, almost no of the tribal leaders had accepted Islam.',
        error: 'almost no of',
        options: ['almost not of', 'almost none of', 'almost nobody of'],
        answer: 1,
      },
      {
        sentence: 'The upper class of the city, who survival depended on the existing order, refused to accept the rise of a new formation and opposed it violently.',
        error: 'who survival',
        options: ['whose survival', 'which survival', 'that survival'],
        answer: 0,
      },
      {
        sentence: 'Although the leading figures of the Quraysh were not always extremely wealthy, but they were prominent figures within the Quraysh, like Abu Talib.',
        error: 'but they were',
        options: ['so they were', 'and they were', 'they were'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: '“No” comes before a noun (no leader); before “of” you need the pronoun “none”: “almost none of the tribal leaders”. “Whose” shows possession: the survival belonged to the upper class. A sentence with “Although …” already contains the contrast, so English does not add “but” in the main clause.',
    feedback: {
      correct: 'Well done. You corrected the quantifier, the possessive relative and the concession.',
      incorrect: 'Check paragraphs 2 and 3 of Chapter 14. Which word goes before “of the tribal leaders”? Whose survival is it? Does a sentence with “Although” also need “but”?',
    },
  },
  reflect('me-b2-lf14c','Write a Qualified Power Analysis','Was it only about money?',['Use “almost”, “many”, “although”, “while” and “… whose power depended on …”.'],'B2 analysis should combine social pattern, economic interest and qualified exceptions.','Write or say five or six sentences about why the leaders opposed Islam.')
],
15:[
  {
    id: 'me-b2-lf15a',
    type: 'sequencing',
    title: 'How the Opposition Grew',
    instructions: 'Put the moments in order. “At first”, “However, when” and “went further” help.',
    question: 'Which words show that the opposition grew step by step?',
    sequencingItems: [
      { id: 'c', text: 'Poor people or those without powerful protectors suffered the most.' },
      { id: 'a', text: 'At first, they mocked just the new religion.' },
      { id: 'd', text: 'The Meccan elites went further and imposed a social and economic boycott …' },
      { id: 'b', text: 'However, when the Qur’an began to speak ill of their idols, … they began to oppose him fiercely.' },
    ],
    correctAnswer: ['a', 'b', 'c', 'd'],
    explanation: '“At first” marks the earliest, mildest stage (mockery). “However, when …” marks a turning point: once the idols were challenged, the opposition became fierce. The next sentence shows who paid the highest price. “Went further” signals a new, more extreme step: the boycott. These signals turn a list of events into an account of escalation.',
    feedback: {
      correct: 'Well done. You traced the escalation from mockery to boycott.',
      incorrect: 'Start with “At first”. Which sentence marks the turning point with “However, when …”? Which one says the elites “went further”?',
    },
  },
  {
    id: 'me-b2-lf15b',
    type: 'choose-form',
    title: 'Expectation, Place and People',
    instructions: 'Choose the correct form to complete each sentence from Chapter 15.',
    question: 'Which forms express a future seen from the past, and identify a place and a group of people?',
    formChoices: [
      { sentence: 'They knew that the Prophet’s call to monotheism … [choice] eventually bring them face to face with people …', options: ['will', 'had', 'would'], answer: 2 },
      { sentence: 'When the Prophet (pbuh) passed by the places [choice] the disbelievers were sitting, …', options: ['which', 'where', 'when'], answer: 1 },
      { sentence: 'Some people died of starvation; there were even those [choice] ate tree leaves.', options: ['who', 'which', 'whose'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: '“Would” is the past form of “will”: after “They knew that …”, it shows what the leaders expected to happen later, seen from their point in the past. “Eventually” adds that the result would come in the end. “Where” introduces a relative clause about a place, and “those who …” identifies a group of people by what they did.',
    feedback: {
      correct: 'Well done. You chose the future-in-the-past, the place relative and the people relative.',
      incorrect: 'Check paragraphs 1, 2 and 4 of Chapter 15. The first sentence looks forward from the past; the second gap follows “the places”; the third follows “those”.',
    },
  },
  reflect('me-b2-lf15c','Explain Escalation and Vulnerability','Why did the pressure grow, and who suffered most?',['Use “at first”, “however, when”, “went further” and “would eventually”. Mention people with no protectors.'],'B2 historical narration should show both escalation and unequal exposure to harm.','Write or say a short paragraph about how the pressure grew.')
],
16:[
  {
    id: 'me-b2-lf16a',
    type: 'multiple-choice',
    title: 'What Does “Otherwise” Mean?',
    instructions: 'Read the lines from Chapter 16. Then choose the meaning of “Otherwise”.',
    question: '“A tribal member could not show the courage to step outside the views of his tribe. Otherwise, he would be left unprotected by his tribe …” What does “Otherwise” mean here?',
    options: [
      'Because he stayed loyal to his tribe',
      'In addition to this',
      'If he did step outside his tribe’s views',
      'Even though he was brave',
    ],
    correctAnswer: 2,
    explanation: '“Otherwise” means “if not” or “if the opposite happened”. Here it points back to the first sentence: if a member did find the courage to step outside the tribe’s views, he would lose its protection. “Would” then gives the imagined consequence. The writer adds “in today’s terms” to compare this loss with being stateless, a modern analogy that helps readers see the cost.',
    feedback: {
      correct: 'Correct. “Otherwise” introduces what would happen if the member broke with his tribe.',
      incorrect: 'Read the sentence before “Otherwise”. What would happen if the opposite of that sentence were true?',
    },
  },
  {
    id: 'me-b2-lf16b',
    type: 'error-correction',
    title: 'Conditions, Consequences and Judgment',
    instructions: 'Each sentence from Chapter 16 has one mistake. Tap the wrong words, then choose the correction.',
    question: 'Can you fix the verbs and the linking words?',
    errorItems: [
      {
        sentence: 'Leaders who built their authority on idols would lose both their political and economic influence if they would lose their idols.',
        error: 'if they would lose',
        options: ['if they will lose', 'if they lost', 'if they had lose'],
        answer: 1,
      },
      {
        sentence: 'It was too much for them to think that they would judge for oppressing people, gaining money through unjust means, as well as for drinking alcohol and every kind of evil.',
        error: 'they would judge',
        options: ['they would be judged', 'they would have judge', 'they were judging'],
        answer: 0,
      },
      {
        sentence: 'Because this, the "freedom of choice" that Islam talked about could not work at that time.',
        error: 'Because this',
        options: ['Because that', 'Due this', 'Because of this'],
        answer: 2,
      },
    ],
    correctAnswer: null,
    explanation: 'In a hypothetical condition, “would” goes in the result clause and the past simple goes in the “if” clause: “would lose … if they lost”. The leaders were not going to judge anyone; they feared being judged, so the passive is needed: “they would be judged”. “Because of” + noun or pronoun (this) links the social pressure to its result.',
    feedback: {
      correct: 'Well done. You corrected the condition, the passive and the cause link.',
      incorrect: 'Check paragraphs 2–4 of Chapter 16. Which clause takes “would”? Who would do the judging? What follows “Because” when there is no full clause?',
    },
  },
  reflect('me-b2-lf16c','Analyse Constrained Choice','Could people really choose freely?',['Use “if”, “would / could”, “otherwise” and “because of this”.'],'B2 conditional analysis can make hidden social pressures and possible consequences explicit.','Write or say five or six sentences about how the tribe affected people’s choices.')
],
17:[
  {
    id: 'me-b2-lf17a',
    type: 'matching',
    title: 'From Historical Period to Recurring Pattern',
    instructions: 'Match each sentence from Chapter 17 with what the writer is doing in it.',
    question: 'How does the last chapter connect the past to today?',
    matchingHeadings: { left: 'From the chapter', right: 'What the writer is doing' },
    matchingPairs: ch17Pairs,
    correctAnswer: pairsToAnswer(ch17Pairs),
    explanation: '“Both … and also” holds the historical meaning and the wider meaning together. “Whether … or …” includes every group. “On the other hand” turns to the opposing side. “Has always … and will continue” joins past, present and future. “Reminds us of” marks a comparison between today and seventh-century Mecca: it is an analogy the writer draws, not historical evidence.',
    feedback: {
      correct: 'Correct. You followed how the conclusion extends, includes, contrasts, spans time and compares.',
      incorrect: 'Reread paragraphs 2–4 of Chapter 17. Focus on the key signals: both … and also, whether … or, on the other hand, has always … will continue, reminds us of.',
    },
  },
  {
    id: 'me-b2-lf17b',
    type: 'transformation',
    title: 'Reporting and Identifying',
    instructions: 'Complete the new sentence. Keep the meaning of the original.',
    question: 'How else can we say these sentences from Chapter 17?',
    transformItems: [
      {
        source: 'When the Quraysh leaders blamed the Prophet, they said, “You have destroyed our unity.”',
        frame: 'When the Quraysh leaders blamed the Prophet, they said that he [blank] their unity.',
        answers: ['had destroyed'],
      },
      {
        source: 'For example, Abu Jahl, one of the leading figures of opposition to Islam, strongly rejected Islam and led his tribe in the same direction.',
        frame: 'For example, Abu Jahl, [blank] one of the leading figures of opposition to Islam, strongly rejected Islam and led his tribe in the same direction.',
        answers: ['who was'],
      },
    ],
    correctAnswer: null,
    explanation: 'When direct speech is reported after a past verb (they said that …), the present perfect moves back to the past perfect and the pronouns change: “You have destroyed our unity” → “he had destroyed their unity”. Reporting also reminds the reader that this is the leaders’ accusation, not the writer’s view. The phrase “one of the leading figures …” is a shortened relative clause (who was one of …) that identifies Abu Jahl.',
    feedback: {
      correct: 'Well done. You reported the accusation and expanded the identifying phrase.',
      incorrect: 'In the first frame, move the tense one step back after “they said that”. In the second, add a relative pronoun and a verb for a person in the past.',
    },
  },
  reflect('me-b2-lf17c','Synthesize Across Time','What did Jahiliyyah mean then, and what can it mean today?',['Say what it meant then, then today. Use “both … and”, “whether … or” and “on the other hand”.'],'B2 synthesis should keep historical description, conceptual extension and present-day comparison distinct but connected.','Write or say six or seven sentences about the word “Jahiliyyah”, then and now.')
]
};


export const meccaB2LanguageReviewExercises: Exercise[] = [
  // NOTICE — discover what the book's language does, across chapters.
  {
    id: 'me-b2-language-review-1-writer-stance', type: 'drag-drop', title: 'Notice: How Sure Is the Writer?',
    instructions: 'Does the writer limit the claim, report others’ views, or say it for sure? Sort.',
    question: 'Which words show how far the writer stands behind each claim?',
    dragDropGroups: [
      { group: 'The writer limits the claim', items: ['These caravans numbered up to 2,500 camels.', 'In a sense, they were serving as a media outlet.', 'The population of Mecca … was between 5,000 and 10,000.'] },
      { group: 'The writer reports what others believed or said', items: ['Pre-Islamic Arabs thought the gods talked through kahins (soothsayers) and poets …', 'The leaders of the Quraysh viewed Islam as a threat to their authority.', 'The Quraysh were saying that Islam broke up families …'] },
      { group: 'The writer states the claim with certainty', items: ['No doubt, pilgrimage to the Ka’ba was the most popular and common form of worship.', '… it certainly doesn’t make sense to call the pre-Islamic era entirely negative.'] },
    ],
    correctAnswer: {
      'The writer limits the claim': ['These caravans numbered up to 2,500 camels.', 'In a sense, they were serving as a media outlet.', 'The population of Mecca … was between 5,000 and 10,000.'],
      'The writer reports what others believed or said': ['Pre-Islamic Arabs thought the gods talked through kahins (soothsayers) and poets …', 'The leaders of the Quraysh viewed Islam as a threat to their authority.', 'The Quraysh were saying that Islam broke up families …'],
      'The writer states the claim with certainty': ['No doubt, pilgrimage to the Ka’ba was the most popular and common form of worship.', '… it certainly doesn’t make sense to call the pre-Islamic era entirely negative.'],
    },
    explanation: 'A careful reader tracks how far the writer stands behind each claim. “Up to” gives an upper limit, a range (between … and …) admits that the exact number is unknown, and “in a sense” marks a comparison as only partly true. Verbs such as thought, viewed … as and were saying report the beliefs or words of other people, not the writer’s own view. “No doubt” and “certainly” present a claim as sure. If you remove these signals when you retell a text, you change what the writer actually claims.',
    feedback: { correct: 'Well done. You separated limited claims, reported views and certain claims.', incorrect: 'Look for the signal in each sentence: a limit (up to, in a sense, between … and …), a reporting verb (thought, viewed, were saying) or a word of certainty (no doubt, certainly).' },
  },
  {
    id: 'me-b2-language-review-2-passive-focus', type: 'multiple-choice', title: 'Notice: Who Stays in Focus?',
    instructions: 'Read the lines from Chapters 8 and 15. Then choose the best explanation.',
    question: 'Chapter 8: “In such a society, orphans were oppressed, the weak were looked down on, and the poor were shown no mercy.” Chapter 15: “The cries of children dying of hunger began to be heard.” Why does the writer not say who did these actions?',
    options: [
      'History does not record who treated these people so badly.',
      'To keep the reader’s attention on the people who suffered, not on the people who caused the suffering.',
      'In English, a passive verb cannot be followed by a “by” phrase.',
      'To show that each of these things happened only once.',
    ],
    correctAnswer: 1,
    explanation: 'In these passives the people who suffered (orphans, the weak, the poor, the children) stay at the centre of the sentence, and the doer is left out. The doers are not unknown: Chapter 8 names them in a separate sentence, “those who oppressed and treated people unfairly were generally wealthy and powerful individuals”. When the doer matters, the writer adds a “by” phrase: “an agreement was made by some Quraysh tribes”. So the choice between passive and active shows what the writer wants the reader to look at.',
    feedback: { correct: 'Correct. The passive keeps the victims and what happened to them in focus.', incorrect: 'Ask what stands at the front of each sentence: the people who suffered, or the people who acted? Then look for the sentence in Chapter 8 that names the oppressors.' },
  },
  {
    id: 'me-b2-language-review-3-would-from-the-past', type: 'true-false', title: 'Notice: What Does “Would” Tell Us?',
    instructions: 'Read the sentences from Chapters 15 and 16. Is the statement true or false?',
    question: 'Chapter 15: “They knew that the Prophet’s call to monotheism … would eventually bring them face to face with people who carried out these practices.” Chapter 16: “Leaders who built their authority on idols would lose both their political and economic influence if they lost their idols.” Statement: In both sentences, “would” reports something that had already happened.',
    correctAnswer: false,
    explanation: 'False. In Chapter 15, “would” is the past form of “will”: after “They knew that …”, it shows what the leaders expected to happen later, seen from their point in the past. In Chapter 16, “would” gives an imagined result, and the if-clause uses the past simple (if they lost) for a situation that had not happened. In both sentences “would” looks forward from the past; it does not report a finished event. That is why the leaders were afraid: they could see what might happen.',
    feedback: { correct: 'Correct. Here “would” looks forward: an expected future and an imagined result.', incorrect: 'Did the leaders already face these people, or lose their idols, at that moment? Read “They knew that …” and “if they lost …” again.' },
  },
  // BUILD — controlled practice in the book's own sentences, mixing chapters.
  {
    id: 'me-b2-language-review-4-reason-and-concession', type: 'word-bank', title: 'Build: Reason, Result or Concession?',
    instructions: 'Complete the lines from Chapters 3, 4, 12 and 14 with words from the bank. Two words are not needed.',
    question: 'Which word gives a result, a reason, or a contrast?',
    fillBlanksText: '… the Zamzam water had not yet been discovered, [blank] there was no population living there. … [blank] the surroundings of the city were not suitable for agriculture, people tried to make a living through trade. … [blank] they mainly worshipped idols, they believed “Allah” to be the creator. … These people, who saw themselves as superior to others [blank] their wealth, ignored the Qur’an’s commands …',
    wordBank: ['so', 'Since', 'Although', 'because of', 'Despite', 'However'],
    correctAnswer: ['so', 'Since', 'Although', 'because of'],
    explanation: '“So” introduces a result: the water had not been found, so nobody lived there. “Since” can introduce a reason that the reader easily accepts, and it is followed by a clause with a subject and a verb. “Because of” is followed by a noun phrase (their wealth). “Although” admits one fact and then adds a second fact that seems to clash with it; it takes a clause, so “Despite”, which needs a noun phrase, does not fit. “However” links two separate sentences and cannot introduce a clause like these.',
    feedback: { correct: 'Well done. You matched each link to its meaning and to what follows it.', incorrect: 'For each gap, ask two questions: is it a result, a reason or a contrast? And is it followed by a clause or by a noun phrase?' },
  },
  {
    id: 'me-b2-language-review-5-claim-and-passive', type: 'error-correction', title: 'Build: Fix the Claim, Fix the Form',
    instructions: 'Each sentence has one mistake: a claim that is too strong, or a wrong verb. Tap it, then fix it.',
    question: 'Can you keep each sentence careful and correct?',
    errorItems: [
      { sentence: 'All of the first Muslims were the poor and the slaves.', error: 'All of', options: ['Much of', 'Many of', 'Every of'], answer: 1 },
      { sentence: 'In addition, major trade festivals such as Ukaz … were also holding during the sacred months.', error: 'were also holding', options: ['were also hold', 'had also held', 'were also held'], answer: 2 },
      { sentence: 'Otherwise, he would leave unprotected by his tribe …', error: 'would leave unprotected', options: ['would be left unprotected', 'would left unprotected', 'would have leave unprotected'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'The chapter says “Many of the first Muslims …”: “many” describes a large part of the group, while “all” would claim that there were no exceptions, which is more than the evidence shows (“much” is for uncountable nouns). Festivals do not hold anything; people hold them, so the passive is needed: were also held. In the same way, a member who stepped outside his tribe’s views did not leave anyone; he was the one who would lose protection, so after “would” we need be + past participle: would be left unprotected.',
    feedback: { correct: 'Well done. You removed the overclaim and chose the passive where the subject receives the action.', incorrect: 'First ask whether the claim is stronger than the chapter allows. Then ask who does the action: the festivals and the tribal member, or other people?' },
  },
  {
    id: 'me-b2-language-review-6-same-meaning-new-structure', type: 'transformation', title: 'Build: Same Meaning, New Structure',
    instructions: 'Rewrite each sentence from Chapters 7, 8 and 14 by completing the frame. Keep the meaning of the original.',
    question: 'How else can we say these sentences from the book?',
    transformItems: [
      { source: 'Due to its fight against injustice, Hilfü’l-Fudûl received support from the community.', frame: 'Hilfü’l-Fudûl received support from the community because [blank].', answers: ['it fought against injustice', 'it fought injustice', 'it was fighting against injustice', 'it was fighting injustice', 'of its fight against injustice', 'it struggled against injustice'] },
      { source: 'Because large amounts of wealth were concentrated in the hands of certain individuals, there were extreme divisions between social classes.', frame: 'Large amounts of wealth were concentrated in the hands of certain individuals. [blank], there were extreme divisions between social classes.', answers: ['As a result', 'Therefore', 'Consequently', 'As a consequence', 'For this reason', 'Because of this', 'Due to this', 'Thus', 'Hence', 'So', 'That is why', 'This is why'] },
      { source: 'The Quraysh were saying, “Muhammad is trying to gain the upper hand over us; …”', frame: 'The Quraysh were saying that Muhammad [blank] to gain the upper hand over them.', answers: ['was trying'] },
    ],
    correctAnswer: null,
    explanation: '“Due to” and “because of” are followed by a noun phrase (its fight against injustice); “because” is followed by a clause with its own subject and verb (it fought against injustice). A result can also open a new sentence with a linker such as As a result or Therefore. When direct speech is reported after a past verb (were saying that …), the present continuous moves back to the past continuous and the pronouns change: us → them. Reporting also reminds the reader that these are the Quraysh’s words, not the writer’s view.',
    feedback: { correct: 'Well done. You kept the meaning and changed the structure correctly.', incorrect: 'Check what the frame needs: a clause after “because”, a result linker at the start of a sentence, and the past continuous with “them” after “were saying that”.' },
  },
  {
    id: 'me-b2-language-review-7-relative-words', type: 'choose-form', title: 'Build: Which Relative Word?',
    instructions: 'Choose the correct word to complete each sentence from Chapters 8, 16 and 17.',
    question: 'Which word fits a person, and which fits a thing or a place?',
    formChoices: [
      { sentence: 'Prophet Muhammad (pbuh), [choice] was twenty years old at the time, also attended this meeting.', options: ['which', 'who', 'that'], answer: 1 },
      { sentence: 'The rejection of idols meant, for the Quraysh, the end of the trade on [choice] they depended for their wealth.', options: ['that', 'whom', 'which'], answer: 2 },
      { sentence: 'In Mecca, [choice] was a place of oppression, injustice, and immorality before Islam, the Prophet (pbuh) called upon people to follow justice and morality.', options: ['which', 'where', 'that'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: '“Who” refers to a person, and in a clause between commas we cannot use “that”. After a preposition, “which” refers to a thing (on which they depended); “whom” is only for people, and “that” cannot follow a preposition. “Where” replaces an adverbial of place (the places where the disbelievers were sitting), but in Chapter 17 the relative word is the subject of “was”, so the writer needs “which”.',
    feedback: { correct: 'Correct. You chose the relative word by what it refers to and by its job in the clause.', incorrect: 'Ask what the word refers to (a person, a thing, a place) and what it does in its clause: is it the subject, or does it follow a preposition?' },
  },
  // USE — take the language into new, everyday contexts.
  {
    id: 'me-b2-language-review-8-new-context', type: 'word-bank', title: 'Use: A Report on a School Project',
    instructions: 'This is part of a student report. Complete it with words from the bank. Two are not needed.',
    question: 'Can you report a school project carefully, without saying more than the evidence shows?',
    fillBlanksText: 'Last term, a recycling project was started at our school by the student council. [blank] 40 bags of paper were collected every week, but the number changed from month to month. [blank] the project, the school needed to buy less new paper. [blank] some classes joined enthusiastically, others took part only occasionally. It can be said that the project was [blank] successful, but it is too early to call it a complete success. Next year, the council hopes that every class will take part.',
    wordBank: ['Up to', 'As a result of', 'Although', 'mostly', 'Despite', 'entirely'],
    correctAnswer: ['Up to', 'As a result of', 'Although', 'mostly'],
    explanation: 'Up to gives the highest weekly number, not the number for every week. As a result of + noun phrase names the cause of the saving. Although admits one fact and adds a contrasting one in the same sentence, without “but”; Despite would need a noun phrase. Mostly limits the success: the report praises the project but does not overclaim, which is why entirely does not fit. Like the writer of the book, a careful reporter keeps claims in proportion to the evidence.',
    feedback: { correct: 'Well done. Your report is clear, fair and careful.', incorrect: 'For each gap, ask: is it a limit, a cause, a contrast or a degree? Then check what follows the gap: a number, a noun phrase or a clause.' },
  },
  {
    id: 'me-b2-language-review-9-new-context', type: 'choose-form', title: 'Use: Say Only What the Evidence Shows',
    instructions: 'These sentences are new. Choose the words that say only what the facts show.',
    question: 'Which form keeps each new sentence accurate and fair?',
    formChoices: [
      { sentence: 'In our class survey, 18 of 25 students said they read every day, so [choice] students in our class read daily.', options: ['all', 'almost no', 'most'], answer: 2 },
      { sentence: 'Each class may borrow [choice] 30 books a week: some classes borrow 30, others borrow only 10 or 12.', options: ['exactly', 'up to', 'at least'], answer: 1 },
      { sentence: 'Nobody saw who damaged the plants in the school garden, so the report says that the plants [choice] during the weekend.', options: ['damaged', 'were damaged', 'had damaging'], answer: 1 },
    ],
    correctAnswer: null,
    explanation: 'Most matches 18 out of 25: a large part of the class, but not all of it. Up to gives the highest number allowed, so smaller numbers are still possible; exactly and at least do not fit a class that borrows only 10. When the doer is unknown, or less important than what happened, use the passive: the plants were damaged. The plants did not damage anything themselves.',
    feedback: { correct: 'Well done. Each sentence now says exactly what the evidence shows.', incorrect: 'Compare each form with the evidence in the same sentence: how many, how much, and who did the action?' },
  },
  {
    id: 'me-b2-language-review-10-transfer', type: 'reflection', title: 'Use: Argue a Careful Case',
    instructions: 'Should your school have a student group that helps classmates treated unfairly? Write six to eight sentences.',
    question: 'What do you think, and why?',
    correctAnswer: null,
    explanation: 'Example: “In my view, our school should set up a student committee to help classmates who are treated unfairly. At present, some students are left out or laughed at, and these problems are often not reported. Due to fear of being mocked, many students stay silent. As a result of this silence, small problems can grow into serious ones. Although our teachers already help, they cannot see everything that happens in the corridors. The committee would not replace the teachers; its role would be mostly to listen rather than to punish. If it worked fairly and respectfully, it would make our school a safer place for everyone.”',
    feedback: { correct: 'Check your paragraph: a clear position; a reason with because, due to or as a result of; a limit such as mostly, many, not always or although; a passive without “by” (students are left out …); and an if … would … sentence for a possible result.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — Your view: “In my view, our school should … because …”', mode: 'Individual' },
      { question: 'Sentences 2–3 — Reasons: “Some students are left out …”, “Due to …, …”', mode: 'Individual' },
      { question: 'Sentences 4–5 — Be careful: “Although …, …”, “… is not always …”', mode: 'Pair' },
      { question: 'Sentences 6–7 — Results: “If the group …, it would … . Otherwise, …”', mode: 'Pair' },
    ],
  },
];
