import { defineLearningBlueprint } from '../../learningBlueprint';
import { applyMeccaA2FinalPedagogy } from './blueprint/finalPedagogy';
import { upgradeMeccaA2ChapterToGoldV2 } from './blueprint/goldV2';
import { meccaA2LearningBlueprint as baseBlueprint } from './learningBlueprint';

const chapters = baseBlueprint.chapters
  .map(upgradeMeccaA2ChapterToGoldV2)
  .map(applyMeccaA2FinalPedagogy);

export const meccaA2GoldLearningBlueprint = defineLearningBlueprint({
  ...baseBlueprint,
  version: '2.1.0',
  status: 'pedagogy-reviewed' as const,
  qualityContractVersion: '2.0' as const,
  chapters,
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Bilal & Mecca A2 Knowledge Check', ar: 'اختبار الفهم — بلال ومكة A2' },
      content: { en: 'Use story evidence to answer eight questions about society, choices, freedom, faith, and equality across the thirteen chapters.', ar: 'استخدم أدلة من القصة للإجابة عن ثمانية أسئلة عن المجتمع والاختيارات والحرية والإيمان والمساواة في الفصول الثلاثة عشر.' },
    },
    vocabularyChallenge: {
      title: { en: 'Bilal & Mecca A2 Vocabulary Challenge', ar: 'تحدي المفردات — بلال ومكة A2' },
      content: { en: 'Match six carefully selected story words with their meanings in context.', ar: 'صل ست كلمات منتقاة بعناية من القصة بمعانيها في السياق.' },
    },
    review: {
      title: { en: 'Bilal & Mecca A2 Retrieval Review', ar: 'مراجعة الاسترجاع — بلال ومكة A2' },
      content: { en: 'Use sequencing, matching, reflection, and an eight-question retrieval game to reconnect the story’s main social and personal ideas.', ar: 'استخدم ترتيب الأحداث والمطابقة والتأمل ولعبة استرجاع من ثمانية أسئلة لربط الأفكار الاجتماعية والشخصية الرئيسة في القصة.' },
    },
    finalChallenge: {
      title: { en: 'Bilal & Mecca A2 Final Challenge', ar: 'التحدي النهائي — بلال ومكة A2' },
      content: { en: 'Complete ten final activities about inequality, choices, responses, freedom, responsibility, and equality—not graphic or random details.', ar: 'أكمل عشرة أنشطة نهائية عن عدم المساواة والاختيارات وردود الأفعال والحرية والمسؤولية والمساواة، لا التفاصيل المؤذية أو العشوائية.' },
    },
    glossary: [
      { title: { en: 'Bilal & Mecca A2 Master Glossary — Chapters 1–7', ar: 'المعجم الشامل — بلال ومكة A2 — الفصول 1–7' }, content: { en: 'All reviewed Word Notes from Chapters 1–7.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 1–7.' } },
      { title: { en: 'Bilal & Mecca A2 Master Glossary — Chapters 8–13', ar: 'المعجم الشامل — بلال ومكة A2 — الفصول 8–13' }, content: { en: 'All reviewed Word Notes from Chapters 8–13.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 8–13.' } },
    ],
  },
});
