import type { Exercise, PageData } from '../../../../types';
import { highlightPhraseOccurs } from '../../../../lib/highlightTextMatch';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
  {
    id: 1,
    type: 'story',
    title: 'Prophet Abraham and Tawhid',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=dd864d33-97bb-47a7-a10e-8c0a68d0ffb7',
    content: `KEY WORDS: Hanifism (Path of Prophet Abraham (pbuh)); monotheism (Oneness and Unity of Allah); Tawhid (La ilaha illa Allah: There is no god but Allah); idol worship, idolatry (paganism); idolater (pagan).

In the Holy Qur’an, Prophet Abraham (pbuh) is presented as the messenger and representative of the monotheistic belief. Monotheistic belief means bearing witness that there is no god but Allah. He has no partner, rival, or helper. Allah is unique in every way. Abraham (pbuh) is also a fundamental figure in the three great monotheistic religions (Judaism, Christianity, and Islam). The fourteenth surah of the Qur’an is named Surah Ibrahim. Abraham (pbuh) is the father of two prophets: Prophet Ishmael (pbuh) and Prophet Isaac (pbuh). Prophet Ishmael (pbuh) is the direct forefather of Prophet Muhammad (pbuh). Prophet Isaac (pbuh) is the father of Prophet Jacob (pbuh). Prophet Jacob is the father of Joseph (pbuh) and an ancestor of Moses (pbuh), Aaron (pbuh), Jonah (pbuh), and Jesus (pbuh). Abraham (pbuh) was also given the unique name of “Allah’s friend” (Khalilullah; see Surah an-Nisa: 125). This title was not given to any other prophet before. The Qur’an presents in detail his discovery of the oneness of Allah (Tawhid) in the middle of an idol-worshipping nation.`,
  },
  {
    id: 2,
    type: 'story',
    title: 'Hanifism and the One True Faith',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F01_Chapter_2_Abraham_as_Allah%E2%80%99s_Friend.mp3?alt=media&token=0303777a-0c94-4898-ad1c-ce260e331d8e',
    content: `He challenged the idol worship of his time and taught people to believe in Allah alone. His life mission was to spread the message of Tawhid—the belief that Allah is One and He has no partners. During his struggle, he had very difficult tests and he passed the tests with his full trust in Allah.

In the Holy Qur’an, Abraham (pbuh) is often described as a hanîf; a hanîf is a monotheist who is not a Jew, a Christian, or an idolater (see Surah Al Imran: 67) and is also morally upright. Hanifism is the belief in the oneness of Allah taught by Prophet Abraham (pbuh). We may say that it is the former version of Islam. Human beings are capable of discovering Hanifism; that is, the existence of Allah can be found through reasoning. Actually, all prophets taught this religion. As human conditions and capacities changed over time, some changes in details became necessary. So, the difference between the monotheism taught by Abraham (pbuh) and the Islam taught by Muhammad is only in the acts of worship.`,
  },
  {
    id: 3,
    type: 'story',
    title: 'Hanifism Before Islam',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F02_Chapter_3_Hanifism_and_the_One_True_Faith.mp3?alt=media&token=171a95ce-498c-4cc6-a993-ac54abe5964e',
    content: `In fact, Judaism, Christianity, and Islam are all based on the religion of Abraham (pbuh). At the beginning of Prophet Muhammad's mission, there was a group in the Hijaz who called themselves hanîfs. They stayed away from idolatry and its practices. However, later on, this belief became mixed with idolatry and, like Judaism and Christianity, it was corrupted. One of the last hanîfs we can mention is Waraqa ibn Nawfal, the cousin of Muhammad's wife Khadija. He went to Damascus in search of Hanifism and accepted Christianity, which was the least corrupted religion at that time. When the first revelation (wahy) came to Muhammad (pbuh), Waraqa ibn Nawfal welcomed his prophethood. One day, while he was in the desert, Waraqa saw Bilal al-Habashi lying under the burning sun, punished by his master. At that moment, Bilal was saying, “Ahad, Ahad,” meaning “One, One.” Hearing his words, Waraqa replied, “I swear, O Bilal, One, One.”

As the last faith, Islam includes not only what Allah told Abraham (pbuh), but also what Allah told Noah (pbuh), Moses (pbuh), Jesus (pbuh), and all the other prophets (see Surah al-Baqarah: 285).`,
  },
// c01b

// c02a
  {
    id: 4,
    type: 'story',
    title: 'Abraham’s Land and Time',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F03_Chapter_4_Hanifism_Before_Islam.mp3?alt=media&token=d08f7bf4-23c7-4b83-a80d-221e96f8676c',
    content: `In the Holy Qur’an, the name of Abraham (pbuh)’s father is Azer. He is described as an idol worshipper (see Surah al-An’am: 74). Azer is presented in Islamic sources as Nimrod's idol maker. There are different ideas about the birthplace of Abraham (pbuh). Some sources say that he was born in the land of Sumer, Mesopotamia, and migrated from there to Harran. Most generally speaking, we can say that Abraham was born in the city of Ur or Babylon, the country of King Nimrod. Historically, Abraham (pbuh) is believed to have lived in the 20th century BC. During the time of Abraham (pbuh), the Sumerian/Mesopotamian country was prosperous in many aspects, such as agriculture and industry. Abraham (pbuh)'s message of monotheism was a belief that had existed in these lands before, but it had been forgotten over time. In the time of Abraham (pbuh), Allah was believed to be in the heavens.

People worshipped the planets, stars, sun, and moon; some people worshipped idols of stone and wood; still others worshipped their kings and rulers.`,
  },
  {
    id: 5,
    type: 'story',
    title: 'Nimrod’s Fear and Abraham’s Birth',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F04_Chapter_5_The_Birthplace_and_Mission_of_Abraham.mp3?alt=media&token=a463971a-d367-49c9-9e95-78868795cc1a',
    content: `The head of Abraham (pbuh)’s family was an idolater who totally rejected Allah and made idols with his own hands. Abraham (pbuh) was born into that atmosphere and family. Very soon, he was going to fight against his family and the whole system in his society. As a prophet who lived before Jacob (pbuh), Joseph (pbuh), Moses (pbuh), and Jesus (pbuh), Abraham (pbuh) tried to spread the belief in monotheism in the land of Mesopotamia and the lands where he migrated. Nimrod, the king of Babylon, had many fortunetellers and astrologers. One year, around the 20th century BC, they predicted that a child named Abraham (pbuh) would be born in the region, would change the religion of the people, and would end the reign of Nimrod. According to another narration, Nimrod had a dream that a child in the region would challenge his throne. So, he gathered pregnant women in one place and ordered that all male children be killed.

Upon this, Azer took his wife, who was pregnant with Abraham (pbuh), to a safe place and hid her in a cave, where Abraham (pbuh) was born.`,
  },
  {
    id: 6,
    type: 'story',
    title: 'Abraham’s Childhood',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F05_Chapter_6_Abraham%E2%80%99s_Childhood.mp3?alt=media&token=b13894c9-8af9-4fe2-84f4-223980c405ad',
    content: `Abraham (pbuh) came to know Allah when he was young in age. Allah cleared up Abraham (pbuh)’s heart and mind and gave him wisdom from childhood. Allah said: “And We had certainly given Abraham his sound judgement before, and We were of him well-Knowing” (as to his belief in the Oneness of Allah etc.) (Surah al-Anbiya: 51). During his early childhood, Abraham (pbuh) realized that his father made strange statues, sculptures. One day, he asked his father about what he made. His father replied that he made statues of gods. Abraham (pbuh) was astonished and he spontaneously rejected the idea. Being a child, he played with the statues, sitting on their backs as people sit on the backs of donkeys. One day, his father saw him riding the statue of Marduk (the Chief God of Babylon) and he became furious. He ordered his son not to play with it again. Abraham (pbuh) asked: “What is this statue, father? It has big ears, bigger than ours.” His father answered: “It is Marduk, the god of gods, son!”`,
  },
// c02b

// c03a
  {
    id: 7,
    type: 'story',
    title: 'Hatred for Idols',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F06_Chapter_7_Hatred_for_Idols.mp3?alt=media&token=2dd8d1c4-5723-4c0e-a60a-9da4ce735f8b',
    content: `His father continued, “These big ears show his deep knowledge.” This made Abraham (pbuh) laugh; he was only seven years old at that time.

Years passed and Abraham (pbuh) grew. From childhood, his heart was full of hatred for these idols. He could not understand how a reasonable person could make a statue and then worship what he had made. He realized these statues were lifeless, silent, and entirely helpless; when they fell, they could not get back up. It was impossible to understand how people could believe that such statues could harm or benefit them! Abraham (pbuh)'s people had a big temple full of idols, in the middle of which was a niche housing the biggest gods. Abraham (pbuh), who used to go to the temple with his father when he was a child, greatly disliked all that wood and stone. It shocked him to see people bowing, crying, and begging the idols for help, as if those lifeless idols were capable of hearing their prayers! At first, Abraham thought the sight was funny, but later his feelings turned into anger.`,
  },
  {
    id: 8,
    type: 'story',
    title: 'Discovering Allah',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F07_Chapter_8_Discovering_Allah.mp3?alt=media&token=3a40bb58-9e67-4fd4-ae4a-15611b46319d',
    content: `Wasn't it shocking that all of those people could be fooled? His father wanted him to become a priest when he grew up, which made things even worse. He only wanted his son to show respect to those statues, yet Abraham (pbuh) never stopped displaying his hatred.

One night, Abraham (pbuh) left his house to go to a mountain. He walked by himself through the darkness until he found a cave in the mountain, where he sat down to rest. He looked at the sky and saw the planets and stars which were worshipped by some people on earth. The Holy Qur’an told this incident in Surah al-An’am, verses 75–79: “Thus, We showed Abraham the empire of the heavens and the earth, that he might be one of those with certainty. When the night fell over him, he saw a planet. He said, ‘This is my lord.’ But when it set, he said, ‘I do not love those that set.’” Abraham (pbuh) saw that the stars couldn't show up when they wanted to because they could only do so at night.`,
  },
  {
    id: 9,
    type: 'story',
    title: 'The Signs in the Sky',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F08_Chapter_9_The_Signs_in_the_Sky.mp3?alt=media&token=7aca1432-760b-40f9-81eb-fedbfb7b813c',
    content: `“Then, when he saw the moon rising, he said, ‘This is my lord.’ But when it set, he said, ‘If my Lord does not guide me, I will be one of the erring people.’ Then, when he saw the sun rising, he said, ‘This is my lord, this is bigger.’ But when it set, he said, ‘O my people, I am innocent of your idolatry. I have directed my attention towards Him Who created the heavens and the earth—a monotheist—and I am not of the idolaters.’” His young heart was filled with severe pain. He considered what was beyond the moon, the stars, and the planets (i.e., Allah). He was astonished that these heavenly bodies were worshipped by people, while in fact all those stars, asteroids, the Sun, the Moon, etc., had been created; they appeared and disappeared at the Creator’s command.

People who worshipped astronomical objects got into arguments with Abraham (pbuh). In that debate, Abraham (pbuh) demonstrated to the people that these heavenly bodies cannot be worshipped as partners with Allah.`,
  },
// c03b

