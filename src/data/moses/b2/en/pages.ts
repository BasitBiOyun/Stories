import type { Exercise, PageData } from '../../../../types';
import { highlightPhraseOccurs } from '../../../../lib/highlightTextMatch';
import {
  mosesB2FinalChallengeExercises,
  mosesB2KnowledgeCheckExercises,
  mosesB2QuickChallenges,
  mosesB2VocabularyChallengePairs,
} from './exercises';
import { mosesB2LanguageFocusExercises } from './languageFocus';
import { mosesB2LanguageFocusExercisesPart2 } from './languageFocus2';
import {
  mosesB2LanguageFocusExercisesPart3,
  mosesB2LanguageFocusExercisesPart4,
  mosesB2LanguageReviewExercises,
} from './languageFocus3';

const rawMosesB2Pages: PageData[] = [
  { id:1,type:'story',title:'Historical Background',content:`KEY WORDS: Pharaoh, Children of Israel, Exodus, the miracle of the parting of the Red Sea

Moses (pbuh) is one of the great prophets according to Judaism, Christianity, and Islam, who saved the Children of Israel from Pharaoh’s despotism. (Pharaohs were the kings of ancient Egypt.) The Children of Israel, or the Israelites, originated from Prophet Jacob (pbuh) and were Jews by birth. Almost the entire Torah consists of the history of Moses (pbuh) and the Israelites under his leadership. Prophet Moses (pbuh) is mentioned 136 times in thirty-four surahs of the Holy Qur’an and is the prophet most frequently mentioned among the prophets in the Qur’an. The Qur’an describes his birth, his arrival at Pharaoh’s palace, his journey to Midian, his mission as a prophet and his task to rescue the Children of Israel, his struggle against Pharaoh, and his leading the Children of Israel out of Egypt and guiding them. During the time of Prophet Joseph (pbuh), around 1700 BC (BC: Before Christ), the Israelites settled in Egypt. They lived comfortably, rapidly increased in number, and became a large community. However, because they grew so quickly compared to the local population, the Egyptian rulers, who were Copts (ancient Egyptian people), began to see them as a danger. To prevent them from becoming a ruling class, local rulers tried to stop the population growth by making life difficult for the Children of Israel.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F00_Chapter_1_Historical_Background.mp3?alt=media&token=b3b8d805-1e51-46ac-825d-9c9bf0003efc' },
  { id:2,type:'story',title:'Egypt and the Nile',content:`As Prophet Isaac (pbuh), Prophet Jacob (pbuh), and Prophet Joseph (pbuh) were their forefathers, the Israelites also believed in their superiority. That is why the pharaohs wanted to keep them weak. According to the sources, Seti I (approximately 1290-1279 BC) was the pharaoh who oppressed the Israelites. Seti I was the father of Ramses II. The Israelites were made to work to build the huge Seti temple during the reign of Seti I and the new capital city of Ramses during the reign of Ramses II. Sources also say that because of the heavy work going on during this time, slaves, including the Israelites, were under a lot of pressure, and this pressure led to trouble and even some protests. As a result of these disorders, the Israelites escaped from Egypt during the rule of Ramses II (approximately 1279-1213 BC). Most of the sources state that the Exodus (Exodus: the departure of the Israelites from Egypt) from Egypt must have taken place in the early thirteenth century BC. So the pharaoh who drowned at sea was probably Ramses II. However, the exact date of the Exodus from Egypt is unknown.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F01_Chapter_2_Egypt_and_the_Nile.mp3?alt=media&token=5dc361eb-df82-48fd-8df2-c40ac8d6257a' },
  { id:3,type:'story',title:'The Pharaoh’s Authority',content:`The lands of ancient Egypt have come to life with the fertile waters of the Nile River since the earliest times. The Nile is the source of life for Egypt. Herodotus, the famous historian, points to the importance of this great river with the words, “Egypt is the gift of the Nile.” Control of the Nile River was vital. For this reason, the geographical structure of the land was reshaped by human power. During the reigns of Seti I and Ramses II, canal projects were carried out in the Nile Delta and around it for irrigation, transportation, and commercial purposes. Pharaoh Ramses II, in particular, constructed extensive watering systems (canals) to make agriculture in the delta productive. Thus, Pharaohs undertook huge projects on the river. These projects demanded a vast amount of manpower. Apparently, Pharaohs’ god-king authority was based not only on the richness of the river, but also on the manpower of the slaves, who were forced to work in all kinds of jobs. Just like today’s petrol, control of the power of the Nile also needed a strong administration, a god-king authority.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F02_Chapter_3_The_Pharaoh%E2%80%99s_Authority.mp3?alt=media&token=bfc1b29c-8697-4595-ac56-24353a1eb6ec' },
  { id:4,type:'story',title:'The Baby in the Water',content:`However, Pharaohs had worries about keeping this authority in their hands for a long time. In Moses’ (pbuh) time, the Pharaoh wanted to control the growing population of the Children of Israel in Egypt, while, on the other hand, he regularly ordered the killing of male children born to the Israelites. He heard that the prophet would come from among them. Moses (pbuh) was born into this environment. He was placed in a basket and the basket was set free on the waters of the Nile. It was found at the foot of a tree near the Pharaoh’s palace on the banks of the Nile and he was miraculously saved. The child at the foot of the tree in the waters of the Nile was given the name “Musa” in the Pharaoh’s palace. It was a combination of the words “mu” meaning water, and “sa” meaning tree in the Coptic language (Coptic language: the language spoken by the ancient people of Egypt). The journey of baby Moses began in the waters of the Nile. The river carried him to the Pharaoh’s palace. The salvation of Prophet Moses (pbuh) and his people from the Pharaoh also took place in waters, in the Red Sea.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F03_Chapter_4_The_Baby_in_the_Water.mp3?alt=media&token=c746c627-4e54-4639-824c-9197f11d107b' },
  { id:5,type:'story',title:'The Pharaoh’s Command',content:`As a tyrant, the Pharaoh ruled Egypt with absolute power over the people. He oppressed the Children of Israel, known as the offspring of Prophet Jacob (pbuh). He used every method to dishonor them. The Pharaoh made the Children of Israel work under extremely heavy conditions for small pay or no money. Under these circumstances, people obeyed the Pharaoh. He saw himself as a god. It is possible that some people of that period did not practise or believe in paganism. But they kept it secret and outwardly followed social norms without opposing the Pharaoh or telling who they were, because they were weak. Years passed, and the despotic kings continued to rule Egypt. One day, the Pharaoh had a vision that one of the Israelite sons would take him down from his throne. Ibn Abbas said, “The Pharaoh saw a fire in his vision. The fire came from Jerusalem and burned the houses of the Egyptians, but did not do any harm to the Children of Israel.” When he woke up, he called all his priests and magicians and asked about the dream. They said, “A boy will be born among the Children of Israel, and the Egyptian people will die at this boy’s hands.”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F04_Chapter_5_The_Pharaoh%E2%80%99s_Command.mp3?alt=media&token=58bafc3e-3daf-450a-8059-371c79c921c5' },
  { id:6,type:'story',title:'A Baby in the Nile',content:`Then the Pharaoh commanded that all the male children of Israel should be killed. His men carried out the order. But the Pharaoh began to lose his manpower because the Children of Israel did most of the heavy jobs in the country. His economic experts warned him and offered a solution. According to the new policy, his men would kill male children in one year, but let them live in the next year. The Pharaoh thought the solution was economically realistic, so he accepted it. Moses was born in a year in which boys were to be killed. His mother was very frightened by his birth, so she nursed him in secret for fear that he would be killed. Allah said: “…We inspired the mother of Moses, saying: ‘Suckle him (Moses), but when you fear for him, then put him into the river and fear not, nor grieve. Verily! We shall bring him back to you, and shall make him one of (Our) Messengers.’” (Surah al-Qasas: 7) Moses’ mother had to put the baby into a basket and throw it into the waters of the Nile. She was so sad, but she knew that Allah was much kinder to baby Moses than she was.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F05_Chapter_6_A_Baby_in_the_Nile.mp3?alt=media&token=84d0c266-10f3-4e54-98bd-1a971fda9044' },
  { id:7,type:'story',title:'Queen Asiye’s Love',content:`Allah was their Lord and also the Lord of the Nile. Allah commanded the waves to be calm and gentle while carrying the baby. The basket came to the shore near the Pharaoh’s palace. The palace servants noticed the basket and took it to the Pharaoh and the queen Asiye. When Queen Asiye saw the baby, she felt a strong love for him in her heart. The queen was a good and kind-hearted woman who, unlike her husband, held a belief in Allah. She was a secret believer and persuaded her husband with her words that this baby would be a ray of light for both of them! (see Surah al-Qasas: 9) She was always sad because she was sterile. She said to her husband, “Let me keep the baby and let him be our son.” The Pharaoh accepted it. Then, she said to her servants, “Find a nurse for the baby.” Moses’ mother heard the news, too. While the queen was trying to choose a wet nurse to feed the baby, Moses’ mother was also waiting with a heavy heart.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F06_Chapter_7_Queen_Asiye%E2%80%99s_Love.mp3?alt=media&token=2e204587-ccb7-4079-85ab-041eb4ea85eb' },
  { id:8,type:'story',title:'Moses Grows Up',content:`When the baby took her breast, he immediately started suckling. The Pharaoh was astonished and asked, “Who are you? This child refused the milk of all other women but yours.” Allah gave her inner strength, and she answered, “I have sweet milk and a sweet scent, so no baby refuses me.” This answer pleased the Pharaoh. She continued to feed him for a long time. Thus, baby Moses would grow up in his mother’s arms. Moses was raised as a prince in the palace. Moses became a young man. He had not yet been given the prophetic mission. He couldn’t decide whether he should be thankful to the Pharaoh or oppose the oppression against the Children of Israel. Allah gave Moses perfect health, strength, wisdom, and knowledge. Because of these gifts, the weak and oppressed always looked to him for protection and justice. One day in the main town, he noticed two men fighting. One of them was an Israelite and the other was an Egyptian. Young Moses felt close to the Israelites because he had come from the water, not from a noble family, and his mother was one of the Children of Israel.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F07_Chapter_8_Moses_Grows_Up.mp3?alt=media&token=4066a581-167a-4923-bbcf-14b37b39c30c' },
  { id:9,type:'story',title:'The Warning',content:`Upon seeing Moses, the man from the Children of Israel begged him for help. Thus, Moses got involved in the dispute and angrily hit the Egyptian who instantly died. He unintentionally killed the Copt with a single punch. Moses was filled with fear and sadness. He immediately turned to Allah to ask for forgiveness. The very next day, Moses saw the same Israelite involved in another dispute. Moses understood that the Israelite was a quarrelsome man. Moses approached him. Fearing Moses might harm him, the man reacted with a shout, “Will you kill me just as you killed that Egyptian yesterday?” The news thus spread among the Egyptians. Moses was aware that killing an Egyptian would result in the death penalty. So Moses’ fear was not unreasonable. A man of faith who came from the palace warned him, “Run away, or the Pharaoh will kill you for this crime.” Moses was forced to leave Egypt.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F08_Chapter_9_The_Warning.mp3?alt=media&token=50a3d5dc-7516-4037-bc72-19d23f3f44ed' },
  { id:10,type:'story',title:'A Prayer for Forgiveness',content:`Allah related: “And he entered the city at a time of unawareness of its people, and he found there two men fighting, one of his party (his religion, from the Children of Israel), and the other of his enemy. The man of his own party asked him for help against his enemy, so Moses struck him with his fist and killed him.” He said: “My Lord! Verily, I have wronged myself, so forgive me.” Then He forgave him. Verily, He is the Forgiving, the Most Merciful. He said: “My Lord! For that with which You have favored me, I will never more be a helper for the criminals (those disobedient to Allah, polytheists, sinners, etc.)!” So, he became afraid, looking about in the city, waiting as to what would be the result of his crime of killing, when behold, the man who had sought his help the day before called for his help again. Moses said to him: “Verily, you are a plain troublemaker!” Then, when he decided to seize the man who was an enemy to both of them, the man said: “O Moses! Is it your intention to kill me as you killed a man yesterday? Your aim is nothing but to become a tyrant in the land, and not to be one of those who do right.”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F09_Chapter_10_Escape_to_Midian.mp3?alt=media&token=2fe9f2ad-841e-4c81-a710-2e448cbe34e2' },
  { id:11,type:'story',title:'Escape to Midian',content:`And there came a man running from the farthest end of the city (from the palace). He said: “O Moses! Verily, the chiefs are taking counsel together about you to kill you, so escape. Truly, I am to you one of those who give sincere advice.” So he escaped from there, looking about in a state of fear. He said: “My Lord! Save me from the people who are wrongdoers!” (Surah al-Qasas: 15-21) Moses (pbuh) hurried out of Egypt without changing his clothes or getting prepared for traveling. He headed for the land of Midian, which was the closest inhabited area between Egypt and Syria. It was a region not ruled by the Pharaoh. His only companion in this hot desert was Allah and his trust in Him. The hot sand burned his soles. However, fearing pursuit by the Pharaoh’s men, he forced himself to continue on. He traveled by night, hiding during the day. After his desert journey, he reached a watering hole outside Midian. He found shepherds there with their flocks.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F10_Chapter_11_The_Women_Shepherds.mp3?alt=media&token=94d7c047-5e8f-4570-b28a-fb108146e81b' },
  { id:12,type:'story',title:'The Women Shepherds',content:`He immediately began to seek rest under a tree, exhausted and hungry. The bottoms of his feet were raw. They were worn out from hard walking on sand and rocks and from the dust. He urgently needed a new pair of sandals, food and drink. While at a well in Midian, Moses saw a group of shepherds and noticed two young women who were trying to get water for their flocks. Due to the crowd at the water source, the young women could only water their animals after the male shepherds had taken their flocks away. Moses noticed their hardship and sensed that the women were in need of help. Forgetting his thirst, Moses approached them and asked if he could help them in any way. The older sister said, “We are waiting until the shepherds finish watering their sheep, then we will water ours.” Moses was surprised that women were shepherding. It was hard and tiresome work. He asked, “Why are you shepherding?” The younger sister said, “Our father is an old man; his health is too poor and he cannot go out to shepherd the flock.”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F11_Chapter_12_Shu%E2%80%99ayb%E2%80%99s_Home.mp3?alt=media&token=84742027-9aea-4264-bc59-ad3a3b784fe9' },
  { id:13,type:'story',title:'Shu’ayb’s Home',content:`Moses said, “I will water the sheep for you.” He watered their sheep. He went back to sit in the shade of the tree. He suddenly realized he hadn’t drunk any water. He was also so hungry that his stomach ached from hunger. The father of these girls was Prophet Shu’ayb (pbuh). Prophet Shu’ayb (pbuh) was sent as a messenger of Allah to the eastern part of the Gulf of Aqaba, that is, Midian. Being very old, Prophet Shu’ayb (pbuh) had to send the girls alone with animals. The young ladies returned home unexpectedly early, which surprised their father. Due to Moses’ help at the spring, they came back early and told him about it. Their father sent one of his daughters to invite the stranger to his home. She went up to Moses and said that her father was grateful for his help. She said, “Our father invites you to our home so that he may thank you in person.” Moses welcomed this invitation and followed the maiden back to her father. It was clear to Moses that they enjoyed a comfortable and harmonious home life. After introducing himself, he told him about the unfortunate events in Egypt that had forced him to escape.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F12_Chapter_13_A_Shepherd%E2%80%99s_Life.mp3?alt=media&token=61aef085-6f06-4d4a-93c8-90e55df725d7' },
  { id:14,type:'story',title:'A Shepherd’s Life',content:`The old man comforted him, “Do not fear, you have escaped from the wrongdoers.” The father and his daughters observed Moses’ gentleness. Shu’ayb (pbuh) invited him to stay with them. Moses felt at home with this family, for they were friendly and believed in Allah. Because they needed someone reliable and strong, one of the daughters advised her father to employ Moses. They offered Moses work with them. This offer suited Moses well, because he was a stranger in this country and urgently needed shelter and work. Moses became a shepherd for the family, married one of the daughters of the old man, and looked after the old man’s animals for ten long years. Time passed, and he spent much of his time in deep thought in the middle of the desert, far from his people. This period of ten years was important in his life. It was a period of spiritual preparation for prophethood. After a period of ten years, Moses returned to his fatherland, Egypt, during the early days of Ramses II’s rule (approximately 1279-1213 BC). Moses left Midian with his family and was returning to Egypt across the Sinai.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F13_Chapter_14_The_Voice_at_Mount_Sinai.mp3?alt=media&token=dcef2724-ceb4-45e9-9af1-a3c08c6dd064' },
  { id:15,type:'story',title:'The Voice at Mount Sinai',content:`They traveled through the desert until they reached Mount Sinai. It was winter. There, Moses discovered that he had lost his way. He sought Allah’s direction, and Allah showed him the right course. At nightfall, they reached Mount Sinai, also known as Mount Tur. Moses noticed a fire in the distance and approached it, hoping to bring his family some fire to warm themselves and find a guide by the fire. As he neared the fire, he heard a thundering voice calling him: “O Moses, I am Allah, the Lord of the Universe.” Moses was shocked and looked around. He again heard the strange voice: “And what is in your right hand, O Moses?” Moses trembled and responded, “This is my staff on which I lean, and I use it to cut branches for my sheep.” Allah asked about the staff in Moses’ hand to make him focus on it. In this way Allah was preparing him for the miracle that was about to happen. This was the beginning of Moses’ mission as a prophet. The same voice told him, “Throw down your staff!” He did so, and at once the staff became a twisting snake. Moses began to run, but the voice again said to him, “Do not fear and hold it; We will make it a staff.”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F14_Chapter_15_The_Two_Signs.mp3?alt=media&token=701cb8b6-48b6-44db-b44c-704f0ea67dd5' },
  { id:16,type:'story',title:'The Two Signs',content:`The snake changed back into his staff. Moses’ fear subsided, and he felt peace, because he realized that he was witnessing the Truth. Then, Allah commanded him to place his hand under his arm. When he pulled it out, the hand was exceptionally shiny! The miracle of the staff and the miracle of the white hand given to Prophet Moses (pbuh) were two great miracles. Allah then commanded Moses: “You have two signs from your Lord; go to Pharaoh and his chiefs, for they are an evil group and have violated all limits.” Allah narrated this event: “And has there come to you the story of Moses? When he saw a fire, he said to his family: ‘Wait! Verily, I have seen a fire; perhaps I can bring you some burning brand therefrom, or find some guidance at the fire.’ And when he came to the fire, he was called by name: ‘O Moses! Verily! I am your Lord! So take off your shoes; you are in the sacred valley, Tuwa. And I have chosen you. So listen to that which is inspired to you. Verily! I am Allah! La ilaha illa Ana (none has the right to be worshipped but I), so worship Me, and offer prayers perfectly for My remembrance.”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F15_Chapter_16_The_Mission_Begins.mp3?alt=media&token=1a4ababb-e0f8-4ea4-9eb4-59b916520dcf' },
  { id:17,type:'story',title:'The Mission Begins',content:`Allah also said: “Verily, the Hour is coming - and My Will is to keep it hidden - that every person may be rewarded for what he strives for. Therefore, do not let him who denies it (the Day of Resurrection, Paradise, and Hell, etc.) and follows his own desires turn you away from it, lest you fall. And what is that in your right hand, O Moses?” He said: “This is my stick, I lean on it, and with it I beat down branches for my sheep and I find other uses in it.” Allah said: “Cast it down, O Moses!” He cast it down, and behold! It was a snake, moving quickly. Allah said: “Hold it, and fear not. We shall return it to its former state, and press your right hand to your left side; it will appear white and shining, and without any disease, as another sign, that We may show you some of Our greater signs. Go to Pharaoh! Verily! He has gone beyond all limits (all bounds in disbelief and disobedience, and has behaved as an arrogant tyrant).” (Surah Taha: 9-24) The religion of Moses (pbuh) was the same as that of Jacob (pbuh), which was Islamic monotheism. His forefather was Jacob (pbuh), the grandson of Abraham (pbuh). Moses (pbuh), therefore, was one of the descendants of Abraham (pbuh), and every prophet who came after Abraham (pbuh) was one of Abraham’s successors.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F16_Chapter_17_Moses_and_Aaron.mp3?alt=media&token=fe63b748-b3f1-4ba0-a25d-6754abf13da5' },
  { id:18,type:'story',title:'Moses and Aaron',content:`Moses (pbuh) was not alone in this very hard task. Aaron (pbuh), who was the brother of Moses and the prophet sent to the Children of Israel, helped Moses (pbuh). They went together to the Pharaoh and delivered the message. Moses (pbuh) told him about Allah, the duties of monotheism and worship of Allah, as well as His mercy and His Paradise. The Pharaoh listened to Moses’ speech, and he thought that Moses had lost his mind. He asked, “What do you want?” Moses (pbuh) answered, “I want you to send the Children of Israel with me.” Moses (pbuh) asked the Pharaoh for permission to take the Israelites into the desert to sacrifice according to the religion of his ancestors. The Pharaoh asked, “Why should I send them, as they are my slaves?” Moses (pbuh) replied, “Their Lord is Allah.” The Pharaoh asked Moses (pbuh) where he had found the courage to worship Allah. Didn’t he know that the Pharaoh was a god? Then the Pharaoh mockingly asked whether his name was Moses. Moses (pbuh) said, “Yes.” “Are you not that Moses who we took from the Nile as a defenseless baby?” asked the Pharaoh. “Aren’t you that Moses who we raised in our palace, who ate our food, upon whom our charity and wealth were showered?”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F17_Chapter_18_Pharaoh%E2%80%99s_Threat.mp3?alt=media&token=dbbc3322-4777-4679-afe5-48cdb538929f' },
  { id:19,type:'story',title:'Pharaoh’s Threat',content:`“Are you not that Moses who was the murderer of an Egyptian man? Killing is an act of unbelief. So, when you killed, you were not a believer. You are on the run from the law, and now you are here to talk to me!” Moses (pbuh) knew that Pharaoh’s talk about his past, his upbringing, and the Pharaoh’s charity was his way of threatening him. Ignoring his irony, Moses (pbuh) explained that he was not a disbeliever when he killed the Egyptian; rather, he had committed the act only by accident. He explained to the Pharaoh that, despite the fact that the killing was an accident, he had left Egypt out of fear of revenge. He told him that Allah had forgiven him and made him one of His Messengers. In the Pharaoh’s land, it was not permitted to worship anyone other than the Pharaoh himself. After long dialogues, Moses (pbuh) understood that the intellectual discussions did not work. The Pharaoh finally started openly threatening Moses (pbuh). He said, “If you accept any god other than me, I will imprison you!” Moses (pbuh) said, “What if I bring you something convincing and true?” He had no choice but to display the miracles. The Pharaoh said, “Bring it if you are honest!”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F18_Chapter_19_The_Contest_Begins.mp3?alt=media&token=cf1a2d46-c68d-4842-b3cd-644afd182b26' },
  { id:20,type:'story',title:'The Contest Begins',content:`So, when Moses (pbuh) threw his staff, it clearly turned into a snake. And when he pulled out his hand, everyone could see that it was white (Surah ash-Shu’ara: 30-33). It was a hand that shed light! Pharaoh’s eyes were dazzled by the brightness of the hand. These two miracles by Prophet Moses (pbuh) actually demonstrated his prophethood. The Pharaoh spoke to his advisors out of fear that his rule was in danger. His advisors recommended that the Pharaoh detain Moses (pbuh) and call upon the cleverest magicians. They might demonstrate their magic abilities and transform sticks into snakes. In this way, they aimed to lessen the impact of Moses’ miracles on the population. It was decided that a contest would be held between the magicians of Egypt and Moses (pbuh). The aim was to defeat Moses (pbuh) and make him fail in his claim. But things did not go as the Pharaoh had expected. Then the crowd gathered. Everyone was eager to watch this fantastic competition. The magicians wanted to prove that Moses (pbuh) was a liar and a cheat. Moses (pbuh) requested a performance by the magicians first. They threw their magical objects on the floor, and their staffs and ropes took the shapes of moving snakes. However, this was only an illusion.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F19_Chapter_20_The_Magicians_Believe.mp3?alt=media&token=89e8087b-7879-4742-ae49-9de88cf24677' },
  { id:21,type:'story',title:'The Magicians Believe',content:`But this illusion, performed with great skill, even filled Moses’ heart with fear for a moment, and the Pharaoh and his soldiers gave a loud cheer. Moses (pbuh) then threw his staff. His stick started to twist and grew into a huge snake. Moses’ snake ate all the magicians’ fake snakes, and the Pharaoh and his men watched in silence. When Moses (pbuh) reached down to take it, it transformed into a staff again. After seeing Moses’ power, the magicians bowed down to Allah and said, “We believe in the Lord of Moses and Aaron.” At that time, magicians were not merely performers, but the elite intellectual scholars of ancient Egypt. So it was a major defeat and disappointment for the Pharaoh. When he faced the miracles, the Pharaoh was utterly horrified. He then called for all his ministers and men in positions of responsibility. The prime minister asked, “Will we leave Moses and his people to corrupt and manipulate the rest of the people on earth so that they leave your worship?” Upon this, the Pharaoh announced commands, and his men began to kill the sons and imprison others. Moses (pbuh) couldn’t do anything but advise his people to be patient. Moses (pbuh) made the same request that Pharaoh free the Children of Israel from slavery. The Pharaoh replied by ordering all his subjects, including the Children of Israel, to attend a large assembly and reminding them that he was their master and met all of their needs. They lacked vision since they had been under oppression for a long time. They believed that their king was wealthy and could meet all of their material needs. They ignored Moses’ (pbuh) call and unquestioningly obeyed the Pharaoh.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F20_Chapter_21_The_Exodus.mp3?alt=media&token=1ad5015c-f4d8-4fe0-9ea4-9d427aa1f63e' },
  { id:22,type:'story',title:'The Red Sea Opens',content:`The Pharaoh became ruder and more arrogant. He declared to his people, “Pharaoh is the only god.” It seemed that the Pharaoh would never accept Moses’ (pbuh) teachings or put an end to the hard days of the Children of Israel.
Upon this, the Pharaoh began to take even harsher steps. Allah commanded Moses (pbuh) to leave. This later became known as the Exodus. To escape Pharaoh’s genocide, Moses (pbuh) and the Children of Israel, finding no other way, set out at night. In the darkness of the night and under Moses’ (pbuh) guidance the Children of Israel journeyed toward the Red Sea.
When the sun rose, they reached the beach. The Pharaoh realized their departure, so he mobilized his huge army and started following them. Soon, they easily managed to catch up with them. The Israelites panicked. They were trapped with the Red Sea in front and the king’s army behind them. However, Moses (pbuh) said that Allah was with them and would show them the way to safety (see Surah ash-Shu’ara: 61-62). Allah told Moses (pbuh), “Hit the sea with your staff!” Moses did it. Then a strong wind blew, the sun shone brightly, and immediately the sea parted; the waves stood like mountains on each side. The Children of Israel passed through this dry land and were saved. Allah narrated: “And We inspired Moses, saying: ‘Take away My servants by night; verily, you will be pursued.’
Then Pharaoh sent callers to all the cities, saying: ‘Truly! These indeed are but a small band. And verily, they are angering us; but we are an alert crowd.’ So We removed them from gardens and springs, treasures, and every kind of honorable place. Thus, We turned Pharaoh’s people out, and We caused the Children of Israel to inherit them. So they pursued them at sunrise. And when the two groups saw each other, the people of Moses said: ‘We are sure to be caught up with.’ Moses said: ‘Truly! With me is my Lord; He will guide me.’”`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F21_Chapter_22_The_Red_Sea_Opens.mp3?alt=media&token=f6a25998-cf85-4222-abd9-71608ce86b8e' },
  { id:23,type:'story',title:'Pharaoh Drowns',content:`“Then We inspired Moses, saying: ‘Strike the sea with your stick.’ And it parted, and each separate part of that sea water became like the huge, firm mass of a mountain. Then We brought near the others (Pharaoh’s party) to that place. And We saved Moses and all those with him. Then We drowned the others. Verily! In this is indeed a sign (or a proof), yet most of them are not believers. And verily, your Lord! He is truly the All-Mighty, the Most Merciful.” (Surah ash-Shu’ara: 52-68) The Pharaoh and his army saw the miracle. But the Pharaoh turned to his men and said, “Look! The sea has opened at my command.” He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power. They entered the parted waters, and when they were midway, Allah commanded the sea to return to its former state. The sea closed over them, and they drowned. Moses (pbuh) led the Children of Israel toward the land of Canaan. (The land of Canaan: the land of Palestine. It is the historical homeland where Jacob’s (pbuh) offspring settled.) On the way, they saw a group of people that worshipped idols and calves.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F22_Chapter_23_Pharaoh_Drowns.mp3?alt=media&token=fc6ad339-658a-404b-83ca-e7e8b2658c86' },
  { id:24,type:'story',title:'The Calf and the Torah',content:`Some of them said, “O Moses! Make something like that for us so we can worship it!” Moses (pbuh) patiently advised them, “Allah saved you from the Pharaoh’s oppression. The Egyptians were killing your sons and using your daughters as servants. Despite this, will you rebel against Allah and fall into idol worship?!” When Moses (pbuh) led the Children of Israel out of Egypt, he told his people that he would bring them a Book from Allah. Allah told Moses (pbuh) to go up Mount Tur. Moses (pbuh) left his brother Aaron (pbuh) in charge and went up Mount Tur himself. He stayed on Mount Tur for forty days and worshipped Allah (see Surah al-A’raf: 142). He heard the words of Allah directly. During this time, the Torah was given to him by Allah. Moses (pbuh) returned to his people with the Torah, but unfortunately saw his people singing and dancing around the calf statue. He was deeply disappointed. His story would not end here. He would face many difficult tests to guide the Children of Israel to the truth, but they continued disobeying. Moses’ (pbuh) efforts to guide them to the right path are the reason he is known as the Prophet of Great Determination.`,audioUrl:'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb2%2Faudio%2F23_Chapter_24_The_Calf_and_the_Torah.mp3?alt=media&token=5eb7d4d8-17b7-4126-bd22-0bc6d99b8aa0' },
  { id:25,type:'quiz',title:'Knowledge Check',content:'Review the narrative themes, miracles, and historical lessons of Moses (pbuh).',image:'' },
  { id:26,type:'vocabulary-match',title:'Vocabulary Challenge - Moses B2',content:'Match key vocabulary concepts from the story of Moses (pbuh).',image:'' },
  { id:27,type:'glossary',title:'Master Glossary',content:'Review all key vocabulary from the story in one place.',image:'' },
  { id:29,type:'exercises',title:'Language Review',content:'Review and use the source-framing, stance, cause, contrast, condition, focus and discourse patterns developed across all twenty-four chapters.',image:'' },
  { id:30,type:'final-challenge',title:'Final Challenge',content:'Test your knowledge of the entire B2 story of Prophet Moses (pbuh).',image:'' },
];

// Word Notes and hotspots of the 24 story chapters, exactly as the reader shows them.
const mosesB2StoryNotes: Record<number, Pick<PageData, 'vocabulary' | 'hotspots'>> = {
  1: {
    vocabulary: [
      { word: "despotism", partOfSpeech: "noun", definition: "Cruel and unfair rule by someone who has total power." },
      { word: "originate", partOfSpeech: "verb", definition: "To come from a particular person, place or source." },
      { word: "settle", partOfSpeech: "verb", definition: "To go to live permanently in a new place." },
      { word: "ruling class", partOfSpeech: "noun", definition: "The group of people in a society who hold power and govern." },
      { word: "leadership", partOfSpeech: "noun", definition: "The role of guiding and directing a group of people." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-1-1', x: 28, y: 36, title: "A Prophet of Three Faiths", description: "Judaism, Christianity and Islam all regard Moses (pbuh) as a great prophet who saved the Children of Israel from the Pharaoh." },
      { id: 'mo-b2-hs-1-2', x: 72, y: 58, title: "Seen as a Danger", description: "The Israelites grew so quickly in Egypt that the Egyptian rulers made their lives hard to stop their growth." },
    ],
  },
  2: {
    vocabulary: [
      { word: "forefather", partOfSpeech: "noun", definition: "A person from an earlier generation of your family; an ancestor." },
      { word: "superiority", partOfSpeech: "noun", definition: "The belief or state of being better or more important than others." },
      { word: "reign", partOfSpeech: "noun", definition: "The period of time during which a king or queen rules." },
      { word: "protests", partOfSpeech: "noun", definition: "Public actions that show strong disagreement with something." },
      { word: "disorders", partOfSpeech: "noun", definition: "Situations in which people stop obeying the authorities and violence breaks out; unrest." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-2-1', x: 34, y: 63, title: "Forced Labour", description: "Under Seti I and Ramses II, the Israelites were made to build a huge temple and a new capital city." },
      { id: 'mo-b2-hs-2-2', x: 68, y: 34, title: "A Date Still Unknown", description: "Most sources placed the Exodus in the early thirteenth century BC, but its exact date is still unknown." },
    ],
  },
  3: {
    vocabulary: [
      { word: "fertile", partOfSpeech: "adjective", definition: "Able to produce a lot of good crops." },
      { word: "vital", partOfSpeech: "adjective", definition: "Absolutely necessary; extremely important." },
      { word: "manpower", partOfSpeech: "noun", definition: "The number of workers available or needed to do a job." },
      { word: "irrigation", partOfSpeech: "noun", definition: "Supplying water to land or crops through canals or pipes." },
      { word: "administration", partOfSpeech: "noun", definition: "The management and control of a country or an organization." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-3-1', x: 25, y: 52, title: "The Gift of the Nile", description: "Herodotus called Egypt “the gift of the Nile”, because the river gave life to its lands." },
      { id: 'mo-b2-hs-3-2', x: 74, y: 42, title: "Canals Built by Slaves", description: "Ramses II built great canals in the delta, and this work depended on the forced labour of slaves." },
    ],
  },
  4: {
    vocabulary: [
      { word: "miraculously", partOfSpeech: "adverb", definition: "In a wonderful way that cannot be explained by natural causes." },
      { word: "salvation", partOfSpeech: "noun", definition: "Being saved from danger, destruction or harm." },
      { word: "regularly", partOfSpeech: "adverb", definition: "Again and again, at repeated times." },
      { word: "combination", partOfSpeech: "noun", definition: "A mixture of two or more things joined together." },
      { word: "banks", partOfSpeech: "noun", definition: "The land along each side of a river." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-4-1', x: 38, y: 32, title: "A Basket on the Nile", description: "Baby Moses (pbuh) was placed in a basket on the river and was found at the foot of a tree near the Pharaoh’s palace." },
      { id: 'mo-b2-hs-4-2', x: 66, y: 65, title: "Water and Tree", description: "In Coptic, “mu” means water and “sa” means tree, so his name recorded where the baby was found." },
    ],
  },
  5: {
    vocabulary: [
      { word: "norms", partOfSpeech: "noun", definition: "The usual accepted ways of behaving in a society." },
      { word: "outwardly", partOfSpeech: "adverb", definition: "On the surface; in the way things appear to others." },
      { word: "vision", partOfSpeech: "noun", definition: "A dream in which someone sees something that carries a special message." },
      { word: "paganism", partOfSpeech: "noun", definition: "The worship of many gods or of idols." },
      { word: "dishonor", partOfSpeech: "verb", definition: "To treat someone in a way that makes them lose respect and feel shamed." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-5-1', x: 22, y: 44, title: "A King Who Called Himself God", description: "The Pharaoh ruled with absolute power, oppressed the Israelites and saw himself as a god." },
      { id: 'mo-b2-hs-5-2', x: 77, y: 56, title: "The Pharaoh’s Dream", description: "The Pharaoh dreamed of a fire from Jerusalem, and his priests warned that an Israelite boy would bring death to the Egyptians." },
    ],
  },
  6: {
    vocabulary: [
      { word: "policy", partOfSpeech: "noun", definition: "A plan or set of rules that a government follows." },
      { word: "carried out", partOfSpeech: "verb", definition: "Did or completed a task, an order or a plan." },
      { word: "realistic", partOfSpeech: "adjective", definition: "Sensible and practical; possible to achieve in the actual situation." },
      { word: "grieve", partOfSpeech: "verb", definition: "To feel deep sadness, especially after a loss." },
      { word: "experts", partOfSpeech: "noun", definition: "People with special knowledge or skill in a particular field." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-6-1', x: 31, y: 68, title: "Killing Every Other Year", description: "To keep his workers, the Pharaoh accepted a plan to kill Israelite boys only in every other year." },
      { id: 'mo-b2-hs-6-2', x: 70, y: 30, title: "A Mother’s Trust", description: "Allah told Moses’ mother to put her baby into the river and promised to bring him back to her." },
    ],
  },
  7: {
    vocabulary: [
      { word: "ray of light", partOfSpeech: "noun", definition: "Something that brings hope and happiness in a hard time." },
      { word: "sterile", partOfSpeech: "adjective", definition: "Unable to have children." },
      { word: "secret believer", partOfSpeech: "noun", definition: "A person who has faith in God but hides it from others." },
      { word: "wet nurse", partOfSpeech: "noun", definition: "A woman who breastfeeds another woman’s baby." },
      { word: "with a heavy heart", partOfSpeech: "adverb", definition: "Feeling very sad or worried." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-7-1', x: 26, y: 35, title: "Carried by Calm Waves", description: "Allah made the waves calm, and the basket reached the shore near the Pharaoh’s palace." },
      { id: 'mo-b2-hs-7-2', x: 73, y: 62, title: "A Queen’s Wish", description: "Queen Asiye, who had no children, asked the Pharaoh to let her keep the baby as their son." },
    ],
  },
  8: {
    vocabulary: [
      { word: "astonished", partOfSpeech: "adjective", definition: "Very surprised by something unexpected." },
      { word: "justice", partOfSpeech: "noun", definition: "Fair treatment of people according to what is right." },
      { word: "prophetic mission", partOfSpeech: "noun", definition: "The task that Allah gives to His messenger to guide people." },
      { word: "oppose", partOfSpeech: "verb", definition: "To be against something and try to stop or change it." },
      { word: "noble", partOfSpeech: "adjective", definition: "Belonging to a family of high social rank." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-8-1', x: 36, y: 57, title: "Back in His Mother’s Arms", description: "The baby refused every other woman’s milk but took his own mother’s, so she was allowed to feed him." },
      { id: 'mo-b2-hs-8-2', x: 64, y: 28, title: "A Prince Torn in Two", description: "Raised as a prince in the palace, young Moses (pbuh) could not decide between thanking the Pharaoh and opposing oppression." },
    ],
  },
  9: {
    vocabulary: [
      { word: "dispute", partOfSpeech: "noun", definition: "A serious argument between two people or groups." },
      { word: "unintentionally", partOfSpeech: "adverb", definition: "Without meaning to do it." },
      { word: "quarrelsome", partOfSpeech: "adjective", definition: "Often arguing or fighting with other people." },
      { word: "death penalty", partOfSpeech: "noun", definition: "The legal punishment of being executed for a crime." },
      { word: "unreasonable", partOfSpeech: "adjective", definition: "Not based on good sense; not fair or sensible." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-9-1', x: 24, y: 64, title: "A Single Punch", description: "Moses (pbuh) hit an Egyptian to help an Israelite, and the man died, although Moses had not meant to kill him." },
      { id: 'mo-b2-hs-9-2', x: 76, y: 38, title: "“Run Away!”", description: "A believer from the palace warned Moses (pbuh) that the Pharaoh would kill him for the crime." },
    ],
  },
  10: {
    vocabulary: [
      { word: "troublemaker", partOfSpeech: "noun", definition: "A person who keeps starting fights and problems." },
      { word: "criminals", partOfSpeech: "noun", definition: "People who break the law or do seriously wrong acts." },
      { word: "seize", partOfSpeech: "verb", definition: "To take hold of someone suddenly and by force." },
      { word: "tyrant", partOfSpeech: "noun", definition: "A ruler who uses power in a cruel and unfair way." },
      { word: "favor", partOfSpeech: "verb", definition: "To give someone special kindness or blessings." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-10-1', x: 33, y: 31, title: "A Fault Admitted", description: "Moses (pbuh) admitted that he had wronged himself and asked his Lord to forgive him, and Allah forgave him." },
      { id: 'mo-b2-hs-10-2', x: 69, y: 67, title: "A Promise to Allah", description: "Thankful for Allah’s favour, Moses (pbuh) promised never again to help those who did wrong." },
    ],
  },
  11: {
    vocabulary: [
      { word: "taking counsel", partOfSpeech: "verb", definition: "Discussing something seriously together before deciding." },
      { word: "watering hole", partOfSpeech: "noun", definition: "A pool or well where people and animals come to drink." },
      { word: "inhabited", partOfSpeech: "adjective", definition: "Having people living there." },
      { word: "companion", partOfSpeech: "noun", definition: "Someone who travels or spends time with another person." },
      { word: "pursuit", partOfSpeech: "noun", definition: "The act of chasing someone in order to catch them." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-11-1', x: 27, y: 48, title: "A Warning from the City", description: "A man ran from the far end of the city to tell Moses (pbuh) that the chiefs planned to kill him." },
      { id: 'mo-b2-hs-11-2', x: 75, y: 70, title: "Alone in the Desert", description: "Moses (pbuh) travelled by night through the hot desert until he reached a watering hole outside Midian." },
    ],
  },
  12: {
    vocabulary: [
      { word: "exhausted", partOfSpeech: "adjective", definition: "Extremely tired, with no energy left." },
      { word: "raw", partOfSpeech: "adjective", definition: "Sore and red because the skin is damaged." },
      { word: "hardship", partOfSpeech: "noun", definition: "A situation that is difficult and causes suffering." },
      { word: "flock", partOfSpeech: "noun", definition: "A group of sheep or goats kept together." },
      { word: "tiresome", partOfSpeech: "adjective", definition: "Making you feel worn out and bored." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-12-1', x: 40, y: 66, title: "Worn Out by the Journey", description: "Moses (pbuh) arrived hungry and exhausted, and his feet were raw from the sand and rocks." },
      { id: 'mo-b2-hs-12-2', x: 62, y: 34, title: "Two Sisters at the Well", description: "Two young women waited to water their flock because their father was too old to do the work." },
    ],
  },
  13: {
    vocabulary: [
      { word: "harmonious", partOfSpeech: "adjective", definition: "Friendly and peaceful, without arguments." },
      { word: "in person", partOfSpeech: "adverb", definition: "Yourself, face to face, not through someone else." },
      { word: "unfortunate", partOfSpeech: "adjective", definition: "Sad and bringing bad luck or trouble." },
      { word: "grateful", partOfSpeech: "adjective", definition: "Feeling or showing thanks for help." },
      { word: "unexpectedly", partOfSpeech: "adverb", definition: "In a surprising way that no one had planned for." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-13-1', x: 23, y: 30, title: "Help at the Spring", description: "Moses (pbuh) watered the sisters’ sheep, so they returned home earlier than usual." },
      { id: 'mo-b2-hs-13-2', x: 78, y: 54, title: "An Invitation from Shu’ayb", description: "Prophet Shu’ayb (pbuh) sent his daughter to invite Moses (pbuh) so that he could thank him in person." },
    ],
  },
  14: {
    vocabulary: [
      { word: "comfort", partOfSpeech: "verb", definition: "To make someone feel less worried or afraid." },
      { word: "gentleness", partOfSpeech: "noun", definition: "Being kind, soft and calm with others." },
      { word: "employ", partOfSpeech: "verb", definition: "To give someone paid work." },
      { word: "shelter", partOfSpeech: "noun", definition: "A safe place to live or stay." },
      { word: "reliable", partOfSpeech: "adjective", definition: "Able to be trusted to do what is needed." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-14-1', x: 35, y: 69, title: "Ten Years in Midian", description: "Moses (pbuh) married one of the daughters and looked after the family’s animals for ten years." },
      { id: 'mo-b2-hs-14-2', x: 67, y: 40, title: "Preparing for Prophethood", description: "The quiet years in the desert were a time of spiritual preparation for his mission as a prophet." },
    ],
  },
  15: {
    vocabulary: [
      { word: "nightfall", partOfSpeech: "noun", definition: "The time in the evening when it becomes dark." },
      { word: "thundering", partOfSpeech: "adjective", definition: "Extremely loud and deep, like a storm." },
      { word: "tremble", partOfSpeech: "verb", definition: "To shake because of fear or strong feeling." },
      { word: "staff", partOfSpeech: "noun", definition: "A long wooden stick used for support when walking." },
      { word: "twisting", partOfSpeech: "adjective", definition: "Turning and bending from side to side." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-15-1', x: 29, y: 43, title: "A Fire in the Distance", description: "Lost on a winter night, Moses (pbuh) walked toward a fire, hoping to find warmth and a guide." },
      { id: 'mo-b2-hs-15-2', x: 71, y: 65, title: "The Staff Becomes a Snake", description: "When Moses (pbuh) threw down his staff, it became a twisting snake." },
    ],
  },
  16: {
    vocabulary: [
      { word: "subside", partOfSpeech: "verb", definition: "To become less strong and gradually go away." },
      { word: "witness", partOfSpeech: "verb", definition: "To see something important happen with your own eyes." },
      { word: "exceptionally", partOfSpeech: "adverb", definition: "Unusually; to a very high degree." },
      { word: "chiefs", partOfSpeech: "noun", definition: "The most powerful leaders of a people." },
      { word: "sacred", partOfSpeech: "adjective", definition: "Holy; deserving special respect because it is connected with God." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-16-1', x: 37, y: 34, title: "The Shining Hand", description: "Moses’ (pbuh) hand came out white and shining: The second of his two great signs." },
      { id: 'mo-b2-hs-16-2', x: 63, y: 71, title: "The Valley of Tuwa", description: "Allah told Moses (pbuh) to take off his shoes because he was standing in the sacred valley." },
    ],
  },
  17: {
    vocabulary: [
      { word: "monotheism", partOfSpeech: "noun", definition: "The belief that there is only one God." },
      { word: "descendant", partOfSpeech: "noun", definition: "A person who comes from a particular ancestor in a later generation." },
      { word: "successor", partOfSpeech: "noun", definition: "Someone who comes after another person and continues their work." },
      { word: "desires", partOfSpeech: "noun", definition: "Strong wishes, especially for things that please oneself." },
      { word: "former", partOfSpeech: "adjective", definition: "Belonging to an earlier time; previous." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-17-1', x: 25, y: 60, title: "“Go to Pharaoh!”", description: "Allah sent Moses (pbuh) to the Pharaoh, who had gone beyond all limits." },
      { id: 'mo-b2-hs-17-2', x: 74, y: 32, title: "In Abraham’s Line", description: "Moses (pbuh) came from Jacob (pbuh), the grandson of Abraham (pbuh), and followed the same belief in One God." },
    ],
  },
  18: {
    vocabulary: [
      { word: "deliver", partOfSpeech: "verb", definition: "To pass on a message or news to the person it is meant for." },
      { word: "charity", partOfSpeech: "noun", definition: "Kindness and help given to people in need." },
      { word: "permission", partOfSpeech: "noun", definition: "The act of allowing someone to do something." },
      { word: "defenseless", partOfSpeech: "adjective", definition: "Unable to protect yourself." },
      { word: "mockingly", partOfSpeech: "adverb", definition: "In a way that laughs at someone and shows no respect." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-18-1', x: 32, y: 28, title: "Two Brothers, One Message", description: "Aaron (pbuh), a prophet himself, went with his brother Moses (pbuh) to take Allah’s message to the Pharaoh." },
      { id: 'mo-b2-hs-18-2', x: 70, y: 61, title: "“They Are My Slaves”", description: "The Pharaoh refused to free the Israelites, calling them his slaves, but Moses (pbuh) answered that their Lord was Allah." },
    ],
  },
  19: {
    vocabulary: [
      { word: "upbringing", partOfSpeech: "noun", definition: "The way a child is cared for and taught while growing up." },
      { word: "imprison", partOfSpeech: "verb", definition: "To lock someone up as a punishment and take away their freedom." },
      { word: "revenge", partOfSpeech: "noun", definition: "Harming someone because they harmed you or someone close to you." },
      { word: "convincing", partOfSpeech: "adjective", definition: "Strong enough to make people believe that it is true." },
      { word: "openly", partOfSpeech: "adverb", definition: "In a way that everyone can see; not secretly." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-19-1', x: 21, y: 55, title: "The Past Brought Up", description: "The Pharaoh reminded Moses (pbuh) of the Egyptian he had killed, but Moses explained that it had been an accident." },
      { id: 'mo-b2-hs-19-2', x: 79, y: 37, title: "A Threat of Prison", description: "When the discussions failed, the Pharaoh threatened to imprison Moses (pbuh), who then showed his miracles." },
    ],
  },
  20: {
    vocabulary: [
      { word: "brightness", partOfSpeech: "noun", definition: "The quality of giving out strong light." },
      { word: "detain", partOfSpeech: "verb", definition: "To keep someone somewhere and not allow them to leave." },
      { word: "impact", partOfSpeech: "noun", definition: "A strong effect on someone or something." },
      { word: "advisors", partOfSpeech: "noun", definition: "People who help a ruler decide by giving their opinions." },
      { word: "illusion", partOfSpeech: "noun", definition: "Something that seems real but is not." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-20-1', x: 39, y: 62, title: "A Plan Against the Signs", description: "The advisors told the Pharaoh to call the cleverest magicians to weaken the effect of Moses’ (pbuh) miracles." },
      { id: 'mo-b2-hs-20-2', x: 65, y: 29, title: "Ropes Like Snakes", description: "The magicians threw down their ropes and staffs, which only seemed to move like snakes." },
    ],
  },
  21: {
    vocabulary: [
      { word: "elite", partOfSpeech: "noun", definition: "The small group of people who are the best or most powerful in a society." },
      { word: "disappointment", partOfSpeech: "noun", definition: "The sad feeling when something you hoped for does not happen." },
      { word: "responsibility", partOfSpeech: "noun", definition: "A duty to deal with something and to answer for it." },
      { word: "corrupt", partOfSpeech: "verb", definition: "To make someone morally bad or dishonest." },
      { word: "subjects", partOfSpeech: "noun", definition: "The people who live under the rule of a king or queen." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-21-1', x: 28, y: 41, title: "Bowing Down to Allah", description: "After Moses’ (pbuh) snake swallowed their snakes, the magicians bowed down and declared their belief in Allah." },
      { id: 'mo-b2-hs-21-2', x: 72, y: 68, title: "Blind Obedience", description: "Long years of oppression had weakened the Israelites’ judgement, so many ignored Moses (pbuh) and obeyed the Pharaoh." },
    ],
  },
  22: {
    vocabulary: [
      { word: "genocide", partOfSpeech: "noun", definition: "The planned killing of a whole people or group." },
      { word: "mobilize", partOfSpeech: "verb", definition: "To gather soldiers or people and prepare them for action." },
      { word: "trapped", partOfSpeech: "adjective", definition: "Unable to escape from a dangerous place." },
      { word: "parted", partOfSpeech: "verb", definition: "Divided and moved apart, leaving an open space between." },
      { word: "panic", partOfSpeech: "verb", definition: "To feel such sudden, strong fear that you cannot think clearly." },
      { word: "inherit", partOfSpeech: "verb", definition: "To receive property or land from others who had it before." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-22-1', x: 34, y: 70, title: "Escape by Night", description: "Allah commanded Moses (pbuh) to leave, and the Israelites set out at night toward the Red Sea." },
      { id: 'mo-b2-hs-22-2', x: 67, y: 36, title: "A Path Through the Sea", description: "Moses (pbuh) struck the sea with his staff, and it parted so that the Israelites could cross on dry land." },
    ],
  },
  23: {
    vocabulary: [
      { word: "extraordinary", partOfSpeech: "adjective", definition: "Very unusual and surprising; far beyond what is normal." },
      { word: "inspire", partOfSpeech: "verb", definition: "To put guidance or an idea directly into someone’s heart and mind." },
      { word: "drown", partOfSpeech: "verb", definition: "To die, or to make someone die, under water." },
      { word: "midway", partOfSpeech: "adverb", definition: "At the middle point between the start and the end." },
      { word: "idols", partOfSpeech: "noun", definition: "Statues or images that people worship as gods." },
      { word: "homeland", partOfSpeech: "noun", definition: "The country or land where a people comes from." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-23-1', x: 24, y: 33, title: "The Pharaoh’s False Claim", description: "The Pharaoh told his men that the sea had opened at his own command." },
      { id: 'mo-b2-hs-23-2', x: 76, y: 59, title: "The Sea Closes", description: "When the Pharaoh and his soldiers were halfway across, the sea returned and drowned them." },
    ],
  },
  24: {
    vocabulary: [
      { word: "oppression", partOfSpeech: "noun", definition: "Cruel and unfair treatment of people by those in power." },
      { word: "disobey", partOfSpeech: "verb", definition: "To refuse to do what someone in authority tells you." },
      { word: "calf", partOfSpeech: "noun", definition: "A young cow; here, a statue of one that people worshipped." },
      { word: "determination", partOfSpeech: "noun", definition: "The quality of continuing to try even when something is difficult." },
      { word: "patiently", partOfSpeech: "adverb", definition: "Calmly, without getting angry or giving up." },
    ],
    hotspots: [
      { id: 'mo-b2-hs-24-1', x: 38, y: 54, title: "Forty Days on Mount Tur", description: "Moses (pbuh) stayed on the mountain for forty days, heard Allah’s words and received the Torah." },
      { id: 'mo-b2-hs-24-2', x: 62, y: 73, title: "Dancing Around the Calf", description: "Moses (pbuh) returned to find his people singing and dancing around a calf statue." },
    ],
  },
};

const STORY_IDS=new Set(Array.from({length:24},(_,i)=>i+1));
const STORAGE_BASE='https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/';
export const mosesB2ImageUrl=(chapter:number)=>`${STORAGE_BASE}${encodeURIComponent(`Moses/b2/images/moses_b2_chapter${chapter}.png`)}?alt=media`;
const mosesB2GlossaryCategoryByChapter:Record<number,string>={
1:'History & Society',2:'History & Oppression',3:'Power & Economy',4:'Birth & Providence',5:'Power & Oppression',6:'Policy & Providence',
7:'Care & Faith',8:'Identity & Justice',9:'Conflict & Consequences',10:'Repentance & Escape',11:'Escape & Trust',12:'Service & Daily Life',
13:'Hospitality & Family',14:'Preparation & Prophethood',15:'Revelation & Signs',16:'Miracles & Revelation',17:'Mission & Family',18:'Prophethood & Communication',
19:'Debate & Authority',20:'Evidence & Miracles',21:'Public Persuasion & Power',22:'Exodus & Liberation',23:'Judgment & Consequences',24:'Guidance & Covenant',
};
const englishLanguageFocus={...mosesB2LanguageFocusExercises,...mosesB2LanguageFocusExercisesPart2,...mosesB2LanguageFocusExercisesPart3,...mosesB2LanguageFocusExercisesPart4};
const finalChallenge=mosesB2FinalChallengeExercises;
const standardized=rawMosesB2Pages.map(page=>STORY_IDS.has(page.id)?{...page,image:mosesB2ImageUrl(page.id),...mosesB2StoryNotes[page.id],animatedWords:undefined,syncPoints:undefined,timedChunks:undefined}:page);
// The Master Glossary lists every Word Note with its chapter and the story sentence it comes from.
const storySentences=(content:string):string[]=>content
  .split(/\n+/)
  .flatMap(paragraph=>paragraph.trim().split(/(?<=[.!?][”"’]?)\s+/))
  .map(sentence=>sentence.trim())
  .filter(Boolean);
const masterGlossary:NonNullable<PageData['vocabulary']>=standardized
  .filter(page=>STORY_IDS.has(page.id))
  .flatMap(page=>(page.vocabulary??[]).map(item=>{
    const storyExample=storySentences(page.content??'').find(sentence=>highlightPhraseOccurs(sentence,item.word,'en'));
    if(!storyExample)throw new Error(`[Moses B2 EN] Missing source example for ${item.word} in chapter ${page.id}.`);
    return{...item,level:'B2' as const,chapter:page.id,chapterTitle:page.title,storyExample,category:mosesB2GlossaryCategoryByChapter[page.id]??'Story Vocabulary'};
  }));
export const mosesB2Pages:PageData[]=standardized.map(page=>{if(STORY_IDS.has(page.id)){const lf=englishLanguageFocus[page.id];return{...page,exercises:mosesB2QuickChallenges[page.id]?[mosesB2QuickChallenges[page.id]]:[],...(lf?{languageFocusExercises:lf}:{})};}if(page.id===25)return{...page,exercises:mosesB2KnowledgeCheckExercises};if(page.id===26)return{...page,vocabularyPairs:mosesB2VocabularyChallengePairs};if(page.id===27)return{...page,vocabulary:masterGlossary};if(page.id===29)return{...page,exercises:mosesB2LanguageReviewExercises};if(page.id===30)return{...page,exercises:finalChallenge};return page;});
export const pages:PageData[]=mosesB2Pages;
