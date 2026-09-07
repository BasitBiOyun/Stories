import type { PageData } from '../../../../types';

type Vocab = { word: string; definition: string };

type Hotspot = NonNullable<PageData['hotspots']>[number];

const story = (
  id: number,
  title: string,
  image: string,
  audioUrl: string,
  content: string,
  vocabulary: Vocab[],
  hotspots: Hotspot[],
): PageData => ({
  id,
  type: 'story',
  title,
  image,
  audioUrl,
  content,
  vocabulary,
  hotspots,
});

export const adamB2Pages: PageData[] = [
  story(
    1,
    'Introduction',
    '',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch1.mp3?alt=media&token=0b8932e8-d415-4e1b-846d-5b43c5e6c8a5',
    `Adam (pbuh) was the first human being to be created, and the first prophet who served as a guide and example for mankind. We learn his story from the Holy Qur'an. Based on the Holy Qur'an, the creation of Adam (pbuh) is not like the creation of other humans. He was created from clay without parents, as a miraculous sign of Allah's unlimited power. The story of Adam (pbuh) is told in several chapters (surahs) of the Holy Qur'an. These are Surah Baqarah, Surah Al-Imran, Surah A’raf, Surah Hijr, Surah Isra, Surah Kahf, Surah Taha, and Surah Sâd. In these surahs, Satan is portrayed as a rebel against Allah’s command but also as a rival and enemy of Adam (pbuh) rather than Allah.

Adam (pbuh)’s tale (kıssa) is not symbolic or imaginary, but it is an original factual tale with historical correctness and reality from which many lessons and morals we can take. It also includes the Unseen (gaybî), and this makes the story fabulous. The tale provides us a uniquely key and deeply philosophical understanding of life. It clearly appears that human beings' earthly life is the scene of a division and contrast between good and evil as opposed to each other.`,
    [
      { word: 'miraculous', definition: 'Produced by divine power in a way that goes beyond ordinary natural processes.' },
      { word: 'fabulous', definition: 'Remarkable or extraordinary; here describing the striking nature of the story.' },
      { word: 'philosophical', definition: 'Concerned with fundamental questions about knowledge, reality, and human existence.' },
      { word: 'Unseen', definition: 'Reality beyond direct human perception, known through divine revelation.' },
      { word: 'contrast', definition: 'A clear difference between two opposing ideas, qualities, or conditions.' },
    ],
    [
      { id: 'h1a', x: 28, y: 36, title: 'The First Prophet', description: 'Adam (pbuh) is presented as the first human and the first prophet.' },
      { id: 'h1b', x: 72, y: 58, title: 'Creation and Moral Choice', description: 'The chapter links Adam’s creation with the later contrast between good and evil.' },
    ],
  ),
  story(
    2,
    'The Creation of Adam',
    '',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch2.mp3?alt=media&token=a7ec7e2d-f33f-41c3-b6c8-5816abceea1a',
    `The material from which Adam (pbuh) was created is expressed in various verses (âyet) using different terms: earth (türâb), water (mâ’), clay (tîn), etc. These different expressions are used to describe both the composition and the various stages of mud, which is a mixture of water and soil. As an example, Surah Sâd, verse 71, informs that Allah created Adam (pbuh) out of clay, which is a humble material: “Your Lord said to the angels, ‘I am creating a human being from clay.’”

Prophet Muhammad (pbuh) also said: "Allah created Adam (pbuh) from a handful of dust taken from different lands, so the children of Adam (pbuh) have been created according to the composition of the land. Therefore, from mankind we have white, red, black, and yellow ones; we have good and evil, ease and sorrow, and what comes in between them." (see Ebu Davud, Sünnet 16; Tirmizi, Tefsir 2/1) So, in essence, people are from the same soil and they have no superiority over one another due to the difference in their colors.

It is clear that Adam (pbuh) did not evolve from any other living being, but was created from the earth and was the first ancestor of a completely separate species of human being. He was given the necessary spiritual, moral, mental, and psychological abilities.`,
    [
      { word: 'composition', definition: 'The particular materials or elements that together form something.' },
      { word: 'mixture', definition: 'A substance or whole formed by combining two or more different elements.' },
      { word: 'superiority', definition: 'The condition of being regarded as higher or better than someone else.' },
      { word: 'ancestor', definition: 'A person from whom later generations are descended.' },
      { word: 'species', definition: 'A distinct group of living beings sharing major biological characteristics.' },
    ],
    [
      { id: 'h2a', x: 34, y: 63, title: 'Shared Human Origin', description: 'The chapter emphasizes a common origin from earth and rejects superiority based on colour.' },
      { id: 'h2b', x: 68, y: 34, title: 'Human Capacities', description: 'Adam is described as receiving spiritual, moral, mental, and psychological abilities.' },
    ],
  ),
  story(
    3,
    'The Vicegerent & The Gift of Knowledge',
    '',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch3.mp3?alt=media&token=0dcc80e8-706d-4b22-85bd-2c269180bd8b',
    `To be a representative, Adam (pbuh) needed some extraordinary qualities. Allah breathed His own spirit into Adam (pbuh) (see Sâd: 72). Also, he had to be taught by Allah. Breathing Allah’s spirit into Adam (pbuh) shows the value that Allah gave him. It also means giving Adam (pbuh) life and the beginning of human existence. Allah’s spirit into Adam (pbuh) distinguishes him from the rest of the creatures, too. Then, He (Allah) taught him all the names.

“And He taught Adam the names, all of them; then He presented them to the angels and said, ‘Tell Me the names of these, if you are sincere.’ They said, ‘Glory be to You! We have no knowledge except what You have taught us. It is You who are the Knowledgeable, the Wise.’ He said, ‘O Adam, tell them their names.’ And when he (Adam) told them their names, He said, ‘Did I not tell you that I know the secrets of the heavens and the earth, and that I know what you reveal and what you conceal?’ (Baqarah: 31-33)

The statement “Allah taught Adam (pbuh) all the names” points to the broadness of Adam (pbuh)’s knowledge. The names taught to Adam (pbuh) could be the fundamental knowledge of being human, thinking, forming logical judgments, and producing civilization and culture. The knowledge that was given to Adam (pbuh) means the beginning of the skill for learning and speaking language and using intelligence. The names refer to the fact that knowledge is the basis of science, technology, and culture.`,
    [
      { word: 'representative', definition: 'A person entrusted to act or carry responsibility on behalf of another.' },
      { word: 'extraordinary', definition: 'Very unusual or remarkable and beyond what is normally expected.' },
      { word: 'fundamental', definition: 'Basic and essential to the structure or development of something.' },
      { word: 'civilization', definition: 'An organized human society with developed culture, knowledge, and institutions.' },
      { word: 'intelligence', definition: 'The ability to understand, learn, reason, and use knowledge effectively.' },
    ],
    [
      { id: 'h3a', x: 25, y: 52, title: 'The Gift of Knowledge', description: 'Adam is taught the names and is distinguished through knowledge and learning.' },
      { id: 'h3b', x: 74, y: 42, title: 'Knowledge and Civilization', description: 'The chapter connects language, reasoning, science, technology, and culture.' },
    ],
  ),
  story(
    4,
    'Angels’ Prostration & Iblis’s Arrogance',
    '',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch4.mp3?alt=media&token=c077f30d-5f0e-4030-a373-069abf985246',
    `The reason why Adam (pbuh) and his offspring are considered higher and more valuable than other beings (see Isra: 70) is because of the power of knowledge that Allah gave them.

However, in the Qur’an, Allah mentions another type of knowledge, which is the revelation (vahiy) (see Nisâ: 163-165). He delivers it to mankind through the prophets. It is clear that human beings need both types of knowledge. These two types of knowledge are not alternatives to each other, but rather they complete one another. One is necessary for mankind to maintain his worldly life, and revelation is essential to understand his role, duty, and the order established by Allah. Having such honour and privilege of knowledge required even the angels to prostrate themselves before Adam (pbuh). Here, the tale reaches its rising action: ‘And We said to the angels, “Bow down to (prostrate) Adam.” They bowed down, except for Satan. He refused, was arrogant, and was one of the disbelievers.’ (Baqarah: 34) ‘Except for Satan. He was too proud, and one of the faithless.’ (Sâd: 74) He said, ‘O Satan, what prevented you from prostrating before what I created with My own hands? Are you too proud, or were you one of the exalted?’ (Sâd: 75) He (Satan) said, ‘I am better than he (Adam); You created me from fire, and You created him from clay.’ (Sâd: 76)`,
    [
      { word: 'offspring', definition: 'A person’s children and later descendants.' },
      { word: 'revelation', definition: 'Divine knowledge communicated to humanity through prophets.' },
      { word: 'essential', definition: 'Absolutely necessary for understanding or completing something important.' },
      { word: 'privilege', definition: 'A special honour, advantage, or status given to a person or group.' },
      { word: 'arrogant', definition: 'Showing an exaggerated sense of one’s own importance or superiority.' },
    ],
    [
      { id: 'h4a', x: 38, y: 32, title: 'Two Forms of Knowledge', description: 'Worldly knowledge and revelation are presented as complementary rather than competing.' },
      { id: 'h4b', x: 66, y: 65, title: 'Iblis’s Arrogance', description: 'Iblis refuses to prostrate because he considers his origin superior.' },
    ],
  ),
  story(
    5,
    'Angels’ Prostration & Iblis’s Arrogance — Part II',
    '',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch5.mp3?alt=media&token=88331cdd-99ae-459f-a260-5b3f2351635f',
    `Angels admitted their inability and realized that Adam (pbuh) was the creature who knew what they did not know and that his capacity to learn was his most honourable quality. Adam (pbuh)’s knowledge included knowledge of the Creator, which is faith or Islam, as well as the knowledge he would need to inhabit and master the earth. All kinds of worldly knowledge are included in this. The prostration of angels to Adam (pbuh) is not a prostration of worship, because such prostration is solely to and for Allah. Angels’ prostration means obedience to Allah to show respect and admiration to Adam (pbuh), because the unique knowledge given to Adam (pbuh) is different from the knowledge of the angels that never changes.

On the other hand, Iblis’ arrogance came from his belief that his origin was superior to Adam (pbuh)’s. Satan’s—in other words, Iblis’—unapparent arrogance came to the surface when Adam (pbuh) appeared on the scene. He underlines his superiority because of the material from which he was created, yet Adam (pbuh)’s humble origin shows that Allah does not focus on origins, that is, race, colour, or ethnicity, since all humans ultimately originate from dried mud.`,
    [
      { word: 'inability', definition: 'The condition of not having the ability or knowledge required to do something.' },
      { word: 'obedience', definition: 'Willing compliance with an order, command, or recognized authority.' },
      { word: 'admiration', definition: 'A feeling of respect and approval for someone’s qualities or achievements.' },
      { word: 'arrogance', definition: 'An attitude of excessive pride or assumed superiority over others.' },
      { word: 'ethnicity', definition: 'Identity connected with a shared cultural, national, or ancestral background.' },
    ],
    [
      { id: 'h5a', x: 22, y: 44, title: 'Knowledge and Obedience', description: 'The angels acknowledge the limits of their knowledge and obey Allah’s command.' },
      { id: 'h5b', x: 77, y: 56, title: 'False Superiority', description: 'Iblis bases superiority on material origin, while the chapter rejects such distinctions.' },
    ],
  ),
  story(
    6,
    'The Command to Paradise',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter6.png?alt=media&token=2c7f06f0-1c7b-4f72-bbdc-220aebe0f3eb',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch6.mp3?alt=media&token=6abb93df-41c0-4d46-81a4-bf52e53ff672',
    `Allah said:
“O Mankind! Be respectful to your Lord, Who created you from a single person (Adam) and from Him (Adam) He created his wife (Eve), and from them both He created many men and women.” (Nisâ: 1)

Adam (pbuh) was now in Paradise and not alone; he had his wife with him.

Allah spoke to Adam (pbuh) in A’raf, verse 19: “And you, Adam, inhabit the Garden, you and your wife, and eat whatever you wish; but do not approach this tree, for fear that you become wrongdoers.”

The tale went on. While Satan reached the point of no return by challenging his Creator, Adam (pbuh) took a path completely different from him. Surah A’raf, verses 16-17: “Satan said, ‘Because You have put me in error, I will surely sit in wait for them (Adam’s children) on Your Straight Path. Then I will come to them from before them, and from behind them, and from their right, and from their left; and you will not find most of them grateful to You.’”

The tale is unfolding through the verses 77-82 in Surah Sâd:
Allah said, “Then get out of here! You (Satan) are an outcast! And My curse will be upon you until the Day of Judgment.”
He said, “Lord, allow me until the Day they are raised up.”
He said, “You are one of those allowed, until the Day of the Time Appointed.”
He said, “By Your majesty, I will deceive them all.”`,
    [
      { word: 'respectful', definition: 'Showing due awareness, reverence, and respect toward someone of higher authority.' },
      { word: 'inhabit', definition: 'To live in or occupy a particular place.' },
      { word: 'wrongdoers', definition: 'People who act unjustly or violate a moral or religious command.' },
      { word: 'outcast', definition: 'Someone rejected and excluded from a group or place.' },
      { word: 'deceive', definition: 'To cause someone to believe something false in order to mislead them.' },
    ],
    [
      { id: 'h6a', x: 31, y: 68, title: 'Life in Paradise', description: 'Adam and his wife are permitted to live in the Garden but are given a clear boundary.' },
      { id: 'h6b', x: 70, y: 30, title: 'Satan’s Vow', description: 'Satan declares that he will attempt to mislead Adam’s descendants.' },
    ],
  ),
  story(
    7,
    'The Whisper of Deception',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter7.png?alt=media&token=888f74ef-8ab1-4399-b94f-499f280488d9',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch7.mp3?alt=media&token=802716e0-1e3e-4f5f-99a4-a481ac28491c',
    `Adam (pbuh) and Eve understood that they were forbidden to eat the fruit of that tree. Adam (pbuh) was, however, a human being, and man tends to forget. His heart changes, and his determination weakens. On the other hand, Satan would seek a way to remove Adam (pbuh) from mercy, because he thought of Adam (pbuh) as the cause of his expulsion from Allah's mercy. He took advantage of Adam (pbuh)’s humanity to manipulate him. He started to whisper to them day after day, trying to persuade both:

“But Satan whispered to them (Adam and Eve), to expose what was hidden of their nakedness. He said, ‘Your Lord has only forbidden you this tree, lest you become angels, or become immortals.’” (A’raf: 20) And he swore to them, “I am a sincere advisor to you.” (A’raf: 21) Upon Satan’s promise that he was their true friend, Adam (pbuh) started to ask himself: “What will happen if I eat from this tree? It might truly be the Tree of Immortality.” His dream was to live forever in the pure innocence of Paradise. Years went by, and Adam (pbuh) and Eve were preoccupied with thoughts of that tree. Then one day, they decided to eat of its fruit. They forgot that Allah had warned them not to approach it and that Iblis was their bitter enemy. Adam (pbuh) stretched out his hand, picked one of the fruits, and offered it to Eve. They both ate of the forbidden tree. As soon as Adam (pbuh) had finished eating, he felt his heart tighten and filled with pain, sadness, and shame. The surrounding atmosphere changed, and the internal harmony ceased.`,
    [
      { word: 'determination', definition: 'The firmness of purpose needed to continue following a decision or goal.' },
      { word: 'whispered', definition: 'Spoke very softly; here referring to Satan’s subtle attempt to influence them.' },
      { word: 'immortals', definition: 'Beings believed to live forever and never die.' },
      { word: 'sincere', definition: 'Honest and genuine in intention rather than false or deceptive.' },
      { word: 'preoccupied', definition: 'So absorbed in a thought that attention is repeatedly drawn toward it.' },
    ],
    [
      { id: 'h7a', x: 26, y: 35, title: 'Weakening Determination', description: 'Satan takes advantage of forgetfulness and repeatedly whispers about the forbidden tree.' },
      { id: 'h7b', x: 73, y: 62, title: 'The Forbidden Tree', description: 'Adam and Eve eventually eat from the tree after Satan’s deception.' },
    ],
  ),
  story(
    8,
    'The Realization & Repentance',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter8.png?alt=media&token=b1edc4c5-1feb-41b7-8c59-3919406cd8a4',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch8.mp3?alt=media&token=7350d4c8-c0f2-4474-8c38-4bd374a21d40',
    `“So he (Satan) made them (Adam (pbuh) and Eve) fall through deception. And when they tasted the tree, their nakedness became evident to them, and they began covering themselves with the leaves of the Garden. And their Lord called out to them, ‘Did I not forbid you from this tree, and say to you that Satan is a clear enemy to you?’” (A’raf: 22)

When they tasted the fruit, their private parts became visible to them. Adam (pbuh) discovered that he and his wife were unclad, so they both started cutting tree leaves in Paradise with which to cover themselves. They were in haste to hide their private parts, because the sense of shame (hayâ) is inborn human nature and nakedness is against creation.

Adam (pbuh) bowed down, crying, “Forgiveness! Forgiveness!” so Allah asked, “Are you running away from Me?” Adam (pbuh) replied, “No, my Lord, but I am shy of You.”

After Adam (pbuh) and Eve were placed in Paradise, they enjoyed Allah's blessings as they pleased. Allah warned them not to approach the forbidden tree. This tree is not described in the Holy Qur'an. It is only mentioned that Satan deceived Adam (pbuh) and Eve. According to Islamic scholars, this incident happened while Adam (pbuh) was in Paradise—that is, before he became a prophet.`,
    [
      { word: 'deception', definition: 'The act of misleading someone by making something false appear true.' },
      { word: 'evident', definition: 'Clearly visible or understandable from the available evidence.' },
      { word: 'unclad', definition: 'Without clothing or another form of physical covering.' },
      { word: 'hayâ', definition: 'A moral sense of modesty and shame that discourages improper behaviour.' },
      { word: 'forbidden', definition: 'Not permitted because it has been clearly prohibited.' },
    ],
    [
      { id: 'h8a', x: 36, y: 57, title: 'Recognition and Modesty', description: 'After eating, Adam and Eve become aware of their nakedness and cover themselves.' },
      { id: 'h8b', x: 64, y: 28, title: 'Turning Back to Allah', description: 'Adam responds with shame and a request for forgiveness.' },
    ],
  ),
  story(
    9,
    'Repentance & Descent to Earth',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter9.png?alt=media&token=02398d91-13a7-4809-b9a5-7e7d10e9b6c0',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch9.mp3?alt=media&token=81c54390-7d2e-4d99-9d10-6935c85a3bbe',
    `Adam (pbuh) severely regretted what he had done. He immediately turned towards Allah. His regret itself was the reason for Allah’s mercy upon him. “They said, ‘Our Lord, we have done wrong to ourselves. Unless You forgive us, and have mercy on us, we will be among the losers.’” (A’raf: 23) Then Adam (pbuh) received words from his Lord (to learn how to ask for forgiveness), so His Lord pardoned him (accepted his repentance). Verily, He is the One Who forgives (accepts repentance), the Most Merciful. (Baqarah: 37) We said, “Go down from it (the Paradise), all of you. Yet whenever guidance comes to you from Me, then whoever follows My guidance—they have nothing to fear, nor shall they grieve.” (Baqarah: 38)

Allah taught Adam (pbuh) how to ask for forgiveness. This unintentional mistake committed by Adam (pbuh) was forgiven by Allah upon his repentance. This means that Allah did not abandon Adam (pbuh); He immediately turned towards Adam (pbuh), too. Adam (pbuh) and Eve left Paradise and descended upon Earth. At that time, there was neither a community nor a congregation. After a period of time following their descent to Earth, when a community emerged, Adam (pbuh) was given prophethood, thus becoming the first human, the first father, and the first prophet. We understand from the verses that humans are open to sinning and sometimes rebelling against their Lord. However, in order to remain an honoured human, they must recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah.`,
    [
      { word: 'regretted', definition: 'Felt deep sorrow about a past action and wished it had not happened.' },
      { word: 'mercy', definition: 'Compassion and forgiveness shown to someone who is in need or has done wrong.' },
      { word: 'repentance', definition: 'Sincere regret for wrongdoing followed by a return to what is right.' },
      { word: 'prophethood', definition: 'The divinely appointed role and responsibility of a prophet.' },
      { word: 'honoured', definition: 'Treated or regarded as having dignity, value, and respected status.' },
    ],
    [
      { id: 'h9a', x: 24, y: 64, title: 'Repentance Accepted', description: 'Adam regrets his mistake, seeks forgiveness, and receives mercy.' },
      { id: 'h9b', x: 76, y: 38, title: 'Beginning Life on Earth', description: 'Adam and Eve descend to Earth, where human community and prophethood later begin.' },
    ],
  ),
  story(
    10,
    'The Settlement on Earth',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter10.png?alt=media&token=ccb788e1-98ea-43fc-9397-aecc67ff8d34',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch10.mp3?alt=media&token=be3bea4e-5ae6-488c-9a07-46e885b5d89c',
    `Allah knew that Adam (pbuh) and Eve would eat of the tree and descend to Earth. He knew that Satan would violate their innocence. That experience was essential for their life on Earth; it was a cornerstone of their vicegerency. It was meant to teach Adam (pbuh), Eve, and their offspring the knowledge that Satan is their enemy and that the right path is to act in accordance with what they have heard from the Creator. The Creator is Knower, Powerful, Just, and Merciful.

Adam (pbuh)’s descending to Earth, then, did not imply dishonour or humiliation, but rather it was an honorable and respected settlement on Earth. And thus began the story of humankind and its struggle against Satan on Earth. There are many hadiths about the place of Adam (pbuh)’s descending upon Earth. Ibn Abbas, who narrated many hadiths, said: “Adam (pbuh) descended on land ‘Dihna’ between Mecca and Taif.”

It is also reported that Adam (pbuh) descended with the Black Stone (a large black stone set into the wall of the Ka’ba in Mecca. It is said to have come from Paradise).

Ibn Umar said that Adam (pbuh) descended on As-Safa and Eve on Al-Marwa (names of two mountains in the neighborhood of the Sacred House (Ka’ba) in Mecca. Part of the rites of pilgrimage (hajj) includes walking and running between these two hills in remembrance of Hajar's search for water).`,
    [
      { word: 'innocence', definition: 'A state of moral purity or freedom from wrongdoing and harmful experience.' },
      { word: 'cornerstone', definition: 'A basic and essential part on which a larger idea or system depends.' },
      { word: 'vicegerency', definition: 'The responsibility of acting as a steward entrusted with duties on Earth.' },
      { word: 'humiliation', definition: 'The experience of being made to feel dishonoured or stripped of dignity.' },
      { word: 'pilgrimage', definition: 'A journey made for religious purposes to a place of spiritual importance.' },
    ],
    [
      { id: 'h10a', x: 33, y: 31, title: 'A Responsible Settlement', description: 'The descent is described not as humiliation but as the beginning of responsibility on Earth.' },
      { id: 'h10b', x: 69, y: 67, title: 'Places Connected with Descent', description: 'The chapter records reports associated with Dihna, the Black Stone, Safa, and Marwa.' },
    ],
  ),
  story(
    11,
    'Adam (pbuh)’s Life on Earth',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter11.png?alt=media&token=c520bb71-bf37-4f3e-a7fd-752ee62d8125',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch11.mp3?alt=media&token=2d3f4f6a-09fd-4706-bfab-b2f4b2287cd9',
    `Ebu Hureyre reported that the Prophet Muhammad (pbuh) said: “The best of days on which the sun has risen is Friday. On this day Adam (pbuh) was created, and on this day he was descended to Earth.” (see Müslim, Cuma 17, 18; also Tirmizî, Cuma 1, 2; Nesâî, Cuma 4, 45)

Adam (pbuh) knew he said goodbye to peace, and he left Paradise. On Earth, he had to face conflict and struggle. No sooner had one ended than another began. He also had to work hard to keep himself alive. He had to protect himself with clothes and weapons and protect himself from the wild.

Above all, he had to struggle with the spirit of evil. Satan, the cause of his displacement from Paradise, continues to deceive him and his children. Satan wants human beings not to remember Allah, yet the removal of Allah from the human mind means the removal of meaning and purpose from human life.

The battle between good and evil is continuous, but those who follow Allah's guidance should fear nothing, while those who disobey Allah and follow Iblis will be away from the mercy of Allah along with him. Adam (pbuh) understood all this, and with the knowledge of this suffering, he started his life on Earth.

The only thing that eased his grief was that he was master of the Earth and had to make it ruled by him. He had to maintain, cultivate, construct, and populate the Earth. He also had to reproduce and raise children who would change and improve the world.`,
    [
      { word: 'conflict', definition: 'A serious struggle or opposition between competing forces or interests.' },
      { word: 'struggle', definition: 'A sustained effort to overcome difficulty, resistance, or hardship.' },
      { word: 'guidance', definition: 'Direction that helps a person choose and follow the right course of action.' },
      { word: 'cultivate', definition: 'To prepare and use land so that crops or useful plants can grow.' },
      { word: 'populate', definition: 'To establish or increase a population in a particular place.' },
    ],
    [
      { id: 'h11a', x: 27, y: 48, title: 'Struggle on Earth', description: 'Adam must face physical hardship as well as the continuing moral struggle against Satan.' },
      { id: 'h11b', x: 75, y: 70, title: 'Building Human Life', description: 'The chapter emphasizes cultivation, construction, settlement, and raising future generations.' },
    ],
  ),
  story(
    12,
    'The Conflict of Habil and Qabil',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter12.png?alt=media&token=ea7397e9-5206-4dec-80ae-4f5fae82309d',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch12.mp3?alt=media&token=ecfdfa30-32b7-485c-bdf4-957a49eae96a',
    `One of the earthly blisses was reached when Adam (pbuh) and Eve witnessed the birth of their first children. The children grew up to be strong and healthy young adults. Qabil cultivated the land while Habil raised cattle. In time, there arose a conflict between the two sons. Adam (pbuh) was in a difficult situation. He wanted peace and harmony in his family, so he prayed to Allah for help. Allah commanded that each son offer a sacrifice, and he whose offering was accepted would have the right on his side. Habil offered his best cattle while Qabil offered his worst grain. Qabil’s sacrifice was not accepted by Allah because of his insincerity in his offering. This angered Qabil even further. “I will kill you! I refuse to see you happy while I remain unhappy!”

The story of Habil and Qabil is narrated in the Holy Qur’an without mentioning names as follows:

“Tell them in all truth the story of the two sons of Adam. When they made an offering and it was accepted from one of them and was not accepted from the other, the latter said: ‘I will surely kill you.’ Thereupon the former said: ‘Allah accepts offerings only from the God-fearing.’” (Maide: 27)

The Qur’an narrates this story in a simple manner. It does not openly mention anything from the details found in the Torah, as, according to the Qur’an, the only thing that needs to be known is the wisdom of the story. Habil and Qabil are referred to as Adam (pbuh)’s two sons without their names being given. Although we don’t know the whole story, Adam (pbuh)’s children, Habil and Qabil, were involved in a conflict that resulted in Qabil killing Habil. Habil’s response displayed his pious character, saying:`,
    [
      { word: 'blisses', definition: 'Experiences of deep happiness or joy; here connected with family life on Earth.' },
      { word: 'conflict', definition: 'A serious disagreement or struggle between people whose aims or feelings oppose.' },
      { word: 'sacrifice', definition: 'An offering given for a religious purpose or as an act of devotion.' },
      { word: 'insincerity', definition: 'Lack of genuine intention, honesty, or wholehearted commitment.' },
      { word: 'pious', definition: 'Deeply committed to religious faith and to behaving according to it.' },
    ],
    [
      { id: 'h12a', x: 40, y: 66, title: 'The Two Offerings', description: 'Habil offers his best cattle, while Qabil’s offering is described as insincere.' },
      { id: 'h12b', x: 62, y: 34, title: 'From Conflict to Threat', description: 'Qabil’s anger develops into a threat against his brother.' },
    ],
  ),
  story(
    13,
    'Habil’s Response & Human Moral Capacity',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter13.png?alt=media&token=ed61f9d6-f850-4a84-9f2f-acb6a00fc6a3',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch13.mp3?alt=media&token=faef98f2-8ab5-4d08-85be-e2e9f1ae33a3',
    `“Even if you raise your hand against me to kill, I will not raise my hand to kill you. Surely, I fear Allah, the Lord of the entire universe.” (Maide: 28) It is understood from the above verses that although Qabil had the intention to kill, Habil did not adopt an aggressive attitude. Thus, he emphasizes that he does not take notice of the desires of his own self in the face of truth. At first glance, Qabil’s rebellious attitude may seem unacceptable. However, it is important to remember that humans have the potential for both good and evil. People can be jealous, selfish, greedy, and even damaging and harmful. The path to goodness is in controlling evil thoughts and actions and being moderate in desires. Thus, Allah tests us through our twofold divided nature. Habil was intelligent, respectful, and always ready to obey the will of Allah. This contrasted sharply with his brother who was arrogant, selfish, and disobedient to his Lord. Habil did not fear his brother's threats, but also he did not want his brother to be hurt. Allah gave Habil purity and compassion. Hoping to lessen the hatred in his brother, Habil said, “My brother, you are turning away from the right path and are sinful in your decisions. It is better that you repent to Allah and forget about your foolish threat. But if you do not, then I will leave the matter in the hands of Allah. You alone will bear the consequence of your sin.”`,
    [
      { word: 'aggressive', definition: 'Ready or willing to use force, hostility, or threatening behaviour against others.' },
      { word: 'potential', definition: 'The capacity to develop a particular quality or behave in a particular way.' },
      { word: 'moderate', definition: 'Kept within reasonable limits rather than taken to an extreme.' },
      { word: 'disobedient', definition: 'Refusing or failing to follow a command, rule, or recognized authority.' },
      { word: 'compassion', definition: 'Concern for another person’s suffering combined with a desire not to harm them.' },
    ],
    [
      { id: 'h13a', x: 23, y: 30, title: 'Habil Refuses Violence', description: 'Habil does not answer his brother’s threat with another threat.' },
      { id: 'h13b', x: 78, y: 54, title: 'Human Moral Capacity', description: 'The chapter stresses that people have the potential for both good and evil and must control harmful desires.' },
    ],
  ),
  story(
    14,
    'The First Murder & Burial',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Fimages%2Fadam_b2_chapter14.png?alt=media&token=4399b928-a16f-4bdd-a697-b274b27d32c2',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch14.mp3?alt=media&token=f976eee6-6b6d-4aa5-9b81-79a43cb62a61',
    `This brotherly request did nothing to lessen the hatred in Qabil's heart, nor did he show fear of Allah's punishment. Even familial considerations were given up. Qabil hit his brother with a stone, killing him instantly. This was the first death and the first criminal act committed by man on Earth.

Surah Maide concludes the story with Qabil’s tragic end:

“At last his evil soul drove him (Qabil) to the murder of his brother, and he killed him, by which he himself became one of the losers.” (Maide: 30)

When Habil had not appeared for some time, Adam (pbuh) began to search for him but found no trace of his beloved son. He asked Qabil about Habil's location. Qabil arrogantly replied that he was not his brother's keeper nor his protector. From these words, his father understood that Habil was dead, and Adam (pbuh) was filled with grief. Meanwhile, Qabil did not know what to do with his brother's corpse. He carried it on his back, wandering from place to place trying to hide it. His anger had now less