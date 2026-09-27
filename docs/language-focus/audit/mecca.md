# Mecca: audit of the Language Focus matching exercises

Scope: every `matching` exercise in the Mecca Language Focus sets, 149 in total:

| Level | EN | AR |
|---|---|---|
| A2 | 13 | 13 |
| B1 | 45 | 46 (one extra, in ch6) |
| B2 | 16 | 16 (not wired in UI) |

Sources used:
- The dump at `scratchpad/dumps/mecca.txt`.
- The chapter texts in `src/data/mecca/*/*/pages.ts`. The Arabic texts were checked with diacritics removed.

Abbreviations:
- **Types:** MA = matching, MC = multiple-choice, FB = fill-blanks, DD = drag-drop categorization, SEQ = sequencing, TF = true-false, RF = reflection.
- **Proposed types:** WB = gap-fill with word bank / drag-into-sentence, CF = choose-the-correct-form (inline MC), SB = sentence building (word chips), TR = transformation / sentence combining, EC = error correction.
- **Purpose codes:** VOC, MORPH, GRAM (grammar form→meaning/function), DISC (discourse/linker), STRUCT (sentence structure), COLL (collocation), CAT (categorization in disguise), REF, STANCE (register/tone/stance/hedging), OTHER.

The "Set after" column (A2) and the set strings under each B1/B2 table give the proposed order for the chapter's whole activity set, so you can check two things:
- at most one matching per chapter;
- no type appears twice in a row.

---

## A2 EN

Current pattern in every chapter: MA-MC-FB-RF. Every matching is "pattern + slot ==> language job", with 4 distinct pairs.

| ch | exercise id | purpose | keep/convert | target type | sketch (short) | notes | Set after |
|---|---|---|---|---|---|---|---|
| 1 | mecca-a2-language-1-biography | GRAM | KEEP | – | – | Good first-chapter introduction to the "pattern ↔ job" format. Its 4 items are distinct. | MA-MC-FB-RF |
| 2 | mecca-a2-language-2-past-society | GRAM | CONVERT | WB | Bank: *was called / There was / a lot of / Many*. "The period before Islam ___ the Age of Ignorance." "Rich people had ___ money and lived in luxury." "___ poor people lived in need." | The right values "shows a large number" and "shows a large amount" are near-duplicates, and the count/non-count contrast is not shown in the text. | WB-MC-FB-RF |
| 3 | mecca-a2-language-3-change-comparison | GRAM | CONVERT | SB | Chips: *Umayya / was / one of / the richest / leaders / in Mecca*. Also *the poor / were getting / poorer*. | Both sentences are real text. The support is short and strong. | SB-MC-FB-RF |
| 4 | mecca-a2-language-4-frequency | CAT | CONVERT | DD | Two groups, **How often?** vs **Duty / task**: *often angry and cruel*, *every day*, *his job was to bring food*, *had to be patient*. | Item 1 ("always / often ==> shows frequency") and item 2 ("every + singular noun") are mostly the same frequency idea, so this is categorization in disguise. | DD-MC-FB-RF |
| 5 | mecca-a2-language-5-reason-duty | GRAM | KEEP | – | – | "did not have any" and "had no power to" can be answered from keywords ("lack" / "ability"). Tighten the labels. | MA-MC-FB-RF |
| 6 | mecca-a2-language-6-thinking | STRUCT | CONVERT | SB | Chips: *He / did not want / anyone / to see / him*. Second item: *Bilal / thought about / the message / for many days*. | The real skill is the verb + object + to-infinitive pattern. SEQ is at position 2, so SB at position 1 does not repeat a type. | SB-SEQ-FB-RF |
| 7 | mecca-a2-language-7-belief-choice | GRAM | KEEP | – | – | Items are distinct. Set: MC = *knew … would*, FB = *in the end*. | MA-MC-FB-RF |
| 8 | mecca-a2-language-8-dialogue | GRAM | CONVERT | TF | "*He forced him to look at idols* means Bilal chose to look at idols. (F)" "*If you speak well of our idols, you will be free* means freedom depends on speaking. (T)" | The matching item "refused to + verb" is not in the chapter. The text has "…but Bilal refused" with no verb after it. | TF-MC-FB-RF |
| 9 | mecca-a2-language-9-response | GRAM | KEEP | – | – | FB (*asked … to*) repeats matching item 3. You could swap that item for "went … right away". | MA-MC-FB-RF |
| 10 | mecca-a2-language-10-condition-price | GRAM | CONVERT | DD | Two groups, **Really happened** vs **Only imagined**: *Umayya agreed to sell Bilal* / *If you offered me only one piece of gold, I would still sell him* / *If you asked me for more, I would still pay* / *Abu Bakr told Bilal he was no longer a slave*. | Checks what the conditional *means*, which the matching does not. | DD-MC-FB-RF |
| 11 | mecca-a2-language-11-change-choice | GRAM | KEEP | – | – | "even when" is worth keeping. MC (*wanted someone to*) and FB (*after*) repeat 2 of the 4 items. | MA-MC-FB-RF |
| 12 | mecca-a2-language-12-habit-message | GRAM | CONVERT | WB | Bank: *used to / which means / All*. "Bilal ___ start the morning call very early." "He added … ___ 'Prayer is better than sleep'." "The Prophet taught that ___ people are equal." | Leave "told" out of the bank because the FB already practises it. | WB-MC-FB-RF |
| 13 | mecca-a2-language-13-comparison | GRAM | KEEP | – | – | MC (*too … to*) and FB (*What matters*) repeat items 3 and 4. | MA-MC-FB-RF |

## A2 AR

Same shape as A2 EN: every chapter is MA-MC-FB-RF, with "تركيب ==> وظيفة" and 4 pairs. The EN chapter choices are mirrored where the content lines up.

