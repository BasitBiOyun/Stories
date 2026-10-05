import type { Exercise } from '../../../../types';

/** Adam B2 English Language Focus — Chapters 13–17. */

export const adamB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  13: [
    {
      id: 'adam-b2-language-13-concession-contrast',
      type: 'drag-drop',
      title: 'Accepted First, Stressed Next',
      instructions: 'Sort each pair from Chapter 13: the point accepted first, or the point stressed?',
      question: 'Which point does the writer accept, and which does he stress?',
      dragDropGroups: [
        {
          group: 'A point accepted or mentioned first',
          items: [
            'although Qabil had the intention to kill',
            'At first glance, Qabil’s rebellious attitude may seem unacceptable.',
            'People can be jealous, selfish, greedy, and even damaging and harmful.',
          ],
        },
        {
          group: 'The point the writer stresses',
          items: [
            'Habil did not adopt an aggressive attitude',
            'However, it is important to remember that humans have the potential for both good and evil.',
            'The path to goodness is in controlling evil thoughts and actions and being moderate in desires.',
          ],
        },
      ],
      correctAnswer: {
        'A point accepted or mentioned first': [
          'although Qabil had the intention to kill',
          'At first glance, Qabil’s rebellious attitude may seem unacceptable.',
          'People can be jealous, selfish, greedy, and even damaging and harmful.',
        ],
        'The point the writer stresses': [
          'Habil did not adopt an aggressive attitude',
          'However, it is important to remember that humans have the potential for both good and evil.',
          'The path to goodness is in controlling evil thoughts and actions and being moderate in desires.',
        ],
      },
      explanation: 'A concession admits a point without letting it become the main message. “Although” marks the conceded clause; the main clause carries the stress. “At first glance … may seem” presents a first impression, and “However, it is important to remember …” moves to the writer’s wider view. “People can be …” admits what humans are capable of, and the next sentence gives the writer’s answer: The path to goodness.',
      feedback: {
        correct: 'Correct. You separated what the writer admits from what the writer stresses.',
        incorrect: 'Look for concession signals (although, at first glance, may seem, can be) and for the part that answers them. Check the first half of Chapter 13.',
      },
    },
    {
      id: 'adam-b2-language-13-modal-stance',
      type: 'transformation',
      title: 'Concession and Hope in Other Words',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say what Habil did and why?',
      transformItems: [
        {
          source: 'It is understood from the above verses that although Qabil had the intention to kill, Habil did not adopt an aggressive attitude.',
          frame: 'Qabil had the intention to kill. [blank], Habil did not adopt an aggressive attitude.',
          answers: ['However', 'Nevertheless', 'Nonetheless', 'Even so', 'Despite this', 'In spite of this', 'Still'],
        },
        {
          source: 'Hoping to lessen the hatred in his brother, Habil said, …',
          frame: 'Habil spoke to his brother [blank] lessen the hatred in him.',
          answers: [
            'because he hoped to',
            'as he hoped to',
            'since he hoped to',
            'hoping to',
            'in the hope that he could',
            'in the hope that he might',
            'in order to',
            'so as to',
            'to',
          ],
        },
      ],
      correctAnswer: null,
      explanation: '“Although X, Y” concedes X inside one sentence; across two sentences, the concession moves to an adverb such as “However” or “Nevertheless” at the start of the second. “Hoping to …” is a participle clause that gives the speaker’s aim; it can be expanded into a clause of reason or purpose.',
      feedback: {
        correct: 'Well done. You kept the concession and Habil’s aim.',
        incorrect: 'Item 1: start the second sentence with a contrast adverb. Item 2: the blank must end just before the verb “lessen”, so finish it with “to” or a modal.',
      },
    },
    {
      id: 'adam-b2-language-13-purpose-condition',
      type: 'error-correction',
      title: 'Advice and Condition',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the verbs after “It is better that you”, “if” and “did not”?',
      errorItems: [
        {
          sentence: 'It is better that you repented to Allah and forget about your foolish threat.',
          error: 'repented',
          options: ['will repent', 'repent', 'had repented'],
          answer: 1,
        },
        {
          sentence: 'But if you will not, then I will leave the matter in the hands of Allah.',
          error: 'will not',
          options: ['would not', 'did not', 'do not'],
          answer: 2,
        },
        {
          sentence: 'Habil did not fear his brother\'s threats, but he also did not wanted his brother to be hurt.',
          error: 'did not wanted',
          options: ['did not want', 'does not want', 'not wanted'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“It is better that you + base verb” gives advice; the second verb (“forget”) shows the same base form. In a real condition, the if-clause uses the present simple, even when the result is future: “if you do not, then I will …”. After “did not”, use the base verb.',
      feedback: {
        correct: 'Well done. You corrected the advice, the condition and the negative.',
        incorrect: 'Compare the verb with its partner: “repent … and forget” must match; an if-clause does not take “will”; “did not” takes the base verb. Check the end of Chapter 13.',
      },
    },
    {
      id: 'adam-b2-language-13-production',
      type: 'reflection',
      title: 'A Calm Answer',
      instructions: 'Write or say 8–10 sentences about a conflict and a calm way to answer it.',
      question: 'How can someone answer a conflict calmly?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses these resources to control viewpoint and logic: acknowledge tension, avoid overclaiming, explain intention, propose an alternative and make consequences explicit.',
      feedback: {
        correct: 'Keep the modal claim genuinely possible rather than certain, and make the final condition follow logically from the advice.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Admit a hard fact: “Although …, I did not …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what may be true: “He may … , or he might …”', mode: 'Individual' },
        { question: 'Sentence 3 — Give your aim and idea: “I … in order to … . I suggested …”', mode: 'Pair' },
        { question: 'Sentence 4 — End with “if”: “If he …, I will …”', mode: 'Pair' },
      ],
    },
  ],
  14: [
    {
      id: 'adam-b2-language-14-negative-coordination',
      type: 'drag-drop',
      title: 'A State Reached or a Process Going On?',
      instructions: 'Sort the parts of Chapter 14: a finished change, or one still going on?',
      question: 'Has the change already happened, or is it still going on?',
      dragDropGroups: [
        {
          group: 'A state already reached',
          items: [
            'His anger had now lessened',
            'his heart was burdened with guilt',
          ],
        },
        {
          group: 'Something going on or just beginning',
          items: [
            'He was getting tired under the burden of the corpse.',
            'wandering from place to place trying to hide it',
            'It also started to have a stench.',
          ],
        },
      ],
      correctAnswer: {
        'A state already reached': [
          'His anger had now lessened',
          'his heart was burdened with guilt',
        ],
        'Something going on or just beginning': [
          'He was getting tired under the burden of the corpse.',
          'wandering from place to place trying to hide it',
          'It also started to have a stench.',
        ],
      },
      explanation: 'The past perfect (“had now lessened”) and a passive state (“was burdened with”) describe a result that is already in place. “Was getting + adjective” shows a gradual change in progress, the -ing participles show ongoing actions, and “started to” marks a new process. Together they make the burden grow heavier step by step.',
      feedback: {
        correct: 'Correct. You separated finished changes from developing processes.',
        incorrect: 'Look at the verb forms: had + past participle, was + past participle, was getting, -ing, started to. Which ones describe change still happening? Check the last paragraph of Chapter 14.',
      },
    },
    {
      id: 'adam-b2-language-14-passive-focus',
      type: 'sentence-building',
      title: 'Build the Negative Chain',
      instructions: 'Tap the pieces to make the first sentence of Chapter 14.',
      question: 'What word order comes after “nor”?',
      sentenceChunks: [
        'This brotherly request',
        'did nothing to lessen the hatred',
        'in Qabil\'s heart,',
        'nor',
        'did',
        'he show',
        'fear of Allah\'s punishment.',
      ],
      correctAnswer: null,
      explanation: '“Nor” adds a second negative to a first one. When “nor” begins a clause, the auxiliary comes before the subject, as in a question: “nor did he show fear”. The sentence stacks two failed restraints: The brother’s request had no effect, and fear of punishment did not stop him either.',
      feedback: {
        correct: 'Well done. After “nor”, the auxiliary “did” comes before the subject.',
        incorrect: 'Start with the request and what it did not do. Then add “nor” and use question word order. Check the first sentence of Chapter 14.',
      },
    },
    {
      id: 'adam-b2-language-14-development-purpose',
      type: 'error-correction',
      title: 'After the Crime',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Qabil after the crime?',
      errorItems: [
        {
          sentence: 'Even familial considerations were gave up.',
          error: 'were gave up',
          options: ['were give up', 'were given up', 'gave up'],
          answer: 1,
        },
        {
          sentence: 'As a mercy, and to show that human dignity had to preserve even after death, Allah sent two ravens that began fighting.',
          error: 'had to preserve',
          options: ['had to be preserved', 'had to preserved', 'had to be preserve'],
          answer: 0,
        },
        {
          sentence: 'Qabil arrogantly replied that he is not his brother\'s keeper nor his protector.',
          error: 'is',
          options: ['has been', 'will be', 'was'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'The passive is be + past participle. “Familial considerations were given up” puts the lost restraint at the front, while the surrounding sentences keep Qabil’s responsibility clear. Human dignity does not preserve anything; it must be preserved, so the necessity form is “had to be preserved”. After a past reporting verb (“replied”), the reported verb usually moves back: “that he was not …”.',
      feedback: {
        correct: 'Well done. You corrected both passives and the reported verb.',
        incorrect: 'Ask whether the subject does the action or receives it, and check the tense after “replied”. Then read Chapter 14 again.',
      },
    },
    {
      id: 'adam-b2-language-14-production',
      type: 'reflection',
      title: 'Build a Consequence-and-Realisation Paragraph',
      instructions: 'Write or say 8–10 sentences about someone who ignores warnings until a problem grows.',
      question: 'How does the problem grow, and what helps in the end?',
      correctAnswer: null,
      explanation: 'A strong B2 response should use the target structures to organise discourse: Failed restraints → visible consequence → developing burden → purposeful learning moment.',
      feedback: {
        correct: 'Keep the passive focused on information structure, make the developing state genuinely gradual, and ensure the purpose clause explains why the final example matters.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what was ignored: “He did not …, nor did he …”', mode: 'Individual' },
        { question: 'Sentence 2 — Give the result: “… had not been started, and … was postponed.”', mode: 'Individual' },
        { question: 'Sentence 3 — Show it growing: “… was getting bigger / becoming …”', mode: 'Pair' },
        { question: 'Sentence 4 — Say what the example showed: “… in order to … . It showed him …”', mode: 'Pair' },
      ],
    },
  ],
  15: [
    {
      id: 'adam-b2-language-15-purpose-embedded',
      type: 'multiple-choice',
      title: 'Purpose and an Embedded “How”',
      instructions: 'Read the verse quoted at the start of Chapter 15. Then choose the best answer.',
      question: '“Thereupon Allah sent a raven who began to dig at the earth to show him how he might cover the corpse of his brother.” What do the words “how he might cover the corpse of his brother” describe?',
      options: [
        'the reason why Qabil had killed his brother',
        'a question that the raven asked Qabil',
        'a way of covering the body that Qabil did not yet know',
        'the raven’s own reason for digging',
      ],
      correctAnswer: 2,
      explanation: '“To show him” gives the purpose of sending the raven. What is shown follows as an embedded how-clause: “how he might cover the corpse”, a method Qabil did not know. It uses statement word order, not question order, and “might” presents it as a possible way forward.',
      feedback: {
        correct: 'Correct. The how-clause names the method that the raven showed.',
        incorrect: 'Read the words after “to show him”. What was Qabil unable to do, according to his own words that follow in Chapter 15?',
      },
    },
    {
      id: 'adam-b2-language-15-interpretive-framing',
      type: 'transformation',
      title: 'Say It in Full',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say these lines about Qabil?',
      transformItems: [
        {
          source: 'Witnessing this, Qabil was overcome with shame and guilt.',
          frame: '[blank] this, Qabil was overcome with shame and guilt.',
          answers: ['When he witnessed', 'After he witnessed', 'As he witnessed', 'Having witnessed', 'When he saw', 'After he saw', 'As he saw', 'Having seen', 'Seeing'],
        },
        {
          source: '… Qabil represents the type of person dominated by evil …',
          frame: 'Qabil represents the type of person [blank] by evil.',
          answers: ['who is dominated', 'that is dominated'],
        },
        {
          source: 'It arises from jealousy, which defeats the feelings of love and compassion of brotherhood.',
          frame: 'It arises from jealousy. [blank] the feelings of love and compassion of brotherhood.',
          answers: ['Jealousy defeats', 'It defeats', 'This jealousy defeats', 'Jealousy destroys', 'It destroys'],
        },
      ],
      correctAnswer: null,
      explanation: 'The chapter packs information into compact forms. A participle clause (“Witnessing this, …”) can be expanded into a time clause. A past participle after a noun (“a person dominated by evil”) is a shortened passive relative clause (“who is dominated by evil”). A non-defining clause (“jealousy, which defeats …”) can be split into a second sentence, but the compact version links cause and effect more tightly.',
      feedback: {
        correct: 'Well done. You expanded or split each compact form without changing its meaning.',
        incorrect: 'Item 1: add a linker and a subject. Item 2: add who/that + is. Item 3: start a new sentence with a subject and a present simple verb.',
      },
    },
    {
      id: 'adam-b2-language-15-characterisation',
      type: 'drag-drop',
      title: 'Event or Interpretation?',
      instructions: 'Sort the parts of Chapter 15: what happened, or what it means?',
      question: 'Does it tell what happened, or what it means?',
      dragDropGroups: [
        {
          group: 'What happened',
          items: [
            'Qabil then buried his brother.',
            'This was also the first burial of man.',
            'Adam (pbuh) prayed for his son and turned to worldly matters',
          ],
        },
        {
          group: 'The writer’s interpretation',
          items: [
            'What is essentially being described here is the consequence of choosing evil.',
            'It arises from jealousy, which defeats the feelings of love and compassion of brotherhood.',
            'Qabil represents the type of person dominated by evil',
          ],
        },
      ],
      correctAnswer: {
        'What happened': [
          'Qabil then buried his brother.',
          'This was also the first burial of man.',
          'Adam (pbuh) prayed for his son and turned to worldly matters',
        ],
        'The writer’s interpretation': [
          'What is essentially being described here is the consequence of choosing evil.',
          'It arises from jealousy, which defeats the feelings of love and compassion of brotherhood.',
          'Qabil represents the type of person dominated by evil',
        ],
      },
      explanation: 'The wh-cleft “What is essentially being described here is …” is a signal that the writer is stepping back from the events to say what they mean. After it, verbs such as “arises from” and “represents” present interpretation, not narration. The narrated events use the past simple.',
      feedback: {
        correct: 'Correct. You found where narration ends and interpretation begins.',
        incorrect: 'Look for the frame “What is essentially being described here is …” and for verbs such as “represents”. Do they tell an event or explain its meaning? Check the third paragraph of Chapter 15.',
      },
    },
    {
      id: 'adam-b2-language-15-production',
      type: 'reflection',
      title: 'Write an Event-to-Interpretation Paragraph',
      instructions: 'Write or say 8–10 sentences about a small event and what it shows about people.',
      question: 'What happened, and what does it mean?',
      correctAnswer: null,
      explanation: 'A strong response describes what happened first, explicitly marks the move into interpretation, explains a cause or effect and contrasts two responses without confusing interpretation with fact.',
      feedback: { correct: 'Keep event sentences factual and make the interpretive shift explicit.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what happened: “During …, …”', mode: 'Individual' },
        { question: 'Sentence 2 — Give the aim: “He … to show that …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what it means: “What is essentially described here is …”', mode: 'Pair' },
        { question: 'Sentence 4 — Compare two reactions: “While some …, he …”', mode: 'Pair' },
      ],
    },
  ],
  16: [
    {
      id: 'adam-b2-language-16-simultaneous-guidance',
      type: 'true-false',
      title: 'A Reported Detail',
      instructions: 'Read the sentence about Seth in Chapter 16. Is the statement true or false?',
      question: 'The words “It was narrated that …” present the detail about Seth as something passed on by others, not as the writer’s own direct claim.',
      correctAnswer: true,
      explanation: '“It was narrated that …” is an impersonal passive reporting frame. It attributes the detail to transmitted narration and keeps some distance between the writer and the claim. It does not say the report is false; it shows where the information comes from.',
      feedback: {
        correct: 'Correct. The passive reporting frame marks the detail as a report.',
        incorrect: 'Who is the subject of “was narrated”? Is it the writer? Read the first paragraph of Chapter 16 again.',
      },
    },
    {
      id: 'adam-b2-language-16-source-status',
      type: 'error-correction',
      title: 'Adam’s Advice',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Adam’s advice to his children?',
      errorItems: [
        {
          sentence: 'At the same time, he was a prophet advising his children and grandchildren, telling them about Allah and to call them to believe in Him.',
          error: 'to call',
          options: ['called', 'calling', 'to calling'],
          answer: 1,
        },
        {
          sentence: 'He told them about Iblis and warned them by tell them about his own experience with Satan …',
          error: 'by tell',
          options: ['by telling', 'by told', 'for tell'],
          answer: 0,
        },
        {
          sentence: '… and how Satan had tempted Qabil killing his brother.',
          error: 'killing',
          options: ['kill', 'for killing', 'to kill'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'Items in a list should have the same form: advising …, telling …, and calling …, three actions of one prophet at the same time. After a preposition such as “by”, use the -ing form. “Tempt” follows the pattern tempt + person + to-infinitive.',
      feedback: {
        correct: 'Well done. You kept the list parallel and used the right verb patterns.',
        incorrect: 'Check that the three actions in the list match, what follows “by”, and the pattern “tempt someone to …”. Then read the first paragraph of Chapter 16.',
      },
    },
    {
      id: 'adam-b2-language-16-future-unity',
      type: 'transformation',
      title: 'From Reported to Direct Speech',
      instructions: 'Write Adam’s words as he might have said them. Write only the missing words.',
      question: 'What happens to “would” when we use Adam’s own words?',
      transformItems: [
        {
          source: 'Before his death, Adam (pbuh) told his children that Allah would not leave man alone on Earth, but would send His prophets to guide them.',
          frame: 'Adam (pbuh) said to his children, “Allah [blank] man alone on Earth, but will send His prophets to guide them.”',
          answers: ['will not leave', 'won\'t leave'],
        },
        {
          source: 'The prophets would have different names and miracles, but they would be united in one thing: The call to follow Allah’s straight path.',
          frame: '“The prophets will have different names and miracles, but they [blank] in one thing.”',
          answers: ['will be united'],
        },
      ],
      correctAnswer: null,
      explanation: 'In reported speech after a past verb (“told”), Adam’s “will” becomes “would”. In direct speech it goes back to “will”. The two “but” clauses organise his message: Not abandonment but guidance, and different names and miracles but one shared call.',
      feedback: {
        correct: 'Well done. You changed “would” back to “will” in direct speech.',
        incorrect: 'Direct speech uses Adam’s own time: His future is “will”. Keep “not” in the first item and the passive “be united” in the second.',
      },
    },
    {
      id: 'adam-b2-language-16-production',
      type: 'reflection',
      title: 'Write a Careful Legacy Paragraph',
      instructions: 'Write or say 8–10 sentences about someone who passes something on to later generations.',
      question: 'What does the person leave for the people after them?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish role from action, mark reported information explicitly, keep future events anchored to a past viewpoint, and use contrast to show how diversity can coexist with continuity.',
      feedback: {
        correct: 'Keep each reporting frame attached to the claim it qualifies, and make the “would” forms consistently reflect the earlier viewpoint.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give their role: “… was …, collecting … and teaching …”', mode: 'Individual' },
        { question: 'Sentence 2 — Report a fact: “It was reported that …”', mode: 'Individual' },
        { question: 'Sentence 3 — Look ahead: “He knew that they would …”', mode: 'Pair' },
        { question: 'Sentence 4 — Show difference and unity: “… different in …, but united in …”', mode: 'Pair' },
      ],
    },
  ],
  17: [
    {
      id: 'adam-b2-language-17-scope-exception',
      type: 'matching',
      title: 'A Claim and Its Limits',
      instructions: 'Match each line from the verses in Chapter 17 with its meaning.',
      question: 'Who can Satan mislead, and who not?',
      matchingHeadings: { left: 'From the verses', right: 'Meaning' },
      matchingPairs: [
        { left: 'I will mislead them all.', right: 'Satan claims he will lead every person astray.' },
        { left: 'Except for Your sincere servants among them.', right: 'Satan admits that some people are beyond his reach.' },
        { left: 'Over My servants you have no authority', right: 'Allah denies Satan any power over those devoted to Him.' },
        { left: 'except for the sinners who follow you.', right: 'Only wrongdoers who choose his way come under his influence.' },
      ],
      correctAnswer: {
        'I will mislead them all.': 'Satan claims he will lead every person astray.',
        'Except for Your sincere servants among them.': 'Satan admits that some people are beyond his reach.',
        'Over My servants you have no authority': 'Allah denies Satan any power over those devoted to Him.',
        'except for the sinners who follow you.': 'Only wrongdoers who choose his way come under his influence.',
      },
      explanation: 'A broad statement (“them all”, “no authority”) is immediately narrowed by “except for …”. The first exception comes from Satan himself; the second comes from Allah. Together they show that Satan’s claim is not absolute: His influence depends on who chooses to follow him.',
      feedback: {
        correct: 'Correct. You matched each broad claim and each exception with its meaning.',
        incorrect: 'Ask who is speaking in each line and whether the line makes a broad claim or removes a group from it. Read the verses in Chapter 17 again.',
      },
    },
    {
      id: 'adam-b2-language-17-concession-reframing',
      type: 'transformation',
      title: 'Focus on the Real Cause',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say these lines from Chapter 17?',
      transformItems: [
        {
          source: 'Satan alone is not strong; it is only man\'s weakness and lack of morals and carefulness that make Satan look so strong.',
          frame: 'What makes Satan look so strong [blank] man\'s weakness and lack of morals and carefulness.',
          answers: ['is only', 'is', 'is just', 'is simply', 'is nothing but'],
        },
        {
          source: 'Learning about Adam (pbuh)’s tale is to know the origin of humanity.',
          frame: '[blank] about Adam (pbuh)’s tale, we come to know the origin of humanity.',
          answers: ['By learning', 'Through learning', 'When we learn', 'If we learn', 'In learning'],
        },
      ],
      correctAnswer: null,
      explanation: '“It is only X that makes Y …” (an it-cleft) and “What makes Y … is only X” (a wh-cleft) both put the real cause in focus and separate it from appearance: Satan only looks strong. “Learning … is to know …” equates two actions; “By learning …, we come to know …” shows the first as the means to the second.',
      feedback: {
        correct: 'Well done. You kept the focus on the cause and the link between learning and knowing.',
        incorrect: 'Item 1: a wh-cleft needs “is” before the focused cause; you can keep “only”. Item 2: use a preposition + -ing, or a clause with “we”.',
      },
    },
    {
      id: 'adam-b2-language-17-cause-appearance',
      type: 'multiple-choice',
      title: 'Keep What Is Conceded and What Is Stressed',
      instructions: 'Read the sentence. Then choose the summary that keeps the writer’s view.',
      question: '“The Holy Qur’an does not focus so much on Satan’s anti-God position (although he is unquestionably a rebel against Allah and surely personifies this disobedient character) but rather underlines his anti-human attitude …” Which summary keeps this view?',
      options: [
        'The Qur’an does not present Satan as a rebel against Allah.',
        'The writer is not sure whether Satan really rebelled against Allah.',
        'Satan is certainly a rebel against Allah, but the Qur’an puts more emphasis on his hostility to human beings.',
        'The Qur’an gives equal attention to Satan’s rebellion against Allah and to his hostility to humans.',
      ],
      correctAnswer: 2,
      explanation: 'The bracketed “although …” concedes a point with strong certainty (“unquestionably”, “surely”). “Not so much … but rather …” does not deny the first point; it moves the emphasis to Satan’s anti-human attitude. A good summary keeps both: What is accepted and what is stressed.',
      feedback: {
        correct: 'Correct. The summary keeps the certain concession and the new emphasis.',
        incorrect: 'Notice “unquestionably” inside the brackets and “not so much … but rather” around it. Is anything denied, or is the emphasis moved? Read the third paragraph of Chapter 17.',
      },
    },
    {
      id: 'adam-b2-language-17-production',
      type: 'reflection',
      title: 'Build a Qualified Final Argument',
      instructions: 'Write or say 8–10 sentences about something that seems strong but depends on us.',
      question: 'What really gives it its power?',
      correctAnswer: null,
      explanation: 'A strong B2 response should control scope, preserve a conceded point without losing the main emphasis, distinguish actual power from apparent power, and make the final question emerge logically from the preceding argument.',
      feedback: {
        correct: 'Check that your exception truly narrows the broad statement and that your final question grows from the argument rather than appearing suddenly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Make a claim with an exception: “Most …, except for …”', mode: 'Individual' },
        { question: 'Sentence 2 — Admit a point: “Although …, …”', mode: 'Individual' },
        { question: 'Sentence 3 — Name the real cause: “It is … that makes … look …”', mode: 'Pair' },
        { question: 'Sentence 4 — End with an open question: “So the real question is: …?”', mode: 'Pair' },
      ],
    },
  ]
};
