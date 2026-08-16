import type { B1ExplicitHighlightPair } from '../../b1HighlightStandard';
import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyHighlightSurfaceForms } from '../../highlightSourceLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { meccaB1Pages } from './en/pages';
import { meccaB1PagesAr } from './ar/pages';
import { meccaB1BlueprintConfig } from './config';

const P = (
  enWord: string,
  enDefinition: string,
  arWord: string,
  arDefinition: string,
): B1ExplicitHighlightPair => ({
  en: { word: enWord, definition: enDefinition },
  ar: { word: arWord, definition: arDefinition },
});

/** Reviewed concept pairs for chapters whose legacy EN/AR Word Notes were not parallel. */
const explicitTargets: Record<number, readonly B1ExplicitHighlightPair[]> = {
  4: [
    P('mission', 'An important task or duty.', 'واجبه', 'المهمة أو العمل الذي يجب على الشخص أن يؤديه.'),
    P('defeated', 'Won against another group in conflict.', 'هَزَمَت', 'انتصرت على قبيلة أخرى.'),
    P('idol', 'An object wrongly worshipped as a god.', 'أصنامًا', 'تماثيل كان الناس يعبدونها من دون الله.'),
    P('farm', 'To grow food from the land.', 'الزِراعة', 'زراعة الأرض لإنتاج الطعام.'),
    P('goods', 'Products that are bought and sold.', 'البضائع', 'أشياء ومنتجات تباع وتشترى.'),
  ],
  5: [
    P('route', 'A way or path from one place to another.', 'طرق التجارة', 'المسالك التي يسلكها التجار بين الأماكن.'),
    P('wealthy', 'Rich; having a lot of money or valuable things.', 'غنيّة', 'لديها أموال وثروة كثيرة.'),
    P('agreement', 'A deal or understanding between people or groups.', 'اتّفاقيّات', 'اتفاقات تساعد الناس على التجارة بأمان.'),
    P('merchant', 'A person who buys and sells goods.', 'التجّار', 'أشخاص يشترون البضائع ويبيعونها.'),
    P('sacred months', 'Special months when fighting was forbidden.', 'الأشْهر الحُرُم', 'أشهر كان الناس يبتعدون فيها عن القتال.'),
  ],
  6: [
    P('fair', 'A large public event where people buy and sell goods.', 'أسواق', 'أماكن يجتمع فيها الناس للبيع والشراء.'),
    P('controlled', 'Had power over something.', 'تُسَيْطِرُ', 'تتحكم في شيء وتملك القوة عليه.'),
    P('usury', 'Unfair extra money demanded on a loan.', 'الرِّبا', 'مال إضافي ظالم يؤخذ عند إقراض المال.'),
    P('widespread', 'Existing in many places or among many people.', 'انْتِشَارُ', 'وجود الشيء على نطاق واسع.'),
  ],
  7: [
    P('social class', 'A group in society based on wealth, status, or power.', 'الطبقات الاجتماعيّة', 'فئات المجتمع بحسب المال والمكانة والقوة.'),
    P('debt', 'Money that someone must pay back.', 'دَيْنٍ', 'مال مستحق للآخرين يجب سداده.'),
    P('interest', 'Extra money paid when borrowing money.', 'الربا الفاحش', 'زيادة ظالمة على القروض تثقل المحتاجين.'),
    P('struggled', 'Tried very hard in a difficult situation.', 'صعوبة في العيْش', 'حالة من المشقة في تأمين الحياة الأساسية.'),
    P('orphan', 'A child whose parents have died.', 'اليتامى', 'أطفال فقدوا آباءهم ويحتاجون إلى الرعاية.'),
  ],
  8: [
    P('tribe', 'A large family or social group with a shared identity.', 'القبيلة', 'مجموعة من العائلات تجمعها روابط مشتركة.'),
    P('physical strength', 'Power of the body.', 'القوّة البدنيّة', 'قوة الجسم والقدرة على العمل والقتال.'),
    P('property', 'Things that belong to a person.', 'أموالهم', 'ما يملكه الشخص من مال وممتلكات.'),
    P('ancestor', 'A family member who lived long ago.', 'أجدادهم', 'أفراد العائلة الذين عاشوا في الماضي.'),
    P('honor', 'Respect and good reputation.', 'الاحترام', 'التقدير والمكانة الجيدة بين الناس.'),
  ],
  9: [
    P('depending on', 'Being decided or affected by something.', 'بناء على', 'بحسب شيء يؤثر في النتيجة أو الوضع.'),
    P('unfair treatment', 'Behavior that is not just or equal.', 'معاملة غير عادلة', 'سلوك لا يقوم على العدل أو المساواة.'),
    P('brutal', 'Very cruel and harsh.', 'ظُروفا قاسية', 'أحوال شديدة الصعوبة والقسوة.'),
    P('poet', 'A person who writes poems.', 'الشعراء', 'أشخاص ينظمون الشعر وينقلون به الأخبار والأفكار.'),
    P('media', 'Ways of sharing news, ideas, and messages.', 'إعلام', 'وسائل نقل الأخبار والأفكار والرسائل بين الناس.'),
  ],
  10: [
    P('idol', 'An object wrongly worshipped as a god.', 'الأصنام', 'تماثيل كان الناس يعبدونها من دون الله.'),
    P('Hanif', 'A person who followed the old religion of Abraham.', 'الحُنَفاء', 'أشخاص اتبعوا دين إبراهيم في التوحيد.'),
    P('Creator', 'Allah, the One who created everything.', 'الخالق', 'الله الذي خلق كل شيء.'),
    P('superstition', 'A false belief not based on true religion or reason.', 'الخرافات', 'معتقدات غير صحيحة لا تقوم على دليل.'),
    P('omen', 'A sign people wrongly believe can show the future.', 'التطير', 'اعتقاد باطل بأن بعض العلامات تكشف ما سيحدث.'),
  ],
  13: [
    P('mocked', 'Made fun of someone in an unkind way.', 'سَخِرُوا', 'استهزؤوا وضحكوا من شخص أو فكرة.'),
    P('criticized', 'Said that something was wrong.', 'يَنْتَقِدُ', 'يبين أن شيئًا أو اعتقادًا غير صحيح.'),
    P('violent', 'Using physical force or cruelty.', 'بِعُنْفٍ', 'باستخدام القوة والقسوة.'),
    P('Bilal', 'One of the first believers in Islam who suffered for his faith.', 'بلال', 'أحد المؤمنين الأوائل بالإسلام.'),
    P('boycott', 'Refusing to trade or deal with a group as pressure.', 'مقاطعة', 'الامتناع عن التعامل مع جماعة للضغط عليها.'),
  ],
  14: [
    P('survive', 'To stay alive in a difficult or dangerous situation.', 'يعيشوا', 'أن يبقوا أحياء رغم شدة الظروف.'),
    P('influence', 'Power to affect people or events.', 'مكانتهم', 'المنزلة والنفوذ اللذان يمنحان الشخص تأثيرًا في المجتمع.'),
    P('hostile', 'Unfriendly and aggressive.', 'أعداءً', 'معادين ومناهضين بشدة.'),
    P('judged', 'Held responsible for actions.', 'الحساب', 'مساءلة الإنسان عن أعماله بعد الموت.'),
    P('loyalty', 'Strong support for a person or group.', 'العصبية القبلية', 'التعصب الشديد للقبيلة واتباعها.'),
  ],
  15: [
    P('freedom of choice', 'The right to choose freely.', 'حريّة الاختيار', 'قدرة الشخص على الاختيار بحرية.'),
    P('stateless', 'Without protection or belonging to a recognized group or country.', 'بدُون وطن', 'من لا يملك حماية أو انتماء إلى وطن.'),
    P('prevent', 'To stop something from happening.', 'لِمَنْعِ', 'إيقاف شيء ومنع حدوثه.'),
    P('mercy', 'Kindness and forgiveness shown to others.', 'الرحمة', 'اللطف والعطف والصفح عن الآخرين.'),
    P('fairness', 'Justice and equal treatment.', 'العدل', 'معاملة الناس بالإنصاف وإعطاء كل ذي حق حقه.'),
  ],
};

const lockedEnglish = applyHotspotSourceLock(meccaB1Pages, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    7: { 'h7-1': 'Rich' },
    8: { 'h8-2': 'Tribe' },
    12: { 'h12-1': 'Quraysh' },
    13: { 'h13-1': 'Bilal' },
  },
});

const lockedArabic = applyHighlightSurfaceForms(
  applyHotspotSourceLock(meccaB1PagesAr, { language: 'ar', level: 'B1' }),
  'ar',
);

const standardized = applyB1HighlightStandard(lockedEnglish, lockedArabic, {
  storyKey: 'Mecca',
  storyIds: meccaB1BlueprintConfig.storyIds,
  glossaryPageIds: meccaB1BlueprintConfig.glossaryPageIds,
  explicitTargets,
});

export const meccaB1SourcePagesEn = standardized.englishPages;
export const meccaB1SourcePagesAr = standardized.arabicPages;
export const meccaB1HighlightTargets = standardized.targets;
