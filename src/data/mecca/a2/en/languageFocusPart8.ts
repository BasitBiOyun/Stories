import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the Chapter 9 story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-a2-language-9-wants-and-news',
      type: 'matching',
      title: 'Wants, News and Quick Action',
      instructions: 'Match each Chapter 9 expression with the job it does.',
      question: 'How does the chapter show intention, reported news and an immediate response?',
      matchingPairs: [
        { left: 'Umayya wanted Bilal to feel sorry', right: 'want + person + to + verb describes what someone wants another person to do' },
        { left: 'Abu Bakr heard that Umayya was hurting Bilal', right: 'hear that + clause reports information someone receives' },
        { left: 'He went to see Umayya right away', right: 'go to see + person explains the purpose of going' },
        { left: 'right away', right: 'shows that an action happens immediately' },
      ],
      correctAnswer: {
        'Umayya wanted Bilal to feel sorry': 'want + person + to + verb describes what someone wants another person to do',
        'Abu Bakr heard that Umayya was hurting Bilal': 'hear that + clause reports information someone receives',
        'He went to see Umayya right away': 'go to see + person explains the purpose of going',
        'right away': 'shows that an action happens immediately',
      },
      explanation: 'Chapter 9 links what people want, what Abu Bakr hears and what he does immediately after hearing it.',
      feedback: {
        correct: 'Correct. You identified intention, reported news, purpose and immediate action.',
        incorrect: 'Look again at “wanted ... to ...”, “heard that ...”, “went to see ...”, and “right away”.',
      },
    },
    {
      id: 'mecca-a2-language-9-requests-and-refusal',
      type: 'matching',
      title: 'Making a Request',
      instructions: 'Match the Chapter 9 language with its function.',
      question: 'How does Abu Bakr make a request, and how does Umayya respond?',
      matchingPairs: [
        { left: 'Abu Bakr asked Umayya to sell Bilal to him', right: 'ask + person + to + verb makes a request' },
        { left: 'Umayya did not want to set Bilal free', right: 'did not want to + verb shows unwillingness' },
        { left: 'If you want him, you can take him for a high price', right: 'if + present, can + verb connects a condition with a possible action' },
        { left: 'Again, Abu Bakr asked Umayya to sell Bilal to him', right: 'again shows that the request is repeated' },
      ],
      correctAnswer: {
        'Abu Bakr asked Umayya to sell Bilal to him': 'ask + person + to + verb makes a request',
        'Umayya did not want to set Bilal free': 'did not want to + verb shows unwillingness',
        'If you want him, you can take him for a high price': 'if + present, can + verb connects a condition with a possible action',
        'Again, Abu Bakr asked Umayya to sell Bilal to him': 'again shows that the request is repeated',
      },
      explanation: 'The chapter uses “ask ... to ...” for a request, “did not want to ...” for unwillingness and “if ... can ...” for a condition and possible action.',
      feedback: {
        correct: 'Good. You separated requesting, unwillingness, condition and repetition.',
        incorrect: 'Find the two places where Abu Bakr asks Umayya to sell Bilal and notice Umayya’s response.',
      },
    },
    {
      id: 'mecca-a2-language-9-questioning-actions',
      type: 'matching',
      title: 'Questioning an Action',
      instructions: 'Match each direct question or statement with its language purpose.',
      question: 'How does Chapter 9 use questions to challenge an action?',
      matchingPairs: [
        { left: 'What did he do wrong?', right: 'What did + subject + base verb ...? asks about a past action' },
        { left: 'Is it a crime to believe ...?', right: 'Is it + noun + to + verb ...? asks whether an action has a certain meaning or status' },
        { left: 'He is my slave', right: 'be + possessive noun phrase states a claimed relationship or status' },
        { left: 'I can do whatever I want with him', right: 'can + verb expresses claimed ability or permission' },
      ],
      correctAnswer: {
        'What did he do wrong?': 'What did + subject + base verb ...? asks about a past action',
        'Is it a crime to believe ...?': 'Is it + noun + to + verb ...? asks whether an action has a certain meaning or status',
        'He is my slave': 'be + possessive noun phrase states a claimed relationship or status',
        'I can do whatever I want with him': 'can + verb expresses claimed ability or permission',
      },
      explanation: 'Abu Bakr uses direct questions to examine Umayya’s actions, while Umayya answers with statements about status and what he says he can do.',
      feedback: {
        correct: 'Correct. You identified past-action questions, an “Is it ...?” question and statements with “be” and “can”.',
        incorrect: 'Separate Abu Bakr’s two questions from Umayya’s two statements.',
      },
    },
    {
      id: 'mecca-a2-language-9-production',
      type: 'reflection',
      title: 'Say It: Hear, Ask and Question',
      instructions: 'Create a new, safe A2 situation about school, a club or a shared task. Write or say four short sentences: report something you heard, make a polite request with “asked ... to ...”, ask one past-action question, and use “can” for a possible action. Do not retell Bilal’s suffering.',
      question: 'Can you use Chapter 9 language to solve a different everyday problem?',
      correctAnswer: null,
      explanation: 'A strong response can use “heard that ...”, “asked ... to ...”, “What did ... do?”, and “can + verb” in one short situation.',
      feedback: {
        correct: 'Use the four language frames in one clear everyday situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'News — Report something with “I heard that ...”.', mode: 'Individual' },
        { question: 'Request — Use “I asked ... to ...”.', mode: 'Individual' },
        { question: 'Question — Ask “What did ... do?”.', mode: 'Individual' },
        { question: 'Possible action — Finish with “We/You can ...”.', mode: 'Pair' },
      ],
    },
  ],
};
