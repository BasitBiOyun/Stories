import type { Exercise } from '../../../../types';

/** Chapter 7 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'adam-b2-language-7-general-tendency',
      type: 'matching',
      title: 'From One Person to a General Human Tendency',
      instructions: 'Match each Chapter 7 expression with the discourse function it performs.',
      question: 'How does the chapter move from Adam’s individual situation to a broader statement about human vulnerability?',
      matchingPairs: [
        { left: 'man tends to forget', right: 'presents forgetfulness as a recurring human tendency rather than a one-time event' },
        { left: 'His heart changes', right: 'describes an unstable inner state as a general process' },
        { left: 'his determination weakens', right: 'presents resolve as something that can gradually lose strength' },
        { left: 'He took advantage of Adam’s humanity', right: 'links a general human vulnerability to a specific act of manipulation' },
      ],
      correctAnswer: {
        'man tends to forget': 'presents forgetfulness as a recurring human tendency rather than a one-time event',
        'His heart changes': 'describes an unstable inner state as a general process',
        'his determination weakens': 'presents resolve as something that can gradually lose strength',
        'He took advantage of Adam’s humanity': 'links a general human vulnerability to a specific act of manipulation',
      },
      explanation: 'The chapter uses present-simple generalisations to frame vulnerability as a recurring human condition, then connects that general condition to a specific narrative action.',
      feedback: {
        correct: 'Correct. You distinguished general human tendencies from the specific event built on them.',
        incorrect: 'Ask which expressions describe people in general and which one applies that general idea to the chapter’s specific situation.',
      },
    },
    {
      id: 'adam-b2-language-7-cause-purpose-chain',
      type: 'matching',
      title: 'Build a Cause–Purpose Chain',
      instructions: 'Match each expression with the relationship it contributes to the paragraph.',
      question: 'How does Chapter 7 organise motive, exploitation and attempted persuasion as one connected chain?',
      matchingPairs: [
        { left: 'because he thought of Adam ... as the cause of his expulsion', right: 'gives the motive behind Satan’s hostility' },
        { left: 'to remove Adam ... from mercy', right: 'states the intended outcome of the plan' },
        { left: 'to manipulate him', right: 'expresses the purpose of exploiting Adam’s humanity' },
        { left: 'trying to persuade both', right: 'shows an ongoing attempt that accompanies the repeated whispering' },
      ],
      correctAnswer: {
        'because he thought of Adam ... as the cause of his expulsion': 'gives the motive behind Satan’s hostility',
        'to remove Adam ... from mercy': 'states the intended outcome of the plan',
        'to manipulate him': 'expresses the purpose of exploiting Adam’s humanity',
        'trying to persuade both': 'shows an ongoing attempt that accompanies the repeated whispering',
      },
      explanation: 'The paragraph is organised through linked causal and purposive relations: belief creates motive, motive leads to a goal, and the goal is pursued through repeated persuasive action.',
      feedback: {
        correct: 'Good. You tracked motive → purpose → method → continuing attempt.',
        incorrect: 'Look for the difference between explaining why an action happens and stating what the action is intended to achieve.',
      },
    },
    {
      id: 'adam-b2-language-7-possibility-condition-time',
      type: 'multiple-choice',
      title: 'Read Possibility and Time Relations',
      instructions: 'Choose the explanation that best describes how the highlighted forms work together.',
      question: 'What do “What will happen if I eat...?”, “It might truly be...”, “had warned”, and “As soon as Adam had finished eating...” contribute to the chapter?',
      options: [
        'They combine imagined consequence, uncertainty, and earlier-past reference so the narrative moves from possibility to action and then immediate result.',
        'They all describe facts that were already certain before any decision was made.',
        'They remove uncertainty and make every event simultaneous.',
      ],
      correctAnswer: 0,
      explanation: 'The conditional question imagines a consequence, “might” marks uncertainty, and the past-perfect forms place warning or completed action before another past point. Together they structure thought, decision and consequence.',
      feedback: {
        correct: 'Correct. You read modality and tense as tools for organising uncertainty and narrative time.',
        incorrect: 'Separate the functions: imagined condition, uncertain possibility, and an action completed before another past event.',
      },
    },
    {
      id: 'adam-b2-language-7-production',
      type: 'reflection',
      title: 'Write a Vulnerability–Decision–Consequence Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a person who is gradually persuaded into a poor decision. Do not retell Adam and Eve eating from the tree. Begin with one general human tendency using the present simple, explain a motive with “because”, add at least one purpose phrase with “to + verb”, include one imagined condition with “if” and one uncertain possibility with “might”, then use a past-perfect form and “as soon as” to make the final consequence sequence clear.',
      question: 'Can you organise vulnerability, persuasion, uncertainty, decision and consequence through grammar rather than through a list of events?',
      correctAnswer: null,
      explanation: 'A strong response moves coherently from a general tendency to a specific situation, makes motive and purpose explicit, preserves uncertainty before the decision, and then uses tense relations to show what happened first and what followed immediately.',
      feedback: {
        correct: 'Keep the structure visible: general tendency → motive/purpose → possibility → decision → immediate consequence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Generality — Open with a present-simple statement about a recurring human tendency.', mode: 'Individual' },
        { question: 'Motive and purpose — Explain why someone acts and what they hope to achieve.', mode: 'Individual' },
        { question: 'Uncertainty — Use “if” and “might” before the decision to preserve possibility rather than certainty.', mode: 'Individual' },
        { question: 'Narrative time — Use past perfect plus “as soon as” to make the final sequence precise.', mode: 'Pair' },
      ],
    },
  ],
};
