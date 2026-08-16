import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, guideBundle, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const adamA2Chapter10: LearningBlueprintChapter = {
  chapterId: 10,
  objectives: [
    L('State the chapter’s lesson about jealousy and anger.', 'يذكر درس الفصل عن الحسد والغضب.'),
    L('Recall how Adam’s message continued through his children and grandchildren.', 'يتذكر كيف استمرت رسالة آدم عن طريق أولاده وأحفاده.'),
  ],
  evidencePoints: [
    {
      id: 'adam-a2-c10-sadness', focus: 'direct',
      claim: L('Adam became very sad because he lost both sons on the same day.', 'حزن آدم جدًا لأنه فقد ابنيه في يوم واحد.'),
      evidence: L('Adam (pbuh) became very sad. He lost both of his sons on the same day', 'كَانَ آدَمُ (عَلَيْهِ السَّلَامُ) حَزِينًا جِدًّا. لَقَدْ فَقَدَ ابْنَيْهِ فِي يَوْمٍ وَاحِدٍ'),
    },
    {
      id: 'adam-a2-c10-lesson', focus: 'theme',
      claim: L('The story teaches good people to stay away from jealousy and control their anger.', 'تعلم القصة الناس الصالحين أن يبتعدوا عن الحسد ويسيطروا على غضبهم.'),
      evidence: L('good people should stay away from jealousy and control their anger', 'النَّاسَ الصَّالِحِينَ يَجِبُ أَنْ يَبْتَعِدُوا عَنِ الْحَسَدِ وَأَنْ يُسَيْطِرُوا عَلَى غَضَبِهِمْ'),
    },
    {
      id: 'adam-a2-c10-message-spread', focus: 'sequence',
      claim: L('Adam’s children and grandchildren spread his message worldwide.', 'نشر أولاد آدم وأحفاده رسالته في كل العالم.'),
      evidence: L('His children and grandchildren spread his message worldwide', 'نَشَرَ أَوْلَادُهُ وَأَحْفَادُهُ رِسَالَتَهُ فِي كُلِّ الْعَالَمِ'),
    },
    {
      id: 'adam-a2-c10-kindness', focus: 'theme',
      claim: L('The message tells people to be well-behaved and kind to others.', 'تدعو الرسالة الناس إلى حسن الخلق واللطف مع الآخرين.'),
      evidence: L('It tells them to be well-behaved and kind to others', 'تَدْعوهمْ أَيْضًا إِلى حُسْنِ الخُلُقِ وَاللُّطْفِ مَعَ الآخَرينَ'),
    },
  ],
  vocabularyTargets: vocabularyTargetsFor(10),
  assessmentItems: [
    {
      id: 'adam-a2-c10-quick', learningPointId: 'adam-a2-c10-lesson', eligibleStages: ['quick'],
      exercise: tf(
        L('The story says good people should stay away from jealousy and control their anger.', 'تقول القصة إن الناس الصالحين يجب أن يبتعدوا عن الحسد ويسيطروا على غضبهم.'),
        true,
        L('This lesson is stated directly at the beginning of Chapter 10.', 'هذا الدرس مذكور مباشرة في بداية الفصل العاشر.'),
      ),
    },
    {
      id: 'adam-a2-c10-knowledge', learningPointId: 'adam-a2-c10-message-spread', eligibleStages: ['knowledge'],
      exercise: tap(
        L('Who spread Adam’s message worldwide?', 'من نشر رسالة آدم في كل العالم؟'),
        L('His children and grandchildren.', 'أولاده وأحفاده.'),
      ),
    },
    {
      id: 'adam-a2-c10-review', learningPointId: 'adam-a2-c10-kindness', eligibleStages: ['review'],
      exercise: mc(
        L('How does the chapter say people should treat others?', 'كيف يقول الفصل إن الناس ينبغي أن يعاملوا الآخرين؟'),
        {
          en: ['Be well-behaved and kind', 'Stay angry with them', 'Ignore everyone'],
          ar: ['بحسن الخلق واللطف', 'بالبقاء غاضبين منهم', 'بتجاهل الجميع'],
        },
        0,
        L('The message tells people to be well-behaved and kind to others.', 'تدعو الرسالة الناس إلى حسن الخلق واللطف مع الآخرين.'),
      ),
    },
    {
      id: 'adam-a2-c10-final', learningPointId: 'adam-a2-c10-sadness', eligibleStages: ['final'],
      exercise: mc(
        L('Why was Adam very sad at the beginning of this chapter?', 'لماذا كان آدم حزينًا جدًا في بداية هذا الفصل؟'),
        {
          en: ['He lost both of his sons on the same day', 'He could not grow crops', 'He wanted to return to the tree'],
          ar: ['فقد ابنيه في يوم واحد', 'لم يستطع زراعة المحاصيل', 'أراد العودة إلى الشجرة'],
        },
        0,
        L('The chapter says Adam lost both of his sons on the same day.', 'يقول الفصل إن آدم فقد ابنيه في يوم واحد.'),
      ),
    },
  ],
  ...guideBundle({
    focus: L('the final lessons about jealousy, anger, good behaviour, and the continuing message', 'الدروس الختامية عن الحسد والغضب وحسن الخلق واستمرار الرسالة'),
    primaryQuestion: L('What lesson does the chapter give about jealousy and anger?', 'ما الدرس الذي يقدمه الفصل عن الحسد والغضب؟'),
    secondQuestion: L('How did Adam’s message continue after he became old?', 'كيف استمرت رسالة آدم بعد أن كبر في السن؟'),
    grammar: L('Practise should + base verb for advice: should stay away; should control.', 'تدرّب على أسلوب النصيحة والواجب: يجب أن يبتعدوا، وأن يسيطروا.'),
    pronunciation: L('Practise jealousy, worldwide, well-behaved, advises, message, and kind.', 'تدرّب على نطق الْحَسَدِ، فِي كُلِّ الْعَالَمِ، حُسْنِ الخُلُقِ، تَدْعو، الرِّسالَة، واللُّطْفِ.'),
    fast: L('Write three short lesson sentences using should, based only on Chapter 10.', 'اكتب ثلاث جمل قصيرة تلخص دروس الفصل العاشر مستخدمًا النص فقط.'),
    support: L('Use: “Good people should ___.” and “The message tells people to ___.”', 'استخدم: «يجب على الناس الصالحين أن ___.» و«تدعو الرسالة الناس إلى ___.»'),
  }),
};
