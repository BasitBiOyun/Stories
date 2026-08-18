import type {
  BlueprintAssessmentItem,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';
import { L, matching, mc } from './helpers';

const T = (en: string, ar: string): LocalizedText => L(en, ar);

type OverrideSpec = {
  learningPointId: string;
  exercise: BlueprintAssessmentItem['exercise'];
  retry: LocalizedText;
  demand: BlueprintCognitiveDemandV2;
};

const overrides: Record<string, OverrideSpec> = {
  'moses-a2-c1-quick': {
    learningPointId: 'moses-a2-c1-fear',
    exercise: mc(
      T('Why did Pharaoh treat the Children of Israel badly?', 'لماذا عامل فرعون بني إسرائيل معاملة سيئة؟'),
      {
        en: ['He feared they might take control of his kingdom', 'They asked him to move to Midian', 'They wanted to become palace magicians'],
        ar: ['خاف أن يستولوا على مملكته', 'طلبوا منه الانتقال إلى مدين', 'أرادوا أن يصبحوا سحرة في القصر'],
      },
      0,
      T('The chapter connects Pharaoh’s fear of losing control with his cruel treatment of the Children of Israel.', 'يربط الفصل خوف فرعون من فقدان السيطرة بمعاملته القاسية لبني إسرائيل.'),
    ),
    retry: T('Find the sentence with “feared”. What did Pharaoh think the large group might do?', 'ابحث عن الجملة التي فيها معنى «خاف». ماذا ظن فرعون أن الجماعة الكبيرة قد تفعل؟'),
    demand: 'connect',
  },
  'moses-a2-c1-knowledge': {
    learningPointId: 'moses-a2-c1-belief',
    exercise: mc(
      T('What belief made the Children of Israel different from Pharaoh?', 'ما الاعتقاد الذي جعل بني إسرائيل مختلفين عن فرعون؟'),
      {
        en: ['They believed in one Allah and did not think Pharaoh was a god', 'They believed Pharaoh was the only god', 'They believed the soldiers controlled the universe'],
        ar: ['آمنوا بالله الواحد ولم يعتقدوا أن فرعون إله', 'اعتقدوا أن فرعون هو الإله الوحيد', 'اعتقدوا أن الجنود يسيطرون على العالم'],
      },
      0,
      T('The Children of Israel believed in one Allah, so they did not think Pharaoh was a god.', 'آمن بنو إسرائيل بالله الواحد، ولذلك لم يعتقدوا أن فرعون إله.'),
    ),
    retry: T('Reread the sentences about what the Children of Israel believed and what they did not believe about the king.', 'أعد قراءة الجمل عن عقيدة بني إسرائيل وما لم يعتقدوه بشأن الملك.'),
    demand: 'compare',
  },
  'moses-a2-c1-final': {
    learningPointId: 'moses-a2-c1-work',
    exercise: mc(
      T('Which detail best shows Pharaoh used his power unfairly?', 'أي تفصيل يبين بشكل أفضل أن فرعون استخدم سلطته بظلم؟'),
      {
        en: ['He forced people to do dangerous work for no money', 'He gave everyone safe and easy work', 'He let every family choose its own ruler'],
        ar: ['أجبر الناس على أعمال خطرة دون أجر', 'أعطى الجميع أعمالًا آمنة وسهلة', 'ترك لكل أسرة أن تختار حاكمها'],
      },
      0,
      T('Forcing the Children of Israel to do dangerous work for no money is the clearest example of unfair use of power in the chapter.', 'إجبار بني إسرائيل على أعمال خطرة دون أجر هو أوضح مثال في الفصل على استخدام السلطة بظلم.'),
    ),
    retry: T('Look for the sentence that explains what work Pharaoh forced the Children of Israel to do.', 'ابحث عن الجملة التي تشرح العمل الذي أجبر فرعون بني إسرائيل عليه.'),
    demand: 'explain',
  },

  'moses-a2-c2-quick': {
    learningPointId: 'moses-a2-c2-fire',
    exercise: mc(
      T('In Pharaoh’s dream, who were not harmed by the fire?', 'في حلم فرعون، من الذين لم تضرهم النار؟'),
      {
        en: ['The Children of Israel', 'Pharaoh’s soldiers', 'The palace magicians'],
        ar: ['بنو إسرائيل', 'جنود فرعون', 'سحرة القصر'],
      },
      0,
      T('The fire harmed Egyptian houses in the dream but did not harm the Children of Israel.', 'أضرت النار ببيوت المصريين في الحلم لكنها لم تضر بني إسرائيل.'),
    ),
    retry: T('Read the two sentences about what the fire did and did not harm.', 'اقرأ الجملتين عما أضرته النار وما لم تضره.'),
    demand: 'compare',
  },
  'moses-a2-c2-final': {
    learningPointId: 'moses-a2-c2-order',
    exercise: mc(
      T('What happened after Pharaoh’s helpers explained the dream?', 'ماذا حدث بعد أن فسر مساعدو فرعون الحلم؟'),
      {
        en: ['Pharaoh gave a cruel order about the baby boys', 'Pharaoh left Egypt for Midian', 'Pharaoh asked the families to choose a new king'],
        ar: ['أعطى فرعون أمرًا قاسيًا بشأن الأطفال الذكور', 'غادر فرعون مصر إلى مدين', 'طلب فرعون من الأسر اختيار ملك جديد'],
      },
      0,
      T('After hearing the interpretation, Pharaoh ordered his soldiers to kill the baby boys of the Children of Israel.', 'بعد سماع التفسير أمر فرعون جنوده بقتل أطفال بني إسرائيل الذكور.'),
    ),
    retry: T('Follow the sequence: dream → explanation → Pharaoh’s order. Focus on the third step.', 'اتبع التسلسل: الحلم ← التفسير ← أمر فرعون. ركز على الخطوة الثالثة.'),
    demand: 'sequence',
  },

  'moses-a2-c3-quick': {
    learningPointId: 'moses-a2-c3-protect',
    exercise: mc(
      T('Why could Moses’s mother put her baby in the basket despite her fear?', 'لماذا استطاعت أم موسى أن تضع طفلها في التابوت رغم خوفها؟'),
      {
        en: ['Allah told her what to do and promised to protect him', 'Pharaoh’s soldiers promised to help her', 'She knew the river would return the basket immediately'],
        ar: ['أخبرها الله ماذا تفعل ووعد بحفظه', 'وعدها جنود فرعون بالمساعدة', 'عرفت أن النهر سيعيد التابوت فورًا'],
      },
      0,
      T('The chapter connects Allah’s instruction with His promise to protect baby Moses.', 'يربط الفصل تعليمات الله بوعده بحفظ الطفل موسى.'),
    ),
    retry: T('Reread Allah’s instructions to Moses’s mother. What promise comes with the basket and river instructions?', 'أعد قراءة تعليمات الله لأم موسى. ما الوعد الذي يأتي مع تعليمات التابوت والنهر؟'),
    demand: 'connect',
  },
  'moses-a2-c3-knowledge': {
    learningPointId: 'moses-a2-c3-daughter',
    exercise: mc(
      T('What did Moses’s mother ask her daughter to do after the basket moved away?', 'ماذا طلبت أم موسى من ابنتها بعد أن ابتعد التابوت؟'),
      {
        en: ['Follow the basket', 'Go to Pharaoh’s soldiers', 'Return to the palace'],
        ar: ['أن تتبع التابوت', 'أن تذهب إلى جنود فرعون', 'أن تعود إلى القصر'],
      },
      0,
      T('Because she was worried, Moses’s mother told her daughter to follow the basket.', 'لأنها كانت قلقة، طلبت أم موسى من ابنتها أن تتبع التابوت.'),
    ),
    retry: T('Find what Moses’s mother did when she became very worried after the basket moved away.', 'ابحث عما فعلته أم موسى عندما اشتد قلقها بعد ابتعاد التابوت.'),
    demand: 'sequence',
  },

  'moses-a2-c4-quick': {
    learningPointId: 'moses-a2-c4-asiye',
    exercise: mc(
      T('How was Queen Asiye different from Pharaoh in this chapter?', 'كيف كانت الملكة آسية مختلفة عن فرعون في هذا الفصل؟'),
      {
        en: ['She believed in Allah and was kind-hearted', 'She said she was a god and treated people cruelly', 'She ordered soldiers to search every house'],
        ar: ['كانت تؤمن بالله وطيبة القلب', 'قالت إنها إله وعاملت الناس بقسوة', 'أمرت الجنود بتفتيش كل بيت'],
      },
      0,
      T('The chapter directly contrasts Asiye with her husband: she believed in Allah and was good and kind-hearted.', 'يقارن الفصل آسية بزوجها مباشرة؛ كانت تؤمن بالله وكانت طيبة القلب ورحيمة.'),
    ),
    retry: T('Find the sentence beginning “The queen was different from her husband.” What details come next?', 'ابحث عن الجملة التي تبدأ بمعنى «كانت الملكة مختلفة عن زوجها». ما التفاصيل التي تأتي بعدها؟'),
    demand: 'compare',
  },
  'moses-a2-c4-final': {
    learningPointId: 'moses-a2-c4-sister',
    exercise: mc(
      T('How did Moses’s sister help the baby at the palace?', 'كيف ساعدت أخت موسى الطفل في القصر؟'),
      {
        en: ['She told Asiye she knew a good woman who could nurse him', 'She told Pharaoh to send the baby away', 'She hid the basket from Asiye'],
        ar: ['قالت لآسية إنها تعرف امرأة طيبة يمكن أن ترضعه', 'قالت لفرعون أن يبعد الطفل', 'أخفت التابوت عن آسية'],
      },
      0,
      T('Moses’s sister spoke to Asiye and offered to bring a good woman who could nurse the baby.', 'تحدثت أخت موسى إلى آسية وعرضت أن تأتي بامرأة طيبة يمكن أن ترضع الطفل.'),
    ),
    retry: T('Read what Moses’s sister says directly to Queen Asiye near the end of the chapter.', 'اقرأ ما تقوله أخت موسى مباشرة للملكة آسية قرب نهاية الفصل.'),
    demand: 'explain',
  },

  'moses-a2-c5-quick': {
    learningPointId: 'moses-a2-c5-weak',
    exercise: mc(
      T('What does Chapter 5 tell us about Moses as a young man?', 'ماذا يخبرنا الفصل الخامس عن موسى عندما أصبح شابًا؟'),
      {
        en: ['He was ready to help weak people', 'He wanted to become Pharaoh', 'He worked for the palace magicians'],
        ar: ['كان مستعدًا لمساعدة الضعفاء', 'أراد أن يصبح فرعونًا', 'عمل مع سحرة القصر'],
      },
      0,
      T('The chapter describes young Moses as strong and always ready to help weak people.', 'يصف الفصل موسى الشاب بأنه قوي ومستعد دائمًا لمساعدة الضعفاء.'),
    ),
    retry: T('Look at the sentences after Moses becomes a strong young man. What kind of people was he ready to help?', 'انظر إلى الجمل بعد أن أصبح موسى شابًا قويًا. من كان مستعدًا لمساعدتهم؟'),
    demand: 'explain',
  },
  'moses-a2-c5-knowledge': {
    learningPointId: 'moses-a2-c5-safe',
    exercise: mc(
      T('Which two facts are both true about Moses growing up?', 'أي حقيقتين صحيحتان معًا عن نشأة موسى؟'),
      {
        en: ['He grew up safely in the king’s house, but he knew the king was not a god', 'He grew up in Midian and believed Pharaoh was a god', 'He grew up alone by the Nile and never returned to his mother'],
        ar: ['نشأ بأمان في بيت الملك، لكنه عرف أن الملك ليس إلهًا', 'نشأ في مدين واعتقد أن فرعون إله', 'نشأ وحيدًا عند النيل ولم يعد إلى أمه'],
      },
      0,
      T('Moses grew up safely in the king’s house, but he loved Allah and knew the king was not a god.', 'نشأ موسى بأمان في بيت الملك، لكنه أحب الله وعرف أن الملك ليس إلهًا.'),
    ),
    retry: T('Reread the sentences about where Moses grew up and what he believed about the king.', 'أعد قراءة الجمل عن المكان الذي نشأ فيه موسى وما كان يعتقده عن الملك.'),
    demand: 'connect',
  },

  'moses-a2-c6-quick': {
    learningPointId: 'moses-a2-c6-forgive',
    exercise: mc(
      T('What did Moses do after he understood the serious result of his action?', 'ماذا فعل موسى بعد أن فهم النتيجة الخطيرة لفعله؟'),
      {
        en: ['He asked Allah to forgive him', 'He celebrated in the bazaar', 'He blamed the weak man and left him'],
        ar: ['طلب من الله أن يغفر له', 'احتفل في السوق', 'لام الرجل الضعيف وتركه'],
      },
      0,
      T('Moses was very sorry and made dua, asking Allah to forgive him.', 'حزن موسى كثيرًا ودعا الله طالبًا المغفرة.'),
    ),
    retry: T('Do not focus on how the man died. Read what Moses felt and did immediately afterward.', 'لا تركز على كيفية موت الرجل. اقرأ ما شعر به موسى وما فعله مباشرة بعد ذلك.'),
    demand: 'sequence',
  },
  'moses-a2-c6-final': {
    learningPointId: 'moses-a2-c6-accident',
    exercise: mc(
      T('Which statement gives the chapter’s full idea about the bazaar mistake?', 'أي عبارة تعطي الفكرة الكاملة للفصل عن خطأ السوق؟'),
      {
        en: ['Moses caused the death accidentally, felt sorry, and asked Allah for forgiveness', 'Moses planned to kill the man and was happy about it', 'Moses did not understand that anything serious had happened'],
        ar: ['تسبب موسى في الموت عن غير قصد، وحزن، وطلب المغفرة من الله', 'خطط موسى لقتل الرجل وكان سعيدًا بذلك', 'لم يفهم موسى أن شيئًا خطيرًا حدث'],
      },
      0,
      T('The chapter is explicit that the death was accidental and then focuses on Moses’s regret and prayer for forgiveness.', 'يوضح الفصل أن الموت حدث عن غير قصد ثم يركز على ندم موسى ودعائه بالمغفرة.'),
    ),
    retry: T('Use three details together: “accidentally”, Moses being sorry, and his dua.', 'استخدم ثلاثة تفاصيل معًا: «عن غير قصد»، وحزن موسى، ودعاؤه.'),
    demand: 'connect',
  },

  'moses-a2-c7-quick': {
    learningPointId: 'moses-a2-c7-midian',
    exercise: mc(
      T('Why was Midian safer for Moses than Egypt?', 'لماذا كانت مدين أكثر أمانًا لموسى من مصر؟'),
      {
        en: ['Pharaoh was not the ruler there', 'Pharaoh’s whole army lived there', 'There were no people or water there'],
        ar: ['لم يكن فرعون هو الحاكم هناك', 'كان جيش فرعون كله يعيش هناك', 'لم يكن هناك ناس أو ماء'],
      },
      0,
      T('The chapter states that the king of Egypt was not the ruler in Midian.', 'يذكر الفصل أن ملك مصر لم يكن الحاكم في مدين.'),
    ),
    retry: T('Find the sentence immediately after the chapter says Midian was near Egypt. Who was not the ruler there?', 'ابحث عن الجملة بعد ذكر أن مدين قريبة من مصر. من لم يكن الحاكم هناك؟'),
    demand: 'connect',
  },
  'moses-a2-c7-knowledge': {
    learningPointId: 'moses-a2-c7-guided',
    exercise: mc(
      T('What shows that Moses was not alone during his long journey?', 'ما الذي يبين أن موسى لم يكن وحده في رحلته الطويلة؟'),
      {
        en: ['The chapter says Allah guided him', 'Pharaoh travelled with him', 'The magicians showed him the road'],
        ar: ['يقول الفصل إن الله هداه', 'سافر فرعون معه', 'أراه السحرة الطريق'],
      },
      0,
      T('The chapter says directly: “He was not alone. Allah guided him.”', 'يقول الفصل مباشرة إن موسى لم يكن وحده وأن الله هداه.'),
    ),
    retry: T('Read the two short sentences after Moses leaves Egypt. Who guided him?', 'اقرأ الجملتين القصيرتين بعد مغادرة موسى مصر. من هداه؟'),
    demand: 'identify',
  },

  'moses-a2-c8-quick': {
    learningPointId: 'moses-a2-c8-early',
    exercise: mc(
      T('Why did the two sisters return home early?', 'لماذا عادت الفتاتان إلى البيت مبكرًا؟'),
      {
        en: ['Moses helped them water their sheep', 'Their father came to the well and did all the work', 'The shepherds gave them a new house'],
        ar: ['ساعدهما موسى في سقي الغنم', 'جاء والدهما إلى البئر وقام بكل العمل', 'أعطاهما الرعاة بيتًا جديدًا'],
      },
      0,
      T('Moses watered their sheep, so they did not have to wait for the other shepherds and returned home early.', 'سقى موسى غنمهما، فلم تحتاجا إلى انتظار بقية الرعاة وعادتا إلى البيت مبكرًا.'),
    ),
    retry: T('Compare what usually made the sisters wait with what Moses did for them that day.', 'قارن سبب انتظارهما عادة بما فعله موسى لهما في ذلك اليوم.'),
    demand: 'connect',
  },
  'moses-a2-c8-final': {
    learningPointId: 'moses-a2-c8-need',
    exercise: mc(
      T('Which sentence best shows how Moses responded when he saw a need?', 'أي عبارة تبين بشكل أفضل كيف استجاب موسى عندما رأى حاجة؟'),
      {
        en: ['He understood the sisters needed help and watered their sheep', 'He told the sisters to wait longer and walked away', 'He asked Pharaoh to send soldiers to the well'],
        ar: ['فهم أن الفتاتين تحتاجان إلى المساعدة وسقى غنمهما', 'طلب منهما الانتظار أكثر ثم ابتعد', 'طلب من فرعون إرسال جنود إلى البئر'],
      },
      0,
      T('The chapter connects noticing the sisters’ need with Moses taking action to help them.', 'يربط الفصل إدراك موسى حاجة الفتاتين بقيامه بالفعل لمساعدتهما.'),
    ),
    retry: T('Find the sentence “Moses understood…” and then read what he did in the next sentence.', 'ابحث عن الجملة التي تبدأ بمعنى «أدرك موسى…» ثم اقرأ ما فعله في الجملة التالية.'),
    demand: 'connect',
  },

  'moses-a2-c9-quick': {
    learningPointId: 'moses-a2-c9-stranger',
    exercise: mc(
      T('Why did Moses accept Şuayb’s job offer?', 'لماذا قبل موسى عرض العمل من شعيب؟'),
      {
        en: ['He was a stranger in Midian and needed a job and a house', 'He wanted to become the king of Midian', 'He wanted to return to Pharaoh’s army'],
        ar: ['كان غريبًا في مدين ويحتاج إلى عمل وبيت', 'أراد أن يصبح ملك مدين', 'أراد العودة إلى جيش فرعون'],
      },
      0,
      T('The chapter gives a practical reason: Moses was a stranger in Midian and needed a job and a house.', 'يذكر الفصل سببًا عمليًا: كان موسى غريبًا في مدين ويحتاج إلى عمل وبيت.'),
    ),
    retry: T('Find the sentence with “because”. What two things did Moses need in Midian?', 'ابحث عن الجملة التي فيها معنى «لأن». ما الشيئان اللذان احتاجهما موسى في مدين؟'),
    demand: 'connect',
  },
  'moses-a2-c9-final': {
    learningPointId: 'moses-a2-c9-return',
    exercise: mc(
      T('Which sequence best shows Moses’s new life in Midian?', 'أي تسلسل يبين بشكل أفضل حياة موسى الجديدة في مدين؟'),
      {
        en: ['He accepted work, stayed with the family, married, and later decided to return to Egypt', 'He became Pharaoh, left the family, and moved to the palace', 'He found the sea, became a magician, and returned the same day'],
        ar: ['قبل العمل، وأقام مع الأسرة، وتزوج، ثم قرر لاحقًا العودة إلى مصر', 'أصبح فرعونًا، وترك الأسرة، وانتقل إلى القصر', 'وجد البحر، وأصبح ساحرًا، وعاد في اليوم نفسه'],
      },
      0,
      T('The chapter presents work, family life, marriage, and the later decision to return to Egypt as a connected sequence.', 'يعرض الفصل العمل والحياة مع الأسرة والزواج ثم قرار العودة إلى مصر بوصفها تسلسلًا مترابطًا.'),
    ),
    retry: T('Follow the events from Şuayb’s job offer to the final sentence about ten years later.', 'اتبع الأحداث من عرض شعيب للعمل حتى الجملة الأخيرة عن مرور عشر سنوات.'),
    demand: 'sequence',
  },

  'moses-a2-c10-quick': {
    learningPointId: 'moses-a2-c10-fire',
    exercise: mc(
      T('Why did Moses first go toward the fire on the hillside?', 'لماذا اتجه موسى أولًا نحو النار على سفح التل؟'),
      {
        en: ['He wanted to get some fire so his family could get warm', 'He knew Pharaoh was waiting beside the fire', 'He wanted to find the two sisters again'],
        ar: ['أراد أن يأتي ببعض النار لتتدفأ أسرته', 'عرف أن فرعون ينتظره بجانب النار', 'أراد أن يجد الفتاتين مرة أخرى'],
      },
      0,
      T('Moses told his family to wait because he wanted to get some fire so they could get warm.', 'طلب موسى من أسرته الانتظار لأنه أراد أن يأتي ببعض النار ليتدفؤوا.'),
    ),
    retry: T('Read what Moses says to his family immediately after he sees the fire.', 'اقرأ ما يقوله موسى لأسرته مباشرة بعد أن رأى النار.'),
    demand: 'explain',
  },
  'moses-a2-c10-knowledge': {
    learningPointId: 'moses-a2-c10-tawhid',
    exercise: mc(
      T('What central message did Moses hear on the mountain?', 'ما الرسالة الأساسية التي سمعها موسى على الجبل؟'),
      {
        en: ['There is no god but Allah', 'Pharaoh is the lord of the universe', 'Every magician has the same power'],
        ar: ['لا إله إلا الله', 'فرعون رب العالمين', 'كل ساحر له القدرة نفسها'],
      },
      0,
      T('Allah told Moses clearly that there is no god but Allah.', 'قال الله لموسى بوضوح إنه لا إله إلا الله.'),
    ),
    retry: T('Reread the words Moses hears immediately after “I chose you.” What belief is stated?', 'أعد قراءة الكلمات التي يسمعها موسى بعد معنى «اخترتك». ما العقيدة المذكورة؟'),
    demand: 'identify',
  },

  'moses-a2-c11-quick': {
    learningPointId: 'moses-a2-c11-message',
    exercise: mc(
      T('What message did Allah tell Moses to take to Pharaoh?', 'ما الرسالة التي أمر الله موسى أن يبلغها لفرعون؟'),
      {
        en: ['Allah is the most powerful', 'Moses should become Pharaoh', 'The magicians should rule Egypt'],
        ar: ['الله رب العالمين وصاحب القدرة', 'يجب أن يصبح موسى فرعونًا', 'يجب أن يحكم السحرة مصر'],
      },
      0,
      T('Allah told Moses to go to Pharaoh and tell him about Allah’s power and lordship.', 'أمر الله موسى أن يذهب إلى فرعون ويخبره بربوبية الله وقدرته.'),
    ),
    retry: T('Find the command beginning “Go to the king…”. What was Moses told to say about Allah?', 'ابحث عن الأمر الذي يبدأ بمعنى «اذهب إلى فرعون…». ماذا أُمر موسى أن يقول عن الله؟'),
    demand: 'identify',
  },
  'moses-a2-c11-final': {
    learningPointId: 'moses-a2-c11-harun',
    exercise: mc(
      T('What did Moses do before going to Pharaoh’s palace with Allah’s message?', 'ماذا فعل موسى قبل الذهاب إلى قصر فرعون برسالة الله؟'),
      {
        en: ['He took his brother Harun with him', 'He asked Pharaoh to send a magician with him', 'He returned to Midian alone'],
        ar: ['أخذ أخاه هارون معه', 'طلب من فرعون أن يرسل معه ساحرًا', 'عاد إلى مدين وحده'],
      },
      0,
      T('Moses took his brother Harun with him and went to the palace to give Allah’s message.', 'أخذ موسى أخاه هارون معه وذهب إلى القصر لتبليغ رسالة الله.'),
    ),
    retry: T('Read the final two sentences about Harun and the journey to the palace.', 'اقرأ الجملتين الأخيرتين عن هارون والذهاب إلى القصر.'),
    demand: 'sequence',
  },

  'moses-a2-c12-quick': {
    learningPointId: 'moses-a2-c12-magic',
    exercise: mc(
      T('How did Pharaoh explain the signs Moses showed?', 'كيف فسر فرعون الآيات التي أظهرها موسى؟'),
      {
        en: ['He called them magic', 'He immediately said they were signs from Allah', 'He said Harun had opened the sea'],
        ar: ['وصفها بأنها سحر', 'قال فورًا إنها آيات من الله', 'قال إن هارون فتح البحر'],
      },
      0,
      T('Pharaoh laughed at Moses and said, “This is only magic.”', 'سخر فرعون من موسى وقال إن هذا مجرد سحر.'),
    ),
    retry: T('Read Pharaoh’s own words at the end of the chapter. What name did he give the signs?', 'اقرأ كلام فرعون نفسه في نهاية الفصل. ماذا سمى الآيات؟'),
    demand: 'explain',
  },
  'moses-a2-c12-knowledge': {
    learningPointId: 'moses-a2-c12-message',
    exercise: mc(
      T('How did Moses introduce himself to Pharaoh?', 'كيف قدم موسى نفسه لفرعون؟'),
      {
        en: ['As a Messenger from the Lord of the universe', 'As a magician from Midian', 'As the new king of Egypt'],
        ar: ['رسولًا من رب العالمين', 'ساحرًا من مدين', 'ملك مصر الجديد'],
      },
      0,
      T('Moses told Pharaoh that he was a Messenger from the Lord of the universe.', 'قال موسى لفرعون إنه رسول من رب العالمين.'),
    ),
    retry: T('Look at Moses’s first direct statement to Pharaoh in this chapter. How does he describe himself?', 'انظر إلى أول قول مباشر لموسى لفرعون في هذا الفصل. كيف وصف نفسه؟'),
    demand: 'identify',
  },
  'moses-a2-c12-final': {
    learningPointId: 'moses-a2-c12-help',
    exercise: mc(
      T('Why does the chapter say Allah gave Moses the signs?', 'لماذا يقول الفصل إن الله أعطى موسى الآيات؟'),
      {
        en: ['To help him with his mission', 'To make him king of Egypt', 'To help Pharaoh become a magician'],
        ar: ['لمساعدته في رسالته', 'ليجعله ملك مصر', 'لمساعدة فرعون ليصبح ساحرًا'],
      },
      0,
      T('The chapter states that Allah gave the signs to Moses to help him.', 'يذكر الفصل أن الله أعطى موسى الآيات ليساعده بها.'),
    ),
    retry: T('Find the sentence immediately after “These were miracles/signs of Allah.” What purpose does it give?', 'ابحث عن الجملة بعد معنى «هذه آيات من الله». ما الغرض الذي تذكره؟'),
    demand: 'explain',
  },

  'moses-a2-c13-quick': {
    learningPointId: 'moses-a2-c13-belief',
    exercise: mc(
      T('How were the magicians and Pharaoh different after Moses’s sign?', 'كيف اختلف السحرة وفرعون بعد آية موسى؟'),
      {
        en: ['The magicians believed, but Pharaoh remained arrogant', 'Both the magicians and Pharaoh believed immediately', 'The magicians stayed arrogant, but Pharaoh believed'],
        ar: ['آمن السحرة، لكن فرعون بقي متكبرًا', 'آمن السحرة وفرعون فورًا', 'بقي السحرة متكبرين، لكن فرعون آمن'],
      },
      0,
      T('The magicians declared belief in the Lord of Moses and Harun, but Pharaoh still did not believe because he was arrogant.', 'أعلن السحرة إيمانهم برب موسى وهارون، لكن فرعون لم يؤمن لأنه كان متكبرًا.'),
    ),
    retry: T('Compare the sentence about what the magicians shouted with the next sentence about Pharaoh.', 'قارن الجملة عما قاله السحرة بالجملة التالية عن فرعون.'),
    demand: 'compare',
  },

  'moses-a2-c14-quick': {
    learningPointId: 'moses-a2-c14-slow',
    exercise: mc(
      T('Why did the caravan move slowly?', 'لماذا تحركت القافلة ببطء؟'),
      {
        en: ['There were many old people and children who could not walk fast', 'They were carrying Pharaoh’s throne', 'They stopped to visit the palace'],
        ar: ['كان معهم كثير من كبار السن والأطفال الذين لم يستطيعوا المشي بسرعة', 'كانوا يحملون عرش فرعون', 'توقفوا لزيارة القصر'],
      },
      0,
      T('The chapter explains that old people and children could not walk fast, so the caravan moved slowly.', 'يوضح الفصل أن كبار السن والأطفال لم يستطيعوا المشي بسرعة، لذلك تحركت القافلة ببطء.'),
    ),
    retry: T('Read the two sentences immediately before “Their caravan moved slowly.” Who could not walk fast?', 'اقرأ الجملتين قبل معنى «تحركت قافلتهم ببطء». من لم يستطع المشي بسرعة؟'),
    demand: 'connect',
  },
  'moses-a2-c14-knowledge': {
    learningPointId: 'moses-a2-c14-secret',
    exercise: mc(
      T('What did Moses tell his people about the plan to leave Egypt?', 'ماذا قال موسى لقومه عن خطة مغادرة مصر؟'),
      {
        en: ['Keep it secret and leave at night', 'Tell Pharaoh first and leave at noon', 'Wait for Pharaoh’s army and travel with them'],
        ar: ['احفظوا الأمر سرًا وغادروا ليلًا', 'أخبروا فرعون أولًا وغادروا ظهرًا', 'انتظروا جيش فرعون وسافروا معه'],
      },
      0,
      T('Moses told his people to prepare, keep the plan secret, and leave at night.', 'طلب موسى من قومه الاستعداد والحفاظ على سرية الخطة والمغادرة ليلًا.'),
    ),
    retry: T('Find Moses’s instructions beginning with “Get ready for the journey.” Which two instructions concern secrecy and time?', 'ابحث عن تعليمات موسى التي تبدأ بمعنى «استعدوا للرحلة». ما التعليمات المتعلقة بالسرية والوقت؟'),
    demand: 'connect',
  },

  'moses-a2-c15-quick': {
    learningPointId: 'moses-a2-c15-calm',
    exercise: mc(
      T('What did Moses tell his people when they panicked?', 'ماذا قال موسى لقومه عندما خافوا؟'),
      {
        en: ['Calm down; Allah is with us and will help us', 'Go back to Pharaoh immediately', 'Run into the sea without waiting'],
        ar: ['اهدؤوا؛ الله معنا وسيساعدنا', 'عودوا إلى فرعون فورًا', 'ادخلوا البحر دون انتظار'],
      },
      0,
      T('Moses answered their panic with reassurance: Allah was with them and would help them reach safety.', 'رد موسى على خوفهم بالطمأنة: الله معهم وسيساعدهم على الوصول إلى الأمان.'),
    ),
    retry: T('Read Moses’s direct words immediately after the people panic.', 'اقرأ كلام موسى المباشر بعد خوف القوم مباشرة.'),
    demand: 'explain',
  },
  'moses-a2-c15-knowledge': {
    learningPointId: 'moses-a2-c15-trapped',
    exercise: matching(
      T('Match each direction with what made the people feel trapped.', 'صل كل جهة بما جعل القوم يشعرون بالحصار.'),
      {
        en: [['In front of them', 'the sea'], ['Behind them', 'Pharaoh and his army']],
        ar: [['أمامهم', 'البحر'], ['خلفهم', 'فرعون وجيشه']],
      },
      T('The sea was in front of the people and Pharaoh’s army was behind them.', 'كان البحر أمام القوم وفرعون وجيشه خلفهم.'),
    ),
    retry: T('Find the two short sentences that describe what was in front of the people and what was behind them.', 'ابحث عن الجملتين القصيرتين اللتين تصفان ما كان أمام القوم وما كان خلفهم.'),
    demand: 'connect',
  },
  'moses-a2-c15-final': {
    learningPointId: 'moses-a2-c15-safe',
    exercise: matching(
      T('Match the sea event with what happened next.', 'صل حدث البحر بما حدث بعده.'),
      {
        en: [['Moses hit the sea with his stick', 'the sea parted'], ['The sea opened a road', 'the people walked through safely']],
        ar: [['ضرب موسى البحر بعصاه', 'انشق البحر'], ['فتح البحر طريقًا', 'عبر القوم بأمان']],
      },
      T('The sea parted after Moses struck it, and the people then crossed safely between the walls of water.', 'انشق البحر بعد أن ضربه موسى بعصاه، ثم عبر القوم بأمان بين جدران الماء.'),
    ),
    retry: T('Follow only the sea sequence: command → Moses’s action → sea opens → people cross.', 'اتبع تسلسل البحر فقط: الأمر ← فعل موسى ← انشقاق البحر ← عبور القوم.'),
    demand: 'sequence',
  },

  'moses-a2-c16-quick': {
    learningPointId: 'moses-a2-c16-claim',
    exercise: mc(
      T('What did Pharaoh wrongly claim before entering the sea?', 'ماذا ادعى فرعون خطأً قبل دخول البحر؟'),
      {
        en: ['He said he had told the sea to open', 'He said Moses had made him king of Midian', 'He said the magicians had carried the people away'],
        ar: ['قال إنه هو الذي أمر البحر أن ينفتح', 'قال إن موسى جعله ملك مدين', 'قال إن السحرة حملوا القوم بعيدًا'],
      },
      0,
      T('Pharaoh claimed to his soldiers that he had told the sea to open.', 'ادعى فرعون أمام جنوده أنه هو الذي أمر البحر أن ينفتح.'),
    ),
    retry: T('Read Pharaoh’s direct words before he and his soldiers enter the water.', 'اقرأ كلام فرعون المباشر قبل أن يدخل هو وجنوده الماء.'),
    demand: 'identify',
  },
  'moses-a2-c16-final': {
    learningPointId: 'moses-a2-c16-lessons',
    exercise: mc(
      T('Which statement gives the two lessons stated at the end of the story?', 'أي عبارة تجمع الدرسين المذكورين في نهاية القصة؟'),
      {
        en: ['No one can own another person, and only Allah has power over us', 'A king owns every person, and armies have the greatest power', 'People should always obey the strongest ruler'],
        ar: ['لا يملك إنسان إنسانًا آخر، والله وحده صاحب القدرة علينا', 'الملك يملك كل إنسان، والجيوش لها أعظم قدرة', 'يجب على الناس دائمًا طاعة أقوى حاكم'],
      },
      0,
      T('The final paragraph states both lessons directly: no person can own another person, and only Allah has power over us.', 'تذكر الفقرة الأخيرة الدرسين مباشرة: لا يملك إنسان إنسانًا آخر، والله وحده صاحب القدرة علينا.'),
    ),
    retry: T('Do not focus on the death scene. Read the final two lesson sentences and choose the option that contains both.', 'لا تركز على مشهد الموت. اقرأ جملتي الدرس في النهاية واختر العبارة التي تجمعهما.'),
    demand: 'connect',
  },
};

export const applyMosesA2FinalPedagogy = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const evidenceById = new Map(chapter.evidencePoints.map(point => [point.id, point]));
  const assessmentItems = chapter.assessmentItems.map(item => {
    const spec = overrides[item.id];
    if (!spec) return item;

    const point = evidenceById.get(spec.learningPointId);
    const correct = T(`Correct. ${spec.exercise.en.explanation}`, `صحيح. ${spec.exercise.ar.explanation}`);
    const exercise = {
      en: { ...spec.exercise.en, feedback: { correct: correct.en, incorrect: spec.retry.en } },
      ar: { ...spec.exercise.ar, feedback: { correct: correct.ar, incorrect: spec.retry.ar } },
    };

    return {
      ...item,
      learningPointId: spec.learningPointId,
      learningOutcomeId: point?.learningOutcomeId ?? item.learningOutcomeId,
      exercise,
      quality: item.quality ? {
        ...item.quality,
        cognitiveDemand: spec.demand,
        successEvidence: point?.claim ?? item.quality.successEvidence,
        feedback: {
          ...item.quality.feedback,
          correct,
          incorrect: spec.retry,
          rationale: T(
            'The feedback identifies the exact reading move or chapter location needed to repair the misunderstanding without giving the answer before the retry.',
            'تحدد التغذية الراجعة حركة القراءة أو موضع الفصل المطلوب لتصحيح سوء الفهم دون كشف الإجابة قبل إعادة المحاولة.',
          ),
        },
      } : item.quality,
    };
  });

  return { ...chapter, assessmentItems };
};