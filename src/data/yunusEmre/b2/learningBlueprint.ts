import { defineLearningBlueprint } from '../../learningBlueprint';
import { L, guideBundle } from '../../b2BlueprintAuthoring';
import { vocabularyTargetsFor, type ChapterDraft } from './learningBlueprintShared';
import { yunusEmreB2Chapters1To4 } from './learningBlueprintChapters1To4';
import { yunusEmreB2Chapters5To8 } from './learningBlueprintChapters5To8';
import { yunusEmreB2Chapters9To13 } from './learningBlueprintChapters9To13';

const chapters: ChapterDraft[] = [
  ...yunusEmreB2Chapters1To4,
  ...yunusEmreB2Chapters5To8,
  ...yunusEmreB2Chapters9To13,
];

const guides = (draft: ChapterDraft) => guideBundle({
  focus: draft.theme,
  primaryQuestion: draft.primaryQuestion,
  secondQuestion: draft.analysisQuestion,
  grammar: L(
    'Use reporting verbs, cause-effect links, contrast, concession, evidence language, and source qualifiers such as according to the chapter, the chapter presents, and in Yunus Emre’s thought.',
    'استخدم أفعال النقل وروابط السبب والنتيجة والمقارنة والاستدراك ولغة الدليل وعبارات نسبة الرأي مثل: وفقًا للفصل، يعرض الفصل، وفي فكر يونس إمره.',
  ),
  pronunciation: L(
    'Practise chapter Word Notes, historical names, and Sûfî terminology before the analytical response.',
    'تدرّب على Word Notes والأسماء التاريخية والمصطلحات الصوفية قبل الاستجابة التحليلية.',
  ),
  fast: L(
    `Write 120–150 words answering: ${draft.analysisQuestion.en} Use two distinct chapter details where available, preserve attribution, and explain what each detail proves.`,
    `اكتب 120–150 كلمة تجيب عن: ${draft.analysisQuestion.ar} واستخدم دليلين مختلفين عندما يتيحهما الفصل، وحافظ على نسبة الآراء إلى مصدرها واشرح ما الذي يثبته كل دليل.`,
  ),
  support: L(
    'Use: “The chapter states ___. In Yunus Emre’s thought, this suggests ___. A second detail is ___. Together, these details support ___.”',
    'استخدم: «يذكر الفصل ___. وفي فكر يونس إمره يدل هذا على ___. ودليل ثانٍ هو ___. وتدعم هذه الأدلة معًا ___.»',
  ),
});

export const yunusEmreB2LearningBlueprint = defineLearningBlueprint({
  id: 'yunus-emre-b2',
  version: '1.0.0',
  storyId: 'yunusEmre',
  level: 'B2',
  status: 'pedagogy-reviewed',
  chapters: chapters.map((draft) => {
    const guide = guides(draft);
    return {
      chapterId: draft.chapterId,
      objectives: [
        L(`Explain the chapter's main relationship around ${draft.theme.en}.`, `اشرح العلاقة الرئيسة في الفصل حول ${draft.theme.ar}.`),
        L(`Support an analytical answer to: ${draft.analysisQuestion.en}`, `ادعم إجابة تحليلية عن: ${draft.analysisQuestion.ar}`),
      ],
      evidencePoints: draft.points.map((point) => ({
        id: `yunus-b2-c${draft.chapterId}-${point.key}`,
        focus: point.focus,
        claim: point.claim,
        evidence: point.evidence,
      })),
      vocabularyTargets: vocabularyTargetsFor(draft.chapterId),
      assessmentItems: draft.points.map((point) => ({
        id: point.stage === 'quick'
          ? `yunus-b2-c${draft.chapterId}-quick`
          : `yunus-b2-c${draft.chapterId}-${point.stage}-${point.key}`,
        learningPointId: `yunus-b2-c${draft.chapterId}-${point.key}`,
        eligibleStages: [point.stage],
        exercise: point.exercise,
      })),
      teacherGuide: guide.teacherGuide,
      selfStudyGuide: guide.selfStudyGuide,
    };
  }),
});
