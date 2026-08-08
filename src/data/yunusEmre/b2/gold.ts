import type { Exercise, PageData, StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { applyB2GoldPages, type B2GoldPageConfig } from '../../b2GoldFactory';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { yunusB2Pages } from './en/pages';

const config: B2GoldPageConfig = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 15,
  vocabularyPageId: 16,
  glossaryPageIds: [17, 18],
  reviewPageId: 19,
  finalChallengePageId: 20,
};

const mc = (id: number, title: string, question: string, options: [string, string, string], explanation: string, retry: string): Exercise => ({
  id: `yunus-b2-gold-qc-${id}`,
  type: 'multiple-choice',
  title,
  instructions: 'Choose the best answer. Use evidence from the chapter and keep the chapter’s attribution framing.',
  question,
  options,
  correctAnswer: 0,
  explanation,
  feedback: { correct: `Correct. ${explanation}`, incorrect: retry },
});

const quickChallengeOverrides: Record<number, Exercise> = {
  1: mc(1, 'Literary and Sûfî Identity', 'According to Chapter 1, why is Yunus Emre important in both literary and Sûfî history?', [
    'The chapter presents him as a major Anatolian poet who helped develop Old Anatolian Turkish while also establishing a literary tradition shaped by Sûfî teaching and moral practice.',
    'The chapter presents him primarily as a military commander whose poems recorded Seljuk campaigns.',
    'The chapter says his influence came from rejecting literary Turkish in favor of court administration.',
  ], 'Chapter 1 combines two roles: Yunus as an important contributor to Old Anatolian Turkish literature and as a Sûfî poet whose tradition emphasizes inner morality and spiritual practice.', 'Return to both paragraphs and identify one literary contribution and one feature of the Sûfî life described by the chapter.'),
  2: mc(2, 'Accessibility and Education', 'How does Chapter 2 explain the relationship between Yunus Emre’s style, education, and public influence?', [
    'The chapter presents a style that balances literary value with accessibility and describes, through historical accounts and some sources, both madrasa learning and tekke education.',
    'The chapter says his popularity depended on deliberately making his language impossible for ordinary people to understand.',
    'The chapter states with complete historical certainty that every detail of his education is documented in one contemporary biography.',
  ], 'The chapter links accessible literary style with influence and uses attribution markers such as “according to historical accounts,” “widely accepted view,” and “some sources” when discussing biography and education.', 'Reread the chapter and mark the phrases that signal historical attribution as well as the sentence describing his style.'),
  3: mc(3, 'Context for the Poetry', 'Why does Chapter 3 place Yunus Emre’s life beside the Babai uprisings, Kösedağ, and Mongol pressure?', [
    'The chapter uses political, economic, and social hardship as historical context for understanding the Anatolia in which Yunus lived and recited his poetry.',
    'The chapter claims Yunus personally commanded the Seljuk army at Kösedağ.',
    'The chapter argues that Anatolia experienced no significant disruption during Yunus’s lifetime.',
  ], 'Chapter 3 explicitly says that looking more closely at the difficult historical atmosphere helps the reader understand the land where Yunus lived and recited his verses.', 'Use the paragraph that explains why the historical atmosphere matters rather than focusing only on battle names.'),
  4: mc(4, 'Migration, Governance, and Unrest', 'What chain of pressures does Chapter 4 use to explain worsening social and economic chaos before the Babai uprising?', [
    'The chapter connects weak governance with population movement caused by Mongol pressure, unsettled nomadic groups seeking safe land, and growing social tension.',
    'The chapter says the uprising occurred after decades of stable government with no migration pressure.',
    'The chapter presents Baba İlyas’s movement as the official religious institution of the Seljuk state.',
  ], 'The chapter builds a multi-cause explanation involving governance, migration, nomadic settlement pressures, and unrest; it also identifies Baba İlyas’s movement in the wording used by the chapter.', 'Trace the sequence from Keyhüsrev II’s governance through migration and unrest before the sentence introducing the 1240 rebellion.'),
  5: mc(5, 'Conflict and Historical Consequence', 'According to Chapter 5, what major political consequence followed the Seljuk defeat at Kösedağ?', [
    'The chapter presents the defeat as opening the way to deeper Mongol domination and severe instability across Anatolia.',
    'The chapter says the victory ended Mongol pressure and immediately restored Seljuk independence.',
    'The chapter says Yunus Emre became sultan as a direct result of the battle.',
  ], 'Chapter 5 describes the defeat and its broader consequences for Anatolia. The Gold question focuses on political and social consequence rather than repeating the chapter’s graphic descriptions of violence.', 'Identify what changed for Seljuk power and Anatolian stability after the battle; you do not need to repeat violent details.'),
  6: mc(6, 'Dependency and Economic Pressure', 'How does Chapter 6 describe the relationship between Seljuk political dependency and economic hardship?', [
    'The chapter says increasing Mongol control was accompanied by rising transfers of state income, making both the state and ordinary people poorer despite efforts at relief.',
    'The chapter says dependency on the Mongols immediately eliminated taxation and enriched the population.',
    'The chapter describes the Ottoman state as already ruling all Anatolia during this period.',
  ], 'The chapter links political dependency with annual income transfers and increasing tax pressure, while noting that statesmen’s attempts to reduce the burden were insufficient.', 'Connect the sentences about dependent-state status, state income, taxes, and relief efforts.'),
  7: mc(7, 'Yunus in a Time of Crisis', 'How does Chapter 7 present Yunus Emre’s response to a society living through severe disruption?', [
    'The chapter presents him as a travelling wise dervish who used poetry and his Sûfî identity as a medium for helping people make sense of difficult times.',
    'The chapter presents him as withdrawing completely from public life and refusing to communicate through poetry.',
    'The chapter says he responded mainly by becoming a political ruler of the new principalities.',
  ], 'Chapter 7 explicitly frames Yunus’s role through his Sûfî identity and poetry within the historical environment described in the preceding chapters.', 'Return to the paragraph beginning “So in such an environment” and identify both his role and his medium.'),
  8: mc(8, 'Attributing Vahdet-i Vücut Correctly', 'According to Chapter 8, how should the statements about “true reality,” creation, and vahdet-i vücut be understood?', [
    'As ideas the chapter attributes to Yunus Emre and to the theory of vahdet-i vücut, not as unqualified statements that every reader must accept as the only formulation of Islamic creed.',
    'As a modern scientific theory about the physical origin of the universe.',
    'As statements the chapter attributes to the Mongol administration rather than to Yunus’s Sûfî thought.',
  ], 'The chapter repeatedly uses framing such as “According to Yunus Emre,” “From this perspective,” and “According to the theory of vahdet-i vücut.” Gold derived material preserves that attribution.', 'Reread the first paragraph and mark every phrase that attributes an idea to Yunus Emre or to a named theory.'),
  9: mc(9, 'Love and Unity in Yunus’s Thought', 'According to Chapter 9, what relationship does Yunus Emre’s thought establish between love, created beings, and unity?', [
    'The chapter presents love of the Creator and love of the created as interconnected in Yunus’s philosophy, with love supporting harmony and his idea of unity.',
    'The chapter says love has no relationship to moral behavior or spiritual life.',
    'The chapter presents separation and anger as the necessary goals of love.',
  ], 'The chapter explicitly locates these claims within Yunus Emre’s works and philosophy and says that love and unity are interrelated in his thought.', 'Use the phrases “in Yunus Emre’s works,” “his philosophy,” and “according to him” when locating the evidence.'),
  10: mc(10, 'The Heart as Metaphor in Yunus’s Philosophy', 'How should the image of the heart as “the throne of the Lord” be read in Chapter 10?', [
    'As a Sûfî and poetic idea explicitly attributed to Yunus Emre’s philosophy, used to emphasize the spiritual importance of the heart and the moral seriousness of hurting another person.',
    'As a literal anatomical claim that the chapter presents as a scientific description of the human heart.',
    'As a political title for the Seljuk royal palace.',
  ], 'Chapter 10 says “In Yunus Emre’s philosophy” and “he described” before presenting the heart metaphor. The derived explanation therefore keeps it attributed rather than turning the metaphor into an unqualified doctrinal claim.', 'Return to the sentences immediately before the poem and identify the attribution phrases introducing the metaphor.'),
  11: mc(11, 'Heart, Intellect, and Death in the Chapter', 'According to Chapter 11, how are intellect and remembrance of death used within Yunus Emre’s moral framework?', [
    'The chapter presents heart and intellect as supporting one another in Yunus’s view and describes remembrance of death as a moral reminder that can guide a meaningful, righteous life.',
    'The chapter says Yunus rejects intellect completely and never discusses death.',
    'The chapter says remembering death is useful only for learning Seljuk chronology.',
  ], 'The chapter attributes a three-part understanding of intellect to Yunus and then presents death as an important theme and advisor within his poems, alongside a cited hadith.', 'Separate what the chapter attributes to Yunus from the cited prophetic saying, and explain how both are used in the chapter’s moral discussion.'),
  12: mc(12, 'Morality in Yunus’s Works', 'According to Chapter 12, how does Yunus Emre’s moral teaching contrast virtues with harmful habits?', [
    'The chapter presents virtues such as honesty, patience, humility, generosity, and trust in Allah as important in his works, while his poems warn against traits such as greed, arrogance, anger, envy, and slander.',
    'The chapter presents greed and arrogance as the main virtues needed for spiritual growth.',
    'The chapter says his poems avoid moral instruction and deal only with political chronology.',
  ], 'Chapter 12 explicitly frames these moral categories as part of Yunus’s understanding and works, and uses poems on greed and patience as examples.', 'Find the phrases “According to Yunus,” “In Yunus’s understanding,” and “important in Yunus Emre’s works.”'),
  13: mc(13, 'Literary and Moral Legacy', 'How does Chapter 13 explain Yunus Emre’s lasting legacy?', [
    'The chapter presents his poetry as continuing to matter both as literature and as moral guidance, illustrated by verses that warn against anger and praise patience.',
    'The chapter says his lasting importance comes from ruling Anatolia as a sultan.',
    'The chapter says his writings were forgotten immediately after his lifetime.',
  ], 'The final chapter explicitly describes Yunus as a prominent figure whose writings remain valuable as literary works and a moral guide for later generations.', 'Use the concluding paragraph and the two poems immediately before it.'),
};

