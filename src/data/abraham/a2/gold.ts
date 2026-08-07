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
  h1: { title: 'Babylon', description: 'Abraham was born in Babylon, in ancient Mesopotamia.' },
  h2: { title: 'Stone Idols', description: 'People worshipped stone idols, but Abraham saw that they could not hear, speak, or move.' },
  h3: { title: 'Idols Made by People', description: 'Abraham watched his father make idols from stone.' },
  h4: { title: 'Idol Called Mardukh', description: 'People called this stone idol their king, but Abraham saw it was only an object.' },
  h5: { title: 'A Star Sets', description: 'The star disappeared, so Abraham knew it could not be Allah.' },
  h6: { title: 'The Moon Sets', description: 'When the moon went away, Abraham said Allah never goes away.' },
  h7: { title: 'The Sun Sets', description: 'The sun also set, so Abraham understood that Allah is the Creator, not a creation.' },
  h8: { title: 'Abraham Prays', description: 'Abraham asked Allah to show him the right way.' },
  h9: { title: 'Following Old Customs', description: 'The people said they worshipped idols because their fathers did.' },
  h10: { title: 'Allah Provides', description: 'Abraham said Allah gives food and drink and heals him when he is sick.' },
  h11: { title: 'The Axe', description: 'Abraham used an axe to break the idols and left the largest one.' },
  h12: { title: 'Food Before Idols', description: 'Food was placed before the idols, but the stone objects could not eat.' },
  h13: { title: 'Broken Idols', description: 'The people found their idols broken and brought Abraham to question him.' },
  h14: { title: 'Think About It', description: 'Abraham asked why they worshipped objects that could not speak or protect themselves.' },
  h15: { title: 'A Huge Fire', description: 'The people built a huge fire to punish Abraham.' },
  h16: { title: 'Trust in Allah', description: 'Abraham stayed calm because he trusted Allah.' },
  h17: { title: 'Allah Protects Abraham', description: 'By Allah’s command, the fire became cool and safe for Abraham.' },
  h18: { title: 'Abraham Relies on Allah', description: 'When Gabriel offered help, Abraham said he relied on Allah.' },
  h19: { title: 'Nimrod’s Claim', description: 'Nimrod claimed he could give life and death.' },
  h20: { title: 'The Sun Challenge', description: 'Abraham asked Nimrod to make the sun rise from the west, and he could not.' },
  h21: { title: 'Leaving Babylon', description: 'Abraham left Babylon to carry Allah’s message to other lands.' },
  h22: { title: 'Safa and Marwah', description: 'The family reached a quiet valley near the hills of Safa and Marwah.' },
  h23: { title: 'Hagar Trusts Allah', description: 'Hagar trusted that Allah would protect her and Ishmael.' },
  h24: { title: 'Searching for Water', description: 'With no water left, Hagar ran from hill to hill looking for help.' },
  h25: { title: 'Zamzam Water', description: 'Water came from the ground near Ishmael and became known as Zamzam.' },
  h26: { title: 'Mecca Grows', description: 'People settled near the water, and a city called Mecca grew there.' },
  h27: { title: 'Building the Ka’ba', description: 'Abraham and Ishmael built the Ka’ba together.' },
  h28: { title: 'One Allah', description: 'The final message says Allah is One and has no partner.' },
};

