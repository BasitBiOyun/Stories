import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-b1-language-8-degree-result',
      type: 'matching',
      title: 'Degree and Result Under Extreme Conditions',
      instructions: 'Match each Chapter 8 expression with the relationship it creates.',
      question: 'How does the chapter connect extreme conditions with their results?',
      matchingPairs: [
        { left: 'The fire was so big that people couldn’t approach it', right: 'shows an extreme degree followed by its result' },
        { left: 'The heat was so strong that even birds couldn’t fly over the rising flames', right: 'uses so...that to show how intense the heat was' },
        { left: 'However, Abraham stayed calm', right: 'contrasts external danger with Abraham’s response' },
        { left: 'because he trusted Allah', right: 'gives the reason for his calm response' },
      ],
      correctAnswer: {
        'The fire was so big that people couldn’t approach it': 'shows an extreme degree followed by its result',
        'The heat was so strong that even birds couldn’t fly over the rising flames': 'uses so...that to show how intense the heat was',
        'However, Abraham stayed calm': 'contrasts external danger with Abraham’s response',
        'because he trusted Allah': 'gives the reason for his calm response',
      },
      explanation: 'The chapter uses degree-result, contrast, and cause relationships to make the danger and Abraham’s response clear.',
      feedback: {
        correct: 'Correct. You distinguished result, contrast, and cause.',
        incorrect: 'Check whether the phrase shows intensity and result, contrasts two ideas, or explains why something happened.',
      },
    },
    {
      id: 'abraham-b1-language-8-future-viewpoint',
      type: 'matching',
      title: 'Looking Forward from a Past Moment',
      instructions: 'Match each expression with what it communicates from the story’s past viewpoint.',
      question: 'How does Chapter 8 talk about expected future events from a past moment?',
      matchingPairs: [
        { left: 'He knew that Allah would never leave him alone', right: 'reports a future expectation from a past viewpoint' },
        { left: 'whatever happens, it will be for his own good', right: 'expresses confidence about an uncertain future event' },
        { left: 'People came to see what would happen', right: 'places a future event inside a past-time purpose or expectation' },
        { left: 'asked, “Is there anything you wish for?”', right: 'uses a direct question to ask about a present wish in the scene' },
      ],
      correctAnswer: {
        'He knew that Allah would never leave him alone': 'reports a future expectation from a past viewpoint',
        'whatever happens, it will be for his own good': 'expresses confidence about an uncertain future event',
        'People came to see what would happen': 'places a future event inside a past-time purpose or expectation',
        'asked, “Is there anything you wish for?”': 'uses a direct question to ask about a present wish in the scene',
      },
      explanation: 'B1 narratives often shift viewpoint: would can describe something future relative to a past moment, while direct questions remain anchored in the scene.',
      feedback: {
        correct: 'Correct. You tracked time and viewpoint across the narrative.',
        incorrect: 'Ask whether the event is future from the narrator’s past moment or happening directly inside the scene.',
      },
    },
    {
      id: 'abraham-b1-language-8-passive-purpose-result',
      type: 'matching',
      title: 'Process, Purpose, and Result',
      instructions: 'Match each structure with the function it performs.',
      question: 'How does the chapter describe what was done to Abraham and what happened afterwards?',
      matchingPairs: [
        { left: 'Firewood was collected for the fire', right: 'uses the passive because the action matters more than who performed it' },
        { left: 'his hands and feet were tied', right: 'focuses on Abraham as the receiver of an action' },
        { left: 'a machine which was used to throw Abraham into the fire', right: 'combines passive description with purpose' },
        { left: 'the fire turned out to be safe / turned into a garden', right: 'describes an unexpected final state or transformation' },
      ],
      correctAnswer: {
        'Firewood was collected for the fire': 'uses the passive because the action matters more than who performed it',
        'his hands and feet were tied': 'focuses on Abraham as the receiver of an action',
        'a machine which was used to throw Abraham into the fire': 'combines passive description with purpose',
        'the fire turned out to be safe / turned into a garden': 'describes an unexpected final state or transformation',
      },
      explanation: 'Passive forms organize the punishment process, while purpose and result expressions explain what actions were for and how the situation finally changed.',
      feedback: {
        correct: 'Correct. You identified process focus, purpose, and final result.',
        incorrect: 'Decide whether the sentence focuses on the receiver of an action, explains purpose, or describes the final state.',
      },
    },
    {
      id: 'abraham-b1-language-8-connected-production',
      type: 'reflection',
      title: 'Describe Pressure and an Unexpected Outcome',
      instructions: 'Write or say four connected B1 sentences about a new situation involving pressure and an unexpected result. Do not retell Chapter 8.',
      question: 'Can you connect degree-result, contrast/cause, a past viewpoint, and a final change?',
      correctAnswer: null,
      explanation: 'A strong response can use so...that, however/because, knew/thought that ... would, and turned out to be/became.',
      feedback: {
        correct: 'Keep the four sentences connected as one short narrative.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe an extreme situation using so...that.', mode: 'Individual' },
        { question: 'Sentence 2 — Add a contrasting response and explain it with however and/or because.', mode: 'Individual' },
        { question: 'Sentence 3 — Report what someone expected using knew/thought that ... would.', mode: 'Individual' },
        { question: 'Sentence 4 — End with an unexpected result using turned out to be, became, or turned into.', mode: 'Pair' },
      ],
    },
  ],
};
