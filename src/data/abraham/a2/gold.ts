import {
  applyA2GoldPages,
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
  type A2HotspotMap,
} from '../../a2GoldFactory';
import { abrahamA2PagesEn } from './en/pages';
import { abrahamA2PagesAr } from './ar/pages';

const config = {
  storyIds: Array.from({ length: 14 }, (_, index) => index + 1),
  knowledgeCheckPageId: 15,
  reviewPageId: 17,
  glossaryPageIds: [18, 19] as [number, number],
  finalChallengePageId: 20,
};

export const abrahamA2HotspotsGoldEn: A2HotspotMap = {
  h1: { title: 'Babylon', description: 'A boy was born in the kingdom of Babylon in Mesopotamia.' },
  h2: { title: 'Stone Objects', description: 'People believed these objects were their gods.' },
  h3: { title: 'Idols', description: 'Abraham watched his father making idols from stone.' },
  h4: { title: 'Mardukh', description: 'It is Mardukh, the king of gods.' },
  h5: { title: 'The Star', description: 'He saw a bright star. When it disappeared, he said, “I will not show respect to it.”' },
  h6: { title: 'The Moon', description: 'When the moon went away, Abraham understood that it could not be Allah.' },
  h7: { title: 'The Sun', description: 'When it set, Abraham got the idea that Allah is not a creation.' },
  h8: { title: 'Forehead', description: 'Abraham put his forehead to the ground and spoke to Allah.' },
  h9: { title: 'Fathers', description: 'We saw our fathers worship them; because of this, we do the same.' },
  h10: { title: 'Food and Drink', description: 'My Allah gives me food and drink when I need them. He heals me when I am sick.' },
  h11: { title: 'The Axe', description: 'Abraham got an axe and began to break the stone gods.' },
  h12: { title: 'Food', description: 'There were plates of food in front of them.' },
  h13: { title: 'The Pieces', description: 'All their stone gods were in pieces.' },
  h14: { title: 'These Objects', description: 'Why do you worship these objects? They can’t speak or see and even protect themselves.' },
  h15: { title: 'Firewood', description: 'People of the kingdom collected firewood for the fire for days.' },
  h16: { title: 'Calm', description: 'Abraham stayed calm, because he trusted Allah.' },
  h17: { title: 'Cool and Safe', description: 'The fire became cool and safe for him.' },
  h18: { title: 'Angel Gabriel', description: 'Angel Gabriel came to him and asked, “Is there anything you wish for?”' },
  h19: { title: 'Nimrod', description: 'Nimrod said, “I can give life and death.”' },
  h20: { title: 'The West', description: 'Can you make the sun rise from the west?' },
  h21: { title: 'Journey', description: 'Abraham began his journey. He traveled from Babylon to Syria and Palestine on camels.' },
  h22: { title: 'Safa and Marwah', description: 'They arrived at a quiet valley near two small hills, Safa and Marwah.' },
  h23: { title: "Allah's Plan", description: "Hagar knew that this was part of Allah's plan." },
  h24: { title: 'Food and Water', description: 'She looked for food and water. She ran from hill to hill.' },
  h25: { title: 'Zamzam Water', description: 'Water came out of the ground under Ishmael’s feet. Hagar shouted, “Zamzam!”' },
  h26: { title: 'Mecca', description: 'More people came there because of this water. They built a city called Mecca.' },
  h27: { title: 'The Ka’ba', description: 'Father and son found the bottom of the old building of the Ka’ba and built the new building on it.' },
  h28: { title: 'No Partner', description: 'There is no god but Allah. He has no partner, rival or helper.' },
};

