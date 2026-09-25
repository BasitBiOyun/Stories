import type { Exercise, PageData } from '../../../../types';
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
    title: 'Prophet Abraham and Tawheed',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=dd864d33-97bb-47a7-a10e-8c0a68d0ffb7',
    content: `KEY WORDS: Hanifism (Haniflik, Path of Prophet Abraham (pbuh)); monotheism (Oneness and Unity of Allah); Tawheed (La ilaha illa Allah: There is no god but Allah); idol worship, idolatry (paganism, putperestlik); idolater (pagan, putperest).

In the Holy Qur’an, Prophet Abraham (pbuh) is presented as the messenger and representative of the monotheistic belief. Monotheistic belief means that I bear witness that there is no god but Allah. He has no partner, rival, or helper. Allah is unique in every way. Abraham (pbuh) is also a fundamental figure in the three great monotheistic religions (Judaism, Christianity, and Islam). The fourteenth surah of the Qur’an is named Surah Ibrahim. Abraham (pbuh) is the father of two prophets: Prophet Ishmael (İsmâil) (pbuh) and Prophet Isaac (İshak) (pbuh). Prophet Ishmael (pbuh) is the direct forefather of Prophet Muhammad (pbuh). Prophet Isaac (pbuh) is the father of Prophet Jacob (Yakûb) (pbuh). Prophet Jacob is the father of Joseph (Yûsuf) (pbuh) and an ancestor of Moses (Mûsâ) (pbuh), Aaron (Hârûn) (pbuh), Jonah (Yûnus) (pbuh), and Jesus (İsâ) (pbuh). Abraham (pbuh) was also given the unique name of “Allah’s friend” (halîlullah; see Surah Nisa: 125). This title was not given to any other prophet before. The Qur’an presents in detail his discovery of the oneness of Allah (Tawheed) in the middle of an idol-worshipping nation.`,
  },
  {
    id: 2,
    type: 'story',
    title: 'Abraham as Allah’s Friend',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F01_Chapter_2_Abraham_as_Allah%E2%80%99s_Friend.mp3?alt=media&token=0303777a-0c94-4898-ad1c-ce260e331d8e',
    content: `He challenged the idol worship of his time and taught people to believe in Allah alone. His life mission was to spread the message of Tawheed—the belief that Allah is One and He has no partners. During his struggle, he had very difficult tests and he passed the tests with his full trust in Allah.

In the Holy Qur’an, Abraham (pbuh) is often described as a hanîf; a hanîf is a monotheist who is not a Jew, a Christian, or an idolater (see Surah Âl-i İmrân: 67) and is also morally upright. Hanifism is the belief in the oneness of Allah taught by Prophet Abraham (pbuh). We may say that it is the former version of Islam. Human beings are capable of discovering Hanifism; that is, the existence of Allah can be found through reasoning. Actually, all prophets taught this religion. As human conditions and capacities changed over time, some changes in details became necessary. So, the difference between the monotheism taught by Abraham (pbuh) and the Islam taught by Muhammad is only in the acts of worship.`,
  },
  {
    id: 3,
    type: 'story',
    title: 'Hanifism and the One True Faith',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F02_Chapter_3_Hanifism_and_the_One_True_Faith.mp3?alt=media&token=171a95ce-498c-4cc6-a993-ac54abe5964e',
    content: `In fact, Judaism, Christianity, and Islam are all based on the religion of Abraham (pbuh). At the beginning of Prophet Muhammad's mission, there was a group in the Hijaz who called themselves hanîfs. They stayed away from idolatry and its practices. However, later on, this belief became mixed with idolatry and, like Judaism and Christianity, it was corrupted. One of the last hanîfs we can mention is Varaka b. Nevfel, the cousin of Muhammad's wife Khadija. He went to Damascus in search of Hanifism and accepted Christianity, which was the least corrupted religion at that time. When the first revelation (vahiy) came to Muhammad (pbuh), Varaka b. Nevfel welcomed his prophethood. One day, while he was in the desert, Varaka saw Bilal al-Habashi lying under the burning sun, punished by his master. At that moment, Bilal was saying, “Ahad, Ahad,” meaning “One, One.” Hearing his words, Varaka replied, “I swear, O Bilal, One, One.”

As the last faith, Islam includes not only what Allah told Abraham (pbuh), but also what Allah told Noah (pbuh), Moses (pbuh), Jesus (pbuh), and all the other prophets (see Surah Baqarah: 285).`,
  },
// c01b