// c04a
  {
    id: 10,
    type: 'story',
    title: 'Challenging Star Worshippers',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F09_Chapter_10_Challenging_Star_Worshippers.mp3?alt=media&token=65391322-9f37-4c72-921a-f311d1aa59b1',
    content: `Indeed, these bodies are evidently created, controlled, managed, and made to serve a purpose. They come and go, sometimes fading from the world. However, Allah sees and knows everything; nothing can be hidden from Him. Allah is without end, everlasting without disappearance. There is no other god but Allah. Abraham (pbuh) clarified the situation for them, firstly, that the heavenly bodies are unworthy of worship and, secondly, that they are the signs of Allah. The Qur’an emphasizes this with simple logic: “And of His signs are the night and the day, and the sun and the moon. Do not bow down to the sun, nor to the moon, but bow down to Allah, Who created them both, if you really worship Him” (Surah Fussilat: 37). Abraham (pbuh)'s rational thinking helped to uncover the truth, and then the conflict between him and the worshippers of the stars and planets started. They did not remain silent.

They began arguing and threatening Abraham (pbuh).`,
  },
  {
    id: 11,
    type: 'story',
    title: 'Arguing for Tawhid',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F10_Chapter_11_Arguing_for_Tawheed.mp3?alt=media&token=b9953447-ffeb-49fb-9009-c991b3e4ffb7',
    content: `“And his people argued with him. He said, ‘Do you argue with me about Allah, when He has guided me? I do not fear partners you assign to Him, unless my Lord wills it. My Lord comprehends all things in knowledge. Will you not reconsider? And why should I fear the partners you give to Him, and you do not fear worshipping others alongside Allah for which He sent down to you no authority? So which of the two parties has more right to security, if you are aware?’ They who believe, and do not mix their belief with injustice—those will have security, and they are (rightly) guided. That was Our argument which We gave to Abraham against his people.” (Surah al-An’am: 80–83). His people attempted to argue with him and present evidence to prove the correctness of their beliefs. That these arguments are not told in the verses shows the ridiculousness of their claims. It is understood from Abraham (pbuh)'s statement, “I do not fear partners you worship alongside Allah,” that his people threatened him with the punishment of their gods.`,
  },
  {
    id: 12,
    type: 'story',
    title: 'Confronting His People',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F11_Chapter_12_Speaking_to_His_Father.mp3?alt=media&token=d0f15e47-a55b-4e88-a837-3a0770997c18',
    content: `Prophet Abraham (pbuh) paid no heed to this threat. As a true believer, he expressed his fear of Allah. In doing so, he declared his belief that both benefit and harm come from Allah. Abraham (pbuh) did his best to make his people mindful of the oneness of Allah and the need to worship Him alone. He told them to firmly reject the worship of idols. He said to his father and his people in Surah al-Anbiya, verses 52–56: “When he said to his father and his people, ‘What are these statues to which you are faithful?’ They said, ‘We found our parents worshipping them.’ He said, ‘You and your parents are in evident error.’ They said, ‘Are you telling us the truth, or are you just playing?’ He said, ‘Your Lord is the Lord of the heavens and the earth, the One who created them, and I bear witness to that.’”

A bitter struggle began between Abraham (pbuh) and his people. The most amazed and furious was his father, for he not only worshipped idols but shaped and sold them as well.`,
  },
// c04b

// c05a
  {
    id: 13,
    type: 'story',
    title: 'Speaking to His Father',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F12_Chapter_13_Debating_the_Idolaters.mp3?alt=media&token=49e3bd81-8558-4803-a119-d779ee1504d7',
    content: `Abraham (pbuh) felt that it was his duty as a good son to advise his father against this evil so that his father could be saved from Allah's punishment. He was a wise son, so he did not make his father feel embarrassed, or make fun of his job. He told him that he loved him; in that way, he hoped to increase fatherly love. Then he kindly asked him why he worshipped lifeless statues who could not hear, see, or protect him. Before his father got angry, he quickly added an explanation, as recorded in Surah Maryam, verses 42–48: “He (Abraham) said to his father, ‘O my father, why do you worship what can neither hear, nor see, nor benefit you in any way? O my father, there has come to me knowledge that never came to you. So follow me, and I will guide you along a straight way.

O my father, do not worship Satan. Satan is disobedient to the Most Beneficent (Allah). O my father, I fear that a punishment from the Most Beneficent (Allah) will afflict you, and you become a friend of Satan.’”`,
  },
  {
    id: 14,
    type: 'story',
    title: 'Calling People to Reconsider',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F13_Chapter_14_Calling_People_to_Reconsider.mp3?alt=media&token=ca625f7c-f2ba-44c4-ac96-28790a4fdacf',
    content: `“He (his father) said, ‘Are you rejecting my gods, O Abraham? If you do not stop this, I will stone you. So leave me alone for a while before I punish you.’ Abraham said, ‘Peace be upon you. I will ask my Lord to forgive you; He has been Kind to me. And I will turn away from you, and from what you pray to instead of Allah. And I will pray to my Lord, and I hope I will not be disappointed in my prayer to my Lord.’” Abraham (pbuh) kindly spoke to his father with clear logic and sense. His father's harsh behavior towards Abraham (pbuh) did not stop him from carrying the message of truth. He was angry and sad to see people bow down before idols; he was determined to put an end to these practices and went to the town to debate with the people. In fact, he knew well that he might face negative consequences. Just as a wise doctor looks for the cause of an illness to find the right cure, or a clever judge questions a suspect to uncover the truth, Abraham (pbuh) questioned them to reveal the reality of their situation.`,
  },
  {
    id: 15,
    type: 'story',
    title: 'Debating the Idolaters',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F14_Chapter_15_Breaking_the_Idols.mp3?alt=media&token=be5a070b-45e9-4408-bddd-1929f6023e6e',
    content: `“Do the idols see you when you bow down before them? Do they benefit you in any way?” They quickly tried to defend their beliefs. They argued that they knew the idols were lifeless but that their forefathers had worshipped them; to them, this confirmed their belief. Abraham (pbuh) explained that their forefathers had been wrong. This angered them and they responded: “Are you criticizing our gods and our forefathers? Or are you just joking?” Abraham (pbuh) showed no fear as he replied: “I am serious. I come to you with a true religion. I have been sent with guidance from our Lord Who alone is worthy of worship, Who is the Creator of the heavens and the earth, and Who regulates all affairs of life, unlike the speechless idols which are just stone and wood.” To persuade them that the idols could not harm him, he challenged: “I have already criticized them; see if they have any power to harm me by now!”

Abraham (pbuh) did not give up arguing with the idolaters.`,
  },
  {
    id: 16,
    type: 'story',
    title: 'The Idols or the Creator',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F15_Chapter_16_The_Broken_Temple.mp3?alt=media&token=3ebcb16d-df42-4d8b-88ca-ef8c847804d4',
    content: `Allah said in Surah ash-Shu’ara, verses 69–82: “And describe to them the story of Abraham. When he said to his father and his people, ‘What do you worship?’ They said, ‘We worship idols, and we remain faithful to them.’ He said, ‘Do they hear you when you pray? Or do they benefit you, or harm you?’ They said, ‘But we found our ancestors doing so.’ He said, ‘Have you considered what you worship— You and your ancient ancestors? They are enemies to me, but not so the Lord of the Worlds. He who created me, and guides me. He who feeds me, and waters me. And when I get sick, He heals me. He who makes me die, and then revives me. He who, I hope, will forgive my sins on the Day of Resurrection?’” He explained to them the beauty of Allah's creation, His power, and His wisdom. Idol worship is hated by Allah, as Allah is the Lord of the universe Who created mankind, offers guidance, provides human beings with food and drink and heals the sick.`,
  },
// c05b

// c06a
  {
    id: 17,
    type: 'story',
    title: 'The Empty Temple',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F16_Chapter_17_Questioned_Before_the_People.mp3?alt=media&token=bfbc27f2-54a1-4bcd-b331-f81774155d0a',
    content: `Allah also will cause them to die and bring them back to life again. However, idolaters would not give up but held on tightly to their idols. Abraham (pbuh) left his father's house and distanced himself from his people and what they worshipped. Actually, he decided to do something shocking to show their error. He knew that there was going to be a great celebration outside the town. All the people would attend it. Abraham (pbuh) waited until the city was empty, then cautiously made his way to the temple. The streets leading to it and the temple itself were empty. The priests had also gone to the festival outside the city. Abraham (pbuh) went there with a sharp axe. He looked at the stone and wood statues of the gods and at the food put in front of them as offerings. He approached one of the statues and asked: “The food in front of you is getting cold.

Why don't you eat?” The statue kept silent and rigid.`,
  },
  {
    id: 18,
    type: 'story',
    title: 'Breaking the Idols',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F17_Chapter_18_The_Decision_to_Burn_Abraham.mp3?alt=media&token=0ae53990-9b95-450d-a818-ad940a9f4d58',
    content: `Abraham (pbuh) asked all the other statues around him: “Will you not eat of the offering before you?” (Surah as-Saffat: 91). He was mocking them, for he knew they would not eat. He once again asked them: “What is the matter with you that you do not speak?” (Surah as-Saffat: 92). He then raised his axe and started smashing the false gods worshipped by the people. He destroyed them all except one. On its neck, he hung the axe. He left the temple. He had fulfilled his duty to show his people a practical proof of their foolishness in worshipping something other than Allah. When the people returned, they were shocked to see their gods smashed into pieces, spread all over the temple. They tried to find out who had done that to their idols and Abraham (pbuh)'s name came to their minds. Allah said in Surah al-Anbiya, verses 59–67: “They said, ‘Who did this to our gods? He is certainly one of the wrongdoers.’”`,
  },
  {
    id: 19,
    type: 'story',
    title: 'Questioned Before the People',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F18_Chapter_19_Thrown_into_the_Fire.mp3?alt=media&token=d5a3e204-3a26-4084-a741-ede788f383a3',
    content: `“They said, ‘We heard a youth mentioning them. He is called Abraham.’ They said, ‘Bring him before the eyes of the people, so that they may witness.’ They said, ‘Are you the one who did this to our gods, O Abraham?’ He said, ‘But it was this biggest of them that did it. Ask them if they can speak.’ Then they turned to one another and said, ‘You yourselves are the wrongdoers.’ But they reverted to their old ideas: ‘You certainly know that these do not speak.’ He said, ‘Do you worship, instead of Allah, what can neither benefit you in anything, nor harm you? Shame on you, and on what you worship instead of Allah. Do you not understand?’” They furiously demanded that Abraham (pbuh) be arrested and judged. Abraham (pbuh) did not resist. This was exactly what he was aiming for, so that he could demonstrate to them in public that their beliefs were foolish. At the trial, they asked him if he was responsible for breaking the idols.

Smiling, he told them to ask the biggest idol which was still undamaged.`,
  },
  {
    id: 20,
    type: 'story',
    title: 'The Decision to Burn Abraham',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F19_Chapter_20_The_Faith_of_the_Believers.mp3?alt=media&token=1dc71341-e358-4deb-962e-ca26d2c893b2',
    content: `He told them that it must be the culprit! They replied that he knew well that the idol could not speak or move. These words gave Abraham (pbuh) the chance to show the foolishness of worshipping these lifeless objects. They had no answer for Abraham (pbuh). In fact, they realized the stupidity of their beliefs; however, their arrogance would not allow them to admit their foolishness. All they could do was use their authority as tyrants to punish Abraham (pbuh). They kept him in chains and planned their revenge. Anger was burning in their hearts. They agreed that Abraham (pbuh) should be burned alive. They decided to throw Abraham (pbuh) into the biggest fire they could build. All the citizens were ordered to gather wood as a service to their gods. For several days they collected fuel. They dug a deep pit, filled it with firewood, and set it on fire. They brought a catapult with which to throw Abraham (pbuh) into the fire. Abraham (pbuh) was put on the catapult; his hands and feet were tied.`,
  },
// c06b

