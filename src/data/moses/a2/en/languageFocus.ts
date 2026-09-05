import type { Exercise } from '../../../../types';

/** Chapter-specific A2 Language Focus for Moses — Chapters 1–2. */
export const mosesA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-a2-language-1-past-description', type: 'matching', title: 'Describing People in a Past Story',
      instructions: 'Match each Chapter 1 sentence with its language job.', question: 'What does each past form communicate?',
      matchingPairs: [
        { left: 'Moses was a great Messenger of Allah.', right: 'past identity and description' },
        { left: 'Pharaoh was the king of Egypt.', right: 'past role' },
        { left: 'They were the grandchildren of Jacob and Joseph.', right: 'past family relationship' },
        { left: 'He was an unfair and cruel ruler.', right: 'past qualities' },
      ],
      correctAnswer: {
        'Moses was a great Messenger of Allah.': 'past identity and description',
        'Pharaoh was the king of Egypt.': 'past role',
        'They were the grandchildren of Jacob and Joseph.': 'past family relationship',
        'He was an unfair and cruel ruler.': 'past qualities',
      },
      explanation: 'Was and were identify people, roles, relationships and qualities in a past narrative.',
      feedback: { correct: 'Correct.', incorrect: 'Ask whether the sentence gives identity, role, relationship or quality.' },
    },
    {
      id: 'moses-a2-language-1-belief-thought', type: 'multiple-choice', title: 'Belief and Thought',
      instructions: 'Choose the sentence that reports a negative past idea.', question: 'Which sentence uses “did not + base verb” correctly?',
      options: ['They did not think the king was a god.', 'They did not thought the king was a god.', 'They not think the king was a god.'], correctAnswer: 0,
      explanation: 'After did not, use the base verb: did not think.', feedback: { correct: 'Correct.', incorrect: 'Use did not + base verb.' },
    },
    {
      id: 'moses-a2-language-1-cause-result', type: 'sequencing', title: 'Cause and Result',
      instructions: 'Put the chunks in order.', question: 'How does Chapter 1 connect fear with cruel treatment?',
      sequencingItems: [
        { id: '1', text: 'The king feared the Children of Israel.' },
        { id: '2', text: 'Because of his fear,' },
        { id: '3', text: 'he was rude to them' },
        { id: '4', text: 'and forced them to do dangerous work.' },
      ],
      correctAnswer: ['1', '2', '3', '4'], explanation: 'Because of + noun introduces a cause before a result.',
      feedback: { correct: 'Correct.', incorrect: 'Start with the fear, then give the result.' },
    },
    {
      id: 'moses-a2-language-1-production', type: 'reflection', title: 'Use It: Describe and Explain',
      instructions: 'Write or say three or four short A2 sentences using Chapter 1 patterns in a new situation.', question: 'Can you describe people, state an idea and give one reason?',
      correctAnswer: null, explanation: 'Use was/were, believed/thought, did not + verb and because of where useful.',
      feedback: { correct: 'Keep the meaning clear and the forms accurate.', incorrect: '' },
      discussionPrompts: [
        { question: 'Describe one person with was/were.', mode: 'Individual' },
        { question: 'State one belief or thought.', mode: 'Individual' },
        { question: 'Add one negative past idea.', mode: 'Individual' },
        { question: 'Give one reason with because of.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'moses-a2-language-2-story-actions', type: 'matching', title: 'Following Past Actions',
      instructions: 'Match each Chapter 2 sentence with its job in the sequence.', question: 'How do past verbs move the story?',
      matchingPairs: [
        { left: 'The king had a dream.', right: 'starts the event' },
        { left: 'He saw a fire in his vision.', right: 'reports what he experienced' },
        { left: 'The king woke up and called his helpers.', right: 'shows the next actions' },
        { left: 'He asked about the dream.', right: 'shows how he looked for an explanation' },
      ],
      correctAnswer: {
        'The king had a dream.': 'starts the event', 'He saw a fire in his vision.': 'reports what he experienced',
        'The king woke up and called his helpers.': 'shows the next actions', 'He asked about the dream.': 'shows how he looked for an explanation',
      },
      explanation: 'Simple past verbs move completed story events forward.', feedback: { correct: 'Correct.', incorrect: 'Follow the events from dream to reaction.' },
    },
    {
      id: 'moses-a2-language-2-future-prediction', type: 'fill-blanks', title: 'Future Prediction',
      instructions: 'Complete the prediction with one word.', question: 'Which helper verb expresses the future prediction?',
      fillBlanksText: 'A boy [blank] be born from the Children of Israel.', correctAnswer: 'will',
      explanation: 'Will + base verb expresses a future prediction.', feedback: { correct: 'Correct.', incorrect: 'Use the future helper before be.' },
    },
    {
      id: 'moses-a2-language-2-orders-and-when', type: 'sequencing', title: 'Order and Later Action',
      instructions: 'Put the chunks in order.', question: 'How does the chapter connect a command with what happened later?',
      sequencingItems: [
        { id: '1', text: 'Pharaoh told his soldiers:' }, { id: '2', text: '“Kill all the baby boys.”' },
        { id: '3', text: 'When they found baby boys,' }, { id: '4', text: 'they killed them.' },
      ],
      correctAnswer: ['1', '2', '3', '4'], explanation: 'An imperative gives a direct order; when connects a later situation with its result.',
      feedback: { correct: 'Correct.', incorrect: 'Start with the speaker and command, then the when clause.' },
    },
    {
      id: 'moses-a2-language-2-production', type: 'reflection', title: 'Use It: Prediction and Instruction',
      instructions: 'Create a harmless new situation with three short A2 sentences.', question: 'Can you make a prediction, give a safe instruction and connect two past actions with when?',
      correctAnswer: null, explanation: 'Use will + verb, one imperative and When + past..., past....',
      feedback: { correct: 'Use each form for its correct job.', incorrect: '' },
      discussionPrompts: [
        { question: 'Make one prediction with will.', mode: 'Individual' },
        { question: 'Give one safe command.', mode: 'Individual' },
        { question: 'Connect two past actions with when.', mode: 'Pair' },
      ],
    },
  ],
};