// c02a
  {
    id: 4,
    type: 'story',
    title: 'Hanifism Before Islam',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F03_Chapter_4_Hanifism_Before_Islam.mp3?alt=media&token=d08f7bf4-23c7-4b83-a80d-221e96f8676c',
    content: `In the Holy Qur’an, the name of Abraham (pbuh)’s father is Azer. He is described as an idol worshipper (see Surah En'âm: 74). Azer is presented in Islamic sources as Nimrod's idol maker. There are different ideas about the birthplace of Abraham (pbuh). Some sources say that he was born in the land of Sumer, Mesopotamia, and migrated from there to Harran. Most generally speaking, we can say that Abraham was born in the city of Ur or Babylon, the country of King Nimrod. Historically, Abraham (pbuh) is believed to have lived in the 20th century BC. Some sources suggest that he lived between 2200–2000 BC. During the time of Abraham (pbuh), the Sumerian/Mesopotamian country was prosperous in many aspects, such as agriculture and industry. Abraham (pbuh)'s message of monotheism was a belief that had existed in these lands before, but it had been forgotten over time. In the time of Abraham (pbuh), Allah was believed to be in the heavens.

People worshipped the planets, stars, sun, and moon; some people worshipped idols of stone and wood; still others worshipped their kings and rulers.`,
  },
  {
    id: 5,
    type: 'story',
    title: 'The Birthplace and Mission of Abraham',
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
    content: `Abraham (pbuh) came to know Allah when he was young in age. Allah cleared up Abraham (pbuh)’s heart and mind and gave him wisdom from childhood. Allah said: “And We had certainly given Abraham his sound judgement before, and We were of him well-Knowing” (as to his belief in the Oneness of Allah etc.) (Surah Enbiyâ: 51). During his early childhood, Abraham (pbuh) realized that his father made strange statues, sculptures. One day, he asked his father about what he made. His father replied that he made statues of gods. Abraham (pbuh) was astonished and he spontaneously rejected the idea. Being a child, he played with the statues, sitting on their backs as people sit on the backs of donkeys. One day, his father saw him riding the statue of Mardukh (the Chief God of Babylon) and he became furious. He ordered his son not to play with it again. Abraham (pbuh) asked: “What is this statue, father?

It has big ears, bigger than ours.” His father answered: “It is Mardukh, the god of gods, son!”`,
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

One night, Abraham (pbuh) left his house to go to a mountain. He walked by himself through the darkness until he found a cave in the mountain, where he sat down to rest. He looked at the sky and saw the planets and stars which were worshipped by some people on earth. The Holy Qur’an told this incident in Surah En’âm, verses (âyet) 75–79: “Thus, We showed Abraham the empire of the heavens and the earth, that he might be one of those with certainty. When the night fell over him, he saw a planet. He said, ‘This is my lord.’ But when it set, he said, ‘I do not love those that set.’” Abraham (pbuh) saw that the stars couldn't show up when they wanted to because they could only do so at night.`,
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

They began arguing and threatening Abraham (pbuh). “And his people argued with him.`,
  },
  {
    id: 11,
    type: 'story',
    title: 'Arguing for Tawheed',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F10_Chapter_11_Arguing_for_Tawheed.mp3?alt=media&token=b9953447-ffeb-49fb-9009-c991b3e4ffb7',
    content: `He said, ‘Do you argue with me about Allah, when He has guided me? I do not fear partners you assign to Him, unless my Lord wills it. My Lord comprehends all things in knowledge. Will you not reconsider? And why should I fear the partners you give to Him, and you do not fear worshipping others alongside Allah for which He sent down to you no authority? So which of the two parties has more right to security, if you are aware?’ They who believe, and do not mix their belief with injustice—those will have security, and they are (rightly) guided. That was Our argument which We gave to Abraham against his people.” (Surah En'âm: 80–83). His people attempted to argue with him and present evidence to prove the correctness of their beliefs. That these arguments are not told in the verses shows the ridiculousness of their claims. It is understood from Abraham (pbuh)'s statement, “I do not fear partners you worship alongside Allah,” that his people threatened him with the punishment of their gods.`,
  },
  {
    id: 12,
    type: 'story',
    title: 'Speaking to His Father',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F11_Chapter_12_Speaking_to_His_Father.mp3?alt=media&token=d0f15e47-a55b-4e88-a837-3a0770997c18',
    content: `Prophet Abraham (pbuh) paid no heed to this threat. As a true believer, he expressed his fear of Allah. In doing so, he declared his belief that both benefit and harm come from Allah. Abraham (pbuh) did his best to make his people mindful of the oneness of Allah and the need to worship Him alone. He told them to firmly reject the worship of idols. He said to his father and his people in Surah Enbiyâ, verses 52–56: “When he said to his father and his people, ‘What are these statues to which you are faithful?’ They said, ‘We found our parents worshiping them.’ He said, ‘You and your parents are in evident error.’ They said, ‘Are you telling us the truth, or are you just playing?’ He said, ‘Your Lord is the Lord of the heavens and the earth, the One who created them, and I bear witness to that.’”

A bitter struggle began between Abraham (pbuh) and his people. The most amazed and furious was his father, for he not only worshipped idols but shaped and sold them as well.`,
  },
// c04b

// c05a
  {
    id: 13,
    type: 'story',
    title: 'Debating the Idolaters',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F12_Chapter_13_Debating_the_Idolaters.mp3?alt=media&token=49e3bd81-8558-4803-a119-d779ee1504d7',
    content: `Abraham (pbuh) felt that it was his duty as a good son to advise his father against this evil so that his father could be saved from Allah's punishment. He was a wise son, so he did not make his father feel embarrassed, or make fun of his job. He told him that he loved him; in that way, he hoped to increase fatherly love. Then he kindly asked him why he worshipped lifeless statues who could not hear, see, or protect him. Before his father got angry, he quickly added an explanation, as recorded in Surah Maryam, verses 42–48: “He (Abraham) said to his father, ‘O my father, why do you worship what can neither hear, nor see, nor benefit you in any way? O my father, there has come to me knowledge that never came to you. So follow me, and I will guide you along a straight way.

O my father, do not worship Satan. Satan is disobedient to the Most Beneficent (Allah). O my father, I fear that a punishment from the Most Beneficent (Allah) will afflict you, and you become a friend of Satan.’ He (his father) said, ‘Are you rejecting my gods, O Abraham?`,
  },
  {
    id: 14,
    type: 'story',
    title: 'Calling People to Reconsider',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F13_Chapter_14_Calling_People_to_Reconsider.mp3?alt=media&token=ca625f7c-f2ba-44c4-ac96-28790a4fdacf',
    content: `If you do not stop this, I will stone you. So leave me alone for a while before I punish you.’ Abraham said, ‘Peace be upon you. I will ask my Lord to forgive you; He has been Kind to me. And I will turn away from you, and from what you pray to instead of Allah. And I will pray to my Lord, and I hope I will not be disappointed in my prayer to my Lord.’” Abraham (pbuh) kindly spoke to his father with clear logic and sense. His father's harsh behavior towards Abraham (pbuh) did not stop him from carrying the message of truth. He was angry and sad to see people bow down before idols; he was determined to put an end to these practices and went to the town to debate with the people. In fact, he knew well that he might face negative consequences. Just as a wise doctor looks for the cause of an illness to find the right cure, or a clever judge questions a suspect to uncover the truth, Abraham (pbuh) questioned them to reveal the reality of their situation.`,
  },
  {
    id: 15,
    type: 'story',
    title: 'Breaking the Idols',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F14_Chapter_15_Breaking_the_Idols.mp3?alt=media&token=be5a070b-45e9-4408-bddd-1929f6023e6e',
    content: `“Do the idols see you when you bow down before them? Do they benefit you in any way?” They quickly tried to defend their beliefs. They argued that they knew the idols were lifeless but that their forefathers had worshipped them; to them, this confirmed their belief. Abraham (pbuh) explained that their forefathers had been wrong. This angered them and they responded: “Are you criticizing our gods and our forefathers? Or are you just joking?” Abraham (pbuh) showed no fear as he replied: “I am serious. I come to you with a true religion. I have been sent with guidance from our Lord Who alone is worthy of worship, Who is the Creator of the heavens and the earth, and Who regulates all affairs of life, unlike the dumb idols which are just stone and wood.” To persuade them that the idols could not harm him, he challenged: “I have already criticized them; see if they have any power to harm me by now!”

Abraham (pbuh) did not give up arguing with the idolaters.`,
  },
  {
    id: 16,
    type: 'story',
    title: 'The Broken Temple',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F15_Chapter_16_The_Broken_Temple.mp3?alt=media&token=3ebcb16d-df42-4d8b-88ca-ef8c847804d4',
    content: `Allah said in Surah Şuarâ, verses 69–82: “And describe to them the story of Abraham. When he said to his father and his people, ‘What do you worship?’ They said, ‘We worship idols, and we remain faithful to them.’ He said, ‘Do they hear you when you pray? Or do they benefit you, or harm you?’ They said, ‘But we found our ancestors doing so.’ He said, ‘Have you considered what you worship— You and your ancient ancestors? They are enemies to me, but not so the Lord of the Worlds. He who created me, and guides me. He who feeds me, and waters me. And when I get sick, He heals me. He who makes me die, and then revives me. He who, I hope, will forgive my sins on the Day of Resurrection?’” He explained to them the beauty of Allah's creation, His power, and His wisdom. Idol worship is hated by Allah, as Allah is the Lord of the universe Who created mankind, offers guidance, provides human beings with food and drink and heals the sick.`,
  },
// c05b

// c06a
  {
    id: 17,
    type: 'story',
    title: 'Questioned Before the People',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F16_Chapter_17_Questioned_Before_the_People.mp3?alt=media&token=bfbc27f2-54a1-4bcd-b331-f81774155d0a',
    content: `Allah also will cause them to die and bring them back to life again. However, idolaters would not give up but held on tightly to their idols. Abraham (pbuh) left his father's house and distanced himself from his people and what they worshipped. Actually, he decided to do something shocking to show their error. He knew that there was going to be a great celebration outside the town. All the people would attend it. Abraham (pbuh) waited until the city was empty, then cautiously made his way to the temple. The streets leading to it and the temple itself were empty. The priests had also gone to the festival outside the city. Abraham (pbuh) went there with a sharp axe. He looked at the stone and wood statues of the gods and at the food put in front of them as offerings. He approached one of the statues and asked: “The food in front of you is getting cold.

Why don't you eat?” The statue kept silent and rigid.`,
  },
  {
    id: 18,
    type: 'story',
    title: 'The Decision to Burn Abraham',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F17_Chapter_18_The_Decision_to_Burn_Abraham.mp3?alt=media&token=0ae53990-9b95-450d-a818-ad940a9f4d58',
    content: `Abraham (pbuh) asked all the other statues around him: “Will you not eat of the offering before you?” (Surah Sâffât: 91). He was mocking them, for he knew they would not eat. He once again asked them: “What is the matter with you that you do not speak?” (Surah Sâffât: 92). He then raised his axe and started smashing the false gods worshipped by the people. He destroyed them all except one. On its neck, he hung the axe. He left the temple. He had fulfilled his duty to show his people a practical proof of their foolishness in worshipping something other than Allah. When the people returned, they were shocked to see their gods smashed into pieces, spread all over the temple. They tried to find out who had done that to their idols and Abraham (pbuh)'s name came to their minds. Allah said in Surah Enbiyâ, verses 59–67: “They said, ‘Who did this to our gods? He is certainly one of the wrongdoers.’ They said, ‘We heard a youth mentioning them.`,
  },
  {
    id: 19,
    type: 'story',
    title: 'Thrown into the Fire',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F18_Chapter_19_Thrown_into_the_Fire.mp3?alt=media&token=d5a3e204-3a26-4084-a741-ede788f383a3',
    content: `He is called Abraham.’ They said, ‘Bring him before the eyes of the people, so that they may witness.’ They said, ‘Are you the one who did this to our gods, O Abraham?’ He said, ‘But it was this biggest of them that did it. Ask them if they can speak.’ Then they turned to one another and said, ‘You yourselves are the wrongdoers.’ But they reverted to their old ideas: ‘You certainly know that these do not speak.’ He said, ‘Do you worship, instead of Allah, what can neither benefit you in anything, nor harm you? Shame on you, and on what you worship instead of Allah. Do you not understand?’” They furiously demanded that Abraham (pbuh) be arrested and judged. Abraham (pbuh) did not resist. This was exactly what he was aiming for, so that he could demonstrate to them in public that their beliefs were foolish. At the trial, they asked him if he was responsible for breaking the idols.

Smiling, he told them to ask the biggest idol which was still undamaged.`,
  },
  {
    id: 20,
    type: 'story',
    title: 'The Faith of the Believers',
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
    content: `The fire was ready, with its flames reaching the sky. The people stood away from the pit because of the great heat. Then, the chief priest gave his order to throw Abraham (pbuh) into the fire. The angel Gabriel came near Abraham (pbuh) and asked him: “O Abraham, do you wish for anything?” Abraham (pbuh) replied: “Nothing from you.” The catapult was fired, and Abraham (pbuh) was thrown into the fire. But his fall into the fire was like going down into a cool garden. The rising flames were still there, but they did not burn him, for Allah commanded: “O fire! Be coolness and safety for Abraham” (Surah Enbiyâ: 69). The fire obeyed the order of Allah. It became cool and safe for Abraham (pbuh). It only burned his ropes, and he sat in the middle of the fire as if he were sitting in a garden. He thanked Allah, with a heart full of His love and trust in Him.

There was no fear or worry. The air became more pleasant as the fire was turned into coolness.`,
  },
  {
    id: 22,
    type: 'story',
    title: 'Stepping Out Unharmed',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F21_Chapter_22_Stepping_Out_Unharmed.mp3?alt=media&token=6bbfc84a-e819-49ad-b929-fcad95254024',
    content: `His trust in the true Allah was tested here. His last words before entering the flames were, “Allah is sufficient for me.” The large crowd, the leaders, and the priests were watching the fire from a distance. It was burning their faces and nearly made them breathless. The fire kept burning for such a long time that the disbelievers thought it would never be extinguished. Once the fire burnt out, they were shocked to see that Abraham (pbuh) stepped out of the pit completely unharmed. The smoke blackened their faces, yet his face was bright. The burning fire had become cool for Abraham (pbuh) and had only blackened the ropes which held him. He walked out of the fire as if he were walking out of a garden. Cries of astonishment were heard from the unbelievers. “They wanted to harm him, but We made them the worst losers” (Surah Enbiyâ: 70). This miracle shamed the despotic rulers, but the fire of their rage remained uncooled. Consequently, many people started following Abraham (pbuh), but some kept their faith secret out of fear of rulers.`,
  },
  {
    id: 23,
    type: 'story',
    title: 'Debating King Nimrod',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F22_Chapter_23_Debating_King_Nimrod.mp3?alt=media&token=996f2e97-b2fa-4d6a-b5d6-cb474a3dee8a',
    content: `Abraham (pbuh) challenged those who declared themselves as gods, like King Nimrod. When King Nimrod heard that Abraham (pbuh) had emerged from the fire unharmed, he was filled with rage. He thought that his claim to be a god could not be questioned by an ordinary person. He wanted to know him personally and held a dialogue with him. Still a young man, Abraham (pbuh) was put on trial and stood by himself before a king. Even his father was not on his side; he was on the king’s side. Allah tells us about this scene in Surah Baqarah, verse 258: “Have you not thought about him who disputed with Abraham about his Lord (Allah) because Allah had given him the kingdom?” Abraham (pbuh)’s logic was undeniable; he said to him: “My Lord (Allah) is He Who gives life and causes death.” He said: “I give life and cause death.”

The king called up two men sentenced to death. He freed one and the other was put to death.`,
  },
  {
    id: 24,
    type: 'story',
    title: 'Sarah, Hajar, and a New Trial',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F23_Chapter_24_Sarah%2C_Hajar%2C_and_a_New_Trial.mp3?alt=media&token=49060ebe-4cbd-437c-865e-3a9336a128cf',
    content: `This reply of the king was totally foolish, so Abraham (pbuh) put forth another challenge which would unquestionably and easily quiet him. Abraham (pbuh) said: “Verily, Allah causes the sun to rise from the east; then cause it to rise from the west.” He was utterly defeated. Allah does not guide the people who are Zalimeen (wrongdoers) (Surah Baqarah: 258). Abraham (pbuh)'s fame spread throughout the entire kingdom of Babylonia. People talked about how he was saved from the fire and how he debated with the king and left him unable to speak. In the meantime, Abraham (pbuh) continued calling people to believe in Allah and made a great effort to guide his people to the right path. He tried every means to persuade them. However, in spite of his love and care for his people, they left him alone. Only one woman and one man of his people shared his belief in Allah.

The woman's name was Sarah (Sâre) and she became his wife. The man's name was Lot (Lût) and he later became a prophet.`,
  },
// c07b

// c08a
  {
    id: 25,
    type: 'story',
    title: 'Sarah and Hajar',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F24_Chapter_25_Sarah_and_Hajar.mp3?alt=media&token=0e2106bf-baee-4089-957e-bf08c73f8146',
    content: `When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate. He left his people and traveled with his wife Sarah and Lot to Egypt. Allah told us: “So Lût believed in him (Abraham's message of Islamic Monotheism). He (Abraham) said, ‘I will emigrate for the sake of my Lord. Verily, He is the All Mighty, the All Wise.’” (Surah Ankebût: 26). After Egypt, Abraham (pbuh) traveled to Palestine and settled there. He called people to believe in Allah wherever he traveled, judged fairly between people, and guided them to truth and righteousness. Abraham (pbuh)'s wife Sarah was sterile. She had been given an Egyptian woman, Hajar, as a servant when they were in Egypt. Abraham (pbuh) had aged and his hair was gray after many years spent in calling people to Allah. Sarah thought she could not have a child. Therefore, she suggested Abraham (pbuh) get married to Hajar. Hajar gave birth to her first son, Ishmael, when Abraham (pbuh) was an old man.`,
  },
  {
    id: 26,
    type: 'story',
    title: 'Hajar’s Trust in the Desert',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F25_Chapter_26_Hajar%E2%80%99s_Trust_in_the_Desert.mp3?alt=media&token=fb5f22dc-235c-4535-ac20-2dd9ab13218f',
    content: `Some time later, Allah gave Abraham (pbuh) another son from his first wife, Sarah. The name of this second son was Isaac (İshak). Allah told Abraham (pbuh) that these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam. From Ishmael's descendants came Prophet Muhammad (pbuh), while from Isaac's came Moses (pbuh) and Jesus (pbuh). One day, Allah told Abraham (pbuh) that he should take Hajar and Ishmael to the Sacred City, Mecca. This was another test for Abraham (pbuh) while Ishmael was still a little child. It was part of Allah’s master plan. He informed Abraham (pbuh) that the sacred city would be built through Ishmael and that water would flow for him. In a few days, Abraham (pbuh) set out with his wife Hajar and their son Ishmael. Hajar was still nursing Ishmael and the child was still breastfeeding. Abraham (pbuh) walked through cultivated land, desert, and mountains until he reached the desert of the Arabian Peninsula and came to an uncultivated valley near two small hills called Safa and Marwa.`,
  },
  {
    id: 27,
    type: 'story',
    title: 'Hajar and Ishmael Search for Water',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F26_Chapter_27_Hajar_and_Ishmael_Search_for_Water.mp3?alt=media&token=d14daae7-e2e0-455c-bda1-66ab2239854c',
    content: `The valley had no fruit, no trees, no food, no water, and no sign of life. Abraham (pbuh) left them with a skin of water and a leather bag full of dates (hurma). As Abraham (pbuh) began walking away, leaving them behind, Hajar became anxious as to what was happening. Abraham (pbuh) continued walking. Hajar asked him: “Has Allah commanded you to leave us here?” He replied: “Yes. I am leaving you to Allah’s care.” Feeling a degree of comfort in this answer, this great woman said: “I am satisfied to be with Allah! We are not going to be lost, since Allah is with us.” Hajar came to understand that Abraham (pbuh) was not acting on his own decision; Allah had commanded him to leave them. Abraham (pbuh) advanced as far as the upper parts of Mecca. He stopped in a place where they could not see him.

He turned his face towards the direction where the Ka‘ba stands today and raised his hands, praying as follows: “O Our Lord!`,
  },
  {
    id: 28,
    type: 'story',
    title: 'Zamzam Appears',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F27_Chapter_28_Zamzam_Appears.mp3?alt=media&token=baf68a2a-1d4c-4428-972b-f49b47c307b2',
    content: `I have made some of my offspring to dwell in a valley with no cultivation, by Your Sacred House (the Ka‘ba at Mecca); in order, O our Lord, that they may offer prayers perfectly (Iqamat as salat); so fill some hearts among men with love towards them, and O Allah provide them with fruits so that they may give thanks” (Surah Ibrâhim: 37). Abraham (pbuh) had to take Hajar and Ishmael away from Palestine to a new place. This was about the rebuilding of the temple, that is, the Ka‘ba. According to Allah’s intention, Hajar and Ishmael had to leave Palestine and settle in the barren valley of Mecca, near the place of the old temple, to reconstruct the Holy Ka‘ba which was lost after Noah’s Flood, making this place the renewed center of monotheism: Islam. Over the years, Ishmael’s children had children; one of them was Muhammad, the Prophet of Islam (pbuh).

They spread all over the Arabian Peninsula to carry their grandfather Abraham (pbuh)’s message of monotheism.`,
  },
  {
    id: 29,
    type: 'story',
    title: 'Mecca Is Settled',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F28_Chapter_29_Mecca_Is_Settled.mp3?alt=media&token=780ddf21-7c82-4189-9eb7-08eb04c16bbb',
    content: `Ibn Abbas, a companion of Prophet Muhammad (pbuh) who narrated many hadiths, said, “Ishmael's mother went on suckling Ishmael and drinking from the water. When the water in the water skin was used up, she became thirsty and her child also became thirsty. She started looking at Ishmael in grief. Hajar began searching for water. Leaving Ishmael under a tree, she began climbing the rocky slope of a nearby hill, Safa. ‘Maybe there is a caravan passing by,’ she thought to herself. Then, she moved across to the opposite hill, Marwa, but still saw nothing. She ran between the two hills of Safa and Marwa seven times looking for signs of water or help. Hagar’s patient search for water is directly comparable to the running (sa’y) between Safa and Marwah.” Her effort was later commemorated by Muslims during Hajj. Actually, there is almost no difference between the pilgrimage called by Abraham (pbuh) and the pilgrimage of Islam.

Exhausted and sad, she heard a voice but could not find where it came from.`,
  },
// c08b

// c09a
  {
    id: 30,
    type: 'story',
    title: 'Abraham and Ishmael',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F29_Chapter_30_Abraham_and_Ishmael.mp3?alt=media&token=be356476-581b-4c87-8f05-e0354e668b60',
    content: `Looking down into the valley, Hagar saw the angel Gabriel standing next to her son, Ishmael. The angel hit the ground with his heel, and water immediately flowed out. It was a miracle! Hajar quickly made a small basin around the water to stop it from spreading, and she filled her water skin. The angel said, “Do not be afraid. This is the place for the House of Allah, which this boy and his father will build. Allah never abandons his people.” This well, called Zamzam, is flowing to this day in the city of Mecca in the Arabian Peninsula. This name was given to the water because the word Zemzem means “abundant and flowing, the voice of Gabriel, the sound water makes as it flows, the sound of thunder, a sound whose origin is unknown.” Not long after that, the tribe of Jurham (Cürhüm) that was moving from southern Arabia, Yemen, stopped by the valley of Mecca. They had seen the unusual sight of a bird flying in its direction, which could only mean the presence of water.`,
  },
  {
    id: 31,
    type: 'story',
    title: 'The Dream of Sacrifice',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F30_Chapter_31_The_Dream_of_Sacrifice.mp3?alt=media&token=8dfa0f15-bcf1-4cdf-88ab-ce6ab2c10930',
    content: `They eventually settled in Mecca and Ishmael grew up among them. Ishmael learned Arabic from them and they all loved and admired Ishmael because of his gentle character. Growing up among the Jurham tribe, Ishmael married the daughter of one of their leaders. Abraham (pbuh) had a dream that he sacrificed his son, which was to be the ultimate test of his faith. In a dream, Abraham (pbuh) learnt that he must sacrifice his son. Joseph (pbuh) and Muhammad (pbuh), two of Abraham (pbuh)'s offspring, also had important dreams. “So We gave him the glad tidings of a forbearing boy. And when he (his son) was old enough to walk with him, he said: 'O my son! I have seen in a dream that I am slaughtering you (offer you in sacrifice to Allah), so look what do you think!' 'O my father! Do that which you are commanded InshAllah (if Allah wills), you shall find me of the patient” (Surah Sâffât: 101–102). Ishmael knew the task of his father.`,
  },
  {
    id: 32,
    type: 'story',
    title: 'Submission and Mercy',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F31_Chapter_32_Submission_and_Mercy.mp3?alt=media&token=0926084c-7ad8-4d28-9048-780687b18d8d',
    content: `The Allah-fearing son of a faithful father promised to obey Allah. Abraham (pbuh) took his son to the place where he was to be sacrificed and laid him. “And when they both obeyed Allah's command, and he (Abraham (pbuh)) laid him (Ishmael) face down upon his forehead (in order to be sacrificed)” (Surah Sâffât: 103). A voice stopped Abraham (pbuh) just as his knife was about to near Ishmael: “We called to him: O Abraham: You have indeed fulfilled the vision. Thus do We reward the good. That verily was a clear test” (Surah Sâffât: 104–106). Here, Abraham (pbuh) showed his willingness to sacrifice all his belongings for Allah. Because of this, Allah made him the leader of humanity and brought Messengers from his children. “And when Allah tested Abraham with various commands, and he proved true to each one. He (Allah) said, indeed I have made you a leader of humanity.

He (Abraham) said (asking of Allah), ‘and from my children” (Surah Baqarah: 124). It was only a test; the substitute was a ram or goat.`,
  },
  {
    id: 33,
    type: 'story',
    title: 'Building the Ka‘ba',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F32_Chapter_33_Building_the_Ka%E2%80%98ba.mp3?alt=media&token=64ffd38a-fbaf-4181-b4d2-c9685a826820',
    content: `Every year, hundreds of millions of Muslims perform this act of trust in Allah during the days of Hajj. This day is called "The Day of Sacrifice" or "The Celebration of Sacrifice. " At Abraham (pbuh)’s time, the practice of sacrificing the firstborn children was quite widespread in Arabia, Palestine, and Egypt. Actually, sacrificing animals was part of Abraham's religion of monotheism. In Abraham (pbuh)’s religion, animal sacrifice was equivalent to human life, and for the people of that era, it meant safety, especially for children. In fact, animal sacrifice is not a form of worship that began with Abraham (pbuh). Prophets before him also sacrificed animals, while idolaters sacrificed humans. Abraham (pbuh) returned to Palestine. After a separation of several years, the father and son came together again. At that time, Ishmael was about thirty years old. Father and son embraced each other again with longing. Both were crying with joy. This time, they were going to build the honored House of Allah, which is a center of worship and the direction people face while praying, and to make it the site of Islamic pilgrimage, Hajj.`,
  },
// c09b

// c10a
  {
    id: 34,
    type: 'story',
    title: 'The First Call to Pilgrimage',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F33_Chapter_34_The_First_Call_to_Pilgrimage.mp3?alt=media&token=0e5a8118-0498-4e50-a826-e6aaca1b8cc4',
    content: `Prophet Muhammad (pbuh) said: “Indeed this place has been made sacred by Allah since the day He created the heavens and the earth, and it will remain so until the Day of Judgment” (Sunan an-Nasa'i, 2874). Abraham (pbuh) said to Ishmael: “O Ishmael, Allah has commanded me to do an important task, and you will help me in this task.” Ishmael replied, “I will help you for sure.” Abraham (pbuh) said, “The Almighty Allah commanded me to build a house for Himself.” Father and son found the foundations of the old structure and began to build the Ka‘ba on it. When the building became high and the old man Abraham (pbuh) could no longer lift the stones to such a high position, he stood over the stone of Al-Maqam and Ishmael carried on handing him the stones, and both of them were saying: “O our Lord! Accept this service from us; verily You are the All Hearer, the All Knower” (Surah Baqarah: 127).

Abraham (pbuh) traveled to Mecca in response to Allah’s command to establish the sacred Kaba.`,
  },
  {
    id: 35,
    type: 'story',
    title: 'The Legacy of Abraham',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F34_Chapter_35_The_Legacy_of_Abraham.mp3?alt=media&token=a7065900-a5e2-4469-aa93-a4a284b627f5',
    content: `He was but the restorer of the structure that was originally built long before. No other place of worship is older than the Ka‘ba of Mecca. Reconstruction of the Ka‘ba and the call to pilgrimage (see Surah Hajj: 27) are clear evidence that Prophet Abraham (pbuh) established the religion and invited those living in that region at that time to embrace it. This belief is known as Hanifism. Reconstructing the Holy Kaba was the completion of Abraham (pbuh)’s mission. He built a place of worship for all people, not just people of a chosen race or color. This actually reminds us of the oneness of Allah. During Hajj Muslims are reminded of many events of Allah’s beloved “friend” Abraham (pbuh) and his family. Before his death, Abraham (pbuh) left Palestine to Isaac and Mecca to Ishmael, and sent his other children eastward. His son Ishmael taught his father Abraham (pbuh)'s faith in the Hijaz region, and in this region, his Hanif faith coexisted with idolatry.

The ‘Beloved servant of Allah’ about whom Allah said, “I will make you a leader to the nations,” returned to Palestine and died there. When people have lost their way and are looking for salvation, Abraham (pbuh) has always been there to show them the right path. This is especially true in societies where morals have worsened and the real path that Allah showed them has been corrupted.`,
  },
  {
    id: 36,
    type: 'quiz',
    title: 'B2 Knowledge Check',
    image: '',
    audioUrl: '',
    content: 'Check your understanding of the complete Prophet Abraham B2 story.',
  },
  {
    id: 37,
    type: 'exercises',
    title: 'B2 Language Review',
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

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
  1: [
    v('monotheistic belief', 'العقيدة التوحيدية', 'Belief that Allah is One and has no partner.', 'الإيمان بأن الله واحد لا شريك له.'),
    v('fundamental figure', 'الشخصية الأساسية', 'A person of central importance in a religious or historical tradition.', 'شخصية ذات أهمية محورية في تقليد ديني أو تاريخي.'),
    v('direct forefather', 'الجد المباشر', 'A direct ancestor in a family line.', 'جد يقع مباشرة في سلسلة النسب.'),
    v('Allah’s friend', 'خليل الله', 'A unique title of closeness and devotion given to Abraham.', 'لقب فريد يدل على القرب والمحبة والطاعة لله.'),
    v('idol-worshipping nation', 'يعبدون الأصنام', 'A society in which the worship of idols is widespread.', 'قوم تنتشر بينهم عبادة الأصنام.'),
  ],
  2: [
    v('life mission', 'مهمة حياته', 'The central purpose guiding a person’s life and actions.', 'الغاية الأساسية التي توجه حياة الإنسان وأعماله.'),
    v('morally upright', 'مستقيم في الأخلاق', 'Behaving according to sound moral principles.', 'ملتزم بالسلوك القويم والمبادئ الأخلاقية.'),
    v('through reasoning', 'عن طريق العقل والتفكير', 'By using logical thought to reach a conclusion.', 'باستخدام التفكير العقلي والمنطقي للوصول إلى نتيجة.'),
    v('human capacity', 'قدرات الإنسان', 'The ability of human beings to think, act, or develop.', 'قدرة الإنسان على التفكير والعمل والتطور.'),
    v('acts of worship', 'العبادات', 'Religious actions performed as devotion to Allah.', 'أعمال دينية يؤديها المؤمن تقربًا إلى الله.'),
  ],
  3: [
    v('became mixed with idolatry', 'اختلط هذا الاعتقاد بالشرك', 'Lost its original purity by becoming combined with idol worship.', 'فقد صفاءه الأصلي حين اختلط بالشرك وعبادة غير الله.'),
    v('corrupted', 'التحريف', 'Changed from an original form in a damaging or misleading way.', 'تغيير الشيء عن أصله بصورة تفسد معناه أو حقيقته.'),
    v('first revelation', 'الوحي الأول', 'The first divine message received by a prophet.', 'أول رسالة أو وحي إلهي يتلقاه النبي.'),
    v('prophethood', 'بنبوة', 'The status and mission of being a prophet.', 'مقام النبي ومهمته في تبليغ رسالة الله.'),
    v('burning sun', 'الشمس الحارقة', 'Extremely hot sunlight capable of causing suffering.', 'شمس شديدة الحرارة تسبب المشقة والألم.'),
  ],
  4: [
    v('Islamic sources', 'المصادر الإسلامية', 'Texts and reports used within the Islamic scholarly tradition.', 'نصوص وروايات يعتمد عليها التراث العلمي الإسلامي.'),
    v('migrated from there', 'هاجر من هناك', 'Moved from one region to settle in another.', 'انتقل من منطقة إلى أخرى للإقامة فيها.'),
    v('prosperous', 'مزدهرة', 'Economically or materially successful and flourishing.', 'ناجحة ومتقدمة من الناحية المادية والاقتصادية.'),
    v('agriculture and industry', 'الزراعة والصناعة', 'Two major areas of economic production.', 'مجالان أساسيان من مجالات الإنتاج الاقتصادي.'),
    v('kings and rulers', 'ملوكهم وحكامهم', 'People holding political authority over a society.', 'أشخاص يملكون السلطة السياسية على المجتمع.'),
  ],
  5: [
    v('whole system', 'النظام كله', 'The complete social or political structure, not one isolated part.', 'البنية الاجتماعية أو السياسية كاملة لا جزءًا منفردًا منها.'),
    v('fortunetellers', 'العرافين', 'People claiming to predict events through supernatural knowledge.', 'أشخاص يزعمون معرفة المستقبل بوسائل غيبية.'),
    v('astrologers', 'المنجمين', 'People who interpret stars as signs of human events.', 'أشخاص يربطون حركة النجوم بأحداث البشر.'),
    v('reign', 'حكم نمرود', 'The period or authority of a ruler’s government.', 'مدة حكم الملك أو سلطته على البلاد.'),
    v('throne', 'يهدد عرشه', 'A symbol of royal power and political rule.', 'رمز للسلطة الملكية والحكم السياسي.'),
  ],
  6: [
    v('sound judgement', 'رشده', 'The ability to make wise and reasonable decisions.', 'القدرة على اتخاذ قرارات حكيمة وصائبة.'),
    v('wisdom', 'الحكمة', 'Deep understanding used to make good judgments.', 'فهم عميق يساعد على حسن الحكم والتصرف.'),
    v('sculptures', 'تماثيل وأصناما', 'Figures shaped from material such as stone or wood.', 'أشكال مصنوعة من الحجر أو الخشب ونحوهما.'),
    v('spontaneously', 'تلقائيا', 'Naturally and without being planned in advance.', 'بصورة طبيعية ومن غير تخطيط مسبق.'),
    v('Chief God', 'الإله الأكبر', 'The deity regarded as highest within a polytheistic system.', 'الإله الذي يعد الأعلى في نظام متعدد الآلهة.'),
  ],
  7: [
    v('reasonable person', 'شخص عاقل', 'A person capable of logical and sensible judgment.', 'شخص قادر على التفكير المنطقي والحكم السليم.'),
    v('lifeless', 'بلا حياة', 'Having no life or living power.', 'خالي من الحياة ولا يملك قدرة الكائن الحي.'),
    v('entirely helpless', 'عاجزة تماما', 'Completely unable to act or defend oneself.', 'غير قادر إطلاقًا على الفعل أو الدفاع عن النفس.'),
    v('niche', 'محراب', 'A recessed or designated sacred space in a place of worship.', 'موضع مخصص أو مجوف داخل مكان العبادة.'),
    v('capable of hearing', 'قادرة على سماع دعائهم', 'Able to receive and respond to sound or prayer.', 'قادر على سماع الصوت أو الدعاء والاستجابة له.'),
  ],
  8: [
    v('priest', 'كاهنا', 'A religious official serving in a place of worship.', 'شخص يتولى وظيفة دينية في مكان للعبادة.'),
    v('displaying his hatred', 'إظهار كراهيته', 'Openly showing strong rejection or dislike.', 'إظهار الرفض أو الكراهية الشديدة بصورة واضحة.'),
    v('cave', 'كهفا', 'A natural hollow space inside a mountain or rock.', 'تجويف طبيعي داخل جبل أو صخر.'),
    v('certainty', 'الموقنين', 'A state of firm conviction without serious doubt.', 'حالة من اليقين الراسخ من غير شك مؤثر.'),
    v('those that set', 'الآفلين', 'Celestial objects that disappear below the horizon.', 'الأجرام التي تغيب وتختفي عن الأفق.'),
  ],
  9: [
    v('erring people', 'القوم الضالين', 'People who have moved away from the correct path.', 'قوم ابتعدوا عن الطريق أو الاعتقاد الصحيح.'),
    v('innocent', 'بريء', 'Free from responsibility for or association with something wrong.', 'منزّه عن المشاركة في أمر باطل أو المسؤولية عنه.'),
    v('heavenly bodies', 'الأجرام السماوية', 'Natural objects in space such as stars, planets, the sun, and the moon.', 'أجسام طبيعية في السماء كالنجوم والكواكب والشمس والقمر.'),
    v('astronomical objects', 'النجوم والكويكبات', 'Objects studied as part of the physical universe beyond Earth.', 'أجرام يدرسها علم الفلك خارج الأرض.'),
    v('Creator’s command', 'بأمر الخالق', 'The authority by which created things follow an ordered system.', 'الأمر الذي تخضع له المخلوقات في نظامها.'),
  ],
  10: [
    v('evidently created', 'مخلوقة بوضوح', 'Clearly showing the characteristics of something created rather than eternal.', 'تظهر بوضوح صفات المخلوق لا صفات الأزلي.'),
    v('everlasting', 'أزلي لا يزول', 'Continuing forever without ending or disappearing.', 'دائم لا ينتهي ولا يزول.'),
    v('unworthy of worship', 'غير مستحقة للعبادة', 'Not deserving religious devotion or worship.', 'لا تستحق أن تصرف لها العبادة.'),
    v('rational thinking', 'تفكير إبراهيم العقلي', 'Reasoning based on logic and evidence.', 'تفكير يعتمد على العقل والمنطق والدليل.'),
    v('uncover the truth', 'كشف الحقيقة', 'To reveal what is actually true after examination.', 'إظهار الحقيقة بعد البحث والنظر.'),
  ],
// k01b
// k02a
  11: [
    v('present evidence', 'تقديم الأدلة', 'To offer reasons or proof in support of a claim.', 'عرض حجج أو براهين لتأييد ادعاء.'),
    v('correctness of their beliefs', 'صحة معتقداتهم', 'The claimed truth or validity of what a group believes.', 'مدى صحة أو صدق ما يعتقده قوم.'),
    v('ridiculousness', 'سخافة ادعاءاتهم', 'The quality of being unreasonable or impossible to take seriously.', 'كون الادعاء غير معقول ولا يستند إلى حجة قوية.'),
    v('threatened him', 'هددوه', 'Warned someone of intended harm or punishment.', 'أنذروه بإيقاع الأذى أو العقوبة.'),
    v('punishment of their gods', 'عقاب آلهتهم', 'Harm they believed their deities could inflict.', 'الأذى الذي اعتقدوا أن آلهتهم تستطيع إيقاعه.'),
  ],
  12: [
    v('paid no heed', 'لم يلتفت', 'Ignored a warning or refused to give it attention.', 'لم يهتم بالتهديد ولم يجعله يغير موقفه.'),
    v('benefit and harm', 'النفع والضر', 'Positive and negative effects that may reach a person.', 'ما يصل إلى الإنسان من خير أو أذى.'),
    v('mindful', 'لتذكير قومه', 'Consciously aware of an important truth or duty.', 'واعٍ بحقيقة أو واجب مهم ومتذكر له.'),
    v('evident error', 'ضلال مبين', 'A mistake or false belief that is clearly visible.', 'خطأ أو اعتقاد باطل ظاهر بوضوح.'),
    v('bitter struggle', 'معركة حادة', 'A severe and continuing conflict between opposing sides.', 'صراع شديد ومستمر بين طرفين متعارضين.'),
  ],
  13: [
    v('duty', 'من واجبه', 'A moral responsibility a person believes must be fulfilled.', 'مسؤولية أخلاقية يرى الإنسان وجوب القيام بها.'),
    v('embarrassed', 'بالإحراج', 'Made to feel ashamed or socially uncomfortable.', 'شعر بالخجل أو الضيق أمام الآخرين.'),
    v('fatherly love', 'الحب الأبوي', 'Affection associated with the relationship between a father and child.', 'المحبة المرتبطة بعلاقة الأب بابنه.'),
    v('straight way', 'صراطا سويا', 'A correct and morally sound path.', 'طريق مستقيم صحيح من الناحية الدينية والأخلاقية.'),
    v('disobedient', 'عصيا', 'Refusing to obey rightful authority or command.', 'رافض للطاعة ومخالف للأمر.'),
  ],
  14: [
    v('harsh behavior', 'سلوك والده القاسي', 'Severe or unkind conduct toward another person.', 'تصرف شديد أو غير لين تجاه شخص آخر.'),
    v('negative consequences', 'عواقب سلبية', 'Harmful results that may follow an action.', 'نتائج ضارة قد تترتب على فعل ما.'),
    v('cause of an illness', 'سبب المرض', 'The underlying factor responsible for a disease or problem.', 'العامل الأساسي الذي يؤدي إلى مرض أو مشكلة.'),
    v('clever judge', 'القاضي الذكي', 'A judge who reasons carefully to uncover facts.', 'قاض يستخدم التفكير الدقيق لكشف الحقيقة.'),
    v('suspect', 'المشتبه به', 'A person believed possibly to be responsible for an act.', 'شخص يظن أنه قد يكون مسؤولًا عن فعل.'),
  ],
  15: [
    v('defend their beliefs', 'الدفاع عن معتقداتهم', 'To give arguments in support of what they believe.', 'تقديم حجج لتأييد ما يؤمنون به.'),
    v('confirmed their belief', 'يؤكد إيمانهم', 'Made an existing belief seem more certain to them.', 'جعل اعتقادهم القائم يبدو أكثر ثبوتًا لديهم.'),
    v('worthy of worship', 'يستحق العبادة', 'Deserving religious devotion and worship.', 'جدير بأن تصرف له العبادة.'),
    v('regulates all affairs', 'مدبر شؤون الحياة', 'Controls and orders the different matters of existence.', 'يدبر وينظم شؤون الحياة المختلفة.'),
    v('persuade', 'ولإقناعهم', 'To lead someone to accept an idea through reasons or evidence.', 'جعل شخص يقبل فكرة عن طريق الحجة والدليل.'),
  ],
  16: [
    v('beauty of Allah\'s creation', 'جمال خلق الله', 'The order and excellence seen in what Allah has created.', 'ما يظهر في خلق الله من نظام وحسن.'),
    v('His power', 'قدرته', 'The ability and authority to bring about what He wills.', 'القدرة والسلطان على إيجاد ما يشاء.'),
    v('His wisdom', 'حكمته', 'Perfect knowledge expressed in right and purposeful action.', 'العلم التام الذي يظهر في الفعل الصحيح ذي الغاية.'),
    v('offers guidance', 'هدى عباده', 'Directs people toward the right path.', 'يرشد الناس إلى الطريق الصحيح.'),
    v('heals the sick', 'يشفي المرضى', 'Restores health to people who are ill.', 'يعيد العافية إلى من أصابه المرض.'),
  ],
  17: [
    v('held on tightly', 'تمسكوا بشدة', 'Refused to give up a belief or practice.', 'رفضوا ترك اعتقاد أو ممارسة وتمسكوا بها.'),
    v('great celebration', 'احتفالا كبيرا', 'A major public festival or communal event.', 'مناسبة عامة كبيرة يشارك فيها المجتمع.'),
    v('priests', 'الكهنة', 'Religious officials responsible for ritual duties.', 'أشخاص يتولون وظائف وشعائر دينية.'),
    v('offerings', 'قرابين', 'Objects or food presented as acts of religious devotion.', 'أشياء أو طعام يقدم تعبّدًا وتقربًا.'),
    v('silent and rigid', 'صامتا جامدا', 'Unable to speak, move, or show life.', 'لا ينطق ولا يتحرك ولا تظهر فيه حياة.'),
  ],
  18: [
    v('mocking them', 'يسخر منها', 'Treating something as foolish through ridicule.', 'يتعامل معها باستهزاء لأنها تبدو له باطلة.'),
    v('false gods', 'الآلهة الباطلة', 'Beings or objects wrongly treated as divine.', 'معبودات تعامل على أنها آلهة وهي باطلة.'),
    v('practical proof', 'دليل عملي', 'Evidence demonstrated through an observable action.', 'برهان يظهر من خلال فعل يمكن ملاحظته.'),
    v('smashed into pieces', 'مكسرة إلى قطع', 'Broken violently into many separate parts.', 'محطمة إلى أجزاء كثيرة منفصلة.'),
    v('wrongdoers', 'الظالمين', 'People who act unjustly or commit serious wrongdoing.', 'أشخاص يرتكبون الظلم أو الخطأ الجسيم.'),
  ],
  19: [
    v('may witness', 'يشهدون', 'May observe an event directly and testify about it.', 'يرون الحدث مباشرة ويشهدون عليه.'),
    v('reverted', 'فرجعوا', 'Returned to an earlier state, position, or belief.', 'عادوا إلى موقف أو حال سابق.'),
    v('arrested and judged', 'باعتقال إبراهيم ومحاكمته', 'Taken into custody and subjected to a formal judgment.', 'القبض على شخص وإخضاعه للمحاكمة.'),
    v('demonstrate in public', 'ليظهر لهم أمام الناس', 'To prove or show something openly before others.', 'إظهار أمر وإثباته علنًا أمام الناس.'),
    v('undamaged', 'لا يزال سليما', 'Remaining whole and not physically harmed.', 'باق على حاله من غير كسر أو ضرر.'),
  ],
  20: [
    v('culprit', 'الجاني', 'The person or thing responsible for a wrongdoing.', 'الشخص أو الشيء المسؤول عن فعل خاطئ.'),
    v('arrogance', 'كبرياءهم', 'Excessive pride that prevents acceptance of truth.', 'غرور شديد يمنع صاحبه من قبول الحق.'),
    v('authority as tyrants', 'سلطتهم كطغاة', 'Power exercised through oppressive and unjust rule.', 'سلطة تمارس بالقهر والظلم.'),
    v('chains', 'بالسلاسل', 'Metal restraints used to prevent a person from moving freely.', 'قيود معدنية تمنع الإنسان من الحركة بحرية.'),
    v('catapult', 'منجنيقا', 'A device used to launch a heavy object over a distance.', 'آلة تستخدم لقذف جسم ثقيل إلى مسافة.'),
  ],
// k02b
// k03a
  21: [
    v('flames reaching the sky', 'ألسنة لهبها تبلغ السماء', 'Very high flames rising from an intense fire.', 'لهب شديد يرتفع إلى علو كبير.'),
    v('chief priest', 'كبير الكهنة', 'The highest-ranking religious official among the priests.', 'أعلى مسؤول ديني بين الكهنة.'),
    v('angel Gabriel', 'الملك جبريل', 'The angel Gabriel, presented as a messenger from Allah.', 'جبريل عليه السلام، الملك الذي يبلغ رسالات الله.'),
    v('coolness and safety', 'بردا وسلاما', 'A state in which the fire no longer causes harm.', 'حال أصبحت فيها النار باردة لا تؤذي.'),
    v('burned his ropes', 'تحرق إلا حباله', 'Destroyed the restraints while leaving Abraham unharmed.', 'أحرقت القيود وحدها وتركت إبراهيم سالمًا.'),
  ],
  22: [
    v('sufficient for me', 'حسبي الله', 'Enough to rely on completely for protection and support.', 'كاف لي أعتمد عليه في الحفظ والنصرة.'),
    v('breathless', 'بلا نفس', 'Temporarily unable to breathe normally.', 'غير قادر على التنفس بصورة طبيعية.'),
    v('completely unharmed', 'دون أي أذى', 'Having suffered no injury or damage at all.', 'لم يصبه أي ضرر أو إصابة.'),
    v('astonishment', 'أصوات الدهشة', 'Great surprise caused by an unexpected event.', 'دهشة شديدة بسبب حدث غير متوقع.'),
    v('despotic rulers', 'الحكام الطغاة', 'Rulers who exercise power in an oppressive way.', 'حكام يستخدمون السلطة بالقهر والاستبداد.'),
  ],
  23: [
    v('declared themselves as gods', 'ادعوا الألوهية', 'Claimed divine status and authority for themselves.', 'زعموا لأنفسهم مقام الألوهية وسلطتها.'),
    v('filled with rage', 'امتلأ غضبا', 'Became extremely and intensely angry.', 'اشتد غضبه حتى سيطر عليه.'),
    v('held a dialogue', 'دار بينهما حوار', 'Took part in a structured exchange of arguments.', 'جرى بين طرفين تبادل منظم للكلام والحجج.'),
    v('undeniable', 'لا يمكن دحضه', 'So strong that it cannot reasonably be refuted.', 'قوي إلى درجة يصعب معها إبطاله بالحجة.'),
    v('sentenced to death', 'حكم عليهما بالإعدام', 'Officially ordered to be executed as a punishment.', 'صدر عليه حكم رسمي بالقتل عقوبةً.'),
  ],
  24: [
    v('put forth', 'طرح', 'Presented an argument, idea, or challenge for consideration.', 'قدم فكرة أو حجة أو تحديًا للنظر فيه.'),
    v('unquestionably', 'بلا شك', 'In a way that leaves no reasonable doubt.', 'على نحو لا يترك مجالًا معقولًا للشك.'),
    v('unable to speak', 'أعجزه عن الكلام', 'Left without an effective answer or response.', 'جعله غير قادر على تقديم جواب.'),
    v('entire kingdom', 'جميع أنحاء مملكة بابل', 'The whole territory under a ruler’s authority.', 'كل الأراضي الواقعة تحت سلطة الملك.'),
    v('every means', 'بكل الوسائل', 'All available methods that could be used to reach a goal.', 'جميع الطرق المتاحة لتحقيق غاية.'),
  ],
  25: [
    v('emigrate', 'قرر الهجرة', 'To leave one land and settle in another.', 'مغادرة بلد للاستقرار في بلد آخر.'),
    v('settled there', 'استقر فيها', 'Established a permanent or long-term home in a place.', 'اتخذ مكانًا للإقامة الدائمة أو الطويلة.'),
    v('judged fairly', 'بالعدل', 'Made decisions according to justice rather than bias.', 'حكم وفق العدل من غير تحيز.'),
    v('righteousness', 'الحق والصواب', 'Moral correctness and commitment to what is right.', 'الاستقامة الأخلاقية والالتزام بالحق.'),
    v('sterile', 'عاقرا', 'Unable to have children.', 'غير قادرة على الإنجاب.'),
  ],
  26: [
    v('offspring', 'نسل هذين الابنين', 'Children and later descendants of a person.', 'الأبناء والذرية الذين يأتون بعد الإنسان.'),
    v('descendants', 'ذرية إسماعيل', 'People descended from a particular ancestor.', 'أشخاص ينحدرون من جد معين.'),
    v('Sacred City', 'المدينة المقدسة', 'A city regarded as holy because of its religious importance.', 'مدينة لها قداسة بسبب مكانتها الدينية.'),
    v('master plan', 'تدبير الله الحكيم', 'A larger purposeful plan guiding a sequence of events.', 'خطة واسعة ذات غاية تربط أحداثًا متعددة.'),
    v('uncultivated valley', 'واد غير ذي زرع', 'A valley where crops are not grown and vegetation is scarce.', 'واد لا توجد فيه زراعة ويقل فيه النبات.'),
  ],
  27: [
    v('skin of water', 'سقاء من الماء', 'A traditional animal-skin container used to carry water.', 'وعاء تقليدي من الجلد يستخدم لحمل الماء.'),
    v('leather bag', 'كيسا جلديا', 'A bag made from treated animal skin.', 'كيس مصنوع من جلد الحيوان.'),
    v('anxious', 'تشعر بالقلق', 'Worried because the outcome of a situation is uncertain.', 'شعور بالقلق بسبب عدم وضوح ما سيحدث.'),
    v('degree of comfort', 'بقدر من الراحة', 'A limited but real feeling of reassurance.', 'قدر من الطمأنينة يخفف القلق.'),
    v('own decision', 'من تلقاء نفسه', 'A choice made independently without an external command.', 'قرار يتخذه الإنسان بإرادته من غير توجيه خارجي.'),
  ],
  28: [
    v('Sacred House', 'البيت الحرام', 'The holy sanctuary identified with the Ka‘ba.', 'المكان المقدس الذي يقصد به الكعبة.'),
    v('rebuilding', 'إعادة بناء', 'Constructing a structure again after it has been lost or damaged.', 'بناء منشأة من جديد بعد زوالها أو تلفها.'),
    v('barren valley', 'وادي مكة الجدب', 'A dry valley with little or no vegetation.', 'واد جاف يقل فيه النبات أو ينعدم.'),
    v('renewed center', 'مركزا للتوحيد', 'A place restored to function again as a central focus.', 'مكان أعيد ليؤدي دوره مركزًا من جديد.'),
    v('throughout the Arabian Peninsula', 'جميع أنحاء شبه الجزيرة العربية', 'Across the different regions of the Arabian Peninsula.', 'في المناطق المختلفة من شبه الجزيرة العربية.'),
  ],
  29: [
    v('companion', 'صحابة النبي', 'A person who lived with and supported Prophet Muhammad.', 'من لقي النبي محمد وآمن به وصحبه.'),
    v('narrated many hadiths', 'الرواة الكبار للحديث', 'Reported a large number of transmitted sayings and accounts.', 'نقل عددًا كبيرًا من الأحاديث والروايات.'),
    v('Safa', 'جبل الصفا', 'One of the two hills between which Hajar searched for help.', 'أحد الجبلين اللذين سعت هاجر بينهما طلبًا للماء.'),
    v('patient search', 'بحث هاجر المثابر', 'A persistent effort continued despite hardship.', 'سعي مستمر بصبر رغم المشقة.'),
    v('pilgrimage', 'الحج', 'A religious journey to a sacred place.', 'رحلة دينية إلى مكان مقدس.'),
  ],
// k03b
// k04a
  30: [
    v('hit the ground', 'ضرب الملك الأرض', 'Struck the earth with force.', 'ضرب الأرض بقوة.'),
    v('small basin', 'حوضا صغيرا', 'A small enclosed area used to collect or hold water.', 'موضع صغير يجمع الماء ويحفظه.'),
    v('abundant and flowing', 'الوفرة والتدفق', 'Present in a large quantity and moving continuously.', 'كثير ومستمر في الجريان.'),
    v('origin is unknown', 'مجهول المنشأ', 'Having a source that is not known or identified.', 'لا يعرف مصدره أو أصله.'),
    v('tribe of Jurham', 'قبيلة جرهم', 'The tribal group that later settled near the Zamzam water.', 'القبيلة التي استقرت لاحقًا قرب ماء زمزم.'),
  ],
  31: [
    v('gentle character', 'لطف طباعه', 'A kind and mild way of behaving toward others.', 'طبع يتصف باللين وحسن المعاملة.'),
    v('ultimate test', 'أعظم اختبار', 'The most demanding test of faith or commitment.', 'أشد اختبار للإيمان أو الالتزام.'),
    v('glad tidings', 'فبشرناه', 'Good news that brings joy and hope.', 'خبر سار يجلب الفرح والأمل.'),
    v('forbearing boy', 'غلام حليم', 'A boy described as patient, calm, and self-controlled.', 'غلام يتصف بالصبر والحلم وضبط النفس.'),
    v('slaughtering you', 'أذبحك', 'Killing as an act of sacrifice in the reported vision.', 'الذبح بوصفه قربانًا في الرؤيا المذكورة.'),
  ],
  32: [
    v("obeyed Allah's command", 'بطاعة الله', 'Acted in complete submission to what Allah commanded.', 'استجاب لأمر الله بخضوع كامل.'),
    v('fulfilled the vision', 'صدقت الرؤيا', 'Carried out what the vision required as a test.', 'حقق ما دلت عليه الرؤيا من اختبار.'),
    v('willingness to sacrifice', 'استعداده لتضحية', 'Readiness to give up something deeply valued for a higher duty.', 'الاستعداد لبذل شيء عزيز من أجل واجب أعلى.'),
    v('leader of humanity', 'إماما للناس', 'A person appointed as a model and guide for people.', 'شخص جعل قدوة ودليلًا للناس.'),
    v('proxy', 'الفداء', 'A substitute given in place of another.', 'بديل يقدم عوضًا عن غيره.'),
  ],
  33: [
    v('hundreds of millions', 'مئات الملايين', 'A very large number measured in multiple hundreds of millions.', 'عدد ضخم يبلغ مئات الملايين.'),
    v('widespread', 'شائعة', 'Existing or practiced across many places or among many people.', 'منتشر بين عدد كبير من الناس أو المناطق.'),
    v('firstborn children', 'أول الأبناء', 'Children born first in their families.', 'الأبناء الذين يولدون أولًا في أسرهم.'),
    v('equivalent to human life', 'تعادل حياة الإنسان', 'Treated as equal in value to a human life in the described context.', 'تعد مساوية في القيمة لحياة الإنسان في السياق المذكور.'),
    v('separation', 'بعد فراق', 'A period in which people are apart from one another.', 'مدة يكون فيها الأشخاص بعيدين بعضهم عن بعض.'),
  ],
  34: [
    v('made sacred', 'حرمه الله', 'Declared holy and protected by religious sanctity.', 'جعله مقدسًا محفوظ الحرمة.'),
    v('important task', 'أمر عظيم', 'A significant duty requiring serious effort.', 'واجب مهم يحتاج إلى جهد وعناية.'),
    v('foundations', 'أسس البناء القديم', 'The lowest structural parts on which a building is constructed.', 'الأجزاء السفلية التي يقوم عليها البناء.'),
    v('Al-Maqam', 'حجر المقام', 'The stone associated with Abraham while building the Ka‘ba.', 'الحجر المرتبط بإبراهيم أثناء بناء الكعبة.'),
    v('handing him the stones', 'يناوله الحجارة', 'Passing building stones to another person by hand.', 'إعطاء الحجارة لشخص آخر ليستخدمها في البناء.'),
  ],
  35: [
    v('restorer', 'معيد بناء', 'A person who rebuilds or returns something to an earlier state.', 'شخص يعيد بناء شيء أو إرجاعه إلى حال سابقة.'),
    v('clear evidence', 'دليل واضح', 'Strong and understandable proof supporting a conclusion.', 'برهان قوي وواضح يؤيد نتيجة.'),
    v('completion of Abraham', 'إكمالا لرسالة إبراهيم', 'The final stage that brings Abraham’s mission to completion.', 'المرحلة التي تتم بها رسالة إبراهيم.'),
    v('chosen race', 'عرق معين', 'A particular ethnic group selected over others.', 'جماعة عرقية محددة تختار دون غيرها.'),
    v('coexisted with idolatry', 'جنبا إلى جنب مع الوثنية', 'Existed at the same time and place as idol worship.', 'وجد في الوقت والمكان نفسيهما مع الوثنية.'),
  ],
// k04b
};

// t01a
const abrahamB2LanguageReviewExercises: Exercise[] = [
  { id:'abraham-b2-language-review-1-source-qualification', type:'matching', title:'Source, Report and Historical Distance', instructions:'Match each reporting frame with the degree of commitment it signals.', question:'How can a B2 writer preserve the difference between direct attribution, cautious synthesis, report and uncertain tradition?', matchingPairs:[{left:'According to X, ...',right:'directly attributes a claim to a named source'},{left:'Some sources suggest that ...',right:'marks limited evidence and avoids presenting the claim as settled fact'},{left:'It is believed that ...',right:'presents a historical belief with distance from certainty'},{left:'It is reported / said that ...',right:'passes on a narration or circulating claim without full authorial commitment'}], correctAnswer:{'According to X, ...':'directly attributes a claim to a named source','Some sources suggest that ...':'marks limited evidence and avoids presenting the claim as settled fact','It is believed that ...':'presents a historical belief with distance from certainty','It is reported / said that ...':'passes on a narration or circulating claim without full authorial commitment'}, explanation:'Across the book, source frames protect the boundary between evidence, narration, belief and interpretation.', feedback:{correct:'Correct. The degree of commitment matches the reporting frame.',incorrect:'Ask whether the wording names a source, limits the evidence, reports a belief, or passes on a narration at a distance.'} },
  { id:'abraham-b2-language-review-2-viewpoint-time', type:'matching', title:'Time Viewed from Different Points', instructions:'Match each form with the temporal viewpoint it creates.', question:'How do B2 writers position events relative to a past viewpoint?', matchingPairs:[{left:'was going to leave',right:'a future plan viewed from a point in the past'},{left:'would later become',right:'a later development presented from an earlier past viewpoint'},{left:'had already changed',right:'an event completed before another past event'},{left:'was about to begin when ...',right:'an imminent action interrupted or redirected by another event'}], correctAnswer:{'was going to leave':'a future plan viewed from a point in the past','would later become':'a later development presented from an earlier past viewpoint','had already changed':'an event completed before another past event','was about to begin when ...':'an imminent action interrupted or redirected by another event'}, explanation:'The chapters repeatedly use tense and aspect to show plans, later developments, completed background and turning points.', feedback:{correct:'Correct. You identified the viewpoint created by each form.',incorrect:'Separate future-from-the-past, earlier completed background, and an action that is just about to happen.'} },
  { id:'abraham-b2-language-review-3-contrast-reframing', type:'multiple-choice', title:'Contrast Without Oversimplifying', instructions:'Choose the sentence that acknowledges one point and then reframes it more precisely.', question:'Which sentence best uses concession and corrective contrast?', options:['Although the policy appears strict, its purpose is not simply to punish but to make expectations clearer.','The policy is strict, and strict policies are strict because they are strict.','The policy is either completely successful or completely useless.'], correctAnswer:0, explanation:'Although concedes an appearance, while not simply ... but ... redirects the claim toward a more precise interpretation.', feedback:{correct:'Correct. The sentence concedes, then refines the argument.',incorrect:'Look for a sentence that accepts an initial impression but avoids an all-or-nothing conclusion.'} },
  { id:'abraham-b2-language-review-4-cause-purpose-result', type:'sequencing', title:'Build a Cause–Purpose–Result Chain', instructions:'Put the moves into the most coherent order for a short analytical paragraph.', question:'How can a paragraph distinguish a problem, a purpose, an action and a result?', sequencingItems:[{id:'1',text:'The original process created repeated delays.'},{id:'2',text:'To reduce those delays, the team changed the order of the steps.'},{id:'3',text:'They also added a final check so that mistakes could be caught earlier.'},{id:'4',text:'As a result, the process became faster without removing the quality check.'}], correctAnswer:['1','2','3','4'], explanation:'The sequence moves from cause/problem to purpose, action and a measured result.', feedback:{correct:'Correct. The relationships are now explicit and coherent.',incorrect:'Start with the problem, then state the purpose, describe the action, and finish with its result.'} },
  { id:'abraham-b2-language-review-5-condition-consequence', type:'multiple-choice', title:'Condition, Possibility and Consequence', instructions:'Choose the sentence in which the consequence matches the strength of the condition.', question:'Which sentence is the most appropriately calibrated?', options:['If the evidence remains incomplete, the conclusion should remain open to revision.','If one detail is uncertain, the whole argument must be false.','Unless every source agrees, all possible explanations are equally certain.'], correctAnswer:0, explanation:'The first sentence links an incomplete condition to a proportionate, non-absolute consequence.', feedback:{correct:'Correct. The strength of the consequence matches the condition.',incorrect:'Avoid a conclusion that is stronger than the evidence or condition allows.'} },
  { id:'abraham-b2-language-review-6-reference-cohesion', type:'matching', title:'Reference and Cohesion Across Sentences', instructions:'Match each form with the cohesion job it performs.', question:'How do B2 writers keep a longer paragraph connected without repeating every noun?', matchingPairs:[{left:'the group who ...',right:'adds defining information while keeping the same referent active'},{left:'the place where ...',right:'links a location to information about what happens there'},{left:'this decision',right:'refers back to a whole previous action or proposition'},{left:'some ..., while others ...',right:'organises parallel groups without overgeneralising them'}], correctAnswer:{'the group who ...':'adds defining information while keeping the same referent active','the place where ...':'links a location to information about what happens there','this decision':'refers back to a whole previous action or proposition','some ..., while others ...':'organises parallel groups without overgeneralising them'}, explanation:'Relative clauses, demonstrative reference and parallel group framing support coherence across longer stretches of discourse.', feedback:{correct:'Correct. Each form has a different cohesion role.',incorrect:'Decide whether the form defines a person/group, anchors a place, refers back to an earlier idea, or compares parallel groups.'} },
  { id:'abraham-b2-language-review-7-evidence-interpretation', type:'fill-blanks', title:'Keep Evidence Separate from Interpretation', instructions:'Complete the sentence with the phrase that marks interpretation rather than direct evidence.', question:'Which wording keeps the writer from presenting an inference as a fact?', fillBlanksText:'The pattern is clear in the data; however, it [blank] a change in behaviour rather than proving one by itself.', correctAnswer:'can be interpreted as', explanation:'“Can be interpreted as” explicitly marks an inference. It does not turn the interpretation into direct evidence.', feedback:{correct:'Correct. The wording preserves the evidence–interpretation boundary.',incorrect:'Use a phrase that offers a possible reading without claiming that the evidence proves it directly.'} },
  { id:'abraham-b2-language-review-8-transfer', type:'reflection', title:'B2 Transfer: Build a Qualified Analytical Paragraph', instructions:'Write or present one coherent 8–10 sentence paragraph about a non-story issue such as a school policy, a historical claim, a technology debate, a sports decision or a social trend.', question:'Can you combine the book’s language resources into one nuanced argument rather than a sequence of isolated grammar forms?', correctAnswer:null, explanation:'The aim is cumulative transfer: source control, viewpoint, contrast, cause/purpose/result, condition, cohesion and evidence-aware interpretation.', feedback:{correct:'Use the language resources as tools for precision, stance and coherence.',incorrect:''}, discussionPrompts:[{question:'Attribute or qualify at least one claim using “According to...”, “Some sources suggest...”, “It is believed...” or an equivalent frame.',mode:'Individual'},{question:'Use one past-viewpoint form such as “would later...”, “was going to...” or a past perfect background form.',mode:'Individual'},{question:'Include one concession/corrective contrast and one clear cause–purpose–result relationship.',mode:'Pair'},{question:'End with a conclusion whose certainty and scope do not exceed the evidence you presented.',mode:'Pair'}] },
];
const englishFinalFeedback={correct:'Correct. Your answer is supported by the story as a whole.',incorrect:'Not yet. Compare the relevant chapters and try again.'};
const englishFinalOverrides:Record<string,Exercise>={
  'ab-b2-f4':{id:'ab-b2-f4',type:'true-false',title:'Final Challenge',instructions:'Decide whether the claim is supported by the story.',question:'Chapter 33 distinguishes animal sacrifice as an earlier prophetic practice from the human sacrifice it attributes to idolaters.',correctAnswer:true,explanation:'The chapter says prophets before Abraham also offered animal sacrifices and contrasts this with human sacrifice attributed to idolaters.',feedback:englishFinalFeedback},
  'ab-b2-f6':{id:'ab-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each setting with the analytical change it creates.',question:'How does setting sharpen Abraham’s argument across different stages of the story?',correctAnswer:{},matchingPairs:[{left:'His father worships, makes, and sells idols',right:'the disagreement combines belief with family and livelihood'},{left:'The festival leaves the temple empty with food before silent statues',right:'the setting enables a practical test of the idols’ claimed agency'},{left:'Nimrod claims power over life and death from a royal position',right:'the debate shifts from political control to a cosmic order the ruler cannot command'}],explanation:'The three settings change what can be tested: family authority, idol agency, and the limits of political power.',feedback:englishFinalFeedback},
  'ab-b2-f7':{id:'ab-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each family or place connection with the later legacy described in the narrative.',question:'How does the story extend Abraham’s legacy beyond one person and one location?',correctAnswer:{},matchingPairs:[{left:'Ishmael’s line',right:'Mecca/Hijaz and the line connected with Prophet Muhammad in the narrative'},{left:'Isaac’s line',right:'the line connected with Jacob and later prophets in the narrative'},{left:'The restored Ka‘ba',right:'a continuing place of worship and pilgrimage presented for people beyond one family branch'}],explanation:'The ending combines family lines with a transregional place of worship, so the legacy is both genealogical and geographic.',feedback:englishFinalFeedback},
  'ab-b2-f8':{id:'ab-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the cross-chapter synthesis with the best analytical word.',question:'Complete the contrast across the idol and Nimrod debates.',fillBlanksText:'Abraham repeatedly moves the argument away from inherited or political [blank] and toward evidence that can be examined.',correctAnswer:['authority','power'],explanation:'The idolaters appeal to inherited practice and Nimrod relies on royal power; Abraham repeatedly redirects the argument toward observable or testable evidence.',feedback:englishFinalFeedback},
  'ab-b2-f9':{id:'ab-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-story synthesis with the best concept.',question:'Complete the synthesis of the closing family chapters.',fillBlanksText:'From sacrifice to building and pilgrimage, the closing chapters turn family submission into a continuing [blank].',correctAnswer:['legacy','heritage'],explanation:'The final chapters connect submission, the Ka‘ba, pilgrimage, descendants, and continuing guidance into a lasting legacy.',feedback:englishFinalFeedback},
};
const englishFinalChallenge:Exercise[]=abrahamB2FinalChallengeExercises.map(exercise=>englishFinalOverrides[exercise.id]??exercise);
// t01b
// t02a
const STORY_IDS=new Set(Array.from({length:35},(_,index)=>index+1));
const englishLanguageFocus:Record<number,Exercise[]>={...abrahamB2LanguageFocusPart1,...abrahamB2LanguageFocusPart2,...abrahamB2LanguageFocusPart3};
const imageTokens=['43d9ebc7-48bf-4186-b63b-67bc0e802ccb','76b855a8-e11a-4cb0-b253-66dd9fbdaa49','f4afdb01-ccbe-4c95-9d16-69c26e703deb','7ba07b75-fcfb-4638-aba5-6f39c7926a48','57f04b55-8f74-40a7-be8c-3cb930c389a5','1bd63548-b8cf-4771-bce4-e6257f83edb7','2747cb7b-e6dd-4f64-a0f7-e229fb1f4998','b0ebd110-9850-4988-a3cb-eb3a9974269a','fca90286-8c0e-4b54-873d-e690f315f907','813a7fab-1e6f-4972-b23e-9e26fd9dec92','31c4c791-2a72-46a1-b54c-a10fe39472db','66045d4f-213c-4096-8776-df44861d0ea5','66892559-503c-4a8f-a4ab-2192bbe5851c','a806d7bc-e4ff-41b0-bc59-5192dce9440f','adb653da-0511-40dc-9db5-02c362fb3b20','e290f82a-46e4-4fd5-ad84-aa98df6f87cf','f3799f77-fe5d-4f3d-8f93-e90c9b1ef428','014cbefa-f28e-4915-a830-0256099d9a24','8a010ead-3641-4729-b9ee-aefcbed2be7b','46806189-2bf4-4bf7-b1c7-a8d934b2c191','bddaf258-5e76-44c4-a78a-36db4249d291','5b890972-155f-4ceb-a5ad-0027cc3524d4','3e850ea7-1b41-4439-bfb9-8c7fa2b4ed25','e809ade7-76af-453c-b299-cd151511e886','9cc99be9-686a-4898-bfec-1b3dd6ecf95b','13a18e7a-ab1f-4ce3-8d62-38b0a724aead','68966648-2077-4abf-80dd-d62eee99796e','35ed5958-0500-41a6-a170-e549c4a069f5','9d7364c7-1103-4862-af19-814cdf3a8384','1f01566b-ffc3-4fc0-be30-a13c92a9365e','258e6e7d-cfec-4f9a-af48-0a3ec52237f3','8e36da5a-2c1c-4086-9649-e34ed6586a30','e2eb0e82-eb65-45a2-b9fb-98c88bf7450e','48f70835-c4b4-4c22-ba7d-b7326278970e','580c305e-c318-42f7-aae9-ec2f6b8d306b'] as const;
export const abrahamB2ImageUrl=(chapter:number)=>`https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Fimages%2Fabraham_b2_ch${chapter}-clean.png?alt=media&token=${imageTokens[chapter-1]}`;
const englishSurfaceAlternates: Record<string,string> = {
  'human capacity': 'Human beings are capable',
  'demonstrate in public': 'demonstrate to them in public',
  'throughout the Arabian Peninsula': 'all over the Arabian Peninsula',
  'proxy': 'substitute',
};
const findEnglishSurface=(content:string,needle:string):string|null=>{
  const candidate=englishSurfaceAlternates[needle]??needle;
  const index=content.toLocaleLowerCase('en').indexOf(candidate.toLocaleLowerCase('en'));
  return index<0?null:content.slice(index,index+candidate.length);
};
export const abrahamB2HotspotCoords=(chapter:number)=>{const leftX=21+((chapter*7)%22);const rightX=59+((chapter*11)%21);const firstY=28+((chapter*13)%37);let secondY=31+((chapter*17)%38);if(Math.abs(firstY-secondY)<9)secondY=secondY<52?secondY+14:secondY-14;return[{x:leftX,y:firstY},{x:rightX,y:secondY}] as const;};
const cleanEnglishPage=(page:PageData):PageData=>{const{exercises:_exercises,vocabularyPairs:_vocabularyPairs,...base}=page;if(page.id===36)return{...base,type:'quiz',title:'B2 Knowledge Check',content:'Check your understanding of the complete Prophet Abraham B2 story.',image:'',audioUrl:'',vocabulary:undefined,hotspots:undefined,animatedWords:undefined,syncPoints:undefined,timedChunks:undefined};if(page.id===37)return{...base,type:'exercises',title:'B2 Language Review',content:'Review and use the source, stance, time, cohesion and discourse patterns developed across the complete story.',image:''};if(page.id===38)return{...base,type:'vocabulary-match',title:'B2 Vocabulary Challenge',content:'Match ten meaning-bearing story terms with their precise meanings.',image:'',vocabulary:undefined,animatedWords:undefined};if(page.id===39)return{...base,type:'glossary',title:'Master Glossary',content:'Review all key vocabulary from the story in one place.',image:''};if(page.id===40)return{...base,type:'final-challenge',title:'Final Challenge',content:'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.',image:''};return base;};
const abrahamB2GlossaryCategoryByChapter: Record<number,string> = {
  1:'Belief & Theology',2:'Belief & Theology',3:'Belief & History',4:'History & Society',5:'History & Mission',
  6:'Character & Early Life',7:'Belief & Critical Thinking',8:'Reasoning & Faith',9:'Reasoning & Evidence',10:'Reasoning & Evidence',
  11:'Argument & Evidence',12:'Family & Belief',13:'Family & Moral Reasoning',14:'Reasoning & Persuasion',15:'Belief & Evidence',
  16:'Creation & Guidance',17:'Belief & Tradition',18:'Evidence & Action',19:'Public Debate & Evidence',20:'Power & Conflict',
  21:'Trial & Faith',22:'Miracle & Faith',23:'Power & Debate',24:'Argument & Political Power',25:'Migration & Family',
  26:'Family & Legacy',27:'Trust & Migration',28:'Mecca & Sacred Geography',29:'Hajar & Pilgrimage',30:'Zamzam & Settlement',
  31:'Sacrifice & Family',32:'Submission & Mercy',33:'Sacrifice & Religious Practice',34:'Ka‘ba & Construction',35:'Legacy & Monotheism',
};
const inferAbrahamB2PartOfSpeech=(word:string,definition:string):string=>{
  const lower=definition.toLocaleLowerCase('en');
  if(/^(to |moved |lost |changed |warned |returned |taken |presented |acted |carried |declared |existed |struck |established |claimed |destroyed |passed |made |left |refused |reached |officially ordered |openly showing |took part |killing |constructing |passing )/.test(lower)) return word.includes(' ')?'verb phrase':'verb';
  if(/^(by using |in a way |naturally |economically |openly |directly )/.test(lower)) return 'adverbial phrase';
  if(/^(behaving |clearly showing |continuing |not deserving |free from |extremely |unable |having |present in |worried |kind and mild |so strong |morally |existing or practiced |declared holy )/.test(lower)) return word.includes(' ')?'adjective phrase':'adjective';
  return word.includes(' ')?'noun phrase':'noun';
};
const findAbrahamB2StoryExample=(content:string,word:string):string|null=>{
  const target=word.toLocaleLowerCase('en');
  const sentences=content
    .split(/\n+/)
    .flatMap(paragraph=>paragraph.trim().split(/(?<=[.!?])(?:["”’']?)(?:\s+|$)/))
    .map(sentence=>sentence.trim())
    .filter(Boolean);
  return sentences.find(sentence=>sentence.toLocaleLowerCase('en').includes(target))
    ?? content.split(/\n+/).map(part=>part.trim()).find(part=>part.toLocaleLowerCase('en').includes(target))
    ?? null;
};
const standardizeEnglishStory=(page:PageData):PageData=>{if(!STORY_IDS.has(page.id))return page;const resolved=(abrahamB2CanonicalVocabulary[page.id]??[]).map(([enNeedle,_arNeedle,enDefinition])=>{const word=findEnglishSurface(page.content??'',enNeedle);return word?{word,definition:enDefinition}:null;}).filter((item):item is {word:string;definition:string}=>item!==null).slice(0,5);if(resolved.length!==5)console.warn(`[Abraham B2 EN] Chapter ${page.id} resolved ${resolved.length}/5 canonical vocabulary items.`);const coordinates=abrahamB2HotspotCoords(page.id);const hotspots=resolved.slice(0,2).map((item,index)=>({id:`ab-b2-runtime-hs-${page.id}-${index+1}`,...coordinates[index],title:item.word,description:item.definition}));return{...page,image:abrahamB2ImageUrl(page.id),vocabulary:resolved,hotspots,animatedWords:undefined,syncPoints:undefined,timedChunks:undefined};};
const standardizedEnglishPages=rawAbrahamB2Pages.map(cleanEnglishPage).map(standardizeEnglishStory);
const englishGlossary:NonNullable<PageData['vocabulary']>=standardizedEnglishPages
  .filter(page=>STORY_IDS.has(page.id))
  .flatMap(page=>(page.vocabulary??[]).map(item=>{
    const storyExample=findAbrahamB2StoryExample(page.content??'',item.word);
    if(!storyExample)throw new Error(`[Abraham B2 EN] Missing source example for ${item.word} in chapter ${page.id}.`);
    return{
      ...item,
      level:'B2' as const,
      partOfSpeech:inferAbrahamB2PartOfSpeech(item.word,item.definition),
      chapter:page.id,
      chapterTitle:page.title,
      storyExample,
      category:abrahamB2GlossaryCategoryByChapter[page.id]??'Story Vocabulary',
    };
  }));
export const abrahamB2Pages:PageData[]=standardizedEnglishPages.map(page=>{if(STORY_IDS.has(page.id)){const languageFocusExercises=englishLanguageFocus[page.id];return{...page,exercises:[abrahamB2QuickChallenges[page.id]],...(languageFocusExercises?{languageFocusExercises}:{})};}if(page.id===36)return{...page,exercises:abrahamB2KnowledgeCheckExercises};if(page.id===37)return{...page,title:'B2 Language Review',content:'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.',exercises:abrahamB2LanguageReviewExercises};if(page.id===38)return{...page,vocabularyPairs:abrahamB2VocabularyChallengePairs};if(page.id===39)return{...page,vocabulary:englishGlossary};if(page.id===40)return{...page,exercises:englishFinalChallenge};return page;});
export const pages:PageData[]=abrahamB2Pages;
// t02b
// t03a
//__T03__
// t03b