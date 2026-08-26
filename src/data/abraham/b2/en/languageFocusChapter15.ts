import type { Exercise } from '../../../../types';

/** Chapter 15 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter15: Record<number, Exercise[]> = {
  15: [
    {
      id: 'abraham-b2-language-15-rhetorical-questions',
      type: 'matching',
      title: 'Read Questions as Argument',
      instructions: 'Match each question or challenge with the discourse function it performs. Focus on how the wording pressures a belief, not on recalling the event.',
      question: 'How does Abraham turn questions into a test of the idols’ claimed status?',
      matchingPairs: [
        { left: 'Do the idols see you when you bow down before them?', right: 'tests whether the object of worship can perceive the worshipper' },
        { left: 'Do they benefit you in any way?', right: 'tests whether the object of worship can produce a meaningful effect' },
        { left: 'Are you criticizing our gods and our forefathers? Or are you just joking?', right: 'frames the opponents’ attempt to reinterpret a serious challenge as either insult or play' },
        { left: 'see if they have any power to harm me by now', right: 'turns the claim of divine power into an observable test' },
      ],
      correctAnswer: {
        'Do the idols see you when you bow down before them?': 'tests whether the object of worship can perceive the worshipper',
        'Do they benefit you in any way?': 'tests whether the object of worship can produce a meaningful effect',
        'Are you criticizing our gods and our forefathers? Or are you just joking?': 'frames the opponents’ attempt to reinterpret a serious challenge as either insult or play',
        'see if they have any power to harm me by now': 'turns the claim of divine power into an observable test',
      },
      explanation: 'The questions are not requests for missing information. They function as argumentative tests that expose a gap between claimed divine status and observable ability.',
      feedback: { correct: 'Correct. You identified the argumentative role of the questions.', incorrect: 'Ask what each question is testing: perception, benefit, seriousness, or power.' },
    },
    {
      id: 'abraham-b2-language-15-tradition-contrast',
      type: 'multiple-choice',
      title: 'Separate Evidence from Inherited Practice',
      instructions: 'Choose the interpretation that best explains the contrast built by “they knew... but...”.',
      question: 'What does the sentence “they knew the idols were lifeless but that their forefathers had worshipped them” do at discourse level?',
      options: [
        'It places acknowledged evidence and inherited practice in conflict, showing that tradition is being used to defend a belief despite the admitted fact.',
        'It shows that the forefathers supplied new evidence that the idols were alive.',
        'It removes the contrast by presenting knowledge and inherited practice as the same kind of support.',
      ],
      correctAnswer: 0,
      explanation: 'The conjunction “but” makes the conflict explicit: the speakers acknowledge the idols are lifeless, yet inherited practice is treated as confirmation.',
      feedback: { correct: 'Correct. The sentence contrasts admitted evidence with inherited justification.', incorrect: 'Focus on what “but” places on opposite sides of the sentence.' },
    },
    {
      id: 'abraham-b2-language-15-definition-contrast',
      type: 'matching',
      title: 'Follow the Reframing of Worthiness',
      instructions: 'Match the language with the meaning relation it creates. Notice how the paragraph moves from inherited authority to a definition of what deserves worship.',
      question: 'How does the passage build a contrast between the Lord and the idols?',
      matchingPairs: [
        { left: 'Who alone is worthy of worship', right: 'narrows legitimate worship to one referent through exclusivity' },
        { left: 'Who is the Creator of the heavens and the earth', right: 'supports worthiness with a clause describing creative agency' },
        { left: 'Who regulates all affairs of life', right: 'adds continuing active governance rather than passive existence' },
        { left: 'unlike the dumb idols which are just stone and wood', right: 'uses explicit contrast plus a relative clause to reduce the idols to material objects' },
      ],
      correctAnswer: {
        'Who alone is worthy of worship': 'narrows legitimate worship to one referent through exclusivity',
        'Who is the Creator of the heavens and the earth': 'supports worthiness with a clause describing creative agency',
        'Who regulates all affairs of life': 'adds continuing active governance rather than passive existence',
        'unlike the dumb idols which are just stone and wood': 'uses explicit contrast plus a relative clause to reduce the idols to material objects',
      },
      explanation: 'The paragraph does more than name two sides. It accumulates clauses describing active divine agency, then explicitly contrasts that with lifeless material objects.',
      feedback: { correct: 'Correct. You traced how exclusivity, relative clauses and contrast build the argument.', incorrect: 'Look for how each clause adds agency or reduces the alternative claim.' },
    },
    {
      id: 'abraham-b2-language-15-production',
      type: 'reflection',
      title: 'Build an Evidence-vs-Tradition Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story belief, habit, rule or claim that people defend mainly because “it has always been done this way.” Include two rhetorical questions that test the claim, one sentence using “although” or “even though” to acknowledge an existing fact, one “but” contrast between evidence and inherited practice, one relative clause that defines a stronger alternative, and one observable test introduced with “see whether...” or “test whether...”. End with a balanced conclusion rather than an insult. Do not retell the Abraham story.',
      question: 'Can you turn questions, contrast, definition and an observable test into one coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should acknowledge what people believe, distinguish inherited practice from evidence, test the claim through questions, define an alternative clearly, and conclude in a controlled way.',
      feedback: { correct: 'Check that every structure contributes to the argument rather than appearing as an isolated grammar example.', incorrect: '' },
      discussionPrompts: [
        { question: 'Questions — What two questions reveal whether the claim actually works?', mode: 'Individual' },
        { question: 'Contrast — What fact is acknowledged, and what inherited practice conflicts with it?', mode: 'Individual' },
        { question: 'Definition — What stronger alternative can you define with a relative clause?', mode: 'Pair' },
        { question: 'Test — What observable result would support or weaken the claim?', mode: 'Pair' },
      ],
    },
  ],
};
