import type { Exercise } from '../../../../types';
import {
  adamB1QuickChallengesAr,
  adamB1KnowledgeCheckExercisesAr,
  adamB1VocabularyChallengePairsAr,
  adamB1FinalChallengeExercisesAr,
} from './exercises';

export const adamB1PolishedQuickChallengesAr: Record<number, Exercise> = {
  ...adamB1QuickChallengesAr,
  2: {
    ...adamB1QuickChallengesAr[2],
    matchingPairs: [
      { left: 'تراب من أماكن مختلفة', right: 'اختلاف ألوان بشرة البشر' },
      { left: 'الحياة والعقل', right: 'التعلم والفهم' },
      { left: 'العلم الواسع', right: 'الخير والمسؤولية في الأرض' },
    ],
    correctAnswer: {
      'تراب من أماكن مختلفة': 'اختلاف ألوان بشرة البشر',
      'الحياة والعقل': 'التعلم والفهم',
      'العلم الواسع': 'الخير والمسؤولية في الأرض',
    },
    explanation: 'يربط الفصل تنوع التراب بتنوع البشر، والعقل بالتعلم والفهم، والعلم بالخير والمسؤولية في الأرض.',
  },
};

export const adamB1PolishedKnowledgeCheckExercisesAr = adamB1KnowledgeCheckExercisesAr;
export const adamB1PolishedVocabularyChallengePairsAr = adamB1VocabularyChallengePairsAr;

export const adamB1PolishedFinalChallengeExercisesAr: Exercise[] = adamB1FinalChallengeExercisesAr.map((exercise) => {
  if (exercise.id === 'adam-b1-ar-final-6') {
    return {
      ...exercise,
      title: 'الخطر وما يكشفه لاحقًا',
      instructions: 'صل كل خطر أو إخفاق بما يكشفه أو يواجهه لاحقًا في القصة.',
      question: 'كيف يطوّر الكتاب هذه الأفكار عبر فصول مختلفة؟',
      matchingPairs: [
        { left: 'يُعرَّف إبليس بأنه عدو', right: 'يقترب لاحقًا من آدم وحواء مدعيًا الصداقة' },
        { left: 'يريد إبليس أن ينسى الناس الله', right: 'يأتي الرسل لتذكير الناس بالله' },
        { left: 'يمنع الكبر الاعتراف بالخطأ', right: 'يعترف آدم وحواء بخطئهما ويتعلمان ويتوبان' },
      ],
      correctAnswer: {
        'يُعرَّف إبليس بأنه عدو': 'يقترب لاحقًا من آدم وحواء مدعيًا الصداقة',
        'يريد إبليس أن ينسى الناس الله': 'يأتي الرسل لتذكير الناس بالله',
        'يمنع الكبر الاعتراف بالخطأ': 'يعترف آدم وحواء بخطئهما ويتعلمان ويتوبان',
      },
      explanation: 'يربط النشاط بين ثلاثة أنماط متكررة: الخطر المتخفي، والهداية في مواجهة النسيان، والتوبة بوصفها نقيض الكبر.',
      feedback: { correct: 'صحيح.', incorrect: 'اربط الفصول 4–5 و7 و8–9.' },
    };
  }

  if (exercise.id === 'adam-b1-ar-final-7') {
    return {
      ...exercise,
      title: 'أدوار آدم عبر القصة',
      instructions: 'صل كل دور بالمرحلة التي يصبح فيها مهمًا.',
      question: 'كيف تتطور مسؤولية آدم عبر الكتاب كله؟',
      matchingPairs: [
        { left: 'الخليفة في الأرض', right: 'يُعلن في البداية بوصفه دورًا للإنسان في الأرض' },
        { left: 'الرسول', right: 'يصبح دورًا لهداية المجتمع بعد تكوّن مجتمع' },
        { left: 'الأب والجدّ', right: 'تحمل أسرته وذريته القصة ورسالتها إلى الأجيال التالية' },
      ],
      correctAnswer: {
        'الخليفة في الأرض': 'يُعلن في البداية بوصفه دورًا للإنسان في الأرض',
        'الرسول': 'يصبح دورًا لهداية المجتمع بعد تكوّن مجتمع',
        'الأب والجدّ': 'تحمل أسرته وذريته القصة ورسالتها إلى الأجيال التالية',
      },
      explanation: 'تتطور مسؤولية آدم من الخلافة إلى الهداية ثم إلى إرث يستمر عبر الأجيال اللاحقة.',
      feedback: { correct: 'صحيح.', incorrect: 'قارن بداية الكتاب بالفصل التاسع ثم الفصل الأخير.' },
    };
  }

  return exercise;
});
