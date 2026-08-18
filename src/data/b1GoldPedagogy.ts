import type {
  BlueprintAssessmentItem,
  BlueprintCognitiveFocus,
  BlueprintGuideContent,
  BlueprintLanguage,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';
import { L, mc } from './b1BlueprintAuthoring';

export type B1GoldStory = 'adam' | 'abraham' | 'moses' | 'mecca' | 'yunusEmre';

type ExercisePair = BlueprintAssessmentItem['exercise'];

const focusLabel: Record<BlueprintCognitiveFocus, { en: string; ar: string }> = {
  direct: { en: 'accurate detail', ar: 'المعلومة الدقيقة' },
  sequence: { en: 'sequence', ar: 'التسلسل' },
  'main-idea': { en: 'main idea', ar: 'الفكرة الرئيسة' },
  'cause-result': { en: 'cause-and-result link', ar: 'علاقة السبب والنتيجة' },
  'character-action': { en: 'action and what it shows', ar: 'الفعل وما يدل عليه' },
  motivation: { en: 'reason or motivation', ar: 'السبب أو الدافع' },
  comparison: { en: 'comparison', ar: 'المقارنة' },
  inference: { en: 'text-supported inference', ar: 'الاستنتاج المدعوم بالنص' },
  'turning-point': { en: 'turning point and its effect', ar: 'نقطة التحول وأثرها' },
  theme: { en: 'chapter-supported lesson', ar: 'الدرس الذي يدعمه الفصل' },
  vocabulary: { en: 'meaning in context', ar: 'المعنى في السياق' },
};

const overrideExercise = (story: B1GoldStory, itemId: string): ExercisePair | undefined => {
  if (story === 'adam') {
    if (itemId === 'adam-b1-c3-quick') {
      return mc(
        L('Which comparison led Iblis to judge himself as superior?', 'أي مقارنة دفعت إبليس إلى الحكم بأنه أفضل؟'),
        {
          en: [
            'He treated being created from fire as proof that he was better than Adam, who was created from soil',
            'He compared his knowledge with Adam’s and found that he knew more',
            'He compared their responsibilities on Earth and chose the harder role',
          ],
          ar: [
            'اعتبر خلقه من النار دليلًا على أنه أفضل من آدم الذي خُلق من التراب',
            'قارن علمه بعلم آدم فوجد أنه أعلم منه',
            'قارن مسؤولياتهما في الأرض واختار الدور الأصعب',
          ],
        },
        0,
        L('Iblis used material origin—fire versus soil—as the basis of his judgment.', 'جعل إبليس الأصل المادي ـ النار مقابل التراب ـ أساس حكمه.'),
      );
    }
    if (itemId === 'adam-b1-c5-quick') {
      return mc(
        L('Why did the single restriction about the tree become important in Iblis’s deception?', 'لماذا أصبح القيد الوحيد المتعلق بالشجرة مهمًا في خداع إبليس؟'),
        {
          en: [
            'It was the clear command that Iblis tried to undermine with a false promise',
            'It showed that every tree in Paradise was forbidden',
            'It gave Iblis permission to become Adam’s teacher',
          ],
          ar: [
            'كان الأمر الواضح الذي حاول إبليس تقويضه بوعد كاذب',
            'كان يدل على أن جميع أشجار الجنة محرمة',
            'أعطى إبليس الإذن ليصبح معلم آدم',
          ],
        },
        0,
        L('The chapter places one clear restriction beside Iblis’s false claim about the same tree.', 'يضع الفصل قيدًا واحدًا واضحًا مقابل ادعاء إبليس الكاذب بشأن الشجرة نفسها.'),
      );
    }
    if (itemId === 'adam-b1-c11-quick') {
      return mc(
        L('How did the raven turn Qabil’s panic into a practical lesson?', 'كيف حوّل الغراب ذعر قابيل إلى درس عملي؟'),
        {
          en: [
            'By digging the ground and showing him what he could do next',
            'By removing the consequences of his anger',
            'By bringing Habil back to speak with him',
          ],
          ar: [
            'بحفر الأرض وإظهار ما يمكنه فعله بعد ذلك',
            'بإزالة نتائج غضبه',
            'بإعادة هابيل ليتحدث معه',
          ],
        },
        0,
        L('The raven dug the ground, giving Qabil a concrete example when he did not know what to do.', 'حفر الغراب الأرض فقدم لقابيل مثالًا عمليًا عندما لم يعرف ماذا يفعل.'),
      );
    }
  }

  if (story === 'abraham') {
    if (itemId === 'abraham-b1-c2-final') {
      return mc(
        L('What does Abraham’s treatment of the idols show about the difference between his view and his father’s?', 'ماذا يكشف تعامل إبراهيم مع الأصنام عن الفرق بين نظرته ونظرة والده؟'),
        {
          en: [
            'Abraham treated them as powerless objects, while his father treated them as gods worthy of respect',
            'Both of them believed the statues had deep knowledge',
            'Abraham respected the idols more because he was younger',
          ],
          ar: [
            'عاملها إبراهيم كأشياء عاجزة بينما عاملها والده كآلهة تستحق الاحترام',
            'كان كلاهما يعتقد أن التماثيل تملك معرفة عميقة',
            'احترم إبراهيم الأصنام أكثر لأنه كان أصغر سنًا',
          ],
        },
        0,
        L('Abraham rode and kicked the idols like objects, which contrasts with his father’s religious respect for them.', 'عامل إبراهيم الأصنام كأشياء يركبها ويركلها، وهذا يتناقض مع تعظيم والده لها.'),
      );
    }
    if (itemId === 'abraham-b1-c3-quick') {
      return mc(
        L('What best describes Abraham’s search in this chapter?', 'ما الوصف الأدق لبحث إبراهيم في هذا الفصل؟'),
        {
          en: [
            'He was looking for the one true Creator and tested whether changing created things could be worthy of worship',
            'He was trying to choose the brightest object in the sky as a permanent god',
            'He was searching for a new statue to take back to Babylon',
          ],
          ar: [
            'كان يبحث عن الخالق الحقيقي الواحد ويختبر هل تصلح المخلوقات المتغيرة للعبادة',
            'كان يحاول اختيار ألمع جسم في السماء إلهًا دائمًا',
            'كان يبحث عن تمثال جديد ليأخذه إلى بابل',
          ],
        },
        0,
        L('The chapter describes a search for the one true Creator and repeatedly rejects what sets or disappears.', 'يصف الفصل بحثًا عن الخالق الحقيقي الواحد ويرفض ما يغيب أو يختفي.'),
      );
    }
    if (itemId === 'abraham-b1-c4-quick') {
      return mc(
        L('How did the setting sun complete Abraham’s reasoning?', 'كيف أكمل غروب الشمس استدلال إبراهيم؟'),
        {
          en: [
            'It showed that even the biggest object he had considered was still a changing creation',
            'It proved that the sun was more powerful at night',
            'It made Abraham return to idol worship',
          ],
          ar: [
            'بيّن أن حتى أكبر ما تأمله كان مخلوقًا يتغير ويغيب',
            'أثبت أن الشمس أقوى في الليل',
            'جعل إبراهيم يعود إلى عبادة الأصنام',
          ],
        },
        0,
        L('When the sun set, Abraham concluded that Allah could not be one of the creations.', 'عندما غربت الشمس أدرك إبراهيم أن الله لا يمكن أن يكون من المخلوقات.'),
      );
    }
  }

  if (story === 'moses') {
    if (itemId === 'moses-b1-c2-final') {
      return mc(
        L('How did the advisers’ interpretation of Pharaoh’s dream change what happened next?', 'كيف غيّر تفسير المستشارين لحلم فرعون ما حدث بعد ذلك؟'),
        {
          en: [
            'Pharaoh turned his fear into an order against newborn boys from the Children of Israel',
            'Pharaoh decided to give the Children of Israel control of Egypt',
            'The advisers told Pharaoh that the dream had no connection with his fears',
          ],
          ar: [
            'حوّل فرعون خوفه إلى أمر ضد المواليد الذكور من بني إسرائيل',
            'قرر فرعون إعطاء بني إسرائيل حكم مصر',
            'قال المستشارون إن الحلم لا علاقة له بمخاوفه',
          ],
        },
        0,
        L('The interpretation predicted a boy from the Children of Israel, and Pharaoh answered with a violent order.', 'ربط التفسير الخطر بصبي من بني إسرائيل، فرد فرعون بأمر عنيف.'),
      );
    }
  }

  if (story === 'mecca') {
    if (itemId === 'mecca-b1-c2-final') {
      return mc(
        L('How does the Qiblah detail strengthen the chapter’s explanation of Mecca’s religious importance?', 'كيف تعزز معلومة القبلة شرح الفصل لأهمية مكة الدينية؟'),
        {
          en: [
            'It connects Mecca directly with the direction Muslims face during salah',
            'It shows that Mecca was the main farming region of Arabia',
            'It explains why every tribe had the same political leader',
          ],
          ar: [
            'تربط مكة مباشرة بالاتجاه الذي يتوجه إليه المسلمون في الصلاة',
            'تظهر أن مكة كانت المنطقة الزراعية الرئيسة في الجزيرة العربية',
            'تفسر لماذا كان لجميع القبائل قائد سياسي واحد',
          ],
        },
        0,
        L('The chapter links Mecca with the Ka’ba and the Qiblah, the direction Muslims face in prayer.', 'يربط الفصل مكة بالكعبة والقبلة التي يتوجه إليها المسلمون في الصلاة.'),
      );
    }
    if (itemId === 'mecca-b1-c3-quick') {
      return mc(
        L('Which change best explains how the empty valley began to become a settled place?', 'أي تغير يفسر بصورة أفضل كيف بدأ الوادي الخالي يتحول إلى مكان مأهول؟'),
        {
          en: [
            'The discovery of Zamzam made settlement possible, and people later came to live there',
            'The valley suddenly became rich farmland before Zamzam was discovered',
            'A central government moved all Arabian tribes into the valley',
          ],
          ar: [
            'أتاح اكتشاف زمزم الاستقرار ثم جاء الناس للسكن في المكان',
            'تحول الوادي فجأة إلى أرض زراعية خصبة قبل اكتشاف زمزم',
            'نقلت حكومة مركزية جميع قبائل العرب إلى الوادي',
          ],
        },
        0,
        L('The chapter first describes no population and no Zamzam, then links the water’s discovery with settlement.', 'يصف الفصل أولًا غياب السكان وزمزم ثم يربط اكتشاف الماء بالاستقرار.'),
      );
    }
  }

  if (story === 'yunusEmre') {
    if (itemId === 'yunus-b1-c2-final') {
      return mc(
        L('What does the chapter suggest by presenting Yunus Emre’s madrasa and tekke education together?', 'ماذا يوضح الفصل بعرض تعليم يونس إمره في المدرسة والتكية معًا؟'),
        {
          en: [
            'His education combined formal learning with moral and spiritual training',
            'He rejected all formal learning after entering a tekke',
            'The madrasa and tekke are presented as exactly the same institution',
          ],
          ar: [
            'جمع تعليمه بين التعلم الرسمي والتربية الأخلاقية والروحية',
            'رفض كل تعليم رسمي بعد دخوله التكية',
            'يعرض الفصل المدرسة والتكية بوصفهما المؤسسة نفسها تمامًا',
          ],
        },
        0,
        L('The chapter mentions madrasa education and also learning Allah’s love and morals at the tekke.', 'يذكر الفصل تعليم المدرسة إلى جانب تعلم محبة الله والأخلاق في التكية.'),
      );
    }
  }

  return undefined;
};

const evidenceFor = (chapter: LearningBlueprintChapter, item: BlueprintAssessmentItem) =>
  chapter.evidencePoints.find(point => point.id === item.learningPointId);

const repairFeedback = (
  chapter: LearningBlueprintChapter,
  item: BlueprintAssessmentItem,
  language: BlueprintLanguage,
) => {
  const evidence = evidenceFor(chapter, item);
  if (!evidence) return item.exercise[language].feedback;
  const label = focusLabel[evidence.focus][language];
  const claim = evidence.claim[language];
  const quote = evidence.evidence[language];

  return language === 'en'
    ? {
        correct: `Correct. The chapter evidence supports this ${label}: ${claim}`,
        incorrect: `Recheck this chapter evidence: “${quote}”. Decide how it supports the ${label}, then try again.`,
      }
    : {
        correct: `صحيح. يدعم دليل الفصل ${label}: ${claim}`,
        incorrect: `راجع هذا الدليل من الفصل: «${quote}». حدّد كيف يدعم ${label} ثم حاول من جديد.`,
      };
};

const goldGuide = (
  guide: BlueprintGuideContent,
  chapter: LearningBlueprintChapter,
  language: BlueprintLanguage,
  kind: 'teacher' | 'self',
): BlueprintGuideContent => {
  const preferred = chapter.evidencePoints.find(point => point.focus !== 'direct') ?? chapter.evidencePoints[0];
  const label = preferred ? focusLabel[preferred.focus][language] : focusLabel['main-idea'][language];
  const objective = chapter.objectives[0]?.[language] ?? '';

  if (language === 'en') {
    return {
      ...guide,
      pedagogy: kind === 'teacher'
        ? `${guide.pedagogy} In this chapter, foreground the ${label}; keep every explanation anchored to the chapter evidence rather than pushing learners into abstract interpretation.`
        : `${guide.pedagogy} Your main B1 task is to explain the ${label} in your own words and support it with the chapter.`,
      lessonPlan: `${guide.lessonPlan} Before finishing, retrieve the main relationship without looking and produce a 3–5 sentence claim → evidence → explanation response about: ${objective}`,
      interactiveTips: [
        ...(guide.interactiveTips ?? []),
        `Use the hotspot or Word Note only to return to evidence for the ${label}; it must not replace the story as the factual source.`,
      ],
    };
  }

  return {
    ...guide,
    pedagogy: kind === 'teacher'
      ? `${guide.pedagogy} ركّز في هذا الفصل على ${label}، واجعل كل تفسير مرتبطًا بدليل من الفصل بدل دفع المتعلم إلى تفسير مجرد يتجاوز B1.`
      : `${guide.pedagogy} مهمتك الأساسية في B1 هي شرح ${label} بلغتك ودعمه بدليل من الفصل.`,
    lessonPlan: `${guide.lessonPlan} قبل الانتهاء، استرجع العلاقة الرئيسة دون النظر واكتب 3–5 جمل بنمط: ادعاء ← دليل ← تفسير حول: ${objective}`,
    interactiveTips: [
      ...(guide.interactiveTips ?? []),
      `استخدم النقطة التفاعلية أو ملاحظة المفردات للعودة إلى دليل ${label} فقط، ولا تجعلها مصدرًا بديلًا عن القصة.`,
    ],
  };
};

export const finalizeB1LearningBlueprint = (
  blueprint: LearningBlueprint,
  story: B1GoldStory,
): LearningBlueprint => ({
  ...blueprint,
  version: `${blueprint.version}-gold`,
  status: 'pedagogy-reviewed',
  wholeBook: {
    ...blueprint.wholeBook,
    knowledgeCheck: {
      title: L('B1 Knowledge Check', 'اختبار الفهم B1'),
      content: L('Explain relationships from across the story, not isolated trivia.', 'اختبر فهم العلاقات في القصة لا حفظ التفاصيل المنفصلة.'),
    },
    vocabularyChallenge: {
      title: L('B1 Vocabulary Challenge', 'تحدي مفردات B1'),
      content: L('Match ten story words with the meanings they carry in context.', 'صل عشر كلمات من القصة بالمعاني التي تحملها في السياق.'),
    },
    review: {
      title: L('B1 Retrieval Review', 'مراجعة الاسترجاع B1'),
      content: L('Retrieve sequence, relationships, evidence, and key lessons from the whole story.', 'استرجع التسلسل والعلاقات والأدلة والدروس الأساسية من القصة كاملة.'),
    },
    finalChallenge: {
      title: L('B1 Final Challenge', 'التحدي النهائي B1'),
      content: L('Use evidence to explain causes, comparisons, choices, turning points, and lessons across the story.', 'استخدم الدليل لشرح الأسباب والمقارنات والاختيارات ونقاط التحول والدروس في القصة.'),
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
          en: { ...exercise.en, feedback: repairFeedback(chapter, { ...item, exercise }, 'en') },
          ar: { ...exercise.ar, feedback: repairFeedback(chapter, { ...item, exercise }, 'ar') },
        },
      };
    }),
    teacherGuide: {
      en: goldGuide(chapter.teacherGuide.en, chapter, 'en', 'teacher'),
      ar: goldGuide(chapter.teacherGuide.ar, chapter, 'ar', 'teacher'),
    },
    selfStudyGuide: {
      en: goldGuide(chapter.selfStudyGuide.en, chapter, 'en', 'self'),
      ar: goldGuide(chapter.selfStudyGuide.ar, chapter, 'ar', 'self'),
    },
  })),
});
