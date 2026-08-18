import { defineLearningBlueprint } from '../../learningBlueprint';
import { applyAbrahamA2FinalPedagogy } from './blueprint/finalPedagogy';
import { upgradeAbrahamA2ChapterToGoldV2 } from './blueprint/goldV2';
import { abrahamA2LearningBlueprint as baseBlueprint } from './learningBlueprint';

const chapters = baseBlueprint.chapters
  .map(upgradeAbrahamA2ChapterToGoldV2)
  .map(applyAbrahamA2FinalPedagogy);

export const abrahamA2GoldLearningBlueprint = defineLearningBlueprint({
  ...baseBlueprint,
  version: '2.1.0',
  status: 'pedagogy-reviewed' as const,
  qualityContractVersion: '2.0' as const,
  chapters,
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Abraham A2 Knowledge Check', ar: 'اختبار الفهم — إبراهيم A2' },
      content: {
        en: 'Use story evidence to answer eight questions from across the fourteen chapters. Each question checks a different important idea.',
        ar: 'استخدم أدلة من القصة للإجابة عن ثمانية أسئلة من الفصول الأربعة عشر. يقيس كل سؤال فكرة مهمة مختلفة.',
      },
    },
    vocabularyChallenge: {
      title: { en: 'Abraham A2 Vocabulary Challenge', ar: 'تحدي المفردات — إبراهيم A2' },
      content: {
        en: 'Match six carefully selected story words with their meanings in context.',
        ar: 'صل ست كلمات منتقاة بعناية من القصة بمعانيها في السياق.',
      },
    },
    review: {
      title: { en: 'Abraham A2 Retrieval Review', ar: 'مراجعة الاسترجاع — إبراهيم A2' },
      content: {
        en: 'Use sequencing, matching, reflection, and an eight-question retrieval game to reconnect the main story ideas before the Final Challenge.',
        ar: 'استخدم ترتيب الأحداث والمطابقة والتأمل ولعبة استرجاع من ثمانية أسئلة لربط أفكار القصة الرئيسة قبل التحدي النهائي.',
      },
    },
    finalChallenge: {
      title: { en: 'Abraham A2 Final Challenge', ar: 'التحدي النهائي — إبراهيم A2' },
      content: {
        en: 'Complete ten final activities about questions, causes, choices, responses, turning points, and the final message—not random details.',
        ar: 'أكمل عشرة أنشطة نهائية عن الأسئلة والأسباب والاختيارات وردود الأفعال ونقاط التحول والرسالة الختامية، لا التفاصيل العشوائية.',
      },
    },
    glossary: [
      {
        title: { en: 'Abraham A2 Master Glossary — Chapters 1–7', ar: 'المعجم الشامل — إبراهيم A2 — الفصول 1–7' },
        content: { en: 'All reviewed Word Notes from Chapters 1–7.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 1–7.' },
      },
      {
        title: { en: 'Abraham A2 Master Glossary — Chapters 8–14', ar: 'المعجم الشامل — إبراهيم A2 — الفصول 8–14' },
        content: { en: 'All reviewed Word Notes from Chapters 8–14.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 8–14.' },
      },
    ],
  },
});
