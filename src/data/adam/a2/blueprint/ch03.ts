import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, guideBundle, matching, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter03: LearningBlueprintChapter = {
  chapterId: 3,
  objectives: [
    L('Identify why Iblis said he was better than Adam and why the chapter calls him arrogant.', 'يحدد لماذا قال إبليس إنه أفضل من آدم ولماذا يصفه الفصل بالتكبر.'),
    L('Explain the chapter’s message that useful knowledge, not origin, makes a person valuable.', 'يشرح رسالة الفصل بأن العلم النافع، لا الأصل، هو الذي يرفع قيمة الإنسان.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c3-origin', focus: 'comparison',
      claim: L('Iblis compared fire with Adam’s soil and said he was better.', 'قارن إبليس النار بطين آدم وقال إنه أفضل.'),
      evidence: L('You created me from fire, and You created Adam from soil', 'خَلَقْتَنِي مِنْ نَارٍ، وَخَلَقْتَ آدَمَ مِنْ طِينٍ'),
    },
    {
      id: 'adam-a2-c3-arrogance', focus: 'character-action',
      claim: L('Iblis was arrogant and thought he was more important than Adam.', 'كان إبليس متكبرًا وظن أنه أهم وأفضل من آدم.'),
      evidence: L('Iblis was arrogant', 'إِبْلِيسُ كَانَ مُتَكَبِّرًا'),
    },
    {
      id: 'adam-a2-c3-useful-knowledge', focus: 'cause-result',
      claim: L('Useful knowledge makes people great because it helps them do good and stop bad.', 'العلم النافع يرفع الإنسان لأنه يساعده على فعل الخير ومنع الشر.'),
      evidence: L('useful knowledge makes people great', 'الْعِلْمَ النَّافِعَ يَرْفَعُ الإِنْسَانَ'),
    },
    {
      id: 'adam-a2-c3-sent-away', focus: 'sequence',
      claim: L('Allah told Iblis to go away after he continued saying he was right.', 'قال الله لإبليس أن يخرج بعدما استمر في القول إنه محق.'),
      evidence: L('Go away! You are far from My love and care', 'اُخْرُجْ مِنْ هُنَا! إِنَّكَ بَعِيدٌ جِدًّا عَنْ مَحَبَّتِي وَرَحْمَتِي'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(3),
  assessmentItems: [
    {
      id: 'adam-a2-c3-quick', learningPointId: 'adam-a2-c3-origin', eligibleStages: ['quick'],
      exercise: matching(
        L('Match Adam and Iblis with what the chapter says about their origin.', 'صل آدم وإبليس بما يذكره الفصل عن أصل كل واحد.'),
        {
          en: [['Iblis', 'fire'], ['Adam', 'soil']],
          ar: [['إبليس', 'نار'], ['آدم', 'طين']],
        },
        L('Iblis said he was created from fire and Adam was created from soil/clay.', 'قال إبليس إنه خُلق من نار وإن آدم خُلق من طين.'),
      ),
    },
    {
      id: 'adam-a2-c3-knowledge', learningPointId: 'adam-a2-c3-arrogance', eligibleStages: ['knowledge'],
      exercise: tf(
        L('Iblis was arrogant and thought he was more important than Adam.', 'كان إبليس متكبرًا وظن أنه أهم من آدم.'),
        true,
        L('The chapter directly describes Iblis as arrogant.', 'يصف الفصل إبليس مباشرة بأنه متكبر.'),
      ),
    },
    {
      id: 'adam-a2-c3-review', learningPointId: 'adam-a2-c3-useful-knowledge', eligibleStages: ['review'],
      exercise: mc(
        L('According to the chapter, what can useful knowledge help people do?', 'بحسب الفصل، ماذا يساعد العلم النافع الناس على أن يفعلوا؟'),
        {
          en: ['Do good and stop bad', 'Become made from fire', 'Live without learning'],
          ar: ['يفعلوا الخير ويمنعوا الشر', 'يصبحوا مخلوقين من نار', 'يعيشوا من دون تعلم'],
        },
        0,
        L('The chapter says useful knowledge helps humans do good and stop bad.', 'يقول الفصل إن العلم النافع يساعد الإنسان على فعل الخير ومنع الشر.'),
      ),
    },
    {
      id: 'adam-a2-c3-final', learningPointId: 'adam-a2-c3-sent-away', eligibleStages: ['final'],
      exercise: tap(
        L('What did Allah tell Iblis after he continued saying he was right?', 'ماذا قال الله لإبليس بعدما استمر في القول إنه محق؟'),
        L('Go away; you are far from My love and care.', 'اخرج من هنا؛ إنك بعيد عن محبتي ورحمتي.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('Iblis’s comparison, arrogance, and the chapter’s explanation of real value', 'مقارنة إبليس وتكبره وشرح الفصل للقيمة الحقيقية'),
    primaryQuestion: L('Why did Iblis say he was better than Adam?', 'لماذا قال إبليس إنه أفضل من آدم؟'),
    secondQuestion: L('What does the chapter say makes a person great?', 'ماذا يقول الفصل عن الشيء الذي يرفع الإنسان؟'),
    grammar: L('Practise comparatives: better, more important, more valuable; connect reasons with because.', 'تدرّب على ألفاظ المقارنة: أَفْضَل، أَهَمّ، أَكْثَر قِيمَةً، وعلى «لأن» لذكر السبب.'),
    pronunciation: L('Practise arrogant, valuable, creature, fire, and clay.', 'تدرّب على نطق مُتَكَبِّرًا، قِيمَةً، مَخْلُوقًا، نَارٍ، وطِينٍ.'),
    fast: L('Write one sentence about Iblis’s claim and one sentence about the chapter’s answer to that claim.', 'اكتب جملة عن ادعاء إبليس وجملة عن رد الفكرة التي يقدمها الفصل.'),
    support: L('Use: “Iblis said ___ was better, but the chapter says ___ is valuable.”', 'استخدم: «قال إبليس إن ___ أفضل، لكن الفصل يقول إن ___ يرفع الإنسان.»'),
  }),
};
