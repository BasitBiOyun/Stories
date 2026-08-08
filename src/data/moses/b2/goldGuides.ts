import type { PageData, TeacherGuideMetadata, TeacherGuideSection } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import {
  mosesB2SelfStudyGuide,
  mosesB2StudentGuideMetadata,
  mosesB2StudentGuideSections,
  mosesB2StudentGuideText,
} from './en/selfStudyGuide';

const storyPages = mosesB2Pages.filter((page) => page.type === 'story');

const canonicalChapterLabel = (page: PageData): string => `Chapter ${page.id}: ${page.title}`;

const newTeacherSections: TeacherGuideSection[] = [
  {
    chapter: canonicalChapterLabel(storyPages[0]),
    timing: '55 minutes',
    objectives: [
      'Explain why Egyptian rulers began to view the growing Israelite community as a political threat.',
      'Distinguish stated historical background from later events in the Moses narrative.',
      'Use evidence from the chapter to build a cause-and-effect explanation.',
      'Use B2 vocabulary such as despotism, ruling class, settle, and Copts in context.',
    ],
    pedagogy: 'Use historical-source reading rather than simple name recall. Ask learners to identify which claims are background, which are consequences, and how population growth is connected to political fear in the chapter.',
    grammarFocus: 'Cause and consequence with because, therefore, as a result, and led to.',
    pronunciationFocus: 'Word stress in despotism, frequently, community, and authority.',
    lessonPlan: '0–7 min: Preview key terms and the historical setting. 7–20 min: First reading for timeline and groups. 20–33 min: Evidence marking for population growth → political fear → oppression. 33–44 min: Pair explanation using linking words. 44–50 min: Quick Challenge and reread. 50–55 min: Exit ticket.',
    discussionPoints: [
      'Why did population growth become a political concern for the rulers described in the chapter?',
      'Which details are essential background for understanding the later conflict with Pharaoh?',
      'How can fear of losing control influence the way a ruling group treats another community?',
    ],
    differentiation: {
      fastFinishers: 'Write a 120-word paragraph explaining how demographic change becomes political fear in the chapter, using two pieces of textual evidence.',
      strugglingLearners: 'Complete a three-step chain: population grows → rulers fear ______ → rulers make life ______.',
    },
    interactiveTips: [
      'Use the hotspots as evidence prompts, not as substitutes for rereading.',
      'After the Quick Challenge, require students to point to the sentence that supports their answer.',
      'Separate names/background information from causes and consequences using two annotation symbols.',
    ],
    assessmentTools: {
      rubric: ['Evidence selection', 'Cause-effect reasoning', 'B2 vocabulary', 'Clarity'],
      exitTicket: ['One cause of rulers’ fear', 'One consequence for the Children of Israel'],
    },
  },
  {
    chapter: canonicalChapterLabel(storyPages[1]),
    timing: '55 minutes',
    objectives: [
      'Identify the chapter’s explicit uncertainty markers about the Exodus chronology and Pharaoh identification.',
      'Compare what the chapter presents as sourced/probable with what it presents as certain.',
      'Explain the relationship between forced labor, political pressure, and the proposed Exodus chronology.',
      'Use B2 vocabulary such as forefather, superiority, oppress, reign, and Exodus accurately.',
    ],
    pedagogy: 'Teach historical caution. B2 learners should notice phrases such as according to the sources, most sources, probably, and exact date unknown rather than flattening every statement into certainty.',
    grammarFocus: 'Hedging and degrees of certainty: may, probably, according to, appears to, is described as.',
    pronunciationFocus: 'Stress in superiority, approximately, oppression, and Exodus.',
    lessonPlan: '0–8 min: Certainty-scale warm-up. 8–22 min: Read and underline certainty/uncertainty markers. 22–35 min: Sort claims into stated / sourced / probable / unknown. 35–45 min: Pair comparison. 45–50 min: Quick Challenge. 50–55 min: Exit ticket.',
    discussionPoints: [
      'Which historical claims does the chapter qualify rather than state with certainty?',
      'Why is cautious language important when a text discusses historical reconstruction?',
      'How does forced labor form part of the chapter’s explanation of the period?',
    ],
    differentiation: {
      fastFinishers: 'Rewrite three chapter claims with an appropriate degree of certainty and explain why each hedge is needed.',
      strugglingLearners: 'Highlight only four phrases: according to the sources, most sources, probably, exact date unknown.',
    },
    interactiveTips: [
      'Use the Quick Challenge to check whether students can preserve the chapter’s uncertainty instead of overclaiming.',
      'Create a four-column certainty chart on the board.',
      'Ask learners to explain why “probably” and “proved” are not interchangeable.',
    ],
    assessmentTools: {
      rubric: ['Historical caution', 'Evidence use', 'Hedging language', 'Vocabulary'],
      exitTicket: ['One claim the chapter qualifies', 'One phrase that signals uncertainty'],
    },
  },
  {
    chapter: canonicalChapterLabel(storyPages[2]),
    timing: '55 minutes',
    objectives: [
      'Analyze how Nile projects, manpower, administration, and political authority are connected in the chapter.',
      'Explain how economic resources can support centralized power.',
      'Evaluate the chapter’s comparison between control of the Nile and control of a strategic modern resource.',
      'Use B2 vocabulary such as fertile, vital, manpower, authority, and administration.',
    ],
    pedagogy: 'Use systems thinking. The chapter is strongest when learners connect environment, infrastructure, labor, and authority rather than memorizing the Herodotus quotation.',
    grammarFocus: 'Relationship language: depended on, required, enabled, was based on, contributed to.',
    pronunciationFocus: 'Stress in administration, authority, agricultural, transportation, and commercial.',
    lessonPlan: '0–7 min: Nile/resource warm-up. 7–20 min: Read for main idea. 20–35 min: Build a systems map linking Nile → projects → manpower → administration → authority. 35–45 min: Evaluate the petrol comparison. 45–50 min: Quick Challenge. 50–55 min: Exit ticket.',
    discussionPoints: [
      'Why did large Nile projects require more than natural resources alone?',
      'How does labor become part of the chapter’s explanation of political power?',
      'What does the petrol comparison help the reader understand, and where are its limits?',
    ],
    differentiation: {
      fastFinishers: 'Write a short evaluation of the chapter’s petrol analogy using one strength and one limitation.',
      strugglingLearners: 'Complete the chain: Nile → canals → ______ → strong administration → authority.',
    },
    interactiveTips: [
      'Make students use arrows and verbs in the systems map rather than isolated nouns.',
      'Use the Quick Challenge after the map so the answer is supported by relationships, not recall.',
      'Ask for one sentence containing both manpower and authority.',
    ],
    assessmentTools: {
      rubric: ['Systems reasoning', 'Evidence', 'Evaluation', 'Vocabulary use'],
      exitTicket: ['One link between Nile projects and authority', 'One sentence using vital'],
    },
  },
  {
    chapter: canonicalChapterLabel(storyPages[3]),
    timing: '55 minutes',
    objectives: [
      'Explain how the Nile functions in the chapter as both setting and means of survival.',
      'Compare the baby-in-the-Nile episode with the chapter’s foreshadowing of later Red Sea salvation.',
      'Distinguish the chapter’s narrative statements from the traditional etymology it presents for the name Mûsâ.',
      'Use B2 vocabulary such as survive, salvation, Coptic, and miraculously in context.',
    ],
    pedagogy: 'Use motif and source-framing analysis. The goal is not to test the name etymology as isolated trivia but to notice the repeated water motif and how the chapter itself connects beginning and later salvation.',
    grammarFocus: 'Comparison and foreshadowing language: similarly, later, in contrast, this anticipates, this connects with.',
    pronunciationFocus: 'Stress in miraculously, salvation, population, and environment.',
    lessonPlan: '0–7 min: Identify images associated with water. 7–20 min: Read and mark Nile / palace / Red Sea references. 20–33 min: Compare beginning and foreshadowed ending. 33–44 min: Discuss how the chapter presents the name explanation. 44–50 min: Quick Challenge. 50–55 min: Exit ticket.',
    discussionPoints: [
      'Why does the chapter end by returning to the idea of water?',
      'How does the Nile episode foreshadow a later event in the same story?',
      'Why should a reader distinguish a traditional name explanation from the chapter’s central narrative message?',
    ],
    differentiation: {
      fastFinishers: 'Write a paragraph explaining the water motif from Nile survival to Red Sea salvation.',
      strugglingLearners: 'Draw two boxes labelled Nile and Red Sea and write one chapter-supported connection between them.',
    },
    interactiveTips: [
      'Use the two hotspots to move from detail to motif.',
      'Ask learners to state what the chapter says before offering any interpretation.',
      'Use the Quick Challenge as a short synthesis task.',
    ],
    assessmentTools: {
      rubric: ['Comparison', 'Source framing', 'Evidence', 'B2 vocabulary'],
      exitTicket: ['One repeated water idea', 'One difference between detail and interpretation'],
    },
  },
];