export const abrahamA2HotspotsGoldAr: A2HotspotMap = {
  h1: { title: 'بابل', description: 'وُلِدَ صَبِيٌّ فِي مَمْلَكَةِ بَابِلَ فِي بِلَادِ مَا بَيْنَ النَّهْرَيْنِ.' },
  h2: { title: 'الأصنام الحجرية', description: 'رأى إبراهيم أن تلك الأصنام الحجرية لا تأكل ولا تشرب ولا تتكلم.' },
  h3: { title: 'الأصنام', description: 'كان إبراهيم يشاهد أباه وهو يصنع الأصنام من الحجر.' },
  h4: { title: 'مردوخ', description: 'إنه مردوخ، ملك الآلهة.' },
  h5: { title: 'كوكبًا', description: 'رأى كوكبًا مضيئًا، ولكن لما غاب قال: لا أحب الآفلين.' },
  h6: { title: 'القمر', description: 'لما غاب القمر، فهم إبراهيم أن القمر لا يمكن أن يكون الله.' },
  h7: { title: 'الشمس', description: 'لما غابت الشمس، فهم إبراهيم أن الله ليس مخلوقًا.' },
  h8: { title: 'جبهته', description: 'وضع إبراهيم جبهته على الأرض، ودعا الله.' },
  h9: { title: 'آباءنا', description: 'رأينا آباءنا يعبدونها؛ ولهذا السبب، نحن نفعل مثلهم.' },
  h10: { title: 'الطعام والشراب', description: 'إن ربي يعطيني الطعام والشراب عندما أحتاج إليهما. وإذا مرضت، فهو يشفيني.' },
  h11: { title: 'الفأس', description: 'بدأ إبراهيم يحطم الآلهة الحجرية، ثم وضع الفأس على عنق أكبرها.' },
  h12: { title: 'الطعام', description: 'كانت أمامها أطباق من الطعام.' },
  h13: { title: 'القطع', description: 'كانت كل آلهتهم الحجرية قطعًا متكسرة.' },
  h14: { title: 'الأشياء', description: 'لماذا تعبدون هذه الأشياء؟ إنها لا تتكلم ولا ترى ولا تستطيع أن تحمي نفسها.' },
  h15: { title: 'الحطب', description: 'جمع أهل المملكة الحطب للنار أيامًا.' },
  h16: { title: 'هادئًا', description: 'بقي إبراهيم هادئًا، لأنه كان يثق بالله.' },
  h17: { title: 'باردة وآمنة', description: 'فصارت النار باردة وآمنة له.' },
  h18: { title: 'جبريل', description: 'جاءه الملك جبريل وسأله: هل تريد شيئًا؟ فقال إبراهيم: لا شيء منك!' },
  h19: { title: 'نمرود', description: 'قال نمرود: أنا أحيي وأميت.' },
  h20: { title: 'المغرب', description: 'هل تستطيع أن تأتي بها من المغرب؟' },
  h21: { title: 'الرحلة', description: 'بدأ إبراهيم رحلته. سافر من بابل إلى بلاد الشام وفلسطين على ظهور الجمال.' },
  h22: { title: 'الصفا والمروة', description: 'وصلوا إلى واد هادئ، قريب من تلين صغيرين، هما الصفا والمروة.' },
  h23: { title: 'خطة الله', description: 'كانت هاجر تعلم أن هذا جزء من خطة الله.' },
  h24: { title: 'الطعام والماء', description: 'بحثت عن الطعام والماء، وركضت من تل إلى تل.' },
  h25: { title: 'ماء زمزم', description: 'خرج الماء من الأرض تحت قدمي إسماعيل. ولما رأت هاجر ذلك، صاحت: زمزم!' },
  h26: { title: 'مكة', description: 'جاء ناس أكثر إلى هناك بسبب هذا الماء، فبنوا مدينة تسمى مكة.' },
  h27: { title: 'الكعبة', description: 'وجد الأب والابن أساس البناء القديم للكعبة، وبنيا عليه البناء الجديد.' },
  h28: { title: 'لا إله إلا الله', description: 'ليس له شريك، ولا ند، ولا معين.' },
};

const applyAnimatedWordOverrides = (
  pages: ReturnType<typeof applyA2GoldPages>,
  overrides: Record<number, string[]>,
) => pages.map((page) => overrides[page.id] ? { ...page, animatedWords: overrides[page.id] } : page);

const abrahamA2PagesGoldBaseEn = applyA2GoldPages({
  canonicalPages: abrahamA2PagesEn,
  hotspotMap: abrahamA2HotspotsGoldEn,
  config,
  language: 'en',
});

const abrahamA2PagesGoldBaseAr = applyA2GoldPages({
  canonicalPages: abrahamA2PagesAr,
  hotspotMap: abrahamA2HotspotsGoldAr,
  config,
  language: 'ar',
});

export const abrahamA2PagesGoldEn = applyAnimatedWordOverrides(abrahamA2PagesGoldBaseEn, {
  8: ['trusted', 'dangerous'],
});

export const abrahamA2PagesGoldAr = applyAnimatedWordOverrides(abrahamA2PagesGoldBaseAr, {
  8: ['يَثِقُ', 'الْخَطَرِ'],
  12: ['نَمُوتُ', 'رَكَضَتْ'],
});

export const abrahamA2TeacherGuideGoldEn = buildA2TeacherGuide(abrahamA2PagesGoldEn, config.storyIds, 'en');
export const abrahamA2TeacherGuideGoldAr = buildA2TeacherGuide(abrahamA2PagesGoldAr, config.storyIds, 'ar');
export const abrahamA2SelfStudyGuideGoldEn = buildA2SelfStudyGuide(abrahamA2PagesGoldEn, config.storyIds, 'en');
export const abrahamA2SelfStudyGuideGoldAr = buildA2SelfStudyGuide(abrahamA2PagesGoldAr, config.storyIds, 'ar');

export const abrahamA2TeacherGuideMetadataGoldEn = buildA2TeacherGuideMetadata('Prophet Abraham', config.storyIds.length, 'en');
export const abrahamA2TeacherGuideMetadataGoldAr = buildA2TeacherGuideMetadata('قصة النبي إبراهيم', config.storyIds.length, 'ar');
export const abrahamA2StudentGuideSectionsGoldEn = buildA2StudentGuideSections('en');
export const abrahamA2StudentGuideSectionsGoldAr = buildA2StudentGuideSections('ar');
export const abrahamA2StudentGuideMetadataGoldEn = buildA2StudentGuideMetadata('Prophet Abraham', 'en');
export const abrahamA2StudentGuideMetadataGoldAr = buildA2StudentGuideMetadata('قصة النبي إبراهيم', 'ar');
export const abrahamA2StudentGuideTextGoldEn = buildA2StudentGuideText('Prophet Abraham', 'en');
export const abrahamA2StudentGuideTextGoldAr = buildA2StudentGuideText('قصة النبي إبراهيم', 'ar');

export const abrahamA2GoldConfig = config;
