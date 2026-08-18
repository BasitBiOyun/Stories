import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';

const specs: Record<number, { en: string; ar: string; demand: BlueprintCognitiveDemandV2 }> = {
  3: {
    en: 'Reread the first night-sky scene. What happened to the star after Abraham first thought about it?',
    ar: 'أعد قراءة مشهد السماء الأول ليلًا. ماذا حدث للكوكب بعد أن فكر إبراهيم فيه أول مرة؟',
    demand: 'connect',
  },
  5: {
    en: 'Find Abraham’s first direct message to the people. What did he say about Allah before they answered by talking about their fathers?',
    ar: 'اعثر على أول رسالة مباشرة قالها إبراهيم لقومه. ماذا قال عن الله قبل أن يجيبوا بالحديث عن آبائهم؟',
    demand: 'identify',
  },
  11: {
    en: 'Return to the opening paragraph and identify the two people in Babylon who believed with Abraham.',
    ar: 'ارجع إلى الفقرة الأولى وحدد الشخصين في بابل اللذين آمنا مع إبراهيم.',
    demand: 'identify',
  },
  13: {
    en: 'Return to the moment under baby Ishmael’s feet. What appeared before more people came to the valley?',
    ar: 'ارجع إلى اللحظة عند قدمي الطفل إسماعيل. ماذا ظهر قبل أن يأتي مزيد من الناس إلى الوادي؟',
    demand: 'sequence',
  },
  14: {
    en: 'Read the short dialogue after Abraham says he needs help with an important job. How does Ishmael answer?',
    ar: 'اقرأ الحوار القصير بعد أن يقول إبراهيم إنه يحتاج إلى مساعدة في عمل مهم. كيف يجيب إسماعيل؟',
    demand: 'identify',
  },
};

export const applyAbrahamA2QuickFeedbackLock = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const spec = specs[chapter.chapterId];
  if (!spec) return chapter;
  const quickId = `abraham-a2-c${chapter.chapterId}-quick`;

  return {
    ...chapter,
    assessmentItems: chapter.assessmentItems.map(item => {
      if (item.id !== quickId) return item;
      const enExplanation = item.exercise.en.explanation || 'Your answer matches the chapter evidence.';
      const arExplanation = item.exercise.ar.explanation || 'إجابتك تطابق دليل الفصل.';
      return {
        ...item,
        exercise: {
          en: {
            ...item.exercise.en,
            feedback: {
              correct: `Correct. ${enExplanation}`,
              incorrect: spec.en,
            },
          },
          ar: {
            ...item.exercise.ar,
            feedback: {
              correct: `صحيح. ${arExplanation}`,
              incorrect: spec.ar,
            },
          },
        },
        quality: item.quality
          ? { ...item.quality, cognitiveDemand: spec.demand }
          : item.quality,
      };
    }),
  };
};
