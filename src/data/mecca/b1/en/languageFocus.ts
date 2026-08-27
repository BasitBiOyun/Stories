import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Language Focus, derived from the actual English story text. */
export const meccaB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mecca-b1-language-1-historical-frame',
      type: 'matching',
      title: 'Building a Historical Frame',
      instructions: 'Match each expression with the job it does in the chapter.',
      question: 'How does Chapter 1 place the reader in a historical period and describe the situation at that time?',
      matchingPairs: [
        { left: 'Islam started in the 7th century in the city of Mecca.', right: 'places an event in a specific historical period and location' },
        { left: 'The period before Islam was called the Age of Ignorance...', right: 'labels and defines a historical period' },
        { left: 'There was no central government in Arabia...', right: 'describes an important situation that existed at the time' },
        { left: 'tribes were the basis of society', right: 'explains how society was organised' },
      ],
      correctAnswer: {
        'Islam started in the 7th century in the city of Mecca.': 'places an event in a specific historical period and location',
        'The period before Islam was called the Age of Ignorance...': 'labels and defines a historical period',
        'There was no central government in Arabia...': 'describes an important situation that existed at the time',
        'tribes were the basis of society': 'explains how society was organised',
      },
      explanation: 'Historical writing often combines a time expression, a label for the period, and descriptions of the political or social situation.',
      feedback: {
        correct: 'Good. You identified how the chapter establishes historical context.',
        incorrect: 'Ask whether the expression gives time/place, names the period, or describes how society worked.',
      },
    },
    {
      id: 'mecca-b1-language-1-cause-contrast',
      type: 'matching',
      title: 'Connecting Cause, Result and Contrast',
      instructions: 'Match each connector with the relationship it creates.',
      question: 'How does the chapter connect reasons, results and contrasting social conditions?',
      matchingPairs: [
        { left: '...was called the Age of Ignorance ... because religious and social disorder was common...', right: 'gives the reason for a name or description' },
        { left: 'For this reason, the city was known as the Republic of Merchants.', right: 'introduces a result based on the previous information' },
        { left: 'Powerful people controlled many parts of life, while poor and weak people lived in misery.', right: 'places two contrasting situations side by side' },
      ],
      correctAnswer: {
        '...was called the Age of Ignorance ... because religious and social disorder was common...': 'gives the reason for a name or description',
        'For this reason, the city was known as the Republic of Merchants.': 'introduces a result based on the previous information',
        'Powerful people controlled many parts of life, while poor and weak people lived in misery.': 'places two contrasting situations side by side',
      },
      explanation: '“Because” introduces a reason, “for this reason” points to a result, and “while” can contrast two conditions at the same time.',
      feedback: {
        correct: 'Correct. You distinguished reason, result and contrast.',
        incorrect: 'Look at what comes before and after each connector and decide how the ideas are related.',
      },
    },
    {
      id: 'mecca-b1-language-1-focus-and-reporting',
      type: 'matching',
      title: 'Choosing What to Put in Focus',
      instructions: 'Match each sentence pattern with its communicative purpose.',
      question: 'How does the chapter shift between who performs an action, what receives the action, and whose description is being reported?',
      matchingPairs: [
        { left: 'Mecca was led by a council of rich merchants.', right: 'focuses on Mecca and its system of leadership rather than the leaders themselves' },
        { left: 'poor and weak people were often treated badly', right: 'focuses on the people affected by the action' },
        { left: 'The Quran describes this period as a time of ignorance and cruelty.', right: 'identifies the source of a description or viewpoint' },
      ],
      correctAnswer: {
        'Mecca was led by a council of rich merchants.': 'focuses on Mecca and its system of leadership rather than the leaders themselves',
        'poor and weak people were often treated badly': 'focuses on the people affected by the action',
        'The Quran describes this period as a time of ignorance and cruelty.': 'identifies the source of a description or viewpoint',
      },
      explanation: 'Passive forms can foreground the place or people affected, while “X describes Y as...” clearly attributes a description to a source.',
      feedback: {
        correct: 'Good. You noticed how information focus changes across the chapter.',
        incorrect: 'Ask whether the sentence foregrounds the doer, the receiver, or the source of a description.',
      },
    },
    {
      id: 'mecca-b1-language-1-production',
      type: 'reflection',
      title: 'Write a Connected Historical Snapshot',
      instructions: 'Write or say five to six connected B1 sentences about a different historical city or society. Do not retell Chapter 1.',
      question: 'Can you set the time, describe the social or political situation, explain one reason or result, add a contrast, and report a source or general description?',
      correctAnswer: null,
      explanation: 'A strong answer should read like one short historical paragraph rather than separate grammar examples. Useful patterns include “In the ... century...”, “was called... because...”, “for this reason...”, “while...”, “was led by...”, and “X describes... as...”.',
      feedback: {
        correct: 'Keep the ideas connected so the paragraph develops one historical situation clearly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set a historical time and place.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe an important political or social condition.', mode: 'Individual' },
        { question: 'Sentence 3 — Add a reason with “because” or a result with “for this reason”.', mode: 'Individual' },
        { question: 'Sentence 4 — Contrast two groups or conditions with “while”.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Use one passive form or attribute a description to a source.', mode: 'Pair' },
      ],
    },
  ],
};
