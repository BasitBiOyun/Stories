import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific Language Focus work for Moses A2.
 * Activities practise language genuinely present in each chapter without
 * duplicating the chapter comprehension Quick Challenge.
 */
export const mosesA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-a2-language-1-past-description',
      type: 'matching',
      title: 'Describing People in a Past Story',
      instructions: 'Match each Chapter 1 sentence chunk with the language job it does.',
      question: 'How does Chapter 1 describe Moses, Pharaoh and the Children of Israel in the past?',
      matchingPairs: [
        { left: 'Moses was a great Messenger of Allah.', right: 'identifies and describes a person in the past' },
        { left: 'Pharaoh was the king of Egypt.', right: 'states a past role or position' },
        { left: 'He was an unfair and cruel ruler.', right: 'adds qualities to a person in the past' },
        { left: 'They were the grandchildren of Jacob and Joseph.', right: 'states a past family relationship' },
      ],
      correctAnswer: {
        'Moses was a great Messenger of Allah.': 'identifies and describes a person in the past',
        'Pharaoh was the king of Egypt.': 'states a past role or position',
        'He was an unfair and cruel ruler.': 'adds qualities to a person in the past',
        'They were the grandchildren of Jacob and Joseph.': 'states a past family relationship',
      },
      explanation: 'Chapter 1 repeatedly uses “was” and “were” to identify people, state roles and relationships, and describe qualities in a past narrative.',
      feedback: {
        correct: 'Good. You connected “was/were” with different description functions.',
        incorrect: 'Ask whether each sentence gives identity, a role, a quality, or a relationship.',
      },
    },
    {
      id: 'moses-a2-language-1-belief-thought',
      type: 'matching',
      title: 'Belief, Thought and Negative Meaning',
      instructions: 'Match each Chapter 1 pattern with what it communicates.',
      question: 'How does the chapter talk about belief and ideas?',
      matchingPairs: [
        { left: 'He did not believe in Allah.', right: 'gives a negative belief in the past' },
        { left: 'He thought he was a god.', right: 'reports what Pharaoh believed about himself' },
        { left: 'They believed in one Allah.', right: 'states the Children of Israel’s belief' },
        { left: 'They did not think the king was a god.', right: 'reports a negative idea or belief in the past' },
      ],
      correctAnswer: {
        'He did not believe in Allah.': 'gives a negative belief in the past',
        'He thought he was a god.': 'reports what Pharaoh believed about himself',
        'They believed in one Allah.': 'states the Children of Israel’s belief',
        'They did not think the king was a god.': 'reports a negative idea or belief in the past',
      },
      explanation: 'Use past forms such as “believed” and “thought” to report beliefs and ideas. “Did not + base verb” makes a past statement negative.',
      feedback: {
        correct: 'Correct. You separated positive and negative belief/thought patterns.',
        incorrect: 'Look at “believed”, “thought”, and the pattern “did not + base verb”.',
      },
    },
    {
      id: 'moses-a2-language-1-cause-result',
      type: 'sequencing',
      title: 'Explaining Cause and Result',
      instructions: 'Put the chunks in order to rebuild a Chapter 1 cause-result idea.',
      question: 'How can the chapter connect Pharaoh’s fear with his cruel treatment?',
      sequencingItems: [
        { id: '1', text: 'The king feared the Children of Israel.' },
        { id: '2', text: 'Because of his fear,' },
        { id: '3', text: 'he was rude to them' },
        { id: '4', text: 'and forced them to do dangerous work.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: '“Because of + noun” introduces a cause. Chapter 1 uses “Because of his fear” to explain why Pharaoh treated the Children of Israel cruelly.',
      feedback: {
        correct: 'Good. You rebuilt the cause-result relationship.',
        incorrect: 'Begin with the fear, then use “Because of his fear” before the result.',
      },
    },
    {
      id: 'moses-a2-language-1-contrast-production',
      type: 'reflection',
      title: 'Say It: Describe and Explain',
      instructions: 'Write or say three or four short A2 sentences. Use at least two patterns from this Language Focus.',
      question: 'Can you describe two people or groups with different beliefs or behaviour and explain one reason?',
      correctAnswer: null,
      explanation: 'A strong response can use “was/were” for description, “believed/thought” for ideas, “did not + verb” for a negative past statement, and “because of” for a reason.',
      feedback: {
        correct: 'Use the patterns accurately and keep the contrast clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a person or group with “was/were”.', mode: 'Individual' },
        { question: 'Sentence 2 — State a belief with “believed” or “thought”.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a negative idea with “did not + verb”.', mode: 'Individual' },
        { question: 'Sentence 4 — Give a reason with “because of ...”.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'moses-a2-language-2-story-actions',
      type: 'matching',
      title: 'Following Past Actions',
      instructions: 'Match each Chapter 2 sentence with the job its past-tense verb does in the story.',
      question: 'How does Chapter 2 move the story from the dream to Pharaoh’s response?',
      matchingPairs: [
        { left: 'The king had a dream.', right: 'introduces the event that starts the scene' },
        { left: 'He saw a fire in his vision.', right: 'reports what he experienced in the dream' },
        { left: 'The king woke up and called his helpers.', right: 'shows the next actions after the dream' },
        { left: 'He asked about the dream.', right: 'shows how he looked for an explanation' },
      ],
      correctAnswer: {
        'The king had a dream.': 'introduces the event that starts the scene',
        'He saw a fire in his vision.': 'reports what he experienced in the dream',
        'The king woke up and called his helpers.': 'shows the next actions after the dream',
        'He asked about the dream.': 'shows how he looked for an explanation',
      },
      explanation: 'Chapter 2 uses simple past verbs such as “had”, “saw”, “woke up”, “called” and “asked” to move a sequence of completed past events forward.',
      feedback: {
        correct: 'Good. You followed how the past-tense verbs build the sequence.',
        incorrect: 'Ask what each action contributes: starting the scene, seeing, reacting, or asking.',
      },
    },
    {
      id: 'moses-a2-language-2-future-prediction',
      type: 'matching',
      title: 'Talking About a Future Prediction',
      instructions: 'Match each pattern with what it communicates.',
      question: 'What does “will” do in the explanation of Pharaoh’s dream?',
      matchingPairs: [
        { left: 'A boy will be born.', right: 'predicts a future event' },
        { left: 'He will kill the Egyptians.', right: 'predicts a future action' },
        { left: 'will + be + past participle', right: 'can describe something that will happen to a person or thing' },
        { left: 'will + base verb', right: 'can describe what someone or something will do' },
      ],
      correctAnswer: {
        'A boy will be born.': 'predicts a future event',
        'He will kill the Egyptians.': 'predicts a future action',
        'will + be + past participle': 'can describe something that will happen to a person or thing',
        'will + base verb': 'can describe what someone or something will do',
      },
      explanation: 'The magicians use “will” because they are speaking about events they say will happen later. “Will + base verb” gives a future action; “will be born” describes a future birth.',
      feedback: {
        correct: 'Correct. You separated a future event from a future action.',
        incorrect: 'Look at the verb after “will” and decide whether the sentence predicts an event or an action.',
      },
    },
    {
      id: 'moses-a2-language-2-orders-and-when',
      type: 'sequencing',
      title: 'Orders and “When”',
      instructions: 'Put the chunks in order to rebuild how the chapter connects an order with a later situation.',
      question: 'How can the chapter language connect Pharaoh’s command with what the soldiers did?',
      sequencingItems: [
        { id: '1', text: 'Pharaoh told his soldiers:' },
        { id: '2', text: '“Kill all the baby boys.”' },
        { id: '3', text: 'When they found baby boys,' },
        { id: '4', text: 'they killed them.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'An imperative such as “Kill ...” gives a direct command. “When + past clause” introduces the situation in which the next past action happened.',
      feedback: {
        correct: 'Good. You connected the direct command with the later “when” clause.',
        incorrect: 'Start with who gives the order, then the order itself, then the “when” situation and its result.',
      },
    },
    {
      id: 'moses-a2-language-2-production',
      type: 'reflection',
      title: 'Say It: Prediction, Order and Result',
      instructions: 'Write or say three short A2 sentences using the frames below. Create a new, harmless situation; do not retell Pharaoh’s order.',
      question: 'Can you make a simple future prediction, give a safe instruction, and say what happened when someone followed it?',
      correctAnswer: null,
      explanation: 'A strong response can use “will + verb” for a prediction, an imperative for a simple instruction, and “When + past ..., past ...” to connect two completed actions.',
      feedback: {
        correct: 'Keep the situation simple and use each pattern for the right language job.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Prediction — Make one sentence with “will + verb”.', mode: 'Individual' },
        { question: 'Instruction — Give one safe command such as “Open the book.”', mode: 'Individual' },
        { question: 'Result — Make one sentence with “When + past ..., past ...”.', mode: 'Pair' },
      ],
    },
  ],
};
