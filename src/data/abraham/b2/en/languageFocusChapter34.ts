import type { Exercise } from '../../../../types';

/** Chapter 34 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter34: Record<number, Exercise[]> = {
  34: [
    {
      id: 'abraham-b2-language-34-command-commitment',
      type: 'matching',
      title: 'From Command to Commitment',
      instructions: 'Match each expression with the stance or time relation it creates.',
      question: 'How does the dialogue move from a received command to a shared future task?',
      matchingPairs: [
        { left: 'Allah has commanded me to do an important task', right: 'presents a past command as still relevant at the moment of speaking' },
        { left: 'you will help me in this task', right: 'projects Ishmael’s role forward from the present dialogue' },
        { left: 'I will help you for sure', right: 'turns the projected role into an explicit commitment' },
        { left: 'commanded me to build a house', right: 'reports the required action without repeating the original command directly' },
      ],
      correctAnswer: {
        'Allah has commanded me to do an important task': 'presents a past command as still relevant at the moment of speaking',
        'you will help me in this task': 'projects Ishmael’s role forward from the present dialogue',
        'I will help you for sure': 'turns the projected role into an explicit commitment',
        'commanded me to build a house': 'reports the required action without repeating the original command directly',
      },
      explanation: 'The dialogue combines present relevance, future projection, commitment and reported instruction to organize a shared task.',
      feedback: { correct: 'Correct. You traced how command, projection and commitment work together.', incorrect: 'Look at what is already decided, what is projected forward, and what Ishmael personally commits to doing.' },
    },
    {
      id: 'abraham-b2-language-34-height-change',
      type: 'multiple-choice',
      title: 'Show Change Through Cause and Limitation',
      instructions: 'Choose the reformulation that best preserves the chapter’s cause-and-change relation.',
      question: 'Which version keeps the meaning of “When the building became high and ... Abraham could no longer lift the stones ... he stood over the stone of Al-Maqam”?',
      options: [
        'As the structure rose, Abraham eventually became unable to lift the stones high enough from the ground, so he changed how he worked by standing on Al-Maqam.',
        'Abraham stood on Al-Maqam before construction began because he had never been able to lift any stone.',
        'The building became lower, so Abraham no longer needed Ishmael’s help.',
      ],
      correctAnswer: 0,
      explanation: 'The wording presents a developing physical condition, a new limitation, and an adjusted method of action.',
      feedback: { correct: 'Correct. You preserved development → limitation → adaptation.', incorrect: 'Keep the sequence: the building rises, a limitation appears, then the method changes.' },
    },
    {
      id: 'abraham-b2-language-34-coordination-prayer',
      type: 'matching',
      title: 'Coordinate Action and Prayer',
      instructions: 'Match each phrase with its discourse function.',
      question: 'How does the chapter combine simultaneous work with a shared prayer?',
      matchingPairs: [
        { left: 'he stood over the stone of Al-Maqam', right: 'shows Abraham adapting his position to continue the work' },
        { left: 'Ishmael carried on handing him the stones', right: 'shows a continuing supporting action happening alongside Abraham’s work' },
        { left: 'both of them were saying', right: 'frames the prayer as a shared ongoing action during the building process' },
        { left: 'Accept this service from us', right: 'uses an imperative form as a respectful request rather than an order to an equal' },
      ],
      correctAnswer: {
        'he stood over the stone of Al-Maqam': 'shows Abraham adapting his position to continue the work',
        'Ishmael carried on handing him the stones': 'shows a continuing supporting action happening alongside Abraham’s work',
        'both of them were saying': 'frames the prayer as a shared ongoing action during the building process',
        'Accept this service from us': 'uses an imperative form as a respectful request rather than an order to an equal',
      },
      explanation: 'The passage layers coordinated physical actions with a simultaneous act of prayer, and the imperative in the prayer functions as supplication.',
      feedback: { correct: 'Correct. You identified coordination, continuity and the special function of the imperative in prayer.', incorrect: 'Separate the physical actions from the prayer, then ask what kind of speech act “Accept...” performs.' },
    },
    {
      id: 'abraham-b2-language-34-production',
      type: 'reflection',
      title: 'Write a Shared-Task Sequence',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about two people completing a demanding shared task. Include one present-relevance form such as “has asked/has required”, one future commitment with “will”, one reported instruction, one change expressed through “no longer”, one continuing parallel action, one cause→adaptation link, and one final respectful request or appeal.',
      question: 'Can you show how a task moves from instruction to commitment, difficulty, adaptation and coordinated completion?',
      correctAnswer: null,
      explanation: 'A strong B2 response should organize time, stance and coordinated action across a coherent paragraph rather than as isolated grammar examples.',
      feedback: { correct: 'Check that your forms create a clear progression from instruction to shared action and adaptation.', incorrect: '' },
      discussionPrompts: [
        { question: 'Commitment — Which sentence changes a plan into a personal promise?', mode: 'Individual' },
        { question: 'Change — Where does “no longer” mark a new limitation or situation?', mode: 'Pair' },
        { question: 'Coordination — Which two actions continue at the same time?', mode: 'Pair' },
        { question: 'Function — Is your final imperative a command, request, invitation or appeal?', mode: 'Individual' },
      ],
    },
  ],
};
