import { defineLearningBlueprint } from '../../learningBlueprint';
import { enforceYunusA2AssessmentIntegrity } from './blueprint/assessmentIntegrity';
import { applyYunusA2FinalPedagogy } from './blueprint/finalPedagogy';
import { upgradeYunusA2ChapterToGoldV2 } from './blueprint/goldV2';
import { yunusA2LearningBlueprint as baseBlueprint } from './learningBlueprint';

const chapters = baseBlueprint.chapters
  .map(upgradeYunusA2ChapterToGoldV2)
  .map(applyYunusA2FinalPedagogy)
  .map(enforceYunusA2AssessmentIntegrity);

export const yunusA2GoldLearningBlueprint = defineLearningBlueprint({
  ...baseBlueprint,
  version: '2.1.1',
  status: 'pedagogy-reviewed' as const,
  qualityContractVersion: '2.0' as const,
  chapters,
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Yunus Emre A2 Knowledge Check', ar: 'اختبار الفهم — يونس إمره A2' },
      content: { en: 'Use story evidence to answer eight questions about biography, dervish values, service, nature, and daily-life lessons.', ar: 'استخدم أدلة من القصة للإجابة عن ثمانية أسئلة عن السيرة وقيم الدراويش والخدمة والطبيعة ودروس الحياة اليومية.' },
    },
    vocabularyChallenge: {
      title: { en: 'Yunus Emre A2 Vocabulary Challenge', ar: 'تحدي المفردات — يونس إمره A2' },
      content: { en: 'Match six carefully selected story words with their meanings in context.', ar: 'صل ست كلمات منتقاة بعناية من القصة بمعانيها في السياق.' },
    },
    review: {
      title: { en: 'Yunus Emre A2 Retrieval Review', ar: 'مراجعة الاسترجاع — يونس إمره A2' },
      content: { en: 'Use sequencing, matching, reflection, and an eight-question retrieval game to reconnect the story’s main biographical and value-based ideas.', ar: 'استخدم ترتيب الأحداث والمطابقة والتأمل ولعبة استرجاع من ثمانية أسئلة لربط الأفكار الرئيسة في السيرة والقيم.' },
    },
    finalChallenge: {
      title: { en: 'Yunus Emre A2 Final Challenge', ar: 'التحدي النهائي — يونس إمره A2' },
      content: { en: 'Complete ten final activities about language, values, service, self-training, nature, and meaningful daily life—not random dates or trivia.', ar: 'أكمل عشرة أنشطة نهائية عن اللغة والقيم والخدمة وتدريب النفس والطبيعة والحياة اليومية ذات المعنى، لا التواريخ أو التفاصيل العشوائية.' },
    },
    glossary: [
      { title: { en: 'Yunus Emre A2 Master Glossary — Chapters 1–4', ar: 'المعجم الشامل — يونس إمره A2 — الفصول 1–4' }, content: { en: 'All reviewed Word Notes from Chapters 1–4.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 1–4.' } },
      { title: { en: 'Yunus Emre A2 Master Glossary — Chapters 5–8', ar: 'المعجم الشامل — يونس إمره A2 — الفصول 5–8' }, content: { en: 'All reviewed Word Notes from Chapters 5–8.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 5–8.' } },
    ],
  },
});
