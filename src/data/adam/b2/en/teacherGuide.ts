import { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

export const adamB2TeacherGuideMetadata: TeacherGuideMetadata = {
  targetLearners: 'Turkish 11th and 12th grade students studying English at approximately CEFR B2. Secondary: Other upper-intermediate learners who can discuss abstract ideas in English with structured support.',
  assessmentEvidence: 'participation in analytical discussion, use of thematic vocabulary, quality of interpretation, ability to support answers with text, sequencing and cause-effect reasoning, oral explanation, reflective or analytical writing.',
  readingFramework: {
    before: 'Use the title, cover, or major visual for prediction. Teach 5–8 key terms needed for entry into the chapter. Ask one factual and one philosophical anticipation question. Activate prior knowledge without allowing discussion to become vague or overly broad.',
    during: 'Read or play the text in meaningful sections. Pause at major turning points. Ask students to identify the speaker, claim, motive, or consequence. Encourage them to infer meaning before using word support. Recycle target language through oral response. Ask students to mark lines that show contrast, warning, regret, or insight.',
    after: 'Retell the events with clear sequence. Move to interpretation and evaluation. Ask students to support answers with evidence from the text. End with a short spoken or written reflection. Use one exit task to check language and one to check deeper understanding.'
  },
  rubricTitle: 'Master Rubric (B2)',
  rubricRows: [
    { criterion: 'Vocabulary', excellent: 'Uses thematic vocabulary accurately and flexibly', good: 'Uses most key words appropriately', developing: 'Uses limited or imprecise vocabulary' },
    { criterion: 'Comprehension', excellent: 'Explains events and deeper meanings clearly', good: 'Understands main ideas and some implications', developing: 'Understands surface events only' },
    { criterion: 'Analysis', excellent: 'Gives thoughtful interpretation with evidence', good: 'Gives relevant ideas with limited support', developing: 'Gives unsupported or overly simple ideas' },
    { criterion: 'Grammar & Expression', excellent: 'Produces clear, well-formed extended responses', good: 'Makes some errors but meaning stays clear', developing: 'Errors often limit clarity' },
    { criterion: 'Reflection', excellent: 'Connects the story to values and human experience insightfully', good: 'Gives a reasonable personal or moral connection', developing: 'Gives minimal or unclear reflection' },
    { criterion: 'Participation', excellent: 'Contributes actively and constructively', good: 'Participates with some prompting', developing: 'Participates rarely or minimally' }
  ],
  implementationPlans: {
    optionA: {
      title: 'Intensive Workshop (80 Minutes)',
      steps: [
        { time: '0–10 min', activity: 'visual entry, anticipation, and key terms' },
        { time: '10–30 min', activity: 'guided reading with analytical pause points' },
        { time: '30–45 min', activity: 'hotspot exploration and vocabulary clarification' },
        { time: '45–60 min', activity: 'pair/small-group analysis task' },
        { time: '60–80 min', activity: 'reflective discussion and paragraph writing' }
      ]
    },
    optionB: {
      title: 'Standard Split (2 x 40 Minutes)',
      lessons: [
        { title: 'Lesson 1', description: 'Creation, vicegerency, knowledge, angels, and Iblis' },
        { title: 'Lesson 2', description: 'The test, repentance, earthly mission, Habil and Qabil, and the moral struggle of humanity' }
      ]
    },
    optionC: {
      title: 'Extended Project (4–6 Lessons)',
      steps: [
        { time: 'Lesson 1-2', activity: 'close reading of selected passages and vocabulary work' },
        { time: 'Lesson 3-4', activity: 'debate and comparative character analysis' },
        { time: 'Lesson 5-6', activity: 'thematic writing tasks and reflection portfolio' }
      ]
    }
  },
  homeConnection: {
    title: 'Home Connection',
    items: [
      'Encourage students to revisit one key section through audio.',
      'Use short reflective tasks rather than heavy homework.',
      'Invite respectful family discussion about values such as regret, honesty, humility, and self-control.',
      'Listen again and note 5 useful expressions.',
      'Ask a family member: "Why is admitting a mistake difficult but important?"',
      'Write one short paragraph using 3 target words.'
    ]
  }
};

export const adamB2TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Chapter 1: Creation, Vicegerency & Knowledge',
    timing: '40 minutes',
    objectives: [
      'Explain the idea of human vicegerency in clear English',
      'Analyze why knowledge is central to Adam’s value in the story',
      'Distinguish between outward origin and inner worth',
      'Use precise thematic vocabulary in discussion',
      'Interpret the contrast between the angels’ response and Iblis’s response'
    ],
    pedagogy: 'Use concept-based teaching. This chapter introduces foundational ideas that should not remain at the level of plot. Students need to understand that the text connects human value with knowledge, moral ability, and responsibility rather than material origin.',
    grammarFocus: 'Defining and explaining abstract concepts; cause and effect language; contrast markers (however, whereas, while); relative clauses.',
    pronunciationFocus: 'Stress in multi-syllabic academic words: responsibility, superiority, revelation, obedience; sentence stress for contrast.',
    lessonPlan: '1. Opening Question: "What gives a human being value?" 2. Visual and Concept Entry: Introduce vicegerent, knowledge, and dignity. 3. Guided Reading/Listening: Read section on creation and knowledge. 4. Text-Based Comprehension: Identify what Adam was given and why it matters. 5. Pair Analysis: "Why does the story reject false superiority?" 6. Discussion: "How can knowledge be a source of both honor and responsibility?" 7. Exit Ticket: Define vicegerency and explain why origin does not equal superiority.',
    discussionPoints: [
      'Why is knowledge presented as a trust rather than only an advantage?',
      'What is wrong with judging superiority by origin?',
      'How does this chapter challenge racism and arrogance?'
    ],
    differentiation: {
      fastFinishers: 'Write a short paragraph on the duties of a vicegerent on earth.',
      strugglingLearners: 'Match concepts to definitions and complete sentence frames.'
    },
    interactiveTips: [
      'Use the knowledge hotspot to move from concrete vocabulary to abstract meaning.',
      'Use the angels/Iblis comparison moment to discuss different responses to truth.'
    ],
    assessmentTools: {
      rubric: ['Concept definition', 'Text-based oral response'],
      exitTicket: ['One sentence defining vicegerency', 'One sentence explaining why origin does not equal superiority']
    },
    kinestheticActivities: [
      'Concept corners: Students move to labeled stations (knowledge, responsibility, humility, arrogance) and explain character representation.'
    ]
  },
  {
    chapter: 'Chapter 2: Iblis, the Test & Repentance',
    timing: '40 minutes',
    objectives: [
      'Explain the difference between Adam’s mistake and Iblis’s rebellion',
      'Analyze how arrogance affects judgment',
      'Discuss meanings of test, temptation, shame, repentance, and mercy',
      'Compare two opposite responses to wrongdoing'
    ],
    pedagogy: 'Use contrastive moral analysis. Students should see that the story does not erase human weakness, but it presents two radically different responses: one rooted in pride and one rooted in repentance.',
    grammarFocus: 'Contrastive structures; evaluative language; modals for judgment (should, must, cannot, may); sentence starters for interpretation.',
    pronunciationFocus: 'Stress and intonation in evaluative speech; clear articulation of: repentance, accountability, deception, arrogance.',
    lessonPlan: '1. Review: Recap Chapter 1. 2. Key Language Preview: Review temptation, repentance, arrogance, mercy. 3. Guided Reading: Read section on the forbidden tree and responses. 4. Comparison Task: Complete Adam/Iblis chart. 5. Pair Discussion: "Why is repentance a strength rather than a weakness?" 6. Whole-Class Analysis: Discuss difference between forgetting and insisting on error. 7. Reflection: "What destroys a person more: making a mistake or refusing to admit it?" 8. Exit Ticket: Write one comparison sentence and one on why repentance matters.',
    discussionPoints: [
      'What is the difference between weakness and rebellion?',
      'Why is arrogance called a barrier to truth?',
      'How does repentance restore moral direction?'
    ],
    differentiation: {
      fastFinishers: 'Write a short reflection on the difference between guilt, shame, and repentance.',
      strugglingLearners: 'Complete guided comparison statements using a word bank.'
    },
    interactiveTips: [
      'Use the forbidden tree and whispering sections to discuss temptation gradually.',
      'Use the regret hotspot to explore emotional language and moral self-awareness.'
    ],
    assessmentTools: {
      rubric: ['Comparative oral response', 'Chart completion'],
      exitTicket: ['One comparison sentence', 'One sentence on why repentance matters']
    },
    kinestheticActivities: [
      'Response line debate: Students stand between "pride" and "repentance" labels and justify character placement.'
    ]
  },
  {
    chapter: 'Chapter 3: Earthly Mission, Habil & Qabil',
    timing: '40 minutes',
    objectives: [
      'Explain Adam’s descent as responsibility rather than humiliation',
      'Analyze Habil and Qabil as a study in sincerity, jealousy, and consequence',
      'Discuss the ongoing struggle between good and evil',
      'Sequence and interpret major events with precision'
    ],
    pedagogy: 'Use ethical and thematic analysis. The descent to earth marks the beginning of human duty and moral struggle. The Habil and Qabil episode is a lesson in jealousy and the consequences of choosing evil.',
    grammarFocus: 'Sequencing and cause-effect language; conditionals for reflection; discourse markers (therefore, consequently, in contrast).',
    pronunciationFocus: 'Chunking longer analytical sentences; word stress in: consequence, sincerity, civilization, responsibility.',
    lessonPlan: '1. Warm-up: "Is earthly life presented as punishment or responsibility?" 2. Vocabulary: Sincerity, jealousy, consequence, guidance, mission. 3. Guided Reading: Read sections on life on earth and Habil/Qabil. 4. Sequencing: Place key events in order and identify sincerity/jealousy sentences. 5. Pair Analysis: "Why was one offering accepted and the other rejected?" 6. Discussion: How jealousy turns weakness into destructive action. 7. Reflection: What the crow episode teaches about shame and learning. 8. Exit Ticket: One moral lesson from Habil and Qabil.',
    discussionPoints: [
      'Why is earthly life described as struggle and trust at the same time?',
      'What is the difference between giving from the heart and giving outwardly?',
      'How do jealousy and lack of self-control damage human relationships?',
      'Why does guidance remain necessary for humanity?'
    ],
    differentiation: {
      fastFinishers: 'Write a short response on how revelation guides human moral choices.',
      strugglingLearners: 'Use sequence cards and guided sentence frames.'
    },
    interactiveTips: [
      'Use the earth/labor sections to discuss responsibility and social duty.',
      'Use the crow/raven hotspot to highlight consequence, learning, and regret.'
    ],
    assessmentTools: {
      rubric: ['Sequencing accuracy', 'Cause-effect explanation'],
      exitTicket: ['One moral lesson from Habil and Qabil', 'One sentence about the purpose of guidance']
    },
    kinestheticActivities: [
      'Moral pathway walk: Move through event cards (choice, intention, action, consequence, lesson) explaining each stage.'
    ]
  }
];
