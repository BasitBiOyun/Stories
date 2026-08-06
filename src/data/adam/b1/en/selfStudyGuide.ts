import { TeacherGuideSection, StudentGuideMetadata, StudentGuideSection } from '../../../../types';

export const adamB1StudentGuideMetadata: StudentGuideMetadata = {
  whoIsThisFor: "This guide is specifically designed for High School Preparatory (Lise Hazırlık), 9th, and 10th-grade students. It focuses on academic English, critical analysis, and moral reflection."
};

export const adamB1StudentGuideSections: StudentGuideSection[] = [
  {
    title: "1. Welcome!",
    icon: "Stars",
    text: "Welcome to your B1 Self-Study Guide. This module is specifically designed for High School Preparatory (Lise Hazırlık), 9th, and 10th-grade students.",
    points: ["Academic English focus", "Critical analysis", "Moral reflection"]
  },
  {
    title: "2. Study Strategy",
    icon: "Compass",
    text: "At this stage, we move beyond simple storytelling and focus on deeper philosophical understanding and complex linguistic structures.",
    points: ["Analytical Reading", "Linguistic Focus", "Critical Reflection", "Active Vocabulary Use"]
  },
  {
    title: "3. Interactive Features",
    icon: "Rocket",
    text: "Use the hotspots, exercises, and audio integration to deepen your understanding of the story's symbolism.",
    points: ["Hotspots for symbolism", "Exercises for critical thinking", "Audio for pronunciation"]
  }
];

export const adamB1SelfStudyGuide: TeacherGuideSection[] = [
  {
    chapter: 'Personal Reflection & Growth',
    timing: '30 minutes',
    objectives: ['Evaluate personal reactions to mistakes.', 'Synthesize lessons from the story for daily life.'],
    pedagogy: 'Self-Reflective Practice.',
    lessonPlan: 'Engage with the final challenge and write a reflective piece on the importance of humility.',
    discussionPoints: [
      'How can I implement the lessons of Habil\'s sincerity in my own actions?',
      'What are the modern "tricks of Iblis" that we should be aware of?'
    ],
    differentiation: {
      fastFinishers: 'Start a "Gratitude and Humility" journal based on the story\'s themes.',
      strugglingLearners: 'Focus on summarizing the main moral of each chapter in one sentence.'
    },
    interactiveTips: ['Review the Master Glossary to ensure all B1 terms are understood before the final challenge.']
  }
];

export const adamB1StudentGuideText = `
# B1 SELF-STUDY GUIDE
for the Interactive Storybook: Prophet Adam

## Welcome to the Intermediate Level!

Hello!
Welcome to your B1 Self-Study Guide. This module is specifically designed for **High School Preparatory (Lise Hazırlık), 9th, and 10th-grade students**. At this stage, we move beyond simple storytelling and focus on deeper philosophical understanding, complex linguistic structures, and critical reflection.

This guide is your companion to navigating the story of Prophet Adam with a focus on academic vocabulary expansion and moral synthesis.

### Study Strategy for High School B1:

1. **Analytical Reading**: Do not just read for the plot. Look for themes like *stewardship*, *arrogance*, and *repentance*. Try to infer the meaning of complex words from the surrounding context before checking the glossary.
2. **Linguistic Focus**: Pay attention to how the story uses the passive voice and complex conjunctions to connect ideas. This is essential for your high school English development.
3. **Critical Reflection**: After each chapter, ask yourself: "How does this lesson apply to my life as a student and a citizen of the world?".
4. **Active Vocabulary Use**: Challenge yourself to use at least three new words from the "Master Glossary" in your own sentences or discussions every day.

### How to Use the Interactive Features:

- **Hotspots**: These are not just for fun. They contain deeper insights into the symbolism of the story. Take notes on what you find.
- **Exercises**: These are designed to test your critical thinking, not just your memory. Read the feedback carefully—it often contains extra information.
- **Audio Integration**: Listening while reading helps improve your academic pronunciation and narrative flow.

You are now at a level where you can appreciate the complexity of these timeless stories. Learn with purpose, think with depth, and enjoy your journey through the life of Prophet Adam.
`;
