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
};