// c07a
  {
    id: 21,
    type: 'story',
    title: 'The Coolness of the Fire',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F20_Chapter_21_The_Coolness_of_the_Fire.mp3?alt=media&token=bb50c974-9733-4730-9c56-e8f48f24d850',
    content: `The fire was ready, with its flames reaching the sky. The people stood away from the pit because of the great heat. Then, the chief priest gave his order to throw Abraham (pbuh) into the fire. The angel Gabriel came near Abraham (pbuh) and asked him: “O Abraham, do you wish for anything?” Abraham (pbuh) replied: “Nothing from you.” The catapult was fired, and Abraham (pbuh) was thrown into the fire. But his fall into the fire was like going down into a cool garden. The rising flames were still there, but they did not burn him, for Allah commanded: “O fire! Be coolness and safety for Abraham” (Surah al-Anbiya: 69). The fire obeyed the order of Allah. It became cool and safe for Abraham (pbuh). It only burned his ropes, and he sat in the middle of the fire as if he were sitting in a garden. He thanked Allah, with a heart full of His love and trust in Him.

There was no fear or worry. The air became more pleasant as the fire was turned into coolness.`,
  },
  {
    id: 22,
    type: 'story',
    title: 'Stepping Out Unharmed',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F21_Chapter_22_Stepping_Out_Unharmed.mp3?alt=media&token=6bbfc84a-e819-49ad-b929-fcad95254024',
    content: `His trust in the true Allah was tested here. His last words before entering the flames were, “Allah is sufficient for me.” The large crowd, the leaders, and the priests were watching the fire from a distance. It was burning their faces and nearly made them breathless. The fire kept burning for such a long time that the disbelievers thought it would never be extinguished. Once the fire burnt out, they were shocked to see that Abraham (pbuh) had stepped out of the pit completely unharmed. The smoke blackened their faces, yet his face was bright. The burning fire had become cool for Abraham (pbuh) and had only blackened the ropes which held him. He walked out of the fire as if he were walking out of a garden. Cries of astonishment were heard from the unbelievers. “They wanted to harm him, but We made them the worst losers” (Surah al-Anbiya: 70). This miracle shamed the despotic rulers, but the fire of their rage remained uncooled. Consequently, people did not dare to follow Abraham (pbuh) out of fear of rulers.`,
  },
  {
    id: 23,
    type: 'story',
    title: 'Debating King Nimrod',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F22_Chapter_23_Debating_King_Nimrod.mp3?alt=media&token=996f2e97-b2fa-4d6a-b5d6-cb474a3dee8a',
    content: `Abraham (pbuh) challenged those who declared themselves as gods, like King Nimrod. When King Nimrod heard that Abraham (pbuh) had emerged from the fire unharmed, he was filled with rage. He thought that his claim to be a god could not be questioned by an ordinary person. He wanted to know him personally and held a dialogue with him. Still a young man, Abraham (pbuh) was put on trial and stood by himself before a king. Even his father was not on his side; he was on the king’s side. Allah tells us about this scene in Surah al-Baqarah, verse 258: “Have you not thought about him who disputed with Abraham about his Lord (Allah) because Allah had given him the kingdom?” Abraham (pbuh)’s logic was undeniable; he said to him: “My Lord (Allah) is He Who gives life and causes death.” He said: “I give life and cause death.”

The king called up two men sentenced to death. He freed one and the other was put to death.`,
  },
  {
    id: 24,
    type: 'story',
    title: 'Sarah and Lot Believe',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F23_Chapter_24_Sarah%2C_Hajar%2C_and_a_New_Trial.mp3?alt=media&token=49060ebe-4cbd-437c-865e-3a9336a128cf',
    content: `This reply of the king was totally foolish, so Abraham (pbuh) put forth another challenge which would unquestionably and easily quiet him. Abraham (pbuh) said: “Verily, Allah causes the sun to rise from the east; then cause it to rise from the west.” He was utterly defeated. Allah does not guide the people who are Zalimeen (wrongdoers) (Surah al-Baqarah: 258). Abraham (pbuh)'s fame spread throughout the entire kingdom of Babylonia. People talked about how he was saved from the fire and how he debated with the king and left him unable to speak. In the meantime, Abraham (pbuh) continued calling people to believe in Allah and made a great effort to guide his people to the right path. He tried every means to persuade them. However, in spite of his love and care for his people, they left him alone. Only one woman and one man of his people shared his belief in Allah.

The woman's name was Sarah and she became his wife. The man's name was Lot and he later became a prophet.`,
  },
// c07b

// c08a
  {
    id: 25,
    type: 'story',
    title: 'Emigration and Ishmael’s Birth',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F24_Chapter_25_Sarah_and_Hajar.mp3?alt=media&token=0e2106bf-baee-4089-957e-bf08c73f8146',
    content: `When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate. He left his people and traveled with his wife Sarah and Lot to Egypt. Allah told us: “So Lot believed in him (Abraham's message of Islamic Monotheism). He (Abraham) said, ‘I will emigrate for the sake of my Lord. Verily, He is the All Mighty, the All Wise.’” (Surah al-Ankabut: 26). After Egypt, Abraham (pbuh) traveled to Palestine and settled there. He called people to believe in Allah wherever he traveled, judged fairly between people, and guided them to truth and righteousness. Abraham (pbuh)'s wife Sarah was sterile. She had been given an Egyptian woman, Hagar, as a servant when they were in Egypt. Abraham (pbuh) had aged and his hair was gray after many years spent in calling people to Allah. Sarah thought she could not have a child. Therefore, she suggested Abraham (pbuh) get married to Hagar. Hagar gave birth to her first son, Ishmael, when Abraham (pbuh) was an old man.`,
  },
  {
    id: 26,
    type: 'story',
    title: 'The Journey to Mecca',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F25_Chapter_26_Hajar%E2%80%99s_Trust_in_the_Desert.mp3?alt=media&token=fb5f22dc-235c-4535-ac20-2dd9ab13218f',
    content: `Some time later, Allah gave Abraham (pbuh) another son from his first wife, Sarah. The name of this second son was Isaac. Allah told Abraham (pbuh) that these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam. From Ishmael's descendants came Prophet Muhammad (pbuh), while from Isaac's came Moses (pbuh) and Jesus (pbuh). One day, Allah told Abraham (pbuh) that he should take Hagar and Ishmael to the Sacred City, Mecca. This was another test for Abraham (pbuh) while Ishmael was still a little child. It was part of Allah’s master plan. He informed Abraham (pbuh) that the sacred city would be built through Ishmael and that water would flow for him. In a few days, Abraham (pbuh) set out with his wife Hagar and their son Ishmael. Hagar was still nursing Ishmael and the child was still breastfeeding. Abraham (pbuh) walked through cultivated land, desert, and mountains until he reached the desert of the Arabian Peninsula and came to an uncultivated valley near two small hills called Safa and Marwa.`,
  },
  {
    id: 27,
    type: 'story',
    title: 'Hagar’s Trust in the Desert',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F26_Chapter_27_Hajar_and_Ishmael_Search_for_Water.mp3?alt=media&token=d14daae7-e2e0-455c-bda1-66ab2239854c',
    content: `The valley had no fruit, no trees, no food, no water, and no sign of life. Abraham (pbuh) left them with a skin of water and a leather bag full of dates. As Abraham (pbuh) began walking away, leaving them behind, Hagar became anxious as to what was happening. Abraham (pbuh) continued walking. Hagar asked him: “Has Allah commanded you to leave us here?” He replied: “Yes. I am leaving you to Allah’s care.” Feeling a degree of comfort in this answer, this great woman said: “I am satisfied to be with Allah! We are not going to be lost, since Allah is with us.” Hagar came to understand that Abraham (pbuh) was not acting on his own decision; Allah had commanded him to leave them. Abraham (pbuh) advanced as far as the upper parts of Mecca. He stopped in a place where they could not see him.`,
  },
  {
    id: 28,
    type: 'story',
    title: 'Abraham’s Prayer for Mecca',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F27_Chapter_28_Zamzam_Appears.mp3?alt=media&token=baf68a2a-1d4c-4428-972b-f49b47c307b2',
    content: `He turned his face towards the direction where the Ka’ba stands today and raised his hands, praying as follows: “O Our Lord! I have made some of my offspring to dwell in a valley with no cultivation, by Your Sacred House (the Ka’ba at Mecca); in order, O our Lord, that they may offer prayers perfectly (Iqamat as salat); so fill some hearts among men with love towards them, and O Allah provide them with fruits so that they may give thanks” (Surah Ibrahim: 37). Abraham (pbuh) had to take Hagar and Ishmael away from Palestine to a new place. This was about the rebuilding of the temple, that is, the Ka’ba. According to Allah’s intention, Hagar and Ishmael had to leave Palestine and settle in the barren valley of Mecca, near the place of the old temple, to reconstruct the Holy Ka’ba which was lost after Noah’s Flood, making this place the renewed center of monotheism: Islam. Over the years, Ishmael’s children had children; one of them was Muhammad, the Prophet of Islam (pbuh).

They spread all over the Arabian Peninsula to carry their grandfather Abraham (pbuh)’s message of monotheism.`,
  },
  {
    id: 29,
    type: 'story',
    title: 'Hagar’s Search for Water',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F28_Chapter_29_Mecca_Is_Settled.mp3?alt=media&token=780ddf21-7c82-4189-9eb7-08eb04c16bbb',
    content: `Ibn Abbas, a companion of Prophet Muhammad (pbuh) who narrated many hadiths, said, “Ishmael's mother went on suckling Ishmael and drinking from the water. When the water in the water skin was used up, she became thirsty and her child also became thirsty. She started looking at Ishmael in grief. Hagar began searching for water. Leaving Ishmael under a tree, she began climbing the rocky slope of a nearby hill, Safa. ‘Maybe there is a caravan passing by,’ she thought to herself. Then, she moved across to the opposite hill, Marwa, but still saw nothing. She ran between the two hills of Safa and Marwa seven times looking for signs of water or help. Hagar’s patient search for water is directly comparable to the running (sa’y) between Safa and Marwah.” Her effort was later commemorated by Muslims during Hajj. Actually, there is almost no difference between the pilgrimage called by Abraham (pbuh) and the pilgrimage of Islam.

Exhausted and sad, she heard a voice but could not find where it came from.`,
  },
// c08b

// c09a
  {
    id: 30,
    type: 'story',
    title: 'Zamzam Appears',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F29_Chapter_30_Abraham_and_Ishmael.mp3?alt=media&token=be356476-581b-4c87-8f05-e0354e668b60',
    content: `Looking down into the valley, Hagar saw the angel Gabriel standing next to her son, Ishmael. The angel hit the ground with his heel, and water immediately flowed out. It was a miracle! Hagar quickly made a small basin around the water to stop it from spreading, and she filled her water skin. The angel said, “Do not be afraid. This is the place for the House of Allah, which this boy and his father will build. Allah never abandons His people.” This well, called Zamzam, is flowing to this day in the city of Mecca in the Arabian Peninsula. This name was given to the water because the word Zamzam means “abundant and flowing, the voice of Gabriel, the sound water makes as it flows, the sound of thunder, a sound whose origin is unknown.” Not long after that, the tribe of Jurham that was moving from southern Arabia, Yemen, stopped by the valley of Mecca. They had seen the unusual sight of a bird flying in its direction, which could only mean the presence of water.`,
  },
  {
    id: 31,
    type: 'story',
    title: 'The Dream of Sacrifice',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F30_Chapter_31_The_Dream_of_Sacrifice.mp3?alt=media&token=8dfa0f15-bcf1-4cdf-88ab-ce6ab2c10930',
    content: `They eventually settled in Mecca and Ishmael grew up among them. Ishmael learned Arabic from them and they all loved and admired Ishmael because of his gentle character. Growing up among the Jurham tribe, Ishmael married the daughter of one of their leaders. Abraham (pbuh) had a dream that he sacrificed his son, which was to be the ultimate test of his faith. In a dream, Abraham (pbuh) learnt that he must sacrifice his son. Joseph (pbuh) and Muhammad (pbuh), two of Abraham (pbuh)'s offspring, also had important dreams. “So We gave him the glad tidings of a forbearing boy. And when he (his son) was old enough to walk with him, he said: 'O my son! I have seen in a dream that I am slaughtering you (offer you in sacrifice to Allah), so look what do you think!' 'O my father! Do that which you are commanded InshAllah (if Allah wills), you shall find me of the patient” (Surah as-Saffat: 101–102). Ishmael knew the task of his father.`,
  },
  {
    id: 32,
    type: 'story',
    title: 'Submission and Mercy',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F31_Chapter_32_Submission_and_Mercy.mp3?alt=media&token=0926084c-7ad8-4d28-9048-780687b18d8d',
    content: `The Allah-fearing son of a faithful father promised to obey Allah. Abraham (pbuh) took his son to the place where he was to be sacrificed and laid him. “And when they both obeyed Allah's command, and he (Abraham (pbuh)) laid him (Ishmael) face down upon his forehead (in order to be sacrificed)” (Surah as-Saffat: 103). A voice stopped Abraham (pbuh) just as his knife was about to touch Ishmael: “We called to him: O Abraham: You have indeed fulfilled the vision. Thus do We reward the good. That verily was a clear test” (Surah as-Saffat: 104–106). Here, Abraham (pbuh) showed his willingness to sacrifice all his belongings for Allah. Because of this, Allah made him the leader of humanity and brought Messengers from his children. “And when Allah tested Abraham with various commands, and he proved true to each one. He (Allah) said, indeed I have made you a leader of humanity.

He (Abraham) said (asking of Allah), ‘and from my children” (Surah al-Baqarah: 124). It was only a test; the substitute was a ram or goat.`,
  },
  {
    id: 33,
    type: 'story',
    title: 'Sacrifice and Reunion',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F32_Chapter_33_Building_the_Ka%E2%80%98ba.mp3?alt=media&token=64ffd38a-fbaf-4181-b4d2-c9685a826820',
    content: `Every year, hundreds of millions of Muslims perform this act of trust in Allah during the days of Hajj. This day is called "The Day of Sacrifice" or "The Celebration of Sacrifice." At Abraham (pbuh)’s time, the practice of sacrificing the firstborn children was quite widespread in Arabia, Palestine, and Egypt. Actually, sacrificing animals was part of Abraham's religion of monotheism. In Abraham (pbuh)’s religion, animal sacrifice was equivalent to human life, and for the people of that era, it meant safety, especially for children. In fact, animal sacrifice is not a form of worship that began with Abraham (pbuh). Prophets before him also sacrificed animals, while idolaters sacrificed humans. Abraham (pbuh) returned to Palestine. After a separation of several years, the father and son came together again. At that time, Ishmael was about thirty years old. Father and son embraced each other again with longing. Both were crying with joy. This time, they were going to build the honored House of Allah, which is a center of worship and the direction people face while praying, and to make it the site of Islamic pilgrimage, Hajj.`,
  },
