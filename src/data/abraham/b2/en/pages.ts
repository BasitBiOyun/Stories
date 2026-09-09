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
//__K01__
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
  30: [
    v('hit the ground', 'ضرب الملك الأرض', 'Struck the earth with force.', 'ضرب الأرض بقوة.'),
    v('small basin', 'حوضا صغيرا', 'A small enclosed area used to collect or hold water.', 'موضع صغير يجمع الماء ويحفظه.'),
    v('abundant and flowing', 'الوفرة والتدفق', 'Present in a large quantity and moving continuously.', 'كثير ومستمر في الجريان.'),
    v('origin is unknown', 'مجهول المنشأ', 'Having a source that is not known or identified.', 'لا يعرف مصدره أو أصله.'),
    v('tribe of Jurham', 'قبيلة جرهم', 'The tribal group that later settled near the Zamzam water.', 'القبيلة التي استقرت لاحقًا قرب ماء زمزم.'),
  ],
  31: [
    v('gentle character', 'لطف طباعه', 'A kind and mild way of behaving toward others.', 'طبع يتصف باللين وحسن المعاملة.'),
    v('ultimate test', 'أعظم اختبار', 'The most demanding test of faith or commitment.', 'أشد اختبار للإيمان أو الالتزام.'),
    v('glad tidings', 'فبشرناه', 'Good news that brings joy and hope.', 'خبر سار يجلب الفرح والأمل.'),
    v('forbearing boy', 'غلام حليم', 'A boy described as patient, calm, and self-controlled.', 'غلام يتصف بالصبر والحلم وضبط النفس.'),
    v('slaughtering you', 'أذبحك', 'Killing as an act of sacrifice in the reported vision.', 'الذبح بوصفه قربانًا في الرؤيا المذكورة.'),
  ],
  32: [
    v("obeyed Allah's command", 'بطاعة الله', 'Acted in complete submission to what Allah commanded.', 'استجاب لأمر الله بخضوع كامل.'),
    v('fulfilled the vision', 'صدقت الرؤيا', 'Carried out what the vision required as a test.', 'حقق ما دلت عليه الرؤيا من اختبار.'),
    v('willingness to sacrifice', 'استعداده لتضحية', 'Readiness to give up something deeply valued for a higher duty.', 'الاستعداد لبذل شيء عزيز من أجل واجب أعلى.'),
    v('leader of humanity', 'إماما للناس', 'A person appointed as a model and guide for people.', 'شخص جعل قدوة ودليلًا للناس.'),
    v('proxy', 'الفداء', 'A substitute given in place of another.', 'بديل يقدم عوضًا عن غيره.'),
  ],
  33: [
    v('hundreds of millions', 'مئات الملايين', 'A very large number measured in multiple hundreds of millions.', 'عدد ضخم يبلغ مئات الملايين.'),
    v('widespread', 'شائعة', 'Existing or practiced across many places or among many people.', 'منتشر بين عدد كبير من الناس أو المناطق.'),
    v('firstborn children', 'أول الأبناء', 'Children born first in their families.', 'الأبناء الذين يولدون أولًا في أسرهم.'),
    v('equivalent to human life', 'تعادل حياة الإنسان', 'Treated as equal in value to a human life in the described context.', 'تعد مساوية في القيمة لحياة الإنسان في السياق المذكور.'),
    v('separation', 'بعد فراق', 'A period in which people are apart from one another.', 'مدة يكون فيها الأشخاص بعيدين بعضهم عن بعض.'),
  ],
  34: [
    v('made sacred', 'حرمه الله', 'Declared holy and protected by religious sanctity.', 'جعله مقدسًا محفوظ الحرمة.'),
    v('important task', 'أمر عظيم', 'A significant duty requiring serious effort.', 'واجب مهم يحتاج إلى جهد وعناية.'),
    v('foundations', 'أسس البناء القديم', 'The lowest structural parts on which a building is constructed.', 'الأجزاء السفلية التي يقوم عليها البناء.'),
    v('Al-Maqam', 'حجر المقام', 'The stone associated with Abraham while building the Ka‘ba.', 'الحجر المرتبط بإبراهيم أثناء بناء الكعبة.'),
    v('handing him the stones', 'يناوله الحجارة', 'Passing building stones to another person by hand.', 'إعطاء الحجارة لشخص آخر ليستخدمها في البناء.'),
  ],
  35: [
    v('restorer', 'معيد بناء', 'A person who rebuilds or returns something to an earlier state.', 'شخص يعيد بناء شيء أو إرجاعه إلى حال سابقة.'),
    v('clear evidence', 'دليل واضح', 'Strong and understandable proof supporting a conclusion.', 'برهان قوي وواضح يؤيد نتيجة.'),
    v('completion of Abraham', 'إكمالا لرسالة إبراهيم', 'The final stage that brings Abraham’s mission to completion.', 'المرحلة التي تتم بها رسالة إبراهيم.'),
    v('chosen race', 'عرق معين', 'A particular ethnic group selected over others.', 'جماعة عرقية محددة تختار دون غيرها.'),
    v('coexisted with idolatry', 'جنبا إلى جنب مع الوثنية', 'Existed at the same time and place as idol worship.', 'وجد في الوقت والمكان نفسيهما مع الوثنية.'),
  ],
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
