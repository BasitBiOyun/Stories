import type { Exercise, PageData } from '../types';

type Language = 'en' | 'ar';

const directTrueFalse = (
  id: string,
  language: Language,
  question: string,
  correctAnswer: boolean,
  explanation: string,
): Exercise => ({
  id,
  type: 'true-false',
  title: language === 'ar' ? 'دليل من الفصل' : 'Chapter Evidence',
  instructions: language === 'ar'
    ? 'حدّد هل العبارة مدعومة مباشرة بنص الفصل.'
    : 'Decide whether the statement is directly supported by the chapter.',
  question,
  correctAnswer,
  explanation,
  feedback: {
    correct: language === 'ar'
      ? `صحيح. ${explanation}`
      : `Correct. ${explanation}`,
    incorrect: language === 'ar'
      ? 'ارجع إلى الفصل وحدد الجملة التي تجيب عن السؤال، ثم حاول مرة أخرى.'
      : 'Return to the chapter, find the sentence that answers the question, and try again.',
  },
});

const replaceFirstExercise = (page: PageData, exercise: Exercise): PageData => ({
  ...page,
  exercises: [exercise, ...(page.exercises ?? []).slice(1)],
});

export const groundAdamB1Derived = (pages: PageData[], language: Language): PageData[] => pages.map((page) => {
  if (page.type !== 'story') return page;

  if (page.id === 1) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('adam-b1-grounded-1-ar', 'ar', 'يذكر الفصل الأول أن آدم عليه السلام خُلِقَ من النار.', false, 'يقول الفصل إن الله خلق آدم عليه السلام من التراب.')
      : directTrueFalse('adam-b1-grounded-1-en', 'en', 'Chapter 1 states that Adam (pbuh) was created from fire.', false, 'Chapter 1 says that Allah created Adam (pbuh) from soil.'));
  }

  if (page.id === 5) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('adam-b1-grounded-5-ar', 'ar', 'طلب الله من آدم وحواء ألّا يقتربا من شجرة معينة.', true, 'يقول الفصل إن الله طلب منهما شيئًا واحدًا فقط: ألّا يقتربا من شجرة معينة.')
      : directTrueFalse('adam-b1-grounded-5-en', 'en', 'Allah asked Adam and Eve not to go near one tree.', true, 'The chapter says that Allah only asked them not to go near one tree.'));
  }

  if (page.id === 7) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('adam-b1-grounded-7-ar', 'ar', 'اعتذر آدم وحواء إلى الله، بينما لم يعترف إبليس بأنه كان مخطئًا.', true, 'يقول الفصل إن آدم وحواء اعتذرا إلى الله وتعلما من خطئهما، بينما لم يعترف إبليس بأنه كان مخطئًا لأنه كان متكبرًا.')
      : directTrueFalse('adam-b1-grounded-7-en', 'en', 'Adam and Eve said sorry to Allah, while Iblis never admitted that he was wrong.', true, 'The chapter says that Adam and Eve said sorry to Allah and learned from their mistake, while Iblis never admitted that he was wrong because he was arrogant.'));
  }

  if (page.id === 11) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('adam-b1-grounded-11-ar', 'ar', 'أظهر الغراب لقابيل كيف يضع جثة أخيه في حفرة.', true, 'يقول الفصل إن الله أرسل غرابًا حفر الأرض وأظهر لقابيل طريقة وضع جثة أخيه في الحفرة.')
      : directTrueFalse('adam-b1-grounded-11-en', 'en', "The raven showed Qabil how to put his brother's dead body in the pit.", true, "The chapter says that Allah sent a raven that dug the ground and showed Qabil how to put his brother's dead body in the pit."));
  }

  return page;
});