// c09b

// c10a
  {
    id: 34,
    type: 'story',
    title: 'Building the Ka’ba',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F33_Chapter_34_The_First_Call_to_Pilgrimage.mp3?alt=media&token=0e5a8118-0498-4e50-a826-e6aaca1b8cc4',
    content: `Prophet Muhammad (pbuh) said: “Indeed this place has been made sacred by Allah since the day He created the heavens and the earth, and it will remain so until the Day of Judgment” (Sunan an-Nasa'i, 2874). Abraham (pbuh) said to Ishmael: “O Ishmael, Allah has commanded me to do an important task, and you will help me in this task.” Ishmael replied, “I will help you for sure.” Abraham (pbuh) said, “The Almighty Allah commanded me to build a house for Himself.” Father and son found the foundations of the old structure and began to build the Ka’ba on it. When the building became high and the old man Abraham (pbuh) could no longer lift the stones to such a high position, he stood over the stone of Al-Maqam and Ishmael carried on handing him the stones, and both of them were saying: “O our Lord! Accept this service from us; verily You are the All Hearer, the All Knower” (Surah al-Baqarah: 127).

Abraham (pbuh) traveled to Mecca in response to Allah’s command to establish the sacred Ka’ba.`,
  },
  {
    id: 35,
    type: 'story',
    title: 'The Legacy of Abraham',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F34_Chapter_35_The_Legacy_of_Abraham.mp3?alt=media&token=a7065900-a5e2-4469-aa93-a4a284b627f5',
    content: `He was but the restorer of the structure that was originally built long before. No other place of worship is older than the Ka’ba of Mecca. Reconstruction of the Ka’ba and the call to pilgrimage (see Surah al-Hajj: 27) are clear evidence that Prophet Abraham (pbuh) established the religion and invited those living in that region at that time to embrace it. This belief is known as Hanifism. Reconstructing the Holy Ka’ba was the completion of Abraham (pbuh)’s mission. He built a place of worship for all people, not just people of a chosen race or color. This actually reminds us of the oneness of Allah. During Hajj Muslims are reminded of many events of Allah’s beloved “friend” Abraham (pbuh) and his family. Before his death, Abraham (pbuh) left Palestine to Isaac and Mecca to Ishmael, and sent his other children eastward. His son Ishmael taught his father Abraham (pbuh)'s faith in the Hijaz region, and in this region, his Hanif faith coexisted with idolatry.

The ‘Beloved servant of Allah’ about whom Allah said, “I will make you a leader to the nations,” returned to Palestine and died there. When people have lost their way and are looking for salvation, Abraham (pbuh) has always been there to show them the right path. This is especially true in societies where morals have worsened and the real path that Allah showed them has been corrupted.`,
  },
  {
    id: 36,
    type: 'quiz',
    title: 'Knowledge Check',
    image: '',
    audioUrl: '',
    content: 'Check your understanding of the complete Prophet Abraham B2 story.',
  },
  {
    id: 37,
    type: 'exercises',
    title: 'Language Review',
    image: '',
    content: 'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.',
  },
  {
    id: 38,
    type: 'vocabulary-match',
    title: 'B2 Vocabulary Challenge',
    image: '',
    content: 'Match ten meaning-bearing story terms with their precise meanings.',
  },
  {
    id: 39,
    type: 'glossary',
    title: 'B2 Story Glossary',
    image: '',
    content: 'Academic and narrative vocabulary from the complete B2 story.',
  },
  {
    id: 40,
    type: 'final-challenge',
    title: 'Final Challenge',
    image: '',
    content: 'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.',
  },
// c10b

// c11a
// c11b
];

