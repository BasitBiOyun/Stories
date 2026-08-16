import { defineLearningBlueprint } from '../../learningBlueprint';
import { mosesA2Chapters01to04 } from './blueprint/chapters01to04';
import { mosesA2Chapters05to08 } from './blueprint/chapters05to08';
import { mosesA2Chapters09to12 } from './blueprint/chapters09to12';
import { mosesA2Chapters13to16 } from './blueprint/chapters13to16';

export const mosesA2LearningBlueprint = defineLearningBlueprint({
  id: 'moses-a2',
  version: '1.0.0',
  storyId: 'moses',
  level: 'A2',
  status: 'pedagogy-reviewed',
  chapters: [
    ...mosesA2Chapters01to04,
    ...mosesA2Chapters05to08,
    ...mosesA2Chapters09to12,
    ...mosesA2Chapters13to16,
  ],
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Knowledge Check: Moses (pbuh)', ar: 'اختبار المعرفة: موسى عليه السلام' },
      content: {
        en: 'Check eight different ideas from across the story. Each question targets a learning point that is not used in the Quick Challenges, Review, or Final Challenge.',
        ar: 'تحقق من ثماني أفكار مختلفة من القصة. كل سؤال يقيس نقطة تعلم لا تتكرر في التحديات السريعة أو المراجعة أو التحدي النهائي.',
      },
    },
    vocabularyChallenge: {
      title: { en: 'Vocabulary Challenge', ar: 'تحدي المفردات' },
      content: {
        en: 'Match six reviewed Word Notes from the story with their meanings.',
        ar: 'صل ست كلمات مراجعة من ملاحظات المفردات بمعانيها.',
      },
    },
    review: {
      title: { en: 'Review Challenge', ar: 'تحدي المراجعة' },
      content: {
        en: 'Review eight story ideas using questions that are different from the Quick and Knowledge stages.',
        ar: 'راجع ثماني أفكار من القصة بأسئلة مختلفة عن مرحلتي التحدي السريع واختبار المعرفة.',
      },
    },
    finalChallenge: {
      title: { en: 'Final Challenge: Moses (pbuh)', ar: 'التحدي النهائي: موسى عليه السلام' },
      content: {
        en: 'Complete ten final activities drawn from distinct story evidence. The final uses multiple-choice, true/false, matching, and fill-blanks without Tap-Reveal.',
        ar: 'أكمل عشرة أنشطة نهائية مبنية على أدلة مختلفة من القصة. يستخدم التحدي النهائي الاختيار من متعدد والصحيح والخطأ والمطابقة وإكمال الفراغات دون أنشطة الكشف بالنقر.',
      },
    },
    glossary: [
      {
        title: { en: 'Master Glossary - Part 1', ar: 'القاموس الشامل - الجزء الأول' },
        content: { en: 'Reviewed Word Notes from Chapters 1–8.', ar: 'ملاحظات المفردات المراجعة من الفصول 1–8.' },
      },
      {
        title: { en: 'Master Glossary - Part 2', ar: 'القاموس الشامل - الجزء الثاني' },
        content: { en: 'Reviewed Word Notes from Chapters 9–16.', ar: 'ملاحظات المفردات المراجعة من الفصول 9–16.' },
      },
    ],
  },
});
