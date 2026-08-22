import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific Language Focus work.
 * Each chapter is read before authoring; activities practise language that is
 * genuinely visible and useful in that chapter instead of repeating comprehension.
 */
export const abrahamA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-a2-language-1-past-story',
      type: 'matching',
      title: 'Starting a Story in the Past',
      instructions: 'Match each Chapter 1 sentence chunk with the language job it does.',
      question: 'How does the chapter introduce Abraham and move his early story forward?',
      matchingPairs: [
        { left: 'a boy was born', right: 'introduces a birth in the past' },
        { left: 'His parents named him Abraham', right: 'tells what his parents did' },
        { left: 'When he grew up', right: 'moves the story to a later time' },
        { left: 'Allah made him His great Messenger', right: 'tells a finished change in his life' },
      ],
      correctAnswer: {
        'a boy was born': 'introduces a birth in the past',
        'His parents named him Abraham': 'tells what his parents did',
        'When he grew up': 'moves the story to a later time',
        'Allah made him His great Messenger': 'tells a finished change in his life',
      },
      explanation: 'Chapter 1 uses past forms to introduce Abraham and tell finished events. “Was born” introduces his birth, while “named”, “grew up” and “made” move the biography forward.',
      feedback: {
        correct: 'Good. You connected the past-story chunks with their functions.',
        incorrect: 'Reread the opening paragraph and ask what each chunk tells us about Abraham’s life story.',
      },
    },
    {
      id: 'abraham-a2-language-1-negative-past-ability',
      type: 'matching',
      title: 'What They Did Not Do — What Idols Could Not Do',
      instructions: 'Match each structure with the meaning it expresses in Chapter 1.',
      question: 'How does the chapter use “did not” and “could not” differently?',
      matchingPairs: [
        { left: 'did not know Allah', right: 'a negative fact about the people in the past' },
        { left: 'did not worship Him', right: 'a negative past action' },
        { left: 'could not move', right: 'lack of ability' },
        { left: 'could not hear or understand', right: 'lack of ability' },
      ],
      correctAnswer: {
        'did not know Allah': 'a negative fact about the people in the past',
        'did not worship Him': 'a negative past action',
        'could not move': 'lack of ability',
        'could not hear or understand': 'lack of ability',
      },
      explanation: 'Use “did not + base verb” for a negative past fact or action. Use “could not + base verb” to say that someone or something did not have the ability to do something.',
      feedback: {
        correct: 'Correct. You separated negative past actions from lack of ability.',
        incorrect: 'Look at the verb after “did not” and “could not”, then decide whether the sentence is about a past fact/action or ability.',
      },
    },
    {
      id: 'abraham-a2-language-1-look-like',
      type: 'matching',
      title: 'Describing What Something Looks Like',
      instructions: 'Match each “look like” pattern with the description it builds.',
      question: 'How can “look like” compare appearance without saying two things are the same?',
      matchingPairs: [
        { left: 'These objects looked like people', right: 'their appearance was similar to people' },
        { left: 'These objects looked like animals', right: 'their appearance was similar to animals' },
        { left: 'The stone object looks like a person', right: 'describes a similar appearance now' },
      ],
      correctAnswer: {
        'These objects looked like people': 'their appearance was similar to people',
        'These objects looked like animals': 'their appearance was similar to animals',
        'The stone object looks like a person': 'describes a similar appearance now',
      },
      explanation: '“Look like + noun” describes similar appearance. Chapter 1 uses the past form “looked like” because it is telling a past story.',
      feedback: {
        correct: 'Good. You identified how “look like” describes appearance.',
        incorrect: 'Notice the noun after “looked like” and ask whether the sentence describes identity or only similar appearance.',
      },
    },
    {
      id: 'abraham-a2-language-1-explain-contrast',
      type: 'reflection',
      title: 'Say It: Belief and Observation',
      instructions: 'Write or say three or four short A2 sentences. Use at least two patterns from this Language Focus.',
      question: 'Can you contrast what the people believed with what Abraham observed?',
      correctAnswer: null,
      explanation: 'A strong response can use past-story verbs, “did not”, “could not” and “looked like” to contrast the people’s belief with Abraham’s observation.',
      feedback: {
        correct: 'Use accurate Chapter 1 language to make the contrast clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Begin with the people: “People believed ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Add a negative past fact: “They did not ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Describe the objects: “They looked like ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Explain the lack of ability: “But they could not ...”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'abraham-a2-language-2-past-habits',
      type: 'matching',
      title: 'Past Habits and Story Moments',
      instructions: 'Match each Chapter 2 time pattern with the job it does.',
      question: 'How does the chapter separate Abraham’s repeated childhood habits from single events?',
      matchingPairs: [
        { left: 'used to watch his father making idols', right: 'describes a repeated habit in Abraham’s childhood' },
        { left: 'sometimes kicked them', right: 'shows an action that happened on some occasions' },
        { left: 'One day, Abraham asked his father', right: 'introduces one particular past event' },
        { left: 'One day, his father saw Abraham', right: 'introduces another particular past event' },
      ],
      correctAnswer: {
        'used to watch his father making idols': 'describes a repeated habit in Abraham’s childhood',
        'sometimes kicked them': 'shows an action that happened on some occasions',
        'One day, Abraham asked his father': 'introduces one particular past event',
        'One day, his father saw Abraham': 'introduces another particular past event',
      },
      explanation: '“Used to + base verb” describes a regular past habit that is connected with an earlier period of life. “Sometimes” shows frequency, while “One day” moves the story to one specific event.',
      feedback: {
        correct: 'Good. You separated repeated past habits from single story events.',
        incorrect: 'Look for the signals “used to”, “sometimes” and “One day”, then decide whether the action is repeated or specific.',
      },
    },
    {
      id: 'abraham-a2-language-2-questions-and-reasons',
      type: 'matching',
      title: 'Asking and Explaining',
      instructions: 'Match each Chapter 2 expression with its communication function.',
      question: 'How do Abraham and his father ask for information and give explanations?',
      matchingPairs: [
        { left: 'Why do you make ...?', right: 'asks for a reason' },
        { left: 'What is this human-like object?', right: 'asks for identification' },
        { left: 'They are our gods.', right: 'identifies what the father believes the objects are' },
        { left: 'because he is very smart', right: 'gives a reason for a statement' },
      ],
      correctAnswer: {
        'Why do you make ...?': 'asks for a reason',
        'What is this human-like object?': 'asks for identification',
        'They are our gods.': 'identifies what the father believes the objects are',
        'because he is very smart': 'gives a reason for a statement',
      },
      explanation: 'Use “Why ...?” to ask for a reason and “because ...” to give one. “What is ...?” asks someone to identify or explain a thing.',
      feedback: {
        correct: 'Correct. You connected the question and answer patterns with their functions.',
        incorrect: 'Ask what information each sentence requests or supplies: a reason, an identity, or an explanation.',
      },
    },
    {
      id: 'abraham-a2-language-2-tell-not-to',
      type: 'sequencing',
      title: 'Telling Someone Not to Do Something',
      instructions: 'Put the chunks in order to rebuild the Chapter 2 pattern.',
      question: 'How does the father report a negative instruction to Abraham?',
      sequencingItems: [
        { id: '1', text: 'His father' },
        { id: '2', text: 'told his son' },
        { id: '3', text: 'not to play' },
        { id: '4', text: 'with it again.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'The pattern is “tell + person + not to + base verb”: “His father told his son not to play with it again.” It reports an instruction not to do something.',
      feedback: {
        correct: 'Good. You rebuilt the negative-instruction pattern.',
        incorrect: 'Start with the speaker, then “told + person”, then “not to + verb”.',
      },
    },
    {
      id: 'abraham-a2-language-2-compare-and-explain',
      type: 'reflection',
      title: 'Say It: Ask, Compare and Explain',
      instructions: 'Write or say three or four short A2 sentences using Chapter 2 language. Use a question, a comparison and a reason.',
      question: 'Can you build a short exchange about the statue without repeating the Quick Challenge answer?',
      correctAnswer: null,
      explanation: 'A strong response can ask “What is ...?” or “Why ...?”, use “bigger than” to compare the ears, and use “because” to give a reason. It may also report the father’s instruction with “told ... not to ...”.',
      feedback: {
        correct: 'Use the chapter patterns accurately and keep the exchange short and clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Question — Ask about the object: “What is this ...?”', mode: 'Individual' },
        { question: 'Comparison — Use “bigger than”: “Its ears are bigger than ...”', mode: 'Individual' },
        { question: 'Reason — Give a reason with “because ...”', mode: 'Individual' },
        { question: 'Optional — Report the instruction: “His father told him not to ...”', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'abraham-a2-language-3-thinking-searching',
      type: 'matching',
      title: 'Thinking, Knowing and Searching',
      instructions: 'Match each Chapter 3 expression with the mental action or purpose it expresses.',
      question: 'How does the chapter show what Abraham was thinking about and trying to understand?',
      matchingPairs: [
        { left: 'He always thought about Allah', right: 'describes a repeated thought in the past' },
        { left: 'He wanted to know who created the World', right: 'expresses a wish to learn or understand something' },
        { left: 'He knew that Allah was not an object', right: 'expresses something he already understood' },
        { left: 'He was in search of one true Creator', right: 'shows the goal of his search' },
      ],
      correctAnswer: {
        'He always thought about Allah': 'describes a repeated thought in the past',
        'He wanted to know who created the World': 'expresses a wish to learn or understand something',
        'He knew that Allah was not an object': 'expresses something he already understood',
        'He was in search of one true Creator': 'shows the goal of his search',
      },
      explanation: 'Chapter 3 uses “thought about”, “wanted to know”, “knew that” and “was in search of” for different stages of thinking and searching. These expressions help explain what a person thinks, wants to discover, already knows, or is looking for.',
      feedback: {
        correct: 'Good. You connected each expression with a different thinking or searching function.',
        incorrect: 'Ask whether each phrase shows a thought, a wish to learn, existing knowledge, or a search goal.',
      },
    },
    {
      id: 'abraham-a2-language-3-question-reason-conclusion',
      type: 'matching',
      title: 'From a Question to a Conclusion',
      instructions: 'Match each Chapter 3 pattern with the communication job it does.',
      question: 'How does Abraham ask about a possibility, give a reason and reach a conclusion?',
      matchingPairs: [
        { left: 'Could this be my Allah?', right: 'asks whether something is possible' },
        { left: 'when it disappeared', right: 'marks the event that changes his thinking' },
        { left: 'because it sets and disappears', right: 'gives evidence or a reason' },
        { left: 'it could not be Allah', right: 'states a negative conclusion' },
      ],
      correctAnswer: {
        'Could this be my Allah?': 'asks whether something is possible',
        'when it disappeared': 'marks the event that changes his thinking',
        'because it sets and disappears': 'gives evidence or a reason',
        'it could not be Allah': 'states a negative conclusion',
      },
      explanation: '“Could this be ...?” can ask about a possibility. “When ...” introduces the event that matters, “because ...” gives the reason, and “could not be ...” expresses the conclusion Abraham reaches.',
      feedback: {
        correct: 'Correct. You followed the language from possibility to evidence and conclusion.',
        incorrect: 'Decide which chunk asks, which marks a time/event, which gives a reason, and which gives the final conclusion.',
      },
    },
    {
      id: 'abraham-a2-language-3-story-sequence',
      type: 'sequencing',
      title: 'Moving Through a Night Scene',
      instructions: 'Put the story-language chunks in order.',
      question: 'How does Chapter 3 move from leaving home to looking at the sky?',
      sequencingItems: [
        { id: '1', text: 'One night, Abraham left his home' },
        { id: '2', text: 'he found a cave and sat there' },
        { id: '3', text: 'he started thinking about Allah' },
        { id: '4', text: 'Then, he stood up and looked at the beautiful sky' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Past-tense actions tell the events, while “One night” opens the scene and “Then” helps move it to the next action. Sequencing language makes a short narrative easy to follow.',
      feedback: {
        correct: 'Good. You rebuilt the movement of the night scene.',
        incorrect: 'Start with the time signal “One night”, then follow the actions until “Then ... looked at the sky”.',
      },
    },
    {
      id: 'abraham-a2-language-3-evidence-conclusion-production',
      type: 'reflection',
      title: 'Say It: Ask, Observe and Conclude',
      instructions: 'Write or say three or four short A2 sentences. Use a possibility question, an event or observation, and a reason or conclusion.',
      question: 'Can you use Chapter 3 language to think through a new simple example without retelling the Quick Challenge?',
      correctAnswer: null,
      explanation: 'A strong response can use “Could this be ...?”, “When ...”, “because ...” and “It could/could not be ...” to move from a question to evidence and a conclusion.',
      feedback: {
        correct: 'Keep the reasoning simple and make the link between the observation and conclusion clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Question — Ask about a possibility: “Could this be ...?”', mode: 'Individual' },
        { question: 'Observation — Add what you notice: “When it ... , ...”', mode: 'Individual' },
        { question: 'Reason — Explain with “because ...”', mode: 'Individual' },
        { question: 'Conclusion — Finish with “It could/could not be ...”', mode: 'Pair' },
      ],
    },
  ],
};