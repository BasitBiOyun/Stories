import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific B1 Language Focus work for Abraham.
 * Activities are derived from the actual chapter language and do not duplicate
 * the chapter comprehension role of Quick Challenge.
 */
export const abrahamB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-b1-language-1-time-frame',
      type: 'matching',
      title: 'Building the Time Frame',
      instructions: 'Match each Chapter 1 expression with the time relationship it creates.',
      question: 'How does the chapter place Abraham’s childhood inside a much earlier historical setting?',
      matchingPairs: [
        { left: 'A very long time ago', right: 'opens a distant past narrative' },
        { left: 'about 4,000 years ago', right: 'adds a more specific past-time reference' },
        { left: 'when he was at a very young age', right: 'links an event to a stage of his life' },
        { left: 'Since his childhood', right: 'connects a state with its starting point in childhood' },
      ],
      correctAnswer: {
        'A very long time ago': 'opens a distant past narrative',
        'about 4,000 years ago': 'adds a more specific past-time reference',
        'when he was at a very young age': 'links an event to a stage of his life',
        'Since his childhood': 'connects a state with its starting point in childhood',
      },
      explanation: 'The chapter does more than use past tense. It layers broad historical time, a more exact reference, a life-stage clause, and a starting-point expression to organise the narrative.',
      feedback: {
        correct: 'Good. You identified four different ways of locating information in time.',
        incorrect: 'Ask whether the expression opens the distant past, gives a date-like reference, links an event to a life stage, or marks a starting point.',
      },
    },
    {
      id: 'abraham-b1-language-1-ability-and-possibility',
      type: 'matching',
      title: 'Ability, Possibility, and Reasoning',
      instructions: 'Match each structure with the meaning it carries in Chapter 1.',
      question: 'How does the chapter use “could” to express different kinds of possibility and ability?',
      matchingPairs: [
        { left: 'He could not understand how ...', right: 'shows difficulty accepting or making sense of an idea' },
        { left: 'how an intelligent person could make a statue ...', right: 'presents a possible action inside an indirect question' },
        { left: 'which could help or harm him', right: 'describes an ability or power attributed to something' },
        { left: 'They could not even move ... on their own', right: 'expresses absence of independent ability' },
      ],
      correctAnswer: {
        'He could not understand how ...': 'shows difficulty accepting or making sense of an idea',
        'how an intelligent person could make a statue ...': 'presents a possible action inside an indirect question',
        'which could help or harm him': 'describes an ability or power attributed to something',
        'They could not even move ... on their own': 'expresses absence of independent ability',
      },
      explanation: 'The same modal form contributes different meanings depending on the surrounding clause: understanding, possibility, attributed power, or inability.',
      feedback: {
        correct: 'Correct. You interpreted “could” from context rather than treating it as one fixed meaning.',
        incorrect: 'Read the whole clause around “could” and ask what kind of meaning the speaker is building there.',
      },
    },
    {
      id: 'abraham-b1-language-1-describing-and-linking',
      type: 'matching',
      title: 'Adding Detail Without Starting a New Sentence',
      instructions: 'Match each Chapter 1 structure with the detail it adds.',
      question: 'How does the chapter pack extra information into connected noun phrases and clauses?',
      matchingPairs: [
        { left: 'a boy named Abraham', right: 'identifies the boy by name' },
        { left: 'statues made from wood and stone', right: 'describes what the statues were made from' },
        { left: 'a god which could help or harm him', right: 'adds an attributed ability to the noun “god”' },
        { left: 'a large house of worship full of idols', right: 'adds a descriptive state to the place' },
      ],
      correctAnswer: {
        'a boy named Abraham': 'identifies the boy by name',
        'statues made from wood and stone': 'describes what the statues were made from',
        'a god which could help or harm him': 'adds an attributed ability to the noun “god”',
        'a large house of worship full of idols': 'adds a descriptive state to the place',
      },
      explanation: 'B1 writing becomes more compact and connected when extra detail is attached directly to a noun instead of being broken into several short sentences.',
      feedback: {
        correct: 'Good. You saw how the chapter expands noun phrases and clauses to make description more precise.',
        incorrect: 'Find the main noun first, then ask what extra information the rest of the phrase adds about it.',
      },
    },
    {
      id: 'abraham-b1-language-1-connected-observation',
      type: 'reflection',
      title: 'Build a Connected Observation',
      instructions: 'Write or say four connected B1 sentences about a person noticing something surprising in a new place. Use at least three Chapter 1 language patterns without retelling the story.',
      question: 'Can you combine time framing, an indirect “how” idea, ability/possibility, and added description in one short coherent response?',
      correctAnswer: null,
      explanation: 'A strong response can open with a past-time expression, describe a person or object with added detail, use “could/could not” in context, and include a sentence such as “She could not understand how ...”.',
      feedback: {
        correct: 'Keep all four sentences focused on the same situation and make the language relationships clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the time with “a long time ago”, “when ...”, or another suitable past-time frame.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe a person, place, or object with an added phrase such as “named ...”, “made from ...”, or “full of ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “could” or “could not” to express ability, possibility, or difficulty understanding.', mode: 'Individual' },
        { question: 'Sentence 4 — Add an indirect idea with “could not understand how ...” and connect it to the same situation.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'abraham-b1-language-2-past-habit-background',
      type: 'matching',
      title: 'Habit and Background in the Past',
      instructions: 'Match each Chapter 2 expression with the past-time meaning it builds.',
      question: 'How does the chapter separate repeated childhood habits from actions happening in the background?',
      matchingPairs: [
        { left: 'he often used to watch his father', right: 'describes a repeated habit in an earlier period of life' },
        { left: 'while he was making idols', right: 'shows an action continuing in the background at the same time' },
        { left: 'Abraham used to play with these idols as toys', right: 'describes another repeated childhood behaviour' },
        { left: 'One day, his father saw Abraham riding the statue', right: 'moves from repeated background habits to one specific event' },
      ],
      correctAnswer: {
        'he often used to watch his father': 'describes a repeated habit in an earlier period of life',
        'while he was making idols': 'shows an action continuing in the background at the same time',
        'Abraham used to play with these idols as toys': 'describes another repeated childhood behaviour',
        'One day, his father saw Abraham riding the statue': 'moves from repeated background habits to one specific event',
      },
      explanation: 'The chapter combines “used to” for repeated past behaviour, “while + was/were -ing” for background action, and “one day” to shift into a particular event.',
      feedback: {
        correct: 'Correct. You separated repeated habits, background action, and a single event.',
        incorrect: 'Ask whether the sentence describes something repeated, something in progress, or one particular moment.',
      },
    },
    {
      id: 'abraham-b1-language-2-correcting-contrast',
      type: 'matching',
      title: 'Correcting an Idea with Contrast',
      instructions: 'Match each Chapter 2 structure with the function it performs in the dialogue.',
      question: 'How do the speakers correct, contrast, and explain ideas?',
      matchingPairs: [
        { left: 'They are not toys, but our gods.', right: 'rejects one label and replaces it with another' },
        { left: 'We worship them; we show love and respect to them.', right: 'adds parallel information to explain a belief or practice' },
        { left: 'It has big ears, bigger than ours.', right: 'moves from description to direct comparison' },
        { left: 'These big ears show his deep knowledge.', right: 'presents an interpretation or claimed meaning of a visible feature' },
      ],
      correctAnswer: {
        'They are not toys, but our gods.': 'rejects one label and replaces it with another',
        'We worship them; we show love and respect to them.': 'adds parallel information to explain a belief or practice',
        'It has big ears, bigger than ours.': 'moves from description to direct comparison',
        'These big ears show his deep knowledge.': 'presents an interpretation or claimed meaning of a visible feature',
      },
      explanation: 'B1 speakers often build meaning by correcting a previous idea, adding explanation, comparing two things, and stating what they think a detail means.',
      feedback: {
        correct: 'Good. You identified how the dialogue moves from correction to explanation and comparison.',
        incorrect: 'Look for the relationship between the two parts: replacement, addition, comparison, or interpretation.',
      },
    },
    {
      id: 'abraham-b1-language-2-reported-prohibition',
      type: 'matching',
      title: 'From Direct Warning to Reported Instruction',
      instructions: 'Match each form with the kind of message it expresses.',
      question: 'How can a speaker report an instruction or prohibition without repeating the exact original words?',
      matchingPairs: [
        { left: 'He told his son not to play with it again.', right: 'reports a negative instruction with “tell + person + not to + verb”' },
        { left: 'Do not play with it again.', right: 'gives the negative instruction directly' },
        { left: 'His father told him to leave it alone.', right: 'reports a positive instruction with “tell + person + to + verb”' },
        { left: 'Leave it alone.', right: 'gives the instruction directly as an imperative' },
      ],
      correctAnswer: {
        'He told his son not to play with it again.': 'reports a negative instruction with “tell + person + not to + verb”',
        'Do not play with it again.': 'gives the negative instruction directly',
        'His father told him to leave it alone.': 'reports a positive instruction with “tell + person + to + verb”',
        'Leave it alone.': 'gives the instruction directly as an imperative',
      },
      explanation: 'The chapter uses reported instruction after the father becomes angry. At B1, learners should be able to move between a direct imperative and “tell + person + (not) to + verb”.',
      feedback: {
        correct: 'Correct. You distinguished direct instructions from reported ones.',
        incorrect: 'Check whether the words are spoken directly or reported later, and whether the instruction is positive or negative.',
      },
    },
    {
      id: 'abraham-b1-language-2-connected-memory',
      type: 'reflection',
      title: 'Describe a Past Routine and a Turning Point',
      instructions: 'Write or say four connected B1 sentences about a childhood routine that leads to one memorable event. Use at least three Chapter 2 language patterns without retelling the story.',
      question: 'Can you combine a past habit, a background action, one specific event, and either a reported instruction or a comparison?',
      correctAnswer: null,
      explanation: 'A strong response can begin with “I used to ...”, add “while ... was/were -ing”, shift with “One day ...”, and finish with a reported instruction such as “My teacher told me not to ...” or a comparison such as “It was bigger than ...”.',
      feedback: {
        correct: 'Keep the four sentences in one clear time sequence and make the turning point easy to follow.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a repeated past habit with “used to”.', mode: 'Individual' },
        { question: 'Sentence 2 — Add a simultaneous background action with “while ... was/were -ing”.', mode: 'Individual' },
        { question: 'Sentence 3 — Move to one specific event with “One day ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a reported instruction with “told ... (not) to ...” or a comparison with “... than ...”.', mode: 'Pair' },
      ],
    },
  ],
};
