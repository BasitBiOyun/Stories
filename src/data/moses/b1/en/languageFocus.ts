import type { Exercise } from '../../../../types';

/** Manually authored Moses B1 Language Focus, derived from the actual English story text. */
export const mosesB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-b1-language-1-time-frame',
      type: 'matching',
      title: 'Setting the Historical Frame',
      instructions: 'Match each expression with the job it does in the chapter.',
      question: 'How does Chapter 1 establish time before moving into the main conflict?',
      matchingPairs: [
        { left: 'He lived there in the 13th century BC', right: 'places Moses in a historical period' },
        { left: 'over 3000 years ago', right: 'restates the time distance for the reader' },
        { left: 'At that time, the Pharaoh ruled Egypt', right: 'connects the historical frame to the situation in Egypt' },
        { left: 'Years passed', right: 'moves the narrative forward across a longer period' },
      ],
      correctAnswer: {
        'He lived there in the 13th century BC': 'places Moses in a historical period',
        'over 3000 years ago': 'restates the time distance for the reader',
        'At that time, the Pharaoh ruled Egypt': 'connects the historical frame to the situation in Egypt',
        'Years passed': 'moves the narrative forward across a longer period',
      },
      explanation: 'The chapter uses several time expressions for different purposes: dating, restating distance, linking background conditions, and advancing the story.',
      feedback: {
        correct: 'Good. You identified how the chapter builds and shifts its time frame.',
        incorrect: 'Ask whether the expression dates the story, links background information, or moves time forward.',
      },
    },
    {
      id: 'moses-b1-language-1-fear-and-future',
      type: 'matching',
      title: 'Fear About What Might Happen',
      instructions: 'Match each structure with the meaning it creates.',
      question: 'How does the chapter express Pharaoh’s fear about a possible future change?',
      matchingPairs: [
        { left: 'The Pharaoh feared that this group ... would take control', right: 'reports a fear about a future possibility from a past viewpoint' },
        { left: 'he saw himself as the god', right: 'describes how he viewed his own identity' },
        { left: 'he saw an Israelite take him down from his throne', right: 'reports the event inside his dream' },
      ],
      correctAnswer: {
        'The Pharaoh feared that this group ... would take control': 'reports a fear about a future possibility from a past viewpoint',
        'he saw himself as the god': 'describes how he viewed his own identity',
        'he saw an Israelite take him down from his throne': 'reports the event inside his dream',
      },
      explanation: 'The verb “feared” is followed by “would” because the possible loss of control was still in the future from that past moment. “Saw himself as” describes self-perception, while “saw + object + verb” reports a scene in the dream.',
      feedback: {
        correct: 'Correct. You distinguished future-from-the-past fear, self-perception, and observed action.',
        incorrect: 'Look at what follows “feared” and “saw” and ask what kind of meaning each structure carries.',
      },
    },
    {
      id: 'moses-b1-language-1-cause-result-power',
      type: 'matching',
      title: 'Connecting Cause, Result and Control',
      instructions: 'Match the Chapter 1 language with its communicative function.',
      question: 'How does the narrator connect belief, fear, harsh treatment and forced work?',
      matchingPairs: [
        { left: 'So, they did not believe that the Pharaoh was a god.', right: 'shows a result from the belief described before it' },
        { left: 'That’s why he was rude and harsh to the Children of Israel.', right: 'points back to Pharaoh’s fear as the reason' },
        { left: 'He made the Children of Israel work ...', right: 'shows one person forcing another group to do something' },
        { left: 'the despotic kings continued to rule Egypt', right: 'shows that a situation carried on over time' },
      ],
      correctAnswer: {
        'So, they did not believe that the Pharaoh was a god.': 'shows a result from the belief described before it',
        'That’s why he was rude and harsh to the Children of Israel.': 'points back to Pharaoh’s fear as the reason',
        'He made the Children of Israel work ...': 'shows one person forcing another group to do something',
        'the despotic kings continued to rule Egypt': 'shows that a situation carried on over time',
      },
      explanation: 'B1 narration becomes clearer when ideas are linked. “So” and “that’s why” express result/reason, “make + person + verb” expresses coercion, and “continue to + verb” marks duration or persistence.',
      feedback: {
        correct: 'Good. You connected each structure with the relationship or action it expresses.',
        incorrect: 'Decide whether the phrase signals a result, a reason, forced action, or continuation.',
      },
    },
    {
      id: 'moses-b1-language-1-build-context',
      type: 'reflection',
      title: 'Build a Connected Historical Account',
      instructions: 'Write or say five connected B1 sentences about a different historical situation. Use at least four patterns from this Language Focus.',
      question: 'Can you set the time, explain a fear or expectation, show a cause-result link, and describe an action that continued or was forced?',
      correctAnswer: null,
      explanation: 'A strong answer should create a coherent mini-paragraph rather than isolated sentences. Useful patterns include “At that time...”, “feared that... would...”, “that’s why...”, “made ... + verb”, and “continued to...”.',
      feedback: {
        correct: 'Keep the sentences connected so each one develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set a historical time using “At that time...” or a date expression.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe what a leader or group feared might happen using “feared that ... would ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a result with “so” or “that’s why”.', mode: 'Individual' },
        { question: 'Sentence 4 — Describe control or coercion using “made + person/group + verb”.', mode: 'Pair' },
        { question: 'Sentence 5 — Show persistence using “continued to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
