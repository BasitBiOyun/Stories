import type { Exercise } from '../../../../types';

export const abrahamA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  4: [
    {
      id: 'abraham-a2-language-4-time-and-turning-points',
      type: 'true-false',
      title: 'What Does “Had To” Mean?',
      instructions: 'Read the sentence from Chapter 4. Then decide: true or false?',
      question: '“By now, he had to guide his people.” True or false: guiding his people was now Abraham’s duty.',
      correctAnswer: true,
      explanation: '“Had to + base verb” tells us about a duty or something necessary in the past. Allah made Abraham His Messenger, so now guiding his people was his job.',
      feedback: {
        correct: 'Correct. “Had to guide” means it was his duty to guide them.',
        incorrect: 'Read the middle of the second paragraph again. What happened just before this sentence? Allah “made him His Messenger”.',
      },
    },
    {
      id: 'abraham-a2-language-4-if-future-result',
      type: 'word-bank',
      title: 'Time Words in the Story',
      instructions: 'Complete the lines from Chapter 4 with words from the bank. Two words are not needed.',
      question: 'Which time words move the story from the night to the morning?',
      fillBlanksText: 'Abraham stayed [blank]. [blank] the sun came out. It was shining and very bright. [blank] he saw the bright sun, he thought, “Could this be Allah? It is bigger and brighter.”',
      wordBank: ['all night', 'In the morning', 'When', 'On the morning', 'during'],
      correctAnswer: ['all night', 'In the morning', 'When'],
      explanation: '“All night” tells us how long Abraham stayed: from evening until morning. We say “in the morning”, not “on the morning”. “When” joins two actions: first he saw the sun, then he had a new thought.',
      feedback: {
        correct: 'Well done. You used the time words to move the story forward.',
        incorrect: 'Read the first lines of Chapter 4 again. How long did Abraham stay? Which preposition goes with “the morning”?',
      },
    },
    {
      id: 'abraham-a2-language-4-duty-and-guidance',
      type: 'error-correction',
      title: 'Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct the verb forms in Abraham’s prayer and in his words to his father?',
      errorItems: [
        {
          sentence: 'He said, “If Allah will not show me the right way, I will be on the wrong path.”',
          error: 'will not show',
          options: ['not show', 'doesn’t show', 'didn’t showed'],
          answer: 1,
        },
        {
          sentence: '“O my father, follow me: I will guide you on the right way. Stop worship stones.”',
          error: 'Stop worship',
          options: ['Stop worshipping', 'Stop to worshipping', 'Stopping worship'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After “If”, use the present form, not “will”: “If Allah doesn’t show me …, I will be …”. “Will” goes in the result part. After “Stop”, use the -ing form: “Stop worshipping stones.”',
      feedback: {
        correct: 'Correct. You fixed the if-sentence and the verb after “Stop”.',
        incorrect: 'Read Abraham’s prayer and his words to his father in Chapter 4. Which form comes after “If”? Which form comes after “Stop”?',
      },
    },
    { id: 'abraham-a2-language-4-guidance-production', type: 'reflection', title: 'Say It: Condition, Duty and Guidance', instructions: 'Write or say three short A2 sentences using Chapter 4 patterns.', question: 'Can you use an if-clause, a responsibility, and one direct instruction?', correctAnswer: null, explanation: 'Use “If ... will ...”, “have to ...”, and an imperative such as “Follow ...” or “Stop ...”.', feedback: { correct: 'Keep the sentences short and make each pattern clear.', incorrect: '' }, discussionPrompts: [{ question: 'Use one “If ... will ...” sentence.', mode: 'Individual' }, { question: 'Add one sentence with “have to”.', mode: 'Individual' }, { question: 'Give one short instruction.', mode: 'Pair' }] }
  ],
  5: [
    {
      id: 'abraham-a2-language-5-belief-reason-and-question',
      type: 'matching',
      title: 'Words from Abraham’s Talk',
      instructions: 'Match each Chapter 5 expression with its meaning.',
      question: 'What do these words from the talk between Abraham, his father and the people mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'Leave here now.', right: 'Go away at once.' },
        { left: 'bow down to', right: 'bend low in front of' },
        { left: 'heals me', right: 'makes me well again' },
        { left: 'didn’t listen to him', right: 'paid no attention to his words' },
      ],
      correctAnswer: {
        'Leave here now.': 'Go away at once.',
        'bow down to': 'bend low in front of',
        'heals me': 'makes me well again',
        'didn’t listen to him': 'paid no attention to his words',
      },
      explanation: 'The father says, “Leave here now.” Abraham asks, “Why do you bow down to these objects?” He says Allah “heals me when I am sick”. At the end, “people didn’t listen to him”: they heard him, but they did not accept his words.',
      feedback: {
        correct: 'Well done. You understood the key words of the chapter.',
        incorrect: 'Find each expression in Chapter 5 and read the sentence around it.',
      },
    },
    {
      id: 'abraham-a2-language-5-reason-and-result',
      type: 'choose-form',
      title: 'Do or Does? Have or Has?',
      instructions: 'Choose the correct word to complete each sentence from Chapter 5.',
      question: 'Which present form goes with I, you and they?',
      formChoices: [
        { sentence: '“O people! I believe in Allah. I [choice] worship stone idols …', options: ['does not', 'do not', 'not'], answer: 1 },
        { sentence: '“Why [choice] you bow down to these objects?', options: ['do', 'does', 'are'], answer: 0 },
        { sentence: 'Your gods [choice] no power to do these things.', options: ['has', 'having', 'have'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'With I, you, we, they and plural nouns, use “do not”, “do” and “have”: I do not worship, Why do you …?, Your gods have no power. With he, she and it, use “does” and “has”.',
      feedback: {
        correct: 'Correct. You chose the right present form for each subject.',
        incorrect: 'Look at the subject of each sentence: I, you, your gods. Is it he/she/it, or not?',
      },
    },
    {
      id: 'abraham-a2-language-5-when-and-power',
      type: 'sentence-building',
      title: 'Every Time I Need',
      instructions: 'Tap the pieces to build Abraham’s sentence from Chapter 5.',
      question: 'How does Abraham say what Allah always does for him?',
      sentenceChunks: ['My Allah gives me', 'food and drink', 'when', 'I need them.'],
      correctAnswer: null,
      explanation: '“When + present verb” shows something that happens every time: every time Abraham needs food and drink, Allah gives them to him. The chapter uses the same pattern in “He heals me when I am sick.”',
      feedback: {
        correct: 'Correct. “When I need them” tells us every time this happens.',
        incorrect: 'Start with who gives, then what He gives, then “when” and the situation.',
      },
    },
    { id: 'abraham-a2-language-5-position-production', type: 'reflection', title: 'Say It: Belief, Reason and General Situations', instructions: 'Write or say four short A2 sentences using Chapter 5 patterns.', question: 'Can you state a belief, give a reason, describe a general situation and talk about ability?', correctAnswer: null, explanation: 'Use “I believe ...”, “because ...”, “When ...”, and “has/has no power to ...”.', feedback: { correct: 'Keep each sentence simple and clear.', incorrect: '' }, discussionPrompts: [{ question: 'State one belief.', mode: 'Individual' }, { question: 'Give one reason with “because”.', mode: 'Individual' }, { question: 'Use one “When ...” sentence.', mode: 'Individual' }, { question: 'Finish with “has/has no power to ...”.', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-a2-language-6-intention-plan-and-secrecy',
      type: 'multiple-choice',
      title: 'It Is Getting Cold',
      instructions: 'Read Abraham’s words from Chapter 6. Choose the best meaning.',
      question: 'Abraham jokingly asked the idols, “Why don’t you eat the food? It is getting cold.” What does “It is getting cold” mean?',
      options: [
        'The food was cold before.',
        'The food is becoming colder now.',
        'Somebody is bringing cold food.',
      ],
      correctAnswer: 1,
      explanation: '“Get + adjective” means “become”. “It is getting cold” shows a change that is happening now: the food is slowly becoming colder. Abraham says it as a joke, because the idols cannot eat.',
      feedback: {
        correct: 'Correct. “Is getting cold” shows a change happening now.',
        incorrect: 'Think about hot food on a plate. What happens to it when nobody eats it?',
      },
    },
    {
      id: 'abraham-a2-language-6-setting-and-when',
      type: 'choose-form',
      title: 'Plans and Scenes',
      instructions: 'Choose the correct word to complete each sentence from Chapter 6.',
      question: 'Can you complete Abraham’s intention, his secret and the scene in the big house?',
      formChoices: [
        { sentence: 'Abraham (pbuh) wanted [choice] his people that it was so silly to love and talk to idols.', options: ['show', 'to show', 'showing'], answer: 1 },
        { sentence: 'But he did not tell [choice] about his plan.', options: ['someone', 'nobody', 'anyone'], answer: 2 },
        { sentence: 'There [choice] plates of food in front of them.', options: ['were', 'was', 'is'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'After “want”, use “to + base verb”: wanted to show. After “did not”, use “anyone”, not “someone” or “nobody”. Use “There were” for more than one thing (plates) and “There was” for one thing (“There was a big festival soon”).',
      feedback: {
        correct: 'Well done. You completed the intention, the secret and the scene.',
        incorrect: 'Read the first paragraph and the start of the second paragraph of Chapter 6 again.',
      },
    },
    {
      id: 'abraham-a2-language-6-action-in-progress-and-sequence',
      type: 'sequencing',
      title: 'Step by Step',
      instructions: 'Put the Chapter 6 sentences in the order they happened.',
      question: 'How does Abraham carry out his plan?',
      sequencingItems: [
        { id: '1', text: 'He got an axe and waited.' },
        { id: '2', text: 'When the town was empty, he went into the big house …' },
        { id: '3', text: 'Abraham (pbuh) began to break the stone gods, one after another.' },
        { id: '4', text: 'In the end, they were all broken.' },
        { id: '5', text: 'Abraham (pbuh) placed the axe around its neck and hurried back home.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: 'The chapter tells the plan step by step. “When the town was empty” shows the right time to act. “Began to break” is the start of the action, “one after another” shows that he broke them one by one, and “In the end” shows the result.',
      feedback: {
        correct: 'Correct. You followed the plan from start to end.',
        incorrect: 'Look for the time words in Chapter 6: “When”, “began to”, “In the end”.',
      },
    },
    { id: 'abraham-a2-language-6-plan-production', type: 'reflection', title: 'Say It: A Simple Plan and Sequence', instructions: 'Write or say four or five short A2 sentences about a simple plan. Use at least four Chapter 6 language patterns below. Do not explain why Abraham left the largest idol unbroken.', question: 'Can you express an intention, set a scene and tell a short sequence clearly?', correctAnswer: null, explanation: 'A strong response can use “wanted to ...”, “made a plan to ...”, “There was/were ...”, “When ...”, “began to ...”, and a sequence expression such as “one after another” or “In the end”.', feedback: { correct: 'Keep the sequence clear and use each pattern for its real function.', incorrect: '' }, discussionPrompts: [{ question: 'Intention — Begin with “I wanted to ...”', mode: 'Individual' }, { question: 'Plan — Add “I made a plan to ...”', mode: 'Individual' }, { question: 'Setting/time — Use “There was/were ...” or “When ...”', mode: 'Individual' }, { question: 'Action — Add “I began to ...”', mode: 'Individual' }, { question: 'Sequence/result — Finish with “one after another” or “In the end ...”', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-a2-language-7-reaction-and-reason',
      type: 'drag-drop',
      title: 'Two Kinds of Questions',
      instructions: 'Put each Chapter 7 question in the right group.',
      question: 'Which questions use a question word, and which can have a yes/no answer?',
      dragDropGroups: [
        { group: 'Has a question word (Who? Why?)', items: ['Who did this?', 'Then, why do you worship these objects?'] },
        { group: 'Yes or no question', items: ['Don’t you see that they …?', 'Are you crazy?'] },
      ],
      correctAnswer: {
        'Has a question word (Who? Why?)': ['Who did this?', 'Then, why do you worship these objects?'],
        'Yes or no question': ['Don’t you see that they …?', 'Are you crazy?'],
      },
      explanation: '“Who …?” asks for a person and “Why …?” asks for a reason. Questions that start with “Don’t …?” or “Are …?” can have a yes/no answer. Abraham’s yes/no questions make the people think: they know the answer.',
      feedback: {
        correct: 'Correct. You sorted the questions by their form.',
        incorrect: 'Look at each question. Does it have a question word like “Who” or “why”?',
      },
    },
    {
      id: 'abraham-a2-language-7-question-functions',
      type: 'word-bank',
      title: 'The Next Day',
      instructions: 'Complete the lines from Chapter 7 with words from the bank. Two words are not needed.',
      question: 'Which words tell us when the people came and how they felt?',
      fillBlanksText: '[blank], people went to the house of gods. They were [blank] because all their stone gods were in pieces. … The people were displeased [blank] his answer …',
      wordBank: ['The next day', 'shocked', 'with', 'of', 'happy'],
      correctAnswer: ['The next day', 'shocked', 'with'],
      explanation: '“The next day” moves the story to a new time. “Shocked” is a strong feeling of surprise; “because” gives the reason for it. We say “displeased with” something or someone.',
      feedback: {
        correct: 'Well done. You completed the time, the feeling and the word after “displeased”.',
        incorrect: 'Read Chapter 7 again. How did the people feel when they saw the pieces? Which word comes after “displeased”?',
      },
    },
    {
      id: 'abraham-a2-language-7-knowledge-question-and-ability',
      type: 'error-correction',
      title: 'Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or words, then choose the correction.',
      question: 'Can you correct the verbs in these questions and answers?',
      errorItems: [
        {
          sentence: 'They asked him, “Did you harmed our gods?”',
          error: 'harmed',
          options: ['harming', 'harm', 'harms'],
          answer: 1,
        },
        {
          sentence: '“It broke all the stones. Ask it if it can speaks!”',
          error: 'can speaks',
          options: ['can to speak', 'can speaking', 'can speak'],
          answer: 2,
        },
        {
          sentence: '… and said, “You know that these objects doesn’t speak!”',
          error: 'doesn’t speak',
          options: ['don’t speak', 'not speak', 'doesn’t speaks'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After “Did”, use the base verb: “Did you harm …?” After “can”, use the base verb: “can speak”. With a plural subject (these objects), use “don’t”, not “doesn’t”.',
      feedback: {
        correct: 'Correct. You fixed all three verb forms.',
        incorrect: 'Read the second paragraph of Chapter 7 again. Look at the verb after “Did” and “can”, and at the subject “these objects”.',
      },
    },
    { id: 'abraham-a2-language-7-questioning-production', type: 'reflection', title: 'Say It: Ask and Explain', instructions: 'Write or say four or five short A2 lines about a simple past situation. Use at least four Chapter 7 language patterns. Do not retell the answer to the Quick Challenge.', question: 'Can you ask about a past event, report what you know and explain a reason?', correctAnswer: null, explanation: 'A strong response can use “The next day ...”, “Who ...?”, “Did you ...?”, “I know that ...”, “Ask ... if ...”, “can/can’t ...”, and “because ...”.', feedback: { correct: 'Keep the questions natural and use each pattern for its real function.', incorrect: '' }, discussionPrompts: [{ question: 'Time — Begin with “The next day ...” or another past-time expression.', mode: 'Individual' }, { question: 'Past event — Ask “Who ...?” or “Did you ...?”', mode: 'Individual' }, { question: 'Knowledge — Add “I know that ...”', mode: 'Individual' }, { question: 'Ability — Use “can” or “can’t” with a base verb.', mode: 'Individual' }, { question: 'Reason — Finish one idea with “because ...”.', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-a2-language-8-degree-and-result',
      type: 'multiple-choice',
      title: 'Too Proud to Say Sorry',
      instructions: 'Read the sentence from Chapter 8. Choose the right answer.',
      question: '“But they were too arrogant to accept their mistake.” Did the people accept their mistake?',
      options: [
        'Yes, they accepted it.',
        'Yes, but only after the fire.',
        'No, they did not accept it.',
      ],
      correctAnswer: 2,
      explanation: '“Too + adjective + to + verb” means that something stops an action. The people were very arrogant, so they did not accept their mistake. Instead, they started shouting.',
      feedback: {
        correct: 'Correct. “Too arrogant to accept” means they did not accept it.',
        incorrect: 'Read the first lines of Chapter 8 again. What did the people do after this sentence?',
      },
    },
    {
      id: 'abraham-a2-language-8-purpose',
      type: 'choose-form',
      title: 'So, To, Could Not',
      instructions: 'Choose the correct word or words to complete each sentence from Chapter 8.',
      question: 'Can you complete the sentences about the size of the fire, the people’s purpose and the birds?',
      formChoices: [
        { sentence: 'The fire was [choice] huge that it was dangerous to go near it.', options: ['too', 'very', 'so'], answer: 2 },
        { sentence: 'People from many different towns came [choice] Abraham (pbuh).', options: ['to watch', 'for watch', 'for watching'], answer: 0 },
        { sentence: 'Birds [choice] fly over the flames.', options: ['cannot', 'could not', 'did not could'], answer: 1 },
      ],
      correctAnswer: null,
      explanation: '“So + adjective + that …” shows a result: the fire was so huge that it was dangerous. “To + base verb” tells us why people came: to watch. “Could not” shows that the birds were not able to fly over the flames in the past.',
      feedback: {
        correct: 'Well done. You completed the result, the purpose and the past ability.',
        incorrect: 'Read Chapter 8 again. Which word goes with “that”? Which small word shows why people came? The story is in the past.',
      },
    },
    {
      id: 'abraham-a2-language-8-commands-and-sequence',
      type: 'matching',
      title: 'Words About Feelings and Actions',
      instructions: 'Match each Chapter 8 expression with its meaning.',
      question: 'What do these words from Chapter 8 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'felt ashamed', right: 'felt bad about their wrong action' },
        { left: 'stayed calm', right: 'was not afraid or angry' },
        { left: 'collected', right: 'brought together' },
        { left: 'finally', right: 'at last' },
      ],
      correctAnswer: {
        'felt ashamed': 'felt bad about their wrong action',
        'stayed calm': 'was not afraid or angry',
        collected: 'brought together',
        finally: 'at last',
      },
      explanation: 'The people “felt ashamed” because they knew Abraham was right. Abraham “stayed calm, because he trusted Allah”. The people “collected firewood for the fire for days”, and after that time the fire “was finally ready”.',
      feedback: {
        correct: 'Well done. You understood the key words of the chapter.',
        incorrect: 'Find each expression in Chapter 8 and read the sentence around it.',
      },
    },
    { id: 'abraham-a2-language-8-production', type: 'reflection', title: 'Say It: Describe a Dangerous Plan', instructions: 'Write or say four short A2 sentences using Chapter 8 patterns.', question: 'Can you describe degree, inability, purpose and sequence?', correctAnswer: null, explanation: 'Use a pattern with “too” or “so”, one “could not” sentence, one purpose with “to”, and one time marker.', feedback: { correct: 'Keep the description short and connected.', incorrect: '' }, discussionPrompts: [{ question: 'Use “too ... to” or “so ... that”.', mode: 'Individual' }, { question: 'Add “could not + verb”.', mode: 'Individual' }, { question: 'Add a purpose with “to + verb”.', mode: 'Individual' }, { question: 'Finish with “finally”.', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-a2-language-9-anything-nothing-only',
      type: 'true-false',
      title: 'Not Harmed at All',
      instructions: 'Read the sentence from Chapter 9. Then decide: true or false?',
      question: '“People were shocked to see that Abraham (pbuh) was not harmed at all.” True or false: the fire hurt Abraham a little.',
      correctAnswer: false,
      explanation: '“Not … at all” makes a negative stronger. “Not harmed at all” means there was no harm, not even a little. The fire only burnt the ropes on his hands and feet.',
      feedback: {
        correct: 'Correct. “Not at all” means not even a little.',
        incorrect: 'Look at the words “at all”. They make “not harmed” stronger. Was there any harm?',
      },
    },
    {
      id: 'abraham-a2-language-9-change-and-time',
      type: 'word-bank',
      title: 'What Changed and What Did Not',
      instructions: 'Complete the lines from Chapter 9 with words from the bank. Two words are not needed.',
      question: 'Which words show how the fire changed, and which word shows that the people did not change?',
      fillBlanksText: 'The fire [blank] cool and safe for him. … The fire [blank] a garden. … Abraham (pbuh) tried hard to show them the truth, but they were [blank] against him.',
      wordBank: ['became', 'turned into', 'still', 'become', 'never'],
      correctAnswer: ['became', 'turned into', 'still'],
      explanation: '“Became + adjective” (became cool) and “turned into + noun” (turned into a garden) show a change. “Still” shows that a situation did not change: after the miracle, the people were against Abraham, the same as before.',
      feedback: {
        correct: 'Well done. The fire changed, but the people did not.',
        incorrect: 'Read Chapter 9 again. “Turned into” goes before a noun. The story is in the past. Which word shows that something continued?',
      },
    },
    {
      id: 'abraham-a2-language-9-reaction-contrast-still',
      type: 'multiple-choice',
      title: 'Nothing from You',
      instructions: 'Read the lines from Chapter 9. Choose the best meaning.',
      question: 'Gabriel asked, “Is there anything you wish for?” Abraham (pbuh) only said, “Nothing from you!” What does Abraham mean?',
      options: [
        'He wants many things from Gabriel.',
        'He does not want anything from Gabriel.',
        'He has nothing to give Gabriel.',
      ],
      correctAnswer: 1,
      explanation: '“Anything” is used in questions: “Is there anything …?” “Nothing” means “not anything”. Abraham does not ask Gabriel for help, because he knew Allah was on his side.',
      feedback: {
        correct: 'Correct. “Nothing from you” means he does not want anything from Gabriel.',
        incorrect: 'Read the next sentence in Chapter 9: “He knew Allah was on his side.” Who did Abraham trust?',
      },
    },
    { id: 'abraham-a2-language-9-production', type: 'reflection', title: 'Say It: A Surprising Change', instructions: 'Write or say four short A2 sentences using Chapter 9 patterns.', question: 'Can you describe change, time, reaction and continuation?', correctAnswer: null, explanation: 'Use “became” or “turned into”, one time linker, one reaction, and “still”.', feedback: { correct: 'Make the four sentences form one short situation.', incorrect: '' }, discussionPrompts: [{ question: 'Describe one change.', mode: 'Individual' }, { question: 'Add “when” or “at that moment”.', mode: 'Individual' }, { question: 'Describe a reaction.', mode: 'Individual' }, { question: 'Use “still” to show what continued.', mode: 'Pair' }] }
  ]
};
