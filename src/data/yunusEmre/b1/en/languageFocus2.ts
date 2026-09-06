import type { Exercise } from '../../../../types';

/** Chapter 4 English Language Focus, derived only from the locked Chapter 4 story text. */
export const yunusB1LanguageFocusChapter4: Exercise[] = [
  {
    id: 'yunus-b1-language-4-condition-perspective',
    type: 'matching',
    title: 'Using a Condition to Open a Historical Explanation',
    instructions: 'Match each expression with the meaning relationship it creates.',
    question: 'How does the opening sentence connect a closer look at history with a better understanding of place and context?',
    matchingPairs: [
      { left: 'If we take a closer look at this historical atmosphere...', right: 'sets a condition or approach for gaining deeper understanding' },
      { left: 'we can better understand Anatolia', right: 'states the possible result of taking that approach' },
      { left: 'the land where Yunus Emre lived and recited...', right: 'adds identifying information about Anatolia and connects place with a person’s experience' },
    ],
    correctAnswer: {
      'If we take a closer look at this historical atmosphere...': 'sets a condition or approach for gaining deeper understanding',
      'we can better understand Anatolia': 'states the possible result of taking that approach',
      'the land where Yunus Emre lived and recited...': 'adds identifying information about Anatolia and connects place with a person’s experience',
    },
    explanation: 'The sentence uses “if” to present an approach and “can” to show the understanding that becomes possible. The “where” clause then connects the place with Yunus Emre’s life.',
    feedback: {
      correct: 'Correct. You followed the movement from condition to possible result and then to place description.',
      incorrect: 'Ask which part gives the condition, which part gives the possible result, and which part adds information about Anatolia.',
    },
  },
  {
    id: 'yunus-b1-language-4-contrast-change',
    type: 'multiple-choice',
    title: 'From a High Point to Decline',
    instructions: 'Choose the sentence that best preserves the chapter’s contrast and time relationship.',
    question: 'Which sentence most naturally connects an earlier period of strength with a later period of decline?',
    options: [
      'Alaeddin I’s reign was one of the Seljuks’ strongest periods; however, under his son the economic and social structure began to decline.',
      'Alaeddin I’s reign was powerful because his son had already caused the decline before it began.',
      'Alaeddin I’s reign and the later decline happened for exactly the same reason, so there is no contrast between them.',
    ],
    correctAnswer: 0,
    explanation: 'The chapter first evaluates Alaeddin I’s reign with strong superlative language and then uses “however” to signal a change in direction under the next ruler.',
    feedback: {
      correct: 'Good. The sentence keeps both the chronological change and the contrast.',
      incorrect: 'Look for a sentence that first establishes strength, then marks a later change with contrast rather than treating the two periods as identical.',
    },
  },
  {
    id: 'yunus-b1-language-4-cause-chain',
    type: 'sequencing',
    title: 'Reconstructing a Cause-and-Change Chain',
    instructions: 'Put the language moves in an order that builds a coherent explanation. Focus on how the relationships are expressed, not on recalling dates.',
    question: 'How can a B1 explanation move from pressure to movement, social change, and a worsening situation?',
    sequencingItems: [
      { id: '1', text: 'A major pressure caused many people to move from one region to another.' },
      { id: '2', text: 'This change affected the lives of the local population.' },
      { id: '3', text: 'The number of newcomers then grew.' },
      { id: '4', text: 'A failure to manage the situation worsened the social and economic problems.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'Chapter 4 uses several cause-result patterns: “caused ... to migrate”, “which ... turned the lives ... upside down”, and “failure to manage this situation worsened...”. The point is to build a connected chain rather than four isolated facts.',
    feedback: {
      correct: 'Correct. You built a coherent chain from cause through change to worsening conditions.',
      incorrect: 'Start with the pressure that causes movement, then show the effect of that movement, the continuing change, and finally the result of poor management.',
    },
  },
  {
    id: 'yunus-b1-language-4-production',
    type: 'reflection',
    title: 'Explain How a Situation Changes Over Time',
    instructions: 'Write or say five to six connected B1 sentences about a real or imagined place, institution, or community. Do not retell Chapter 4.',
    question: 'Can you begin with an “if ... can ...” perspective, describe an earlier high point, mark a later contrast, and explain a short cause-result chain?',
    correctAnswer: null,
    explanation: 'A strong response should develop one coherent account. Useful language from the chapter includes “If we... we can...”, superlative descriptions such as “the most...”, “however”, “because of...”, “caused ... to...”, “which...”, “began to...”, and “failure to ... worsened...”.',
    feedback: {
      correct: 'Keep the time change and the cause-result links explicit so the paragraph reads as one explanation.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Sentence 1 — Use “If we... we can...” to explain how looking at one factor can improve understanding.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe an earlier strong or successful period with an appropriate comparative or superlative expression.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “however” to mark a later change in direction.', mode: 'Pair' },
      { question: 'Sentences 4–6 — Build a short chain with a cause, an effect on people or conditions, and a final worsening or improvement.', mode: 'Pair' },
    ],
  },
];

/** Chapter 5 English Language Focus, derived only from the locked Chapter 5 story text. */
export const yunusB1LanguageFocusChapter5: Exercise[] = [
  {
    id: 'yunus-b1-language-5-cause-response', type: 'matching', title: 'Building Cause and Response', instructions: 'Match each expression with the relationship it creates. Focus on meaning, not historical recall.', question: 'How does the chapter connect difficult conditions, people’s responses, and later consequences?', matchingPairs: [
      { left: 'Because of many economic and social problems...', right: 'introduces a cause before describing a response' },
      { left: 'because they believed these leaders would save them', right: 'gives the reason for following the leaders and reports an expected future from a past viewpoint' },
      { left: 'This disaster caused deep sorrow and fear...', right: 'shows the emotional result produced by an event' },
      { left: 'Thus, they easily defeated the Seljuks.', right: 'marks a result that follows from the tactic just described' },
    ], correctAnswer: {
      'Because of many economic and social problems...': 'introduces a cause before describing a response',
      'because they believed these leaders would save them': 'gives the reason for following the leaders and reports an expected future from a past viewpoint',
      'This disaster caused deep sorrow and fear...': 'shows the emotional result produced by an event',
      'Thus, they easily defeated the Seljuks.': 'marks a result that follows from the tactic just described',
    }, explanation: 'Chapter 5 repeatedly links causes with responses and results. It also reports what people believed would happen from their position in the past.', feedback: { correct: 'Correct. You identified four different ways the text builds cause, reason, expectation, and result.', incorrect: 'Ask whether each expression introduces a cause, explains a reason, reports an expectation, or signals a result.' },
  },
  {
    id: 'yunus-b1-language-5-past-viewpoint', type: 'multiple-choice', title: 'Reporting a Future Seen from the Past', instructions: 'Choose the sentence that best keeps the viewpoint used in the chapter.', question: 'Which sentence naturally reports what a group believed at that earlier time?', options: [
      'They followed the leaders because they believed the leaders would save them.',
      'They followed the leaders because they believe the leaders will save them yesterday.',
      'They followed the leaders because the leaders save them before they believed it.',
    ], correctAnswer: 0, explanation: 'The chapter uses “believed ... would save” to report an expectation that was still in the future from a past point of view.', feedback: { correct: 'Good. The sentence keeps both the past viewpoint and the later expected action.', incorrect: 'Look for a past reporting verb followed by “would” for something expected to happen later from that past viewpoint.' },
  },
  {
    id: 'yunus-b1-language-5-contrast-result', type: 'multiple-choice', title: 'Connecting Contrast and Consequence', instructions: 'Choose the version that creates the clearest logical movement between the ideas.', question: 'Which short passage best moves from one outcome to an unexpected new development and then to its consequence?', options: [
      'The revolt was suppressed with difficulty. However, this gave another power courage to attack. The attack caused fear, and later a successful tactic led to defeat.',
      'The revolt was suppressed with difficulty because however another power attack fear tactic.',
      'The revolt ended, so there was no contrast, no further consequence, and no need to connect the ideas.',
    ], correctAnswer: 0, explanation: '“However” marks a change in direction, while expressions such as “caused...” and “thus...” show consequences. Together they help a B1 explanation develop across several sentences.', feedback: { correct: 'Correct. The ideas are connected through contrast first and consequence afterwards.', incorrect: 'Choose the passage that uses a contrast marker for the new development and clear cause-result language for what follows.' },
  },
  {
    id: 'yunus-b1-language-5-production', type: 'reflection', title: 'Explain a Chain of Pressure, Belief, and Result', instructions: 'Write or say five to six connected B1 sentences about a real or imagined social situation. Do not retell Chapter 5.', question: 'Can you explain a difficult condition, describe how people respond, report what they believe will happen, introduce an unexpected development, and finish with a clear result?', correctAnswer: null, explanation: 'A strong response should read as one connected explanation. Useful language from the chapter includes “because of...”, “were looking for...”, “started...”, “because they believed... would...”, “however”, “caused...”, “thus”, and “after that”.', feedback: { correct: 'Keep the relationships explicit so each sentence develops the previous one.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce a difficult condition with “because of...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe how people were trying to respond to that condition.', mode: 'Individual' },
      { question: 'Sentence 3 — Report what they believed would happen next.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “however” to introduce an unexpected new development.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Show one or two consequences with “caused...”, “thus”, or another clear result expression.', mode: 'Pair' },
    ],
  },
];