const remappedTeacherSections = mosesB2TeacherGuide.map((section, index) => {
  const page = storyPages[index + 4];
  if (!page) throw new Error(`Moses B2 Gold: Teacher Guide source section ${index + 1} has no canonical chapter.`);
  return {
    ...section,
    chapter: canonicalChapterLabel(page),
    extraResources: undefined,
    interactiveTips: [
      ...section.interactiveTips,
      'Use the chapter Quick Challenge as evidence-based reinforcement: after an incorrect answer, send learners back to the relevant paragraph before retrying.',
    ],
  };
});

export const mosesB2TeacherGuideGoldEn: TeacherGuideSection[] = [
  ...newTeacherSections,
  ...remappedTeacherSections,
];

const newSelfStudySections: TeacherGuideSection[] = newTeacherSections.map((section, index) => ({
  ...section,
  timing: '40 minutes',
  pedagogy: [
    'Study independently in three passes: first for the main idea, second for evidence and vocabulary, and third for analysis.',
    'At B2 level, distinguish what the chapter states directly from historical qualification or interpretation.',
  ].join(' '),
  lessonPlan: index === 0
    ? 'Preview the title and Word Notes. Read once for the historical setting. Reread and mark population growth, political fear, and consequences. Complete the Quick Challenge, find the supporting sentence, then write a 5–6 sentence cause-and-effect summary.'
    : index === 1
      ? 'Preview the historical names but do not memorize them first. Read once for the main timeline. Reread and circle phrases that signal certainty or uncertainty. Complete the Quick Challenge, then write three claims using according to, probably, or unknown accurately.'
      : index === 2
        ? 'Read once for the Nile’s importance. On the second reading, draw arrows linking resources, projects, manpower, administration, and authority. Complete the Quick Challenge and explain your answer in two sentences. Finish with a short evaluation of the chapter’s resource comparison.'
        : 'Read once for the baby’s journey. Reread and mark every reference to water, survival, and later salvation. Complete the Quick Challenge, then write a short comparison of the Nile episode and the Red Sea foreshadowing using evidence from this chapter.',
  discussionPoints: section.discussionPoints.map((item) => item.replace(/^Why /, 'Ask yourself: Why ')),
  differentiation: {
    fastFinishers: section.differentiation.fastFinishers,
    strugglingLearners: section.differentiation.strugglingLearners,
  },
  interactiveTips: [
    'Use Word Notes only after trying to infer meaning from the sentence.',
    'If the Quick Challenge is wrong, find the exact evidence, reread the paragraph, and try again.',
    'Write one sentence explaining why the correct answer is better supported than the distractors.',
  ],
  assessmentTools: undefined,
  kinestheticActivities: undefined,
  globalCitizenship: undefined,
  extraResources: undefined,
}));

