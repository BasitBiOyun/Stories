import type { Exercise } from '../../../../types';

/**
 * Manually authored B2 Language Focus for Moses, chapters 13–24.
 * Notice → Build → Use; every quoted sentence comes from the English chapter.
 * Qur'anic quotations are only read, sorted, matched or asked about, never altered.
 */

const reflection = (id: string, title: string, prompts: string[], explanation: string): Exercise => ({
  id, type: 'reflection', title, instructions: 'Produce a short response using the target language naturally and accurately.', question: prompts[0], correctAnswer: null, explanation,
  feedback: {
    correct: 'Check that each target form does a clear job in your paragraph.',
    incorrect: 'Look back at how the chapter uses these forms, then revise your paragraph.',
  },
  discussionPrompts: prompts.map(question => ({ question, mode: 'Individual' })),
});

export const mosesB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mo-b2-lf13-a',
      type: 'true-false',
      title: 'What Does “which” Point To?',
      instructions: 'Read the sentence from Chapter 13. Decide whether the statement about its meaning is true or false.',
      question: '“The young ladies returned home unexpectedly early, which surprised their father.” — Here “which” refers only to the word “home”.',
      correctAnswer: false,
      explanation: 'After a comma, “which” can refer to the whole previous clause. What surprised the father was the fact that the daughters came back unexpectedly early, not their home. This kind of relative clause adds a comment or reaction to an event.',
      feedback: {
        correct: 'Correct. “Which” refers to the whole event: their unexpectedly early return.',
        incorrect: 'What could surprise the father: the house, or the fact that his daughters came back so early?',
      },
    },
    {
      id: 'mo-b2-lf13-b',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct a cause phrase, a purpose clause and a time phrase?',
      errorItems: [
        {
          sentence: 'Due to Moses helped at the spring, they came back early and told him about it.',
          error: 'Moses helped',
          options: ['Moses\'s help', 'Moses help', 'Moses was helping'],
          answer: 0,
        },
        {
          sentence: 'She said, “Our father invites you to our home for that he may thank you in person.”',
          error: 'for that',
          options: ['so that', 'in order', 'so as'],
          answer: 0,
        },
        {
          sentence: 'After introduce himself, he told him about the unfortunate events in Egypt that had forced him to escape.',
          error: 'introduce',
          options: ['introducing', 'to introduce', 'introduced'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Due to” is followed by a noun phrase (“Moses’s help”), not a clause. “So that + subject + may/can/will” states the purpose of the invitation. After the preposition “after”, use the -ing form: “After introducing himself …”.',
      feedback: {
        correct: 'Well done. You corrected the cause phrase, the purpose clause and the -ing form.',
        incorrect: 'Ask what each word needs after it: “due to” + noun, a purpose linker + clause, “after” + -ing. Check the second half of Chapter 13.',
      },
    },
    reflection('mo-b2-lf13-c', 'Evidence and Interpretation', [
      'The chapter says, “It was clear to Moses that they enjoyed a comfortable and harmonious home life.” Write 4–5 sentences distinguishing what Moses directly observes from the interpretation he forms.',
    ], 'B2 reading should distinguish narrated evidence from the character’s interpretation of that evidence.'),
  ],
  14: [
    {
      id: 'mo-b2-lf14-a',
      type: 'multiple-choice',
      title: 'Reason, Not Coincidence',
      instructions: 'Choose the sentence that best keeps the reason the chapter gives.',
      question: '“This offer suited Moses well, because …” Which sentence best captures why the offer suited Moses?',
      options: [
        'It suited him although he already had a home and work in Midian.',
        'It suited him because the Pharaoh had ordered the family to employ him.',
        'It suited him because he was a stranger who urgently needed shelter and work.',
        'It suited him because he wanted to return to Egypt immediately.',
      ],
      correctAnswer: 2,
      explanation: 'The because-clause links the offer to Moses’s situation: a stranger with urgent needs. B2 readers look for the reason the text actually states instead of adding one.',
      feedback: {
        correct: 'Correct. The chapter explains the fit through his situation as a stranger in need.',
        incorrect: 'Find the sentence that begins “This offer suited Moses well” in Chapter 14 and read its because-clause.',
      },
    },
    {
      id: 'mo-b2-lf14-b',
      type: 'error-correction',
      title: 'Verb Patterns Around Work',
      instructions: 'Each sentence has one mistake in its verb pattern. Tap the wrong words, then choose the correction.',
      question: 'Can you use advise, offer and marry with the right pattern?',
      errorItems: [
        {
          sentence: 'Because they needed someone reliable and strong, one of the daughters advised her father employing Moses.',
          error: 'employing',
          options: ['to employ', 'employ', 'for employing'],
          answer: 0,
        },
        {
          sentence: 'They offered to Moses work with them.',
          error: 'offered to Moses work',
          options: ['offered Moses work', 'offered Moses to work', 'offered for Moses work'],
          answer: 0,
        },
        {
          sentence: 'Moses became a shepherd for the family, married with one of the daughters of the old man, and looked after the old man’s animals for ten long years.',
          error: 'married with',
          options: ['married', 'married to', 'got married with'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'advise + person + to-infinitive (“advised her father to employ Moses”); offer + person + thing (“offered Moses work”); marry + person, with no preposition (“married one of the daughters”). These patterns are fixed and often transferred wrongly from other languages.',
      feedback: {
        correct: 'Well done. You used the correct patterns for advise, offer and marry.',
        incorrect: 'Compare with Chapter 14: advise someone to do something; offer someone something; marry someone.',
      },
    },
    {
      id: 'mo-b2-lf14-c',
      type: 'word-bank',
      title: 'Purpose, Duration and Time',
      instructions: 'Complete the lines from Chapter 14 with words from the bank. Two words are not needed.',
      question: 'Which prepositions show the purpose of a period, the end of a period, and a point inside a time span?',
      fillBlanksText: 'This period of ten years was important in his life. It was a period of spiritual preparation [blank] prophethood. [blank] a period of ten years, Moses returned to his fatherland, Egypt, [blank] the early days of Ramses II’s rule (approximately 1279-1213 BC).',
      wordBank: ['for', 'After', 'during', 'Since', 'while'],
      correctAnswer: ['for', 'After', 'during'],
      explanation: '“Preparation for” names what the period prepares him for. “After a period of ten years” marks the end of the period. “During + noun” places his return inside a longer time span; “while” would need a clause, and “since” would need a perfect tense.',
      feedback: {
        correct: 'Correct. You chose the prepositions for purpose, sequence and time span.',
        incorrect: 'Check what follows each gap: a noun (prophethood), a length of time, and a noun phrase (the early days). Compare with the end of Chapter 14.',
      },
    },
    reflection('mo-b2-lf14-d', 'Preparation or Delay?', [
      'Write 6–7 sentences explaining why the text calls the ten years “spiritual preparation” rather than simply “a delay”. Use at least two pieces of chapter evidence and one qualifying phrase such as “the chapter presents…”.',
    ], 'B2 interpretation should be explicitly tied to textual evidence and framed as the text’s interpretation.'),
  ],
  15: [
    {
      id: 'mo-b2-lf15-a',
      type: 'multiple-choice',
      title: 'Hoping, Not Achieving',
      instructions: 'Read the sentence from Chapter 15 and choose the best interpretation.',
      question: '“Moses noticed a fire in the distance and approached it, hoping to bring his family some fire to warm themselves and find a guide by the fire.” What does “hoping to …” show?',
      options: [
        'A result he wanted but could not yet be sure of',
        'Something he had already done before he saw the fire',
        'An order that someone gave him',
        'Something he used to do every winter',
      ],
      correctAnswer: 0,
      explanation: 'The participle phrase “hoping to + verb” adds Moses’s aim at the moment he moves: warmth and guidance. “Hoping” marks an uncertain, wished-for result. The chapter then turns this ordinary purpose into the beginning of his mission.',
      feedback: {
        correct: 'Correct. “Hoping to” expresses a purpose that is not yet certain.',
        incorrect: 'Notice the word “hoping”. Did Moses already have the fire and a guide, or did he want them?',
      },
    },
    {
      id: 'mo-b2-lf15-b',
      type: 'transformation',
      title: 'Purpose and Something About to Happen',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you express purpose with “so that” and near future in the past in another way?',
      transformItems: [
        {
          source: 'Allah asked about the staff in Moses’ hand to make him focus on it.',
          frame: 'Allah asked about the staff in Moses’ hand so that he [blank] on it.',
          answers: ['would focus', 'could focus', 'might focus'],
        },
        {
          source: 'In this way Allah was preparing him for the miracle that was about to happen.',
          frame: 'In this way Allah was preparing him for the miracle that [blank] happen very soon.',
          answers: ['was going to', 'would'],
        },
      ],
      correctAnswer: null,
      explanation: 'A purpose infinitive (“to make him focus”) can become a “so that” clause; in a past context use “would / could + verb”. “Was about to happen” means it was going to happen very soon: a future seen from a past moment, which signals the coming turning point.',
      feedback: {
        correct: 'Well done. You rewrote the purpose and the near future in the past.',
        incorrect: 'Item 1: after “so that” in the past, use “would” or “could”. Item 2: “about to” = “going to … very soon”, in the past. Check the second half of Chapter 15.',
      },
    },
    reflection('mo-b2-lf15-c', 'Ordinary → Extraordinary', [
      'Write 5 sentences describing how the chapter moves from the ordinary uses of the staff to its extraordinary role. Use “at first”, “then”, and one relative clause with “which” or “on which”.',
    ], 'The task practises discourse movement from familiar description to a transformed meaning.'),
  ],
  16: [
    {
      id: 'mo-b2-lf16-a',
      type: 'matching',
      title: 'At the Fire: What the Words Do',
      instructions: 'Read the Qur’anic words quoted in Chapter 16. Match each line with what it does.',
      question: 'What does each quoted line do in the scene at the fire?',
      matchingHeadings: { left: 'From the chapter', right: 'What the words do' },
      matchingPairs: [
        { left: '‘Wait! Verily, I have seen a fire …’', right: 'tells his family to stay where they are while he goes on' },
        { left: 'perhaps I can bring you some burning brand therefrom', right: 'offers a hopeful possibility, not a promise' },
        { left: 'So take off your shoes; you are in the sacred valley, Tuwa.', right: 'gives an instruction and then the reason for it' },
        { left: 'so worship Me, and offer prayers perfectly for My remembrance', right: 'draws a consequence from the declaration that only Allah is to be worshipped' },
      ],
      correctAnswer: {
        '‘Wait! Verily, I have seen a fire …’': 'tells his family to stay where they are while he goes on',
        'perhaps I can bring you some burning brand therefrom': 'offers a hopeful possibility, not a promise',
        'So take off your shoes; you are in the sacred valley, Tuwa.': 'gives an instruction and then the reason for it',
        'so worship Me, and offer prayers perfectly for My remembrance': 'draws a consequence from the declaration that only Allah is to be worshipped',
      },
      explanation: '“Perhaps I can …” softens a plan into a possibility. In “take off your shoes; you are in the sacred valley”, the second clause gives the reason for the command. “So worship Me” follows from “none has the right to be worshipped but I”: “so” marks the consequence.',
      feedback: {
        correct: 'Correct. You identified the request, the possibility, the reasoned command and the consequence.',
        incorrect: 'Reread the quotation in Chapter 16. Look for “perhaps”, for the clause after the semicolon, and for what comes before “so worship Me”.',
      },
    },
    {
      id: 'mo-b2-lf16-b',
      type: 'transformation',
      title: 'Reason and Reported Command',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you express a reason with a participle clause and report a command?',
      transformItems: [
        {
          source: 'Moses’s fear subsided, and he felt peace, because he realized that he was witnessing the Truth.',
          frame: '[blank] that he was witnessing the Truth, Moses felt his fear subside and felt peace.',
          answers: ['Realizing', 'Realising', 'Having realized', 'Having realised', 'Because he realized', 'Because he realised', 'As he realized', 'As he realised', 'Since he realized', 'Since he realised'],
        },
        {
          source: 'Allah then commanded Moses: “You have two signs from your Lord; go to Pharaoh and his chiefs, for they are an evil group and have violated all limits.”',
          frame: 'Allah then commanded Moses [blank] to Pharaoh and his chiefs, because they were an evil group.',
          answers: ['to go'],
        },
      ],
      correctAnswer: null,
      explanation: 'A because-clause can be shortened into a participle clause when the subject is the same: “Realizing that …, Moses …”. A reported command uses command + object + to-infinitive: “commanded Moses to go”. “For” in the quotation means “because”.',
      feedback: {
        correct: 'Well done. You compressed the reason and reported the command.',
        incorrect: 'Item 1: start with an -ing form of “realize” (or a because-clause). Item 2: commanded + person + to + verb. Check Chapter 16.',
      },
    },
    reflection('mo-b2-lf16-c', 'Evidence Creates Responsibility', [
      'Write 5–7 sentences explaining how receiving the two signs changes Moses’s situation. Include one cause clause, one reported command, and one purpose clause.',
    ], 'The B2 target is to integrate grammar with the chapter’s meaning: signs are followed by a public responsibility.'),
  ],
  17: [
    {
      id: 'mo-b2-lf17-a',
      type: 'multiple-choice',
      title: 'Warning: “lest”',
      instructions: 'Read the Qur’anic line quoted in Chapter 17 and choose the best meaning.',
      question: '“Therefore, do not let him who denies it … turn you away from it, lest you fall.” What does “lest you fall” mean?',
      options: [
        'unless you fall',
        'until you fall',
        'so that you do not fall',
        'because you have fallen',
      ],
      correctAnswer: 2,
      explanation: '“Lest” is a formal word that introduces the danger an action should prevent: “lest you fall” = “so that you do not fall / in case you fall”. With “Therefore” and “do not let …”, the line forms a warning: a consequence, a prohibition, and the danger to avoid.',
      feedback: {
        correct: 'Correct. “Lest” introduces the result the warning tries to prevent.',
        incorrect: 'The line warns Moses not to be turned away. Is falling the aim, a time limit, or the danger to avoid?',
      },
    },
    {
      id: 'mo-b2-lf17-b',
      type: 'choose-form',
      title: 'The Language of Continuity',
      instructions: 'Choose the correct form to complete each sentence from Chapter 17.',
      question: 'Which forms express sameness and family or prophetic continuity?',
      formChoices: [
        {
          sentence: 'The religion of Moses (pbuh) was the same as [choice] Jacob (pbuh), which was Islamic monotheism.',
          options: ['that of', 'those of', 'this of'],
          answer: 0,
        },
        {
          sentence: 'Moses (pbuh), therefore, was one of the [choice] of Abraham (pbuh) …',
          options: ['descendant', 'descendants', 'ancestors'],
          answer: 1,
        },
        {
          sentence: '… every prophet who came after Abraham (pbuh) was one of Abraham’s [choice].',
          options: ['successor', 'predecessors', 'successors'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“The same as that of Jacob” compares religion with religion (“that” replaces “the religion”), not religion with a person. “One of the + plural noun”: one of the descendants, one of Abraham’s successors. A descendant comes later in a family line; a successor follows someone in a role.',
      feedback: {
        correct: 'Well done. You chose the forms that express sameness and continuity accurately.',
        incorrect: 'Check that “the same as …” compares two religions, that “one of” is followed by a plural noun, and which word means someone who comes after. See the end of Chapter 17.',
      },
    },
    reflection('mo-b2-lf17-c', 'Explaining Continuity', [
      'Write 5 sentences explaining the chapter’s claim of prophetic continuity from Abraham through Jacob to Moses. Use one relative clause and one consequence connector.',
    ], 'The task asks learners to build a connected explanation rather than list family names.'),
  ],
  18: [
    {
      id: 'mo-b2-lf18-a',
      type: 'matching',
      title: 'Questions as Power Moves',
      instructions: 'Match each question from Chapter 18 with what it does in the dialogue.',
      question: 'What does each question do in the dialogue?',
      matchingHeadings: { left: 'From the chapter', right: 'What the question does' },
      matchingPairs: [
        { left: '“What do you want?”', right: 'demands that Moses state his request directly' },
        { left: '“Why should I send them, as they are my slaves?”', right: 'rejects the request through a claim of ownership' },
        { left: 'Didn’t he know that the Pharaoh was a god?', right: 'presents Pharaoh’s claim as something everyone should already accept' },
        { left: '“Are you not that Moses who we took from the Nile as a defenseless baby?”', right: 'uses Moses’s past and upbringing to put pressure on him' },
      ],
      correctAnswer: {
        '“What do you want?”': 'demands that Moses state his request directly',
        '“Why should I send them, as they are my slaves?”': 'rejects the request through a claim of ownership',
        'Didn’t he know that the Pharaoh was a god?': 'presents Pharaoh’s claim as something everyone should already accept',
        '“Are you not that Moses who we took from the Nile as a defenseless baby?”': 'uses Moses’s past and upbringing to put pressure on him',
      },
      explanation: 'The questions are not neutral requests for information. A negative question (“Didn’t he know …?”, “Are you not …?”) expects agreement and puts pressure on the listener; “Why should I …?” is a rhetorical refusal.',
      feedback: {
        correct: 'Correct. You identified what each question does, not only what it asks.',
        incorrect: 'Ask what answer each speaker expects. Which question refuses, which demands, and which ones expect “yes”?',
      },
    },
    {
      id: 'mo-b2-lf18-b',
      type: 'transformation',
      title: 'Reported and Direct Questions',
      instructions: 'Rewrite each chapter sentence in the new form. Keep the meaning. Write only the missing words.',
      question: 'Can you move between reported and direct speech?',
      transformItems: [
        {
          source: 'Then the Pharaoh mockingly asked whether his name was Moses.',
          frame: 'Then the Pharaoh asked mockingly, “[blank] Moses?”',
          answers: ['Is your name', 'Are you'],
        },
        {
          source: 'The Pharaoh asked Moses (pbuh) where he had found the courage to worship Allah.',
          frame: 'The Pharaoh asked Moses, “Where [blank] the courage to worship Allah?”',
          answers: ['did you find', 'have you found'],
        },
        {
          source: 'Moses (pbuh) answered, “I want you to send the Children of Israel with me.”',
          frame: 'Moses (pbuh) answered that he [blank] the Pharaoh to send the Children of Israel with him.',
          answers: ['wanted'],
        },
      ],
      correctAnswer: null,
      explanation: 'A reported yes/no question uses “whether/if” and statement word order; the direct question inverts (“Is your name …?”). “Where he had found” becomes “Where did you find / have you found …?”. When reporting, present “want” moves back to “wanted”, and “me” becomes “him”.',
      feedback: {
        correct: 'Well done. You moved accurately between reported and direct speech.',
        incorrect: 'Direct questions need question word order (“Is your name …?”, “Where did you …?”). Reported statements move the tense back. Check Chapter 18.',
      },
    },
    {
      id: 'mo-b2-lf18-c',
      type: 'multiple-choice',
      title: 'Ownership vs Lordship',
      instructions: 'Choose the contrast that the dialogue itself builds.',
      question: 'Which contrast is built directly into the exchange?',
      options: [
        'Both speakers agree that Pharaoh owns every person absolutely.',
        'Moses asks Pharaoh to become the Lord of the Israelites.',
        'Pharaoh calls the Israelites his slaves, while Moses states that their Lord is Allah.',
        'Pharaoh calls the Israelites his guests, while Moses calls them his servants.',
      ],
      correctAnswer: 2,
      explanation: 'The possessives carry the argument: “my slaves” (Pharaoh’s claim of human ownership) against “Their Lord is Allah” (Moses’s statement of divine lordship).',
      feedback: {
        correct: 'Correct. The possessives “my slaves” and “their Lord” carry the contrast.',
        incorrect: 'Look at the Pharaoh’s question about sending the Israelites and at Moses’s short reply.',
      },
    },
    reflection('mo-b2-lf18-d', 'Rhetorical Question Analysis', [
      'Choose two questions from the chapter and explain in 5–6 sentences how each question tries to control the dialogue. Use “whereas” or “while” to compare their functions.',
    ], 'B2 analysis should identify what questions do rhetorically, not only what information they contain.'),
  ],
};

export const mosesB2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  19: [
    {
      id: 'mo-b2-lf19-a',
      type: 'drag-drop',
      title: 'Accusation and Answer',
      instructions: 'Sort the parts of Chapter 19. Are they the Pharaoh’s accusation in his own words, or Moses’s answer as the narrator reports it?',
      question: 'How does the chapter present the two sides of the argument differently?',
      dragDropGroups: [
        {
          group: 'The Pharaoh’s accusation (his own words)',
          items: ['Killing is an act of unbelief.', 'So, when you killed, you were not a believer.', 'You are on the run from the law'],
        },
        {
          group: 'Moses’s answer (reported by the narrator)',
          items: ['he was not a disbeliever when he killed the Egyptian', 'he had left Egypt out of fear of revenge', 'Allah had forgiven him and made him one of His Messengers'],
        },
      ],
      correctAnswer: {
        'The Pharaoh’s accusation (his own words)': ['Killing is an act of unbelief.', 'So, when you killed, you were not a believer.', 'You are on the run from the law'],
        'Moses’s answer (reported by the narrator)': ['he was not a disbeliever when he killed the Egyptian', 'he had left Egypt out of fear of revenge', 'Allah had forgiven him and made him one of His Messengers'],
      },
      explanation: 'The Pharaoh speaks directly (“you”, present tense), which makes his accusation sound immediate. Moses’s answer is reported (“he explained that …”), so the verbs move back (“had left”, “had forgiven”). The narrator also frames the Pharaoh’s words as a threat.',
      feedback: {
        correct: 'Correct. You separated the direct accusation from the reported answer.',
        incorrect: 'Look at the pronouns and tenses: “you … were”, “you are” belong to direct speech; “he had …” belongs to the narrator’s report.',
      },
    },
    {
      id: 'mo-b2-lf19-b',
      type: 'transformation',
      title: 'Concession, Challenge and Threat',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you express a concession, report a hypothetical challenge and report a threat?',
      transformItems: [
        {
          source: 'He explained to the Pharaoh that, despite the fact that the killing was an accident, he had left Egypt out of fear of revenge.',
          frame: 'He explained to the Pharaoh that, although [blank], he had left Egypt out of fear of revenge.',
          answers: ['the killing was an accident', 'the killing had been an accident', 'it was an accident', 'it had been an accident'],
        },
        {
          source: 'Moses (pbuh) said, “What if I bring you something convincing and true?”',
          frame: 'Moses (pbuh) asked [blank] if he brought him something convincing and true.',
          answers: ['what the Pharaoh would do', 'what Pharaoh would do', 'what he would do', 'what would happen'],
        },
        {
          source: 'He said, “If you accept any god other than me, I will imprison you!”',
          frame: 'He threatened [blank] Moses if he accepted any god other than him.',
          answers: ['to imprison'],
        },
      ],
      correctAnswer: null,
      explanation: '“Despite the fact that + clause” = “although + clause”. “What if …?” opens a hypothetical challenge; reported, it becomes “asked what … would do if …”. A threat can be reported with “threatened + to-infinitive”.',
      feedback: {
        correct: 'Well done. You kept the concession, the challenge and the threat.',
        incorrect: 'Item 1: “although” needs a full clause. Item 2: a reported question with “what … would …”. Item 3: threaten + to + verb. Check Chapter 19.',
      },
    },
    {
      id: 'mo-b2-lf19-c',
      type: 'error-correction',
      title: 'Correction and No Choice',
      instructions: 'Each sentence has one mistake. Tap the wrong word, then choose the correction.',
      question: 'Can you use the right word to correct an accusation, and the right form after “no choice but”?',
      errorItems: [
        {
          sentence: 'Ignoring his irony, Moses (pbuh) explained that he was not a disbeliever when he killed the Egyptian; however, he had committed the act only by accident.',
          error: 'however',
          options: ['rather', 'although', 'despite'],
          answer: 0,
        },
        {
          sentence: 'He had no choice but displaying the miracles.',
          error: 'displaying',
          options: ['to display', 'displayed', 'for displaying'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After a negative statement, “rather” replaces the rejected idea with the correct one: not a disbeliever; rather, it was an accident. “However” only signals a contrast, not a correction. “Have no choice but + to-infinitive” shows that only one action remains possible.',
      feedback: {
        correct: 'Well done. You chose the correcting linker and the right form after “no choice but”.',
        incorrect: 'Which word replaces a rejected claim with the true account? And which form follows “no choice but”? Check the middle and end of Chapter 19.',
      },
    },
    reflection('mo-b2-lf19-d', 'A Structured Rebuttal', [
      'Write a 6-sentence rebuttal in a new context. Use “rather”, “despite”, one if-clause, and “What if…?” to move from correction to challenge.',
    ], 'The task transfers the chapter’s argumentative resources to a new discourse situation.'),
  ],
  20: [
    {
      id: 'mo-b2-lf20-a',
      type: 'matching',
      title: 'Expressions of the Contest',
      instructions: 'Match each expression from Chapter 20 with its meaning in context.',
      question: 'What do these expressions mean in the chapter?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'Everyone was eager to watch', right: 'people very much wanted to see it' },
        { left: 'lessen the impact of Moses’ miracles', right: 'make the signs seem less powerful to people' },
        { left: 'make him fail in his claim', right: 'show publicly that his message was untrue' },
        { left: 'this was only an illusion', right: 'the snakes merely seemed real' },
      ],
      correctAnswer: {
        'Everyone was eager to watch': 'people very much wanted to see it',
        'lessen the impact of Moses’ miracles': 'make the signs seem less powerful to people',
        'make him fail in his claim': 'show publicly that his message was untrue',
        'this was only an illusion': 'the snakes merely seemed real',
      },
      explanation: 'These expressions show the advisers’ strategy: reduce the effect of the signs on public opinion and make Moses appear false. “However, this was only an illusion” then undercuts the magicians: “only” reduces their snakes to appearance.',
      feedback: {
        correct: 'Correct. You matched each expression with its meaning in the contest.',
        incorrect: 'Reread the advisers’ plan and the end of Chapter 20. Which expression is about the crowd, which about the plan, and which about the magicians’ snakes?',
      },
    },
    {
      id: 'mo-b2-lf20-b',
      type: 'transformation',
      title: 'Decision, Recommendation and Motive',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you turn an impersonal passive into an active sentence, and rephrase a recommendation and a motive?',
      transformItems: [
        {
          source: 'It was decided that a contest would be held between the magicians of Egypt and Moses (pbuh).',
          frame: 'The Pharaoh and his advisors decided [blank] a contest between the magicians of Egypt and Moses (pbuh).',
          answers: ['to hold', 'to organize', 'to organise', 'that they would hold'],
        },
        {
          source: 'His advisors recommended that the Pharaoh detain Moses (pbuh) and call upon the cleverest magicians.',
          frame: 'His advisors recommended [blank] Moses (pbuh) and calling upon the cleverest magicians.',
          answers: ['detaining'],
        },
        {
          source: 'The Pharaoh spoke to his advisors out of fear that his rule was in danger.',
          frame: 'The Pharaoh spoke to his advisors because he [blank] that his rule was in danger.',
          answers: ['feared', 'was afraid', 'was worried', 'was scared'],
        },
      ],
      correctAnswer: null,
      explanation: '“It was decided that …” hides who decided and puts the decision in focus; the active version names the decision-makers. “Recommend that + person + base verb” (“that the Pharaoh detain”) can also be “recommend + -ing”. “Out of fear that …” = “because he feared that …”.',
      feedback: {
        correct: 'Well done. You rephrased the decision, the recommendation and the motive.',
        incorrect: 'Item 1: decide + to-infinitive. Item 2: recommend + -ing form. Item 3: a verb of fearing after “because he”. Check Chapter 20.',
      },
    },
    reflection('mo-b2-lf20-c', 'Managing Public Perception', [
      'Write 5–7 sentences explaining how the advisers plan to reduce the impact of Moses’s signs. Use one passive reporting structure, one purpose expression, and one sentence showing expectation versus outcome.',
    ], 'The task integrates political purpose with discourse organization and source-based interpretation.'),
  ],
  21: [
    {
      id: 'mo-b2-lf21-a',
      type: 'multiple-choice',
      title: 'Why “not merely … but …” Matters',
      instructions: 'Read the sentence from Chapter 21 and choose what the contrast adds.',
      question: '“At that time, magicians were not merely performers, but the elite intellectual scholars of ancient Egypt.” What does the “not merely … but …” contrast add?',
      options: [
        'It says the magicians had no real knowledge or skill.',
        'It explains why the magicians’ belief carried intellectual and political weight.',
        'It shows that the magicians were members of Pharaoh’s army.',
        'It shows that the magicians performed only for entertainment.',
      ],
      correctAnswer: 1,
      explanation: '“Not merely A, but B” rejects a smaller description (performers) and replaces it with a larger one (elite scholars). This explains the next sentence: “So it was a major defeat …” — the experts’ recognition damaged Pharaoh’s position.',
      feedback: {
        correct: 'Correct. The contrast upgrades the magicians’ status, so their belief matters more.',
        incorrect: 'Notice what the sentence says they were NOT merely, and what comes next with “So …”.',
      },
    },
    {
      id: 'mo-b2-lf21-b',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct the forms after “but”, “after” and a cause linker?',
      errorItems: [
        {
          sentence: 'Moses (pbuh) couldn’t do anything but advising his people to be patient.',
          error: 'advising',
          options: ['advise', 'to advising', 'advised'],
          answer: 0,
        },
        {
          sentence: 'After see Moses\' power, the magicians bowed down to Allah …',
          error: 'see',
          options: ['seeing', 'saw', 'to see'],
          answer: 0,
        },
        {
          sentence: 'They lacked vision because of they had been under oppression for a long time.',
          error: 'because of',
          options: ['since', 'due to', 'despite'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After “can’t do anything but”, use the base verb: “couldn’t do anything but advise”. After the preposition “after”, use -ing: “After seeing …”. A full clause (“they had been …”) needs a conjunction such as “since” (= because), not “because of” or “due to”.',
      feedback: {
        correct: 'Well done. You corrected the base verb, the -ing form and the cause linker.',
        incorrect: 'Check what each word needs after it: “anything but” + base verb, “after” + -ing, and a conjunction before a full clause. See Chapter 21.',
      },
    },
    {
      id: 'mo-b2-lf21-c',
      type: 'choose-form',
      title: 'Reaction and Response',
      instructions: 'Choose the correct form to complete each sentence from Chapter 21.',
      question: 'Which form describes a feeling, and which form follows “by”?',
      formChoices: [
        {
          sentence: 'When he faced the miracles, the Pharaoh was utterly [choice].',
          options: ['horrifying', 'horrified', 'horror'],
          answer: 1,
        },
        {
          sentence: 'The Pharaoh replied by [choice] all his subjects, including the Children of Israel, to attend a large assembly …',
          options: ['ordering', 'order', 'to order'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'An -ed adjective describes how someone feels (“horrified”); an -ing adjective describes what causes the feeling (“horrifying miracles”). “Reply by + -ing” names the action used as a response.',
      feedback: {
        correct: 'Well done. You chose the feeling adjective and the -ing form after “by”.',
        incorrect: 'Is the Pharaoh feeling horror or causing it? And which form follows a preposition like “by”? Check Chapter 21.',
      },
    },
    reflection('mo-b2-lf21-d', 'Expert Recognition vs Public Obedience', [
      'Write 6–8 sentences explaining why expert recognition damages Pharaoh’s position while many ordinary subjects still obey him. Use “not merely … but…”, “so”, and one cause connector.',
    ], 'The chapter supports a B2 contrast between expert judgment and social obedience under long-term oppression.'),
  ],
  22: [
    {
      id: 'mo-b2-lf22-a',
      type: 'drag-drop',
      title: 'Two Responses to the Same Danger',
      instructions: 'Sort the lines from Chapter 22. Do they express fear of the visible danger, or trust before any way out is visible?',
      question: 'How does the chapter set panic and trust side by side?',
      dragDropGroups: [
        {
          group: 'Fear of the visible danger',
          items: ['The Israelites panicked.', 'They were trapped with the Red Sea in front and the king\'s army behind them.', '‘We are sure to be caught up with.’'],
        },
        {
          group: 'Trust before a way is visible',
          items: ['Moses (pbuh) said that Allah was with them and would show them the way to safety', '‘Truly! With me is my Lord; He will guide me.’'],
        },
      ],
      correctAnswer: {
        'Fear of the visible danger': ['The Israelites panicked.', 'They were trapped with the Red Sea in front and the king\'s army behind them.', '‘We are sure to be caught up with.’'],
        'Trust before a way is visible': ['Moses (pbuh) said that Allah was with them and would show them the way to safety', '‘Truly! With me is my Lord; He will guide me.’'],
      },
      explanation: 'Both groups speak with certainty, but about different things: “We are sure to be caught up with” is certain about the danger; “He will guide me” is certain about guidance. In the narrative, “However” marks the turn from panic to trust, and the reported “would show” looks forward to a way that is not yet visible.',
      feedback: {
        correct: 'Correct. You separated certainty about danger from certainty about guidance.',
        incorrect: 'Ask what each line is sure about: being caught, or being guided? Check the end of Chapter 22 and the Qur’anic lines that close it.',
      },
    },
    {
      id: 'mo-b2-lf22-b',
      type: 'transformation',
      title: 'Participle Clauses in the Escape',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you move between a participle clause and a full clause?',
      transformItems: [
        {
          source: 'The Pharaoh realized their departure, so he mobilized his huge army and started following them.',
          frame: '[blank] their departure, the Pharaoh mobilized his huge army and started following them.',
          answers: ['Realizing', 'Realising', 'Having realized', 'Having realised', 'On realizing', 'On realising', 'After realizing', 'After realising'],
        },
        {
          source: 'To escape Pharaoh’s genocide, Moses (pbuh) and the Children of Israel, finding no other way, set out at night.',
          frame: 'Moses (pbuh) and the Children of Israel set out at night because they [blank] no other way.',
          answers: ['found', 'could find', 'had found', 'could not find any', 'couldn’t find any', "couldn't find any"],
        },
      ],
      correctAnswer: null,
      explanation: 'A participle clause (“Realizing …”, “finding no other way”) packs cause and time into a compact phrase when the subject is the same. Expanded, “finding no other way” means “because they found no other way”.',
      feedback: {
        correct: 'Well done. You moved between participle clauses and full clauses.',
        incorrect: 'Item 1: start with an -ing form of “realize”. Item 2: expand “finding” into a past verb after “because they”. Check the middle of Chapter 22.',
      },
    },
    {
      id: 'mo-b2-lf22-c',
      type: 'choose-form',
      title: 'Catching Up and Parting',
      instructions: 'Choose the correct form to complete each sentence from Chapter 22.',
      question: 'Which form follows “manage”, and which verb form describes what the sea did?',
      formChoices: [
        {
          sentence: 'Soon, they easily managed [choice] up with them.',
          options: ['catching', 'to catch', 'catch'],
          answer: 1,
        },
        {
          sentence: 'Then a strong wind blew, the sun shone brightly, and immediately the sea [choice]; the waves stood like mountains on each side.',
          options: ['was parting', 'is parted', 'parted'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Manage + to-infinitive” shows success in a difficult action. “Part” can be intransitive: “the sea parted” describes a completed event in the past simple, in line with the other verbs in the sentence (blew, shone, stood).',
      feedback: {
        correct: 'Well done. You chose the right pattern after “manage” and the right past form.',
        incorrect: 'Which form follows “manage”? And which tense do the other verbs in the long sentence use? Check Chapter 22.',
      },
    },
    reflection('mo-b2-lf22-d', 'Certainty Before Visible Evidence', [
      'Write 6–8 sentences analyzing the difference between the people’s visible evidence and Moses’s confidence. Keep separate what the characters can see, what Moses says, and what happens later.',
    ], 'B2 analysis distinguishes present evidence, stated confidence, and later outcome instead of collapsing them into one moment.'),
  ],
  23: [
    {
      id: 'mo-b2-lf23-a',
      type: 'drag-drop',
      title: 'Event vs Self-Serving Interpretation',
      instructions: 'Sort the parts of Chapter 23. Are they events the narrator reports, or the Pharaoh’s interpretation of the event?',
      question: 'How does the chapter keep what happened apart from how the Pharaoh explained it?',
      dragDropGroups: [
        {
          group: 'What the narrator reports',
          items: ['The Pharaoh and his army saw the miracle.', 'Allah commanded the sea to return to its former state.', 'The sea closed over them, and they drowned.'],
        },
        {
          group: 'The Pharaoh’s interpretation',
          items: ['“Look! The sea has opened at my command.”', 'saw this extraordinary event as a sign of Pharaoh’s godlike power'],
        },
      ],
      correctAnswer: {
        'What the narrator reports': ['The Pharaoh and his army saw the miracle.', 'Allah commanded the sea to return to its former state.', 'The sea closed over them, and they drowned.'],
        'The Pharaoh’s interpretation': ['“Look! The sea has opened at my command.”', 'saw this extraordinary event as a sign of Pharaoh’s godlike power'],
      },
      explanation: 'The narrator names the event “the miracle” and gives its cause (“Allah commanded …”). The Pharaoh’s words and “saw … as a sign of …” present his interpretation. “See X as Y” reports how someone interprets something, not what is true.',
      feedback: {
        correct: 'Correct. You separated the narrated events from the Pharaoh’s claim.',
        incorrect: 'Ask who is speaking or interpreting. “Saw … as …” and the Pharaoh’s quotation show his view; the narrator reports the cause and the outcome.',
      },
    },
    {
      id: 'mo-b2-lf23-b',
      type: 'transformation',
      title: 'Reporting a Claim',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you report the Pharaoh’s claim and rephrase how his men interpreted the event?',
      transformItems: [
        {
          source: 'But the Pharaoh turned to his men and said, “Look! The sea has opened at my command.”',
          frame: 'But the Pharaoh told his men that the sea [blank] at his command.',
          answers: ['had opened'],
        },
        {
          source: 'He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power.',
          frame: 'He and his soldiers believed that this extraordinary event [blank] Pharaoh’s godlike power.',
          answers: ['was a sign of', 'showed', 'proved', 'was proof of', 'demonstrated'],
        },
      ],
      correctAnswer: null,
      explanation: 'When a claim is reported after a past verb, the present perfect moves back to the past perfect (“has opened” → “had opened”). “Saw X as a sign of Y” can be rephrased with “believed that X showed Y”; both keep it clear that this is their belief, not the narrator’s explanation.',
      feedback: {
        correct: 'Well done. You reported the claim and kept it as the Pharaoh’s view.',
        incorrect: 'Item 1: move “has opened” one step back. Item 2: what did they believe the event was a sign of? Check the middle of Chapter 23.',
      },
    },
    reflection('mo-b2-lf23-c', 'Evidence and Motivated Interpretation', [
      'Write 5–7 sentences explaining why Pharaoh’s claim about the opened sea is a self-serving interpretation rather than the chapter’s explanation. Quote or paraphrase two pieces of chapter evidence.',
    ], 'The task requires B2 evidence-versus-interpretation reasoning grounded in the source.'),
  ],
  24: [
    {
      id: 'mo-b2-lf24-a',
      type: 'multiple-choice',
      title: 'Looking Forward from the Ending',
      instructions: 'Read the lines from the end of Chapter 24 and choose what “would” does.',
      question: '“His story would not end here. He would face many difficult tests …” What does “would” do in these sentences?',
      options: [
        'It describes something Moses used to do regularly.',
        'It makes a polite request.',
        'It describes an imagined situation that never happened.',
        'It looks forward from a point in the past to what was still to come.',
      ],
      correctAnswer: 3,
      explanation: '“Would” here is the future in the past: from the moment he returns with the Torah, the narrator looks ahead to later events. It tells the reader that liberation is not the end of the story.',
      feedback: {
        correct: 'Correct. “Would” looks ahead from a past moment in the story.',
        incorrect: 'Are these tests a past habit, a wish, or events that came later than the moment described? Read the last lines of Chapter 24.',
      },
    },
    {
      id: 'mo-b2-lf24-b',
      type: 'transformation',
      title: 'Promise and Gift',
      instructions: 'Rewrite each chapter sentence in the new form. Keep the meaning. Write only the missing words.',
      question: 'Can you turn a reported promise into direct speech and a passive into an active sentence?',
      transformItems: [
        {
          source: 'When Moses (pbuh) led the Children of Israel out of Egypt, he told his people that he would bring them a Book from Allah.',
          frame: 'When Moses (pbuh) led the Children of Israel out of Egypt, he told his people, “I [blank] you a Book from Allah.”',
          answers: ['will bring', 'shall bring', 'am going to bring'],
        },
        {
          source: 'During this time, the Torah was given to him by Allah.',
          frame: 'During this time, Allah [blank] the Torah.',
          answers: ['gave him', 'gave Moses'],
        },
      ],
      correctAnswer: null,
      explanation: 'Reported “would bring” goes back to “will bring” in direct speech, and “them” becomes “you”. The passive “was given to him by Allah” focuses on the Torah; the active “Allah gave him the Torah” focuses on the giver.',
      feedback: {
        correct: 'Well done. You rebuilt the promise and the active sentence.',
        incorrect: 'Item 1: in direct speech, “would” becomes “will”. Item 2: the active of “was given to him” is “gave him”. Check Chapter 24.',
      },
    },
    {
      id: 'mo-b2-lf24-c',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct subject–verb agreement and the pattern after “see someone”?',
      errorItems: [
        {
          sentence: 'Moses\'s (pbuh) efforts to guide them to the right path is the reason he is known as the Prophet of Great Determination.',
          error: 'is the reason',
          options: ['are the reason', 'being the reason', 'be the reason'],
          answer: 0,
        },
        {
          sentence: 'Moses (pbuh) returned to his people with the Torah, but unfortunately saw his people to sing and dancing around the calf statue.',
          error: 'to sing',
          options: ['singing', 'sang', 'to singing'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The subject is “efforts” (plural), so the verb is “are”, even though a singular noun (“path”) comes just before it. “See + person + -ing” describes an action in progress that someone witnesses: “saw his people singing and dancing”.',
      feedback: {
        correct: 'Well done. You fixed the agreement and the pattern after “saw his people”.',
        incorrect: 'Find the real subject of the first sentence. In the second, both verbs after “saw his people” should have the same form. Check the end of Chapter 24.',
      },
    },
    reflection('mo-b2-lf24-d', 'Liberation Is Not the End', [
      'Write 7–8 sentences explaining the final chapter’s message that liberation is followed by continuing responsibility. Use “despite”, one future-in-the-past form with “would”, and at least two pieces of evidence.',
    ], 'A B2 synthesis should connect rescue, guidance, disobedience, and continuing determination without reducing the ending to one event.'),
  ],
};

export const mosesB2LanguageReviewExercises: Exercise[] = [
  // NOTICE — discover what the book's language does, across chapters.
  {
    id: 'mo-b2-language-review-1-source-hedge-view', type: 'drag-drop', title: 'Notice: Whose Claim, and How Sure?',
    instructions: 'Read the sentences from Chapters 2, 5, 18 and 23. Decide how each one presents its information, and put it in the right group.',
    question: 'Does the writer report a source, hedge a claim, or present a character’s view?',
    dragDropGroups: [
      { group: 'The writer reports a source', items: ['According to the sources, Seti I … was the pharaoh who oppressed the Israelites.', 'Ibn Abbas said, “The Pharaoh saw a fire in his vision. …”'] },
      { group: 'The writer hedges: likely or possible, not proved', items: ['So the pharaoh who drowned at sea was probably Ramses II.', 'It is possible that some people of that period did not practise or believe in paganism.'] },
      { group: 'A character’s view, not the writer’s', items: ['The Pharaoh listened to Moses’ speech, and he thought that Moses had lost his mind.', 'He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power.'] },
    ],
    correctAnswer: {
      'The writer reports a source': ['According to the sources, Seti I … was the pharaoh who oppressed the Israelites.', 'Ibn Abbas said, “The Pharaoh saw a fire in his vision. …”'],
      'The writer hedges: likely or possible, not proved': ['So the pharaoh who drowned at sea was probably Ramses II.', 'It is possible that some people of that period did not practise or believe in paganism.'],
      'A character’s view, not the writer’s': ['The Pharaoh listened to Moses’ speech, and he thought that Moses had lost his mind.', 'He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power.'],
    },
    explanation: 'The book separates three layers. Attribution (“according to the sources”, “Ibn Abbas said”) tells you whose information it is. Hedging (“probably”, “It is possible that …”) is the writer’s own careful judgement: likely or possible, not proved. Verbs such as “thought that …” and “saw X as Y” report how a character interprets events; they do not tell you that the interpretation is true. A B2 summary keeps each layer in place.',
    feedback: { correct: 'Well done. You kept sources, the writer’s hedges and the characters’ views apart.', incorrect: 'Look for the signal words: according to / said (a source), probably / possible (a hedge), thought / saw … as (a character’s view).' },
  },
  {
    id: 'mo-b2-language-review-2-not-only-not-merely', type: 'multiple-choice', title: 'Notice: Not Only … / Not Merely …',
    instructions: 'Read the two sentences from Chapters 3 and 21. Then choose the best explanation.',
    question: 'Chapter 3: “… god-king authority was based not only on the richness of the river, but also on the manpower of the slaves …” Chapter 21: “At that time, magicians were not merely performers, but the elite intellectual scholars of ancient Egypt.” What do the two structures do?',
    options: [
      'They reject the first description as false and put a correct one in its place.',
      'They accept the first description but show it is incomplete, then add a second, weightier point.',
      'They show that the writer cannot decide which of the two descriptions is true.',
      'They present the second point as a result of the first one.',
    ],
    correctAnswer: 1,
    explanation: '‘Not only A but also B’ and ‘not merely A, but B’ keep A (the river mattered; the magicians did perform) and add B, which carries more weight: the slaves’ manpower, the magicians’ status as scholars. Compare “rather” in Chapter 19: “he was not a disbeliever when he killed the Egyptian; rather, he had committed the act only by accident” — there the first idea is rejected completely and replaced.',
    feedback: { correct: 'Correct. Both structures widen a description instead of cancelling it.', incorrect: 'Ask: is the first part still true? Did the river matter? Did the magicians perform? Then look at what the second part adds.' },
  },
  {
    id: 'mo-b2-language-review-3-participle-clauses', type: 'true-false', title: 'Notice: -ing Phrases Around Moses',
    instructions: 'Read the sentences from Chapters 12, 15 and 19. Decide whether the statement about their meaning is true or false.',
    question: 'Chapter 12: “Forgetting his thirst, Moses approached them …” Chapter 15: “… approached it, hoping to bring his family some fire …” Chapter 19: “Ignoring his irony, Moses (pbuh) explained that he was not a disbeliever …” — Statement: the -ing phrases describe actions that happen only after the main action is finished.',
    correctAnswer: false,
    explanation: 'The -ing phrase and the main verb share one subject (Moses), and they happen at the same time: while he approaches, he forgets his thirst or hopes for fire; while he explains, he ignores the Pharaoh’s irony. The phrase adds his attitude or aim to the action without a second full clause. It does not mean “afterwards”.',
    feedback: { correct: 'Correct. The -ing phrases run alongside the main action and share its subject.', incorrect: 'Ask who forgets, who hopes and who ignores, and when. Is it the same person, at the same moment as approached / explained?' },
  },
  // BUILD — controlled practice in the book's own sentences.
  {
    id: 'mo-b2-language-review-4-cause-linkers', type: 'choose-form', title: 'Build: Cause Before a Noun, a Clause or a Sentence',
    instructions: 'Choose the form that completes each sentence from the book. Look at what comes after the gap.',
    question: 'Which linker fits a noun phrase, which fits a clause, and which links two sentences?',
    formChoices: [
      { sentence: 'Control of the Nile River was vital. [choice], the geographical structure of the land was reshaped by human power.', options: ['Because', 'For this reason', 'Despite this'], answer: 1 },
      { sentence: '[choice] the crowd at the water source, the young women could only water their animals after the male shepherds had taken their flocks away.', options: ['Due to', 'Because', 'Although'], answer: 0 },
      { sentence: '[choice] they needed someone reliable and strong, one of the daughters advised her father to employ Moses.', options: ['Because of', 'Due to', 'Because'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: 'Choose the linker by what follows it. A new sentence that draws a result from the previous one starts with “For this reason,”. A noun phrase (the crowd) needs ‘due to’ or ‘because of’. A clause with its own subject and verb (they needed) needs “because”. “Despite this” and “although” would signal a contrast the book does not make.',
    feedback: { correct: 'Correct. You matched each linker to a sentence, a noun phrase or a clause.', incorrect: 'After the gap, is there a whole new sentence, a noun (the crowd) or a subject + verb (they needed)? Check Chapters 3, 12 and 14.' },
  },
  {
    id: 'mo-b2-language-review-5-overclaims', type: 'error-correction', title: 'Build: Do Not Overclaim',
    instructions: 'Each sentence makes a stronger claim than the book does. Tap the words that overclaim, then choose the writer’s original, more careful words.',
    question: 'Can you restore the writer’s degree of certainty?',
    errorItems: [
      { sentence: 'The entire Torah consists of the history of Moses (pbuh) and the Israelites under his leadership.', error: 'The entire', options: ['Almost the entire', 'The whole', 'Certainly the entire'], answer: 0 },
      { sentence: 'All of the sources state that the Exodus … must have taken place in the early thirteenth century BC.', error: 'All', options: ['Every', 'Most', 'None'], answer: 1 },
      { sentence: 'It was certain that the Pharaoh would never accept Moses’ (pbuh) teachings or put an end to the hard days of the Children of Israel.', error: 'It was certain', options: ['It was proved', 'Everyone agreed', 'It seemed'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: 'Quantifiers and stance verbs set the strength of a claim. “Almost the entire” and “most of the sources” leave room for exceptions; “the entire” and “all” do not. “It seemed that …” gives an impression at that moment; ‘It was certain that …’ turns it into a fact. Rewriting a text with stronger words than the source is overclaiming.',
    feedback: { correct: 'Well done. You kept the writer’s careful degree of certainty.', incorrect: 'Compare with the book: the opening of Chapter 1, the end of Chapter 2 and the start of Chapter 22. Which word leaves room for doubt or exceptions?' },
  },
  {
    id: 'mo-b2-language-review-6-reporting', type: 'transformation', title: 'Build: Report What They Said',
    instructions: 'Report each piece of direct speech from Chapters 8, 12 and 13. Write only the missing words.',
    question: 'How do tense, pronouns and word order change when you report a question or a statement?',
    transformItems: [
      { source: 'The Pharaoh was astonished and asked, “Who are you? …”', frame: 'The Pharaoh was astonished and asked her who [blank].', answers: ['she was'] },
      { source: 'He asked, “Why are you shepherding?”', frame: 'He asked the two sisters why [blank].', answers: ['they were shepherding'] },
      { source: 'She said, “Our father invites you to our home so that he may thank you in person.”', frame: 'She said that their father [blank] him to their home so that he might thank him in person.', answers: ['invited', 'was inviting'] },
    ],
    correctAnswer: null,
    explanation: 'A reported question uses statement word order: “Who are you?” → ‘who she was’; “Why are you shepherding?” → ‘why they were shepherding’. After a past reporting verb, present forms move back (are → were, invites → invited, may → might), and pronouns change to fit the reporter’s point of view (you → she / they / him, our → their).',
    feedback: { correct: 'Correct. You moved the tense back, changed the pronouns and used statement word order.', incorrect: 'Check three things: tense back (are → were), pronouns (you → she/they/him), and subject before verb in the reported question.' },
  },
  {
    id: 'mo-b2-language-review-7-impersonal-passive', type: 'sentence-building', title: 'Build: A Decision Without a Named Decider',
    instructions: 'Put the parts in order to rebuild a sentence from Chapter 20.',
    question: 'How does the chapter report the decision about the contest without saying who made it?',
    sentenceChunks: ['It was decided', 'that a contest', 'would be held', 'between the magicians of Egypt', 'and Moses (pbuh).'],
    correctAnswer: null,
    explanation: '“It was decided that …” is an impersonal passive: the decision is in focus and the deciders stay unnamed. Inside it, “would be held” is a passive seen from the past, looking forward to the contest. The book uses the passive in the same way elsewhere when what happens matters more than who acts: “He was placed in a basket” (Chapter 4), “the Torah was given to him by Allah” (Chapter 24).',
    feedback: { correct: 'Well done. The impersonal passive puts the decision first.', incorrect: 'Start with the empty subject “It” and the passive verb. Then say what was decided, and between whom.' },
  },
  // USE — transfer the language into the learners' own world.
  {
    id: 'mo-b2-language-review-8-new-context', type: 'word-bank', title: 'Use: A Report on a School Project',
    instructions: 'This text is not from the book. Complete the report with words and phrases from the bank. Two of them are not needed.',
    question: 'Can you report evidence, give a cause, add a second point and hedge a conclusion?',
    fillBlanksText: 'Last term, our class started a recycling project at school. [blank] our survey, most students threw plastic bottles into ordinary bins. [blank] a lack of recycling boxes in the corridors, many bottles ended up in the rubbish. We placed new boxes on every floor, and the project helped not only the environment [blank] the school budget. The number of bottles in the ordinary bins fell by half, so the new boxes were [blank] the main reason for the change. However, we cannot be sure: some students were also away on a school trip that month.',
    wordBank: ['According to', 'Due to', 'but also', 'probably', 'certainly', 'Although'],
    correctAnswer: ['According to', 'Due to', 'but also', 'probably'],
    explanation: '“According to our survey” attributes the evidence. “Due to” + a noun phrase gives the cause. “Not only … but also …” adds a second benefit. “Probably” hedges the conclusion, and the last sentence explains why: another cause is possible. “Certainly” would overclaim, and “although” needs a clause, not a noun.',
    feedback: { correct: 'Well done. Your report is sourced, connected and careful.', incorrect: 'For each gap ask: is this a source, a cause before a noun, the second half of “not only”, or a hedge? Read the last sentence before you choose the hedge.' },
  },
  {
    id: 'mo-b2-language-review-9-new-context', type: 'transformation', title: 'Use: Make the Claim More Careful',
    instructions: 'These sentences are not from the book. Each one claims too much. Rewrite it more carefully. Write only the missing words.',
    question: 'Can you hedge a claim with a quantifier, an adverb or a careful reporting verb?',
    transformItems: [
      { source: 'Everyone in our class hates the new timetable.', frame: '[blank] students in our class dislike the new timetable.', answers: ['Many', 'Most', 'Some', 'Several', 'A lot of', 'Lots of', 'Quite a few'] },
      { source: 'The new bus timetable is the reason for our late arrivals.', frame: 'The new bus timetable is [blank] the reason for our late arrivals.', answers: ['probably', 'possibly', 'perhaps', 'likely', 'most likely', 'very likely', 'partly'] },
      { source: 'Our survey proves that students want a longer lunch break.', frame: 'Our survey [blank] that students want a longer lunch break.', answers: ['suggests', 'indicates', 'seems to show', 'appears to show', 'may show', 'might show', 'could show', 'seems to suggest'] },
    ],
    correctAnswer: null,
    explanation: 'Careful writers limit a claim to what the evidence shows: a quantifier instead of “everyone” (many, most, some), a hedging adverb (probably, possibly), or a softer reporting verb instead of “proves” (suggests, indicates). This is the same care the book shows with “most of the sources”, “probably” and “it seemed”.',
    feedback: { correct: 'Well done. Your sentences claim only what the evidence can support.', incorrect: 'Replace the absolute word: everyone → many/most/some; is → is probably; proves → suggests/indicates.' },
  },
  {
    id: 'mo-b2-language-review-10-transfer', type: 'reflection', title: 'Use: A Short Argued Paragraph',
    instructions: 'Should students in your school do one hour of helpful work each month, for example in the library, the school garden or for older neighbours? Write a short argued paragraph of 6–8 sentences. Discuss your ideas with a partner first.',
    question: 'Can you state a position, support it with evidence and qualify it, using the language of the whole book?',
    correctAnswer: null,
    explanation: 'Example: “In my view, one hour of helpful work each month would probably be good for our school. According to our class survey, most students would like to help in the library or the school garden. The project would help not only the people we support but also the students themselves, because they would learn responsibility. Due to busy timetables, however, some students have little free time. It is possible that a few of them will see the hour as extra work. Although this worry is understandable, the hour would be short and flexible. It is not a punishment; rather, it is a chance to be useful.”',
    feedback: { correct: 'Check your paragraph: a hedged position (probably / it seems), a source (according to), a cause (because / due to), not only … but also, a concession (although), and a correction with rather.', incorrect: '' },
    discussionPrompts: [
      { question: 'Position — state your view carefully: “In my view, … would probably …” or “It seems that …”', mode: 'Individual' },
      { question: 'Evidence — name your source and give a cause: “According to …, …” / “… because …” / “Due to …, …”', mode: 'Individual' },
      { question: 'Develop — add a second, stronger point: “… not only … but also …”', mode: 'Pair' },
      { question: 'Qualify — answer a possible objection: “Although …, …” or “It is not …; rather, …”', mode: 'Pair' },
    ],
  },
];
