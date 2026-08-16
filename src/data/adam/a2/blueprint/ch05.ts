import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, guideBundle, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter05: LearningBlueprintChapter = {
  chapterId: 5,
  objectives: [
    L('Identify Iblis’s lie and what Adam and Eve did after believing it.', 'يحدد كذبة إبليس وما فعله آدم وحواء بعد تصديقها.'),
    L('Distinguish Adam and Eve’s response to their mistake from Iblis’s response to being wrong.', 'يميز بين موقف آدم وحواء من خطئهما وموقف إبليس من خطئه.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c5-friend-lie', focus: 'direct',
      claim: L('Iblis said he was their friend, but the chapter calls this a big lie.', 'قال إبليس إنه صديقهما، لكن الفصل يصف ذلك بأنه كذب كبير.'),
      evidence: L('told them he was their friend. It was a big lie', 'قالَ إِنَّهُ صَديقُهُما. وَكانَ ذلِكَ كَذِبًا كَبيرًا'),
    },
    {
      id: 'adam-a2-c5-never-die', focus: 'direct',
      claim: L('Iblis told Adam and Eve they would never die if they ate from the tree.', 'قال إبليس لآدم وحواء إنهما لن يموتا إذا أكلا من الشجرة.'),
      evidence: L('If you eat from that one tree, you will never die', 'إِذا أَكَلْتُما مِنْ ثَمَرِ تِلْكَ الشَّجَرَةِ، فَلَنْ تَموتا أَبَدًا'),
    },
    {
      id: 'adam-a2-c5-not-purpose', focus: 'character-action',
      claim: L('Adam and Eve made a mistake, but it was not on purpose.', 'وقع آدم وحواء في الخطأ، لكنهما لم يقصدا عصيان الله.'),
      evidence: L('They made a mistake, but it wasn’t on purpose', 'وَقَعَا فِي الْخَطَأِ، لَكِنَّهُمَا لَمْ يَقْصِدَا عِصْيَانَ اللهِ'),
    },
    {
      id: 'adam-a2-c5-learned', focus: 'sequence',
      claim: L('Adam and Eve learned from the mistake and decided not to repeat it.', 'تعلم آدم وحواء من الخطأ وقررا ألا يكرراه.'),
      evidence: L('They learned from their mistake and decided never to repeat it', 'تَعَلَّمَا مِنَ الْخَطَأِ. وَقَرَّرا أَنْ لا يُكَرِّراهُ أَبَدًا'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(5),
  assessmentItems: [
    {
      id: 'adam-a2-c5-quick', learningPointId: 'adam-a2-c5-not-purpose', eligibleStages: ['quick'],
      exercise: tf(
        L('Adam and Eve made their mistake on purpose.', 'كان خطأ آدم وحواء مقصودًا.'),
        false,
        L('The chapter says they made a mistake, but it was not on purpose.', 'يقول الفصل إنهما وقعا في الخطأ، لكنهما لم يقصدا عصيان الله.'),
      ),
    },
    {
      id: 'adam-a2-c5-knowledge', learningPointId: 'adam-a2-c5-never-die', eligibleStages: ['knowledge'],
      exercise: tap(
        L('What did Iblis say would happen if Adam and Eve ate from the tree?', 'ماذا قال إبليس إنّه سيحدث إذا أكل آدم وحواء من الشجرة؟'),
        L('He said they would never die.', 'قال إنهما لن يموتا أبدًا.'),
      ),
    },
    {
      id: 'adam-a2-c5-review', learningPointId: 'adam-a2-c5-friend-lie', eligibleStages: ['review'],
      exercise: mc(
        L('What did Iblis tell Adam and Eve about himself?', 'ماذا قال إبليس لآدم وحواء عن نفسه؟'),
        {
          en: ['He was their friend', 'He was their son', 'He was their teacher'],
          ar: ['إنه صديقهما', 'إنه ابنهما', 'إنه معلمهما'],
        },
        0,
        L('Iblis said he was their friend, and the chapter says this was a big lie.', 'قال إبليس إنه صديقهما، ويقول الفصل إن ذلك كان كذبًا كبيرًا.'),
      ),
    },
    {
      id: 'adam-a2-c5-final', learningPointId: 'adam-a2-c5-learned', eligibleStages: ['final'],
      exercise: mc(
        L('What did Adam and Eve do after they understood their mistake?', 'ماذا فعل آدم وحواء بعد أن أدركا خطأهما؟'),
        {
          en: ['They learned from it and decided not to repeat it', 'They said they were right', 'They forgot the mistake immediately'],
          ar: ['تعلما منه وقررا ألا يكرراه', 'قالا إنهما على صواب', 'نسيا الخطأ فورًا'],
        },
        0,
        L('They learned from their mistake and decided never to repeat it.', 'تعلما من الخطأ وقررا ألا يكرراه أبدًا.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('Iblis’s lie, the mistake, and the different responses to being wrong', 'كذبة إبليس والخطأ واختلاف الموقف من الوقوع في الخطأ'),
    primaryQuestion: L('What lie did Iblis tell Adam and Eve?', 'ما الكذبة التي قالها إبليس لآدم وحواء؟'),
    secondQuestion: L('What did Adam and Eve do after their mistake?', 'ماذا فعل آدم وحواء بعد خطئهما؟'),
    grammar: L('Notice if + will for the lie and past simple for the events that followed.', 'لاحظ «إذا ... فلن» في كلام إبليس، ثم أفعال الماضي في الأحداث التالية.'),
    pronunciation: L('Practise forgetful, mistake, very sad, superior, and on purpose.', 'تدرّب على نطق نَسِيًّا، الْخَطَأِ، حَزِنَا كَثِيرًا، أَفْضَلُ، ويَقْصِدَا.'),
    fast: L('Write two short sentences: one about the lie and one about what Adam and Eve learned.', 'اكتب جملتين قصيرتين: واحدة عن الكذبة وأخرى عما تعلمه آدم وحواء.'),
    support: L('Use: “Iblis said ___.” and “Adam and Eve learned ___.”', 'استخدم: «قال إبليس ___.» و«تعلم آدم وحواء ___.»'),
  }),
};
