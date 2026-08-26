import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-b1-language-7-reporting-reaction',
      type: 'matching',
      title: 'Reporting What People Saw, Heard, and Remembered',
      instructions: 'Match each Chapter 7 expression with the function it performs in the narrative.',
      question: 'How does the chapter report reactions and remembered information?',
      matchingPairs: [
        { left: 'were shocked to see all the statues were broken', right: 'reports a strong reaction followed by what caused it' },
        { left: 'We heard a young man speaking against our gods', right: 'reports something previously heard without quoting the original speech' },
        { left: 'they remembered', right: 'signals that earlier information is being brought back into the present situation' },
        { left: 'were displeased with what they heard', right: 'links an emotional reaction to the content of a message' },
      ],
      correctAnswer: {
        'were shocked to see all the statues were broken': 'reports a strong reaction followed by what caused it',
        'We heard a young man speaking against our gods': 'reports something previously heard without quoting the original speech',
        'they remembered': 'signals that earlier information is being brought back into the present situation',
        'were displeased with what they heard': 'links an emotional reaction to the content of a message',
      },
      explanation: 'Chapter 7 repeatedly connects reactions with information: people see, hear, remember, and then respond.',
      feedback: {
        correct: 'Correct. You distinguished reaction, reported perception, memory, and response to a message.',
        incorrect: 'Check whether the expression tells us what people experienced, what information they recalled, or how they reacted to it.',
      },
    },
    {
      id: 'abraham-b1-language-7-embedded-questions',
      type: 'matching',
      title: 'Questions Inside Larger Sentences',
      instructions: 'Match each pattern with the meaning relationship it creates.',
      question: 'How does the chapter move between direct questions and questions embedded inside statements?',
      matchingPairs: [
        { left: 'tried to find out who did this', right: 'places a who-question inside a larger verb phrase' },
        { left: 'They asked him, “Did you harm our gods in this way?”', right: 'uses a direct yes/no question addressed to Abraham' },
        { left: 'ask that statue, if it can speak', right: 'places a yes/no possibility inside a larger command using if' },
        { left: 'what they heard', right: 'turns the content of a message into a noun-like clause after a preposition' },
      ],
      correctAnswer: {
        'tried to find out who did this': 'places a who-question inside a larger verb phrase',
        'They asked him, “Did you harm our gods in this way?”': 'uses a direct yes/no question addressed to Abraham',
        'ask that statue, if it can speak': 'places a yes/no possibility inside a larger command using if',
        'what they heard': 'turns the content of a message into a noun-like clause after a preposition',
      },
      explanation: 'B1 narratives often move between direct questions and embedded question/content clauses. The word order and function change depending on whether the question stands alone or sits inside a larger sentence.',
      feedback: {
        correct: 'Correct. You identified direct and embedded question patterns.',
        incorrect: 'Ask whether the words form a complete spoken question, or whether they depend on another verb such as find out, ask, or hear.',
      },
    },
    {
      id: 'abraham-b1-language-7-cause-condition-contrast',
      type: 'matching',
      title: 'Cause, Contrast, and Consequence',
      instructions: 'Match each connector or structure with the relationship it builds.',
      question: 'How does the chapter explain why the people know something but still act differently?',
      matchingPairs: [
        { left: 'because their thoughts and feelings told them that Abraham was right', right: 'gives a reason for their feeling of shame' },
        { left: 'But they were so arrogant that they couldn’t accept the truth', right: 'contrasts inner recognition with outward refusal and shows a strong result' },
        { left: 'If they accepted that Abraham was right, then it meant their forefathers were wrong', right: 'builds a condition and the consequence they associated with it' },
        { left: 'they couldn’t accept the truth and admit they were wrong', right: 'joins two related actions they were unwilling or unable to do' },
      ],
      correctAnswer: {
        'because their thoughts and feelings told them that Abraham was right': 'gives a reason for their feeling of shame',
        'But they were so arrogant that they couldn’t accept the truth': 'contrasts inner recognition with outward refusal and shows a strong result',
        'If they accepted that Abraham was right, then it meant their forefathers were wrong': 'builds a condition and the consequence they associated with it',
        'they couldn’t accept the truth and admit they were wrong': 'joins two related actions they were unwilling or unable to do',
      },
      explanation: 'The chapter uses because, but, so...that, and if...then to connect recognition, attitude, and consequence across several sentences.',
      feedback: {
        correct: 'Correct. You tracked reason, contrast, result, and conditional consequence.',
        incorrect: 'Focus on whether the structure explains why, contrasts two ideas, shows a strong result, or predicts a consequence from a condition.',
      },
    },
    {
      id: 'abraham-b1-language-7-connected-production',
      type: 'reflection',
      title: 'Report a Disagreement Clearly',
      instructions: 'Write or say four connected B1 sentences about a disagreement in a new situation. Do not retell Chapter 7.',
      question: 'Can you report what people heard or discovered, include an embedded question, and explain a contrast or consequence?',
      correctAnswer: null,
      explanation: 'A strong response can combine heard/saw/remembered, find out who/what/why, because or but, and an if...then consequence.',
      feedback: {
        correct: 'Keep the four sentences connected so the information, reaction, and consequence form one coherent situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Report something someone heard, saw, or remembered.', mode: 'Individual' },
        { question: 'Sentence 2 — Add an embedded question such as find out who/what/why...', mode: 'Individual' },
        { question: 'Sentence 3 — Explain a reaction using because, but, or so...that.', mode: 'Individual' },
        { question: 'Sentence 4 — Add an if...then consequence or a clear final result.', mode: 'Pair' },
      ],
    },
  ],
};
