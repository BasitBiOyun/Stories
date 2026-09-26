import type { Exercise } from '../../../../types';

/** Adam B2 English Language Focus — Chapters 13–17, plus Language Review. */

export const adamB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  13: [
    {
      id: 'adam-b2-language-13-concession-contrast',
      type: 'drag-drop',
      title: 'Accepted First, Stressed Next',
      instructions: 'Each pair below comes from Chapter 13. In each pair, one part is a point the writer accepts or mentions first, and the other is the point the writer wants to stress. Sort them.',
      question: 'How does the writer admit one point and then move the reader’s attention to another?',
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
      explanation: 'A concession admits a point without letting it become the main message. “Although” marks the conceded clause; the main clause carries the stress. “At first glance … may seem” presents a first impression, and “However, it is important to remember …” moves to the writer’s wider view. “People can be …” admits what humans are capable of, and the next sentence gives the writer’s answer: the path to goodness.',
      feedback: {
        correct: 'Correct. You separated what the writer admits from what the writer stresses.',
        incorrect: 'Look for concession signals (although, at first glance, may seem, can be) and for the part that answers them. Check the first half of Chapter 13.',
      },
    },
    {
      id: 'adam-b2-language-13-modal-stance',
      type: 'transformation',
      title: 'Concession and Hope in Other Words',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 13 sentence. Write only the missing words.',
      question: 'Can you split a concession into two sentences and expand a participle of purpose?',
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
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Which verb forms follow “It is better that you …”, “if” and “did not”?',
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
      title: 'Build a Qualified Conflict-Response Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story conflict. Do not retell Chapter 13. Begin with a concession using “although”, “even if”, or an equivalent expression. Use one modal expression such as “may”, “can”, or “might” to describe a possibility without presenting it as certainty. State the purpose of one response, recommend an alternative action, and finish with an if-clause that makes a consequence or responsibility clear. Keep the paragraph coherent rather than listing target forms.',
      question: 'Can you use concession, modal stance, purpose and condition-consequence language to explain a measured response to conflict?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses these resources to control viewpoint and logic: acknowledge tension, avoid overclaiming, explain intention, propose an alternative and make consequences explicit.',
      feedback: {
        correct: 'Keep the modal claim genuinely possible rather than certain, and make the final condition follow logically from the advice.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Concession — What difficult fact will you acknowledge before presenting the response?', mode: 'Individual' },
        { question: 'Stance — Which claim should be presented as possible rather than certain?', mode: 'Individual' },
        { question: 'Purpose — What result is the responder trying to achieve?', mode: 'Pair' },
        { question: 'Condition — What happens if the recommended alternative is rejected?', mode: 'Pair' },
      ],
    },
  ],
  14: [
    {
      id: 'adam-b2-language-14-negative-coordination',
      type: 'drag-drop',
      title: 'A State Reached or a Process Going On?',
      instructions: 'Read the parts of Chapter 14 below. Does each part describe a state that has already been reached, or something still going on or just beginning? Sort them.',
      question: 'How do the verb forms show the change in Qabil after the crime?',
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
      instructions: 'Tap the pieces to rebuild the first sentence of Chapter 14.',
      question: 'What word order follows “nor” when it starts a negative clause?',
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
      explanation: '“Nor” adds a second negative to a first one. When “nor” begins a clause, the auxiliary comes before the subject, as in a question: “nor did he show fear”. The sentence stacks two failed restraints: the brother’s request had no effect, and fear of punishment did not stop him either.',
      feedback: {
        correct: 'Well done. After “nor”, the auxiliary “did” comes before the subject.',
        incorrect: 'Start with the request and what it did not do. Then add “nor” and use question word order. Check the first sentence of Chapter 14.',
      },
    },
    {
      id: 'adam-b2-language-14-development-purpose',
      type: 'error-correction',
      title: 'Passive and Reported Forms',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct two passive forms and a verb in reported speech?',
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
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which someone ignores several restraints, faces an accumulating consequence, and then learns through an unexpected example. Use one layered negative structure such as “not... nor...”, one passive form to foreground a result or lost restraint, one expression of a developing state such as “was becoming / was getting...”, and one purpose expression such as “to show / in order to...”. Do not retell Chapter 14.',
      question: 'Can you use information focus, developing-state language and purpose framing to build a coherent consequence-and-realisation paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response should use the target structures to organise discourse: failed restraints → visible consequence → developing burden → purposeful learning moment.',
      feedback: {
        correct: 'Keep the passive focused on information structure, make the developing state genuinely gradual, and ensure the purpose clause explains why the final example matters.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Restraints — Which two warnings or considerations are ignored?', mode: 'Individual' },
        { question: 'Focus — Which result is better foregrounded with a passive form?', mode: 'Individual' },
        { question: 'Development — What burden or condition grows over time?', mode: 'Pair' },
        { question: 'Purpose — What does the final example teach or demonstrate?', mode: 'Pair' },
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
      title: 'Compact Clauses in Full',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 15 sentence. Write only the missing words.',
      question: 'Can you expand a participle clause and a reduced passive, and split a relative clause?',
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
      instructions: 'Read the parts of Chapter 15 below. Does each part tell what happened, or does it give the writer’s interpretation of it? Sort them.',
      question: 'Where does the chapter move from narrating events to interpreting them?',
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
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which an event leads to a wider interpretation about human behaviour. Include one purpose structure, one embedded how-clause, the frame “What is essentially described here is...”, one explanatory relative clause and one contrast with “while”. Keep factual description and interpretation clearly separate.',
      question: 'Can you move from a concrete event to a careful interpretation while using clause structure to organise the argument?',
      correctAnswer: null,
      explanation: 'A strong response describes what happened first, explicitly marks the move into interpretation, explains a cause or effect and contrasts two responses without confusing interpretation with fact.',
      feedback: { correct: 'Keep event sentences factual and make the interpretive shift explicit.', incorrect: '' },
      discussionPrompts: [
        { question: 'Event — What concrete action or incident happens first?', mode: 'Individual' },
        { question: 'Purpose — What action is done to show, prevent or teach something?', mode: 'Individual' },
        { question: 'Interpretation — Which sentence clearly marks the move from event to meaning?', mode: 'Pair' },
        { question: 'Contrast — Which two responses or character types will “while” compare?', mode: 'Pair' },
      ],
    },
  ],
  16: [
    {
      id: 'adam-b2-language-16-simultaneous-guidance',
      type: 'true-false',
      title: 'A Reported Detail',
      instructions: 'Read the sentence from Chapter 16: “It was narrated that when Adam (pbuh)’s death drew near, he appointed his son Seth to be his successor …” Is the statement true or false?',
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
      title: 'Parallel -ing Forms and Verb Patterns',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you keep a list of actions parallel and use the right verb form after a preposition and after “tempt”?',
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
      instructions: 'Rewrite Adam’s reported words as he might have said them directly. Write only the missing words.',
      question: 'What happens to “would” when reported speech becomes direct speech?',
      transformItems: [
        {
          source: 'Before his death, Adam (pbuh) told his children that Allah would not leave man alone on Earth, but would send His prophets to guide them.',
          frame: 'Adam (pbuh) said to his children, “Allah [blank] man alone on Earth, but will send His prophets to guide them.”',
          answers: ['will not leave', 'won\'t leave'],
        },
        {
          source: 'The prophets would have different names and miracles, but they would be united in one thing: the call to follow Allah’s straight path.',
          frame: '“The prophets will have different names and miracles, but they [blank] in one thing.”',
          answers: ['will be united'],
        },
      ],
      correctAnswer: null,
      explanation: 'In reported speech after a past verb (“told”), Adam’s “will” becomes “would”. In direct speech it goes back to “will”. The two “but” clauses organise his message: not abandonment but guidance, and different names and miracles but one shared call.',
      feedback: {
        correct: 'Well done. You changed “would” back to “will” in direct speech.',
        incorrect: 'Direct speech uses Adam’s own time: his future is “will”. Keep “not” in the first item and the passive “be united” in the second.',
      },
    },
    {
      id: 'adam-b2-language-16-production',
      type: 'reflection',
      title: 'Write a Careful Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story person or institution passing guidance, values, or responsibility to a later generation. Use one main-role sentence expanded with two parallel -ing phrases, one qualified reporting expression such as “It was reported that...” or “According to...”, at least two future-in-the-past forms with “would”, and one contrast pattern of the form “different..., but united in...”. Keep reported information clearly separate from your own interpretation. Do not retell Chapter 16.',
      question: 'Can you describe continuity across generations while keeping source status, time viewpoint, and contrast clear?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish role from action, mark reported information explicitly, keep future events anchored to a past viewpoint, and use contrast to show how diversity can coexist with continuity.',
      feedback: {
        correct: 'Keep each reporting frame attached to the claim it qualifies, and make the “would” forms consistently reflect the earlier viewpoint.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Role — What central role or identity frames the person or institution?', mode: 'Individual' },
        { question: 'Source — Which sentence needs an explicit reporting frame rather than direct assertion?', mode: 'Individual' },
        { question: 'Continuity — Which later actions will be expressed with “would”?', mode: 'Pair' },
        { question: 'Contrast — What can differ while a shared purpose remains?', mode: 'Pair' },
      ],
    },
  ],
  17: [
    {
      id: 'adam-b2-language-17-scope-exception',
      type: 'matching',
      title: 'A Claim and Its Limits',
      instructions: 'Match each line from the verses in Chapter 17 with its meaning.',
      question: 'How do the verses limit a claim that at first sounds complete?',
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
      explanation: 'A broad statement (“them all”, “no authority”) is immediately narrowed by “except for …”. The first exception comes from Satan himself; the second comes from Allah. Together they show that Satan’s claim is not absolute: his influence depends on who chooses to follow him.',
      feedback: {
        correct: 'Correct. You matched each broad claim and each exception with its meaning.',
        incorrect: 'Ask who is speaking in each line and whether the line makes a broad claim or removes a group from it. Read the verses in Chapter 17 again.',
      },
    },
    {
      id: 'adam-b2-language-17-concession-reframing',
      type: 'transformation',
      title: 'Focus on the Real Cause',
      instructions: 'Complete each new sentence so that it keeps the meaning of the Chapter 17 sentence. Write only the missing words.',
      question: 'Can you keep the focus on the real cause with a different cleft, and express a means in another way?',
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
      instructions: 'Read the sentence from Chapter 17. Then choose the summary that keeps the writer’s stance.',
      question: '“The Holy Qur’an does not focus so much on Satan’s anti-God position (although he is unquestionably a rebel against Allah and surely personifies this disobedient character) but rather underlines his anti-human attitude …” Which summary keeps this stance?',
      options: [
        'The Qur’an does not present Satan as a rebel against Allah.',
        'The writer is not sure whether Satan really rebelled against Allah.',
        'Satan is certainly a rebel against Allah, but the Qur’an puts more emphasis on his hostility to human beings.',
        'The Qur’an gives equal attention to Satan’s rebellion against Allah and to his hostility to humans.',
      ],
      correctAnswer: 2,
      explanation: 'The bracketed “although …” concedes a point with strong certainty (“unquestionably”, “surely”). “Not so much … but rather …” does not deny the first point; it moves the emphasis to Satan’s anti-human attitude. A good summary keeps both: what is accepted and what is stressed.',
      feedback: {
        correct: 'Correct. The summary keeps the certain concession and the new emphasis.',
        incorrect: 'Notice “unquestionably” inside the brackets and “not so much … but rather” around it. Is anything denied, or is the emphasis moved? Read the third paragraph of Chapter 17.',
      },
    },
    {
      id: 'adam-b2-language-17-production',
      type: 'reflection',
      title: 'Build a Qualified Final Argument',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which an influence seems powerful but actually depends on human choices, habits, or conditions. Use one broad statement narrowed by an exception, one concessive pattern such as “although..., ...”, one corrective reframing with “but rather” or “in fact”, and one cause-to-appearance pattern such as “it is ... that makes ... look ...”. End with a genuine open question that follows from your argument. Do not retell Chapter 17.',
      question: 'Can you build a nuanced argument that limits an absolute claim, reframes emphasis, explains apparent power, and ends with a meaningful question?',
      correctAnswer: null,
      explanation: 'A strong B2 response should control scope, preserve a conceded point without losing the main emphasis, distinguish actual power from apparent power, and make the final question emerge logically from the preceding argument.',
      feedback: {
        correct: 'Check that your exception truly narrows the broad statement and that your final question grows from the argument rather than appearing suddenly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Scope — What broad claim will you make, and which group or case will you exclude?', mode: 'Individual' },
        { question: 'Concession — What point will you accept before redirecting the emphasis?', mode: 'Individual' },
        { question: 'Cause — Which human condition creates the appearance of greater power?', mode: 'Pair' },
        { question: 'Final question — What unresolved issue follows naturally from your paragraph?', mode: 'Pair' },
      ],
    },
  ]
};

