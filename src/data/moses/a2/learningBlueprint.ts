import { defineLearningBlueprint, type BlueprintStage, type LearningBlueprintChapter } from '../../learningBlueprint';
import { L, mc } from './blueprint/helpers';
import { mosesA2Chapters01to04 } from './blueprint/chapters01to04';
import { mosesA2Chapters05to08 } from './blueprint/chapters05to08';
import { mosesA2Chapters09to12 } from './blueprint/chapters09to12';
import { mosesA2Chapters13to16 } from './blueprint/chapters13to16';
import { applyMosesA2FinalPedagogy } from './blueprint/finalPedagogy';
import { upgradeMosesA2ChapterToGoldV2 } from './blueprint/goldV2';

/**
 * The signs intentionally recur in Chapters 10–13. Keep that narrative
 * repetition, but prevent the supporting assessment pool from asking the same
 * transformation in every stage.
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
                en: ['The huge snake swallowed it', 'It opened the sea', 'It became a palace'],
                ar: ['ابتلعه الثعبان الضخم', 'فتح البحر', 'تحول إلى قصر'],
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
]))
  .map(upgradeMosesA2ChapterToGoldV2)
  .map(applyMosesA2FinalPedagogy);

export const mosesA2LearningBlueprint = defineLearningBlueprint({
  id: 'moses-a2',
  version: '2.1.0',
  storyId: 'moses',
  level: 'A2',
  status: 'pedagogy-reviewed',
  chapters,
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Moses A2 Knowledge Check', ar: 'اختبار الفهم — موسى A2' },
      content: {
        en: 'Use story evidence to answer eight questions from across the sixteen chapters. Each question checks a different important idea.',
        ar: 'استخدم أدلة من القصة للإجابة عن ثمانية أسئلة من الفصول الستة عشر. يقيس كل سؤال فكرة مهمة مختلفة.',
      },
    },
    vocabularyChallenge: {
      title: { en: 'Moses A2 Vocabulary Challenge', ar: 'تحدي المفردات — موسى A2' },
      content: {
        en: 'Match six carefully selected story words with their meanings in context.',
        ar: 'صل ست كلمات منتقاة بعناية من القصة بمعانيها في السياق.',
      },
    },
    review: {
      title: { en: 'Moses A2 Retrieval Review', ar: 'مراجعة الاسترجاع — موسى A2' },
      content: {
        en: 'Use sequencing, matching, reflection, and an eight-question retrieval game to reconnect the main story ideas before the Final Challenge.',
        ar: 'استخدم ترتيب الأحداث والمطابقة والتأمل ولعبة استرجاع من ثمانية أسئلة لربط أفكار القصة الرئيسة قبل التحدي النهائي.',
      },
    },
    finalChallenge: {
      title: { en: 'Moses A2 Final Challenge', ar: 'التحدي النهائي — موسى A2' },
      content: {
        en: 'Complete ten final activities about causes, choices, responses, turning points, and lessons from the beginning, middle, and end of the story—not random details.',
        ar: 'أكمل عشرة أنشطة نهائية عن الأسباب والاختيارات وردود الأفعال ونقاط التحول والدروس من بداية القصة ووسطها ونهايتها، لا التفاصيل العشوائية.',
      },
    },
    glossary: [
      {
        title: { en: 'Moses A2 Master Glossary — Chapters 1–8', ar: 'المعجم الشامل — موسى A2 — الفصول 1–8' },
        content: { en: 'All reviewed Word Notes from Chapters 1–8.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 1–8.' },
      },
      {
        title: { en: 'Moses A2 Master Glossary — Chapters 9–16', ar: 'المعجم الشامل — موسى A2 — الفصول 9–16' },
        content: { en: 'All reviewed Word Notes from Chapters 9–16.', ar: 'جميع ملاحظات المفردات المراجعة من الفصول 9–16.' },
      },
    ],
  },
});