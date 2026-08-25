import type { Exercise } from '../../../../types';

/** Chapter 5 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'adam-b2-language-5-definition-focus',
      type: 'matching',
      title: 'Define, Clarify and Reframe',
      instructions: 'Match each Chapter 5 expression with the discourse job it performs.',
      question: 'How does the chapter explain ideas precisely without turning the paragraph into a list of facts?',
      matchingPairs: [
        { left: 'which is faith or Islam', right: 'adds a clarifying definition to the preceding idea' },
        { left: 'in other words, Iblis', right: 'restates a reference so the reader can follow the argument' },
        { left: 'that is race, colour, or ethnicity', right: 'specifies what the broader word “origins” includes in this argument' },
        { left: 'All kinds of worldly knowledge are included in this', right: 'extends the scope of the previous category' },
      ],
      correctAnswer: {
        'which is faith or Islam': 'adds a clarifying definition to the preceding idea',
        'in other words, Iblis': 'restates a reference so the reader can follow the argument',
        'that is race, colour, or ethnicity': 'specifies what the broader word “origins” includes in this argument',
        'All kinds of worldly knowledge are included in this': 'extends the scope of the previous category',
      },
      explanation: 'Chapter 5 uses several clarification devices. At B2, learners need to see whether a phrase defines, restates, specifies or broadens an idea, because those choices shape how an argument develops.',
      feedback: {
        correct: 'Correct. You distinguished definition, restatement, specification and extension.',
        incorrect: 'Ask what the second expression does to the first: define it, rename it, make it more specific, or widen its scope.',
      },
    },
    {
      id: 'adam-b2-language-5-cause-contrast-focus',
      type: 'matching',
      title: 'Build Cause and Contrast into an Argument',
      instructions: 'Match each expression with the logical relationship it creates.',
      question: 'How does Chapter 5 move from explanation to the criticism of Iblis’s claim?',
      matchingPairs: [
        { left: 'because such prostration is solely to and for Allah', right: 'gives the reason for rejecting one possible interpretation' },
        { left: 'because the unique knowledge given to Adam ... is different', right: 'supports the explanation with a cause' },
        { left: 'On the other hand', right: 'shifts from the angels’ response to a contrasting perspective' },
        { left: 'yet Adam’s humble origin shows that...', right: 'introduces evidence that challenges the superiority claim' },
      ],
      correctAnswer: {
        'because such prostration is solely to and for Allah': 'gives the reason for rejecting one possible interpretation',
        'because the unique knowledge given to Adam ... is different': 'supports the explanation with a cause',
        'On the other hand': 'shifts from the angels’ response to a contrasting perspective',
        'yet Adam’s humble origin shows that...': 'introduces evidence that challenges the superiority claim',
      },
      explanation: 'The paragraph is argumentative as well as narrative. “Because” justifies interpretations, “on the other hand” changes viewpoint, and “yet” sets evidence against a claim.',
      feedback: {
        correct: 'Good. You traced how reasons and contrasts structure the argument.',
        incorrect: 'Look for the difference between giving a reason, changing perspective, and challenging a claim with opposing evidence.',
      },
    },
    {
      id: 'adam-b2-language-5-reformulation',
      type: 'multiple-choice',
      title: 'Reformulate the Argument Without Distorting It',
      instructions: 'Choose the reformulation that preserves the chapter’s reasoning and information focus.',
      question: 'Which sentence best preserves the logic of the second paragraph without merely repeating the Quick Challenge analysis?',
      options: [
        'The paragraph presents Iblis’s hidden arrogance as becoming visible when Adam appears, links his claim of superiority to material origin, and then contrasts that claim with the chapter’s emphasis on the common and humble origin of human beings.',
        'The paragraph accepts material origin as the correct basis for ranking people and uses Adam’s origin as proof of permanent inequality.',
        'The paragraph says Iblis’s arrogance was newly created after Adam appeared and had no relation to his earlier belief about origin.',
      ],
      correctAnswer: 0,
      explanation: 'The first option preserves the hidden-to-visible development, the causal basis of the superiority claim, and the contrast used to challenge it.',
      feedback: {
        correct: 'Correct. You preserved the argument without strengthening or reversing it.',
        incorrect: 'Keep three parts together: the previously hidden attitude, its basis in origin, and the contrast that challenges that basis.',
      },
    },
    {
      id: 'adam-b2-language-5-production',
      type: 'reflection',
      title: 'Challenge a Weak Criterion',
      instructions: 'Write or say a 6–8 sentence B2 paragraph about a claim that judges people, ideas or achievements by a weak criterion. Use at least four Chapter 5 resources: a clarification phrase such as “which is / in other words / that is”, one “because” clause, a contrastive shift such as “on the other hand”, and “yet” or another marker that introduces evidence against the claim. Do not retell the chapter’s answer about Iblis.',
      question: 'Can you explain a claim, expose the criterion behind it and challenge it through a coherent contrast?',
      correctAnswer: null,
      explanation: 'A strong response identifies the criterion precisely, clarifies what it means, explains why someone might use it, and then introduces evidence or reasoning that shows why the criterion is insufficient.',
      feedback: {
        correct: 'Keep the logic visible: clarify → give the reason → shift perspective → challenge the criterion.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Clarify — Define one key term with “which is”, “in other words” or “that is”.', mode: 'Individual' },
        { question: 'Reason — Use “because” to make the basis of the claim explicit.', mode: 'Individual' },
        { question: 'Shift — Use “on the other hand” only when you genuinely introduce a contrasting perspective.', mode: 'Individual' },
        { question: 'Challenge — Use “yet”, “however” or an equivalent marker to introduce evidence against the weak criterion.', mode: 'Pair' },
      ],
    },
  ],
};
