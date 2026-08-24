import type { Exercise } from '../../../../types';
import {
  meccaA2FinalChallengeExercisesAr,
  meccaA2QuickChallengesAr,
  meccaA2VocabularyChallengePairsAr,
} from './exercises';
import { meccaA2KnowledgeCheckExercisesAr } from './knowledgeCheck';

/** نظام الأنشطة العربي المصقول والفعّال لبلال / مكة A2. */
export const meccaA2QuickChallengesArPolished: Record<number, Exercise> = {
  ...meccaA2QuickChallengesAr,
  1: {
    id: 'mecca-a2-ar-quick-1', type: 'matching', title: 'مكانة بلال',
    instructions: 'صل كل فكرة من الفصل الأول بالتفصيل الذي يدعمها.',
    question: 'ماذا يوضح الفصل الأول عن بلال وقصته؟',
    matchingPairs: [
      { left: 'البداية', right: 'ولد بلال في مكة وعاش في العبودية' },
      { left: 'الدور التاريخي', right: 'صار بلال أول من أقام الأذان في تاريخ الإسلام' },
      { left: 'قيمة الإنسان', right: 'لون البشرة أو العبودية لا يجعل الإنسان أقل قيمة' },
    ],
    correctAnswer: {
      'البداية': 'ولد بلال في مكة وعاش في العبودية',
      'الدور التاريخي': 'صار بلال أول من أقام الأذان في تاريخ الإسلام',
      'قيمة الإنسان': 'لون البشرة أو العبودية لا يجعل الإنسان أقل قيمة',
    },
    explanation: 'يربط الفصل بين بداية بلال الصعبة ودوره التاريخي اللاحق ودرس قيمة الإنسان.',
    feedback: { correct: 'صحيح.', incorrect: 'استخدم أفكار بداية الفصل ونهايته.' },
  },
  4: {
    id: 'mecca-a2-ar-quick-4', type: 'matching', title: 'العمل والمعاملة',
    instructions: 'صل كل جانب من حياة بلال اليومية بدليل الفصل.',
    question: 'ما الذي جعل حياة بلال اليومية صعبة؟',
    matchingPairs: [
      { left: 'عمل النهار', right: 'كان يرعى الجمال ويعمل تحت الشمس الحارة' },
      { left: 'واجب المساء', right: 'كان يجلب الطعام والخمر لسيده' },
      { left: 'المعاملة', right: 'كان أهل البيت يسيئون إليه ولا يحترمونه' },
    ],
    correctAnswer: {
      'عمل النهار': 'كان يرعى الجمال ويعمل تحت الشمس الحارة',
      'واجب المساء': 'كان يجلب الطعام والخمر لسيده',
      'المعاملة': 'كان أهل البيت يسيئون إليه ولا يحترمونه',
    },
    explanation: 'يعرض الفصل العمل الشاق وواجبات المساء وسوء المعاملة معًا.',
    feedback: { correct: 'صحيح.', incorrect: 'افصل بين عمل بلال وطريقة معاملة أهل البيت له.' },
  },
  10: {
    id: 'mecca-a2-ar-quick-10', type: 'matching', title: 'الشراء والحرية',
    instructions: 'صل كل حدث من الفصل العاشر بالتفصيل أو النتيجة الصحيحة.',
    question: 'كيف تغير وضع بلال؟',
    matchingPairs: [
      { left: 'الثمن', right: 'قبل أمية خمس قطع من الذهب' },
      { left: 'اشترى أبو بكر بلالًا', right: 'أُنقذ بلال من أمية' },
      { left: 'حرر أبو بكر بلالًا', right: 'لم يعد بلال عبدًا' },
    ],
    correctAnswer: {
      'الثمن': 'قبل أمية خمس قطع من الذهب',
      'اشترى أبو بكر بلالًا': 'أُنقذ بلال من أمية',
      'حرر أبو بكر بلالًا': 'لم يعد بلال عبدًا',
    },
    explanation: 'ينتقل الفصل من الثمن المتفق عليه إلى الإنقاذ ثم الحرية.',
    feedback: { correct: 'صحيح.', incorrect: 'اتبع البيع ثم ما فعله أبو بكر بعده مباشرة.' },
  },
  12: {
    id: 'mecca-a2-ar-quick-12', type: 'matching', title: 'الأذان والمساواة',
    instructions: 'صل كل فكرة من الفصل الثاني عشر بتفصيلها.',
    question: 'ما الأفكار التي يجمعها الفصل الثاني عشر؟',
    matchingPairs: [
      { left: 'أذان الصبح', right: 'أضاف بلال معنى «الصلاة خير من النوم»' },
      { left: 'خطبة الوداع', right: 'لا يجوز احتقار الناس بسبب لون بشرتهم' },
      { left: 'المساواة', right: 'لا يجعل العرق إنسانًا أفضل من إنسان آخر' },
    ],
    correctAnswer: {
      'أذان الصبح': 'أضاف بلال معنى «الصلاة خير من النوم»',
      'خطبة الوداع': 'لا يجوز احتقار الناس بسبب لون بشرتهم',
      'المساواة': 'لا يجعل العرق إنسانًا أفضل من إنسان آخر',
    },
    explanation: 'يجمع الفصل بين تفصيل في الأذان وتعليم أوسع عن المساواة.',
    feedback: { correct: 'صحيح.', incorrect: 'استخدم تفصيل الأذان وتعليم المساواة قرب نهاية الفصل.' },
  },
};

