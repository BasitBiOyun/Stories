import type { Exercise } from '../../../../types';

/** Chapter 4 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'abraham-b2-language-4-source-status',
      type: 'matching',
      title: 'Read the Source Status',
      instructions: 'Match each expression with the degree or type of claim it signals. Focus on language, not on memorising the historical details.',
      question: 'How does Chapter 4 signal that different statements come with different levels of certainty?',
      matchingPairs: [
        { left: 'Some sources say that...', right: 'attributes a claim to part of the source tradition rather than to the narrator as certain fact' },
        { left: 'Most generally speaking, we can say that...', right: 'offers a cautious synthesis across differing possibilities' },
        { left: 'is believed to have lived...', right: 'marks a historical estimate or belief rather than direct certainty' },
        { left: 'Some sources suggest that...', right: 'introduces a tentative source-based proposal' },
      ],
      correctAnswer: {
        'Some sources say that...': 'attributes a claim to part of the source tradition rather than to the narrator as certain fact',
        'Most generally speaking, we can say that...': 'offers a cautious synthesis across differing possibilities',
        'is believed to have lived...': 'marks a historical estimate or belief rather than direct certainty',
        'Some sources suggest that...': 'introduces a tentative source-based proposal',
      },
      explanation: 'B2 readers should notice how reporting verbs, passive belief structures and cautious framing control the strength of a claim. The activity practises those language functions without asking learners to recall which birthplace or date is correct.',
      feedback: {
        correct: 'Correct. You distinguished attribution, cautious synthesis, historical belief and tentative suggestion.',
        incorrect: 'Ask who is responsible for each claim and whether the wording presents it as certain, generalised, believed or merely suggested.',
      },
    },
    {
      id: 'abraham-b2-language-4-cautious-synthesis',
      type: 'multiple-choice',
      title: 'Choose the Best Cautious Synthesis',
      instructions: 'Choose the sentence that preserves the chapter’s discourse stance while combining information.',
      question: 'Which reformulation best keeps the chapter’s uncertainty while giving a concise historical overview?',
      options: [
        'Accounts differ about Abraham’s birthplace; broadly speaking, the chapter places his early life in Mesopotamia, while the precise city and dating remain source-dependent.',
        'Abraham was unquestionably born in one exact Mesopotamian city in one precisely known year.',
        'Because the sources differ, nothing at all can be said about the setting described in the chapter.',
      ],
      correctAnswer: 0,
      explanation: 'A strong B2 synthesis can combine what several statements support while preserving uncertainty around details that the text itself qualifies.',
      feedback: {
        correct: 'Correct. The sentence synthesises the broad setting without erasing the source limits.',
        incorrect: 'A good synthesis should neither turn qualified information into certainty nor pretend that qualified evidence is useless.',
      },
    },
    {
      id: 'abraham-b2-language-4-change-and-contrast',
      type: 'matching',
      title: 'Track Continuity, Change and Contrast',
      instructions: 'Match each form with the discourse relationship it creates in the second half of the chapter.',
      question: 'How does the chapter move from an earlier belief to later religious diversity?',
      matchingPairs: [
        { left: 'a belief that had existed in these lands before', right: 'establishes an earlier state extending back before the main narrative time' },
        { left: 'but it had been forgotten over time', right: 'marks a change that contrasts with the earlier continuity' },
        { left: 'some people worshipped...', right: 'introduces one subgroup within a wider social picture' },
        { left: 'still others worshipped...', right: 'adds a further contrasting subgroup without implying that everyone followed the same practice' },
      ],
      correctAnswer: {
        'a belief that had existed in these lands before': 'establishes an earlier state extending back before the main narrative time',
        'but it had been forgotten over time': 'marks a change that contrasts with the earlier continuity',
        'some people worshipped...': 'introduces one subgroup within a wider social picture',
        'still others worshipped...': 'adds a further contrasting subgroup without implying that everyone followed the same practice',
      },
      explanation: 'The chapter uses past perfect for an earlier state, contrast for historical change, and parallel subgroup phrases to avoid collapsing a varied society into one single practice.',
      feedback: {
        correct: 'Correct. You identified both the time relationship and the way parallel subgroup language organises social contrast.',
        incorrect: 'Look for what happened earlier, what changed later, and how “some... still others...” divides a broad population into different groups.',
      },
    },
    {
      id: 'abraham-b2-language-4-production',
      type: 'reflection',
      title: 'Write a Qualified Historical Overview',
      instructions: 'Write or say an 8–10 sentence paragraph about a disputed or partly uncertain historical topic outside this story. Use at least three different source-status frames such as “some sources say”, “is believed to”, “evidence suggests”, or “broadly speaking, we can say”; include one earlier-state structure with “had + past participle”; show one change with “but/however”; and describe at least two different groups with “some... while/still others...”. Make clear which points are evidence, which are cautious synthesis, and which remain uncertain. Do not retell Chapter 4.',
      question: 'Can you build a coherent B2 historical explanation without making uncertain evidence sound certain?',
      correctAnswer: null,
      explanation: 'A strong response should organise evidence and uncertainty explicitly: attribute claims, synthesise cautiously, locate an earlier state in time, mark change, and distinguish groups rather than overgeneralising.',
      feedback: {
        correct: 'Check that every uncertain point is visibly qualified and that your paragraph still reaches a useful synthesis instead of becoming a list of disconnected caveats.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Source status — Which statement belongs to a named or limited source rather than to you as a certain fact?', mode: 'Individual' },
        { question: 'Synthesis — What can you responsibly say when several sources overlap but do not fully agree?', mode: 'Individual' },
        { question: 'Time — Which earlier condition needs a past-perfect form before you describe later change?', mode: 'Pair' },
        { question: 'Variation — How will you show that different groups acted differently without saying “everyone”?', mode: 'Pair' },
      ],
    },
  ],
};
