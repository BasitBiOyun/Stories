import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 9 onward. */
export const mosesA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  9: [
    {
      id: 'moses-a2-language-9-reason-need',
      type: 'matching',
      title: 'Reasons and Needs',
      instructions: 'Match each Chapter 9 expression with the meaning or function it adds.',
      question: 'How does the chapter explain why Moses accepted the job and what he needed?',
      matchingPairs: [
        { left: 'He couldn’t help his daughters.', right: 'expresses past inability' },
        { left: 'He needed a job and a house.', right: 'expresses things that were necessary for him' },
        { left: 'Moses accepted the job, because he was a stranger in Midian.', right: 'uses because to give a reason' },
        { left: 'needed + noun', right: 'says that something was necessary' },
      ],
      correctAnswer: {
        'He couldn’t help his daughters.': 'expresses past inability',
        'He needed a job and a house.': 'expresses things that were necessary for him',
        'Moses accepted the job, because he was a stranger in Midian.': 'uses because to give a reason',
        'needed + noun': 'says that something was necessary',
      },
      explanation: 'Chapter 9 uses “couldn’t” for past inability, “needed” for necessity, and “because” to explain a reason.',
      feedback: { correct: 'Correct. You separated inability, need and reason.', incorrect: 'Look at why Şuayb could not help his daughters and why Moses accepted the offer.' },
    },
    {
      id: 'moses-a2-language-9-want-offer',
      type: 'matching',
      title: 'Wanting, Offering and Accepting',
      instructions: 'Match each expression with its communicative function.',
      question: 'How do the people in Chapter 9 express intention and respond to an opportunity?',
      matchingPairs: [
        { left: 'I want to thank him for his work.', right: 'expresses a desire or intention with want to + verb' },
        { left: 'Şuayb offered Moses a job.', right: 'describes giving someone an opportunity or choice' },
        { left: 'Moses accepted the job.', right: 'shows that he said yes to the offer' },
        { left: 'Go and call the young man.', right: 'uses an imperative to tell someone what to do' },
      ],
      correctAnswer: {
        'I want to thank him for his work.': 'expresses a desire or intention with want to + verb',
        'Şuayb offered Moses a job.': 'describes giving someone an opportunity or choice',
        'Moses accepted the job.': 'shows that he said yes to the offer',
        'Go and call the young man.': 'uses an imperative to tell someone what to do',
      },
      explanation: 'The chapter moves from an intention (“want to”), to an offer, and then to acceptance. It also uses a direct imperative.',
      feedback: { correct: 'Correct. You followed the language of intention, instruction, offer and acceptance.', incorrect: 'Notice what Şuayb wants, what he tells his daughter to do, and what Moses later accepts.' },
    },
    {
      id: 'moses-a2-language-9-life-sequence',
      type: 'matching',
      title: 'Changes Over Time',
      instructions: 'Match each time expression or verb with its role in the chapter.',
      question: 'How does Chapter 9 show that Moses’s life changed over time?',
      matchingPairs: [
        { left: 'Moses began to stay with the family.', right: 'marks the start of a new situation' },
        { left: 'Later, he married one of the sisters.', right: 'moves the story to a later event' },
        { left: 'After ten years, Moses decided to go back to Egypt.', right: 'places a decision after a stated period of time' },
        { left: 'decided to + verb', right: 'expresses a choice about a future action' },
      ],
      correctAnswer: {
        'Moses began to stay with the family.': 'marks the start of a new situation',
        'Later, he married one of the sisters.': 'moves the story to a later event',
        'After ten years, Moses decided to go back to Egypt.': 'places a decision after a stated period of time',
        'decided to + verb': 'expresses a choice about a future action',
      },
      explanation: '“Began to”, “later”, “after + time”, and “decided to” help the reader follow a changing situation and a later decision.',
      feedback: { correct: 'Correct. You tracked the language that organizes change and decision over time.', incorrect: 'Find the start of Moses’s new life, the later event, and his decision after ten years.' },
    },
    {
      id: 'moses-a2-language-9-production',
      type: 'reflection',
      title: 'Use It: A New Opportunity',
      instructions: 'Imagine a safe new opportunity such as joining a school club, helping at a community event or starting a small project. Write or say four short sentences using at least three Chapter 9 language frames.',
      question: 'Can you explain a need, give a reason, describe an offer or intention, and make a later decision?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use “need + noun”, “because”, “want to + verb”, “offer + person + noun”, “accept”, “later”, “after + time”, or “decide to + verb”.',
      feedback: { correct: 'Use the Chapter 9 language in a new everyday situation instead of retelling Moses’s life in Midian.', incorrect: '' },
      discussionPrompts: [
        { question: 'Need — Say one thing you or another person needed.', mode: 'Individual' },
        { question: 'Reason — Explain one choice with “because”.', mode: 'Individual' },
        { question: 'Opportunity — Describe an offer or something a person wanted to do.', mode: 'Pair' },
        { question: 'Decision — Add a later decision with “later”, “after ...”, or “decided to ...”.', mode: 'Individual' },
      ],
    },
  ],
};