/** Chapter 6 English Language Focus, derived only from the locked Chapter 6 story text. */
export const yunusB1LanguageFocusChapter6: Exercise[] = [
  {
    id: 'yunus-b1-language-6-focus-and-effect', type: 'matching', title: 'Who or What Is Put in Focus?', instructions: 'Match each story pattern with what it helps the writer foreground. Focus on how the sentence is built, not on recalling the event.', question: 'How does Chapter 6 shift attention from the people who act to the people, places, and institutions affected by events?', matchingPairs: [
      { left: 'The men were killed with swords.', right: 'puts the affected people in focus rather than naming the doer' },
      { left: 'The women and children were taken captive and forced to go...', right: 'links two things done to the same affected group' },
      { left: 'an agreement was made with the Mongols', right: 'focuses on the agreement and its result rather than who negotiated it' },
      { left: 'the lands of Anatolia were directly attached to the Ilkhanate Empire', right: 'presents a political change as something imposed on a place' },
    ], correctAnswer: {
      'The men were killed with swords.': 'puts the affected people in focus rather than naming the doer',
      'The women and children were taken captive and forced to go...': 'links two things done to the same affected group',
      'an agreement was made with the Mongols': 'focuses on the agreement and its result rather than who negotiated it',
      'the lands of Anatolia were directly attached to the Ilkhanate Empire': 'presents a political change as something imposed on a place',
    }, explanation: 'Chapter 6 often places affected people, agreements, income, and territory at the beginning of the sentence. This helps the text describe what happened to them, not only who caused it.', feedback: { correct: 'Correct. You identified how sentence focus changes when the affected person or thing becomes the subject.', incorrect: 'Ask whether the sentence is mainly interested in the doer or in the person, thing, or place affected by the action.' },
  },
  {
    id: 'yunus-b1-language-6-change-over-time', type: 'multiple-choice', title: 'Building Change Over Time', instructions: 'Choose the passage that most naturally shows a gradual change rather than a list of disconnected facts.', question: 'Which short passage best uses the chapter’s language of developing dependence and control?', options: [
      'An agreement was made, but in time the weaker side became dependent. A large part of its income began to be sent away, and later outside officials began to administer the region.',
      'An agreement was made. Dependence income officials region yesterday tomorrow.',
      'An agreement was made, so nothing changed afterwards and no later development needs to be connected.',
    ], correctAnswer: 0, explanation: 'Expressions such as “in time”, “became dependent”, “began to be sent”, “after 1277”, and “began to administer” let the writer show a process developing across time.', feedback: { correct: 'Correct. The passage presents change as a connected process with clear stages.', incorrect: 'Look for a passage that marks gradual change and later stages with time expressions and verbs such as “became” and “began”.' },
  },
  {
    id: 'yunus-b1-language-6-comparison-result', type: 'multiple-choice', title: 'Showing Degree, Comparison, and Result', instructions: 'Choose the version that best preserves the relationships used in the chapter.', question: 'Which sentence set most clearly moves from a comparison to a worsening condition and then to its effect?', options: [
      'The rulers acted almost like officials for another power. However, the tax kept increasing, and this made both the state and the people poorer.',
      'The rulers almost officials however tax poorer because like continuously.',
      'The rulers acted independently, and the increasing tax made everyone richer.',
    ], correctAnswer: 0, explanation: '“Almost like” expresses an approximate comparison. “However” introduces a worsening development, and “made ... poorer” expresses the effect of that development on two groups.', feedback: { correct: 'Correct. The relationships of comparison, contrast, and result are all clear.', incorrect: 'Find the version with an approximate comparison, a contrast marker, and a clear result with “made + object + adjective”.' },
  },
  {
    id: 'yunus-b1-language-6-production', type: 'reflection', title: 'Describe a Process of Losing Control', instructions: 'Write or say five to six connected B1 sentences about a real, historical, or imagined situation in which a person, group, or organisation gradually loses control. Do not retell Chapter 6.', question: 'Can you keep the affected side in focus, show change over time, compare its new role with an earlier one, and finish with a clear consequence?', correctAnswer: null, explanation: 'A strong response should develop as one short process. Useful language from the chapter includes “was/were + past participle”, “in time”, “became...”, “almost like...”, “began to be...”, “however”, “made ... + adjective”, “through...”, and “was/were directly attached to...”.', feedback: { correct: 'Keep the stages connected so the reader can see who is affected, how the situation changes, and what the final consequence is.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce something that happened to the affected person, group, or organisation.', mode: 'Individual' },
      { question: 'Sentence 2 — Use “in time” or “became...” to show a change in status or independence.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “almost like...” to compare the new role with another role.', mode: 'Pair' },
      { question: 'Sentence 4 — Show a new process beginning, using “began to...” or “began to be...”.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Add a contrast or worsening development and finish with a clear effect using “made...”, another result expression, or a final passive sentence.', mode: 'Pair' },
    ],
  },
];

