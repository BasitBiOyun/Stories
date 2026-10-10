/**
 * About & Sources page content. Team names come verbatim from the approved
 * MEB presentation (v38). The source list is a draft compiled from that
 * presentation's bibliography and the references cited inside the stories;
 * it will be replaced by the project team's own list.
 */

type Localized = { en: string; ar: string };

export interface TeamMember {
  name: string;
  note?: Localized;
}

export interface TeamRole {
  role: Localized;
  members: TeamMember[];
}

export interface TeamSection {
  title: Localized;
  roles: TeamRole[];
}

export interface BoardMember {
  name: string;
  university: Localized;
  department: Localized;
}

export interface SourceEntry {
  text: string;
  url?: string;
}

export interface SourceGroup {
  /** 'general', or a story id whose translated name becomes the heading. */
  id: string;
  title?: Localized;
  sources: SourceEntry[];
  /** Qur’an verses and hadith the book's text cites inline. */
  citations?: { label: Localized; text: Localized }[];
}

export const aboutIntro = {
  name: 'Lisandan Kültüre',
  subtitle: {
    en: 'A digital library project for foreign languages, culture, history and our values',
    ar: 'مشروع مكتبة رقمية للغات الأجنبية والثقافة والتاريخ وقيمنا',
  },
  paragraphs: {
    en: [
      'The project helps students who are learning a new language to express their own history, culture and values in that language.',
      'The library offers levelled stories in English and Arabic that students can use alongside their coursebook. Teachers can use them in class, and students can use them outside school and for self-study.',
      'The texts were written by reading and comparing different academic sources, then reviewed with feedback from subject experts. CEFR levels and the DKAB spelling guide were used as the shared standard.',
    ],
    ar: [
      'يهدف المشروع إلى أن يتمكّن الطلاب، وهم يتعلّمون لغة جديدة، من التعبير بها عن تاريخهم وثقافتهم وقيمهم.',
      'تقدّم المكتبة قصصًا متدرّجة المستوى باللغتين الإنجليزية والعربية يستخدمها الطلاب إلى جانب كتابهم المدرسي؛ إذ يستخدمها المعلّم في الصف، ويستخدمها الطالب خارج المدرسة وفي الدراسة الذاتية.',
      'كُتبت النصوص بعد قراءة مصادر أكاديمية مختلفة والمقارنة بينها، ثم رُوجعت بملاحظات المتخصصين. واعتُمدت مستويات الإطار الأوروبي المرجعي (CEFR) ودليل الإملاء لمادة الثقافة الدينية والمعرفة الأخلاقية معيارًا مشتركًا.',
    ],
  },
  facts: {
    en: ['Levelled stories', 'A2 · B1 · B2', 'English and Arabic'],
    ar: ['قصص متدرّجة', 'A2 · B1 · B2', 'الإنجليزية والعربية'],
  },
  videoId: 'KxLOZIMvP08',
};

const editor: Localized = { en: 'Editor', ar: 'التحرير' };

export const projectCoordinator = {
  role: { en: 'Project Coordinator', ar: 'منسّق المشروع' },
  name: 'Dr. Ahmet Ağralı',
  note: { en: 'Project coordination · Academic process oversight', ar: 'تنسيق المشروع · متابعة المسار الأكاديمي' },
};

export const teamSections: TeamSection[] = [
  {
    title: { en: 'English Section', ar: 'القسم الإنجليزي' },
    roles: [
      {
        role: { en: 'Text compilation and levelling', ar: 'جمع النصوص وتدريجها حسب المستوى' },
        members: [{ name: 'Selma Özülkü', note: { en: 'MA, Islamic History and Arts', ar: 'ماجستير في التاريخ الإسلامي والفنون' } }],
      },
      { role: editor, members: [{ name: 'Yunus Emre Yılmaz' }, { name: 'Dr. Ahmet Ağralı' }] },
    ],
  },
  {
    title: { en: 'Arabic Section', ar: 'القسم العربي' },
    roles: [
      { role: { en: 'Translation', ar: 'الترجمة' }, members: [{ name: 'Dr. Rabia Okutan' }] },
      { role: editor, members: [{ name: 'Dr. Ahmet Ağralı' }] },
    ],
  },
  {
    title: { en: 'Software Development and Digital Design', ar: 'تطوير البرمجيات والتصميم الرقمي' },
    roles: [
      {
        role: { en: 'Software Development and Application Architecture', ar: 'تطوير البرمجيات وهندسة التطبيق' },
        members: [
          {
            name: 'Yunus Emre Yılmaz',
            note: {
              en: 'Digital Design and User Experience · Visual Content and Voice-over Production · Interactive Map and Activity Design',
              ar: 'التصميم الرقمي وتجربة المستخدم · إنتاج المحتوى المرئي والتسجيل الصوتي · تصميم الخرائط التفاعلية والأنشطة',
            },
          },
        ],
      },
    ],
  },
];

