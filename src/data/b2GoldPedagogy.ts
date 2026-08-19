import type {
  BlueprintAssessmentItem,
  BlueprintAuthoredExercise,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';
import { L, mc } from './b2BlueprintAuthoring';

export type B2GoldStory = 'adam' | 'abraham' | 'moses' | 'mecca' | 'yunusEmre';
type ExercisePair = BlueprintAssessmentItem['exercise'];

const overrideExercise = (story: B2GoldStory, itemId: string): ExercisePair | undefined => {
  if (story === 'adam' && itemId === 'adam-b2-c2-final') {
    return mc(
      L(
        'Which statement best captures how Chapter 2 moves from common origin to human value?',
        'أي عبارة تلخص أفضل انتقال الفصل الثاني من الأصل المشترك إلى قيمة الإنسان؟',
      ),
      {
        en: [
          'A shared earthly origin rejects colour-based superiority, while human beings are described with distinct moral and intellectual capacities',
          'Different soil colours are presented as proof that some groups are naturally superior',
          'The chapter argues that material origin is the only thing that gives human beings value',
        ],
        ar: [
          'يرفض الأصل الأرضي المشترك التفاضل باللون، مع وصف الإنسان بقدرات أخلاقية وعقلية مميزة',
          'يُعرض اختلاف ألوان التراب دليلًا على تفوق بعض الجماعات طبيعيًا',
          'يرى الفصل أن الأصل المادي وحده هو ما يمنح الإنسان قيمته',
        ],
      },
      0,
      L(
        'The chapter links one earthly origin with equality and then describes the capacities given to human beings.',
        'يربط الفصل الأصل الأرضي الواحد بالمساواة ثم يصف القدرات التي مُنحت للإنسان.',
      ),
    );
  }

  if (story === 'abraham' && itemId === 'abraham-b2-c3-quick') {
    return mc(
      L(
        'What makes the Hijaz hanifs important to the chapter’s idea of continuity?',
        'ما الذي يجعل حنفاء الحجاز مهمين لفكرة الاستمرار في الفصل؟',
      ),
      {
        en: [
          'They are presented as people who stayed away from idolatry and preserved a link with monotheistic belief',
          'They are presented as a new group that introduced idol worship to the Hijaz',
          'They are described as political rulers who replaced all earlier religious traditions',
        ],
        ar: [
          'يُعرضون أناسًا ابتعدوا عن الشرك وحافظوا على صلة بالعقيدة التوحيدية',
          'يُعرضون جماعة جديدة أدخلت عبادة الأصنام إلى الحجاز',
          'يوصفون حكامًا سياسيين ألغوا كل التقاليد الدينية السابقة',
        ],
      },
      0,
      L(
        'The chapter uses the hanifs as an example of monotheistic continuity while also discussing later change and corruption.',
        'يستخدم الفصل الحنفاء مثالًا على استمرار التوحيد مع مناقشة التغير والتحريف لاحقًا.',
      ),
    );
  }

  if (story === 'moses' && itemId === 'moses-b2-c3-quick') {
    return mc(
      L(
        'Why does the chapter call the Nile the source of life before discussing Egyptian power?',
        'لماذا يصف الفصل النيل بأنه مصدر الحياة قبل مناقشة قوة مصر؟',
      ),
      {
        en: [
          'Because irrigation, transport, commerce, and major projects made control of the river central to society and authority',
          'Because the river removed the need for administration and human labour',
          'Because the chapter presents the Nile only as a religious symbol with no economic role',
        ],
        ar: [
          'لأن الري والنقل والتجارة والمشروعات الكبرى جعلت السيطرة على النهر مركزية للمجتمع والسلطة',
          'لأن النهر ألغى الحاجة إلى الإدارة والعمل البشري',
          'لأن الفصل يعرض النيل رمزًا دينيًا فقط بلا دور اقتصادي',
        ],
      },
      0,
      L(
        'The chapter develops the Nile from a natural resource into a foundation for agriculture, transport, projects, and political authority.',
        'يطور الفصل دور النيل من مورد طبيعي إلى أساس للزراعة والنقل والمشروعات والسلطة السياسية.',
      ),
    );
  }

  if (story === 'mecca' && itemId === 'mecca-b2-c1-quick') {
    return mc(
      L(
        'Why does Chapter 1 begin with the wider Middle Eastern setting before focusing on Mecca?',
        'لماذا يبدأ الفصل الأول بالسياق الأوسع للشرق الأوسط قبل التركيز على مكة؟',
      ),
      {
        en: [
          'To place the rise of Islam beside regional imperial rivalry and Arabia’s lack of political unity',
          'To argue that Mecca was already the capital of both neighboring empires',
          'To show that tribal organisation had disappeared from Arabia before Islam',
        ],
        ar: [
          'لوضع ظهور الإسلام بجانب التنافس الإمبراطوري الإقليمي وغياب الوحدة السياسية في الجزيرة العربية',
          'لإثبات أن مكة كانت عاصمة الإمبراطوريتين المجاورتين',
          'لإظهار أن التنظيم القبلي اختفى من الجزيرة قبل الإسلام',
        ],
      },
      0,
      L(
        'The opening establishes both the rivalry of the neighboring empires and the fragmented tribal setting of Arabia.',
        'تؤسس البداية لتنافس الإمبراطوريتين المجاورتين وللسياق القبلي المجزأ في الجزيرة العربية.',
      ),
    );
  }

  if (story === 'mecca' && itemId === 'mecca-b2-c3-quick') {
    return mc(
      L(
        'How does Chapter 3 connect Mecca’s sacred identity with the development of the city?',
        'كيف يربط الفصل الثالث هوية مكة المقدسة بتطور المدينة؟',
      ),
      {
        en: [
          'The Ka’ba and the religious importance attached to it are presented as central to settlement and later growth',
          'The chapter says agriculture alone created Mecca before the Ka’ba existed',
          'The chapter separates religious importance completely from the city’s development',
        ],
        ar: [
          'تُعرض الكعبة والأهمية الدينية المرتبطة بها بوصفهما عاملين مركزيين في الاستقرار والنمو اللاحق',
          'يذكر الفصل أن الزراعة وحدها أنشأت مكة قبل وجود الكعبة',
          'يفصل الفصل الأهمية الدينية تمامًا عن تطور المدينة',
        ],
      },
      0,
      L(
        'The chapter presents the Ka’ba as central to Mecca’s sacred identity and to the beginning of settled city life.',
        'يقدم الفصل الكعبة بوصفها مركزية لهوية مكة المقدسة وبداية حياة الاستقرار في المدينة.',
      ),
    );
  }

  if (story === 'mecca' && itemId.includes('c3-final')) {
    return mc(
      L(
        'Which cause-and-effect relationship is most important in Chapter 3’s account of early Mecca?',
        'أي علاقة سبب ونتيجة هي الأهم في عرض الفصل الثالث لمكة المبكرة؟',
      ),
      {
        en: [
          'The Ka’ba became a central religious focus, helping the valley develop into a settled and growing community',
          'The valley first became rich farmland, so the Ka’ba was later built for farmers',
          'A regional empire ordered a complete city to be built before anyone settled there',
        ],
        ar: [
          'أصبحت الكعبة مركزًا دينيًا مهمًا، مما ساعد الوادي على التطور إلى مجتمع مستقر ومتنامٍ',
          'أصبح الوادي أولًا أرضًا زراعية غنية ثم بُنيت الكعبة للمزارعين',
          'أمرت إمبراطورية إقليمية ببناء مدينة كاملة قبل أن يستقر فيها أحد',
        ],
      },
      0,
      L(
        'The chapter connects the Ka’ba with the beginning and growth of settled life in Mecca.',
        'يربط الفصل الكعبة ببداية حياة الاستقرار ونموها في مكة.',
      ),
    );
  }

  if (story === 'yunusEmre' && itemId === 'yunus-b2-c1-quick') {
    return mc(
      L(
        'Why is Yunus Emre’s dual identity important to the way Chapter 1 introduces him?',
        'لماذا تعد هوية يونس إمره المزدوجة مهمة في طريقة تقديمه في الفصل الأول؟',
      ),
      {
        en: [
          'His Sûfî moral outlook and his literary use of Turkish are presented as connected parts of his cultural legacy',
          'The chapter treats poetry and Sûfî life as unrelated careers with no shared influence',
          'The chapter presents him mainly as a military and political leader',
        ],
        ar: [
          'تُعرض رؤيته الأخلاقية الصوفية واستخدامه الأدبي للتركية بوصفهما جانبين مترابطين من إرثه الثقافي',
          'يعامل الفصل الشعر والحياة الصوفية مسارين منفصلين بلا تأثير مشترك',
          'يقدمه الفصل أساسًا قائدًا عسكريًا وسياسيًا',
        ],
      },
      0,
      L(
        'The chapter introduces Yunus through both Sûfî morality and his contribution to Turkish literary language.',
        'يقدم الفصل يونس من خلال الأخلاق الصوفية وإسهامه في اللغة الأدبية التركية معًا.',
      ),
    );
  }

  if (story === 'yunusEmre' && itemId.includes('c2-final')) {
    return mc(
      L(
        'What does Chapter 2 show by describing tekkes as more than places of Sûfî training?',
        'ماذا يوضح الفصل الثاني بوصف التكايا أكثر من مجرد أماكن للتعليم الصوفي؟',
      ),
      {
        en: [
          'They also supported social solidarity, cooperation, cultural life, and education',
          'They functioned only as private homes with no social role',
          'They replaced every madrasa and government institution in Anatolia',
        ],
        ar: [
          'دعمت أيضًا التضامن والتعاون والحياة الثقافية والتعليم',
          'كانت مجرد بيوت خاصة بلا دور اجتماعي',
          'استبدلت كل المدارس ومؤسسات الدولة في الأناضول',
        ],
      },
      0,
      L(
        'The chapter explicitly widens the role of tekkes from spiritual training to solidarity and cooperation in society.',
        'يوسع الفصل صراحة دور التكايا من التعليم الروحي إلى التضامن والتعاون في المجتمع.',
      ),
    );
  }

  return undefined;
};

const improveExerciseFeedback = (
  exercise: BlueprintAuthoredExercise,
  chapter: LearningBlueprintChapter,
  item: BlueprintAssessmentItem,
  language: 'en' | 'ar',
): BlueprintAuthoredExercise => {
  const point = chapter.evidencePoints.find(candidate => candidate.id === item.learningPointId);
  if (!point) return exercise;

  const evidence = point.evidence[language];
  const claim = point.claim[language];
  const feedback = language === 'en'
    ? {
        correct: `Correct. The chapter detail “${evidence}” supports this connection: ${claim}`,
        incorrect: `Check the part of the chapter around “${evidence}”. Decide what that detail actually supports before you answer again.`,
      }
    : {
        correct: `صحيح. يدعم تفصيل الفصل «${evidence}» هذه العلاقة: ${claim}`,
        incorrect: `ارجع إلى الجزء المحيط بعبارة «${evidence}». حدد ما الذي يدعمه هذا التفصيل فعلًا ثم أجب مرة أخرى.`,
      };

  return { ...exercise, feedback };
};

export const finalizeB2LearningBlueprint = (
  blueprint: LearningBlueprint,
  story: B2GoldStory,
): LearningBlueprint => ({
  ...blueprint,
  version: '2.0.0',
  status: 'pedagogy-reviewed',
  qualityContractVersion: '2.0',
  wholeBook: {
    ...blueprint.wholeBook,
    knowledgeCheck: {
      title: L('B2 Knowledge Check', 'اختبار الفهم B2'),
      content: L(
        'Connect evidence, causes, contrasts, motivations, and turning points from across the story.',
        'اربط الأدلة والأسباب والمقارنات والدوافع ونقاط التحول في القصة كاملة.',
      ),
    },
    vocabularyChallenge: {
      title: L('B2 Vocabulary Challenge', 'تحدي مفردات B2'),
      content: L('Match ten high-value story words with their meanings in context.', 'صل عشر كلمات أساسية من القصة بمعانيها في السياق.'),
    },
    review: {
      title: L('B2 Retrieval Review', 'مراجعة الاسترجاع B2'),
      content: L(
        'Retrieve the story, connect major ideas, and explain what the text supports.',
        'استرجع القصة واربط الأفكار الرئيسة واشرح ما يدعمه النص.',
      ),
    },
    finalChallenge: {
      title: L('B2 Final Challenge', 'التحدي النهائي B2'),
      content: L(
        'Analyse the book’s main relationships with accurate story evidence; avoid trivia and unsupported interpretation.',
        'حلل العلاقات الرئيسة في الكتاب بأدلة دقيقة من القصة، وتجنب التفاصيل الهامشية والتفسير غير المدعوم.',
      ),
    },
  },
  chapters: blueprint.chapters.map(chapter => ({
    ...chapter,
    assessmentItems: chapter.assessmentItems.map(item => {
      const replacement = overrideExercise(story, item.id);
      const exercise = replacement ?? item.exercise;
      return {
        ...item,
        exercise: {
          en: improveExerciseFeedback(exercise.en, chapter, item, 'en'),
          ar: improveExerciseFeedback(exercise.ar, chapter, item, 'ar'),
        },
      };
    }),
  })),
});
