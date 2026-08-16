import { defineLearningBlueprint, type BlueprintStage, type LearningBlueprintChapter } from '../../learningBlueprint';
import { L, mc } from './blueprint/helpers';
import { mosesA2Chapters01to04 } from './blueprint/chapters01to04';
import { mosesA2Chapters05to08 } from './blueprint/chapters05to08';
import { mosesA2Chapters09to12 } from './blueprint/chapters09to12';
import { mosesA2Chapters13to16 } from './blueprint/chapters13to16';

/**
 * Final whole-book semantic pass.
 *
 * The Moses narrative intentionally repeats some signs in Chapters 10–13.
 * The story keeps that repetition, but the assessment path should not keep
 * asking the learner to identify the same stick/hand transformation again.
 */
const applyCrossChapterAssessmentDiversity = (chapters: LearningBlueprintChapter[]) => chapters.map((chapter) => {
  if (chapter.chapterId === 12) {
    return {
      ...chapter,
      objectives: [
        L('Identify Moses’s message to Pharaoh and Pharaoh’s first reaction before the signs.', 'يحدد رسالة موسى لفرعون ورد فرعون الأول قبل ظهور الآيات.'),
        L('Explain how Pharaoh later described the signs instead of believing.', 'يشرح كيف وصف فرعون الآيات بعد ذلك بدل الإيمان.'),
      ],
      evidencePoints: chapter.evidencePoints.map(point => point.id === 'moses-a2-c12-signs'
        ? {
            id: 'moses-a2-c12-crazy',
            focus: 'character-action' as const,
            claim: L('Before Moses showed the signs, Pharaoh thought Moses was crazy.', 'قبل أن يظهر موسى الآيات ظن فرعون أن موسى مجنون.'),
            evidence: L('He thought Moses was crazy', 'وَظَنَّ أَنَّ مُوسَى مَجْنُونٌ'),
          }
        : point),
      assessmentItems: chapter.assessmentItems.map(item => item.id === 'moses-a2-c12-quick'
        ? {
            ...item,
            learningPointId: 'moses-a2-c12-crazy',
            exercise: mc(
              L('What did Pharaoh think about Moses before Moses showed the signs?', 'ماذا ظن فرعون بموسى قبل أن يظهر موسى الآيات؟'),
              {
                en: ['He thought Moses was crazy', 'He thought Moses was the king', 'He thought Moses was a shepherd from his army'],
                ar: ['ظن أن موسى مجنون', 'ظن أن موسى هو الملك', 'ظن أن موسى راعٍ من جيشه'],
              },
              0,
              L('The chapter says Pharaoh thought Moses was crazy before Moses showed the signs.', 'يقول الفصل إن فرعون ظن أن موسى مجنون قبل أن يظهر الآيات.'),
            ),
          }
        : item),
    };
  }

  if (chapter.chapterId === 13) {
    return {
      ...chapter,
      evidencePoints: chapter.evidencePoints.map(point => point.id === 'moses-a2-c13-snake'
        ? {
            id: 'moses-a2-c13-swallowed',
            focus: 'sequence' as const,
            claim: L('The huge snake swallowed what the magicians had made.', 'ابتلع الثعبان الضخم ما صنعه السحرة.'),
            evidence: L('His stick quickly ate all the snakes of the magicians', 'وَسُرْعَانَ مَا ابْتَلَعَتْ مَا صَنَعَهُ السَّحَرَةُ'),
          }
        : point),
      assessmentItems: chapter.assessmentItems.map(item => item.id === 'moses-a2-c13-knowledge'
        ? {
            ...item,
            learningPointId: 'moses-a2-c13-swallowed',
            exercise: mc(
              L('What happened to what the magicians had made?', 'ماذا حدث لما صنعه السحرة؟'),
              {
                en: ['The huge snake swallowed it', 'It opened the Red Sea', 'It became a palace'],
                ar: ['ابتلعه الثعبان الضخم', 'فتح البحر الأحمر', 'تحول إلى قصر'],
              },
              0,
              L('The chapter says the huge snake swallowed what the magicians had made.', 'يقول الفصل إن الثعبان الضخم ابتلع ما صنعه السحرة.'),
            ),
          }
        : item),
    };
  }

  return chapter;
});

const STAGE_CHAPTER_PLAN: Record<Exclude<BlueprintStage, 'quick'>, ReadonlySet<number>> = {
  knowledge: new Set([1, 3, 5, 7, 10, 12, 14, 15]),
  review: new Set([2, 4, 6, 8, 9, 11, 13, 16]),
  final: new Set([1, 2, 4, 6, 8, 9, 11, 12, 15, 16]),
};

/**
 * Moses A2 is longer than the ten-chapter pilot. Keep one Quick activity in
 * every chapter, then explicitly distribute the whole-book stages so early
 * chapters cannot crowd out the middle and ending of the story.
 */
const applyWholeBookStageCoverage = (chapters: LearningBlueprintChapter[]) => chapters.map(chapter => ({
  ...chapter,
  assessmentItems: chapter.assessmentItems.filter(item => {
    const stage = item.eligibleStages[0];
    if (!stage) return false;
    if (stage === 'quick') return true;
    return STAGE_CHAPTER_PLAN[stage].has(chapter.chapterId);
  }),
}));

const chapters = applyWholeBookStageCoverage(applyCrossChapterAssessmentDiversity([
  ...mosesA2Chapters01to04,
  ...mosesA2Chapters05to08,
  ...mosesA2Chapters09to12,
  ...mosesA2Chapters13to16,
]));

export const mosesA2LearningBlueprint = defineLearningBlueprint({
  id: 'moses-a2',
  version: '1.0.2',
  storyId: 'moses',
  level: 'A2',
  status: 'pedagogy-reviewed',
  chapters,
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Knowledge Check: Moses (pbuh)', ar: 'اختبار المعرفة: موسى عليه السلام' },
      content: {
        en: 'Check eight different ideas distributed across the whole story. Each question targets a learning point that is not used in the Quick Challenges, Review, or Final Challenge.',
        ar: 'تحقق من ثماني أفكار موزعة على القصة كلها. كل سؤال يقيس نقطة تعلم لا تتكرر في التحديات السريعة أو المراجعة أو التحدي النهائي.',
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
        en: 'Review eight different story ideas from chapters not used in the Knowledge Check.',
        ar: 'راجع ثماني أفكار مختلفة من فصول لا يستخدمها اختبار المعرفة.',
      },
    },
    finalChallenge: {
      title: { en: 'Final Challenge: Moses (pbuh)', ar: 'التحدي النهائي: موسى عليه السلام' },
      content: {
        en: 'Complete ten final activities distributed across the beginning, middle, and end of the story. The final uses multiple-choice, true/false, matching, and fill-blanks without Tap-Reveal.',
        ar: 'أكمل عشرة أنشطة نهائية موزعة على بداية القصة ووسطها ونهايتها. يستخدم التحدي النهائي الاختيار من متعدد والصحيح والخطأ والمطابقة وإكمال الفراغات دون أنشطة الكشف بالنقر.',
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