| ch | exercise id | purpose | keep/convert | target type | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | mecca-a2-ar-language-1-form-function | GRAM | KEEP | – | – | Same as EN ch1. |
| 2 | mecca-a2-ar-language-2-form-function | GRAM | CONVERT | WB | Bank (RTL chips): «لم يكن هناك / كانت هناك / الكثير من». Sentences: «___ سلامٌ ولا عدالةٌ في المجتمع.» «___ فجوةٌ كبيرةٌ بين الأغنياء والفقراء.» «لكنّ ___ الفقراء عاشوا في حاجة.» | «لكن» duplicates this chapter's MC, and «لم يكن هناك» duplicates its FB. The kan/kanat agreement makes a good distractor. |
| 3 | mecca-a2-ar-language-3-form-function | STRUCT | CONVERT | SB | Chips: «كان / الفقيرُ / يزدادُ / فقرًا». Second item: «كان / أميةُ / من أغنى / رؤساء / مكة». | Chips must render RTL. The مفعول/تمييز ending must stay on the right chip. |
| 4 | mecca-a2-ar-language-4-form-function | CAT | CONVERT | DD | Three groups, تكرار / واجب / غرض. Chips: «كل يوم»، «غالبًا»، «كان على بلال أن يكون صبورًا»، «ليرضي سيده». | The item says «كان عليه أن» but the text has «كان على بلال أن». |
| 5 | mecca-a2-ar-language-5-form-function | GRAM | KEEP | – | – | The content differs from EN ch5: AR teaches لأنّ/ظنّ/يجب/طلب, EN teaches because/had to/did not have any/had no power. |
| 6 | mecca-a2-ar-language-6-form-function | STRUCT | CONVERT | SB | Chips: «لم / يُرِدْ / أن / يراه / أحدٌ». | Real sentence. It also practises جزم after لم. |
| 7 | mecca-a2-ar-language-7-form-function | GRAM | KEEP | – | – | – |
| 8 | mecca-a2-ar-language-8-form-function | GRAM | CONVERT | TF | «"أجبره على النظر إلى الأصنام" تعني أن بلالًا اختار ذلك. (خطأ)» | The «أمر + شخصًا + أن» item repeats this chapter's FB and ch12's matching. |
| 9 | mecca-a2-ar-language-9-form-function | GRAM | KEEP | – | – | «أراد أن» and «لم يرد أن» give each other away. Both were already taught in ch3 and ch6. Replace one with «فورًا». |
| 10 | mecca-a2-ar-language-10-form-function | GRAM | CONVERT | DD | حدث فعلًا / افتراض: «وافق أمية أن يبيع بلالًا» / «لو أعطيتني قطعة واحدة… لبعته لك» / «لو طلبت مني مائة قطعة… لدفعت» / «جعله حرًّا». | «لكن … بل …» is labelled مقارنة اختيار. Its only source is «ولكنه لم يفعل ذلك، بل جعله حرًّا». |
| 11 | mecca-a2-ar-language-11-form-function | GRAM | KEEP | – | – | MC (سمح) and FB (فـ/لذلك) repeat 2 of the 4 items. |
| 12 | mecca-a2-ar-language-12-form-function | GRAM | CONVERT | WB | Bank: «يبدأ / خيرٌ من / أمره». «كان بلال ___ أذان الصباح مبكرًا.» «الصلاة ___ النوم.» «___ الرسول أن يكررها.» | 3 of the 4 matching items were already taught (كان+مضارع in ch4, أمر in ch8, بسبب in ch13). |
| 13 | mecca-a2-ar-language-13-form-function | GRAM | KEEP | – | – | – |

---

## B1 EN

Current pattern in every chapter: MA-MA-MA-RF. Most items label whole chapter sentences with their "job", so they can often be answered by elimination. Proposed sets are shown per chapter.