const baseGoldPages = applyB2GoldPages({ canonicalPages: yunusB2Pages, config, language: 'en', quickChallengeOverrides });

const attributedVocabulary = (page: PageData): PageData['vocabulary'] => (page.vocabulary ?? []).map((entry) => {
  if (!/vahdet-i vücut|true and only reality|absolute reality|initial unity|multiple existence|intellect/i.test(entry.word)) return entry;
  return {
    ...entry,
    definition: `In the chapter’s presentation of Yunus Emre’s Sûfî thought: ${entry.definition}`,
  };
});

export const yunusB2PagesGoldEn: PageData[] = baseGoldPages.map((page) => {
  if (!config.storyIds.includes(page.id)) return page;
  return {
    ...page,
    vocabulary: attributedVocabulary(page),
    hotspots: (page.hotspots ?? []).map((hotspot) => ({
      ...hotspot,
      description: `The chapter presents this in Yunus Emre’s historical, literary, or Sûfî context: ${hotspot.description}`,
    })),
  };
});

const guides = buildB2EvidenceGuides({ effectivePages: yunusB2PagesGoldEn, storyIds: config.storyIds, language: 'en' });
export const yunusB2TeacherGuideGoldEn = guides.teacherGuide.map((section) => ({
  ...section,
  pedagogy: `${section.pedagogy} When discussing Sûfî, mystical, or metaphorical language, say explicitly “according to the chapter,” “in Yunus Emre’s thought,” or “the chapter presents” before analysis.`,
  interactiveTips: [...section.interactiveTips, 'Do not restate a Yunus/Sûfî metaphor as an unqualified creed statement; preserve the chapter’s attribution.'],
}));
export const yunusB2SelfStudyGuideGoldEn = guides.selfStudyGuide.map((section) => ({
  ...section,
  pedagogy: `${section.pedagogy} Keep literary/Sûfî interpretation attributed to Yunus Emre or to the chapter rather than converting metaphor into unqualified doctrine.`,
  interactiveTips: [...section.interactiveTips, 'When you explain a Sûfî idea, begin with “According to the chapter…” or “In Yunus Emre’s thought…”.'],
}));

