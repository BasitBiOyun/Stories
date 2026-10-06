import type { Exercise } from '../../../../types';

/**
 * Chapter-specific A2 Language Focus for Moses — Chapters 1–2.
 * Each chapter follows Look → Practise → Use. Every quoted sentence comes
 * from the English chapter text.
 */
export const mosesA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-a2-language-1-past-description',
      type: 'word-bank',
      title: 'Was, Were or Believed?',
      instructions: 'Fill each gap from the word bank. Two words are not needed.',
      question: 'Which past word fits each sentence?',
      fillBlanksText: 'Pharaoh [blank] the king of Egypt. … The Children of Israel [blank] the children of Jacob (pbuh). … They [blank] in one Allah, like Prophet Abraham (pbuh).',
      wordBank: ['was', 'were', 'believed', 'is', 'thought'],
      correctAnswer: ['was', 'were', 'believed'],
      explanation: 'Use was with one person (Pharaoh was …) and were with more than one person (They were …). We say believe in Allah, and the story is in the past, so it is believed in.',
      feedback: {
        correct: 'Correct. Was for one person, were for a group, and believed in for faith.',
        incorrect: 'Look at Chapter 1 again. Is the subject one person or a group? Which verb goes with “in one Allah”?',
      },
    },
    {
      id: 'moses-a2-language-1-belief-thought',
      type: 'error-correction',
      title: 'Did Not + Verb',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'What comes after “did not”?',
      errorItems: [
        {
          sentence: 'He did not believed in Allah.',
          error: 'did not believed',
          options: ['not believe', 'did not believe', 'did not believing'],
          answer: 1,
        },
        {
          sentence: 'So, they did not thought the king was a god.',
          error: 'did not thought',
          options: ['did not think', 'did not thinking', 'not think'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After did not, use the base verb: did not believe, did not think. Did already shows the past, so the next verb does not change.',
      feedback: {
        correct: 'Well done. After did not, the verb stays in the base form.',
        incorrect: 'Find the two sentences in Chapter 1. After did not, use the verb without -ed or a past form.',
      },
    },
    {
      id: 'moses-a2-language-1-cause-result',
      type: 'sentence-building',
      title: 'Why Was the King Rude?',
      instructions: 'Tap the pieces to make the sentence from Chapter 1.',
      question: 'Where does “Because of his fear” go?',
      sentenceChunks: ['Because of', 'his fear,', 'he was rude', 'to the Children of Israel.'],
      correctAnswer: null,
      explanation: 'Because of + a noun (his fear) gives the reason. Here the reason comes first, then a comma, then the result: he was rude to the Children of Israel.',
      feedback: {
        correct: 'Correct. The reason comes first, then the result.',
        incorrect: 'Read the end of Chapter 1. Start with the reason: Because of …',
      },
    },
    {
      id: 'moses-a2-language-1-production', type: 'reflection', title: 'Use It: Describe and Explain',
      instructions: 'Write or say four short sentences about someone you know.', question: 'Can you tell us about a person you know?',
      correctAnswer: null, explanation: 'Use was/were, believed/thought, did not + verb and because of where useful.',
      feedback: { correct: 'Keep the meaning clear and the forms accurate.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the person: “My … was …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what they thought: “She/He thought …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what they did not have or do: “She/He did not …”', mode: 'Individual' },
        { question: 'Sentence 4 — Give a reason: “Because of …, …”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'moses-a2-language-2-story-actions',
      type: 'matching',
      title: 'Past Verbs in the Story',
      instructions: 'Match each past verb from Chapter 2 with its base form.',
      question: 'What is the base form of each past verb?',
      matchingHeadings: { left: 'From the chapter', right: 'Base form' },
      matchingPairs: [
        { left: 'had', right: 'have' },
        { left: 'saw', right: 'see' },
        { left: 'came', right: 'come' },
        { left: 'found', right: 'find' },
        { left: 'told', right: 'tell' },
      ],
      correctAnswer: { had: 'have', saw: 'see', came: 'come', found: 'find', told: 'tell' },
      explanation: 'These verbs are irregular: they do not take -ed in the past. The story uses the past form (had, saw, came, found, told) because the events are finished.',
      feedback: {
        correct: 'Correct. You know the base form of each irregular past verb.',
        incorrect: 'Read the sentence in Chapter 2 with each verb. What is the verb in the present? For example, “the king had a dream” → have.',
      },
    },
    {
      id: 'moses-a2-language-2-future-prediction',
      type: 'choose-form',
      title: 'What Will Happen?',
      instructions: 'Choose the correct word for each sentence from Chapter 2.',
      question: 'Is it about the past or the future?',
      formChoices: [
        { sentence: 'The fire came from Jerusalem and [choice] the houses of the Egyptians.', options: ['burns', 'burnt', 'burn'], answer: 1 },
        { sentence: 'They said, “A boy [choice] be born from the Children of Israel …”', options: ['was', 'is', 'will'], answer: 2 },
        { sentence: '“… and he [choice] kill the Egyptians.”', options: ['will', 'is', 'was'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'The dream is a finished event, so it uses the past: burnt. The helpers and magicians talk about the future, so they use will + base verb: will be born, will kill.',
      feedback: {
        correct: 'Correct. Past for the dream, will for the prediction.',
        incorrect: 'Read Chapter 2 again. Is it the dream (past) or what the helpers say will happen (future)?',
      },
    },
    {
      id: 'moses-a2-language-2-orders-and-when',
      type: 'sequencing',
      title: 'Put the Events in Order',
      instructions: 'Put the sentences from Chapter 2 in story order.',
      question: 'What happened first, next and last?',
      sequencingItems: [
        { id: '1', text: 'One day the king had a dream.' },
        { id: '2', text: 'The king woke up and called his helpers and magicians.' },
        { id: '3', text: 'The king asked about the dream.' },
        { id: '4', text: 'Then, the king told his soldiers, “Kill all the baby boys of the Children of Israel.”' },
        { id: '5', text: 'When the soldiers found baby boys, they killed them.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: 'Past verbs tell the events in order. One day starts the event, Then shows the next step, and When joins two past actions: First they found, then they killed.',
      feedback: {
        correct: 'Correct. You followed the events from the dream to the soldiers’ actions.',
        incorrect: 'Read Chapter 2 again. Look for One day, Then and When to find the order.',
      },
    },
    {
      id: 'moses-a2-language-2-production', type: 'reflection', title: 'Use It: Prediction and Instruction',
      instructions: 'Say three short sentences about a rainy day.', question: 'What will happen, and what should people do?',
      correctAnswer: null, explanation: 'Use will + verb, one imperative and When + past..., past....',
      feedback: { correct: 'Use each form for its correct job.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what will happen: “It will …”', mode: 'Individual' },
        { question: 'Sentence 2 — Tell someone what to do: “Take …”', mode: 'Individual' },
        { question: 'Sentence 3 — Join two past actions: “When …, we …”', mode: 'Pair' },
      ],
    },
  ],
};