export const abrahamA2HotspotsGoldAr: A2HotspotMap = {
  h1: { title: 'بابل', description: 'وُلِد إبراهيم في بابل في بلاد ما بين النهرين.' },
  h2: { title: 'الأصنام الحجرية', description: 'عبد الناس أصناما حجرية، لكن إبراهيم رأى أنها لا تسمع ولا تتكلم ولا تتحرك.' },
  h3: { title: 'أصنام يصنعها الناس', description: 'رأى إبراهيم أباه يصنع الأصنام من الحجر.' },
  h4: { title: 'صنم اسمه مردوخ', description: 'كان الناس يسمون هذا الصنم ملك آلهتهم، ورآه إبراهيم مجرد شيء من الحجر.' },
  h5: { title: 'النجم يغيب', description: 'غاب النجم، فعرف إبراهيم أنه لا يمكن أن يكون الله.' },
  h6: { title: 'القمر يغيب', description: 'عندما غاب القمر قال إبراهيم إن الله لا يغيب.' },
  h7: { title: 'الشمس تغيب', description: 'غابت الشمس أيضا، ففهم إبراهيم أن الله هو الخالق وليس مخلوقا.' },
  h8: { title: 'دعاء إبراهيم', description: 'طلب إبراهيم من الله أن يهديه إلى الطريق الصحيح.' },
  h9: { title: 'اتباع العادات القديمة', description: 'قال الناس إنهم يعبدون الأصنام لأن آباءهم فعلوا ذلك.' },
  h10: { title: 'الله يرزق', description: 'قال إبراهيم إن الله يطعمه ويسقيه ويشفيه عندما يمرض.' },
  h11: { title: 'الفأس', description: 'استخدم إبراهيم الفأس لكسر الأصنام وترك أكبرها.' },
  h12: { title: 'الطعام أمام الأصنام', description: 'وُضع الطعام أمام الأصنام، لكنها لم تكن تستطيع أن تأكل.' },
  h13: { title: 'الأصنام المكسورة', description: 'وجد الناس أصنامهم مكسورة وأحضروا إبراهيم ليسألوه.' },
  h14: { title: 'فكر في الأمر', description: 'سأل إبراهيم لماذا يعبدون أشياء لا تتكلم ولا تحمي نفسها.' },
  h15: { title: 'نار كبيرة', description: 'جمع الناس الحطب وأشعلوا نارا كبيرة لمعاقبة إبراهيم.' },
  h16: { title: 'الثقة بالله', description: 'بقي إبراهيم هادئا لأنه كان يثق بالله.' },
  h17: { title: 'الله يحفظ إبراهيم', description: 'بأمر الله أصبحت النار باردة وآمنة على إبراهيم.' },
  h18: { title: 'إبراهيم يعتمد على الله', description: 'عندما عرض جبريل المساعدة، اعتمد إبراهيم على الله.' },
  h19: { title: 'ادعاء نمرود', description: 'ادعى نمرود أنه يستطيع أن يحيي ويميت.' },
  h20: { title: 'تحدي الشمس', description: 'طلب إبراهيم من نمرود أن يجعل الشمس تشرق من الغرب، فلم يستطع.' },
  h21: { title: 'مغادرة بابل', description: 'غادر إبراهيم بابل ليحمل رسالة الله إلى بلاد أخرى.' },
  h22: { title: 'الصفا والمروة', description: 'وصلت الأسرة إلى واد هادئ قرب جبلي الصفا والمروة.' },
  h23: { title: 'ثقة هاجر بالله', description: 'وثقت هاجر أن الله سيحفظها ويحفظ إسماعيل.' },
  h24: { title: 'البحث عن الماء', description: 'عندما نفد الماء، سعت هاجر بين التلال بحثا عنه.' },
  h25: { title: 'ماء زمزم', description: 'خرج الماء من الأرض قرب إسماعيل وأصبح معروفا باسم زمزم.' },
  h26: { title: 'نشأة مكة', description: 'استقر الناس قرب الماء، ونشأت هناك مدينة مكة.' },
  h27: { title: 'بناء الكعبة', description: 'بنى إبراهيم وإسماعيل الكعبة معا.' },
  h28: { title: 'الله واحد', description: 'تقول الرسالة الأخيرة إن الله واحد لا شريك له.' },
};

export const abrahamA2PagesGoldEn = applyA2GoldPages({
  canonicalPages: abrahamA2PagesEn,
  hotspotMap: abrahamA2HotspotsGoldEn,
  config,
  language: 'en',
});

export const abrahamA2PagesGoldAr = applyA2GoldPages({
  canonicalPages: abrahamA2PagesAr,
  hotspotMap: abrahamA2HotspotsGoldAr,
  config,
  language: 'ar',
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