/**
 * Cumulative B2 language review for Adam English.
 * This page consolidates grammar/discourse/function work from Chapters 1–17.
 * Whole-story comprehension remains in Final Challenge.
 */
export const adamB2LanguageReviewExercises: Exercise[] = [
  {
    id: 'adam-b2-language-review-1-source-certainty',
    type: 'matching',
    title: 'Source, Distance and Certainty',
    instructions: 'Match each reporting frame with the degree of commitment it normally signals.',
    question: 'How can a B2 writer preserve the difference between direct attribution, report, tradition and source limitation?',
    matchingPairs: [
      { left: 'X states that ...', right: 'direct attribution to a named source' },
      { left: 'It is reported that ...', right: 'information presented with reporting distance' },
      { left: 'It is said that ...', right: 'a less firmly anchored traditional or circulating claim' },
      { left: 'The source does not identify ...', right: 'an explicit limit on what can safely be claimed' },
    ],
    correctAnswer: {
      'X states that ...': 'direct attribution to a named source',
      'It is reported that ...': 'information presented with reporting distance',
      'It is said that ...': 'a less firmly anchored traditional or circulating claim',
      'The source does not identify ...': 'an explicit limit on what can safely be claimed',
    },
    explanation: 'Across the book, reporting frames control certainty and prevent interpretation from becoming unqualified fact.',
    feedback: {
      correct: 'Correct. You preserved the source boundary.',
      incorrect: 'Ask whether the wording names a source directly, reports at a distance, marks a circulating claim, or limits what is known.',
    },
  },
  {
    id: 'adam-b2-language-review-2-concession-reframing',
    type: 'multiple-choice',
    title: 'Concede, Then Reframe',
    instructions: 'Choose the sentence that acknowledges one point but redirects the argument without cancelling it.',
    question: 'Which sentence uses concession and reframing most effectively?',
    options: [
      'Although the plan looks efficient, its real strength lies not in speed but in the way it reduces errors.',
      'The plan looks efficient because it is efficient and therefore it is efficient.',
      'The plan is not efficient, and there is nothing else to consider.',
    ],
    correctAnswer: 0,
    explanation: 'Although concedes an apparent strength, while not ... but ... redirects attention to the writer’s main criterion.',
    feedback: {
      correct: 'Correct. The sentence concedes before it reframes.',
      incorrect: 'Look for a sentence that accepts one point first and then shifts the focus to a more important one.',
    },
  },
  {
    id: 'adam-b2-language-review-3-scope-exception',
    type: 'matching',
    title: 'Control the Scope of a Claim',
    instructions: 'Match each form with the way it narrows or qualifies a statement.',
    question: 'How do B2 writers stop broad claims from becoming absolute?',
    matchingPairs: [
      { left: 'except', right: 'removes one case from a wider set' },
      { left: 'may seem', right: 'marks an appearance rather than a settled fact' },
      { left: 'can be understood as', right: 'offers an interpretation without presenting it as the only possible reading' },
      { left: 'in fact', right: 'clarifies or corrects an earlier impression' },
    ],
    correctAnswer: {
      except: 'removes one case from a wider set',
      'may seem': 'marks an appearance rather than a settled fact',
      'can be understood as': 'offers an interpretation without presenting it as the only possible reading',
      'in fact': 'clarifies or corrects an earlier impression',
    },
    explanation: 'The chapters repeatedly distinguish appearance, interpretation, exception and clarification.',
    feedback: {
      correct: 'Correct.',
      incorrect: 'Decide whether each form narrows a set, weakens certainty, offers an interpretation, or corrects an impression.',
    },
  },
  {
    id: 'adam-b2-language-review-4-cause-appearance',
    type: 'fill-blanks',
    title: 'Appearance Is Not Cause',
    instructions: 'Complete the sentence with the relative form that identifies the real cause.',
    question: 'Which word makes the cause-focused structure complete?',
    fillBlanksText: 'It is repeated exposure [blank] makes the claim look more convincing than the evidence actually allows.',
    correctAnswer: 'that',
    explanation: 'The cleft structure “It is X that ...” highlights the real cause while keeping appearance separate from reality.',
    feedback: {
      correct: 'Correct. The cleft gives the cause special focus.',
      incorrect: 'Use the form in “It is X that makes Y look ...”.',
    },
  },
  {
    id: 'adam-b2-language-review-5-viewpoint-modality',
    type: 'matching',
    title: 'Viewpoint, Obligation and Possibility',
    instructions: 'Match each pattern with the viewpoint or stance it expresses.',
    question: 'How do tense and modality shape a writer’s position?',
    matchingPairs: [
      { left: 'would later become', right: 'future seen from a past viewpoint' },
      { left: 'had to respond', right: 'necessity located in the past' },
      { left: 'could be interpreted as', right: 'possible interpretation rather than certainty' },
      { left: 'must distinguish', right: 'strong present obligation in the argument' },
    ],
    correctAnswer: {
      'would later become': 'future seen from a past viewpoint',
      'had to respond': 'necessity located in the past',
      'could be interpreted as': 'possible interpretation rather than certainty',
      'must distinguish': 'strong present obligation in the argument',
    },
    explanation: 'B2 grammar helps position events in time and calibrate necessity, possibility and commitment.',
    feedback: {
      correct: 'Correct.',
      incorrect: 'Separate time viewpoint from past necessity, interpretive possibility and present obligation.',
    },
  },
  {
    id: 'adam-b2-language-review-6-discourse-chain',
    type: 'sequencing',
    title: 'Build a Coherent Reasoning Chain',
    instructions: 'Put the moves into the most coherent order for a short analytical paragraph.',
    question: 'How can a B2 paragraph move from an initial impression to a qualified conclusion?',
    sequencingItems: [
      { id: '1', text: 'At first, the change may seem to solve the problem.' },
      { id: '2', text: 'However, the available evidence is limited.' },
      { id: '3', text: 'Because the sample is small, the result could have another explanation.' },
      { id: '4', text: 'Therefore, the change can be described as promising rather than proven.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'The sequence moves from appearance to contrast, then cause and finally a qualified synthesis.',
    feedback: {
      correct: 'Correct. The paragraph now has a clear discourse logic.',
      incorrect: 'Start with the first impression, introduce the limitation, explain why it matters, then qualify the conclusion.',
    },
  },
  {
    id: 'adam-b2-language-review-7-condition-consequence',
    type: 'multiple-choice',
    title: 'Condition and Consequence',
    instructions: 'Choose the version that expresses a real condition and a clear consequence without overclaiming.',
    question: 'Which sentence best controls the relationship between condition and result?',
    options: [
      'If the evidence remains incomplete, the conclusion should remain provisional.',
      'The evidence is incomplete, so the conclusion is certainly false.',
      'Unless evidence exists, every possible explanation becomes equally true.',
    ],
    correctAnswer: 0,
    explanation: 'The first sentence links a condition to an appropriately calibrated consequence.',
    feedback: {
      correct: 'Correct. The consequence matches the strength of the condition.',
      incorrect: 'Avoid a result that is stronger than the condition or evidence supports.',
    },
  },
  {
    id: 'adam-b2-language-review-8-transfer',
    type: 'reflection',
    title: 'B2 Transfer: Build a Qualified Argument',
    instructions: 'Write one coherent 8–10 sentence B2 paragraph about a non-story issue such as a school rule, a technology claim, a sports debate or a social trend.',
    question: 'Write an 8–10 sentence paragraph that uses the book’s language resources to build a nuanced argument rather than simply state an opinion.',
    correctAnswer: null,
    explanation: 'The aim is cumulative written transfer: source control, concession, stance, cause, condition, cohesion and a qualified conclusion.',
    feedback: {
      correct: 'Use the language features as tools for meaning and coherence.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Attribute at least one claim: “According to ... / X states that ... / It is reported that ...”', mode: 'Individual' },
      { question: 'Include one genuine concession and reframing move: “Although ..., ... not ... but ...”', mode: 'Individual' },
      { question: 'Distinguish appearance from cause using “may seem”, “in fact”, or “It is X that ...”.', mode: 'Pair' },
      { question: 'Use one condition-consequence sentence and end with a conclusion whose certainty matches the evidence.', mode: 'Pair' },
    ],
  },
];
