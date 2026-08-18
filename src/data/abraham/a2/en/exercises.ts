import { Exercise } from '../../../../types';

export const abrahamA2ExercisesEn: Exercise[] = [];

export const abrahamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'abraham-a2-review-sequence',
    type: 'sequencing',
    title: 'Abraham’s Journey',
    instructions: 'Put the major events in the correct order.',
    question: 'How does the story move from Babylon to the Ka’ba?',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The story moves from questioning idol worship to the fire, the journey away from Babylon, Hagar’s search, Zamzam, and the building of the Ka’ba.',
    feedback: {
      correct: 'Correct. You connected the major turning points across the whole story.',
      incorrect: 'Start with Abraham in Babylon. Then find the fire, the journey, the valley, Zamzam, and finally the Ka’ba.'
    },
    sequencingItems: [
      { id: '1', text: 'Abraham questions the worship of powerless objects' },
      { id: '2', text: 'Allah makes the fire cool and safe for Abraham' },
      { id: '3', text: 'Abraham leaves Babylon to carry the message to other lands' },
      { id: '4', text: 'Hagar searches for food and water in the valley' },
      { id: '5', text: 'Zamzam appears and more people come to the area' },
      { id: '6', text: 'Abraham and Ishmael build the Ka’ba together' }
    ]
  },
  {
    id: 'abraham-a2-review-match',
    type: 'matching',
    title: 'People, Choices, and Results',
    instructions: 'Match each person or group with the chapter-supported action or response.',
    question: 'Who did what in the story?',
    matchingPairs: [
      { left: 'Abraham', right: 'challenged Nimrod with the sun' },
      { left: 'People of Babylon', right: 'continued to reject the message after the miracle' },
      { left: 'Hagar', right: 'trusted Allah and searched for water' },
      { left: 'Ishmael', right: 'helped Abraham build the Ka’ba' }
    ],
    correctAnswer: {
      Abraham: 'challenged Nimrod with the sun',
      'People of Babylon': 'continued to reject the message after the miracle',
      Hagar: 'trusted Allah and searched for water',
      Ishmael: 'helped Abraham build the Ka’ba'
    },
    explanation: 'These four matches connect major characters with the choices and responses that move the story forward.',
    feedback: {
      correct: 'Correct. Each match is supported by a different part of the story.',
      incorrect: 'Check the Babylon argument, the response after the fire, the valley scene, and the final Ka’ba chapter.'
    }
  },
  {
    id: 'abraham-a2-review-reflection',
    type: 'reflection',
    title: 'Evidence and Reflection',
    instructions: 'Think first from the story, then give a short A2 response.',
    question: 'How does the story show that trust can be followed by action?',
    correctAnswer: null,
    explanation: 'Hagar trusted Allah, but she also searched and ran from hill to hill for food and water. Abraham also trusted Allah while continuing his mission.',
    feedback: {
      correct: 'Use one story event to support your idea.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'What did Hagar believe, and what did she do next?', mode: 'Individual' },
      { question: 'What changed in the fire, and what did not change in the people?', mode: 'Pair' },
      { question: 'How does the final message connect with Abraham’s earlier questions about idols?', mode: 'Class' }
    ]
  },
  {
    id: 'abraham-a2-review-quiz',
    type: 'quiz-game',
    title: 'Abraham A2 Retrieval Review',
    instructions: 'Answer eight questions from across the story. Use the hint only when you need it.',
    question: 'Can you reconnect the main ideas without rereading everything?',
    correctAnswer: null,
    explanation: 'The questions cover reasoning, sequence, cause-result, response, and the final message rather than random details.',
    feedback: {
      correct: 'Good retrieval. Keep connecting each answer with its chapter evidence.',
      incorrect: 'Use the hint to return to the relevant chapter idea, then try again.'
    },
    quizQuestions: [
      {
        question: 'What made Abraham question the stone objects in Chapter 1?',
        options: [
          { text: 'They could not hear, talk, move, or understand', isCorrect: true },
          { text: 'They were hidden in another city', isCorrect: false },
          { text: 'They refused to give him presents', isCorrect: false }
        ],
        hint: 'Focus on what Abraham noticed the objects could not do.'
      },
      {
        question: 'What repeated event helped Abraham reject the star and the moon?',
        options: [
          { text: 'They disappeared or went away', isCorrect: true },
          { text: 'They spoke to him', isCorrect: false },
          { text: 'They became stone objects', isCorrect: false }
        ],
        hint: 'Compare the end of the star scene with the moon scene.'
      },
      {
        question: 'Why did Abraham leave the largest idol unbroken?',
        options: [
          { text: 'It was part of his plan to make the people think', isCorrect: true },
          { text: 'He wanted to worship it later', isCorrect: false },
          { text: 'He forgot to enter the idol house', isCorrect: false }
        ],
        hint: 'Remember where Abraham placed the axe.'
      },
      {
        question: 'Why did Abraham stay calm while the huge fire was prepared?',
        options: [
          { text: 'He trusted Allah', isCorrect: true },
          { text: 'The fire was not dangerous', isCorrect: false },
          { text: 'Nimrod had already stopped the punishment', isCorrect: false }
        ],
        hint: 'The chapter states the reason directly after describing the dangerous fire.'
      },
      {
        question: 'What did the miracle change, and what did it not change?',
        options: [
          { text: 'The fire became safe, but the people still rejected Abraham', isCorrect: true },
          { text: 'The people believed, but the fire stayed dangerous', isCorrect: false },
          { text: 'Abraham left Babylon before the fire changed', isCorrect: false }
        ],
        hint: 'Compare the fire with the people’s response afterward.'
      },
      {
        question: 'Why did Abraham leave Babylon?',
        options: [
          { text: 'To carry Allah’s message to other lands after people would not listen', isCorrect: true },
          { text: 'To search for another king to worship', isCorrect: false },
          { text: 'To bring the broken idols with him', isCorrect: false }
        ],
        hint: 'Look at the reason given before the journey begins.'
      },
      {
        question: 'Which pair shows both trust and action in the valley?',
        options: [
          { text: 'Hagar trusted Allah and searched for food and water', isCorrect: true },
          { text: 'Hagar trusted Allah and stayed without doing anything', isCorrect: false },
          { text: 'Hagar returned immediately to Babylon', isCorrect: false }
        ],
        hint: 'Use both paragraphs of Chapter 12.'
      },
      {
        question: 'Which statement best connects the last chapter with the whole story?',
        options: [
          { text: 'The Ka’ba is built and the story ends with the message that Allah has no partner', isCorrect: true },
          { text: 'The people of Babylon finally begin to worship Mardukh', isCorrect: false },
          { text: 'Nimrod becomes the builder of the Ka’ba', isCorrect: false }
        ],
        hint: 'Use the building scene and the final quoted message together.'
      }
    ]
  }
];