const theologyIslamicHistory: Localized = {
  en: 'Faculty of Theology · Islamic History and Arts',
  ar: 'كلية الإلهيات · قسم التاريخ الإسلامي والفنون',
};
const neu: Localized = { en: 'Necmettin Erbakan University', ar: 'جامعة نجم الدين أربكان' };
const selcuk: Localized = { en: 'Selçuk University', ar: 'جامعة سلجوق' };

export const advisoryBoard: BoardMember[] = [
  { name: 'Prof. Ahmet Turan Yüksel', university: neu, department: theologyIslamicHistory },
  { name: 'Prof. Mithat Eser', university: selcuk, department: theologyIslamicHistory },
  {
    name: 'Prof. Bilal Kuşpınar',
    university: neu,
    department: { en: 'Faculty of Social Sciences and Humanities · History of Philosophy', ar: 'كلية العلوم الاجتماعية والإنسانية · تاريخ الفلسفة' },
  },
  {
    name: 'Prof. Resul Ay',
    university: { en: 'Hacettepe University', ar: 'جامعة حاجة تبه' },
    department: { en: 'Faculty of Letters · Department of History · Medieval History', ar: 'كلية الآداب · قسم التاريخ · تاريخ العصور الوسطى' },
  },
  { name: 'Dr. Yusuf Büyükyılmaz', university: selcuk, department: theologyIslamicHistory },
];

const quranLabel: Localized = { en: 'Qur’an', ar: 'القرآن الكريم' };
const hadithLabel: Localized = { en: 'Hadith', ar: 'الحديث الشريف' };