/** Chapter 7 English Language Focus, derived only from the locked Chapter 7 story text. */
export const yunusB1LanguageFocusChapter7: Exercise[] = [
  {
    id: 'yunus-b1-language-7-context-action', type: 'matching', title: 'Context and Action at the Same Time', instructions: 'Match each story pattern with the relationship it helps express. Focus on the language, not on recalling story facts.', question: 'How does Chapter 7 connect historical circumstances with actions happening inside them?', matchingPairs: [
      { left: 'During the same period', right: 'places another event or situation in the same time frame' },
      { left: 'under Mongol pressure', right: 'adds a circumstance that helps explain movement or action' },
      { left: 'They were spreading... and establishing...', right: 'presents two ongoing, parallel activities in the background' },
      { left: 'So in such an environment', right: 'moves from the earlier situation to a response that developed within it' },
    ], correctAnswer: {
      'During the same period': 'places another event or situation in the same time frame',
      'under Mongol pressure': 'adds a circumstance that helps explain movement or action',
      'They were spreading... and establishing...': 'presents two ongoing, parallel activities in the background',
      'So in such an environment': 'moves from the earlier situation to a response that developed within it',
    }, explanation: 'The chapter combines time, pressure, ongoing activity, and a result-like transition. This lets the writer explain actions as part of a larger situation instead of listing events separately.', feedback: { correct: 'Correct. You distinguished time, circumstance, ongoing background, and transition to a response.', incorrect: 'Ask whether each expression mainly gives the time, the pressure around an action, an ongoing background activity, or a transition from context to response.' },
  },
  {
    id: 'yunus-b1-language-7-influence-response', type: 'multiple-choice', title: 'Influence and Response', instructions: 'Choose the passage that most naturally connects influence with a response to other people.', question: 'Which short passage best uses the chapter’s patterns to show influence, response, and a means of reaching people?', options: [
      'The teacher was influential among young people, so she tried to respond to their efforts to understand difficult changes. Conversation became her most influential tool.',
      'The teacher influential young people respond efforts changes tool because among.',
      'The teacher was influential, so she avoided responding to anyone and had no way of communicating with them.',
    ], correctAnswer: 0, explanation: 'Chapter 7 uses patterns such as “influential among...”, “tried to respond to people’s efforts to make sense of...”, and “his most influential tool” to connect a person’s role with the needs of others and the means used to reach them.', feedback: { correct: 'Correct. The passage connects influence, response to a need, and an effective tool.', incorrect: 'Look for a passage that links being influential among a group with responding to their efforts and using a clear tool or means.' },
  },
  {
    id: 'yunus-b1-language-7-source-inspiration', type: 'multiple-choice', title: 'Source and Inspiration', instructions: 'Choose the version that most clearly distinguishes a foundation from an additional influence.', question: 'Which sentence best reflects the difference between “comes from” and “was inspired by” in the chapter?', options: [
      'Her basic approach comes from long experience, and she was also inspired by the ideas and examples of earlier teachers.',
      'Her approach inspired comes earlier by from experience teachers ideas.',
      'Her approach has no source, but it comes only from people who had no influence on her.',
    ], correctAnswer: 0, explanation: '“Comes from” identifies a foundation or source. “Was inspired by” adds another influence. Using both lets a writer describe more than one layer behind a person’s ideas or practice.', feedback: { correct: 'Correct. The sentence separates a foundation from an additional source of inspiration.', incorrect: 'Find the sentence that first names where an approach comes from and then adds another influence with “was inspired by”.' },
  },
  {
    id: 'yunus-b1-language-7-production', type: 'reflection', title: 'Build a Response from Its Context', instructions: 'Write or say five to six connected B1 sentences about a real or imagined person who appears in a difficult situation and responds to a need in the community. Do not retell Chapter 7.', question: 'Can you establish the situation, show ongoing activity, explain the person’s response and tool, and identify the sources of their ideas?', correctAnswer: null, explanation: 'Useful language from the chapter includes “during the same period”, “under ... pressure”, “were ...-ing and ...-ing”, “so in such an environment”, “tried to respond to...”, “efforts to make sense of...”, “most influential tool”, “comes from...”, and “was inspired by...”.', feedback: { correct: 'Keep the sentences connected so the context leads naturally to the response, the tool, and the sources of influence.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce a difficult situation or pressure.', mode: 'Individual' },
      { question: 'Sentence 2 — Describe two activities that were happening during the same period.', mode: 'Individual' },
      { question: 'Sentence 3 — Use “so” or a similar connector to move from the situation to the person’s response.', mode: 'Pair' },
      { question: 'Sentence 4 — Explain what the person tried to respond to and name an influential tool or means.', mode: 'Pair' },
      { question: 'Sentences 5–6 — State what the person’s approach comes from and add another source of inspiration.', mode: 'Pair' },
    ],
  },
];

