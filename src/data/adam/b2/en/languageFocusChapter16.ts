import type { Exercise } from '../../../../types';

/** Chapter 16 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter16: Record<number, Exercise[]> = {
  16: [
    {
      id: 'adam-b2-language-16-simultaneous-guidance',
      type: 'matching',
      title: 'Read Simultaneous Roles and Actions',
      instructions: 'Match each Chapter 16 expression with the relationship it builds.',
      question: 'How does the opening sentence compress Adam’s continuing prophetic role into one structure?',
      matchingPairs: [
        { left: 'he was a prophet', right: 'states the main identity that frames the sentence' },
        { left: 'advising his children and grandchildren', right: 'adds an ongoing action performed in that role' },
        { left: 'telling them about Allah', right: 'adds a second simultaneous act of guidance' },
        { left: 'calling them to believe in Him', right: 'adds the communicative purpose toward which the guidance is directed' },
      ],
      correctAnswer: {
        'he was a prophet': 'states the main identity that frames the sentence',
        'advising his children and grandchildren': 'adds an ongoing action performed in that role',
        'telling them about Allah': 'adds a second simultaneous act of guidance',
        'calling them to believe in Him': 'adds the communicative purpose toward which the guidance is directed',
      },
      explanation: 'The sentence uses a main clause plus parallel -ing phrases to layer simultaneous actions around one continuing role. The grammar helps the reader see prophethood as active guidance rather than a label alone.',
      feedback: {
        correct: 'Correct. You tracked how parallel -ing phrases expand one central role.',
        incorrect: 'Separate the main identity from the three actions that explain what that role involves.',
      },
    },
    {
      id: 'adam-b2-language-16-source-status',
      type: 'multiple-choice',
      title: 'Preserve Source Status',
      instructions: 'Choose the most careful analysis of the wording.',
      question: 'Why does the chapter say “It was narrated that when Adam’s death drew near...” rather than simply stating the detail as an unqualified fact?',
      options: [
        'The passive reporting frame marks the detail as transmitted narration and preserves distance between the writer and the claim.',
        'The phrase proves that the event is uncertain and should be rejected.',
        'The phrase turns the sentence into a direct quotation from the Qur’an.',
      ],
      correctAnswer: 0,
      explanation: '“It was narrated that...” is a source-qualification device. It attributes the detail to transmitted narration without either erasing the report or presenting it as if the writer directly witnessed or independently established it.',
      feedback: {
        correct: 'Correct. The wording reports a tradition while keeping its source status visible.',
        incorrect: 'Ask what the reporting phrase tells you about where the information comes from and how strongly the writer personally asserts it.',
      },
    },
    {
      id: 'adam-b2-language-16-future-unity',
      type: 'matching',
      title: 'Build Future Continuity and Contrast',
      instructions: 'Match each expression with its discourse function.',
      question: 'How does the chapter move from Adam’s final advice to a continuing pattern of guidance?',
      matchingPairs: [
        { left: 'Allah would not leave man alone on Earth', right: 'presents a future assurance from a past viewpoint' },
        { left: 'but would send His prophets to guide them', right: 'uses contrast to replace abandonment with continuing guidance' },
        { left: 'The prophets would have different names and miracles', right: 'acknowledges variation across future messengers' },
        { left: 'but they would be united in one thing', right: 'turns variation into a larger point of continuity and shared purpose' },
      ],
      correctAnswer: {
        'Allah would not leave man alone on Earth': 'presents a future assurance from a past viewpoint',
        'but would send His prophets to guide them': 'uses contrast to replace abandonment with continuing guidance',
        'The prophets would have different names and miracles': 'acknowledges variation across future messengers',
        'but they would be united in one thing': 'turns variation into a larger point of continuity and shared purpose',
      },
      explanation: 'Repeated “would” places future events inside Adam’s past viewpoint. The two “but” contrasts organise the message: not abandonment but guidance; not sameness in every detail but unity in purpose.',
      feedback: {
        correct: 'Correct. You identified both the time viewpoint and the contrast-to-unity structure.',
        incorrect: 'Look separately at what “would” does to time and what each “but” does to the argument.',
      },
    },
    {
      id: 'adam-b2-language-16-production',
      type: 'reflection',
      title: 'Write a Careful Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story person or institution passing guidance, values, or responsibility to a later generation. Use one main-role sentence expanded with two parallel -ing phrases, one qualified reporting expression such as “It was reported that...” or “According to...”, at least two future-in-the-past forms with “would”, and one contrast pattern of the form “different..., but united in...”. Keep reported information clearly separate from your own interpretation. Do not retell Chapter 16.',
      question: 'Can you describe continuity across generations while keeping source status, time viewpoint, and contrast clear?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish role from action, mark reported information explicitly, keep future events anchored to a past viewpoint, and use contrast to show how diversity can coexist with continuity.',
      feedback: {
        correct: 'Keep each reporting frame attached to the claim it qualifies, and make the “would” forms consistently reflect the earlier viewpoint.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Role — What central role or identity frames the person or institution?', mode: 'Individual' },
        { question: 'Source — Which sentence needs an explicit reporting frame rather than direct assertion?', mode: 'Individual' },
        { question: 'Continuity — Which later actions will be expressed with “would”?', mode: 'Pair' },
        { question: 'Contrast — What can differ while a shared purpose remains?', mode: 'Pair' },
      ],
    },
  ],
};
