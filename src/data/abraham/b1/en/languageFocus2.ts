import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'abraham-b1-language-3-contrast-viewpoint',
      type: 'multiple-choice',
      title: 'What Does “Still” Tell Us?',
      instructions: 'Read the sentence from Chapter 3. Then choose what “still” tells us.',
      question: '“Years passed, and Abraham grew into a young man. … It made him sad to see the people of the kingdom; they were still showing love and respect to idols.” What does “still” tell us about the people?',
      options: [
        'They continued to do this; nothing had changed over the years.',
        'They were quiet and did not move.',
        'They started doing this again after a break.',
        'They did this for the first time.',
      ],
      correctAnswer: 0,
      explanation: '“Still” (before the main verb, after be) shows that a situation continues and has not changed, often when we expect a change. Years passed and Abraham grew up, but the people were still showing love and respect to idols. The continuous form “were showing” adds that this was ongoing. That is why it made Abraham sad.',
      feedback: {
        correct: 'Correct. “Still” shows that the people’s behaviour continued without change.',
        incorrect: 'Look at the first words of Chapter 3: “Years passed …”. What did not change in all those years?',
      },
    },
    {
      id: 'abraham-b1-language-3-purpose-sequence',
      type: 'word-bank',
      title: 'Linking Ideas in Abraham’s Search',
      instructions: 'Complete the lines from Chapter 3 with words from the bank. Two words are not needed.',
      question: 'Which linking words show contrast, a change of viewpoint, purpose and reason?',
      fillBlanksText: '[blank] he always wondered about Allah, he also knew that Allah could not be a statue. It made him sad to see the people of the kingdom; they were still showing love and respect to idols. [blank], Abraham was in search of one true Creator. One night, Abraham left his home [blank] take a walk in the countryside. … “I will not show respect to it or worship it, [blank] it sets and disappears.”',
      wordBank: ['Although', 'On the other hand', 'to', 'because', 'Despite', 'Because of'],
      correctAnswer: ['Although', 'On the other hand', 'to', 'because'],
      explanation: '“Although + clause” holds two ideas together: Abraham still had questions about Allah, but he was sure of one thing. “On the other hand” moves from the people to Abraham’s different position. “To + verb” gives the purpose of an action (left his home to take a walk). “Because” gives the reason for a decision. “Despite” and “because of” cannot be followed by a full clause (subject + verb); they need a noun.',
      feedback: {
        correct: 'Correct. You chose the right link for contrast, viewpoint, purpose and reason.',
        incorrect: 'For each gap, ask: is it a contrast, a new viewpoint, a purpose (why he left home), or a reason (why he will not worship the star)? Then check Chapter 3.',
      },
    },
    {
      id: 'abraham-b1-language-3-question-to-conclusion',
      type: 'transformation',
      title: 'Asking and Concluding',
      instructions: 'Rewrite each sentence. Report the direct question in item 1. Change the reported conclusion into Abraham’s own words in item 2.',
      question: 'How does a question or a conclusion change when we report it?',
      transformItems: [
        {
          source: 'He saw a bright star and wondered, “Could this be my Allah?”',
          frame: 'He saw a bright star and wondered [blank] his Allah.',
          answers: [
            'if it could be', 'whether it could be', 'if this could be', 'whether this could be',
            'if that could be', 'whether that could be', 'if it was', 'whether it was',
          ],
        },
        {
          source: 'But when the moon faded, he understood that it could not be Allah.',
          frame: 'But when the moon faded, he said, “[blank] Allah.”',
          answers: [
            'It cannot be', "It can't be", 'It can not be', 'This cannot be', "This can't be",
            'It could not be', "It couldn't be", 'This could not be', "This couldn't be",
          ],
        },
      ],
      correctAnswer: null,
      explanation: 'A reported yes/no question uses if or whether and statement word order: “Could this be my Allah?” → “He wondered if it could be his Allah.” A reported conclusion often moves back in time: Abraham’s thought “It cannot be Allah” becomes “he understood that it could not be Allah”. Together these forms build a reasoning chain: test a possibility, then report the conclusion.',
      feedback: {
        correct: 'Well done. You moved between direct words and reported thinking.',
        incorrect: 'Item 1: start with if or whether and put the subject before the verb. Item 2: use Abraham’s own words, for example “It can’t be …”.',
      },
    },
    {
      id: 'abraham-b1-language-3-reasoned-observation', type: 'reflection', title: 'Build a Short Reasoning Chain', instructions: 'Write or say four connected B1 sentences about someone examining two possible explanations for an everyday situation. Use at least three Chapter 3 language patterns without retelling the story.', question: 'Can you move from contrast or viewpoint to purpose or sequence, then test a possibility and finish with a reasoned conclusion?', correctAnswer: null,
      explanation: 'A strong response can use “Although ...”, “On the other hand ...”, “Could this be ...?”, “because ...”, and “I understood/realised that ...” in one coherent line of reasoning.',
      feedback: { correct: 'Keep all four sentences focused on one situation and make the conclusion follow from the evidence.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Introduce contrast with “Although ...” or shift viewpoint with “On the other hand ...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Add purpose or sequence with “to + verb”, linked actions, or “Then ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Test a possibility with “Could this be ...?” and give a reason with “because ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Report the conclusion with “I understood/realised that ...”.', mode: 'Pair' },
      ],
    },
  ],
};

