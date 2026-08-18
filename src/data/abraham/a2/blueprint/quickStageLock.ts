import type { LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';
import { L, mc, tap } from '../../a2BlueprintAuthoring';

const T = (en: string, ar: string): LocalizedText => L(en, ar);

const replacements = {
  3: {
    learningPointId: 'abraham-a2-c3-star',
    exercise: tap(
      T('What happened to the bright star that made Abraham reject it as his Lord?', 'ما الذي حدث للكوكب المضيء وجعل إبراهيم لا يقبله ربًا؟'),
      T('It disappeared.', 'غاب.'),
      T('When the star disappeared, Abraham said he would not show respect to something that sets and disappears.', 'لما غاب الكوكب قال إبراهيم إنه لا يقبل ما يغيب ويأفل.'),
    ),
  },
  5: {
    learningPointId: 'abraham-a2-c5-message',
    exercise: mc(
      T('What central message did Abraham give his people?', 'ما الرسالة الأساسية التي بلغها إبراهيم لقومه؟'),
      {
        en: ['Allah is the one and only God', 'The idols will become stronger', 'People should follow every old habit'],
        ar: ['الله هو الإله الواحد', 'ستصبح الأصنام أقوى', 'يجب على الناس اتباع كل عادة قديمة'],
      },
      0,
      T('Abraham told the people that he believed in Allah and that Allah is the one and only God.', 'قال إبراهيم لقومه إنه يؤمن بالله وإن الله هو الإله الواحد.'),
    ),
  },
  11: {
    learningPointId: 'abraham-a2-c11-believers',
    exercise: mc(
      T('What was different about Sarah and Lot from most people in Babylon?', 'بماذا اختلفت سارة ولوط عن معظم أهل بابل؟'),
      {
        en: ['They believed in Allah with Abraham', 'They made the stone idols', 'They asked Nimrod to build the Ka’ba'],
        ar: ['آمنا بالله مع إبراهيم', 'صنعا الأصنام الحجرية', 'طلبا من نمرود بناء الكعبة'],
      },
      0,
      T('The chapter names Sarah and Lot as the woman and man who believed with Abraham in Babylon.', 'يسمي الفصل سارة ولوط بوصفهما المرأة والرجل اللذين آمنا مع إبراهيم في بابل.'),
    ),
  },
  13: {
    learningPointId: 'abraham-a2-c13-water',
    exercise: mc(
      T('What new event changed the situation in the dry valley?', 'ما الحدث الجديد الذي غير الموقف في الوادي الجاف؟'),
      {
        en: ['Water came from the ground under Ishmael’s feet', 'A river arrived from Babylon', 'Nimrod sent food to the valley'],
        ar: ['خرج الماء من الأرض تحت قدمي إسماعيل', 'وصل نهر من بابل', 'أرسل نمرود الطعام إلى الوادي'],
      },
      0,
      T('Zamzam water suddenly came from the ground under Ishmael’s feet.', 'خرج ماء زمزم فجأة من الأرض تحت قدمي إسماعيل.'),
    ),
  },
  14: {
    learningPointId: 'abraham-a2-c14-ishmael',
    exercise: mc(
      T('How did Ishmael respond when Abraham said he needed help with the important job?', 'كيف رد إسماعيل عندما قال إبراهيم إنه يحتاج إلى مساعدته في المهمة المهمة؟'),
      {
        en: ['He said he would help for sure', 'He said he would return to Babylon', 'He said Nimrod should do the work'],
        ar: ['قال إنه سيساعده بالتأكيد', 'قال إنه سيعود إلى بابل', 'قال إن نمرود يجب أن يقوم بالعمل'],
      },
      0,
      T('Ishmael answered, “I will help you for sure.”', 'أجاب إسماعيل بأنه سيساعد إبراهيم بالتأكيد.'),
    ),
  },
} as const;

export const applyAbrahamA2QuickStageLock = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const replacement = replacements[chapter.chapterId as keyof typeof replacements];
  if (!replacement) return chapter;

  return {
    ...chapter,
    assessmentItems: chapter.assessmentItems.map(item => item.id === `abraham-a2-c${chapter.chapterId}-quick`
      ? {
          ...item,
          learningPointId: replacement.learningPointId,
          learningOutcomeId: chapter.evidencePoints.find(point => point.id === replacement.learningPointId)?.learningOutcomeId,
          exercise: replacement.exercise,
        }
      : item),
  };
};
