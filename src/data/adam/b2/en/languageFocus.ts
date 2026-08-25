import type { Exercise } from '../../../../types';

/**
 * Adam B2 Chapter 1 Language Focus.
 * Manually authored from the English introduction and kept separate from the
 * Quick Challenge, which already tests the chapter's good-vs-evil framing.
 */
export const adamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-b2-language-1-source-focus',
      type: 'matching',
      title: 'Source, Focus and Framing',
      instructions: 'Match each expression from the introduction with the discourse job it performs.',
      question: 'How does Chapter 1 signal source, focus and interpretation?',
      matchingPairs: [
        { left: 'Based on the Holy Qur’an', right: 'grounds the statement in an identified source' },
        { left: 'He was created from clay without parents', right: 'uses passive voice to foreground Adam and the event rather than the agent' },
        { left: 'The story of Adam is told in several chapters', right: 'uses passive voice to foreground where the story appears' },
        { left: 'Satan is portrayed as a rebel', right: 'signals how a figure is represented in the source' },
      ],
      correctAnswer: {
        'Based on the Holy Qur’an': 'grounds the statement in an identified source',
        'He was created from clay without parents': 'uses passive voice to foreground Adam and the event rather than the agent',
        'The story of Adam is told in several chapters': 'uses passive voice to foreground where the story appears',
        'Satan is portrayed as a rebel': 'signals how a figure is represented in the source',
      },
      explanation: 'The introduction repeatedly controls how claims are presented: it names a source, uses passive forms to shift information focus, and uses “is portrayed as” to mark representation.',
      feedback: {
        correct: 'Correct. You identified source-grounding, passive focus and representation.',
        incorrect: 'Ask whether the phrase identifies a source, changes what receives sentence focus, or describes representation.',
      },
    },
    {
      id: 'adam-b2-language-1-contrast',
      type: 'matching',
      title: 'Building a Precise Contrast',
      instructions: 'Match each contrast pattern with the relationship it creates.',
      question: 'How does the introduction refine ideas rather than simply add information?',
      matchingPairs: [
        { left: 'not symbolic or imaginary, but ... factual', right: 'rejects one interpretation and replaces it with another' },
        { left: 'a rival and enemy of Adam rather than Allah', right: 'selects the more accurate comparison or focus' },
        { left: 'good and evil as opposed to each other', right: 'presents two ideas as opposing poles' },
        { left: 'not like the creation of other humans', right: 'marks difference before the text explains the distinction' },
      ],
      correctAnswer: {
        'not symbolic or imaginary, but ... factual': 'rejects one interpretation and replaces it with another',
        'a rival and enemy of Adam rather than Allah': 'selects the more accurate comparison or focus',
        'good and evil as opposed to each other': 'presents two ideas as opposing poles',
        'not like the creation of other humans': 'marks difference before the text explains the distinction',
      },
      explanation: 'B2 readers need to notice how contrast markers shape interpretation: “not ... but ...” corrects, “rather than” refines, and “as opposed to” sets up opposition.',
      feedback: {
        correct: 'Good. You separated correction, refinement, opposition and difference.',
        incorrect: 'Look at what the second part does to the first: replace it, narrow it, oppose it, or simply mark difference.',
      },
    },
    {
      id: 'adam-b2-language-1-reformulate',
      type: 'multiple-choice',
      title: 'Reformulate Without Changing the Meaning',
      instructions: 'Choose the reformulation that preserves both the information and the discourse focus.',
      question: 'Which sentence best preserves the meaning of “Satan is portrayed as a rebel against Allah’s command but also as a rival and enemy of Adam rather than Allah”?',
      options: [
        'The Qur’anic account presents Satan as disobedient to Allah’s command while framing his rivalry primarily against Adam.',
        'The Qur’anic account says Satan is equal to Allah and Adam.',
        'The Qur’anic account removes the idea of rebellion and focuses only on friendship with Adam.',
      ],
      correctAnswer: 0,
      explanation: 'The first option preserves both relations: rebellion concerns Allah’s command, while rivalry is framed in relation to Adam.',
      feedback: {
        correct: 'Correct. The reformulation keeps the original distinction and focus.',
        incorrect: 'Preserve both parts of the contrast and do not strengthen the source beyond what the sentence says.',
      },
    },
    {
      id: 'adam-b2-language-1-production',
      type: 'reflection',
      title: 'Frame a Short Explanatory Paragraph',
      instructions: 'Write or say a 4–6 sentence B2 paragraph about a historical, literary or religious account you know. Use at least three Chapter 1 language resources: source-grounding, passive focus, “not ... but ...”, “rather than”, “is portrayed as”, or another clear contrast marker. Do not retell the Quick Challenge answer.',
      question: 'Can you control source, information focus and contrast in one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong response identifies its source, chooses active/passive focus deliberately, and uses contrast to refine meaning rather than simply listing facts.',
      feedback: {
        correct: 'Use the target language to make your paragraph precise, connected and appropriately qualified.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Source — Begin with “According to ...” or “Based on ...”.', mode: 'Individual' },
        { question: 'Focus — Include one passive sentence where the event or subject deserves the main focus.', mode: 'Individual' },
        { question: 'Contrast — Use “not ... but ...” or “rather than” to refine one idea.', mode: 'Individual' },
        { question: 'Representation — If appropriate, use “is portrayed/presented as ...” without turning interpretation into an unqualified fact.', mode: 'Pair' },
      ],
    },
  ],
};
