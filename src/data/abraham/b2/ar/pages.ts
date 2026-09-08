import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercisesAr,
  abrahamB2KnowledgeCheckExercisesAr,
  abrahamB2QuickChallengesAr,
  abrahamB2VocabularyChallengePairsAr,
} from './exercises';
import { abrahamB2LanguageFocusPart1Ar } from './languageFocus';
import { abrahamB2LanguageFocusPart2Ar } from './languageFocus2';
import { abrahamB2LanguageFocusPart3Ar } from './languageFocus3';
import {
  abrahamB2CanonicalVocabulary,
  abrahamB2HotspotCoords,
  abrahamB2ImageUrl,
} from '../en/pages';

const rawAbrahamB2PagesAr: PageData[] = [
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
  {
    id: 36,
    type: 'quiz',
    title: 'اختبار المعرفة — B2',
    content: 'اختبر فهمك لقصة النبي إبراهيم عليه السلام كاملة في مستوى B2.',
    image: '',
    audioUrl: '',
  },
  {
    id: 37,
    type: 'exercises',
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل صيغ المصدر والموقف والزمن والتماسك والعلاقات الخطابية التي تطورت عبر الفصول الخمسة والثلاثين.',
    image: '',
  },
  {
    id: 38,
    type: 'vocabulary-match',
    title: 'تحدي المفردات — B2',
    content: 'صل عشرة مصطلحات أساسية من القصة بمعانيها الدقيقة.',
    image: '',
  },
  {
    id: 39,
    type: 'glossary',
    title: 'مسرد القصة — B2',
    content: 'مفردات القصة الأساسية في مستوى B2.',
    image: '',
  },
  {
    id: 40,
    type: 'final-challenge',
    title: 'التحدي النهائي',
    content: 'أظهر إتقانك للقصة كاملة من خلال التحليل والدليل والمقارنة والتركيب.',
    image: '',
  },
];

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b
