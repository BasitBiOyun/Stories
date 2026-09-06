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

/** Chapter 3 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'abraham-b2-language-3-discourse-movement',
      type: 'matching',
      title: 'Track the Discourse Movement',
      instructions: 'Match each expression with the job it performs in the chapter’s argument.',
      question: 'How does the chapter move from continuity to contrast and then to a wider conclusion?',
      matchingPairs: [
        { left: 'In fact', right: 'strengthens and foregrounds the opening claim' },
        { left: 'However, later on', right: 'marks a turn from the earlier state to a contrasting later development' },
        { left: 'like Judaism and Christianity', right: 'adds a comparison that places the change in a wider pattern' },
        { left: 'As the last faith', right: 'frames the final sentence as a broader concluding perspective' },
      ],
      correctAnswer: {
        'In fact': 'strengthens and foregrounds the opening claim',
        'However, later on': 'marks a turn from the earlier state to a contrasting later development',
        'like Judaism and Christianity': 'adds a comparison that places the change in a wider pattern',
        'As the last faith': 'frames the final sentence as a broader concluding perspective',
      },
      explanation: 'The chapter is not a list of facts. It uses discourse markers to organise continuity, later change, comparison and conclusion.',
      feedback: {
        correct: 'Correct. You followed how the connectors organise the chapter’s argument.',
        incorrect: 'Look for which phrase strengthens a claim, which introduces contrast, which compares, and which frames the conclusion.',
      },
    },
    {
      id: 'abraham-b2-language-3-relative-scope',
      type: 'multiple-choice',
      title: 'Read Evaluation with Its Limits',
      instructions: 'Choose the most accurate analysis of the wording.',
      question: 'What is important about the phrase “Christianity, which was the least corrupted religion at that time”?',
      options: [
        'The relative clause adds an evaluation, while “at that time” limits the evaluation to the period described rather than making it timeless.',
        'The clause makes a universal claim about Christianity in every period of history.',
        'The phrase is only giving the geographic location of Damascus.',
      ],
      correctAnswer: 0,
      explanation: 'At B2 level, readers should notice both the information added by a relative clause and the scope created by time expressions. The wording belongs to the chapter’s presentation and should not be expanded beyond it.',
      feedback: {
        correct: 'Correct. You preserved both the evaluative relative clause and its time boundary.',
        incorrect: 'Pay attention to what “which was...” adds and what “at that time” prevents you from overgeneralising.',
      },
    },
    {
      id: 'abraham-b2-language-3-time-layering',
      type: 'matching',
      title: 'Layer Events in Time',
      instructions: 'Match each form with the temporal relationship it creates in the Varaka–Bilal episode.',
      question: 'How does the chapter control the reader’s movement through simultaneous and successive events?',
      matchingPairs: [
        { left: 'When the first revelation came...', right: 'sets a completed event as the time frame for Varaka’s response' },
        { left: 'while he was in the desert', right: 'places one ongoing situation around another event' },
        { left: 'At that moment', right: 'focuses attention on the exact point in the scene' },
        { left: 'Hearing his words', right: 'compresses the cause/time link between hearing and Varaka’s reply' },
      ],
      correctAnswer: {
        'When the first revelation came...': 'sets a completed event as the time frame for Varaka’s response',
        'while he was in the desert': 'places one ongoing situation around another event',
        'At that moment': 'focuses attention on the exact point in the scene',
        'Hearing his words': 'compresses the cause/time link between hearing and Varaka’s reply',
      },
      explanation: 'The episode combines full time clauses, an ongoing background and a reduced participial clause. These choices keep the narrative compact while making event relationships clear.',
      feedback: {
        correct: 'Correct. You identified how the narrative layers background, event, focus and immediate response.',
        incorrect: 'Ask whether each form provides background, sets a time frame, zooms in on a moment, or compresses a response relationship.',
      },
    },
    {
      id: 'abraham-b2-language-3-production',
      type: 'reflection',
      title: 'Build a Coherent Contrast-and-Extension Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story belief, tradition, institution or idea that changed over time while keeping some continuity. Use one strengthening marker such as “in fact”, one clear contrast such as “however”, one time-layering structure with “when” or “while”, one relative clause that adds a limited evaluation, and one “not only... but also...” structure to widen the final point. Keep any evaluation carefully limited by time or context. Do not retell Chapter 3.',
      question: 'Can you use discourse markers, time relations, relative clauses and additive scope to organise a nuanced B2 explanation?',
      correctAnswer: null,
      explanation: 'A strong response should show controlled progression: establish a point, mark change, locate events in time, add a qualified description, and widen the conclusion without overclaiming.',
      feedback: {
        correct: 'Check that each connector has a real discourse purpose and that your relative-clause evaluation is limited to the context you actually describe.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Continuity — What remains stable across the period you describe?', mode: 'Individual' },
        { question: 'Contrast — Where does a real change occur, and which connector makes it clear?', mode: 'Individual' },
        { question: 'Qualification — Which evaluation needs a time or context limit?', mode: 'Pair' },
        { question: 'Extension — What wider point can you add naturally with “not only... but also...”?', mode: 'Pair' },
      ],
    },
  ],
};

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

/** Chapter 5 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'abraham-b2-language-5-past-viewpoint',
      type: 'matching',
      title: 'See the Future from a Past Viewpoint',
      instructions: 'Match each form with the time relationship it creates. Focus on how the narrator looks forward from within a past situation.',
      question: 'How does Chapter 5 describe events that were still in the future from an earlier point in the story?',
      matchingPairs: [
        { left: 'he was going to fight against his family and the whole system', right: 'presents a future development viewed from an earlier past moment' },
        { left: 'a child ... would be born', right: 'reports a prediction about a later event from a past reporting point' },
        { left: 'would change the religion of the people', right: 'continues the predicted chain of later consequences' },
        { left: 'would end the reign of Nimrod', right: 'places the final predicted result after the same past viewpoint' },
      ],
      correctAnswer: {
        'he was going to fight against his family and the whole system': 'presents a future development viewed from an earlier past moment',
        'a child ... would be born': 'reports a prediction about a later event from a past reporting point',
        'would change the religion of the people': 'continues the predicted chain of later consequences',
        'would end the reign of Nimrod': 'places the final predicted result after the same past viewpoint',
      },
      explanation: 'The chapter repeatedly looks forward from inside a past narrative. “Was going to” and “would” do not simply mark ordinary future time; they show later events as future relative to an earlier past point.',
      feedback: {
        correct: 'Correct. You tracked future-in-the-past across both narration and reported prediction.',
        incorrect: 'Ask where the narrator is standing in time: these events are later than the past viewpoint, not later than the reader’s present.',
      },
    },
    {
      id: 'abraham-b2-language-5-source-shift',
      type: 'multiple-choice',
      title: 'Preserve the Shift between Narrations',
      instructions: 'Choose the reformulation that keeps the chapter’s source distinction and causal flow.',
      question: 'Which version best preserves both the first prediction account and the phrase “According to another narration”?',
      options: [
        'One account says that astrologers predicted the birth of a child who would threaten Nimrod’s rule. According to another narration, Nimrod instead saw a dream about such a child; in that account, the dream led to his order against male children.',
        'The astrologers certainly predicted the child, Nimrod certainly had the same dream, and both events are presented as one unquestioned historical fact.',
        'The chapter gives two narrations, so no relationship can be described between either narration and Nimrod’s later action.',
      ],
      correctAnswer: 0,
      explanation: 'The source marker “According to another narration” signals an alternative account. A careful B2 reformulation keeps the accounts distinct while still showing how each account can connect to the later response.',
      feedback: {
        correct: 'Correct. You kept the alternative narration visible instead of merging both accounts into one certainty.',
        incorrect: 'Do not erase “According to another narration.” Preserve the source boundary first, then express the causal sequence inside each account.',
      },
    },
    {
      id: 'abraham-b2-language-5-cohesion',
      type: 'matching',
      title: 'Build Cause, Detail and Location',
      instructions: 'Match each phrase with the discourse job it performs in the closing part of the chapter.',
      question: 'How does the chapter connect the reported threat to the protective response and then add precise detail?',
      matchingPairs: [
        { left: 'So, he gathered pregnant women...', right: 'marks a result or response following the preceding reported threat' },
        { left: 'Upon this, Azer took his wife...', right: 'moves from the ruler’s action to a further consequence and response' },
        { left: 'his wife, who was pregnant with Abraham', right: 'adds identifying background information about the wife without starting a new main event' },
        { left: 'a cave, where Abraham was born', right: 'links a place directly to the event that happened there' },
      ],
      correctAnswer: {
        'So, he gathered pregnant women...': 'marks a result or response following the preceding reported threat',
        'Upon this, Azer took his wife...': 'moves from the ruler’s action to a further consequence and response',
        'his wife, who was pregnant with Abraham': 'adds identifying background information about the wife without starting a new main event',
        'a cave, where Abraham was born': 'links a place directly to the event that happened there',
      },
      explanation: 'B2 cohesion depends on more than sentence-level grammar. The chapter uses result markers and relative clauses to keep the event chain moving while adding background and place information efficiently.',
      feedback: {
        correct: 'Correct. You identified result links, background detail and place-based cohesion.',
        incorrect: 'Separate the main event chain from the extra information: “So/Upon this” advance consequences, while “who/where” attach supporting detail.',
      },
    },
    {
      id: 'abraham-b2-language-5-production',
      type: 'reflection',
      title: 'Write a Layered Past Narrative',
      instructions: 'Write or say an 8–10 sentence paragraph about a historical or fictional situation outside this story. Establish a past setting, describe one later development with “was/were going to”, report a prediction or expectation with at least two uses of “would”, introduce an alternative account with “according to another account/source”, show a consequence with “so/upon this/as a result”, and add one “who” clause plus one “where” clause. Keep any alternative account clearly marked rather than presenting both versions as one certainty. Do not retell Chapter 5.',
      question: 'Can you organise a B2 past narrative that distinguishes viewpoint, prediction, source status, consequence and supporting detail?',
      correctAnswer: null,
      explanation: 'A strong response should control time from a past viewpoint, distinguish the status of an alternative account, connect causes and consequences, and embed background/place detail without breaking the narrative flow.',
      feedback: {
        correct: 'Check that your paragraph keeps the alternative account visibly qualified and that each connector or clause has a clear discourse purpose.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Viewpoint — Which event was still in the future from your chosen past moment?', mode: 'Individual' },
        { question: 'Prediction — Which later developments will you report with “would”?', mode: 'Individual' },
        { question: 'Source status — How will you signal that the second account is an alternative rather than an additional certainty?', mode: 'Pair' },
        { question: 'Cohesion — Which detail belongs in a “who” clause and which belongs in a “where” clause?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 6 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-b2-language-6-time-background',
      type: 'matching',
      title: 'Layer Time and Background',
      instructions: 'Match each expression with the discourse function it performs. Focus on how the chapter separates the main event line from background and habitual context.',
      question: 'How does Chapter 6 build a childhood frame around individual events?',
      matchingPairs: [
        { left: 'when he was young in age', right: 'places Abraham’s knowledge of Allah inside an early-life time frame' },
        { left: 'During his early childhood', right: 'opens a broader period in which a new realization develops' },
        { left: 'One day', right: 'moves from background into a specific event in the narrative line' },
        { left: 'Being a child', right: 'adds background about Abraham’s state without creating a separate main event' },
      ],
      correctAnswer: {
        'when he was young in age': 'places Abraham’s knowledge of Allah inside an early-life time frame',
        'During his early childhood': 'opens a broader period in which a new realization develops',
        'One day': 'moves from background into a specific event in the narrative line',
        'Being a child': 'adds background about Abraham’s state without creating a separate main event',
      },
      explanation: 'The chapter does not narrate every sentence at the same level. Time expressions establish broader frames, while “One day” advances a specific event and “Being a child” compresses background information into a non-finite clause.',
      feedback: {
        correct: 'Correct. You distinguished broad time framing, event progression and compressed background.',
        incorrect: 'Ask which expressions move the event line forward and which simply tell us when or in what state the event happened.',
      },
    },
    {
      id: 'abraham-b2-language-6-reporting-directives',
      type: 'multiple-choice',
      title: 'Control Reported Speech and Directives',
      instructions: 'Choose the reformulation that preserves the sequence of question, reported answer, observation and command.',
      question: 'Which version best keeps the chapter’s different speech functions distinct?',
      options: [
        'Abraham asked his father what he was making. His father replied that he was making statues of gods. Later, when the father saw Abraham on the statue, he ordered him not to play with it again.',
        'Abraham told his father to make statues, and his father ordered Abraham that the statues were gods.',
        'Abraham asked a question, but the father’s reply and later command are presented as the same kind of speech act.',
      ],
      correctAnswer: 0,
      explanation: 'The chapter uses different reporting patterns for different purposes: “asked ... what”, “replied that ...”, and “ordered ... not to ...”. A precise B2 reformulation preserves both meaning and speech function.',
      feedback: {
        correct: 'Correct. You preserved the distinction between inquiry, reported statement and directive.',
        incorrect: 'Track what each speaker is doing: asking for information, giving information, or issuing a prohibition.',
      },
    },
    {
      id: 'abraham-b2-language-6-comparison-effect',
      type: 'matching',
      title: 'Use Comparison to Build Perspective',
      instructions: 'Match each phrase with the meaning effect it creates in the chapter.',
      question: 'How do comparison and analogy shape Abraham’s perspective on the statues?',
      matchingPairs: [
        { left: 'as people sit on the backs of donkeys', right: 'creates an analogy that treats the statue as an ordinary physical object rather than a divine being' },
        { left: 'It has big ears', right: 'draws attention to a concrete visible feature before evaluating it' },
        { left: 'bigger than ours', right: 'uses comparison to make the observation more pointed and questioning' },
        { left: 'the god of gods', right: 'reports the father’s elevated description, creating a contrast with Abraham’s physical observation' },
      ],
      correctAnswer: {
        'as people sit on the backs of donkeys': 'creates an analogy that treats the statue as an ordinary physical object rather than a divine being',
        'It has big ears': 'draws attention to a concrete visible feature before evaluating it',
        'bigger than ours': 'uses comparison to make the observation more pointed and questioning',
        'the god of gods': 'reports the father’s elevated description, creating a contrast with Abraham’s physical observation',
      },
      explanation: 'Comparison here is not decorative grammar. It helps construct a contrast between the statue’s physical qualities and the status assigned to it by the father.',
      feedback: {
        correct: 'Correct. You identified how comparison supports viewpoint and contrast.',
        incorrect: 'Look beyond form: ask what each comparison makes the reader notice about the difference between physical appearance and claimed status.',
      },
    },
    {
      id: 'abraham-b2-language-6-production',
      type: 'reflection',
      title: 'Build a Childhood Memory with Layered Language',
      instructions: 'Write or say an 8–10 sentence paragraph about a childhood memory or fictional scene outside this story. Use one broad time frame such as “when I was young” or “during my early childhood”, one specific event marker such as “one day”, one non-finite background phrase such as “being a child” or an equivalent structure, one reported question, one reported statement, one directive with “told/ordered + person + (not) to”, and one comparison with “as” or a comparative form. Make the paragraph coherent rather than listing grammar examples.',
      question: 'Can you use time framing, reported interaction and comparison to organise a coherent B2 narrative?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish background from main events, preserve the different functions of reported speech, and use comparison to develop perspective rather than as an isolated sentence pattern.',
      feedback: {
        correct: 'Check that every target form contributes to the narrative flow and that the reported speech functions remain distinct.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Time — Which sentence establishes the broad childhood frame, and which sentence moves to one specific event?', mode: 'Individual' },
        { question: 'Background — What information can you compress into a non-finite phrase instead of another full event sentence?', mode: 'Individual' },
        { question: 'Speech — Which part is a question, which is a statement, and which is a directive?', mode: 'Pair' },
        { question: 'Comparison — What comparison will reveal a viewpoint rather than merely describe size or appearance?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 7 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-b2-language-7-reasoning-chain',
      type: 'matching',
      title: 'Follow the Reasoning Chain',
      instructions: 'Match each clause with the role it plays in Abraham’s reasoning. Focus on how the chapter moves from observation to evaluation rather than simply retelling events.',
      question: 'How does the chapter build an argument from what Abraham observes?',
      matchingPairs: [
        { left: 'He realized these statues were lifeless, silent, and entirely helpless', right: 'states the central observation on which the later judgement is based' },
        { left: 'when they fell, they could not get back up', right: 'adds concrete evidence of inability' },
        { left: 'It was impossible to understand how people could believe...', right: 'moves from evidence to a strong evaluation of the belief' },
        { left: 'as if those lifeless idols were capable of hearing their prayers', right: 'highlights the contradiction between observed reality and people’s behaviour' },
      ],
      correctAnswer: {
        'He realized these statues were lifeless, silent, and entirely helpless': 'states the central observation on which the later judgement is based',
        'when they fell, they could not get back up': 'adds concrete evidence of inability',
        'It was impossible to understand how people could believe...': 'moves from evidence to a strong evaluation of the belief',
        'as if those lifeless idols were capable of hearing their prayers': 'highlights the contradiction between observed reality and people’s behaviour',
      },
      explanation: 'The paragraph develops an argument: observation comes first, concrete evidence strengthens it, evaluation follows, and the “as if” clause exposes the gap between reality and behaviour.',
      feedback: {
        correct: 'Correct. You traced the chapter’s observation → evidence → evaluation → contradiction sequence.',
        incorrect: 'Ask whether each clause observes, proves, evaluates, or contrasts appearance with reality.',
      },
    },
    {
      id: 'abraham-b2-language-7-modality-possibility',
      type: 'multiple-choice',
      title: 'Interpret Possibility and Ability',
      instructions: 'Choose the reformulation that best preserves the chapter’s use of “could” without turning every occurrence into the same meaning.',
      question: 'Which version best distinguishes mental possibility from physical ability?',
      options: [
        'Abraham could not understand how a reasonable person could worship what he had made; meanwhile, the statues themselves could not stand up, harm, benefit, or hear. The first use concerns what seems conceivable, while the others concern actual ability.',
        'Every use of “could” in the chapter means exactly the same thing: permission granted by another person.',
        'The chapter uses “could” only to describe uncertain future events and never to discuss ability or plausibility.',
      ],
      correctAnswer: 0,
      explanation: 'B2 reading requires interpreting modal meaning in context. “How ... could” questions plausibility or conceivability, while “could not get back up / could harm or benefit” concerns ability or capacity.',
      feedback: {
        correct: 'Correct. You distinguished contextual meanings of the same modal form.',
        incorrect: 'Look at what follows each “could”: is the text judging whether an idea makes sense, or whether something has the power to act?',
      },
    },
    {
      id: 'abraham-b2-language-7-relative-as-if-change',
      type: 'matching',
      title: 'Build Viewpoint and Change',
      instructions: 'Match each structure with its discourse effect. Focus on how the chapter embeds background, presents an unreal-looking comparison, and marks a change in attitude over time.',
      question: 'How do relative clauses and contrast markers shape Abraham’s viewpoint?',
      matchingPairs: [
        { left: 'Abraham, who used to go to the temple with his father when he was a child', right: 'embeds relevant childhood background inside the main sentence' },
        { left: 'as if those lifeless idols were capable of hearing their prayers', right: 'presents people’s behaviour as though an impossible condition were true' },
        { left: 'At first, Abraham thought the sight was funny', right: 'establishes the earlier stage of his emotional response' },
        { left: 'but later his feelings turned into anger', right: 'marks a clear contrast and development from the earlier response' },
      ],
      correctAnswer: {
        'Abraham, who used to go to the temple with his father when he was a child': 'embeds relevant childhood background inside the main sentence',
        'as if those lifeless idols were capable of hearing their prayers': 'presents people’s behaviour as though an impossible condition were true',
        'At first, Abraham thought the sight was funny': 'establishes the earlier stage of his emotional response',
        'but later his feelings turned into anger': 'marks a clear contrast and development from the earlier response',
      },
      explanation: 'The chapter combines embedded background, an “as if” viewpoint structure, and temporal contrast to show not just what Abraham saw, but how his interpretation and feelings developed.',
      feedback: {
        correct: 'Correct. You identified how grammar organizes viewpoint, background and emotional development.',
        incorrect: 'Notice which structure inserts background, which creates an unreal comparison, and which marks before-versus-later change.',
      },
    },
    {
      id: 'abraham-b2-language-7-production',
      type: 'reflection',
      title: 'Write an Observation-to-Evaluation Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone notices a contradiction between evidence and behaviour or belief. Include: one observation with three linked qualities, one concrete example introduced by “when” or “if”, one use of “could” for plausibility and one for ability, one relative clause that embeds background, one “as if” clause that reveals the gap between appearance and reality, and an “at first ... but later ...” change in viewpoint or feeling. Keep the paragraph coherent and evidence-led.',
      question: 'Can you move from observation to evidence, evaluation, contradiction and changed viewpoint in a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should use the target structures to organize reasoning. The grammar should help the reader see how evidence leads to judgement and how the writer’s viewpoint develops.',
      feedback: {
        correct: 'Check that your paragraph has a visible reasoning chain and that the two uses of “could” perform different functions.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Observation — What three qualities or facts will form the basis of your judgement?', mode: 'Individual' },
        { question: 'Evidence — What concrete “when/if” example will make the observation harder to dismiss?', mode: 'Individual' },
        { question: 'Viewpoint — Where can an “as if” clause expose a gap between appearance and reality?', mode: 'Pair' },
        { question: 'Development — How will “at first ... but later ...” show a genuine change rather than simple chronology?', mode: 'Pair' },
      ],
    },
  ],
};

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

/** Chapter 9 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-b2-language-9-condition-guidance',
      type: 'matching',
      title: 'Trace Condition, Guidance and Consequence',
      instructions: 'Match each clause with the discourse job it performs. Focus on how the chapter moves from uncertainty to dependence on guidance and then to a possible consequence.',
      question: 'How does the sentence “If my Lord does not guide me, I will be one of the erring people” organise meaning?',
      matchingPairs: [
        { left: 'If my Lord does not guide me', right: 'sets a condition on which the later outcome depends' },
        { left: 'I will be one of the erring people', right: 'states the consequence that would follow if the condition were met' },
        { left: 'does not guide me', right: 'frames guidance as something received rather than self-produced' },
        { left: 'will be', right: 'projects a future result from the present condition' },
      ],
      correctAnswer: {
        'If my Lord does not guide me': 'sets a condition on which the later outcome depends',
        'I will be one of the erring people': 'states the consequence that would follow if the condition were met',
        'does not guide me': 'frames guidance as something received rather than self-produced',
        'will be': 'projects a future result from the present condition',
      },
      explanation: 'The clause combines condition and consequence while also presenting guidance as necessary for avoiding error. The meaning is relational, not a grammar form in isolation.',
      feedback: {
        correct: 'Correct. You identified condition, dependence and projected consequence.',
        incorrect: 'Ask what must happen first, what depends on it, and how the future result is expressed.',
      },
    },
    {
      id: 'abraham-b2-language-9-stance-shift',
      type: 'multiple-choice',
      title: 'Interpret a Shift in Stance',
      instructions: 'Choose the option that best explains the contrast between “This is my lord” and “I am innocent of your idolatry.”',
      question: 'What does the change in wording do in the discourse?',
      options: [
        'It moves from examining an apparent possibility to an explicit rejection and a clearly stated commitment.',
        'It repeats the same belief twice with different vocabulary but no change in stance.',
        'It changes only the tense and leaves the speaker’s position unchanged.',
      ],
      correctAnswer: 0,
      explanation: 'The discourse progresses from testing what appears before him to an explicit declaration of separation from idolatry and orientation toward the Creator.',
      feedback: {
        correct: 'Correct. You read the wording as a development in stance rather than as isolated statements.',
        incorrect: 'Compare the level of commitment in the earlier claim and the later declaration.',
      },
    },
    {
      id: 'abraham-b2-language-9-created-vs-creator',
      type: 'matching',
      title: 'Separate Appearance from Created Status',
      instructions: 'Match each structure with the function it performs in the chapter’s argument. Do not retell which objects appear; focus on how language distinguishes visible movement from created dependence.',
      question: 'How does the paragraph move from what people see to what the writer says those objects actually are?',
      matchingPairs: [
        { left: 'were worshipped by people', right: 'uses passive focus to foreground the objects and the treatment they receive' },
        { left: 'while in fact', right: 'signals a correction from appearance or human practice to the writer’s asserted reality' },
        { left: 'had been created', right: 'presents the heavenly bodies as already-existing results of creation, not independent creators' },
        { left: 'they appeared and disappeared at the Creator’s command', right: 'links observable change to dependence on a higher agent' },
      ],
      correctAnswer: {
        'were worshipped by people': 'uses passive focus to foreground the objects and the treatment they receive',
        'while in fact': 'signals a correction from appearance or human practice to the writer’s asserted reality',
        'had been created': 'presents the heavenly bodies as already-existing results of creation, not independent creators',
        'they appeared and disappeared at the Creator’s command': 'links observable change to dependence on a higher agent',
      },
      explanation: 'The paragraph contrasts human practice with the status assigned to the heavenly bodies: they are worshipped, yet the text frames them as created and governed.',
      feedback: {
        correct: 'Correct. You distinguished passive focus, corrective contrast, prior created status and dependent action.',
        incorrect: 'Look for the shift from what people do to the objects toward what the text says about the objects themselves.',
      },
    },
    {
      id: 'abraham-b2-language-9-production',
      type: 'reflection',
      title: 'Build an Evidence-to-Stance Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story issue where an initial appearance is tested and then rejected or revised. Include: one real condition with “if ... will ...”, one sentence that moves from tentative examination to explicit stance, one passive structure that foregrounds an object or idea, one corrective contrast using “while in fact” or “however”, and one final sentence explaining how repeated evidence leads to a reasoned position. Keep the paragraph analytical and coherent.',
      question: 'Can you use condition, contrast, passive focus and stance development to build a B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should show reasoning developing across the paragraph: a possibility is examined, evidence changes the evaluation, and the final stance is expressed more explicitly.',
      feedback: {
        correct: 'Check that each target structure advances the argument and that the final stance follows from the evidence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Condition — What outcome will depend on a clear “if” condition?', mode: 'Individual' },
        { question: 'Appearance — What seems plausible at first, and what evidence later challenges it?', mode: 'Individual' },
        { question: 'Correction — Where will a passive structure and “while in fact” sharpen the contrast?', mode: 'Pair' },
        { question: 'Stance — How will the final sentence show a stronger, evidence-based position?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 10 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-b2-language-10-created-controlled-purpose',
      type: 'matching',
      title: 'Trace Status, Control and Purpose',
      instructions: 'Match each phrase with the discourse function it performs. Focus on how the chapter turns visible celestial bodies into an argument about dependence.',
      question: 'How does the opening sentence build the claim that the heavenly bodies are not independent powers?',
      matchingPairs: [
        { left: 'are evidently created', right: 'states their dependent status as created beings' },
        { left: 'controlled, managed', right: 'foregrounds that their behaviour is governed rather than self-directed' },
        { left: 'made to serve a purpose', right: 'frames their existence as functional rather than autonomous' },
        { left: 'They come and go', right: 'adds observable change as evidence against permanence and independence' },
      ],
      correctAnswer: {
        'are evidently created': 'states their dependent status as created beings',
        'controlled, managed': 'foregrounds that their behaviour is governed rather than self-directed',
        'made to serve a purpose': 'frames their existence as functional rather than autonomous',
        'They come and go': 'adds observable change as evidence against permanence and independence',
      },
      explanation: 'The paragraph combines passive description and observable change to build a dependence argument rather than simply listing facts.',
      feedback: { correct: 'Correct. You traced how status, control, purpose and change work together.', incorrect: 'Look for what each phrase says about independence, control and permanence.' },
    },
    {
      id: 'abraham-b2-language-10-however-contrast',
      type: 'multiple-choice',
      title: 'Read the Contrast Across Sentences',
      instructions: 'Choose the option that best explains the function of “However” in the paragraph.',
      question: 'What contrast is created by “However, Allah sees and knows everything; nothing can be hidden from Him”?',
      options: [
        'It shifts from changing, limited created bodies to a contrasting description of Allah as unrestricted in knowledge and permanence.',
        'It merely changes topic from astronomy to weather without argumentative purpose.',
        'It shows that the heavenly bodies and Allah share the same limits but differ in size.',
      ],
      correctAnswer: 0,
      explanation: '“However” marks a major argumentative turn: created things are changing and dependent, while Allah is described as unlimited in knowledge and without disappearance.',
      feedback: { correct: 'Correct. You identified the chapter’s central contrast.', incorrect: 'Compare what is said about change and limitation before “However” with what follows it.' },
    },
    {
      id: 'abraham-b2-language-10-firstly-secondly',
      type: 'matching',
      title: 'Reconstruct a Two-Part Explanation',
      instructions: 'Match the organisers with the role they perform in Abraham’s explanation. Focus on discourse organisation, not on recalling the Quick Challenge answer.',
      question: 'How do “firstly” and “secondly” organise the reasoning?',
      matchingPairs: [
        { left: 'firstly', right: 'introduces the rejection of an inappropriate conclusion: worship' },
        { left: 'the heavenly bodies are unworthy of worship', right: 'states the negative evaluation produced by the earlier reasoning' },
        { left: 'secondly', right: 'adds a different positive interpretation after the rejection' },
        { left: 'they are the signs of Allah', right: 'reframes the same objects as evidence pointing beyond themselves' },
      ],
      correctAnswer: {
        'firstly': 'introduces the rejection of an inappropriate conclusion: worship',
        'the heavenly bodies are unworthy of worship': 'states the negative evaluation produced by the earlier reasoning',
        'secondly': 'adds a different positive interpretation after the rejection',
        'they are the signs of Allah': 'reframes the same objects as evidence pointing beyond themselves',
      },
      explanation: 'The sequence does more than enumerate points: it moves from rejecting one interpretation to supplying another.',
      feedback: { correct: 'Correct. You identified rejection followed by reinterpretation.', incorrect: 'Ask what the first point removes and what the second point puts in its place.' },
    },
    {
      id: 'abraham-b2-language-10-production',
      type: 'reflection',
      title: 'Build a Contrast-and-Reframing Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story topic where something visible is first evaluated, then reinterpreted through evidence. Use one passive description, one “however” contrast, a “firstly / secondly” structure, and a final sentence showing how evidence leads to disagreement or debate. Do not retell the Abraham story.',
      question: 'Can you move from observation to contrast, evaluation and reframing in a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make each language choice advance the reasoning: observation, limitation, contrast, two-part interpretation, and a final consequence.',
      feedback: { correct: 'Check that your paragraph develops an argument rather than listing disconnected sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Observation — What visible feature will you describe first?', mode: 'Individual' },
        { question: 'Contrast — What will “however” introduce?', mode: 'Individual' },
        { question: 'Reframing — What will “firstly” reject and “secondly” reinterpret?', mode: 'Pair' },
        { question: 'Consequence — How will the reasoning lead to disagreement, decision, or debate?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 11 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-b2-language-11-rhetorical-questions',
      type: 'matching',
      title: 'Trace the Argument Through Questions',
      instructions: 'Match each question with the argumentative move it performs. Focus on discourse function rather than story recall.',
      question: 'How do Abraham’s questions organise the challenge to his opponents?',
      matchingPairs: [
        { left: 'Do you argue with me about Allah, when He has guided me?', right: 'challenges the basis of the dispute by foregrounding a prior position of guidance' },
        { left: 'Will you not reconsider?', right: 'presses the audience to reassess its reasoning rather than simply receive information' },
        { left: 'Why should I fear the partners you give to Him...?', right: 'reverses the burden of fear and asks why unsupported objects deserve authority' },
        { left: 'Which of the two parties has more right to security...?', right: 'turns the debate into a comparison that requires a reasoned judgement' },
      ],
      correctAnswer: {
        'Do you argue with me about Allah, when He has guided me?': 'challenges the basis of the dispute by foregrounding a prior position of guidance',
        'Will you not reconsider?': 'presses the audience to reassess its reasoning rather than simply receive information',
        'Why should I fear the partners you give to Him...?': 'reverses the burden of fear and asks why unsupported objects deserve authority',
        'Which of the two parties has more right to security...?': 'turns the debate into a comparison that requires a reasoned judgement',
      },
      explanation: 'The questions are not requests for missing facts. They structure the argument by challenging assumptions, shifting the burden of proof, and forcing comparison.',
      feedback: { correct: 'Correct. You identified how each question advances the reasoning.', incorrect: 'Ask what argumentative pressure each question places on the listener.' },
    },
    {
      id: 'abraham-b2-language-11-unless-exception',
      type: 'multiple-choice',
      title: 'Read an Exception Without Weakening the Main Claim',
      instructions: 'Choose the explanation that best captures the role of “unless” in the sentence.',
      question: 'What does “I do not fear partners you assign to Him, unless my Lord wills it” do?',
      options: [
        'It maintains the main rejection of fear while leaving a limited exception dependent on the Lord’s will.',
        'It means Abraham is generally afraid of the partners and only sometimes confident.',
        'It changes the sentence into a historical guess about what the people believed.',
      ],
      correctAnswer: 0,
      explanation: '“Unless” preserves the main stance while marking a tightly controlled exception. The sentence does not surrender the argument.',
      feedback: { correct: 'Correct. The exception is subordinate to the main stance.', incorrect: 'Separate the main claim from the narrow condition introduced by “unless”.' },
    },
    {
      id: 'abraham-b2-language-11-authority-evidence-inference',
      type: 'matching',
      title: 'Separate Evidence, Absence of Evidence and Inference',
      instructions: 'Match each expression with the epistemic role it plays. Preserve the chapter’s distinction between stated evidence and later interpretation.',
      question: 'How does the chapter distinguish what is stated from what is inferred?',
      matchingPairs: [
        { left: 'for which He sent down to you no authority', right: 'explicitly frames the opposing claim as lacking authorised evidence' },
        { left: 'present evidence to prove the correctness of their beliefs', right: 'reports the opponents’ attempt to justify their position' },
        { left: 'these arguments are not told in the verses', right: 'states an absence in the presented scriptural account' },
        { left: 'It is understood from Abraham’s statement... that his people threatened him', right: 'marks a later inference drawn from the wording rather than a directly quoted event' },
      ],
      correctAnswer: {
        'for which He sent down to you no authority': 'explicitly frames the opposing claim as lacking authorised evidence',
        'present evidence to prove the correctness of their beliefs': 'reports the opponents’ attempt to justify their position',
        'these arguments are not told in the verses': 'states an absence in the presented scriptural account',
        'It is understood from Abraham’s statement... that his people threatened him': 'marks a later inference drawn from the wording rather than a directly quoted event',
      },
      explanation: 'B2 reading requires keeping evidence, absence of evidence, reported attempts at proof, and interpretation separate instead of flattening them into one certainty level.',
      feedback: { correct: 'Correct. You kept the evidence levels distinct.', incorrect: 'Look for whether the sentence states, reports, notes an absence, or infers.' },
    },
    {
      id: 'abraham-b2-language-11-production',
      type: 'reflection',
      title: 'Build a Question-Led Evidence Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story disagreement. Use at least two rhetorical questions, one narrow exception with “unless”, one sentence about evidence or authority, one sentence that explicitly marks an inference with wording such as “it can be inferred that”, and a final comparison that asks which position is better supported. Do not retell the Abraham story.',
      question: 'Can you use questions, qualification and evidence status to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should use language choices to organise reasoning: challenge an assumption, qualify a claim, distinguish evidence from inference, and end with an evaluative comparison.',
      feedback: { correct: 'Check that your questions advance the argument and that your inference is clearly marked as an inference.', incorrect: '' },
      discussionPrompts: [
        { question: 'Assumption — Which idea will your first rhetorical question challenge?', mode: 'Individual' },
        { question: 'Qualification — What narrow exception will “unless” introduce?', mode: 'Individual' },
        { question: 'Evidence — What is directly supported, and what is only inferred?', mode: 'Pair' },
        { question: 'Comparison — How will your final question compare the two positions?', mode: 'Pair' },
      ],
    },
  ],
};

/** Chapter 12 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-b2-language-12-discourse-stance',
      type: 'matching',
      title: 'Track How the Paragraph Builds a Stance',
      instructions: 'Match each expression with the discourse job it performs. Focus on how the writer moves from reaction to belief and action.',
      question: 'How do these expressions organise Abraham’s stance rather than simply list events?',
      matchingPairs: [
        { left: 'paid no heed to this threat', right: 'presents a refusal to let an external threat control the response' },
        { left: 'As a true believer', right: 'frames the following response from an explicitly stated identity or viewpoint' },
        { left: 'In doing so', right: 'links the previous action to the meaning or implication drawn from it' },
        { left: 'both benefit and harm come from Allah', right: 'states the belief that explains the preceding response' },
      ],
      correctAnswer: {
        'paid no heed to this threat': 'presents a refusal to let an external threat control the response',
        'As a true believer': 'frames the following response from an explicitly stated identity or viewpoint',
        'In doing so': 'links the previous action to the meaning or implication drawn from it',
        'both benefit and harm come from Allah': 'states the belief that explains the preceding response',
      },
      explanation: 'The paragraph moves from reaction to viewpoint to interpretation. These choices create a reasoned stance rather than a bare sequence of actions.',
      feedback: { correct: 'Correct. You traced the reaction → viewpoint → interpretation chain.', incorrect: 'Ask whether each expression shows reaction, viewpoint, connection, or underlying belief.' },
    },
    {
      id: 'abraham-b2-language-12-direct-speech-functions',
      type: 'matching',
      title: 'Read Direct Speech as Argument',
      instructions: 'Match each quoted form with the argumentative function it performs. Do not answer the questions as comprehension questions.',
      question: 'What does each form of direct speech do inside the debate?',
      matchingPairs: [
        { left: 'What are these statues to which you are faithful?', right: 'opens the challenge by questioning the object of commitment' },
        { left: 'We found our parents worshiping them.', right: 'offers inherited practice as the speakers’ justification' },
        { left: 'Are you telling us the truth, or are you just playing?', right: 'questions the seriousness and credibility of the challenge' },
        { left: 'Your Lord is the Lord of the heavens and the earth...', right: 'reframes the discussion around a positive alternative claim' },
      ],
      correctAnswer: {
        'What are these statues to which you are faithful?': 'opens the challenge by questioning the object of commitment',
        'We found our parents worshiping them.': 'offers inherited practice as the speakers’ justification',
        'Are you telling us the truth, or are you just playing?': 'questions the seriousness and credibility of the challenge',
        'Your Lord is the Lord of the heavens and the earth...': 'reframes the discussion around a positive alternative claim',
      },
      explanation: 'Direct speech carries different discourse moves: challenge, justification, credibility testing, and reframing.',
      feedback: { correct: 'Correct. You identified the function of each turn in the exchange.', incorrect: 'Focus on what each speaker is trying to accomplish with the line.' },
    },
    {
      id: 'abraham-b2-language-12-contrast-expansion',
      type: 'multiple-choice',
      title: 'Read an Expanding Contrast',
      instructions: 'Choose the interpretation that best captures the effect of “not only... but... as well”.',
      question: 'What does “he not only worshipped idols but shaped and sold them as well” add to the description of the father?',
      options: [
        'It expands the description from personal worship to active production and sale, intensifying his involvement.',
        'It corrects the earlier statement by saying that he did not actually worship idols.',
        'It presents two uncertain possibilities and leaves the reader to choose between them.',
      ],
      correctAnswer: 0,
      explanation: 'The structure is additive and intensifying: the second clause adds a stronger layer of involvement rather than replacing the first.',
      feedback: { correct: 'Correct. The second clause expands and intensifies the first.', incorrect: 'Notice that both actions remain true; the second adds another layer.' },
    },
    {
      id: 'abraham-b2-language-12-production',
      type: 'reflection',
      title: 'Build a Stance-and-Response Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone faces pressure but responds from a clear principle. Use one viewpoint frame such as “As a...”, one connector such as “In doing so” to explain the meaning of an action, one short exchange containing a genuine challenge and a response, and one “not only... but also...” sentence that expands the final description. Do not retell the Abraham story.',
      question: 'Can you use viewpoint, dialogue and expanding contrast to build a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should connect pressure, principle, action, interpretation and dialogue into one coherent argument rather than produce isolated grammar examples.',
      feedback: { correct: 'Check that every language choice advances the paragraph’s stance and that the dialogue has a clear function.', incorrect: '' },
      discussionPrompts: [
        { question: 'Pressure — What external pressure starts your situation?', mode: 'Individual' },
        { question: 'Viewpoint — Which identity or principle will frame the response?', mode: 'Individual' },
        { question: 'Dialogue — What challenge will one speaker make, and how will the other reframe it?', mode: 'Pair' },
        { question: 'Expansion — What second fact will “not only... but also...” add to deepen the final description?', mode: 'Pair' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusPart1: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter1,
  ...abrahamB2LanguageFocusChapter2,
  ...abrahamB2LanguageFocusChapter3,
  ...abrahamB2LanguageFocusChapter4,
  ...abrahamB2LanguageFocusChapter5,
  ...abrahamB2LanguageFocusChapter6,
  ...abrahamB2LanguageFocusChapter7,
  ...abrahamB2LanguageFocusChapter8,
  ...abrahamB2LanguageFocusChapter9,
  ...abrahamB2LanguageFocusChapter10,
  ...abrahamB2LanguageFocusChapter11,
  ...abrahamB2LanguageFocusChapter12,
};
