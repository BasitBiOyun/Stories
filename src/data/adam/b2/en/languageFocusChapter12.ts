import type { Exercise } from '../../../../types';

/** Chapter 12 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'adam-b2-language-12-contrast',
      type: 'matching',
      title: 'Track Contrast Across the Narrative',
      instructions: 'Match each Chapter 12 expression with the contrast or relationship it creates.',
      question: 'How does the chapter use contrast to organise the conflict rather than simply list events?',
      matchingPairs: [
        { left: 'Qabil cultivated the land while Habil raised cattle.', right: 'places two simultaneous roles side by side without judging either occupation' },
        { left: 'Habil offered his best cattle while Qabil offered his worst grain.', right: 'uses parallel structure to highlight a difference in the quality of the two actions' },
        { left: 'I refuse to see you happy while I remain unhappy!', right: 'frames Qabil’s emotion through a direct contrast between another person’s state and his own' },
        { left: 'it was accepted from one of them and was not accepted from the other', right: 'creates a balanced contrast through parallel passive clauses' },
      ],
      correctAnswer: {
        'Qabil cultivated the land while Habil raised cattle.': 'places two simultaneous roles side by side without judging either occupation',
        'Habil offered his best cattle while Qabil offered his worst grain.': 'uses parallel structure to highlight a difference in the quality of the two actions',
        'I refuse to see you happy while I remain unhappy!': 'frames Qabil’s emotion through a direct contrast between another person’s state and his own',
        'it was accepted from one of them and was not accepted from the other': 'creates a balanced contrast through parallel passive clauses',
      },
      explanation: 'The same broad contrast resources do different jobs: simultaneous description, evaluative contrast, emotional opposition and balanced reporting of outcomes.',
      feedback: {
        correct: 'Correct. You identified how contrast changes function across the chapter.',
        incorrect: 'Do not treat every “while” as the same. Ask whether it marks simultaneity, evaluative contrast or emotional opposition.',
      },
    },
    {
      id: 'adam-b2-language-12-passive-relative-cause',
      type: 'multiple-choice',
      title: 'Read Focus, Condition and Cause Together',
      instructions: 'Choose the explanation that best describes how the sentence is organised.',
      question: 'What is the main effect of “he whose offering was accepted would have the right on his side” together with “Qabil’s sacrifice was not accepted ... because of his insincerity”?',
      options: [
        'The relative clause defines the person by a condition, while the passive keeps attention on the outcome and the cause phrase explains why that outcome occurs.',
        'The sentences mainly identify who physically performed the act of accepting the offerings.',
        'The grammar removes any connection between the outcome and the reason given in the text.',
      ],
      correctAnswer: 0,
      explanation: '“Whose offering was accepted” defines the relevant person through a condition. The passive foregrounds acceptance/non-acceptance, and “because of” explicitly supplies the causal explanation.',
      feedback: {
        correct: 'Correct. You tracked participant definition, information focus and causality in one chain.',
        incorrect: 'Look at what the passive foregrounds and what “because of” adds to the interpretation.',
      },
    },
    {
      id: 'adam-b2-language-12-source-limits',
      type: 'matching',
      title: 'Preserve Source Boundaries',
      instructions: 'Match each expression with the level of certainty or source limitation it signals.',
      question: 'How does the final part of Chapter 12 separate what the Qur’anic account states from details the chapter does not claim to know fully?',
      matchingPairs: [
        { left: 'without mentioning names', right: 'states an explicit limitation in the Qur’anic presentation' },
        { left: 'It does not openly mention anything from the details found in the Torah', right: 'distinguishes the Qur’anic narration from details attributed to another source tradition' },
        { left: 'according to the Qur’an', right: 'marks the following interpretation as tied to a named source framework' },
        { left: 'Although we don’t know the whole story...', right: 'acknowledges incomplete knowledge before stating the limited conclusion the chapter still draws' },
      ],
      correctAnswer: {
        'without mentioning names': 'states an explicit limitation in the Qur’anic presentation',
        'It does not openly mention anything from the details found in the Torah': 'distinguishes the Qur’anic narration from details attributed to another source tradition',
        'according to the Qur’an': 'marks the following interpretation as tied to a named source framework',
        'Although we don’t know the whole story...': 'acknowledges incomplete knowledge before stating the limited conclusion the chapter still draws',
      },
      explanation: 'B2 source-aware reading depends on noticing how writers limit claims. These phrases distinguish explicit Qur’anic content, comparison with another tradition, interpretation and acknowledged uncertainty.',
      feedback: {
        correct: 'Good. You preserved the difference between evidence, source framing and acknowledged limits.',
        incorrect: 'Ask which phrases identify a source, which restrict what is explicitly stated, and which admit incomplete knowledge.',
      },
    },
    {
      id: 'adam-b2-language-12-production',
      type: 'reflection',
      title: 'Write a Source-Aware Contrast Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story dispute, report or historical case. Do not retell Chapter 12. Contrast two people or positions with “while” or an equivalent structure. Use one passive to foreground an outcome rather than the actor. Explain one cause with “because of”, “because”, or an equivalent expression. Include one source-limiting phrase such as “according to...”, “the source does not state...”, or “although we do not know...”. End with a conclusion that stays inside the evidence you introduced.',
      question: 'Can you combine contrast, information focus, cause and source qualification in one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response does not simply insert target forms. It uses them to compare positions, foreground outcomes, explain causes and keep conclusions proportionate to the available evidence.',
      feedback: {
        correct: 'Keep each claim tied to the evidence or source boundary you introduced.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Contrast — Which two roles, actions or positions will you place side by side?', mode: 'Individual' },
        { question: 'Focus — Which outcome matters more than naming the actor?', mode: 'Individual' },
        { question: 'Cause — What directly explains one important result?', mode: 'Pair' },
        { question: 'Source limits — What can your source support, and what should you avoid claiming?', mode: 'Pair' },
      ],
    },
  ],
};