| ch | exercise id | purpose | keep/convert | target type | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | mecca-b1-language-1-historical-frame | DISC | KEEP | – | – | The only matching in ch1. It maps the paragraph's framing moves. Set: **MA-WB-TR-RF** |
| 1 | mecca-b1-language-1-cause-contrast | DISC | CONVERT | WB | Bank: *because / For this reason / while* (plus distractor *so that*). "Powerful people controlled many parts of life, ___ poor and weak people lived in misery." | Item 1 does not show the linker in its stem. |
| 1 | mecca-b1-language-1-focus-and-reporting | STRUCT | CONVERT | TR | "A council of rich merchants led Mecca." → passive with Mecca as subject. "People often treated poor and weak people badly." → "Poor and weak people ___." | Focus via the passive is a production skill. |
| 2 | mecca-b1-language-2-definition-contrast | STRUCT | CONVERT | SB | Chips: *Prophet Muhammad / described / Islam / as / the opposite / of barbarism*. | The four labels are whole-sentence labels. The useful target is "describe X as Y". Set: **SB-SEQ-TR-RF** |
| 2 | mecca-b1-language-2-ordering-explanation | DISC | CONVERT | SEQ | Order: "To understand the Jahiliyyah period, / we must first talk about Mecca. / Mecca is the holy city of Islam. / Allah chose this city to be the location of His House." | A natural sequencing text: purpose → first step → topic → reason. |
| 2 | mecca-b1-language-2-addition-definition | STRUCT | CONVERT | TR | Combine: "The Qiblah is the direction Muslims face during salah. The Qiblah is also located in Mecca." → one sentence with an appositive. | 3 items, answerable by elimination. |
| 3 | mecca-b1-language-3-place-and-state | STRUCT | CONVERT | TR | Combine: "Mecca was a valley. No crops grow there." → "…a valley where no crops grow." | Set: **TR-CF-WB-RF** |
| 3 | mecca-b1-language-3-time-relations | GRAM | CONVERT | CF | "When Abraham brought Hagar to the city, Zamzam water (was not discovered / had not been discovered / has not been discovered) yet." | Past perfect is a form choice, not a label. |
| 3 | mecca-b1-language-3-purpose-change | DISC | CONVERT | WB | Bank: *to / so / helped*. "Abraham came to the city ___ reconstruct the Ka'ba…" "…, ___ the Ka'ba became a pilgrimage site." "This ___ the city grow rapidly." | The labels name the answer ("uses 'to + verb'", "uses 'so'"), so the items are trivial. |
| 4 | mecca-b1-language-4-succession | DISC | CONVERT | SEQ | Order the three control stages. The "After… / Later… / Later, in the 5th century…" markers are the cues. | Items 2 and 3 have near-identical labels. Set: **SEQ-DD-TR-RF** |
| 4 | mecca-b1-language-4-change-and-practice | CAT | CONVERT | DD | Two groups, **Change in belief/practice** vs **Change in control**: *forgot the religion of Abraham*, *started worshipping many idols*, *took control of the city*, *took over the city and the Ka'ba*. | Item 3 repeats the idea in 4-succession item 3. |
| 4 | mecca-b1-language-4-reason-background | DISC | CONVERT | TR | "People could not farm in this dry land. They made money through trade." → Because… / As a result… | – |
| 5 | mecca-b1-language-5-cause-change | DISC | CONVERT | WB | Bank: *Because / From / helped*. "___ the early 6th century, Mecca became a major trading center." | Set: **WB-MA-CF-RF** |
| 5 | mecca-b1-language-5-enabling | GRAM | KEEP | – | – | Short forms with distinct meanings: allow + O + to (permission), make + O + adj (cause a state), could (possibility). |
| 5 | mecca-b1-language-5-behaviour-purpose | COLL | CONVERT | CF | "people focused (on / in / at) worship"; "stayed away (from / of / to) fighting"; "visit the city (to make / for make / making) Hajj". | The real skill is verb + preposition collocation. |
| 6 | mecca-b1-language-6-continuation | GRAM | CONVERT | EC | "These practices kept Mecca ~~to be~~ active." "…helped business ~~to growing~~ grow." "…continued ~~visit~~ to visit…" | Verb-pattern errors. Set: **EC-SEQ-SB-RF** |
| 6 | mecca-b1-language-6-sequence-background | DISC | CONVERT | SEQ | Order the pilgrimage-season actions: attended the fairs *first* → *then* went to Arafat → … | Only item 1 is really about sequence. |
| 6 | mecca-b1-language-6-result-comparison | STRUCT | CONVERT | SB | Chips: *This / made / the rich / richer / and / the poor / poorer*. | Data problem: items 2 and 3 are the two halves of one sentence, so the pairing is trivial. |
| 7 | mecca-b1-language-7-cause-inability | DISC | CONVERT | WB | Bank: *could not / because of / pushed* (distractor *because*). "Many people ___ pay back their debts ___ high interest." | Set: **WB-TR-MA-RF** |
| 7 | mecca-b1-language-7-contrast | STRUCT | CONVERT | TR | Combine: "The rich lived in luxury with gold plates. The poor struggled to survive." → "While …, …". | Items 1 and 2 are the two halves of one while-clause. |
| 7 | mecca-b1-language-7-values-reported-view | STANCE | KEEP | – | – | Priority / time frame / reported objection are distinct. Keep as the ch7 matching. |
| 8 | mecca-b1-language-8-cause-purpose | DISC | CONVERT | WB | Bank: *so / because / To*. "Life in the desert was very hard, ___ physical strength was extremely important." "___ earn respect from other tribes, families wanted many sons." | Set: **WB-TR-MA-RF** |
| 8 | mecca-b1-language-8-protection | GRAM | CONVERT | TR | "Without a tribe, people could not easily protect their lives." → "If people did not have a tribe, they ___." | – |
| 8 | mecca-b1-language-8-obligation-concession | GRAM | KEEP | – | – | had to / in every situation / even when are short, distinct forms. |
| 9 | mecca-b1-language-9-contrast-status | GRAM | CONVERT | MC | "'depending on their wealth and family' means women's lives were (the same for everyone / different according to wealth and family / decided by poets)." | Set: **MC-TR-EC-RF** |
| 9 | mecca-b1-language-9-cause-passive | STRUCT | CONVERT | TR | "People bought and sold slaves like animals." → "Slaves were ___ and ___ like animals." | – |
| 9 | mecca-b1-language-9-poetry-functions | STRUCT | CONVERT | EC | "Poetry kept tribal history alive, praised tribes, and ~~criticizing~~ criticized enemies." | Tests parallel structure directly. |
| 10 | mecca-b1-language-10-group-contrast | GRAM | CONVERT | WB | Bank: *most / Only a few / Some*. "___ people in Arabia worshipped idols." "___ people followed religions like Christianity." | Quantifier choice. Set: **WB-TR-MC-RF** |
| 10 | mecca-b1-language-10-passive-location | STRUCT | CONVERT | TR | "People kept the idols in and around the Ka'ba and in homes." → "The idols ___." | Data problem: item 3 is a substring of item 1. |
| 10 | mecca-b1-language-10-belief-purpose-decision | STANCE | CONVERT | MC | "Which sentence reports a belief, not a fact? (a) They thought these idols helped them talk to Allah. (b) There were 360 idols. (c) They were kept in homes." | Data problem: items 2 and 3 overlap ("before making decisions" sits inside item 3). |
| 11 | mecca-b1-language-11-cause-power | DISC | CONVERT | SEQ | Order: "Politics, economics, and religion are connected. / Beliefs shape how people live. / That is why powerful groups in Mecca did not like Islam." | Set: **SEQ-CF-WB-RF** |
| 11 | mecca-b1-language-11-future-community | GRAM | CONVERT | CF | "From the beginning, Muslims were a new community. They (are going to be / were going to be / have been) different from the people around them." | Future-in-the-past. Item 2 of the matching is content, not language. |
| 11 | mecca-b1-language-11-hearing-response-contrast | DISC | CONVERT | WB | Bank: *When / However / sure*. "___ they heard Prophet Muhammad read the Quran, they were ___ it was from Allah. ___, many leaders ignored…" | – |
| 12 | mecca-b1-language-12-quantity-threat | STANCE | CONVERT | MC | "'almost none of Mecca's super-rich people became Muslims' means (no rich people at all / very few rich people / most rich people)." | A precision/hedging check. Set: **MC-TR-MA-RF** |
| 12 | mecca-b1-language-12-reason-status | STRUCT | CONVERT | TR | "It was very important for them to keep their power and unity." → "Keeping ___ was very important for them." | – |
| 12 | mecca-b1-language-12-contrast-purpose | DISC | KEEP | – | – | Prohibition / permitted alternative / purpose are distinct. |
| 13 | mecca-b1-language-13-escalation | DISC | CONVERT | SEQ | Order: "At first, the leaders only mocked Islam. / But when the Quran criticized the idols…, their opposition became violent. / The leaders of Mecca went further." | Escalation is naturally a sequence. Set: **SEQ-EC-MA-RF** |
| 13 | mecca-b1-language-13-habit-command | GRAM | CONVERT | EC | "Umayya ordered him ~~give up~~ to give up his religion." "Whenever the Prophet walked by, they ~~laugh~~ laughed." | The labels name the answer ("uses 'often'", "order + person + to"). |
| 13 | mecca-b1-language-13-vulnerability-purpose | DISC | KEEP | – | – | Define group / specific example / purpose. |
| 14 | mecca-b1-language-14-survival-perception | STRUCT | CONVERT | TR | "People could hear the cries of hungry children everywhere." → "The cries of hungry children could ___ everywhere." | Data problem: item 1 is contained in item 3 ("others even ate tree leaves"). Set: **TR-DD-EC-RF** |
| 14 | mecca-b1-language-14-continuation-resistance | CAT | CONVERT | DD | Two groups, **Kept doing** vs **Refused**: *continued to ask people to stop worshipping idols* / *did not want to change* / *did not want to think about punishment* / … | Items 2 and 3 share the category "refusal", so this is categorization in disguise. |
| 14 | mecca-b1-language-14-cause-consequence | STRUCT | CONVERT | EC | "…hurting people, making money unfairly, and ~~drink~~ drinking alcohol." | The label names the form ("parallel -ing"). |
| 15 | mecca-b1-language-15-pressure-condition | GRAM | CONVERT | EC | "tried to prevent members of their tribes ~~to become~~ from becoming Muslim"; "so strong ~~as~~ that…". | Every label names the form. Set: **EC-DD-MA-RF** |
| 15 | mecca-b1-language-15-claim-reality | STANCE | CONVERT | DD | Two groups, **Claim reported from Quraysh** vs **Text's own interpretation**: *Islam was breaking up families* / *destroying unity* / *Islam was calling people to a better form of unity* / *unity based on justice, mercy…*. | Stance sorting fits B1. |
| 15 | mecca-b1-language-15-value-contrast | GRAM | KEEP | – | – | Keep, but remove the form names from the labels. Item 3 bundles 3 functions (define + contrast + because); split it. |

