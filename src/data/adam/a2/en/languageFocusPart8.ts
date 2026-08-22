import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Chapter 9 is read in full before authoring; activities stay grounded in the
 * chapter and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'adam-a2-language-9-future-intentions',
      type: 'matching',
      title: 'Will and Won’t: Intention and Refusal',
      instructions: 'Match each Chapter 9 expression with the language job it does.',
      question: 'How does the dialogue use will and won’t to show what a person intends or refuses to do?',
      matchingPairs: [
        { left: 'I will kill you', right: 'states a future intention with will + verb' },
        { left: 'I won’t fight back', right: 'refuses a future action with won’t + verb' },
        { left: 'I won’t harm you', right: 'says clearly that an action will not happen' },
        { left: 'I fear Allah', right: 'gives the reason behind the speaker’s choice' },
      ],
      correctAnswer: {
        'I will kill you': 'states a future intention with will + verb',
        'I won’t fight back': 'refuses a future action with won’t + verb',
        'I won’t harm you': 'says clearly that an action will not happen',
        'I fear Allah': 'gives the reason behind the speaker’s choice',
      },
      explanation: 'In direct speech, “will + verb” states a future intention. “Won’t + verb” makes the future negative and can show a clear refusal.',
      feedback: {
        correct: 'Correct. You separated positive future intention, negative future choice and reason.',
        incorrect: 'Look first for will/won’t, then ask whether the speaker plans an action, rejects it, or explains why.',
      },
    },
    {
      id: 'adam-a2-language-9-changing-feelings',
      type: 'matching',
      title: 'Changing Feelings and States',
      instructions: 'Match each expression with what it shows in the story.',
      question: 'How does Chapter 9 describe anger, sadness and panic as the situation changes?',
      matchingPairs: [
        { left: 'his face became very dark with anger', right: 'uses became to show a change of state' },
        { left: 'Qabil’s anger cooled', right: 'shows that a strong feeling became weaker' },
        { left: 'he felt so sad', right: 'uses felt + adjective to describe an emotion' },
        { left: 'he started to panic', right: 'uses started to + verb to show the beginning of a new reaction' },
      ],
      correctAnswer: {
        'his face became very dark with anger': 'uses became to show a change of state',
        'Qabil’s anger cooled': 'shows that a strong feeling became weaker',
        'he felt so sad': 'uses felt + adjective to describe an emotion',
        'he started to panic': 'uses started to + verb to show the beginning of a new reaction',
      },
      explanation: 'The chapter uses “became”, “felt + adjective” and “started to + verb” to show changing states and reactions instead of only naming events.',
      feedback: {
        correct: 'Good. You noticed how the language shows emotional change over time.',
        incorrect: 'Focus on the verbs became, felt and started to. Each one tells us something different about a state or reaction.',
      },
    },
    {
      id: 'adam-a2-language-9-problem-solution',
      type: 'matching',
      title: 'A Problem and a Way Forward',
      instructions: 'Match the Chapter 9 language with its function.',
      question: 'What language does the chapter use when Qabil does not know what to do and then learns a way to act?',
      matchingPairs: [
        { left: 'I don’t know what I should do', right: 'expresses uncertainty and asks what the right action is' },
        { left: 'the crow started digging', right: 'shows an action beginning with started + -ing' },
        { left: 'The crow showed Qabil the way to put the body in the hole', right: 'shows how someone learns a method or solution' },
        { left: 'I cannot hide my brother’s dead body', right: 'expresses inability with cannot + verb' },
      ],
      correctAnswer: {
        'I don’t know what I should do': 'expresses uncertainty and asks what the right action is',
        'the crow started digging': 'shows an action beginning with started + -ing',
        'The crow showed Qabil the way to put the body in the hole': 'shows how someone learns a method or solution',
        'I cannot hide my brother’s dead body': 'expresses inability with cannot + verb',
      },
      explanation: 'Useful A2 problem-solving language includes “I don’t know what I should do”, “show someone the way to ...” and “cannot + verb”.',
      feedback: {
        correct: 'Correct. You connected uncertainty, a demonstrated solution and inability.',
        incorrect: 'Ask whether each expression shows a problem, an action beginning, a solution being demonstrated, or inability.',
      },
    },
    {
      id: 'adam-a2-language-9-use-it',
      type: 'reflection',
      title: 'Say It: Ask for and Give Help',
      instructions: 'Write or say four short A2 sentences. Use the Chapter 9 patterns in a safe everyday situation.',
      question: 'Can you express a choice, describe a feeling, ask what to do and show someone how to do something?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of future choice, feelings, uncertainty and practical help to an everyday context.',
      feedback: {
        correct: 'Use the sentence starters to make short, clear and meaningful sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Future choice: “I will ...” or “I won’t ... because ...”', mode: 'Individual' },
        { question: 'Feeling/change: “I felt ...” or “I started to ...”', mode: 'Individual' },
        { question: 'Ask for guidance: “I don’t know what I should do. Can you help me?”', mode: 'Pair' },
        { question: 'Give guidance: “I can show you how / the way to ...”', mode: 'Pair' },
      ],
    },
  ],
};
