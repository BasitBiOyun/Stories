import type { Exercise } from '../../../../types';

/** Moses B1 Chapters 3–8 Language Focus, consolidated without changing activity content. */

/** Moses B1 Chapter 3 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-b1-language-3-guidance-sequence',
      type: 'matching',
      title: 'Turning Guidance into a Sequence of Actions',
      instructions: 'Match each expression with the job it does in the chapter.',
      question: 'How does the chapter move from guidance to action and then to a new situation?',
      matchingPairs: [
        { left: 'Put your baby in the basket.', right: 'gives a direct instruction' },
        { left: 'Take the basket to the River Nile.', right: 'adds the next step in the instruction sequence' },
        { left: 'The basket was carried away by the waters.', right: 'focuses on what happened to the basket rather than who caused it' },
        { left: 'Soon, the waves brought the basket ashore...', right: 'moves the narrative forward to the next result' },
      ],
      correctAnswer: {
        'Put your baby in the basket.': 'gives a direct instruction',
        'Take the basket to the River Nile.': 'adds the next step in the instruction sequence',
        'The basket was carried away by the waters.': 'focuses on what happened to the basket rather than who caused it',
        'Soon, the waves brought the basket ashore...': 'moves the narrative forward to the next result',
      },
      explanation: 'The chapter combines direct imperatives, passive narration, and sequence markers to turn guidance into a clear chain of actions and results.',
      feedback: {
        correct: 'Correct. You identified instruction, passive focus, and narrative progression.',
        incorrect: 'Ask whether each form gives an instruction, shifts focus to the affected object, or advances the sequence.',
      },
    },
    {
      id: 'moses-b1-language-3-trust-contrast',
      type: 'matching',
      title: 'Expressing Worry, Trust and Contrast',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the narrator show that worry and trust exist at the same time?',
      matchingPairs: [
        { left: 'Moses’s mother was very worried', right: 'states her emotional condition' },
        { left: 'She was so sad, but she knew that Allah was kinder...', right: 'contrasts strong sadness with continuing trust' },
        { left: 'Allah was their Lord and also the Lord of the Nile.', right: 'adds a second parallel idea with “also”' },
        { left: 'while carrying the baby', right: 'places one action inside another ongoing action' },
      ],
      correctAnswer: {
        'Moses’s mother was very worried': 'states her emotional condition',
        'She was so sad, but she knew that Allah was kinder...': 'contrasts strong sadness with continuing trust',
        'Allah was their Lord and also the Lord of the Nile.': 'adds a second parallel idea with “also”',
        'while carrying the baby': 'places one action inside another ongoing action',
      },
      explanation: 'The chapter does not present emotion as a single idea. “But” keeps trust active beside sadness, “also” adds parallel information, and “while” links simultaneous actions.',
      feedback: {
        correct: 'Good. You distinguished emotion, contrast, addition, and simultaneous action.',
        incorrect: 'Look for the connector and ask what relationship it creates between the ideas.',
      },
    },
    {
      id: 'moses-b1-language-3-description-and-decision',
      type: 'matching',
      title: 'Describing Character and Making a Decision',
      instructions: 'Match each structure with its communicative function.',
      question: 'How does the chapter describe Queen Asiye and then show her decision?',
      matchingPairs: [
        { left: 'The queen, who was different from her husband, was good...', right: 'adds extra descriptive information about the queen' },
        { left: 'When Queen Asiye saw the baby, she felt a strong love for him.', right: 'links a new feeling to the moment that caused it' },
        { left: 'While she was looking at the baby...', right: 'sets the background action for what she says next' },
        { left: 'I will take him to the palace and look after him.', right: 'expresses a decision about a future action' },
      ],
      correctAnswer: {
        'The queen, who was different from her husband, was good...': 'adds extra descriptive information about the queen',
        'When Queen Asiye saw the baby, she felt a strong love for him.': 'links a new feeling to the moment that caused it',
        'While she was looking at the baby...': 'sets the background action for what she says next',
        'I will take him to the palace and look after him.': 'expresses a decision about a future action',
      },
      explanation: 'The chapter combines added description, time clauses, background action, and “will” for a decision. Together they make the scene more connected and purposeful.',
      feedback: {
        correct: 'Correct. You identified description, timing, background, and future decision.',
        incorrect: 'Ask whether the structure describes a person, locates an event in time, sets background, or states a decision.',
      },
    },
    {
      id: 'moses-b1-language-3-connected-production',
      type: 'reflection',
      title: 'Describe a Difficult Decision',
      instructions: 'Write or say five connected B1 sentences about a person who receives guidance, feels worried, and then makes a decision.',
      question: 'Can you combine instruction, sequence, contrast, background action, and a future decision in one short account?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include a direct imperative, a passive sentence, “but”, “while”, “when”, and “will” for a decision.',
      feedback: {
        correct: 'Keep the paragraph connected so each sentence develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give one direct instruction.', mode: 'Individual' },
        { question: 'Sentence 2 — Show what happened next, using a passive form if natural.', mode: 'Individual' },
        { question: 'Sentence 3 — Express worry or sadness, then contrast it with trust or confidence using “but”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add background with “while” or timing with “when”.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a clear decision using “will”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 4 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-b1-language-4-instruction-prediction',
      type: 'matching',
      title: 'From Instruction to Prediction',
      instructions: 'Match each expression with the function it performs in the scene.',
      question: 'How does the chapter move from a direct instruction to a confident prediction?',
      matchingPairs: [
        { left: 'Find a nurse for the baby.', right: 'gives a direct instruction' },
        { left: 'I know a good woman.', right: 'states knowledge that supports the next suggestion' },
        { left: 'She lives nearby.', right: 'adds practical information about the woman' },
        { left: 'She will be a good nurse for the baby.', right: 'makes a confident prediction about a future role' },
      ],
      correctAnswer: {
        'Find a nurse for the baby.': 'gives a direct instruction',
        'I know a good woman.': 'states knowledge that supports the next suggestion',
        'She lives nearby.': 'adds practical information about the woman',
        'She will be a good nurse for the baby.': 'makes a confident prediction about a future role',
      },
      explanation: 'The scene combines an imperative, present knowledge, supporting detail, and “will” to move quickly from a problem to a proposed solution.',
      feedback: {
        correct: 'Correct. You identified instruction, supporting information, and future prediction.',
        incorrect: 'Ask whether the expression commands, gives evidence, or predicts a future role.',
      },
    },
    {
      id: 'moses-b1-language-4-purpose-result-reason',
      type: 'matching',
      title: 'Showing Purpose, Result and Reason',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How are actions and explanations connected in the chapter?',
      matchingPairs: [
        { left: 'she brought her mother to be Moses’s nurse', right: 'shows the purpose of bringing her mother' },
        { left: 'Allah sent Moses back to his mother', right: 'presents the result of the events that came before' },
        { left: 'People always remember her because of her goodness and courage.', right: 'gives the reason for remembering Queen Asiye' },
        { left: 'because he was originally not from a family of the palace', right: 'explains why Moses felt close to the Children of Israel' },
      ],
      correctAnswer: {
        'she brought her mother to be Moses’s nurse': 'shows the purpose of bringing her mother',
        'Allah sent Moses back to his mother': 'presents the result of the events that came before',
        'People always remember her because of her goodness and courage.': 'gives the reason for remembering Queen Asiye',
        'because he was originally not from a family of the palace': 'explains why Moses felt close to the Children of Israel',
      },
      explanation: '“To be” expresses purpose, while “because/because of” explains reasons. The narrative also uses the return to his mother as the result of the preceding chain of actions.',
      feedback: {
        correct: 'Good. You distinguished purpose, result, and reason.',
        incorrect: 'Look for the language that answers “for what purpose?”, “what happened as a result?”, or “why?”.',
      },
    },
    {
      id: 'moses-b1-language-4-growth-identity',
      type: 'matching',
      title: 'Describing Growth and Identity',
      instructions: 'Match each structure with what it tells us about Moses over time.',
      question: 'How does the language show development from childhood to young adulthood?',
      matchingPairs: [
        { left: 'Moses grew up safely in the palace.', right: 'describes a gradual development over time' },
        { left: 'Years passed', right: 'moves the narrative forward across a long period' },
        { left: 'Moses became a strong young man.', right: 'shows a change into a new state or stage of life' },
        { left: 'He was always willing to help the weak people.', right: 'describes a continuing personal tendency' },
      ],
      correctAnswer: {
        'Moses grew up safely in the palace.': 'describes a gradual development over time',
        'Years passed': 'moves the narrative forward across a long period',
        'Moses became a strong young man.': 'shows a change into a new state or stage of life',
        'He was always willing to help the weak people.': 'describes a continuing personal tendency',
      },
      explanation: 'The chapter combines time movement, “grow up”, “become”, and repeated-state language with “always” to describe development and character.',
      feedback: {
        correct: 'Correct. You identified time progression, change of state, and continuing tendency.',
        incorrect: 'Ask whether each expression advances time, shows change, or describes a repeated characteristic.',
      },
    },
    {
      id: 'moses-b1-language-4-connected-production',
      type: 'reflection',
      title: 'Explain How a Person Grows into a Role',
      instructions: 'Write or say five connected B1 sentences about a person who receives help, grows over time, and develops a clear sense of responsibility or identity.',
      question: 'Can you connect instruction, purpose, reason, change over time, and a continuing personal quality?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include an imperative, “to + verb” for purpose, “because/because of” for reason, “became” for change, and “always” for a continuing tendency.',
      feedback: {
        correct: 'Keep the account connected so each sentence develops the same person and situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give one direct instruction or piece of guidance.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain an action and its purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one reason with “because” or “because of”.', mode: 'Individual' },
        { question: 'Sentence 4 — Show a later change using “became” or another natural change expression.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a continuing quality using “always” or another frequency expression.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 5 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'moses-b1-language-5-background-interruption',
      type: 'matching',
      title: 'Background and Sudden Action',
      instructions: 'Match each expression with the job it does in the narrative.',
      question: 'How does the chapter move from an ongoing scene to sudden action?',
      matchingPairs: [
        { left: 'while Moses was walking in the bazaar', right: 'sets an action already in progress as background' },
        { left: 'he saw two men fighting', right: 'introduces the event Moses notices inside that background' },
        { left: 'Suddenly, a poor and weak man ... called out', right: 'marks an unexpected new action' },
        { left: 'The next day, Moses was again in the bazaar', right: 'moves the story to a later repeated setting' },
      ],
      correctAnswer: {
        'while Moses was walking in the bazaar': 'sets an action already in progress as background',
        'he saw two men fighting': 'introduces the event Moses notices inside that background',
        'Suddenly, a poor and weak man ... called out': 'marks an unexpected new action',
        'The next day, Moses was again in the bazaar': 'moves the story to a later repeated setting',
      },
      explanation: 'The chapter uses “while + past continuous” for background, simple past for the event that enters the scene, “suddenly” for an abrupt development, and “the next day” to shift the timeline forward.',
      feedback: {
        correct: 'Correct. You identified background, interruption, sudden development, and later time movement.',
        incorrect: 'Ask whether the phrase describes an ongoing scene, a new event, a sudden change, or a later time frame.',
      },
    },
    {
      id: 'moses-b1-language-5-description-inference',
      type: 'matching',
      title: 'From Description to Inference',
      instructions: 'Match each structure with the meaning it adds.',
      question: 'How does the chapter identify people and show Moses reaching a judgment?',
      matchingPairs: [
        { left: 'One of them was an Egyptian, while the other was from the Children of Israel.', right: 'contrasts two people in the same scene' },
        { left: 'the same man ... who Moses helped the day before', right: 'identifies a person by adding earlier information about him' },
        { left: 'Moses understood that the Israelite was a quarrelsome man', right: 'shows a conclusion based on repeated behavior' },
        { left: 'not a peaceable man', right: 'sharpens the judgment through negative contrast' },
      ],
      correctAnswer: {
        'One of them was an Egyptian, while the other was from the Children of Israel.': 'contrasts two people in the same scene',
        'the same man ... who Moses helped the day before': 'identifies a person by adding earlier information about him',
        'Moses understood that the Israelite was a quarrelsome man': 'shows a conclusion based on repeated behavior',
        'not a peaceable man': 'sharpens the judgment through negative contrast',
      },
      explanation: '“While” can contrast two people, a relative clause with “who” adds identifying information, and “understood that” introduces an inference rather than a directly observed fact.',
      feedback: {
        correct: 'Good. You separated contrast, added description, and inference.',
        incorrect: 'Look for which phrase compares, which one identifies, and which one shows a conclusion in Moses’s mind.',
      },
    },
    {
      id: 'moses-b1-language-5-voice-intention',
      type: 'matching',
      title: 'Direct Voice, Intention and Challenge',
      instructions: 'Match each line of direct speech with its communicative function.',
      question: 'How do short direct quotations change the force of the scene?',
      matchingPairs: [
        { left: 'Help me!', right: 'makes an urgent direct request' },
        { left: 'Forgive me!', right: 'makes a direct appeal in prayer' },
        { left: 'I have wronged myself.', right: 'expresses a present evaluation of an earlier action' },
        { left: 'Are you going to kill me too?', right: 'uses a future-oriented question as an accusation or challenge' },
      ],
      correctAnswer: {
        'Help me!': 'makes an urgent direct request',
        'Forgive me!': 'makes a direct appeal in prayer',
        'I have wronged myself.': 'expresses a present evaluation of an earlier action',
        'Are you going to kill me too?': 'uses a future-oriented question as an accusation or challenge',
      },
      explanation: 'The chapter alternates narration with direct speech. Imperatives create urgency, present perfect links a past action to present self-evaluation, and “be going to” can frame an expected or feared next action in a confrontational question.',
      feedback: {
        correct: 'Correct. You identified request, appeal, self-evaluation, and challenge.',
        incorrect: 'Focus on what the speaker is trying to do with each sentence, not only on its grammar form.',
      },
    },
    {
      id: 'moses-b1-language-5-connected-production',
      type: 'reflection',
      title: 'Tell a Short Incident Clearly',
      instructions: 'Write or say five connected B1 sentences about a tense public situation. Do not retell the chapter.',
      question: 'Can you combine background, sudden action, identification, inference, and a future-oriented question in one coherent mini-narrative?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include “while + past continuous”, “suddenly”, a relative clause with “who”, “understood/realized that”, and a question with “going to”.',
      feedback: {
        correct: 'Keep the five sentences connected and make each one develop the same event.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the background with “while + past continuous”.', mode: 'Individual' },
        { question: 'Sentence 2 — Introduce an unexpected event with “suddenly”.', mode: 'Individual' },
        { question: 'Sentence 3 — Identify one person with a short “who” clause.', mode: 'Individual' },
        { question: 'Sentence 4 — Show what someone understood or realized from the situation.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a natural future-oriented question using “going to”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 6 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'moses-b1-language-6-warning-action',
      type: 'matching',
      title: 'Warning, Expected Action and Command',
      instructions: 'Match each expression with the communicative job it does.',
      question: 'How does the warning move from a present danger to an urgent response?',
      matchingPairs: [
        { left: 'The Pharaoh’s soldiers are looking for you.', right: 'describes a danger already in progress' },
        { left: 'Now they are going to catch you.', right: 'presents an expected next action based on the current situation' },
        { left: 'Run away from the city.', right: 'gives an urgent direct command' },
        { left: 'Moses knew that the punishment ... was death.', right: 'shows the knowledge that explains why immediate action is necessary' },
      ],
      correctAnswer: {
        'The Pharaoh’s soldiers are looking for you.': 'describes a danger already in progress',
        'Now they are going to catch you.': 'presents an expected next action based on the current situation',
        'Run away from the city.': 'gives an urgent direct command',
        'Moses knew that the punishment ... was death.': 'shows the knowledge that explains why immediate action is necessary',
      },
      explanation: 'The chapter combines present continuous for an action already happening, “be going to” for an expected next development, an imperative for urgent advice, and “knew that” to state the knowledge behind the response.',
      feedback: {
        correct: 'Correct. You followed the warning from present danger to expected consequence, command, and reason.',
        incorrect: 'Ask whether each line describes what is happening now, what is expected next, what someone is told to do, or what explains the response.',
      },
    },
    {
      id: 'moses-b1-language-6-sequence-guidance',
      type: 'matching',
      title: 'Cause, Movement and Guidance',
      instructions: 'Match the language with the relationship it creates in the narrative.',
      question: 'How does the chapter connect Moses’s knowledge, movement and continuing guidance?',
      matchingPairs: [
        { left: 'Moses knew that ...', right: 'introduces the reason behind his decision' },
        { left: 'Moses escaped ... He left Egypt and travelled ...', right: 'uses a sequence of completed past actions to move the story forward' },
        { left: 'He was not alone as Allah guided him.', right: 'adds reassurance and explains the continuing situation during the journey' },
        { left: 'After many days, he reached ...', right: 'marks a later point after a long period of travel' },
      ],
      correctAnswer: {
        'Moses knew that ...': 'introduces the reason behind his decision',
        'Moses escaped ... He left Egypt and travelled ...': 'uses a sequence of completed past actions to move the story forward',
        'He was not alone as Allah guided him.': 'adds reassurance and explains the continuing situation during the journey',
        'After many days, he reached ...': 'marks a later point after a long period of travel',
      },
      explanation: 'The narrative moves through a reason, a chain of completed actions, an explanatory “as” clause, and a time marker that opens the next stage of the journey.',
      feedback: {
        correct: 'Good. You identified reason, action sequence, explanation and time movement.',
        incorrect: 'Look for what explains the decision, what advances the journey, what gives background reassurance, and what marks a later stage.',
      },
    },
    {
      id: 'moses-b1-language-6-well-scene',
      type: 'matching',
      title: 'Build the Well Scene',
      instructions: 'Match each structure with the role it plays in describing the new scene.',
      question: 'How does the text move from Moses’s condition to observation and then to questions?',
      matchingPairs: [
        { left: 'Moses was tired and thirsty.', right: 'states his physical condition' },
        { left: 'he was looking for water', right: 'shows an activity already in progress' },
        { left: 'Soon, he found a well where many men gathered.', right: 'introduces a new event and adds information about the place' },
        { left: 'shepherds who were watering their sheep and cattle', right: 'identifies the men through an added relative-clause description' },
        { left: 'Why are you sitting ...? Why aren’t you taking ...?', right: 'uses present continuous questions to ask about the situation he can see' },
      ],
      correctAnswer: {
        'Moses was tired and thirsty.': 'states his physical condition',
        'he was looking for water': 'shows an activity already in progress',
        'Soon, he found a well where many men gathered.': 'introduces a new event and adds information about the place',
        'shepherds who were watering their sheep and cattle': 'identifies the men through an added relative-clause description',
        'Why are you sitting ...? Why aren’t you taking ...?': 'uses present continuous questions to ask about the situation he can see',
      },
      explanation: 'The scene combines a past state, an ongoing past activity, a new simple-past discovery, relative clauses with “where/who”, and present continuous questions about visible actions.',
      feedback: {
        correct: 'Correct. You traced how condition, activity, description and questioning work together.',
        incorrect: 'Separate physical state, ongoing search, new discovery, added description, and questions about what is happening now.',
      },
    },
    {
      id: 'moses-b1-language-6-connected-production',
      type: 'reflection',
      title: 'Write a Warning-to-New-Scene Mini-Narrative',
      instructions: 'Write or say five connected B1 sentences about someone who must leave a place quickly and arrives somewhere unfamiliar. Do not retell the chapter.',
      question: 'Can you connect warning, expected consequence, urgent advice, time movement and a new-scene question naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include present continuous for a current threat, “be going to” for an expected consequence, an imperative, “after + time”, and a “Why are you ...?” question about a visible situation.',
      feedback: {
        correct: 'Keep the five sentences connected and make the final scene follow naturally from the warning.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a danger already happening with present continuous.', mode: 'Individual' },
        { question: 'Sentence 2 — State an expected next consequence with “be going to”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one urgent command or piece of advice.', mode: 'Individual' },
        { question: 'Sentence 4 — Move the narrative forward with “After ...” and describe arrival in a new place.', mode: 'Pair' },
        { question: 'Sentence 5 — Ask a natural “Why are you ...?” question about something visible there.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 7 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'moses-b1-language-7-obligation-patience',
      type: 'matching',
      title: 'Need, Obligation and Patience',
      instructions: 'Match each expression with the function it performs in the sisters’ explanation.',
      question: 'How does the chapter explain why the sisters must manage the situation themselves?',
      matchingPairs: [
        { left: 'He cannot come with us.', right: 'states an inability that creates a practical problem' },
        { left: 'There are no young men in our house to help us.', right: 'adds another reason why support is unavailable' },
        { left: 'So, we have to take the sheep to the water ourselves.', right: 'expresses obligation as the result of the situation' },
        { left: 'We have to wait our turn.', right: 'expresses a necessary action they cannot avoid' },
        { left: 'until the other sheepmen go away', right: 'sets the time limit for the waiting' },
      ],
      correctAnswer: {
        'He cannot come with us.': 'states an inability that creates a practical problem',
        'There are no young men in our house to help us.': 'adds another reason why support is unavailable',
        'So, we have to take the sheep to the water ourselves.': 'expresses obligation as the result of the situation',
        'We have to wait our turn.': 'expresses a necessary action they cannot avoid',
        'until the other sheepmen go away': 'sets the time limit for the waiting',
      },
      explanation: 'The explanation moves from inability and lack of help to obligation with “have to”, while “until” marks how long the waiting must continue.',
      feedback: {
        correct: 'Correct. You followed the chain from limitation to obligation and waiting.',
        incorrect: 'Look for what creates the difficulty, what becomes necessary, and what marks the end of the waiting period.',
      },
    },
    {
      id: 'moses-b1-language-7-action-result',
      type: 'matching',
      title: 'From Understanding to Result',
      instructions: 'Match each sentence with the relationship it creates in the narrative.',
      question: 'How does the chapter move from recognizing a situation to a changed outcome?',
      matchingPairs: [
        { left: 'Moses understood that the two sisters needed help.', right: 'presents an interpretation of the situation before action' },
        { left: 'He took their sheep to the spring and made them drink water.', right: 'shows the action that follows from that understanding' },
        { left: 'The girls were very happy.', right: 'states an immediate result or reaction' },
        { left: 'They took their sheep and went home.', right: 'continues the completed action sequence after the problem is solved' },
      ],
      correctAnswer: {
        'Moses understood that the two sisters needed help.': 'presents an interpretation of the situation before action',
        'He took their sheep to the spring and made them drink water.': 'shows the action that follows from that understanding',
        'The girls were very happy.': 'states an immediate result or reaction',
        'They took their sheep and went home.': 'continues the completed action sequence after the problem is solved',
      },
      explanation: 'The narrative links understanding, action, reaction and further completed actions. This helps readers see how one decision changes the next part of the scene.',
      feedback: {
        correct: 'Good. You identified interpretation, action, result and continuation.',
        incorrect: 'Separate what Moses realizes, what he does, how the sisters react, and what happens next.',
      },
    },
    {
      id: 'moses-b1-language-7-early-return',
      type: 'matching',
      title: 'Expected Routine vs Changed Outcome',
      instructions: 'Match the language with the contrast it creates.',
      question: 'How does the text show that the sisters’ normal routine has changed?',
      matchingPairs: [
        { left: 'When the sisters came home early ...', right: 'introduces a result that happens sooner than expected' },
        { left: 'What happened?', right: 'shows surprise and asks for an explanation' },
        { left: 'You came home very early!', right: 'emphasizes the unusual timing' },
        { left: 'We did not have to wait ...', right: 'shows that a usual obligation was removed in this situation' },
        { left: 'that’s why he had to send the girls alone', right: 'connects Şuayb’s age with a resulting necessity' },
      ],
      correctAnswer: {
        'When the sisters came home early ...': 'introduces a result that happens sooner than expected',
        'What happened?': 'shows surprise and asks for an explanation',
        'You came home very early!': 'emphasizes the unusual timing',
        'We did not have to wait ...': 'shows that a usual obligation was removed in this situation',
        'that’s why he had to send the girls alone': 'connects Şuayb’s age with a resulting necessity',
      },
      explanation: 'The chapter contrasts a normal obligation with an exceptional day: “did not have to” shows that the usual waiting was unnecessary, while “that’s why” links a condition with a necessary result.',
      feedback: {
        correct: 'Correct. You identified unusual timing, removed obligation and cause-result language.',
        incorrect: 'Look for the normal routine, what changed on this day, and what explains the family situation.',
      },
    },
    {
      id: 'moses-b1-language-7-connected-production',
      type: 'reflection',
      title: 'Explain a Routine That Changes',
      instructions: 'Write or say five connected B1 sentences about people who usually have to do something difficult but receive unexpected help one day. Do not retell the chapter.',
      question: 'Can you connect limitation, obligation, waiting, help and a changed result naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include “cannot”, “have to”, “until”, a simple-past action that changes the situation, and “did not have to” for an obligation that disappears.',
      feedback: {
        correct: 'Keep the five sentences connected and make the changed result follow naturally from the help.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State one limitation or lack of support.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain what people therefore have to do.', mode: 'Individual' },
        { question: 'Sentence 3 — Add what they normally wait for using “until”.', mode: 'Individual' },
        { question: 'Sentence 4 — Describe one unexpected act of help in the simple past.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain what they did not have to do because the situation changed.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 8 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'moses-b1-language-8-reason-choice',
      type: 'matching',
      title: 'Reason, Need and Choice',
      instructions: 'Match each expression with the function it performs in the chapter.',
      question: 'How does the text connect Moses’s situation with the choices he makes in Midian?',
      matchingPairs: [
        { left: 'Şuayb offered Moses a job.', right: 'introduces an opportunity' },
        { left: 'He accepted the offer, because he was a stranger in Midian.', right: 'gives a reason for the decision with “because”' },
        { left: 'he urgently needed a job and a house', right: 'adds a practical need that supports the decision' },
        { left: 'while he was staying with them', right: 'shows one action continuing during the same period as another' },
      ],
      correctAnswer: {
        'Şuayb offered Moses a job.': 'introduces an opportunity',
        'He accepted the offer, because he was a stranger in Midian.': 'gives a reason for the decision with “because”',
        'he urgently needed a job and a house': 'adds a practical need that supports the decision',
        'while he was staying with them': 'shows one action continuing during the same period as another',
      },
      explanation: 'The passage connects an opportunity with Moses’s circumstances. “Because” explains his choice, while “while” places continuing actions inside the same period.',
      feedback: {
        correct: 'Correct. You identified opportunity, reason, need and simultaneous action.',
        incorrect: 'Separate what is offered, why Moses accepts it, what he needs, and what happens during his stay.',
      },
    },
    {
      id: 'moses-b1-language-8-duration-decision',
      type: 'matching',
      title: 'From a Long Period to a New Decision',
      instructions: 'Match each expression with the time or decision meaning it creates.',
      question: 'How does the chapter move from a settled period in Midian to a new stage?',
      matchingPairs: [
        { left: 'After living in Midian for about ten years ...', right: 'looks back over a completed period before the next event' },
        { left: 'Moses decided to go back to Egypt.', right: 'expresses a deliberate new decision' },
        { left: 'He took his family and started to travel towards Egypt.', right: 'shows the decision becoming action' },
        { left: 'They travelled a long time.', right: 'extends the journey across a period of time' },
      ],
      correctAnswer: {
        'After living in Midian for about ten years ...': 'looks back over a completed period before the next event',
        'Moses decided to go back to Egypt.': 'expresses a deliberate new decision',
        'He took his family and started to travel towards Egypt.': 'shows the decision becoming action',
        'They travelled a long time.': 'extends the journey across a period of time',
      },
      explanation: '“After + -ing” places the long Midian period before the next stage, “decided to” marks a choice, and “started to” shows the beginning of the action that follows.',
      feedback: {
        correct: 'Good. You followed the change from duration to decision and then action.',
        incorrect: 'Look for the phrase that closes the long Midian period, the decision phrase, and the verb that marks the start of the journey.',
      },
    },
    {
      id: 'moses-b1-language-8-background-purpose',
      type: 'matching',
      title: 'Background, Sudden Event and Purpose',
      instructions: 'Match the language with the narrative function it performs near the end of the chapter.',
      question: 'How does the text build the winter scene and explain Moses’s next action?',
      matchingPairs: [
        { left: 'It was getting dark and cold.', right: 'creates a developing background condition' },
        { left: 'They were crossing a valley between mountains.', right: 'shows an action already in progress in the background' },
        { left: 'Suddenly, Moses saw a fire on the hillside.', right: 'introduces a new event that interrupts the background scene' },
        { left: 'Let me go and take some burning sticks ...', right: 'expresses an immediate intention or proposal' },
        { left: 'to get warm', right: 'states the purpose of going to the fire' },
      ],
      correctAnswer: {
        'It was getting dark and cold.': 'creates a developing background condition',
        'They were crossing a valley between mountains.': 'shows an action already in progress in the background',
        'Suddenly, Moses saw a fire on the hillside.': 'introduces a new event that interrupts the background scene',
        'Let me go and take some burning sticks ...': 'expresses an immediate intention or proposal',
        'to get warm': 'states the purpose of going to the fire',
      },
      explanation: 'The text uses progressive forms for background, “suddenly” for a new event, “let me” for immediate intention, and “to + verb” to explain purpose.',
      feedback: {
        correct: 'Correct. You identified background, interruption, intention and purpose.',
        incorrect: 'Find what was already developing, what happened suddenly, what Moses proposed, and why he wanted to do it.',
      },
    },
    {
      id: 'moses-b1-language-8-connected-production',
      type: 'reflection',
      title: 'Explain a Change of Plan',
      instructions: 'Write or say five connected B1 sentences about someone who spends a long period in one place, decides to leave, and then changes action because of a sudden situation. Do not retell the chapter.',
      question: 'Can you connect duration, decision, background, a sudden event and purpose naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes “After living/working...”, “decided to...”, a past-progressive background sentence, “Suddenly...”, and “to + verb” for purpose.',
      feedback: {
        correct: 'Keep the five sentences connected so the sudden event naturally changes what the person does next.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a long period using “After + -ing” or another duration phrase.', mode: 'Individual' },
        { question: 'Sentence 2 — State a new decision using “decided to”.', mode: 'Individual' },
        { question: 'Sentence 3 — Build the background with a past-progressive form.', mode: 'Individual' },
        { question: 'Sentence 4 — Introduce an unexpected event with “Suddenly”.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain the next action and its purpose with “to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
