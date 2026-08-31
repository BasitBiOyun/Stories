import type { Exercise } from '../../../../types';
import {
  mosesB2QuickChallengesAr,
  mosesB2KnowledgeCheckExercisesAr,
  mosesB2VocabularyChallengePairsAr,
  mosesB2FinalChallengeExercisesAr,
} from './exercises';

const feedback = {
  correct: 'صحيح. إجابتك مدعومة بأدلة مترابطة من القصة.',
  incorrect: 'ليس بعد. اربط الفكرة بالأدلة من الفصول ذات الصلة ثم حاول مرة أخرى.',
};

const matching = (id: string, question: string, pairs: { left: string; right: string }[], explanation: string): Exercise => ({
  id,
  type: 'matching',
  title: 'التحدي الختامي',
  instructions: 'صل كل فكرة بالدليل أو القضية العابرة للفصول التي تناسبها.',
  question,
  matchingPairs: pairs,
  correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
  explanation,
  feedback,
});

const fill = (id: string, question: string, fillBlanksText: string, correctAnswer: string, explanation: string): Exercise => ({
  id,
  type: 'fill-blanks',
  title: 'التحدي الختامي',
  instructions: 'أكمل التركيب بأهم لغة تحمل المعنى في القصة.',
  question,
  fillBlanksText,
  correctAnswer,
  explanation,
  feedback,
});

const finalOverrides: Record<string, Exercise> = {
  'mo-b2-ar-f6': matching(
    'mo-b2-ar-f6',
    'صل كل شخصية أو جماعة بالفعل الذي يكشف موقفًا أو قيمة بوضوح.',
    [
      { left: 'آسية', right: 'تستعمل الرحمة والإقناع لحماية الطفل داخل بيئة سياسية عنيفة' },
      { left: 'موسى عند البئر', right: 'يخدم الآخرين رغم تعبه وعطشه' },
      { left: 'السحرة', right: 'يقدمون معرفتهم بالآية على سلامتهم السياسية' },
      { left: 'موسى عند البحر', right: 'يعبر عن الثقة قبل ظهور طريق مادي للنجاة' },
    ],
    'تجمع الأفعال بين الرحمة والخدمة والاقتناع المبني على التمييز والثقة عبر مراحل مختلفة من القصة.',
  ),
  'mo-b2-ar-f7': matching(
    'mo-b2-ar-f7',
    'صل كل صراع بالقضية الأعمق التي يطورها السرد.',
    [
      { left: 'مشروعات النيل والعمل القسري', right: 'ترتبط السيطرة على المورد باستغلال قوة العمل والسلطة السياسية' },
      { left: 'طلب موسى إطلاق بني إسرائيل', right: 'تواجه الحرية والربوبية ادعاء فرعون ملك الناس' },
      { left: 'المسابقة مع السحرة', right: 'يواجه الدليل وتمييز الخبراء إدارة الخداع أمام الجمهور' },
      { left: 'عبادة العجل بعد النجاة', right: 'لا تنهي الحرية الجسدية الحاجة إلى الهداية الأخلاقية المستمرة' },
    ],
    'تجمع المطابقات مشكلات سياسية ومعرفية وأخلاقية بدل إعادة اختبار حقائق فصل واحد.',
  ),
  'mo-b2-ar-f8': fill(
    'mo-b2-ar-f8',
    'أكمل التحليل العابر للفصول لحكم فرعون.',
    'تربط فصول النيل بين التحكم في الموارد وقوة العمل وبين [blank] فرعون السياسية.',
    'سلطة',
    'تربط الفصول الأولى بين النيل والمشروعات والعمل القسري والإدارة وسلطة فرعون.',
  ),
  'mo-b2-ar-f9': fill(
    'mo-b2-ar-f9',
    'أكمل تركيب نهاية القصة بعد النجاة الجسدية.',
    'تظهر النهاية أن الخلاص من الظلم لا يلغي الحاجة المستمرة إلى [blank].',
    'الهداية',
    'بعد البحر يستمر السرد في قضايا العبادة والتوراة والعصيان وجهد موسى المتواصل في هداية قومه.',
  ),
};

export const mosesB2QuickChallengesArPolished = mosesB2QuickChallengesAr;
export const mosesB2KnowledgeCheckExercisesArPolished = mosesB2KnowledgeCheckExercisesAr;
export const mosesB2VocabularyChallengePairsArPolished = mosesB2VocabularyChallengePairsAr;
export const mosesB2FinalChallengeExercisesArPolished: Exercise[] = mosesB2FinalChallengeExercisesAr.map(
  exercise => finalOverrides[exercise.id] ?? exercise,
);
