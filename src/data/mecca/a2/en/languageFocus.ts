import type { Exercise } from '../../../../types';

/**
 * Chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mecca-a2-language-1-biography',
      type: 'matching',
      title: 'Talking About a Life',
      instructions: 'Match each Chapter 1 expression with the job it does in a short biography.',
      question: 'How does the chapter give basic facts about Bilal’s life?',
      matchingPairs: [
        { left: 'Bilal was a black slave', right: 'was + noun phrase describes who or what someone was in the past' },
        { left: 'He was born in Mecca', right: 'was born in + place tells where someone was born' },
        { left: 'His mother was an Ethiopian woman', right: 'was + noun phrase gives a past identity or background fact' },
        { left: 'His father and mother were also slaves', right: 'were is the past form of be with a plural subject' },
      ],
      correctAnswer: {
        'Bilal was a black slave': 'was + noun phrase describes who or what someone was in the past',
        'He was born in Mecca': 'was born in + place tells where someone was born',
        'His mother was an Ethiopian woman': 'was + noun phrase gives a past identity or background fact',
        'His father and mother were also slaves': 'were is the past form of be with a plural subject',
      },
      explanation: 'Chapter 1 uses was/were and was born in to give simple biographical facts about Bilal and his family.',
      feedback: {
        correct: 'Good. You identified the language used for past identity, background and birthplace.',
        incorrect: 'Look at the subject first: one person takes “was”; a plural subject takes “were”.',
      },
    },
    {
      id: 'mecca-a2-language-1-beliefs',
      type: 'matching',
      title: 'What People Thought',
      instructions: 'Match the Chapter 1 sentence with what it expresses.',
      question: 'How does the chapter report other people’s ideas about Bilal?',
      matchingPairs: [
        { left: 'People in Mecca thought Bilal was just a poor slave', right: 'thought + clause reports an idea people had in the past' },
        { left: 'They thought he had no power', right: 'thought + clause can report a belief about another person' },
        { left: 'They thought he would never become someone important', right: 'would + verb reports what people expected about the future from a past point of view' },
        { left: 'His story teaches us that ...', right: 'teaches us that + clause introduces a lesson or message' },
      ],
      correctAnswer: {
        'People in Mecca thought Bilal was just a poor slave': 'thought + clause reports an idea people had in the past',
        'They thought he had no power': 'thought + clause can report a belief about another person',
        'They thought he would never become someone important': 'would + verb reports what people expected about the future from a past point of view',
        'His story teaches us that ...': 'teaches us that + clause introduces a lesson or message',
      },
      explanation: 'The chapter contrasts what people thought about Bilal with the lesson his story teaches.',
      feedback: {
        correct: 'Correct. You separated past beliefs from the lesson of the story.',
        incorrect: 'Ask whether the sentence reports an old belief or introduces a lesson.',
      },
    },
    {
      id: 'mecca-a2-language-1-make-change',
      type: 'matching',
      title: 'Showing Change and Effect',
      instructions: 'Match each expression with its meaning.',
      question: 'How does Chapter 1 use “make” to show change or effect?',
      matchingPairs: [
        { left: 'Islam made him a free and great man', right: 'make + person + noun phrase shows a change in status or identity' },
        { left: 'does not make a person less valuable', right: 'make + person + adjective shows an effect on a quality or state' },
        { left: 'skin color ... does not make a person less valuable', right: 'does not make rejects the idea that one fact causes a negative value judgment' },
        { left: 'He was a slave → Islam made him a free man', right: 'the two sentences contrast an earlier state with a later change' },
      ],
      correctAnswer: {
        'Islam made him a free and great man': 'make + person + noun phrase shows a change in status or identity',
        'does not make a person less valuable': 'make + person + adjective shows an effect on a quality or state',
        'skin color ... does not make a person less valuable': 'does not make rejects the idea that one fact causes a negative value judgment',
        'He was a slave → Islam made him a free man': 'the two sentences contrast an earlier state with a later change',
      },
      explanation: '“Make” can show that something causes a change. Chapter 1 also uses “does not make” to reject an unfair conclusion about human value.',
      feedback: {
        correct: 'Good. You identified change, effect and a negative form that rejects an unfair conclusion.',
        incorrect: 'Look at what comes after “make”: a person, then a new status or quality.',
      },
    },
    {
      id: 'mecca-a2-language-1-production',
      type: 'reflection',
      title: 'Say It: A Short Biography',
      instructions: 'Write or say four short A2 sentences about a real or imaginary person. Use at least three Chapter 1 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you give a past fact, report what people thought, and show a change or lesson?',
      correctAnswer: null,
      explanation: 'A strong response can use “was/were”, “was born in”, “people thought + clause”, “made + person + noun/adjective”, or “teaches us that + clause”.',
      feedback: {
        correct: 'Use the patterns to make a clear mini-biography with a beginning, an old belief and a later change or lesson.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Background — Use “was/were” or “was born in ...”.', mode: 'Individual' },
        { question: 'Belief — Add “People thought ...”.', mode: 'Individual' },
        { question: 'Change — Use “made + person + noun/adjective”.', mode: 'Individual' },
        { question: 'Lesson — End with “This teaches us that ...”.', mode: 'Pair' },
      ],
    },
  ],
};
