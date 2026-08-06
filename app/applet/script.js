const fs = require('fs');
const path = require('path');

const storyMd = fs.readFileSync('Abraham_B2_Chaptered_Story.md', 'utf-8');
const teacherGuideMdText = fs.readFileSync('Abraham_B2_Teacher_Guide.md', 'utf-8');
const selfStudyGuideMdText = fs.readFileSync('Abraham_B2_Self_Study_Guide.md', 'utf-8');

// --- Pages ---
const chapters = storyMd.split('## Chapter ').slice(1);
const pages = chapters.map((ch, idx) => {
  const lines = ch.split('\n');
  const titleLine = lines[0].trim();
  const chapterNumber = idx + 1;
  const title = `Chapter ${titleLine}`;
  const content = lines.slice(1).join('\n').trim();

  return {
    id: chapterNumber,
    type: 'story',
    title: title,
    image: `https://picsum.photos/seed/abraham-b2-chapter-${chapterNumber}/1200/800`,
    audioUrl: `https://example.com/audio/abraham-b2-chapter-${chapterNumber}.mp3`,
    content: content,
    vocabulary: [],
    hotspots: [],
    animatedWords: [],
    exercises: []
  };
});

// Since B1 format ends with 'exercises', 'glossaries', 'final-challenge' etc, we should just match the exact shape of pages for now
const pagesTs = `import { PageData } from '../../../../types';

export const abrahamB2Pages: PageData[] = ${JSON.stringify(pages, null, 2)};
`;

fs.writeFileSync('src/data/abraham/b2/en/pages.ts', pagesTs);


// --- Teacher Guide ---
// Creating placeholder structure based on B1 Teacher Guide structure, populated with minimal data since full parsing of complex MD isn't asked, but extracting top level parts
const teacherGuideTs = `import { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

export const abrahamB2TeacherGuideMetadata: TeacherGuideMetadata = {
  purpose: "The teaching approach should remain analytical, engaging, and appropriate for B2 learners.",
  approachDesc: "B2 focuses on advanced interpretation, extended debates, essay writing, and abstract moral connections.",
  targetLearners: "B2 learners who are capable of deep moral analysis.",
  assessmentEvidence: "Essays, debates, advanced vocabulary usage.",
  readingFramework: {
    before: "Contextual brainstorming.",
    during: "Analytical reading.",
    after: "Moral synthesis and debate."
  },
  rubricTitle: "Master Rubric (B2 Level)",
  rubricRows: [],
  implementationPlans: {},
  homeConnection: { title: "Home Connection", items: [] },
  globalCitizenship: { title: "Global Citizenship", description: "", themes: [], actions: [] },
  valuesEducation: { title: "Values Education", description: "", items: [] },
  sensitiveNotes: { title: "Sensitive notes", notes: [] },
  appendices: { exitTicket: [], miniProject: { title: "", desc: "" }, reflectivePrompt: { title: "", desc: "" }, sentenceFrames: [] }
};

export const abrahamB2TeacherGuide: TeacherGuideSection[] = [];

export const abrahamB2TeacherGuideText = \`${teacherGuideMdText.replace(/`/g, '\\`')}\`;
`;

fs.writeFileSync('src/data/abraham/b2/en/teacherGuide.ts', teacherGuideTs);


// --- Self Study Guide ---
const selfStudyGuideTs = `import { StudentGuideSection, StudentGuideMetadata } from '../../../../types';

export const abrahamB2StudentGuideMetadata: StudentGuideMetadata = {
  title: "Prophet Abraham (AS)",
  subtitle: "B2 Self-Study Guide",
  level: "B2",
  timeEstimation: "4-6 weeks",
  coreSkills: ["Advanced Reading", "Analytical Listening", "Debate & Speaking", "Essay Writing"]
};

export const abrahamB2StudentGuideSections: StudentGuideSection[] = [];

export const abrahamB2StudentGuideText = \`${selfStudyGuideMdText.replace(/`/g, '\\`')}\`;
`;

fs.writeFileSync('src/data/abraham/b2/en/selfStudyGuide.ts', selfStudyGuideTs);

console.log("Script completed");
