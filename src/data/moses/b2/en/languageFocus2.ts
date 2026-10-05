import type { Exercise } from '../../../../types';

/**
 * Manually authored B2 Language Focus for Moses, chapters 7–12.
 * Notice → Build → Use; every quoted sentence comes from the English chapter.
 * Qur’anic quotations are only read, matched or asked about, never altered.
 */

const reflection = (id: string, title: string, prompts: string[], explanation: string, ask?: { instructions: string; question: string }): Exercise => ({
  id, type: 'reflection', title, instructions: ask?.instructions ?? 'Produce a short response using the target language naturally and accurately.', question: ask?.question ?? prompts[0], correctAnswer: null, explanation,
  feedback: {
    correct: 'Check that each target form does a clear job in your paragraph.',
    incorrect: 'Look back at how the chapter uses these forms, then revise your paragraph.',
  },
  discussionPrompts: prompts.map(question => ({ question, mode: 'Individual' })),
});

export const mosesB2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mo-b2-lf7-a',
      type: 'multiple-choice',
      title: 'A Hope Reported from the Past',
      instructions: 'Read the sentence from Chapter 7 and choose the best explanation of “would be”.',
      question: '“She was a secret believer and persuaded her husband with her words that this baby would be a ray of light for both of them!” What does “would be” show?',
      options: [
        'A fact about the baby that the narrator has already proved',
        'A past habit of the baby in the palace',
        'Asiye’s hopeful prediction, reported from a past point in the story',
        'A polite request that Asiye makes to the Pharaoh',
      ],
      correctAnswer: 2,
      explanation: 'After a past reporting verb (“persuaded … that”), “will be” becomes “would be”. The narrator reports Asiye’s argument about the future from her point of view in the past; it is her persuasive framing, not a proven fact.',
      feedback: {
        correct: 'Correct. “Would be” reports Asiye’s view of the future from a past moment.',
        incorrect: 'Who is making this claim, and when? Notice the reporting verb “persuaded … that” before “would be”.',
      },
    },
    {
      id: 'mo-b2-lf7-b',
      type: 'transformation',
      title: 'Report the Request, Keep the Contrast',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we report her words and show a difference?',
      transformItems: [
        {
          source: 'She said to her husband, “Let me keep the baby and let him be our son.”',
          frame: 'She asked her husband [blank] keep the baby and let him be their son.',
          answers: ['to let her', 'if she could', 'whether she could', 'if she might', 'whether she might'],
        },
        {
          source: 'Then, she said to her servants, “Find a nurse for the baby.”',
          frame: 'Then, she told her servants [blank] a nurse for the baby.',
          answers: ['to find'],
        },
        {
          source: 'The queen was a good and kind-hearted woman who, unlike her husband, held a belief in Allah.',
          frame: 'The queen held a belief in Allah, [blank] her husband did not.',
          answers: ['whereas', 'while', 'but'],
        },
      ],
      correctAnswer: null,
      explanation: 'A request with “Let me …” is reported as “asked + person + to let her …” or “asked if she could …”. A command is reported with “told + person + to + verb”. “Unlike + noun” becomes a clause with “whereas / while / but” when both sides have their own verb.',
      feedback: {
        correct: 'Well done. You reported the request and the command and rebuilt the contrast.',
        incorrect: 'Item 1: “asked her husband to let her …” or “asked if she could …”. Item 2: “told + person + to + verb”. Item 3: a contrast linker before a full clause. Check Chapter 7.',
      },
    },
    reflection('mo-b2-lf7-c', 'A Persuasive Proposal', [
      'Use “Let me …” and “Let … be …”, and say how both sides gain.',
    ], 'The task transfers the chapter’s persuasion pattern to a new context without retelling the event.', {
      instructions: 'Make a short proposal to persuade someone.',
      question: 'How can your idea help both sides?',
    }),
  ],
  8: [
    {
      id: 'mo-b2-lf8-a',
      type: 'true-false',
      title: 'Timeline: Not Yet',
      instructions: 'Read the sentence from Chapter 8. Is the statement true or false?',
      question: '“He had not yet been given the prophetic mission.” — This sentence means that, at this point in the story, Moses was already a prophet but had not started preaching.',
      correctAnswer: false,
      explanation: '“Had not yet been given” (past perfect passive + “not yet”) says that by this point the mission had not happened; it comes later. The young man’s inner conflict belongs to the time before prophethood.',
      feedback: {
        correct: 'Correct. The mission had not been given at all yet; it comes later in the story.',
        incorrect: 'Look at “not yet” and “had been given”. Had Moses received the mission at this point, or does it come later?',
      },
    },
    {
      id: 'mo-b2-lf8-b',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correction.',
      question: 'Can you fix the word order, the reason and the past verb?',
      errorItems: [
        {
          sentence: 'He couldn’t decide whether should he be thankful to the Pharaoh or oppose the oppression against the Children of Israel.',
          error: 'should he',
          options: ['he should', 'he should to', 'if should he'],
          answer: 0,
        },
        {
          sentence: 'Because these gifts, the weak and oppressed always looked to him for protection and justice.',
          error: 'Because',
          options: ['Because of', 'Since', 'Although'],
          answer: 0,
        },
        {
          sentence: 'Young Moses felt close to the Israelites because he has come from the water, not from a noble family, and his mother was one of the Children of Israel.',
          error: 'has come',
          options: ['had come', 'is coming', 'would come'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After “whether”, an indirect question keeps statement word order: “whether he should … or …”. “Because of” is followed by a noun phrase (“these gifts”); “because” needs a clause. The past perfect “had come” places his origin before the time when he felt close to the Israelites.',
      feedback: {
        correct: 'Well done. You fixed the word order, the cause phrase and the tense.',
        incorrect: 'Check word order after “whether”, what follows “because” vs “because of”, and which tense shows an earlier past. Compare with Chapter 8.',
      },
    },
    reflection('mo-b2-lf8-c', 'Writing an Inner Conflict', [
      'Use “had not yet …”, “whether … or …”, and a reason or a result.',
    ], 'The production task uses timeline and alternative-choice language to build a coherent B2 dilemma.', {
      instructions: 'Describe in 5–6 sentences a person caught between two duties.',
      question: 'Which duty should the person choose?',
    }),
  ],
  9: [
    {
      id: 'mo-b2-lf9-a',
      type: 'drag-drop',
      title: 'Action and Consequence',
      instructions: 'Sort the phrases from Chapter 9: a choice someone made, or what followed?',
      question: 'Was it a choice, or what happened because of it?',
      dragDropGroups: [
        {
          group: 'An action someone chose',
          items: ['Moses got involved in the dispute', 'angrily hit the Egyptian', 'Moses approached him.'],
        },
        {
          group: 'A consequence that followed',
          items: ['who instantly died', 'The news thus spread among the Egyptians.', 'Moses was forced to leave Egypt.'],
        },
      ],
      correctAnswer: {
        'An action someone chose': ['Moses got involved in the dispute', 'angrily hit the Egyptian', 'Moses approached him.'],
        'A consequence that followed': ['who instantly died', 'The news thus spread among the Egyptians.', 'Moses was forced to leave Egypt.'],
      },
      explanation: 'The chapter separates what Moses chose to do from what followed. “Unintentionally” makes clear that the death was not his aim; “thus” and “was forced to” mark consequences. B2 readers keep intention and outcome apart.',
      feedback: {
        correct: 'Correct. You kept the chosen actions separate from their consequences.',
        incorrect: 'Ask: Did someone decide to do this, or did it happen as a result? Look at “thus”, “instantly” and “was forced to” in Chapter 9.',
      },
    },
    {
      id: 'mo-b2-lf9-b',
      type: 'transformation',
      title: 'Intention, Result and Warning',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say “unintentionally”, “result in” and “Run away, or …”?',
      transformItems: [
        {
          source: 'He unintentionally killed the Copt with a single punch.',
          frame: 'He killed the Copt with a single punch, but he did not [blank] to.',
          answers: ['mean', 'intend', 'want', 'plan'],
        },
        {
          source: 'Moses was aware that killing an Egyptian would result in the death penalty.',
          frame: 'Moses was aware that the death penalty would [blank] killing an Egyptian.',
          answers: ['result from', 'follow', 'come from'],
        },
        {
          source: 'A man of faith who came from the palace warned him, “Run away, or the Pharaoh will kill you for this crime.”',
          frame: 'If you [blank], the Pharaoh will kill you for this crime.',
          answers: ['do not run away', 'don’t run away', "don't run away", 'do not run', 'don’t run', "don't run"],
        },
      ],
      correctAnswer: null,
      explanation: '“Unintentionally” = “did not mean/intend to”. “A results in B” means the same as “B results from A”: the preposition changes when the order changes. “Imperative + or + consequence” is a warning that means “If you do not …, …”.',
      feedback: {
        correct: 'Well done. You kept intention, result and warning while changing the structure.',
        incorrect: 'Item 1: which verb means “have the intention”? Item 2: result in → result from when you swap the order. Item 3: “Run away, or …” means “If you do not run away, …”.',
      },
    },
    reflection('mo-b2-lf9-c', 'Serious, Even If Not Planned', [
      'Give a claim and an example, and use “although” or “even though” once.',
    ], 'The task practises qualification: Intention matters, but it does not erase the consequences described by the narrative.', {
      instructions: 'Explain in five sentences how harm can be serious without being planned.',
      question: 'Is harm less serious if nobody planned it?',
    }),
  ],
  10: [
    {
      id: 'mo-b2-lf10-a',
      type: 'matching',
      title: 'Repentance and Accusation',
      instructions: 'Match each Qur’anic line in Chapter 10 with what it does.',
      question: 'Does each line admit, report, promise or accuse?',
      matchingHeadings: { left: 'From the chapter', right: 'What the words do' },
      matchingPairs: [
        { left: '“My Lord! Verily, I have wronged myself, so forgive me.”', right: 'admits a fault and asks for pardon' },
        { left: 'Then He forgave him.', right: 'reports the answer to that prayer' },
        { left: '“… I will never more be a helper for the criminals …”', right: 'a promise about how he will act from now on' },
        { left: '“O Moses! Is it your intention to kill me as you killed a man yesterday?”', right: 'an accusing question that recalls the earlier death' },
      ],
      correctAnswer: {
        '“My Lord! Verily, I have wronged myself, so forgive me.”': 'admits a fault and asks for pardon',
        'Then He forgave him.': 'reports the answer to that prayer',
        '“… I will never more be a helper for the criminals …”': 'a promise about how he will act from now on',
        '“O Moses! Is it your intention to kill me as you killed a man yesterday?”': 'an accusing question that recalls the earlier death',
      },
      explanation: 'The passage moves from admission and request (“I have wronged myself, so forgive me”) to forgiveness, then to a future commitment (“I will never more …”). The man’s question uses the past (“as you killed a man yesterday”) to accuse Moses in the present.',
      feedback: {
        correct: 'Correct. You identified admission, response, commitment and accusation.',
        incorrect: 'Reread Chapter 10. Which line looks forward, which looks back to accuse, and which answers a request?',
      },
    },
    {
      id: 'mo-b2-lf10-b',
      type: 'multiple-choice',
      title: 'Meaning in Context: “plain”',
      instructions: 'Choose the meaning of the word as it is used in Chapter 10.',
      question: 'Moses said to him: “Verily, you are a plain troublemaker!” What does “plain” mean here?',
      options: [
        'simple and without decoration',
        'clear and obvious to everyone',
        'ordinary and not very important',
        'honest and direct in speech',
      ],
      correctAnswer: 1,
      explanation: '“Plain” has several meanings. Before a noun that describes behaviour, it means “clear, obvious”: the man has now caused trouble two days in a row, so his character is evident. The context of repeated conflict decides the meaning.',
      feedback: {
        correct: 'Correct. Here “plain” means that his troublemaking is obvious.',
        incorrect: 'Think about why Moses says this: The same man asked for help “the day before” and is fighting again. What does that make obvious?',
      },
    },
    reflection('mo-b2-lf10-c', 'Past Action → Future Principle', [
      'Say what happened, admit it, then promise: “I will never …” or “I will not …”.',
    ], 'A coherent B2 response should show how reflection on a past event changes future conduct.', {
      instructions: 'Tell how someone learned from a mistake in 4–6 sentences.',
      question: 'What went wrong, and what will change now?',
    }),
  ],
  11: [
    {
      id: 'mo-b2-lf11-a',
      type: 'matching',
      title: 'Warning and Flight',
      instructions: 'Match each Qur’anic line in Chapter 11 with its meaning.',
      question: 'What does each line mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'the chiefs are taking counsel together about you to kill you', right: 'the leaders are meeting to plan his death' },
        { left: 'Truly, I am to you one of those who give sincere advice.', right: 'the messenger assures Moses that his warning can be trusted' },
        { left: 'So he escaped from there, looking about in a state of fear.', right: 'he left while anxiously watching all around him' },
        { left: 'My Lord! Save me from the people who are wrongdoers!', right: 'a request to Allah for safety from the unjust Egyptians' },
      ],
      correctAnswer: {
        'the chiefs are taking counsel together about you to kill you': 'the leaders are meeting to plan his death',
        'Truly, I am to you one of those who give sincere advice.': 'the messenger assures Moses that his warning can be trusted',
        'So he escaped from there, looking about in a state of fear.': 'he left while anxiously watching all around him',
        'My Lord! Save me from the people who are wrongdoers!': 'a request to Allah for safety from the unjust Egyptians',
      },
      explanation: '“Taking counsel together” means consulting as a group. The speaker adds “I am … one of those who give sincere advice” so that Moses believes him. The participle clause “looking about in a state of fear” describes how he left.',
      feedback: {
        correct: 'Correct. You understood the warning, its reliability, the flight and the prayer.',
        incorrect: 'Reread the beginning of Chapter 11. Which line is a plot, which a promise of honesty, which a description, and which a prayer?',
      },
    },
    {
      id: 'mo-b2-lf11-b',
      type: 'transformation',
      title: 'Hardship on the Road',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say “However”, “without changing” and “hiding”?',
      transformItems: [
        {
          source: 'The hot sand burned his soles. However, fearing pursuit by the Pharaoh’s men, he forced himself to continue on.',
          frame: '[blank] the hot sand burned his soles, he forced himself to continue on because he feared pursuit.',
          answers: ['Although', 'Even though', 'Though', 'While'],
        },
        {
          source: 'Moses (pbuh) hurried out of Egypt without changing his clothes or getting prepared for traveling.',
          frame: 'Moses (pbuh) hurried out of Egypt; he [blank] his clothes or get prepared for traveling.',
          answers: ['did not change', 'didn’t change', "didn't change"],
        },
        {
          source: 'He traveled by night, hiding during the day.',
          frame: 'He traveled by night and [blank] during the day.',
          answers: ['hid', 'hid himself'],
        },
      ],
      correctAnswer: null,
      explanation: '“However” links two sentences; “although / even though” puts the hardship and the continued effort in one sentence. “Without + -ing” means “did not …”. A participle clause such as “hiding during the day” can be expanded into a finite verb (“and hid”).',
      feedback: {
        correct: 'Well done. You rebuilt the concession and the participle phrases.',
        incorrect: 'Item 1: a concession linker before a full clause. Item 2: “without changing” = “did not change”. Item 3: the past simple of “hide”. Check the end of Chapter 11.',
      },
    },
    reflection('mo-b2-lf11-c', 'Continuing Despite Hardship', [
      'Use “although” or “despite”, “fearing …” or “hoping …”, and “without …ing”.',
    ], 'The task transfers the chapter’s language of concession and manner to a new situation without retelling the escape.', {
      instructions: 'Describe a hard journey someone had to make in 4–5 sentences.',
      question: 'What made the journey hard, and why go on?',
    }),
  ],
  12: [
    {
      id: 'mo-b2-lf12-a',
      type: 'multiple-choice',
      title: 'What Does “could only … after” Show?',
      instructions: 'Read the sentence from Chapter 12 and choose the best meaning.',
      question: '“Due to the crowd at the water source, the young women could only water their animals after the male shepherds had taken their flocks away.” What does the sentence tell us?',
      options: [
        'The women watered their animals first and then the men watered theirs.',
        'The women could water their animals at any time but preferred to wait.',
        'The women refused to water their animals because of the crowd.',
        'The women had to wait: Watering was possible for them only once the men had finished.',
      ],
      correctAnswer: 3,
      explanation: '“Could only … after …” limits the action to one time: Not before the men had finished. “Due to + noun” gives the cause of the limit, and the past perfect “had taken” shows the men’s action came first.',
      feedback: {
        correct: 'Correct. “Only … after” makes the waiting a restriction, not a choice.',
        incorrect: 'Notice “only” and the past perfect “had taken”. Which action had to happen first?',
      },
    },
    {
      id: 'mo-b2-lf12-b',
      type: 'choose-form',
      title: 'Offer, Time and Reaction',
      instructions: 'Choose the correct word for each sentence from Chapter 12.',
      question: 'Which word fits each sentence?',
      formChoices: [
        {
          sentence: 'Forgetting his thirst, Moses approached them and asked if he [choice] help them in any way.',
          options: ['could', 'does', 'has'],
          answer: 0,
        },
        {
          sentence: 'The older sister said, “We are waiting [choice] the shepherds finish watering their sheep, then we will water ours.”',
          options: ['by', 'until', 'during'],
          answer: 1,
        },
        {
          sentence: 'Moses was surprised [choice] women were shepherding.',
          options: ['of', 'for', 'that'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'A reported offer after “asked if” moves back in time: “if he could help”. “Until + clause” shows how long the waiting lasts; “by” and “during” cannot introduce a clause. “Surprised that + clause” introduces what caused the reaction.',
      feedback: {
        correct: 'Well done. You chose the forms for a reported offer, a time limit and a reaction.',
        incorrect: 'Check what follows each gap: A verb after “if he …”, a whole clause after the time word, and a clause after “surprised”. Compare with Chapter 12.',
      },
    },
    reflection('mo-b2-lf12-c', 'Service Despite Need', [
      'Give a reason with “Due to …”, use “could only”, then say what it shows.',
    ], 'The phrase foregrounds Moses’ own need and helps the reader interpret the priority he gives to helping others.', {
      instructions: 'Explain in 5–6 sentences why “Forgetting his thirst” matters.',
      question: 'What does “Forgetting his thirst” show about Moses?',
    }),
  ],
};