export const yunusB2StudentGuideSectionsGoldEn: StudentGuideSection[] = [
  { title: '1. Historical and Literary Context', icon: 'BookOpen', text: 'Study 13 canonical narrative chapters. The References page remains unchanged and is not counted as a learning chapter.', points: ['13 narrative chapters', 'References preserved', 'Historical context matters'] },
  { title: '2. Attribution Before Interpretation', icon: 'Quote', text: 'When the text discusses Sûfî thought, metaphor, vahdet-i vücut, the heart, love, or intellect, begin your explanation with “According to the chapter” or “In Yunus Emre’s thought.”', points: ['Attribute the idea', 'Then explain evidence', 'Do not turn metaphor into unqualified doctrine'] },
  { title: '3. Handle Historical Violence Structurally', icon: 'Shield', text: 'For the Mongol-era chapters, focus on political, economic, and social consequences. Do not repeat graphic violence when a structural explanation is enough.', points: ['No graphic amplification', 'Cause and consequence', 'Human impact with dignity'] },
  { title: '4. Review', icon: 'Target', text: 'Use Knowledge 8, Vocabulary 10, Review 8, two Master Glossary sections, and Final 10 to identify gaps and return to the relevant chapter.', points: ['Knowledge: 8', 'Vocabulary: 10', 'Review: 8 / Final: 10'] },
];