export const meccaA2KnowledgeCheckExercisesArPolished: Exercise[] = meccaA2KnowledgeCheckExercisesAr;
export const meccaA2VocabularyChallengePairsArPolished = meccaA2VocabularyChallengePairsAr;

export const meccaA2FinalChallengeExercisesArPolished: Exercise[] = meccaA2FinalChallengeExercisesAr.map(exercise => {
  if (exercise.id === 'mecca-a2-ar-final-4') {
    return {
      id: 'mecca-a2-ar-final-4', type: 'true-false', title: 'مكانة تغيّرت في المجتمع',
      instructions: 'حدد هل العبارة صحيحة أم خاطئة.',
      question: 'تنتقل قصة بلال من حياة يتحكم فيها سيده إلى دور عام محترم.',
      correctAnswer: true,
      explanation: 'يبدأ بلال في العبودية ثم يصبح صاحب مهمة عامة محترمة عندما ينادي الناس إلى الصلاة.',
      feedback: { correct: 'صحيح.', incorrect: 'اربط مكانة بلال في الفصول 1–4 بدوره في الفصل 11.' },
    };
  }
  if (exercise.id === 'mecca-a2-ar-final-6') {
    return {
      id: 'mecca-a2-ar-final-6', type: 'matching', title: 'نقاط التحول',
      instructions: 'صل كل نقطة تحول بنتيجتها.',
      question: 'ماذا تغير بعد كل فعل مهم؟',
      matchingPairs: [
        { left: 'يسمع بلال الرسالة الجديدة', right: 'يبدأ التفكير في فهم مختلف للإيمان وقيمة الإنسان' },
        { left: 'يزور بلال أبا بكر', right: 'يتعلم أكثر ويسأل عن الدين الجديد' },
        { left: 'يشتري أبو بكر بلالًا ويحرره', right: 'يخرج بلال من العبودية ويعيش مؤمنًا حرًا' },
      ],
      correctAnswer: {
        'يسمع بلال الرسالة الجديدة': 'يبدأ التفكير في فهم مختلف للإيمان وقيمة الإنسان',
        'يزور بلال أبا بكر': 'يتعلم أكثر ويسأل عن الدين الجديد',
        'يشتري أبو بكر بلالًا ويحرره': 'يخرج بلال من العبودية ويعيش مؤمنًا حرًا',
      },
      explanation: 'تغيّر هذه النقاط فهم بلال وقراره ثم حاله الاجتماعي.',
      feedback: { correct: 'صحيح.', incorrect: 'اتبع القصة من السماع إلى التعلم ثم إلى الحرية.' },
    };
  }
  if (exercise.id === 'mecca-a2-ar-final-7') {
    return {
      id: 'mecca-a2-ar-final-7', type: 'matching', title: 'نهاية القصة ومعناها',
      instructions: 'صل كل حدث متأخر بما يضيفه إلى المعنى العام للقصة.',
      question: 'ماذا يضيف كل حدث إلى قصة بلال؟',
      matchingPairs: [
        { left: 'يقيم بلال الأذان', right: 'الرجل الذي كان بلا قوة صار صاحب مهمة عامة موثوقة' },
        { left: 'تعليم خطبة الوداع', right: 'لا ينبغي الحكم على الناس بأنهم أفضل أو أقل بسبب العرق أو لون البشرة' },
        { left: 'يغادر بلال المدينة بعد ذلك', right: 'تظهر القصة أيضًا حزنه الشخصي العميق بعد وفاة النبي ﷺ' },
      ],
      correctAnswer: {
        'يقيم بلال الأذان': 'الرجل الذي كان بلا قوة صار صاحب مهمة عامة موثوقة',
        'تعليم خطبة الوداع': 'لا ينبغي الحكم على الناس بأنهم أفضل أو أقل بسبب العرق أو لون البشرة',
        'يغادر بلال المدينة بعد ذلك': 'تظهر القصة أيضًا حزنه الشخصي العميق بعد وفاة النبي ﷺ',
      },
      explanation: 'تربط الفصول الأخيرة بين المسؤولية العامة والمساواة واستجابة بلال الشخصية للفقد.',
      feedback: { correct: 'صحيح.', incorrect: 'استخدم الفصول 11–13 واربط كل حدث بمعناه الأوسع.' },
    };
  }
  return exercise;
});
