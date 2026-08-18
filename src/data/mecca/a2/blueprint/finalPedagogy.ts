import type { BlueprintAssessmentItem, LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';
import { L, matching, mc, tap, tf } from '../../a2BlueprintAuthoring';

const T = (en: string, ar: string): LocalizedText => L(en, ar);

const quicks: Record<number, { learningPointId: string; exercise: BlueprintAssessmentItem['exercise']; demand: BlueprintCognitiveDemandV2 }> = {
  1: {
    learningPointId: 'mecca-a2-c1-adhan',
    exercise: mc(
      T('Which detail shows Bilal later had an important public role in Islam?', 'أي تفصيل يبين أن بلالًا كان له لاحقًا دور عام مهم في الإسلام؟'),
      { en: ['He was the first person to give the Adhan', 'He worked with camels in Mecca', 'His parents were slaves'], ar: ['كان أول من أقام الأذان', 'كان يعمل مع الجمال في مكة', 'كان والداه من العبيد'] },
      0,
      T('The chapter identifies Bilal as the first person to give the Adhan in Islamic history.', 'يذكر الفصل أن بلالًا كان أول من أقام الأذان في تاريخ الإسلام.'),
    ),
    demand: 'identify',
  },
  2: {
    learningPointId: 'mecca-a2-c2-gap',
    exercise: matching(
      T('Match the two groups with the different lives described in Jahiliyyah.', 'صل المجموعتين بالحياتين المختلفتين المذكورتين في الجاهلية.'),
      { en: [['Rich people', 'lived in luxury'], ['Many poor people', 'lived in need']], ar: [['الأغنياء', 'عاشوا في رفاهية'], ['كثير من الفقراء', 'عاشوا في حاجة']] },
      T('The chapter uses this contrast to show the large social gap.', 'يستخدم الفصل هذه المقارنة لإظهار الفجوة الاجتماعية الكبيرة.'),
    ),
    demand: 'compare',
  },
  3: {
    learningPointId: 'mecca-a2-c3-market',
    exercise: mc(
      T('Which detail from Chapter 3 shows that slavery was part of Mecca’s social and economic system?', 'أي تفصيل من الفصل الثالث يبين أن العبودية كانت جزءًا من النظام الاجتماعي والاقتصادي في مكة؟'),
      { en: ['Mecca was a center for buying and selling slaves', 'Bilal later gave the Adhan', 'The Muslims later moved to Medina'], ar: ['كانت مكة مركزًا لشراء العبيد وبيعهم', 'أقام بلال الأذان لاحقًا', 'هاجر المسلمون لاحقًا إلى المدينة'] },
      0,
      T('The chapter says slave markets were common and Mecca was a center for buying and selling slaves.', 'يقول الفصل إن أسواق العبيد كانت شائعة وإن مكة كانت مركزًا لشراء العبيد وبيعهم.'),
    ),
    demand: 'connect',
  },
  4: {
    learningPointId: 'mecca-a2-c4-camels',
    exercise: mc(
      T('Which detail best shows Bilal’s hard daily work?', 'أي تفصيل يبين بصورة أفضل عمل بلال اليومي الشاق؟'),
      { en: ['He looked after camels and worked under the hot sun all day', 'He chose people to give the Adhan', 'He travelled to Damascus every day'], ar: ['كان يرعى الجمال ويعمل تحت الشمس الحارة طوال اليوم', 'كان يختار من يقيم الأذان', 'كان يسافر إلى دمشق كل يوم'] },
      0,
      T('Bilal looked after his master’s camels and worked under the hot desert sun all day.', 'كان بلال يرعى جمال سيده ويعمل تحت شمس الصحراء الحارة طوال اليوم.'),
    ),
    demand: 'identify',
  },
  5: {
    learningPointId: 'mecca-a2-c5-worship',
    exercise: matching(
      T('Match the old practice with the new message Bilal heard.', 'صل الممارسة القديمة بالرسالة الجديدة التي سمعها بلال.'),
      { en: [['Old practice in Mecca', 'worshipped idols'], ['New message', 'worship only Allah']], ar: [['الممارسة القديمة في مكة', 'عبادة الأصنام'], ['الرسالة الجديدة', 'عبادة الله وحده']] },
      T('The new message told people to stop worshipping idols and worship only Allah.', 'دعت الرسالة الجديدة الناس إلى ترك عبادة الأصنام وعبادة الله وحده.'),
    ),
    demand: 'compare',
  },
  6: {
    learningPointId: 'mecca-a2-c6-secret',
    exercise: tap(
      T('What two details show that Bilal did not want anyone to see his visit to Abu Bakr?', 'ما التفصيلان اللذان يبينان أن بلالًا لم يرد أن يراه أحد وهو يزور أبا بكر؟'),
      T('He left secretly at night and used a hidden path.', 'خرج سرًا ليلًا وسلك طريقًا خفيًا.'),
      T('The chapter describes both a secret departure and a hidden path because Bilal wanted to avoid being seen.', 'يصف الفصل خروجه سرًا وسلوكه طريقًا خفيًا لأنه لم يرد أن يراه أحد.'),
    ),
    demand: 'connect',
  },
  7: {
    learningPointId: 'mecca-a2-c7-accepted',
    exercise: mc(
      T('Bilal knew becoming a Muslim could make life difficult. What did he finally choose?', 'عرف بلال أن الإسلام قد يجعل حياته صعبة. ماذا اختار في النهاية؟'),
      { en: ['He accepted Islam because he believed it was the truth', 'He decided to continue worshipping idols', 'He decided not to ask any more questions'], ar: ['دخل في الإسلام لأنه آمن بأنه الحق', 'قرر الاستمرار في عبادة الأصنام', 'قرر ألا يسأل أي سؤال آخر'] },
      0,
      T('Bilal expected difficulty but believed the religion of Allah was the truth, so he accepted Islam.', 'توقع بلال الصعوبة لكنه آمن بأن دين الله هو الحق، فدخل في الإسلام.'),
    ),
    demand: 'connect',
  },
  8: {
    learningPointId: 'mecca-a2-c8-one',
    exercise: mc(
      T('Umayya tried to make Bilal change his belief. Which repeated answer shows Bilal’s choice?', 'حاول أمية أن يجعل بلالًا يغير إيمانه. أي جواب متكرر يبين اختيار بلال؟'),
      { en: ['Allah is One', 'I will worship the idols', 'I want the gold'], ar: ['الله واحد', 'سأعبد الأصنام', 'أريد الذهب'] },
      0,
      T('Bilal repeatedly said “Allah is One,” showing that he would not change his belief.', 'كرر بلال قول «الله واحد»، مبينًا أنه لن يغير إيمانه.'),
    ),
    demand: 'connect',
  },
  9: {
    learningPointId: 'mecca-a2-c9-arrived',
    exercise: mc(
      T('What did Abu Bakr do when he heard that Bilal was being badly hurt?', 'ماذا فعل أبو بكر عندما سمع أن بلالًا يتعرض لأذى شديد؟'),
      { en: ['He went to Umayya right away', 'He waited until the Hijrah', 'He asked Bilal to return to work'], ar: ['ذهب إلى أمية فورًا', 'انتظر حتى الهجرة', 'طلب من بلال العودة إلى العمل'] },
      0,
      T('Abu Bakr responded immediately and went to see Umayya.', 'استجاب أبو بكر فورًا وذهب إلى أمية.'),
    ),
    demand: 'sequence',
  },
  10: {
    learningPointId: 'mecca-a2-c10-free',
    exercise: matching(
      T('Match Bilal’s situation before and after Abu Bakr’s action.', 'صل حال بلال قبل فعل أبي بكر وبعده.'),
      { en: [['Before', 'enslaved by Umayya'], ['After', 'a free Muslim']], ar: [['قبل', 'كان مستعبدًا عند أمية'], ['بعد', 'أصبح مسلمًا حرًا']] },
      T('Abu Bakr bought Bilal and freed him, changing his legal and social condition in the story.', 'اشترى أبو بكر بلالًا وحرره، فتغير وضعه في القصة إلى رجل حر.'),
    ),
    demand: 'compare',
  },
  11: {
    learningPointId: 'mecca-a2-c11-chosen',
    exercise: mc(
      T('After the Hijrah, what new role did the Prophet choose Bilal for?', 'بعد الهجرة، لأي دور جديد اختار النبي بلالًا؟'),
      { en: ['To call people to prayer', 'To manage the slave market', 'To collect unfair extra money'], ar: ['لينادي الناس إلى الصلاة', 'ليدير سوق العبيد', 'ليجمع المال الإضافي الظالم'] },
      0,
      T('After the Hijrah, the Prophet chose Bilal to call people to prayer.', 'بعد الهجرة اختار النبي بلالًا لينادي الناس إلى الصلاة.'),
    ),
    demand: 'identify',
  },
  12: {
    learningPointId: 'mecca-a2-c12-prayer',
    exercise: mc(
      T('Which phrase became part of Bilal’s early morning call to prayer in the chapter?', 'أي عبارة أصبحت جزءًا من أذان بلال المبكر في الصباح في الفصل؟'),
      { en: ['Prayer is better than sleep', 'Rich people are better than poor people', 'Mecca is better than Medina'], ar: ['الصلاة خير من النوم', 'الأغنياء أفضل من الفقراء', 'مكة أفضل من المدينة'] },
      0,
      T('Bilal added the words “Prayer is better than sleep,” and the Prophet told him to repeat them every morning.', 'أضاف بلال عبارة «الصلاة خير من النوم»، وأمره النبي بتكرارها كل صباح.'),
    ),
    demand: 'identify',
  },
  13: {
    learningPointId: 'mecca-a2-c13-heart',
    exercise: matching(
      T('Match the final lesson with what does and does not decide a person’s value.', 'صل الدرس الأخير بما يحدد قيمة الإنسان وما لا يحددها.'),
      { en: [['What does not decide value', 'skin color, nationality, or past'], ['What matters', 'the heart and good actions']], ar: [['ما لا يحدد القيمة', 'لون البشرة أو الجنسية أو الماضي'], ['ما هو مهم', 'القلب والأعمال الصالحة']] },
      T('The final chapter rejects skin color, nationality, and past as measures of value and points to the heart and good actions.', 'يرفض الفصل الأخير لون البشرة والجنسية والماضي كمقاييس للقيمة، ويركز على القلب والأعمال الصالحة.'),
    ),
    demand: 'compare',
  },
};

const retry = (focus: string, language: 'en' | 'ar'): string => {
  const en: Record<string, string> = {
    direct: 'Return to the sentence that directly names this detail. Do not choose a nearby fact from another chapter.',
    sequence: 'Reread the event and the sentence immediately before or after it. Check the order before trying again.',
    comparison: 'Put the two groups, situations, or responses side by side and check the contrast stated in the chapter.',
    'cause-result': 'Find the reason/result link. Separate what happened from why it happened.',
    'character-action': 'Find the person named in the question and check the action that person actually took.',
    motivation: 'Find the sentence that explains why the person acted or decided. Use that reason only.',
    theme: 'Return to the chapter’s explicit message and connect it with the event; do not answer from a random detail.',
    'turning-point': 'Find the point where the situation changes and check what becomes different afterward.',
  };
  const ar: Record<string, string> = {
    direct: 'ارجع إلى الجملة التي تذكر هذه المعلومة مباشرة، ولا تختر حقيقة قريبة من فصل آخر.',
    sequence: 'أعد قراءة الحدث والجملة التي قبله أو بعده مباشرة، وتحقق من الترتيب قبل المحاولة.',
    comparison: 'ضع المجموعتين أو الحالتين أو الردين جنبًا إلى جنب وتحقق من المقارنة المذكورة في الفصل.',
    'cause-result': 'ابحث عن علاقة السبب والنتيجة وافصل بين ما حدث ولماذا حدث.',
    'character-action': 'اعثر على الشخص المذكور في السؤال وتحقق من الفعل الذي قام به فعلًا.',
    motivation: 'ابحث عن الجملة التي تشرح لماذا تصرف الشخص أو قرر، واستخدم هذا السبب فقط.',
    theme: 'ارجع إلى الرسالة الصريحة في الفصل واربطها بالحدث، ولا تجب من تفصيل عشوائي.',
    'turning-point': 'اعثر على النقطة التي تغير فيها الموقف وتحقق مما اختلف بعدها.',
  };
  return (language === 'en' ? en : ar)[focus] ?? (language === 'en' ? 'Return to the relevant chapter evidence and check the exact relationship before trying again.' : 'ارجع إلى دليل الفصل المناسب وتحقق من العلاقة الدقيقة قبل المحاولة من جديد.');
};

const demand = (focus: string): BlueprintCognitiveDemandV2 => {
  if (focus === 'sequence') return 'sequence';
  if (focus === 'comparison') return 'compare';
  if (focus === 'cause-result' || focus === 'character-action' || focus === 'motivation') return 'connect';
  if (focus === 'theme' || focus === 'inference') return 'infer';
  return 'identify';
};

const improve = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter, override?: BlueprintCognitiveDemandV2): BlueprintAssessmentItem => {
  const point = chapter.evidencePoints.find(candidate => candidate.id === item.learningPointId);
  const focus = point?.focus ?? 'direct';
  const enExplanation = item.exercise.en.explanation || point?.claim.en || '';
  const arExplanation = item.exercise.ar.explanation || point?.claim.ar || '';
  return {
    ...item,
    learningOutcomeId: point?.learningOutcomeId ?? item.learningOutcomeId,
    exercise: {
      en: { ...item.exercise.en, feedback: { correct: enExplanation ? `Correct. ${enExplanation}` : 'Correct. The answer matches the chapter.', incorrect: retry(focus, 'en') } },
      ar: { ...item.exercise.ar, feedback: { correct: arExplanation ? `صحيح. ${arExplanation}` : 'صحيح. الإجابة تطابق الفصل.', incorrect: retry(focus, 'ar') } },
    },
    quality: {
      cognitiveDemand: override ?? demand(focus),
      assessmentPurpose: T('Measure a meaningful chapter idea without rewarding graphic or random-detail recall.', 'قياس فكرة ذات معنى من الفصل دون مكافأة حفظ التفاصيل المؤذية أو العشوائية.'),
      successEvidence: point?.claim ?? T('The learner gives the response supported by the linked evidence.', 'يقدم المتعلم الاستجابة التي يدعمها الدليل المرتبط.'),
      misconceptionTargets: [T('The learner may remember a nearby fact but miss the chapter relationship, choice, or social contrast.', 'قد يتذكر المتعلم حقيقة قريبة لكنه يغفل العلاقة أو الاختيار أو المقارنة الاجتماعية في الفصل.')],
      feedback: {
        correct: T('Confirm and connect the response to the relevant evidence.', 'تأكيد الاستجابة وربطها بالدليل المناسب.'),
        incorrect: T('Redirect to the relevant evidence relationship without giving the answer immediately.', 'إعادة التوجيه إلى علاقة الدليل المناسبة دون إعطاء الإجابة مباشرة.'),
        rationale: T('The retry cue repairs the specific type of confusion while keeping the learner inside the story source.', 'يعالج تلميح إعادة المحاولة نوع الخلط المحدد مع إبقاء المتعلم داخل مصدر القصة.'),
      },
    },
  };
};

export const applyMeccaA2FinalPedagogy = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const quick = quicks[chapter.chapterId];
  if (!quick) throw new Error(`[Mecca A2 Gold] Missing Quick Challenge for Chapter ${chapter.chapterId}.`);
  const items = chapter.assessmentItems.map(item => item.id === `mecca-a2-c${chapter.chapterId}-quick`
    ? { ...item, learningPointId: quick.learningPointId, exercise: quick.exercise }
    : item);
  return { ...chapter, assessmentItems: items.map(item => improve(item, chapter, item.id === `mecca-a2-c${chapter.chapterId}-quick` ? quick.demand : undefined)) };
};