const chapterList = yunusB2PagesGoldEn.filter((page) => page.type === 'story' && page.id <= 13).map((page) => `${page.id}. ${page.title}`).join('\n');
export const yunusB2StudentGuideTextGoldEn = `# Yunus Emre B2 Self-Study Guide\n\nStudy these 13 canonical narrative chapters:\n\n${chapterList}\n\nPage 14 is the canonical References page and remains reference material. Read each narrative chapter for gist, then reread for evidence, vocabulary, historical context, and interpretation. For Sûfî or metaphorical claims, write “According to the chapter…” or “In Yunus Emre’s thought…” before explaining the idea. This is especially important for Chapters 8–11. Do not convert literary or mystical language into an unqualified creed statement. In chapters about conflict and Mongol pressure, focus on causes and consequences without repeating graphic violence unnecessarily. Complete each Quick Challenge with evidence and reread after a wrong or uncertain answer. Finish Knowledge 8, Vocabulary 10, Review 8, both glossary sections, and Final 10.`;

export const yunusB2TeacherGuideMetadataGoldEn: TeacherGuideMetadata = {
  title: 'Yunus Emre B2 Teacher Guide — Gold Standard', level: 'B2', estimatedDuration: '13 chapter lessons plus review and final assessment',
  targetLearners: 'CEFR B2 learners studying Yunus Emre through historical, literary, ethical, and Sûfî contexts.',
  assessmentEvidence: 'Evidence selection, historical cause-effect, source attribution, literary interpretation, comparison, vocabulary in context, and analytical writing.',
  readingFramework: {
    before: 'Preview historical/literary context and essential vocabulary without supplying interpretations as facts.',
    during: 'Read for gist and evidence. Require explicit attribution for Sûfî/metaphorical ideas and use Quick Challenge with reread/retry.',
    after: 'Write claim → evidence → interpretation and clearly label open reflection.'
  },
  vocabularyApproach: 'Study literary, historical, and Sûfî vocabulary in context; definitions of interpretive concepts should remain tied to the chapter’s presentation of Yunus.',
  grammarApproach: 'Use attribution and reporting language, hedging, cause-effect, comparison, and evidence phrases.',
  speakingApproach: 'Use formulations such as “The chapter presents…,” “According to Yunus Emre…,” and “In this poem…” before interpretation.',
  writingApproach: 'Require attribution → evidence → explanation for Sûfî/literary ideas and claim → evidence → explanation for historical analysis.',
  differentiationNotes: 'Give attribution/evidence sentence frames for support; ask fast finishers to compare historical context and poetic response across chapters.',
  sensitiveNotes: { title: 'Attribution and historical-care rules', notes: ['Do not present vahdet-i vücut or other mystical/metaphorical formulations as unqualified creed statements.', 'Keep interpretations explicitly attributed to Yunus Emre, a poem, a theory named by the chapter, or the chapter itself.', 'Do not amplify graphic Mongol-era violence in derived activities; focus on political, social, and human consequences.'] },
  implementationPlans: {
    optionA: { title: 'Four Thematic Units', steps: [
      { time: 'Unit 1', activity: 'Chapters 1–3: identity, style, education, and historical setting.' },
      { time: 'Unit 2', activity: 'Chapters 4–7: crisis, Mongol pressure, social change, and Yunus’s emergence.' },
      { time: 'Unit 3', activity: 'Chapters 8–11: attributed Sûfî thought, love, heart, intellect, and death.' },
      { time: 'Unit 4', activity: 'Chapters 12–13 plus whole-book moral/literary synthesis.' },
    ] },
    optionB: { title: 'Standard Split', lessons: Array.from({ length: 5 }, (_, index) => ({ title: `Unit ${index + 1}`, description: 'A consecutive chapter group using evidence, attribution, vocabulary, and interpretation.' })) },
    optionC: { title: 'Extended Project — 13 Lessons', steps: config.storyIds.map((id) => ({ time: `Lesson ${id}`, activity: `Chapter ${id}: context, evidence, attribution, vocabulary, Quick Challenge, and synthesis.` })) },
  },
};

export const yunusB2StudentGuideMetadataGoldEn: StudentGuideMetadata = {
  title: 'Yunus Emre B2 Self-Study Guide — Gold Standard', level: 'B2', language: 'English', estimatedStudyTime: '13 chapter sessions plus whole-book review',
  whoIsThisFor: 'CEFR B2 learners studying Yunus Emre independently with historical, literary, and attribution-aware reading.',
  learningGoals: ['Use evidence and attribution accurately.', 'Analyze historical cause and consequence.', 'Interpret poetry and Sûfî language without overclaiming.', 'Use B2 vocabulary in context.'],
  recommendedUse: ['One chapter per session.', 'Use “According to the chapter / Yunus Emre” for interpretive claims.', 'Complete Knowledge 8, Vocabulary 10, Review 8, and Final 10 after the narrative.'],
};

export const yunusB2GoldContract = config;
