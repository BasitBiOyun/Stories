import type { PageData } from '../../../../types';

type WordNote = { word: string; definition: string };
type Hotspot = { id: string; x: number; y: number; title: string; description: string };

const story = (
  id: number,
  title: string,
  audioUrl: string,
  content: string,
  vocabulary: WordNote[],
  hotspots: Hotspot[],
): PageData => ({
  id,
  type: 'story',
  title,
  image: '',
  audioUrl,
  content,
  vocabulary,
  hotspots,
});

// Canonical Moses B1 story/page source. Real chapter images are resolved from
// the shared Moses B1 Storage manifest; EN narration remains a chapter-correct
// source fallback. Learning activities live in exercises/languageFocus files.
export const mosesB1Pages: PageData[] = [
  story(
    1,
    'The Pharaoh’s Fear',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=88f2d120-a892-42d0-a91d-ffcb586f8b76',
    `Moses (pbuh) was a great prophet of Allah. He was born in the land of Egypt. He lived there in the 13th century BC, over 3000 years ago. At that time, the Pharaoh ruled Egypt. He was a dictatorial king of Egypt. He did not believe in Allah and saw himself as a god. The Children of Israel or the Israelites were a large group in Egypt and they were the grandchildren of Jacob (pbuh) and Joseph (pbuh). They believed in Allah alone, just like their ancestor, Prophet Abraham (pbuh). So, they did not believe that the Pharaoh was a god. The Pharaoh feared that this group, which was larger than the Egyptians, would take control of his kingdom. That’s why he was rude and harsh to the Children of Israel. He used every method to upset them. He made the Children of Israel do dangerous work for little or no money. Years passed and the despotic kings continued to rule Egypt. One day the Pharaoh had a dream. In his vision, he saw an Israelite take him down from his throne.`,
    [
      { word: 'vision', definition: 'A dream that has a special meaning.' },
      { word: 'ancestor', definition: 'A family member who lived many generations before.' },
      { word: 'harsh', definition: 'Cruel, strict, or unkind.' },
      { word: 'kingdom', definition: 'A country that is ruled by a royal family.' },
    ],
    [
      { id: 'moses-b1-en-1-1', x: 31, y: 40, title: 'Pharaoh', description: 'The Pharaoh ruled Egypt harshly and feared losing control of his kingdom.' },
      { id: 'moses-b1-en-1-2', x: 70, y: 58, title: 'Children of Israel', description: 'They were a large community in Egypt who believed in Allah alone.' },
    ],
  ),
  story(
    2,
    'The Pharaoh’s Dream',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F01_Chapter_2_The_Pharaoh%E2%80%99s_Dream.mp3?alt=media&token=6dd1d806-12dd-4af2-bc5f-16efa6e46277',
    `Ibn Abbas said, “The Pharaoh saw a fire in his dream. The fire came from Jerusalem and burnt the houses of the Egyptians, but did not do any harm to the Children of Israel.” When he woke up, he called all his advisors and magicians and asked about the dream. They said, “A boy will be born of the Children of Israel and the Egyptian people will die at this boy’s hands.” Then, the Pharaoh told his soldiers, “Kill all the newborn boys of the Children of Israel.” His soldiers broke into houses and searched the rooms. When they found baby boys, they killed them. All mothers, fathers and sisters cried, but the soldiers who were heartless showed no pity. Moses (pbuh) was born in that year. His mother was so frightened that she was unable to sleep at night. She was scared that when Moses cried, the soldiers could hear his voice. She did not know what to do. She prayed to Allah for help. Allah heard her prayers and advised her, “Take a basket.”`,
    [
      { word: 'advisor', definition: 'A person whose job is to help a ruler make decisions.' },
      { word: 'newborn', definition: 'Only a few days or weeks old.' },
      { word: 'broke into', definition: 'Entered a building by force.' },
      { word: 'pity', definition: 'A feeling of sadness and kindness for someone who is suffering.' },
    ],
    [
      { id: 'moses-b1-en-2-1', x: 38, y: 31, title: 'The Dream', description: 'The Pharaoh’s dream made him fear the birth of a boy from the Children of Israel.' },
      { id: 'moses-b1-en-2-2', x: 66, y: 66, title: 'A Mother’s Prayer', description: 'Moses’s mother was frightened for her baby and prayed to Allah for help.' },
    ],
  ),
  story(
    3,
    'A Baby in the River',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F02_Chapter_3_A_Baby_in_the_River.mp3?alt=media&token=ba89a274-3967-4e6c-a87e-373e3fc5aeb1',
    `“Put your baby in the basket. Take the basket to the River Nile. Waters will carry it to the shelter.” Moses’s mother put the baby Moses (pbuh) in a basket and took it to the river. There she put the basket in the water. The basket was carried away by the waters. Moses’s mother was very worried and told her daughter to follow the basket. She was so sad, but she knew that Allah was kinder to the baby Moses than she could be. Allah was their Lord and also the Lord of the Nile. Allah told the waves to be kind while carrying the baby. Soon, the waves brought the basket ashore near the Pharaoh’s palace. The palace servants saw the basket and took it to the Pharaoh and the queen, Asiye. When Queen Asiye saw the baby, she felt a strong love for him in her heart. The queen, who was different from her husband, was good, kind-hearted, and believed in Allah. While she was looking at the baby, she told her husband, “I will take him to the palace and look after him.”`,
    [
      { word: 'shelter', definition: 'A safe place that protects someone.' },
      { word: 'ashore', definition: 'Onto the land from the water.' },
      { word: 'servants', definition: 'People who work in a house or palace.' },
      { word: 'kind-hearted', definition: 'Gentle and caring towards others.' },
    ],
    [
      { id: 'moses-b1-en-3-1', x: 27, y: 59, title: 'The Basket', description: 'The waters of the Nile carried baby Moses (pbuh) in a basket to the Pharaoh’s palace.' },
      { id: 'moses-b1-en-3-2', x: 73, y: 36, title: 'Queen Asiye', description: 'Queen Asiye saw the baby, loved him, and wanted to care for him.' },
    ],
  ),
  story(
    4,
    'Back to His Mother',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F03_Chapter_4_Back_to_His_Mother.mp3?alt=media&token=12daf6fb-6ead-47ef-bf22-f6d440431ece',
    `The Pharaoh accepted her decision. She said to her servants, “Find a nurse for the baby.” Moses’ sister saw everything, and immediately ran to the Queen and said, “I know a good woman. She lives nearby. She will be a good nurse for the baby.” And she brought her mother to be Moses’s nurse in the palace. Allah sent Moses (pbuh) back to his mother, and baby Moses was in his mother’s arms again. Moses’ mother looked after her own baby. Allah is the Best Protector. Queen Asiye also took care of Moses and raised him in the palace with love. People always remember her because of her goodness and courage. Moses grew up safely in the palace of the Pharaoh. He always loved Allah and prayed to Him. He knew that the Pharaoh was not a god. Years passed and Moses became a strong young man. He was always willing to help the weak people. Young Moses felt close to the Children of Israel because he was originally not from a family of the palace and his mother was one of the Children of Israel.`,
    [
      { word: 'nurse', definition: 'A woman who feeds and cares for a baby.' },
      { word: 'courage', definition: 'Bravery in a difficult or dangerous situation.' },
      { word: 'raised', definition: 'Brought up and cared for a child.' },
      { word: 'originally', definition: 'From the beginning; by birth or family.' },
    ],
    [
      { id: 'moses-b1-en-4-1', x: 34, y: 67, title: 'The Nurse', description: 'Moses’s own mother became his nurse and cared for him again.' },
      { id: 'moses-b1-en-4-2', x: 69, y: 32, title: 'A Loving Home', description: 'Queen Asiye raised Moses (pbuh) in the palace with love and courage.' },
    ],
  ),
  story(
    5,
    'A Mistake in the Bazaar',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F04_Chapter_5_A_Mistake_in_the_Bazaar.mp3?alt=media&token=11a36743-f419-4b9d-b47d-d37505d638b8',
    `One day, while Moses (pbuh) was walking in the bazaar, he saw two men fighting. One of them was an Egyptian, while the other was from the Children of Israel. Suddenly, a poor and weak man from the Children of Israel called out, “Help me!” Moses ran to help him. He hit the Egyptian and accidentally caused someone's death. Moses was very upset. He prayed to Allah, “Forgive me! I didn’t do it on purpose. I have wronged myself. This is of Satan’s doing.” (Surah al-Qasas: 15–16) Allah pardoned him, because He is Forgiving and Merciful. The next day, Moses was again in the bazaar where he saw two men fighting. One of them was the same man from the Children of Israel who Moses helped the day before. The man once more called out to Moses, “Help me!” Moses understood that the Israelite was a quarrelsome man, not a peaceable man. Moses approached those who were fighting. The man from the Children of Israel made fun of Moses, “You accidentally caused someone's death yesterday. Are you going to kill me too?”`,
    [
      { word: 'accidentally', definition: 'By chance and without meaning to.' },
      { word: 'pardoned', definition: 'Forgave someone for a wrong action.' },
      { word: 'quarrelsome', definition: 'Often arguing or fighting.' },
      { word: 'peaceable', definition: 'Not liking to argue or fight; calm and friendly.' },
    ],
    [
      { id: 'moses-b1-en-5-1', x: 24, y: 43, title: 'The Mistake', description: 'Moses (pbuh) accidentally caused the Egyptian’s death while he was trying to help.' },
      { id: 'moses-b1-en-5-2', x: 76, y: 57, title: 'Forgiveness', description: 'Moses (pbuh) prayed to Allah after his mistake, and Allah pardoned him.' },
    ],
  ),
  story(
    6,
    'Escape from Egypt',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F05_Chapter_6_Escape_from_Egypt.mp3?alt=media&token=e933fc91-c0fa-4c87-a477-bc2b0b758623',
    `His sadness increased even more. At this moment a friend of Moses (pbuh) came and said to him, “The Pharaoh’s soldiers are looking for you. You killed an Egyptian yesterday. Now they are going to catch you. Run away from the city.” Moses knew that the punishment for killing an Egyptian was death. Moses escaped from the soldiers. He left Egypt and travelled for a long time. He was not alone as Allah guided him. After many days, he reached the land of Midian, which was the closest place between Egypt and Syria. The Pharaoh was not the ruler in this land. Moses was tired and thirsty. He was looking for water. Soon, he found a well where many men gathered. These were shepherds who were watering their sheep and cattle. Far from the spring two girls were sitting. They also had sheep with them. But they did not go near it. Moses asked the girls, “Why are you sitting far away from the spring? Why aren’t you taking your sheep to drink water?”`,
    [
      { word: 'punishment', definition: 'A penalty for doing something wrong.' },
      { word: 'escaped', definition: 'Got away from danger.' },
      { word: 'cattle', definition: 'Cows and other large farm animals.' },
      { word: 'well', definition: 'A deep hole in the ground from which people take water.' },
    ],
    [
      { id: 'moses-b1-en-6-1', x: 41, y: 31, title: 'A Warning', description: 'A friend warned Moses (pbuh) that the Pharaoh’s soldiers were looking for him, so he left Egypt.' },
      { id: 'moses-b1-en-6-2', x: 63, y: 69, title: 'The Well in Midian', description: 'In Midian, Moses (pbuh) found shepherds at a well and two girls waiting far from the water.' },
    ],
  ),
  story(
    7,
    'The Two Sisters',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F06_Chapter_7_The_Two_Sisters.mp3?alt=media&token=3f0bee72-088c-43c7-9f53-b7cf3da5ccf8',
    `The girls said, “Our father is very old. He cannot come with us. There are no young men in our house to help us with the animals. So, we have to take the sheep to the water ourselves. We have to wait our turn. We have to be patient until the other sheepmen go away.” Moses (pbuh) understood that the two sisters needed help. He took their sheep to the spring and gave them water. The girls were very happy. They took their sheep and went home. When the sisters came home early, their father asked, “What happened? You came home very early!” The sisters said, “A young man helped us to water our sheep. We did not have to wait until the other shepherds went away.” The father of these girls was Shu’ayb (pbuh). Shu’ayb (pbuh) was a messenger of Allah to the eastern part of the Gulf of Aqaba, Midian. Prophet Shu’ayb (pbuh) was very old. That’s why he had to send the girls alone.`,
    [
      { word: 'turn', definition: 'The time when you can do something after other people.' },
      { word: 'shepherds', definition: 'People who look after sheep.' },
      { word: 'messenger', definition: 'A person chosen to deliver Allah’s message.' },
      { word: 'very old', definition: 'Having lived for a great many years.' },
    ],
    [
      { id: 'moses-b1-en-7-1', x: 29, y: 63, title: 'Waiting Their Turn', description: 'The sisters waited because their father was very old and they had no one else to help.' },
      { id: 'moses-b1-en-7-2', x: 72, y: 34, title: 'Helping Others', description: 'Moses (pbuh) watered the sisters’ sheep, so they returned home early.' },
    ],
  ),
  story(
    8,
    'A Simple Life in Midian',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F07_Chapter_8_A_Simple_Life_in_Midian.mp3?alt=media&token=c081e538-c8bc-48cc-871b-bbcb6daaa664',
    `Shu’ayb (pbuh) said, “Go and call the young man, I would like to thank him for the work he did.” Moses (pbuh) came to the house, where he ate food with the girls’ father. Shu’ayb (pbuh) offered Moses a job. He accepted the offer, because he was a stranger in Midian and he urgently needed a job and a house. Moses helped the family with their work while he was staying with them. Later, he married one of the sisters. They lived a simple life with patience. After living in Midian for about ten years, with the guidance of Allah, Moses decided to go back to Egypt. He took his family and started to travel towards Egypt. They travelled a long time. It was winter. They met nobody on the way. It was getting dark and cold. They were crossing a valley between mountains. Suddenly, Moses saw a fire on the hillside. He said to his family, “Wait here. Let me go and take some burning sticks from the fire to get warm.”`,
    [
      { word: 'offered', definition: 'Gave someone a chance to accept something.' },
      { word: 'stranger', definition: 'A person who is new to a place and does not know people there.' },
      { word: 'valley', definition: 'Low land between hills or mountains.' },
      { word: 'hillside', definition: 'The sloping side of a small mountain.' },
    ],
    [
      { id: 'moses-b1-en-8-1', x: 37, y: 68, title: 'A New Family', description: 'Moses (pbuh) accepted work, married one of the sisters, and lived in Midian for about ten years.' },
      { id: 'moses-b1-en-8-2', x: 67, y: 28, title: 'The Fire', description: 'On the journey back to Egypt, Moses (pbuh) saw a fire on the hillside.' },
    ],
  ),
  story(
    9,
    'The Voice on the Mountain',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F08_Chapter_9_The_Voice_on_the_Mountain.mp3?alt=media&token=a9af03f4-1f7c-4510-a7da-3bacff8c1507',
    `Moses (pbuh) climbed the mountain. It was already dark and everywhere was very quiet. In the silence he heard a thundering voice: “Moses, I am your Lord. I chose you. Listen to me. I am Allah. There is no god but Allah. Remember Me and pray to Me.” Then Allah told Moses, “Put down your walking stick!” Moses put down his staff on the ground. It turned into a big snake! Once more Allah spoke to Moses, “Put your hand into your chest. Now take it out. See, your hand is now shining like silver. But it is not harmed.” Allah said, “These are signs of My power. Show these signs to the Pharaoh. And tell him of the power of Allah.” Allah told Moses to go to Egypt and show the Pharaoh the signs and warn him to get guidance from Allah. After this message from Allah, Moses became a Messenger of Allah, a prophet. (See Surah Taha: 9–24.) Upon this, Moses (pbuh) headed to Egypt.`,
    [
      { word: 'silence', definition: 'A state in which there is no sound at all.' },
      { word: 'staff', definition: 'A long stick used for walking or support.' },
      { word: 'signs', definition: 'Miracles or proofs of Allah’s power.' },
      { word: 'guidance', definition: 'Help and direction that show a person the right way to live.' },
    ],
    [
      { id: 'moses-b1-en-9-1', x: 25, y: 35, title: 'The Call', description: 'Allah called Moses (pbuh) on the mountain and gave him a mission.' },
      { id: 'moses-b1-en-9-2', x: 75, y: 62, title: 'Staff and Shining Hand', description: 'The staff and the shining hand were signs of Allah’s power.' },
    ],
  ),
  story(
    10,
    'The King’s Magicians',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F09_Chapter_10_The_King%E2%80%99s_Magicians.mp3?alt=media&token=0ee1f735-751a-475f-90b3-f7c61f7feffb',
    `Allah chose Moses (pbuh) to be His prophet. Moses (pbuh) took his brother Harun (pbuh) with him as his companion and went to the palace. The king was sitting on his throne, and his advisors and soldiers were standing around him. Moses (pbuh) told him about Allah. He explained to him that he was the Messenger from the Lord of the universe. The king listened to Moses (pbuh) and he thought Moses had lost his mind. After making every effort to convince him, Moses (pbuh) realized that logical discussions would not work. The Pharaoh kept refusing to believe in Allah. Moses (pbuh) had no choice but to display the miracles. Moses (pbuh) got his staff and threw it on the ground. The staff turned into a big snake! Then he put his arm in his armpit. When he took his arm out, it was shining white! These were miracles of Allah. Allah gave them to Moses (pbuh) in order to help him against the Pharaoh. The king and his advisors laughed at him.`,
    [
      { word: 'effort', definition: 'Hard work that you do to try to achieve something.' },
      { word: 'throne', definition: 'A special seat for a king or ruler.' },
      { word: 'universe', definition: 'Everything that exists, including all space, stars and planets.' },
      { word: 'display', definition: 'To show something so that people can see it.' },
    ],
    [
      { id: 'moses-b1-en-10-1', x: 40, y: 29, title: 'Harun', description: 'Moses (pbuh) took his brother Harun (pbuh) with him when he went to the Pharaoh.' },
      { id: 'moses-b1-en-10-2', x: 62, y: 68, title: 'Signs in the Palace', description: 'When words did not convince the Pharaoh, Moses (pbuh) showed him the staff and the shining hand.' },
    ],
  ),
  story(
    11,
    'The Miracle of the Staff',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F10_Chapter_11_The_Miracle_of_the_Staff.mp3?alt=media&token=dd7499b4-4031-4904-a038-ad43505e4ae0',
    `They made fun of Moses (pbuh) and Allah. The king said to Moses (pbuh), “This is only magic. All of my magicians can do this.” He invited his magicians to the palace. The magicians came with sticks in their hands. Some were holding ropes. They put down the sticks and ropes. Once the sticks and ropes fell to the ground, they looked just like snakes! When Moses (pbuh) saw them, he got frightened. But Allah spoke to Moses (pbuh), “Throw down your staff!” Moses (pbuh) threw down his staff and it turned into a huge snake. In a second, his staff ate up all the snakes of the magicians. The magicians who witnessed this miracle bowed down to Allah. They shouted, “We believe in the Lord of Moses and Harun!” The king still refused to believe in Allah, because he was arrogant. The Pharaoh did not want to let those who worshipped Allah live. He continued to trouble Moses (pbuh) and his people day and night. He told his advisors and soldiers, “Be rude to them!”`,
    [
      { word: 'made fun of', definition: 'Laughed at someone in an unkind way.' },
      { word: 'bowed down', definition: 'Bent the body low to the ground to worship.' },
      { word: 'arrogant', definition: 'Thinking that one is better or greater than others.' },
      { word: 'trouble', definition: 'Cause problems or suffering for someone.' },
    ],
    [
      { id: 'moses-b1-en-11-1', x: 31, y: 64, title: 'The Magicians', description: 'The magicians saw the miracle, bowed down to Allah, and declared their belief.' },
      { id: 'moses-b1-en-11-2', x: 72, y: 37, title: 'The Huge Snake', description: 'Moses’s staff became a huge snake and ate up all the snakes of the magicians.' },
    ],
  ),
  story(
    12,
    'The Red Sea',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F11_Chapter_12_The_Red_Sea.mp3?alt=media&token=a8bda307-b5a4-48bf-ae63-602dc7c99a06',
    `Life became harder for them day by day. Moses (pbuh) asked Allah for help. And Allah guided him and told him, “Travel by night with My servants...” Moses (pbuh) called his people and said, “Get ready for the journey. We are going away from Egypt. But you must keep it secret. Nobody should see us. We will leave at night.” They left Egypt at night. They were a large group and among them there were many old people and children. The children and the old could not walk fast and got tired very quickly. That’s why the caravan moved slowly. When the Pharaoh noticed that they had left the land, he prepared his huge army and easily managed to catch up with them. When the sun rose, the caravan reached the Red Sea. Moses (pbuh) and his people saw the king and his soldiers following them. His people panicked. But Moses (pbuh) said, “Calm down! Allah is with us and will show us the way to safety.” Soon, the Pharaoh and his army caught up with them!`,
    [
      { word: 'secret', definition: 'Known only to a few people and hidden from others.' },
      { word: 'caravan', definition: 'A group of people travelling together.' },
      { word: 'catch up with', definition: 'Reach someone after following them.' },
      { word: 'panicked', definition: 'Felt sudden strong fear.' },
    ],
    [
      { id: 'moses-b1-en-12-1', x: 37, y: 34, title: 'The Night Journey', description: 'Moses (pbuh) and his people secretly left Egypt at night.' },
      { id: 'moses-b1-en-12-2', x: 68, y: 66, title: 'The Army Behind Them', description: 'The caravan reached the Red Sea while the Pharaoh’s army was catching up with them.' },
    ],
  ),
  story(
    13,
    'The Cruel King Drowns',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fb1%2Faudio%2F12_Chapter_13_The_Cruel_King_Drowns.mp3?alt=media&token=5186f26c-0d2d-4f78-bdee-487451dc8d30',
    `They were trapped with the Red Sea in front and the king’s army behind them. But Allah was with them. He told Moses (pbuh), “Hit the sea with your stick!” When the stick touched the waters of the sea, a miracle happened! The sea parted! The waves rose high like walls and did not fall down! They could see the sandy ground! Allah made a path for them across the sea! Moses (pbuh) and his people safely walked between the walls of water. The Pharaoh and his soldiers were right behind them. They also saw the road in the middle of the sea. But the Pharaoh turned to his soldiers and said, “Look! The sea opened at my order.” They entered the parted waters and when they were midway, Allah ordered the sea to close. The sea closed over them, and they drowned. The story of Moses (pbuh) has many lessons for us to learn. It again reminds us that no one can enslave another human being. It also shows that the only power over human beings is Allah. Allah sent prophets to show people a better life. They came to teach about Allah and show people right and wrong. Allah is not visible to physical eyes, but He is with us and when we pray to Him, He always guides us on the right path.`,
    [
      { word: 'trapped', definition: 'Unable to escape from a dangerous place.' },
      { word: 'parted', definition: 'Separated or opened into two sides.' },
      { word: 'drowned', definition: 'Died under water because they could not breathe.' },
      { word: 'right path', definition: 'The correct moral and spiritual way.' },
    ],
    [
      { id: 'moses-b1-en-13-1', x: 26, y: 55, title: 'The Path Through the Sea', description: 'Allah opened a path through the sea for Moses (pbuh) and his people.' },
      { id: 'moses-b1-en-13-2', x: 74, y: 35, title: 'The Final Lesson', description: 'The story teaches that no one can enslave another human being and that Allah guides those who pray to Him.' },
    ],
  ),
  { id: 14, type: 'quiz', title: 'Knowledge Check', image: '', audioUrl: '', content: 'Test your understanding of the B1 story of Prophet Moses (pbuh).' },
  { id: 15, type: 'vocabulary-match', title: 'Vocabulary Challenge', image: '', audioUrl: '', content: 'Match the B1 story words with their meanings.' },
  {
    id: 16,
    type: 'glossary',
    title: 'Master Glossary',
    image: '',
    content: 'Review all key vocabulary from the story in one place.',
    vocabulary: [
      {
            "word": "vision",
            "definition": "A dream that has a special meaning.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈvɪʒən/",
            "wordFamily": [
                  "vision",
                  "visionary"
            ],
            "collocations": [
                  "have a vision",
                  "see in a vision"
            ],
            "synonyms": [
                  "dream"
            ],
            "chapter": 1,
            "chapterTitle": "The Pharaoh’s Fear",
            "storyExample": "In his vision, he saw an Israelite take him down from his throne.",
            "category": "Dreams & Signs"
      },
      {
            "word": "ancestor",
            "definition": "A family member who lived many generations before.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈænsestər/",
            "wordFamily": [
                  "ancestor",
                  "ancestry"
            ],
            "collocations": [
                  "common ancestor",
                  "family ancestor"
            ],
            "synonyms": [
                  "forebear"
            ],
            "chapter": 1,
            "chapterTitle": "The Pharaoh’s Fear",
            "storyExample": "They believed in Allah alone, just like their ancestor, Prophet Abraham (pbuh).",
            "category": "Family & History"
      },
      {
            "word": "harsh",
            "definition": "Cruel, strict, or unkind.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/hɑːrʃ/",
            "wordFamily": [
                  "harsh",
                  "harshly",
                  "harshness"
            ],
            "collocations": [
                  "harsh treatment",
                  "rude and harsh"
            ],
            "synonyms": [
                  "cruel",
                  "severe"
            ],
            "chapter": 1,
            "chapterTitle": "The Pharaoh’s Fear",
            "storyExample": "That’s why he was rude and harsh to the Children of Israel.",
            "category": "Character & Conduct"
      },
      {
            "word": "kingdom",
            "definition": "A country that is ruled by a royal family.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈkɪŋdəm/",
            "wordFamily": [
                  "king",
                  "kingdom"
            ],
            "collocations": [
                  "rule a kingdom",
                  "take control of a kingdom"
            ],
            "chapter": 1,
            "chapterTitle": "The Pharaoh’s Fear",
            "storyExample": "The Pharaoh feared that this group, which was larger than the Egyptians, would take control of his kingdom.",
            "category": "Places & Society"
      },
      {
            "word": "advisor",
            "definition": "A person whose job is to help a ruler make decisions.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ədˈvaɪzər/",
            "wordFamily": [
                  "advise",
                  "advice",
                  "advisor"
            ],
            "collocations": [
                  "royal advisor",
                  "call your advisors"
            ],
            "synonyms": [
                  "counsellor"
            ],
            "chapter": 2,
            "chapterTitle": "The Pharaoh’s Dream",
            "storyExample": "When he woke up, he called all his advisors and magicians and asked about the dream.",
            "category": "People & Roles"
      },
      {
            "word": "newborn",
            "definition": "Only a few days or weeks old.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈnuːbɔːrn/",
            "wordFamily": [
                  "newborn"
            ],
            "collocations": [
                  "newborn baby",
                  "newborn boys"
            ],
            "chapter": 2,
            "chapterTitle": "The Pharaoh’s Dream",
            "storyExample": "Then, the Pharaoh told his soldiers, “Kill all the newborn boys of the Children of Israel.”",
            "category": "People & Life"
      },
      {
            "word": "broke into",
            "definition": "Entered a building by force.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/brəʊk ˈɪntuː/",
            "wordFamily": [
                  "break into",
                  "broke into",
                  "broken into"
            ],
            "collocations": [
                  "break into a house",
                  "break into a building"
            ],
            "chapter": 2,
            "chapterTitle": "The Pharaoh’s Dream",
            "storyExample": "His soldiers broke into houses and searched the rooms.",
            "category": "Actions & Events"
      },
      {
            "word": "pity",
            "definition": "A feeling of sadness and kindness for someone who is suffering.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈpɪti/",
            "wordFamily": [
                  "pity",
                  "pitiful"
            ],
            "collocations": [
                  "show no pity",
                  "feel pity for"
            ],
            "synonyms": [
                  "compassion",
                  "mercy"
            ],
            "chapter": 2,
            "chapterTitle": "The Pharaoh’s Dream",
            "storyExample": "All mothers, fathers and sisters cried, but the soldiers who were heartless showed no pity.",
            "category": "Character & Values"
      },
      {
            "word": "shelter",
            "definition": "A safe place that protects someone.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈʃeltər/",
            "wordFamily": [
                  "shelter",
                  "sheltered"
            ],
            "collocations": [
                  "safe shelter",
                  "find shelter"
            ],
            "synonyms": [
                  "refuge"
            ],
            "chapter": 3,
            "chapterTitle": "A Baby in the River",
            "storyExample": "Waters will carry it to the shelter.",
            "category": "Safety & Places"
      },
      {
            "word": "ashore",
            "definition": "Onto the land from the water.",
            "partOfSpeech": "adverb",
            "level": "B1",
            "pronunciation": "/əˈʃɔːr/",
            "collocations": [
                  "come ashore",
                  "wash ashore"
            ],
            "chapter": 3,
            "chapterTitle": "A Baby in the River",
            "storyExample": "Soon, the waves brought the basket ashore near the Pharaoh’s palace.",
            "category": "Movement & Place"
      },
      {
            "word": "servants",
            "definition": "People who work in a house or palace.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈsɜːrvənts/",
            "wordFamily": [
                  "serve",
                  "servant",
                  "service"
            ],
            "collocations": [
                  "palace servants",
                  "household servants"
            ],
            "chapter": 3,
            "chapterTitle": "A Baby in the River",
            "storyExample": "The palace servants saw the basket and took it to the Pharaoh and the queen, Asiye.",
            "category": "People & Roles"
      },
      {
            "word": "kind-hearted",
            "definition": "Gentle and caring towards others.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˌkaɪnd ˈhɑːrtɪd/",
            "wordFamily": [
                  "kind",
                  "kindness",
                  "kind-hearted"
            ],
            "collocations": [
                  "kind-hearted person",
                  "good and kind-hearted"
            ],
            "synonyms": [
                  "compassionate"
            ],
            "antonyms": [
                  "heartless"
            ],
            "chapter": 3,
            "chapterTitle": "A Baby in the River",
            "storyExample": "The queen, who was different from her husband, was good, kind-hearted, and believed in Allah.",
            "category": "Character & Values"
      },
      {
            "word": "nurse",
            "definition": "A woman who feeds and cares for a baby.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/nɜːrs/",
            "wordFamily": [
                  "nurse",
                  "nursing"
            ],
            "collocations": [
                  "find a nurse",
                  "baby’s nurse"
            ],
            "chapter": 4,
            "chapterTitle": "Back to His Mother",
            "storyExample": "She said to her servants, “Find a nurse for the baby.”",
            "category": "People & Roles"
      },
      {
            "word": "courage",
            "definition": "Bravery in a difficult or dangerous situation.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈkɜːrɪdʒ/",
            "wordFamily": [
                  "courage",
                  "courageous",
                  "courageously"
            ],
            "collocations": [
                  "show courage",
                  "great courage"
            ],
            "synonyms": [
                  "bravery"
            ],
            "antonyms": [
                  "cowardice"
            ],
            "chapter": 4,
            "chapterTitle": "Back to His Mother",
            "storyExample": "People always remember her because of her goodness and courage.",
            "category": "Character & Values"
      },
      {
            "word": "raised",
            "definition": "Brought up and cared for a child.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/reɪzd/",
            "wordFamily": [
                  "raise",
                  "raised",
                  "raising"
            ],
            "collocations": [
                  "raise a child",
                  "be raised in a palace"
            ],
            "synonyms": [
                  "brought up"
            ],
            "chapter": 4,
            "chapterTitle": "Back to His Mother",
            "storyExample": "Queen Asiye also took care of Moses and raised him in the palace with love.",
            "category": "Family & Care"
      },
      {
            "word": "originally",
            "definition": "From the beginning; by birth or family.",
            "partOfSpeech": "adverb",
            "level": "B1",
            "pronunciation": "/əˈrɪdʒənəli/",
            "wordFamily": [
                  "origin",
                  "original",
                  "originally"
            ],
            "collocations": [
                  "originally from",
                  "originally belong"
            ],
            "synonyms": [
                  "at first"
            ],
            "chapter": 4,
            "chapterTitle": "Back to His Mother",
            "storyExample": "Young Moses felt close to the Children of Israel because he was originally not from a family of the palace and his mother was one of the Children of Israel.",
            "category": "Identity & Origin"
      },
      {
            "word": "accidentally",
            "definition": "By chance and without meaning to.",
            "partOfSpeech": "adverb",
            "level": "B1",
            "pronunciation": "/ˌæksɪˈdentəli/",
            "wordFamily": [
                  "accident",
                  "accidental",
                  "accidentally"
            ],
            "collocations": [
                  "accidentally cause",
                  "happen accidentally"
            ],
            "synonyms": [
                  "by chance"
            ],
            "antonyms": [
                  "deliberately"
            ],
            "chapter": 5,
            "chapterTitle": "A Mistake in the Bazaar",
            "storyExample": "He hit the Egyptian and accidentally caused someone's death.",
            "category": "Actions & Choices"
      },
      {
            "word": "pardoned",
            "definition": "Forgave someone for a wrong action.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈpɑːrdənd/",
            "wordFamily": [
                  "pardon",
                  "pardoned"
            ],
            "collocations": [
                  "pardon someone",
                  "be pardoned"
            ],
            "synonyms": [
                  "forgave"
            ],
            "chapter": 5,
            "chapterTitle": "A Mistake in the Bazaar",
            "storyExample": "Allah pardoned him, because He is Forgiving and Merciful.",
            "category": "Forgiveness & Values"
      },
      {
            "word": "quarrelsome",
            "definition": "Often arguing or fighting.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈkwɔːrəlsəm/",
            "wordFamily": [
                  "quarrel",
                  "quarrelsome"
            ],
            "collocations": [
                  "quarrelsome person",
                  "quarrelsome behaviour"
            ],
            "synonyms": [
                  "argumentative"
            ],
            "antonyms": [
                  "peaceable"
            ],
            "chapter": 5,
            "chapterTitle": "A Mistake in the Bazaar",
            "storyExample": "Moses understood that the Israelite was a quarrelsome man, not a peaceable man.",
            "category": "Character & Conduct"
      },
      {
            "word": "peaceable",
            "definition": "Not liking to argue or fight; calm and friendly.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈpiːsəbəl/",
            "wordFamily": [
                  "peace",
                  "peaceful",
                  "peaceable"
            ],
            "collocations": [
                  "a peaceable man",
                  "peaceable people"
            ],
            "synonyms": [
                  "peaceful",
                  "calm"
            ],
            "chapter": 5,
            "chapterTitle": "A Mistake in the Bazaar",
            "storyExample": "Moses understood that the Israelite was a quarrelsome man, not a peaceable man.",
            "category": "Character & Conduct"
      },
      {
            "word": "punishment",
            "definition": "A penalty for doing something wrong.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈpʌnɪʃmənt/",
            "wordFamily": [
                  "punish",
                  "punishment"
            ],
            "collocations": [
                  "receive punishment",
                  "punishment for a crime"
            ],
            "chapter": 6,
            "chapterTitle": "Escape from Egypt",
            "storyExample": "Moses knew that the punishment for killing an Egyptian was death.",
            "category": "Law & Consequences"
      },
      {
            "word": "escaped",
            "definition": "Got away from danger.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ɪˈskeɪpt/",
            "wordFamily": [
                  "escape",
                  "escaped"
            ],
            "collocations": [
                  "escape danger",
                  "escape from soldiers"
            ],
            "synonyms": [
                  "got away"
            ],
            "chapter": 6,
            "chapterTitle": "Escape from Egypt",
            "storyExample": "Moses escaped from the soldiers.",
            "category": "Actions & Safety"
      },
      {
            "word": "cattle",
            "definition": "Cows and other large farm animals.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈkætəl/",
            "wordFamily": [
                  "cattle"
            ],
            "collocations": [
                  "sheep and cattle",
                  "water the cattle"
            ],
            "synonyms": [
                  "cows"
            ],
            "chapter": 6,
            "chapterTitle": "Escape from Egypt",
            "storyExample": "These were shepherds who were watering their sheep and cattle.",
            "category": "Nature & Animals"
      },
      {
            "word": "well",
            "definition": "A deep hole in the ground from which people take water.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/wel/",
            "wordFamily": [
                  "well"
            ],
            "collocations": [
                  "find a well",
                  "water from a well"
            ],
            "chapter": 6,
            "chapterTitle": "Escape from Egypt",
            "storyExample": "Soon, he found a well where many men gathered.",
            "category": "Places & Nature"
      },
      {
            "word": "turn",
            "definition": "The time when you can do something after other people.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/tɜːrn/",
            "wordFamily": [
                  "turn"
            ],
            "collocations": [
                  "wait your turn",
                  "take turns"
            ],
            "chapter": 7,
            "chapterTitle": "The Two Sisters",
            "storyExample": "We have to wait our turn.",
            "category": "Daily Life"
      },
      {
            "word": "shepherds",
            "definition": "People who look after sheep.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈʃepərdz/",
            "wordFamily": [
                  "shepherd",
                  "shepherds"
            ],
            "collocations": [
                  "shepherds and sheep",
                  "work as shepherds"
            ],
            "chapter": 7,
            "chapterTitle": "The Two Sisters",
            "storyExample": "We did not have to wait until the other shepherds went away.",
            "category": "People & Roles"
      },
      {
            "word": "messenger",
            "definition": "A person chosen to deliver Allah’s message.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈmesɪndʒər/",
            "wordFamily": [
                  "message",
                  "messenger"
            ],
            "collocations": [
                  "messenger of Allah",
                  "deliver a message"
            ],
            "chapter": 7,
            "chapterTitle": "The Two Sisters",
            "storyExample": "Shu’ayb (pbuh) was a messenger of Allah to the eastern part of the Gulf of Aqaba, Midian.",
            "category": "Spiritual Life"
      },
      {
            "word": "very old",
            "definition": "Having lived for a great many years.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˌveri ˈoʊld/",
            "collocations": [
                  "very old man",
                  "be very old"
            ],
            "synonyms": [
                  "elderly"
            ],
            "antonyms": [
                  "young"
            ],
            "chapter": 7,
            "chapterTitle": "The Two Sisters",
            "storyExample": "Prophet Shu’ayb (pbuh) was very old.",
            "category": "People & Age"
      },
      {
            "word": "offered",
            "definition": "Gave someone a chance to accept something.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈɔːfərd/",
            "wordFamily": [
                  "offer",
                  "offered",
                  "offering"
            ],
            "collocations": [
                  "offer a job",
                  "offer help"
            ],
            "chapter": 8,
            "chapterTitle": "A Simple Life in Midian",
            "storyExample": "Shu’ayb (pbuh) offered Moses a job.",
            "category": "Work & Actions"
      },
      {
            "word": "stranger",
            "definition": "A person who is new to a place and does not know people there.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈstreɪndʒər/",
            "wordFamily": [
                  "strange",
                  "stranger"
            ],
            "collocations": [
                  "complete stranger",
                  "stranger in a place"
            ],
            "chapter": 8,
            "chapterTitle": "A Simple Life in Midian",
            "storyExample": "He accepted the offer, because he was a stranger in Midian and he urgently needed a job and a house.",
            "category": "People & Society"
      },
      {
            "word": "valley",
            "definition": "Low land between hills or mountains.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈvæli/",
            "wordFamily": [
                  "valley",
                  "valleys"
            ],
            "collocations": [
                  "mountain valley",
                  "cross a valley"
            ],
            "chapter": 8,
            "chapterTitle": "A Simple Life in Midian",
            "storyExample": "They were crossing a valley between mountains.",
            "category": "Places & Nature"
      },
      {
            "word": "hillside",
            "definition": "The sloping side of a small mountain.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈhɪlsaɪd/",
            "wordFamily": [
                  "hill",
                  "hillside"
            ],
            "collocations": [
                  "on the hillside",
                  "steep hillside"
            ],
            "chapter": 8,
            "chapterTitle": "A Simple Life in Midian",
            "storyExample": "Suddenly, Moses saw a fire on the hillside.",
            "category": "Places & Nature"
      },
      {
            "word": "silence",
            "definition": "A state in which there is no sound at all.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈsaɪləns/",
            "wordFamily": [
                  "silent",
                  "silence",
                  "silently"
            ],
            "collocations": [
                  "in the silence",
                  "complete silence"
            ],
            "synonyms": [
                  "quiet"
            ],
            "chapter": 9,
            "chapterTitle": "The Voice on the Mountain",
            "storyExample": "In the silence he heard a thundering voice",
            "category": "Places & Nature"
      },
      {
            "word": "staff",
            "definition": "A long stick used for walking or support.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/stæf/",
            "wordFamily": [
                  "staff",
                  "staffs"
            ],
            "collocations": [
                  "walking staff",
                  "throw down a staff"
            ],
            "chapter": 9,
            "chapterTitle": "The Voice on the Mountain",
            "storyExample": "Moses put down his staff on the ground.",
            "category": "Objects"
      },
      {
            "word": "signs",
            "definition": "Miracles or proofs of Allah’s power.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/saɪnz/",
            "wordFamily": [
                  "sign",
                  "signs"
            ],
            "collocations": [
                  "signs of Allah",
                  "signs of power"
            ],
            "chapter": 9,
            "chapterTitle": "The Voice on the Mountain",
            "storyExample": "These are signs of My power.",
            "category": "Belief & Faith"
      },
      {
            "word": "guidance",
            "definition": "Help and direction that show a person the right way to live.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈɡaɪdəns/",
            "wordFamily": [
                  "guide",
                  "guided",
                  "guidance"
            ],
            "collocations": [
                  "seek guidance",
                  "guidance from Allah"
            ],
            "synonyms": [
                  "direction"
            ],
            "chapter": 9,
            "chapterTitle": "The Voice on the Mountain",
            "storyExample": "Allah told Moses to go to Egypt and show the Pharaoh the signs and warn him to get guidance from Allah.",
            "category": "Guidance & Faith"
      },
      {
            "word": "effort",
            "definition": "Hard work that you do to try to achieve something.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈefərt/",
            "wordFamily": [
                  "effort",
                  "effortless"
            ],
            "collocations": [
                  "make every effort",
                  "great effort"
            ],
            "synonyms": [
                  "hard work"
            ],
            "chapter": 10,
            "chapterTitle": "The King’s Magicians",
            "storyExample": "After making every effort to convince him, Moses (pbuh) realized that logical discussions would not work.",
            "category": "Actions & Change"
      },
      {
            "word": "throne",
            "definition": "A special seat for a king or ruler.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/θroʊn/",
            "wordFamily": [
                  "throne",
                  "thrones"
            ],
            "collocations": [
                  "sit on a throne",
                  "royal throne"
            ],
            "chapter": 10,
            "chapterTitle": "The King’s Magicians",
            "storyExample": "The king was sitting on his throne, and his advisors and soldiers were standing around him.",
            "category": "Objects & Power"
      },
      {
            "word": "universe",
            "definition": "Everything that exists, including all space, stars and planets.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈjuːnɪvɜːrs/",
            "wordFamily": [
                  "universe",
                  "universal"
            ],
            "collocations": [
                  "Lord of the universe",
                  "the whole universe"
            ],
            "synonyms": [
                  "creation",
                  "the worlds"
            ],
            "chapter": 10,
            "chapterTitle": "The King’s Magicians",
            "storyExample": "He explained to him that he was the Messenger from the Lord of the universe.",
            "category": "Spiritual Life"
      },
      {
            "word": "display",
            "definition": "To show something so that people can see it.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/dɪˈspleɪ/",
            "wordFamily": [
                  "display"
            ],
            "collocations": [
                  "display a miracle",
                  "on display"
            ],
            "synonyms": [
                  "show"
            ],
            "chapter": 10,
            "chapterTitle": "The King’s Magicians",
            "storyExample": "Moses (pbuh) had no choice but to display the miracles.",
            "category": "Actions & Change"
      },
      {
            "word": "made fun of",
            "definition": "Laughed at someone in an unkind way.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/meɪd fʌn əv/",
            "wordFamily": [
                  "fun"
            ],
            "collocations": [
                  "make fun of someone",
                  "be made fun of"
            ],
            "synonyms": [
                  "mocked"
            ],
            "chapter": 11,
            "chapterTitle": "The Miracle of the Staff",
            "storyExample": "They made fun of Moses (pbuh) and Allah.",
            "category": "Actions & Conduct"
      },
      {
            "word": "bowed down",
            "definition": "Bent the body low to the ground to worship.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/baʊd daʊn/",
            "wordFamily": [
                  "bow",
                  "bowed",
                  "bowing"
            ],
            "collocations": [
                  "bow down to Allah",
                  "bow down in worship"
            ],
            "synonyms": [
                  "prostrated"
            ],
            "chapter": 11,
            "chapterTitle": "The Miracle of the Staff",
            "storyExample": "The magicians who witnessed this miracle bowed down to Allah.",
            "category": "Spiritual Life"
      },
      {
            "word": "arrogant",
            "definition": "Thinking that one is better or greater than others.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈærəɡənt/",
            "wordFamily": [
                  "arrogant",
                  "arrogance",
                  "arrogantly"
            ],
            "collocations": [
                  "arrogant ruler",
                  "be arrogant"
            ],
            "synonyms": [
                  "proud"
            ],
            "antonyms": [
                  "humble"
            ],
            "chapter": 11,
            "chapterTitle": "The Miracle of the Staff",
            "storyExample": "The king still refused to believe in Allah, because he was arrogant.",
            "category": "Character & Values"
      },
      {
            "word": "trouble",
            "definition": "Cause problems or suffering for someone.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈtrʌbəl/",
            "wordFamily": [
                  "trouble",
                  "troubled",
                  "troubling"
            ],
            "collocations": [
                  "trouble someone",
                  "cause trouble"
            ],
            "synonyms": [
                  "harass"
            ],
            "chapter": 11,
            "chapterTitle": "The Miracle of the Staff",
            "storyExample": "He continued to trouble Moses (pbuh) and his people day and night.",
            "category": "Actions & Harm"
      },
      {
            "word": "secret",
            "definition": "Known only to a few people and hidden from others.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/ˈsiːkrət/",
            "wordFamily": [
                  "secret",
                  "secretly",
                  "secrecy"
            ],
            "collocations": [
                  "keep something secret",
                  "a secret plan"
            ],
            "synonyms": [
                  "hidden"
            ],
            "chapter": 12,
            "chapterTitle": "The Red Sea",
            "storyExample": "But you must keep it secret.",
            "category": "Safety & Situation"
      },
      {
            "word": "caravan",
            "definition": "A group of people travelling together.",
            "partOfSpeech": "noun",
            "level": "B1",
            "pronunciation": "/ˈkærəvæn/",
            "wordFamily": [
                  "caravan",
                  "caravans"
            ],
            "collocations": [
                  "large caravan",
                  "caravan moved"
            ],
            "chapter": 12,
            "chapterTitle": "The Red Sea",
            "storyExample": "That’s why the caravan moved slowly.",
            "category": "Travel & People"
      },
      {
            "word": "catch up with",
            "definition": "Reach someone after following them.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/kætʃ ʌp wɪð/",
            "collocations": [
                  "catch up with someone",
                  "manage to catch up"
            ],
            "synonyms": [
                  "reach"
            ],
            "chapter": 12,
            "chapterTitle": "The Red Sea",
            "storyExample": "When the Pharaoh noticed that they had left the land, he prepared his huge army and easily managed to catch up with them.",
            "category": "Actions & Movement"
      },
      {
            "word": "panicked",
            "definition": "Felt sudden strong fear.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈpænɪkt/",
            "wordFamily": [
                  "panic",
                  "panicked",
                  "panicking"
            ],
            "collocations": [
                  "people panicked",
                  "panic suddenly"
            ],
            "synonyms": [
                  "became terrified"
            ],
            "antonyms": [
                  "calmed down"
            ],
            "chapter": 12,
            "chapterTitle": "The Red Sea",
            "storyExample": "His people panicked.",
            "category": "Feelings"
      },
      {
            "word": "trapped",
            "definition": "Unable to escape from a dangerous place.",
            "partOfSpeech": "adjective",
            "level": "B1",
            "pronunciation": "/træpt/",
            "wordFamily": [
                  "trap",
                  "trapped"
            ],
            "collocations": [
                  "feel trapped",
                  "be trapped"
            ],
            "synonyms": [
                  "stuck"
            ],
            "chapter": 13,
            "chapterTitle": "The Cruel King Drowns",
            "storyExample": "They were trapped with the Red Sea in front and the king’s army behind them.",
            "category": "Safety & Situation"
      },
      {
            "word": "parted",
            "definition": "Separated or opened into two sides.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/ˈpɑːrtɪd/",
            "wordFamily": [
                  "part",
                  "parted",
                  "parting"
            ],
            "collocations": [
                  "sea parted",
                  "part into two"
            ],
            "synonyms": [
                  "separated"
            ],
            "chapter": 13,
            "chapterTitle": "The Cruel King Drowns",
            "storyExample": "The sea parted!",
            "category": "Actions & Change"
      },
      {
            "word": "drowned",
            "definition": "Died under water because they could not breathe.",
            "partOfSpeech": "verb",
            "level": "B1",
            "pronunciation": "/draʊnd/",
            "wordFamily": [
                  "drown",
                  "drowned",
                  "drowning"
            ],
            "collocations": [
                  "drown in water",
                  "were drowned"
            ],
            "chapter": 13,
            "chapterTitle": "The Cruel King Drowns",
            "storyExample": "The sea closed over them, and they drowned.",
            "category": "Actions & Consequences"
      },
      {
            "word": "right path",
            "definition": "The correct moral and spiritual way.",
            "partOfSpeech": "noun phrase",
            "level": "B1",
            "pronunciation": "/raɪt pæθ/",
            "collocations": [
                  "follow the right path",
                  "guide to the right path"
            ],
            "synonyms": [
                  "correct way"
            ],
            "chapter": 13,
            "chapterTitle": "The Cruel King Drowns",
            "storyExample": "Allah is not visible to physical eyes, but He is with us and when we pray to Him, He always guides us on the right path.",
            "category": "Guidance & Values"
      }
]
  },
  { id: 18, type: 'exercises', title: 'Final Review & Reflection', image: '', content: 'Complete these final exercises to master the B1 story and lessons of Prophet Moses (pbuh).' },
  { id: 19, type: 'final-challenge', title: 'Final Challenge', image: '', content: 'Test your knowledge of the entire B1 story of Prophet Moses (pbuh).' },
];
