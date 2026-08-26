import type { Exercise } from '../../../../types';

/** Chapter 17 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter17: Record<number, Exercise[]> = {
  17: [
    {
      id: 'adam-b2-language-17-scope-exception',
      type: 'matching',
      title: 'Track Scope and Exception',
      instructions: 'Match each expression with the relationship it creates in the quoted argument.',
      question: 'How do the universal and exception expressions define the limits of Satan’s claim and authority?',
      matchingPairs: [
        { left: 'I will mislead them all', right: 'states a broad claim covering humanity as a whole' },
        { left: 'Except for Your sincere servants among them', right: 'removes one group from the scope of that broad claim' },
        { left: 'Over My servants you have no authority', right: 'states the general limit on Satan’s power' },
        { left: 'except for the sinners who follow you', right: 'marks the group whose own following changes the outcome' },
      ],
      correctAnswer: {
        'I will mislead them all': 'states a broad claim covering humanity as a whole',
        'Except for Your sincere servants among them': 'removes one group from the scope of that broad claim',
        'Over My servants you have no authority': 'states the general limit on Satan’s power',
        'except for the sinners who follow you': 'marks the group whose own following changes the outcome',
      },
      explanation: 'The repeated exception pattern prevents an absolute reading. Broad statements are narrowed by explicit groups, so the argument depends on scope rather than on one uncontrolled universal claim.',
      feedback: {
        correct: 'Correct. You identified how exceptions reshape the scope of the surrounding statements.',
        incorrect: 'Look for the words that first make a broad statement and then remove a specific group from it.',
      },
    },
    {
      id: 'adam-b2-language-17-concession-reframing',
      type: 'multiple-choice',
      title: 'Read Concession and Reframing',
      instructions: 'Choose the analysis that best explains the sentence structure.',
      question: 'What does the pattern “although he is unquestionably a rebel against Allah ... but rather underlines his anti-human attitude” do in the paragraph?',
      options: [
        'It concedes one true description, then redirects the reader toward the aspect the paragraph wants to emphasise more strongly.',
        'It denies that Satan is described as rebellious against Allah.',
        'It presents the two descriptions as unrelated facts with equal argumentative weight.',
      ],
      correctAnswer: 0,
      explanation: 'The concessive parenthesis keeps the first description valid while the “but rather” movement reframes the emphasis. B2 readers need to distinguish what the writer accepts from what the writer foregrounds.',
      feedback: {
        correct: 'Correct. Concession preserves one point while reframing tells the reader where the main emphasis lies.',
        incorrect: 'Ask whether the sentence rejects the first description or accepts it before shifting emphasis.',
      },
    },
    {
      id: 'adam-b2-language-17-cause-appearance',
      type: 'matching',
      title: 'Separate Reality from Appearance',
      instructions: 'Match each clause with its discourse function.',
      question: 'How does the chapter explain why Satan can appear stronger than he actually is?',
      matchingPairs: [
        { left: 'Satan alone is not strong', right: 'states the writer’s central evaluation of Satan’s independent power' },
        { left: 'it is only man’s weakness and lack of morals and carefulness', right: 'identifies the human conditions presented as the cause' },
        { left: 'that make Satan look so strong', right: 'describes an appearance produced by those conditions rather than independent strength' },
        { left: 'In fact', right: 'signals that the writer is clarifying or correcting the interpretation that came before' },
      ],
      correctAnswer: {
        'Satan alone is not strong': 'states the writer’s central evaluation of Satan’s independent power',
        'it is only man’s weakness and lack of morals and carefulness': 'identifies the human conditions presented as the cause',
        'that make Satan look so strong': 'describes an appearance produced by those conditions rather than independent strength',
        'In fact': 'signals that the writer is clarifying or correcting the interpretation that came before',
      },
      explanation: 'The structure distinguishes cause from appearance: the text does not say Satan possesses unlimited independent strength; it explains how human weakness can make his influence appear stronger.',
      feedback: {
        correct: 'Correct. You separated the stated reality, the cause, and the resulting appearance.',
        incorrect: 'Identify which clause evaluates reality, which names the cause, and which describes only how something appears.',
      },
    },
    {
      id: 'adam-b2-language-17-production',
      type: 'reflection',
      title: 'Build a Qualified Final Argument',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which an influence seems powerful but actually depends on human choices, habits, or conditions. Use one broad statement narrowed by an exception, one concessive pattern such as “although..., ...”, one corrective reframing with “but rather” or “in fact”, and one cause-to-appearance pattern such as “it is ... that makes ... look ...”. End with a genuine open question that follows from your argument. Do not retell Chapter 17.',
      question: 'Can you build a nuanced argument that limits an absolute claim, reframes emphasis, explains apparent power, and ends with a meaningful question?',
      correctAnswer: null,
      explanation: 'A strong B2 response should control scope, preserve a conceded point without losing the main emphasis, distinguish actual power from apparent power, and make the final question emerge logically from the preceding argument.',
      feedback: {
        correct: 'Check that your exception truly narrows the broad statement and that your final question grows from the argument rather than appearing suddenly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Scope — What broad claim will you make, and which group or case will you exclude?', mode: 'Individual' },
        { question: 'Concession — What point will you accept before redirecting the emphasis?', mode: 'Individual' },
        { question: 'Cause — Which human condition creates the appearance of greater power?', mode: 'Pair' },
        { question: 'Final question — What unresolved issue follows naturally from your paragraph?', mode: 'Pair' },
      ],
    },
  ],
};
