import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-b1-language-13-command-commitment',
      type: 'matching',
      title: 'Command and Commitment',
      instructions: 'Match each expression with the meaning or function it adds.',
      question: 'How does the opening dialogue move from instruction to commitment?',
      matchingPairs: [
        { left: 'Allah commanded Abraham to build the House of Allah', right: 'reports an instruction given to Abraham' },
        { left: 'Allah told me to do an important task', right: 'reports the content of that instruction in Abraham’s words' },
        { left: 'you will help me in this task', right: 'expresses an expected future role' },
        { left: 'I will help you for sure', right: 'expresses a clear future commitment' },
      ],
      correctAnswer: {
        'Allah commanded Abraham to build the House of Allah': 'reports an instruction given to Abraham',
        'Allah told me to do an important task': 'reports the content of that instruction in Abraham’s words',
        'you will help me in this task': 'expresses an expected future role',
        'I will help you for sure': 'expresses a clear future commitment',
      },
      explanation: 'Command/tell + person + to + verb report an instruction, while will expresses a future role or commitment in the dialogue.',
      feedback: {
        correct: 'Correct. You separated reported instruction from future expectation and commitment.',
        incorrect: 'Ask which phrases report an instruction and which ones refer to what will happen next.',
      },
    },
    {
      id: 'abraham-b1-language-13-state-change-rebuilding',
      type: 'matching',
      title: 'Earlier State, Change and Rebuilding',
      instructions: 'Match each expression with the stage it describes.',
      question: 'How does the chapter describe an earlier state, loss over time, and a new action?',
      matchingPairs: [
        { left: 'The Ka’ba was an ancient building', right: 'describes an earlier state' },
        { left: 'it disappeared over time', right: 'shows a change that happened gradually' },
        { left: 'Father and son found the foundations', right: 'introduces the discovery that makes the next action possible' },
        { left: 'began to construct the new building on it', right: 'marks the start of a rebuilding process' },
      ],
      correctAnswer: {
        'The Ka’ba was an ancient building': 'describes an earlier state',
        'it disappeared over time': 'shows a change that happened gradually',
        'Father and son found the foundations': 'introduces the discovery that makes the next action possible',
        'began to construct the new building on it': 'marks the start of a rebuilding process',
      },
      explanation: 'The paragraph moves from past state to change over time, then to discovery and the beginning of a new process.',
      feedback: {
        correct: 'Correct. You followed the state → change → discovery → new process sequence.',
        incorrect: 'Decide which phrase describes a state, which shows change, which introduces a discovery, and which starts a process.',
      },
    },
    {
      id: 'abraham-b1-language-13-completion-purpose-continuity',
      type: 'matching',
      title: 'Completion, Purpose and Continuity',
      instructions: 'Match each expression with the relationship it creates in the final paragraphs.',
      question: 'How does the chapter connect the end of one mission with a continuing message?',
      matchingPairs: [
        { left: 'After he built the Holy Ka’ba, Abraham’s mission was over', right: 'marks completion after an earlier action' },
        { left: 'a place of worship for all people', right: 'expresses the broader purpose or function of the building' },
        { left: 'Over the years, Ishmael’s children had children', right: 'shows continuity across generations' },
        { left: 'to carry their grandfather Abraham’s message', right: 'expresses purpose for the later generations’ action' },
      ],
      correctAnswer: {
        'After he built the Holy Ka’ba, Abraham’s mission was over': 'marks completion after an earlier action',
        'a place of worship for all people': 'expresses the broader purpose or function of the building',
        'Over the years, Ishmael’s children had children': 'shows continuity across generations',
        'to carry their grandfather Abraham’s message': 'expresses purpose for the later generations’ action',
      },
      explanation: 'After + past action marks completion, while purpose/function language and generational time expressions show how the message continues beyond one person’s lifetime.',
      feedback: {
        correct: 'Correct. You identified completion, function, generational continuity, and purpose.',
        incorrect: 'Ask whether each phrase closes an action, explains function, moves across generations, or gives a purpose.',
      },
    },
    {
      id: 'abraham-b1-language-13-connected-production',
      type: 'reflection',
      title: 'Explain How a Legacy Continues',
      instructions: 'Write or say five connected B1 sentences about a non-story project, tradition, or idea that continues after its founder. Do not retell Chapter 13.',
      question: 'Can you connect instruction, action, completion, purpose, and continuity in one short paragraph?',
      correctAnswer: null,
      explanation: 'A strong response can use told/asked + person + to + verb, will, after, begin/start, to + verb for purpose, and over the years where natural.',
      feedback: {
        correct: 'Keep the five sentences connected as one explanation of how something continues over time.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Report an instruction, request, or goal.', mode: 'Individual' },
        { question: 'Sentence 2 — Show a person’s future commitment or expected role.', mode: 'Individual' },
        { question: 'Sentence 3 — Describe the beginning or completion of an important action.', mode: 'Individual' },
        { question: 'Sentence 4 — Explain the purpose or function of what was created.', mode: 'Individual' },
        { question: 'Sentence 5 — Show how the idea or work continues over the years.', mode: 'Pair' },
      ],
    },
  ],
};
