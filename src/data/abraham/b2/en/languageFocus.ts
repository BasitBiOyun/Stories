import type { Exercise } from '../../../../types';

/*
 * Abraham B2 (English) Language Focus. Each chapter follows Notice → Build → Use:
 * learners first discover what a form does in real chapter sentences, then practise
 * it in context, then use it in the chapter's reflection task. Every quoted sentence
 * comes from the English chapter text; Qur'anic verses are only read, sorted,
 * matched to meanings or asked about, never altered.
 */

/** Chapter 1 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter1: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-b2-language-1-source-framing',
      type: 'multiple-choice',
      title: 'Who Is Presenting Whom?',
      instructions: 'Read the opening sentence of Chapter 1. Then choose the best explanation of the wording.',
      question: '“In the Holy Qur’an, Prophet Abraham (pbuh) is presented as the messenger and representative of the monotheistic belief.” Why does the writer use “is presented as” instead of simply stating that Abraham is the messenger?',
      options: [
        'It shows that the description comes from a source, the Qur’an, so the writer is reporting how that source portrays Abraham.',
        'It shows that the writer is not sure the description is true.',
        'It shows that Abraham described himself in this way.',
        'It shows that the description was true only in the past.',
      ],
      correctAnswer: 0,
      explanation: '“Be presented as / be described as” frames a statement: it tells the reader where a description comes from. Here the frame “In the Holy Qur’an … is presented as” makes the Qur’an the source of the portrait. A frame like this does not express doubt; it shows the reader whose presentation is being reported. The chapter returns to the Qur’an as a source in its last sentence.',
      feedback: {
        correct: 'Correct. The frame names the source of the description; it does not weaken it.',
        incorrect: 'Look at the words before the verb: “In the Holy Qur’an”. Whose presentation of Abraham is the writer reporting?',
      },
    },
    {
      id: 'abraham-b2-language-1-definition-reformulation',
      type: 'word-bank',
      title: 'Define, Add, Expand',
      instructions: 'Complete the lines from Chapter 1 with words from the bank. Two options are not needed.',
      question: 'Which expressions define an idea, add a new role, and announce a fuller account?',
      fillBlanksText: 'Monotheistic belief [blank] I bear witness that there is no god but Allah. … Abraham (pbuh) is [blank] a fundamental figure in the three great monotheistic religions (Judaism, Christianity, and Islam). … The Qur’an presents [blank] his discovery of the oneness of Allah (Tawheed) in the middle of an idol-worshipping nation.',
      wordBank: ['means that', 'also', 'in detail', 'refers to', 'instead'],
      correctAnswer: ['means that', 'also', 'in detail'],
      explanation: '“X means that + clause” unpacks an abstract term into a full statement. (“Refers to” needs a noun phrase, not a clause.) “Also” adds a second role to the earlier description without replacing it; “instead” would cancel the first role. “Presents in detail” tells the reader that the Qur’an gives a fuller account, not just a short mention.',
      feedback: {
        correct: 'Correct. You chose the expressions that define, add and expand.',
        incorrect: 'Check what follows each gap: a full clause (I bear witness …), an extra role, and a whole account. Then compare with the first paragraph of Chapter 1.',
      },
    },
    {
      id: 'abraham-b2-language-1-passive-focus',
      type: 'transformation',
      title: 'Same Fact, New Focus',
      instructions: 'Rewrite each sentence so that it starts with the words given. Keep the passive voice and the meaning.',
      question: 'How can a passive sentence put either the person or the thing given at the front?',
      transformItems: [
        {
          source: 'This title was not given to any other prophet before.',
          frame: 'No other prophet [blank] this title before.',
          answers: ['had been given', 'was given', 'had ever been given', 'was ever given'],
        },
        {
          source: 'Abraham (pbuh) was also given the unique name of “Allah’s friend” …',
          frame: 'The unique name of “Allah’s friend” [blank] to Abraham (pbuh).',
          answers: ['was also given', 'was given'],
        },
      ],
      correctAnswer: null,
      explanation: 'Give has two objects (give someone something), so its passive can start with the person (“No other prophet had been given this title”) or with the thing (“The unique name … was given to Abraham”). The giver is left out because the reader already knows it, and the focus stays on the title and how unique it is. When the thing comes first, use “to” before the person.',
      feedback: {
        correct: 'Well done. You moved the focus while keeping the passive and the meaning.',
        incorrect: 'Keep a form of be + given. If the thing comes first, add “to” before the person. Check the sentences about “Allah’s friend” near the end of Chapter 1.',
      },
    },
    {
      id: 'abraham-b2-language-1-production',
      type: 'reflection',
      title: 'Build a Framed B2 Explanation',
      instructions: 'Write or say a 7–9 sentence paragraph about a non-story concept or historical figure. Introduce the topic with a source-framing expression such as “is presented as” or “is described as”, define one abstract idea with “means that”, add one related point with “also”, and use one passive sentence to foreground a title, distinction or recognition. End by explaining why your wording makes the paragraph clearer. Do not retell Chapter 1.',
      question: 'Can you organise a short explanation by controlling source framing, definition, addition and information focus?',
      correctAnswer: null,
      explanation: 'A strong B2 response should not merely include the target expressions. It should use each one for a clear discourse purpose: framing a source, unpacking meaning, adding a related point and foregrounding selected information.',
      feedback: {
        correct: 'Check that every target expression has a real discourse function and that the paragraph develops in a clear sequence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Source — Which source or viewpoint will frame your opening description?', mode: 'Individual' },
        { question: 'Definition — Which abstract idea needs to be unpacked for the reader?', mode: 'Individual' },
        {
          question: 'Focus — What title or distinction is more important than the person or institution that granted it?',
          mode: 'Pair',
        },
        { question: 'Organisation — Does each sentence clearly add, define or reframe information?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 2 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter2: Record<number, Exercise[]> = {
  2: [
    {
      id: 'abraham-b2-language-2-definition-chain',
      type: 'matching',
      title: 'How the Chapter Defines Its Terms',
      instructions: 'Match each term with the definition the chapter gives for it.',
      question: 'How does Chapter 2 build meaning through definitions?',
      matchingHeadings: { left: 'Term from the chapter', right: 'How the chapter defines it' },
      matchingPairs: [
        { left: 'Tawheed', right: 'the belief that Allah is One and He has no partners' },
        { left: 'a hanîf', right: 'a monotheist who is not a Jew, a Christian, or an idolater' },
        { left: 'Hanifism', right: 'the belief in the oneness of Allah taught by Prophet Abraham (pbuh)' },
        {
          left: 'the acts of worship',
          right: 'the only point where Abraham’s monotheism and the Islam taught by Muhammad differ',
        },
      ],
      correctAnswer: {
        Tawheed: 'the belief that Allah is One and He has no partners',
        'a hanîf': 'a monotheist who is not a Jew, a Christian, or an idolater',
        Hanifism: 'the belief in the oneness of Allah taught by Prophet Abraham (pbuh)',
        'the acts of worship': 'the only point where Abraham’s monotheism and the Islam taught by Muhammad differ',
      },
      explanation: 'The chapter defines its terms in different ways: with a dash (“Tawheed—the belief that …”), with a relative clause (“a monotheist who is not …”), and with a participle phrase (“the belief … taught by Prophet Abraham”). Its last sentence limits the difference with “only”: the difference is “only in the acts of worship”. A hanîf is a person; Hanifism is the belief system.',
      feedback: {
        correct: 'Correct. You separated the person (a hanîf) from the belief (Hanifism) and read the limiting “only”.',
        incorrect: 'Find each term in Chapter 2 and read what comes straight after it: a dash, “who …”, or “taught by …”. The last sentence of the chapter says where the difference lies.',
      },
    },
    {
      id: 'abraham-b2-language-2-stance',
      type: 'multiple-choice',
      title: 'Definition or Interpretation?',
      instructions: 'Compare the two sentences from Chapter 2. Then choose the best explanation.',
      question: '“Hanifism is the belief in the oneness of Allah taught by Prophet Abraham (pbuh).” / “We may say that it is the former version of Islam.” What does “We may say that” add to the second sentence?',
      options: [
        'It presents the claim as the writer’s interpretation, offered with some caution.',
        'It shows that the writer is quoting another scholar’s exact words.',
        'It makes the second claim stronger and more certain than the definition.',
        'It shows that the writer disagrees with the claim.',
      ],
      correctAnswer: 0,
      explanation: 'The first sentence is a direct definition with “is”. “We may say that …” is a stance marker: the modal “may” and the verb “say” show that the writer is offering a way of describing Hanifism, not a simple fact. Careful academic writers use this move for claims that are interpretations.',
      feedback: {
        correct: 'Correct. “We may say that” marks a careful interpretation, not a plain definition.',
        incorrect: 'Compare the plain verb “is” in the definition with the modal “may” in the second sentence. Which one is more cautious?',
      },
    },
    {
      id: 'abraham-b2-language-2-cause-result',
      type: 'transformation',
      title: 'Reason, Result and Reformulation',
      instructions: 'Rewrite each sentence from Chapter 2 with the words given. Keep the meaning.',
      question: 'How can the same cause, conclusion or reformulation be expressed in another way?',
      transformItems: [
        {
          source: 'As human conditions and capacities changed over time, some changes in details became necessary.',
          frame: 'Some changes in details became necessary [blank] human conditions and capacities changed over time.',
          answers: ['because', 'since', 'as'],
        },
        {
          source: 'Human beings are capable of discovering Hanifism; that is, the existence of Allah can be found through reasoning.',
          frame: '… that is, people [blank] the existence of Allah through reasoning.',
          answers: ['can find', 'are able to find', 'can discover', 'are able to discover'],
        },
      ],
      correctAnswer: null,
      explanation: '“As” at the start of a sentence often gives a reason, like “because” or “since”; when the cause moves to the end, “because” is the clearest choice. “That is” introduces a reformulation: it says the previous idea again in plainer words. The passive “can be found” focuses on the existence of Allah; the active “people can find” focuses on human ability, which matches “capable of discovering”.',
      feedback: {
        correct: 'Well done. You kept the reason and the reformulation clear.',
        incorrect: 'In the first item, “As” gives a reason. In the second, change “can be found” into an active verb with “people” as the subject. Check the second paragraph of Chapter 2.',
      },
    },
    {
      id: 'abraham-b2-language-2-production',
      type: 'reflection',
      title: 'Explain Continuity and Change',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story tradition, system or practice that has a stable core but has changed in some details over time. Define one key term with a relative clause, use a cautious stance marker such as “we may say that”, reformulate one idea with “that is”, and build one clear cause → result → conclusion chain with “due to” and “so” or equivalent expressions. End by stating what remained constant and what changed. Do not retell Chapter 2.',
      question: 'Can you use definition, reformulation, stance and logical connection to explain continuity and change clearly?',
      correctAnswer: null,
      explanation: 'A strong B2 response should organise ideas rather than simply insert target phrases. The reader should be able to see what the concept means, which statement is interpretive, why a change occurred, and what conclusion follows.',
      feedback: {
        correct: 'Check that the paragraph distinguishes definition from interpretation and that the cause–result chain leads naturally to the final contrast.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Definition — Which term needs a precise relative-clause definition?', mode: 'Individual' },
        {
          question: 'Stance — Which claim should be presented cautiously rather than absolutely?',
          mode: 'Individual',
        },
        { question: 'Logic — What cause genuinely explains the change you describe?', mode: 'Pair' },
        {
          question: 'Conclusion — Can the reader clearly identify what stayed stable and what changed?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 3 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'abraham-b2-language-3-discourse-movement',
      type: 'multiple-choice',
      title: 'An Evaluation with a Time Limit',
      instructions: 'Read the sentence from Chapter 3. Then choose the best explanation.',
      question: '“He went to Damascus in search of Hanifism and accepted Christianity, which was the least corrupted religion at that time.” What does “at that time” do?',
      options: [
        'It limits the evaluation “the least corrupted” to that period, instead of making it true for all times.',
        'It shows that Christianity became the least corrupted religion later.',
        'It shows that Varaka left Christianity after some time.',
        'It means that Christianity was not corrupted at all in that period.',
      ],
      correctAnswer: 0,
      explanation: 'The non-defining relative clause “which was the least corrupted religion” adds the writer’s evaluation of Christianity. “At that time” limits this evaluation to Varaka’s period. Also note that “the least corrupted” is a comparison: it does not mean “not corrupted at all”.',
      feedback: {
        correct: 'Correct. The time phrase limits the evaluation to one period.',
        incorrect: 'Read the whole relative clause again. What is being evaluated, and for which period? Does “least corrupted” mean “not corrupted”?',
      },
    },
    {
      id: 'abraham-b2-language-3-relative-scope',
      type: 'word-bank',
      title: 'Turning Points in the Argument',
      instructions: 'Complete the lines from Chapter 3 with words from the bank. Two options are not needed.',
      question: 'Which words stress a claim, mark a change, compare and add?',
      fillBlanksText: '[blank], Judaism, Christianity, and Islam are all based on the religion of Abraham (pbuh). … They stayed away from idolatry and its practices. [blank], later on, this belief became mixed with idolatry and, [blank] Judaism and Christianity, it was corrupted. … As the last faith, Islam includes [blank] what Allah told Abraham (pbuh), but also what Allah told Noah (pbuh), Moses (pbuh), Jesus (pbuh), and all the other prophets.',
      wordBank: ['In fact', 'However', 'like', 'not only', 'Therefore', 'unlike'],
      correctAnswer: ['In fact', 'However', 'like', 'not only'],
      explanation: '“In fact” strengthens the opening claim. “However, later on” turns from the hanîfs who stayed away from idolatry to a later, opposite development; “Therefore” would wrongly present the corruption as a result of staying away from idolatry. “Like Judaism and Christianity” places the change in a wider pattern; “unlike” would say the opposite. “Not only … but also” adds the other prophets to Abraham.',
      feedback: {
        correct: 'Correct. You followed the chapter from claim to contrast, comparison and addition.',
        incorrect: 'Ask whether each gap strengthens, contrasts, compares or adds. Notice “but also” later in the last sentence. Then check Chapter 3.',
      },
    },
    {
      id: 'abraham-b2-language-3-time-layering',
      type: 'sentence-building',
      title: 'Build a Layered Scene',
      instructions: 'Tap the pieces to rebuild this sentence from Chapter 3.',
      question: 'How does one sentence hold the time, the place, the main event and two background details?',
      sentenceChunks: [
        'One day,',
        'while he was in the desert,',
        'Varaka saw Bilal al-Habashi',
        'lying under the burning sun,',
        'punished by his master.',
      ],
      correctAnswer: null,
      explanation: '“One day” moves to one specific event, and “while he was in the desert” gives the ongoing background. The main clause is “Varaka saw Bilal al-Habashi”. Then two participle phrases describe Bilal: “lying” (active, what he was doing) and “punished” (passive, what was being done to him). The chapter uses the same compact style in “Hearing his words, Varaka replied …”.',
      feedback: {
        correct: 'Well done. The time frame comes first, then the main event, then the details about Bilal.',
        incorrect: 'Start with the time frame, then the background with “while”, then who saw whom. The -ing and -ed phrases describe Bilal, so they come after his name.',
      },
    },
    {
      id: 'abraham-b2-language-3-production',
      type: 'reflection',
      title: 'Build a Coherent Contrast-and-Extension Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story belief, tradition, institution or idea that changed over time while keeping some continuity. Use one strengthening marker such as “in fact”, one clear contrast such as “however”, one time-layering structure with “when” or “while”, one relative clause that adds a limited evaluation, and one “not only... but also...” structure to widen the final point. Keep any evaluation carefully limited by time or context. Do not retell Chapter 3.',
      question: 'Can you use discourse markers, time relations, relative clauses and additive scope to organise a nuanced B2 explanation?',
      correctAnswer: null,
      explanation: 'A strong response should show controlled progression: establish a point, mark change, locate events in time, add a qualified description, and widen the conclusion without overclaiming.',
      feedback: {
        correct: 'Check that each connector has a real discourse purpose and that your relative-clause evaluation is limited to the context you actually describe.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Continuity — What remains stable across the period you describe?', mode: 'Individual' },
        {
          question: 'Contrast — Where does a real change occur, and which connector makes it clear?',
          mode: 'Individual',
        },
        { question: 'Qualification — Which evaluation needs a time or context limit?', mode: 'Pair' },
        {
          question: 'Extension — What wider point can you add naturally with “not only... but also...”?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 4 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'abraham-b2-language-4-source-status',
      type: 'drag-drop',
      title: 'Fact or Reported View?',
      instructions: 'Sort the parts of Chapter 4. Does the writer state it directly, or report it as a source’s view, a belief or a cautious conclusion?',
      question: 'How does the chapter show which information is certain and which is uncertain?',
      dragDropGroups: [
        {
          group: 'Reported or hedged',
          items: [
            'Some sources say that he was born in the land of Sumer, Mesopotamia …',
            'Most generally speaking, we can say that Abraham was born in the city of Ur or Babylon …',
            'Some sources suggest that he lived between 2200–2000 BC.',
            'In the time of Abraham (pbuh), Allah was believed to be in the heavens.',
          ],
        },
        {
          group: 'Stated directly by the writer',
          items: [
            'In the Holy Qur’an, the name of Abraham (pbuh)’s father is Azer.',
            'There are different ideas about the birthplace of Abraham (pbuh).',
            'During the time of Abraham (pbuh), the Sumerian/Mesopotamian country was prosperous in many aspects …',
          ],
        },
      ],
      correctAnswer: {
        'Reported or hedged': [
          'Some sources say that he was born in the land of Sumer, Mesopotamia …',
          'Most generally speaking, we can say that Abraham was born in the city of Ur or Babylon …',
          'Some sources suggest that he lived between 2200–2000 BC.',
          'In the time of Abraham (pbuh), Allah was believed to be in the heavens.',
        ],
        'Stated directly by the writer': [
          'In the Holy Qur’an, the name of Abraham (pbuh)’s father is Azer.',
          'There are different ideas about the birthplace of Abraham (pbuh).',
          'During the time of Abraham (pbuh), the Sumerian/Mesopotamian country was prosperous in many aspects …',
        ],
      },
      explanation: 'Where sources disagree, the writer does not state a single fact. “Some sources say/suggest” attributes a claim to part of the tradition, and “Most generally speaking, we can say” offers a careful summary. “Was believed to be” reports what people of that time believed. The writer states directly what is not in doubt, including the fact that “there are different ideas”.',
      feedback: {
        correct: 'Correct. You separated reported or hedged claims from direct statements.',
        incorrect: 'Look for the frame at the start: some sources say/suggest, generally speaking, was believed. A sentence without such a frame is stated directly, even if it talks about disagreement.',
      },
    },
    {
      id: 'abraham-b2-language-4-cautious-synthesis',
      type: 'multiple-choice',
      title: 'A Summary That Keeps the Caution',
      instructions: 'Choose the summary that keeps the level of certainty of Chapter 4.',
      question: 'Which summary of Abraham’s birthplace and dates is faithful to the chapter?',
      options: [
        'Accounts differ, but broadly speaking Abraham was born in Mesopotamia, probably around the 20th century BC.',
        'Abraham was born in Ur in 2200 BC and later migrated to Harran.',
        'The sources agree that Abraham was born in Sumer and lived in the 20th century BC.',
        'Because the sources disagree, the chapter says nothing about where or when Abraham lived.',
      ],
      correctAnswer: 0,
      explanation: 'A good B2 summary keeps the writer’s caution. The chapter reports different views (“Some sources say … Some sources suggest …”) and then gives a general conclusion (“Most generally speaking, we can say …”) and a careful estimate of the period. The wrong summaries either join different sources into one certain fact, claim agreement that is not there, or say nothing can be concluded.',
      feedback: {
        correct: 'Correct. This summary keeps both the disagreement and the careful general conclusion.',
        incorrect: 'Does the chapter say the sources agree? Does it give one exact city and year? Does it avoid any conclusion? Check the hedged sentences in the first paragraph.',
      },
    },
    {
      id: 'abraham-b2-language-4-change-and-contrast',
      type: 'error-correction',
      title: 'Earlier Past and Social Variety',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a verb that looks back from the past and a word that adds another group?',
      errorItems: [
        {
          options: ['had existed', 'was existing', 'exists'],
          sentence: 'Abraham (pbuh)’s message of monotheism was a belief that has existed in these lands before, but it had been forgotten over time.',
          error: 'has existed',
          answer: 0,
        },
        {
          options: ['to have lived', 'to living', 'that lived'],
          sentence: 'Historically, Abraham (pbuh) is believed to live in the 20th century BC.',
          error: 'to live',
          answer: 0,
        },
        {
          options: ['others', 'another', 'the other'],
          sentence: 'People worshipped the planets, stars, sun, and moon; some people worshipped idols of stone and wood; still other worshipped their kings and rulers.',
          error: 'other',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The past perfect “had existed” looks back from Abraham’s time to an even earlier period, and it matches “had been forgotten”. After “is believed”, a perfect infinitive (“to have lived”) is needed for a past time: the belief is present, the life is past. “Some people … still others …” divides society into groups; “others” is a pronoun here, so it needs the plural -s.',
      feedback: {
        correct: 'Well done. You corrected the earlier past, the past-time infinitive and the pronoun.',
        incorrect: 'Ask: is the time earlier than Abraham’s time? Is the belief present but the life past? Is the word standing alone as a pronoun? Then check the end of Chapter 4.',
      },
    },
    {
      id: 'abraham-b2-language-4-production',
      type: 'reflection',
      title: 'Write a Qualified Historical Overview',
      instructions: 'Write or say an 8–10 sentence paragraph about a disputed or partly uncertain historical topic outside this story. Use at least three different source-status frames such as “some sources say”, “is believed to”, “evidence suggests”, or “broadly speaking, we can say”; include one earlier-state structure with “had + past participle”; show one change with “but/however”; and describe at least two different groups with “some... while/still others...”. Make clear which points are evidence, which are cautious synthesis, and which remain uncertain. Do not retell Chapter 4.',
      question: 'Can you build a coherent B2 historical explanation without making uncertain evidence sound certain?',
      correctAnswer: null,
      explanation: 'A strong response should organise evidence and uncertainty explicitly: attribute claims, synthesise cautiously, locate an earlier state in time, mark change, and distinguish groups rather than overgeneralising.',
      feedback: {
        correct: 'Check that every uncertain point is visibly qualified and that your paragraph still reaches a useful synthesis instead of becoming a list of disconnected caveats.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Source status — Which statement belongs to a named or limited source rather than to you as a certain fact?',
          mode: 'Individual',
        },
        {
          question: 'Synthesis — What can you responsibly say when several sources overlap but do not fully agree?',
          mode: 'Individual',
        },
        {
          question: 'Time — Which earlier condition needs a past-perfect form before you describe later change?',
          mode: 'Pair',
        },
        {
          question: 'Variation — How will you show that different groups acted differently without saying “everyone”?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 5 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'abraham-b2-language-5-past-viewpoint',
      type: 'drag-drop',
      title: 'The Future Seen from the Past',
      instructions: 'Sort the parts of Chapter 5. Do they tell an event that happened, or a later event seen from an earlier past moment?',
      question: 'How does the chapter look forward while it tells a story in the past?',
      dragDropGroups: [
        {
          group: 'A later event seen from the past',
          items: [
            'Very soon, he was going to fight against his family and the whole system in his society.',
            'a child named Abraham (pbuh) would be born in the region',
            'a child in the region would challenge his throne',
          ],
        },
        {
          group: 'An event that happened',
          items: [
            'Nimrod, the king of Babylon, had many fortunetellers and astrologers.',
            'he gathered pregnant women in one place',
            'Azer took his wife … to a safe place',
          ],
        },
      ],
      correctAnswer: {
        'A later event seen from the past': [
          'Very soon, he was going to fight against his family and the whole system in his society.',
          'a child named Abraham (pbuh) would be born in the region',
          'a child in the region would challenge his throne',
        ],
        'An event that happened': [
          'Nimrod, the king of Babylon, had many fortunetellers and astrologers.',
          'he gathered pregnant women in one place',
          'Azer took his wife … to a safe place',
        ],
      },
      explanation: '“Was going to” and “would” are the future seen from a past moment. The narrator uses “was going to” to look ahead from Abraham’s birth to his later struggle. “Would” reports what the astrologers predicted and what Nimrod’s dream showed. The past simple (had, gathered, took) tells what actually happened at that point in the story.',
      feedback: {
        correct: 'Correct. You separated past events from future events seen from the past.',
        incorrect: 'Look for “was going to” and “would”: they look forward from a past point. Past simple verbs tell events of the story itself.',
      },
    },
    {
      id: 'abraham-b2-language-5-source-shift',
      type: 'multiple-choice',
      title: 'Another Narration',
      instructions: 'Read the sentence from Chapter 5. Then choose the best explanation.',
      question: '“According to another narration, Nimrod had a dream that a child in the region would challenge his throne.” What does “According to another narration” tell the reader?',
      options: [
        'What follows is a different account of how Nimrod learned about the child, not a second event.',
        'The dream happened after the astrologers’ prediction.',
        'The writer believes this account is wrong.',
        'Nimrod told other people about his dream.',
      ],
      correctAnswer: 0,
      explanation: '“According to …” attributes information to a source. “Another narration” shows that the tradition tells the story in more than one way: in one account the astrologers predict the child, in the other Nimrod dreams about him. The writer reports both without choosing and without saying one happened after the other.',
      feedback: {
        correct: 'Correct. The phrase introduces an alternative account of the same development.',
        incorrect: 'Compare the prediction of the astrologers with the dream. Does the chapter say both happened, or does it give two versions?',
      },
    },
    {
      id: 'abraham-b2-language-5-cohesion',
      type: 'transformation',
      title: 'Linking Result, Person and Place',
      instructions: 'Rewrite each part of Chapter 5 with the words given. Keep the meaning.',
      question: 'How do linkers and relative words connect a result, a person and a place?',
      transformItems: [
        {
          source: 'So, he gathered pregnant women in one place and ordered that all male children be killed.',
          frame: '[blank], he gathered pregnant women in one place and ordered that all male children be killed.',
          answers: [
            'Therefore',
            'As a result',
            'Consequently',
            'For this reason',
            'Because of this',
            'Because of that',
            'Thus',
          ],
        },
        {
          source: 'Upon this, Azer took his wife, who was pregnant with Abraham (pbuh), to a safe place …',
          frame: 'Upon this, Azer took his wife, [blank] Abraham (pbuh), to a safe place …',
          answers: ['pregnant with', 'then pregnant with', 'who was expecting', 'expecting'],
        },
        {
          source: '… and hid her in a cave, where Abraham (pbuh) was born.',
          frame: '… and hid her in a cave, [blank] Abraham (pbuh) was born.',
          answers: ['in which'],
        },
      ],
      correctAnswer: null,
      explanation: '“So” at the start of a sentence introduces a result; in more formal writing we use “Therefore”, “As a result” or “Consequently”. A non-defining relative clause like “who was pregnant with Abraham” can be shortened to the adjective phrase “pregnant with Abraham”. “Where” after a place means “in which”.',
      feedback: {
        correct: 'Well done. You kept the result, the extra detail and the place link.',
        incorrect: 'Item 1 needs a formal result linker. In item 2, drop “who was”. In item 3, replace “where” with a preposition + which. Check the end of Chapter 5.',
      },
    },
    {
      id: 'abraham-b2-language-5-production',
      type: 'reflection',
      title: 'Write a Layered Past Narrative',
      instructions: 'Write or say an 8–10 sentence paragraph about a historical or fictional situation outside this story. Establish a past setting, describe one later development with “was/were going to”, report a prediction or expectation with at least two uses of “would”, introduce an alternative account with “according to another account/source”, show a consequence with “so/upon this/as a result”, and add one “who” clause plus one “where” clause. Keep any alternative account clearly marked rather than presenting both versions as one certainty. Do not retell Chapter 5.',
      question: 'Can you organise a B2 past narrative that distinguishes viewpoint, prediction, source status, consequence and supporting detail?',
      correctAnswer: null,
      explanation: 'A strong response should control time from a past viewpoint, distinguish the status of an alternative account, connect causes and consequences, and embed background/place detail without breaking the narrative flow.',
      feedback: {
        correct: 'Check that your paragraph keeps the alternative account visibly qualified and that each connector or clause has a clear discourse purpose.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Viewpoint — Which event was still in the future from your chosen past moment?',
          mode: 'Individual',
        },
        { question: 'Prediction — Which later developments will you report with “would”?', mode: 'Individual' },
        {
          question: 'Source status — How will you signal that the second account is an alternative rather than an additional certainty?',
          mode: 'Pair',
        },
        {
          question: 'Cohesion — Which detail belongs in a “who” clause and which belongs in a “where” clause?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 6 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-b2-language-6-time-background',
      type: 'multiple-choice',
      title: 'What Does “Being a Child” Add?',
      instructions: 'Read the sentence from Chapter 6. Then choose the best explanation.',
      question: '“Being a child, he played with the statues, …” What does “Being a child” add to the sentence?',
      options: [
        'It gives the background reason for his behaviour: because he was a child, he played with them.',
        'It shows that he was playing and becoming a child at the same moment.',
        'It describes his father, who was making the statues.',
        'It shows that he stopped being a child after this event.',
      ],
      correctAnswer: 0,
      explanation: 'A participle clause with “being” at the start of a sentence often gives a reason or background state: “Being a child” = “As he was a child”. Its subject is the same as the subject of the main clause (he). This compact form keeps the main event, “he played with the statues”, in focus.',
      feedback: {
        correct: 'Correct. “Being a child” explains why he treated the statues as toys.',
        incorrect: 'Who is the subject of “being”? Read the main clause that follows it. Why did Abraham play with the statues?',
      },
    },
    {
      id: 'abraham-b2-language-6-reporting-directives',
      type: 'transformation',
      title: 'Reported and Direct Speech',
      instructions: 'Rewrite each sentence from Chapter 6 with the words given.',
      question: 'How do questions, statements and orders change between direct and reported speech?',
      transformItems: [
        {
          source: 'Abraham (pbuh) asked: “What is this statue, father? …”',
          frame: 'Abraham asked his father [blank].',
          answers: ['what that statue was', 'what this statue was', 'what the statue was'],
        },
        {
          source: 'His father replied that he made statues of gods.',
          frame: 'His father replied, “[blank] statues of gods.”',
          answers: ['I make', 'I am making', 'I’m making', 'I\'m making'],
        },
        {
          source: 'He ordered his son not to play with it again.',
          frame: 'He said to his son, “[blank] with it again.”',
          answers: ['Do not play', 'Don’t play', 'Don\'t play', 'Never play'],
        },
      ],
      correctAnswer: null,
      explanation: 'A reported question uses statement word order and moves the tense back: “What is this statue?” → “what that statue was”. A reported statement also moves back, so the direct words behind “he made” are “I make”. A reported order uses order + person + (not) to + verb; in direct speech it becomes an imperative: “Don’t play …”.',
      feedback: {
        correct: 'Well done. You changed the question, the statement and the order correctly.',
        incorrect: 'In a reported question the verb comes after the subject (what the statue was). In direct speech, go back to the present and use an imperative for the order.',
      },
    },
    {
      id: 'abraham-b2-language-6-comparison-effect',
      type: 'word-bank',
      title: 'Making a Comparison',
      instructions: 'Complete the lines from Chapter 6 with words from the bank. Three options are not needed.',
      question: 'Which words build the comparisons that make the idols look ordinary?',
      fillBlanksText: '… sitting on their backs [blank] people sit on the backs of donkeys. … “What is this statue, father? It has big ears, [blank] [blank] ours.”',
      wordBank: ['as', 'bigger', 'than', 'such as', 'more', 'then'],
      correctAnswer: ['as', 'bigger', 'than'],
      explanation: '“As” + clause compares two actions: he sat on the statues in the same way people sit on donkeys. “Such as” introduces examples, not a clause. Short adjectives form the comparative with -er + than: “bigger than ours”; “more big” is wrong, and “then” is a time word. The comparisons make the “god of gods” look like an ordinary object.',
      feedback: {
        correct: 'Correct. You completed both comparisons.',
        incorrect: 'The first gap is followed by a full clause (people sit …). The second comparison needs a short adjective + -er and the word that introduces what is compared.',
      },
    },
    {
      id: 'abraham-b2-language-6-production',
      type: 'reflection',
      title: 'Build a Childhood Memory with Layered Language',
      instructions: 'Write or say an 8–10 sentence paragraph about a childhood memory or fictional scene outside this story. Use one broad time frame such as “when I was young” or “during my early childhood”, one specific event marker such as “one day”, one non-finite background phrase such as “being a child” or an equivalent structure, one reported question, one reported statement, one directive with “told/ordered + person + (not) to”, and one comparison with “as” or a comparative form. Make the paragraph coherent rather than listing grammar examples.',
      question: 'Can you use time framing, reported interaction and comparison to organise a coherent B2 narrative?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish background from main events, preserve the different functions of reported speech, and use comparison to develop perspective rather than as an isolated sentence pattern.',
      feedback: {
        correct: 'Check that every target form contributes to the narrative flow and that the reported speech functions remain distinct.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Time — Which sentence establishes the broad childhood frame, and which sentence moves to one specific event?',
          mode: 'Individual',
        },
        {
          question: 'Background — What information can you compress into a non-finite phrase instead of another full event sentence?',
          mode: 'Individual',
        },
        {
          question: 'Speech — Which part is a question, which is a statement, and which is a directive?',
          mode: 'Pair',
        },
        {
          question: 'Comparison — What comparison will reveal a viewpoint rather than merely describe size or appearance?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 7 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-b2-language-7-reasoning-chain',
      type: 'true-false',
      title: 'What Does “As If” Tell Us?',
      instructions: 'Read the sentence from Chapter 7. Is the statement true or false?',
      question: 'In “It shocked him to see people bowing, crying, and begging the idols for help, as if those lifeless idols were capable of hearing their prayers!”, the writer suggests that the idols may really have heard the prayers.',
      correctAnswer: false,
      explanation: '“As if” + past form (were) describes behaviour that suggests something unreal. The people behaved like the idols could hear, but the writer calls them “lifeless idols”, so the comparison shows a contradiction between the people’s behaviour and reality.',
      feedback: {
        correct: 'Correct. “As if … were” marks the idea as unreal.',
        incorrect: 'Notice the word “lifeless” in the same clause and the past form “were”. Does the writer think the idols could hear?',
      },
    },
    {
      id: 'abraham-b2-language-7-modality-possibility',
      type: 'choose-form',
      title: 'Background Inside the Sentence',
      instructions: 'Choose the correct form to complete each sentence from Chapter 7.',
      question: 'How does the chapter add earlier actions and background details inside one sentence?',
      formChoices: [
        {
          options: ['had made', 'has made', 'was making'],
          sentence: '… how a reasonable person could make a statue and then worship what he [choice].',
          answer: 0,
        },
        {
          options: ['which', 'that', 'it'],
          sentence: 'Abraham (pbuh)’s people had a big temple full of idols, in the middle of [choice] was a niche housing the biggest gods.',
          answer: 0,
        },
        {
          options: ['who', 'which', 'that'],
          sentence: 'Abraham (pbuh), [choice] used to go to the temple with his father when he was a child, greatly disliked all that wood and stone.',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The past perfect “had made” shows that making the statue came before worshipping it. After a preposition, English uses “which” for things (“in the middle of which”), never “that”. In a non-defining clause between commas, a person takes “who”; “that” is not used in non-defining clauses.',
      feedback: {
        correct: 'Correct. You chose the earlier past and the right relative words.',
        incorrect: 'Ask: which action came first? What follows a preposition? Is the clause between commas? Then check the second paragraph of Chapter 7.',
      },
    },
    {
      id: 'abraham-b2-language-7-relative-as-if-change',
      type: 'transformation',
      title: 'From Evidence to Evaluation',
      instructions: 'Rewrite each sentence from Chapter 7 with the words given. Keep the meaning.',
      question: 'How can ability, impossibility and a change of feeling be expressed in other ways?',
      transformItems: [
        {
          source: '… when they fell, they could not get back up.',
          frame: '… when they fell, they [blank] get back up.',
          answers: ['were not able to', 'were unable to', 'weren\'t able to', 'weren’t able to'],
        },
        {
          source: 'It was impossible to understand how people could believe that such statues could harm or benefit them!',
          frame: 'Abraham [blank] how people could believe that such statues could harm or benefit them.',
          answers: [
            'could not understand',
            'couldn\'t understand',
            'couldn’t understand',
            'was unable to understand',
            'was not able to understand',
            'found it impossible to understand',
          ],
        },
        {
          source: 'At first, Abraham thought the sight was funny, but later his feelings turned into anger.',
          frame: 'Although Abraham [blank] the sight was funny, later his feelings turned into anger.',
          answers: ['at first thought', 'first thought', 'initially thought', 'thought'],
        },
      ],
      correctAnswer: null,
      explanation: '“Could not” can express physical inability (the statues “could not get back up” = were unable to). The impersonal “It was impossible to understand …” is a strong evaluation; with a person as subject it becomes “Abraham could not understand …”. “At first …, but later …” shows a change; with “Although” the first feeling becomes a concession, and “but” is dropped.',
      feedback: {
        correct: 'Well done. You kept the ability, the evaluation and the change of feeling.',
        incorrect: 'Item 1 needs “be able to”. Item 2 needs a verb of understanding with “Abraham” as subject. In item 3, “Although” replaces “but”. Check the second paragraph of Chapter 7.',
      },
    },
    {
      id: 'abraham-b2-language-7-production',
      type: 'reflection',
      title: 'Write an Observation-to-Evaluation Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone notices a contradiction between evidence and behaviour or belief. Include: one observation with three linked qualities, one concrete example introduced by “when” or “if”, one use of “could” for plausibility and one for ability, one relative clause that embeds background, one “as if” clause that reveals the gap between appearance and reality, and an “at first ... but later ...” change in viewpoint or feeling. Keep the paragraph coherent and evidence-led.',
      question: 'Can you move from observation to evidence, evaluation, contradiction and changed viewpoint in a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should use the target structures to organize reasoning. The grammar should help the reader see how evidence leads to judgement and how the writer’s viewpoint develops.',
      feedback: {
        correct: 'Check that your paragraph has a visible reasoning chain and that the two uses of “could” perform different functions.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Observation — What three qualities or facts will form the basis of your judgement?',
          mode: 'Individual',
        },
        {
          question: 'Evidence — What concrete “when/if” example will make the observation harder to dismiss?',
          mode: 'Individual',
        },
        {
          question: 'Viewpoint — Where can an “as if” clause expose a gap between appearance and reality?',
          mode: 'Pair',
        },
        {
          question: 'Development — How will “at first ... but later ...” show a genuine change rather than simple chronology?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 8 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-b2-language-8-concession-persistence',
      type: 'multiple-choice',
      title: 'Purpose in the Verse',
      instructions: 'Read the lines from Surah En’âm quoted in Chapter 8. Then choose the best explanation.',
      question: '“Thus, We showed Abraham the empire of the heavens and the earth, that he might be one of those with certainty.” What does “that he might be …” express?',
      options: [
        'The purpose of showing him the heavens and the earth: so that he would reach certainty.',
        'A doubt about whether Abraham was ever certain.',
        'A permission given to Abraham.',
        'A result that had happened before he was shown anything.',
      ],
      correctAnswer: 0,
      explanation: '“That + subject + might/may …” is a formal way of expressing purpose, like “so that he would …”. In the verse, what Abraham was shown has a clear aim: his certainty. The chapter then tells how he looked at the planets and stars.',
      feedback: {
        correct: 'Correct. The clause gives the purpose of what Abraham was shown.',
        incorrect: 'Ask why Abraham was shown the heavens and the earth. The clause after “that” answers this question.',
      },
    },
    {
      id: 'abraham-b2-language-8-purpose-result',
      type: 'error-correction',
      title: 'Persistence and Its Effect',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a relative clause that comments on a situation and a verb pattern that shows persistence?',
      errorItems: [
        {
          options: ['which', 'that', 'who'],
          sentence: 'His father wanted him to become a priest when he grew up, what made things even worse.',
          error: 'what',
          answer: 0,
        },
        {
          options: ['displaying', 'display', 'displayed'],
          sentence: 'He only wanted his son to show respect to those statues, yet Abraham (pbuh) never stopped to display his hatred.',
          error: 'to display',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'A comment on a whole situation is added with “, which …”: “…, which made things even worse”. “What” cannot refer back to a clause, and “that” is not used after a comma. “Stop + -ing” means to end an activity: “never stopped displaying his hatred” shows persistence. “Stop + to” would mean stopping in order to do something else. “Yet” sets his persistence against the father’s wish.',
      feedback: {
        correct: 'Well done. You fixed the comment clause and the verb pattern.',
        incorrect: 'Which relative word comments on a whole clause after a comma? Which form follows “stop” when an activity continues or ends? Check the first paragraph of Chapter 8.',
      },
    },
    {
      id: 'abraham-b2-language-8-temporal-reasoning',
      type: 'sentence-building',
      title: 'Build the Narrator’s Conclusion',
      instructions: 'Tap the pieces to rebuild the last sentence of Chapter 8.',
      question: 'How does the narrator link an observation to its reason?',
      sentenceChunks: [
        'Abraham (pbuh) saw',
        'that the stars',
        'couldn\'t show up',
        'when they wanted to',
        'because they could only do so',
        'at night.',
      ],
      correctAnswer: null,
      explanation: '“Saw that …” here means “understood that …”: it reports a conclusion. “Because” gives the reason. “Do so” replaces the verb phrase “show up”, so the writer does not repeat it. The sentence turns what Abraham observed in the night sky into evidence that the stars have no control over themselves.',
      feedback: {
        correct: 'Well done. The conclusion comes first, then its reason.',
        incorrect: 'Start with who saw what. Then add when the stars wanted to appear, and finally the reason with “because … do so at night”.',
      },
    },
    {
      id: 'abraham-b2-language-8-production',
      type: 'reflection',
      title: 'Write a Change-as-Evidence Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which an initial appearance is tested by what happens over time. Include: one expectation imposed by another person, one “yet” contrast showing persistence, one evaluative relative clause with “which”, one purpose/intended-result clause using “so that” or “might”, and a temporal reasoning chain using “when ... but when ...” that leads to a conclusion. Keep the paragraph analytical rather than narrative-only.',
      question: 'Can you use contrast, purpose and temporal change to build an evidence-based B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should make grammatical choices carry the reasoning: pressure is contrasted with persistence, an action has an intended result, and change over time becomes evidence for the final judgement.',
      feedback: {
        correct: 'Check that every target structure contributes to the argument rather than appearing as an isolated grammar example.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Pressure — What expectation or demand will someone else impose?', mode: 'Individual' },
        {
          question: 'Contrast — What will continue despite that pressure, and where will “yet” make the contrast clearest?',
          mode: 'Individual',
        },
        {
          question: 'Evidence — What change over time will your “when ... but when ...” sequence reveal?',
          mode: 'Pair',
        },
        {
          question: 'Conclusion — What evaluation follows from that change, and how will you avoid merely retelling events?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

/** Chapter 9 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-b2-language-9-condition-guidance',
      type: 'true-false',
      title: 'Condition and Guidance',
      instructions: 'Read the line from the verse quoted in Chapter 9. Is the statement true or false?',
      question: 'In “If my Lord does not guide me, I will be one of the erring people”, Abraham says that he has already gone astray.',
      correctAnswer: false,
      explanation: 'This is a real (first) conditional: if + present simple, will + verb. It describes a possible future result that depends on a condition. Abraham does not say he has gone astray; he says his right guidance depends on his Lord. This prepares his clear statement at the end of the verse: “I am not of the idolaters.”',
      feedback: {
        correct: 'Correct. The sentence states a condition and a possible result, not a past fact.',
        incorrect: 'Look at the verb forms: “if … does not guide” and “will be”. Is this about the past or about a possible result?',
      },
    },
    {
      id: 'abraham-b2-language-9-stance-shift',
      type: 'word-bank',
      title: 'Appearance and Reality',
      instructions: 'Complete the lines from Chapter 9 with words from the bank. Three options are not needed.',
      question: 'Which forms separate what people did from what was really true?',
      fillBlanksText: 'He was astonished that these heavenly bodies [blank] by people, [blank] all those stars, asteroids, the Sun, the Moon, etc., [blank]; they appeared and disappeared at the Creator’s command.',
      wordBank: [
        'were worshipped',
        'while in fact',
        'had been created',
        'worshipped',
        'so that',
        'had created',
      ],
      correctAnswer: ['were worshipped', 'while in fact', 'had been created'],
      explanation: 'The passive “were worshipped by people” keeps the heavenly bodies as the topic and shows how people treated them. “While in fact” marks a correction: it moves from human practice to the reality the writer asserts. The passive past perfect “had been created” shows that these bodies are the results of creation, not creators; the active “had created” would say the opposite.',
      feedback: {
        correct: 'Correct. You separated human practice from the reality behind it.',
        incorrect: 'The heavenly bodies did not worship or create; something was done to them. Which linker corrects an appearance? Check the end of the first paragraph of Chapter 9.',
      },
    },
    {
      id: 'abraham-b2-language-9-created-vs-creator',
      type: 'transformation',
      title: 'Who Does What?',
      instructions: 'Rewrite each sentence from Chapter 9 with the words given. Keep the meaning.',
      question: 'How can the same idea be expressed with a different subject or a shorter description?',
      transformItems: [
        {
          source: 'In that debate, Abraham (pbuh) demonstrated to the people that these heavenly bodies cannot be worshipped as partners with Allah.',
          frame: '… Abraham (pbuh) demonstrated to the people that they [blank] these heavenly bodies as partners with Allah.',
          answers: [
            'cannot worship',
            'can\'t worship',
            'can’t worship',
            'could not worship',
            'couldn\'t worship',
            'couldn’t worship',
            'must not worship',
            'should not worship',
          ],
        },
        {
          source: 'People who worshipped astronomical objects got into arguments with Abraham (pbuh).',
          frame: '[blank] got into arguments with Abraham (pbuh).',
          answers: [
            'Worshippers of astronomical objects',
            'People worshipping astronomical objects',
            'Those who worshipped astronomical objects',
            'The worshippers of astronomical objects',
          ],
        },
      ],
      correctAnswer: null,
      explanation: 'The passive “cannot be worshipped” focuses on the heavenly bodies; the active “they cannot worship” focuses on the people. A defining relative clause (“people who worshipped …”) can be shortened to an -ing phrase (“people worshipping …”) or replaced by a noun (“worshippers of …”).',
      feedback: {
        correct: 'Well done. You changed the focus and kept the meaning.',
        incorrect: 'In item 1, “they” means the people, so use an active modal verb. In item 2, shorten “People who worshipped …”. Check the last paragraph of Chapter 9.',
      },
    },
    {
      id: 'abraham-b2-language-9-production',
      type: 'reflection',
      title: 'Build an Evidence-to-Stance Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story issue where an initial appearance is tested and then rejected or revised. Include: one real condition with “if ... will ...”, one sentence that moves from tentative examination to explicit stance, one passive structure that foregrounds an object or idea, one corrective contrast using “while in fact” or “however”, and one final sentence explaining how repeated evidence leads to a reasoned position. Keep the paragraph analytical and coherent.',
      question: 'Can you use condition, contrast, passive focus and stance development to build a B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should show reasoning developing across the paragraph: a possibility is examined, evidence changes the evaluation, and the final stance is expressed more explicitly.',
      feedback: {
        correct: 'Check that each target structure advances the argument and that the final stance follows from the evidence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Condition — What outcome will depend on a clear “if” condition?', mode: 'Individual' },
        {
          question: 'Appearance — What seems plausible at first, and what evidence later challenges it?',
          mode: 'Individual',
        },
        {
          question: 'Correction — Where will a passive structure and “while in fact” sharpen the contrast?',
          mode: 'Pair',
        },
        { question: 'Stance — How will the final sentence show a stronger, evidence-based position?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 10 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-b2-language-10-created-controlled-purpose',
      type: 'matching',
      title: 'Words That Describe Created Things',
      instructions: 'Match each expression from Chapter 10 with its meaning.',
      question: 'What does the chapter say about the heavenly bodies?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'evidently created', right: 'clearly brought into existence by Someone else' },
        { left: 'controlled, managed', right: 'directed by a power outside themselves' },
        { left: 'made to serve a purpose', right: 'existing to do a particular job' },
        { left: 'come and go', right: 'appear for a time and then disappear' },
        { left: 'unworthy of worship', right: 'not deserving to be worshipped' },
      ],
      correctAnswer: {
        'evidently created': 'clearly brought into existence by Someone else',
        'controlled, managed': 'directed by a power outside themselves',
        'made to serve a purpose': 'existing to do a particular job',
        'come and go': 'appear for a time and then disappear',
        'unworthy of worship': 'not deserving to be worshipped',
      },
      explanation: 'The passive participles “created, controlled, managed, and made …” all present the heavenly bodies as things that something is done to: they do not act by themselves. “Evidently” means “clearly, as can be seen”. The prefix un- in “unworthy” means “not”. Together these words prepare the chapter’s conclusion that the sun and moon are signs, not gods.',
      feedback: {
        correct: 'Correct. You matched each description with its meaning.',
        incorrect: 'Read the first two sentences of Chapter 10 again. Which words show dependence, which show purpose, and which show change?',
      },
    },
    {
      id: 'abraham-b2-language-10-however-contrast',
      type: 'multiple-choice',
      title: 'What Does “However” Contrast?',
      instructions: 'Read the lines from Chapter 10. Then choose the best explanation.',
      question: '“They come and go, sometimes fading from the world. However, Allah sees and knows everything; nothing can be hidden from Him.” What contrast does “However” mark?',
      options: [
        'Between created bodies that come and go and Allah, Who knows everything and does not disappear.',
        'Between Abraham’s view and the star worshippers’ view.',
        'Between the night, when stars appear, and the day, when they fade.',
        'Between what Abraham believed as a child and what he believed later.',
      ],
      correctAnswer: 0,
      explanation: '“However” links two sentences that contrast. Before it: the heavenly bodies are created, controlled and temporary. After it: Allah sees and knows everything and is “everlasting without disappearance”. The contrast is between the created and the Creator.',
      feedback: {
        correct: 'Correct. “However” sets the limited, changing bodies against Allah.',
        incorrect: 'Read the sentence just before “However” and the sentences just after it. Who or what is described on each side?',
      },
    },
    {
      id: 'abraham-b2-language-10-firstly-secondly',
      type: 'transformation',
      title: 'Organising a Two-Part Explanation',
      instructions: 'Rewrite each sentence from Chapter 10 with the words given. Keep the meaning.',
      question: 'How can two points and a sequence of events be organised in another way?',
      transformItems: [
        {
          source: 'Abraham (pbuh) clarified the situation for them, firstly, that the heavenly bodies are unworthy of worship and, secondly, that they are the signs of Allah.',
          frame: 'Abraham (pbuh) clarified [blank] the heavenly bodies are unworthy of worship but also that they are the signs of Allah.',
          answers: ['not only that'],
        },
        {
          source: 'Abraham (pbuh)’s rational thinking helped to uncover the truth, and then the conflict between him and the worshippers of the stars and planets started.',
          frame: '[blank] Abraham (pbuh)’s rational thinking helped to uncover the truth, the conflict between him and the worshippers of the stars and planets started.',
          answers: ['After', 'Once', 'When', 'As soon as'],
        },
      ],
      correctAnswer: null,
      explanation: '“Firstly … secondly …” lists two points in order. “Not only that … but also that …” joins the same two points and shows that the second adds something important: the heavenly bodies are rejected as gods but reinterpreted as signs. “…, and then …” can become a time clause with “After” or “Once”, which puts the first event in the background.',
      feedback: {
        correct: 'Well done. You kept both points and the order of events.',
        incorrect: 'Item 1 needs the first half of “not only … but also”. Item 2 needs a time word that shows the first event came before the conflict.',
      },
    },
    {
      id: 'abraham-b2-language-10-production',
      type: 'reflection',
      title: 'Build a Contrast-and-Reframing Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story topic where something visible is first evaluated, then reinterpreted through evidence. Use one passive description, one “however” contrast, a “firstly / secondly” structure, and a final sentence showing how evidence leads to disagreement or debate. Do not retell the Abraham story.',
      question: 'Can you move from observation to contrast, evaluation and reframing in a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make each language choice advance the reasoning: observation, limitation, contrast, two-part interpretation, and a final consequence.',
      feedback: {
        correct: 'Check that your paragraph develops an argument rather than listing disconnected sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Observation — What visible feature will you describe first?', mode: 'Individual' },
        { question: 'Contrast — What will “however” introduce?', mode: 'Individual' },
        { question: 'Reframing — What will “firstly” reject and “secondly” reinterpret?', mode: 'Pair' },
        { question: 'Consequence — How will the reasoning lead to disagreement, decision, or debate?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 11 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-b2-language-11-rhetorical-questions',
      type: 'drag-drop',
      title: 'What the Verses Say, What the Writer Adds',
      instructions: 'Sort the parts of Chapter 11. Is it from the verses, or is it the writer’s comment or inference?',
      question: 'How does the chapter separate quoted evidence from interpretation?',
      dragDropGroups: [
        {
          group: 'From the verses',
          items: [
            'My Lord comprehends all things in knowledge.',
            '… for which He sent down to you no authority?',
            'So which of the two parties has more right to security, if you are aware?',
          ],
        },
        {
          group: 'The writer’s comment or inference',
          items: [
            'His people attempted to argue with him and present evidence to prove the correctness of their beliefs.',
            'That these arguments are not told in the verses shows the ridiculousness of their claims.',
            'It is understood from Abraham (pbuh)’s statement … that his people threatened him with the punishment of their gods.',
          ],
        },
      ],
      correctAnswer: {
        'From the verses': [
          'My Lord comprehends all things in knowledge.',
          '… for which He sent down to you no authority?',
          'So which of the two parties has more right to security, if you are aware?',
        ],
        'The writer’s comment or inference': [
          'His people attempted to argue with him and present evidence to prove the correctness of their beliefs.',
          'That these arguments are not told in the verses shows the ridiculousness of their claims.',
          'It is understood from Abraham (pbuh)’s statement … that his people threatened him with the punishment of their gods.',
        ],
      },
      explanation: 'The chapter first quotes Surah En’âm: 80–83 and then comments on it. The writer’s sentences use their own framing: “attempted to …” reports; “That these arguments are not told … shows …” draws a conclusion from something missing; “It is understood from … that …” marks an inference. A careful reader keeps the quoted evidence and the writer’s interpretation apart.',
      feedback: {
        correct: 'Correct. You separated the quoted evidence from the writer’s interpretation.',
        incorrect: 'Find where the quotation from Surah En’âm ends. Sentences after it are the writer’s. Look for “shows”, “It is understood” and “attempted”.',
      },
    },
    {
      id: 'abraham-b2-language-11-unless-exception',
      type: 'multiple-choice',
      title: 'An Exception That Keeps the Claim',
      instructions: 'Read the line from the verse quoted in Chapter 11. Then choose the best explanation.',
      question: '“I do not fear partners you assign to Him, unless my Lord wills it.” What does “unless my Lord wills it” do?',
      options: [
        'It keeps the main statement — no fear of the partners — and says that anything that happens to him depends only on his Lord’s will.',
        'It shows that Abraham is sometimes afraid of the partners.',
        'It means that the partners can harm Abraham if they want to.',
        'It shows that Abraham will begin to fear the partners later.',
      ],
      correctAnswer: 0,
      explanation: '“Unless” means “except if”. It adds one narrow exception without cancelling the main claim. Abraham still rejects any fear of the false partners; the only power he recognises over what happens to him is his Lord’s will.',
      feedback: {
        correct: 'Correct. The exception points to his Lord’s will, not to the partners’ power.',
        incorrect: 'Who is the subject of “wills” in the exception: the partners or his Lord? Does the exception give power to the partners?',
      },
    },
    {
      id: 'abraham-b2-language-11-authority-evidence-inference',
      type: 'transformation',
      title: 'Framing an Inference',
      instructions: 'Rewrite each sentence from Chapter 11 with the words given. Keep the meaning.',
      question: 'How can a writer turn a fact into the subject of a sentence, or state an inference personally?',
      transformItems: [
        {
          source: 'That these arguments are not told in the verses shows the ridiculousness of their claims.',
          frame: '[blank] these arguments are not told in the verses shows the ridiculousness of their claims.',
          answers: ['The fact that'],
        },
        {
          source: 'It is understood from Abraham (pbuh)’s statement … that his people threatened him with the punishment of their gods.',
          frame: 'We [blank] from Abraham (pbuh)’s statement … that his people threatened him with the punishment of their gods.',
          answers: ['understand', 'can understand', 'infer', 'can infer', 'can conclude', 'conclude'],
        },
      ],
      correctAnswer: null,
      explanation: 'A that-clause can be the subject of a sentence (“That these arguments are not told … shows …”), but it is very formal; “The fact that …” is clearer. The impersonal passive “It is understood from … that …” marks an inference without naming who makes it; “We understand/infer from … that …” states the same inference in the active voice.',
      feedback: {
        correct: 'Well done. You kept the evidence and the inference clear.',
        incorrect: 'Item 1 needs a noun phrase before “that”. Item 2 needs an active verb for drawing a conclusion. Check the last three sentences of Chapter 11.',
      },
    },
    {
      id: 'abraham-b2-language-11-production',
      type: 'reflection',
      title: 'Build a Question-Led Evidence Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story disagreement. Use at least two rhetorical questions, one narrow exception with “unless”, one sentence about evidence or authority, one sentence that explicitly marks an inference with wording such as “it can be inferred that”, and a final comparison that asks which position is better supported. Do not retell the Abraham story.',
      question: 'Can you use questions, qualification and evidence status to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should use language choices to organise reasoning: challenge an assumption, qualify a claim, distinguish evidence from inference, and end with an evaluative comparison.',
      feedback: {
        correct: 'Check that your questions advance the argument and that your inference is clearly marked as an inference.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Assumption — Which idea will your first rhetorical question challenge?', mode: 'Individual' },
        { question: 'Qualification — What narrow exception will “unless” introduce?', mode: 'Individual' },
        { question: 'Evidence — What is directly supported, and what is only inferred?', mode: 'Pair' },
        { question: 'Comparison — How will your final question compare the two positions?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 12 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-b2-language-12-discourse-stance',
      type: 'sequencing',
      title: 'Follow the Debate',
      instructions: 'Put the lines of the exchange from Surah Enbiyâ in Chapter 12 in order. Use what each line does to help you.',
      question: 'How does the debate move from a question to a clear statement of belief?',
      sequencingItems: [
        { id: '1', text: '‘What are these statues to which you are faithful?’' },
        { id: '2', text: '‘We found our parents worshiping them.’' },
        { id: '3', text: '‘You and your parents are in evident error.’' },
        { id: '4', text: '‘Are you telling us the truth, or are you just playing?’' },
        {
          id: '5',
          text: '‘Your Lord is the Lord of the heavens and the earth, the One who created them, and I bear witness to that.’',
        },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: 'Each line does something in the argument. Abraham opens with a challenging question. The people justify their worship with tradition (“We found our parents …”). Abraham answers the justification directly: the parents were also in error. The people then question his seriousness, and Abraham replies with a positive statement of belief and his own witness.',
      feedback: {
        correct: 'Correct. You followed the debate from question to justification, judgement, doubt and declaration.',
        incorrect: 'Look for links: “your parents” answers “our parents”, and “Are you telling us the truth” reacts to a strong judgement. Check the verses in Chapter 12.',
      },
    },
    {
      id: 'abraham-b2-language-12-direct-speech-functions',
      type: 'matching',
      title: 'Words for Response and Conflict',
      instructions: 'Match each expression from Chapter 12 with its meaning.',
      question: 'Which expressions describe Abraham’s response and the people’s position?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'paid no heed to', right: 'ignored; did not let it affect him' },
        { left: 'mindful of', right: 'keeping something in mind and aware of it' },
        { left: 'to which you are faithful', right: 'that you stay loyal to' },
        { left: 'in evident error', right: 'clearly mistaken' },
        { left: 'a bitter struggle', right: 'a hard and painful conflict' },
      ],
      correctAnswer: {
        'paid no heed to': 'ignored; did not let it affect him',
        'mindful of': 'keeping something in mind and aware of it',
        'to which you are faithful': 'that you stay loyal to',
        'in evident error': 'clearly mistaken',
        'a bitter struggle': 'a hard and painful conflict',
      },
      explanation: 'Several of these expressions are fixed combinations: pay (no) heed to, be mindful of, be faithful to (in the verse the preposition moves to the front: “to which you are faithful”). Learn them with their prepositions. “Evident” means “clear, easy to see”, and “bitter” with “struggle” means painful and full of anger.',
      feedback: {
        correct: 'Correct. You matched each expression with its meaning.',
        incorrect: 'Find each expression in Chapter 12 and read the sentence around it: a threat, a duty, statues, a judgement, and the relationship with his people.',
      },
    },
    {
      id: 'abraham-b2-language-12-contrast-expansion',
      type: 'transformation',
      title: 'Adding and Reporting',
      instructions: 'Rewrite each sentence from Chapter 12 with the words given. Keep the meaning.',
      question: 'How can a writer stress an addition and turn a reported instruction into direct speech?',
      transformItems: [
        {
          source: '… for he not only worshipped idols but shaped and sold them as well.',
          frame: 'Not only [blank] idols, but he shaped and sold them as well.',
          answers: ['did he worship'],
        },
        {
          source: 'He told them to firmly reject the worship of idols.',
          frame: 'He said to them, “[blank] the worship of idols.”',
          answers: ['Firmly reject', 'Reject'],
        },
      ],
      correctAnswer: null,
      explanation: '“Not only … but (also/as well)” adds a stronger second point: the father did more than worship idols, he made and sold them. When a sentence starts with “Not only”, the subject and auxiliary change places, as in a question: “Not only did he worship …”. A reported instruction (told them to + verb) becomes an imperative in direct speech.',
      feedback: {
        correct: 'Well done. You used inversion after “Not only” and changed the instruction into direct speech.',
        incorrect: 'After “Not only” at the start, use question word order: did + subject + verb. For item 2, start with the base verb.',
      },
    },
    {
      id: 'abraham-b2-language-12-production',
      type: 'reflection',
      title: 'Build a Stance-and-Response Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone faces pressure but responds from a clear principle. Use one viewpoint frame such as “As a...”, one connector such as “In doing so” to explain the meaning of an action, one short exchange containing a genuine challenge and a response, and one “not only... but also...” sentence that expands the final description. Do not retell the Abraham story.',
      question: 'Can you use viewpoint, dialogue and expanding contrast to build a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should connect pressure, principle, action, interpretation and dialogue into one coherent argument rather than produce isolated grammar examples.',
      feedback: {
        correct: 'Check that every language choice advances the paragraph’s stance and that the dialogue has a clear function.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Pressure — What external pressure starts your situation?', mode: 'Individual' },
        { question: 'Viewpoint — Which identity or principle will frame the response?', mode: 'Individual' },
        {
          question: 'Dialogue — What challenge will one speaker make, and how will the other reframe it?',
          mode: 'Pair',
        },
        {
          question: 'Expansion — What second fact will “not only... but also...” add to deepen the final description?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusPart1: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter1,
  ...abrahamB2LanguageFocusChapter2,
  ...abrahamB2LanguageFocusChapter3,
  ...abrahamB2LanguageFocusChapter4,
  ...abrahamB2LanguageFocusChapter5,
  ...abrahamB2LanguageFocusChapter6,
  ...abrahamB2LanguageFocusChapter7,
  ...abrahamB2LanguageFocusChapter8,
  ...abrahamB2LanguageFocusChapter9,
  ...abrahamB2LanguageFocusChapter10,
  ...abrahamB2LanguageFocusChapter11,
  ...abrahamB2LanguageFocusChapter12,
};
