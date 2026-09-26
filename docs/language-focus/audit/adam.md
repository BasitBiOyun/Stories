# Adam — Language Focus matching audit (A2 / B1 / B2, EN + AR)

Scope: every `matching` exercise in `dumps/adam.txt` (150 total: A2 10+10, B1 31+31, B2 34+34).
Chapter texts checked against `src/data/adam/{a2,b1,b2}/{en,ar}/pages.ts`.

Abbreviations for target types:
CF = choose-the-correct-form (inline MC in the sentence) · WB = gap-fill with word bank · SB = sentence building (reorder chips) ·
FB = fill-blanks (typed, accepted variants) · TR = transformation (rewrite) · SC = sentence combining (TR variant) ·
EC = error correction (one targeted form) · DD = drag-drop categorization · SQ = sequencing · MA = matching (kept).
Purpose codes: GFM = grammar-form→meaning/function · DISC = discourse/linker function · SS = sentence structure ·
MORPH = morphology · VOC = vocabulary-meaning · COLL = collocation · STANCE = register/stance/source · other:x.

General rule applied: sacred-text quotations (Qur'an / prophetic speech) are **not** turned into EC/TR/SB items (you must not "correct" or rewrite them); where the language point sits inside a verse, matching (or DD/contextual MC) is kept.

---

## A2 — EN

| ch | exercise id | purpose | keep/convert | target | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | adam-a2-language-1-story-past-actions | MORPH (base→past) | KEEP | MA | create→created, tell→told, say→said, begin→began | Textbook good use of matching. Could add 1 distractor (e.g. *collected*) so the last pair is not by elimination. |
| 2 | adam-a2-language-2-ability-and-learning | GFM (could = past ability) | CONVERT | CF | "Adam ___ learn and understand." (could / can / coulds) · "Allah taught him ___ think." (to / for / –) | **Duplicate right**: "describes an ability" ×2. Rights echo lefts ("learned more" ⇒ "result of learning"). Set becomes CF, FB, DD, RF. |
| 3 | adam-a2-language-3-comparing-value | GFM (comparatives) | CONVERT | CF | "Iblis said, 'I am ___ than Adam.'" (better / gooder / best) · "This knowledge made Adam ___ valuable." (more / most / -er) | Keyword overlap: "more important"⇒"compares importance", "more valuable"⇒"compares value" → trivial. |
| 4 | adam-a2-language-4-wants-plans | GFM (want + person + to) | CONVERT | SB | Reorder: `He / wanted / Adam / to / lose / Allah's love.` and `He / didn't / want / Allah / to / be / nice / to / Adam.` | **Item not in chapter**: "just like himself" (text: "just as he had"). Set SB, MC, DD, RF. |
| 5 | adam-a2-language-5-condition-result | GFM (1st conditional) | CONVERT | CF | "If you (eat / ate / will eat) from that one tree, you (will never die / never died)." | Items 3–4 are abstract patterns duplicating items 1–2; rights "introduces a condition" ≈ "sets up something that may happen" → ambiguous. |
| 6 | adam-a2-language-6-planned-responsibilities | GFM (was/were going to) | CONVERT | SB | `They / were / going / to / protect / nature.` (+ one with *build buildings for housing*) | All 4 lefts are the same form; 4 near-synonymous rights ("planned responsibility / expected later / future duty / another planned duty") → guesswork. Set SB, FB, MC, RF. |
| 7 | adam-a2-language-7-teaching-patterns | SS (teach/warn + person + to/against) | CONVERT | WB | "They warned their children [against] Iblis. Adam and Eve taught their children [to] behave well. He started [teaching] people to be honest." Bank: against / to / teaching / from | Rights literally name the pattern in the left (teach + person + to…, warn…against) → trivial. Set WB, MC, SQ, RF. |
| 8 | adam-a2-language-8-describing-people | GFM (be + adj / became + role) | CONVERT | DD | Groups **What he was like** (kind, gentle, jealous) / **His job/role** (a shepherd, a farmer) / **What he loved doing** (taking care of animals) | Rights name the form (be + adjective, love + -ing, became) → keyword match. Set DD, FB, MC, RF. |
| 9 | adam-a2-language-9-future-intentions | GFM (will / won't) | CONVERT | CF | Qabil: "I (will / won't) kill you." Habil: "I (will / won't) fight back or harm you." | Items 2 and 3 (won't fight / won't harm) interchangeable; rights name "will + verb"/"won't + verb". Set CF, DD, FB, RF. |
| 10 | adam-a2-language-10-advice | GFM (should / tell + to) | CONVERT | SB | `Good people / should / control / their anger.` · `It / tells / them / to / be / kind / to others.` | Items 1/2 (should) and 3/4 (tells…to) pairwise interchangeable; answerable only via content words (anger→self-control). |

### A2 EN — rewrite status (done)
Files: src/data/adam/a2/en/languageFocus{,2,3}.ts (Language Review untouched; ids kept per slot; reflections kept verbatim). Look → Practise → Use.
Type sequences (slot1–3 + reflection): 1 MA·CF·WB · 2 TF·WB·SB · 3 DD·CF·WB · 4 MC·CF·SB · 5 TF·CF·MA · 6 MC·SB·CF · 7 CF·MA·SQ · 8 DD·CF·FB · 9 MC·MA·WB · 10 MA·CF·SB.
Matching kept in 5/10 chapters, slots 1/3/2/2/1, all with matchingHeadings: 1 verb↔past (say/begin/get/create), 5 phrase↔meaning (After a while, Unfortunately, banned, on purpose, opposite direction), 7 phrase↔meaning (for many years, good and hard days, After the death…, took the same way), 9 phrase↔meaning (gave from his heart, anger cooled, started to panic, worse than this crow), 10 verb↔past (go/become/lose/spread).
Old misquotes removed: ch4 "just like himself" (text: "just as he had"); ch6 "They used land to grow crops" (text: "were using"); ch7 paraphrased sequencing items + "Adam and Eve taught…" (text: "Adam (pbuh) and Eve"); ch5 paraphrased sequencing; ch10 "good people should control their anger"/"It tells them to be kind to others" (not verbatim). Qur'an-derived dialogue in ch9 (Qabil/Habil) only read or matched to meaning, never gapped; Allah's quoted words in ch1/ch2 not gapped. All items verified verbatim by script (scratchpad/adam-a2-en/check.ts).

## A2 — AR

| ch | exercise id | purpose | keep/convert | target | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | adam-a2-ar-language-1-past-story-actions | MORPH (مضارع→ماضٍ) | KEEP | MA | يَخْلُقُ→خَلَقَ، يَقُولُ→قَالَ، تُحْضِرُ→أَحْضَرَتْ، يُصَوِّرُ→صَوَّرَ | **Data bug**: يُحْضِرُ ⇒ أَحْضَرَتْ mismatches person/gender (use تُحْضِرُ or أَحْضَرَ). Add a distractor. |
| 2 | adam-a2-ar-language-2-past-description | GFM (كان + مضارع; عَلَّمَ vs تَعَلَّمَ) | CONVERT | CF | "___ اللهُ آدَمَ الْعِلْمَ" (عَلَّمَ / تَعَلَّمَ) · "كَانَ آدَمُ ___ وَيَفْهَمُ" (يَتَعَلَّمُ / تَعَلَّمَ / سَيَتَعَلَّمُ) | AR-specific: Form II (عَلَّمَ = teach) vs Form V (تَعَلَّمَ = learn) is the real contrast; EN version has none. Rights echo lefts (علّم⇒التعليم، تعلّم⇒التعلّم); "مستمر" vs "قدرة/حالة" for the same كان+مضارع is contestable. |
| 3 | adam-a2-ar-language-3-comparison | GFM (اسم التفضيل) | CONVERT | CF | "أَنَا ___ مِنْ آدَمَ" (أَفْضَلُ / فَاضِلٌ / الْأَفْضَلُ) · "جَعَلَ آدَمَ ___ قِيمَةً" (أَكْثَرَ / كَثِيرًا) | AR-specific: أفعل + مِن vs أكثر + تمييز (قيمةً). "أَصْلَهُ أَفْضَلُ" is not a مِن-comparison; three lefts contain أفضل → keyword. |
| 4 | adam-a2-ar-language-4-desire-plan | GFM (لم يُرِدْ أن / ظنّ أنّ / لذلك) | CONVERT | WB | "لَمْ [يُرِدْ] أَنْ يُعَامِلَ اللهُ آدَمَ بِلُطْفٍ. [ظَنَّ] إِبْلِيسُ أَنَّ آدَمَ هُوَ السَّبَبُ. [لِذَلِكَ]، خَطَّطَ لِإِبْعَادِ آدَمَ." Bank: يُرِدْ / يُرِيدُ / ظَنَّ / لِذَلِكَ | AR-specific: jussive after لم (يُرِدْ not يُرِيدُ) — distractor tests it. Mixed left items (verb patterns + a linker). |
| 5 | adam-a2-ar-language-5-condition-result | GFM (إذا + ماضٍ، فَلَنْ + منصوب) | CONVERT | CF | "إِذا (أَكَلْتُما / تَأْكُلانِ) مِنْ ثَمَرِ تِلْكَ الشَّجَرَةِ، فَلَنْ (تَموتا / تَموتانِ) أَبَدًا" | AR-specific: past after إذا; لن drops the dual نون. Items 1≈3 and 2≈4 (pattern vs instance) duplicate. |
| 6 | adam-a2-ar-language-6-planned-responsibilities | GFM (كان + سـ + مضارع) | CONVERT | SB | Reorder: `وَكانا / سَيَبْنِيانِ / البُيوتَ / لِلسَّكَنِ` | 4 near-synonymous rights; item 4 (يحافظان… ويساعدان) lacks كانا سـ in the left. AR adds dual agreement (سيبنيان). |
| 7 | adam-a2-ar-language-7-guidance-patterns | SS (علّم + شخص + أن / حذّر + من) | CONVERT | WB | "حَذَّراهُمْ [مِنْ] إِبْليسَ. عَلَّمَ آدَمُ وَحَوّاءُ أَوْلادَهُما [أَنْ] يُحْسِنوا إِلى النّاسِ." Bank: مِنْ / أَنْ / إِلى / عَلَى | Rights name the pattern (حذّر + شخص + من) → trivial. Keep ليس…بل in the existing MC. |
| 8 | adam-a2-ar-language-8-description | GFM (كان/أصبح + خبر منصوب) | CONVERT | CF | "أَصْبَحَ هَابِيلُ (رَاعِيًا / رَاعٍ)" · "كَانَ هَابِيلُ (لَطِيفًا / لَطِيفٌ) وَطَيِّبًا" | AR-specific: accusative of خبر كان/أصبح. Items 3/4 (both أصبح + job) have interchangeable rights. EN uses DD instead (no case issue). |
| 9 | adam-a2-ar-language-9-future-choice | GFM (سـ / لن + منصوب) | CONVERT | CF | "لَنْ (أَرُدَّ / أَرُدُّ / رَدَدْتُ) عَلَيْكَ" · "(سَأَقْتُلُكَ / لَنْ أَقْتُلَكَ)" in Qabil's line | Two لن items interchangeable; rights name the particle. AR adds لن + subjunctive (fatha). |
| 10 | adam-a2-ar-language-10-advice | GFM (يجب أن / تدعو إلى) | CONVERT | SB | Reorder: `يَجِبُ / أَنْ / يَبْتَعِدُوا / عَنِ / الْحَسَدِ` | Pairwise interchangeable items (يجب ×2, تدعو ×2). Ch set: SB, FB, MC, RF. |

---

## B1 — EN

| ch | exercise id | purpose | keep/convert | target | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | adam-b1-language-1-source-and-story-time | GFM (present vs past) | CONVERT | DD | Groups **Present: what the source does** (The Holy Qur'an tells his tale; Surahs … describe Adam's tale; we can learn many lessons) / **Past: story events** (Allah created the sky…; The angels were surprised; began to wait) | Rights 1–2 near-duplicates ("presents what the source does generally" / "…in the present") → categorization in disguise. |
| 1 | adam-b1-language-1-future-from-the-past | GFM (was going to / would) | CONVERT | TR | Allah said, "This ruler **will** live there for many years." → "Allah said that this ruler ___ live there…" (would) | Only 3 items; "Allah decided to place a ruler" not verbatim (text: "He had decided"). |
| 1 | adam-b1-language-1-sequence-and-reporting | SS (say vs tell; After + clause) | CONVERT | FB | "[After] Allah created the sky and the earth, He [told] the angels that He was going to create a human. He [said] He had decided to place a ruler on earth." | Left "He said He decided to" misquotes text ("had decided"). Set: DD, TR, FB, RF. |
| 2 | adam-b1-language-2-cause-and-result | DISC (that's why / so) | CONVERT | CF | "…from a handful of dust from different lands, (so / because / although) the children of Adam are white, red…" | Item 3 ("from a handful of dust") is not a connector → odd one out, solvable by elimination. |
| 2 | adam-b1-language-2-report-and-command | SS (reported command) | CONVERT | TR | Allah told His angels, "Show respect to him." → "Allah told His angels ___ respect to Adam." (to show) | |
| 2 | adam-b1-language-2-purpose-sequence-comparison | DISC (to + V / Later / more … than) | CONVERT | FB | "Allah gave Adam life and intellect [to] learn and understand. [Later], He taught Adam everything… He gave Adam more knowledge [than] the angels." | Each right keyed by a visible word (more…than ⇒ compares). Set CF, TR, FB, RF. |
| 3 | adam-b1-language-3-reporting-beliefs | GFM (think/believe that + backshift) | CONVERT | EC | "Iblis thought that Adam **is** an unimportant being created from clay." → was | Rights solvable by adjective polarity (amazing⇒positive, unimportant⇒negative); only 3 items. |
| 3 | adam-b1-language-3-contrast-and-comparison | GFM (comparatives) | CONVERT | CF | "I am (better / more good / best) than Adam." · "He thought he was (more important / importanter / the most important) and more valuable than Adam." | |
| 3 | adam-b1-language-3-reason-and-result | DISC (because / couldn't / which made / did not come from) | KEEP | MA | — | Four distinct relations, no overlap: acceptable as the chapter's single MA. Set EC, CF, MA, RF. |
| 4 | adam-b1-language-4-continuing-and-reaction | GFM (continue + -ing) | CONVERT | FB | "Iblis continued [saying] he was right and the Creator was wrong." (accept saying / to say) | Only 3 items; "got angry" vs "hated" rights subtle. |
| 4 | adam-b1-language-4-reason-and-desire | GFM (because of + NP vs because + clause) | CONVERT | CF | "He thought that (because of / because) Adam, Allah had put him far from His help." · "He didn't want Allah (to be / be / being) kind to Adam." | Real B1 contrast; matching hid it. |
| 4 | adam-b1-language-4-purpose-warning | SS (warn + person + to) | CONVERT | TR | Allah said to Adam, "Be careful of Iblis." → "Allah warned him ___" (to be careful of Iblis) | **Item not in chapter**: "just like himself" (text: "just as he himself was"). Set FB, CF, TR, RF. |
| 5 | adam-b1-language-5-beginning-state-role | GFM (start/begin + to/-ing; to + purpose) | KEEP | MA | — | Distinct items; fine as the single MA. |
| 5 | adam-b1-language-5-comparison-and-restriction | SS (ask + not to) | CONVERT | TR | Allah said, "Don't go near this tree." → "Allah asked them ___ near one tree." (not to go) | "we can imagine" is a substring of item 1 → overlap. |
| 5 | adam-b1-language-5-time-manner-condition | GFM (reported conditional) | CONVERT | CF | "He whispered to them that if they (ate / eat / will eat) from that one tree, they (would / will) never die." | Set MA, TR, CF, RF. |
| 6 | adam-b1-language-6-success-causation-earlier-past | GFM (manage to / convince to / past perfect) | CONVERT | CF | "…they forgot the warning Allah (had given / has given / gives) them." · "Iblis managed (to trick / tricking) them." | |
| 6 | adam-b1-language-6-sequence-change-discovery | DISC (narrative sequence) | CONVERT | SQ | Order: stretched out his hand… → When Adam finished eating, he felt… → the atmosphere changed… → their private parts became visible → Adam discovered… | 5 items that are really a timeline. |
| 6 | adam-b1-language-6-result-purpose-cause | DISC (so / to / because) | CONVERT | FB | "Adam discovered that he and his wife were uncovered, [so] they both started cutting tree leaves [to] cover themselves… because a sense of shame is…" | "hurried to hide" and "to cover" both read as purpose → ambiguous. Set CF, SQ, FB, RF. |
| 7 | adam-b1-language-7-intention-response-decision | VOC (phrase ↔ meaning) | KEEP | MA | — | Closest to genuine phrase↔meaning (on purpose = intentional). |
| 7 | adam-b1-language-7-speech-request-cause-contrast | DISC (because / on the other hand / but) | CONVERT | FB | "[On the other hand], Iblis chose an opposite path. He never admitted he was wrong [because] he was arrogant." | 5 heterogeneous items. |
| 7 | adam-b1-language-7-purpose-responsibility-future | GFM (would / make + obj + adj) | CONVERT | CF | "They (would / will / had) direct, control and make everything (better / well / best) on the planet." | Misquote "gave them everything to rule" (text: "…they needed to rule"); "make everything better" is a substring of item 3. Set MA, FB, CF, RF. |
| 8 | adam-b1-language-8-future-necessity-purpose-addition | DISC/GFM (had to / to / In addition) | CONVERT | FB | "On earth, they [had to] struggle [to] survive… [In addition], they had to protect themselves [with] clothes and weapons." | Overlaps with the ch8 MC which tests the same 3 relations. |
| 8 | adam-b1-language-8-means-cause-duration-contrast | GFM (with / because / for / both…and) | KEEP | MA | — | Distinct preposition/connector meanings; OK as single MA. Set FB, MA, MC, RF. |
| 9 | adam-b1-language-9-time-change-continuation | GFM (stop + -ing; became) | CONVERT | EC | "Allah never stopped **to send** messengers and sacred texts to remind people of Him." → sending | Left "when a community came out" misquotes text ("formed"). |
| 9 | adam-b1-language-9-teaching-purpose-direction | SS (teach + person + to) | CONVERT | TR | They said to their children, "Pray only to Allah." → "Adam and Eve taught their children ___" (to pray only to Allah) | **Item not in chapter**: "wanted to make people keep Allah in their minds" (text: "They wanted people to keep Allah…"). Items 1–2 both teach+person+to. Set EC, TR, MC, RF. |
| 10 | adam-b1-language-10-growth-role-habit | GFM (grow up to be / became) | KEEP | MA | — | Keep but rewrite rights 3/4 (both "what a role involves"). |
| 10 | adam-b1-language-10-contrast-purpose-obligation | COLL (care about + -ing) | CONVERT | EC | "Qabil didn't care about **please** Allah and his father." → pleasing | Set MA, EC, MC, RF. |
| 11 | adam-b1-language-11-cause-threat-refusal | GFM (will / won't) | CONVERT | CF | Habil: "I (won't / don't / wouldn't) fight back and harm you." | Rights name the forms ("uses will", "uses won't", "uses because") → trivial. |
| 11 | adam-b1-language-11-regret-indirect-question | SS (embedded question) | CONVERT | EC | "Now I don't know what **should I** do with his dead body." → what I should do | 5 items; also usable: worse/worst CF. Set CF, EC, MC, RF. |
| 12 | adam-b1-language-12-stance-obligation-continuity | GFM (should / had to / still / never) | CONVERT | FB | "True believers [should] stay away from jealousy. Adam [had to] continue his life. The message [still] calls upon people… Allah [never] left people alone." | Rights name the modal in the left → trivial. |
| 12 | adam-b1-language-12-time-and-parallel-purpose | SS (parallelism; importance of + -ing) | CONVERT | EC | "It teaches people the importance of **admit** mistakes and **turn** back to Allah." → admitting / turning | Set FB, EC, MC, RF. |

## B1 — AR

| ch | exercise id | purpose | keep/convert | target | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | adam-b1-ar-language-1-source-and-story-time | GFM (مضارع vs ماضٍ) | CONVERT | DD | **مضارع: عن المصدر** (يحكي القرآن، تتحدث سور…، يمكننا أن نتعلم) / **ماضٍ: أحداث القصة** (خلق الله السماء، تعجبت الملائكة، بدأت تنتظر) | Rights 1–2 near-duplicates. |
| 1 | adam-b1-ar-language-1-reported-future | GFM (إنّ vs أنّ; كان + سـ) | CONVERT | CF | "أخبر الملائكة (أنّه / إنّه) سيخلق إنسانًا. وقال (إنّه / أنّه) قرر أن يجعل خليفة." | AR-specific: إنّ after قال, أنّ after أخبر — better target than EN's would. |
| 1 | adam-b1-ar-language-1-sequence-possibility-result | DISC (بعد أن / فـ / بدأ) | CONVERT | FB | "[بعد أن] خلق الله السماء والأرض، أخبر الملائكة… [فـ]تعجبت الملائكة و[بدأت] تنتظر بفضول." | Set DD, CF, FB, RF. |
| 2 | adam-b1-ar-language-2-cause-result | DISC (لهذا السبب / لذلك) | CONVERT | CF | "…من قبضة من تراب أخذها من أماكن مختلفة، (ولذلك / لأنّ / لكنّ) جاء أبناء آدم ببشرة…" | Item 3 not a connector (elimination). |
| 2 | adam-b1-ar-language-2-report-command | SS (أمر + أن + منصوب) | CONVERT | TR | قال الله لملائكته: «أظهروا له احترامكم» ← "أمر اللهُ ملائكتَه ___" (أن يُظهروا له احترامَهم) | AR adds pronoun shift كم→هم and subjunctive. |
| 2 | adam-b1-ar-language-2-purpose-sequence-comparison | DISC (لكي / ثم / أكثر من) | CONVERT | FB | "أعطى الله آدم الحياة والعقل [لكي] يتعلم ويفهم. [ثم] علّمه الله العلم اللازم… علمًا أكثر [من] الملائكة." | Set CF, TR, FB, RF. |
| 3 | adam-b1-ar-language-3-reporting-beliefs | GFM (أنّ + اسم منصوب) | CONVERT | EC | "كان إبليس يرى أنّ **آدمُ** شخص غير مهم" → آدمَ | AR-specific case target (EN uses backshift). |
| 3 | adam-b1-ar-language-3-contrast-and-comparison | GFM (أفعل من / إلا) | CONVERT | CF | "أنا (أفضلُ / الأفضلُ / فاضلٌ) من آدم" · "أعجبوا به جميعًا واحترموه، (إلا / لأنّ / لكنّ) إبليس" | |
| 3 | adam-b1-ar-language-3-reason-limitation-result | DISC | KEEP | MA | — | Distinct relations; single MA. |
| 4 | adam-b1-ar-language-4-continuation-reaction | GFM (استمر في + مصدر; خبر كان) | CONVERT | FB | "استمر إبليس [في] القول إنه كان محقًا" · "كان إبليس [غاضبًا] من آدم" (accept غاضبًا only) | |
| 4 | adam-b1-ar-language-4-desire-reason-viewpoint | GFM (بسبب + اسم vs لأنّ + جملة) | CONVERT | CF | "وظنّ أن الله أبعده عن عونه (بسبب / لأنّ) آدم" · "لم (يُرِدْ / يُريدُ) أن يُحسن الله إلى آدم" | Adds jussive after لم. |
| 4 | adam-b1-ar-language-4-purpose-warning | SS (أمره أن + منصوب) | CONVERT | TR | قال الله لآدم: «كن حذرًا من إبليس» ← "أمره الله ___" (أن يكون حذرًا من إبليس) | Set FB, CF, TR, RF. |
| 5 | adam-b1-ar-language-5-beginning-result-role | GFM | KEEP | MA | — | Single MA. |
| 5 | adam-b1-ar-language-5-comparison-instruction | SS (ألّا + منصوب) | CONVERT | TR | «لا تقتربا من هذه الشجرة» ← "طلب الله منهما ___" (ألّا يقتربا منها) | "يمكننا تخيله" is substring of item 1; left 3 paraphrases text. AR: أنْ + لا → ألّا, dual نون drops. |
| 5 | adam-b1-ar-language-5-time-report-condition | GFM (لن + منصوب; إذا + ماضٍ) | CONVERT | CF | "همس لهما أنهما لن (يموتا / يموتان / ماتا) أبدًا إذا (أكلا / يأكلان) من ثمرة تلك الشجرة" | |
| 6 | adam-b1-ar-language-6-time-causation-sequence | GFM (causative) | CONVERT | CF | "و(أنساهما / نسيهما / تناساهما) تحذيرَ الله" | AR-specific: Form IV causative (نسي→أنسى) — morphology point absent in EN. |
| 6 | adam-b1-ar-language-6-time-feeling-change | DISC (sequence) | CONVERT | SQ | Order: مدّ آدم يده… → عندما انتهى من الأكل شعر… → تغيّر الجو… → انكشفت عوراتهما → أدرك آدم… | |
| 6 | adam-b1-ar-language-6-realization-result-purpose-cause | DISC (لذلك / لـ / لأنّ) | CONVERT | FB | "أدرك آدم أنه وزوجته لم يعودا مستورين، [لذلك] بدآ بقطع أوراق أشجار الجنة [لـ]تغطية أنفسهما… [لأنّ] الحياء فطرة" | **Not in text**: "لذلك فبدآ" (text: لِذَلِكَ بَدَآ, no فـ) yet the right claims "والفاء". Purpose ambiguity أسرعا لإخفاء vs لتغطية. |
| 7 | adam-b1-ar-language-7-intention-regret-decision | VOC | KEEP | MA | — | Single MA. |
| 7 | adam-b1-ar-language-7-request-admission-contrast-cause | DISC/COLL (من ناحية أخرى، اعترف بـ) | CONVERT | FB | "[من ناحية أخرى]، قام إبليس بخيار معاكس. لم يعترف أبدًا [بـ]أنه كان مخطئًا." | **Not in AR ch7**: "لأنه كان متكبرًا" (AR text has "إنّ الكبر هو أكبر عقبة" instead). |
| 7 | adam-b1-ar-language-7-purpose-role-result | GFM (خبر كان المثنى) | CONVERT | CF | "كانا (خليفتين / خليفتان) في الأرض" · "أعطاهما ما يلزم (لإدارة / يدير) الحياة" | "لإدارة الحياة" is a substring of item 2 → overlap. |
| 8 | adam-b1-ar-language-8-future-necessity-purpose-addition | DISC/GFM | CONVERT | FB | "[كان] عليه أن يكافح [من أجل] البقاء على قيد الحياة، [كما] كان عليه أن يعمل بجد." | |
| 8 | adam-b1-ar-language-8-means-purpose-duration-contrast | GFM (بـ / لـ) | KEEP (fix) | MA | — | **Not in text**: "ليبعد الناس عن ذكر الله" (text: حاول أن يُبعد) — replace item. Nice AR point: لـ = purpose vs لـ = duration (لسنوات). |
| 9 | adam-b1-ar-language-9-time-change-continuation | GFM (أصبح + منصوب) | CONVERT | EC | "أصبح آدمُ **أولُ** رسولٍ لله" → أولَ | |
| 9 | adam-b1-ar-language-9-teaching-purpose-direction | SS (علّم + مفعولان) | CONVERT | TR | «اعبدوا الله وحده» ← "علّم آدمُ وحواءُ أولادَهما ___" (عبادةَ الله وحده / أن يعبدوا الله وحده) | |
| 10 | adam-b1-ar-language-10-growth-role-habit | GFM | KEEP | MA | — | Rewrite rights 3/4 (overlap). |
| 10 | adam-b1-ar-language-10-contrast-purpose-obligation | COLL (اهتمّ بـ) | CONVERT | EC | "لم يهتمّ قابيل **على** إرضاء الله وأبيه" → بإرضاء | |
| 11 | adam-b1-ar-language-11-cause-threat-refusal | GFM (لأفعلنّ / لن) | CONVERT | CF | Most emphatic threat: (لأقتلنّك / سأقتلك / قتلتك) · "لن (أقاتلَك / أقاتلُك)" | AR-specific: لام القسم + نون التوكيد (EN has plain will). |
| 11 | adam-b1-ar-language-11-regret-uncertainty-comparison | GFM (أفعل من) | CONVERT | EC | "أنا **الأسوأُ** من هذا الغراب" → أسوأُ من | AR-specific: التفضيل with من is indefinite. 5 items. |
| 12 | adam-b1-ar-language-12-obligation-continuity | GFM | CONVERT | FB | "[على] المؤمنين أن يبتعدوا… [كان على] آدم أن يكمل… هذه الرسالة [لا تزال] تدعو… [لم] يترك الله الناس وحدهم أبدًا" | Rights name the form → trivial. |
| 12 | adam-b1-ar-language-12-time-parallel-actions | SS (parallel مصدر) | CONVERT | EC | "تذكّر الناس بأهمية الاعتراف بأخطائهم **وأن يرجعوا** إلى الله" → والرجوعِ | |

---

## B2 — EN

| ch | exercise id | purpose | keep/convert | target | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | adam-b2-language-1-source-focus | GFM (passive for focus) | CONVERT | TR | "The Holy Qur'an tells the story of Adam in several chapters." → "The story of Adam ___" (is told in several chapters of the Holy Qur'an) | Two passive items with mirror rights ("foregrounds Adam" / "foregrounds where") → solvable by noun match. |
| 1 | adam-b2-language-1-contrast | DISC | KEEP (fix) | MA | — | **Misquote**: "not symbolic…; rather, it is presented as a factual tale" (text: "…but it is an original factual tale"); "a scene of contrast" (text: "scene of a division and contrast"). |
| 2 | adam-b2-language-2-discourse-chain | DISC | KEEP | MA | — | Distinct linkers (which is / As an example / Therefore). |
| 2 | adam-b2-language-2-focus-relations | SS (relative + passive) | CONVERT | TR | "Allah created Adam from this material." → "the material ___" (from which Adam was created) | Set MA, TR, MC, RF. |
| 3 | adam-b2-language-3-purpose-necessity | GFM (passive modal) | CONVERT | EC | "Also, he had to **taught** by Allah." → had to be taught | |
| 3 | adam-b2-language-3-interpretive-stance | STANCE | CONVERT | DD | **Direct claim** (shows the value that Allah gave him; means giving Adam life) / **Inference or possibility** (points to the broadness of Adam's knowledge; could be the fundamental knowledge of being human) | **Not in text**: "signifies giving Adam life" (text: "It also means…"). Rights 1–2 indistinguishable. Stance = categorization. |
| 4 | adam-b2-language-4-contrast-complementarity | DISC | KEEP | MA | — | Single MA. |
| 4 | adam-b2-language-4-necessity-purpose | COLL (require + obj + to) | CONVERT | EC | "…required even the angels **prostrating** themselves before Adam." → to prostrate | Set MA, EC, MC, RF. |
| 5 | adam-b2-language-5-definition-focus | DISC (which is / in other words / that is) | KEEP | MA | — | Three near-synonymous markers; rights resolved only by content. Acceptable; could become DD later. |
| 5 | adam-b2-language-5-cause-contrast-focus | DISC (yet) | CONVERT | SC | "He underlines his superiority because of his material. Adam's humble origin shows that Allah does not focus on origins." → join with *yet* | Two "because" items with rights separable only by content. |
| 6 | adam-b2-language-6-command-boundary | other:speech act (permission/prohibition) | KEEP | MA | — | Qur'anic wording: keep (no EC/TR on verses). |
| 6 | adam-b2-language-6-contrast-trajectory | DISC (while) | CONVERT | SC | "Satan reached the point of no return by challenging his Creator. Adam took a path completely different from him." → "While Satan…, Adam…" | Narrator sentence only (items 3–4 are verse). |
| 7 | adam-b2-language-7-general-tendency | GFM (generic present) | CONVERT | DD | **General human tendency** (man tends to forget; His heart changes; his determination weakens) / **Specific story event** (He took advantage of Adam's humanity; He started to whisper to them day after day) | 3 of 4 rights are the same category → categorization in disguise. |
| 7 | adam-b2-language-7-cause-purpose-chain | SS (to-inf purpose; participle clause) | CONVERT | SC | "He started to whisper to them day after day. He was trying to persuade both." → "…day after day, trying to persuade both." | "to remove" vs "to manipulate" both purpose → ambiguous. Set DD, SC, MC, RF. |
| 8 | adam-b2-language-8-sequence-result | DISC (so / because) | CONVERT | FB | "Adam discovered that he and his wife were unclad, [so] they both started cutting tree leaves… They were in haste to hide their private parts, [because] the sense of shame is inborn human nature." | Items 1–2 are verse text → use narrator paragraph only. |
| 8 | adam-b2-language-8-dialogue-function | other:speech act | KEEP | MA | — | Good: distinct pragmatic functions; sacred dialogue shouldn't be rewritten. Set FB, MA, MC, RF. |
| 9 | adam-b2-language-9-cause-response | DISC (nominalised cause) | CONVERT | TR | "Allah had mercy on him because he regretted." → "His regret itself was ___" (the reason for Allah's mercy upon him) | "deeply regretted" (text: "severely"). |
| 9 | adam-b2-language-9-condition-consequence | GFM (unless) | KEEP | MA | — | Qur'anic prayer: keep. |
| 10 | adam-b2-language-10-future-viewpoint | GFM (future-in-the-past) | CONVERT | EC | "Allah knew that Adam and Eve **will** eat of the tree and descend to Earth." → would | |
| 10 | adam-b2-language-10-source-certainty | STANCE | CONVERT | DD | **Named attribution** (Ibn Abbas … said; Ibn Umar said that) / **Distanced report** (There are many hadiths…; It is also reported that…; It is said to have come from Paradise) | 5 items, two named items with near-identical rights. Set EC, MC, DD, RF. |
| 11 | adam-b2-language-11-time-pressure | SS (inversion) | CONVERT | TR | "As soon as one ended, another began." → "No sooner ___" (had one ended than another began) | |
| 11 | adam-b2-language-11-contrast-consequence | DISC | KEEP | MA | — | Single MA. |
| 12 | adam-b2-language-12-contrast | DISC (while) | CONVERT | SC | "Qabil cultivated the land. Habil raised cattle." → "Qabil cultivated the land while Habil raised cattle." | Rights separable only by content; item 4 is verse (exclude). |
| 12 | adam-b2-language-12-source-limits | STANCE | KEEP | MA | — | Single MA. |
| 13 | adam-b2-language-13-concession-contrast | DISC (although) | CONVERT | SC | "Qabil had the intention to kill. Habil did not adopt an aggressive attitude." → "Although…, …" | |
| 13 | adam-b2-language-13-purpose-condition | DISC | KEEP | MA | — | Single MA. Alt later: EC on "It is better that you **repented**" → repent. |
| 14 | adam-b2-language-14-negative-coordination | SS (nor + inversion) | CONVERT | EC | "…did nothing to lessen the hatred in Qabil's heart, nor **he showed** fear of Allah's punishment." → nor did he show | |
| 14 | adam-b2-language-14-development-purpose | DISC | KEEP (fix) | MA | — | **Misquote**: "the highness of a human" (text: "human dignity"). |
| 15 | adam-b2-language-15-purpose-embedded | SS | KEEP | MA | — | Verse split into 4 consecutive chunks → answerable by order; keep (sacred), but shuffle/add distractor function. |
| 15 | adam-b2-language-15-characterisation | SS (non-defining relative) | CONVERT | SC | "It arises from jealousy. Jealousy defeats the feelings of love and compassion." → "…jealousy, which defeats…" | Set MA, MC, SC, RF. |
| 16 | adam-b2-language-16-simultaneous-guidance | SS (parallel participles) | CONVERT | EC | "…advising his children and grandchildren, telling them about Allah and **to call** them to believe in Him." → calling | |
| 16 | adam-b2-language-16-future-unity | GFM (reported future) | CONVERT | TR | Adam said, "Allah will not leave man alone on Earth, but will send His prophets." → "Adam told his children that Allah ___" (would not leave…, but would send…) | Set EC, MC, TR, RF. |
| 17 | adam-b2-language-17-scope-exception | other:scope/exception | KEEP | MA | — | Qur'anic; claim↔exception pairs suit matching. |
| 17 | adam-b2-language-17-cause-appearance | SS (cleft) | CONVERT | TR | "Man's weakness and lack of morals make Satan look so strong." → "It is only ___" (man's weakness… that make Satan look so strong) | |

### B2 EN — rewrite status (done)
Files: src/data/adam/b2/en/languageFocus{,2,3}.ts (ids kept per slot; reflections kept; ch1 reflection "an 6–8" → "a 6–8").
Type sequences (slot1–3 + reflection): 1 DD·TR·MC · 2 MC·TR·WB · 3 DD·EC·MC · 4 TF·EC·WB · 5 MA·TR·DD · 6 MA·TR·MC · 7 DD·TR·CF · 8 MA·WB·DD · 9 MC·TR·EC · 10 DD·MC·EC · 11 MC·WB·TR · 12 MC·TR·MA · 13 DD·TR·EC · 14 DD·SB·EC · 15 MC·TR·DD · 16 TF·EC·TR · 17 MA·TR·MC.
Matching kept in 5/17 chapters (5 clarifiers, 6 verse functions, 8 dialogue functions, 12 source limits, 17 verse scope/exception), all with matchingHeadings.
Misquotes removed (old ch1 "rather, it is presented as", ch3 "signifies", ch9 "deeply regretted"/"capable of", ch12 "have the right on his side", ch13 "but also he", ch14 "highness of a human", ch15 "What is essentially described"). All items verified verbatim by script.

## B2 — AR

| ch | exercise id | purpose | keep/convert | target | sketch (short) | notes |
|---|---|---|---|---|---|---|
| 1 | adam-b2-language-1-ar-source-focus | GFM (المبني للمجهول) | CONVERT | TR | "ذكر القرآنُ قصةَ آدم في عدة سور" ← "___ قصةُ آدم في عدة سور" (تُذكَر / ذُكِرت) | AR passive by vowel pattern (فُعِل/يُفعَل); Arabic avoids stating the agent, so don't ask for "من قِبَل". |
| 1 | adam-b2-language-1-ar-contrast | DISC (ليس…بل / أكثر من كونه) | KEEP | MA | — | Single MA. |
| 2 | adam-b2-language-2-ar-evidence-chain | DISC | KEEP | MA | — | |
| 2 | adam-b2-language-2-ar-source-evidence | SS (نفي + بل) | CONVERT | SC | "لم يُخلق من كائن آخر. خُلق مباشرة من التراب." ← "لم يُخلق من كائن آخر، ___" (بل خُلق مباشرة من التراب) | Note: وهكذا فإنّ + اسم منصوب. |
| 3 | adam-b2-language-3-ar-purpose-necessity | GFM (لكي + منصوب) | CONVERT | SC | "كان آدم يحتاج إلى صفات استثنائية. سيكون خليفة في الأرض." ← "___ يكونَ آدم خليفة في الأرض، كان يحتاج…" (لكي) | Parity: EN targets passive modal; AR text is active (أن يعلمه الله) → don't force passive-with-agent. |
| 3 | adam-b2-language-3-ar-stance | STANCE | CONVERT | DD | **تقرير مباشر** (يدل على القيمة…؛ يعني ذلك أن الله أعطى آدم الحياة) / **استنتاج أو احتمال** (تشير إلى سعة علم آدم؛ يمكن فهم هذه الأسماء على أنها…) | Rights 1–2 indistinguishable. |
| 4 | adam-b2-language-4-ar-complementarity | DISC | KEEP | MA | — | |
| 4 | adam-b2-language-4-ar-need | COLL (احتاج إلى) | CONVERT | EC | "يحتاج الإنسان **كلا** النوعين" → إلى كلا النوعين | |
| 5 | adam-b2-language-5-ar-clarification | DISC | KEEP | MA | — | Two أي items (أي إبليس / أي العرق) → only content separates them. |
| 5 | adam-b2-language-5-ar-cause-contrast | DISC (ولكنّ) | CONVERT | SC | Join "يؤكد أفضليته بسبب مادة خلقه" + "أصل آدم المتواضع يدل على…" with ولكنّ (→ ولكنّ أصلَ آدم) | لكنّ + منصوب. |
| 6 | adam-b2-language-6-ar-command-boundary | other:speech act | KEEP | MA | — | Qur'anic (اسكن، فكلا، لا تقربا، فأنظرني). |
| 6 | adam-b2-language-6-ar-contrast-development | DISC (بينما) | CONVERT | SC | "وصل الشيطان إلى نقطة اللاعودة… سلك آدم طريقًا مختلفًا تمامًا" ← "فبينما…، سلك آدم…" | |
| 7 | adam-b2-language-7-ar-general-tendency | GFM (جملة خبرية عامة) | CONVERT | DD | **ميل بشري عام** (الإنسان يميل إلى النسيان؛ قلبه يتقلب؛ عزمه يضعف) / **حدث في القصة** (فاستغل الشيطان بشرية آدم؛ ما إن انتهى آدم من الأكل…) | Categorization in disguise (3 same-category items). |
| 7 | adam-b2-language-7-ar-cause-purpose | SS (لام التعليل؛ حال) | CONVERT | SC | "استغل الشيطان بشرية آدم. أراد أن يخدعه." ← "…بشرية آدم ___" (ليخدعَه) · "…يوسوس لهما، ___ إقناعهما" (محاولًا) | AR-specific: لام + منصوب; حال منصوب. |
| 8 | adam-b2-language-8-ar-sequence-result | DISC | CONVERT | FB | "…أنه هو وزوجته عاريان، [فـ]بدآ يقطعان من ورق الجنة [لـ]يسترا نفسيهما" | Items 1–3 are verse; use narrator sentence only. |
| 8 | adam-b2-language-8-ar-dialogue-function | other:speech act | KEEP | MA | — | |
| 9 | adam-b2-language-9-ar-repentance-process | DISC | CONVERT | TR | "شعر آدم بندم شديد على ما فعله" ← "ندم آدمُ ___ على ما فعله" (ندمًا شديدًا) | **Not in text**: "ندم آدم ندما شديدا"، "رجع إلى الله / تاب إليه" (text: شعر… بندم شديد، فتوجه إلى الله فورًا). AR-specific target: المفعول المطلق. AR omits EN's "His regret itself was the reason…" though AR text has it. |
| 9 | adam-b2-language-9-ar-condition-consequence | GFM (إن لم… لـ…نّ) | KEEP | MA | — | Qur'anic prayer. EN "Unless" ≠ AR "إن لم" + لام/نون التوكيد. |
| 10 | adam-b2-language-10-ar-viewpoint | GFM (سـ from past viewpoint) | CONVERT | EC | "كان الله يعلم أن آدم وحواء **أكلا** من الشجرة ويهبطان" → سيأكلان | Parity: Arabic keeps سـ (no backshift), EN uses would. |
| 10 | adam-b2-language-10-ar-source-distance | STANCE | CONVERT | DD | **إسناد مسمّى** (قال ابن عباس…؛ قال ابن عمر إن…) / **نقل بمسافة** (هناك أحاديث كثيرة…؛ روي أيضًا أن…؛ يقال إنه جاء من الجنة) | AR: روي/يقال as passive reporting forms. |
| 11 | adam-b2-language-11-ar-time-pressure | SS (ما إن… حتى) | CONVERT | TR | "ينتهي صراع فيبدأ آخر مباشرة" ← "ما إن ___" (ينتهي واحد حتى يبدأ آخر) | |
| 11 | adam-b2-language-11-ar-contrast-result | DISC (أما… فـ) | KEEP | MA | — | |
| 12 | adam-b2-language-12-ar-contrast | DISC (بينما) | CONVERT | SC | "كان قابيل يزرع الأرض. كان هابيل يرعى الماشية." ← join with بينما | Item 4 is verse (exclude). |
| 12 | adam-b2-language-12-ar-source-limits | STANCE | KEEP | MA | — | |
| 13 | adam-b2-language-13-ar-concession-contrast | DISC (مع أنّ… فإنّ) | CONVERT | SC | "كان قابيل ينوي القتل. لم يتخذ هابيل موقفًا عدوانيًا." ← "مع أنه كان ينوي القتل، ___" (فإنّ هابيلَ لم يتخذ…) | فإنّ + اسم منصوب. |
| 13 | adam-b2-language-13-ar-purpose-condition | DISC | KEEP | MA | — | |
| 14 | adam-b2-language-14-ar-negation | GFM (لم + مجزوم) | CONVERT | EC | "لم يخفف هذا الرجاء من الكراهية، ولم **يُظهرُ** أي خوف" → يُظهرْ | Parity: EN targets "nor did he", AR targets jussive — same slot, language-appropriate form. |
| 14 | adam-b2-language-14-ar-development-purpose | DISC | KEEP | MA | — | |
| 15 | adam-b2-language-15-ar-purpose-embedded | SS | KEEP | MA | — | Verse chunks in order → shuffle. |
| 15 | adam-b2-language-15-ar-characterisation | SS (الاسم الموصول) | CONVERT | SC | "الحسد يغلب مشاعر المحبة والرحمة. هو أصل هذا الشر." ← "الحسدُ ___ يغلب مشاعر المحبة" (الذي) | AR: relative agreement الذي/التي. |
| 16 | adam-b2-language-16-ar-habitual-guidance | SS (كان + مضارع متوازٍ) | CONVERT | EC | "كان نبيًا يوجه أولاده، ويحدثهم عن الله، **ودعاهم** إلى الإيمان به" → ويدعوهم | AR uses كان + مضارع where EN uses -ing participles. |
| 16 | adam-b2-language-16-ar-future-continuity | DISC (لن… بل سـ) | CONVERT | SC | "لن يترك الله الإنسان وحده. سيرسل إليهم أنبياء." ← "لن يترك…، ___" (بل سيرسل إليهم أنبياء ليهدوهم) | |
| 17 | adam-b2-language-17-ar-scope-exception | other:scope/exception | KEEP | MA | — | Qur'anic. |
| 17 | adam-b2-language-17-ar-cause-appearance | SS (الحصر) | CONVERT | TR | "ضعف الإنسان ونقصه الأخلاقي يقوّيان الشيطان" ← "الذي ___ هو ضعف الإنسان…" (يقوي الشيطان) / accept "إنما يقويه ضعف الإنسان" | |

---

## Summary counts

| level | lang | MA total | KEEP | CONVERT |
|---|---|---|---|---|
| A2 | EN | 10 | 1 | 9 |
| A2 | AR | 10 | 1 | 9 |
| B1 | EN | 31 | 5 | 26 |
| B1 | AR | 31 | 5 | 26 |
| B2 | EN | 34 | 13 | 21 |
| B2 | AR | 34 | 13 | 21 |
| all | | 150 | 38 | 112 |

Conversion targets: A2 EN — CF 4, SB 3, WB 1, DD 1 · A2 AR — CF 5, WB 2, SB 2 ·
B1 EN — CF 7, FB 7, TR 5, EC 5, DD 1, SQ 1 · B1 AR — CF 8, FB 7, EC 5, TR 4, DD 1, SQ 1 ·
B2 EN — TR 6, SC 6, EC 5, DD 3, FB 1 · B2 AR — SC 9, TR 4, EC 4, DD 3, FB 1.

## Other data problems (non-matching, noticed in passing)
- B1 EN/AR ch8–12 "choose the passage" MC: distractors are ungrammatical word salad (e.g. "They would shelter because addition had to safe food.") → answerable without reading. Replace with fluent but wrong-relation distractors.
- ID naming inconsistency: A2/B1 AR use `adam-{lvl}-ar-language-N-…`, B2 AR uses `adam-b2-language-N-ar-…`.