export const groundAbrahamB1Derived = (pages: PageData[], language: Language): PageData[] => pages.map((page) => {
  if (page.type !== 'story') return page;

  if (page.id === 2) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('abraham-b1-grounded-2-ar', 'ar', 'ضحك إبراهيم بعد أن قال والده إن أذني مردوخ الكبيرتين تدلان على معرفته العميقة.', true, 'يذكر الفصل أن والده ربط الأذنين الكبيرتين بالمعرفة العميقة، ثم يقول إن إبراهيم ضحك.')
      : directTrueFalse('abraham-b1-grounded-2-en', 'en', "Abraham laughed after his father said that Mardukh's large ears showed deep knowledge.", true, 'The chapter gives the father’s explanation about the large ears and then states that Abraham laughed.'));
  }

  if (page.id === 6) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('abraham-b1-grounded-6-ar', 'ar', 'ترك إبراهيم أكبر صنم دون كسر وعلّق الفأس حول عنقه.', true, 'يقول الفصل إن إبراهيم كسر الأصنام، وترك أكبرها دون كسر، وعلّق الفأس حول عنقه.')
      : directTrueFalse('abraham-b1-grounded-6-en', 'en', 'Abraham left the largest statue untouched and hung the axe around its neck.', true, 'The chapter says that Abraham broke the idols, left the largest statue untouched, and hung the axe around its neck.'));
  }

  if (page.id === 10) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('abraham-b1-grounded-10-ar', 'ar', 'يذكر الفصل أن سارة ولوطًا فقط شاركا إبراهيم إيمانه قبل أن يغادر بابل.', true, 'يقول الفصل إن امرأة واحدة ورجلًا واحدًا من قومه شاركاه الإيمان: سارة ولوط.')
      : directTrueFalse('abraham-b1-grounded-10-en', 'en', 'The chapter says that only Sarah and Lot shared Abraham’s faith before he left Babylon.', true, 'The chapter identifies one woman, Sarah, and one man, Lot, as sharing his faith before he left Babylon.'));
  }

  if (page.id === 11) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('abraham-b1-grounded-11-ar', 'ar', 'سعت هاجر بين الصفا والمروة سبع مرات بحثًا عن الماء والطعام.', true, 'يقول الفصل إن الطعام والماء نفدا، وإن هاجر سعت بين الجبلين سبع مرات بحثًا عن الماء والطعام.')
      : directTrueFalse('abraham-b1-grounded-11-en', 'en', 'Hagar ran between Safa and Marwa seven times looking for water and food.', true, 'The chapter says that their food and water ran out and that Hagar ran between the two hills seven times looking for water and food.'));
  }

  if (page.id === 12) {
    return replaceFirstExercise(page, language === 'ar'
      ? directTrueFalse('abraham-b1-grounded-12-ar', 'ar', 'جاء مزيد من الناس ليستقروا في الوادي بسبب نبع زمزم.', true, 'يقول الفصل إن إسماعيل وأمه عاشا في الوادي، وإن مزيدًا من الناس جاؤوا ليستقروا هناك بسبب النبع المقدس.')
      : directTrueFalse('abraham-b1-grounded-12-en', 'en', 'More people came to settle in the valley because of the Zamzam spring.', true, 'The chapter says that Ishmael and his mother lived in the valley and that more people came to settle there because of the sacred spring.'));
  }

  return page;
});

