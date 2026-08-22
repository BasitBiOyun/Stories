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
};
