import type { Exercise } from '../../../../types';
import {
  mosesB1QuickChallengesAr,
  mosesB1KnowledgeCheckExercisesAr,
  mosesB1VocabularyChallengePairsAr,
  mosesB1FinalChallengeExercisesAr,
} from './exercises';

export const mosesB1PolishedQuickChallengesAr = mosesB1QuickChallengesAr;
export const mosesB1PolishedKnowledgeCheckExercisesAr = mosesB1KnowledgeCheckExercisesAr;
export const mosesB1PolishedVocabularyChallengePairsAr = mosesB1VocabularyChallengePairsAr;

export const mosesB1PolishedFinalChallengeExercisesAr: Exercise[] = mosesB1FinalChallengeExercisesAr.map((exercise) => {
  if (exercise.id === 'moses-b1-ar-final-6') {
    return {
      ...exercise,
      title: 'السبب والنتيجة عبر الرحلة',
      instructions: 'صِل كل منعطف بالنتيجة التي تفتح المرحلة التالية.',
      question: 'كيف تقود أحداث أساسية إلى مراحل جديدة في رحلة موسى؟',
      matchingPairs: [
        { left: 'يحذر رجل موسى من الجنود', right: 'يغادر موسى مصر ويصل إلى مدين' },
        { left: 'تخبر الفتاتان والدهما بمساعدة موسى', right: 'يُدعى موسى إلى البيت ويُعرض عليه العمل' },
        { left: 'ينادي الله موسى ويمنحه الآيات', right: 'يعود موسى إلى مهمة مواجهة فرعون وإبلاغ الرسالة' },
      ],
      correctAnswer: {
        'يحذر رجل موسى من الجنود': 'يغادر موسى مصر ويصل إلى مدين',
        'تخبر الفتاتان والدهما بمساعدة موسى': 'يُدعى موسى إلى البيت ويُعرض عليه العمل',
        'ينادي الله موسى ويمنحه الآيات': 'يعود موسى إلى مهمة مواجهة فرعون وإبلاغ الرسالة',
      },
      explanation: 'تربط العلاقات الثلاث بين الخطر والخروج، والمساعدة والاستقرار، والنداء الإلهي وبداية المهمة العامة.',
      feedback: { correct: 'صحيح.', incorrect: 'تتبّع الانتقالات الكبرى من مصر إلى مدين ثم من مدين إلى مهمة مواجهة فرعون.' },
    };
  }

  if (exercise.id === 'moses-b1-ar-final-7') {
    return {
      ...exercise,
      title: 'الادعاء والدليل عبر القصة',
      instructions: 'صِل كل فكرة عامة بأقوى دليل يدعمها.',
      question: 'أي دليل من القصة يدعم كل تفسير؟',
      matchingPairs: [
        { left: 'موسى يبادر إلى مساعدة من يحتاج', right: 'يسقي للفتاتين عندما يرى صعوبة موقفهما' },
        { left: 'كبر فرعون يستمر رغم تكرار التحذيرات', right: 'ينسب انشقاق البحر إلى أمره هو' },
        { left: 'موسى يواجه الخطأ بتحمل المسؤولية', right: 'يندم على موت المصري غير المقصود ويستغفر الله' },
      ],
      correctAnswer: {
        'موسى يبادر إلى مساعدة من يحتاج': 'يسقي للفتاتين عندما يرى صعوبة موقفهما',
        'كبر فرعون يستمر رغم تكرار التحذيرات': 'ينسب انشقاق البحر إلى أمره هو',
        'موسى يواجه الخطأ بتحمل المسؤولية': 'يندم على موت المصري غير المقصود ويستغفر الله',
      },
      explanation: 'يربط النشاط بين ثلاث أفكار على مستوى القصة كلها وبين أدلة من مراحل مختلفة: المساعدة، والكبر، وتحمل المسؤولية.',
      feedback: { correct: 'صحيح.', incorrect: 'اختر الفعل المحدد الذي يثبت كل فكرة عامة بأوضح صورة.' },
    };
  }

  return exercise;
});