export const sourceGroups: SourceGroup[] = [
  {
    id: 'general',
    title: { en: 'General sources', ar: 'مصادر عامة' },
    sources: [
      { text: 'TDV İslâm Ansiklopedisi, related entries.', url: 'https://islamansiklopedisi.org.tr' },
      { text: 'Türk Maarif Ansiklopedisi, related entries.', url: 'https://turkmaarifansiklopedisi.org.tr' },
      { text: 'Diyanet İşleri Başkanlığı. Kur’an-ı Kerim Meali.', url: 'https://kuran.diyanet.gov.tr' },
      { text: 'Diyanet İşleri Başkanlığı. Hadislerle İslam. İstanbul, 2020.' },
      { text: 'Ibn Kathir. Stories of the Prophets. Tr. Muhammad Mustafa Geme’ah. Al-Azhar.' },
      { text: 'Köksal, Mustafa Asım. Peygamberler Tarihi. Ankara, 2007.' },
      { text: 'Hamidullah, Muhammed. Introduction to Islam. Ankara, 2011.' },
      { text: 'Yusuf Ali. The Holy Qur’an. Lahore, 1937.' },
      { text: 'Pickthall, Muhammad Marmaduke. The Meaning of the Glorious Qur’an. New York, 1930.' },
      { text: 'Öztürk, Abdul Sedar. The Qur’an. İstanbul, 2003.' },
    ],
  },
  {
    id: 'adam',
    sources: [],
    citations: [
      { label: quranLabel, text: { en: 'al-Isra 70 · an-Nisa 163–165 · Sad 72', ar: 'الإسراء ٧٠ · النساء ١٦٣–١٦٥ · ص ٧٢' } },
      { label: hadithLabel, text: { en: 'Abu Dawud, Sunnah 16 · Tirmidhi, Tafsir 2/1 · Muslim, Jumu‘ah 17, 18 · Tirmidhi, Jumu‘ah 1, 2 · Nasa’i, Jumu‘ah 4, 45', ar: 'أبو داود، السنة ١٦ · الترمذي، التفسير ٢/١ · مسلم، الجمعة ١٧، ١٨ · الترمذي، الجمعة ١، ٢ · النسائي، الجمعة ٤، ٤٥' } },
    ],
  },
  {
    id: 'ibrahim',
    sources: [{ text: 'Kuzgun, Şaban. İslam Kaynaklarına Göre Hz. İbrahim ve Haniflik. Ankara, 1985.' }],
    citations: [
      {
        label: quranLabel,
        text: { en: 'al-Baqarah 124, 127, 258 · Al Imran 96 · al-An’am 74, 77, 80–83 · Ibrahim 37 · al-Anbiya 51, 68–70 · al-Ankabut 24, 26 · as-Saffat 91–92, 101–106 · Fussilat 37', ar: 'البقرة ١٢٤، ١٢٧، ٢٥٨ · آل عمران ٩٦ · الأنعام ٧٤، ٧٧، ٨٠–٨٣ · إبراهيم ٣٧ · الأنبياء ٥١، ٦٨–٧٠ · العنكبوت ٢٤، ٢٦ · الصافات ٩١–٩٢، ١٠١–١٠٦ · فصّلت ٣٧' },
      },
    ],
  },
  {
    id: 'musa',
    sources: [
      {
        text: 'Harman, Ömer Faruk (ed.). Kur’an’da Yahudiler. “Kur’an Kıssaları Bağlamında Yahudi (İsrail) Tarihi” (Mehmet Katar). İstanbul 29 Mayıs Üniversitesi Kur’an Araştırmaları Merkezi Yayınları, İstanbul, 2019.',
      },
    ],
    citations: [
      { label: quranLabel, text: { en: 'al-A’raf 142 · Taha 9–24 · ash-Shu’ara 30–33, 52–68 · al-Qasas 7, 9, 15–21', ar: 'الأعراف ١٤٢ · طه ٩–٢٤ · الشعراء ٣٠–٣٣، ٥٢–٦٨ · القصص ٧، ٩، ١٥–٢١' } },
    ],
  },
  {
    id: 'mecca',
    sources: [
      { text: 'Çelebi, Furkan. Cahiliye Döneminde Mekke. Ankara, 2024.' },
      { text: 'Kelpetin, Mahmut. “Cahiliye,” TÜBİTAK Ansiklopedisi.' },
    ],
    citations: [
      { label: quranLabel, text: { en: 'Al Imran 96 · an-Nahl 58–59 · Ibrahim 37 · az-Zukhruf 31 · Quraysh 1–4', ar: 'آل عمران ٩٦ · النحل ٥٨–٥٩ · إبراهيم ٣٧ · الزخرف ٣١ · قريش ١–٤' } },
      { label: hadithLabel, text: { en: 'Sunan al-Tirmidhi, 3925', ar: 'سنن الترمذي، ٣٩٢٥' } },
    ],
  },
  {
    id: 'yunusEmre',
    sources: [
      { text: 'Bulduk, Üçler. “Yunus Emre Çağında Anadolu’nun Siyasal ve Sosyal Durumu,” DTCF Dergisi Yunus Emre Özel Sayısı, 2021, s. 57-67.' },
      { text: 'Gürer, Banu. “Yunus Emre,” Türk Maarif Ansiklopedisi.', url: 'https://turkmaarifansiklopedisi.org.tr/yunus-emre' },
      { text: 'Kara, Mustafa. “Tekke,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/tekke' },
      { text: 'Ocak, Ahmet Yaşar. “Babaîlik,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/babailik' },
      { text: 'Ocak, Ahmet Yaşar. Babaîler İsyanı. Dergah Yayınları, İstanbul, 2011.' },
      { text: 'Öngören, Reşat. “Sûfî,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/sufi' },
      { text: 'Sevim, Ali. “Keyhüsrev II,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/keyhusrev-ii' },
      { text: 'Sümer, Faruk. “Keykubad I,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/keykubad-i' },
      { text: 'Sümer, Faruk. “Kösedağ Savaşı,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/kosedag-savasi' },
      { text: 'Tatcı, Mustafa. “Yûnus Emre,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/yunus-emre' },
      { text: 'Yazıcı, Tahsin. “Derviş,” TDV İslâm Ansiklopedisi.', url: 'https://islamansiklopedisi.org.tr/dervis' },
      { text: 'Yeniterzi, Emine. “Mesnevi-i Şerif ve Risaletü’n-Nushiyye’de Ortak Değerler,” I. Ulusal Yunus Emre Sempozyumu, Karaman, 2010, s. 101-116.' },
    ],
    citations: [{ label: hadithLabel, text: { en: 'Ibn Majah, Zuhd 31, no. 4259', ar: 'ابن ماجه، الزهد ٣١، رقم ٤٢٥٩' } }],
  },
];