## B1 AR

Current pattern: MA-MA-MA-RF, and ch6 is MA×4-RF. The recommendations target Arabic grammar: كان وأخواتها، ظلّ + مضارع، لـ/لكي + منصوب، أن + منصوب، masdar nominalization after بسبب، مبني للمجهول، بل، مهما، كلما.

| ch | exercise id | purpose | keep/convert | target type | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | mecca-b1-ar-language-1-historical-frame | DISC | KEEP | – | – | Parity with EN. Set: **MA-WB-TR-RF** |
| 1 | mecca-b1-ar-language-1-cause-result-contrast | DISC | CONVERT | WB | Bank: «بسبب / لذلك / بينما». «كان يقود مكة مجلس من التجار الأغنياء، ___ عُرف البلد بـ"جمهورية التجار".» «وكان الأقوياء يتحكمون في كل شيء، ___ كان الفقراء يعيشون في بؤس.» | Data problem: «لذلك عُرِفَ البلد…» is also a left item in exercise 1-focus-reporting, with a different answer. |
| 1 | mecca-b1-ar-language-1-focus-reporting | STRUCT | CONVERT | TR | «كان الناس يعاملون الفقراء بقسوة» → «كان الفقراء ___ بقسوة» (answer: يُعامَلون). | Parity: EN item 1 is passive (was led by) but AR item 1 is active (يقود). Its label ("names the agent directly") contradicts the exercise title «تغيير بؤرة المعلومة». |
| 2 | mecca-b1-ar-language-2-definition-transition | STRUCT | CONVERT | SB | Chips: «وَصَفَ / النبيُّ / الإسلامَ / بأنه / نقيضُ / الهمجية». | Target: وصف X بأنه Y. Set: **SB-SEQ-TR-RF** |
| 2 | mecca-b1-ar-language-2-ordering-purpose | DISC | CONVERT | SEQ | Order: «لفهم عهد الجاهلية / يجب أن نتحدث أولًا عن مكة / مكة هي البلدة المقدسة / فقد اختار الله…». | – |
| 2 | mecca-b1-ar-language-2-addition-definition | STRUCT | CONVERT | TR | «القبلة اتجاهٌ. يتوجّه إليه المسلمون في صلاتهم.» → «القبلة هي الاتجاه ___ يتوجه إليه المسلمون» (answer: الذي). | Practises relative-pronoun agreement. AR has 4 items, EN has 3. |
| 3 | mecca-b1-ar-language-3-place-state | STRUCT | CONVERT | TR | «وصف القرآنُ مكةَ بأنها وادٍ غير ذي زرع» → «___ مكة في القرآن بأنها…» (answer: وُصِفَتْ). | Set: **TR-CF-WB-RF** |
| 3 | mecca-b1-ar-language-3-time-relations | GRAM | CONVERT | CF | «عندما جاء إبراهيم… لم يكن ماء زمزم (قد اكتُشف / يُكتشف / سيُكتشف) بعدُ». | – |
| 3 | mecca-b1-ar-language-3-purpose-change | DISC | CONVERT | WB | Bank: «لـ / بسبب / أصبحت». «جاء إبراهيم ___إعادة بناء الكعبة» … | The label names the form («يستخدم اللام مع المصدر»). |
| 4 | mecca-b1-language-ar-4-sequence | DISC | CONVERT | SEQ | Order: بعد أن… / ثمّ جاءت خزاعة… / وبعد ذلك، في القرن الخامس… | Set: **SEQ-DD-TR-RF** |
| 4 | mecca-b1-language-ar-4-change | CAT | CONVERT | DD | Two groups, تغيّر في الدين/الممارسة vs انتقال السلطة: «نسي الناس دين إبراهيم»، «بدؤوا يعبدون أصنامًا»، «استولت على إدارة البلدة»، «سيطرت قريش على مكة». | Item 3 bundles two quotes with a slash. |
| 4 | mecca-b1-language-ar-4-reason-background | MORPH | CONVERT | TR | «لم يستطع الناس أن يزرعوا في هذه الأرض الجافة، فكسبوا المال بالتجارة» → «بسبب ___ الناس ___ الزراعة، …» (answer: عدم قدرة / على). | Turning a verb into a masdar after بسبب is a genuine AR skill. |
| 5 | mecca-b1-language-ar-5-cause-change | DISC | CONVERT | WB | Bank: «بسبب / منذ / غدت / ساعد». «___ أوائل القرن السادس، ___ مكة مدينة تجارية رئيسية.» | Set: **WB-MA-CF-RF** |
| 5 | mecca-b1-language-ar-5-enabling | GRAM | KEEP | – | – | سمح لـ… بأن / جعل + صفة / تمكّن من: short forms with distinct meanings. |
| 5 | mecca-b1-language-ar-5-behaviour-purpose | COLL | CONVERT | CF | «يركّزون (على / في / عن) العبادة»، «يبتعدون (عن / من / على) القتال»، «زيارة البلدة (لأداء / أداء / بأداء) الحج». | Preposition collocations. |
| 6 | mecca-b1-language-ar-6-continuation | GRAM | CONVERT | EC | «ظلّ المشركون ~~زاروا~~ يزورون الكعبة»، «ساعد هذا ~~نموّ~~ على نموّ التجارة». | ظلّ + مضارع. EN item 2 (kept … active) has no AR counterpart; AR uses «كانت هناك أسواق» instead. Set: **EC-SEQ-SB-FB-RF** |
| 6 | mecca-b1-language-ar-6-sequence-background | DISC | CONVERT | SEQ | Order: «يحضرون الأسواق أولًا» → «ثم يذهبون إلى عرفات» → … | – |
| 6 | mecca-b1-language-ar-6-result-contrast | STRUCT | CONVERT | SB | Chips: «صار / الأغنياءُ / أكثرَ ثراءً / بينما / ازداد / الفقراءُ / فقرًا». | Items 2 and 3 are halves of one sentence (same problem as EN). |
| 6 | mecca-b1-language-ar-6-purpose | GRAM | CONVERT (or drop) | FB | «وكان هذا أسهل طريقة للأغنياء [blank] أموالًا أكثر» (accept ليجمعوا / لكي يجمعوا). | **This is the extra AR matching with no EN counterpart.** Data problem: all 3 left items are fragments of one sentence (item 1 contains items 2 and 3), and labels 1 and 2 both mean "purpose". Drop it to restore parity, or convert it. |
| 7 | mecca-b1-language-ar-7-cause-inability | DISC | CONVERT | WB | Bank: «لم يستطيعوا / بسبب / أيضًا». «___ أن يقضوا ديونهم ___ الربا الفاحش.» | Parity: EN item 3 is "pushed deeper into debt"; AR item 3 is «شائعًا أيضًا». Set: **WB-TR-MA-RF** |
| 7 | mecca-b1-language-ar-7-contrast | STRUCT | CONVERT | TR | Combine «كان الأغنياء يعيشون في ترف» + «كان الفقراء يجدون صعوبة في العيش» with بينما. | – |
| 7 | mecca-b1-language-ar-7-values-viewpoint | STANCE | KEEP | – | – | – |
| 8 | mecca-b1-language-ar-8-cause-purpose | DISC | CONVERT | WB | Bank: «لذلك / لأنهم / لِـ». «كانت الحياة في الصحراء صعبة جدًا، ___ كانت القوة البدنية أمرًا حيويًا.» «___تنالَ العائلات الاحترام…» | The chip after لِـ must carry the منصوب ending. Set: **WB-TR-MA-RF** |
| 8 | mecca-b1-language-ar-8-protection | GRAM | CONVERT | TR | «وبدون القبيلة لم يستطع الناس أن يحموا حياتهم» → «إذا لم تكن للناس قبيلة، ___». | – |
| 8 | mecca-b1-language-ar-8-obligation-concession | GRAM | KEEP | – | – | كان عليهم أن / في كل الظروف / مهما. مهما is valuable in AR. |
| 9 | mecca-b1-language-ar-9-status-contrast | GRAM | CONVERT | MC | «"بناءً على ثرواتهن وعائلاتهن" تعني أن حياة النساء: (واحدة للجميع / تختلف بحسب الثروة والعائلة / يحددها الشعراء)». | Set: **MC-FB-TR-RF** |
| 9 | mecca-b1-language-ar-9-cause-emphasis | DISC | CONVERT | FB | «كان كثير من الآباء يشعرون بالعار من البنات، [blank] كان بعضهم يدفنون بناتهم أحياءً.» (answer: بل) | **Data problem:** the left item «بناءً على ثرواتهن وعائلاتهن» appears in both 9-status-contrast and 9-cause-emphasis, with different correct answers. |
| 9 | mecca-b1-language-ar-9-passive-functions | STRUCT | CONVERT | TR | «كان الناس يبيعون العبيد ويشترونهم كالماشية» → «كان العبيد ___ و___ كالماشية» (answer: يُباعون / يُشترون). | Item 3 (الشعراء إعلام) is a definition, not a passive. EN's parallel-verb item is missing in AR. |
| 10 | mecca-b1-language-ar-10-groups | GRAM | CONVERT | WB | Bank: «معظم / من بينها / أشخاص». «كان ___ الناس يعبدون الأصنام… كان هناك ٣٦٠ صنمًا، ___ اللات والعزى ومناة.» | Set: **WB-MC-DD-RF** |
| 10 | mecca-b1-language-ar-10-passive-contrast | DISC | CONVERT | MC | «كان العرب يؤمنون بإله رئيسي واحد، ___ كانوا يعبدون أصنامًا كثيرة» (ومع ذلك / لذلك / لأنّ). | **Data problem:** «أشخاص يُعرَفون بالحنفاء» appears in both 10-groups and 10-passive-contrast. |
| 10 | mecca-b1-language-ar-10-belief-decision | STANCE | CONVERT | DD | Two groups, اعتقاد vs ممارسة/سلوك: «يؤمنون بإله رئيسي»، «يظنون أنها تشفع»، practice of seeking omens «قبل اتخاذ القرارات»، «يعبدون الأصنام». | – |
| 11 | mecca-b1-language-ar-11-cause-power | DISC | CONVERT | SEQ | Order: «ترتبط السياسة والاقتصاد والدين… / فالدين يؤثر… / ولهذا السبب، لم يحب أشراف مكة الإسلام». | Set: **SEQ-CF-WB-RF** |
| 11 | mecca-b1-language-ar-11-community-future | MORPH | CONVERT | CF | «وكانوا (سيكونون / سيكونوا / يكونون) مختلفين عن غيرهم». | «سيكونوا» is a common learner error, so it makes a good distractor. |
| 11 | mecca-b1-language-ar-11-hearing-response | DISC | CONVERT | WB | Bank: «عندما / تأكدوا / ولكن». | – |
| 12 | mecca-b1-language-ar-12-quantity-viewpoint | STANCE | CONVERT | MC | «"لم يكن بين الذين أسلموا أحد من أغنياء مكة" تعني…» | Parity/data: the label says «تقريبًا» ("almost") but the AR sentence is absolute; EN says "almost none". Set: **MC-TR-MA-RF** |
| 12 | mecca-b1-language-ar-12-status-priority | MORPH | CONVERT | TR | «كان من المهم جدًا بالنسبة لهم أن يحافظوا على قوتهم» → «___ على قوتهم كان مهمًّا جدًا» (answer: الحفاظُ). | أن + فعل → masdar mirrors the EN gerund subject. |
| 12 | mecca-b1-language-ar-12-cause-contrast-purpose | DISC | KEEP | – | – | – |
| 13 | mecca-b1-language-ar-13-escalation | DISC | CONVERT | SEQ | Order: «في البداية سخروا منه فقط / ولكن عندما بدأ القرآن ينتقد الأصنام… / زاد زعماء مكة من ضغوطهم». | Set: **SEQ-EC-MA-RF** |
| 13 | mecca-b1-language-ar-13-repetition-command | GRAM | CONVERT | EC | «ويأمره أن ~~ترك~~ يتركَ دينه»، «كلما مرّ النبي، كانوا ~~ضحكوا~~ يضحكون». | The labels name the forms. |
| 13 | mecca-b1-language-ar-13-vulnerability-purpose | DISC | KEEP | – | – | – |
| 14 | mecca-b1-language-ar-14-survival-state | GRAM | CONVERT | FB | «وأكل آخرون أوراق الشجر [blank] يعيشوا» (accept لكي / كي). | Data problem: item 1 is contained in item 3. Parity: AR item 2 is active («كان الناس يسمعون»), while EN uses the passive. Set: **FB-DD-TR-RF** |
| 14 | mecca-b1-language-ar-14-persistence-refusal | CAT | CONVERT | DD | Two groups, استمرار vs رفض: «استمر في دعوتهم»، «لم يريدوا التغيير»، «لم يريدوا أن يفكروا في الحساب». | Two of the three rights are the same category. |
| 14 | mecca-b1-language-ar-14-cause-result | MORPH | CONVERT | TR | «لأنهم كانوا يؤذون الناس ويكسبون المال بطريقة غير عادلة» → «بسبب ___ الناس و___ المال…» (answer: إيذاء / كسب). | Parallel masdars, matching the EN "parallel -ing". |
| 15 | mecca-b1-language-ar-15-prevention-cause | COLL | CONVERT | EC | «لمنع أفراد قبائلهم ~~عن~~ من الدخول في الإسلام». | Set: **EC-DD-MA-RF** |
| 15 | mecca-b1-language-ar-15-claim-reality | STANCE | CONVERT | DD | Two groups, قول منقول vs تفسير النص: «الإسلام يفرّق العائلات»، «يهدم الوحدة»، «كان الإسلام يدعو لوحدة أرقى»، «تقوم على العدل والرحمة». | – |
| 15 | mecca-b1-language-ar-15-equality-contrast | GRAM | KEEP | – | – | Remove the form names from the labels. |

