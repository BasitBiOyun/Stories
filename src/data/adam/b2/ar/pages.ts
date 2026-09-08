import type { Exercise, PageData } from '../../../../types';
import { adamB2QuickChallengesAr, adamB2KnowledgeCheckExercisesAr, adamB2VocabularyChallengePairsAr, adamB2LanguageReviewExercisesAr, adamB2FinalChallengeExercisesAr } from './exercises';
import { adamB2LanguageFocusExercisesAr } from './languageFocus';
import { adamB2LanguageFocusExercisesArPart2 } from './languageFocus2';
import { adamB2LanguageFocusExercisesArPart3 } from './languageFocus3';

const B = 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/';
const IMG = ['', '', '', '', '', '', '2c7f06f0-1c7b-4f72-bbdc-220aebe0f3eb', '888f74ef-8ab1-4399-b94f-499f280488d9', 'b1edc4c5-1feb-41b7-8c59-3919406cd8a4', '02398d91-13a7-4809-b9a5-7e7d10e9b6c0', 'ccb788e1-98ea-43fc-9397-aecc67ff8d34', 'c520bb71-bf37-4f3e-a7fd-752ee62d8125', 'ea7397e9-5206-4dec-80ae-4f5fae82309d', 'ed61f9d6-f850-4a84-9f2f-acb6a00fc6a3', '4399b928-a16f-4bdd-a697-b274b27d32c2', 'b599808a-3de8-4dc1-a9e0-ad6067e1903b', '7a5a94a7-cbb8-458b-b865-f7281e454742', 'fb1cf4bc-7a18-4dab-8cde-2eab06c1ff0a'];
const ARN = ['', 'B2- CHAPTER 1.mp3', 'b2 adem chapter 2 .mp3', 'b2 adem chapter 3 .mp3', 'b2 adem chapter 4 .mp3', 'b2 adem chapter 5 .mp3', 'B2 CHAPTER 6.mp3', 'B2 CHAPTER  7.mp3', 'B2 CHAPTER 8.mp3', 'b2 adem chapter 9 .mp3', 'B2 CHAPTER 10.mp3', 'b2 adem chapter 11 .mp3', 'B2 CHAPTER 12.mp3', 'b2 adem chapter 13 .mp3', 'B2 CHAPTER 14.mp3', 'b2 adem chapter 15 .mp3', 'b2 adem chapter 16.mp3', 'b2 adem chapter 17.mp3'];
const ART = ['', '9ed4b211-ca29-4d8e-9cdb-429e76aa391a', 'c6079ab5-7ff0-48a2-aae2-ee764fca9afc', '1ad4d729-b50c-4e51-b64d-ae32a4d478c3', 'c0e4b74e-8cd4-4ba5-8cda-16bf36c03232', 'cb4d9bfc-4212-41bf-a920-f81e77404fd7', '0f5e9802-c6cd-49fb-9437-9283c82bcc45', 'd257d2ee-bafb-4474-8077-8c648d799781', '2097dea4-275d-453d-940f-9a60a259af01', 'f2f26743-770f-4ee2-82c5-38de27cf96e6', 'fee0a987-8f83-47cb-b01f-791bfcbd6ded', 'a7a3c26e-2c49-4692-8a91-0511d26db58f', 'db385b68-b9a7-41ae-8084-b8bb3e33c48b', '9a4a1da7-ff38-4101-a860-aafc51697b18', '0e4703fd-1112-4fe1-aa87-a6938ed18328', 'a5660972-2677-4143-a8cb-f52fcc187228', 'fec33b31-4a9d-4efb-8bc2-991a0c28e017', '19090a8b-6faa-4fbe-9f07-3a002c26e7bd'];
const img = (n: number) => n < 6 ? '' : `${B}adam_b2%2Fimages%2Fadam_b2_chapter${n}.png?alt=media&token=${IMG[n]}`;
const audio = (n: number) => `${B}adam_b2%2Faudio%2Farabic_audio%2F${encodeURIComponent(ARN[n])}?alt=media&token=${ART[n]}`;
const V = (...items: [string, string][]) => items.map(([word, definition]) => ({ word, definition }));
const H = (...items: [string, number, number, string, string][]) => items.map(([id, x, y, title, description]) => ({ id, x, y, title, description }));
const S = (id: number, title: string, content: string, vocabulary: { word: string; definition: string }[], hotspots: NonNullable<PageData['hotspots']>): PageData => ({ id, type: 'story', title, image: img(id), audioUrl: audio(id), content, vocabulary, hotspots });

const storyPages: PageData[] = [
//__AR_1_4__
//__AR_5_8__
//__AR_9_12__
//__AR_13_15__
//__AR_16_17__
];

const languageFocus: Record<number, Exercise[]> = { ...adamB2LanguageFocusExercisesAr, ...adamB2LanguageFocusExercisesArPart2, ...adamB2LanguageFocusExercisesArPart3 };
for (const page of storyPages) {
  page.exercises = adamB2QuickChallengesAr[page.id] ? [adamB2QuickChallengesAr[page.id]] : [];
  if (languageFocus[page.id]) page.languageFocusExercises = languageFocus[page.id];
}
const glossary = Array.from(new Map(storyPages.flatMap(page => page.vocabulary ?? []).map(item => [item.word.toLowerCase(), item] as const)).values());

export const adamB2PagesAr: PageData[] = [
  ...storyPages,
  { id: 18, type: 'quiz', title: 'فحص المعرفة', image: '', content: 'أجب عن ثمانية أسئلة للتحقق من فهم أهم أفكار قصة آدم.', exercises: adamB2KnowledgeCheckExercisesAr },
  { id: 19, type: 'exercises', title: 'مراجعة اللغة', image: '', content: 'راجع أدوات اللغة والخطاب التي تعلمتها عبر الفصول.', exercises: adamB2LanguageReviewExercisesAr },
  { id: 20, type: 'vocabulary-match', title: 'تحدي المفردات', image: '', content: 'صل الكلمات الأساسية بمعانيها الدقيقة.', vocabularyPairs: adamB2VocabularyChallengePairsAr },
  { id: 21, type: 'glossary', title: 'القاموس الرئيسي', image: '', content: 'راجع المفردات الأساسية الواردة في الفصول السبعة عشر.', vocabulary: glossary },
  { id: 22, type: 'final-challenge', title: 'التَّحَدِّي النِّهَائِي لِلْمُسْتَوَى B2', image: '', content: 'أَجِبْ عَنْ هَذِهِ الأَسْئِلَةِ الْمُتَعَاقِبَةِ لِإِثْبَاتِ مَدَى تَمَكُّنِكَ مِنَ الْمَسِيرَةِ الْعِلْمِيَّةِ وَالْعَمَلِيَّةِ لِهَذَا الْمُسْتَوَى.', exercises: adamB2FinalChallengeExercisesAr },
];
