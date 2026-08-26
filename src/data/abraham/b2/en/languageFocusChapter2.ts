import type { Exercise } from '../../../../types';

/** Chapter 2 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter2: Record<number, Exercise[]> = {
  2: [
    {
      id: 'abraham-b2-language-2-definition-chain',
      type: 'matching',
      title: 'Follow the Definition Chain',
      instructions: 'Match each expression with the job it performs in the chapter’s explanation of Hanifism.',
      question: 'How does the chapter move from naming a concept to defining and extending it?',
      matchingPairs: [
        { left: 'is often described as a hanif', right: 'introduces a recurring description of Abraham' },
        { left: 'a hanif is a monotheist who...', right: 'defines the category through a relative clause' },
        { left: 'Hanifism is the belief in...', right: 'moves from the person-label to the belief system itself' },
        { left: 'that is', right: 'reformulates an abstract claim in a more explicit way' },
      ],
      correctAnswer: {
        'is often described as a hanif': 'introduces a recurring description of Abraham',
        'a hanif is a monotheist who...': 'defines the category through a relative clause',
        'Hanifism is the belief in...': 'moves from the person-label to the belief system itself',
        'that is': 'reformulates an abstract claim in a more explicit way',
      },
      explanation: 'The chapter develops meaning step by step: it introduces a label, defines the person described by that label, names the wider belief system, and then reformulates a difficult idea for the reader.',
      feedback: {
        correct: 'Correct. You tracked how the text builds a concept through linked definitions and reformulation.',
        incorrect: 'Look at whether each expression introduces a label, defines it, expands it into a system, or restates an idea more explicitly.',
      },
    },
    {
      id: 'abraham-b2-language-2-stance',
      type: 'multiple-choice',
      title: 'Distinguish Claim from Cautious Stance',
      instructions: 'Choose the analysis that best explains the wording.',
      question: 'What does “We may say that it is the former version of Islam” do differently from a direct sentence such as “Hanifism is the belief in the oneness of Allah”?',
      options: [
        'It marks the statement as an interpretive formulation rather than presenting it with the same directness as the definition.',
        'It proves that the writer is unsure what Hanifism means at all.',
        'It changes the topic from religion to Abraham’s personal biography.',
      ],
      correctAnswer: 0,
      explanation: '“We may say that” lowers the force of the claim and signals interpretive stance. B2 readers should notice when a text defines something directly and when it presents a conclusion more cautiously.',
      feedback: {
        correct: 'Correct. You distinguished a direct definition from a more qualified interpretive statement.',
        incorrect: 'Compare the strength of “is” with the softer framing created by “we may say that”.',
      },
    },
    {
      id: 'abraham-b2-language-2-cause-result',
      type: 'matching',
      title: 'Build the Cause–Result–Conclusion Chain',
      instructions: 'Match each connector or clause with its discourse function.',
      question: 'How does the final part of the chapter turn explanation into a conclusion?',
      matchingPairs: [
        { left: 'Due to the development or worsening of human capacity and capabilities', right: 'introduces the cause offered for later changes in details' },
        { left: 'some changes in details were necessary', right: 'states the result presented as necessary in the chapter' },
        { left: 'So', right: 'signals that the writer is drawing a conclusion from the explanation before it' },
        { left: 'the difference ... is only in the acts of worship', right: 'states the chapter’s concluding contrast between continuity and change' },
      ],
      correctAnswer: {
        'Due to the development or worsening of human capacity and capabilities': 'introduces the cause offered for later changes in details',
        'some changes in details were necessary': 'states the result presented as necessary in the chapter',
        'So': 'signals that the writer is drawing a conclusion from the explanation before it',
        'the difference ... is only in the acts of worship': 'states the chapter’s concluding contrast between continuity and change',
      },
      explanation: 'The paragraph is organised as an argument: cause → stated necessity → conclusion. Recognising that structure helps the reader separate the chapter’s reasoning from isolated factual statements.',
      feedback: {
        correct: 'Correct. You identified how the paragraph moves from cause to result and then to conclusion.',
        incorrect: 'Track the logic: what explains the change, what follows from that explanation, and which phrase announces the conclusion?',
      },
    },
    {
      id: 'abraham-b2-language-2-production',
      type: 'reflection',
      title: 'Explain Continuity and Change',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story tradition, system or practice that has a stable core but has changed in some details over time. Define one key term with a relative clause, use a cautious stance marker such as “we may say that”, reformulate one idea with “that is”, and build one clear cause → result → conclusion chain with “due to” and “so” or equivalent expressions. End by stating what remained constant and what changed. Do not retell Chapter 2.',
      question: 'Can you use definition, reformulation, stance and logical connection to explain continuity and change clearly?',
      correctAnswer: null,
      explanation: 'A strong B2 response should organise ideas rather than simply insert target phrases. The reader should be able to see what the concept means, which statement is interpretive, why a change occurred, and what conclusion follows.',
      feedback: {
        correct: 'Check that the paragraph distinguishes definition from interpretation and that the cause–result chain leads naturally to the final contrast.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Definition — Which term needs a precise relative-clause definition?', mode: 'Individual' },
        { question: 'Stance — Which claim should be presented cautiously rather than absolutely?', mode: 'Individual' },
        { question: 'Logic — What cause genuinely explains the change you describe?', mode: 'Pair' },
        { question: 'Conclusion — Can the reader clearly identify what stayed stable and what changed?', mode: 'Pair' },
      ],
    },
  ],
};
