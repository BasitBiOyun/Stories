import type { Exercise } from '../../../../types';

/** Chapter 5 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'abraham-b2-language-5-past-viewpoint',
      type: 'matching',
      title: 'See the Future from a Past Viewpoint',
      instructions: 'Match each form with the time relationship it creates. Focus on how the narrator looks forward from within a past situation.',
      question: 'How does Chapter 5 describe events that were still in the future from an earlier point in the story?',
      matchingPairs: [
        { left: 'he was going to fight against his family and the whole system', right: 'presents a future development viewed from an earlier past moment' },
        { left: 'a child ... would be born', right: 'reports a prediction about a later event from a past reporting point' },
        { left: 'would change the religion of the people', right: 'continues the predicted chain of later consequences' },
        { left: 'would end the reign of Nimrod', right: 'places the final predicted result after the same past viewpoint' },
      ],
      correctAnswer: {
        'he was going to fight against his family and the whole system': 'presents a future development viewed from an earlier past moment',
        'a child ... would be born': 'reports a prediction about a later event from a past reporting point',
        'would change the religion of the people': 'continues the predicted chain of later consequences',
        'would end the reign of Nimrod': 'places the final predicted result after the same past viewpoint',
      },
      explanation: 'The chapter repeatedly looks forward from inside a past narrative. “Was going to” and “would” do not simply mark ordinary future time; they show later events as future relative to an earlier past point.',
      feedback: {
        correct: 'Correct. You tracked future-in-the-past across both narration and reported prediction.',
        incorrect: 'Ask where the narrator is standing in time: these events are later than the past viewpoint, not later than the reader’s present.',
      },
    },
    {
      id: 'abraham-b2-language-5-source-shift',
      type: 'multiple-choice',
      title: 'Preserve the Shift between Narrations',
      instructions: 'Choose the reformulation that keeps the chapter’s source distinction and causal flow.',
      question: 'Which version best preserves both the first prediction account and the phrase “According to another narration”?',
      options: [
        'One account says that astrologers predicted the birth of a child who would threaten Nimrod’s rule. According to another narration, Nimrod instead saw a dream about such a child; in that account, the dream led to his order against male children.',
        'The astrologers certainly predicted the child, Nimrod certainly had the same dream, and both events are presented as one unquestioned historical fact.',
        'The chapter gives two narrations, so no relationship can be described between either narration and Nimrod’s later action.',
      ],
      correctAnswer: 0,
      explanation: 'The source marker “According to another narration” signals an alternative account. A careful B2 reformulation keeps the accounts distinct while still showing how each account can connect to the later response.',
      feedback: {
        correct: 'Correct. You kept the alternative narration visible instead of merging both accounts into one certainty.',
        incorrect: 'Do not erase “According to another narration.” Preserve the source boundary first, then express the causal sequence inside each account.',
      },
    },
    {
      id: 'abraham-b2-language-5-cohesion',
      type: 'matching',
      title: 'Build Cause, Detail and Location',
      instructions: 'Match each phrase with the discourse job it performs in the closing part of the chapter.',
      question: 'How does the chapter connect the reported threat to the protective response and then add precise detail?',
      matchingPairs: [
        { left: 'So, he gathered pregnant women...', right: 'marks a result or response following the preceding reported threat' },
        { left: 'Upon this, Azer took his wife...', right: 'moves from the ruler’s action to a further consequence and response' },
        { left: 'his wife, who was pregnant with Abraham', right: 'adds identifying background information about the wife without starting a new main event' },
        { left: 'a cave, where Abraham was born', right: 'links a place directly to the event that happened there' },
      ],
      correctAnswer: {
        'So, he gathered pregnant women...': 'marks a result or response following the preceding reported threat',
        'Upon this, Azer took his wife...': 'moves from the ruler’s action to a further consequence and response',
        'his wife, who was pregnant with Abraham': 'adds identifying background information about the wife without starting a new main event',
        'a cave, where Abraham was born': 'links a place directly to the event that happened there',
      },
      explanation: 'B2 cohesion depends on more than sentence-level grammar. The chapter uses result markers and relative clauses to keep the event chain moving while adding background and place information efficiently.',
      feedback: {
        correct: 'Correct. You identified result links, background detail and place-based cohesion.',
        incorrect: 'Separate the main event chain from the extra information: “So/Upon this” advance consequences, while “who/where” attach supporting detail.',
      },
    },
    {
      id: 'abraham-b2-language-5-production',
      type: 'reflection',
      title: 'Write a Layered Past Narrative',
      instructions: 'Write or say an 8–10 sentence paragraph about a historical or fictional situation outside this story. Establish a past setting, describe one later development with “was/were going to”, report a prediction or expectation with at least two uses of “would”, introduce an alternative account with “according to another account/source”, show a consequence with “so/upon this/as a result”, and add one “who” clause plus one “where” clause. Keep any alternative account clearly marked rather than presenting both versions as one certainty. Do not retell Chapter 5.',
      question: 'Can you organise a B2 past narrative that distinguishes viewpoint, prediction, source status, consequence and supporting detail?',
      correctAnswer: null,
      explanation: 'A strong response should control time from a past viewpoint, distinguish the status of an alternative account, connect causes and consequences, and embed background/place detail without breaking the narrative flow.',
      feedback: {
        correct: 'Check that your paragraph keeps the alternative account visibly qualified and that each connector or clause has a clear discourse purpose.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Viewpoint — Which event was still in the future from your chosen past moment?', mode: 'Individual' },
        { question: 'Prediction — Which later developments will you report with “would”?', mode: 'Individual' },
        { question: 'Source status — How will you signal that the second account is an alternative rather than an additional certainty?', mode: 'Pair' },
        { question: 'Cohesion — Which detail belongs in a “who” clause and which belongs in a “where” clause?', mode: 'Pair' },
      ],
    },
  ],
};
