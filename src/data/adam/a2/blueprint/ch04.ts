import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, mc, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter04: LearningBlueprintChapter = {
  chapterId: 4,
  objectives: [
    L('Identify Allah’s warning about Iblis and the one tree in Paradise.', 'يحدد تحذير الله من إبليس والتحذير المتعلق بالشجرة الواحدة في الجنة.'),
    L('Explain why Eve was created for Adam according to the chapter.', 'يشرح لماذا خُلقت حواء لآدم بحسب الفصل.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c4-iblis-anger', focus: 'motivation',
      claim: L('Iblis was angry with Adam and hated him.', 'كان إبليس غاضبًا من آدم ويكرهه.'),
      evidence: L('Iblis got angry with Adam and hated him', 'كَانَ إِبْلِيسُ غَاضِبًا مِنْ آدَمَ وَيَكْرَهُهُ كَثِيرًا'),
    },
    {
      id: 'adam-a2-c4-warning-iblis', focus: 'direct',
      claim: L('Allah told Adam to be careful about Iblis.', 'حذّر الله آدم من إبليس وقال له أن يكون حذرًا.'),
      evidence: L('Allah told Adam to be careful about Iblis', 'حَذَّرَ اللهُ آدَمَ مِنْ إِبْلِيسَ وَقَالَ لَهُ أَنْ يَكُونَ حَذِرًا'),
    },
    {
      id: 'adam-a2-c4-eve', focus: 'cause-result',
      claim: L('Adam felt lonely, so Allah gave him a wife named Eve.', 'شعر آدم بالوحدة فخلق الله له زوجة اسمها حواء.'),
      evidence: L('Adam started to feel lonely in Paradise. So, Allah gave him a wife', 'شَعَرَ آدَمُ بِالْوَحْدَةِ فِي الْجَنَّةِ. فَخَلَقَ اللهُ لَهُ زَوْجَةً اسْمُهَا حَوَّاءُ'),
    },
    {
      id: 'adam-a2-c4-tree', focus: 'direct',
      claim: L('Allah told Adam and Eve not to go near one tree.', 'قال الله لآدم وحواء ألا يقتربا من شجرة واحدة.'),
      evidence: L('HE told Adam and Eve not to go near one tree', 'لَا تَقْرَبَا هَذِهِ الشَّجَرَةَ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(4),
  assessmentItems: [
    {
      id: 'adam-a2-c4-quick', learningPointId: 'adam-a2-c4-tree', eligibleStages: ['quick'],
      exercise: mc(
        L('What was the one warning Allah gave Adam and Eve in Paradise?', 'ما التحذير المتعلق بالشجرة الذي أعطاه الله لآدم وحواء في الجنة؟'),
        {
          en: ['Do not go near one tree', 'Do not speak to each other', 'Do not walk in Paradise'],
          ar: ['لا تقتربا من شجرة واحدة', 'لا تتحدثا معًا', 'لا تمشيا في الجنة'],
        },
        0,
        L('Allah told Adam and Eve not to go near one tree.', 'قال الله لهما: لا تقربا هذه الشجرة.'),
      ),
    },
    {
      id: 'adam-a2-c4-knowledge', learningPointId: 'adam-a2-c4-eve', eligibleStages: ['knowledge'],
      exercise: mc(
        L('Why did Allah give Adam a wife in the chapter?', 'لماذا خلق الله لآدم زوجة في هذا الفصل؟'),
        {
          en: ['Adam felt lonely', 'Adam wanted to leave Paradise', 'The angels asked for a new person'],
          ar: ['لأن آدم شعر بالوحدة', 'لأن آدم أراد مغادرة الجنة', 'لأن الملائكة طلبت شخصًا جديدًا'],
        },
        0,
        L('Adam felt lonely, so Allah gave him a wife named Eve.', 'شعر آدم بالوحدة فخلق الله له زوجة اسمها حواء.'),
      ),
    },
    {
      id: 'adam-a2-c4-review', learningPointId: 'adam-a2-c4-warning-iblis', eligibleStages: ['review'],
      exercise: tf(
        L('Allah warned Adam to be careful about Iblis.', 'حذّر الله آدم من إبليس وقال له أن يكون حذرًا.'),
        true,
        L('The chapter directly says Allah told Adam to be careful about Iblis.', 'يقول الفصل مباشرة إن الله حذّر آدم من إبليس.'),
      ),
    },
    {
      id: 'adam-a2-c4-final', learningPointId: 'adam-a2-c4-iblis-anger', eligibleStages: ['final'],
      exercise: fill(
        L('Complete the chapter detail about Iblis.', 'أكمل معلومة الفصل عن إبليس.'),
        L('Iblis got [blank] with Adam and hated him.', 'كَانَ إِبْلِيسُ [blank] مِنْ آدَمَ وَيَكْرَهُهُ كَثِيرًا.'),
        L('angry', 'غَاضِبًا'),
        L('Iblis was angry with Adam and hated him.', 'كان إبليس غاضبًا من آدم ويكرهه كثيرًا.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('the two warnings in the chapter and Adam’s life with Eve in Paradise', 'التحذيرين في الفصل وحياة آدم مع حواء في الجنة'),
    primaryQuestion: L('What did Allah warn Adam about before the chapter introduces Eve?', 'ممَّ حذّر الله آدم قبل أن يذكر الفصل حواء؟'),
    secondQuestion: L('Why was Eve created, and what was the one tree warning?', 'لماذا خُلقت حواء وما التحذير المتعلق بالشجرة؟'),
    grammar: L('Notice told + object + to / not to: Allah told Adam to be careful; told Adam and Eve not to go near the tree.', 'لاحظ أسلوب الأمر والنهي في النص: أن يكون حذرًا، ولا تقربا هذه الشجرة.'),
    pronunciation: L('Practise lonely, wonderful, warning, Paradise, and Eve.', 'تدرّب على نطق بِالْوَحْدَةِ، رَائِعًا، حَذَّرَ، الجَنَّةِ، وحَوَّاءُ.'),
    fast: L('Write a four-step mini-sequence: Iblis’s anger → warning → Eve → tree.', 'اكتب تسلسلًا من أربع خطوات: غضب إبليس ← التحذير ← حواء ← الشجرة.'),
    support: L('Use: “Adam felt ___, so Allah gave him ___.” and “Do not go near ___.”', 'استخدم: «شعر آدم بـ ___ فخلق الله له ___.» و«لا تقربا ___.»'),
  }),
};
