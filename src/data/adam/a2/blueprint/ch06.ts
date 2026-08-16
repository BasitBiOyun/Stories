import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, guideBundle, matching, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter06: LearningBlueprintChapter = {
  chapterId: 6,
  objectives: [
    L('Identify what happened after Allah forgave Adam and Eve.', 'يحدد ما حدث بعد أن غفر الله لآدم وحواء.'),
    L('List responsibilities on Earth and recall what Iblis wanted people to forget.', 'يذكر بعض المسؤوليات في الأرض وما أراد إبليس أن ينساه الناس.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c6-forgiven-earth', focus: 'sequence',
      claim: L('Allah forgave Adam and Eve and put them on Earth to live there.', 'غفر الله لآدم وحواء وأنزلهما إلى الأرض ليعيشا فيها.'),
      evidence: L('Allah excused Adam and Eve and put them on earth to live there', 'غَفَرَ اللهُ لِآدَمَ وَحَوّاءَ، وَأَنْزَلَهُما إِلى الأَرْضِ لِيَعِيشا فيها'),
    },
    {
      id: 'adam-a2-c6-manage-earth', focus: 'direct',
      claim: L('Allah taught and gave Adam and Eve what they needed to manage Earth.', 'علّم الله آدم وحواء وأعطاهما ما يحتاجان إليه لإدارة الأرض.'),
      evidence: L('Allah taught and gave them everything to rule on earth', 'عَلَّمَهُما اللهُ كُلَّ شَيْءٍ يَحْتاجانِ إِلَيْهِ لِإِدارَةِ الأَرْضِ، وَأَعْطاهُما ما يَلْزَمُهُما'),
    },
    {
      id: 'adam-a2-c6-responsibilities', focus: 'direct',
      claim: L('Their responsibilities included protecting nature and helping the weak.', 'شملت مسؤولياتهما المحافظة على الطبيعة ومساعدة الضعفاء.'),
      evidence: L('protect the nature and help the weak', 'يَحافِظانِ عَلَى الطَّبيعَةِ، وَيُساعِدانِ الضُّعَفاءَ'),
    },
    {
      id: 'adam-a2-c6-iblis-goal', focus: 'motivation',
      claim: L('Iblis wanted people not to remember Allah in daily life.', 'أراد إبليس أن ينسى الناس الله في حياتهم اليومية.'),
      evidence: L('He wanted people not to remember Allah in their daily lives', 'كانَ يُريدُ أَنْ يَنْسى النّاسُ اللهَ في حَياتِهِمُ اليَوْمِيَّةِ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(6),
  assessmentItems: [
    {
      id: 'adam-a2-c6-quick', learningPointId: 'adam-a2-c6-forgiven-earth', eligibleStages: ['quick'],
      exercise: tap(
        L('What happened after Allah forgave Adam and Eve?', 'ماذا حدث بعد أن غفر الله لآدم وحواء؟'),
        L('Allah put them on Earth to live there.', 'أنزلهما الله إلى الأرض ليعيشا فيها.'),
      ),
    },
    {
      id: 'adam-a2-c6-knowledge', learningPointId: 'adam-a2-c6-manage-earth', eligibleStages: ['knowledge'],
      exercise: mc(
        L('What did Allah teach and give Adam and Eve for life on Earth?', 'ماذا علّم الله آدم وحواء وأعطاهما للحياة في الأرض؟'),
        {
          en: ['What they needed to manage Earth', 'A way to return to the one tree', 'A plan to live without work'],
          ar: ['ما يحتاجان إليه لإدارة الأرض', 'طريقة للعودة إلى الشجرة', 'خطة للعيش من دون عمل'],
        },
        0,
        L('Allah taught and gave them what they needed to manage Earth.', 'علّمهما الله وأعطاهما ما يحتاجان إليه لإدارة الأرض.'),
      ),
    },
    {
      id: 'adam-a2-c6-review', learningPointId: 'adam-a2-c6-iblis-goal', eligibleStages: ['review'],
      exercise: tf(
        L('Iblis wanted people not to remember Allah in their daily lives.', 'أراد إبليس أن ينسى الناس الله في حياتهم اليومية.'),
        true,
        L('The chapter states this as Iblis’s aim on Earth.', 'يذكر الفصل ذلك هدفًا لإبليس في الأرض.'),
      ),
    },
    {
      id: 'adam-a2-c6-final', learningPointId: 'adam-a2-c6-responsibilities', eligibleStages: ['final'],
      exercise: matching(
        L('Match the Earth responsibilities stated in the chapter.', 'صل المسؤوليات في الأرض بما يذكره الفصل.'),
        {
          en: [['Nature', 'protect it'], ['The weak', 'help them']],
          ar: [['الطبيعة', 'المحافظة عليها'], ['الضعفاء', 'مساعدتهم']],
        },
        L('The chapter says they would protect nature and help the weak.', 'يقول الفصل إنهما سيحافظان على الطبيعة ويساعدان الضعفاء.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('forgiveness, life on Earth, responsibility, and Iblis’s continuing aim', 'المغفرة والحياة في الأرض والمسؤولية واستمرار هدف إبليس'),
    primaryQuestion: L('What responsibilities on Earth are named in the chapter?', 'ما المسؤوليات التي يذكرها الفصل في الأرض؟'),
    secondQuestion: L('What did Iblis want people to forget in daily life?', 'ماذا أراد إبليس أن ينساه الناس في حياتهم اليومية؟'),
    grammar: L('Notice was/were going to for planned future actions: grow crops, build, protect, help.', 'لاحظ التعبير عن الأعمال المستقبلية المخطط لها: سيزرعان، سيبنيان، سيحافظان، سيساعدان.'),
    pronunciation: L('Practise crops, rule, planet, excused, protect, and weak.', 'تدرّب على نطق الزُّروعِ، لِإِدارَةِ، الأَرْضِ، غَفَرَ، الطَّبيعَةِ، والضُّعَفاءَ.'),
    fast: L('Make a four-item responsibility list using only actions stated in the chapter.', 'اكتب قائمة من أربع مسؤوليات مستخدمًا فقط الأعمال المذكورة في الفصل.'),
    support: L('Use: “On Earth, they were going to ___.”', 'استخدم: «في الأرض كانا سيقومان بـ ___.»'),
  }),
};
