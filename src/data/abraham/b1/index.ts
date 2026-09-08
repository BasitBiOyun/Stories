import type { BookData, PageData } from '../../../types';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1PagesAr } from './ar/pages';
import {
  abrahamB1FinalChallengeExercisesPolished,
  abrahamB1KnowledgeCheckExercisesPolished,
  abrahamB1QuickChallengesPolished,
  abrahamB1VocabularyChallengePairsPolished,
  abrahamB1LanguageReviewExercises,
} from './en/exercises';
import {
  abrahamB1FinalChallengeExercisesArPolished,
  abrahamB1KnowledgeCheckExercisesArPolished,
  abrahamB1QuickChallengesArPolished,
  abrahamB1VocabularyChallengePairsArPolished,
  abrahamB1LanguageReviewExercisesAr,
} from './ar/exercises';
import { abrahamB1LanguageFocusExercises } from './en/languageFocus';
import {
  abrahamB1LanguageFocusChapter3,
  abrahamB1LanguageFocusChapter4,
  abrahamB1LanguageFocusChapter5,
  abrahamB1LanguageFocusChapter6,
  abrahamB1LanguageFocusChapter7,
  abrahamB1LanguageFocusChapter8,
} from './en/languageFocus2';
import {
  abrahamB1LanguageFocusChapter9,
  abrahamB1LanguageFocusChapter10,
  abrahamB1LanguageFocusChapter11,
  abrahamB1LanguageFocusChapter12,
  abrahamB1LanguageFocusChapter13,
} from './en/languageFocus3';
import { abrahamB1LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  abrahamB1LanguageFocusChapter3Ar,
  abrahamB1LanguageFocusChapter4Ar,
  abrahamB1LanguageFocusChapter5Ar,
  abrahamB1LanguageFocusChapter6Ar,
  abrahamB1LanguageFocusChapter7Ar,
  abrahamB1LanguageFocusChapter8Ar,
} from './ar/languageFocus2';
import {
  abrahamB1LanguageFocusChapter9Ar,
  abrahamB1LanguageFocusChapter10Ar,
  abrahamB1LanguageFocusChapter11Ar,
  abrahamB1LanguageFocusChapter12Ar,
  abrahamB1LanguageFocusChapter13Ar,
} from './ar/languageFocus3';
import { abrahamB1TeacherGuideEn, abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1TeacherGuideAr, abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamB1SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

type VocabularyEntry = { word: string; definition: string };
type StoryLanguage = 'en' | 'ar';

const storyImages: Record<number, string> = {
  1: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch1%20(2).png?alt=media&token=96d6f05e-acbe-4e9e-b610-53a5f43ddce6',
  2: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch2.png?alt=media&token=21d9d18e-b7ad-4d13-8a7c-2b671dd39e60',
  3: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch3.png?alt=media&token=d4dda77d-5fbe-438f-ae20-00d215f53796',
  4: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch4.png?alt=media&token=22749671-396f-422b-ae63-07b5600ba29d',
  5: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch5.png?alt=media&token=5586429e-02db-4e3a-be26-bef94c4fb5c8',
  6: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch6.png?alt=media&token=85c7636d-1681-41f2-938d-a67a357e8ffa',
  7: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b2_ch7.png?alt=media&token=3e535d5b-1e3c-4cd3-88e3-33b95447f33f',
  8: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch8.png?alt=media&token=b51ca5fb-f294-4c69-935d-7cb8904ffc32',
  9: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch9.png?alt=media&token=aa006370-2be7-4c91-8eb1-2af70e0d6f56',
  10: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch10.png?alt=media&token=e6da226d-8ee6-4643-8a61-e8c937d2aba5',
  11: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch11.png?alt=media&token=4ca0f748-06a6-4656-882d-6d70caa65773',
  12: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch12.png?alt=media&token=ffb800a3-5824-4d72-9c16-ec3d81a766ae',
  13: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Fimages%2Fabraham_b1_ch13.png?alt=media&token=a00aeda9-5b8a-4797-a824-9682c1c63bcd',
};

const englishStoryAudio: Record<number, string> = {
  1: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=57bc6da5-9305-4888-96d3-08482db1fee2',
  2: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F01_Chapter_2_Abraham_and_His_Father%E2%80%99s_Idols.mp3?alt=media&token=50f86864-c358-471a-82f2-3218be892a35',
  3: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F02_Chapter_3_Searching_for_the_True_Creator.mp3?alt=media&token=28cd4203-ad7f-4883-9a5b-b145567721e5',
  4: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F03_Chapter_4_Abraham_Receives_Guidance.mp3?alt=media&token=5a474dc4-f8f5-4825-994a-999eda876bc3',
  5: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F04_Chapter_5_Abraham_Calls_His_People.mp3?alt=media&token=ad50e9bb-e402-4ab7-864d-d79a91724b6f',
  6: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F05_Chapter_6_Abraham_Enters_the_Temple.mp3?alt=media&token=3dc1c09b-1e7e-4e3e-b105-d4c621020d2d',
  7: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F06_Chapter_7_The_Broken_Idols.mp3?alt=media&token=83d27022-9e27-4678-8ce7-38e04622dc4f',
  8: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F07_Chapter_8_Preparing_the_Great_Fire.mp3?alt=media&token=d012d642-1cf1-4d30-acf1-40830c943ebb',
  9: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F08_Chapter_9_The_Miracle_and_Nimrod.mp3?alt=media&token=6d96716a-f0e3-449d-8f90-b009fd363bad',
  10: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F09_Chapter_10_Leaving_Babylon.mp3?alt=media&token=22a5976b-1627-4652-b54b-03bea9174f4b',
  11: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F10_Chapter_11_Hagar_and_Ishmael_in_the_Valley.mp3?alt=media&token=c15b8c94-5a2b-485b-bfd2-ac9b536bc95e',
  12: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F11_Chapter_12_Zamzam_and_the_City_of_Mecca.mp3?alt=media&token=bb0f1c23-afa2-450f-b7f4-016f43261b19',
  13: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2F12_Chapter_13_Building_the_Ka%E2%80%99ba.mp3?alt=media&token=eefcf743-03ee-4539-b82c-4ee0f4dfc068',
};

const arabicStoryAudio: Record<number, string> = {
  1: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC1Y.mp3?alt=media&token=9fb830c5-04db-4f59-a02d-a48c3800491b',
  2: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC2.mp3?alt=media&token=5b9139a6-e36b-4bdb-8519-94c8eae8538c',
  3: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC3Y.mp3?alt=media&token=32a4bc63-fc99-41cf-b4ce-f35b80f30019',
  4: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC4Y.mp3?alt=media&token=d73204b6-9547-46ec-9e9c-6c66f8680042',
  5: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC5.mp3?alt=media&token=584aa7aa-1f54-4b7a-a8cc-878a02f47a75',
  6: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC6.mp3?alt=media&token=6d28a710-2129-4b6f-95fd-6e0ecdc64ee3',
  7: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC7.mp3?alt=media&token=6d5c7ee3-0dab-49b3-b8b4-b9147101cb27',
  8: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC8Y.mp3?alt=media&token=297cb5aa-9329-4868-a97c-099a07fb585e',
  9: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC9Y.mp3?alt=media&token=bb9516fc-e16a-4e52-8a4f-8ab94e45bd57',
  10: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC10.mp3?alt=media&token=32481acf-0b98-49cb-ae5f-d9df47966d1f',
  11: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC11.mp3?alt=media&token=cb49fdd1-1366-46e3-9f7f-db32dcdc5259',
  12: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC12.mp3?alt=media&token=9766fe62-afa9-4660-97a3-8ea080793dbb',
  13: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b1%2Faudio%2Farabic_audio%2FC13Y.mp3?alt=media&token=0afbb26b-de37-4f10-96d2-0f0f6d56a461',
};

const englishVocabulary: Record<number, VocabularyEntry[]> = {
  1: [
    { word: 'homeland', definition: 'The country or place where a person comes from.' },
    { word: 'intelligent', definition: 'Able to learn, understand, and think well.' },
    { word: 'begging', definition: 'Asking strongly for help or something needed.' },
    { word: 'surprised', definition: 'Feeling that something is unexpected.' },
  ],
  2: [
    { word: 'idol maker', definition: 'A person who makes idols or statues.' },
    { word: 'favors', definition: 'Helpful acts or good things given to someone.' },
    { word: 'Mardukh', definition: 'The chief god of Babylon in the people’s false belief.' },
    { word: 'kicked', definition: 'Hit something with the foot.' },
  ],
  3: [
    { word: 'Creator', definition: 'The One who creates and controls everything.' },
    { word: 'countryside', definition: 'Land outside towns and cities.' },
    { word: 'cave', definition: 'A natural hollow place in a mountain or rock.' },
    { word: 'faded', definition: 'Gradually became less visible or disappeared.' },
  ],
  4: [
    { word: 'sunrise', definition: 'The time when the sun first appears in the morning.' },
    { word: 'creations', definition: 'Things that have been created.' },
    { word: 'prostrated', definition: 'Put the forehead to the ground in worship.' },
    { word: 'stone', definition: 'To attack someone by throwing stones.' },
  ],
  5: [
    { word: 'furious', definition: 'Extremely angry.' },
    { word: 'harm', definition: 'To hurt or damage someone or something.' },
    { word: 'heals', definition: 'Makes a sick or injured person well again.' },
    { word: 'reconsider', definition: 'To think again about an idea or belief.' },
  ],
  6: [
    { word: 'foolishness', definition: 'Lack of good sense or wise thinking.' },
    { word: 'celebration', definition: 'A special event when people gather for a happy occasion.' },
    { word: 'axe', definition: 'A tool with a sharp metal head used for cutting.' },
    { word: 'ridiculous', definition: 'Very silly or unreasonable.' },
  ],
  7: [
    { word: 'smashed', definition: 'Broken violently into many pieces.' },
    { word: 'displeased', definition: 'Unhappy or annoyed about something.' },
    { word: 'shame', definition: 'A painful feeling caused by knowing something is wrong.' },
    { word: 'arrogant', definition: 'Too proud to accept the truth or a mistake.' },
  ],
  8: [
    { word: 'approach', definition: 'To come near something or someone.' },
    { word: 'flames', definition: 'The bright, burning parts of a fire.' },
    { word: 'catapult', definition: 'An old machine used to throw heavy objects.' },
    { word: 'emerged', definition: 'Came out from a place or situation.' },
  ],
  9: [
    { word: 'miracle', definition: 'A sign from Allah beyond ordinary human power.' },
    { word: 'rage', definition: 'Very strong anger.' },
    { word: 'guards', definition: 'People whose job is to protect a person or place.' },
    { word: 'ordinary', definition: 'Normal and not unusual or special.' },
  ],
  10: [
    { word: 'faith', definition: 'Strong belief and trust in Allah.' },
    { word: 'spread', definition: 'To make an idea or message reach more people.' },
    { word: 'camelback', definition: 'Travelling while riding a camel.' },
    { word: 'tiring', definition: 'Making someone feel tired.' },
  ],
  11: [
    { word: 'fearlessly', definition: 'Without being controlled by fear.' },
    { word: 'ran out', definition: 'Was completely used up so none remained.' },
    { word: 'ritual', definition: 'A religious action performed in a special way.' },
    { word: 'approximately', definition: 'About a number or amount, but not exactly.' },
  ],
  12: [
    { word: 'thirst', definition: 'A strong need to drink water.' },
    { word: 'flowing', definition: 'Moving continuously like water.' },
    { word: 'spring', definition: 'A place where water naturally comes from the ground.' },
    { word: 'settle', definition: 'To begin living permanently in a place.' },
  ],
  13: [
    { word: 'foundations', definition: 'The strong base under a building.' },
    { word: 'construct', definition: 'To build something.' },
    { word: 'races', definition: 'Groups of people understood as having shared physical ancestry.' },
    { word: 'Oneness', definition: 'The belief that Allah is One and has no partner.' },
  ],
};

const arabicVocabulary: Record<number, VocabularyEntry[]> = {
  1: [
    { word: 'وطنه', definition: 'البلد أو المكان الذي ينتمي إليه الإنسان.' },
    { word: 'عاقل', definition: 'قادر على الفهم والتعلّم والتفكير جيدًا.' },
    { word: 'التوسّل', definition: 'طلب المساعدة بإلحاح.' },
    { word: 'تَعَجَّب', definition: 'شعر بأن شيئًا غير متوقع أو غريبًا.' },
  ],
  2: [
    { word: 'صانع أصنام', definition: 'شخص يصنع الأصنام أو التماثيل.' },
    { word: 'النِّعَم', definition: 'خيرات أو أشياء نافعة تُعطى للإنسان.' },
    { word: 'مردوخ', definition: 'كبير آلهة بابل في اعتقاد القوم الباطل.' },
    { word: 'يَرْكُلها', definition: 'يضربها بقدمه.' },
  ],
  3: [
    { word: 'الخالق', definition: 'الذي خلق كل شيء ويدبّره.' },
    { word: 'الريف', definition: 'الأرض الواقعة خارج المدن والبلدات.' },
    { word: 'كهفًا', definition: 'مكان طبيعي مجوّف في جبل أو صخر.' },
    { word: 'أَفَلَ', definition: 'غاب أو اختفى تدريجيًا.' },
  ],
  4: [
    { word: 'بزوغ الفجر', definition: 'وقت ظهور ضوء الصباح وبداية طلوع الشمس.' },
    { word: 'المخلوقات', definition: 'الأشياء والكائنات التي خُلقت.' },
    { word: 'فسجد', definition: 'وضع جبهته على الأرض عبادةً لله.' },
    { word: 'فسأرجُمك', definition: 'سأهاجمك برمي الحجارة.' },
  ],
  5: [
    { word: 'فغَضِب', definition: 'شعر بغضب شديد.' },
    { word: 'ضرركم', definition: 'إيذاؤكم أو إلحاق السوء بكم.' },
    { word: 'ويَشْفِيني', definition: 'ويجعلني أتعافى من المرض.' },
    { word: 'يُعيدوا النظر', definition: 'يفكروا مرة أخرى في فكرة أو معتقد.' },
  ],
  6: [
    { word: 'حماقة', definition: 'قلة الحكمة أو حسن التفكير.' },
    { word: 'احتفال', definition: 'مناسبة خاصة يجتمع الناس فيها.' },
    { word: 'فأسًا', definition: 'أداة ذات رأس معدني حاد تستخدم للقطع.' },
    { word: 'سخيفًا', definition: 'غير معقول أو شديد الحماقة.' },
  ],
  7: [
    { word: 'المحطّمة', definition: 'المكسورة بعنف إلى قطع كثيرة.' },
    { word: 'استاء', definition: 'شعر بعدم الرضا أو الانزعاج.' },
    { word: 'خَجَل', definition: 'شعور مؤلم عند إدراك الخطأ.' },
    { word: 'مُتَكَبِّرين', definition: 'شديدي الفخر حتى يرفضوا الحق أو الخطأ.' },
  ],
  8: [
    { word: 'الاقتراب', definition: 'المجيء إلى مكان أو شيء قريبًا منه.' },
    { word: 'اللهب', definition: 'الجزء المضيء المشتعل من النار.' },
    { word: 'مَنْجَنِيق', definition: 'آلة قديمة كانت تستخدم لرمي الأجسام الثقيلة.' },
    { word: 'وخرج', definition: 'ظهر أو خرج من مكان أو موقف.' },
  ],
  9: [
    { word: 'المعجزة', definition: 'آية من الله تتجاوز القدرة البشرية العادية.' },
    { word: 'غضبهم', definition: 'غضب شديد جدًا.' },
    { word: 'حُرّاسه', definition: 'أشخاص مهمتهم حماية شخص أو مكان.' },
    { word: 'عاديًّا', definition: 'طبيعي وغير غير مألوف أو مميز.' },
  ],
  10: [
    { word: 'إيمانه', definition: 'تصديقه وثقته بالله.' },
    { word: 'لنشر', definition: 'لإيصال فكرة أو رسالة إلى عدد أكبر من الناس.' },
    { word: 'على ظهر جَمَل', definition: 'السفر أثناء ركوب الجمل.' },
    { word: 'مُتْعِبةً', definition: 'تسبب الشعور بالتعب.' },
  ],
  11: [
    { word: 'دون خوف', definition: 'من غير أن يسيطر الخوف على الشخص.' },
    { word: 'نَفِد', definition: 'انتهى تمامًا ولم يبق منه شيء.' },
    { word: 'النسك', definition: 'عمل تعبدي يؤدّى بطريقة خاصة.' },
    { word: 'حوالي', definition: 'قريب من عدد أو مقدار من غير دقة تامة.' },
  ],
  12: [
    { word: 'العطش', definition: 'حاجة شديدة إلى شرب الماء.' },
    { word: 'يَتَدَفَّق', definition: 'يجري باستمرار مثل الماء.' },
    { word: 'نَبْع', definition: 'مكان يخرج منه الماء طبيعيًا من الأرض.' },
    { word: 'لِيَسْتَقِرّوا', definition: 'ليبدأوا العيش بصورة دائمة في مكان.' },
  ],
  13: [
    { word: 'أساسات', definition: 'القاعدة القوية التي يقوم عليها البناء.' },
    { word: 'تَشْيِيد', definition: 'بناء شيء وإقامته.' },
    { word: 'الأجناس', definition: 'مجموعات من الناس تُفهم على أساس أصول جسدية مشتركة.' },
    { word: 'وحدانية', definition: 'الإيمان بأن الله واحد لا شريك له.' },
  ],
};

const hotspotCoordinates: Record<number, [[number, number], [number, number]]> = {
  1: [[31, 39], [70, 61]],
  2: [[37, 64], [66, 34]],
  3: [[27, 54], [73, 35]],
  4: [[34, 31], [69, 66]],
  5: [[24, 44], [76, 58]],
  6: [[39, 67], [65, 32]],
  7: [[28, 36], [72, 63]],
  8: [[35, 58], [67, 29]],
  9: [[23, 65], [77, 39]],
  10: [[32, 30], [69, 68]],
  11: [[26, 48], [75, 70]],
  12: [[40, 64], [62, 36]],
  13: [[33, 42], [71, 66]],
};

const englishLanguageFocus = {
  ...abrahamB1LanguageFocusExercises,
  ...abrahamB1LanguageFocusChapter3,
  ...abrahamB1LanguageFocusChapter4,
  ...abrahamB1LanguageFocusChapter5,
  ...abrahamB1LanguageFocusChapter6,
  ...abrahamB1LanguageFocusChapter7,
  ...abrahamB1LanguageFocusChapter8,
  ...abrahamB1LanguageFocusChapter9,
  ...abrahamB1LanguageFocusChapter10,
  ...abrahamB1LanguageFocusChapter11,
  ...abrahamB1LanguageFocusChapter12,
  ...abrahamB1LanguageFocusChapter13,
};

const arabicLanguageFocus = {
  ...abrahamB1LanguageFocusExercisesAr,
  ...abrahamB1LanguageFocusChapter3Ar,
  ...abrahamB1LanguageFocusChapter4Ar,
  ...abrahamB1LanguageFocusChapter5Ar,
  ...abrahamB1LanguageFocusChapter6Ar,
  ...abrahamB1LanguageFocusChapter7Ar,
  ...abrahamB1LanguageFocusChapter8Ar,
  ...abrahamB1LanguageFocusChapter9Ar,
  ...abrahamB1LanguageFocusChapter10Ar,
  ...abrahamB1LanguageFocusChapter11Ar,
  ...abrahamB1LanguageFocusChapter12Ar,
  ...abrahamB1LanguageFocusChapter13Ar,
};

const standardizePage = (page: PageData, language: StoryLanguage): PageData => {
  if (!STORY_IDS.has(page.id)) {
    return { ...page, image: '', animatedWords: undefined };
  }

  const vocabulary = language === 'en' ? englishVocabulary[page.id] : arabicVocabulary[page.id];
  const audioUrl = language === 'en' ? englishStoryAudio[page.id] : arabicStoryAudio[page.id];
  const coords = hotspotCoordinates[page.id];
  const hotspots = (page.hotspots ?? []).slice(0, 2).map((hotspot, index) => ({
    ...hotspot,
    x: coords[index][0],
    y: coords[index][1],
  }));

  const content = language === 'en' && page.id === 3
    ? page.content.replace('In a nearby mountain, he found a cave', 'On a nearby mountain, he found a cave')
    : page.content;

  return {
    ...page,
    image: storyImages[page.id],
    audioUrl,
    content,
    vocabulary,
    hotspots,
    animatedWords: undefined,
  };
};

const buildMasterGlossary = (source: Record<number, VocabularyEntry[]>): VocabularyEntry[] => (
  Array.from({ length: 13 }, (_, index) => index + 1)
    .reduce<VocabularyEntry[]>((all, chapter) => all.concat(source[chapter]), [])
);

const englishMasterGlossary = buildMasterGlossary(englishVocabulary);
const arabicMasterGlossary = buildMasterGlossary(arabicVocabulary);

const buildEnglishPages = (): PageData[] => abrahamB1Pages.map(rawPage => {
  const page = standardizePage(rawPage, 'en');
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      exercises: abrahamB1QuickChallengesPolished[page.id] ? [abrahamB1QuickChallengesPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercisesPolished };
  if (page.id === 15) return {
    ...page,
    title: 'B1 Language Review',
    content: 'Review and use the grammar patterns, discourse relationships, and communicative functions developed across all thirteen chapters.',
    exercises: abrahamB1LanguageReviewExercises,
  };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairsPolished };
  if (page.id === 17) return { ...page, vocabulary: englishMasterGlossary };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercisesPolished };
  return page;
});

const buildArabicPages = (): PageData[] => abrahamB1PagesAr.map(rawPage => {
  const page = standardizePage(rawPage, 'ar');
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      exercises: abrahamB1QuickChallengesArPolished[page.id] ? [abrahamB1QuickChallengesArPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercisesArPolished };
  if (page.id === 15) return {
    ...page,
    title: 'مراجعة اللغة B1',
    content: 'راجع واستخدم التراكيب والعلاقات الخطابية والوظائف التواصلية التي تطورت عبر الفصول الثلاثة عشر.',
    exercises: abrahamB1LanguageReviewExercisesAr,
  };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairsArPolished };
  if (page.id === 17) return { ...page, vocabulary: arabicMasterGlossary };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercisesArPolished };
  return page;
});

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: buildEnglishPages(),
  teacherGuide: abrahamB1TeacherGuideEn,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadata,
  selfStudyGuide: abrahamB1SelfStudyGuideEn,
};

export const abrahamB1BookDataAr: BookData = {
  id: 'b1-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: abrahamB1TeacherGuideAr,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB1SelfStudyGuideAr,
};

export const abrahamB1BookData = abrahamB1BookDataEn;
