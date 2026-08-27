import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 8 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'moses-b1-language-8-reason-choice',
      type: 'matching',
      title: 'Reason, Need and Choice',
      instructions: 'Match each expression with the function it performs in the chapter.',
      question: 'How does the text connect Moses’s situation with the choices he makes in Midian?',
      matchingPairs: [
        { left: 'Şuayb offered Moses a job.', right: 'introduces an opportunity' },
        { left: 'He accepted the offer, because he was a stranger in Midian.', right: 'gives a reason for the decision with “because”' },
        { left: 'he urgently needed a job and a house', right: 'adds a practical need that supports the decision' },
        { left: 'while he was staying with them', right: 'shows one action continuing during the same period as another' },
      ],
      correctAnswer: {
        'Şuayb offered Moses a job.': 'introduces an opportunity',
        'He accepted the offer, because he was a stranger in Midian.': 'gives a reason for the decision with “because”',
        'he urgently needed a job and a house': 'adds a practical need that supports the decision',
        'while he was staying with them': 'shows one action continuing during the same period as another',
      },
      explanation: 'The passage connects an opportunity with Moses’s circumstances. “Because” explains his choice, while “while” places continuing actions inside the same period.',
      feedback: {
        correct: 'Correct. You identified opportunity, reason, need and simultaneous action.',
        incorrect: 'Separate what is offered, why Moses accepts it, what he needs, and what happens during his stay.',
      },
    },
    {
      id: 'moses-b1-language-8-duration-decision',
      type: 'matching',
      title: 'From a Long Period to a New Decision',
      instructions: 'Match each expression with the time or decision meaning it creates.',
      question: 'How does the chapter move from a settled period in Midian to a new stage?',
      matchingPairs: [
        { left: 'After living in Midian for about ten years ...', right: 'looks back over a completed period before the next event' },
        { left: 'Moses decided to go back to Egypt.', right: 'expresses a deliberate new decision' },
        { left: 'He took his family and started to travel towards Egypt.', right: 'shows the decision becoming action' },
        { left: 'They travelled a long time.', right: 'extends the journey across a period of time' },
      ],
      correctAnswer: {
        'After living in Midian for about ten years ...': 'looks back over a completed period before the next event',
        'Moses decided to go back to Egypt.': 'expresses a deliberate new decision',
        'He took his family and started to travel towards Egypt.': 'shows the decision becoming action',
        'They travelled a long time.': 'extends the journey across a period of time',
      },
      explanation: '“After + -ing” places the long Midian period before the next stage, “decided to” marks a choice, and “started to” shows the beginning of the action that follows.',
      feedback: {
        correct: 'Good. You followed the change from duration to decision and then action.',
        incorrect: 'Look for the phrase that closes the long Midian period, the decision phrase, and the verb that marks the start of the journey.',
      },
    },
    {
      id: 'moses-b1-language-8-background-purpose',
      type: 'matching',
      title: 'Background, Sudden Event and Purpose',
      instructions: 'Match the language with the narrative function it performs near the end of the chapter.',
      question: 'How does the text build the winter scene and explain Moses’s next action?',
      matchingPairs: [
        { left: 'It was getting dark and cold.', right: 'creates a developing background condition' },
        { left: 'They were crossing a valley between mountains.', right: 'shows an action already in progress in the background' },
        { left: 'Suddenly, Moses saw a fire on the hillside.', right: 'introduces a new event that interrupts the background scene' },
        { left: 'Let me go and take some burning sticks ...', right: 'expresses an immediate intention or proposal' },
        { left: 'to get warm', right: 'states the purpose of going to the fire' },
      ],
      correctAnswer: {
        'It was getting dark and cold.': 'creates a developing background condition',
        'They were crossing a valley between mountains.': 'shows an action already in progress in the background',
        'Suddenly, Moses saw a fire on the hillside.': 'introduces a new event that interrupts the background scene',
        'Let me go and take some burning sticks ...': 'expresses an immediate intention or proposal',
        'to get warm': 'states the purpose of going to the fire',
      },
      explanation: 'The text uses progressive forms for background, “suddenly” for a new event, “let me” for immediate intention, and “to + verb” to explain purpose.',
      feedback: {
        correct: 'Correct. You identified background, interruption, intention and purpose.',
        incorrect: 'Find what was already developing, what happened suddenly, what Moses proposed, and why he wanted to do it.',
      },
    },
    {
      id: 'moses-b1-language-8-connected-production',
      type: 'reflection',
      title: 'Explain a Change of Plan',
      instructions: 'Write or say five connected B1 sentences about someone who spends a long period in one place, decides to leave, and then changes action because of a sudden situation. Do not retell the chapter.',
      question: 'Can you connect duration, decision, background, a sudden event and purpose naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes “After living/working...”, “decided to...”, a past-progressive background sentence, “Suddenly...”, and “to + verb” for purpose.',
      feedback: {
        correct: 'Keep the five sentences connected so the sudden event naturally changes what the person does next.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a long period using “After + -ing” or another duration phrase.', mode: 'Individual' },
        { question: 'Sentence 2 — State a new decision using “decided to”.', mode: 'Individual' },
        { question: 'Sentence 3 — Build the background with a past-progressive form.', mode: 'Individual' },
        { question: 'Sentence 4 — Introduce an unexpected event with “Suddenly”.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain the next action and its purpose with “to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