// Word Notes and hotspots of the 35 story chapters, exactly as the reader shows them.
const abrahamB2StoryNotes: Record<number, Pick<PageData, 'vocabulary' | 'hotspots'>> = {
  1: {
    vocabulary: [
      { word: "representative", partOfSpeech: "noun", definition: "A person who speaks or acts for a group, a belief or an idea." },
      { word: "monotheistic", partOfSpeech: "adjective", definition: "Believing that there is only one God." },
      { word: "rival", partOfSpeech: "noun", definition: "Someone or something that competes with another for the same position." },
      { word: "forefather", partOfSpeech: "noun", definition: "A person from an earlier generation of your family; an ancestor." },
      { word: "unique", partOfSpeech: "adjective", definition: "Being the only one of its kind; unlike anything else." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-1-1', x: 28, y: 41, title: "Messenger of Tawhid", description: "The Qur’an presents Abraham (pbuh) as the messenger of the belief that Allah is One and has no partner." },
      { id: 'ab-b2-runtime-hs-1-2', x: 70, y: 62, title: "Father of Prophets", description: "Abraham (pbuh) was the father of Ishmael (pbuh) and Isaac (pbuh), and Ishmael (pbuh) was a forefather of Prophet Muhammad (pbuh)." },
    ],
  },
  2: {
    vocabulary: [
      { word: "mission", partOfSpeech: "noun", definition: "An important task or purpose that someone is given or chooses to follow." },
      { word: "struggle", partOfSpeech: "noun", definition: "A long, hard effort against difficulties or opposition." },
      { word: "morally upright", partOfSpeech: "adjective", definition: "Honest, fair and always behaving in a decent way." },
      { word: "reasoning", partOfSpeech: "noun", definition: "The process of thinking about something in a logical way to reach a conclusion." },
      { word: "capacities", partOfSpeech: "noun", definition: "The abilities that people have to understand or do things." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-2-1', x: 35, y: 54, title: "A Life Mission", description: "Abraham (pbuh) spent his life teaching people to believe in Allah alone, and he passed hard tests with full trust in Him." },
      { id: 'ab-b2-runtime-hs-2-2', x: 60, y: 65, title: "The Hanif Path", description: "The Qur’an describes Abraham (pbuh) as a hanîf: a monotheist who was neither a Jew, a Christian nor an idolater." },
    ],
  },
  3: {
    vocabulary: [
      { word: "idolatry", partOfSpeech: "noun", definition: "The worship of statues, stars or other created things instead of Allah." },
      { word: "corrupted", partOfSpeech: "verb", definition: "Changed from its pure, original form into something false." },
      { word: "revelation", partOfSpeech: "noun", definition: "A message from Allah given to a prophet." },
      { word: "prophethood", partOfSpeech: "noun", definition: "The position of someone chosen by Allah to carry His message to people." },
      { word: "welcomed", partOfSpeech: "verb", definition: "Accepted something gladly and with approval." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-3-1', x: 42, y: 30, title: "The Hanifs of the Hijaz", description: "Before Islam, a group in the Hijaz called themselves hanîfs and stayed away from idolatry." },
      { id: 'ab-b2-runtime-hs-3-2', x: 71, y: 44, title: "Bilal’s Cry: “One, One”", description: "Waraqa ibn Nawfal saw Bilal being punished under the burning sun while he kept repeating “Ahad, Ahad.”" },
    ],
  },
  4: {
    vocabulary: [
      { word: "birthplace", partOfSpeech: "noun", definition: "The town or country where a person came into the world." },
      { word: "historically", partOfSpeech: "adverb", definition: "According to history or to what is known about the past." },
      { word: "prosperous", partOfSpeech: "adjective", definition: "Rich and successful." },
      { word: "industry", partOfSpeech: "noun", definition: "The work of making goods, especially in large amounts." },
      { word: "aspects", partOfSpeech: "noun", definition: "Particular parts or sides of something." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-4-1', x: 27, y: 43, title: "The Land of Nimrod", description: "Abraham (pbuh) was probably born in Ur or Babylon, the country of King Nimrod, around the 20th century BC." },
      { id: 'ab-b2-runtime-hs-4-2', x: 61, y: 61, title: "Many Objects of Worship", description: "People in Abraham’s (pbuh) time worshipped planets, stars, the sun, the moon, idols of stone and wood, and even their kings." },
    ],
  },
  5: {
    vocabulary: [
      { word: "atmosphere", partOfSpeech: "noun", definition: "The general mood and influences that surround a person or place." },
      { word: "astrologers", partOfSpeech: "noun", definition: "People who claim to know the future by studying the movement of the planets." },
      { word: "predicted", partOfSpeech: "verb", definition: "Said that something would happen in the future." },
      { word: "reign", partOfSpeech: "noun", definition: "The period during which a king or queen rules." },
      { word: "narration", partOfSpeech: "noun", definition: "A report of past events passed on from person to person." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-5-1', x: 34, y: 56, title: "The Astrologers’ Warning", description: "Nimrod’s astrologers predicted that a child named Abraham (pbuh) would change the people’s religion and end the king’s reign." },
      { id: 'ab-b2-runtime-hs-5-2', x: 72, y: 40, title: "Born in a Cave", description: "To protect the baby from Nimrod’s order, Azer hid his pregnant wife in a cave, where Abraham (pbuh) was born." },
    ],
  },
  6: {
    vocabulary: [
      { word: "cleared up", partOfSpeech: "verb", definition: "Made something pure and free from anything wrong or confusing." },
      { word: "sound judgement", partOfSpeech: "noun", definition: "The ability to make wise and sensible decisions." },
      { word: "astonished", partOfSpeech: "adjective", definition: "Extremely surprised." },
      { word: "spontaneously", partOfSpeech: "adverb", definition: "Naturally and immediately, without planning or being told." },
      { word: "sculptures", partOfSpeech: "noun", definition: "Figures of people or animals made from stone, wood or metal." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-6-1', x: 41, y: 32, title: "Wisdom from Childhood", description: "Allah gave Abraham (pbuh) wisdom and sound judgement while he was still a child." },
      { id: 'ab-b2-runtime-hs-6-2', x: 62, y: 57, title: "Riding the Chief God", description: "Young Abraham (pbuh) rode on the statue of Marduk, the chief god of Babylon, and his father became furious." },
    ],
  },
  7: {
    vocabulary: [
      { word: "hatred", partOfSpeech: "noun", definition: "A very strong feeling of dislike." },
      { word: "lifeless", partOfSpeech: "adjective", definition: "Without life; not living and unable to move or feel." },
      { word: "helpless", partOfSpeech: "adjective", definition: "Completely unable to act or to protect oneself." },
      { word: "niche", partOfSpeech: "noun", definition: "A hollow space in a wall where a statue or object is placed." },
      { word: "begging", partOfSpeech: "verb", definition: "Asking for something in a desperate and humble way." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-7-1', x: 26, y: 45, title: "Idols That Cannot Stand", description: "Abraham (pbuh) saw that the idols were so helpless that they could not get up again when they fell." },
      { id: 'ab-b2-runtime-hs-7-2', x: 73, y: 36, title: "The Great Temple", description: "His people’s temple was full of idols, and the biggest gods stood in a niche in the middle." },
    ],
  },
  8: {
    vocabulary: [
      { word: "priest", partOfSpeech: "noun", definition: "A person who performs religious duties in a place of worship." },
      { word: "empire", partOfSpeech: "noun", definition: "A very large area, or everything, under the rule of one power." },
      { word: "incident", partOfSpeech: "noun", definition: "An event, especially an important or unusual one." },
      { word: "certainty", partOfSpeech: "noun", definition: "Complete confidence that something is true." },
      { word: "set", partOfSpeech: "verb", definition: "(Of the sun, moon, stars or planets) went down below the horizon." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-8-1', x: 33, y: 58, title: "A Night in the Mountains", description: "Abraham (pbuh) walked alone through the dark and rested in a cave in the mountains." },
      { id: 'ab-b2-runtime-hs-8-2', x: 63, y: 39, title: "The Setting Planet", description: "When the planet disappeared, Abraham (pbuh) said that he did not love things that set." },
    ],
  },
  9: {
    vocabulary: [
      { word: "innocent", partOfSpeech: "adjective", definition: "Having nothing to do with something wrong." },
      { word: "heavenly bodies", partOfSpeech: "noun", definition: "Natural objects in the sky, such as the sun, the moon, stars and planets." },
      { word: "asteroids", partOfSpeech: "noun", definition: "Small rocky objects that travel around the sun." },
      { word: "debate", partOfSpeech: "noun", definition: "A discussion in which people give opposing opinions and arguments." },
      { word: "directed", partOfSpeech: "verb", definition: "Turned or pointed something towards a particular person or thing." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-9-1', x: 40, y: 34, title: "The Moon and the Sun", description: "Abraham (pbuh) watched the moon and then the sun rise and set, and turned away from worshipping them." },
      { id: 'ab-b2-runtime-hs-9-2', x: 74, y: 46, title: "A Debate About the Stars", description: "Abraham (pbuh) showed the star worshippers that heavenly bodies could not be partners with Allah." },
    ],
  },
  10: {
    vocabulary: [
      { word: "everlasting", partOfSpeech: "adjective", definition: "Lasting for ever; never ending." },
      { word: "unworthy", partOfSpeech: "adjective", definition: "Not deserving respect, attention or a particular treatment." },
      { word: "clarified", partOfSpeech: "verb", definition: "Explained something so that it could be understood without confusion." },
      { word: "emphasizes", partOfSpeech: "verb", definition: "Gives special importance to an idea." },
      { word: "conflict", partOfSpeech: "noun", definition: "A serious disagreement or fight between people or groups." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-10-1', x: 25, y: 47, title: "Signs, Not Gods", description: "Abraham (pbuh) explained that the sun and the moon were signs of Allah, not gods to be worshipped." },
      { id: 'ab-b2-runtime-hs-10-2', x: 64, y: 63, title: "The Conflict Begins", description: "His reasoning started a conflict with the star worshippers, who argued with him and threatened him." },
    ],
  },
  11: {
    vocabulary: [
      { word: "argue", partOfSpeech: "verb", definition: "To give reasons for or against something, often angrily." },
      { word: "correctness", partOfSpeech: "noun", definition: "The quality of being true or free from mistakes." },
      { word: "ridiculousness", partOfSpeech: "noun", definition: "The quality of being so silly that nobody can take it seriously." },
      { word: "claims", partOfSpeech: "noun", definition: "Statements that something is true, made without proof." },
      { word: "threatened", partOfSpeech: "verb", definition: "Said that they would cause harm or punishment to someone." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-11-1', x: 32, y: 60, title: "Who Deserves Security?", description: "Abraham (pbuh) asked which side had more right to security: those who worshipped Allah alone or those who gave Him partners." },
      { id: 'ab-b2-runtime-hs-11-2', x: 75, y: 52, title: "Empty Arguments", description: "His people tried to prove their beliefs, but their claims were so weak that the verses did not even mention them." },
    ],
  },
  12: {
    vocabulary: [
      { word: "paid no heed", partOfSpeech: "verb", definition: "Completely ignored something." },
      { word: "declared", partOfSpeech: "verb", definition: "Stated something clearly and publicly." },
      { word: "mindful", partOfSpeech: "adjective", definition: "Aware of something important and giving it attention." },
      { word: "firmly", partOfSpeech: "adverb", definition: "In a strong, determined way that will not change." },
      { word: "evident error", partOfSpeech: "noun", definition: "A mistake or false belief that is clear for everyone to see." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-12-1', x: 39, y: 36, title: "No Fear of Idols", description: "Abraham (pbuh) ignored the threat and declared that benefit and harm come only from Allah." },
      { id: 'ab-b2-runtime-hs-12-2', x: 65, y: 45, title: "The Angry Idol Maker", description: "His father was the most furious of all, because he shaped and sold idols as well as worshipping them." },
    ],
  },
  13: {
    vocabulary: [
      { word: "duty", partOfSpeech: "noun", definition: "Something that you feel you must do because it is right." },
      { word: "embarrassed", partOfSpeech: "adjective", definition: "Feeling ashamed and uncomfortable in front of others." },
      { word: "fatherly love", partOfSpeech: "noun", definition: "The warm affection that a father has for his child." },
      { word: "disobedient", partOfSpeech: "adjective", definition: "Refusing to do what one is told to do." },
      { word: "afflict", partOfSpeech: "verb", definition: "To cause pain, suffering or trouble to someone." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-13-1', x: 24, y: 49, title: "Gentle Advice", description: "Abraham (pbuh) advised his father kindly, without mocking his job, and told him that he loved him." },
      { id: 'ab-b2-runtime-hs-13-2', x: 76, y: 62, title: "A Warning About Satan", description: "Abraham (pbuh) warned his father not to worship Satan, who had disobeyed Allah." },
    ],
  },
  14: {
    vocabulary: [
      { word: "harsh", partOfSpeech: "adjective", definition: "Cruel, severe and unkind." },
      { word: "determined", partOfSpeech: "adjective", definition: "Having made a firm decision to do something." },
      { word: "consequences", partOfSpeech: "noun", definition: "The results of an action, often bad ones." },
      { word: "suspect", partOfSpeech: "noun", definition: "A person who is thought to have committed a crime." },
      { word: "put an end to", partOfSpeech: "verb", definition: "To stop something completely." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-14-1', x: 31, y: 62, title: "A Father’s Threat", description: "Abraham’s (pbuh) father threatened to stone him, but Abraham (pbuh) answered with peace and prayed for his forgiveness." },
      { id: 'ab-b2-runtime-hs-14-2', x: 66, y: 41, title: "Questions Like a Judge", description: "Like a clever judge questioning a suspect, Abraham (pbuh) asked people questions to reveal the truth." },
    ],
  },
  15: {
    vocabulary: [
      { word: "defend", partOfSpeech: "verb", definition: "To protect something from attack by arguing in its favour." },
      { word: "criticizing", partOfSpeech: "verb", definition: "Saying what is wrong with someone or something." },
      { word: "regulates", partOfSpeech: "verb", definition: "Controls and organizes how something works." },
      { word: "persuade", partOfSpeech: "verb", definition: "To make someone agree to something by giving good reasons." },
      { word: "serious", partOfSpeech: "adjective", definition: "Meaning what you say; not joking." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-15-1', x: 38, y: 38, title: "The Forefathers’ Excuse", description: "The idolaters admitted that the idols were lifeless but said that their forefathers had worshipped them." },
      { id: 'ab-b2-runtime-hs-15-2', x: 77, y: 58, title: "A Bold Challenge", description: "Abraham (pbuh) had criticized the idols openly and challenged the people to see whether they could harm him." },
    ],
  },
  16: {
    vocabulary: [
      { word: "ancient", partOfSpeech: "adjective", definition: "Belonging to a time very long ago." },
      { word: "sins", partOfSpeech: "noun", definition: "Wrong actions that break Allah’s law." },
      { word: "universe", partOfSpeech: "noun", definition: "Everything that exists, including all stars and planets." },
      { word: "provides", partOfSpeech: "verb", definition: "Gives people what they need." },
      { word: "heals", partOfSpeech: "verb", definition: "Makes someone who is ill healthy again." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-16-1', x: 23, y: 51, title: "What Do You Worship?", description: "Abraham (pbuh) asked his people whether their idols could hear them, help them or harm them." },
      { id: 'ab-b2-runtime-hs-16-2', x: 67, y: 37, title: "The Lord of the Worlds", description: "Abraham (pbuh) described Allah as the One who creates, guides, feeds, heals and brings the dead back to life." },
    ],
  },
  17: {
    vocabulary: [
      { word: "held on tightly", partOfSpeech: "verb", definition: "Refused to let go of something." },
      { word: "distanced", partOfSpeech: "verb", definition: "Kept away from someone or something." },
      { word: "cautiously", partOfSpeech: "adverb", definition: "Carefully, trying to avoid danger or being noticed." },
      { word: "offerings", partOfSpeech: "noun", definition: "Things such as food given to a god as an act of worship." },
      { word: "rigid", partOfSpeech: "adjective", definition: "Stiff and unable to move or bend." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-17-1', x: 30, y: 64, title: "An Empty City", description: "Abraham (pbuh) waited until everyone, even the priests, had gone to the festival outside the town." },
      { id: 'ab-b2-runtime-hs-17-2', x: 78, y: 54, title: "Food for the Idols", description: "Abraham (pbuh) asked a statue why it did not eat the food in front of it, but it stayed silent." },
    ],
  },
  18: {
    vocabulary: [
      { word: "mocking", partOfSpeech: "verb", definition: "Laughing at someone or something in an unkind way." },
      { word: "smash", partOfSpeech: "verb", definition: "To break something violently into many pieces." },
      { word: "false gods", partOfSpeech: "noun", definition: "Beings or things that people wrongly worship as divine." },
      { word: "foolishness", partOfSpeech: "noun", definition: "A lack of good sense or judgement." },
      { word: "wrongdoers", partOfSpeech: "noun", definition: "People who act unjustly and harm others." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-18-1', x: 37, y: 40, title: "The Axe on the Idol’s Neck", description: "Abraham (pbuh) broke all the idols except the biggest one and hung the axe on its neck." },
      { id: 'ab-b2-runtime-hs-18-2', x: 68, y: 47, title: "Shock in the Temple", description: "The people returned and were shocked to find their gods in pieces all over the temple." },
    ],
  },
  19: {
    vocabulary: [
      { word: "witness", partOfSpeech: "verb", definition: "To see something happen with your own eyes." },
      { word: "demanded", partOfSpeech: "verb", definition: "Asked for something firmly, as if it were a right." },
      { word: "resist", partOfSpeech: "verb", definition: "To fight back or refuse to accept something." },
      { word: "trial", partOfSpeech: "noun", definition: "A formal process in which a court decides whether someone is guilty." },
      { word: "undamaged", partOfSpeech: "adjective", definition: "Not broken or harmed in any way." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-19-1', x: 22, y: 53, title: "Ask the Biggest Idol", description: "Abraham (pbuh) smiled and told them to ask the biggest idol, which was still undamaged." },
      { id: 'ab-b2-runtime-hs-19-2', x: 79, y: 64, title: "A Public Trial", description: "Abraham (pbuh) did not resist his arrest, because a trial let him show everyone that their beliefs were foolish." },
    ],
  },
  20: {
    vocabulary: [
      { word: "culprit", partOfSpeech: "noun", definition: "The person who is responsible for a crime or wrong action." },
      { word: "arrogance", partOfSpeech: "noun", definition: "Too much pride that makes a person unwilling to accept that they are wrong." },
      { word: "admit", partOfSpeech: "verb", definition: "To accept that something is true, often unwillingly." },
      { word: "tyrants", partOfSpeech: "noun", definition: "Rulers who use their power in a cruel and unfair way." },
      { word: "revenge", partOfSpeech: "noun", definition: "Harm done to someone as a punishment for harm they have done." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-20-1', x: 29, y: 29, title: "Pride over Truth", description: "The people knew their beliefs were foolish, but their arrogance stopped them from admitting it." },
      { id: 'ab-b2-runtime-hs-20-2', x: 69, y: 67, title: "Preparing the Fire", description: "The citizens gathered wood for days and filled a deep pit to burn Abraham (pbuh) alive." },
    ],
  },
  21: {
    vocabulary: [
      { word: "flames", partOfSpeech: "noun", definition: "The bright, hot parts of a fire that rise into the air." },
      { word: "pit", partOfSpeech: "noun", definition: "A large, deep hole in the ground." },
      { word: "catapult", partOfSpeech: "noun", definition: "A machine used in the past to throw heavy objects over a long distance." },
      { word: "rising", partOfSpeech: "adjective", definition: "Moving or growing upwards." },
      { word: "coolness", partOfSpeech: "noun", definition: "A pleasant, slightly cold quality." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-21-1', x: 36, y: 42, title: "Nothing from You", description: "When the angel Gabriel asked whether he wished for anything, Abraham (pbuh) replied that he wanted nothing from him." },
      { id: 'ab-b2-runtime-hs-21-2', x: 59, y: 60, title: "Like a Cool Garden", description: "Allah ordered the fire to be cool and safe, so it burned only Abraham’s (pbuh) ropes." },
    ],
  },
  22: {
    vocabulary: [
      { word: "breathless", partOfSpeech: "adjective", definition: "Hardly able to take in air." },
      { word: "extinguished", partOfSpeech: "verb", definition: "(Of a fire) put out so that it stops burning." },
      { word: "blackened", partOfSpeech: "verb", definition: "Made something dark in colour, for example with smoke or fire." },
      { word: "shamed", partOfSpeech: "verb", definition: "Made someone feel disgraced in front of others." },
      { word: "dare", partOfSpeech: "verb", definition: "To be brave enough to do something dangerous or difficult." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-22-1', x: 21, y: 55, title: "Allah Is Sufficient", description: "Abraham’s (pbuh) last words before entering the fire were “Allah is sufficient for me.”" },
      { id: 'ab-b2-runtime-hs-22-2', x: 70, y: 49, title: "Out of the Pit", description: "Abraham (pbuh) walked out of the fire unharmed with a bright face, while smoke had blackened the faces of those watching." },
    ],
  },
  23: {
    vocabulary: [
      { word: "ordinary", partOfSpeech: "adjective", definition: "Normal and not special in any way." },
      { word: "filled with rage", partOfSpeech: "verb", definition: "Became extremely angry." },
      { word: "disputed", partOfSpeech: "verb", definition: "Argued against someone about something." },
      { word: "undeniable", partOfSpeech: "adjective", definition: "So clearly true that nobody can say it is false." },
      { word: "sentenced to death", partOfSpeech: "verb", definition: "Officially ordered by a judge or ruler to be killed as a punishment." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-23-1', x: 28, y: 31, title: "A King Who Claimed to Be God", description: "King Nimrod claimed to be a god and called Abraham (pbuh) to argue with him in person." },
      { id: 'ab-b2-runtime-hs-23-2', x: 60, y: 42, title: "Life and Death", description: "Nimrod freed one condemned man and had the other killed, claiming that he too gave life and caused death." },
    ],
  },
  24: {
    vocabulary: [
      { word: "put forth", partOfSpeech: "verb", definition: "Offered an idea or argument for others to consider." },
      { word: "unquestionably", partOfSpeech: "adverb", definition: "In a way that nobody can doubt." },
      { word: "utterly defeated", partOfSpeech: "adjective", definition: "Completely beaten, with nothing left to say." },
      { word: "fame", partOfSpeech: "noun", definition: "The state of being known and talked about by many people." },
      { word: "means", partOfSpeech: "noun", definition: "Methods or ways of achieving something." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-24-1', x: 35, y: 44, title: "The Sun from the West", description: "Abraham (pbuh) challenged Nimrod to make the sun rise from the west, and the king could not answer." },
      { id: 'ab-b2-runtime-hs-24-2', x: 71, y: 59, title: "Only Two Believers", description: "Only Sarah and Lot (pbuh) shared Abraham’s (pbuh) belief; Sarah became his wife, and Lot later became a prophet." },
    ],
  },
  25: {
    vocabulary: [
      { word: "emigrate", partOfSpeech: "verb", definition: "To leave your own country to live in another." },
      { word: "righteousness", partOfSpeech: "noun", definition: "Behaviour that is morally good and fair." },
      { word: "sterile", partOfSpeech: "adjective", definition: "Unable to have children." },
      { word: "aged", partOfSpeech: "verb", definition: "Grew old." },
      { word: "suggested", partOfSpeech: "verb", definition: "Put forward an idea for someone to think about." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-25-1', x: 42, y: 57, title: "Journey to Egypt", description: "Abraham (pbuh) left his people with Sarah and Lot (pbuh), travelled to Egypt and then settled in Palestine." },
      { id: 'ab-b2-runtime-hs-25-2', x: 61, y: 38, title: "The Birth of Ishmael", description: "Hagar gave birth to Ishmael (pbuh) when Abraham (pbuh) was already an old man." },
    ],
  },
  26: {
    vocabulary: [
      { word: "offspring", partOfSpeech: "noun", definition: "A person’s children, grandchildren and later generations." },
      { word: "descendants", partOfSpeech: "noun", definition: "People who come from a particular ancestor over many generations." },
      { word: "informed", partOfSpeech: "verb", definition: "Told someone about something." },
      { word: "nursing", partOfSpeech: "verb", definition: "Feeding a baby with milk from the breast." },
      { word: "uncultivated", partOfSpeech: "adjective", definition: "Not used for growing crops or plants." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-26-1', x: 27, y: 33, title: "Two Sons, Many Prophets", description: "Prophet Muhammad (pbuh) came from Ishmael’s (pbuh) descendants, and Moses (pbuh) and Jesus (pbuh) came from Isaac’s (pbuh)." },
      { id: 'ab-b2-runtime-hs-26-2', x: 72, y: 55, title: "Across the Desert", description: "Abraham (pbuh) led Hagar and baby Ishmael (pbuh) to a valley near the hills of Safa and Marwa." },
    ],
  },
  27: {
    vocabulary: [
      { word: "anxious", partOfSpeech: "adjective", definition: "Worried and nervous about what may happen." },
      { word: "comfort", partOfSpeech: "noun", definition: "A feeling of calm and relief after worry." },
      { word: "satisfied", partOfSpeech: "adjective", definition: "Pleased and content with something." },
      { word: "dates", partOfSpeech: "noun", definition: "The sweet brown fruit of the palm tree." },
      { word: "advanced", partOfSpeech: "verb", definition: "Moved forward." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-27-1', x: 34, y: 46, title: "In Allah’s Care", description: "Abraham (pbuh) left Hagar and Ishmael (pbuh) in the empty valley with only water and dates, trusting them to Allah." },
      { id: 'ab-b2-runtime-hs-27-2', x: 62, y: 34, title: "Hagar’s Question", description: "Hagar asked whether Allah had commanded this, and when Abraham (pbuh) said yes, she was at peace." },
    ],
  },
  28: {
    vocabulary: [
      { word: "dwell", partOfSpeech: "verb", definition: "To live in a particular place." },
      { word: "barren", partOfSpeech: "adjective", definition: "Dry and unable to produce plants or crops." },
      { word: "intention", partOfSpeech: "noun", definition: "What someone plans or wants to happen." },
      { word: "flood", partOfSpeech: "noun", definition: "A large amount of water covering land that is usually dry." },
      { word: "renewed", partOfSpeech: "adjective", definition: "Made new or active again after a period." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-28-1', x: 41, y: 59, title: "A Prayer for the Valley", description: "Abraham (pbuh) prayed that people’s hearts would love the family he had left near the Sacred House." },
      { id: 'ab-b2-runtime-hs-28-2', x: 73, y: 65, title: "The Ka’ba’s Lost Place", description: "Hagar and Ishmael (pbuh) settled near the site of the Ka’ba, which had been lost after Noah’s (pbuh) Flood." },
    ],
  },
  29: {
    vocabulary: [
      { word: "used up", partOfSpeech: "verb", definition: "Finished completely so that none was left." },
      { word: "grief", partOfSpeech: "noun", definition: "Deep sadness, especially after a loss." },
      { word: "caravan", partOfSpeech: "noun", definition: "A group of travellers with animals crossing a desert together." },
      { word: "commemorated", partOfSpeech: "verb", definition: "Remembered and honoured with a special act or ceremony." },
      { word: "pilgrimage", partOfSpeech: "noun", definition: "A journey to a holy place for religious reasons." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-29-1', x: 26, y: 35, title: "Seven Runs", description: "Hagar ran between Safa and Marwa seven times, looking for water or help." },
      { id: 'ab-b2-runtime-hs-29-2', x: 63, y: 68, title: "An Echo in Hajj", description: "Muslims on Hajj repeat Hagar’s search when they walk between the two hills (sa’y)." },
    ],
  },
  30: {
    vocabulary: [
      { word: "heel", partOfSpeech: "noun", definition: "The back part of the foot." },
      { word: "basin", partOfSpeech: "noun", definition: "A low, bowl-shaped hollow that holds water." },
      { word: "abundant", partOfSpeech: "adjective", definition: "Existing in large amounts; more than enough." },
      { word: "origin", partOfSpeech: "noun", definition: "The place or point where something begins." },
      { word: "abandons", partOfSpeech: "verb", definition: "Leaves someone alone without help or care." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-30-1', x: 33, y: 48, title: "Water from the Ground", description: "The angel Gabriel struck the ground with his heel, and the water of Zamzam flowed out." },
      { id: 'ab-b2-runtime-hs-30-2', x: 74, y: 61, title: "A Bird over the Valley", description: "The tribe of Jurham saw a bird flying towards the valley and understood that there was water there." },
    ],
  },
  31: {
    vocabulary: [
      { word: "admired", partOfSpeech: "verb", definition: "Respected and liked someone very much." },
      { word: "gentle", partOfSpeech: "adjective", definition: "Kind, calm and soft in manner." },
      { word: "ultimate test", partOfSpeech: "noun", definition: "The greatest and hardest trial of someone’s faith." },
      { word: "glad tidings", partOfSpeech: "noun", definition: "Good news that brings happiness." },
      { word: "forbearing", partOfSpeech: "adjective", definition: "Patient and calm, even when treated badly." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-31-1', x: 40, y: 61, title: "Growing Up Among the Jurham", description: "Ishmael (pbuh) grew up among the Jurham, learned Arabic from them and married the daughter of one of their leaders." },
      { id: 'ab-b2-runtime-hs-31-2', x: 64, y: 50, title: "The Hardest Dream", description: "Abraham (pbuh) saw in a dream that he was sacrificing his son, and Ishmael (pbuh) told him to do what he was commanded." },
    ],
  },
  32: {
    vocabulary: [
      { word: "Allah-fearing", partOfSpeech: "adjective", definition: "Deeply devoted and careful to avoid sin." },
      { word: "laid", partOfSpeech: "verb", definition: "Placed someone down on the ground." },
      { word: "willingness", partOfSpeech: "noun", definition: "The state of being ready and happy to do something." },
      { word: "substitute", partOfSpeech: "noun", definition: "Something that takes the place of another." },
      { word: "ram", partOfSpeech: "noun", definition: "An adult male sheep." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-32-1', x: 25, y: 37, title: "A Voice at the Last Moment", description: "A voice stopped Abraham (pbuh) just as the knife was about to reach Ishmael (pbuh)." },
      { id: 'ab-b2-runtime-hs-32-2', x: 75, y: 57, title: "A Leader for Humanity", description: "Because Abraham (pbuh) passed every test, Allah made him a leader for people and chose messengers from his children." },
    ],
  },
  33: {
    vocabulary: [
      { word: "widespread", partOfSpeech: "adjective", definition: "Existing or happening in many places or among many people." },
      { word: "equivalent", partOfSpeech: "adjective", definition: "Equal in value or meaning to something else." },
      { word: "era", partOfSpeech: "noun", definition: "A long period of history." },
      { word: "separation", partOfSpeech: "noun", definition: "A time when people are apart from each other." },
      { word: "longing", partOfSpeech: "noun", definition: "A strong wish to see or have someone or something you love." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-33-1', x: 32, y: 50, title: "The Day of Sacrifice", description: "Every year during Hajj, Muslims remember Abraham’s (pbuh) trust in Allah on the Day of Sacrifice." },
      { id: 'ab-b2-runtime-hs-33-2', x: 65, y: 60, title: "Father and Son Reunited", description: "After years apart, Abraham (pbuh) and Ishmael (pbuh) embraced each other and cried with joy." },
    ],
  },
  34: {
    vocabulary: [
      { word: "made sacred", partOfSpeech: "verb", definition: "Declared holy and protected from harm or disrespect." },
      { word: "foundations", partOfSpeech: "noun", definition: "The strong base under a building that supports it." },
      { word: "handing", partOfSpeech: "verb", definition: "Passing something directly to another person." },
      { word: "response", partOfSpeech: "noun", definition: "An answer or reaction to something." },
      { word: "establish", partOfSpeech: "verb", definition: "To set up something that will last." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-34-1', x: 39, y: 63, title: "Standing on the Stone", description: "When the walls grew high, Abraham (pbuh) stood on the stone of Al-Maqam while Ishmael (pbuh) handed him the stones." },
      { id: 'ab-b2-runtime-hs-34-2', x: 76, y: 39, title: "A Prayer While Building", description: "As they built, father and son asked Allah to accept their service." },
    ],
  },
  35: {
    vocabulary: [
      { word: "restorer", partOfSpeech: "noun", definition: "A person who rebuilds something old and returns it to its first condition." },
      { word: "embrace", partOfSpeech: "verb", definition: "To accept a belief fully and follow it." },
      { word: "completion", partOfSpeech: "noun", definition: "The act of finishing something." },
      { word: "coexisted", partOfSpeech: "verb", definition: "Existed together at the same time and in the same place." },
      { word: "salvation", partOfSpeech: "noun", definition: "Being saved from sin, danger or ruin." },
    ],
    hotspots: [
      { id: 'ab-b2-runtime-hs-35-1', x: 24, y: 39, title: "A House for Everyone", description: "Abraham (pbuh) built a place of worship for all people, not for one race or colour." },
      { id: 'ab-b2-runtime-hs-35-2', x: 66, y: 56, title: "Dividing the Lands", description: "Before his death, Abraham (pbuh) left Palestine to Isaac (pbuh) and Mecca to Ishmael (pbuh)." },
    ],
  },
};

// t01a
const abrahamB2LanguageReviewExercises: Exercise[] = [
  // NOTICE — find what the book's language does, across chapters.
  {
    id: 'abraham-b2-language-review-1-whose-claim', type: 'drag-drop', title: 'Notice: Whose Claim Is It?',
    instructions: 'Who is responsible for each claim? Put each sentence from the book in the right group.',
    question: 'Does the sentence pass on a source, give the writer’s view, or tell an event?',
    dragDropGroups: [
      { group: 'The writer passes on a source or tradition', items: ['In the Holy Qur’an, Abraham (pbuh) is often described as a hanîf …', 'Azer is presented in Islamic sources as Nimrod\'s idol maker.', 'According to another narration, Nimrod had a dream that a child in the region would challenge his throne.'] },
      { group: 'The writer interprets or concludes', items: ['We may say that it is the former version of Islam.', 'It is understood from Abraham (pbuh)\'s statement … that his people threatened him with the punishment of their gods.', 'Reconstruction of the Ka’ba and the call to pilgrimage … are clear evidence that Prophet Abraham (pbuh) established the religion …'] },
      { group: 'The narrator tells an event directly', items: ['A bitter struggle began between Abraham (pbuh) and his people.', 'Ishmael learned Arabic from them …', 'Abraham (pbuh) returned to Palestine.'] },
    ],
    correctAnswer: {
      'The writer passes on a source or tradition': ['In the Holy Qur’an, Abraham (pbuh) is often described as a hanîf …', 'Azer is presented in Islamic sources as Nimrod\'s idol maker.', 'According to another narration, Nimrod had a dream that a child in the region would challenge his throne.'],
      'The writer interprets or concludes': ['We may say that it is the former version of Islam.', 'It is understood from Abraham (pbuh)\'s statement … that his people threatened him with the punishment of their gods.', 'Reconstruction of the Ka’ba and the call to pilgrimage … are clear evidence that Prophet Abraham (pbuh) established the religion …'],
      'The narrator tells an event directly': ['A bitter struggle began between Abraham (pbuh) and his people.', 'Ishmael learned Arabic from them …', 'Abraham (pbuh) returned to Palestine.'],
    },
    explanation: 'Framing words show where a claim comes from. “is often described as”, “is presented in Islamic sources as” and “According to another narration” pass on what a source or tradition says. “We may say that”, “It is understood from … that” and “are clear evidence that” mark the writer’s own reasoning: a view the writer offers, or a conclusion drawn from evidence. A past simple sentence with no frame (began, learned, returned) tells an event directly. A careful B2 reader keeps these three voices apart.',
    feedback: { correct: 'Well done. You separated the source, the writer’s reasoning and the narrator’s account.', incorrect: 'Look at the start of each sentence: is there a source frame (described, presented, According to), a reasoning frame (may say, understood, evidence), or no frame at all?' },
  },
  {
    id: 'abraham-b2-language-review-2-future-in-the-past', type: 'multiple-choice', title: 'Notice: Looking Ahead from the Past',
    instructions: 'Read the sentences from Chapters 17 and 25. Then choose the best explanation.',
    question: 'Chapter 17: “He knew that there was going to be a great celebration outside the town.” Chapter 25: “When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate.” What does “was going to” do in these sentences?',
    options: [
      'It shows a plan that was never carried out.',
      'It describes an action that was repeated many times in the past.',
      'It looks forward from a moment in the past (what he knew or realized then) to something that was still ahead.',
      'It shows that the writer doubts whether the event took place.',
    ],
    correctAnswer: 2,
    explanation: '“Was going to” is the future seen from the past. The verbs knew and realized put us at a past moment; from there, the celebration and the people’s refusal were still in the future. The form itself does not say whether the event really happened: the context does, and here both did. Chapter 5 takes the same viewpoint: “Very soon, he was going to fight against his family and the whole system in his society.” Would can do the same job: “All the people would attend it.”',
    feedback: { correct: 'Correct. The narrator stands at a past moment and looks ahead.', incorrect: 'Find the past moment first (he knew, he realized). Is the celebration before or after that moment?' },
  },
  {
    id: 'abraham-b2-language-review-3-cause-aim-obstacle-result', type: 'matching', title: 'Notice: Cause, Aim, Obstacle, Result',
    matchingHeadings: { left: 'From the book', right: 'What the linking language does' },
    instructions: 'Match each sentence from the book with what its linking words do.',
    question: 'Does it give a cause, an aim, a problem or a result?',
    matchingPairs: [
      { left: 'The people stood away from the pit because of the great heat.', right: 'gives the cause after the action it explains' },
      { left: 'He went to Damascus in search of Hanifism …', right: 'names the goal of a journey' },
      { left: 'His father\'s harsh behavior towards Abraham (pbuh) did not stop him from carrying the message of truth.', right: 'presents a difficulty that did not change the action' },
      { left: 'Because of this, Allah made him the leader of humanity …', right: 'points back to the previous sentence and presents what followed from it' },
    ],
    correctAnswer: {
      'The people stood away from the pit because of the great heat.': 'gives the cause after the action it explains',
      'He went to Damascus in search of Hanifism …': 'names the goal of a journey',
      'His father\'s harsh behavior towards Abraham (pbuh) did not stop him from carrying the message of truth.': 'presents a difficulty that did not change the action',
      'Because of this, Allah made him the leader of humanity …': 'points back to the previous sentence and presents what followed from it',
    },
    explanation: 'Because of + noun gives the cause after the action: the heat made the people stand away. In search of + noun names the aim of a journey. Not stop someone from + -ing presents an obstacle that failed: his father’s harshness did not change what Abraham did. “Because of this” at the start of a sentence points back: this is the whole previous sentence, and the new sentence gives what followed from it.',
    feedback: { correct: 'Correct. You matched each linker with its job.', incorrect: 'Ask where the cause is: after the action, in the sentence before, or is it an aim or an obstacle? Compare Chapters 3, 14, 21 and 32.' },
  },
  // BUILD — controlled practice in the book's own sentences.
  {
    id: 'abraham-b2-language-review-4-passive-earlier-past', type: 'error-correction', title: 'Build: Passive Forms and the Earlier Past',
    instructions: 'Each sentence from the book has one mistake. Tap it, then choose the correct form.',
    question: 'Can you fix the verbs in these sentences?',
    errorItems: [
      { sentence: 'Abraham (pbuh) was put on the catapult; his hands and feet were tying.', error: 'were tying', options: ['had tied', 'were tied', 'tied'], answer: 1 },
      { sentence: 'Cries of astonishment was heard from the unbelievers.', error: 'was heard', options: ['were heard', 'were hearing', 'heard'], answer: 0 },
      { sentence: 'Abraham (pbuh) has aged and his hair was gray after many years spent in calling people to Allah.', error: 'has aged', options: ['is aging', 'have aged', 'had aged'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: 'A passive needs be + past participle: someone tied his hands and feet, so they were tied (were tying would mean the hands were doing the tying). The verb agrees with the plural subject Cries, so were heard. Had aged steps back from the moment of the story: by the time Sarah made her suggestion, Abraham had already grown old. The present perfect has aged belongs to the present, not to a past story.',
    feedback: { correct: 'Well done. You fixed the passive, the agreement and the earlier past.', incorrect: 'Ask: who did the action, is the subject singular or plural, and does the verb look back from a past moment? Compare with Chapters 20, 22 and 25.' },
  },
  {
    id: 'abraham-b2-language-review-5-reporting-words', type: 'transformation', title: 'Build: Report the Words',
    instructions: 'Report the words from Chapters 6 and 15. Complete each new sentence.',
    question: 'What changes when we report words in a past story?',
    transformItems: [
      { source: 'His father continued, “These big ears show his deep knowledge.”', frame: 'His father added that those big ears [blank] his deep knowledge.', answers: ['showed'] },
      { source: 'they responded: “Are you criticizing our gods and our forefathers? …”', frame: 'They asked Abraham (pbuh) [blank] their gods and their forefathers.', answers: ['whether he was criticizing', 'if he was criticizing', 'whether he was criticising', 'if he was criticising'] },
    ],
    correctAnswer: null,
    explanation: 'After a past reporting verb, the tense usually moves back and these becomes those: show → showed. The father’s claim is reported, not shared by the narrator. A reported yes/no question uses whether or if + statement word order, with no question mark: Are you criticizing …? → whether he was criticizing …. The pronouns change too: you → he, our gods → their gods.',
    feedback: { correct: 'Correct. You moved the tense back and used statement word order.', incorrect: 'Move the tense one step back (show → showed, are → was). For a yes/no question, start with whether or if, then subject + verb.' },
  },
  {
    id: 'abraham-b2-language-review-6-certainty-and-scope', type: 'multiple-choice', title: 'Build: Keep the Writer’s Certainty',
    instructions: 'Choose the summary that keeps how sure the writer is and how many people are meant.',
    question: 'Chapter 4: “Historically, Abraham (pbuh) is believed to have lived in the 20th century BC.” Chapter 24: “Only one woman and one man of his people shared his belief in Allah.” Which summary is the most faithful?',
    options: [
      'It has been proven that Abraham lived in the 20th century BC; only two of his people, a woman and a man, shared his belief.',
      'Abraham is believed to have lived in the 20th century BC; after the fire, many of his people shared his belief.',
      'Abraham is believed to have lived in the 20th century BC; only two of his people, a woman and a man, shared his belief.',
      'Abraham is believed to have lived in the 20th century BC; in the end, not a single person shared his belief.',
    ],
    correctAnswer: 2,
    explanation: '“is believed to have lived” keeps a distance: it reports a belief about a date, so ‘It has been proven’ overstates it. “Only one woman and one man” gives an exact scope: ‘many’ inflates it, and ‘not a single person’ erases the two believers. A good B2 summary changes the words but keeps the strength of the claim and its scope.',
    feedback: { correct: 'Correct. The summary keeps both the certainty and the size of each group.', incorrect: 'Check two things: does the summary make the date more certain than the book does, and does it keep many … but some …?' },
  },
  {
    id: 'abraham-b2-language-review-7-link-limit-collocate', type: 'word-bank', title: 'Build: Link, Limit and Collocate',
    instructions: 'Complete the lines from the book with words from the bank. Two words are not needed.',
    question: 'Which word fits each gap?',
    fillBlanksText: '… he was determined to [blank] to these practices … Allah also will cause them to die and bring them back to life again. [blank], idolaters would not give up but held on tightly to their idols. … Sarah thought she could not have a child. [blank], she suggested Abraham (pbuh) get married to Hagar. … He built a place of worship for all people, [blank] people of a chosen race or color.',
    wordBank: ['put an end', 'However', 'Therefore', 'not just', 'give an end', 'Although'],
    correctAnswer: ['put an end', 'However', 'Therefore', 'not just'],
    explanation: 'Put an end to + noun is a fixed collocation meaning ‘stop something completely’; give an end is not English. However turns to something unexpected: Allah’s power is described, yet the idolaters still refused to give up. Therefore gives a result: Sarah believed she could not have a child, so she made her suggestion. Not just widens the scope: the place is for everyone, not only for one group. Although needs a full clause after it (Although she thought …, she …), so it cannot stand alone before a comma.',
    feedback: { correct: 'Well done. You chose the collocation, the contrast, the result and the scope marker.', incorrect: 'For each gap, ask: is it part of a fixed phrase, a surprise, a result, or a wider group? Check Chapters 14, 17, 25 and 35.' },
  },
  // USE — take the language into new contexts from the learners' world.
  {
    id: 'abraham-b2-language-review-8-new-context', type: 'choose-form', title: 'Use: Our Town’s Old Fountain',
    instructions: 'This new text is from a school newspaper report. Choose the form that fits each sentence.',
    question: 'Can you use the book’s language in a new text?',
    formChoices: [
      { sentence: 'According to a sign in the town museum, the old fountain in the square [choice] in 1890.', options: ['built', 'was built', 'had built'], answer: 1 },
      { sentence: 'Some older residents [choice] that its water once came from a spring in the hills, but no written record confirms this.', options: ['believe', 'prove', 'have shown'], answer: 0 },
      { sentence: 'Last year the council was going to close the fountain because of repair costs; [choice], our class collected signatures, and it is still open today.', options: ['therefore', 'however', 'in spite of'], answer: 1 },
    ],
    correctAnswer: null,
    explanation: 'A fountain does not build itself, so the passive is needed: was built. The source is named at the start (According to a sign …). Believe keeps the claim as a belief; prove or have shown would contradict the next words: no written record confirms this. Was going to close is a plan seen from the past, and however shows that the plan did not happen. In spite of needs a noun after it, not a comma and a clause.',
    feedback: { correct: 'Well done. You used the book’s language in a new report.', incorrect: 'For each sentence, ask: who did the action? How sure can we be? Does the next part give a result or something unexpected?' },
  },
  {
    id: 'abraham-b2-language-review-9-new-context', type: 'transformation', title: 'Use: Say It More Carefully',
    instructions: 'These sentences are not from the book. Make each one less certain, or report it as a belief.',
    question: 'Can you report a belief and soften a claim that is too strong?',
    transformItems: [
      { source: 'People believe that the Romans built the old bridge.', frame: 'The old bridge [blank] by the Romans.', answers: ['is believed to have been built'] },
      { source: 'The survey proves that students want a longer break.', frame: 'The survey [blank] that students want a longer break.', answers: ['suggests', 'indicates', 'seems to show', 'appears to show', 'may show', 'might show'] },
      { source: 'The new timetable will reduce lateness.', frame: 'The new timetable [blank] lateness.', answers: ['may reduce', 'might reduce', 'could reduce', 'is likely to reduce', 'will probably reduce'] },
    ],
    correctAnswer: null,
    explanation: 'Is believed to have been built reports a belief about a past event: believed + to have + past participle, here in the passive. Suggests or indicates presents a survey as evidence without calling it proof. May, might or could turn a certain prediction into a possibility. The book makes the same moves: “is believed to have lived” and “Some sources suggest that he lived between 2200–2000 BC.”',
    feedback: { correct: 'Well done. Your sentences report and qualify the claims carefully.', incorrect: 'Use is believed to have been + past participle for the belief, a verb like suggests for the survey, and may/might/could for the prediction.' },
  },
  {
    id: 'abraham-b2-language-review-10-transfer', type: 'reflection', title: 'Use: Argue a School Decision',
    instructions: 'Write 6–8 sentences about a decision in your school or town. Plan with a partner first.',
    question: 'Can you argue for your view carefully?',
    correctAnswer: null,
    explanation: 'Example: “In my view, our school should keep the library open at lunchtime. According to a class survey, about sixty students use it every week. Before this year, the library had already become a quiet place for homework. Last spring the school was going to close it at lunch because of staff costs; however, some parents offered to help as volunteers. The survey suggests that students value a quiet space, although it may not show what every student thinks. Therefore, the library should stay open at lunch, not just for readers but for anyone who needs to study.”',
    feedback: { correct: 'Check your paragraph: a position (In my view …), a source (According to …), background (had + past participle, was going to), a contrast (however, although), a careful claim (suggests, may), a result (Therefore) and a scope marker (not just).', incorrect: '' },
    discussionPrompts: [
      { question: 'Step 1 — Give your view and a source: “In my view, … . According to …, …”', mode: 'Individual' },
      { question: 'Step 2 — Give the background: “Before …, … had already …” or “… was going to …; however, …”', mode: 'Individual' },
      { question: 'Step 3 — Give evidence carefully: “The survey suggests that …, although it may not …”', mode: 'Pair' },
      { question: 'Step 4 — Conclude: “Therefore, …, not just … but …”', mode: 'Pair' },
    ],
  },
];
const englishFinalChallenge:Exercise[]=abrahamB2FinalChallengeExercises;
// t01b
// t02a
const STORY_IDS=new Set(Array.from({length:35},(_,index)=>index+1));
const englishLanguageFocus:Record<number,Exercise[]>={...abrahamB2LanguageFocusPart1,...abrahamB2LanguageFocusPart2,...abrahamB2LanguageFocusPart3};
const imageTokens=['43d9ebc7-48bf-4186-b63b-67bc0e802ccb','76b855a8-e11a-4cb0-b253-66dd9fbdaa49','f4afdb01-ccbe-4c95-9d16-69c26e703deb','7ba07b75-fcfb-4638-aba5-6f39c7926a48','57f04b55-8f74-40a7-be8c-3cb930c389a5','1bd63548-b8cf-4771-bce4-e6257f83edb7','2747cb7b-e6dd-4f64-a0f7-e229fb1f4998','b0ebd110-9850-4988-a3cb-eb3a9974269a','fca90286-8c0e-4b54-873d-e690f315f907','813a7fab-1e6f-4972-b23e-9e26fd9dec92','31c4c791-2a72-46a1-b54c-a10fe39472db','66045d4f-213c-4096-8776-df44861d0ea5','66892559-503c-4a8f-a4ab-2192bbe5851c','a806d7bc-e4ff-41b0-bc59-5192dce9440f','adb653da-0511-40dc-9db5-02c362fb3b20','e290f82a-46e4-4fd5-ad84-aa98df6f87cf','f3799f77-fe5d-4f3d-8f93-e90c9b1ef428','014cbefa-f28e-4915-a830-0256099d9a24','8a010ead-3641-4729-b9ee-aefcbed2be7b','46806189-2bf4-4bf7-b1c7-a8d934b2c191','bddaf258-5e76-44c4-a78a-36db4249d291','5b890972-155f-4ceb-a5ad-0027cc3524d4','3e850ea7-1b41-4439-bfb9-8c7fa2b4ed25','e809ade7-76af-453c-b299-cd151511e886','9cc99be9-686a-4898-bfec-1b3dd6ecf95b','13a18e7a-ab1f-4ce3-8d62-38b0a724aead','68966648-2077-4abf-80dd-d62eee99796e','35ed5958-0500-41a6-a170-e549c4a069f5','9d7364c7-1103-4862-af19-814cdf3a8384','1f01566b-ffc3-4fc0-be30-a13c92a9365e','258e6e7d-cfec-4f9a-af48-0a3ec52237f3','8e36da5a-2c1c-4086-9649-e34ed6586a30','e2eb0e82-eb65-45a2-b9fb-98c88bf7450e','48f70835-c4b4-4c22-ba7d-b7326278970e','580c305e-c318-42f7-aae9-ec2f6b8d306b'] as const;
export const abrahamB2ImageUrl=(chapter:number)=>`https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Fimages%2Fabraham_b2_ch${chapter}-clean.png?alt=media&token=${imageTokens[chapter-1]}`;
const cleanEnglishPage=(page:PageData):PageData=>{const{exercises:_exercises,vocabularyPairs:_vocabularyPairs,...base}=page;if(page.id===36)return{...base,type:'quiz',title:'Knowledge Check',content:'Check your understanding of the complete Prophet Abraham B2 story.',image:'',audioUrl:'',vocabulary:undefined,hotspots:undefined,animatedWords:undefined,syncPoints:undefined,timedChunks:undefined};if(page.id===37)return{...base,type:'exercises',title:'Language Review',content:'Review and use the source, stance, time, cohesion and discourse patterns developed across the complete story.',image:''};if(page.id===38)return{...base,type:'vocabulary-match',title:'B2 Vocabulary Challenge',content:'Match ten meaning-bearing story terms with their precise meanings.',image:'',vocabulary:undefined,animatedWords:undefined};if(page.id===39)return{...base,type:'glossary',title:'Master Glossary',content:'Review all key vocabulary from the story in one place.',image:''};if(page.id===40)return{...base,type:'final-challenge',title:'Final Challenge',content:'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.',image:''};return base;};
const abrahamB2GlossaryCategoryByChapter: Record<number,string> = {
  1:'Belief & Theology',2:'Belief & Theology',3:'Belief & History',4:'History & Society',5:'History & Mission',
  6:'Character & Early Life',7:'Belief & Critical Thinking',8:'Reasoning & Faith',9:'Reasoning & Evidence',10:'Reasoning & Evidence',
  11:'Argument & Evidence',12:'Family & Belief',13:'Family & Moral Reasoning',14:'Reasoning & Persuasion',15:'Belief & Evidence',
  16:'Creation & Guidance',17:'Belief & Tradition',18:'Evidence & Action',19:'Public Debate & Evidence',20:'Power & Conflict',
  21:'Trial & Faith',22:'Miracle & Faith',23:'Power & Debate',24:'Argument & Political Power',25:'Migration & Family',
  26:'Family & Legacy',27:'Trust & Migration',28:'Mecca & Sacred Geography',29:'Hagar & Pilgrimage',30:'Zamzam & Settlement',
  31:'Sacrifice & Family',32:'Submission & Mercy',33:'Sacrifice & Religious Practice',34:'Ka’ba & Construction',35:'Legacy & Monotheism',
};
const standardizeEnglishStory=(page:PageData):PageData=>STORY_IDS.has(page.id)?{...page,image:abrahamB2ImageUrl(page.id),...abrahamB2StoryNotes[page.id],animatedWords:undefined,syncPoints:undefined,timedChunks:undefined}:page;
const standardizedEnglishPages=rawAbrahamB2Pages.map(cleanEnglishPage).map(standardizeEnglishStory);
// The Master Glossary lists every Word Note with its chapter and the story sentence it comes from.
const storySentences=(content:string):string[]=>content
  .split(/\n+/)
  .flatMap(paragraph=>paragraph.trim().split(/(?<=[.!?][”"’]?)\s+/))
  .map(sentence=>sentence.trim())
  .filter(Boolean);
const englishGlossary:NonNullable<PageData['vocabulary']>=standardizedEnglishPages
  .filter(page=>STORY_IDS.has(page.id))
  .flatMap(page=>(page.vocabulary??[]).map(item=>{
    const storyExample=storySentences(page.content??'').find(sentence=>highlightPhraseOccurs(sentence,item.word,'en'));
    if(!storyExample)throw new Error(`[Abraham B2 EN] Missing source example for ${item.word} in chapter ${page.id}.`);
    return{
      ...item,
      level:'B2' as const,
      chapter:page.id,
      chapterTitle:page.title,
      storyExample,
      category:abrahamB2GlossaryCategoryByChapter[page.id]??'Story Vocabulary',
    };
  }));
export const abrahamB2Pages:PageData[]=standardizedEnglishPages.map(page=>{if(STORY_IDS.has(page.id)){const languageFocusExercises=englishLanguageFocus[page.id];return{...page,exercises:[abrahamB2QuickChallenges[page.id]],...(languageFocusExercises?{languageFocusExercises}:{})};}if(page.id===36)return{...page,exercises:abrahamB2KnowledgeCheckExercises};if(page.id===37)return{...page,title:'Language Review',content:'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.',exercises:abrahamB2LanguageReviewExercises};if(page.id===38)return{...page,vocabularyPairs:abrahamB2VocabularyChallengePairs};if(page.id===39)return{...page,vocabulary:englishGlossary};if(page.id===40)return{...page,exercises:englishFinalChallenge};return page;});
export const pages:PageData[]=abrahamB2Pages;
// t02b
// t03a
//__T03__
// t03b