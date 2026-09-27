import type { Exercise } from '../../../../types';

/**
 * Manually authored B2 Language Focus for Moses, chapters 1–6.
 * Each chapter follows Notice → Build → Use: learners first discover what a
 * form does in a real chapter sentence, then practise it in context, then use
 * it in a new situation. Every quoted sentence comes from the English chapter.
 */

const reflection = (id: string, title: string, prompts: string[], explanation: string): Exercise => ({
  id, type: 'reflection', title, instructions: 'Produce a short response using the target language naturally and accurately.', question: prompts[0], correctAnswer: null, explanation,
  feedback: {
    correct: 'Check that each target form does a clear job in your paragraph.',
    incorrect: 'Look back at how the chapter uses these forms, then revise your paragraph.',
  },
  discussionPrompts: prompts.map(question => ({ question, mode: 'Individual' })),
});

export const mosesB2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mo-b2-lf1-a',
      type: 'true-false',
      title: 'Who Makes the Claim?',
      instructions: 'Read the first sentence of Chapter 1. Decide whether the statement about its meaning is true or false.',
      question: '“Moses (pbuh) is one of the great prophets according to Judaism, Christianity, and Islam …” — The phrase “according to Judaism, Christianity, and Islam” shows that the writer has proved this as a historical fact.',
      correctAnswer: false,
      explanation: '“According to …” attributes a view to a source. Here the writer reports how three religious traditions see Moses; the phrase frames the claim rather than presenting historical proof. B2 writers use such framing to show whose view a statement expresses.',
      feedback: {
        correct: 'Correct. “According to” reports the view of these traditions; it does not present proof.',
        incorrect: 'Look again at the opening sentence. Whose view does “according to …” introduce: the writer’s proof, or the traditions’ view?',
      },
    },
    {
      id: 'mo-b2-lf1-b',
      type: 'transformation',
      title: 'Cause and Purpose in Other Words',
      instructions: 'Rewrite each chapter sentence so that it keeps the same meaning. Write only the missing words.',
      question: 'Can you express the same cause and the same purpose with a different structure?',
      transformItems: [
        {
          source: 'However, because they grew so quickly compared to the local population, the Egyptian rulers … began to see them as a danger.',
          frame: 'However, [blank] their rapid growth compared to the local population, the Egyptian rulers … began to see them as a danger.',
          answers: ['because of', 'due to', 'owing to', 'on account of', 'as a result of'],
        },
        {
          source: 'To prevent them from becoming a ruling class, local rulers tried to stop the population growth by making life difficult for the Children of Israel.',
          frame: 'Local rulers tried to stop the population growth by making life difficult for the Children of Israel so that they [blank] a ruling class.',
          answers: ['would not become', 'wouldn’t become', "wouldn't become", 'could not become', 'couldn’t become', "couldn't become"],
        },
      ],
      correctAnswer: null,
      explanation: '“Because” is followed by a clause (subject + verb: they grew); “because of / due to” is followed by a noun phrase (their rapid growth). A purpose infinitive such as “to prevent them from becoming …” can be rewritten as a “so that” clause; after a past verb, use “would not / could not + verb”.',
      feedback: {
        correct: 'Well done. You kept the cause and the purpose while changing the structure.',
        incorrect: 'Item 1: a noun phrase needs “because of” or “due to”. Item 2: after “so that” in the past, use “would not / could not + verb”. Check the end of Chapter 1.',
      },
    },
    reflection('mo-b2-lf1-c', 'From Fact to Explanation', [
      'Write 4–5 sentences about a historical change. Use one framing phrase such as “according to…”, one cause with “because”, and one purpose phrase with “to + verb”.',
    ], 'A B2 response should connect information through source framing, cause, and purpose instead of presenting disconnected facts.'),
  ],
  2: [
    {
      id: 'mo-b2-lf2-a',
      type: 'matching',
      title: 'Degrees of Historical Certainty',
      instructions: 'Match each expression from Chapter 2 with what it tells the reader about the claim.',
      question: 'How sure is the writer, and whose claim is it?',
      matchingHeadings: { left: 'From the chapter', right: 'What it tells the reader' },
      matchingPairs: [
        { left: 'According to the sources, …', right: 'the information comes from other writers, not from the author' },
        { left: '… must have taken place …', right: 'a firm deduction, although no one records it directly' },
        { left: '… was probably …', right: 'a likely conclusion that is still open to doubt' },
        { left: 'approximately 1290-1279 BC', right: 'the years are a close estimate, not exact' },
        { left: '… is unknown.', right: 'the writer openly admits a gap in the evidence' },
      ],
      correctAnswer: {
        'According to the sources, …': 'the information comes from other writers, not from the author',
        '… must have taken place …': 'a firm deduction, although no one records it directly',
        '… was probably …': 'a likely conclusion that is still open to doubt',
        'approximately 1290-1279 BC': 'the years are a close estimate, not exact',
        '… is unknown.': 'the writer openly admits a gap in the evidence',
      },
      explanation: 'The chapter separates attribution (“according to the sources”), strong inference (“must have + past participle”), probability (“probably”), estimation (“approximately”) and an honest limit of knowledge (“unknown”). Together they stop the history from being overclaimed.',
      feedback: {
        correct: 'Correct. You distinguished attribution, deduction, probability, estimation and uncertainty.',
        incorrect: 'Reread the last three sentences of Chapter 2. Ask for each expression: is it reporting, deducing, estimating, or admitting a gap?',
      },
    },
    {
      id: 'mo-b2-lf2-b',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct a result phrase and the passive the writer uses for forced work?',
      errorItems: [
        {
          sentence: 'As a result these disorders, the Israelites escaped from Egypt during the rule of Ramses II (approximately 1279-1213 BC).',
          error: 'As a result',
          options: ['As a result of', 'As result of', 'As a result from'],
          answer: 0,
        },
        {
          sentence: 'The Israelites were made work to build the huge Seti temple during the reign of Seti I …',
          error: 'were made work',
          options: ['were made to work', 'were made working', 'were making work'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“As a result of + noun phrase” links a consequence to its cause (“As a result of these disorders”). In the active, “make someone work” has no “to”; in the passive, “to” returns: “The Israelites were made to work …”.',
      feedback: {
        correct: 'Well done. You corrected the result phrase and the passive of “make”.',
        incorrect: 'Which small word links “as a result” to a noun? And compare “They made them work” with the passive in Chapter 2.',
      },
    },
    {
      id: 'mo-b2-lf2-c',
      type: 'multiple-choice',
      title: 'Keep the Writer’s Stance',
      instructions: 'Choose the summary that keeps the stance of the chapter sentence.',
      question: '“According to the sources, Seti I (I. Seti, approximately 1290-1279 BC) was the pharaoh who oppressed the Israelites.” Which summary keeps the writer’s stance?',
      options: [
        'It has been proved beyond doubt that Seti I oppressed the Israelites.',
        'The sources identify Seti I as the pharaoh who oppressed the Israelites.',
        'The writer believes that Seti I did not oppress the Israelites.',
        'Nobody knows which pharaoh oppressed the Israelites.',
      ],
      correctAnswer: 1,
      explanation: 'The original attributes the identification to “the sources”. A faithful summary keeps that attribution; it neither upgrades it to proof nor turns it into the writer’s doubt or into total uncertainty.',
      feedback: {
        correct: 'Correct. The summary keeps the claim attributed to the sources.',
        incorrect: 'Notice how the chapter sentence begins. Which summary keeps the claim with the sources, without making it stronger or weaker?',
      },
    },
    reflection('mo-b2-lf2-d', 'Qualified Historical Summary', [
      'Write a 5-sentence historical summary using “according to the sources”, “probably”, and one sentence that openly states what is not known.',
    ], 'The task practises B2 qualification: evidence can support a conclusion without turning an uncertain point into a fixed fact.'),
  ],
  3: [
    {
      id: 'mo-b2-lf3-a',
      type: 'multiple-choice',
      title: 'What Does the Analogy Compare?',
      instructions: 'Read the last sentence of Chapter 3 and choose the best interpretation of the comparison.',
      question: '“Just like today’s petrol, control of the power of the Nile also needed a strong administration, a god-king authority.” What does the writer compare?',
      options: [
        'Two dangerous substances that people should keep away from',
        'The way ancient Egyptians used the Nile as a kind of fuel',
        'Two vital resources whose control needs strong, organised power',
        'Modern oil companies and the temples of the pharaohs',
      ],
      correctAnswer: 2,
      explanation: '“Just like …” introduces an analogy: it compares the function of two things, not the things themselves. Petrol today and the Nile then are both vital resources, and whoever controls them needs strong administration. An analogy clarifies; it does not claim the two are identical.',
      feedback: {
        correct: 'Correct. The analogy compares the role of two strategic resources.',
        incorrect: 'Ask what petrol and the Nile have in common in this sentence. Look at the words “control” and “needed a strong administration”.',
      },
    },
    {
      id: 'mo-b2-lf3-b',
      type: 'transformation',
      title: 'Rebuild the Explanation',
      instructions: 'Rewrite each chapter sentence with the new structure. Keep the meaning. Write only the missing words.',
      question: 'Can you keep a two-cause explanation and a cause–consequence link in a new structure?',
      transformItems: [
        {
          source: 'Apparently, Pharaohs’ god-king authority was based not only on the richness of the river, but also on the manpower of the slaves …',
          frame: 'Apparently, Pharaohs’ god-king authority was based on the manpower of the slaves as well as [blank].',
          answers: ['on the richness of the river', 'the richness of the river', 'on the richness of the Nile', 'the richness of the Nile'],
        },
        {
          source: 'Control of the Nile River was vital. For this reason, the geographical structure of the land was reshaped by human power.',
          frame: 'Because [blank], the geographical structure of the land was reshaped by human power.',
          answers: ['control of the Nile River was vital', 'control of the Nile was vital', 'controlling the Nile River was vital', 'controlling the Nile was vital'],
        },
      ],
      correctAnswer: null,
      explanation: '“Not only A but also B” gives two bases for power; “B as well as A” keeps both but changes the emphasis. “For this reason” points back to the previous sentence as the cause; “Because + clause” puts the same cause inside one sentence.',
      feedback: {
        correct: 'Well done. You kept both causes and the cause–consequence link.',
        incorrect: 'Item 1: “as well as” needs the other basis of power (the river). Item 2: “Because” needs a full clause with a verb. Check the middle and end of Chapter 3.',
      },
    },
    reflection('mo-b2-lf3-c', 'Analogy with Limits', [
      'Explain in 4–6 sentences why the text compares the Nile with modern petrol. Use “not only … but also …” and make clear that the comparison is an analogy, not an identity.',
    ], 'A strong B2 comparison identifies the shared function of strategic resources while respecting the limits of the analogy.'),
  ],
  4: [
    {
      id: 'mo-b2-lf4-a',
      type: 'multiple-choice',
      title: 'Why the Passive?',
      instructions: 'Read the sentence from Chapter 4 and choose the best explanation.',
      question: '“He was placed in a basket and the basket was set free on the waters of the Nile.” Why does the writer use the passive here?',
      options: [
        'To show that nobody actually did these actions',
        'To keep attention on the baby and the basket rather than on the person who acted',
        'To show that Moses did these actions himself',
        'To describe actions that will happen later in the story',
      ],
      correctAnswer: 1,
      explanation: 'The passive (be + past participle) puts the person or thing affected at the start of the clause. The chapter is about what happens to baby Moses, so the unnamed actor is not important here. A passive does not mean that no one acted.',
      feedback: {
        correct: 'Correct. The passive keeps Moses and the basket at the centre of the narrative.',
        incorrect: 'Who or what is the subject of each clause? Is the writer interested in who acted, or in what happened to the baby?',
      },
    },
    {
      id: 'mo-b2-lf4-b',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake in its verb form. Tap the wrong words, then choose the correction.',
      question: 'Can you form the passive correctly, and recognise a verb that has no passive?',
      errorItems: [
        {
          sentence: 'It was find at the foot of a tree near the Pharaoh’s palace on the banks of the Nile and he was miraculously saved.',
          error: 'was find',
          options: ['was found', 'was founded', 'has found'],
          answer: 0,
        },
        {
          sentence: 'The child at the foot of the tree in the waters of the Nile was give the name “Mûsâ” in the Pharaoh’s palace.',
          error: 'was give',
          options: ['was given', 'was gave', 'gave'],
          answer: 0,
        },
        {
          sentence: 'The salvation of Prophet Moses (pbuh) and his people from the Pharaoh also was taken place in waters, in the Red Sea.',
          error: 'was taken place',
          options: ['took place', 'was took place', 'has taken place'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The passive needs be + past participle: “was found”, “was given”. (“Founded” is the past of “found” = establish.) “Take place” is intransitive, so it has no passive: “also took place”.',
      feedback: {
        correct: 'Well done. You formed two passives and kept “take place” active.',
        incorrect: 'Use the past participle after “was” (find → found, give → given). “Take place” never takes the passive. Check the middle and end of Chapter 4.',
      },
    },
    reflection('mo-b2-lf4-c', 'Parallel Without Repetition', [
      'Write 4–5 sentences explaining the Nile/Red Sea parallel. Use one passive form and one contrast or time marker such as “later”, “while”, or “whereas”.',
    ], 'The task practises thematic comparison while keeping the two events historically and narratively distinct.'),
  ],
  5: [
    {
      id: 'mo-b2-lf5-a',
      type: 'drag-drop',
      title: 'Public Behaviour and Private Position',
      instructions: 'Sort the phrases from Chapter 5. Do they describe what people showed in public, or what they held in private?',
      question: 'How does the chapter separate outward behaviour from inner belief?',
      dragDropGroups: [
        {
          group: 'What people showed in public',
          items: ['people obeyed the Pharaoh', 'outwardly followed social norms', 'without opposing the Pharaoh'],
        },
        {
          group: 'What some held in private',
          items: ['some people of that period did not practise or believe in paganism', 'they kept it secret'],
        },
      ],
      correctAnswer: {
        'What people showed in public': ['people obeyed the Pharaoh', 'outwardly followed social norms', 'without opposing the Pharaoh'],
        'What some held in private': ['some people of that period did not practise or believe in paganism', 'they kept it secret'],
      },
      explanation: '“Outwardly” and “kept it secret” mark the gap between public conformity and private belief. The chapter then gives the reason for this gap with “because they were weak”, linking absolute power to the people’s behaviour.',
      feedback: {
        correct: 'Correct. You separated outward conformity from hidden belief.',
        incorrect: 'Look for signal words: “outwardly” describes what others could see; “secret” describes what was hidden. Check the middle of Chapter 5.',
      },
    },
    {
      id: 'mo-b2-lf5-b',
      type: 'error-correction',
      title: 'Power and Possibility',
      instructions: 'Each sentence has one mistake. Tap the wrong word or words, then choose the correction.',
      question: 'Can you keep the chapter’s degree of certainty and its structure for forced action?',
      errorItems: [
        {
          sentence: 'It is certain that some people of that period did not practise or believe in paganism.',
          error: 'certain',
          options: ['possible', 'clear', 'obvious'],
          answer: 0,
        },
        {
          sentence: 'The Pharaoh made Benî Israel to work under extremely heavy conditions for small pay or no money.',
          error: 'to work',
          options: ['work', 'working', 'worked'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The chapter only says “It is possible that …”; “certain”, “clear” or “obvious” would overclaim. In the active, make + object + bare infinitive expresses forced action: “made Benî Israel work”.',
      feedback: {
        correct: 'Well done. You avoided an overclaim and used “make + object + verb” correctly.',
        incorrect: 'How sure is the chapter about these people’s beliefs? And after “made + person”, which verb form follows? Check Chapter 5.',
      },
    },
    {
      id: 'mo-b2-lf5-c',
      type: 'transformation',
      title: 'Reporting the Vision',
      instructions: 'Report each quotation from Chapter 5. Write only the missing words.',
      question: 'How do verb forms change when a report moves back in time?',
      transformItems: [
        {
          source: 'Ibn Abbas said, “The Pharaoh saw a fire in his vision. …”',
          frame: 'Ibn Abbas said that the Pharaoh [blank] a fire in his vision.',
          answers: ['had seen', 'saw'],
        },
        {
          source: 'They said, “A boy will be born among the Children of Israel, and the Egyptian people will die at this boy’s hands.”',
          frame: 'They said that a boy [blank] born among the Children of Israel, and the Egyptian people would die at this boy’s hands.',
          answers: ['would be'],
        },
      ],
      correctAnswer: null,
      explanation: 'In reported speech after a past reporting verb, the past simple usually moves back to the past perfect (“had seen”, though “saw” is also accepted), and “will” becomes “would”. Attribution (“Ibn Abbas said that …”) keeps the vision a report, not an established fact.',
      feedback: {
        correct: 'Well done. You reported the vision and the prediction with the right tenses.',
        incorrect: 'Move each verb one step back: saw → had seen; will be → would be. Check the end of Chapter 5.',
      },
    },
    reflection('mo-b2-lf5-d', 'Reporting a Vision Carefully', [
      'Write 4–6 sentences reporting a dream or prediction from a source. Attribute the report, use “said that” or an equivalent reporting structure, and distinguish the reported prediction from an established fact.',
    ], 'The chapter attributes the vision account to Ibn Abbas and reports what priests and magicians said would happen.'),
  ],
  6: [
    {
      id: 'mo-b2-lf6-a',
      type: 'matching',
      title: 'Instruction and Reassurance',
      instructions: 'Read the Qur’anic words quoted in Chapter 6. Match each part with what it does.',
      question: 'What does each part of the inspired message do for Moses’s mother?',
      matchingHeadings: { left: 'From the chapter', right: 'What the words do' },
      matchingPairs: [
        { left: 'but when you fear for him, then put him into the river', right: 'a condition followed by the action it requires' },
        { left: 'fear not, nor grieve', right: 'a double prohibition that comforts her' },
        { left: 'We shall bring him back to you', right: 'a promise that her child will return to her' },
        { left: 'and shall make him one of (Our) Messengers', right: 'a promise about the child’s future role' },
      ],
      correctAnswer: {
        'but when you fear for him, then put him into the river': 'a condition followed by the action it requires',
        'fear not, nor grieve': 'a double prohibition that comforts her',
        'We shall bring him back to you': 'a promise that her child will return to her',
        'and shall make him one of (Our) Messengers': 'a promise about the child’s future role',
      },
      explanation: 'The quoted passage moves from a condition (“when you fear for him, then …”) to an instruction, a comforting prohibition (“fear not, nor grieve”), and two promises with “shall”. The order turns a frightening instruction into reassurance.',
      feedback: {
        correct: 'Correct. You identified condition, prohibition and the two promises.',
        incorrect: 'Reread the quotation in Chapter 6. Which part tells her when to act, which part forbids a feeling, and which parts promise the future?',
      },
    },
    {
      id: 'mo-b2-lf6-b',
      type: 'word-bank',
      title: 'Cause, Result and Fear',
      instructions: 'Complete the lines from Chapter 6 with words from the bank. Two words are not needed.',
      question: 'Which linker shows a cause, which a result, and which the fear behind an action?',
      fillBlanksText: 'But the Pharaoh began to lose his manpower [blank] the Children of Israel did most of the heavy jobs in the country. … The Pharaoh thought the solution was economically realistic, [blank] he accepted it. … His mother was very frightened by his birth, so she nursed him in secret [blank] that he would be killed.',
      wordBank: ['because', 'so', 'for fear', 'although', 'in case'],
      correctAnswer: ['because', 'so', 'for fear'],
      explanation: '“Because” introduces the cause of the lost manpower. “So” introduces the result of the Pharaoh’s judgement. “For fear that + clause” gives the danger an action tries to avoid. “In case” is not followed by “that”, and “although” would signal a contrast the chapter does not make.',
      feedback: {
        correct: 'Correct. You chose the linkers for cause, result and feared danger.',
        incorrect: 'For each gap, ask: does the next clause give a reason, a result, or something she was afraid of? Check the first and last paragraphs of Chapter 6.',
      },
    },
    reflection('mo-b2-lf6-c', 'Explaining a Difficult Decision', [
      'Write 5 sentences about a difficult decision. Use one cause, one conditional “when/if” relationship, one instruction, and one future reassurance.',
    ], 'B2 use means combining forms into a coherent decision sequence rather than practising them in isolation.'),
  ],
};
