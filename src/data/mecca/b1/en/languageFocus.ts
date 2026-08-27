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
  2: [
    {
      id: 'mecca-b1-language-2-definition-contrast',
      type: 'matching',
      title: 'Defining and Contrasting Ideas',
      instructions: 'Match each chapter expression with the meaning it builds.',
      question: 'How does the chapter define Jahiliyyah and position Islam in contrast to it?',
      matchingPairs: [
        { left: 'The Jahiliyyah was an age of barbarism.', right: 'gives a direct definition or characterization of a period' },
        { left: 'People did not truly know Allah...', right: 'describes a negative condition in that period' },
        { left: 'Prophet Muhammad (as) described Islam as the opposite of barbarism.', right: 'sets up an explicit contrast between two ideas' },
        { left: 'This era ended when the first revelation of the Quran began in 610 CE.', right: 'marks the historical point when one period ended' },
      ],
      correctAnswer: {
        'The Jahiliyyah was an age of barbarism.': 'gives a direct definition or characterization of a period',
        'People did not truly know Allah...': 'describes a negative condition in that period',
        'Prophet Muhammad (as) described Islam as the opposite of barbarism.': 'sets up an explicit contrast between two ideas',
        'This era ended when the first revelation of the Quran began in 610 CE.': 'marks the historical point when one period ended',
      },
      explanation: 'The chapter first characterizes the period, then contrasts it with Islam and finally marks the transition to a new historical phase.',
      feedback: {
        correct: 'Good. You identified definition, description, contrast and historical transition.',
        incorrect: 'Ask whether each sentence defines, describes, contrasts or marks a change in time.',
      },
    },
    {
      id: 'mecca-b1-language-2-ordering-explanation',
      type: 'matching',
      title: 'Organising an Explanation',
      instructions: 'Match each expression with its discourse function.',
      question: 'How does the writer guide the reader from the idea of Jahiliyyah to an explanation of Mecca?',
      matchingPairs: [
        { left: 'To understand the Jahiliyyah period...', right: 'states the purpose of the next part of the explanation' },
        { left: 'we must first talk about Mecca', right: 'signals a necessary first step in the explanation' },
        { left: 'Mecca is the holy city of Islam.', right: 'introduces the new topic with a concise description' },
        { left: 'Allah chose this city to be the location of His House...', right: 'adds a reason why the new topic is important' },
      ],
      correctAnswer: {
        'To understand the Jahiliyyah period...': 'states the purpose of the next part of the explanation',
        'we must first talk about Mecca': 'signals a necessary first step in the explanation',
        'Mecca is the holy city of Islam.': 'introduces the new topic with a concise description',
        'Allah chose this city to be the location of His House...': 'adds a reason why the new topic is important',
      },
      explanation: 'Expressions such as “to understand...” and “must first...” help organise an explanation so the reader can follow why one topic comes before another.',
      feedback: {
        correct: 'Correct. You traced how the explanation is organised.',
        incorrect: 'Look for purpose, sequence and the reason the writer introduces Mecca at this point.',
      },
    },
    {
      id: 'mecca-b1-language-2-addition-definition',
      type: 'matching',
      title: 'Adding Related Information',
      instructions: 'Match each sentence with the way it adds or defines information.',
      question: 'How does the chapter build a compact profile of Mecca without using separate disconnected facts?',
      matchingPairs: [
        { left: 'Prophet Muhammad (as) was also born in Mecca.', right: 'adds another important connection to the city' },
        { left: 'He spent 52 years of his life in this city and began to teach the message of Islam here.', right: 'joins two related facts about the same person and place' },
        { left: 'The Qiblah, the direction Muslims face during salah, is also located in Mecca.', right: 'defines a term inside the sentence while adding another link to Mecca' },
      ],
      correctAnswer: {
        'Prophet Muhammad (as) was also born in Mecca.': 'adds another important connection to the city',
        'He spent 52 years of his life in this city and began to teach the message of Islam here.': 'joins two related facts about the same person and place',
        'The Qiblah, the direction Muslims face during salah, is also located in Mecca.': 'defines a term inside the sentence while adding another link to Mecca',
      },
      explanation: '“Also”, coordinated verbs with “and”, and an inserted definition help the writer connect related information instead of listing isolated sentences.',
      feedback: {
        correct: 'Good. You noticed how related facts are combined and clarified.',
        incorrect: 'Ask whether the expression adds, joins or defines information.',
      },
    },
    {
      id: 'mecca-b1-language-2-production',
      type: 'reflection',
      title: 'Build a Short Explanatory Profile',
      instructions: 'Write or say five to six connected B1 sentences about a different important city, place or institution. Do not retell Chapter 2.',
      question: 'Can you define the topic, explain why it matters, organise the explanation with a clear first step, add two related facts, and define one key term inside a sentence?',
      correctAnswer: null,
      explanation: 'A strong response should use connected explanatory language such as “To understand..., we must first...”, “is...”, “also”, “and”, and a short inserted definition like “X, the..., ...”.',
      feedback: {
        correct: 'Keep the paragraph focused on one topic and make each added detail support the explanation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Define or characterize the place/institution.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain why the reader needs to understand it.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “must first” or another clear ordering expression.', mode: 'Individual' },
        { question: 'Sentence 4 — Add a related fact with “also”.', mode: 'Pair' },
        { question: 'Sentence 5–6 — Join related information and define one key term inside a sentence.', mode: 'Pair' },
      ],
    },
  ],
};
