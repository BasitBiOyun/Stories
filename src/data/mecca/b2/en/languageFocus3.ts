import type { Exercise } from '../../../../types';

const feedback={correct:'Correct. You used the chapter language and relationship accurately.',incorrect:'Not yet. Return to the chapter wording and check the relationship the form expresses.'};
const reflect=(id:string,title:string,question:string,prompts:string[],explanation:string):Exercise=>({id,type:'reflection',title,instructions:'Use the target language to produce a short B2 response.',question,correctAnswer:null,explanation,feedback,discussionPrompts:prompts.map(q=>({question:q,mode:'Individual'}))});
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
  reflect('me-b2-lf10c','Write a Qualified Comparison','Can you compare women’s experiences without turning one example into a universal rule?',['Write 5–6 sentences using not always, according to, despite, however, and one example from Khadija or Hind alongside the lower-status women.'],'B2 social description should make the scope and limits of a claim visible.')
],
11:[
  {
    id: 'me-b2-lf11a',
    type: 'matching',
    title: 'Poets as a Media Outlet',
    instructions: 'The writer says that poets were, “in a sense”, serving as a media outlet. Match each thing poetry did with the modern media role it resembles.',
    question: 'How far does the comparison between poets and the media work?',
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
    instructions: 'Rewrite each passive sentence from Chapter 11 in the active by completing the frame. Keep the meaning.',
    question: 'What does the active version add, and what does the chapter’s passive version keep in focus?',
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
  reflect('me-b2-lf11c','Compare Material and Cultural Power','How did slavery and poetry influence social hierarchy in different ways?',['Write a short analytical paragraph using both…and, more…than or rather than, yet, and at least one passive form.'],'The chapter places an economic institution beside a cultural communication system, allowing a B2 comparison of different kinds of power.')
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
      { sentence: 'In Mecca there were some Hanifs [choice] believed in the religion of Abraham (as), but idolatry was dominant.', options: ['which', 'whose', 'who'], answer: 2 },
      { sentence: 'Before Islam, stones [choice] in front of the Ka’ba and people worshipped in groups.', options: ['were placed', 'placed', 'had placed'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'After a time noun such as “the pilgrimage season”, a “when” clause adds background: here it explains why the season brought temporary peace. “Who” identifies people (the Hanifs who believed …). “Stones were placed” is passive because the chapter describes a practice, not a particular person who did it.',
    feedback: {
      correct: 'Well done. You chose the time clause, the relative pronoun and the passive correctly.',
      incorrect: 'Check paragraphs 1–3 of Chapter 12. Does the first gap follow a time, a place or a thing? Is the second about people? Did the stones place themselves?',
    },
  },
  reflect('me-b2-lf12c','Explain a Religious Contradiction','Can you describe the system without simplifying it?',['Write 5 sentences using although, while or but, one passive form such as were seen as, and a sentence explaining the role of mediators.'],'B2 explanation should hold together beliefs that appear inconsistent while staying faithful to the source.')
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
    instructions: 'Rewrite each sentence from Chapter 13 by completing the frame. Keep the meaning of the original.',
    question: 'How do participle clauses, as well as and short participle phrases make the chapter’s sentences compact?',
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
    explanation: 'The participle clause “making them cry …” is a compact way of saying “and this made them cry …”: it presents the effect of the Quran on the listeners. “As well as” adds a second cause to the subject, just as “not only … but also” does. “A large group led by …” is a shortened relative clause (a group that was led by …). B2 writers use these forms to link cause, effect and description without long chains of “and”.',
    feedback: {
      correct: 'Well done. You unpacked the compact forms into full clauses.',
      incorrect: 'Check paragraphs 2 and 3 of Chapter 13. What did the recitation do to the listeners? What second factor made the Quraysh leaders? Who led the large group?',
    },
  },
  reflect('me-b2-lf13c','Explain Interconnected Opposition','Why could a religious message affect political and economic power?',['Write a 5–6 sentence explanation using interconnected, so, as well as, however, and one cause-effect sentence.'],'B2 synthesis should show how changes in one domain can create consequences in another.')
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
    question: 'Can you correct the quantifier, the relative pronoun and the concession?',
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
  reflect('me-b2-lf14c','Write a Qualified Power Analysis','How can you explain elite opposition without reducing it to wealth alone?',['Write 5–6 sentences using almost, many, although, while, and a relative clause about the upper class whose survival depended on the existing order.'],'B2 analysis should combine social pattern, economic interest and qualified exceptions.')
],
15:[
  {
    id: 'me-b2-lf15a',
    type: 'sequencing',
    title: 'How the Opposition Grew',
    instructions: 'Put these moments from Chapter 15 in order. Use the signals At first, However, when … and went further to trace how the opposition grew.',
    question: 'Which discourse signals show that the opposition became stronger step by step?',
    sequencingItems: [
      { id: 'c', text: 'Poor people or those without powerful protectors suffered the most.' },
      { id: 'a', text: 'At first, they mocked just the new religion.' },
      { id: 'd', text: 'The Meccan elites went further and imposed a social and economic boycott …' },
      { id: 'b', text: 'However, when the Quran began to speak ill of their idols, … they began to oppose him fiercely.' },
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
      { sentence: 'When the Prophet (as) passed by the places [choice] the disbelievers were sitting, …', options: ['which', 'where', 'when'], answer: 1 },
      { sentence: 'Some people died of starvation; there were even those [choice] ate tree leaves.', options: ['who', 'which', 'whose'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: '“Would” is the past form of “will”: after “They knew that …”, it shows what the leaders expected to happen later, seen from their point in the past. “Eventually” adds that the result would come in the end. “Where” introduces a relative clause about a place, and “those who …” identifies a group of people by what they did.',
    feedback: {
      correct: 'Well done. You chose the future-in-the-past, the place relative and the people relative.',
      incorrect: 'Check paragraphs 1, 2 and 4 of Chapter 15. The first sentence looks forward from the past; the second gap follows “the places”; the third follows “those”.',
    },
  },
  reflect('me-b2-lf15c','Explain Escalation and Vulnerability','Why did pressure intensify, and who paid the highest cost?',['Write a short paragraph using because, would eventually, at first, however/when, and went further. Include one sentence about people without powerful protectors.'],'B2 historical narration should show both escalation and unequal exposure to harm.')
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
    question: 'Can you correct the hypothetical condition, the passive and the cause link?',
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
  reflect('me-b2-lf16c','Analyse Constrained Choice','Was freedom of choice merely an individual matter in the chapter?',['Write 5–6 sentences using if, would/could, otherwise, and because of this to explain how tribal protection affected individual decisions.'],'B2 conditional analysis can make hidden social pressures and possible consequences explicit.')
],
17:[
  {
    id: 'me-b2-lf17a',
    type: 'matching',
    title: 'From Historical Period to Recurring Pattern',
    instructions: 'Match each sentence from Chapter 17 with what the writer is doing in it.',
    question: 'How does the conclusion widen its claim from one period to a recurring pattern?',
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
    instructions: 'Rewrite each sentence from Chapter 17 by completing the frame. Keep the meaning of the original.',
    question: 'How do reported speech and relative clauses change the way information is presented?',
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
  reflect('me-b2-lf17c','Synthesize Across Time','Can you distinguish historical evidence from a modern analogy?',['Write 6–7 sentences: first state what Jahiliyyah refers to historically, then explain how the chapter extends the term. Use both…and also, whether…or, on the other hand, and one present/future sentence. Clearly mark the modern comparison as the chapter’s concluding analogy.'],'B2 synthesis should keep historical description, conceptual extension and present-day comparison distinct but connected.')
]
};


const reviewFeedback={correct:'Correct. You selected language that preserves the book’s meaning and level of certainty.',incorrect:'Not yet. Reconsider the discourse relationship and the degree of certainty expressed.'};
const reviewMc=(id:string,question:string,options:string[],correctAnswer:number,explanation:string):Exercise=>({id,type:'multiple-choice',title:'B2 Language Review',instructions:'Choose the language that best preserves the intended meaning.',question,options,correctAnswer,explanation,feedback:reviewFeedback});
const reviewFill=(id:string,question:string,text:string,answer:string,explanation:string):Exercise=>({id,type:'fill-blanks',title:'B2 Language Review',instructions:'Complete the sentence with the best discourse form.',question,fillBlanksText:text,correctAnswer:answer,explanation,feedback:reviewFeedback});
const reviewMatch=(id:string,question:string,pairs:{left:string;right:string}[],explanation:string):Exercise=>({id,type:'matching',title:'B2 Language Review',instructions:'Match each form with the discourse function it performs across the book.',question,matchingPairs:pairs,correctAnswer:Object.fromEntries(pairs.map(p=>[p.left,p.right])),explanation,feedback:reviewFeedback});

export const meccaB2LanguageReviewExercises: Exercise[] = [
reviewMatch('me-b2-lr1','Match the language with its source-framing or qualification function.',[{left:'It can be said that...',right:'Marks an interpretation rather than an absolute fact'},{left:'not always the same',right:'Blocks an overgeneralization'},{left:'almost no one',right:'Expresses a very small quantity without claiming zero'},{left:'gradually developed',right:'Presents change as a process over time'}],'These forms keep historical claims proportionate to the evidence.'),
reviewMatch('me-b2-lr2','Match each causal form with the kind of relationship it commonly builds in the chapters.',[{left:'because / since',right:'Introduces a clause giving a reason'},{left:'because of / due to',right:'Introduces a noun phrase as cause'},{left:'as a result / therefore',right:'Introduces a consequence'},{left:'so...that',right:'Links a high degree with its result'}],'The book repeatedly explains social and economic systems through explicit causal links.'),
reviewMc('me-b2-lr3','Which sentence best uses passive voice for institutional analysis?',['Goods were seized and vulnerable people were denied protection, so the focus remains on the harm and those affected.','Powerful men seized goods, therefore passive voice is impossible.','The merchant was goods because the sentence is historical.'],0,'Passive voice is useful when the affected people, action, or institution matters more than naming an agent.'),
reviewFill('me-b2-lr4','Complete the unreal past relationship.','Had the people not forced him to leave, he [blank] never have left Mecca.','would','Had + past participle combines with would have + past participle to express an unreal past condition and result.'),
reviewMc('me-b2-lr5','Which sentence gives the most appropriately qualified B2 comparison?',['Although some higher-status women had economic freedom, many lower-status women remained severely disadvantaged.','All women had exactly the same position in every tribe.','Because Khadija ran a business, no woman faced restrictions.'],0,'Although allows evidence of variation without erasing the broader pattern described in the chapter.'),
{ id:'me-b2-lr6',type:'sequencing',title:'B2 Language Review',instructions:'Order the discourse markers to build an escalation.',question:'How can a B2 paragraph show intensifying opposition?',sequencingItems:[{id:'a',text:'At first, the new religion was mocked.'},{id:'b',text:'However, when idols and established interests were challenged, opposition became fiercer.'},{id:'c',text:'Vulnerable believers then suffered direct persecution.'},{id:'d',text:'The elites went further and imposed a social and economic boycott.'}],correctAnswer:['a','b','c','d'],explanation:'At first, however/when, then, and went further make the escalation explicit.',feedback:reviewFeedback },
reviewMatch('me-b2-lr7','Match each relationship with language suitable for synthesizing the book.',[{left:'Sacred status + trade',right:'not only... but also / as well as'},{left:'Economic inequality despite moral resistance',right:'although / however'},{left:'Tribal protection leading to constrained choice',right:'if... then / otherwise'},{left:'Historical Jahiliyyah extended to a recurring pattern',right:'both... and also / not only... but also'}],'B2 synthesis depends on selecting connectors that accurately represent the relationship, not simply linking sentences mechanically.'),
{ id:'me-b2-lr8',type:'reflection',title:'B2 Language Review — Productive Synthesis',instructions:'Write a coherent analytical paragraph using language from the review.',question:'How did sacred status, trade, class, tribal protection and belief interact in Mecca, and why did reform affect several systems at once?',correctAnswer:null,explanation:'A strong response should use at least four target relationships: cause/result, concession, qualification, condition, comparison or additive synthesis. It should distinguish evidence from interpretation.',feedback:reviewFeedback,discussionPrompts:[{question:'Write 7–9 sentences. Include one qualification (for example, not always/almost/can be said), one cause-result chain, one concession, and one conditional or counterfactual relationship.',mode:'Individual'}] }
];
