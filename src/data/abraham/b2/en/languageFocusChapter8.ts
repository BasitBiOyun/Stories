import type { Exercise } from '../../../../types';

/** Chapter 8 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-b2-language-8-concession-persistence',
      type: 'matching',
      title: 'Track Contrast and Persistence',
      instructions: 'Match each structure with the discourse job it performs. Focus on how the chapter contrasts pressure from Abraham’s father with Abraham’s continued rejection of idol worship.',
      question: 'How does the chapter build contrast between expectation and response?',
      matchingPairs: [
        { left: 'His father wanted him to become a priest when he grew up', right: 'establishes a future expectation imposed by another person' },
        { left: 'He only wanted his son to show respect to those statues', right: 'narrows the father’s immediate demand' },
        { left: 'yet Abraham never stopped displaying his hatred', right: 'marks strong contrast and continuing resistance despite that demand' },
        { left: 'which made things even worse', right: 'adds the speaker’s evaluation of the previous situation' },
      ],
      correctAnswer: {
        'His father wanted him to become a priest when he grew up': 'establishes a future expectation imposed by another person',
        'He only wanted his son to show respect to those statues': 'narrows the father’s immediate demand',
        'yet Abraham never stopped displaying his hatred': 'marks strong contrast and continuing resistance despite that demand',
        'which made things even worse': 'adds the speaker’s evaluation of the previous situation',
      },
      explanation: 'The paragraph combines expectation, a narrowed demand, evaluative comment and “yet” to show that external pressure does not change Abraham’s stance.',
      feedback: {
        correct: 'Correct. You identified how the chapter organizes expectation, pressure, evaluation and persistence.',
        incorrect: 'Ask what each structure does: predict, narrow, evaluate, or contrast with continued action.',
      },
    },
    {
      id: 'abraham-b2-language-8-purpose-result',
      type: 'multiple-choice',
      title: 'Interpret Purpose and Intended Result',
      instructions: 'Choose the reformulation that best preserves the function of “that he might be one of those with certainty.”',
      question: 'What relationship does the clause express?',
      options: [
        'Allah showed Abraham the dominion of the heavens and the earth with the purpose or intended result that he reach certainty.',
        'Abraham reached certainty by accident, with no link to what he was shown.',
        'The clause reports a past habit and does not express any purpose or intended outcome.',
      ],
      correctAnswer: 0,
      explanation: 'The “that ... might” clause presents the intended outcome of being shown the heavens and the earth. At B2, the important point is the relation between the two clauses, not simply the modal form itself.',
      feedback: {
        correct: 'Correct. You preserved the purpose/intended-result relationship between the clauses.',
        incorrect: 'Look at how the second clause answers “for what purpose / toward what result?”',
      },
    },
    {
      id: 'abraham-b2-language-8-temporal-reasoning',
      type: 'matching',
      title: 'Read the Evidence Through Time',
      instructions: 'Match each time structure with the role it plays in the reasoning. Do not retell which object Abraham saw; focus on how change over time becomes evidence.',
      question: 'How do temporal clauses turn observation into reasoning?',
      matchingPairs: [
        { left: 'When the night fell over him', right: 'sets the temporal condition for the observation that follows' },
        { left: 'he saw a planet', right: 'introduces the visible object under examination' },
        { left: 'But when it set', right: 'marks a change in state that challenges the earlier appearance' },
        { left: 'I do not love those that set', right: 'draws an evaluative conclusion from disappearance' },
      ],
      correctAnswer: {
        'When the night fell over him': 'sets the temporal condition for the observation that follows',
        'he saw a planet': 'introduces the visible object under examination',
        'But when it set': 'marks a change in state that challenges the earlier appearance',
        'I do not love those that set': 'draws an evaluative conclusion from disappearance',
      },
      explanation: 'The chapter’s logic depends on sequence: a condition makes observation possible, the object appears, then a change in its state becomes evidence for evaluation.',
      feedback: {
        correct: 'Correct. You traced condition → observation → change → evaluation.',
        incorrect: 'Focus on the function of each clause in the reasoning chain rather than on the story fact itself.',
      },
    },
    {
      id: 'abraham-b2-language-8-production',
      type: 'reflection',
      title: 'Write a Change-as-Evidence Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which an initial appearance is tested by what happens over time. Include: one expectation imposed by another person, one “yet” contrast showing persistence, one evaluative relative clause with “which”, one purpose/intended-result clause using “so that” or “might”, and a temporal reasoning chain using “when ... but when ...” that leads to a conclusion. Keep the paragraph analytical rather than narrative-only.',
      question: 'Can you use contrast, purpose and temporal change to build an evidence-based B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should make grammatical choices carry the reasoning: pressure is contrasted with persistence, an action has an intended result, and change over time becomes evidence for the final judgement.',
      feedback: {
        correct: 'Check that every target structure contributes to the argument rather than appearing as an isolated grammar example.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Pressure — What expectation or demand will someone else impose?', mode: 'Individual' },
        { question: 'Contrast — What will continue despite that pressure, and where will “yet” make the contrast clearest?', mode: 'Individual' },
        { question: 'Evidence — What change over time will your “when ... but when ...” sequence reveal?', mode: 'Pair' },
        { question: 'Conclusion — What evaluation follows from that change, and how will you avoid merely retelling events?', mode: 'Pair' },
      ],
    },
  ],
};