export const groundYunusB1Derived = (pages: PageData[], language: Language): PageData[] => pages.map((page) => {
  if (page.type !== 'story') return page;

  const en: Record<number, [string, string]> = {
    1: ['A Sûfî is described as a person who aims to get closer to Allah and follows the outer and inner rules of Islam.', 'The chapter defines a Sûfî through closeness to Allah and describes outer acts of worship together with inner intentions and morality.'],
    2: ["The chapter says Yunus Emre's works combine literary quality with simple language, helping people understand his writings and sayings easily.", 'The chapter directly links the popularity of his works with literary quality, simple language, and easy understanding.'],
    3: ['The chapter says tekkes were places for Sûfî training, community support, and fine arts, especially poetry.', 'The chapter describes tekkes as places of Sûfî training, community organizations that helped people, and important places for fine arts, especially poetry.'],
    4: ['Poor governance and migration pressure worsened social and economic chaos in Anatolia.', 'The chapter connects poor governance and migration caused by Mongol pressure with worsening social and economic chaos.'],
    5: ['At Kösedağ in 1243, the Mongols defeated the Seljuks.', 'The chapter states that the Seljuk army and the Mongols clashed at Kösedağ in 1243 and that the Mongols defeated the Seljuks.'],
    6: ['In time, the Seljuks became dependent on the Mongols and sent part of the state income to them.', 'The chapter says the Seljuks became dependent on the Mongols and that a significant part of state income began to be sent to them every year.'],
    7: ['Yunus Emre responded to hard times with his Sûfî identity, and poetry was his most influential tool.', 'The chapter says Yunus tried to respond to people’s efforts to make sense of hard days with his Sûfî identity and that poetry was his most influential tool.'],
    11: ['Yunus presents death as an important advisor for humanity.', 'The chapter presents death as an important theme in Yunus Emre’s poems and describes it as an advisor for humanity.'],
    12: ['Yunus warns people against bad habits such as greed, gossip, arrogance, stinginess, selfishness, and jealousy.', 'The chapter lists these as bad habits that Yunus taught people to avoid.'],
    13: ['The chapter says Yunus Emre’s poems are still valuable today as a moral guide for future generations.', 'The final chapter directly describes his poems as still valuable today as a moral guide for future generations.'],
  };

  const ar: Record<number, [string, string]> = {
    1: ['يصف الفصل الصوفي بأنه شخص يسعى إلى التقرب من الله ويلتزم بالجوانب الظاهرة والباطنة في الإسلام.', 'يعرّف الفصل الصوفي من خلال التقرب من الله، ويذكر أعمال العبادة الظاهرة إلى جانب نيات القلب والأخلاق.'],
    2: ['يقول الفصل إن أعمال يونس إمره تجمع بين القيمة الأدبية واللغة البسيطة، مما يساعد الناس على فهم كتاباته وأقواله بسهولة.', 'يربط الفصل مباشرة بين شعبية أعماله وجودتها الأدبية ولغتها البسيطة وسهولة فهمها.'],
    3: ['يقول الفصل إن التكايا كانت أماكن للتدريب الصوفي ومساعدة المجتمع والفنون الجميلة، وخاصة الشعر.', 'يصف الفصل التكايا بأنها أماكن للتدريب الصوفي ومؤسسات مجتمعية تساعد الناس وأماكن مهمة للفنون الجميلة، وخاصة الشعر.'],
    4: ['أدى ضعف الإدارة وضغط الهجرة إلى تفاقم الفوضى الاجتماعية والاقتصادية في الأناضول.', 'يربط الفصل بين ضعف الإدارة والهجرة الناتجة عن الضغط المغولي وبين تفاقم الفوضى الاجتماعية والاقتصادية.'],
    5: ['في كوسه داغ سنة 1243 هزم المغول السلاجقة.', 'يقول الفصل إن جيش السلاجقة والمغول التقيا في كوسه داغ سنة 1243 وإن المغول هزموا السلاجقة.'],
    6: ['أصبح السلاجقة مع مرور الوقت تابعين للمغول، وبدأ جزء مهم من دخل الدولة يُرسل إليهم كل عام.', 'يذكر الفصل تبعية السلاجقة للمغول وإرسال جزء مهم من دخل الدولة إليهم سنويًا.'],
    7: ['استجاب يونس إمره للأيام الصعبة بهويته الصوفية، وكان الشعر أكثر أدواته تأثيرًا.', 'يقول الفصل إن يونس حاول الاستجابة لمحاولات الناس فهم الحياة في الأيام الصعبة بهويته الصوفية، وكان الشعر أكثر أدواته تأثيرًا.'],
    11: ['يقدّم يونس الموت بوصفه مستشارًا مهمًا للإنسان.', 'يقدّم الفصل الموت موضوعًا مهمًا في شعر يونس إمره ويصفه بوصفه مستشارًا للإنسان.'],
    12: ['يحذّر يونس الناس من عادات سيئة مثل الطمع والنميمة والكبر والبخل والأنانية والحسد.', 'يسرد الفصل هذه العادات ضمن الصفات السيئة التي علّم يونس الناس الابتعاد عنها.'],
    13: ['يقول الفصل إن قصائد يونس إمره ما زالت ذات قيمة اليوم بوصفها دليلًا أخلاقيًا للأجيال القادمة.', 'يصف الفصل الأخير قصائده مباشرة بأنها ما زالت ذات قيمة اليوم بوصفها دليلًا أخلاقيًا للأجيال القادمة.'],
  };

  const spec = language === 'ar' ? ar[page.id] : en[page.id];
  if (!spec) return page;
  return replaceFirstExercise(page, directTrueFalse(`yunus-b1-grounded-${page.id}-${language}`, language, spec[0], true, spec[1]));
});