---

## B2 EN

Current pattern: MA-(FB|MC)-RF, except ch4 (SEQ-FB-RF) and ch15 (SEQ-MA-RF). Most labels are discourse or stance moves, which suits B2. The main weaknesses are:
- whole-sentence labelling solved by keyword or elimination;
- two exercises (lf6a, lf16a) that are really clause-half matching.

| ch | exercise id | purpose | keep/convert | target type | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | me-b2-lf1a | DISC | CONVERT | SEQ | Order the opening moves: "The rivalry between the two superpowers exhausted both sides." → "…because the Arabs lived in tribes, there was no political unity…" → "…take a closer look at the city and the era". | Moving from macro to local is itself an ordering skill. Set: **SEQ-FB-RF** |
| 2 | me-b2-lf2a | DISC | KEEP | – | – | Reject / supply / concede are distinct discourse moves. The MC already covers the concession. |
| 3 | me-b2-lf3a | STANCE | CONVERT | DD | Two groups, **Source statement** vs **Writer's interpretation**: "Mecca is described in the Quran as a valley where no crops grow" / "It can be said that city life began here…" / "The Ka'ba is the main factor in establishing Mecca as a settlement" / "Allah chose this city…". | Matches the reflection (Evidence and Interpretation). |
| 5 | me-b2-lf5a | STANCE | CONVERT | TR | Hedge the overclaims: "Caravans had 2,500 camels." → "up to 2,500"; "This equals three ships." → "approximately 2–3 shiploads". | – |
| 6 | me-b2-lf6a | DISC | CONVERT | TR | Combine: "Byzantine-Sassanid wars made the Silk Road unusable." + "Arabian and Red Sea routes became more important." → "As a result of…, …" or "…, which made… more important." | The instruction ("language choice ↔ discourse job") does not match the question ("cause ↔ consequence"). As written, it is content matching. |
| 7 | me-b2-lf7a | DISC | CONVERT | TR | "Drinking and gambling were very common. Many people fell deeper into debt." → "…so common that…". | The label names the form ("Uses so…that"). |
| 8 | me-b2-lf8a | STANCE | CONVERT | MC | "Why does the writer write *orphans were oppressed* without naming the oppressor? (focus on victims / oppressor unknown to history / to shorten the sentence)" | The labels can be matched by keyword (orphans→group, goods→property, agreement→response). Set: **MC-FB-RF** |
| 9 | me-b2-lf9a | STANCE | CONVERT | DD | Two groups, **Absolute claim** vs **Qualified claim**: "The pre-Islamic era was entirely negative" / "it doesn't make sense to call the pre-Islamic era entirely negative" / "generosity was driven by arrogance" / "driven mostly by arrogance rather than real goodness". | Hedging categorization. The next exercise is MC (rather than). |
| 10 | me-b2-lf10a | STANCE | CONVERT | TR | Rewrite the overgeneralization "Women in Jahiliyyah had no rights." using *was not always the same / depending on / Despite…, some women…*. | 4 items, but they are mostly labels. |
| 11 | me-b2-lf11a | STRUCT | CONVERT | TR | "Tribes used poetry to keep their history alive." → "Poetry ___." Then: "What disappears from the sentence?" | Keyword-overlap labels (Poetry→poetry). |
| 12 | me-b2-lf12a | DISC | KEEP | – | – | Concede / add / explain / striking contrast ("Oddly enough") are distinct B2 moves. "Idols were seen as mediators" paraphrases the text ("go-betweens (mediators)"). |
| 13 | me-b2-lf13a | STRUCT | CONVERT | TR | Combine: "The recitation moved them. It made them cry and feel deep respect." → "…, making them cry and feel deep respect." | The label names the form ("participle clause"). The FB covers *as well as*. |
| 14 | me-b2-lf14a | STANCE | CONVERT | EC | Fix the overclaims: "~~All~~ Many of the first Muslims were the poor and the slaves"; "~~No one~~ Almost no one from Mecca's super-rich…"; "~~exactly 7,500~~ between 5,000 and 10,000". | – |
| 15 | me-b2-lf15b | GRAM | CONVERT | CF | "They knew the call to monotheism (will / would / had) eventually bring them face to face with those who…" | **Data problem: only 2 pairs.** The second is solved by elimination. Set: **SEQ-CF-RF** |
| 16 | me-b2-lf16a | DISC | CONVERT | TR | "If a tribal member stepped outside the tribe's views, he could be left without protection." → "…had to follow the tribe's views; otherwise, …". | Mixed right-side types: two are clause completions, one is a function label ("Otherwise…"). |
| 17 | me-b2-lf17a | DISC | KEEP | – | – | A synthesis of 4 distinct moves (extend / include / contrast / time span). |

