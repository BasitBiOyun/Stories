import { defineLearningBlueprint } from '../../learningBlueprint';
import { adamA2Chapter01 } from './blueprint/ch01';
import { adamA2Chapter02 } from './blueprint/ch02';
import { adamA2Chapter03 } from './blueprint/ch03';
import { adamA2Chapter04 } from './blueprint/ch04';
import { adamA2Chapter05 } from './blueprint/ch05';
import { adamA2Chapter06 } from './blueprint/ch06';
import { adamA2Chapter07 } from './blueprint/ch07';
import { adamA2Chapter08 } from './blueprint/ch08';
import { adamA2Chapter09 } from './blueprint/ch09';
import { adamA2Chapter10 } from './blueprint/ch10';

export const adamA2LearningBlueprint = defineLearningBlueprint({
  id: 'adam-a2',
  version: '1.0.0',
  storyId: 'adam',
  level: 'A2',
  status: 'pedagogy-reviewed',
  chapters: [
    adamA2Chapter01,
    adamA2Chapter02,
    adamA2Chapter03,
    adamA2Chapter04,
    adamA2Chapter05,
    adamA2Chapter06,
    adamA2Chapter07,
    adamA2Chapter08,
    adamA2Chapter09,
    adamA2Chapter10,
  ],
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Adam A2 Knowledge Check', ar: 'اختبار الفهم — آدم A2' },
      content: {
        en: 'Answer eight questions using details from different chapters. Each question checks a different learning point.',
        ar: 'أجب عن ثمانية أسئلة من فصول مختلفة. كل سؤال يقيس نقطة تعلم مختلفة.',
      },
    },
    vocabularyChallenge: {
      title: { en: 'Adam A2 Vocabulary Challenge', ar: 'تحدي المفردات — آدم A2' },
      content: {
        en: 'Match six reviewed story words or phrases with their meanings.',
        ar: 'صل ست كلمات أو عبارات مراجعة من القصة بمعانيها.',
      },
    },
    review: {
      title: { en: 'Adam A2 Review Challenge', ar: 'مراجعة قصة آدم — A2' },
      content: {
        en: 'Review eight new story details without repeating the Quick Challenges or Knowledge Check.',
        ar: 'راجع ثماني معلومات جديدة من القصة من دون تكرار التحديات السريعة أو اختبار الفهم.',
      },
    },
    finalChallenge: {
      title: { en: 'Adam A2 Final Challenge', ar: 'التحدي النهائي — آدم A2' },
      content: {
        en: 'Complete ten final activities, each based on a different chapter learning point.',
        ar: 'أكمل عشرة أنشطة نهائية، وكل نشاط مبني على نقطة تعلم مختلفة من الفصول.',
      },
    },
    glossary: [
      {
        title: { en: 'Adam A2 Master Glossary — Chapters 1–5', ar: 'المعجم الشامل — آدم A2 — الفصول 1–5' },
        content: {
          en: 'All reviewed Word Notes from Chapters 1–5.',
          ar: 'جميع ملاحظات المفردات المراجعة من الفصول 1–5.',
        },
      },
      {
        title: { en: 'Adam A2 Master Glossary — Chapters 6–10', ar: 'المعجم الشامل — آدم A2 — الفصول 6–10' },
        content: {
          en: 'All reviewed Word Notes from Chapters 6–10.',
          ar: 'جميع ملاحظات المفردات المراجعة من الفصول 6–10.',
        },
      },
    ],
  },
});