/** Chapter 8 English Language Focus, derived only from the locked Chapter 8 story text. */
export const yunusB1LanguageFocusChapter8: Exercise[] = [
  {
    id: 'yunus-b1-language-8-definition-viewpoint', type: 'matching', title: 'Define, Attribute, Connect', instructions: 'Match each pattern from the chapter with the job it performs in a text. Focus on meaning and function, not on recalling the chapter’s ideas.', question: 'How does Chapter 8 define an idea, attribute a viewpoint, and connect one idea to another?', matchingPairs: [
      { left: 'the idea of ... which means ...', right: 'defines or explains a key concept' },
      { left: 'According to ...', right: 'shows whose viewpoint or interpretation is being reported' },
      { left: 'the source of all things. So ...', right: 'moves from a stated basis to a conclusion or consequence' },
      { left: '..., which was a key idea for ...', right: 'adds extra information about an already identified idea' },
    ], correctAnswer: {
      'the idea of ... which means ...': 'defines or explains a key concept',
      'According to ...': 'shows whose viewpoint or interpretation is being reported',
      'the source of all things. So ...': 'moves from a stated basis to a conclusion or consequence',
      '..., which was a key idea for ...': 'adds extra information about an already identified idea',
    }, explanation: 'The chapter does more than state beliefs. It defines terms, marks a viewpoint, draws a consequence with “so”, and adds explanatory information with a relative clause.', feedback: { correct: 'Correct. You identified four different discourse functions.', incorrect: 'Ask whether the expression defines, attributes a viewpoint, draws a consequence, or adds extra information.' },
  },
  {
    id: 'yunus-b1-language-8-one-true-focus', type: 'multiple-choice', title: 'Focus on One True Choice', instructions: 'Choose the sentence that most naturally uses the chapter’s pattern for singling out one true or central option.', question: 'Which sentence best mirrors “there is only one true ..., and that is ...” without copying the story content?', options: [
      'For this team, there is only one final goal, and that is to finish the project safely.',
      'For this team, there one only final goal and that safely project finish.',
      'For this team, there are many final goals, and that is the only one although none is central.',
    ], correctAnswer: 0, explanation: 'The pattern “there is only one ..., and that is ...” narrows several possibilities to one central choice and then identifies it clearly.', feedback: { correct: 'Correct. The sentence first limits the possibilities and then identifies the single central choice.', incorrect: 'Look for a sentence that uses “there is only one ...” and then names that one choice with “and that is ...”.' },
  },
  {
    id: 'yunus-b1-language-8-whoever-condition', type: 'multiple-choice', title: 'Whoever: A General Human Case', instructions: 'Choose the sentence in which “whoever” introduces a general case about any person who does something.', question: 'Which sentence uses “whoever” in the same generalising way as the poem?', options: [
      'Whoever ignores the warning must accept the consequences of that choice.',
      'Whoever the warning because consequences choice the.',
      'Whoever refers to one named person who has already been identified in the previous sentence.',
    ], correctAnswer: 0, explanation: 'In the poem, “whoever” does not name one specific person. It means any person who meets the condition described after it.', feedback: { correct: 'Correct. “Whoever” introduces a general human case rather than a named individual.', incorrect: 'Choose the sentence where the meaning is “any person who...”.' },
  },
  {
    id: 'yunus-b1-language-8-production', type: 'reflection', title: 'Explain an Idea from Definition to Conclusion', instructions: 'Write or say five to six connected B1 sentences about a principle, belief, or important idea from school, community life, science, or everyday experience. Do not retell Chapter 8.', question: 'Can you define the idea, attribute a viewpoint, add explanatory information, draw a consequence, and end with a general statement about people?', correctAnswer: null, explanation: 'Useful language from the chapter includes “the idea of ... which means ...”, “according to ...”, “..., which is/was ...”, “so ...”, “there is only one ..., and that is ...”, and “whoever ...”.', feedback: { correct: 'Keep the paragraph connected: define the idea first, develop it, then move to a consequence or general statement.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Introduce an idea and define it with “which means...”.', mode: 'Individual' },
      { question: 'Sentence 2 — Attribute a viewpoint with “according to...”.', mode: 'Individual' },
      { question: 'Sentence 3 — Add extra information with a “which” clause.', mode: 'Pair' },
      { question: 'Sentence 4 — Use “so” to show a conclusion or consequence.', mode: 'Pair' },
      { question: 'Sentences 5–6 — Identify one central point with “there is only one..., and that is...” or finish with a general “whoever...” statement.', mode: 'Pair' },
    ],
  },
];
