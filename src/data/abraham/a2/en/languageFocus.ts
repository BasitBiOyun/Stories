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
      type: 'multiple-choice',
      title: 'Did Not or Could Not?',
      instructions: 'Choose the sentence that expresses lack of ability.',
      question: 'Which Chapter 1 sentence uses “could not” because the stone objects were unable to do something?',
      options: ['They could not move from one place to another.', 'People did not know Allah.', 'They did not worship Him.'],
      correctAnswer: 0,
      explanation: 'Use “did not + base verb” for a negative past fact or action. Use “could not + base verb” for lack of ability.',
      feedback: {
        correct: 'Correct. “Could not move” describes lack of ability.',
        incorrect: 'Look for the sentence about what the objects were unable to do.',
      },
    },
    {
      id: 'abraham-a2-language-1-look-like',
      type: 'drag-drop',
      title: 'Looks Like or Is?',
      instructions: 'Sort the expressions by whether they describe appearance or identity.',
      question: 'Which expressions only describe similar appearance, and which one states identity?',
      dragDropGroups: [
        { group: 'Similar appearance', items: ['These objects looked like people', 'These objects looked like animals'] },
        { group: 'Identity statement', items: ['People believed these objects were their gods'] },
      ],
      correctAnswer: {
        'Similar appearance': ['These objects looked like people', 'These objects looked like animals'],
        'Identity statement': ['People believed these objects were their gods'],
      },
      explanation: '“Look like + noun” describes similar appearance. It does not mean two things are the same. The chapter separately reports what the people believed the objects were.',
      feedback: {
        correct: 'Good. You separated appearance from an identity claim.',
        incorrect: 'Look for the expression “looked like”; it describes appearance, not identity.',
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
      explanation: '“Used to + base verb” describes a regular past habit. “Sometimes” shows frequency, while “One day” moves the story to one specific event.',
      feedback: {
        correct: 'Good. You separated repeated past habits from single story events.',
        incorrect: 'Look for “used to”, “sometimes” and “One day”, then decide whether the action is repeated or specific.',
      },
    },
    {
      id: 'abraham-a2-language-2-questions-and-reasons',
      type: 'multiple-choice',
      title: 'Asking for a Reason',
      instructions: 'Choose the question that asks for a reason.',
      question: 'Which Chapter 2 question naturally expects an answer with “because”?',
      options: ['Why do you make and put these toys in the house?', 'What is this human-like object, father?', 'Is it Mardukh?'],
      correctAnswer: 0,
      explanation: '“Why ...?” asks for a reason, and “because ...” can introduce the explanation. “What is ...?” asks for identification.',
      feedback: {
        correct: 'Correct. A “Why ...?” question asks for a reason.',
        incorrect: 'Choose the question that asks why something happens.',
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
      explanation: 'The pattern is “tell + person + not to + base verb”: “His father told his son not to play with it again.”',
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
        { left: 'He wanted to know who created the world', right: 'expresses a wish to learn or understand something' },
        { left: 'He knew that Allah was not an object', right: 'expresses something he already understood' },
        { left: 'He was in search of one true Creator', right: 'shows the goal of his search' },
      ],
      correctAnswer: {
        'He always thought about Allah': 'describes a repeated thought in the past',
        'He wanted to know who created the world': 'expresses a wish to learn or understand something',
        'He knew that Allah was not an object': 'expresses something he already understood',
        'He was in search of one true Creator': 'shows the goal of his search',
      },
      explanation: 'Chapter 3 uses “thought about”, “wanted to know”, “knew that” and “was in search of” for different stages of thinking and searching.',
      feedback: {
        correct: 'Good. You connected each expression with a different thinking or searching function.',
        incorrect: 'Ask whether each phrase shows a thought, a wish to learn, existing knowledge, or a search goal.',
      },
    },
    {
      id: 'abraham-a2-language-3-question-reason-conclusion',
      type: 'fill-blanks',
      title: 'Giving the Reason',
      instructions: 'Complete the sentence with the linker used to give Abraham’s reason.',
      question: 'Which word connects Abraham’s decision with the fact that the star sets and disappears?',
      fillBlanksText: 'I will not show respect to it [blank] it sets and disappears.',
      correctAnswer: 'because',
      explanation: '“Because” introduces the reason. Chapter 3 also uses “when” for the event that changes Abraham’s thinking and “could not be” for a negative conclusion.',
      feedback: {
        correct: 'Correct. “Because” introduces the reason.',
        incorrect: 'The second part explains why Abraham reaches the first decision.',
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
      explanation: 'Past-tense actions tell the events, while “One night” opens the scene and “Then” moves it to the next action.',
      feedback: {
        correct: 'Good. You rebuilt the movement of the night scene.',
        incorrect: 'Start with “One night”, then follow the actions until “Then ... looked at the sky”.',
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