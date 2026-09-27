import type { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

export const meccaA2TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Chapter 1: Bilal Ibn Rabah’s Place in Islam',
    timing: '40 minutes',
    objectives: [
      'Say three facts about Bilal’s start in life and three facts about his place in Islam.',
      'Tell the difference between a fact in the story and what people in Mecca only thought.',
      'Notice how “thought + sentence” reports a belief and how “made + person + adjective” shows a change, and use was born in, was/were and the past forms said, left, thought, had.',
      'Say in simple words the lesson of the chapter: skin color or being a slave does not make a person less valuable.'
    ],
    pedagogy: 'Start with the person, not with a talk about slavery. Learners listen, then sort the chapter into two columns: Bilal’s start (born into slavery, his parents) and Bilal’s place in Islam (one of the first seven, never left the Prophet, first Adhan). The grammar grows from one question: “People in Mecca thought Bilal was just a poor slave. Is that true in the story?” Learners discover that “thought + sentence” gives a belief, not a fact, before you name the pattern.',
    priorKnowledge: ['was/were, simple past of regular verbs, and family words (mother, father).'],
    anticipatedMisconceptions: ['Learners may copy “People in Mecca thought Bilal was just a poor slave” as a fact. The chapter reports this belief and then shows it was wrong.', 'Bilal’s low social position does not mean the chapter sees him as less valuable.'],
    grammarFocus: 'Targets: fact or belief (People in Mecca thought + sentence) · past forms said, left, thought, had · was born in + city · was / were (two people → were) · made + person + adjective/noun for a change.\nNotice (Activity 1): Board “People in Mecca thought Bilal was just a poor slave.” Ask only: “Who thinks this? Is it true at the end of the story?” Learners say that after “thought” we hear an idea in people’s heads, not a fact.\nBuild (Activities 2–3): match say → said, leave → left, think → thought, have → had, then choose in / were / made. After each item ask: “Why were and not was?” (his father and his mother = two people).\nLikely errors: *He was born at Mecca · *His father and his mother was slaves · *thinked, *leaved · *Islam made him to be free.\nUse (Activity 4): four short sentences about a real or imaginary person: where he/she was born, what people thought, and what made him/her different.',
    pronunciationFocus: 'Chunk the belief sentence: “PEOple in MECca THOUGHT | biLAL was just a POOR SLAVE.”\nContrastive stress on the change: “But ISlam made him a FREE | and GREAT man.”\nIrregular past forms: thought /θɔːt/ (tongue between the teeth), said /sed/ (not /seɪd/), left, had.\nWord focus: bi-LAL, a-DHAN, O-pen-ly, VAL-u-a-ble, e-thi-O-pi-an, SLAVE-ry.',
    beforeReading: ['Write two phrases on the board: “a slave” and “a great man”. Ask: “Can one person be both in one life?” Pairs say yes or no with one reason. Keep the answers as predictions.'],
    duringReading: ['First listening, books closed: how many “first” facts do you hear? (one of the first seven, the first Adhan)', 'Two columns: Bilal’s start / Bilal’s place in Islam, one quoted phrase for each fact.', 'Underline the two “thought” sentences and write “belief” next to them.', 'Box the last sentence: the lesson of the story.'],
    afterReading: ['Complete the Quick Challenge with the two columns in view.', 'Language Focus: Look (sort fact or belief in Activity 1), Practise (past forms and was born in / were / made in Activities 2–3), Use (four sentences in Activity 4).', 'Finish with one sentence about how the class can show that every person has the same value.'],
    lessonPlan: '0–4 Hook: “a slave” and “a great man” on the board, pairs predict if one person can be both; 4–11 Listen with books closed and count the “first” facts, then listen again and read along; 11–17 Pairs fill the two columns (Bilal’s start / Bilal’s place in Islam) with a quoted phrase for each fact, quick whole-class check; 17–21 Quick Challenge individually; 21–30 Language Focus: Activity 1 as whole-class discovery (Who thinks this? Is it true?), then Activities 2–3 in pairs, choral practice of said, left, thought, had; 30–37 Use: learners tell a partner four sentences about a person they know or imagine (was born in / people thought / but … made him or her …), then write them, two volunteers read; 37–40 Exit ticket.',
    discussionPoints: ['Which sentences tell us facts about Bilal’s family?', 'What did people in Mecca think about Bilal, and was it right?', 'What does the last sentence say about the value of a person?'],
    interactiveTips: ['Use the Bilal ibn Rabah hotspot for the facts and A Great Lesson for the last sentence.', 'Replay “People in Mecca thought …” and ask: “Is this the story’s voice or the people’s idea?”', 'Do not add details about Bilal’s life that the chapter does not give.'],
    differentiation: {
      strugglingLearners: 'Give three frames: “Bilal was born in ____.” / “People in Mecca thought ____.” / “But Islam made him ____.” Learners copy the words from the text first, then say the sentences to a partner.',
      fastFinishers: 'Write five sentences about a person: two facts, one belief with “people thought”, one change with “made”, and one lesson with “This story teaches us that …”.'
    },
    formativeAssessment: ['Puts facts and beliefs in the right group.', 'Uses was born in and were correctly.', 'Says the lesson of the chapter in his or her own words.'],
    expectedResponses: ['Bilal was born into slavery in Mecca, but he was one of the first seven people who openly said they were Muslims and the first person to give the Adhan.', 'People in Mecca thought he would never become someone important, but Islam made him a free and great man.'],
    transferTask: 'Say one thing our class can do so that every student feels equally valuable.',
    teacherReflection: 'Did learners see that “People in Mecca thought …” is a belief the story shows was wrong, and did they find this before I named the pattern?',
    assessmentTools: { rubric: ['Facts from the text', 'Fact vs belief', 'was born in / were / made', 'Lesson in own words'], exitTicket: ['Write one fact about Bilal and one sentence that begins “People in Mecca thought …, but …”.'] },
    extraResources: { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] }
  },
  {
    chapter: 'Chapter 2: The Age of Ignorance',
    timing: '40 minutes',
    objectives: [
      'Name the problems of the Age of Ignorance in the chapter: idols, no real peace and justice, a big gap between rich and poor, and unfair extra money (faiz).',
      'Explain with the chapter’s words how faiz made the gap bigger.',
      'Notice how “But” joins two very different lives, and use was called, there was, a lot of, because of this and became + richer/poorer.',
      'Give one simple example of a fair action between people with more and people with less.'
    ],
    pedagogy: 'Make the gap visible. Draw a line down the board: rich people on one side, poor people on the other, and learners fill each side with words from the text (gold plates, silver cups / lived in need). Then build the chain of the third paragraph with arrows: lent money → wanted more money back (faiz) → the rich became richer and the poor became poorer. The grammar question comes from the picture: “Are these two sentences about the same kind of life? Which word tells us?”',
    priorKnowledge: ['rich, poor, money, and there is / there are in the present.'],
    anticipatedMisconceptions: ['“Ignorance” here does not mean people knew nothing. The Word Note says: not knowing or not following the truth.', 'The chapter does not say every rich person was unfair. It says “some rich people” lent money and wanted more back.'],
    grammarFocus: 'Targets: But for a very different situation · was called for a name · there was (+ no) for something that existed or did not exist · a lot of + money (not many money) · Because of this for a result · became + richer / poorer for a change.\nNotice (Activity 1): Board “They used gold plates and silver cups. But many poor people lived in need.” Ask: “Is this the same life? What does But show?” Learners say it joins two different pictures.\nBuild (Activities 2–3): complete the lines with was called / There was / a lot of (ask: “Can we count money?”), then build “Because of this, the rich became richer and the poor became poorer.” and point back: “What is this?” (the unfair extra money).\nLikely errors: *many money · *There were no real peace · *was call · *became more rich.\nUse (Activity 4): four sentences about an imaginary town in the past with there was, a lot of or many, but, and because of this.',
    pronunciationFocus: 'Weak forms: “there was” /ðəwəz/, “a lot of” /əˈlɒtəv/.\nContrastive stress in the result: “the RICH became RICHer | and the POOR became POORer.”\n-ed endings: called /d/, lived /d/, used /d/, worshipped /t/, wanted /ɪd/.\nWord focus: ja-hi-LIY-yah, IG-no-rance, JUS-tice, LUX-u-ry, I-dols, so-CI-e-ty. The word faiz is the Turkish word learners already know. It is read as in the text.',
    beforeReading: ['Show or describe two tables: one with gold plates and silver cups, one with almost nothing. Ask: “Who eats here? Who eats there?” Collect two ideas for each table.'],
    duringReading: ['Listen for gist: how many problems do you hear?', 'Three colours: belief (idols), society (peace and justice), money (rich and poor, faiz).', 'Fill the rich / poor sides of the board with words from paragraph 2.', 'Draw the arrows of paragraph 3 from lending to the result.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at “But” in Activity 1, practise was called / There was / a lot of and the result sentence in Activities 2–3, then Use in Activity 4.', 'Say one fair way to help a friend who has less, without asking for more back.'],
    lessonPlan: '0–4 Hook: two tables (gold and silver / almost nothing), pairs guess who eats at each one; 4–11 Listen and count the problems, then read and colour belief / society / money; 11–17 Board line: learners come up and write words from the text on the rich side and the poor side, then pairs draw the faiz arrows (lent → wanted more back → richer / poorer); 17–21 Quick Challenge; 21–30 Language Focus: Activity 1 as whole-class discovery (What does But show?), Activities 2–3 in pairs, choral reading of the result sentence with contrastive stress; 30–37 Use: pairs invent a town in the past and say four sentences (There was … / Many people … but … / Because of this …), then write them; 37–40 Exit ticket.',
    discussionPoints: ['What did many people worship instead of Allah?', 'Which words show the life of rich people, and which show the life of poor people?', 'How did faiz make the gap bigger?'],
    interactiveTips: ['Use the Jahiliyyah hotspot for the first paragraph and Rich and Poor for the gap.', 'Replay the faiz sentences and ask learners to point to “Because of this”.', 'Check that learners do not change “some rich people” into “all rich people”.'],
    differentiation: {
      strugglingLearners: 'Give the frame: “There was ____. Rich people had a lot of ____, but poor people ____. Because of this, ____ became ____.” Learners fill it with words from the board.',
      fastFinishers: 'Write five sentences about an imaginary town: one name with “was called”, one “there was no …”, one contrast with but and one result with because of this.'
    },
    formativeAssessment: ['Names at least two problems of the time with words from the text.', 'Uses a lot of with money and there was correctly.', 'Explains the faiz chain with because of this.'],
    expectedResponses: ['Many people worshipped idols, there was no real peace and justice, and there was a big gap between rich and poor.', 'Some rich people wanted more money back (faiz). Because of this, the rich became richer and the poor became poorer.'],
    transferTask: 'Describe one fair way to share or lend something in class without making anyone “poorer”.',
    teacherReflection: 'Did the board line and the arrows help learners explain the gap with the chapter’s own words, and did they find what “But” does before I explained it?',
    assessmentTools: { rubric: ['Problems from the text', 'Contrast with but', 'there was / a lot of', 'Cause and result'], exitTicket: ['Write one “but” sentence about rich and poor people and one “Because of this, …” sentence.'] }
  },
  {
    chapter: 'Chapter 3: Slaves in Mecca',
    timing: '40 minutes',
    objectives: [
      'Describe the slave system with the chapter’s facts: slave markets in Arabia, Mecca as a center, slaves from different lands, especially Abyssinia.',
      'Identify Umayya: Bilal’s master, one of the richest and most powerful leaders, an enemy of Islam.',
      'Notice how “were getting poorer” shows a change that goes on, and use a center for + -ing, from + place, When + past, the most + adjective and one of the + superlative + plural noun.',
      'Keep one person (Umayya) separate from all the people of Mecca.'
    ],
    pedagogy: 'Use a “zoom” diagram: four circles inside each other on the board, Arabia → Mecca → the homes of Meccan people → Bilal and his master Umayya. Learners fill each circle with one quoted sentence. This moves from the system to one person and stops learners from turning Umayya into a picture of every Meccan. The grammar starts with a meaning question about the first sentence: “Did the poor become poorer one time, or again and again?”',
    priorKnowledge: ['Comparatives (richer, poorer) and the rich–poor gap from Chapter 2.'],
    anticipatedMisconceptions: ['Umayya is one person. The chapter does not say that every Meccan acted like him.', 'Power and money in the chapter do not decide a person’s value (link back to Chapter 1).'],
    grammarFocus: 'Targets: were getting + poorer/richer for a change that goes on · the most + adjective · a center for + -ing · from + place, especially from · When + past · one of the + superlative + plural noun · wanted + thing + to + verb.\nNotice (Activity 1): Board “the poor were getting poorer”. Ask: “Did this happen one time or slowly, day after day?” Learners match four phrases with their meanings and find that “were getting” = a change that goes on.\nBuild (Activities 2–3): choose buying / from / started, then build “Umayya was one of the richest and most powerful leaders in Mecca.” Ask: “One leader or many leaders after one of the …?”\nLikely errors: *a center for buy · *one of the richest leader · *When Prophet Muhammad (pbuh) starts · *wanted this message stop.\nUse (Activity 4): four sentences about an imaginary city: a place, a change, a comparison and what someone wanted.',
    pronunciationFocus: 'Chunk the change: “the POOR were GETting POORer | and the RICH were GETting RICHer.”\nSuperlative group with stress on the key words: “one of the RICHest | and MOST POWerful LEADers | in MECca.”\n“Buying and selling” as one chunk: /ˈbaɪɪŋ ən ˈselɪŋ/.\nWord focus: ab-ys-SIN-i-a, u-MAY-ya, SYS-tem, COM-mon, POW-er-ful, MAS-ter.',
    beforeReading: ['Ask: “Is a rule of a city the same as every person in the city?” Give a neutral example (a city has a lot of traffic, but not every person drives). Learners say one more example.'],
    duringReading: ['Listen: which places do you hear? (Arabia, Mecca, Abyssinia)', 'Fill the zoom circles: Arabia / Mecca / homes / Bilal and Umayya, one quoted sentence each.', 'Circle the words that show Umayya’s money and power.', 'Underline the last sentence: what did Umayya want?'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at the meaning of four phrases in Activity 1, practise the forms in Activities 2–3 (center for buying, from, started, one of the richest … leaders), Use in Activity 4.', 'Say in one sentence why power does not decide the value of a person.'],
    lessonPlan: '0–4 Hook: “a city” vs “every person in the city” with the traffic example, learners give one more; 4–11 Listen for the places, then read along; 11–18 Zoom diagram: pairs fill four circles (Arabia / Mecca / homes / Bilal and Umayya) with one quoted sentence each, one pair completes the board version; 18–22 Quick Challenge; 22–31 Language Focus: Activity 1 as whole-class discovery (one time or again and again?), Activities 2–3 in pairs, then a quick chain drill “one of the richest … / one of the most powerful …” with plural nouns; 31–37 Use: groups of three invent a city and each learner says one or two sentences (It was a center for … / People were getting … / … was one of the most … / … wanted …), then all write four; 37–40 Exit ticket.',
    discussionPoints: ['What was Mecca a center for?', 'Where did many slaves come from?', 'What does the chapter say about Umayya, and what does it not say about all Meccans?'],
    interactiveTips: ['Use the Slave Markets hotspot for the system and the Umayya hotspot for the person.', 'Replay “one of the richest and most powerful leaders” and ask learners to count the words that show power.', 'Talk about slave markets calmly and factually. Do not use role-play of buying or selling people.'],
    differentiation: {
      strugglingLearners: 'Use two boxes (Mecca / Umayya) and two frames: “Mecca was a center for ____.” and “Umayya was one of the ____ leaders in Mecca.”',
      fastFinishers: 'Write five sentences about an imaginary city with were getting, a center for + -ing, one of the + superlative, When + past and wanted … to ….'
    },
    formativeAssessment: ['Separates facts about the system from facts about Umayya.', 'Uses one of the + plural noun and a center for + -ing correctly.', 'Explains that “were getting poorer” is a change that goes on.'],
    expectedResponses: ['Mecca was a center for buying and selling slaves, and many slaves came from different lands, especially from Abyssinia.', 'Umayya was Bilal’s master. He was one of the richest and most powerful leaders in Mecca and wanted the message of Islam to stop.'],
    transferTask: 'Explain in two sentences why a person with more power must still respect people with less power.',
    teacherReflection: 'Did the zoom diagram keep the system and the one person apart, and did learners discover the meaning of “were getting” before I explained it?',
    assessmentTools: { rubric: ['System facts', 'Person facts', 'were getting / one of the …', 'No generalisation'], exitTicket: ['Write one sentence about Mecca (a center for …) and one about Umayya (one of the …).'] }
  },
  {
    chapter: 'Chapter 4: Bilal’s Hard Life',
    timing: '40 minutes',
    objectives: [
      'Describe Bilal’s day with the chapter’s facts: camels, the hot sun, the desert all day, food and wine in the evening.',
      'Separate Bilal’s hard work from the way the family treated him (unkind, rude, no respect, a hurtful name).',
      'Notice how always, often and all day say how often or how long, and how his job was to and had to say what Bilal must do, and use to + verb for a reason, did not + base verb and every + singular noun.',
      'Understand patience as Bilal’s strength, not as proof that the treatment was acceptable.'
    ],
    pedagogy: 'Draw a simple clock of Bilal’s day on the board (day / evening / every day). Learners place the chapter’s actions on the clock and then find the words that say “how often” and “what he had to do”. Keep a second column for how people treated him. The grammar is discovered with one sorting question: “Does this part tell us how often, or does it tell us Bilal’s job?”',
    priorKnowledge: ['Daily-routine language, always/often in the present, and must.'],
    anticipatedMisconceptions: ['“Bilal had to be patient” does not mean the chapter accepts the unkind treatment. It shows he had no choice.', 'The name “the son of the black woman” was used to hurt him. It is read in the text and discussed, but never used by learners about anyone.'],
    grammarFocus: 'Targets: always / often / all day / every day (how often, how long) · his job was to + verb · had to + verb (a duty, no choice) · to + verb for a reason (to hurt his feelings) · did not + base verb · every + singular noun + was (= all of them).\nNotice (Activity 1): learners sort six parts of the chapter into “how often or how long” and “Bilal’s job or duty”. Ask: “Which words helped you?”\nBuild (Activities 2–3): fix “for hurt” → to hurt and “did not respected” → did not respect, then decide what “Every member of the family was rude to him” means (all of them). Ask: “One member or all? Why is the verb was?”\nLikely errors: *for hurt · *did not respected · *Every members were · *had to worked.\nUse (Activity 4): four sentences about a difficult daily routine of an imaginary person (a farmer, a shepherd, a night nurse) with one time word, one duty and one reason.',
    pronunciationFocus: 'Weak form: “had to” /ˈhæftə/, “to hurt” /tə hɜːt/.\nChunk the routine: “he LOOKED after his MASter’s CAMels | and WORKED under the HOT SUN | … all DAY.”\n-ed endings: looked /t/, worked /t/, called /d/.\nWord focus: HA-tred, HARSH, PA-tient (/ʃ/), DES-ert (not des-SERT), CAM-els, NEG-a-tive.',
    beforeReading: ['Ask: “What is the difference between hard work and unfair treatment?” Give two quick examples (carrying heavy books / being called a bad name). Learners say which is which.'],
    duringReading: ['Listen: what did Bilal do in the day, and in the evening?', 'Put the actions on the day clock.', 'Second column: how the family treated Bilal (always very unkind, rude, did not respect him, a hurtful name).', 'Circle always, often, all day, every day.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look (sort how often / job in Activity 1), Practise (fix the two mistakes and find the meaning of every in Activities 2–3), Use (Activity 4).', 'Change one unkind action from the chapter into a respectful action in the classroom.'],
    lessonPlan: '0–4 Hook: hard work or unfair treatment? two quick examples, learners decide; 4–11 Listen for day and evening, then read along; 11–18 Pairs put Bilal’s actions on the day clock and list the treatment in a second column, every item with words from the text; 18–22 Quick Challenge; 22–31 Language Focus: Activity 1 as discovery with the day clock still on the board, Activities 2–3 in pairs, then choral practice “had to” in weak form; 31–37 Use: pairs choose an imaginary job, one learner mimes a daily action (no suffering or violence), the partner says a sentence (Every day he had to … / His job was to …), then both write four sentences; 37–40 Exit ticket.',
    discussionPoints: ['What was Bilal’s job in the day and in the evening?', 'Which sentences show no respect, and not only hard work?', 'Why did Bilal have to be patient?'],
    interactiveTips: ['Use the Hard Work hotspot for the day clock and No Respect for the second column.', 'Replay the sentence with “to hurt his feelings” and ask why they used that name.', 'Do not act out rude or degrading treatment. Talk about it in the third person.'],
    differentiation: {
      strugglingLearners: 'Give four frames: “Every day he ____.” / “His job was to ____.” / “He had to ____.” / “They did not ____.”',
      fastFinishers: 'Write five sentences comparing Bilal’s duties and how people treated him, with always, all day, had to, to + verb and did not.'
    },
    formativeAssessment: ['Separates work, duty and treatment.', 'Uses had to and did not + base verb correctly.', 'Understands every + singular noun as “all of them”.'],
    expectedResponses: ['Bilal looked after his master’s camels and worked under the hot sun all day. In the evening, his job was to bring food and wine to his master.', 'Umayya was always very unkind, and the family did not respect him as a person. Bilal had to be patient.'],
    transferTask: 'Change one unkind action from the chapter into a respectful action at school.',
    teacherReflection: 'Did learners talk about Bilal’s patience without saying the treatment was acceptable, and did they sort the time words and the duty words themselves?',
    assessmentTools: { rubric: ['Routine facts', 'Work vs treatment', 'had to / to + verb / did not', 'Respectful alternative'], exitTicket: ['Complete: “Every day Bilal had to ____. His job was to ____. A respectful action is ____.”'] }
  },
  {
    chapter: 'Chapter 5: A New Message',
    timing: '40 minutes',
    objectives: [
      'Explain why Bilal thought he would be a slave forever (no money for his freedom, no power to protect himself).',
      'List what Bilal heard about the new Prophet: worship only Allah, be fair and equal, stop worshipping idols.',
      'Notice that “thought he would …” tells us what Bilal expected about his future, and use because, had to, did not have any / had no, taught that … must, told + people + to and stop + -ing.',
      'Stay at this stage of the story: Bilal hears the message, he is not free yet.'
    ],
    pedagogy: 'Use a “before the message / the message” board. On the left, learners list what Bilal did not have (money, power, hope). On the right, what he heard. A think-pair-share question joins them: “Why could these words be important for a man like Bilal?” The grammar starts with a true/false question about his thought, so learners discover that “would” here means Bilal’s future as he saw it.',
    priorKnowledge: ['Bilal’s work and treatment from Chapter 4; had to.'],
    anticipatedMisconceptions: ['Hearing the message does not make Bilal free in this chapter.', 'Umayya “liked” Bilal only because he was obedient and hardworking. It does not mean Umayya was kind to him.'],
    grammarFocus: 'Targets: thought + would for an expected future · because + sentence for a reason · had to + verb · did not have any + noun / had no + noun to + verb · taught that … must · told + people + to + verb · stop + -ing.\nNotice (Activity 1): Board “Bilal thought he would be a slave forever.” Ask: “Did Bilal think he would be free soon? Is this about his past or his future?” Learners say: “would” = what he expected.\nBuild (Activities 2–3): match four phrases about Bilal’s situation with their meanings, then complete “He taught that people must … He told the people of Mecca to stop worshipping idols.” Ask: “After stop, what form do we use?”\nLikely errors: *He thought he will be · *did not have no money · *told the people stop · *stop to worship (a different meaning) · *must to be.\nUse (Activity 4): four sentences about a new rule or idea you heard (for example a new school rule): I thought … would …, I heard …, They told us to …, We must ….',
    pronunciationFocus: 'Chunk the expectation: “biLAL THOUGHT | he would be a SLAVE | forEVer.”\nWeak forms: “had to” /ˈhæftə/, “to stop” /tə stɒp/, “would be” /wəd bi/.\nThe Prophet’s words are read slowly and calmly, as in the text: “WORship ONE alLAH. alLAH creATed the WORLD.”\nWord focus: o-BE-di-ent, hard-WORK-ing, FREE-dom, E-qual, WOR-ship-ping, be-HAV-iour.',
    beforeReading: ['Recall from Chapter 4: “What did Bilal have to do every day?” Then ask: “What kind of news could give such a person hope?” Keep two ideas as predictions.'],
    duringReading: ['Listen: what did Bilal not have? (money, power)', 'Left side of the board: before the message. Right side: the message.', 'Underline the reason in the first sentence (because …).', 'Put the Prophet’s words in a speech bubble and read them without changing them.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at “thought … would” in Activity 1, practise the situation and the message in Activities 2–3, Use in Activity 4.', 'Say one way to treat a person with less power fairly.'],
    lessonPlan: '0–4 Recall: one duty of Bilal from Chapter 4, then “What news could give him hope?”; 4–11 Listen and read, learners note what Bilal did not have; 11–18 Board “before the message / the message”, pairs add a quoted phrase to each side, then think-pair-share: why could these words matter to Bilal?; 18–22 Quick Challenge; 22–31 Language Focus: Activity 1 as whole-class discovery (his past or his future?), Activities 2–3 in pairs, then a quick oral drill with stop + -ing (stop talking, stop running); 31–37 Use: learners tell a partner about a new rule they heard at school or at home (I thought … would … / They told us to … / We must …), then write four sentences; 37–40 Exit ticket.',
    discussionPoints: ['Why did Bilal think he would be a slave forever?', 'What did the new Prophet teach, according to the chapter?', 'Why could the words “fair and equal” be important for Bilal?'],
    interactiveTips: ['Use the No Freedom hotspot for the left side of the board and The New Message for the right side.', 'Replay “Bilal thought he would be a slave forever” before Activity 1.', 'Stop learners who jump ahead to Bilal’s freedom. Ask: “Is he free in this chapter?”'],
    differentiation: {
      strugglingLearners: 'Frames: “Bilal had no ____. He thought he would ____. He heard that people must ____.”',
      fastFinishers: 'Write five sentences with because, thought … would, did not have any, told … to and stop + -ing about a person who hears new, important news.'
    },
    formativeAssessment: ['Gives the two reasons from the text why Bilal had no hope.', 'Lists the message correctly without adding ideas.', 'Uses thought … would, told … to and stop + -ing correctly.'],
    expectedResponses: ['Bilal thought he would be a slave forever because he did not have any money for his freedom and had no power to protect himself.', 'He heard that the Prophet (pbuh) told everyone to worship only Allah, taught that people must be fair and equal, and told the people of Mecca to stop worshipping idols.'],
    transferTask: 'Give one example of treating a person with less power fairly at school.',
    teacherReflection: 'Did learners stay in this chapter’s stage of the story, and did the true/false question help them find what “would” means?',
    assessmentTools: { rubric: ['Situation evidence', 'Message evidence', 'thought … would / told … to / stop + -ing', 'Fairness transfer'], exitTicket: ['Finish: “Bilal thought he would ____. Then he heard that ____.”'] }
  },
  {
    chapter: 'Chapter 6: Visiting Abu Bakr',
    timing: '40 minutes',
    objectives: [
      'Retell Bilal’s visit to Abu Bakr in the right order (thinking, deciding, leaving secretly, arriving, asking questions).',
      'Explain why Bilal went: to ask about the new religion, because he knew Abu Bakr believed in the message and was kind to slaves.',
      'Notice that in “He did not want anyone to see him” the person after “want” does the action, and use think about, decided to, When + past and started to.',
      'Connect asking good questions with learning about something important.'
    ],
    pedagogy: 'Turn the chapter into a path. Draw a simple map on the board: Bilal’s room → the hidden path → Abu Bakr’s door → inside. Learners put six action cards in order on the path while they listen. Then ask why Bilal went at night and on a hidden path. The grammar grows from that question: “Who did Bilal not want to see him?” Learners discover how “want + person + to + verb” works.',
    priorKnowledge: ['The message Bilal heard in Chapter 5; past forms of walk, knock, arrive.'],
    anticipatedMisconceptions: ['Bilal did not visit Abu Bakr to ask for money or freedom. He went to ask questions about the new religion.', 'Learners may read “He did not want anyone to see him” as “He did not want to see anyone”.'],
    grammarFocus: 'Targets: did not want + person + to + verb · think about + topic · decided + to + verb · When + past sentence · started + to + verb.\nNotice (Activity 1): Board “He did not want anyone to see him.” Ask: “Who might see? Who is afraid?” Learners find that “anyone” is the person who might do the action.\nBuild (Activities 2–3): choose about / to visit / When, then build “He started to ask many questions about the new religion.” Ask: “Did he ask one question and stop?”\nLikely errors: *thought on the message · *decided visiting · *did not want anyone see him · *During he arrived ….\nUse (Activity 4): four sentences about a safe surprise visit (for example to a grandparent on a birthday): I thought about …, I decided to …, When I arrived …, I started to ….',
    pronunciationFocus: '-ed endings in the path: walked /t/, knocked /nɒkt/ (k is silent), decided /ɪd/, arrived /d/, started /ɪd/.\nChunk the arrival: “WHEN he arRIVED at abu BAKR’s HOUSE, | he KNOCKED on the DOOR | and went inSIDE.”\n“He did not WANT | ANyone to SEE him” with stress on ANyone.\nWord focus: cre-A-tor, cre-A-tion, SE-cret-ly, HID-den, re-LI-gion.',
    beforeReading: ['Ask: “When you want to understand a new idea, who do you ask?” Learners name one person and say why they trust that person.'],
    duringReading: ['Listen and order six action cards on the board path.', 'Circle the words that show it was a secret (night, very dark, secretly, hidden path).', 'Underline why Bilal chose Abu Bakr (he believed in the message, he was kind to slaves).', 'Box what Bilal did inside (started to ask many questions).'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at “did not want anyone to” in Activity 1, practise think about / decided to / When and “started to ask” in Activities 2–3, Use in Activity 4.', 'Write one good question you would ask to understand something new.'],
    lessonPlan: '0–4 Hook: who do you ask when you want to understand a new idea? two learners answer; 4–11 Listen and put six action cards on the board path, then read along to check; 11–17 Pairs retell the visit with the cards (first, then, when, after that), one pair tells the class, others correct the order; 17–21 Quick Challenge; 21–30 Language Focus: Activity 1 as discovery (Who might see?), Activities 2–3 in pairs, then choral -ed endings (walked, knocked, decided, arrived, started); 30–37 Use: pairs plan a safe surprise visit and tell it in four sentences (I thought about … / I decided to … / When I arrived … / I started to …), then write it; 37–40 Exit ticket.',
    discussionPoints: ['What did Bilal think about in the desert?', 'Why did Bilal walk on a hidden path?', 'Why did he choose Abu Bakr?'],
    interactiveTips: ['Use A Secret Visit for the path and the Abu Bakr hotspot for the reasons.', 'Replay “He did not want anyone to see him” and ask who could see him.', 'Keep the visit calm. The chapter shows fear, but no danger happens on the path.'],
    differentiation: {
      strugglingLearners: 'Give the path cards with the first words: “Bilal thought about …”, “He decided to …”, “When he arrived …”, “He started to …”.',
      fastFinishers: 'Retell the chapter in six sentences with first, then, when and at the end, and add one sentence with “did not want anyone to …”.'
    },
    formativeAssessment: ['Retells the visit in the right order.', 'Gives the reason for the visit from the text.', 'Uses decided to, When + past and started to correctly.'],
    expectedResponses: ['Bilal thought about the message of Islam, decided to visit Abu Bakr, left his room secretly and walked on a hidden path. When he arrived, he knocked on the door and started to ask many questions.', 'He chose Abu Bakr because he knew Abu Bakr believed in the message and everybody knew he was very nice to slaves.'],
    transferTask: 'Write one good question you can ask a teacher or a family member to understand something new.',
    teacherReflection: 'Did the path help learners keep the order, and did they understand the purpose of the visit (to ask questions) rather than inventing a rescue?',
    assessmentTools: { rubric: ['Sequence', 'Reason for the visit', 'decided to / When / started to', 'Good question'], exitTicket: ['Write two sentences: “Bilal decided to ____. When he arrived, ____.”'] }
  },
  {
    chapter: 'Chapter 7: Bilal Accepts Islam',
    timing: '40 minutes',
    objectives: [
      'Follow Bilal’s long night: from what Abu Bakr told him to his final decision.',
      'Explain both sides of his decision: life would be difficult, but the religion of Allah was the truth.',
      'Notice how After + past and In the end put events in order, and use knew that … would, could not + base verb, was happy to + verb and stayed awake.',
      'Talk about a hard but right choice in a safe, everyday situation.'
    ],
    pedagogy: 'Draw a balance on the board. On one side learners write what would be hard (life would be difficult). On the other side what Bilal also knew (the truth, the right thing to do). The balance shows why the decision took a whole night. Then learners order five sentences of the chapter and discover how After and In the end tell us when things happen.',
    priorKnowledge: ['Chapter 6: the visit to Abu Bakr; could and would.'],
    anticipatedMisconceptions: ['Bilal did not decide quickly or without fear. The chapter says he could not sleep and knew life would be difficult.', '“Allah has no partners or equals, not even a rich master or powerful people” does not describe a person. It explains “There is no god but Allah”.'],
    grammarFocus: 'Targets: After + past sentence · In the end for the final result · knew that + would (a future idea in a past story) · could not + base verb · was happy to + verb · stayed + adjective (stayed awake) · told + person + that.\nNotice (Activity 1): learners order five sentences from the chapter. Ask: “Which words helped you? What does In the end tell us?”\nBuild (Activities 2–3): choose would / sleep (“He knew that life would be difficult”, “He could not sleep”), then match supported, was very happy to hear this, the right thing to do and stayed awake with their meanings.\nLikely errors: *He knew that life will be difficult · *could not slept · *was happy for hear this · *After Bilal meet Abu Bakr.\nUse (Activity 4): four sentences about a difficult but safe choice (for example joining a new team or telling the truth): I knew that it would be …, but I also knew …, After …, In the end ….',
    pronunciationFocus: 'Chunk the two sides: “he KNEW | that LIFE would be DIFficult” / “BUT he ALso KNEW | that …”.\nSilent l: would /wʊd/, could /kʊd/.\nThe sentence “Islam says there is no god but Allah” is read slowly and exactly as in the text.\nWord focus: sup-POR-ted, ac-CEP-ted, PART-ners, E-quals, a-WAKE, DIF-fi-cult, TRUTH (/θ/).',
    beforeReading: ['Show a drawing of a balance. Ask: “When do you need a whole night to decide something?” Learners give one safe example.'],
    duringReading: ['Listen: where was Bilal during the night, and what did he do?', 'Put quotes on the balance: what would be hard / what he also knew.', 'Underline After, In the end and When.', 'Circle how Abu Bakr felt when he heard Bilal’s wish.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look (order the story in Activity 1), Practise (would / could not sleep and the meaning of four phrases in Activities 2–3), Use (Activity 4).', 'Say one hard but right choice a student can make at school.'],
    lessonPlan: '0–4 Hook: the balance drawing, learners give a safe example of a decision that takes time; 4–11 Listen and read, learners note where Bilal was and what he did at night; 11–17 Pairs fill the balance with quoted phrases (life would be difficult / the truth / the right thing to do), whole-class check; 17–21 Quick Challenge; 21–30 Language Focus: Activity 1 with paper strips on the desks first, learners explain each time word, then Activities 2–3 in pairs; 30–37 Use: think-pair-share about a hard but safe choice, learners tell it with “I knew that it would be … but …” and “In the end …”, then write four sentences; 37–40 Exit ticket.',
    discussionPoints: ['What did Abu Bakr tell Bilal about the new religion?', 'Why could Bilal not sleep?', 'What two things did Bilal know before his decision?'],
    interactiveTips: ['Use No God but Allah for the first paragraph and A Brave Choice for the balance.', 'Replay the night sentences and let learners count the actions (went back, could not sleep, stayed awake, thought).', 'Treat Umayya’s anger at the end only as a bridge to the next chapter.'],
    differentiation: {
      strugglingLearners: 'Frames: “Bilal knew that life would be ____. But he also knew that ____. In the end, he ____.”',
      fastFinishers: 'Write six sentences about a hard choice with After, could not, knew that … would, but also and In the end.'
    },
    formativeAssessment: ['Orders the events with the help of time words.', 'Explains both sides of the decision with the text.', 'Uses would after knew that and could not + base verb.'],
    expectedResponses: ['After Bilal met Abu Bakr, he went back home. He could not sleep and thought about his life. He knew that life would be difficult, but he also knew that the religion of Allah was the truth. In the end, he accepted Islam.', 'Abu Bakr supported Bilal and was very happy to hear this.'],
    transferTask: 'Describe a hard but right choice a student can make, and say why it is right.',
    teacherReflection: 'Did the balance show both sides of Bilal’s decision, and did learners find the job of After and In the end themselves?',
    assessmentTools: { rubric: ['Order of events', 'Both sides of the decision', 'would / could not / In the end', 'Safe personal choice'], exitTicket: ['Write: “Bilal knew that life would ____, but ____. In the end, ____.”'] }
  },
  {
    chapter: 'Chapter 8: Allah Is One',
    timing: '40 minutes',
    objectives: [
      'Say who says what in the chapter: Umayya’s questions and threat, Bilal’s answers.',
      'Explain Bilal’s patience: he refused to worship idols and only said “Allah is One”.',
      'Notice how “forced … to …, but … refused” shows pressure and a no, and use Did + person + base verb in questions, If + present … will, helped + person + to, Now + present and When + past.',
      'Practise refusing unfair pressure politely in a safe, everyday situation.'
    ],
    pedagogy: 'This chapter describes violence. Read the third paragraph once yourself, calmly, and do not stop on the details. Build the lesson on voices: learners put Umayya’s words and Bilal’s words in two speech bubbles and see that Bilal’s answer never changes. The grammar starts from “He forced him …, but Bilal refused”: learners discover that “but” and “refused” carry Bilal’s answer. Transfer stays in safe situations (a friend asks you to copy homework).',
    priorKnowledge: ['Chapter 7: Bilal’s decision and Umayya’s anger; past questions with did.'],
    anticipatedMisconceptions: ['“This magic man Muhammad” is Umayya’s insult, not the narrator’s view. Learners never repeat it as their own sentence.', 'Umayya’s promise (“you will be free”) is a condition he offers, not something that happens.'],
    grammarFocus: 'Targets: forced + person + to + verb … but … refused · past question Did + person + base verb · If + present, … will + verb · helped + person + to + verb · Now + present simple · When + past.\nNotice (Activity 1): Board “He forced him to look at idols and worship them, but Bilal refused.” Ask: “What did Umayya want? What did Bilal do? Which word is Bilal’s no?”\nBuild (Activities 2–3): fix “Did you left” → Did you leave and “you would be free” → you will be free, then choose to find / believe / heard in Bilal’s answer and Umayya’s reaction.\nLikely errors: *Did you left · *If you speak …, you would be free · *helped me finding · *Now I believed · *forced him look.\nUse (Activity 4): four sentences about refusing unfair pressure in a safe situation (a friend asks you to copy homework): a question, a refusal, an if-sentence and a short answer.',
    pronunciationFocus: 'Yes/no questions rise: “Is it TRUE?↗ | Did you LEAVE our reLIgion …?↗”\nBilal’s answer is firm and calm, not shouted: “YES, | alLAH HELPED me | to FIND the RIGHT WAY.”\nCondition and result: “If you SPEAK well of our Idols, | you will be FREE.”\n-ed endings: locked /t/, forced /t/, refused /d/, whipped /t/.\nWord focus: AN-gri-ly, re-FUSED, I-dols, re-LI-gion, TRUE.',
    beforeReading: ['Ask: “What is the difference between asking someone and forcing someone?” Learners give one safe school example of each.'],
    duringReading: ['Listen: how many times does Umayya speak? What does Bilal answer?', 'Two speech bubbles: Umayya’s words / Bilal’s words.', 'Underline forced and refused.', 'Listen to the teacher read the last paragraph once, then find Bilal’s last words only.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at forced / refused in Activity 1, practise the past question and the if-sentence in Activity 2 and Bilal’s answer in Activity 3, Use in Activity 4.', 'Practise one polite, firm refusal for a safe everyday situation.'],
    lessonPlan: '0–4 Hook: asking or forcing? learners give one safe school example of each; 4–12 Listen to paragraphs 1–2 with books open, then the teacher reads paragraph 3 once, calmly, and learners find only Bilal’s last words; 12–18 Pairs fill two speech bubbles (Umayya / Bilal) with the exact words from the text and mark who asks, who threatens, who answers; 18–22 Quick Challenge; 22–31 Language Focus: Activity 1 as whole-class discovery (Which word is Bilal’s no?), Activities 2–3 in pairs, then question intonation practice with “Is it true? Did you …?”; 31–37 Use: pairs write a four-line safe dialogue (a friend asks to copy homework: question, if-sentence, polite refusal, reason), two pairs read it; 37–40 Exit ticket.',
    discussionPoints: ['What did Umayya ask Bilal?', 'What did Umayya try to force Bilal to do, and what did Bilal do?', 'What did Umayya promise, and what did Bilal say?'],
    interactiveTips: ['Use the Allah Is One hotspot for Bilal’s answer and Bilal’s Patience for his refusal.', 'Replay the questions once to hear the rising intonation.', 'Never role-play, draw or act out the punishment. Do not ask learners to describe the pain.'],
    differentiation: {
      strugglingLearners: 'Give the two speech bubbles half-filled and the frames: “Umayya forced Bilal to ____, but Bilal ____.” / “Umayya said: If you ____, you will ____.”',
      fastFinishers: 'Write a six-line safe dialogue with a past question, an if-sentence with will, a refusal with but, and helped … to.'
    },
    formativeAssessment: ['Separates Umayya’s words from Bilal’s words.', 'Uses Did + base verb and If + present … will correctly.', 'Keeps the discussion calm and does not repeat the insult.'],
    expectedResponses: ['Umayya forced Bilal to look at idols and worship them, but Bilal refused.', 'Umayya said, “If you speak well of our idols, you will be free.” But Bilal only said, “Allah is One, Allah is One.”'],
    transferTask: 'Write one polite but firm way to say no when a friend asks you to do something unfair.',
    teacherReflection: 'Did I keep the violent paragraph short and calm, and did learners discover how “but … refused” shows Bilal’s answer?',
    assessmentTools: { rubric: ['Who says what', 'forced / refused', 'Did-question / if … will', 'Safe, calm transfer'], exitTicket: ['Write one question with “Did you …?” and one sentence with “If you …, you will …” about a safe school situation.'] }
  },
  {
    chapter: 'Chapter 9: Abu Bakr Saves Bilal',
    timing: '40 minutes',
    objectives: [
      'Explain what Abu Bakr did when he heard the news: he went right away and asked Umayya to sell Bilal to him.',
      'Understand Abu Bakr’s two questions and Umayya’s answers.',
      'Notice how heard that reports news and right away shows a quick action, and use asked + person + to + verb, did not want to + verb and What did he do …?',
      'Discuss safe ways to help when we hear that someone is being hurt.'
    ],
    pedagogy: 'Organise the lesson around “news → action → questions → request”. Learners find each step in the text and put it on a four-box strip. Then they compare the two speakers: Abu Bakr asks questions and makes a request, Umayya refuses and names a high price. The grammar starts from the first action: “How did Abu Bakr know? How fast did he go?”',
    priorKnowledge: ['Chapter 8: what Umayya did to Bilal; past questions with did.'],
    anticipatedMisconceptions: ['Umayya’s words “I can do whatever I want with him” are his view. The book shows that this view is wrong.', 'Bilal is not free yet at the end of this chapter. Abu Bakr asks again.'],
    grammarFocus: 'Targets: heard that + sentence for news · right away · did not want to + verb · asked + person + to + verb for a request · Wh-question: What did he do …?\nNotice (Activity 1): Board “Abu Bakr heard that Umayya was hurting Bilal very badly. He went to see Umayya right away.” Ask: “How did Abu Bakr know? Did he wait?” Learners match four phrases with their meanings.\nBuild (Activities 2–3): build “Abu Bakr asked Umayya to sell Bilal to him.” (Ask: “Who must act?”), then choose the correct question “What did he do wrong?”\nLikely errors: *What did he did wrong? · *asked Umayya sell Bilal · *asked to Umayya · *did not want set Bilal free.\nUse (Activity 4): four sentences about hearing of a safe everyday problem and helping (a classmate lost a bag): I heard that …, I went right away, I asked …, I asked … to ….',
    pronunciationFocus: 'Wh-questions fall, yes/no questions rise: “WHAT did he do WRONG?↘” / “Is it a CRIME | to beLIEVE in the ONE true alLAH?↗”\nChunk the request: “abu BAKR | ASKED umAYya | to SELL biLAL | to HIM.”\nWeak forms: “to him” /tʊ ɪm/, “can take” /kən teɪk/.\nWord focus: right a-WAY, a-GAIN (/əˈɡen/), CRIME, PRICE, PAIN.',
    beforeReading: ['Ask: “If you hear that a friend has a problem, what is the first thing you can do?” Collect safe actions (tell a teacher, go and ask, help).'],
    duringReading: ['Listen: what did Abu Bakr hear, and what did he do?', 'Four-box strip: news / action / questions / request.', 'Underline Abu Bakr’s two questions.', 'Circle Umayya’s answers and the words “high price”.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at heard that / right away in Activity 1, practise the request and the past question in Activities 2–3, Use in Activity 4.', 'Say one safe way to help when you hear that someone is hurt.'],
    lessonPlan: '0–4 Hook: a friend has a problem, what can you do first? learners list safe actions; 4–11 Listen and read, learners note what Abu Bakr heard and did; 11–17 Pairs fill the four-box strip (news / action / questions / request) with quoted words, then one pair reads Abu Bakr’s lines and another reads Umayya’s lines aloud, calmly and without acting; 17–21 Quick Challenge; 21–30 Language Focus: Activity 1 as discovery (How did he know? Did he wait?), Activities 2–3 in pairs, then intonation practice of the two question types; 30–37 Use: think-pair-share about a safe everyday problem (a lost bag, a sick classmate), learners say and write four sentences with heard that, right away and asked … to; 37–40 Exit ticket.',
    discussionPoints: ['What did Abu Bakr hear, and how quickly did he act?', 'What questions did Abu Bakr ask Umayya?', 'What did Umayya answer, and do you agree with his view? Why not?'],
    interactiveTips: ['Use Abu Bakr Arrives for the news and action boxes and A Request for Freedom for the request.', 'Replay the two questions and ask which one goes up and which one goes down.', 'Keep Bilal’s pain in the background. Do not describe or act it out.'],
    differentiation: {
      strugglingLearners: 'Frames: “Abu Bakr heard that ____. He went ____. He asked Umayya to ____.”',
      fastFinishers: 'Write five sentences about Abu Bakr’s actions and add your own answer to his question “Is it a crime to believe …?” using the chapter’s ideas.'
    },
    formativeAssessment: ['Puts news, action, questions and request in order.', 'Uses asked + person + to + verb correctly.', 'Forms What did … do? correctly.'],
    expectedResponses: ['Abu Bakr heard that Umayya was hurting Bilal very badly, so he went to see Umayya right away and asked him to sell Bilal to him.', 'Umayya did not want to set Bilal free. He said Abu Bakr could take him for a high price.'],
    transferTask: 'Write two safe actions you can take when you hear that a classmate has a problem.',
    teacherReflection: 'Did learners see Abu Bakr’s quick and peaceful action (questions and a request), and did they form the past question without *did … did?',
    assessmentTools: { rubric: ['Order: news → request', 'Speaker’s view', 'heard that / asked … to / What did …?', 'Safe helping action'], exitTicket: ['Write: “Abu Bakr heard that ____. He asked Umayya to ____.”'] }
  },
  {
    chapter: 'Chapter 10: A Free Muslim',
    timing: '40 minutes',
    objectives: [
      'Tell what really happened: Umayya agreed to sell Bilal for five pieces of gold, Abu Bakr moved the rock and freed Bilal.',
      'Separate the real price from the two imagined prices (one piece, one hundred pieces).',
      'Notice how If + past …, I would … talks about an imagined situation, and use agreed to, no longer, could and could …, but did not.',
      'Explain Abu Bakr’s choice: he could keep Bilal as a slave, but he freed him.'
    ],
    pedagogy: 'Put a number line on the board: 1 — 5 — 100 pieces of gold. Learners decide which number is real and which two are only imagined, and prove it with the text. This is the discovery: “If you offered me only one piece …, I would …” is not a real event. Then a before/after chart shows the change in Bilal’s life (a slave → a free Muslim, could worship Allah freely).',
    priorKnowledge: ['Chapter 9: Abu Bakr’s request; could for ability.'],
    anticipatedMisconceptions: ['Nobody offered one piece of gold or asked for one hundred. The real price was five pieces.', 'Abu Bakr bought Bilal, but not to keep him as a slave. He freed him.'],
    grammarFocus: 'Targets: If + past …, I would (still) + verb for an imagined situation · agreed + to + verb · no longer for an old state that has ended · could + verb for a new ability · could + verb, but did not (a choice).\nNotice (Activity 1): Board the number line 1 — 5 — 100. Ask: “What was the real price? Did anyone pay one piece or one hundred?” Learners sort the sentences into “really happened” and “only imagined”.\nBuild (Activities 2–3): choose to sell / longer / could, then decide what “Abu Bakr could keep Bilal as a slave, but he did not” means (it was possible, but he chose to free him).\nLikely errors: *agreed selling · *no more a slave · *If you offered …, I will · *He can worship (in a past story).\nUse (Activity 4): four sentences about a positive change in someone’s situation with agreed to, no longer, could and one imagined if-sentence.',
    pronunciationFocus: 'Contrastive stress on the numbers: “only ONE PIECE of gold” / “FIVE PIECes” / “one HUNdred PIECes”.\nChunk the imagined sentence: “if you ASKED me | for one HUNdred PIECes of GOLD, | I would STILL PAY that PRICE for him.”\n“No LONGer a SLAVE” with a clear stress on LONGer.\n-ed endings: agreed /d/, laughed /t/, moved /d/, rescued /d/, freed /d/.\nWord focus: a-GREED, RES-cued, FREE-ly, DIF-fi-cul-ty, OF-fered.',
    beforeReading: ['Write 1, 5 and 100 on the board. Ask: “In this chapter, one of these numbers is a real price. Which one? Listen and find out.”'],
    duringReading: ['Listen: which number is the real price?', 'Mark the two if-sentences as “imagined”.', 'Number Abu Bakr’s actions (went to Bilal, moved the rock, went to the Prophet with Bilal, told him he was free).', 'Before/after chart: Bilal before this day / after this day.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look (real or imagined in Activity 1), Practise (agreed to / no longer / could and “could …, but did not” in Activities 2–3), Use (Activity 4).', 'Say why Abu Bakr’s choice was a good choice.'],
    lessonPlan: '0–4 Hook: 1, 5 and 100 on the board, learners guess the real price; 4–11 Listen and read, learners check their guess and mark the imagined sentences; 11–17 Number line on the board: pairs place the three prices and label them real / imagined with a quote, then fill the before/after chart; 17–21 Quick Challenge; 21–30 Language Focus: Activity 1 as whole-class discovery with the number line, Activities 2–3 in pairs, then a quick chain: “He is no longer … Now he can …” about safe changes (a new student, a healthy friend); 30–37 Use: learners write four sentences about a positive change (agreed to, no longer, could, If …, I would …) and read them to a partner; 37–40 Exit ticket.',
    discussionPoints: ['What was the real price of Bilal’s freedom?', 'What did Abu Bakr do after he paid?', 'What could Abu Bakr do, and what did he choose?'],
    interactiveTips: ['Use the Rescue hotspot for Abu Bakr’s actions and the Freedom hotspot for the before/after chart.', 'Replay the two if-sentences and ask: “Did this happen?”', 'Keep the focus on freedom and choice, not on Bilal’s pain.'],
    differentiation: {
      strugglingLearners: 'Frames: “Umayya agreed to ____. Bilal was no longer ____. He could ____.”',
      fastFinishers: 'Write five sentences about a positive change, including one imagined if-sentence and one “could …, but did not” sentence.'
    },
    formativeAssessment: ['Separates the real price from the imagined prices.', 'Uses agreed to and no longer correctly.', 'Explains “could …, but did not” as a choice.'],
    expectedResponses: ['Umayya agreed to sell Bilal for five pieces of gold. The one piece and the one hundred pieces are only imagined in the two if-sentences.', 'Abu Bakr could keep Bilal as a slave, but he did not. He freed him, and Bilal could worship Allah freely.'],
    transferTask: 'Describe one way to help someone that gives them more freedom, not more control over them.',
    teacherReflection: 'Did the number line help learners see real vs imagined, and did they explain Abu Bakr’s choice with “could …, but did not”?',
    assessmentTools: { rubric: ['Real vs imagined', 'Order of actions', 'agreed to / no longer / could', 'Choice explained'], exitTicket: ['Write one real sentence and one imagined if-sentence about Chapter 10.'] }
  },
  {
    chapter: 'Chapter 11: The First Call to Prayer',
    timing: '40 minutes',
    objectives: [
      'Describe Bilal’s new place: one of the Prophet’s most beloved and respected friends.',
      'Put the events in order: many years of hardship in Mecca → the Hijrah to Medina → the Prophet chooses Bilal → the first Adhan.',
      'Notice how “Even when” shows that something stayed true in hard times, and use allowed + person + to, wanted / told + person + to, After + event, chose and one of the + plural noun.',
      'Explain why Bilal was chosen, with evidence from the chapter.'
    ],
    pedagogy: 'Make a “Why Bilal?” web. In the middle: “The Prophet chose Bilal.” Around it, learners write the reasons the chapter gives (brave, fearless even when people hurt him, beloved and respected, trusted to stay with the Prophet). Then a short timeline puts Mecca, the Hijrah, Medina and the first Adhan in order. The grammar starts with the sentence about bravery: learners discover that “Even when” means “also in that hard time”.',
    priorKnowledge: ['Chapter 10: Bilal is free; after + event.'],
    anticipatedMisconceptions: ['The first Adhan was in Medina, after the Hijrah, not in Mecca.', '“Even when people hurt him” does not mean he shouted only when he was hurt. It means the pain did not stop him.'],
    grammarFocus: 'Targets: Even when + sentence · allowed + person + to + verb · After + event (After the Hijrah) · wanted + person + to + verb · told + person + to + verb · chose + person · one of the + superlative + plural noun · That is why.\nNotice (Activity 1): Board “Even when people hurt him, he shouted fearlessly …”. Ask: “Did the pain stop him? Which two words tell us?”\nBuild (Activities 2–3): match four phrases (allowed only Bilal to stay with him, After the Hijrah, He chose Bilal, certainly worthy of Bilal) with their meanings, then fix wanted someone to call / told the Muslims to move / one of the … friends.\nLikely errors: *wanted someone call · *told the Muslims move · *one of the most beloved friend · *allowed Bilal stay.\nUse (Activity 4): four sentences about choosing someone for a positive group task (a class representative, a reader at a school event): After …, We wanted someone to …, We chose …, because even when ….',
    pronunciationFocus: 'Chunk the brave sentence: “EVen when PEOple HURT him, | he SHOUTed FEARlessly.”\n“THAT is WHY | …” with a pause after WHY.\nThe words of the Adhan are read slowly and exactly as in the text: “alLAH is the GREATest, alLAH is the GREATest.”\nWord focus: be-LOV-ed (/bɪˈlʌvɪd/), re-SPEC-ted, HARD-ship, HIJ-rah, FEAR-less-ly, WOR-thy (/ð/), CER-tain-ly, me-DI-na.',
    beforeReading: ['Ask: “When a class chooses someone for an important job, what do they look for?” Collect three qualities (brave, trusted, kind …).'],
    duringReading: ['Listen: which city do the Muslims move to?', 'Timeline: many years of hardship in Mecca → the Hijrah → the Prophet wants someone → he chooses Bilal → the first Adhan.', 'Fill the “Why Bilal?” web with quoted words.', 'Underline Even when and That is why.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at “Even when” in Activity 1, practise meanings and the patterns wanted / told / allowed + person + to and one of the … friends in Activities 2–3, Use in Activity 4.', 'Compare the class’s qualities list with the reasons in the chapter.'],
    lessonPlan: '0–4 Hook: qualities we look for when we choose someone for an important job, three on the board; 4–11 Listen and read, learners find the new city and the first Adhan; 11–18 Groups of three: one learner builds the timeline, one fills the “Why Bilal?” web, one checks every item against the text, then they compare with the qualities list; 18–22 Quick Challenge; 22–31 Language Focus: Activity 1 as whole-class discovery (Did the pain stop him?), Activities 2–3 in pairs, then a quick drill “The teacher wanted / told / allowed us to …”; 31–37 Use: pairs describe a positive class task and who they would choose, four sentences with After, wanted someone to, chose and even when; 37–40 Exit ticket.',
    discussionPoints: ['What was Bilal’s new place near the Prophet (pbuh)?', 'Where did the Muslims move, and what did the Prophet want after the Hijrah?', 'Why was the first Adhan “certainly worthy of Bilal”?'],
    interactiveTips: ['Use the Hijrah hotspot for the timeline and First Adhan for the “Why Bilal?” web.', 'Replay the Even when sentence before Activity 1.', 'The words of the Adhan are listened to and read. They are not used in grammar practice or changed.'],
    differentiation: {
      strugglingLearners: 'Frames: “After the Hijrah, the Prophet wanted someone to ____. He chose ____ because ____.”',
      fastFinishers: 'Write five sentences about Bilal’s journey from Mecca to the first Adhan with After, That is why, Even when and one of the ….'
    },
    formativeAssessment: ['Orders Mecca, Hijrah, Medina and the first Adhan correctly.', 'Gives two reasons for choosing Bilal from the text.', 'Uses want / tell / allow + person + to + verb correctly.'],
    expectedResponses: ['After the Hijrah, the Prophet (pbuh) wanted someone to call people to prayer, and he chose Bilal.', 'Bilal was very brave: even when people hurt him, he shouted fearlessly. That is why giving the first Adhan was certainly worthy of him.'],
    transferTask: 'Say who you would choose for a class task and give one reason based on the person’s actions, not their background.',
    teacherReflection: 'Did learners connect the choice of Bilal with his actions and character from the text, and did they discover “Even when” themselves?',
    assessmentTools: { rubric: ['Timeline', 'Reasons from the text', 'want / tell / allow + person + to', 'Fair choice transfer'], exitTicket: ['Write one sentence with “After the Hijrah, …” and one with “Even when …, …”.'] }
  },
  {
    chapter: 'Chapter 12: Prayer Is Better Than Sleep',
    timing: '40 minutes',
    objectives: [
      'Describe Bilal’s morning habit and the words he added to the morning Adhan.',
      'Explain the Prophet’s teaching in the Farewell Sermon: all people are equal, no skin color is better than another, all people come from Adam and Eve.',
      'Notice how “used to” describes a past habit, and use which means, all + plural noun + are, better than, It is wrong to + verb and because of + noun.',
      'State one fair principle for school life.'
    ],
    pedagogy: 'The chapter has two parts: a habit (Bilal’s morning Adhan) and a principle (the Prophet’s teaching). Make two boxes on the board and learners decide in which box each sentence belongs. The grammar starts with a true/false question: “Did Bilal start early only once?” Learners find that “used to” means “again and again in the past”. The words of the Adhan and the teaching of the Prophet are read and explained, never changed.',
    priorKnowledge: ['Chapter 11: the first Adhan; comparatives with than.'],
    anticipatedMisconceptions: ['“Used to” here is a habit, not “to be used to something”.', 'The Farewell Sermon was the Prophet’s last speech before he died in 632. It is not the same event as the first Adhan.'],
    grammarFocus: 'Targets: used to + verb for a past habit · which means for explaining words · all + plural noun + are (not every + plural) · better than · It is wrong to + verb · because of + noun · told + person + to + verb · is called.\nNotice (Activity 1): Board “Bilal used to start the morning call to prayer very early.” Ask: “One morning or many mornings?”\nBuild (Activities 2–3): complete the lines with which means / all / better (ask: “all people or every people?”), then build “In this speech, he said it is wrong to dislike or disrespect people because of the color of their skin.”\nLikely errors: *use to start, *used to started · *every people are · *better that · *because the color of their skin · *who means.\nUse (Activity 4): four sentences about a routine and one fair principle: I used to …, which means …, All students are …, It is wrong to … because of ….',
    pronunciationFocus: 'used to /ˈjuːstə/ (s, not z): “biLAL USED to START | the MORNing CALL to PRAYer | VERy EARly.”\n“PRAYer is BETter than SLEEP” with weak than /ðən/.\nThe teacher reads the phrase “es-Salâtü hayrün mine’n-nevm” once, slowly, as in the text. Learners listen and match it with its meaning.\nWord focus: FARE-well (/ˌfeəˈwel/: stress on WELL), SER-mon, dis-re-SPECT, SPEECH, E-qual, EVE.',
    beforeReading: ['Ask: “What do you do every morning?” Learners say one habit. Then: “What did you use to do when you were small?” Two volunteers answer.'],
    duringReading: ['Listen: what did Bilal add to the morning Adhan?', 'Two boxes: Bilal’s habit / the Prophet’s teaching.', 'Underline which means, all people are equal, better than and because of.', 'Find the year and the name of the last speech.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at “used to” in Activity 1, practise which means / all / better and the “It is wrong to …” sentence in Activities 2–3, Use in Activity 4.', 'Write one fair class rule based on the chapter’s teaching.'],
    lessonPlan: '0–4 Hook: one morning habit now and one habit when you were small (used to); 4–11 Listen and read, learners find the added words and the name of the last speech; 11–17 Two-box sort in pairs: habit / teaching, each sentence placed with a reason, then the teacher reads the phrase “es-Salâtü hayrün mine’n-nevm” once and learners say its meaning from the text; 17–21 Quick Challenge; 21–30 Language Focus: Activity 1 as discovery (one morning or many?), Activities 2–3 in pairs, then a quick oral contrast “All students are … / Every student is …”; 30–37 Use: groups agree on one fair class principle and write four sentences (a routine with used to, the principle with all … are, It is wrong to … because of …), then read it to the class; 37–40 Exit ticket.',
    discussionPoints: ['What did Bilal add to the morning Adhan, and how did the Prophet feel about it?', 'What did the Prophet (pbuh) teach about skin color?', 'Why does the chapter say all people come from the same parents?'],
    interactiveTips: ['Use the Morning Adhan hotspot for the habit box and the Farewell Sermon hotspot for the teaching box.', 'Replay the Farewell Sermon sentences before Activity 3.', 'The Adhan phrase and the Prophet’s teaching are read and matched with meanings. They are not gapped, corrected or rewritten.'],
    differentiation: {
      strugglingLearners: 'Frames: “Bilal used to ____. The Prophet taught that all people ____. It is wrong to ____ because of ____.”',
      fastFinishers: 'Write five sentences: one past habit, one explanation with which means, one comparison with better than and two sentences about a fair principle.'
    },
    formativeAssessment: ['Separates the habit from the teaching.', 'Uses used to, all + plural and better than correctly.', 'States the principle with “It is wrong to … because of …”.'],
    expectedResponses: ['Bilal used to start the morning call to prayer very early. He added words which mean “Prayer is better than sleep”, and the Prophet (pbuh) told him to repeat it every morning.', 'In the Farewell Sermon, the Prophet said it is wrong to dislike or disrespect people because of the color of their skin.'],
    transferTask: 'Write one fair class rule that says how we treat people who look different from us.',
    teacherReflection: 'Did learners discover the meaning of “used to”, and did they keep the Adhan phrase and the Prophet’s words exactly as they are?',
    assessmentTools: { rubric: ['Habit vs teaching', 'Facts (Farewell Sermon, 632, Adam and Eve)', 'used to / all … are / better than', 'Fair principle'], exitTicket: ['Write one sentence with “used to” and one with “It is wrong to … because of …”.'] }
  },
  {
    chapter: 'Chapter 13: Everyone Is Equal',
    timing: '40 minutes',
    objectives: [
      'Explain the chapter’s message: no person is better than another because of skin color, and the only way to be better is to be good and do good actions.',
      'Describe the end of Bilal’s life: too sad to give the Adhan, leaving Medina with Abu Bakr’s permission, dying in Damascus.',
      'Notice how “too + adjective + to + verb” shows that something was not possible, and use better than (not then), asked + person + to let, What matters is …, because of + noun and when + past.',
      'Look back at the whole book and state its main lesson in their own words.'
    ],
    pedagogy: 'The last chapter joins Bilal’s story and the book’s lesson. Start with a whole-book story line on the board (Chapter 1 → Chapter 13): learners place five moments (born into slavery, accepts Islam, freed by Abu Bakr, first Adhan, Damascus). Then they find the sentences of the lesson. The grammar starts with Bilal’s grief: “Did Bilal give the Adhan? Why not?” Learners discover “too sad to”. Handle the Prophet’s death and Bilal’s sadness calmly and never act them out.',
    priorKnowledge: ['Chapters 1–12, especially Chapter 12 (better than, because of).'],
    anticipatedMisconceptions: ['“Too sad to give the Adhan” does not mean he gave it with a sad voice. He could not give it.', '“Arabs are not better than non-Arabs” does not mean non-Arabs are better. It means all are equal.'],
    grammarFocus: 'Targets: too + adjective + to + verb · better than (than, not then) · asked + person + to let + person + verb · allowed + person + to · What matters is … · because of + noun vs because + sentence · when + past.\nNotice (Activity 1): Board “When the Prophet (pbuh) died, Bilal was too sad to give the Adhan.” Ask: “Did Bilal give the Adhan? Why not?”\nBuild (Activities 2–3): choose than / to let / matters, then fix “because their skin color” → because of their skin color and “when he say” → when he said.\nLikely errors: *better then · *asked Abu Bakr let him leave · *What matter is · *because their skin color · *when he say.\nUse (Activity 4): four sentences about fairness and what makes a person valuable: … is not better than …, It is unfair to … because of …, What matters is ….',
    pronunciationFocus: 'Chunk the grief sentence: “biLAL was TOO SAD | to GIVE the aDHAN.”\nContrastive stress: “ARabs are NOT BETter than NON-Arabs, | and WHITE people are NOT BETter than BLACK people.”\nthan /ðən/ (weak) vs then /ðen/ (strong): say both and let learners hear the difference.\nWord focus: na-tion-AL-i-ty, da-MAS-cus, MAT-ters, un-FAIR, AC-tions.',
    beforeReading: ['Show the whole-book story line (Chapter 1 → Chapter 13) and ask: “What do you remember about Bilal at the start? And in the middle?” Learners add two moments from memory.'],
    duringReading: ['Listen: where did Bilal go at the end, and why?', 'Add the last moments to the story line (too sad to give the Adhan, asked Abu Bakr, Damascus).', 'Underline every sentence with better than or because of.', 'Box the last sentence: what matters.'],
    afterReading: ['Complete the Quick Challenge.', 'Language Focus: Look at “too sad to” in Activity 1, practise than / to let / matters and fix because of / said in Activities 2–3, Use in Activity 4.', 'Write the main lesson of the whole book in one sentence.'],
    lessonPlan: '0–5 Hook: whole-book story line on the board, learners add moments from Chapters 1–12 from memory; 5–12 Listen and read, learners add the last moments of Bilal’s life to the line; 12–18 Gallery check: pairs write the lesson of the book on a card with one quoted sentence from Chapter 13, cards go on the wall and pairs walk and tick the ones that match the text; 18–22 Quick Challenge; 22–31 Language Focus: Activity 1 as whole-class discovery (Did Bilal give the Adhan? Why not?), Activities 2–3 in pairs, then than/then listening practice; 31–37 Use: learners write four sentences about fairness at school, team or home (… is not better than … / It is unfair to … because of … / What matters is …) and read them to a partner; 37–40 Exit ticket.',
    discussionPoints: ['Why could Bilal not give the Adhan after the Prophet died?', 'What is the only way to be better, according to the chapter?', 'What does the book say matters, and what does it say is not important?'],
    interactiveTips: ['Use the Equality hotspot for the first paragraph and Heart and Actions for the last sentence.', 'Replay the grief sentences once, calmly, and do not dramatise them.', 'Keep the lesson inside the chapter: skin color, nationality and past are not important, the heart and good actions matter.'],
    differentiation: {
      strugglingLearners: 'Frames: “No person is better than another because of ____. What matters is ____.”',
      fastFinishers: 'Write a six-sentence summary of Bilal’s life from Chapter 1 to Chapter 13 and end with the book’s lesson.'
    },
    formativeAssessment: ['States the lesson of the chapter with the text’s words.', 'Tells the end of Bilal’s life correctly (Medina → Damascus).', 'Uses too … to, better than and because of correctly.'],
    expectedResponses: ['When the Prophet (pbuh) died, Bilal was too sad to give the Adhan. He asked Abu Bakr to let him leave, went to Damascus and died there.', 'No person is better than another because of skin color. What matters is the heart and good actions.'],
    transferTask: 'Write one action that shows you judge people by their actions, not by their skin color or nationality.',
    teacherReflection: 'Did the story line help learners see the whole book, and did they state its lesson in their own words without adding ideas that are not in the text?',
    assessmentTools: { rubric: ['Chapter lesson', 'End of Bilal’s life', 'too … to / better than / because of', 'Whole-book lesson'], exitTicket: ['Write one sentence with “too … to” and one sentence that begins “What matters is …”.'] }
  }
];

export const meccaA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Bilal ibn Rabah and Mecca (A2) — Teacher Guide',
  subtitle: 'TYMM-aligned guide with chapter-specific support, inductive grammar and 40-minute lesson plans',
  level: 'A2',
  estimatedDuration: '13 × 40 minutes (one lesson per chapter). Whole-book review pages follow separately.',
  targetAudience: 'Lower-secondary learners studying English at approximately CEFR A2.',
  targetLearners: 'Learners who can follow a short, supported narrative, find direct evidence in the text and produce short spoken or written sentences with frames.',
  purpose: 'Teach Bilal ibn Rabah’s story through listening and reading for meaning, text evidence, the chapter’s own Language Focus (Look → Practise → Use) and short A2 production about the learners’ own world, with values shown through observable action.',
  approachDesc: `Every chapter follows the TYMM route. YDAB1 listening and YDAB2 reading establish meaning and evidence; the Quick Challenge checks comprehension. Grammar is then learned inductively, as the Maarif Model expects for English: in the Language Focus, learners first LOOK at a form in a real chapter sentence and answer a simple meaning question (Who thinks this? One time or many times? Did it really happen?), so they find what the form does before the teacher confirms the rule; then they PRACTISE it in short, controlled items from the chapter; finally they USE it in four short sentences about their own world (YDAB3 speaking, YDAB4 writing). A2 lessons keep steps short and concrete, with oral rehearsal and sentence frames before writing. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: '13 Quick Challenges, text-evidence checks, chapter Language Focus tasks (Look → Practise → Use), exit tickets, short speaking/writing transfer, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge.',
  assessmentOverview: { formative: ['Quick Challenge after each chapter', 'Text-evidence checks', 'Language Focus: Look and Practise', 'Four-sentence Use task', 'Exit tickets', 'Knowledge Check', 'Vocabulary Challenge', 'Language Review'], summative: ['Final Challenge'] },
  readingFramework: { before: 'Activate only what the chapter needs with a short, concrete hook: a picture, a number line, two words on the board or a quick question.', during: 'Listen first for one gist question, then read along and fill the chapter’s own organiser: two columns, a zoom diagram, a day clock, a path, a balance, speech bubbles, a timeline or a story line.', after: 'Complete the Quick Challenge, then the chapter’s Language Focus (Look → Practise → Use), then four short sentences about the learners’ own world and an exit ticket.' },
  vocabularyApproach: { selection: 'Prioritise the chapter Word Notes and the few words needed for the chapter’s key relationship.', method: 'Infer meaning from the sentence, the image or the audio before any direct explanation; say new words with the correct stress.', recycling: 'Reuse vocabulary in the Use task, exit tickets and the whole-book review.' },
  grammarApproach: 'Inductive and text-based. Start from the story sentence, ask one simple meaning question, let learners say the rule in their own words, then confirm it and practise it in the chapter’s items. The explanation shown after each answer confirms what learners have found. Keep metalanguage to a minimum at A2 and do not replace the chapter work with unrelated drills.',
  grammarSequence: [
    'Ch1: fact or belief (thought + sentence); said, left, thought, had; was born in; were; made + person + adjective',
    'Ch2: but for contrast; was called; there was; a lot of + money; because of this; became richer/poorer',
    'Ch3: were getting + comparative; the most …; a center for + -ing; from; When + past; one of the + superlative + plural noun',
    'Ch4: always, often, all day (how often / how long); his job was to; had to; to + verb for a reason; did not + base verb; every + singular noun',
    'Ch5: thought … would; because; had to; did not have any / had no; taught that … must; told … to; stop + -ing',
    'Ch6: did not want + person + to; think about; decided to; When + past; started to',
    'Ch7: After + past; In the end; knew that … would; could not + base verb; was happy to; stayed awake',
    'Ch8: forced … to, but … refused; Did + base verb; If + present … will; helped … to; Now + present; When + past',
    'Ch9: heard that; right away; did not want to; asked + person + to; What did he do …?',
    'Ch10: If + past …, I would …; agreed to; no longer; could; could …, but did not',
    'Ch11: Even when; allowed / wanted / told + person + to; After + event; chose; one of the … friends',
    'Ch12: used to; which means; all + plural + are; better than; It is wrong to …; because of',
    'Ch13: too + adjective + to; better than (not then); asked … to let; What matters is …; because of vs because'
  ],
  skillsFocus: { reading: 'TYMM YDAB2: find explicit evidence, order events, separate facts from beliefs and speakers’ words, and follow simple cause and result.', listening: 'TYMM YDAB1: listen for one gist question, then replay for evidence, stress and intonation.', speaking: 'TYMM YDAB3: say short, evidence-based A2 sentences and short dialogues with frames and oral rehearsal.', writing: 'TYMM YDAB4: write four short connected sentences using the chapter’s patterns about the learners’ own world.' },
  valuesFocus: ['D1 Justice — fairness between rich and poor, strong and weak', 'D5 Sensitivity — calm, respectful discussion of slavery and hurt', 'D6 Honesty — separating facts from beliefs and speakers’ views', 'D11 Freedom — Bilal’s freedom and the right to worship freely', 'D12 Patience — Bilal’s patience and steadfastness', 'D14 Respect — equal value of every person, whatever their skin color or past', 'D20 Helpfulness — Abu Bakr’s quick, peaceful help'],
  languageFocus: ['Every one of the 13 chapters has an active Language Focus set built as Look → Practise → Use (four activities).', 'Use Language Focus after basic comprehension and the Quick Challenge.', 'Always start from the story sentence: ask what the form does before naming it.', 'Let learners answer first; the explanation shown after each answer confirms the rule they have found.', 'At A2 the Use step is four short sentences about the learners’ own world, not a retelling of the chapter.'],
  differentiationNotes: 'Reduce the language load, not the thinking: one evidence sentence at a time, audio replay, sentence frames, word cards and oral rehearsal before writing. Extend by combining more chapter patterns or adding one more piece of evidence, never by adding outside facts.',
  sensitiveNotes: { title: 'Source fidelity and respectful discussion', notes: ['Discuss slavery, name-calling and mistreatment calmly and factually. Never role-play, draw or act out violence, and never let learners use the hurtful name from Chapter 4 about anyone.', 'In Chapters 8–9 the teacher reads the violent sentences once, calmly, and moves on to Bilal’s answer and Abu Bakr’s help.', 'Keep speakers’ views (people in Mecca, Umayya) separate from the narrator’s message. Umayya’s insult in Chapter 8 is his view only.', 'Qur’anic phrases, prophetic sayings, the words of the Adhan and prayers are read, explained and matched to meanings; they are never gapped, corrected or rewritten.', 'Freeze-frames and dialogues never portray the Prophet (pbuh).', 'Do not add legends, events, dates or biographical details that are not in this A2 book.'] },
  globalCitizenship: {
    title: 'Global Citizenship and Cultural Bridges',
    description: 'Bilal’s story begins in Mecca, but its question belongs to every community in the world: does skin color, money, nationality or a person’s past decide their value? The book’s answer is clear: what matters is the heart and good actions.',
    themes: [
      { title: 'Equal value for every person:', description: 'Bilal was born into slavery, yet the book says skin color or being a slave does not make a person less valuable (Chapters 1 and 13). Discuss how schools today can make every student feel equally valued.' },
      { title: 'Fairness between rich and poor:', description: 'Chapter 2 shows how unfair extra money (faiz) made the rich richer and the poor poorer. Talk about fair sharing and fair rules in the class and the community.' },
      { title: 'Freedom and helping others:', description: 'Abu Bakr heard about Bilal’s pain, went right away and freed him when he could keep him as a slave (Chapters 9–10). Discuss safe, peaceful ways to help people who are treated unfairly.' },
      { title: 'No one is better because of skin color or nationality:', description: 'The Farewell Sermon and the last chapter say no color or people is better than another (Chapters 12–13). Connect this with how we speak about people from other countries, at school and online.' }
    ],
    actions: ['Agree on three class rules that protect every student from name-calling about skin color, nationality or family background.', 'Make a “fair sharing” plan for class materials so that no one is left without what they need.', 'Write a short welcome message in simple English for a new student from another country.']
  },
  appendices: {
    exitTicket: ['One fact from today’s chapter and the sentence that proves it is …', 'One language pattern I noticed today and what it means is …', 'One fair or respectful action I can do this week is …'],
    miniProject: { title: 'What Matters Is the Heart', desc: 'In groups, make a poster or a short audio clip in simple English about the lesson of Bilal’s story. Quote one sentence from Chapter 1, Chapter 12 or Chapter 13 exactly as it is, explain what it means in two sentences, and give two real school examples of treating people equally. Use at least two Language Focus patterns such as “is not better than”, “It is wrong to … because of …” or “What matters is …”.' },
    reflectivePrompt: { title: 'Judging by Actions', desc: 'People in Mecca thought Bilal would never become someone important, but he became one of the Prophet’s most beloved friends and the first person to give the Adhan. Write five or six sentences about a time when you or someone you know was judged wrongly at first. What did people think? What really happened? What matters more: how a person looks or what a person does?' }
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: `Use only values the chapter really supports. Ask for the sentence first, then connect the value to one observable, age-appropriate action. See ${TYMM_VALUES}.`,
    items: [
      { label: 'D14 Respect / D1 Justice', value: 'Equal value of every person and fairness between rich and poor become class rules and fair actions.' },
      { label: 'D11 Freedom / D20 Helpfulness', value: 'Abu Bakr’s quick, peaceful help and Bilal’s freedom are linked to safe ways of helping others.' },
      { label: 'D12 Patience / D6 Honesty', value: 'Bilal’s patience and the difference between facts and beliefs are made visible in learners’ language.' }
    ],
    questions: ['Which sentence in the chapter supports this value?', 'What action could show it at school or at home?', 'Which part is story evidence and which part is your own application?']
  }
};