## B2 AR (NOT WIRED IN UI)

Same design as B2 EN. Several left items are paraphrases, not quotes from the AR chapter text; these are flagged. The dump shows no options or fill text for the AR MC/FB exercises, which should be checked in the source.

| ch | exercise id | purpose | keep/convert | target type | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | me-b2-ar-lf1a | DISC | CONVERT | SEQ | Order: «أرهق التنافس بين هاتين القوتين كلا الجانبين» → «وبسبب عيش العرب في قبائل، لم تكن هناك وحدة سياسية» → «لننظر بدقة أكثر إلى البلد والعصر». | Verbatim. |
| 2 | me-b2-ar-lf2a | DISC | KEEP | – | – | Item 3 «على الرغم من أن الكلمة…» was not found verbatim in the text. |
| 3 | me-b2-ar-lf3a | STANCE | CONVERT | DD | Two groups, نصّ المصدر vs تفسير الكاتب: «وُصفت مكة في القرآن بأنها وادٍ غير ذي زرع» / «يمكن القول إن الحياة في البلد بدأت هنا» / «الكعبة هي العامل الرئيسي في تأسيس مكة كمستوطنة». | – |
| 5 | me-b2-ar-lf5a | STANCE | CONVERT | TR | Hedge: «كانت القوافل تضم ٢٥٠٠ جمل» → «ما يصل إلى…»; «تساوي ثلاث سفن» → «ما يقارب حمولة سفينتين أو ثلاث». | – |
| 6 | me-b2-ar-lf6a | DISC | CONVERT | TR | Combine with «مما أدى إلى» or «نتيجةً لـ»: «أدت الحروب البيزنطية الساسانية إلى تعطيل طريق الحرير» + «ازدادت أهمية طرق البحر الأحمر». | Same instruction/question mismatch as EN. |
| 7 | me-b2-ar-lf7a | DISC | CONVERT | TR | «كان الشرب والقمار شائعين جدًا. وقع كثيرون في الديون.» → «…شائعين إلى درجة أنّ…». | – |
| 8 | me-b2-ar-lf8a | STANCE | CONVERT | MC | «لماذا قال الكاتب "كان الأيتام يُظلمون" دون ذكر الظالم؟» | Item 3 «تم عقد اتفاق» is not in the text, which has «عُقد اتفاق من قبل بعض قبائل قريش». تمّ + مصدر is a calque; use «عُقِد». Item 2 («تُنتزع») was not found in the text. |
| 9 | me-b2-ar-lf9a | STANCE | CONVERT | DD | Two groups, حكم مطلق vs حكم مقيد: «كان العصر كله سلبيًا» / the text's qualified sentence / «مدفوعة بالخيلاء» / «مدفوعة في الغالب بالخيلاء بدلًا من الخير الحقيقي». | Item 1 «لا معنى لوصف العصر كله بالسلبية» was not found in the text. Quote the actual sentence. |
| 10 | me-b2-ar-lf10a | STANCE | CONVERT | TR | Rewrite «لم يكن للمرأة في الجاهلية أي حق» using «لم تكن… واحدة دائمًا، بل تغيرت وفقًا لـ… / على الرغم من القيود…». | Verbatim. |
| 11 | me-b2-ar-lf11a | STRUCT | CONVERT | TR | «كانت القبائل تستخدم الشعر لحفظ تاريخها» → «كان الشعر ___ لحفظ تاريخ القبيلة» (answer: يُستخدَم). | Item 3 is a paraphrase. |
| 12 | me-b2-ar-lf12a | DISC | KEEP | – | – | **Parity:** EN has the stance marker "Oddly enough"; AR uses the neutral «ومع ذلك», although the text has «والمثير للاستغراب». Item 3 «تُتخذ وسطاء» paraphrases «يُنظر إلى الأصنام على أنها شفعاء (وسائط)». |
| 13 | me-b2-ar-lf13a | STRUCT | CONVERT | TR | Combine two sentences with «مما جعلهم…» or a حال clause. | Item 4 «مما جعلهم يبكون ويشعرون بالخشوع» was not found in the text. |
| 14 | me-b2-ar-lf14a | STANCE | CONVERT | EC | «~~كان جميع~~ كان الكثير من المسلمين الأوائل من الفقراء والرقيق»؛ «~~لم يكن هناك أحد~~ لم يكن هناك تقريبًا أحد». | – |
| 15 | me-b2-ar-lf15b | GRAM | CONVERT | CF | «كانوا يعلمون أن دعوة التوحيد (ستجعلهم / جعلتهم / تجعلهم) في النهاية في مواجهة…». | Only 2 pairs. The item uses «ستضعهم» but the text has «ستجعلهم». |
| 16 | me-b2-ar-lf16a | DISC | CONVERT | TR | «إذا خرج الفرد عن رأي القبيلة، قد يُترك دون حماية» → «كان على الفرد أن يتبع رأي القبيلة، وإلا…». | «وإلا» (the "otherwise" item) was not found as a discourse marker in the text. Mixed right-side types, as in EN. |
| 17 | me-b2-ar-lf17a | DISC | KEEP | – | – | – |

