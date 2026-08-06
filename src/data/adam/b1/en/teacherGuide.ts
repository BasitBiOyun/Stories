import { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

export const adamB1TeacherGuideMetadata: TeacherGuideMetadata = {
  targetLearners: "High School Preparatory (Lise Hazırlık), 9th, and 10th-grade students. This level focuses on academic vocabulary, complex narrative structures, and philosophical reflection.",
  assessmentEvidence: "Analytical essays on character motivation, complex grammar application (conditionals, passive voice), and participation in Socratic seminars. Evaluation focuses on the ability to synthesize moral lessons and apply them to global contexts.",
  readingFramework: {
    before: "Contextual brainstorming: Discuss the concept of 'stewardship' and 'human nature'. Preview academic vocabulary using the Master Glossary Part 1.",
    during: "Analytical listening: Identify the shift in tone between Paradise and Earth. Pause to discuss the psychological state of characters during key decisions.",
    after: "Moral synthesis: Debate the different reactions to mistakes (Adam vs. Iblis). Write a comparative analysis of Habil and Qabil's intentions."
  },
  rubricTitle: "Master Rubric (B1 Level)",
  rubricRows: [
    {
      criterion: "Vocabulary",
      excellent: "Uses 8+ academic words correctly in context.",
      good: "Uses 4-5 academic words with minor errors.",
      developing: "Uses mostly basic vocabulary."
    },
    {
      criterion: "Analysis",
      excellent: "Deeply analyzes character motives and themes.",
      good: "Identifies main themes but lacks depth.",
      developing: "Retells story without analytical insight."
    },
    {
      criterion: "Grammar",
      excellent: "Correct use of Conditionals and Passive Voice.",
      good: "Occasional errors in complex structures.",
      developing: "Limited to simple past/present tenses."
    }
  ],
  implementationPlans: {
    optionA: {
      title: "Intensive Workshop (80m)",
      steps: [
        { time: "0-15m", activity: "Philosophical Warm-up: Discussing 'The Nature of Knowledge' and human potential." },
        { time: "15-45m", activity: "Analytical Reading (Chapters 1-6): Focus on character psychology and the root of arrogance." },
        { time: "45-65m", activity: "Collaborative Discussion (Chapters 7-12): Focus on ethics, consequences, and the raven's lesson." },
        { time: "65-80m", activity: "Socratic Seminar: Synthesizing moral lessons and final reflective writing." }
      ]
    },
    optionB: {
      title: "Standard Split (2 x 40m)",
      lessons: [
        { 
          title: "Lesson 1: The Origin & The Test", 
          description: "Focus on academic vocabulary and the contrast between Adam's humility and Iblis's arrogance. Covers Chapters 1-6." 
        },
        { 
          title: "Lesson 2: Life & Legacy", 
          description: "Focus on repentance, stewardship, and conflict resolution themes. Covers Chapters 7-12 and Final Reflection." 
        }
      ]
    }
  },
  homeConnection: {
    title: "Family Discussion & Growth",
    items: [
      "Discuss the concept of 'Amanah' (Trust) with your family. How do we protect the environment as a family?",
      "Ask your elders about a time they had to choose between arrogance and humility. What was the outcome?",
      "Share one new academic word you learned today and explain its meaning in your native language.",
      "Watch a documentary about human diversity and relate it to the 'soil of different lands' narrative.",
      "Write a short 'Family Values' charter based on the lessons of sincerity and repentance."
    ]
  }
};

export const adamB1TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Creation & Divine Knowledge',
    timing: '40 minutes',
    objectives: [
      'Analyze the philosophical significance of human intellect in the creation narrative.',
      'Identify and utilize advanced vocabulary related to human diversity and stewardship.',
      'Examine the concept of "Khalifa" (stewardship) from a global citizenship perspective.'
    ],
    pedagogy: 'Critical Thinking & Comparative Analysis. Suitable for High School Prep, 9th, and 10th-grade students. Encourage students to explore the ethical implications of knowledge.',
    grammarFocus: 'Complex sentence structures, passive voice, and modal verbs of possibility.',
    pronunciationFocus: 'Academic word stress (e.g., in-tel-lect, su-pe-ri-or-i-ty) and narrative intonation.',
    lessonPlan: '1. Socratic Seminar: Discuss the responsibilities of being a "ruler" on Earth. 2. Textual Analysis: Identify how the narrative explains human diversity. 3. Debate: Knowledge vs. Origin—which defines value? 4. Vocabulary Workshop: Focus on abstract nouns and their usage in formal contexts.',
    discussionPoints: [
      'How does the narrative of common origin (Adam) address modern issues of racism?',
      'In what ways does knowledge empower humanity to fulfill its role as stewards?'
    ],
    differentiation: {
      fastFinishers: 'Compose an analytical essay on the intersection of divine knowledge and human free will.',
      strugglingLearners: 'Summarize the interaction between Allah and the angels using a structured graphic organizer.'
    },
    interactiveTips: [
      'Direct students to the "Divine Intellect" hotspot to discuss the cognitive leap that distinguishes humans.',
      'Utilize the animated keywords to trigger classroom discussions on core themes.'
    ],
    assessmentTools: {
      rubric: ['Analytical Depth (1-5)', 'Vocabulary Integration (1-5)', 'Argumentative Clarity (1-5)'],
      exitTicket: ['Explain the concept of "Khalifa" in the context of environmental protection.', 'Why is arrogance described as a "barrier" to truth?']
    },
    kinestheticActivities: ['"The Stewardship Map": Students create a visual map of how they can protect their local environment.'],
    globalCitizenship: ['Connecting the story to the UN Sustainable Development Goals (SDGs), specifically Life on Land and Reduced Inequalities.'],
    extraResources: {
      worksheets: ['Ethical Stewardship Analysis', 'Advanced Narrative Structures in B1 English'],
      links: [{ label: 'Scholarly Article: The Concept of Man in Islamic Thought', url: '#' }]
    }
  },
  {
    chapter: 'The Fall & Repentance',
    timing: '40 minutes',
    objectives: [
      'Contrast the psychological states of Adam and Iblis following their respective actions.',
      'Evaluate the role of "shame" (haya) as an innate human characteristic.',
      'Practice using third conditional structures to discuss hypothetical pasts.'
    ],
    pedagogy: 'Character Psychology & Moral Philosophy. Focus on the internal shift from Paradise to Earth.',
    grammarFocus: 'Third Conditional: "If they hadn\'t eaten the fruit, they would have stayed in Paradise."',
    pronunciationFocus: 'Expressive reading—conveying emotions like "shame", "regret", and "pardon".',
    lessonPlan: '1. Comparative Chart: Adam\'s Repentance vs. Iblis\'s Arrogance. 2. Discussion: Is shame a positive or negative emotion in this context? 3. Writing Task: Write a letter from Adam to his children explaining the lesson of the tree. 4. Role-play: The dialogue between Adam and Allah regarding forgiveness.',
    discussionPoints: [
      'Why is admitting a mistake considered a sign of strength in this narrative?',
      'How does arrogance prevent self-improvement?'
    ],
    differentiation: {
      fastFinishers: 'Research the concept of "Fitra" (innate nature) and how it relates to the story.',
      strugglingLearners: 'Identify all the "feeling" words in the text and categorize them as positive or negative.'
    },
    interactiveTips: [
      'Use the "Innate Modesty" hotspot to discuss the sociological implications of clothing and privacy.',
      'Encourage students to listen to the audio to catch the emotional nuances of the dialogue.'
    ],
    assessmentTools: {
      rubric: ['Emotional Intelligence in Analysis (1-5)', 'Conditional Grammar Usage (1-5)'],
      exitTicket: ['What is the "biggest barrier" to doing the right thing according to the text?', 'How did Adam\'s reaction differ from Iblis\'s?']
    },
    kinestheticActivities: ['"The Choice Path": Students walk a physical line in the classroom, choosing "Repentance" or "Arrogance" at a crossroad.'],
    globalCitizenship: ['Discussing the universal human experience of making mistakes and the importance of restorative justice.'],
    extraResources: {
      worksheets: ['Psychological Profile: Adam vs Iblis', 'Conditional Tense Practice'],
      links: [{ label: 'Video: The Power of Vulnerability and Admitting Mistakes', url: '#' }]
    }
  },
  {
    chapter: 'The Two Sons & The Raven',
    timing: '40 minutes',
    objectives: [
      'Analyze the themes of jealousy and sincerity through the conflict of Habil and Qabil.',
      'Interpret the symbolism of the raven as a divine teacher.',
      'Synthesize the overall message of the story for a modern audience.'
    ],
    pedagogy: 'Symbolic Interpretation & Values Education. Focus on the internal motivation behind external actions.',
    grammarFocus: 'Reporting verbs and direct/indirect speech in conflict narratives.',
    pronunciationFocus: 'Vowel sounds in "raven", "panic", and "sincerity".',
    lessonPlan: '1. Case Study: Why was one offering accepted and the other not? 2. Creative Writing: Write the story from the perspective of the raven. 3. Group Project: Create a "Guide to Controlling Anger" based on the story\'s conclusion. 4. Final Debate: Is jealousy an avoidable emotion?',
    discussionPoints: [
      'What does "giving from the heart" mean in a practical, modern sense?',
      'How does the story of the raven highlight human limitations?'
    ],
    differentiation: {
      fastFinishers: 'Analyze how this story has been reflected in world literature or art.',
      strugglingLearners: 'Draw a storyboard of the conflict and the raven\'s arrival.'
    },
    interactiveTips: [
      'Direct students to the "Raven\'s Lesson" hotspot to discuss the concept of learning from nature.',
      'Use the "Eternal Message" hotspot to wrap up the entire unit.'
    ],
    assessmentTools: {
      rubric: ['Symbolic Analysis (1-5)', 'Synthesis of Themes (1-5)', 'Oral Presentation (1-5)'],
      exitTicket: ['What did Qabil realize when he saw the raven?', 'What is the "eternal message" of Adam\'s story?']
    },
    kinestheticActivities: ['"The Offering Circle": Students present "symbolic offerings" (ideas/values) to the class and explain their sincerity.'],
    globalCitizenship: ['Conflict resolution and the prevention of violence in communities.'],
    extraResources: {
      worksheets: ['Symbolism in the Story of Adam', 'Conflict Resolution Guide'],
      links: [{ label: 'Article: Nature as a Teacher in Ancient Narratives', url: '#' }]
    }
  }
];
