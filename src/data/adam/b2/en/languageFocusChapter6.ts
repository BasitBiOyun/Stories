import type { Exercise } from '../../../../types';

/** Chapter 6 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'adam-b2-language-6-command-boundary',
      type: 'matching',
      title: 'Command, Permission and Boundary',
      instructions: 'Match each Chapter 6 expression with the communicative function it performs.',
      question: 'How does the chapter establish freedom, obligation and restriction without reducing the passage to a list of rules?',
      matchingPairs: [
        { left: 'inhabit the Garden', right: 'establishes a permitted state or place of life' },
        { left: 'eat whatever you wish', right: 'expresses broad permission within that setting' },
        { left: 'do not approach this tree', right: 'sets a clear behavioural boundary' },
        { left: 'allow me until the Day they are raised up', right: 'requests permission limited by a stated time boundary' },
      ],
      correctAnswer: {
        'inhabit the Garden': 'establishes a permitted state or place of life',
        'eat whatever you wish': 'expresses broad permission within that setting',
        'do not approach this tree': 'sets a clear behavioural boundary',
        'allow me until the Day they are raised up': 'requests permission limited by a stated time boundary',
      },
      explanation: 'The chapter combines permission, prohibition and a later request for permission. At B2, the important point is how modality and imperative forms define what is allowed, required or limited in context.',
      feedback: {
        correct: 'Correct. You distinguished permission, prohibition and time-limited permission.',
        incorrect: 'Ask whether the expression opens a possibility, closes one, or asks for permission within a limit.',
      },
    },
    {
      id: 'adam-b2-language-6-contrast-trajectory',
      type: 'matching',
      title: 'Contrast Two Developing Paths',
      instructions: 'Match each expression with the discourse effect it creates.',
      question: 'How does Chapter 6 place Adam’s path and Satan’s path in deliberate contrast?',
      matchingPairs: [
        { left: 'While Satan reached the point of no return...', right: 'sets up one developing path as the background for comparison' },
        { left: 'Adam ... took a path completely different from him', right: 'states the contrasting trajectory explicitly' },
        { left: 'Then I will come to them...', right: 'moves the threat forward from declaration to intended action' },
        { left: 'from before them ... behind them ... right ... left', right: 'uses parallel spatial phrasing to present pressure as surrounding and systematic' },
      ],
      correctAnswer: {
        'While Satan reached the point of no return...': 'sets up one developing path as the background for comparison',
        'Adam ... took a path completely different from him': 'states the contrasting trajectory explicitly',
        'Then I will come to them...': 'moves the threat forward from declaration to intended action',
        'from before them ... behind them ... right ... left': 'uses parallel spatial phrasing to present pressure as surrounding and systematic',
      },
      explanation: 'The paragraph is organised through contrast and progression. “While” frames simultaneous but diverging paths, “completely different” sharpens the contrast, and parallel directional phrases intensify the description of intended opposition.',
      feedback: {
        correct: 'Good. You identified how contrast, progression and parallelism organise the passage.',
        incorrect: 'Look at how the text first contrasts two paths, then expands one of them through a sequence of future actions.',
      },
    },
    {
      id: 'adam-b2-language-6-future-stance',
      type: 'multiple-choice',
      title: 'Read Future Forms as Stance',
      instructions: 'Choose the interpretation that best captures what the future forms do in the quoted speech.',
      question: 'What is the main discourse effect of repeated forms such as “I will surely sit in wait”, “I will come to them”, and “I will deceive them all”?',
      options: [
        'They present a firm declared intention and make the speaker’s future opposition sound deliberate and sustained.',
        'They describe actions that had already happened before Adam entered Paradise.',
        'They express uncertainty about whether the speaker has any intention at all.',
      ],
      correctAnswer: 0,
      explanation: 'The repeated future declarations are not neutral timetable statements. They communicate determination and stance, which shapes how the threat is presented in the discourse.',
      feedback: {
        correct: 'Correct. You read the future forms as a marker of declared determination, not merely future time.',
        incorrect: 'Focus on the speaker’s commitment and attitude, not only on when the action is located in time.',
      },
    },
    {
      id: 'adam-b2-language-6-production',
      type: 'reflection',
      title: 'Write a Contrast with Boundaries and Intentions',
      instructions: 'Write or say a 7–9 sentence B2 paragraph about two people, groups or possible courses of action that move in clearly different directions. Use one permission or boundary expression, one “while” contrast, one explicit statement that one path is different from the other, and at least two future forms that show firm intention rather than simple prediction. Use parallel phrasing once to strengthen the organisation. Do not retell the sequence from the Quick Challenge.',
      question: 'Can you use modality, contrast, future stance and parallelism to organise two diverging paths coherently?',
      correctAnswer: null,
      explanation: 'A strong response makes the boundary clear, establishes the contrast early, develops each path logically, and uses future forms to communicate intention or commitment rather than merely future time.',
      feedback: {
        correct: 'Keep the discourse structure visible: boundary → contrast → declared intention → parallel development.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Boundary — State clearly what is permitted, required or prohibited in the situation.', mode: 'Individual' },
        { question: 'Contrast — Use “while” to place two developing paths side by side.', mode: 'Individual' },
        { question: 'Stance — Use future forms to show a speaker’s firm intention or commitment.', mode: 'Individual' },
        { question: 'Parallelism — Repeat a grammatical pattern to make one part of the argument feel systematic or cumulative.', mode: 'Pair' },
      ],
    },
  ],
};
