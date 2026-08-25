import type { Exercise } from '../../../../types';

/** Chapter 9 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'adam-b2-language-9-cause-response',
      type: 'matching',
      title: 'Track Regret, Response and Mercy',
      instructions: 'Match each Chapter 9 expression with the relationship it creates in the argument.',
      question: 'How does the chapter connect inner recognition with an outward response and its result?',
      matchingPairs: [
        { left: 'Adam severely regretted what he had done.', right: 'presents the internal recognition that begins the response' },
        { left: 'He immediately turned towards Allah.', right: 'shows a prompt change of direction after recognizing the wrong' },
        { left: 'His regret itself was the reason for Allah’s mercy upon him.', right: 'states an explicit cause-and-result interpretation' },
        { left: 'so his Lord pardoned him', right: 'marks the outcome that follows the act of returning and asking forgiveness' },
      ],
      correctAnswer: {
        'Adam severely regretted what he had done.': 'presents the internal recognition that begins the response',
        'He immediately turned towards Allah.': 'shows a prompt change of direction after recognizing the wrong',
        'His regret itself was the reason for Allah’s mercy upon him.': 'states an explicit cause-and-result interpretation',
        'so his Lord pardoned him': 'marks the outcome that follows the act of returning and asking forgiveness',
      },
      explanation: 'The chapter does more than list events: it builds a moral process from recognition to action and then to an explicitly stated result.',
      feedback: {
        correct: 'Correct. You followed recognition → response → cause → result.',
        incorrect: 'Ask which expression names an inner state, which shows action, which gives a reason, and which gives the outcome.',
      },
    },
    {
      id: 'adam-b2-language-9-condition-consequence',
      type: 'matching',
      title: 'Read Conditional Meaning Precisely',
      instructions: 'Match the conditional language with the meaning it contributes.',
      question: 'How does the quoted prayer express dependence, consequence and urgency?',
      matchingPairs: [
        { left: 'Unless You forgive us', right: 'sets forgiveness as a necessary condition for avoiding the negative outcome' },
        { left: 'and have mercy on us', right: 'adds a second necessary element within the same appeal' },
        { left: 'we will be among the losers', right: 'states the consequence expected if the condition is not met' },
        { left: 'Our Lord, we have done wrong to ourselves.', right: 'grounds the appeal in direct acknowledgment of responsibility' },
      ],
      correctAnswer: {
        'Unless You forgive us': 'sets forgiveness as a necessary condition for avoiding the negative outcome',
        'and have mercy on us': 'adds a second necessary element within the same appeal',
        'we will be among the losers': 'states the consequence expected if the condition is not met',
        'Our Lord, we have done wrong to ourselves.': 'grounds the appeal in direct acknowledgment of responsibility',
      },
      explanation: 'The conditional structure does not shift blame. It combines acknowledgment of wrongdoing with a clear condition-consequence relationship in the appeal.',
      feedback: {
        correct: 'Good. You interpreted both the grammar and the stance of the prayer.',
        incorrect: 'Separate the acknowledgment, the condition, the added appeal for mercy and the consequence.',
      },
    },
    {
      id: 'adam-b2-language-9-obligation-process',
      type: 'multiple-choice',
      title: 'From Description to General Principle',
      instructions: 'Choose the explanation that best describes the final paragraph’s language move.',
      question: 'What happens when the chapter moves from “humans are open to sinning” to “they must recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah”?',
      options: [
        'It moves from a general description of human vulnerability to a modal statement of expected moral response.',
        'It changes from a historical report into a claim that humans never make mistakes.',
        'It replaces personal responsibility with an explanation based entirely on external causes.',
      ],
      correctAnswer: 0,
      explanation: '“Are open to” describes possibility or vulnerability, while “must” gives a strong expectation or obligation. The coordinated verbs then define the response as a process.',
      feedback: {
        correct: 'Correct. You identified the shift from description to obligation.',
        incorrect: 'Compare what “are open to” says about possibility with what “must” says about required response.',
      },
    },
    {
      id: 'adam-b2-language-9-production',
      type: 'reflection',
      title: 'Write a Responsibility-and-Recovery Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which a person or group makes a mistake and responds responsibly. Do not retell Chapter 9. First describe the mistake without hiding responsibility. Use a conditional pattern such as “unless... / will...” to show a consequence. Then use a cause-result expression such as “because”, “the reason for... was...”, or “so...”. Include one sentence that moves from general possibility to obligation using language such as “people can...” followed by “they must...”. End by describing a concrete change of direction rather than only a feeling of regret.',
      question: 'Can you distinguish recognition, consequence, cause, obligation and corrective action in one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response shows how grammar organises responsibility: acknowledgment → condition/consequence → cause/result → obligation → changed action.',
      feedback: {
        correct: 'Keep each relationship explicit and make the final action more concrete than simply saying someone felt sorry.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Acknowledgment — State what went wrong without shifting blame.', mode: 'Individual' },
        { question: 'Condition — Use “unless...” or an equivalent conditional to show a consequence.', mode: 'Individual' },
        { question: 'Cause/result — Explain why the response changes what happens next.', mode: 'Individual' },
        { question: 'Obligation — Move from what people can do to what they must do in this situation.', mode: 'Pair' },
      ],
    },
  ],
};
