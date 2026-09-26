import type { Exercise } from '../../../../types';

/**
 * Chapter-specific English Language Focus for Mecca A2.
 * Each chapter follows LOOK → PRACTISE → USE: learners first look at real
 * chapter sentences, then practise the same language in context, then use it
 * in their own short sentences. Every quoted sentence comes from the chapter.
 */
export const meccaA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mecca-a2-language-1-biography', type: 'drag-drop', title: 'Fact or Belief?',
      instructions: 'Read Chapter 1 again. Is each part a fact in the story, or only what people in Mecca thought? Put it in the right group.',
      question: 'Which parts are facts, and which parts are only what people thought?',
      dragDropGroups: [
        { group: 'A fact in the story', items: ['Bilal was a black slave.', 'His mother was an Ethiopian woman.', 'He was also the first person to give the Adhan …'] },
        { group: 'What people in Mecca thought', items: ['Bilal was just a poor slave.', 'he had no power', '… would never become someone important.'] },
      ],
      correctAnswer: {
        'A fact in the story': ['Bilal was a black slave.', 'His mother was an Ethiopian woman.', 'He was also the first person to give the Adhan …'],
        'What people in Mecca thought': ['Bilal was just a poor slave.', 'he had no power', '… would never become someone important.'],
      },
      explanation: 'After “People in Mecca thought …” and “They thought …”, the chapter tells us an old belief, not a fact. “Thought + sentence” reports what people believed. The story shows the belief was wrong: Bilal became a great man.',
      feedback: {
        correct: 'Correct. You found the facts and the old beliefs.',
        incorrect: 'Look at the third paragraph. Find “People in Mecca thought …” and “They thought …”. The words after them are a belief.',
      },
    },
    {
      id: 'mecca-a2-language-1-belief', type: 'matching', title: 'Past Forms in Chapter 1',
      instructions: 'Match each verb with its past form from Chapter 1.',
      question: 'Which past forms tell Bilal’s story?',
      matchingHeadings: { left: 'Base verb', right: 'Past form in Chapter 1' },
      matchingPairs: [
        { left: 'say', right: 'said' },
        { left: 'leave', right: 'left' },
        { left: 'think', right: 'thought' },
        { left: 'have', right: 'had' },
      ],
      correctAnswer: { say: 'said', leave: 'left', think: 'thought', have: 'had' },
      explanation: 'These verbs are irregular. Their past forms do not end in -ed: say → said, leave → left, think → thought, have → had.',
      feedback: {
        correct: 'Correct. You know four irregular past forms from the chapter.',
        incorrect: 'Find the verbs in Chapter 1: “openly said”, “never left”, “thought Bilal was …”, “had no power”.',
      },
    },
    {
      id: 'mecca-a2-language-1-change', type: 'choose-form', title: 'Background and Change',
      instructions: 'Choose the correct word for each sentence from Chapter 1.',
      question: 'Which words give background facts and show a change?',
      formChoices: [
        { sentence: 'He was born [choice] Mecca.', options: ['on', 'in', 'at'], answer: 1 },
        { sentence: 'His father, Rebâh, and his mother, Hamâme, [choice] also slaves.', options: ['was', 'were', 'be'], answer: 1 },
        { sentence: 'But Islam [choice] him a free and great man.', options: ['did', 'was', 'made'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'We say “was born in + city”. We use “were” with two people (his father and his mother). “Made + person + adjective/noun” shows a change: Islam made him free and great.',
      feedback: {
        correct: 'Correct. You chose the right words for background and change.',
        incorrect: 'Check the second paragraph for the birthplace and the parents. Check the end of the chapter for the change.',
      },
    },
    {
      id: 'mecca-a2-language-1-production', type: 'reflection', title: 'Use the Patterns',
      instructions: 'Write or say four short A2 sentences about a real or imaginary person.', question: 'Can you combine background, belief and change?', correctAnswer: null,
      explanation: 'Use chapter language rather than retelling the Quick Challenge.',
      feedback: { correct: 'Use at least three different patterns.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “was born in ...”.', mode: 'Individual' },
        { question: 'Add one “was/were ...” background fact.', mode: 'Individual' },
        { question: 'Report an old belief with “People thought ...”.', mode: 'Individual' },
        { question: 'Show a change with “made ...”.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'mecca-a2-language-2-past-society', type: 'multiple-choice', title: 'Two Different Lives',
      instructions: 'Read the sentences from Chapter 2. Then choose the best answer.',
      question: '“They used gold plates and silver cups. But many poor people lived in need.” What does “But” show here?',
      options: [
        'The second sentence is the reason for the first one.',
        'The second sentence shows a very different situation.',
        'The second sentence happened later in time.',
      ],
      correctAnswer: 1,
      explanation: '“But” joins two different or opposite ideas. Rich people used gold and silver, but poor people did not have enough. The word shows the big gap between the two groups.',
      feedback: {
        correct: 'Correct. “But” shows a different, opposite situation.',
        incorrect: 'Read the second paragraph again. Compare the life of the rich people with the life of the poor people.',
      },
    },
    {
      id: 'mecca-a2-language-2-contrast', type: 'word-bank', title: 'Describing the Past',
      instructions: 'Complete the lines from Chapter 2 with words from the bank. Two words are not needed.',
      question: 'Which words give a name, say what existed and show quantity?',
      fillBlanksText: 'The period before Islam [blank] the Age of Ignorance, or Jahiliyyah. … [blank] no real peace and justice in society. … Rich people had [blank] money and lived in luxury.',
      wordBank: ['was called', 'There was', 'a lot of', 'many', 'There were'],
      correctAnswer: ['was called', 'There was', 'a lot of'],
      explanation: '“Was called” gives the name of something. “There was” says that something existed (or did not exist) in the past; “peace and justice” takes “was”. We say “a lot of money”, not “many money”, because we cannot count money like this.',
      feedback: {
        correct: 'Correct. You chose the words for a name, a past situation and a quantity.',
        incorrect: 'Read the first two paragraphs of Chapter 2. Check the word after each blank: “money” cannot follow “many”.',
      },
    },
    {
      id: 'mecca-a2-language-2-result', type: 'sentence-building', title: 'Cause and Result',
      instructions: 'Put the parts in order to make the sentence from Chapter 2.',
      question: 'How does the chapter show the result of the unfair money system?',
      sentenceChunks: ['Because of this,', 'the rich', 'became richer', 'and the poor', 'became poorer.'],
      correctAnswer: null,
      explanation: '“Because of this” gives the result of something the writer said before (the unfair extra money). “Became + richer/poorer” shows a change over time.',
      feedback: {
        correct: 'Correct. The sentence starts with the cause and ends with the result.',
        incorrect: 'Start with the words that link back to the unfair money. Look at the last sentence of Chapter 2.',
      },
    },
    {
      id: 'mecca-a2-language-2-production', type: 'reflection', title: 'Describe a Past Community',
      instructions: 'Write or say four short A2 sentences about an imaginary town in the past.', question: 'Can you describe a condition, contrast two groups and give one result?', correctAnswer: null,
      explanation: 'Use “there was”, quantity language, “but”, and “because of this”.',
      feedback: { correct: 'Keep the description short and connected.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “There was ...”.', mode: 'Individual' },
        { question: 'Add “many ...” or “a lot of ...”.', mode: 'Individual' },
        { question: 'Contrast two situations with “but”.', mode: 'Individual' },
        { question: 'End with “Because of this, ... became ...”.', mode: 'Pair' },
      ],
    },
  ],
};
