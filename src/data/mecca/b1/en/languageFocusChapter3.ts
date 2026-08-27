import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 3 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-b1-language-3-place-and-state',
      type: 'matching',
      title: 'Describing a Place Before Change',
      instructions: 'Match each chapter expression with the job it does in the historical description.',
      question: 'How does the writer describe Mecca before later developments begin?',
      matchingPairs: [
        { left: 'a valley where no crops grow', right: 'adds a defining description to a place with “where”' },
        { left: 'City life began there with the building of the Ka’ba.', right: 'marks the beginning of a new stage through an event' },
        { left: 'There was no population in the land.', right: 'states the situation that existed before settlement' },
      ],
      correctAnswer: {
        'a valley where no crops grow': 'adds a defining description to a place with “where”',
        'City life began there with the building of the Ka’ba.': 'marks the beginning of a new stage through an event',
        'There was no population in the land.': 'states the situation that existed before settlement',
      },
      explanation: 'The chapter combines a place description, an existing state, and a phrase marking the beginning of change.',
      feedback: {
        correct: 'Good. You identified how the text builds the starting situation before later events.',
        incorrect: 'Ask whether each expression describes the place, states an earlier situation, or marks the beginning of change.',
      },
    },
    {
      id: 'mecca-b1-language-3-time-relations',
      type: 'matching',
      title: 'Showing Earlier and Later Past Events',
      instructions: 'Match each time pattern with the relationship it expresses.',
      question: 'How does the chapter help the reader follow events across different points in the past?',
      matchingPairs: [
        { left: 'When Prophet Abraham ... brought ... Hagar to the city, Zamzam water had not been discovered yet.', right: 'shows that one situation was still true before another past event' },
        { left: 'After the discovery of Zamzam water, the Jurhumites ... settled in Mecca.', right: 'places one completed development before the next event' },
        { left: 'Later, when Ishmael ... grew up, Abraham ... came to the city...', right: 'moves the narrative forward to a later stage and gives the time condition for the next event' },
      ],
      correctAnswer: {
        'When Prophet Abraham ... brought ... Hagar to the city, Zamzam water had not been discovered yet.': 'shows that one situation was still true before another past event',
        'After the discovery of Zamzam water, the Jurhumites ... settled in Mecca.': 'places one completed development before the next event',
        'Later, when Ishmael ... grew up, Abraham ... came to the city...': 'moves the narrative forward to a later stage and gives the time condition for the next event',
      },
      explanation: '“Had not been ... yet” looks back to an earlier past state, while “after”, “later” and “when” organise the sequence of later events.',
      feedback: {
        correct: 'Correct. You distinguished an earlier-past state from later narrative steps.',
        incorrect: 'Decide which event or state came first, then check how the time expression shows that relationship.',
      },
    },
    {
      id: 'mecca-b1-language-3-purpose-change',
      type: 'matching',
      title: 'Expressing Purpose and Change',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does the writer explain why an action happened and how later conditions changed?',
      matchingPairs: [
        { left: 'Abraham ... came to the city to reconstruct the Holy Ka’ba with his son.', right: 'uses “to + verb” to state the purpose of an action' },
        { left: 'Arabs accepted the religion of Abraham ... so the Ka’ba became a pilgrimage site.', right: 'uses “so” to connect a preceding situation with its result' },
        { left: 'This helped the city grow rapidly.', right: 'shows how one development supported a continuing change' },
      ],
      correctAnswer: {
        'Abraham ... came to the city to reconstruct the Holy Ka’ba with his son.': 'uses “to + verb” to state the purpose of an action',
        'Arabs accepted the religion of Abraham ... so the Ka’ba became a pilgrimage site.': 'uses “so” to connect a preceding situation with its result',
        'This helped the city grow rapidly.': 'shows how one development supported a continuing change',
      },
      explanation: 'Purpose, result and development are different relationships: “to + verb” answers why an action is done, “so” introduces a result, and “help + object + verb” shows support for change.',
      feedback: {
        correct: 'Good. You separated purpose from result and continuing development.',
        incorrect: 'Ask whether the phrase explains why someone acted, what happened as a result, or what helped a change continue.',
      },
    },
    {
      id: 'mecca-b1-language-3-production',
      type: 'reflection',
      title: 'Explain How a Place Changed Over Time',
      instructions: 'Write or say six connected B1 sentences about a different place that changed over time. Do not retell Chapter 3.',
      question: 'Can you describe the starting place, show an earlier condition, organise two later developments, give one purpose, and explain one result?',
      correctAnswer: null,
      explanation: 'A strong response should form one short historical paragraph. Useful patterns include “a place where...”, “There was/were...”, “had not ... yet”, “after...”, “later, when...”, “to + verb”, “so...”, and “helped ... grow/change”.',
      feedback: {
        correct: 'Keep the time relationships clear and make each sentence move the explanation forward.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the place with “where” or another defining phrase.', mode: 'Individual' },
        { question: 'Sentence 2 — State an earlier condition that existed before change.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “after” to introduce the next development.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “later, when...” to move to another stage.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain the purpose of one action with “to + verb”.', mode: 'Pair' },
        { question: 'Sentence 6 — Finish with a result using “so” or “helped ... change”.', mode: 'Pair' },
      ],
    },
  ],
};
