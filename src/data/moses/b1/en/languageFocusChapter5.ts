import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 5 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'moses-b1-language-5-background-interruption',
      type: 'matching',
      title: 'Background and Sudden Action',
      instructions: 'Match each expression with the job it does in the narrative.',
      question: 'How does the chapter move from an ongoing scene to sudden action?',
      matchingPairs: [
        { left: 'while Moses was walking in the bazaar', right: 'sets an action already in progress as background' },
        { left: 'he saw two men fighting', right: 'introduces the event Moses notices inside that background' },
        { left: 'Suddenly, a poor and weak man ... called out', right: 'marks an unexpected new action' },
        { left: 'The next day, Moses was again in the bazaar', right: 'moves the story to a later repeated setting' },
      ],
      correctAnswer: {
        'while Moses was walking in the bazaar': 'sets an action already in progress as background',
        'he saw two men fighting': 'introduces the event Moses notices inside that background',
        'Suddenly, a poor and weak man ... called out': 'marks an unexpected new action',
        'The next day, Moses was again in the bazaar': 'moves the story to a later repeated setting',
      },
      explanation: 'The chapter uses “while + past continuous” for background, simple past for the event that enters the scene, “suddenly” for an abrupt development, and “the next day” to shift the timeline forward.',
      feedback: {
        correct: 'Correct. You identified background, interruption, sudden development, and later time movement.',
        incorrect: 'Ask whether the phrase describes an ongoing scene, a new event, a sudden change, or a later time frame.',
      },
    },
    {
      id: 'moses-b1-language-5-description-inference',
      type: 'matching',
      title: 'From Description to Inference',
      instructions: 'Match each structure with the meaning it adds.',
      question: 'How does the chapter identify people and show Moses reaching a judgment?',
      matchingPairs: [
        { left: 'One of them was an Egyptian, while the other was from the Children of Israel.', right: 'contrasts two people in the same scene' },
        { left: 'the same man ... who Moses helped the day before', right: 'identifies a person by adding earlier information about him' },
        { left: 'Moses understood that the Israelite was a quarrelsome man', right: 'shows a conclusion based on repeated behavior' },
        { left: 'not a peaceable man', right: 'sharpens the judgment through negative contrast' },
      ],
      correctAnswer: {
        'One of them was an Egyptian, while the other was from the Children of Israel.': 'contrasts two people in the same scene',
        'the same man ... who Moses helped the day before': 'identifies a person by adding earlier information about him',
        'Moses understood that the Israelite was a quarrelsome man': 'shows a conclusion based on repeated behavior',
        'not a peaceable man': 'sharpens the judgment through negative contrast',
      },
      explanation: '“While” can contrast two people, a relative clause with “who” adds identifying information, and “understood that” introduces an inference rather than a directly observed fact.',
      feedback: {
        correct: 'Good. You separated contrast, added description, and inference.',
        incorrect: 'Look for which phrase compares, which one identifies, and which one shows a conclusion in Moses’s mind.',
      },
    },
    {
      id: 'moses-b1-language-5-voice-intention',
      type: 'matching',
      title: 'Direct Voice, Intention and Challenge',
      instructions: 'Match each line of direct speech with its communicative function.',
      question: 'How do short direct quotations change the force of the scene?',
      matchingPairs: [
        { left: 'Help me!', right: 'makes an urgent direct request' },
        { left: 'Forgive me!', right: 'makes a direct appeal in prayer' },
        { left: 'I have wronged myself.', right: 'expresses a present evaluation of an earlier action' },
        { left: 'Are you going to kill me too?', right: 'uses a future-oriented question as an accusation or challenge' },
      ],
      correctAnswer: {
        'Help me!': 'makes an urgent direct request',
        'Forgive me!': 'makes a direct appeal in prayer',
        'I have wronged myself.': 'expresses a present evaluation of an earlier action',
        'Are you going to kill me too?': 'uses a future-oriented question as an accusation or challenge',
      },
      explanation: 'The chapter alternates narration with direct speech. Imperatives create urgency, present perfect links a past action to present self-evaluation, and “be going to” can frame an expected or feared next action in a confrontational question.',
      feedback: {
        correct: 'Correct. You identified request, appeal, self-evaluation, and challenge.',
        incorrect: 'Focus on what the speaker is trying to do with each sentence, not only on its grammar form.',
      },
    },
    {
      id: 'moses-b1-language-5-connected-production',
      type: 'reflection',
      title: 'Tell a Short Incident Clearly',
      instructions: 'Write or say five connected B1 sentences about a tense public situation. Do not retell the chapter.',
      question: 'Can you combine background, sudden action, identification, inference, and a future-oriented question in one coherent mini-narrative?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include “while + past continuous”, “suddenly”, a relative clause with “who”, “understood/realized that”, and a question with “going to”.',
      feedback: {
        correct: 'Keep the five sentences connected and make each one develop the same event.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the background with “while + past continuous”.', mode: 'Individual' },
        { question: 'Sentence 2 — Introduce an unexpected event with “suddenly”.', mode: 'Individual' },
        { question: 'Sentence 3 — Identify one person with a short “who” clause.', mode: 'Individual' },
        { question: 'Sentence 4 — Show what someone understood or realized from the situation.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a natural future-oriented question using “going to”.', mode: 'Pair' },
      ],
    },
  ],
};
