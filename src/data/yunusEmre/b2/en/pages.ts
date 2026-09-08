import type { Exercise, PageData } from '../../../../types';
import { yunusB2QuickChallenges, yunusB2VocabularyChallengePairs, yunusB2FinalChallengeExercises } from './exercises';
import { yunusB2LanguageFocusExercises } from './languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { yunusB2LanguageFocusExercisesPart3, yunusB2LanguageFocusExercisesPart4, yunusB2LanguageReviewExercises } from './languageFocus3';

const rawYunusB2Pages: PageData[] = [
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
    id: 13,
    type: 'story',
    title: 'A Lasting Legacy',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch13.png?alt=media&token=d10621fc-a38e-4292-917d-6696c4458de1',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F12_Chapter_13_A_Lasting_Legacy.mp3?alt=media&token=6bd8124a-88b7-41b3-8386-a79d83d16f1f',
    content: `Yunus says:

[POEM]
English:
“Whoever possesses patience rises to the heavens,
For within patience lies every kind of skill”
Turkish:
Sabır kimdeyise ol arşa süner
Ki sabr içinde bulınur dürlü hüner
[/POEM]

In another verse warning against anger and arrogance, he says:

[POEM]
English:
“Whoever is filled with anger loses their faith
If faith is required, one must give up anger and arrogance”
Turkish:
Buşu kimdeyise imanı gider
İman gerek ise vârını gider
[/POEM]

It is obvious that Yunus Emre was not only a prominent figure in his own time but has also left a lasting legacy. His writings are valuable not only as literary works but also as a moral guide for future generations.`,
    vocabulary: [
      { word: 'legacy', definition: 'a lasting influence or contribution passed on to later generations' },
      { word: 'prominent', definition: 'important, widely recognized, or influential' },
      { word: 'writings', definition: 'written works produced by an author' },
      { word: 'literary works', definition: 'written works valued as literature' },
      { word: 'future generations', definition: 'people who will live after the present generation and inherit its cultural influence' },
    ],
    hotspots: [
      { id: 'h13-1', x: 30, y: 41, title: 'Moral Legacy', description: 'Yunus Emre’s writings are presented as both literary works and a moral guide for future generations.' },
      { id: 'h13-2', x: 68, y: 70, title: 'future generations', description: 'The final chapter links patience and resistance to anger and arrogance with Yunus Emre’s lasting legacy.' },
    ],
  },
  {
    id: 14,
    type: 'story',
    title: 'References',
    image: '',
    audioUrl: '',
    content: `Bulduk, Üçler. "Yunus Emre Çağında Anadolu’nun Siyasal ve Sosyal Durumu," DTCF Dergisi Yunus Emre Özel Sayısı, 2021, s. 57-67.

Gürer, Banu. "Yunus Emre," Türk Maarif Ansiklopedisi, https://turkmaarifansiklopedisi.org.tr/yunus-emre.

Kara, Mustafa. "Tekke," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tekke.

Ocak, Ahmet Yaşar. "Babaîlik," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/babailik.

Ocak, Ahmet Yaşar. Babaîler İsyanı, Dergah Yayınları, İstanbul, 2011.

Öngören, Reşat. "Sufi," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sufi.

Sevim, Ali. "Keyhüsrev II," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/keyhusrev-ii.

Sümer, Faruk. "Keykubad I," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/keykubad-i.

Sümer, Faruk. "Kösedağ Savaşı," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/kosedag-savasi.

Tatcı, Mustafa. "Yûnus Emre," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/yunus-emre.

Yazıcı, Tahsin. "Derviş," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/dervis.

Yeniterzi, Emine. "Mesnevi-i Şerif ve Risaletü’n-Nushiyye’de Ortak Değerler," I. Ulusal Yunus Emre Sempozyumu, Karaman, 2010, s. 101-116.`,
    vocabulary: [],
    hotspots: [],
  },
  { id: 15, type: 'quiz', title: 'Knowledge Check: Yunus Emre - B2', image: '', audioUrl: '', content: 'Check whole-book comprehension with eight evidence-based questions.' },
  { id: 16, type: 'vocabulary-match', title: 'Vocabulary Challenge', image: '', audioUrl: '', content: 'Match ten important story words with distinct meanings.' },
  { id: 17, type: 'glossary', title: 'Master Glossary - Part 1', image: '', content: 'Review chapter vocabulary from the first half of the story.', vocabulary: [] },
  { id: 18, type: 'glossary', title: 'Master Glossary - Part 2', image: '', content: 'Review chapter vocabulary from the second half of the story.', vocabulary: [] },
  { id: 19, type: 'exercises', title: 'Retrieval Review', image: '', content: 'Retrieve, reconnect and use the key learning through four separate activities.' },
  { id: 20, type: 'final-challenge', title: 'Final Challenge: Yunus Emre B2', image: '', content: 'Demonstrate whole-book mastery through ten independent scored activities.' },
// c06b
];

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b
