import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific Language Focus work.
 * Each chapter is read before authoring; activities practise language that is
 * genuinely visible and useful in that chapter instead of repeating comprehension.
 */
export const adamA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-a2-language-1-story-past-actions',
      type: 'matching',
      title: 'Building the Story in the Past',
      instructions: 'Match each base verb with the past form used in Chapter 1.',
      question: 'Which past forms help the chapter tell the creation story step by step?',
      matchingPairs: [
        { left: 'create', right: 'created' },
        { left: 'tell', right: 'told' },
        { left: 'say', right: 'said' },
        { left: 'begin', right: 'began' },
      ],
      correctAnswer: {
        create: 'created',
        tell: 'told',
        say: 'said',
        begin: 'began',
      },
      explanation: 'Chapter 1 tells finished events in sequence, so it repeatedly uses past forms such as “created”, “told”, “said” and “began”.',
      feedback: {
        correct: 'Good. You identified the main past-story forms from the chapter.',
        incorrect: 'Return to the creation paragraphs and look for what Allah and the angels did.',
      },
    },
    {
      id: 'adam-a2-language-1-going-to-future',
      type: 'matching',
      title: 'Talking about What Will Happen',
      instructions: 'Match each Chapter 1 chunk with what it expresses.',
      question: 'How does “be going to” help the chapter talk about a future plan or future role?',
      matchingPairs: [
        { left: 'was going to create a human', right: 'a future plan announced in the past' },
        { left: 'is going to become the ruler on earth', right: 'a future role' },
        { left: 'is going to live on earth for many years', right: 'a future situation' },
      ],
      correctAnswer: {
        'was going to create a human': 'a future plan announced in the past',
        'is going to become the ruler on earth': 'a future role',
        'is going to live on earth for many years': 'a future situation',
      },
      explanation: 'The chapter uses “be going to + verb” to look forward from a point in the story. The form changes with the time of the sentence: “was going to” in past narration and “is going to” in the quoted announcement.',
      feedback: {
        correct: 'Correct. You connected each “going to” chunk with its function.',
        incorrect: 'Read the announcement to the angels again and ask whether each chunk describes a plan, role or future situation.',
      },
    },
    {
      id: 'adam-a2-language-1-story-links',
      type: 'matching',
      title: 'Sequence, Reason and Result',
      instructions: 'Match each linker from Chapter 1 with the job it does.',
      question: 'How does the chapter connect events and ideas?',
      matchingPairs: [
        { left: 'After that', right: 'moves the story to the next event' },
        { left: 'Then', right: 'continues the sequence' },
        { left: 'because', right: 'gives a reason' },
        { left: 'Because of this / So', right: 'introduces a result' },
      ],
      correctAnswer: {
        'After that': 'moves the story to the next event',
        Then: 'continues the sequence',
        because: 'gives a reason',
        'Because of this / So': 'introduces a result',
      },
      explanation: 'Chapter 1 uses time linkers to order the story and cause-result linkers to explain why something happened or what happened as a result.',
      feedback: {
        correct: 'Good. You identified how the chapter organises sequence, reason and result.',
        incorrect: 'Look at the sentence around each linker and decide: next event, reason or result?',
      },
    },
    {
      id: 'adam-a2-language-1-retell-creation',
      type: 'reflection',
      title: 'Say It: Retell the Creation Sequence',
      instructions: 'Retell the main sequence in three or four short A2 sentences. Use complete sentences and at least two language patterns from this Language Focus.',
      question: 'Can you explain what happened and what Allah announced would happen next?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses past verbs for finished events, a “going to” chunk for the announced future, and simple linkers such as “After that” or “Then”.',
      feedback: {
        correct: 'Use accurate Chapter 1 language to organise the story clearly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Start with a finished event: “Allah created ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Move the story forward: “After that, He told the angels ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Use the future announcement: “The human is going to ...”', mode: 'Individual' },
        { question: 'Sentence 4 — Add the next event with “Then ...” if you can.', mode: 'Pair' },
      ],
    },
  ],
};
