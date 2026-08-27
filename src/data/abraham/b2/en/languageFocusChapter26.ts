import type { Exercise } from '../../../../types';

/** Chapter 26 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter26: Record<number, Exercise[]> = {
  26: [
    {
      id: 'abraham-b2-language-26-lineage-contrast',
      type: 'matching',
      title: 'Track Parallel Lineage and Contrast',
      instructions: 'Match each expression with the discourse relationship it creates.',
      question: 'How does the chapter organize two family lines without presenting them as one undifferentiated list?',
      matchingPairs: [
        { left: "From Ishmael's descendants came Prophet Muhammad", right: 'introduces one branch of descent and its later outcome' },
        { left: "while from Isaac's came Moses and Jesus", right: 'places a second branch in parallel contrast through “while”' },
        { left: "these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam", right: 'looks forward from a past point and summarizes the later significance of both branches' },
        { left: 'another son from his first wife, Sarah', right: 'adds a new family development while maintaining reference to the existing family structure' },
      ],
      correctAnswer: {
        "From Ishmael's descendants came Prophet Muhammad": 'introduces one branch of descent and its later outcome',
        "while from Isaac's came Moses and Jesus": 'places a second branch in parallel contrast through “while”',
        "these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam": 'looks forward from a past point and summarizes the later significance of both branches',
        'another son from his first wife, Sarah': 'adds a new family development while maintaining reference to the existing family structure',
      },
      explanation: 'The paragraph uses parallel lineage phrases and “while” to distinguish two branches, while “would be” presents later outcomes from an earlier narrative viewpoint.',
      feedback: { correct: 'Correct. You identified how reference, parallelism and future-in-the-past organize the family lines.', incorrect: 'Look for the two “from ... came ...” structures and the role of “while” between them.' },
    },
    {
      id: 'abraham-b2-language-26-reported-plan',
      type: 'multiple-choice',
      title: 'Read Instruction and Future Plan',
      instructions: 'Choose the best analysis of how reported speech and future meaning work together.',
      question: 'What is the main effect of “Allah told Abraham that he should take Hajar and Ishmael...” followed by “He informed Abraham that He would construct the sacred city... and make its water run for Ishmael”?',
      options: [
        'It moves from a reported instruction to a reported future plan, keeping both statements inside Abraham’s past viewpoint.',
        'It shifts into direct quotation and reports two completed past events.',
        'It mainly expresses Abraham’s personal uncertainty about whether he should travel.',
      ],
      correctAnswer: 0,
      explanation: '“Should take” reports an instruction, while “would construct / make” presents later intended outcomes from the same past narrative viewpoint.',
      feedback: { correct: 'Correct. The chapter separates instruction from future plan without leaving the reported-speech frame.', incorrect: 'Focus on the difference between what Abraham was instructed to do and what was said would happen later.' },
    },
    {
      id: 'abraham-b2-language-26-journey-progression',
      type: 'matching',
      title: 'Build Movement Through Time and Space',
      instructions: 'Match each expression with the way it advances or frames the journey.',
      question: 'How does the chapter compress preparation, continuing circumstances and arrival into one coherent movement sequence?',
      matchingPairs: [
        { left: 'In a few days, Abraham set out', right: 'marks the start of the journey after a short preparation period' },
        { left: 'Hajar was still nursing Ishmael and the child was still breastfeeding', right: 'supplies continuing background circumstances during the journey' },
        { left: 'walked through cultivated land, desert, and mountains', right: 'compresses movement across contrasting landscapes through a coordinated list' },
        { left: 'until he reached the desert ... and came to an uncultivated valley', right: 'uses “until” to mark the endpoint and then specifies the destination more precisely' },
      ],
      correctAnswer: {
        'In a few days, Abraham set out': 'marks the start of the journey after a short preparation period',
        'Hajar was still nursing Ishmael and the child was still breastfeeding': 'supplies continuing background circumstances during the journey',
        'walked through cultivated land, desert, and mountains': 'compresses movement across contrasting landscapes through a coordinated list',
        'until he reached the desert ... and came to an uncultivated valley': 'uses “until” to mark the endpoint and then specifies the destination more precisely',
      },
      explanation: 'The paragraph alternates main movement with background circumstance. “Still” keeps one state active, while “until” closes the movement sequence at its destination.',
      feedback: { correct: 'Correct. You separated background circumstance from the main journey line.', incorrect: 'Ask which clauses describe continuing conditions and which verbs actually move the journey forward.' },
    },
    {
      id: 'abraham-b2-language-26-production',
      type: 'reflection',
      title: 'Write a Planned Journey with Layered Viewpoint',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a family or team receiving an instruction to move somewhere for a future purpose. Use one reported instruction with “told ... that ... should”, one future-in-the-past form with “would”, one parallel contrast with “while”, one continuing-background form with “was/were still ...”, and one “until” clause that marks the endpoint of a journey. Keep the paragraph coherent and make the future plan clearly different from the actions already completed.',
      question: 'Can you combine reported instruction, future plan, contrast, background and movement in one connected B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish the instruction from the later intended result, keep the narrative viewpoint consistently in the past, and use the movement sequence to reach a clearly marked destination.',
      feedback: { correct: 'Check that “would” is anchored to a past viewpoint and that “while” connects genuinely parallel information.', incorrect: '' },
      discussionPrompts: [
        { question: 'Instruction — What was the group told that it should do?', mode: 'Individual' },
        { question: 'Plan — What was said would happen later?', mode: 'Pair' },
        { question: 'Contrast — What two parallel outcomes or groups can you connect with “while”?', mode: 'Pair' },
        { question: 'Journey — What continued in the background until the group reached its destination?', mode: 'Individual' },
      ],
    },
  ],
};
