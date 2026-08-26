import type { Exercise } from '../../../../types';

/** Chapter 1 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter1: Record<number, Exercise[]> = {
  1: [
    {
      id: 'abraham-b2-language-1-source-framing',
      type: 'matching',
      title: 'Track How the Text Frames Information',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the chapter move between presentation, definition and elaboration?',
      matchingPairs: [
        { left: 'is presented as', right: 'frames the statement as the Qur’an’s presentation of Abraham' },
        { left: 'means that', right: 'opens a definition by explaining the content of monotheistic belief' },
        { left: 'He is also', right: 'adds another important role without replacing the earlier description' },
        { left: 'The Qur’an presents in detail', right: 'signals that the text is moving from identification to a fuller account' },
      ],
      correctAnswer: {
        'is presented as': 'frames the statement as the Qur’an’s presentation of Abraham',
        'means that': 'opens a definition by explaining the content of monotheistic belief',
        'He is also': 'adds another important role without replacing the earlier description',
        'The Qur’an presents in detail': 'signals that the text is moving from identification to a fuller account',
      },
      explanation: 'The chapter does not simply list facts. It uses framing expressions to show where a description comes from, define a concept, add a related role and then open a more detailed narrative line.',
      feedback: {
        correct: 'Correct. You identified how the chapter organises information rather than only what information it gives.',
        incorrect: 'Focus on whether each expression introduces a source, defines a term, adds information, or expands the discussion.',
      },
    },
    {
      id: 'abraham-b2-language-1-definition-reformulation',
      type: 'multiple-choice',
      title: 'Read Definition by Reformulation',
      instructions: 'Choose the analysis that best explains the relationship between the two sentences.',
      question: 'What is the effect of “Monotheistic belief means that I bear witness that there is no god but Allah” after Abraham is introduced as a representative of monotheistic belief?',
      options: [
        'It reformulates an abstract label into a more explicit statement of belief, helping the reader move from category to meaning.',
        'It introduces a completely unrelated personal opinion from the narrator.',
        'It weakens the earlier description by suggesting that monotheism cannot be defined.',
      ],
      correctAnswer: 0,
      explanation: 'The phrase “means that” turns the abstract term into explicit content. This is a common B2 discourse move: introduce a concept, then unpack its meaning so the reader can interpret later claims more precisely.',
      feedback: {
        correct: 'Correct. The second sentence explains the meaning of the abstract term introduced before it.',
        incorrect: 'Ask whether the second sentence changes the topic or makes the earlier concept more explicit.',
      },
    },
    {
      id: 'abraham-b2-language-1-passive-focus',
      type: 'matching',
      title: 'Compare Active and Passive Information Focus',
      instructions: 'Match each clause with the information focus created by its wording.',
      question: 'Why does the chapter use passive forms around Abraham’s title?',
      matchingPairs: [
        { left: 'Abraham was also given the unique name of “Allah’s friend”', right: 'foregrounds Abraham and the title he received rather than the giver' },
        { left: 'This title was not given to any other prophet before', right: 'foregrounds the exclusiveness of the title across earlier prophets' },
        { left: 'The Qur’an presents Abraham as...', right: 'keeps the Qur’an visible as the source of the presentation' },
        { left: 'Abraham is the father of two prophets', right: 'uses a direct active relational statement because the relationship itself is the focus' },
      ],
      correctAnswer: {
        'Abraham was also given the unique name of “Allah’s friend”': 'foregrounds Abraham and the title he received rather than the giver',
        'This title was not given to any other prophet before': 'foregrounds the exclusiveness of the title across earlier prophets',
        'The Qur’an presents Abraham as...': 'keeps the Qur’an visible as the source of the presentation',
        'Abraham is the father of two prophets': 'uses a direct active relational statement because the relationship itself is the focus',
      },
      explanation: 'Voice choice changes what the reader notices first. The passive clauses keep attention on the title and its uniqueness, while the active clauses retain a visible source or a direct relationship.',
      feedback: {
        correct: 'Correct. You distinguished grammatical voice from the information focus it creates.',
        incorrect: 'Look at which participant or idea appears first and which information the sentence makes most prominent.',
      },
    },
    {
      id: 'abraham-b2-language-1-production',
      type: 'reflection',
      title: 'Build a Framed B2 Explanation',
      instructions: 'Write or say a 7–9 sentence paragraph about a non-story concept or historical figure. Introduce the topic with a source-framing expression such as “is presented as” or “is described as”, define one abstract idea with “means that”, add one related point with “also”, and use one passive sentence to foreground a title, distinction or recognition. End by explaining why your wording makes the paragraph clearer. Do not retell Chapter 1.',
      question: 'Can you organise a short explanation by controlling source framing, definition, addition and information focus?',
      correctAnswer: null,
      explanation: 'A strong B2 response should not merely include the target expressions. It should use each one for a clear discourse purpose: framing a source, unpacking meaning, adding a related point and foregrounding selected information.',
      feedback: {
        correct: 'Check that every target expression has a real discourse function and that the paragraph develops in a clear sequence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Source — Which source or viewpoint will frame your opening description?', mode: 'Individual' },
        { question: 'Definition — Which abstract idea needs to be unpacked for the reader?', mode: 'Individual' },
        { question: 'Focus — What title or distinction is more important than the person or institution that granted it?', mode: 'Pair' },
        { question: 'Organisation — Does each sentence clearly add, define or reframe information?', mode: 'Pair' },
      ],
    },
  ],
};
