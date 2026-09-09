import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
//__C01__
// c01b

// c02a
//__C02__
// c02b

// c03a
//__C03__
// c03b

// c04a
//__C04__
// c04b

// c05a
//__C05__
// c05b

// c06a
//__C06__
// c06b

// c07a
//__C07__
// c07b

// c08a
//__C08__
// c08b

// c09a
//__C09__
// c09b

// c10a
//__C10__
// c10b

// c11a
//__C11__
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
  1: [
    v('monotheistic belief', 'العقيدة التوحيدية', 'Belief that Allah is One and has no partner.', 'الإيمان بأن الله واحد لا شريك له.'),
    v('fundamental figure', 'الشخصية الأساسية', 'A person of central importance in a religious or historical tradition.', 'شخصية ذات أهمية محورية في تقليد ديني أو تاريخي.'),
    v('direct forefather', 'الجد المباشر', 'A direct ancestor in a family line.', 'جد يقع مباشرة في سلسلة النسب.'),
    v('Allah’s friend', 'خليل الله', 'A unique title of closeness and devotion given to Abraham.', 'لقب فريد يدل على القرب والمحبة والطاعة لله.'),
    v('idol-worshipping nation', 'يعبدون الأصنام', 'A society in which the worship of idols is widespread.', 'قوم تنتشر بينهم عبادة الأصنام.'),
  ],
  2: [
    v('life mission', 'مهمة حياته', 'The central purpose guiding a person’s life and actions.', 'الغاية الأساسية التي توجه حياة الإنسان وأعماله.'),
    v('morally upright', 'مستقيم في الأخلاق', 'Behaving according to sound moral principles.', 'ملتزم بالسلوك القويم والمبادئ الأخلاقية.'),
    v('through reasoning', 'عن طريق العقل والتفكير', 'By using logical thought to reach a conclusion.', 'باستخدام التفكير العقلي والمنطقي للوصول إلى نتيجة.'),
    v('human capacity', 'قدرات الإنسان', 'The ability of human beings to think, act, or develop.', 'قدرة الإنسان على التفكير والعمل والتطور.'),
    v('acts of worship', 'العبادات', 'Religious actions performed as devotion to Allah.', 'أعمال دينية يؤديها المؤمن تقربًا إلى الله.'),
  ],
  3: [
    v('became mixed with idolatry', 'اختلط هذا الاعتقاد بالشرك', 'Lost its original purity by becoming combined with idol worship.', 'فقد صفاءه الأصلي حين اختلط بالشرك وعبادة غير الله.'),
    v('corrupted', 'التحريف', 'Changed from an original form in a damaging or misleading way.', 'تغيير الشيء عن أصله بصورة تفسد معناه أو حقيقته.'),
    v('first revelation', 'الوحي الأول', 'The first divine message received by a prophet.', 'أول رسالة أو وحي إلهي يتلقاه النبي.'),
    v('prophethood', 'بنبوة', 'The status and mission of being a prophet.', 'مقام النبي ومهمته في تبليغ رسالة الله.'),
    v('burning sun', 'الشمس الحارقة', 'Extremely hot sunlight capable of causing suffering.', 'شمس شديدة الحرارة تسبب المشقة والألم.'),
  ],
  4: [
    v('Islamic sources', 'المصادر الإسلامية', 'Texts and reports used within the Islamic scholarly tradition.', 'نصوص وروايات يعتمد عليها التراث العلمي الإسلامي.'),
    v('migrated from there', 'هاجر من هناك', 'Moved from one region to settle in another.', 'انتقل من منطقة إلى أخرى للإقامة فيها.'),
    v('prosperous', 'مزدهرة', 'Economically or materially successful and flourishing.', 'ناجحة ومتقدمة من الناحية المادية والاقتصادية.'),
    v('agriculture and industry', 'الزراعة والصناعة', 'Two major areas of economic production.', 'مجالان أساسيان من مجالات الإنتاج الاقتصادي.'),
    v('kings and rulers', 'ملوكهم وحكامهم', 'People holding political authority over a society.', 'أشخاص يملكون السلطة السياسية على المجتمع.'),
  ],
  5: [
    v('whole system', 'النظام كله', 'The complete social or political structure, not one isolated part.', 'البنية الاجتماعية أو السياسية كاملة لا جزءًا منفردًا منها.'),
    v('fortunetellers', 'العرافين', 'People claiming to predict events through supernatural knowledge.', 'أشخاص يزعمون معرفة المستقبل بوسائل غيبية.'),
    v('astrologers', 'المنجمين', 'People who interpret stars as signs of human events.', 'أشخاص يربطون حركة النجوم بأحداث البشر.'),
    v('reign', 'حكم نمرود', 'The period or authority of a ruler’s government.', 'مدة حكم الملك أو سلطته على البلاد.'),
    v('throne', 'يهدد عرشه', 'A symbol of royal power and political rule.', 'رمز للسلطة الملكية والحكم السياسي.'),
  ],
  6: [
    v('sound judgement', 'رشده', 'The ability to make wise and reasonable decisions.', 'القدرة على اتخاذ قرارات حكيمة وصائبة.'),
    v('wisdom', 'الحكمة', 'Deep understanding used to make good judgments.', 'فهم عميق يساعد على حسن الحكم والتصرف.'),
    v('sculptures', 'تماثيل وأصناما', 'Figures shaped from material such as stone or wood.', 'أشكال مصنوعة من الحجر أو الخشب ونحوهما.'),
    v('spontaneously', 'تلقائيا', 'Naturally and without being planned in advance.', 'بصورة طبيعية ومن غير تخطيط مسبق.'),
    v('Chief God', 'الإله الأكبر', 'The deity regarded as highest within a polytheistic system.', 'الإله الذي يعد الأعلى في نظام متعدد الآلهة.'),
  ],
  7: [
    v('reasonable person', 'شخص عاقل', 'A person capable of logical and sensible judgment.', 'شخص قادر على التفكير المنطقي والحكم السليم.'),
    v('lifeless', 'بلا حياة', 'Having no life or living power.', 'خالي من الحياة ولا يملك قدرة الكائن الحي.'),
    v('entirely helpless', 'عاجزة تماما', 'Completely unable to act or defend oneself.', 'غير قادر إطلاقًا على الفعل أو الدفاع عن النفس.'),
    v('niche', 'محراب', 'A recessed or designated sacred space in a place of worship.', 'موضع مخصص أو مجوف داخل مكان العبادة.'),
    v('capable of hearing', 'قادرة على سماع دعائهم', 'Able to receive and respond to sound or prayer.', 'قادر على سماع الصوت أو الدعاء والاستجابة له.'),
  ],
  8: [
    v('priest', 'كاهنا', 'A religious official serving in a place of worship.', 'شخص يتولى وظيفة دينية في مكان للعبادة.'),
    v('displaying his hatred', 'إظهار كراهيته', 'Openly showing strong rejection or dislike.', 'إظهار الرفض أو الكراهية الشديدة بصورة واضحة.'),
    v('cave', 'كهفا', 'A natural hollow space inside a mountain or rock.', 'تجويف طبيعي داخل جبل أو صخر.'),
    v('certainty', 'الموقنين', 'A state of firm conviction without serious doubt.', 'حالة من اليقين الراسخ من غير شك مؤثر.'),
    v('those that set', 'الآفلين', 'Celestial objects that disappear below the horizon.', 'الأجرام التي تغيب وتختفي عن الأفق.'),
  ],
  9: [
    v('erring people', 'القوم الضالين', 'People who have moved away from the correct path.', 'قوم ابتعدوا عن الطريق أو الاعتقاد الصحيح.'),
    v('innocent', 'بريء', 'Free from responsibility for or association with something wrong.', 'منزّه عن المشاركة في أمر باطل أو المسؤولية عنه.'),
    v('heavenly bodies', 'الأجرام السماوية', 'Natural objects in space such as stars, planets, the sun, and the moon.', 'أجسام طبيعية في السماء كالنجوم والكواكب والشمس والقمر.'),
    v('astronomical objects', 'النجوم والكويكبات', 'Objects studied as part of the physical universe beyond Earth.', 'أجرام يدرسها علم الفلك خارج الأرض.'),
    v('Creator’s command', 'بأمر الخالق', 'The authority by which created things follow an ordered system.', 'الأمر الذي تخضع له المخلوقات في نظامها.'),
  ],
  10: [
    v('evidently created', 'مخلوقة بوضوح', 'Clearly showing the characteristics of something created rather than eternal.', 'تظهر بوضوح صفات المخلوق لا صفات الأزلي.'),
    v('everlasting', 'أزلي لا يزول', 'Continuing forever without ending or disappearing.', 'دائم لا ينتهي ولا يزول.'),
    v('unworthy of worship', 'غير مستحقة للعبادة', 'Not deserving religious devotion or worship.', 'لا تستحق أن تصرف لها العبادة.'),
    v('rational thinking', 'تفكير إبراهيم العقلي', 'Reasoning based on logic and evidence.', 'تفكير يعتمد على العقل والمنطق والدليل.'),
    v('uncover the truth', 'كشف الحقيقة', 'To reveal what is actually true after examination.', 'إظهار الحقيقة بعد البحث والنظر.'),
  ],
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
//__K04__
// k04b
};

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b
// t03a
//__T03__
// t03b
