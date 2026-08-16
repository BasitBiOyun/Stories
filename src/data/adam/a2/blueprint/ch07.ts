import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter07: LearningBlueprintChapter = {
  chapterId: 7,
  objectives: [
    L('Identify Adam as the first Messenger in the chapter and recall what he taught people.', 'يحدد آدم بوصفه أول رسول في الفصل ويتذكر ما علّمه للناس.'),
    L('Recall how Adam and Eve taught and warned their children.', 'يتذكر كيف علّم آدم وحواء أولادهما وحذّراهم.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c7-children', focus: 'direct',
      claim: L('Adam and Eve had many children.', 'رُزق آدم وحواء أولادًا كثيرين.'),
      evidence: L('They also had lots of children', 'وَرُزِقا أَوْلادًا كَثيرينَ'),
    },
    {
      id: 'adam-a2-c7-first-messenger', focus: 'direct',
      claim: L('Allah made Adam His first Messenger.', 'جعل الله آدم أول رسول له.'),
      evidence: L('Allah made Adam His first Messenger', 'جَعَلَ اللهُ آدَمَ أَوَّلَ رَسولٍ لَهُ'),
    },
    {
      id: 'adam-a2-c7-teaching', focus: 'direct',
      claim: L('Adam taught people to be honest, do good, stop bad, and remember Allah.', 'علّم آدم الناس أن يكونوا صادقين ويفعلوا الخير ويمنعوا الشر ويذكروا الله.'),
      evidence: L('He started teaching people to be honest, do good, stop bad and always remember Allah', 'فَبَدَأَ يُعَلِّمُ النَّاسَ أَنْ يَكُونُوا صَادِقِينَ، وَأَنْ يَفْعَلُوا الْخَيْرَ، وَأَنْ يَمْنَعُوا الشَّرَّ وَأَنْ يَذْكُرُوا اللهَ دَائِمًا'),
    },
    {
      id: 'adam-a2-c7-enemy', focus: 'direct',
      claim: L('Adam and Eve warned their children that Iblis was their enemy, not their friend.', 'حذّر آدم وحواء أولادهما من إبليس لأنه عدو وليس صديقًا.'),
      evidence: L('Iblis was their enemy, not their friend', 'إِبْليسَ لَيْسَ صَديقًا لَهُمْ بَلْ هُوَ عَدُوٌّ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(7),
  assessmentItems: [
    {
      id: 'adam-a2-c7-quick', learningPointId: 'adam-a2-c7-teaching', eligibleStages: ['quick'],
      exercise: fill(
        L('Complete one of Adam’s teachings from the chapter.', 'أكمل أحد تعاليم آدم في الفصل.'),
        L('He started teaching people to be [blank], do good, stop bad and always remember Allah.', 'فَبَدَأَ يُعَلِّمُ النَّاسَ أَنْ يَكُونُوا [blank]، وَأَنْ يَفْعَلُوا الْخَيْرَ، وَأَنْ يَمْنَعُوا الشَّرَّ وَأَنْ يَذْكُرُوا اللهَ دَائِمًا.'),
        L('honest', 'صَادِقِينَ'),
        L('Adam taught people to be honest, do good, stop bad, and remember Allah.', 'علّم آدم الناس أن يكونوا صادقين ويفعلوا الخير ويمنعوا الشر ويذكروا الله.'),
      ),
    },
    {
      id: 'adam-a2-c7-knowledge', learningPointId: 'adam-a2-c7-first-messenger', eligibleStages: ['knowledge'],
      exercise: tf(
        L('Allah made Adam His first Messenger.', 'جعل الله آدم أول رسول له.'),
        true,
        L('The chapter states that Allah made Adam His first Messenger.', 'يذكر الفصل أن الله جعل آدم أول رسول له.'),
      ),
    },
    {
      id: 'adam-a2-c7-review', learningPointId: 'adam-a2-c7-enemy', eligibleStages: ['review'],
      exercise: mc(
        L('How did Adam and Eve describe Iblis to their children?', 'كيف وصف آدم وحواء إبليس لأولادهما؟'),
        {
          en: ['Their enemy, not their friend', 'Their teacher and helper', 'One of their children'],
          ar: ['عدوهم وليس صديقهم', 'معلمهم ومساعدهم', 'واحدًا من أولادهم'],
        },
        0,
        L('They warned their children that Iblis was their enemy, not their friend.', 'حذّرا أولادهما من إبليس لأنه عدو وليس صديقًا.'),
      ),
    },
    {
      id: 'adam-a2-c7-final', learningPointId: 'adam-a2-c7-children', eligibleStages: ['final'],
      exercise: tap(
        L('What does the chapter say about Adam and Eve’s family?', 'ماذا يقول الفصل عن أسرة آدم وحواء؟'),
        L('They had many children.', 'رُزقا أولادًا كثيرين.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('Adam’s role as the first Messenger and the teachings given to the first family', 'دور آدم كأول رسول والتعاليم التي قدمها للأسرة الأولى'),
    primaryQuestion: L('What four things did Adam start teaching people?', 'ما الأمور الأربعة التي بدأ آدم يعلمها للناس؟'),
    secondQuestion: L('What warning did Adam and Eve give their children about Iblis?', 'بماذا حذّر آدم وحواء أولادهما من إبليس؟'),
    grammar: L('Notice teach + person + to + verb: taught their children to behave; started teaching people to be honest.', 'لاحظ «علّم + الشخص + أن + الفعل»: علّم أولادهما أن يُحسنوا، وعلّم الناس أن يكونوا صادقين.'),
    pronunciation: L('Practise honest, behave, enemy, remember, messenger, and children.', 'تدرّب على نطق صَادِقِينَ، يُحْسِنوا، عَدُوٌّ، يَذْكُرُوا، رَسول، وأَوْلاد.'),
    fast: L('Write a four-line “Adam taught people to…” list using only the chapter.', 'اكتب أربع جمل تبدأ بـ«علّم آدم الناس أن...» مستخدمًا الفصل فقط.'),
    support: L('Use: “Adam taught people to ___.” and “Iblis was their ___.”', 'استخدم: «علّم آدم الناس أن ___.» و«كان إبليس ___.»'),
  }),
};
