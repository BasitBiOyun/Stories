import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter02: LearningBlueprintChapter = {
  chapterId: 2,
  objectives: [
    L('Explain that Allah gave Adam knowledge and taught him to think.', 'يشرح أن الله علّم آدم العلم والتفكير.'),
    L('Identify how the angels and Iblis reacted differently to Adam.', 'يحدد اختلاف موقف الملائكة وإبليس من آدم.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c2-respect-command', focus: 'direct',
      claim: L('Allah told the angels to show respect to Adam after giving him life.', 'أمر الله الملائكة أن يسجدوا لآدم تكريمًا واحترامًا بعد نفخ الروح فيه.'),
      evidence: L('show respect to him', 'فَاسْجُدوا لَهُ تَكْريمًا وَاحْتِرامًا'),
    },
    {
      id: 'adam-a2-c2-knowledge', focus: 'cause-result',
      claim: L('Adam could learn and understand because Allah gave him knowledge and taught him to think.', 'كان آدم يتعلم ويفهم لأن الله علّمه العلم والتفكير.'),
      evidence: L('Allah gave Adam knowledge and taught him to think', 'اللهَ عَلَّمَ آدَمَ الْعِلْمَ وَالتَّفْكِيرَ'),
    },
    {
      id: 'adam-a2-c2-angels', focus: 'character-action',
      claim: L('The angels admired and respected Adam.', 'أُعجبت الملائكة بآدم وسجدت له تكريمًا.'),
      evidence: L('They all admired him and respected him', 'فَأُعْجِبُوا بِهِ وَسَجَدُوا لَهُ تَكْريمًا'),
    },
    {
      id: 'adam-a2-c2-iblis-view', focus: 'comparison',
      claim: L('Iblis saw Adam as unimportant because Adam was created from clay.', 'رأى إبليس أن آدم غير مهم لأنه خُلق من التراب.'),
      evidence: L('Iblis thought Adam was an unimportant creature created from clay', 'إِبْلِيسُ يَرَى أَنَّ آدَمَ شَخْصٌ غَيْرُ مُهِمٍّ، لِأَنَّهُ خُلِقَ مِنَ التُّرَاب'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(2),
  assessmentItems: [
    {
      id: 'adam-a2-c2-quick', learningPointId: 'adam-a2-c2-knowledge', eligibleStages: ['quick'],
      exercise: fill(
        L('Which word completes the chapter sentence?', 'ما الكلمة التي تكمل جملة الفصل؟'),
        L('Allah gave Adam [blank] and taught him to think.', 'عَلَّمَ اللهُ آدَمَ [blank] وَالتَّفْكِيرَ.'),
        L('knowledge', 'الْعِلْمَ'),
        L('Allah gave Adam knowledge and taught him to think.', 'علّم الله آدم العلم والتفكير.'),
      ),
    },
    {
      id: 'adam-a2-c2-knowledge', learningPointId: 'adam-a2-c2-respect-command', eligibleStages: ['knowledge'],
      exercise: tap(
        L('What did Allah tell the angels to do after Adam was given life?', 'ماذا أمر الله الملائكة أن تفعل بعد نفخ الروح في آدم؟'),
        L('Show respect to Adam.', 'أن يسجدوا لآدم تكريمًا واحترامًا.'),
      ),
    },
    {
      id: 'adam-a2-c2-review', learningPointId: 'adam-a2-c2-angels', eligibleStages: ['review'],
      exercise: tf(
        L('The angels admired Adam and respected him.', 'أُعجبت الملائكة بآدم وسجدت له تكريمًا.'),
        true,
        L('The chapter says all the angels admired and respected Adam.', 'يقول الفصل إن الملائكة أُعجبت بآدم وسجدت له تكريمًا.'),
      ),
    },
    {
      id: 'adam-a2-c2-final', learningPointId: 'adam-a2-c2-iblis-view', eligibleStages: ['final'],
      exercise: mc(
        L('How did Iblis see Adam in this chapter?', 'كيف كان إبليس يرى آدم في هذا الفصل؟'),
        {
          en: ['As an unimportant creature created from clay', 'As a shepherd who cared for animals', 'As an angel who lived in the sky'],
          ar: ['شخصًا غير مهم خُلق من التراب', 'راعيًا يعتني بالحيوانات', 'مَلَكًا يعيش في السماء'],
        },
        0,
        L('Iblis thought Adam was unimportant because he was created from clay.', 'رأى إبليس أن آدم غير مهم لأنه خُلق من التراب.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('knowledge, respect, and the different reactions of the angels and Iblis', 'العلم والاحترام واختلاف موقف الملائكة وإبليس'),
    primaryQuestion: L('What did Allah give Adam that helped him learn and understand?', 'ماذا علّم الله آدم فساعده على التعلم والفهم؟'),
    secondQuestion: L('How were the angels’ reaction and Iblis’s reaction different?', 'كيف اختلف موقف الملائكة عن موقف إبليس؟'),
    grammar: L('Use because to connect a result with its reason: Adam was wiser because Allah gave him knowledge.', 'لاحظ «لِأَنَّ» لربط النتيجة بسببها: كان آدم أكثر علمًا لأن الله علّمه.'),
    pronunciation: L('Practise respect, wiser, knowledge, think, amazing, and understand.', 'تدرّب على نطق وَاحْتِرامًا، أَكْثَرَ عِلْمًا وَذَكَاءً، الْعِلْمَ، والتَّفْكِيرَ.'),
    fast: L('Write two sentences comparing the angels and Iblis using but.', 'اكتب جملتين تقارنان بين موقف الملائكة وإبليس مستخدمًا «لكن».'),
    support: L('Use the frames: “Allah gave Adam ___.” and “The angels ___ Adam.”', 'استخدم الإطارين: «علّم الله آدم ___.» و«أُعجبت الملائكة بـ ___.»'),
  }),
};