---

## Summary counts

### Purpose, by level

Counts are tallied from the tables above.

| Level | GRAM | DISC | STRUCT | STANCE | CAT | MORPH | COLL | total |
|---|---|---|---|---|---|---|---|---|
| A2 EN | 11 | – | 1 | – | 1 | – | – | 13 |
| A2 AR | 10 | – | 2 | – | 1 | – | – | 13 |
| B1 EN | 11 | 15 | 12 | 4 | 2 | – | 1 | 45 |
| B1 AR | 11 | 16 | 7 | 4 | 2 | 4 | 2 | 46 |
| B2 EN | 1 | 7 | 2 | 6 | – | – | – | 16 |
| B2 AR | 1 | 7 | 2 | 6 | – | – | – | 16 |

Several B1 items are borderline between DISC and STRUCT.

### KEEP vs CONVERT

| | KEEP | CONVERT |
|---|---|---|
| A2 EN | 6 | 7 |
| A2 AR | 6 | 7 |
| B1 EN | 7 | 38 |
| B1 AR | 7 | 39 (incl. the extra ar-6-purpose) |
| B2 EN | 3 | 13 |
| B2 AR | 3 | 13 |
| **Total** | **32** | **117** |

### Conversion targets (117)

| Target | Count |
|---|---|
| TR | 33 |
| WB | 18 |
| CF / contextual MC | 16 (8 + 8) |
| DD | 15 |
| SEQ | 12 |
| EC | 10 |
| SB | 8 |
| FB | 3 |
| TF | 2 |
