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
  2: [
    {
      id: 'mecca-a2-language-2-past-society',
      type: 'matching',
      title: 'Describing Society in the Past',
      instructions: 'Match each Chapter 2 expression with the job it does.',
      question: 'How does the chapter describe what society was like before Islam?',
      matchingPairs: [
        { left: 'The period before Islam was called the Age of Ignorance', right: 'was called + name tells what something was known as in the past' },
        { left: 'There was no real peace and justice', right: 'there was + singular/uncountable idea says something existed or did not exist in the past' },
        { left: 'There was a big gap between rich and poor people', right: 'there was + noun phrase introduces a past situation' },
        { left: 'Mecca was a business city', right: 'was + noun phrase describes a place in the past' },
      ],
      correctAnswer: {
        'The period before Islam was called the Age of Ignorance': 'was called + name tells what something was known as in the past',
        'There was no real peace and justice': 'there was + singular/uncountable idea says something existed or did not exist in the past',
        'There was a big gap between rich and poor people': 'there was + noun phrase introduces a past situation',
        'Mecca was a business city': 'was + noun phrase describes a place in the past',
      },
      explanation: 'Chapter 2 uses “was”, “was called” and “there was” to describe a society and its conditions in the past.',
      feedback: {
        correct: 'Correct. You identified three useful ways to describe past places, names and conditions.',
        incorrect: 'Look at whether the sentence names something, describes a place, or says that a situation existed.',
      },
    },
    {
      id: 'mecca-a2-language-2-contrast-quantity',
      type: 'matching',
      title: 'Showing Contrast and Amount',
      instructions: 'Match each expression with its function in the chapter.',
      question: 'How does Chapter 2 compare different groups and amounts?',
      matchingPairs: [
        { left: 'Rich people had a lot of money', right: 'a lot of + noun shows a large amount' },
        { left: 'many poor people lived in need', right: 'many + plural noun shows a large number' },
        { left: 'Rich people lived in luxury. But many poor people lived in need.', right: 'but connects two contrasting situations' },
        { left: 'between rich and poor people', right: 'between A and B shows the two sides of a comparison or difference' },
      ],
      correctAnswer: {
        'Rich people had a lot of money': 'a lot of + noun shows a large amount',
        'many poor people lived in need': 'many + plural noun shows a large number',
        'Rich people lived in luxury. But many poor people lived in need.': 'but connects two contrasting situations',
        'between rich and poor people': 'between A and B shows the two sides of a comparison or difference',
      },
      explanation: 'The chapter combines quantity language with contrast language to describe unequal conditions without simply repeating the Quick Challenge question.',
      feedback: {
        correct: 'Good. You matched amount, number and contrast language correctly.',
        incorrect: 'Check what follows the expression: a plural noun, an amount, or a contrasting idea.',
      },
    },
    {
      id: 'mecca-a2-language-2-cause-result',
      type: 'matching',
      title: 'From Action to Result',
      instructions: 'Match each Chapter 2 pattern with what it expresses.',
      question: 'How does the chapter connect actions with consequences?',
      matchingPairs: [
        { left: 'Some rich people lent money to the poor', right: 'lent + thing + to + person describes giving something temporarily' },
        { left: 'They wanted more money back', right: 'wanted + noun shows what someone wished to receive' },
        { left: 'Because of this, the rich became richer', right: 'because of this introduces a result caused by the situation before it' },
        { left: 'the rich became richer and the poor became poorer', right: 'became + comparative adjective shows a change over time' },
      ],
      correctAnswer: {
        'Some rich people lent money to the poor': 'lent + thing + to + person describes giving something temporarily',
        'They wanted more money back': 'wanted + noun shows what someone wished to receive',
        'Because of this, the rich became richer': 'because of this introduces a result caused by the situation before it',
        'the rich became richer and the poor became poorer': 'became + comparative adjective shows a change over time',
      },
      explanation: 'Chapter 2 moves from an action to its consequence with “because of this” and shows change with “became + comparative”.',
      feedback: {
        correct: 'Correct. You followed the chain from action to result and change.',
        incorrect: 'Find the cause first, then look for the phrase that introduces its result.',
      },
    },
    {
      id: 'mecca-a2-language-2-production',
      type: 'reflection',
      title: 'Say It: Describe a Past Community',
      instructions: 'Write or say four short A2 sentences about an imaginary town in the past. Use at least three Chapter 2 language patterns. Do not answer the Quick Challenge again.',
      question: 'Can you describe a past situation, show a contrast, and explain one result?',
      correctAnswer: null,
      explanation: 'A strong response can use “there was ...”, “many/a lot of ...”, “but ...”, “because of this ...”, or “became + comparative”.',
      feedback: {
        correct: 'Build a short description with a past condition, two contrasting groups and one clear consequence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Past condition — Begin with “There was ...” or “The town was ...”.', mode: 'Individual' },
        { question: 'Amount — Add “many ...” or “a lot of ...”.', mode: 'Individual' },
        { question: 'Contrast — Connect two different situations with “but”.', mode: 'Individual' },
        { question: 'Result — End with “Because of this, ... became ...”.', mode: 'Pair' },
      ],
    },
  ],
};
