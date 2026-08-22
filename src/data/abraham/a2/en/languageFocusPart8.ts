import type { Exercise } from '../../../../types';

/**
 * Chapter 11 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge about why Abraham left Babylon.
 */
export const abrahamA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-a2-language-11-decision-purpose',
      type: 'matching',
      title: 'Decisions and Purpose',
      instructions: 'Match each Chapter 11 expression with the language job it performs.',
      question: 'How does the chapter show a decision, a journey goal and a request to travel?',
      matchingPairs: [
        { left: 'he decided to leave Babylon', right: 'decide to + verb expresses a decision' },
        { left: 'travel to other lands to tell people about Allah’s message', right: 'to + verb can explain the purpose of an action' },
        { left: 'Abraham began his journey', right: 'begin + noun marks the start of an activity or event' },
        { left: 'Allah asked Abraham to travel with his wife and the little child', right: 'ask + person + to + verb tells someone to do something' },
      ],
      correctAnswer: {
        'he decided to leave Babylon': 'decide to + verb expresses a decision',
        'travel to other lands to tell people about Allah’s message': 'to + verb can explain the purpose of an action',
        'Abraham began his journey': 'begin + noun marks the start of an activity or event',
        'Allah asked Abraham to travel with his wife and the little child': 'ask + person + to + verb tells someone to do something',
      },
      explanation: 'Chapter 11 uses “decided to” for a choice, “to + verb” for purpose, “began” for a start, and “asked + person + to + verb” for a requested action.',
      feedback: {
        correct: 'Good. You separated decision, purpose, beginning and request.',
        incorrect: 'Ask what each phrase does: shows a choice, gives a purpose, starts an event, or asks someone to act.',
      },
    },
    {
      id: 'abraham-a2-language-11-journey-language',
      type: 'matching',
      title: 'Talking About a Journey',
      instructions: 'Match each expression with what it tells us about travel.',
      question: 'How does Chapter 11 describe direction, transport, time and destination?',
      matchingPairs: [
        { left: 'from Babylon to Syria and Palestine', right: 'from ... to ... shows a starting point and destination' },
        { left: 'on camels', right: 'on + transport shows how people travelled' },
        { left: 'During his journey', right: 'during + noun places an event inside a period of time' },
        { left: 'Finally, they arrived at a quiet valley', right: 'finally marks the last stage, and arrive at gives the destination' },
      ],
      correctAnswer: {
        'from Babylon to Syria and Palestine': 'from ... to ... shows a starting point and destination',
        'on camels': 'on + transport shows how people travelled',
        'During his journey': 'during + noun places an event inside a period of time',
        'Finally, they arrived at a quiet valley': 'finally marks the last stage, and arrive at gives the destination',
      },
      explanation: 'The chapter combines direction, means of transport, time markers and arrival language to make the journey easy to follow.',
      feedback: {
        correct: 'Correct. You identified four useful ways to describe travel.',
        incorrect: 'Look for the start and destination, the transport, a time phrase, and the final arrival.',
      },
    },
    {
      id: 'abraham-a2-language-11-family-naming',
      type: 'matching',
      title: 'Family and Naming',
      instructions: 'Match each Chapter 11 sentence with the pattern it shows.',
      question: 'How does the chapter introduce family relationships and names?',
      matchingPairs: [
        { left: 'The woman’s name was Sarah', right: 'someone’s name was ... introduces or reports a name' },
        { left: 'the man’s name was Lot', right: 'possessive + name was ... tells who a name belongs to' },
        { left: 'Abraham married Hagar and had a son', right: 'past simple reports completed family events' },
        { left: 'They named the baby Ishmael', right: 'name + person + name tells what name was given' },
      ],
      correctAnswer: {
        'The woman’s name was Sarah': 'someone’s name was ... introduces or reports a name',
        'the man’s name was Lot': 'possessive + name was ... tells who a name belongs to',
        'Abraham married Hagar and had a son': 'past simple reports completed family events',
        'They named the baby Ishmael': 'name + person + name tells what name was given',
      },
      explanation: 'Chapter 11 uses simple past forms to introduce people, family events and the name given to a child.',
      feedback: {
        correct: 'Good. You distinguished introducing a name, reporting family events and giving a name.',
        incorrect: 'Notice which sentences tell an existing name and which sentence gives a new name.',
      },
    },
    {
      id: 'abraham-a2-language-11-production',
      type: 'reflection',
      title: 'Say It: A Short Journey',
      instructions: 'Write or say four or five short A2 sentences about a journey. Use at least four Chapter 11 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you describe a decision, purpose, route, travel detail and arrival?',
      correctAnswer: null,
      explanation: 'A strong response can use “decided to + verb”, a purpose with “to + verb”, “from ... to ...”, “on + transport”, “during ...”, “with ...”, “finally”, “arrived at ...”, or “asked + person + to + verb”.',
      feedback: {
        correct: 'Use the chapter patterns to make a short, clear journey description.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Decision — Use “decided to + verb”.', mode: 'Individual' },
        { question: 'Purpose — Add “to + verb” to explain why.', mode: 'Individual' },
        { question: 'Route — Use “from ... to ...”.', mode: 'Individual' },
        { question: 'Travel detail — Add “on ...”, “with ...”, or “during ...”.', mode: 'Individual' },
        { question: 'Arrival — Finish with “Finally, ... arrived at ...”.', mode: 'Pair' },
      ],
    },
  ],
};
