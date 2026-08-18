import type {
  BlueprintAssessmentItem,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import { L, fill, matching, mc, tap } from './helpers';

type QuickSpec = {
  exercise: BlueprintAssessmentItem['exercise'];
  retry: LocalizedText;
};

const namedQuick = (
  title: LocalizedText,
  exercise: BlueprintAssessmentItem['exercise'],
): BlueprintAssessmentItem['exercise'] => ({
  en: {
    ...exercise.en,
    title: title.en,
  },
  ar: {
    ...exercise.ar,
    title: title.ar,
  },
});

const quickByChapter: Record<number, QuickSpec> = {
  1: {
    exercise: namedQuick(
      L('Different Lands, Different Colors', 'أماكن مختلفة وألوان مختلفة'),
      mc(
        L('Why does the chapter say people have different skin colors?', 'لماذا يقول الفصل إن للناس ألوان بشرة مختلفة؟'),
        {
          en: [
            'The soil came from different parts of Earth',
            'The angels chose different colors',
            'People changed colors later',
          ],
          ar: [
            'جاء التراب من أماكن مختلفة من الأرض',
            'اختارت الملائكة ألوانًا مختلفة',
            'تغيرت ألوان الناس بعد ذلك',
          ],
        },
        0,
        L(
          'The chapter connects soil collected from different parts of Earth with different human skin colors.',
          'يربط الفصل التراب المأخوذ من أماكن مختلفة من الأرض باختلاف ألوان بشرة الناس.',
        ),
      ),
    ),
    retry: L(
      'Read the two sentences about soil from different parts of Earth. What result comes after that?',
      'اقرأ الجملتين عن التراب من أماكن مختلفة من الأرض. ما النتيجة التي تأتي بعد ذلك؟',
    ),
  },
  2: {
    exercise: namedQuick(
      L('Show Respect', 'إظهار الاحترام'),
      mc(
        L('What did Allah tell the angels to do after Adam was given life?', 'ماذا أمر الله الملائكة أن تفعل بعد أن أُعطي آدم الحياة؟'),
        {
          en: ['Show respect to Adam', 'Leave Paradise', 'Collect more soil'],
          ar: ['أن يظهروا الاحترام لآدم', 'أن يغادروا الجنة', 'أن يجمعوا مزيدًا من التراب'],
        },
        0,
        L('Allah told the angels to show respect to Adam.', 'أمر الله الملائكة أن يظهروا الاحترام لآدم.'),
      ),
    ),
    retry: L(
      'Read the first command in Chapter 2 and find what the angels were told to do.',
      'اقرأ الأمر الأول في الفصل الثاني وحدد ما طُلب من الملائكة أن يفعلوه.',
    ),
  },
  3: {
    exercise: namedQuick(
      L('Fire and Soil', 'النار والتراب'),
      matching(
        L('Match Adam and Iblis with what the chapter says about their origin.', 'صل آدم وإبليس بما يذكره الفصل عن أصل كل واحد.'),
        {
          en: [['Iblis', 'fire'], ['Adam', 'soil']],
          ar: [['إبليس', 'النار'], ['آدم', 'التراب']],
        },
        L('Iblis said he was created from fire and Adam was created from soil.', 'قال إبليس إنه خُلق من النار وإن آدم خُلق من التراب.'),
      ),
    ),
    retry: L(
      'Read Iblis’s answer again and match each person with the material named in that sentence.',
      'اقرأ جواب إبليس مرة أخرى وصل كل شخص بالمادة المذكورة في الجملة.',
    ),
  },
  4: {
    exercise: namedQuick(
      L('Adam and Eve', 'آدم وحواء'),
      mc(
        L('Why did Allah give Adam a wife?', 'لماذا أعطى الله آدم زوجة؟'),
        {
          en: ['Adam felt lonely', 'Adam wanted to leave Paradise', 'The angels asked for a new person'],
          ar: ['لأن آدم شعر بالوحدة', 'لأن آدم أراد مغادرة الجنة', 'لأن الملائكة طلبت شخصًا جديدًا'],
        },
        0,
        L('Adam felt lonely in Paradise, so Allah gave him a wife, Eve.', 'شعر آدم بالوحدة في الجنة، فأعطاه الله زوجته حواء.'),
      ),
    ),
    retry: L(
      'Read the sentence just before Eve is introduced. How was Adam feeling?',
      'اقرأ الجملة التي تسبق ذكر حواء مباشرة. كيف كان يشعر آدم؟',
    ),
  },
  5: {
    exercise: namedQuick(
      L('Iblis’s Lie', 'كذبة إبليس'),
      mc(
        L('What lie did Iblis tell Adam and Eve about the tree?', 'ما الكذبة التي قالها إبليس لآدم وحواء عن الشجرة؟'),
        {
          en: ['They would never die if they ate from it', 'They would become hungry if they ate from it', 'They would forget everything if they ate from it'],
          ar: ['إنهما لن يموتا أبدًا إذا أكلا منها', 'إنهما سيجوعان إذا أكلا منها', 'إنهما سينسيان كل شيء إذا أكلا منها'],
        },
        0,
        L('Iblis told Adam and Eve that they would never die if they ate from the tree.', 'قال إبليس لآدم وحواء إنهما لن يموتا أبدًا إذا أكلا من الشجرة.'),
      ),
    ),
    retry: L(
      'Find the sentence that begins with “If you eat from that one tree…”. What did Iblis promise?',
      'ابحث عن الجملة التي تبدأ بمعنى «إذا أكلتما من تلك الشجرة...». ماذا وعدهما إبليس؟',
    ),
  },
  6: {
    exercise: namedQuick(
      L('A New Life on Earth', 'حياة جديدة في الأرض'),
      tap(
        L('What happened after Allah forgave Adam and Eve?', 'ماذا حدث بعد أن غفر الله لآدم وحواء؟'),
        L('They began life on Earth.', 'بدآ الحياة في الأرض.'),
        L('After Allah forgave them, Adam and Eve began their life on Earth.', 'بعد أن غفر الله لهما، بدأ آدم وحواء حياتهما في الأرض.'),
      ),
    ),
    retry: L(
      'Read the first sentence in Chapter 6 and follow the order: forgiveness, then what?',
      'اقرأ الجملة الأولى في الفصل السادس واتبع الترتيب: المغفرة، ثم ماذا؟',
    ),
  },
  7: {
    exercise: namedQuick(
      L('Adam’s Teaching', 'تعاليم آدم'),
      fill(
        L('Complete the sentence about what Adam taught.', 'أكمل الجملة عما علّمه آدم.'),
        L('He started teaching people to be [blank], do good, stop bad and always remember Allah.', 'بدأ يعلم الناس أن يكونوا [blank]، ويفعلوا الخير، ويمنعوا الشر، ويذكروا الله دائمًا.'),
        L('honest', 'صادقين'),
        L('Adam taught people to be honest, do good, stop bad, and remember Allah.', 'علّم آدم الناس أن يكونوا صادقين ويفعلوا الخير ويمنعوا الشر ويذكروا الله.'),
      ),
    ),
    retry: L(
      'Find the sentence that begins “He started teaching people…” and look at the first quality.',
      'ابحث عن الجملة التي تبدأ بمعنى «بدأ يعلم الناس...»، وانظر إلى الصفة الأولى.',
    ),
  },
  8: {
    exercise: namedQuick(
      L('Habil and Qabil', 'هابيل وقابيل'),
      matching(
        L('Match each brother with his work.', 'صل كل أخ بعمله.'),
        {
          en: [['Habil', 'shepherd'], ['Qabil', 'farmer']],
          ar: [['هابيل', 'راعٍ'], ['قابيل', 'مزارع']],
        },
        L('Habil became a shepherd and Qabil became a farmer.', 'أصبح هابيل راعيًا وأصبح قابيل مزارعًا.'),
      ),
    ),
    retry: L(
      'Read the first paragraph and match each brother with the job named there.',
      'اقرأ الفقرة الأولى وصل كل أخ بالعمل المذكور له.',
    ),
  },
  9: {
    exercise: namedQuick(
      L('What Qabil Learned', 'ما الذي تعلمه قابيل'),
      mc(
        L('A bird dug the ground. What did Qabil understand?', 'حفر طائر الأرض. ماذا فهم قابيل؟'),
        {
          en: ['How to bury his brother', 'How to grow crops', 'How to care for sheep'],
          ar: ['كيف يدفن أخاه', 'كيف يزرع المحاصيل', 'كيف يعتني بالأغنام'],
        },
        0,
        L('The bird’s action showed Qabil how to bury his brother.', 'أظهر فعل الطائر لقابيل كيف يدفن أخاه.'),
      ),
    ),
    retry: L(
      'Do not focus on the name of the bird. Read what it did and what Qabil understood next.',
      'لا تركز على اسم الطائر. اقرأ ما فعله وما الذي فهمه قابيل بعد ذلك.',
    ),
  },
  10: {
    exercise: namedQuick(
      L('The Main Lesson', 'الدرس الرئيس'),
      mc(
        L('What lesson does Chapter 10 give about jealousy and anger?', 'ما الدرس الذي يقدمه الفصل العاشر عن الحسد والغضب؟'),
        {
          en: ['Stay away from jealousy and control anger', 'Keep jealousy and anger', 'Ignore kindness and good behaviour'],
          ar: ['الابتعاد عن الحسد والسيطرة على الغضب', 'التمسك بالحسد والغضب', 'تجاهل اللطف وحسن الخلق'],
        },
        0,
        L('Chapter 10 says good people should stay away from jealousy and control their anger.', 'يقول الفصل العاشر إن الناس الصالحين يجب أن يبتعدوا عن الحسد ويسيطروا على غضبهم.'),
      ),
    ),
    retry: L(
      'Find the sentence with “should”. Which two actions does the chapter give?',
      'ابحث عن الجملة التي فيها معنى «يجب». ما الفعلان اللذان يذكرهما الفصل؟',
    ),
  },
};

export const applyAdamA2GoldQuickChallenges = (
  chapter: LearningBlueprintChapter,
): LearningBlueprintChapter => {
  const spec = quickByChapter[chapter.chapterId];
  if (!spec) throw new Error(`[Adam A2 Gold Quick] Missing Chapter ${chapter.chapterId} specification.`);

  const quickId = `adam-a2-c${chapter.chapterId}-quick`;
  let replaced = false;

  const assessmentItems = chapter.assessmentItems.map((item) => {
    if (item.id !== quickId) return item;
    replaced = true;
    if (!item.quality) throw new Error(`[Adam A2 Gold Quick] ${item.id} has no v2 quality metadata.`);

    const correct = L(
      `Correct. ${spec.exercise.en.explanation}`,
      `صحيح. ${spec.exercise.ar.explanation}`,
    );
    const exercise = {
      en: {
        ...spec.exercise.en,
        feedback: { correct: correct.en, incorrect: spec.retry.en },
      },
      ar: {
        ...spec.exercise.ar,
        feedback: { correct: correct.ar, incorrect: spec.retry.ar },
      },
    };

    return {
      ...item,
      exercise,
      quality: {
        ...item.quality,
        feedback: {
          ...item.quality.feedback,
          correct,
          incorrect: spec.retry,
          rationale: L(
            'The Quick Challenge checks one meaningful chapter idea in simple A2 language. Correct feedback explains the evidence link; retry feedback points to a precise rereading move without giving the answer first.',
            'يقيس التحدي السريع فكرة مهمة واحدة من الفصل بلغة بسيطة تناسب A2. تشرح تغذية الإجابة الصحيحة علاقة الدليل، وتوجه إعادة المحاولة إلى قراءة محددة دون إعطاء الإجابة أولًا.',
          ),
        },
      },
    };
  });

  if (!replaced) throw new Error(`[Adam A2 Gold Quick] Chapter ${chapter.chapterId} Quick Challenge was not found.`);
  return { ...chapter, assessmentItems };
};
