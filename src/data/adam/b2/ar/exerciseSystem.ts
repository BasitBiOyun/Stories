import type { Exercise } from '../../../../types';
import {
  adamB2FinalChallengeExercisesAr,
  adamB2KnowledgeCheckExercisesAr,
  adamB2QuickChallengesAr,
  adamB2VocabularyChallengePairsAr,
} from './exercises';

/** Active polished Adam B2 Arabic exercise system. */
export const adamB2QuickChallengesPolishedAr: Record<number, Exercise> = {
  ...adamB2QuickChallengesAr,
  3: {
    id: 'adam-b2-qc-3-ar',
    type: 'matching',
    title: 'العلم والقدرة الإنسانية',
    instructions: 'صل كل فكرة بالدور الذي يمنحه لها الفصل.',
    question: 'كيف يربط الفصل الثالث العلم بالقدرة الإنسانية؟',
    matchingPairs: [
      { left: 'تعلم الأسماء', right: 'القدرة على اللغة والتفكير والثقافة والحضارة' },
      { left: 'إقرار الملائكة بحدود علمهم', right: 'العلم يظهر هبة من الله لا تفوقا ذاتيا' },
      { left: 'إظهار آدم لما تعلمه', right: 'يتحول العلم من امتلاك نظري إلى قدرة ظاهرة في الفعل' },
    ],
    correctAnswer: {
      'تعلم الأسماء': 'القدرة على اللغة والتفكير والثقافة والحضارة',
      'إقرار الملائكة بحدود علمهم': 'العلم يظهر هبة من الله لا تفوقا ذاتيا',
      'إظهار آدم لما تعلمه': 'يتحول العلم من امتلاك نظري إلى قدرة ظاهرة في الفعل',
    },
    explanation: 'يربط الفصل بين العلم المعلم والقدرات الإنسانية الأوسع، ويبين في الحوار حدود العلم وإمكان إظهاره في الفعل.',
    feedback: { correct: 'صحيح.', incorrect: 'افصل بين ما تعلمه آدم، وما أقر به الملائكة، وما استطاع آدم أن يظهره بعد ذلك.' },
  },
  9: {
    id: 'adam-b2-qc-9-ar',
    type: 'matching',
    title: 'التوبة كمسار',
    instructions: 'صل كل استجابة بما تدل عليه.',
    question: 'كيف يعرف الفصل التاسع التعافي الأخلاقي؟',
    matchingPairs: [
      { left: 'معرفة الخطأ', right: 'البحث عن التقصير في النفس بدل حماية الكبر' },
      { left: 'الرجوع فورا إلى الله', right: 'تحويل الندم إلى تغيير فعلي في الاتجاه' },
      { left: 'الاستمرار تحت الهداية', right: 'تحويل التعافي إلى مسار مسؤول مستمر لا إلى لحظة ندم فقط' },
    ],
    correctAnswer: {
      'معرفة الخطأ': 'البحث عن التقصير في النفس بدل حماية الكبر',
      'الرجوع فورا إلى الله': 'تحويل الندم إلى تغيير فعلي في الاتجاه',
      'الاستمرار تحت الهداية': 'تحويل التعافي إلى مسار مسؤول مستمر لا إلى لحظة ندم فقط',
    },
    explanation: 'يعرض الفصل التعافي بوصفه معرفة للخطأ ورجوعا ثم اتجاها جديدا تصوغه الهداية.',
    feedback: { correct: 'صحيح.', incorrect: 'تتبع الانتقال من معرفة الخطأ إلى الرجوع ثم إلى الاستمرار في اتجاه مختلف.' },
  },
  16: {
    id: 'adam-b2-qc-16-ar',
    type: 'matching',
    title: 'إرث نبوي',
    instructions: 'صل كل عمل أخير بمعناه في الفصل.',
    question: 'كيف يهيئ آدم الأجيال اللاحقة قبل وفاته؟',
    matchingPairs: [
      { left: 'يجعل شيث خليفة له', right: 'تنتقل مسؤولية الهداية بعد آدم' },
      { left: 'يعلمه العبادة والمسؤولية', right: 'يتلقى الجيل التالي ممارسة عملية لا مجرد منصب' },
      { left: 'يحذر من إبليس ويذكر الأنبياء القادمين', right: 'تتلقى الأجيال تحذيرا ووعدا باستمرار الهداية' },
    ],
    correctAnswer: {
      'يجعل شيث خليفة له': 'تنتقل مسؤولية الهداية بعد آدم',
      'يعلمه العبادة والمسؤولية': 'يتلقى الجيل التالي ممارسة عملية لا مجرد منصب',
      'يحذر من إبليس ويذكر الأنبياء القادمين': 'تتلقى الأجيال تحذيرا ووعدا باستمرار الهداية',
    },
    explanation: 'يعرض الفصل الإرث بوصفه خلافة وتعليما وتحذيرا وثقة باستمرار الهداية.',
    feedback: { correct: 'صحيح.', incorrect: 'افصل بين من يتلقى المسؤولية، وما يتعلمه، وما يقوله آدم عن الهداية المقبلة.' },
  },
};

export const adamB2KnowledgeCheckExercisesPolishedAr: Exercise[] = adamB2KnowledgeCheckExercisesAr;
export const adamB2VocabularyChallengePairsPolishedAr = adamB2VocabularyChallengePairsAr;

export const adamB2FinalChallengeExercisesPolishedAr: Exercise[] = adamB2FinalChallengeExercisesAr.map(exercise => {
  if (exercise.id === 'adam-b2-final-8-ar') {
    return {
      id: 'adam-b2-final-8-ar',
      type: 'fill-blanks',
      title: 'التحدي النهائي 8',
      instructions: 'أكمل التركيب العام بأدق مفهوم.',
      question: 'ما المبدأ الذي يربط الكتاب مرارا بين حرية الاختيار ونتائجه الأخلاقية؟',
      fillBlanksText: 'تربط القصة حرية الاختيار مرارا بـ[blank]، لأن القرارات تفضي إلى نتائج أخلاقية وتتطلب من صاحبها جوابا عنها.',
      correctAnswer: 'المسؤولية',
      explanation: 'من إبليس وآدم إلى هابيل وقابيل، يربط الكتاب الاختيار بتحمل ما يترتب عليه من نتائج.',
      feedback: { correct: 'صحيح.', incorrect: 'فكر في المفهوم الذي يضعه الكتاب إلى جانب الاختيار عندما تترتب على الأفعال نتائج.' },
    };
  }
  return exercise;
});
