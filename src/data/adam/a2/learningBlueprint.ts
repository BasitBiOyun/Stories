import { defineLearningBlueprint } from '../../learningBlueprint';
import { applyAdamA2QuestionLanguageLock } from './blueprint/a2Language';
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
import { upgradeAdamA2ChapterToGold } from './blueprint/gold';
import { applyAdamA2GoldQuickChallenges } from './blueprint/goldQuickChallenges';

const goldChapters = [
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
]
  .map(upgradeAdamA2ChapterToGold)
  .map(applyAdamA2GoldQuickChallenges)
  .map(applyAdamA2QuestionLanguageLock);

export const adamA2LearningBlueprint = defineLearningBlueprint({
  id: 'adam-a2',
  version: '2.0.0',
  storyId: 'adam',
  level: 'A2',
  status: 'pedagogy-reviewed',
  qualityContractVersion: '2.0',
  chapters: goldChapters,
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Adam A2 Knowledge Check', ar: 'اختبار الفهم — آدم A2' },
      content: {
        en: 'Use evidence from across the story to answer eight questions. Each item measures a different Gold learning point.',
        ar: 'استخدم أدلة من القصة للإجابة عن ثمانية أسئلة. يقيس كل سؤال نقطة تعلم مختلفة وفق معيار Gold.',
      },
    },
    vocabularyChallenge: {
      title: { en: 'Adam A2 Vocabulary Challenge', ar: 'تحدي المفردات — آدم A2' },
      content: {
        en: 'Match six deliberately selected high-value story words with their contextual meanings.',
        ar: 'صل ست كلمات عالية القيمة منتقاة يدويًا من القصة بمعانيها في السياق.',
      },
    },
    review: {
      title: { en: 'Adam A2 Retrieval Review', ar: 'مراجعة الاسترجاع — آدم A2' },
      content: {
        en: 'Retrieve eight different ideas from the story and use the hints to repair misunderstandings before the Final Challenge.',
        ar: 'استرجع ثماني أفكار مختلفة من القصة واستخدم التلميحات لإصلاح سوء الفهم قبل التحدي النهائي.',
      },
    },
    finalChallenge: {
      title: { en: 'Adam A2 Final Challenge', ar: 'التحدي النهائي — آدم A2' },
      content: {
        en: 'Complete ten final activities that sample the book’s central understanding, relationships, responsibilities, choices, and lessons—not trivia.',
        ar: 'أكمل عشرة أنشطة نهائية تقيس الفهم المركزي والعلاقات والمسؤوليات والاختيارات والدروس في الكتاب، لا المعلومات الهامشية.',
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
