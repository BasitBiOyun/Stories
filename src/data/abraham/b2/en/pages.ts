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
  11: [
    v('present evidence', 'تقديم الأدلة', 'To offer reasons or proof in support of a claim.', 'عرض حجج أو براهين لتأييد ادعاء.'),
    v('correctness of their beliefs', 'صحة معتقداتهم', 'The claimed truth or validity of what a group believes.', 'مدى صحة أو صدق ما يعتقده قوم.'),
    v('ridiculousness', 'سخافة ادعاءاتهم', 'The quality of being unreasonable or impossible to take seriously.', 'كون الادعاء غير معقول ولا يستند إلى حجة قوية.'),
    v('threatened him', 'هددوه', 'Warned someone of intended harm or punishment.', 'أنذروه بإيقاع الأذى أو العقوبة.'),
    v('punishment of their gods', 'عقاب آلهتهم', 'Harm they believed their deities could inflict.', 'الأذى الذي اعتقدوا أن آلهتهم تستطيع إيقاعه.'),
  ],
  12: [
    v('paid no heed', 'لم يلتفت', 'Ignored a warning or refused to give it attention.', 'لم يهتم بالتهديد ولم يجعله يغير موقفه.'),
    v('benefit and harm', 'النفع والضر', 'Positive and negative effects that may reach a person.', 'ما يصل إلى الإنسان من خير أو أذى.'),
    v('mindful', 'لتذكير قومه', 'Consciously aware of an important truth or duty.', 'واعٍ بحقيقة أو واجب مهم ومتذكر له.'),
    v('evident error', 'ضلال مبين', 'A mistake or false belief that is clearly visible.', 'خطأ أو اعتقاد باطل ظاهر بوضوح.'),
    v('bitter struggle', 'معركة حادة', 'A severe and continuing conflict between opposing sides.', 'صراع شديد ومستمر بين طرفين متعارضين.'),
  ],
  13: [
    v('duty', 'من واجبه', 'A moral responsibility a person believes must be fulfilled.', 'مسؤولية أخلاقية يرى الإنسان وجوب القيام بها.'),
    v('embarrassed', 'بالإحراج', 'Made to feel ashamed or socially uncomfortable.', 'شعر بالخجل أو الضيق أمام الآخرين.'),
    v('fatherly love', 'الحب الأبوي', 'Affection associated with the relationship between a father and child.', 'المحبة المرتبطة بعلاقة الأب بابنه.'),
    v('straight way', 'صراطا سويا', 'A correct and morally sound path.', 'طريق مستقيم صحيح من الناحية الدينية والأخلاقية.'),
    v('disobedient', 'عصيا', 'Refusing to obey rightful authority or command.', 'رافض للطاعة ومخالف للأمر.'),
  ],
  14: [
    v('harsh behavior', 'سلوك والده القاسي', 'Severe or unkind conduct toward another person.', 'تصرف شديد أو غير لين تجاه شخص آخر.'),
    v('negative consequences', 'عواقب سلبية', 'Harmful results that may follow an action.', 'نتائج ضارة قد تترتب على فعل ما.'),
    v('cause of an illness', 'سبب المرض', 'The underlying factor responsible for a disease or problem.', 'العامل الأساسي الذي يؤدي إلى مرض أو مشكلة.'),
    v('clever judge', 'القاضي الذكي', 'A judge who reasons carefully to uncover facts.', 'قاض يستخدم التفكير الدقيق لكشف الحقيقة.'),
    v('suspect', 'المشتبه به', 'A person believed possibly to be responsible for an act.', 'شخص يظن أنه قد يكون مسؤولًا عن فعل.'),
  ],
  15: [
    v('defend their beliefs', 'الدفاع عن معتقداتهم', 'To give arguments in support of what they believe.', 'تقديم حجج لتأييد ما يؤمنون به.'),
    v('confirmed their belief', 'يؤكد إيمانهم', 'Made an existing belief seem more certain to them.', 'جعل اعتقادهم القائم يبدو أكثر ثبوتًا لديهم.'),
    v('worthy of worship', 'يستحق العبادة', 'Deserving religious devotion and worship.', 'جدير بأن تصرف له العبادة.'),
    v('regulates all affairs', 'مدبر شؤون الحياة', 'Controls and orders the different matters of existence.', 'يدبر وينظم شؤون الحياة المختلفة.'),
    v('persuade', 'ولإقناعهم', 'To lead someone to accept an idea through reasons or evidence.', 'جعل شخص يقبل فكرة عن طريق الحجة والدليل.'),
  ],
  16: [
    v('beauty of Allah\'s creation', 'جمال خلق الله', 'The order and excellence seen in what Allah has created.', 'ما يظهر في خلق الله من نظام وحسن.'),
    v('His power', 'قدرته', 'The ability and authority to bring about what He wills.', 'القدرة والسلطان على إيجاد ما يشاء.'),
    v('His wisdom', 'حكمته', 'Perfect knowledge expressed in right and purposeful action.', 'العلم التام الذي يظهر في الفعل الصحيح ذي الغاية.'),
    v('offers guidance', 'هدى عباده', 'Directs people toward the right path.', 'يرشد الناس إلى الطريق الصحيح.'),
    v('heals the sick', 'يشفي المرضى', 'Restores health to people who are ill.', 'يعيد العافية إلى من أصابه المرض.'),
  ],
  17: [
    v('held on tightly', 'تمسكوا بشدة', 'Refused to give up a belief or practice.', 'رفضوا ترك اعتقاد أو ممارسة وتمسكوا بها.'),
    v('great celebration', 'احتفالا كبيرا', 'A major public festival or communal event.', 'مناسبة عامة كبيرة يشارك فيها المجتمع.'),
    v('priests', 'الكهنة', 'Religious officials responsible for ritual duties.', 'أشخاص يتولون وظائف وشعائر دينية.'),
    v('offerings', 'قرابين', 'Objects or food presented as acts of religious devotion.', 'أشياء أو طعام يقدم تعبّدًا وتقربًا.'),
    v('silent and rigid', 'صامتا جامدا', 'Unable to speak, move, or show life.', 'لا ينطق ولا يتحرك ولا تظهر فيه حياة.'),
  ],
  18: [
    v('mocking them', 'يسخر منها', 'Treating something as foolish through ridicule.', 'يتعامل معها باستهزاء لأنها تبدو له باطلة.'),
    v('false gods', 'الآلهة الباطلة', 'Beings or objects wrongly treated as divine.', 'معبودات تعامل على أنها آلهة وهي باطلة.'),
    v('practical proof', 'دليل عملي', 'Evidence demonstrated through an observable action.', 'برهان يظهر من خلال فعل يمكن ملاحظته.'),
    v('smashed into pieces', 'مكسرة إلى قطع', 'Broken violently into many separate parts.', 'محطمة إلى أجزاء كثيرة منفصلة.'),
    v('wrongdoers', 'الظالمين', 'People who act unjustly or commit serious wrongdoing.', 'أشخاص يرتكبون الظلم أو الخطأ الجسيم.'),
  ],
  19: [
    v('may witness', 'يشهدون', 'May observe an event directly and testify about it.', 'يرون الحدث مباشرة ويشهدون عليه.'),
    v('reverted', 'فرجعوا', 'Returned to an earlier state, position, or belief.', 'عادوا إلى موقف أو حال سابق.'),
    v('arrested and judged', 'باعتقال إبراهيم ومحاكمته', 'Taken into custody and subjected to a formal judgment.', 'القبض على شخص وإخضاعه للمحاكمة.'),
    v('demonstrate in public', 'ليظهر لهم أمام الناس', 'To prove or show something openly before others.', 'إظهار أمر وإثباته علنًا أمام الناس.'),
    v('undamaged', 'لا يزال سليما', 'Remaining whole and not physically harmed.', 'باق على حاله من غير كسر أو ضرر.'),
  ],
  20: [
    v('culprit', 'الجاني', 'The person or thing responsible for a wrongdoing.', 'الشخص أو الشيء المسؤول عن فعل خاطئ.'),
    v('arrogance', 'كبرياءهم', 'Excessive pride that prevents acceptance of truth.', 'غرور شديد يمنع صاحبه من قبول الحق.'),
    v('authority as tyrants', 'سلطتهم كطغاة', 'Power exercised through oppressive and unjust rule.', 'سلطة تمارس بالقهر والظلم.'),
    v('chains', 'بالسلاسل', 'Metal restraints used to prevent a person from moving freely.', 'قيود معدنية تمنع الإنسان من الحركة بحرية.'),
    v('catapult', 'منجنيقا', 'A device used to launch a heavy object over a distance.', 'آلة تستخدم لقذف جسم ثقيل إلى مسافة.'),
  ],
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