const remappedSelfStudySections = mosesB2SelfStudyGuide.map((section, index) => {
  const page = storyPages[index + 4];
  if (!page) throw new Error(`Moses B2 Gold: Self-Study source section ${index + 1} has no canonical chapter.`);
  return {
    ...section,
    chapter: canonicalChapterLabel(page),
    extraResources: undefined,
    interactiveTips: [
      ...section.interactiveTips,
      'After the Quick Challenge, locate the evidence in the chapter and explain in one sentence why it supports the answer.',
    ],
  };
});

export const mosesB2SelfStudyGuideGoldEn: TeacherGuideSection[] = [
  ...newSelfStudySections,
  ...remappedSelfStudySections,
];

const chapterList = storyPages
  .map((page) => `${page.id}. ${page.title}  `)
  .join('\n');

const introReplacement = `You will study ${storyPages.length} chapters:\n\n${chapterList}\n\nStudy slowly.`;

const introFocus = `### Chapter 1: ${storyPages[0].title}\nFocus on:\n- historical setting,\n- population growth,\n- political fear,\n- cause and consequence.\n\nReflection:\nHow does the chapter connect population growth with political fear?\n\n---\n\n### Chapter 2: ${storyPages[1].title}\nFocus on:\n- historical-source language,\n- forced labor,\n- chronology,\n- degrees of certainty.\n\nReflection:\nWhich claims are presented as probable or uncertain, and why does that matter?\n\n---\n\n### Chapter 3: ${storyPages[2].title}\nFocus on:\n- Nile resources,\n- infrastructure,\n- manpower,\n- administration and authority.\n\nReflection:\nHow does control of resources become connected with political power?\n\n---\n\n### Chapter 4: ${storyPages[3].title}\nFocus on:\n- the Nile,\n- survival,\n- the water motif,\n- foreshadowing of the Red Sea.\n\nReflection:\nWhy does the chapter connect Moses’s beginning in the Nile with later salvation at the Red Sea?\n\n---\n\n`;