export const abrahamB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'abraham-b1-language-4-time-result',
      type: 'multiple-choice',
      title: 'Same Form, Different Purpose',
      instructions: 'Read the two “if” sentences from Chapter 4. Then choose the best answer.',
      question: '(1) Abraham: “If Allah doesn’t show me the right way, I will be on the wrong path.” (2) His father: “If you do not stop speaking like this, I will stone you.” Both sentences use If + present, will + verb. How are they different?',
      options: [
        'In (1), Abraham shows that he needs Allah’s guidance; in (2), his father makes a threat.',
        'Sentence (1) is about the past; sentence (2) is about the future.',
        'In (1), Abraham makes a threat; in (2), his father asks for help.',
        'Both sentences are promises to help someone.',
      ],
      correctAnswer: 0,
      explanation: 'If + present simple, will + verb talks about a possible future situation and its result. The form is the same in both sentences, but the purpose depends on the speaker. Abraham is praying and asking for help, so his sentence shows his need for guidance. His father is angry, so his sentence is a threat: stop, or this will happen.',
      feedback: {
        correct: 'Correct. The same grammar can express a need or a threat, depending on who speaks and why.',
        incorrect: 'Look at what each speaker is doing: Abraham has just asked Allah for help, and his father “grew angry”. Both sentences are about the future.',
      },
    },
    {
      id: 'abraham-b1-language-4-condition-consequence',
      type: 'choose-form',
      title: 'Time and Role',
      instructions: 'Choose the correct form to complete each sentence from Chapter 4.',
      question: 'Which forms mark an end point in time and the role someone is chosen for?',
      formChoices: [
        {
          sentence: 'Abraham stayed [choice] sunrise, and when he saw the bright sun, he wondered, “Could this be Allah? It is bigger.”',
          options: ['until', 'by', 'since'],
          answer: 0,
        },
        {
          sentence: 'He recognized that he … because Allah chose him [choice] His Messenger.',
          options: ['to be', 'be', 'being'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Until” marks the end point of an action that continues (he stayed … until sunrise). Choose + person + to be + role says what someone is chosen for: Allah chose him to be His Messenger.',
      feedback: {
        correct: 'Correct. You used until for an end point, the present simple after if, and chose + person + to be.',
        incorrect: 'Remember: no “will” after “if” here, and chose him + to + verb. Check the first three paragraphs of Chapter 4.',
      },
    },
    {
      id: 'abraham-b1-language-4-duty-purpose-command',
      type: 'error-correction',
      title: 'Duty and Direct Instructions',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct the verb forms after “should” and “stop”?',
      errorItems: [
        {
          sentence: 'He recognized that he should to guide his people because Allah chose him to be His Messenger.',
          error: 'should to guide',
          options: ['should guide', 'should guiding', 'should guided'],
          answer: 0,
        },
        {
          sentence: '… told his father, “O my father, follow me: I will guide you on the right way. Stop worship idols.”',
          error: 'Stop worship',
          options: ['Stop worshipping', 'Stop to worship', 'Stopping worship'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Should + base verb” (no “to”) expresses a duty; here “because …” gives the reason for that duty. Direct instructions use the imperative: “Follow me”, “Leave here now”. After “stop”, use -ing to mean “do not do this any more”: “Stop worshipping idols”. “Stop to worship” would mean stopping in order to worship, which is the opposite meaning.',
      feedback: {
        correct: 'Well done. You fixed the modal verb and the imperative.',
        incorrect: 'Check the third and fourth paragraphs of Chapter 4: “he should … his people” and Abraham’s words to his father.',
      },
    },
    {
      id: 'abraham-b1-language-4-connected-response', type: 'reflection', title: 'Build a Responsibility-and-Response Scene', instructions: 'Write or say four connected B1 sentences about a person who realises a responsibility, explains why it matters, gives one direct instruction, and faces a conditional response. Do not retell Chapter 4.', question: 'Can you connect time or realisation, responsibility + reason, an imperative, and an if-clause in one short coherent scene?', correctAnswer: null,
      explanation: 'A strong response can combine “when ...”, “should ... because ...”, a direct imperative, and “If ... , I will ...” while keeping one clear situation.', feedback: { correct: 'Keep the four sentences connected and make the conditional response logically follow from the situation.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Introduce the moment of realisation with “when ...” or an endpoint with “until ...”.', mode: 'Individual' }, { question: 'Sentence 2 — State a responsibility with “should ... because ...”.', mode: 'Individual' }, { question: 'Sentence 3 — Give one clear imperative such as “Follow ...”, “Stop ...”, or “Leave ...”.', mode: 'Individual' }, { question: 'Sentence 4 — Add a realistic consequence or response with “If ... , I will ...”.', mode: 'Pair' }],
    },
  ],
};

export const abrahamB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'abraham-b1-language-5-reason-result',
      type: 'matching',
      title: 'Words for Effort and Response',
      instructions: 'Match each word or phrase from Chapter 5 with its meaning.',
      question: 'What do these words tell us about Abraham’s effort and the people’s response?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'got furious', right: 'became very angry' },
        { left: 'did not give up', right: 'kept trying' },
        { left: 'reconsider', right: 'think again about' },
        { left: 'ignored', right: 'paid no attention to' },
        { left: 'though (at the end of a sentence)', right: 'however' },
      ],
      correctAnswer: {
        'got furious': 'became very angry',
        'did not give up': 'kept trying',
        'reconsider': 'think again about',
        'ignored': 'paid no attention to',
        'though (at the end of a sentence)': 'however',
      },
      explanation: '“Give up” is a phrasal verb meaning “stop trying”, so “did not give up” means he kept trying. “Reconsider” = re- (again) + consider (think about). “Ignore” means to pay no attention on purpose. At the end of a sentence, “though” works like “however”: “They ignored him, though.” shows a result that is different from what Abraham hoped for.',
      feedback: {
        correct: 'Correct. These words show Abraham’s continued effort and the people’s refusal.',
        incorrect: 'Read the end of Chapter 5 again: “Abraham (pbuh) did not give up … He wanted them to reconsider their beliefs. They ignored him, though.”',
      },
    },
    {
      id: 'abraham-b1-language-5-persistence-purpose',
      type: 'choose-form',
      title: 'Reasons and Situations',
      instructions: 'Choose the correct word or phrase to complete each sentence from Chapter 5.',
      question: 'When do we use because, because of, and when?',
      formChoices: [
        {
          sentence: '“I do not worship your idols [choice] Allah is the one and only true God!”',
          options: ['because', 'because of', 'so'],
          answer: 0,
        },
        {
          sentence: 'People replied, “We saw our fathers worship them; [choice], we do the same.”',
          options: ['because of this', 'because this', 'because of'],
          answer: 0,
        },
        {
          sentence: '“My Allah gives me food and drink when I need them, and heals me [choice] I am sick.”',
          options: ['when', 'during', 'because of'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Because” is followed by a clause with a subject and verb (because Allah is …). “Because of” is followed by a noun or pronoun (because of this). “When + clause” tells us the situation in which something happens (when I am sick). “During” is followed by a noun, not a clause.',
      feedback: {
        correct: 'Correct. You matched each linker with the kind of words that follow it.',
        incorrect: 'Look at what comes after each gap: a full clause (subject + verb) or nothing but a comma? Then check Abraham’s and the people’s words in Chapter 5.',
      },
    },
    {
      id: 'abraham-b1-language-5-action-patterns',
      type: 'transformation',
      title: 'Wanting Someone to Act',
      instructions: 'Rewrite each sentence from Chapter 5 so that it keeps the same meaning.',
      question: 'How do we say what we want another person to do, and how can a when-clause move?',
      transformItems: [
        {
          source: 'He wanted them to reconsider their beliefs.',
          frame: 'Abraham said to the people, “I want [blank] your beliefs.”',
          answers: ['you to reconsider'],
        },
        {
          source: 'People got furious when they heard him.',
          frame: 'When [blank], they got furious.',
          answers: ['people heard him', 'the people heard him', 'people heard Abraham', 'the people heard Abraham'],
        },
      ],
      correctAnswer: null,
      explanation: 'To say what we want another person to do, use want + person + to + verb: “I want you to reconsider …” (not “I want that you reconsider”). A when-clause can come after or before the main clause. When it comes first, put a comma after it: “When people heard him, they got furious.”',
      feedback: {
        correct: 'Well done. You used want + person + to and moved the when-clause correctly.',
        incorrect: 'Item 1: Abraham speaks to the people, so “them” becomes “you”. Item 2: the when-clause now comes first, so it needs its own subject.',
      },
    },
    { id: 'abraham-b1-language-5-connected-response', type: 'reflection', title: 'Build a Persuasion Scene', instructions: 'Write or say four connected B1 sentences about someone trying to change another person’s mind. Do not retell Chapter 5.', question: 'Can you connect a reason, an attempt, persistence, and a contrasting response in one short scene?', correctAnswer: null, explanation: 'A strong response can use because, try to, not give up or continue, want someone to..., and though/but to keep one coherent situation.', feedback: { correct: 'Keep all four sentences in one situation and make the contrast logically follow from the attempt.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — State a belief or decision and give a reason with because.', mode: 'Individual' }, { question: 'Sentence 2 — Show an attempt with try to + verb.', mode: 'Individual' }, { question: 'Sentence 3 — Show persistence or a desired change with did not give up / wanted ... to ....', mode: 'Individual' }, { question: 'Sentence 4 — Add a contrasting response with but or though.', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-b1-language-6-plan-intention',
      type: 'multiple-choice',
      title: 'A Plan Seen from the Past',
      instructions: 'Read the sentence from Chapter 6. Then choose the best meaning.',
      question: '“He made a plan to destroy all their idols, but he did not tell anyone what he was going to do.” What does “what he was going to do” mean here?',
      options: [
        'the action he had planned for later; at that moment it had not happened yet',
        'the action he was doing at that exact moment',
        'an action he did many times before',
        'an action he had already finished',
      ],
      correctAnswer: 0,
      explanation: '“Was/were going to + verb” is the future seen from a moment in the past. When Abraham made his plan, breaking the idols was still in the future, so the chapter says “what he was going to do”. Together with “decided to” and “made a plan to”, it shows that his action was deliberate, not an accident.',
      feedback: {
        correct: 'Correct. “Was going to” shows a planned action that was still in the future at that time.',
        incorrect: 'Think about the order of events in Chapter 6: first he made the plan, then he waited, and only later did he break the idols.',
      },
    },
    {
      id: 'abraham-b1-language-6-habit-event-condition',
      type: 'word-bank',
      title: 'Habit, Result and Timing',
      instructions: 'Complete the lines from Chapter 6 with words from the bank. Two words are not needed.',
      question: 'Which words show a habit, a result and a time limit?',
      fillBlanksText: 'There was a big celebration soon. All the people [blank] went outside of town, [blank] he got an axe and waited [blank] the whole town was empty.',
      wordBank: ['usually', 'so', 'until', 'because', 'by'],
      correctAnswer: ['usually', 'so', 'until'],
      explanation: '“Usually” describes what normally happened at celebrations (a habit). “So” introduces the result: the town would be empty, so Abraham got an axe. “Until” marks the point he had to wait for before he could act. “Because” would give a reason, not a result, and “by” cannot be followed by a clause here.',
      feedback: {
        correct: 'Correct. You showed the habit, the result and the time limit.',
        incorrect: 'Ask: what normally happened, what did Abraham do as a result, and how long did he wait? Then check the first paragraph of Chapter 6.',
      },
    },
    {
      id: 'abraham-b1-language-6-action-development',
      type: 'sentence-building',
      title: 'Build the Final Sentence',
      instructions: 'Tap the pieces to rebuild this sentence from Chapter 6.',
      question: 'Where does the word that describes the statue’s final state go?',
      sentenceChunks: [
        'He left',
        'the largest statue in the temple',
        'untouched,',
        'hung the axe around its neck,',
        'and then hurried back home.',
      ],
      correctAnswer: null,
      explanation: 'Leave + object + adjective/participle shows the state something stays in after an action: “He left the largest statue in the temple untouched.” The describing word comes after the object. Before this, the chapter uses “began to break the idols, one after another, until they were all broken” to show the start, the repetition and the end of the action.',
      feedback: {
        correct: 'Well done. The object comes first, then the word that describes its final state.',
        incorrect: 'Start with “He left”, then say what he left, then how it stayed. Check the last paragraph of Chapter 6.',
      },
    },
    { id: 'abraham-b1-language-6-connected-production', type: 'reflection', title: 'Describe a Deliberate Plan', instructions: 'Write or say four connected B1 sentences about a person carrying out a careful plan in a new situation. Do not retell Chapter 6.', question: 'Can you connect intention, opportunity, timing, and a final resulting state?', correctAnswer: null, explanation: 'A strong response can combine decided/planned to, usually or a background situation, so, until, began to, and left + object + adjective/complement.', feedback: { correct: 'Keep the four sentences in one coherent situation and make each action logically lead to the next.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — State a decision or plan using decided to or planned to.', mode: 'Individual' }, { question: 'Sentence 2 — Describe the situation or opportunity, and connect the response with so.', mode: 'Individual' }, { question: 'Sentence 3 — Use until to show when the main action could begin or end.', mode: 'Individual' }, { question: 'Sentence 4 — Show the final state using left + object + adjective/complement, or another clear result expression.', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-b1-language-7-reporting-reaction',
      type: 'drag-drop',
      title: 'Two Kinds of Questions',
      instructions: 'Sort the parts of Chapter 7. Is it a question in the speaker’s exact words, or a question idea inside a longer sentence?',
      question: 'How is the word order different when a question sits inside a longer sentence?',
      dragDropGroups: [
        {
          group: 'The speaker’s exact question',
          items: [
            'They asked him, “Did you harm our gods in this way?”',
            '“Then why do you worship things that can’t speak …?”',
            '“Have you gone mad?”',
          ],
        },
        {
          group: 'A question idea inside a longer sentence',
          items: [
            'They wondered and tried to find out who did this.',
            'ask that statue if it can speak!',
          ],
        },
      ],
      correctAnswer: {
        'The speaker’s exact question': [
          'They asked him, “Did you harm our gods in this way?”',
          '“Then why do you worship things that can’t speak …?”',
          '“Have you gone mad?”',
        ],
        'A question idea inside a longer sentence': [
          'They wondered and tried to find out who did this.',
          'ask that statue if it can speak!',
        ],
      },
      explanation: 'A direct question uses question word order (Did you harm …? Have you gone …? Why do you …?) and a question mark. Inside a longer sentence, after words like find out or ask … if, the question idea has no question mark and uses statement word order: ask that statue if it can speak (not “if can it speak”). In “find out who did this”, who is the subject and did is the main verb, so the order is the same as a statement.',
      feedback: {
        correct: 'Correct. You noticed that question ideas inside a sentence keep statement word order.',
        incorrect: 'Look for quotation marks, a question mark and an auxiliary before the subject (did you, have you, do you). Those are direct questions.',
      },
    },
    {
      id: 'abraham-b1-language-7-embedded-questions',
      type: 'error-correction',
      title: 'Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct the verb forms after heard and shocked, and the word order after what?',
      errorItems: [
        {
          sentence: '“We heard a young man to speak against our gods,” they remembered.',
          error: 'to speak',
          options: ['speaking', 'spoke', 'to speaking'],
          answer: 0,
        },
        {
          sentence: 'The people were displeased with what did they hear and said, “You are well aware that these idols don’t speak!”',
          error: 'what did they hear',
          options: ['what they heard', 'what they did hear', 'what heard they'],
          answer: 0,
        },
        {
          sentence: '… they were shocked to seeing all the statues were broken into many pieces.',
          error: 'to seeing',
          options: ['to see', 'for seeing', 'seeing to'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After hear + person, use -ing (or the base verb), never to + verb: “We heard a young man speaking against our gods.” The -ing form shows the action was in progress. After what inside a longer sentence, use statement word order and no did: “what they heard”. After adjectives of feeling such as shocked, use to + base verb to say what caused the feeling: “shocked to see”.',
      feedback: {
        correct: 'Well done. You corrected the verb patterns and the word order after “what”.',
        incorrect: 'Use -ing after “heard a young man”, statement word order after “what”, and to + base verb after “shocked”. Compare with Chapter 7.',
      },
    },
    {
      id: 'abraham-b1-language-7-cause-condition-contrast',
      type: 'choose-form',
      title: 'Reason, Result and Consequence',
      instructions: 'Choose the correct word to complete each sentence from Chapter 7.',
      question: 'How does the chapter explain why the people felt ashamed but still refused to accept the truth?',
      formChoices: [
        {
          sentence: 'They looked at each other in shame [choice] their thoughts and feelings told them that Abraham (pbuh) was right.',
          options: ['because', 'so', 'although'],
          answer: 0,
        },
        {
          sentence: 'But they were so arrogant [choice] they couldn’t accept the truth and admit they were wrong.',
          options: ['that', 'as', 'than'],
          answer: 0,
        },
        {
          sentence: 'If they accepted that Abraham (pbuh) was right, then it [choice] their forefathers were wrong, as well.',
          options: ['meant', 'will mean', 'was meaning'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Because” gives the reason for their shame. “So + adjective + that” shows a very strong quality and its result: they were so arrogant that they couldn’t accept the truth. “If … then …” shows the consequence they were afraid of; the story is in the past, so the result verb is also past (meant).',
      feedback: {
        correct: 'Correct. You linked the reason, the strong result and the consequence.',
        incorrect: 'Read the last paragraph of Chapter 7. Ask which word gives a reason, which word completes “so arrogant …”, and which tense fits a story told in the past.',
      },
    },
    { id: 'abraham-b1-language-7-connected-production', type: 'reflection', title: 'Report a Disagreement Clearly', instructions: 'Write or say four connected B1 sentences about a disagreement in a new situation. Do not retell Chapter 7.', question: 'Can you report what people heard or discovered, include an embedded question, and explain a contrast or consequence?', correctAnswer: null, explanation: 'A strong response can combine heard/saw/remembered, find out who/what/why, because or but, and an if...then consequence.', feedback: { correct: 'Keep the four sentences connected so the information, reaction, and consequence form one coherent situation.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Report something someone heard, saw, or remembered.', mode: 'Individual' }, { question: 'Sentence 2 — Add an embedded question such as find out who/what/why...', mode: 'Individual' }, { question: 'Sentence 3 — Explain a reaction using because, but, or so...that.', mode: 'Individual' }, { question: 'Sentence 4 — Add an if...then consequence or a clear final result.', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-b1-language-8-degree-result',
      type: 'drag-drop',
      title: 'Who Did the Action?',
      instructions: 'Sort the parts of Chapter 8. Does the sentence tell us who did the action, or not?',
      question: 'Why does the chapter sometimes not say who did an action?',
      dragDropGroups: [
        {
          group: 'We are not told who did the action',
          items: [
            'Firewood was collected for the fire for days.',
            'Prophet Abraham’s (pbuh) hands and feet were tied',
            'Abraham (pbuh) was thrown straight into huge flames.',
          ],
        },
        {
          group: 'The subject does the action',
          items: [
            'Abraham (pbuh) stayed calm',
            'Angel Gabriel came to him',
            'It only burnt the ropes on his hands and feet.',
          ],
        },
      ],
      correctAnswer: {
        'We are not told who did the action': [
          'Firewood was collected for the fire for days.',
          'Prophet Abraham’s (pbuh) hands and feet were tied',
          'Abraham (pbuh) was thrown straight into huge flames.',
        ],
        'The subject does the action': [
          'Abraham (pbuh) stayed calm',
          'Angel Gabriel came to him',
          'It only burnt the ropes on his hands and feet.',
        ],
      },
      explanation: 'The passive (was/were + past participle: was collected, were tied, was thrown) puts the focus on what happened to Abraham or the firewood. The people who did these actions are not important here, so the chapter does not name them. In active sentences, the subject does the action: “It only burnt the ropes” – the fire did the burning.',
      feedback: {
        correct: 'Correct. You noticed that the passive focuses on what happened, not on who did it.',
        incorrect: 'Look for was/were + past participle. Then ask: can I find the person who did the action in the sentence?',
      },
    },
    {
      id: 'abraham-b1-language-8-future-viewpoint',
      type: 'word-bank',
      title: 'Danger and Calm',
      instructions: 'Complete the lines from Chapter 8 with words from the bank. Two words are not needed.',
      question: 'Which words show how extreme the fire was and how Abraham reacted?',
      fillBlanksText: 'The fire was [blank] big [blank] people couldn’t approach it. [blank], Abraham (pbuh) stayed calm [blank] he trusted Allah.',
      wordBank: ['so', 'that', 'However', 'because', 'such', 'Although'],
      correctAnswer: ['so', 'that', 'However', 'because'],
      explanation: '“So + adjective + that” shows a very strong degree and its result: the fire was so big that people couldn’t approach it. (“Such” needs a noun: such a big fire that …). “However,” at the start of a sentence shows a contrast with the sentence before. “Because” gives the reason for Abraham’s calm. “Although” must join two clauses in one sentence, so it cannot stand alone with a comma.',
      feedback: {
        correct: 'Correct. You showed the degree, the result, the contrast and the reason.',
        incorrect: 'Check the second paragraph of Chapter 8. Which word goes with an adjective (big), and which contrast word can start a sentence followed by a comma?',
      },
    },
    {
      id: 'abraham-b1-language-8-passive-purpose-result',
      type: 'choose-form',
      title: 'Looking Forward from the Past',
      instructions: 'Choose the correct form to complete each sentence from Chapter 8.',
      question: 'How does the chapter talk about the future when the story is told in the past?',
      formChoices: [
        {
          sentence: 'He knew that Allah would never leave him alone, and that whatever [choice], it would be for his own good.',
          options: ['happened', 'happens', 'will happen'],
          answer: 0,
        },
        {
          sentence: 'People from many different towns came to see what [choice] happen.',
          options: ['would', 'will', 'did'],
          answer: 0,
        },
        {
          sentence: 'A catapult was a kind of machine which was used [choice] throw Abraham (pbuh) into the fire.',
          options: ['to', 'for', 'by'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'When a story is told in the past, “would” shows the future from that past moment: people came to see what would happen. In the same way, Abraham knew that “whatever happened, it would be for his own good” – both verbs move back from “whatever happens, it will be”. “Was used to + base verb” describes the purpose of an object (it was used to throw). It is different from “used to” for past habits.',
      feedback: {
        correct: 'Correct. You kept the future-in-the-past forms and the purpose pattern.',
        incorrect: 'The story is in the past, so the future is expressed with would and a past verb. Read the second, third and fourth paragraphs of Chapter 8 again.',
      },
    },
    { id: 'abraham-b1-language-8-connected-production', type: 'reflection', title: 'Describe Pressure and an Unexpected Outcome', instructions: 'Write or say four connected B1 sentences about a new situation involving pressure and an unexpected result. Do not retell Chapter 8.', question: 'Can you connect degree-result, contrast/cause, a past viewpoint, and a final change?', correctAnswer: null, explanation: 'A strong response can use so...that, however/because, knew/thought that ... would, and turned out to be/became.', feedback: { correct: 'Keep the four sentences connected as one short narrative.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Describe an extreme situation using so...that.', mode: 'Individual' }, { question: 'Sentence 2 — Add a contrasting response and explain it with however and/or because.', mode: 'Individual' }, { question: 'Sentence 3 — Report what someone expected using knew/thought that ... would.', mode: 'Individual' }, { question: 'Sentence 4 — End with an unexpected result using turned out to be, became, or turned into.', mode: 'Pair' }] },
  ],
};
