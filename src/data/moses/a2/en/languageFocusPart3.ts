import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-a2-language-4-past-actions', type: 'matching', title: 'Past Actions and Place', instructions: 'Match each expression with its job.', question: 'How does Chapter 4 connect action and place?',
      matchingPairs: [
        { left: 'The basket came to the waterside.', right: 'movement to a place' },
        { left: 'The servants saw the basket and took it to the king and queen.', right: 'two completed past actions' },
        { left: 'Moses’s sister ran to the Queen.', right: 'movement toward a person' },
        { left: 'She lived nearby.', right: 'past location' },
      ],
      correctAnswer: {
        'The basket came to the waterside.': 'movement to a place', 'The servants saw the basket and took it to the king and queen.': 'two completed past actions',
        'Moses’s sister ran to the Queen.': 'movement toward a person', 'She lived nearby.': 'past location',
      },
      explanation: 'Past verbs and place expressions show movement, completed actions and location.', feedback: { correct: 'Correct.', incorrect: 'Look at the verb and place in each sentence.' },
    },
    {
      id: 'moses-a2-language-4-different-from', type: 'fill-blanks', title: 'Contrasting People', instructions: 'Complete the contrast.', question: 'Which word completes the Chapter 4 pattern?',
      fillBlanksText: 'The queen was different [blank] her husband.', correctAnswer: 'from', explanation: 'Use different from + person/thing.', feedback: { correct: 'Correct.', incorrect: 'The fixed phrase is different from.' },
    },
    {
      id: 'moses-a2-language-4-will-command', type: 'multiple-choice', title: 'Decision or Command?', instructions: 'Choose the sentence that gives a direct command.', question: 'Which sentence is an imperative?',
      options: ['Find a nurse for the baby.', 'I will take him to the palace.', 'She will be a good nurse.'], correctAnswer: 0,
      explanation: 'An imperative begins with the base verb and gives a direct instruction.', feedback: { correct: 'Correct.', incorrect: 'Look for the sentence that tells someone what to do.' },
    },
    {
      id: 'moses-a2-language-4-production', type: 'reflection', title: 'Use It: A Helpful Plan', instructions: 'Create a new A2 situation using Chapter 4 patterns.', question: 'Can you describe a helpful person, contrast people, state a decision and give an instruction?',
      correctAnswer: null, explanation: 'Use be + adjective, different from, will + verb and an imperative.', feedback: { correct: 'Keep the example new and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Describe one person with two adjectives.', mode: 'Individual' }, { question: 'Use different from once.', mode: 'Individual' },
        { question: 'State one decision with will.', mode: 'Individual' }, { question: 'Give one safe command.', mode: 'Pair' },
      ],
    },
  ],
  5: [
    {
      id: 'moses-a2-language-5-care-growth', type: 'matching', title: 'Care and Change', instructions: 'Match each expression with its meaning.', question: 'How does Chapter 5 describe care and change over time?',
      matchingPairs: [
        { left: 'take care of the baby', right: 'care for and protect someone' }, { left: 'looked after baby Moses', right: 'cared for someone in the past' },
        { left: 'Moses grew up in a safe place.', right: 'development over time' }, { left: 'Moses became a strong young man.', right: 'change to a new state' },
      ],
      correctAnswer: {
        'take care of the baby': 'care for and protect someone', 'looked after baby Moses': 'cared for someone in the past',
        'Moses grew up in a safe place.': 'development over time', 'Moses became a strong young man.': 'change to a new state',
      },
      explanation: 'Take care of/look after express care; grow up and become describe change.', feedback: { correct: 'Correct.', incorrect: 'Separate care phrases from change phrases.' },
    },
    {
      id: 'moses-a2-language-5-habits-reasons', type: 'multiple-choice', title: 'Giving a Reason', instructions: 'Choose the sentence that correctly uses because.', question: 'Which sentence gives a complete reason?',
      options: ['He loved the Children of Israel because his mother was from the Children of Israel.', 'He loved the Children of Israel because of his mother was from them.', 'He loved because his mother from the Children of Israel.'], correctAnswer: 0,
      explanation: 'Because is followed by a clause with a subject and verb.', feedback: { correct: 'Correct.', incorrect: 'Use because + complete clause.' },
    },
    {
      id: 'moses-a2-language-5-background-event', type: 'sequencing', title: 'Background and New Event', instructions: 'Put the two ideas in story order.', question: 'Which action was already happening before the new event?',
      sequencingItems: [{ id: '1', text: 'He was walking in the bazaar.' }, { id: '2', text: 'He saw two men fighting.' }], correctAnswer: ['1','2'],
      explanation: 'Past continuous sets the background; simple past introduces the next completed event.', feedback: { correct: 'Correct.', incorrect: 'Put the action in progress before the new event.' },
    },
    {
      id: 'moses-a2-language-5-production', type: 'reflection', title: 'Use It: Someone Who Helps', instructions: 'Create a new A2 example using at least three Chapter 5 patterns.', question: 'Can you describe care, change, a regular quality and a reason?',
      correctAnswer: null, explanation: 'Use look after/take care of, became, always, because, or was/were + -ing.', feedback: { correct: 'Use the language in a new situation.', incorrect: '' },
      discussionPrompts: [
        { question: 'Say who someone looks after.', mode: 'Individual' }, { question: 'Describe one change with became.', mode: 'Individual' },
        { question: 'Use always for one regular quality.', mode: 'Individual' }, { question: 'Give one reason with because.', mode: 'Pair' },
      ],
    },
  ],
};
