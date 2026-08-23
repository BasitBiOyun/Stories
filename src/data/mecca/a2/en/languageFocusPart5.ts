import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'mecca-a2-language-6-thinking-deciding',
      type: 'matching',
      title: 'From Thought to Decision',
      instructions: 'Match each Chapter 6 expression with the job it does.',
      question: 'How does the chapter move from Bilal’s thoughts to a decision?',
      matchingPairs: [
        { left: 'Bilal thought about the message of Islam', right: 'think about + noun means give careful attention to an idea or topic' },
        { left: 'thought deeply about the Creator and the creation', right: 'think deeply about + noun shows careful or serious thought' },
        { left: 'Bilal decided to visit Abu Bakr', right: 'decide to + base verb expresses a choice made after thinking' },
        { left: 'Bilal felt fear in his heart', right: 'feel + noun can describe an emotion or inner state' },
      ],
      correctAnswer: {
        'Bilal thought about the message of Islam': 'think about + noun means give careful attention to an idea or topic',
        'thought deeply about the Creator and the creation': 'think deeply about + noun shows careful or serious thought',
        'Bilal decided to visit Abu Bakr': 'decide to + base verb expresses a choice made after thinking',
        'Bilal felt fear in his heart': 'feel + noun can describe an emotion or inner state',
      },
      explanation: 'Chapter 6 uses language for thinking, making a decision, and describing an emotion before an important action.',
      feedback: {
        correct: 'Correct. You separated thought, decision and feeling.',
        incorrect: 'Look at what Bilal considered, what he chose to do, and what he felt.',
      },
    },
    {
      id: 'mecca-a2-language-6-wanting-privacy',
      type: 'matching',
      title: 'Wanting Something Not to Happen',
      instructions: 'Match each expression with its meaning or function.',
      question: 'How does Chapter 6 express secrecy and a wish to avoid being seen?',
      matchingPairs: [
        { left: 'He left his room secretly', right: 'the adverb secretly explains how an action was done' },
        { left: 'He walked on a hidden path', right: 'the adjective hidden describes a path that was difficult to notice' },
        { left: 'He did not want anyone to see him', right: 'not want + person + to + verb expresses a wish for another action not to happen' },
        { left: 'It was night time and very dark', right: 'was + adjective describes a past situation or condition' },
      ],
      correctAnswer: {
        'He left his room secretly': 'the adverb secretly explains how an action was done',
        'He walked on a hidden path': 'the adjective hidden describes a path that was difficult to notice',
        'He did not want anyone to see him': 'not want + person + to + verb expresses a wish for another action not to happen',
        'It was night time and very dark': 'was + adjective describes a past situation or condition',
      },
      explanation: 'The chapter combines adverbs, adjectives and “not want + person + to + verb” to explain a secret situation.',
      feedback: {
        correct: 'Good. You identified how the chapter describes secrecy and intention.',
        incorrect: 'Focus on “secretly”, “hidden”, “did not want anyone to see him”, and “very dark”.',
      },
    },
    {
      id: 'mecca-a2-language-6-knowing-starting',
      type: 'matching',
      title: 'Knowing, Arriving and Starting',
      instructions: 'Match each Chapter 6 pattern with its language function.',
      question: 'How does the text report what Bilal knew and what happened when he reached the house?',
      matchingPairs: [
        { left: 'Bilal knew that Abu Bakr believed the message', right: 'know that + clause reports information someone understands or believes to be true' },
        { left: 'When he arrived at Abu Bakr’s house', right: 'when + past clause introduces the time of another past action' },
        { left: 'he knocked on the door and went inside', right: 'past simple verbs can connect completed actions in the same situation' },
        { left: 'He started to ask many questions', right: 'start to + base verb expresses the beginning of an action' },
      ],
      correctAnswer: {
        'Bilal knew that Abu Bakr believed the message': 'know that + clause reports information someone understands or believes to be true',
        'When he arrived at Abu Bakr’s house': 'when + past clause introduces the time of another past action',
        'he knocked on the door and went inside': 'past simple verbs can connect completed actions in the same situation',
        'He started to ask many questions': 'start to + base verb expresses the beginning of an action',
      },
      explanation: 'The chapter uses “knew that” for known information, “when” to locate an event in time, and “started to” for the beginning of an action.',
      feedback: {
        correct: 'Correct. You identified information, time and the start of an action.',
        incorrect: 'Look for “knew that”, “when”, the past actions, and “started to”.',
      },
    },
    {
      id: 'mecca-a2-language-6-production',
      type: 'reflection',
      title: 'Say It: Think, Decide and Ask',
      instructions: 'Write or say four short A2 sentences about an imaginary person who thinks carefully, makes a decision, wants privacy, and then starts asking for information. Use at least three Chapter 6 language patterns. Do not retell Bilal’s journey.',
      question: 'Can you move from thought to decision and then to a new action?',
      correctAnswer: null,
      explanation: 'A strong response can use “thought about ...”, “decided to ...”, “did not want anyone to ...”, “knew that ...”, “when ...”, and “started to ...”.',
      feedback: {
        correct: 'Build a short new situation with thought, decision, intention and a beginning action.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Thought — Start with “He/She thought about ...”.', mode: 'Individual' },
        { question: 'Decision — Add “He/She decided to ...”.', mode: 'Individual' },
        { question: 'Privacy — Use “He/She did not want anyone to ...”.', mode: 'Individual' },
        { question: 'New action — Finish with “When ... , he/she started to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