const sourceFocusMatch = mosesB2StudentGuideText.match(/## 8\. Chapter-by-Chapter Study Focus\n\n([\s\S]*?)(?=## 9\. Writing Tasks)/);
if (!sourceFocusMatch) throw new Error('Moses B2 Gold: chapter-by-chapter focus block was not found.');

const shiftedLegacyFocus = sourceFocusMatch[1].replace(/### Chapter (\d+):[^\n]*/g, (_match, rawNumber) => {
  const id = Number(rawNumber) + 4;
  const page = storyPages.find((candidate) => candidate.id === id);
  if (!page) throw new Error(`Moses B2 Gold: cannot remap student-guide chapter ${rawNumber}.`);
  return `### Chapter ${id}: ${page.title}`;
});

export const mosesB2StudentGuideTextGoldEn = mosesB2StudentGuideText
  .replace(/You will study 20 chapters:[\s\S]*?Study slowly\./, introReplacement)
  .replace(
    /## 8\. Chapter-by-Chapter Study Focus\n\n[\s\S]*?(?=## 9\. Writing Tasks)/,
    `## 8. Chapter-by-Chapter Study Focus\n\n${introFocus}${shiftedLegacyFocus}`,
  );

export const mosesB2StudentGuideSectionsGoldEn = mosesB2StudentGuideSections;
export const mosesB2StudentGuideMetadataGoldEn = {
  ...mosesB2StudentGuideMetadata,
  estimatedStudyTime: '24 chapter study sessions plus whole-book review',
};

const optionBLessons = Array.from({ length: 6 }, (_, groupIndex) => {
  const start = groupIndex * 4;
  const pages = storyPages.slice(start, start + 4);
  return {
    title: `Lesson ${groupIndex + 1}`,
    description: `Chapters ${pages[0].id}–${pages[pages.length - 1].id}: ${pages.map((page) => page.title).join('; ')}`,
  };
});

const optionCSteps = storyPages.map((page) => ({
  time: `Lesson ${page.id}`,
  activity: `${canonicalChapterLabel(page)} — evidence, vocabulary, inference/evaluation, Quick Challenge, and short written synthesis`,
}));

export const mosesB2TeacherGuideMetadataGoldEn: TeacherGuideMetadata = {
  ...mosesB2TeacherGuideMetadata,
  title: 'Prophet Moses B2 Teacher Guide — Gold Standard',
  level: 'B2',
  estimatedDuration: '24 chapter lessons plus review and final assessment',
  implementationPlans: mosesB2TeacherGuideMetadata.implementationPlans
    ? {
        ...mosesB2TeacherGuideMetadata.implementationPlans,
        optionB: {
          title: 'Standard Split (6 x 4-Chapter Units)',
          lessons: optionBLessons,
        },
        optionC: {
          title: 'Extended Project (24 Lessons)',
          steps: optionCSteps,
        },
      }
    : undefined,
};
