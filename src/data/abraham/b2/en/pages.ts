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
  21: [
    v('flames reaching the sky', 'ألسنة لهبها تبلغ السماء', 'Very high flames rising from an intense fire.', 'لهب شديد يرتفع إلى علو كبير.'),
    v('chief priest', 'كبير الكهنة', 'The highest-ranking religious official among the priests.', 'أعلى مسؤول ديني بين الكهنة.'),
    v('angel Gabriel', 'الملك جبريل', 'The angel Gabriel, presented as a messenger from Allah.', 'جبريل عليه السلام، الملك الذي يبلغ رسالات الله.'),
    v('coolness and safety', 'بردا وسلاما', 'A state in which the fire no longer causes harm.', 'حال أصبحت فيها النار باردة لا تؤذي.'),
    v('burned his ropes', 'تحرق إلا حباله', 'Destroyed the restraints while leaving Abraham unharmed.', 'أحرقت القيود وحدها وتركت إبراهيم سالمًا.'),
  ],
  22: [
    v('sufficient for me', 'حسبي الله', 'Enough to rely on completely for protection and support.', 'كاف لي أعتمد عليه في الحفظ والنصرة.'),
    v('breathless', 'بلا نفس', 'Temporarily unable to breathe normally.', 'غير قادر على التنفس بصورة طبيعية.'),
    v('completely unharmed', 'دون أي أذى', 'Having suffered no injury or damage at all.', 'لم يصبه أي ضرر أو إصابة.'),
    v('astonishment', 'أصوات الدهشة', 'Great surprise caused by an unexpected event.', 'دهشة شديدة بسبب حدث غير متوقع.'),
    v('despotic rulers', 'الحكام الطغاة', 'Rulers who exercise power in an oppressive way.', 'حكام يستخدمون السلطة بالقهر والاستبداد.'),
  ],
  23: [
    v('declared themselves as gods', 'ادعوا الألوهية', 'Claimed divine status and authority for themselves.', 'زعموا لأنفسهم مقام الألوهية وسلطتها.'),
    v('filled with rage', 'امتلأ غضبا', 'Became extremely and intensely angry.', 'اشتد غضبه حتى سيطر عليه.'),
    v('held a dialogue', 'دار بينهما حوار', 'Took part in a structured exchange of arguments.', 'جرى بين طرفين تبادل منظم للكلام والحجج.'),
    v('undeniable', 'لا يمكن دحضه', 'So strong that it cannot reasonably be refuted.', 'قوي إلى درجة يصعب معها إبطاله بالحجة.'),
    v('sentenced to death', 'حكم عليهما بالإعدام', 'Officially ordered to be executed as a punishment.', 'صدر عليه حكم رسمي بالقتل عقوبةً.'),
  ],
  24: [
    v('put forth', 'طرح', 'Presented an argument, idea, or challenge for consideration.', 'قدم فكرة أو حجة أو تحديًا للنظر فيه.'),
    v('unquestionably', 'بلا شك', 'In a way that leaves no reasonable doubt.', 'على نحو لا يترك مجالًا معقولًا للشك.'),
    v('unable to speak', 'أعجزه عن الكلام', 'Left without an effective answer or response.', 'جعله غير قادر على تقديم جواب.'),
    v('entire kingdom', 'جميع أنحاء مملكة بابل', 'The whole territory under a ruler’s authority.', 'كل الأراضي الواقعة تحت سلطة الملك.'),
    v('every means', 'بكل الوسائل', 'All available methods that could be used to reach a goal.', 'جميع الطرق المتاحة لتحقيق غاية.'),
  ],
  25: [
    v('emigrate', 'قرر الهجرة', 'To leave one land and settle in another.', 'مغادرة بلد للاستقرار في بلد آخر.'),
    v('settled there', 'استقر فيها', 'Established a permanent or long-term home in a place.', 'اتخذ مكانًا للإقامة الدائمة أو الطويلة.'),
    v('judged fairly', 'بالعدل', 'Made decisions according to justice rather than bias.', 'حكم وفق العدل من غير تحيز.'),
    v('righteousness', 'الحق والصواب', 'Moral correctness and commitment to what is right.', 'الاستقامة الأخلاقية والالتزام بالحق.'),
    v('sterile', 'عاقرا', 'Unable to have children.', 'غير قادرة على الإنجاب.'),
  ],
  26: [
    v('offspring', 'نسل هذين الابنين', 'Children and later descendants of a person.', 'الأبناء والذرية الذين يأتون بعد الإنسان.'),
    v('descendants', 'ذرية إسماعيل', 'People descended from a particular ancestor.', 'أشخاص ينحدرون من جد معين.'),
    v('Sacred City', 'المدينة المقدسة', 'A city regarded as holy because of its religious importance.', 'مدينة لها قداسة بسبب مكانتها الدينية.'),
    v('master plan', 'تدبير الله الحكيم', 'A larger purposeful plan guiding a sequence of events.', 'خطة واسعة ذات غاية تربط أحداثًا متعددة.'),
    v('uncultivated valley', 'واد غير ذي زرع', 'A valley where crops are not grown and vegetation is scarce.', 'واد لا توجد فيه زراعة ويقل فيه النبات.'),
  ],
  27: [
    v('skin of water', 'سقاء من الماء', 'A traditional animal-skin container used to carry water.', 'وعاء تقليدي من الجلد يستخدم لحمل الماء.'),
    v('leather bag', 'كيسا جلديا', 'A bag made from treated animal skin.', 'كيس مصنوع من جلد الحيوان.'),
    v('anxious', 'تشعر بالقلق', 'Worried because the outcome of a situation is uncertain.', 'شعور بالقلق بسبب عدم وضوح ما سيحدث.'),
    v('degree of comfort', 'بقدر من الراحة', 'A limited but real feeling of reassurance.', 'قدر من الطمأنينة يخفف القلق.'),
    v('own decision', 'من تلقاء نفسه', 'A choice made independently without an external command.', 'قرار يتخذه الإنسان بإرادته من غير توجيه خارجي.'),
  ],
  28: [
    v('Sacred House', 'البيت الحرام', 'The holy sanctuary identified with the Ka‘ba.', 'المكان المقدس الذي يقصد به الكعبة.'),
    v('rebuilding', 'إعادة بناء', 'Constructing a structure again after it has been lost or damaged.', 'بناء منشأة من جديد بعد زوالها أو تلفها.'),
    v('barren valley', 'وادي مكة الجدب', 'A dry valley with little or no vegetation.', 'واد جاف يقل فيه النبات أو ينعدم.'),
    v('renewed center', 'مركزا للتوحيد', 'A place restored to function again as a central focus.', 'مكان أعيد ليؤدي دوره مركزًا من جديد.'),
    v('throughout the Arabian Peninsula', 'جميع أنحاء شبه الجزيرة العربية', 'Across the different regions of the Arabian Peninsula.', 'في المناطق المختلفة من شبه الجزيرة العربية.'),
  ],
  29: [
    v('companion', 'صحابة النبي', 'A person who lived with and supported Prophet Muhammad.', 'من لقي النبي محمد وآمن به وصحبه.'),
    v('narrated many hadiths', 'الرواة الكبار للحديث', 'Reported a large number of transmitted sayings and accounts.', 'نقل عددًا كبيرًا من الأحاديث والروايات.'),
    v('Safa', 'جبل الصفا', 'One of the two hills between which Hajar searched for help.', 'أحد الجبلين اللذين سعت هاجر بينهما طلبًا للماء.'),
    v('patient search', 'بحث هاجر المثابر', 'A persistent effort continued despite hardship.', 'سعي مستمر بصبر رغم المشقة.'),
    v('pilgrimage', 'الحج', 'A religious journey to a sacred place.', 'رحلة دينية إلى مكان مقدس.'),
  ],
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
