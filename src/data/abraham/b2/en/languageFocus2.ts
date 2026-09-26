import type { Exercise } from '../../../../types';

/*
 * Abraham B2 (English) Language Focus. Each chapter follows Notice → Build → Use:
 * learners first discover what a form does in real chapter sentences, then practise
 * it in context, then use it in the chapter's reflection task. Every quoted sentence
 * comes from the English chapter text; Qur'anic verses are only read, sorted,
 * matched to meanings or asked about, never altered.
 */

/** Chapter 13 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-b2-language-13-purpose-chain',
      type: 'true-false',
      title: 'Fear or Certainty?',
      instructions: 'Read the line from Surah Maryam quoted in Chapter 13. Is the statement true or false?',
      question: 'In “O my father, I fear that a punishment from the Most Beneficent (Allah) will afflict you …”, Abraham presents the punishment as certain.',
      correctAnswer: false,
      explanation: '“I fear that …” frames the future as a worry, not as a fact. Abraham speaks with concern for his father: he warns him about a possible consequence instead of announcing a certain one. This fits the chapter’s picture of a kind, respectful son.',
      feedback: {
        correct: 'Correct. “I fear that” expresses concern about a possibility.',
        incorrect: 'Look at the words before “a punishment”. Does “I fear that” state a fact, or a worry?',
      },
    },
    {
      id: 'abraham-b2-language-13-negative-parallelism',
      type: 'transformation',
      title: 'Purpose and Reason',
      instructions: 'Rewrite each sentence from Chapter 13 with the words given. Keep the meaning.',
      question: 'How can purpose, reason and hope be expressed in more compact ways?',
      transformItems: [
        {
          source: 'Abraham (pbuh) felt that it was his duty as a good son to advise his father against this evil so that his father could be saved from Allah\'s punishment.',
          frame: '… it was his duty as a good son to advise his father against this evil [blank] his father from Allah\'s punishment.',
          answers: ['to save', 'in order to save', 'so as to save'],
        },
        {
          source: 'He was a wise son, so he did not make his father feel embarrassed, or make fun of his job.',
          frame: '[blank] a wise son, he did not make his father feel embarrassed, or make fun of his job.',
          answers: ['Being', 'As he was', 'Since he was', 'Because he was'],
        },
        {
          source: 'He told him that he loved him; in that way, he hoped to increase fatherly love.',
          frame: 'He told him that he loved him, [blank] to increase fatherly love.',
          answers: ['hoping', 'as he hoped', 'because he hoped', 'since he hoped'],
        },
      ],
      correctAnswer: null,
      explanation: '“So that + could” gives a purpose; when the subject changes to Abraham, “to save / in order to save” is shorter. “…, so …” gives a result; turning the first part into “Being a wise son” or “As he was a wise son” presents it as the reason. “In that way, he hoped …” links a choice to its hoped-for effect; a participle (“hoping to …”) joins the two ideas in one sentence.',
      feedback: {
        correct: 'Well done. You kept the purpose, the reason and the hope.',
        incorrect: 'Item 1: use to + verb (who saves whom?). Item 2: turn the first clause into a reason. Item 3: use an -ing form of “hope”. Check the first paragraph of Chapter 13.',
      },
    },
    {
      id: 'abraham-b2-language-13-knowledge-guidance',
      type: 'choose-form',
      title: 'Asking Without Offending',
      instructions: 'Choose the correct form to complete each part of Chapter 13.',
      question: 'Which forms does the narrator use to report Abraham’s careful question?',
      formChoices: [
        {
          options: ['or', 'nor', 'neither'],
          sentence: '… lifeless statues who could not hear, see, [choice] protect him.',
          answer: 0,
        },
        {
          options: ['worshipped', 'did he worship', 'does he worship'],
          sentence: 'Then he kindly asked him why he [choice] lifeless statues …',
          answer: 0,
        },
        {
          options: ['got', 'will get', 'gets'],
          sentence: 'Before his father [choice] angry, he quickly added an explanation …',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After “could not”, a list continues with “or”: could not hear, see, or protect. “Nor” is used after “neither” (as in the verse: “can neither hear, nor see, nor benefit you”). A reported question keeps statement word order and moves back in time: “why he worshipped”. After “before” in a past narrative, use the past simple (“got”), not “will”.',
      feedback: {
        correct: 'Correct. You chose the right negative list, reported question and time clause.',
        incorrect: 'Ask: which word continues a list after “not”? Is the question direct or reported? Is the time clause in the past? Check the first paragraph of Chapter 13.',
      },
    },
    {
      id: 'abraham-b2-language-13-production',
      type: 'reflection',
      title: 'Design a Respectful Persuasion Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which one person tries to persuade someone they respect without humiliating them. Include one purpose clause with “so that”, one connector such as “in that way” to explain an interpersonal effect, one parallel negative structure such as “neither... nor...”, one invitation or recommendation, and one carefully framed possible consequence using language such as “I’m concerned that...” or “I fear that...”. Do not retell the Abraham story.',
      question: 'Can you organise B2 persuasion so that purpose, evidence, respect and consequence work together coherently?',
      correctAnswer: null,
      explanation: 'A strong response should use language choices to manage both argument and relationship, rather than producing isolated grammar examples.',
      feedback: {
        correct: 'Check that your wording explains both what the speaker wants and how the speaker protects the relationship.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Purpose — What change does the speaker hope for, and why?', mode: 'Individual' },
        { question: 'Relationship — Which wording avoids embarrassment or attack?', mode: 'Individual' },
        {
          question: 'Evidence — What two or three parallel limitations or reasons strengthen the case?',
          mode: 'Pair',
        },
        { question: 'Consequence — How can you frame risk as concern rather than aggression?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 14 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter14: Record<number, Exercise[]> = {
  14: [
    {
      id: 'abraham-b2-language-14-condition-threat',
      type: 'drag-drop',
      title: 'Threat or Promise?',
      instructions: 'Sort the lines from the conversation in Chapter 14. Is it a threat or demand, or a promise or hope?',
      question: 'How can the same future form, will, carry a threat or a calm commitment?',
      dragDropGroups: [
        {
          group: 'Threat or demand (the father)',
          items: [
            'If you do not stop this, I will stone you.',
            'So leave me alone for a while before I punish you.',
          ],
        },
        {
          group: 'Promise or hope (Abraham)',
          items: [
            'I will ask my Lord to forgive you; He has been Kind to me.',
            'And I will turn away from you, and from what you pray to instead of Allah.',
            'I hope I will not be disappointed in my prayer to my Lord.',
          ],
        },
      ],
      correctAnswer: {
        'Threat or demand (the father)': [
          'If you do not stop this, I will stone you.',
          'So leave me alone for a while before I punish you.',
        ],
        'Promise or hope (Abraham)': [
          'I will ask my Lord to forgive you; He has been Kind to me.',
          'And I will turn away from you, and from what you pray to instead of Allah.',
          'I hope I will not be disappointed in my prayer to my Lord.',
        ],
      },
      explanation: 'The father uses a first conditional (If + present, will + verb) to threaten, and an imperative to demand. Abraham answers with “will” as well, but for his own future actions: he promises to pray for his father’s forgiveness and to turn away. “I hope …” shows a hopeful stance, not certainty. The same grammar serves opposite purposes.',
      feedback: {
        correct: 'Correct. You separated the father’s threats from Abraham’s promises and hope.',
        incorrect: 'Ask: who is the action aimed at, and is it harm or kindness? Check the verses at the start of Chapter 14.',
      },
    },
    {
      id: 'abraham-b2-language-14-concession-risk',
      type: 'multiple-choice',
      title: 'Knowing the Risk',
      instructions: 'Read the sentence from Chapter 14. Then choose the best explanation.',
      question: '“In fact, he knew well that he might face negative consequences.” What does “might” show about Abraham’s decision to debate with the people?',
      options: [
        'The consequences were possible, not certain, and he went to the town knowing this.',
        'He was sure that he would be punished.',
        'He had permission to face the consequences.',
        'The consequences had already happened before he went to the town.',
      ],
      correctAnswer: 0,
      explanation: '“Might” expresses a possibility that is not certain. Together with “he knew well” and “he was determined”, it presents Abraham’s persistence as a conscious choice: he knew there was a real risk and still went to debate. “In fact” adds this as an important, perhaps surprising, point.',
      feedback: {
        correct: 'Correct. “Might” marks a possible risk that he chose to accept.',
        incorrect: 'Does “might” show certainty, permission or possibility? Read the sentences before it about Abraham’s determination.',
      },
    },
    {
      id: 'abraham-b2-language-14-analogy-reasoning',
      type: 'matching',
      title: 'Reading the Comparison',
      instructions: 'Match each part of the comparison at the end of Chapter 14 with its meaning.',
      question: 'How does the comparison explain Abraham’s way of questioning?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'looks for the cause of an illness', right: 'searches for the root of a problem' },
        { left: 'to find the right cure', right: 'so that the problem can be properly treated' },
        { left: 'questions a suspect', right: 'asks someone questions to test their story' },
        { left: 'to uncover the truth', right: 'to find out what really happened' },
        { left: 'to reveal the reality of their situation', right: 'to make the people see their true position' },
      ],
      correctAnswer: {
        'looks for the cause of an illness': 'searches for the root of a problem',
        'to find the right cure': 'so that the problem can be properly treated',
        'questions a suspect': 'asks someone questions to test their story',
        'to uncover the truth': 'to find out what really happened',
        'to reveal the reality of their situation': 'to make the people see their true position',
      },
      explanation: 'The sentence is built as “Just as A …, or B …, C …”. The doctor and the judge both ask questions for a purpose (to find the right cure, to uncover the truth), and Abraham does the same: he questions the people “to reveal the reality of their situation”. The comparison presents his questions as a careful method, not as an attack.',
      feedback: {
        correct: 'Correct. You followed the comparison from the doctor and the judge to Abraham.',
        incorrect: 'Read the last sentence of Chapter 14. Each person asks or looks for something with a purpose (to + verb). What is each purpose?',
      },
    },
    {
      id: 'abraham-b2-language-14-production',
      type: 'reflection',
      title: 'Build a Risk-Aware Reasoning Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone continues a difficult course of action despite possible consequences. Include one condition→consequence sentence, two different future commitments using “will”, one cautious possibility with “might”, and one analogy introduced with “just as” that explains why questioning or investigation is useful. End by stating the purpose of the inquiry with “to uncover...”, “to reveal...”, or an equivalent expression. Do not retell the Abraham story.',
      question: 'Can you combine condition, stance, future commitment, risk and analogy into one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should show why the person acts, what risk remains possible, what they commit to doing, and how the analogy clarifies the reasoning process.',
      feedback: {
        correct: 'Check that each grammar choice contributes to stance, consequence, commitment or reasoning rather than appearing as an isolated example.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Condition — What future consequence depends on a present choice?', mode: 'Individual' },
        { question: 'Commitment — Which actions will the person deliberately take?', mode: 'Individual' },
        { question: 'Risk — What might still happen even if the person continues?', mode: 'Pair' },
        { question: 'Analogy — What familiar role or process explains the value of investigation?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 15 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter15: Record<number, Exercise[]> = {
  15: [
    {
      id: 'abraham-b2-language-15-rhetorical-questions',
      type: 'drag-drop',
      title: 'Testing or Defending?',
      instructions: 'Sort the lines from Chapter 15. Is Abraham testing the idols, or are the people defending their belief?',
      question: 'How do the two sides use questions differently?',
      dragDropGroups: [
        {
          group: 'Abraham tests the idols',
          items: [
            'Do the idols see you when you bow down before them?',
            'Do they benefit you in any way?',
            'see if they have any power to harm me by now!',
          ],
        },
        {
          group: 'The people defend their belief',
          items: [
            'They quickly tried to defend their beliefs.',
            'Are you criticizing our gods and our forefathers?',
            'Or are you just joking?',
          ],
        },
      ],
      correctAnswer: {
        'Abraham tests the idols': [
          'Do the idols see you when you bow down before them?',
          'Do they benefit you in any way?',
          'see if they have any power to harm me by now!',
        ],
        'The people defend their belief': [
          'They quickly tried to defend their beliefs.',
          'Are you criticizing our gods and our forefathers?',
          'Or are you just joking?',
        ],
      },
      explanation: 'Abraham’s questions are rhetorical tests: they point to things people can check (Do the idols see? Do they benefit you?), and the expected answer is “No”. His challenge “see if …” turns the claim into an observable test. The people’s questions do not answer the test; they change the topic to disrespect (“criticizing our forefathers”) or try to reduce the challenge to a joke.',
      feedback: {
        correct: 'Correct. Abraham’s questions test the idols; the people’s questions avoid the test.',
        incorrect: 'Ask whether each line invites people to check the idols’ power, or protects the belief from being checked. Read Chapter 15 again.',
      },
    },
    {
      id: 'abraham-b2-language-15-tradition-contrast',
      type: 'transformation',
      title: 'Manner and Purpose',
      instructions: 'Rewrite each sentence from Chapter 15 with the words given. Keep the meaning.',
      question: 'How can the manner and the purpose of an action be expressed in another way?',
      transformItems: [
        {
          source: 'Abraham (pbuh) showed no fear as he replied: …',
          frame: '[blank], Abraham (pbuh) replied: …',
          answers: [
            'Showing no fear',
            'Without fear',
            'Without any fear',
            'Fearlessly',
            'Showing no fear at all',
          ],
        },
        {
          source: 'To persuade them that the idols could not harm him, he challenged: …',
          frame: 'He challenged them [blank] them that the idols could not harm him.',
          answers: ['to persuade', 'in order to persuade', 'so as to persuade'],
        },
      ],
      correctAnswer: null,
      explanation: '“As he replied” describes the manner of the reply; a participle phrase (“Showing no fear”) or an adverb (“Fearlessly”) says the same more compactly. A to-infinitive of purpose can come at the start (“To persuade them …, he challenged”) or after the main clause (“He challenged them to persuade them …”); “in order to” makes the purpose even clearer.',
      feedback: {
        correct: 'Well done. You kept the manner and the purpose.',
        incorrect: 'Item 1: describe how he replied in a short phrase. Item 2: keep the purpose with to + verb. Check the first paragraph of Chapter 15.',
      },
    },
    {
      id: 'abraham-b2-language-15-definition-contrast',
      type: 'error-correction',
      title: 'Reporting the Argument',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the verb forms that report the people’s argument and Abraham’s answer?',
      errorItems: [
        {
          options: ['had worshipped', 'were worshipped', 'worship'],
          sentence: 'They argued that they knew the idols were lifeless but that their forefathers have worshipped them; to them, this confirmed their belief.',
          error: 'have worshipped',
          answer: 0,
        },
        {
          options: ['explained', 'explained for them', 'explained at them'],
          sentence: 'Abraham (pbuh) explained them that their forefathers had been wrong.',
          error: 'explained them',
          answer: 0,
        },
        {
          options: ['arguing', 'argue', 'argued'],
          sentence: 'Abraham (pbuh) did not give up to argue with the idolaters.',
          error: 'to argue',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'In a report in the past, an action that happened even earlier takes the past perfect: “their forefathers had worshipped them”. “Explain” cannot take the person directly as its object: say “explained that …” or “explained (something) to them”. “Give up” is followed by -ing: “did not give up arguing”. The people’s argument puts tradition (“but …”) against a fact they admit.',
      feedback: {
        correct: 'Well done. You corrected the earlier past, the verb pattern and the -ing form.',
        incorrect: 'Ask: which action happened earlier? Can “explain” take the person directly as its object? Which form follows “give up”? Check Chapter 15.',
      },
    },
    {
      id: 'abraham-b2-language-15-production',
      type: 'reflection',
      title: 'Build an Evidence-vs-Tradition Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story belief, habit, rule or claim that people defend mainly because “it has always been done this way.” Include two rhetorical questions that test the claim, one sentence using “although” or “even though” to acknowledge an existing fact, one “but” contrast between evidence and inherited practice, one relative clause that defines a stronger alternative, and one observable test introduced with “see whether...” or “test whether...”. End with a balanced conclusion rather than an insult. Do not retell the Abraham story.',
      question: 'Can you turn questions, contrast, definition and an observable test into one coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should acknowledge what people believe, distinguish inherited practice from evidence, test the claim through questions, define an alternative clearly, and conclude in a controlled way.',
      feedback: {
        correct: 'Check that every structure contributes to the argument rather than appearing as an isolated grammar example.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Questions — What two questions reveal whether the claim actually works?', mode: 'Individual' },
        {
          question: 'Contrast — What fact is acknowledged, and what inherited practice conflicts with it?',
          mode: 'Individual',
        },
        { question: 'Definition — What stronger alternative can you define with a relative clause?', mode: 'Pair' },
        { question: 'Test — What observable result would support or weaken the claim?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 16 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter16: Record<number, Exercise[]> = {
  16: [
    {
      id: 'abraham-b2-language-16-dialogue-structure',
      type: 'matching',
      title: 'What Abraham Says About His Lord',
      instructions: 'Match each line from the verses in Chapter 16 with what it says about the Lord.',
      question: 'How does the chain of “He who …” lines build a picture of the Lord?',
      matchingHeadings: { left: 'From the verses', right: 'What it says about the Lord' },
      matchingPairs: [
        { left: 'He who created me, and guides me.', right: 'the Creator, Who also shows the way' },
        { left: 'He who feeds me, and waters me.', right: 'the Provider of food and drink' },
        { left: 'And when I get sick, He heals me.', right: 'the One Who restores health' },
        { left: 'He who makes me die, and then revives me.', right: 'the One Who has power over death and new life' },
        {
          left: 'He who, I hope, will forgive my sins on the Day of Resurrection?',
          right: 'the One Whose pardon is hoped for on the Last Day',
        },
      ],
      correctAnswer: {
        'He who created me, and guides me.': 'the Creator, Who also shows the way',
        'He who feeds me, and waters me.': 'the Provider of food and drink',
        'And when I get sick, He heals me.': 'the One Who restores health',
        'He who makes me die, and then revives me.': 'the One Who has power over death and new life',
        'He who, I hope, will forgive my sins on the Day of Resurrection?': 'the One Whose pardon is hoped for on the Last Day',
      },
      explanation: 'The verses repeat “He who …” to build one long description: each line adds a new attribute in parallel form. The repetition contrasts with the idols, which “do not hear” and cannot benefit or harm. In the last line, “I hope” adds Abraham’s personal stance: forgiveness is hoped for, not claimed.',
      feedback: {
        correct: 'Correct. You followed the chain from creation to forgiveness.',
        incorrect: 'Look at the verb in each line (created, feeds, heals, makes … die, forgive) and find the matching attribute.',
      },
    },
    {
      id: 'abraham-b2-language-16-relative-chain',
      type: 'transformation',
      title: 'Changing the Focus',
      instructions: 'Rewrite each part of the last sentence of Chapter 16 with the words given. Keep the meaning.',
      question: 'How does the sentence change when Allah is the subject, or when “provide” takes a different pattern?',
      transformItems: [
        {
          source: 'Idol worship is hated by Allah, as Allah is the Lord of the universe …',
          frame: 'Allah [blank] idol worship, as He is the Lord of the universe …',
          answers: ['hates'],
        },
        {
          source: '… Who created mankind, offers guidance, provides human beings with food and drink and heals the sick.',
          frame: '… Who created mankind, offers guidance, provides [blank] human beings and heals the sick.',
          answers: ['food and drink to', 'food and drink for'],
        },
      ],
      correctAnswer: null,
      explanation: 'The passive “Idol worship is hated by Allah” keeps idol worship as the topic; the active “Allah hates idol worship” makes Allah the topic. “Provide” has two patterns: provide someone with something, or provide something to/for someone. The narrator’s sentence restates the verses in plain prose: creation, guidance, food and drink, and healing.',
      feedback: {
        correct: 'Well done. You changed the focus and the verb pattern correctly.',
        incorrect: 'Item 1: make Allah the subject of an active verb. Item 2: when the thing comes first after “provides”, which preposition comes before the person?',
      },
    },
    {
      id: 'abraham-b2-language-16-exception-stance',
      type: 'multiple-choice',
      title: 'One Clear Exception',
      instructions: 'Read the line from the verses in Chapter 16. Then choose the best explanation.',
      question: '“They are enemies to me, but not so the Lord of the Worlds.” What does “but not so” mean here?',
      options: [
        'The Lord of the Worlds is not an enemy to him; He is the one exception.',
        'The Lord of the Worlds is not as great as people think.',
        'The idols are not really enemies to him.',
        'The Lord of the Worlds is also an enemy, but a less serious one.',
      ],
      correctAnswer: 0,
      explanation: '“So” replaces the words already said (“an enemy to me”), and “but not so” excludes one case: all the things they worship are enemies to Abraham, except the Lord of the Worlds. The line sets a strong contrast between the idols and the Lord, which the “He who …” lines then explain.',
      feedback: {
        correct: 'Correct. “But not so” makes the Lord of the Worlds the exception.',
        incorrect: 'What does “so” stand for here? Read the words just before it: “They are enemies to me …”.',
      },
    },
    {
      id: 'abraham-b2-language-16-production',
      type: 'reflection',
      title: 'Build a Cohesive Evaluation Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story practice, policy, technology or social habit. Begin with one question that identifies the practice, add two questions that test it through observable effects, include one sentence reporting an inherited or conventional justification, then reframe the issue with “Have you considered...?” or a natural equivalent. Build a three-part relative-clause chain using “which/that/who” to define a stronger alternative. Include one clear exception with “except” or “but not...”, and one local stance marker such as “I hope”, “I expect”, or “it seems”. End with a reasoned conclusion. Do not retell the Abraham story.',
      question: 'Can you combine dialogue moves, relative-clause cohesion, exception and stance in one controlled B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should move logically from questioning to evaluation, use repeated clause structure for cohesion, and keep strong claims separate from local stance markers.',
      feedback: {
        correct: 'Check that each language choice contributes to the argument and that your stance markers apply only where intended.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Testing — What two observable effects could you question?', mode: 'Individual' },
        {
          question: 'Convention — What inherited or conventional justification could someone give?',
          mode: 'Individual',
        },
        {
          question: 'Cohesion — What three linked relative clauses can define the stronger alternative?',
          mode: 'Pair',
        },
        {
          question: 'Stance — Which statement is firm, and which one should be marked as hope, expectation or interpretation?',
          mode: 'Individual',
        },
      ],
    },
  ],
};

/** Chapter 17 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter17: Record<number, Exercise[]> = {
  17: [
    {
      id: 'abraham-b2-language-17-contrast-plan',
      type: 'multiple-choice',
      title: 'A Question That Is Not a Question',
      instructions: 'Read Abraham’s words at the end of Chapter 17. Then choose the best explanation.',
      question: '“The food in front of you is getting cold. Why don\'t you eat?” Why does Abraham ask the statue this question?',
      options: [
        'It is an ironic test: he knows the statue cannot eat, so its silence exposes its helplessness.',
        'He really wants to know whether statues eat the offerings.',
        'He is politely offering the food to the statue.',
        'He is asking the priests why the food is still there.',
      ],
      correctAnswer: 0,
      explanation: 'A rhetorical question is not a request for information. Abraham already knows the answer, so the question works as irony and as a test. The next sentence gives the result: “The statue kept silent and rigid.” The silence becomes evidence against the idols.',
      feedback: {
        correct: 'Correct. The question is an ironic test, not a real request.',
        incorrect: 'Read the sentence after the question. What happens, and what does Abraham already know about the statues?',
      },
    },
    {
      id: 'abraham-b2-language-17-sequence',
      type: 'transformation',
      title: 'Back to Abraham’s Thoughts',
      instructions: 'Rewrite each reported idea from Chapter 17 as Abraham’s own thought at that moment.',
      question: 'Which forms does the narrator use for a future event seen from the past?',
      transformItems: [
        {
          source: 'He knew that there was going to be a great celebration outside the town.',
          frame: 'He thought, “There [blank] a great celebration outside the town.”',
          answers: ['is going to be', 'will be', '\'s going to be'],
        },
        {
          source: 'All the people would attend it.',
          frame: 'He thought, “All the people [blank] it.”',
          answers: ['will attend', 'are going to attend'],
        },
      ],
      correctAnswer: null,
      explanation: 'The narrator tells the story in the past, so Abraham’s knowledge about a later event appears as “was going to” and “would”: the future seen from the past. In his own mind at that moment, the same ideas are simply future: “is going to be”, “will attend”. His knowledge of the festival is part of his plan.',
      feedback: {
        correct: 'Well done. You moved the future-in-the-past back to Abraham’s present viewpoint.',
        incorrect: 'Change “was going to” to “is going to” and “would” to “will”. Check the first paragraph of Chapter 17.',
      },
    },
    {
      id: 'abraham-b2-language-17-rhetorical-question',
      type: 'error-correction',
      title: 'Timing the Plan',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the forms that show a decision, a waiting point and an earlier event?',
      errorItems: [
        {
          options: ['to do', 'do', 'done'],
          sentence: 'Actually, he decided doing something shocking to show their error.',
          error: 'doing',
          answer: 0,
        },
        {
          options: ['was', 'would be', 'is'],
          sentence: 'Abraham (pbuh) waited until the city will be empty, then cautiously made his way to the temple.',
          error: 'will be',
          answer: 0,
        },
        {
          options: ['had', 'has', 'were'],
          sentence: 'The priests have also gone to the festival outside the city.',
          error: 'have',
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Decide” is followed by to + verb: “decided to do”. In a past narrative, a time clause after “until” takes the past simple, not “will/would”: “waited until the city was empty”. The past perfect “had also gone” shows that the priests left before Abraham arrived, so the temple was empty.',
      feedback: {
        correct: 'Well done. You fixed the decision, the time clause and the earlier past.',
        incorrect: 'Ask: which form follows “decide”? Which tense follows “until” in a past story? Did the priests leave before or after Abraham came? Check Chapter 17.',
      },
    },
    {
      id: 'abraham-b2-language-17-production',
      type: 'reflection',
      title: 'Write a Plan-and-Test Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone notices resistance to an argument, forms a plan, waits for the right condition, and then uses an observable test to reveal a weakness in an idea, product or policy. Use one contrast marker such as “however”, one decision phrase, one purpose clause with “to...”, one future-from-the-past form such as “was/were going to” or “would”, one “until” clause, one past-perfect sentence to mark an earlier completed event, and one rhetorical or ironic question. End by explaining what the test revealed. Do not retell the Abraham story.',
      question: 'Can you control viewpoint, sequencing, purpose and rhetorical testing in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make the time relations and the purpose of each action clear while using the final question as part of the argument rather than as a request for unknown information.',
      feedback: {
        correct: 'Check that each tense and connector has a clear discourse function and that the test leads naturally to your conclusion.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Resistance — What position or habit continues despite earlier reasoning?', mode: 'Individual' },
        {
          question: 'Plan — What future event was already known or expected from the earlier viewpoint?',
          mode: 'Individual',
        },
        { question: 'Timing — What had already happened before the key action began?', mode: 'Pair' },
        { question: 'Test — What question can expose the weakness through an observable result?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 18 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter18: Record<number, Exercise[]> = {
  18: [
    {
      id: 'abraham-b2-language-18-rhetorical-reason',
      type: 'true-false',
      title: 'What Does “For” Introduce?',
      instructions: 'Read the sentence from Chapter 18. Is the statement true or false?',
      question: 'In “He was mocking them, for he knew they would not eat”, the word “for” introduces the purpose of his mocking.',
      correctAnswer: false,
      explanation: 'In formal writing, “for” + clause gives a reason, like “because”: he was mocking them because he knew they would not eat. It does not express a purpose. The reason makes the irony of his question clear.',
      feedback: {
        correct: 'Correct. “For” here means “because”; it gives a reason.',
        incorrect: 'Replace “for” with “because” and with “in order to”. Which one keeps the meaning of the sentence?',
      },
    },
    {
      id: 'abraham-b2-language-18-exception-completion',
      type: 'transformation',
      title: 'Exception and Completion',
      instructions: 'Rewrite each part of Chapter 18 with the words given. Keep the meaning.',
      question: 'How can an exception and a completed action be expressed in another way?',
      transformItems: [
        {
          source: 'He destroyed them all except one.',
          frame: 'He destroyed all of them; only one [blank].',
          answers: [
            'remained',
            'was left',
            'survived',
            'was not destroyed',
            'was spared',
            'remained undamaged',
            'was left undamaged',
            'was left untouched',
          ],
        },
        {
          source: 'He left the temple. He had fulfilled his duty to show his people a practical proof of their foolishness …',
          frame: '[blank] his duty to show his people a practical proof of their foolishness, he left the temple.',
          answers: [
            'Having fulfilled',
            'After fulfilling',
            'After he had fulfilled',
            'Having already fulfilled',
          ],
        },
      ],
      correctAnswer: null,
      explanation: '“All except one” names a whole group and removes one member; the same idea can be split into two statements (“all of them … only one remained”). The past perfect “had fulfilled” shows that his task was already complete when he left. A perfect participle (“Having fulfilled …”) or “After -ing” puts the completed task first.',
      feedback: {
        correct: 'Well done. You kept the exception and the order of events.',
        incorrect: 'Item 1: what happened to the one statue? Item 2: use a form that shows the task was complete before he left. Check the first paragraph of Chapter 18.',
      },
    },
    {
      id: 'abraham-b2-language-18-evidence-shift',
      type: 'word-bank',
      title: 'After the People Returned',
      instructions: 'Complete the lines from Chapter 18 with words from the bank. Three options are not needed.',
      question: 'Which forms tell a deliberate action, a reaction and an earlier deed?',
      fillBlanksText: 'On its neck, he [blank] the axe. … When the people returned, they were shocked [blank] their gods smashed into pieces, spread all over the temple. They tried to find out who [blank] that to their idols …',
      wordBank: ['hung', 'to see', 'had done', 'hanged', 'for seeing', 'has done'],
      correctAnswer: ['hung', 'to see', 'had done'],
      explanation: '“Hang” has two past forms: “hung” for objects (he hung the axe) and “hanged” only for executing a person. Adjectives of feeling are followed by to + verb: “shocked to see”. “Who had done that” uses the past perfect because the damage happened before the people returned and asked.',
      feedback: {
        correct: 'Correct. You chose the right past form, the feeling pattern and the earlier past.',
        incorrect: 'Ask: is an object or a person being hung? Which form follows “shocked”? Did the destruction happen before the people asked? Check the middle of Chapter 18.',
      },
    },
    {
      id: 'abraham-b2-language-18-production',
      type: 'reflection',
      title: 'Write an Evidence-Building Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone challenges an ineffective claim, uses a rhetorical question, gives the reason for the question with “for” or another natural reason connector, creates one deliberate exception with “except”, completes an action before a later reaction using the past perfect, and then shifts from narrative summary to a short explicitly attributed quotation or piece of evidence. End by explaining what the evidence shows. Do not retell the Abraham story.',
      question: 'Can you combine rhetorical testing, exception, completed purpose and source-marked evidence in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make each discourse move purposeful: the rhetorical question tests a claim, the reason explains the test, the exception matters to the logic, the past perfect clarifies sequence, and the quotation is explicitly sourced rather than blended into the narrator’s voice.',
      feedback: {
        correct: 'Check that the quotation is clearly attributed and that each connector changes the relationship between ideas.',
        incorrect: '',
      },
      discussionPrompts: [
        {
          question: 'Test — What rhetorical question can expose a weakness without genuinely asking for unknown information?',
          mode: 'Individual',
        },
        { question: 'Reason — What connector will explain why that question is being asked?', mode: 'Individual' },
        {
          question: 'Exception — What single item or case will you exclude, and why does that exception matter?',
          mode: 'Pair',
        },
        {
          question: 'Evidence — How will you mark the source of the final quotation or evidence explicitly?',
          mode: 'Pair',
        },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusPart2: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter13,
  ...abrahamB2LanguageFocusChapter14,
  ...abrahamB2LanguageFocusChapter15,
  ...abrahamB2LanguageFocusChapter16,
  ...abrahamB2LanguageFocusChapter17,
  ...abrahamB2LanguageFocusChapter18,
};
