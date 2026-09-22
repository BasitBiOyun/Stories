import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

type ChapterPlan = {
  chapter: string;
  focus: string;
  evidence: string;
  misconception: string;
  language: string;
  discussion: string;
  valueAction: string;
};

const plans: ChapterPlan[] = [
{chapter:'1. Prophet Abraham and Tawheed',focus:'analyse how the opening positions Abraham as a representative of Tawheed and a connecting figure in prophetic genealogy',evidence:'the links through Ishmael and Isaac and the title “Allah’s friend”',misconception:'being central to several religious traditions does not mean the chapter says those traditions are identical in every detail',language:'Use defining and qualifying clauses: is presented as, is connected through, is described as.',discussion:'Which details make Abraham central in the chapter, and which claim would go beyond the text?',valueAction:'intellectual accuracy — students distinguish what the chapter states from what they infer'},
{chapter:'2. Abraham as Allah’s Friend',focus:'explain the chapter’s relationship between Hanifism, moral uprightness, Tawheed, and reasoning',evidence:'the explicit statement that human beings can discover Allah’s existence through reasoning',misconception:'reasoning is not presented as a replacement for prophetic teaching',language:'Use cause and result: because, therefore, this suggests that.',discussion:'How does the chapter combine reason, revelation, and moral conduct?',valueAction:'thoughtful inquiry — students give a reason before accepting or rejecting a claim'},
{chapter:'3. Hanifism and the One True Faith',focus:'evaluate continuity and corruption in the chapter’s account of later religious history',evidence:'the Hijaz hanifs, Varaka, and Bilal’s “Ahad, Ahad” episode',misconception:'continuity of monotheism does not erase the chapter’s claim that beliefs later became mixed or corrupted',language:'Use contrast: while, however, although, yet.',discussion:'What does the Varaka–Bilal episode add to the chapter’s argument about continuity?',valueAction:'respectful comparison — students compare claims without caricaturing traditions'},
{chapter:'4. Hanifism Before Islam',focus:'read historical claims with B2 source caution and distinguish certainty from reported possibility',evidence:'different ideas, some sources, most generally speaking, is believed, some sources suggest',misconception:'the chapter does not present birthplace and chronology as equally certain facts',language:'Practise hedging: may, is believed to, some sources suggest, according to.',discussion:'Which sentence would become inaccurate if its hedge were removed?',valueAction:'source honesty — students preserve uncertainty instead of overstating evidence'},
{chapter:'5. The Birthplace and Mission of Abraham',focus:'separate the chapter’s narrative reports about Nimrod from its broader claim about Abraham’s mission',evidence:'the fortuneteller prediction and the alternative dream narration',misconception:'two narrations are not automatically two independently verified historical facts',language:'Use reporting verbs: narrates, reports, predicts, suggests.',discussion:'How should we retell alternative narrations without merging them into one certain account?',valueAction:'fair reporting — students identify a report as a report'},
{chapter:'6. Abraham’s Childhood',focus:'infer what young Abraham’s reaction to the statues reveals about judgment and contradiction',evidence:'his astonishment, spontaneous rejection, and treatment of Mardukh as an ordinary object',misconception:'the chapter’s childlike scene is evidence of rejection, not proof that Abraham lacked seriousness',language:'Use inference frames: This reaction indicates…, We can infer…, The text shows…',discussion:'What is the strongest evidence that Abraham does not accept the statue’s claimed status?',valueAction:'independent thinking — students test status claims against observable evidence'},
{chapter:'7. Hatred for Idols',focus:'analyse the contrast between human dependence on idols and the idols’ physical helplessness',evidence:'they cannot hear, rise, harm, or benefit while people bow, cry, and beg',misconception:'the chapter’s argument is about capability and worship, not merely dislike of art or statues',language:'Use contrastive comparison: whereas, in contrast, despite.',discussion:'Why is helplessness more important to the argument than the material wood or stone itself?',valueAction:'evidence before imitation — students challenge a practice by giving reasons, not insults'},
{chapter:'8. Discovering Allah',focus:'trace the first step of the celestial-body reasoning from observation to conclusion',evidence:'the planet sets and Abraham rejects what disappears',misconception:'the passage should not be reduced to Abraham simply choosing one celestial object after another',language:'Use observation-to-inference structures: When…, he notices…, therefore…',discussion:'What exactly does setting show about the planet’s status?',valueAction:'careful observation — students separate what is seen from the conclusion drawn'},
{chapter:'9. The Signs in the Sky',focus:'synthesise the star, moon, and sun pattern into a claim about Creator and creation',evidence:'all appear and disappear at the Creator’s command',misconception:'brightness or size is not the final criterion in the argument',language:'Use parallel structures and synthesis: similarly, in each case, taken together.',discussion:'What repeated feature makes the three observations one argument rather than three unrelated events?',valueAction:'consistent reasoning — students apply the same criterion to each example'},
{chapter:'10. Challenging Star Worshippers',focus:'distinguish a sign of Allah from an object of worship',evidence:'heavenly bodies are created, controlled, managed, and serve a purpose',misconception:'calling something a sign does not make it divine',language:'Use distinction frames: X is evidence of Y, but X is not Y.',discussion:'How does the chapter turn astronomy from an object of worship into evidence?',valueAction:'conceptual clarity — students define a term before debating it'},
{chapter:'11. Arguing for Tawheed',focus:'evaluate Abraham’s response to threats and his argument about security and guidance',evidence:'he does not fear assigned partners and asks which party has more right to security',misconception:'confidence in the passage is not the same as denying that opponents threatened him',language:'Use rhetorical questions and reported argument.',discussion:'How does Abraham reverse the question of who should be afraid?',valueAction:'moral courage — students practise disagreeing firmly without personal attack'},
{chapter:'12. Speaking to His Father',focus:'analyse why the conflict with Abraham’s father combines belief, family, and livelihood',evidence:'the father worships, shapes, and sells idols',misconception:'the conflict is not presented as a simple disagreement between strangers',language:'Use layered cause: not only…, but also…; this intensifies…',discussion:'Why might the father experience Abraham’s challenge as both religious and personal?',valueAction:'empathy without surrendering evidence — students explain another person’s position accurately'},
{chapter:'13. Debating the Idolaters',focus:'evaluate Abraham’s respectful strategy when advising his father',evidence:'affectionate address, reasons about hearing/seeing/benefit, and warning before the father’s threat',misconception:'respectful language does not mean Abraham avoids a direct challenge',language:'Use persuasive language: I understand…, however…, the evidence suggests…',discussion:'Which feature makes the advice both gentle and intellectually direct?',valueAction:'respectful dialogue — students challenge an idea while protecting the other person’s dignity'},
{chapter:'14. Calling People to Reconsider',focus:'explain how determination continues after personal rejection and threat',evidence:'Abraham responds with peace and prayer, then goes to debate the people despite possible consequences',misconception:'turning away from his father does not mean abandoning the wider mission',language:'Use concession: even though, despite, nevertheless.',discussion:'What changes in Abraham’s audience after the father’s threat, and what remains constant?',valueAction:'perseverance — students continue a principled task without retaliatory language'},
{chapter:'15. Breaking the Idols',focus:'identify the weakness of inherited practice as evidence for worship',evidence:'the people admit the idols are lifeless but appeal to their forefathers',misconception:'the chapter does not claim every inherited practice is wrong merely because it is inherited',language:'Use claim–evidence–evaluation frames.',discussion:'When can tradition count as context but not sufficient evidence?',valueAction:'critical inheritance — students respect history while still evaluating claims'},
{chapter:'16. The Broken Temple',focus:'compare the chapter’s descriptions of divine action with idol helplessness',evidence:'creation, guidance, food, water, healing, death, revival',misconception:'the comparison is not merely “large power versus small power”; it is active divine agency versus lifeless objects',language:'Use relative clauses and functional verbs: who creates…, who guides…',discussion:'Which two divine actions create the strongest contrast with the idols, and why?',valueAction:'gratitude — students connect provision or care with a concrete thankful action'},
{chapter:'17. Questioned Before the People',focus:'analyse why Abraham chooses an empty temple and a practical demonstration',evidence:'the festival empties the city; he questions silent statues and the food offerings',misconception:'the episode is not presented as random destruction without an argumentative aim',language:'Use purpose clauses: in order to, so that, with the aim of.',discussion:'What makes the temple episode a demonstration rather than merely an act?',valueAction:'purposeful action — students state the intended learning outcome before choosing a method'},
{chapter:'18. The Decision to Burn Abraham',focus:'explain how leaving the largest idol and the axe creates a later test of agency',evidence:'all other idols are smashed while one remains with the axe',misconception:'the chapter does not ask the reader to believe the largest idol actually acted',language:'Use counterfactual reasoning: If the idol could…, then…',discussion:'Why is the untouched idol essential to the logic of the next scene?',valueAction:'strategic communication — students choose evidence that makes a contradiction visible'},
{chapter:'19. Thrown into the Fire',focus:'analyse the public question to the largest idol as a rhetorical argument',evidence:'the people admit the idols cannot speak, then revert to old ideas',misconception:'Abraham’s statement is not a literal attribution of guilt to the idol',language:'Practise rhetorical questions and implied conclusions.',discussion:'At what moment do the people verbalise the contradiction themselves?',valueAction:'self-correction — students identify a moment when evidence should cause them to revise a view'},
{chapter:'20. The Faith of the Believers',focus:'evaluate the shift from failed argument to coercive punishment',evidence:'the people have no answer, recognise foolishness, but arrogance and authority lead to chains and fire',misconception:'lack of a verbal answer does not automatically mean social power disappears',language:'Use cause–consequence chains: because…, therefore…, as a result…',discussion:'Why can recognition of a contradiction fail to produce public change?',valueAction:'intellectual humility — students practise saying “the evidence changed my view”'},
{chapter:'21. The Coolness of the Fire',focus:'analyse the fire miracle as a reversal of the intended instrument of coercion',evidence:'Allah commands the fire to be coolness and safety; only the ropes burn',misconception:'the chapter does not say Abraham controls the fire himself',language:'Use passive and causative descriptions accurately.',discussion:'How does the same fire function differently for the crowd’s intention and the narrative outcome?',valueAction:'trust under pressure — students identify a responsible action they can still take when outcomes are uncertain'},
{chapter:'22. Stepping Out Unharmed',focus:'evaluate the varied social responses after the miracle',evidence:'some follow Abraham while others keep faith secret because they fear rulers',misconception:'a powerful event does not produce one uniform reaction in the chapter',language:'Use contrast and quantifiers: some…, others…, while…',discussion:'What does the hidden-belief detail show about the relation between conviction and political fear?',valueAction:'courage with realism — students distinguish private conviction from safe public action'},
{chapter:'23. Debating King Nimrod',focus:'expose the category error in Nimrod’s claim to give life and cause death',evidence:'he frees one condemned man and kills another',misconception:'choosing a prisoner’s fate is not equivalent to creating life or controlling death itself',language:'Use precise comparison: is not equivalent to, confuses X with Y.',discussion:'What exactly does Nimrod control, and what does Abraham’s claim refer to?',valueAction:'precision — students define the scope of a claim before evaluating it'},
{chapter:'24. Sarah, Hajar, and a New Trial',focus:'evaluate why the sun challenge defeats Nimrod’s broader claim and trace the transition to Abraham’s believing companions',evidence:'Nimrod cannot reverse the sun’s course; Sarah and Lot are identified as believers',misconception:'the argument does not claim the sun itself is divine',language:'Use escalation in argument: first…, then…, finally…',discussion:'Why is the second challenge harder for Nimrod to manipulate rhetorically?',valueAction:'evidence escalation — students choose a test that directly matches the scope of a claim'},
{chapter:'25. Sarah and Hajar',focus:'explain emigration as both consequence of rejection and continuation of mission',evidence:'Abraham says he will emigrate for his Lord and continues calling people in new lands',misconception:'migration is not presented as abandonment of the message',language:'Use purpose and continuity: in order to, wherever, continued to.',discussion:'How can leaving one place represent persistence rather than retreat?',valueAction:'purposeful adaptation — students change strategy without abandoning a core value'},
{chapter:'26. Hajar’s Trust in the Desert',focus:'connect family genealogy, divine testing, and the move toward Mecca',evidence:'Isaac and Ishmael’s lines and the command to take Hajar and Ishmael to the uncultivated valley',misconception:'the move is not presented as an accidental journey',language:'Use future-in-the-past and consequence: would become, would lead to.',discussion:'How does the chapter connect a family decision with a much larger future?',valueAction:'responsibility — students consider how present actions can affect later communities'},
{chapter:'27. Hajar and Ishmael Search for Water',focus:'analyse Hajar’s shift from anxiety to trust after learning the action is commanded by Allah',evidence:'“Has Allah commanded you?” followed by her confidence that they will not be lost',misconception:'trust does not mean she already knows how the practical problem will be solved',language:'Use change-of-state language: at first, once she learns, then.',discussion:'What information changes Hajar’s interpretation of the same situation?',valueAction:'informed trust — students seek the reason for an action before judging it'},
{chapter:'28. Zamzam Appears',focus:'analyse Abraham’s prayer and the chapter’s framing of the barren valley as a future center of worship',evidence:'prayer for worship, hearts, provision, and gratitude; connection with the Ka‘ba',misconception:'the chapter does not present barrenness as evidence that the place lacks future purpose',language:'Use purpose clauses and future consequence.',discussion:'Which parts of the prayer concern worship, society, and material provision?',valueAction:'gratitude in action — students name a concrete way provision can lead to service rather than entitlement'},
{chapter:'29. Mecca Is Settled',focus:'evaluate Hajar’s repeated search as the union of trust and effort and its later ritual significance',evidence:'seven movements between Safa and Marwa and the connection with sa‘y',misconception:'reliance on Allah is not depicted as passive waiting',language:'Use process verbs and repeated-action language.',discussion:'Why does the chapter preserve Hajar’s effort as part of worship memory?',valueAction:'active perseverance — students pair a hope with a practical step'},
{chapter:'30. Abraham and Ishmael',focus:'trace cause and consequence from Zamzam to human settlement',evidence:'Gabriel strikes the ground; water flows; birds indicate water; Jurham approaches',misconception:'the tribe does not create Zamzam in the chapter',language:'Use causal chains with consequently and which led to.',discussion:'How does one resource change the social future of the valley?',valueAction:'stewardship — students discuss how a shared resource should be used responsibly'},
{chapter:'31. The Dream of Sacrifice',focus:'analyse command, consultation, and Ishmael’s willing response in the test',evidence:'Abraham tells Ishmael the dream and asks what he thinks; Ishmael answers with patience',misconception:'the chapter does not portray Ishmael as unaware or unwilling',language:'Use reported speech and stance verbs: explains, responds, accepts.',discussion:'Why is consultation included even though Abraham understands the dream as a command?',valueAction:'responsible communication — students include affected people in difficult conversations'},
{chapter:'32. Submission and Mercy',focus:'evaluate what the stopping of the sacrifice reveals about the nature of the test',evidence:'the voice says the vision has been fulfilled and a ram or goat becomes the substitute',misconception:'the chapter does not present Ishmael’s death as the desired final outcome',language:'Use evaluation and qualification: the episode suggests, the text explicitly states.',discussion:'What evidence shows that submission, not death itself, is central to the test?',valueAction:'submission with mercy — students identify how obedience and protection coexist in the outcome'},
{chapter:'33. Building the Ka‘ba',focus:'connect sacrifice, reunion, worship, and the transition toward building the Ka‘ba',evidence:'the sacrifice tradition, father–son reunion, and preparation to build the honored House',misconception:'the chapter’s movement to construction is thematic, not a claim that every detail occurs immediately',language:'Use thematic linking: this continues, this prepares, this connects with.',discussion:'What common idea links sacrifice and construction even though the actions are different?',valueAction:'service — students translate gratitude or commitment into constructive work'},
{chapter:'34. The First Call to Pilgrimage',focus:'analyse cooperative work and humility while Abraham and Ishmael build',evidence:'Ishmael hands stones, Abraham stands on Al-Maqam, both ask Allah to accept the service',misconception:'performing a commanded task is not treated as a guarantee of acceptance',language:'Use cooperative action verbs and prayer/reporting language.',discussion:'Why is the prayer for acceptance significant while the work is still being done?',valueAction:'humble teamwork — students share roles and credit in a joint task'},
{chapter:'35. The Legacy of Abraham',focus:'synthesise how place, pilgrimage, family transmission, and Hanifism form the final legacy',evidence:'restoring the Ka‘ba, call to pilgrimage, Ishmael in Hijaz, Isaac in Palestine, continuing guidance',misconception:'the chapter does not claim Abraham’s work permanently eliminated later idolatry',language:'Use synthesis: taken together, across the story, the final chapter connects.',discussion:'Which two parts of the legacy are institutional and which are transmitted through people?',valueAction:'legacy through action — students define one practice that can carry a value beyond a single event'},
];

const languageFocusByChapter: Record<number, string> = {
  1: 'Source framing and definition/reformulation; addition; active vs passive information focus.',
  2: 'Definition chains and relative clauses; cautious stance such as “we may say”; reformulation; cause → result → conclusion.',
  3: 'Discourse movement and contrast; layered time relations; time-limited evaluation in relative clauses; additive expansion.',
  4: 'Source attribution and hedging: “some sources say”, “is believed”, “suggest”; cautious synthesis; prior state and social variation.',
  5: 'Future-in-the-past; alternate narration/source shift; result cohesion; supporting relative clauses.',
  6: 'Time and background layering; reported question/statement/directive; analogy and comparison.',
  7: 'Observation → evidence → evaluation; contextual meanings of could for plausibility vs ability; relative background; as if; stance change.',
  8: 'Expectation and persistence; evaluative relative clause; intended result with might; temporal evidence chain.',
  9: 'Condition → future consequence; development of stance; passive information focus; corrective contrast and created status.',
  10: 'Passive status/control/purpose; however contrast; first/second organisation; rejection followed by reframing.',
  11: 'Rhetorical questions; exception with unless; evidence, absence of evidence and explicit inference.',
  12: 'Stance framing and action interpretation; direct-speech functions; not only … but also expansion.',
  13: 'Purpose and interpersonal strategy; parallel negatives; evidence → invitation → warning → concern.',
  14: 'Conditional threat vs future commitment; hope/probability stance; analogy as reasoning; inquiry purpose.',
  15: 'Rhetorical observable tests; evidence vs inherited tradition; exclusivity, defining relatives and testable claims.',
  16: 'Dialogue reframing; cumulative relative-clause chain; exception; local stance marking.',
  17: 'Resistance → decision → purpose; future-in-the-past; until/then/past-perfect sequencing; rhetorical testing.',
  18: 'Rhetorical challenge plus reason; exception; past-perfect completion and purpose; narrative → sourced quotation.',
  19: 'Direct challenge → corrective contrast → conditional test → admission; self-correction/reversal; purpose.',
  20: 'Strong inference with must; recognition vs refusal; narrowed options; collective decision; passive authority.',
  21: 'Appearance/effect reversal; cause and restriction; passive event focus; change of state; as-if comparison.',
  22: 'Duration → result; turning point; past-perfect prior result; consequence vs motive; contrast and reaction focus.',
  23: 'Reported stance; passive/modal focus; compressed background; past-perfect cause chain; parallel claims.',
  24: 'Argument escalation and result; expected effect with would; simultaneity, concession, limitation and general → specific reference.',
  25: 'Realisation → decision → movement; future-in-the-past; recurring action with wherever; past-perfect background.',
  26: 'Parallel lineage contrast; reported instruction vs future plan; still-background; until as journey endpoint.',
  27: 'Accumulated absence; question → confirmation → reason; corrective not … but; past-perfect cause; spatial endpoint.',
  28: 'Purpose chains; had to for obligation; “that is” clarification; relative background; long-term time/reference cohesion.',
  29: 'Source/narrative voice separation; possibility vs fact; trigger/background/sequence; later interpretation.',
  30: 'Action → immediate result; purpose; future/current/past time perspectives; observed evidence vs inference.',
  31: 'Growth/life-stage background; turning point; command/source framing; dialogue as disclosure, consultation and commitment.',
  32: 'When plus imminent “was about to”; interruption; test → fulfilment → evaluation → consequence; limiting correction.',
  33: 'Historical time frame; “in fact” clarification; while contrast; time-bound scope; future-in-the-past later plan.',
  34: 'Present relevance of a prior command; will for commitment; no longer for limitation/adaptation; parallel ongoing action; imperative as respectful request.',
  35: 'Limiting an overstrong claim; evidence → qualified interpretation; not just scope; coexistence; recurring condition; present-perfect continuity.',
};

const manualTeacherGuideSections: TeacherGuideSection[] = [
  {
    "chapter": "1. Prophet Abraham and Tawheed",
    "timing": "45 minutes",
    "objectives": [
      "Explain how the opening presents Abraham as a representative of Tawheed and a connecting figure in prophetic genealogy.",
      "Trace the Ishmael–Muhammad and Isaac–Jacob–later prophets links without adding relationships not stated in the chapter.",
      "Use source framing, definition/reformulation, addition and active/passive focus to keep claims precise."
    ],
    "pedagogy": "Build a genealogy-and-source map rather than a biography summary. Learners separate what the Qur’an is said to present, what the chapter defines as monotheism, and what the genealogy explicitly links through Ishmael and Isaac.",
    "priorKnowledge": [
      "Basic family-relation vocabulary and the difference between source statement and learner inference."
    ],
    "anticipatedMisconceptions": [
      "Being central to several religious traditions does not mean the chapter says those traditions are identical in every detail."
    ],
    "grammarFocus": "Source framing and definition/reformulation; addition; active vs passive information focus.",
    "pronunciationFocus": "Rehearse Abraham, Ishmael, Isaac, Jacob and Halilullah in short sense groups; stress the definitional frame in “Monotheistic belief means…” and the source frame in “is presented as”.",
    "beforeReading": [
      "Show only the title and ask what evidence would be needed to call someone both a representative of Tawheed and a connecting figure."
    ],
    "duringReading": [
      "Draw the two family lines beginning with Ishmael and Isaac exactly as the text gives them.",
      "Mark the sentences that define monotheism and the sentence that gives Abraham the title “Allah’s friend”."
    ],
    "afterReading": [
      "Complete the Quick Challenge and require one exact chapter detail for each answer.",
      "Use Language Focus to rewrite one sentence so the source or definition is explicit.",
      "Produce a four-sentence synthesis distinguishing chapter statement from inference."
    ],
    "lessonPlan": "1. 0–5 min: title prediction and evidence criteria. 2. 5–14 min: read/listen for the Tawheed definition and source framing. 3. 14–23 min: build the two-branch prophetic genealogy. 4. 23–28 min: Quick Challenge with evidence. 5. 28–37 min: Language Focus on source framing and information focus. 6. 37–43 min: four-sentence synthesis. 7. 43–45 min: exit ticket naming one stated fact and one inference to avoid.",
    "discussionPoints": [
      "Which details make Abraham central in the chapter, and which claim would go beyond the text?",
      "Why does the title “Allah’s friend” function differently from a genealogical relationship?"
    ],
    "interactiveTips": [
      "Use arrows only where the chapter explicitly gives a family connection.",
      "Ask learners to label each statement “definition”, “genealogy”, or “source presentation” before discussing importance."
    ],
    "differentiation": {
      "strugglingLearners": "Provide the names Abraham, Ishmael, Isaac, Jacob and Muhammad on movable cards and let learners reconstruct only the links explicitly stated.",
      "fastFinishers": "Write a short paragraph using “is presented as”, “means”, and one passive structure while preserving the difference between title, definition and genealogy."
    },
    "formativeAssessment": [
      "Accurately reconstructs the two family lines.",
      "Distinguishes definition from source presentation.",
      "Avoids claiming equivalence among traditions."
    ],
    "expectedResponses": [
      "The chapter presents Abraham as a representative of Tawheed, links later prophetic lines through Ishmael and Isaac, and gives him the unique title “Allah’s friend”."
    ],
    "transferTask": "Take a short biographical text and distinguish a definition, a relationship, and a source-framed claim.",
    "teacherReflection": "Did learners keep genealogy, religious centrality and source framing separate, or collapse them into one broad claim?",
    "assessmentTools": {
      "rubric": [
        "Genealogy accuracy",
        "Source framing",
        "Definition control",
        "No unsupported equivalence"
      ],
      "exitTicket": [
        "Write one claim beginning “The chapter presents…” and one relationship beginning “Through…”."
      ]
    },
    "extraResources": {
      "links": [
        {
          "label": "TYMM Foreign Language Skills",
          "url": "https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri"
        },
        {
          "label": "TYMM Erdem-Değer-Eylem",
          "url": "https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi"
        }
      ]
    }
  },
  {
    "chapter": "2. Abraham as Allah’s Friend",
    "timing": "45 minutes",
    "objectives": [
      "Explain how the chapter connects Hanifism, Tawheed, moral uprightness and reasoning.",
      "Identify the text’s cautious wording when it says “We may say” and distinguish it from stronger definitions.",
      "Use cause–result and reformulation to explain why reasoning and prophetic teaching are both present."
    ],
    "pedagogy": "Use a concept web with four nodes—Hanif, Tawheed, moral uprightness and reasoning. Learners must connect each arrow to a sentence in the chapter, especially the claim that human beings can discover Allah’s existence through reasoning and the claim that all prophets taught this religion.",
    "priorKnowledge": [
      "Chapter 1 definition of Tawheed and simple cause/result relations."
    ],
    "anticipatedMisconceptions": [
      "Reasoning is not presented as a replacement for prophetic teaching."
    ],
    "grammarFocus": "Definition chains and relative clauses; cautious stance such as “we may say”; reformulation; cause → result → conclusion.",
    "pronunciationFocus": "Practise Hanif, Hanifism, morally upright and reasoning; use softer intonation on “We may say” to signal a cautious stance.",
    "beforeReading": [
      "Put “reason”, “revelation”, “morality” and “Tawheed” on the board and ask learners not to connect them until the text provides evidence."
    ],
    "duringReading": [
      "Mark the definition of hanif and Hanifism.",
      "Underline the claim about discovering Allah’s existence through reasoning and the later statement that all prophets taught this religion."
    ],
    "afterReading": [
      "Complete the Quick Challenge with a reason for the chosen answer.",
      "Use Language Focus to turn the concept web into a cause–result paragraph.",
      "Write one sentence explaining why “reasoning replaces prophets” is too strong."
    ],
    "lessonPlan": "1. 0–5 min: four-node concept prediction. 2. 5–14 min: read/listen for definitions. 3. 14–22 min: map reasoning, prophetic teaching and moral uprightness. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on cautious stance and reformulation. 6. 36–43 min: B2 concept paragraph. 7. 43–45 min: exit sentence correcting the replacement misconception.",
    "discussionPoints": [
      "How does the chapter combine reason, revelation, and moral conduct?",
      "Which statement is presented cautiously rather than as a simple definition?"
    ],
    "interactiveTips": [
      "Require a quoted or paraphrased sentence for each arrow in the concept web.",
      "Contrast “Hanifism is…” with “We may say…” so learners hear the difference in commitment."
    ],
    "differentiation": {
      "strugglingLearners": "Give four sentence strips and let learners match each to Hanif / Tawheed / reasoning / prophetic teaching.",
      "fastFinishers": "Write five connected sentences including one cautious claim, one relative clause and one cause–result conclusion."
    },
    "formativeAssessment": [
      "Explains all four concepts without making reasoning a substitute for revelation.",
      "Recognises cautious stance.",
      "Uses cause/result to connect ideas."
    ],
    "expectedResponses": [
      "The chapter presents Hanifism as monotheistic and morally upright, says reasoning can lead to recognition of Allah’s existence, and still states that prophets taught this religion."
    ],
    "transferTask": "Explain a claim in another text where reasoning and instruction work together rather than replacing one another.",
    "teacherReflection": "Did learners preserve the chapter’s balance between reasoning, prophetic teaching and moral conduct?"
  },
  {
    "chapter": "3. Hanifism and the One True Faith",
    "timing": "45 minutes",
    "objectives": [
      "Evaluate the chapter’s claim of continuity while also preserving its claim of later mixture or corruption.",
      "Explain the role of the Hijaz hanifs, Varaka and the Bilal “Ahad, Ahad” episode in that continuity argument.",
      "Use contrast and layered time relations without turning the chapter into a claim that all traditions are identical."
    ],
    "pedagogy": "Build a continuity/rupture timeline. Learners place the Hijaz hanifs, Varaka’s search, the first revelation and the Bilal episode on the timeline, then mark where the chapter introduces “however, later on” to qualify continuity.",
    "priorKnowledge": [
      "Hanifism from Chapter 2 and basic historical sequence markers."
    ],
    "anticipatedMisconceptions": [
      "Continuity of monotheism does not erase the chapter’s claim that beliefs later became mixed or corrupted."
    ],
    "grammarFocus": "Discourse movement and contrast; layered time relations; time-limited evaluation in relative clauses; additive expansion.",
    "pronunciationFocus": "Practise Hijaz, Varaka, Bilal and “Ahad, Ahad”; give clear contrastive stress to “However, later on” and additive stress to “not only… but also…”.",
    "beforeReading": [
      "Draw a line labelled continuity ↔ change and ask what kind of evidence could support both at once."
    ],
    "duringReading": [
      "Mark the group in the Hijaz who called themselves hanifs.",
      "Trace Varaka’s search and response to the first revelation.",
      "Identify what the Bilal episode contributes and where the text shifts to mixture/corruption."
    ],
    "afterReading": [
      "Complete the Quick Challenge and locate the contrast marker supporting the answer.",
      "Use Language Focus to write a continuity sentence followed by a qualified contrast.",
      "Explain the Bilal episode’s function without presenting it as proof of every broader historical claim."
    ],
    "lessonPlan": "1. 0–5 min: continuity/change frame. 2. 5–15 min: read/listen and place the Hijaz hanifs and Varaka. 3. 15–23 min: analyse the Bilal episode and the later-corruption contrast. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on contrast and layered time. 6. 37–43 min: two-part historical synthesis. 7. 43–45 min: exit ticket on what the Bilal episode does and does not establish.",
    "discussionPoints": [
      "What does the Varaka–Bilal episode add to the chapter’s argument about continuity?",
      "Where does the chapter itself limit a simple continuity claim?"
    ],
    "interactiveTips": [
      "Use two colours on the timeline: continuity evidence and change/corruption evidence.",
      "Do not let the emotionally memorable Bilal episode replace the chapter’s other historical claims."
    ],
    "differentiation": {
      "strugglingLearners": "Give four event cards and one contrast marker; learners order the events and place “however” at the correct conceptual shift.",
      "fastFinishers": "Write a six-sentence synthesis using while, however and not only…but also without erasing the chapter’s qualification."
    },
    "formativeAssessment": [
      "Represents both continuity and change.",
      "Explains the episode’s argumentative role.",
      "Uses contrast markers accurately."
    ],
    "expectedResponses": [
      "The chapter presents surviving Hanif figures as continuity evidence while also stating that belief later became mixed or corrupted."
    ],
    "transferTask": "Summarise a historical tradition that shows both continuity and change without reducing it to either one.",
    "teacherReflection": "Did learners hold continuity and corruption together, or use one to cancel the other?"
  },
  {
    "chapter": "4. Hanifism Before Islam",
    "timing": "45 minutes",
    "objectives": [
      "Distinguish source-attributed possibilities from stronger claims about Abraham’s setting.",
      "Identify “different ideas”, “some sources”, “is believed” and “suggest” as different levels of commitment.",
      "Use hedging to report birthplace, chronology and religious setting without false certainty."
    ],
    "pedagogy": "Turn the chapter into an uncertainty ladder. Learners rank birthplace and chronology statements by their wording rather than by prior knowledge, then compare them with the more direct descriptions of religious practices in Mesopotamia.",
    "priorKnowledge": [
      "Source framing from Chapter 1 and the meaning of hedge/qualification."
    ],
    "anticipatedMisconceptions": [
      "The chapter does not present birthplace and chronology as equally certain facts."
    ],
    "grammarFocus": "Source attribution and hedging: “some sources say”, “is believed”, “suggest”; cautious synthesis; prior state and social variation.",
    "pronunciationFocus": "Practise Mesopotamia, Sumer and Babylon; reduce stress on hedge frames and place main stress on the claim they qualify.",
    "beforeReading": [
      "Give one certain and one hedged sentence and ask which wording commits the writer more strongly."
    ],
    "duringReading": [
      "Highlight every source/uncertainty expression in the birthplace and dating paragraph.",
      "Separate those statements from the direct description of people worshipping celestial bodies, idols or rulers."
    ],
    "afterReading": [
      "Complete the Quick Challenge and identify the hedge that protects the answer.",
      "Remove a hedge from one sentence, then explain why the result is less accurate.",
      "Write a three-sentence cautious historical profile of setting, date and religious diversity."
    ],
    "lessonPlan": "1. 0–5 min: certainty ladder. 2. 5–15 min: read/listen and mark source-attribution language. 3. 15–23 min: rank birthplace/date claims by certainty. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on hedging and prior state. 6. 37–43 min: cautious historical profile. 7. 43–45 min: exit ticket restoring a missing hedge.",
    "discussionPoints": [
      "Which sentence would become inaccurate if its hedge were removed?",
      "Why are the worship-practice sentences different from the birthplace claims in source status?"
    ],
    "interactiveTips": [
      "Use a physical certainty scale from direct statement to attributed possibility.",
      "Ask learners to keep the hedge attached whenever they paraphrase a claim."
    ],
    "differentiation": {
      "strugglingLearners": "Provide four hedge cards and let learners match them to the original sentences.",
      "fastFinishers": "Rewrite a short overconfident paragraph using at least three different source-attribution frames."
    },
    "formativeAssessment": [
      "Identifies hedge strength.",
      "Preserves attribution in paraphrase.",
      "Separates uncertain biography from directly stated setting details."
    ],
    "expectedResponses": [
      "The chapter reports several possible birthplace/date claims with hedges while more directly describing the region’s varied forms of worship."
    ],
    "transferTask": "Repair an overconfident historical paragraph by restoring source attribution and uncertainty.",
    "teacherReflection": "Did learners preserve degree of certainty, or treat all historical statements as equally secure?"
  },
  {
    "chapter": "5. The Birthplace and Mission of Abraham",
    "timing": "45 minutes",
    "objectives": [
      "Separate the chapter’s broader mission claim from the two alternative Nimrod birth narratives.",
      "Explain why “according to another narration” prevents the stories from being merged into one verified sequence.",
      "Use future-in-the-past and reporting language to retell predictions without increasing certainty."
    ],
    "pedagogy": "Use a two-column source board: fortuneteller prediction / alternative dream narration. Only after the two narratives are kept separate do learners connect them to the chapter’s broader claim that Abraham would challenge family and social systems through monotheism.",
    "priorKnowledge": [
      "Chapter 4 source caution and future-in-the-past meaning."
    ],
    "anticipatedMisconceptions": [
      "Two narrations are not automatically two independently verified historical facts."
    ],
    "grammarFocus": "Future-in-the-past; alternate narration/source shift; result cohesion; supporting relative clauses.",
    "pronunciationFocus": "Practise fortuneteller, astrologer and narration; stress “According to another narration” as a clear source shift.",
    "beforeReading": [
      "Ask how a writer should present two different stories about the same early event."
    ],
    "duringReading": [
      "Mark the fortunetellers’ prediction and every future-in-the-past element.",
      "Box the source shift introducing Nimrod’s dream.",
      "Underline the separate, broader statement about Abraham’s mission in Mesopotamia and lands of migration."
    ],
    "afterReading": [
      "Complete the Quick Challenge with the correct narration label.",
      "Retell both narrations in parallel without combining them.",
      "Use Language Focus to write one future-in-the-past sentence and one source-shift sentence."
    ],
    "lessonPlan": "1. 0–5 min: alternative-narration problem. 2. 5–15 min: read/listen for prediction and dream versions. 3. 15–22 min: two-column source board. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on future-in-the-past and source shift. 6. 36–43 min: parallel retelling. 7. 43–45 min: exit ticket naming what is narration and what is broader mission.",
    "discussionPoints": [
      "How should we retell alternative narrations without merging them into one certain account?",
      "Which part of the chapter is broader than either birth narrative?"
    ],
    "interactiveTips": [
      "Never place details from the two versions on a single chronological line unless the chapter itself links them.",
      "Use different speaker/source labels before every retelling."
    ],
    "differentiation": {
      "strugglingLearners": "Give each narration on a separate card and sentence frames beginning “One narration says…” / “According to another narration…”.",
      "fastFinishers": "Write a source-aware paragraph that includes both versions and then returns to the chapter’s broader mission claim."
    },
    "formativeAssessment": [
      "Keeps narratives separate.",
      "Uses source-shift language.",
      "Controls future-in-the-past."
    ],
    "expectedResponses": [
      "The chapter gives a fortuneteller prediction and an alternative dream narration, while separately presenting Abraham’s larger mission of spreading monotheism."
    ],
    "transferTask": "Report two competing accounts of an event without blending them or deciding more than the source does.",
    "teacherReflection": "Did learners preserve the alternative-narration structure rather than constructing one synthetic story?"
  },
  {
    "chapter": "6. Abraham’s Childhood",
    "timing": "45 minutes",
    "objectives": [
      "Infer what Abraham’s reaction to his father’s statues shows about his judgment.",
      "Use the Mardukh episode as evidence of treating the statue as an ordinary object rather than accepting its claimed status.",
      "Distinguish childlike behaviour from the seriousness of the chapter’s larger argument."
    ],
    "pedagogy": "Teach the scene as evidence of status-testing. Learners compare what the father says the statue is with what Abraham observes and does, then infer how the mismatch exposes the claimed status.",
    "priorKnowledge": [
      "Difference between observation and inference."
    ],
    "anticipatedMisconceptions": [
      "The chapter’s childlike scene is evidence of rejection, not proof that Abraham lacked seriousness."
    ],
    "grammarFocus": "Time and background layering; reported question/statement/directive; analogy and comparison.",
    "pronunciationFocus": "Practise Mardukh and “god of gods”; use questioning intonation for Abraham’s direct questions and firm reported tone for the father’s directive.",
    "beforeReading": [
      "Ask what observable evidence could challenge a grand title given to an ordinary object."
    ],
    "duringReading": [
      "Mark the father’s explanation of the statues and Abraham’s spontaneous reaction.",
      "Identify the riding/comparison detail and the direct question about Mardukh’s ears.",
      "Separate what Abraham observes from what the father claims."
    ],
    "afterReading": [
      "Complete the Quick Challenge using one observed action as evidence.",
      "Use Language Focus to report the father’s statement and Abraham’s question accurately.",
      "Write a short inference explaining what the scene suggests without overreading the child’s behaviour."
    ],
    "lessonPlan": "1. 0–5 min: title/status warm-up. 2. 5–14 min: read/listen for claim and reaction. 3. 14–22 min: observation vs claimed status chart. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on reported speech and comparison. 6. 36–43 min: evidence-based inference. 7. 43–45 min: exit ticket separating observation from inference.",
    "discussionPoints": [
      "What is the strongest evidence that Abraham does not accept the statue’s claimed status?",
      "Why does the childlike action still serve a serious argumentative function?"
    ],
    "interactiveTips": [
      "Use two labels—Observed / Claimed—to keep evidence and belief separate.",
      "Do not turn the humorous detail into mockery of students’ or communities’ beliefs."
    ],
    "differentiation": {
      "strugglingLearners": "Provide three evidence strips and ask learners to complete “This shows Abraham did not accept… because…”.",
      "fastFinishers": "Write five sentences combining reported speech, comparison and a cautious inference about the scene."
    },
    "formativeAssessment": [
      "Uses scene evidence rather than general knowledge.",
      "Distinguishes claim from observation.",
      "Makes a proportionate inference."
    ],
    "expectedResponses": [
      "Abraham’s astonishment, play with the statue and questioning of Mardukh show that he treats it as an ordinary object rather than accepting its divine status."
    ],
    "transferTask": "Analyse a neutral advertisement or title by comparing the claim with observable evidence.",
    "teacherReflection": "Did learners infer from the scene while keeping the inference proportional to what the chapter actually shows?"
  },
  {
    "chapter": "7. Hatred for Idols",
    "timing": "45 minutes",
    "objectives": [
      "Analyse the contrast between people’s dependence on idols and the idols’ physical helplessness.",
      "Identify inability to hear, rise, harm or benefit as the chapter’s central evidence.",
      "Use contrastive comparison and “as if” to explain why human behaviour appears contradictory in the narrative."
    ],
    "pedagogy": "Build a capability test. Learners list what worshippers ask from the idols and then list what the idols can actually do in the chapter. The argument must rest on capability, not simply material such as wood or stone.",
    "priorKnowledge": [
      "Chapter 6 claim-versus-observation distinction."
    ],
    "anticipatedMisconceptions": [
      "The chapter’s argument is about capability and worship, not merely dislike of art or statues."
    ],
    "grammarFocus": "Observation → evidence → evaluation; contextual meanings of could for plausibility vs ability; relative background; as if; stance change.",
    "pronunciationFocus": "Contrast stress in lifeless / helpless versus bowing / begging; practise “as if” as an evaluative comparison rather than a literal claim.",
    "beforeReading": [
      "Ask what capabilities would logically matter if people expected an object to hear prayers, help or harm."
    ],
    "duringReading": [
      "Underline every inability attributed to the idols.",
      "Circle the human actions of bowing, crying and begging.",
      "Mark the sentence where Abraham’s reaction changes from amusement to anger."
    ],
    "afterReading": [
      "Complete the Quick Challenge by matching human expectation with idol capability.",
      "Use Language Focus to write a whereas/despite contrast.",
      "Explain why helplessness is more central than the statue’s material."
    ],
    "lessonPlan": "1. 0–5 min: capability criteria. 2. 5–14 min: read/listen and collect idol abilities/inabilities. 3. 14–22 min: match human expectations to evidence. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on contrast, could and as if. 6. 36–43 min: analytical comparison. 7. 43–45 min: exit ticket naming the strongest capability contradiction.",
    "discussionPoints": [
      "Why is helplessness more important to the argument than the material wood or stone itself?",
      "What does the change from laughter to anger add to the chapter’s stance?"
    ],
    "interactiveTips": [
      "Keep the capability chart factual and avoid caricature.",
      "Ask learners to distinguish could = ability from could = plausible interpretation where relevant."
    ],
    "differentiation": {
      "strugglingLearners": "Use a two-column chart: People expect / The idols can actually…",
      "fastFinishers": "Write six connected sentences using whereas, despite and as if to explain the contradiction and stance change."
    },
    "formativeAssessment": [
      "Identifies capability evidence.",
      "Uses contrast accurately.",
      "Does not reduce the argument to material composition."
    ],
    "expectedResponses": [
      "The chapter contrasts people asking idols for help with the idols’ inability to hear, rise, harm or benefit."
    ],
    "transferTask": "Evaluate a neutral claim by listing the capability it promises and the evidence of what it can actually do.",
    "teacherReflection": "Did learners analyse the capability contradiction rather than merely repeat negative descriptions of idols?"
  },
  {
    "chapter": "8. Discovering Allah",
    "timing": "45 minutes",
    "objectives": [
      "Trace the first celestial observation from seeing a planet to rejecting what sets.",
      "Distinguish observed setting from the larger conclusion drawn from it.",
      "Use temporal evidence chains and intended-result language without presenting the passage as serial worship of celestial objects."
    ],
    "pedagogy": "Slow the reasoning down to one observation. Learners record exactly what happens to the planet, then identify Abraham’s verbal response and only then formulate what the observation contributes to the argument.",
    "priorKnowledge": [
      "Observation/inference distinction from Chapters 6–7."
    ],
    "anticipatedMisconceptions": [
      "The passage should not be reduced to Abraham simply choosing one celestial object after another."
    ],
    "grammarFocus": "Expectation and persistence; evaluative relative clause; intended result with might; temporal evidence chain.",
    "pronunciationFocus": "Practise the quoted contrast “This is my lord” / “I do not love those that set” with a clear pause at the change in observation.",
    "beforeReading": [
      "Ask learners to predict what property of a celestial body could become evidence against its independence."
    ],
    "duringReading": [
      "Mark the sequence night falls → planet appears → planet sets → response.",
      "Underline the wording explaining that stars cannot appear whenever they want.",
      "Keep the Quranic narration and the chapter’s explanatory sentence visibly separate."
    ],
    "afterReading": [
      "Complete the Quick Challenge using the event chain.",
      "Use Language Focus to express the sequence as observation → evidence → conclusion.",
      "Write one sentence stating what setting shows and one sentence stating what it does not by itself prove."
    ],
    "lessonPlan": "1. 0–5 min: observation criterion prediction. 2. 5–14 min: read/listen to the planet episode. 3. 14–22 min: four-step evidence chain. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on temporal chain and evaluative clauses. 6. 36–43 min: bounded inference writing. 7. 43–45 min: exit ticket observation vs conclusion.",
    "discussionPoints": [
      "What exactly does setting show about the planet’s status?",
      "Why is it important to separate the Quranic quotation from the narrator’s explanatory sentence?"
    ],
    "interactiveTips": [
      "Do not jump ahead to moon and sun until the planet reasoning is complete.",
      "Ask learners to label each statement O = observation or I = inference."
    ],
    "differentiation": {
      "strugglingLearners": "Provide the four event steps and ask learners to connect them with when/then/but.",
      "fastFinishers": "Write a five-sentence analysis distinguishing quotation, observation, narrator explanation and inference."
    },
    "formativeAssessment": [
      "Orders the reasoning correctly.",
      "Separates observation from inference.",
      "Avoids the serial-worship misconception."
    ],
    "expectedResponses": [
      "The planet’s setting becomes evidence that it is not independent or permanent, contributing to Abraham’s rejection of it as lord."
    ],
    "transferTask": "Take a neutral observation and show how a careful conclusion can be drawn without claiming more than the observation supports.",
    "teacherReflection": "Did learners make the inference after establishing the observation, or start with the conclusion and read it back into the scene?"
  },
  {
    "chapter": "9. The Signs in the Sky",
    "timing": "45 minutes",
    "objectives": [
      "Synthesize the planet, moon and sun observations into one repeated argument.",
      "Identify appearance and disappearance under the Creator’s command as the recurring criterion.",
      "Use condition, parallel structure and corrective contrast to show why size or brightness is not the final standard."
    ],
    "pedagogy": "Use a three-row comparison table for planet, moon and sun. Learners fill the same fields—appearance, apparent appeal, disappearance, response—then infer the shared criterion only after all three rows are complete.",
    "priorKnowledge": [
      "Chapter 8 observation-to-inference chain."
    ],
    "anticipatedMisconceptions": [
      "Brightness or size is not the final criterion in the argument."
    ],
    "grammarFocus": "Condition → future consequence; development of stance; passive information focus; corrective contrast and created status.",
    "pronunciationFocus": "Use parallel rhythm across planet / moon / sun and strong contrastive stress on “bigger” versus the later created/commanded status.",
    "beforeReading": [
      "Recall the planet episode and ask what would make a second or third celestial example genuinely add evidence."
    ],
    "duringReading": [
      "Complete the comparison table for moon and sun.",
      "Mark the conditional statement about guidance and the final declaration of monotheism.",
      "Underline the narrator’s corrective “while in fact” explanation that the celestial bodies are created."
    ],
    "afterReading": [
      "Complete the Quick Challenge by identifying the repeated criterion.",
      "Use Language Focus to write a parallel three-example synthesis.",
      "Explain why the sun being bigger does not defeat the earlier criterion."
    ],
    "lessonPlan": "1. 0–5 min: retrieve Chapter 8 criterion. 2. 5–15 min: read/listen moon and sun sequence. 3. 15–23 min: complete three-row comparison. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on condition, parallelism and corrective contrast. 6. 37–43 min: synthesis paragraph. 7. 43–45 min: exit ticket naming the repeated criterion.",
    "discussionPoints": [
      "What repeated feature makes the three observations one argument rather than three unrelated events?",
      "Why does “this is bigger” not become the final criterion?"
    ],
    "interactiveTips": [
      "Keep identical table headings for all three bodies so the repeated logic becomes visible.",
      "Ask learners to use “in each case” only after identifying genuinely parallel evidence."
    ],
    "differentiation": {
      "strugglingLearners": "Provide the planet row completed and let learners use it as a model for moon and sun.",
      "fastFinishers": "Write a six-sentence synthesis using similarly, in each case and taken together while preserving the chapter’s final creator/creation distinction."
    },
    "formativeAssessment": [
      "Identifies the common criterion.",
      "Uses parallel structure meaningfully.",
      "Rejects size/brightness as the decisive standard."
    ],
    "expectedResponses": [
      "Across planet, moon and sun, appearance and disappearance support the chapter’s distinction between created celestial bodies and the Creator."
    ],
    "transferTask": "Compare three examples with one consistent criterion and explain why a superficial difference does not change the standard.",
    "teacherReflection": "Did learners discover the repeated criterion through comparison rather than simply memorise the final conclusion?"
  },
  {
    "chapter": "10. Challenging Star Worshippers",
    "timing": "45 minutes",
    "objectives": [
      "Distinguish heavenly bodies as signs from heavenly bodies as objects of worship.",
      "Identify created, controlled, managed and purpose-serving as the chapter’s reasons for the distinction.",
      "Use passive status, however contrast and first/second organisation to reframe the celestial bodies as evidence."
    ],
    "pedagogy": "Organise the argument as rejection then reframing. Learners first collect why the bodies are “unworthy of worship,” then separately collect why they still matter as “signs of Allah,” so rejection of worship does not become rejection of observation or meaning.",
    "priorKnowledge": [
      "Chapter 9 Creator/creation synthesis."
    ],
    "anticipatedMisconceptions": [
      "Calling something a sign does not make it divine."
    ],
    "grammarFocus": "Passive status/control/purpose; however contrast; first/second organisation; rejection followed by reframing.",
    "pronunciationFocus": "Practise created, controlled, managed and signs with parallel stress; pause clearly after “firstly” and “secondly” to make the two-part argument audible.",
    "beforeReading": [
      "Write “not worthy of worship” and “still meaningful as evidence” as two empty columns."
    ],
    "duringReading": [
      "Place created/controlled/managed/purpose under the first column as reasons.",
      "Mark the Qur’anic instruction not to bow to sun or moon and to worship the Creator.",
      "Identify the sentence that reframes the same bodies as signs."
    ],
    "afterReading": [
      "Complete the Quick Challenge and state which half of the two-part argument it checks.",
      "Use Language Focus to write “X is evidence of Y, but X is not Y.”",
      "Give a concise explanation of how astronomy moves from object of worship to evidence in the chapter."
    ],
    "lessonPlan": "1. 0–5 min: rejection/reframing setup. 2. 5–14 min: read/listen and collect created/control/purpose evidence. 3. 14–22 min: analyse the first/second structure and cited verse. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on passive status and reframing. 6. 36–43 min: two-part analytical explanation. 7. 43–45 min: exit ticket using “evidence of…but not…”.",
    "discussionPoints": [
      "How does the chapter turn astronomy from an object of worship into evidence?",
      "Why must “sign” and “object of worship” remain conceptually distinct?"
    ],
    "interactiveTips": [
      "Do not let the two columns merge; a reason for rejection may coexist with evidential value.",
      "Use first/second cards to make the argument’s organisation visible before writing."
    ],
    "differentiation": {
      "strugglingLearners": "Provide sentence frames “The bodies are created/controlled, so…” and “They are signs because…, but…”.",
      "fastFinishers": "Write a seven-sentence argument using two passive structures, however and a first/second organisation."
    },
    "formativeAssessment": [
      "Explains both rejection and reframing.",
      "Uses passive forms to describe created/controlled status.",
      "Keeps sign and divinity distinct."
    ],
    "expectedResponses": [
      "The chapter argues that celestial bodies are created and controlled, so they are not objects of worship; they function instead as signs pointing to their Creator."
    ],
    "transferTask": "Explain a neutral example where something can be evidence for a claim without being identical to the thing it indicates.",
    "teacherReflection": "Did learners preserve both sides of the argument—unworthy of worship yet meaningful as a sign?"
  }
,

  {
    "chapter": "11. Arguing for Tawheed",
    "timing": "45 minutes",
    "objectives": [
      "Analyse how Abraham answers threats by reframing the issue around security, authority and guidance.",
      "Distinguish the opponents’ threat from Abraham’s refusal to fear the partners they assign to Allah.",
      "Use rhetorical questions, unless and evidence/absence-of-evidence language to explain how the argument is reversed."
    ],
    "pedagogy": "Use a threat-versus-security board. Learners first identify what Abraham’s people appear to threaten him with, then follow his questions about who actually has reason to fear and what authority supports worship.",
    "priorKnowledge": [
      "Creator/creation distinction from Chapters 9–10 and the function of rhetorical questions."
    ],
    "anticipatedMisconceptions": [
      "Confidence in the passage is not the same as denying that opponents threatened him."
    ],
    "grammarFocus": "Rhetorical questions; exception with unless; evidence, absence of evidence and explicit inference.",
    "pronunciationFocus": "Practise the rising-falling contour of the rhetorical questions and stress “no authority” and “more right to security” as argumentative pivots.",
    "beforeReading": [
      "Ask what changes when a speaker answers a threat by questioning the basis of the threat rather than simply denying fear."
    ],
    "duringReading": [
      "Mark the threat inferred from the people’s behaviour and Abraham’s refusal to fear assigned partners.",
      "Underline the question about which party has more right to security.",
      "Identify the phrase about no authority having been sent down for the partners."
    ],
    "afterReading": [
      "Complete the Quick Challenge and identify which question reverses the frame.",
      "Use Language Focus to write one rhetorical question and one unless-clause without changing the source claim.",
      "Explain in three sentences how security replaces fear as the key issue."
    ],
    "lessonPlan": "1. 0–5 min: threat/reframing warm-up. 2. 5–15 min: read/listen for threat and refusal. 3. 15–23 min: map the security argument and authority evidence. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on rhetorical questions and exception. 6. 37–43 min: three-sentence argument reversal. 7. 43–45 min: exit ticket naming the missing authority in the opponents’ claim.",
    "discussionPoints": [
      "How does Abraham reverse the question of who should be afraid?",
      "Why does absence of authority matter to the argument?"
    ],
    "interactiveTips": [
      "Use arrows to show question → implied answer rather than treating the questions as requests for information.",
      "Keep “threat exists” and “Abraham does not fear it” as separate propositions."
    ],
    "differentiation": {
      "strugglingLearners": "Provide the three key questions and let learners match each to fear, authority or security.",
      "fastFinishers": "Write a short paragraph using one rhetorical question, one exception and one evidence-based inference."
    },
    "formativeAssessment": [
      "Identifies the threat accurately.",
      "Explains the security reversal.",
      "Uses rhetorical-question meaning rather than only punctuation."
    ],
    "expectedResponses": [
      "Abraham refuses fear of the assigned partners and asks why his people do not fear unsupported association with Allah, shifting the argument toward justified security and guidance."
    ],
    "transferTask": "Reframe a neutral claim by asking what evidence or authority actually supports it.",
    "teacherReflection": "Did learners understand the questions as argumentative moves, or only as quotations to repeat?"
  },
  {
    "chapter": "12. Speaking to His Father",
    "timing": "45 minutes",
    "objectives": [
      "Explain why the conflict with Abraham’s father combines religious belief, family relationship and livelihood.",
      "Identify the father’s worship, manufacture and sale of idols as distinct layers of involvement.",
      "Use stance framing, direct-speech functions and not only…but also to analyse why the disagreement becomes personal as well as religious."
    ],
    "pedagogy": "Build a three-layer conflict map: belief / family / livelihood. Learners locate one text detail for each layer before discussing the father’s anger, preventing the scene from becoming a simple “father versus son” summary.",
    "priorKnowledge": [
      "Abraham’s public argument from Chapter 11 and basic source/stance language."
    ],
    "anticipatedMisconceptions": [
      "The conflict is not presented as a simple disagreement between strangers."
    ],
    "grammarFocus": "Stance framing and action interpretation; direct-speech functions; not only … but also expansion.",
    "pronunciationFocus": "Practise faithful, forefathers, shaped and sold; stress not only…but also to show the accumulation of reasons for the father’s anger.",
    "beforeReading": [
      "Ask what makes a disagreement more difficult when belief, family role and income overlap."
    ],
    "duringReading": [
      "Mark the quoted exchange about the statues and the parents’ practice.",
      "Underline the sentence explaining that the father both worshipped and shaped/sold idols.",
      "Separate Abraham’s theological challenge from the father’s personal/economic involvement."
    ],
    "afterReading": [
      "Complete the Quick Challenge using the three-layer map.",
      "Use Language Focus to expand a one-dimensional statement into a not only…but also explanation.",
      "Write a balanced explanation of why the father may experience the challenge as personal without endorsing his position."
    ],
    "lessonPlan": "1. 0–5 min: three-layer conflict frame. 2. 5–15 min: read/listen and identify the quoted challenge. 3. 15–23 min: map belief/family/livelihood evidence. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on stance and expansion. 6. 37–43 min: balanced conflict explanation. 7. 43–45 min: exit ticket naming the three overlapping layers.",
    "discussionPoints": [
      "Why might the father experience Abraham’s challenge as both religious and personal?",
      "Which detail shows the disagreement also touches livelihood?"
    ],
    "interactiveTips": [
      "Keep explanation and justification separate: understanding the father’s interests does not require accepting his beliefs.",
      "Use three distinct icons for belief, family and economic interest so one layer does not swallow the others."
    ],
    "differentiation": {
      "strugglingLearners": "Give one evidence strip for each layer and sentence frames beginning “Religiously… / As a father… / Economically…”.",
      "fastFinishers": "Write six sentences explaining the conflict through all three layers and one direct-speech function."
    },
    "formativeAssessment": [
      "Uses evidence for all three layers.",
      "Explains personal stakes without caricature.",
      "Uses expansion language accurately."
    ],
    "expectedResponses": [
      "The father’s anger is intensified because he worships idols, makes and sells them, and is being challenged by his own son."
    ],
    "transferTask": "Analyse a neutral disagreement where belief, relationship and practical interest overlap.",
    "teacherReflection": "Did learners explain the father’s position accurately without turning explanation into endorsement?"
  },
  {
    "chapter": "13. Debating the Idolaters",
    "timing": "45 minutes",
    "objectives": [
      "Analyse how Abraham advises his father with affection, evidence and warning rather than ridicule.",
      "Identify hearing, seeing and benefit as the concrete capability tests in his advice.",
      "Use purpose, parallel negatives and evidence→invitation→warning→concern sequencing to describe respectful challenge."
    ],
    "pedagogy": "Treat the passage as a communication-strategy sequence. Learners identify the affectionate address first, then the capability evidence, the invitation to follow, and the warning motivated by concern.",
    "priorKnowledge": [
      "Chapter 12 family context and the capability argument from Chapter 7."
    ],
    "anticipatedMisconceptions": [
      "Respectful language does not mean Abraham avoids a direct challenge."
    ],
    "grammarFocus": "Purpose and interpersonal strategy; parallel negatives; evidence → invitation → warning → concern.",
    "pronunciationFocus": "Practise the repeated “O my father” with consistent respectful tone; use parallel rhythm for neither hear / see / benefit.",
    "beforeReading": [
      "Ask how a person can challenge an idea directly without humiliating the person who holds it."
    ],
    "duringReading": [
      "Count and mark each affectionate address to the father.",
      "Underline the three capability negatives and the invitation to follow.",
      "Identify the final warning and the concern motivating it."
    ],
    "afterReading": [
      "Complete the Quick Challenge by linking a line to its function: affection, evidence, invitation or warning.",
      "Use Language Focus to write a parallel-negative sentence and a respectful invitation.",
      "Explain why the passage is both gentle and intellectually direct."
    ],
    "lessonPlan": "1. 0–5 min: respectful-challenge criteria. 2. 5–15 min: read/listen for repeated address and evidence. 3. 15–23 min: sequence affection→evidence→invitation→warning. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on parallel negatives and interpersonal purpose. 6. 37–43 min: strategy explanation. 7. 43–45 min: exit ticket identifying one respectful and one direct feature.",
    "discussionPoints": [
      "Which feature makes the advice both gentle and intellectually direct?",
      "How does the repeated address affect the tone of the warning?"
    ],
    "interactiveTips": [
      "Label each utterance by function rather than discussing tone in general terms.",
      "Do not ask students to reenact a family religious conflict; use text analysis and neutral transfer."
    ],
    "differentiation": {
      "strugglingLearners": "Provide four labels—affection/evidence/invitation/warning—and let learners match quotations to them.",
      "fastFinishers": "Write a short advisory paragraph that uses parallel negatives, a respectful address and a clear reason."
    },
    "formativeAssessment": [
      "Identifies communication functions.",
      "Explains the capability evidence.",
      "Maintains respectful tone in transfer."
    ],
    "expectedResponses": [
      "Abraham repeatedly addresses his father respectfully, gives capability-based reasons, invites him to follow guidance and warns him out of concern."
    ],
    "transferTask": "Rewrite a blunt disagreement as a respectful evidence-based challenge without weakening the core point.",
    "teacherReflection": "Did learners see respect as a communication strategy that coexists with direct disagreement?"
  },
  {
    "chapter": "14. Calling People to Reconsider",
    "timing": "45 minutes",
    "objectives": [
      "Explain how Abraham responds to his father’s threat with peace, prayer and continued mission.",
      "Distinguish withdrawing from one relationship from abandoning the broader message.",
      "Use conditional threat, future commitment, hope/probability and analogy to analyse persistence."
    ],
    "pedagogy": "Use a continuity-after-rejection timeline. Learners mark the father’s threat, Abraham’s peaceful response, withdrawal, prayer and move toward public debate, then compare the doctor/judge analogies with the purpose of questioning people.",
    "priorKnowledge": [
      "Chapter 13 respectful advice and basic conditional/future forms."
    ],
    "anticipatedMisconceptions": [
      "Turning away from his father does not mean abandoning the wider mission."
    ],
    "grammarFocus": "Conditional threat vs future commitment; hope/probability stance; analogy as reasoning; inquiry purpose.",
    "pronunciationFocus": "Contrast the force of the father’s threat with the calmer tone of “Peace be upon you” and “I will ask my Lord…”; pause around the doctor/judge analogies.",
    "beforeReading": [
      "Ask what forms persistence can take after a conversation has reached a threat."
    ],
    "duringReading": [
      "Mark the conditional threat and Abraham’s peaceful/future response.",
      "Underline the transition from family withdrawal to public debate.",
      "Identify what the doctor and judge analogies explain about his questioning method."
    ],
    "afterReading": [
      "Complete the Quick Challenge using the timeline.",
      "Use Language Focus to contrast the threat with Abraham’s future commitments.",
      "Write a paragraph explaining what changes—audience—and what remains—mission."
    ],
    "lessonPlan": "1. 0–5 min: persistence-after-rejection warm-up. 2. 5–15 min: read/listen to threat and response. 3. 15–23 min: timeline withdrawal→prayer→public debate. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on condition, future and analogy. 6. 37–43 min: continuity paragraph. 7. 43–45 min: exit ticket naming what changes and what stays constant.",
    "discussionPoints": [
      "What changes in Abraham’s audience after the father’s threat, and what remains constant?",
      "What do the doctor and judge analogies add to the logic of questioning?"
    ],
    "interactiveTips": [
      "Use two colours for response to father and action toward wider society.",
      "Ask learners to state the function of each analogy, not whether they like the comparison."
    ],
    "differentiation": {
      "strugglingLearners": "Use a four-step card sequence: threat / peace / withdrawal / public debate.",
      "fastFinishers": "Write six sentences using if, will/hope and one analogy to explain strategic persistence."
    },
    "formativeAssessment": [
      "Orders the transition accurately.",
      "Separates withdrawal from abandonment.",
      "Explains analogy as reasoning."
    ],
    "expectedResponses": [
      "Abraham ends the immediate confrontation with peace and prayer, but continues the wider mission by questioning the people publicly."
    ],
    "transferTask": "Describe a neutral situation where changing audience or method allows a principled task to continue.",
    "teacherReflection": "Did learners distinguish strategic withdrawal from giving up?"
  },
  {
    "chapter": "15. Breaking the Idols",
    "timing": "45 minutes",
    "objectives": [
      "Identify the people’s appeal to forefathers and evaluate why inherited practice is not sufficient evidence in the chapter.",
      "Distinguish respect for tradition from using tradition as proof of truth.",
      "Use rhetorical observable tests, exclusivity and defining relations to formulate testable claims."
    ],
    "pedagogy": "Set up a context-versus-evidence board. Learners place “our forefathers did it” under historical context, then compare it with Abraham’s observable questions about seeing, benefit and harm.",
    "priorKnowledge": [
      "Capability testing from Chapter 7 and family/tradition references from Chapter 12."
    ],
    "anticipatedMisconceptions": [
      "The chapter does not claim every inherited practice is wrong merely because it is inherited."
    ],
    "grammarFocus": "Rhetorical observable tests; evidence vs inherited tradition; exclusivity, defining relatives and testable claims.",
    "pronunciationFocus": "Use questioning intonation for “Do the idols…?” and contrastive stress between forefathers and observable ability.",
    "beforeReading": [
      "Ask when tradition is useful as historical context and when it is not enough to prove a claim."
    ],
    "duringReading": [
      "Mark the people’s admission that the idols are lifeless.",
      "Underline the appeal to forefathers as their defense.",
      "Identify Abraham’s observable challenge about harm and benefit."
    ],
    "afterReading": [
      "Complete the Quick Challenge by classifying tradition or testable evidence.",
      "Use Language Focus to rewrite one inherited-practice claim into a testable question.",
      "Write a qualified statement explaining that tradition can be context without being sufficient proof."
    ],
    "lessonPlan": "1. 0–5 min: context/evidence distinction. 2. 5–14 min: read/listen for forefather defense. 3. 14–22 min: compare inherited practice with observable tests. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on rhetorical tests and exclusivity. 6. 36–43 min: qualified evaluation. 7. 43–45 min: exit ticket: tradition as context vs proof.",
    "discussionPoints": [
      "When can tradition count as context but not sufficient evidence?",
      "What makes Abraham’s challenge testable within the chapter?"
    ],
    "interactiveTips": [
      "Do not frame the lesson as “old = wrong”; keep the issue on evidence quality.",
      "Ask students to label every statement C = context or E = evidence."
    ],
    "differentiation": {
      "strugglingLearners": "Give two columns—Inherited because… / Observable because…—and preselect three text details.",
      "fastFinishers": "Write a short argument that respects historical tradition while requiring independent evidence for a factual claim."
    },
    "formativeAssessment": [
      "Classifies tradition appropriately.",
      "Identifies testable evidence.",
      "Avoids anti-tradition overgeneralisation."
    ],
    "expectedResponses": [
      "The people admit the idols are lifeless but defend worship through ancestral practice; Abraham challenges whether that practice proves the idols can act."
    ],
    "transferTask": "Evaluate a neutral inherited practice by separating its historical value from evidence for a factual claim.",
    "teacherReflection": "Did learners critique the evidential role of tradition rather than tradition itself?"
  },
  {
    "chapter": "16. The Broken Temple",
    "timing": "45 minutes",
    "objectives": [
      "Compare the chapter’s chain of divine actions with the earlier descriptions of idol helplessness.",
      "Identify creation, guidance, provision, healing, death and revival as cumulative agency.",
      "Use relative-clause chaining, exception and stance to explain active divine agency versus lifeless objects."
    ],
    "pedagogy": "Build an agency chain. Learners map each relative clause beginning “He who…” to an action, then compare the chain with the earlier inability list for idols.",
    "priorKnowledge": [
      "Chapter 7 helplessness evidence and Chapter 15 testable claims."
    ],
    "anticipatedMisconceptions": [
      "The comparison is not merely “large power versus small power”; it is active divine agency versus lifeless objects."
    ],
    "grammarFocus": "Dialogue reframing; cumulative relative-clause chain; exception; local stance marking.",
    "pronunciationFocus": "Read the “He who…” chain with parallel rhythm and stress the action verbs created/guides/feeds/waters/heals/dies/revives.",
    "beforeReading": [
      "Recall two idol inabilities and ask what kind of evidence would create a true agency contrast."
    ],
    "duringReading": [
      "Underline each divine action in the Quranic chain.",
      "Group the actions into creation/guidance, provision/care and life/death.",
      "Mark the exception “but not so the Lord of the Worlds” as the pivot."
    ],
    "afterReading": [
      "Complete the Quick Challenge using the action groups.",
      "Use Language Focus to build a cumulative relative-clause sentence.",
      "Compare two strongest action/inability pairs and justify why they are strong."
    ],
    "lessonPlan": "1. 0–5 min: retrieve helplessness evidence. 2. 5–15 min: read/listen and mark the relative-clause chain. 3. 15–23 min: group divine actions. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on chaining and exception. 6. 37–43 min: agency comparison. 7. 43–45 min: exit ticket with one action/inability contrast.",
    "discussionPoints": [
      "Which two divine actions create the strongest contrast with the idols, and why?",
      "How does the cumulative chain strengthen the chapter’s argument?"
    ],
    "interactiveTips": [
      "Use verbs, not abstract labels, in the agency map.",
      "Keep theological claims tied to the exact wording of the chapter rather than extending them."
    ],
    "differentiation": {
      "strugglingLearners": "Provide six action cards and let learners group them into three categories.",
      "fastFinishers": "Write a seven-sentence comparison using two relative clauses and one explicit exception."
    },
    "formativeAssessment": [
      "Identifies cumulative agency.",
      "Uses relative clauses coherently.",
      "Explains contrast through actions rather than vague “power” language."
    ],
    "expectedResponses": [
      "The chapter lists active divine functions—creating, guiding, providing, healing, causing death and revival—in contrast with lifeless idols."
    ],
    "transferTask": "Compare two systems by listing concrete actions each can or cannot perform rather than using vague labels.",
    "teacherReflection": "Did learners focus on the action chain as evidence?"
  },
  {
    "chapter": "17. Questioned Before the People",
    "timing": "45 minutes",
    "objectives": [
      "Analyse why Abraham waits for the festival and enters an empty temple.",
      "Explain how questioning silent statues and food offerings sets up a practical demonstration.",
      "Use resistance→decision→purpose and until/then sequencing to show intentional action."
    ],
    "pedagogy": "Teach the chapter as planning before action. Learners identify the opportunity created by the empty city, Abraham’s purpose, and the first silent-statue test before any smashing occurs.",
    "priorKnowledge": [
      "Chapter 15 observable testing and Chapter 16 agency contrast."
    ],
    "anticipatedMisconceptions": [
      "The episode is not presented as random destruction without an argumentative aim."
    ],
    "grammarFocus": "Resistance → decision → purpose; future-in-the-past; until/then/past-perfect sequencing; rhetorical testing.",
    "pronunciationFocus": "Practise festival, temple, offerings and cautious; use questioning tone for “Why don’t you eat?” and a deliberate pause before the silence.",
    "beforeReading": [
      "Ask what makes a practical demonstration different from impulsive action."
    ],
    "duringReading": [
      "Mark why the city and temple become empty.",
      "Underline the stated intention to show error.",
      "Track the approach to the food offering and the first unanswered question."
    ],
    "afterReading": [
      "Complete the Quick Challenge by identifying purpose before action.",
      "Use Language Focus to write the opportunity→decision→purpose sequence.",
      "Explain why the silence of the statues is already part of the demonstration."
    ],
    "lessonPlan": "1. 0–5 min: demonstration vs impulse. 2. 5–14 min: read/listen for festival opportunity. 3. 14–22 min: map purpose and first test. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on sequence and purpose. 6. 36–43 min: practical-demonstration explanation. 7. 43–45 min: exit ticket naming opportunity and intended proof.",
    "discussionPoints": [
      "What makes the temple episode a demonstration rather than merely an act?",
      "Why is the unanswered food question important before the later destruction?"
    ],
    "interactiveTips": [
      "Stop the analysis before Chapter 18; do not let later knowledge erase the setup stage.",
      "Use purpose arrows so every action must answer “for what reason?”"
    ],
    "differentiation": {
      "strugglingLearners": "Provide four steps: festival / empty temple / food question / silence.",
      "fastFinishers": "Write six sentences showing how context creates an opportunity for an evidence-based demonstration."
    },
    "formativeAssessment": [
      "Identifies purpose before action.",
      "Sequences the setup correctly.",
      "Explains silence as evidence."
    ],
    "expectedResponses": [
      "Abraham chooses the empty temple to create a practical test, beginning by asking the silent statues about the food placed before them."
    ],
    "transferTask": "Design a harmless classroom demonstration that tests a claim and state the purpose before the procedure.",
    "teacherReflection": "Did learners distinguish deliberate demonstration from random action?"
  },
  {
    "chapter": "18. The Decision to Burn Abraham",
    "timing": "45 minutes",
    "objectives": [
      "Explain how smashing all but the largest idol and hanging the axe creates a later test of agency.",
      "Identify the exception as the key design feature of the demonstration.",
      "Use rhetorical challenge, exception, past-perfect completion and source transition to analyse how evidence is staged."
    ],
    "pedagogy": "Use a scene-design diagram. Learners mark what is destroyed, what is deliberately left intact, where the axe is placed, and what inference the arrangement is designed to provoke later.",
    "priorKnowledge": [
      "Chapter 17 purpose and practical-test setup."
    ],
    "anticipatedMisconceptions": [
      "The chapter does not ask the reader to believe the largest idol actually acted."
    ],
    "grammarFocus": "Rhetorical challenge plus reason; exception; past-perfect completion and purpose; narrative → sourced quotation.",
    "pronunciationFocus": "Stress all / except one and the location of the axe; use neutral reporting tone when moving from narrative to the quoted Quranic response.",
    "beforeReading": [
      "Ask why a demonstration might deliberately leave one object unchanged."
    ],
    "duringReading": [
      "Mark the questions to the statues before the smashing.",
      "Underline “all except one” and the axe placement.",
      "Identify the shift from narrative action to the quoted public reaction."
    ],
    "afterReading": [
      "Complete the Quick Challenge by explaining the function of the untouched idol.",
      "Use Language Focus to write an exception sentence and a purpose sentence.",
      "Predict the logical question the scene is designed to force without claiming the idol actually acted."
    ],
    "lessonPlan": "1. 0–5 min: exception-as-design warm-up. 2. 5–14 min: read/listen to questions and smashing. 3. 14–22 min: diagram largest idol/axe/others. 4. 22–27 min: Quick Challenge. 5. 27–36 min: Language Focus on exception and purpose. 6. 36–43 min: evidence-staging explanation. 7. 43–45 min: exit ticket: why leave one idol?",
    "discussionPoints": [
      "Why is the untouched idol essential to the logic of the next scene?",
      "What is the difference between staging a rhetorical test and making a literal factual claim?"
    ],
    "interactiveTips": [
      "Keep a visible label “rhetorical setup, not literal attribution”.",
      "Use the scene diagram rather than reenacting destruction."
    ],
    "differentiation": {
      "strugglingLearners": "Give a before/after temple diagram and ask learners to label the exception and axe.",
      "fastFinishers": "Write a six-sentence analysis of how exception and object placement create a later argument."
    },
    "formativeAssessment": [
      "Explains the exception’s function.",
      "Avoids literal-idol-action misconception.",
      "Uses purpose language accurately."
    ],
    "expectedResponses": [
      "Leaving the largest idol intact with the axe creates a rhetorical test of whether the idols can act or speak."
    ],
    "transferTask": "Explain how leaving one exception in a neutral demonstration can make the tested claim clearer.",
    "teacherReflection": "Did learners understand the scene as staged evidence rather than literal attribution?"
  },
  {
    "chapter": "19. Thrown into the Fire",
    "timing": "45 minutes",
    "objectives": [
      "Analyse the public exchange in which Abraham directs the people to ask the largest idol.",
      "Identify the people’s admission that the idols cannot speak as the argumentative turning point.",
      "Use direct challenge, conditional test and self-correction language to show how the contradiction is voiced by the people themselves."
    ],
    "pedagogy": "Map speaker moves in sequence: accusation → Abraham’s rhetorical reply → instruction to ask → people’s self-recognition → reversion. Learners identify exactly where the opponents state the contradiction.",
    "priorKnowledge": [
      "Chapter 18 rhetorical setup and the difference between literal and rhetorical attribution."
    ],
    "anticipatedMisconceptions": [
      "Abraham’s statement is not a literal attribution of guilt to the idol."
    ],
    "grammarFocus": "Direct challenge → corrective contrast → conditional test → admission; self-correction/reversal; purpose.",
    "pronunciationFocus": "Use distinct speaker voices without dramatization; stress “Ask them if they can speak” and the opponents’ admission that the idols do not speak.",
    "beforeReading": [
      "Ask what happens in an argument when the opposing side states the key contradiction themselves."
    ],
    "duringReading": [
      "Label every speaker in the exchange.",
      "Underline the conditional “if they can speak”.",
      "Mark the point where the people say the idols cannot speak and the later reversion to old ideas."
    ],
    "afterReading": [
      "Complete the Quick Challenge by locating the turning-point admission.",
      "Use Language Focus to write a conditional test and a self-correction sentence.",
      "Explain why the admission is strong evidence even though it does not end the conflict."
    ],
    "lessonPlan": "1. 0–5 min: self-admission as evidence. 2. 5–15 min: read/listen and label speakers. 3. 15–23 min: map test→admission→reversion. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on conditional test and reversal. 6. 37–43 min: turning-point analysis. 7. 43–45 min: exit ticket quoting/paraphrasing the admission.",
    "discussionPoints": [
      "At what moment do the people verbalise the contradiction themselves?",
      "Why does the admission not automatically produce lasting change?"
    ],
    "interactiveTips": [
      "Use speaker labels on every quotation to prevent narrator/opponent confusion.",
      "Keep “they admit inability” separate from “they permanently change belief”."
    ],
    "differentiation": {
      "strugglingLearners": "Provide the four dialogue moves on cards and ask learners to order them.",
      "fastFinishers": "Write a seven-sentence argument analysis using one conditional test and one reversal marker."
    },
    "formativeAssessment": [
      "Identifies speaker ownership.",
      "Locates the argumentative turning point.",
      "Separates admission from durable change."
    ],
    "expectedResponses": [
      "The people themselves admit that the idols cannot speak, which exposes the contradiction Abraham’s rhetorical test was designed to reveal."
    ],
    "transferTask": "Analyse a neutral debate where a speaker’s own admission changes the strength of an argument.",
    "teacherReflection": "Did learners identify the exact turning point rather than summarize the whole confrontation?"
  },
  {
    "chapter": "20. The Faith of the Believers",
    "timing": "45 minutes",
    "objectives": [
      "Evaluate the shift from failed argument to coercive punishment.",
      "Distinguish recognition of contradiction from willingness to admit it publicly.",
      "Use strong inference, narrowed options, collective decision and passive authority language to explain why social power remains after argumentative defeat."
    ],
    "pedagogy": "Use two tracks: intellectual outcome / political response. On one track the people have no answer and recognise the problem; on the other, arrogance and authority produce chains, collective wood gathering and the fire plan.",
    "priorKnowledge": [
      "Chapter 19 admission/reversion and the concept of coercion."
    ],
    "anticipatedMisconceptions": [
      "Lack of a verbal answer does not automatically mean social power disappears."
    ],
    "grammarFocus": "Strong inference with must; recognition vs refusal; narrowed options; collective decision; passive authority.",
    "pronunciationFocus": "Contrast stress on no answer / however / authority; keep the descriptions of chains and fire factual rather than dramatic.",
    "beforeReading": [
      "Ask whether losing an argument necessarily means losing institutional or political power."
    ],
    "duringReading": [
      "Mark the statement that the people have no answer and realise the contradiction.",
      "Underline the explanation that arrogance blocks admission.",
      "Trace the collective decisions: chains, burning, ordered wood gathering and catapult preparation."
    ],
    "afterReading": [
      "Complete the Quick Challenge using the two-track map.",
      "Use Language Focus to write a recognition-versus-action contrast.",
      "Explain why coercion can follow argumentative failure without implying the argument had no effect."
    ],
    "lessonPlan": "1. 0–5 min: argument power vs social power. 2. 5–15 min: read/listen for recognition and refusal. 3. 15–23 min: two-track map of intellectual/political outcome. 4. 23–28 min: Quick Challenge. 5. 28–37 min: Language Focus on inference and passive authority. 6. 37–43 min: coercion analysis. 7. 43–45 min: exit ticket completing “They had no answer, but…”.",
    "discussionPoints": [
      "Why can recognition of a contradiction fail to produce public change?",
      "Which actions show that authority remains even after the argument fails?"
    ],
    "interactiveTips": [
      "Do not role-play punishment; analyse institutional actions through the text.",
      "Ask learners to distinguish evidence of recognition from evidence of coercion with separate colours."
    ],
    "differentiation": {
      "strugglingLearners": "Provide two columns: What they recognised / What they did next.",
      "fastFinishers": "Write eight sentences explaining how argumentative defeat and coercive power can coexist."
    },
    "formativeAssessment": [
      "Separates recognition from action.",
      "Identifies collective coercive mechanisms.",
      "Uses passive/collective language accurately."
    ],
    "expectedResponses": [
      "The chapter says the people recognise the contradiction yet refuse to admit it, then use political authority and collective coercion to punish Abraham."
    ],
    "transferTask": "Explain a neutral situation where evidence changes the intellectual balance but not immediately the institutional outcome.",
    "teacherReflection": "Did learners grasp the difference between losing an argument and losing power?"
  }

];

const makeSection = (p: ChapterPlan): TeacherGuideSection => {
  const chapterNumber = Number.parseInt(p.chapter, 10);
  const activeLanguageFocus = languageFocusByChapter[chapterNumber] ?? p.language;

  return {
    chapter: p.chapter,
    timing: '40–45 minutes',
    objectives: [
      `Analyse and explain: ${p.focus}.`,
      `Select precise textual evidence, especially ${p.evidence}.`,
      'Give a B2 claim with evidence, explanation, and an appropriate qualification where the source is uncertain.',
      `Use the chapter’s actual Language Focus to control a B2 discourse relationship: ${activeLanguageFocus}`,
      `Demonstrate a value through action: ${p.valueAction}.`,
    ],
    pedagogy: `Use a meaning → evidence → Language Focus → production cycle. Learners first understand the chapter through listening/viewing and reading, then verify claims against the text, complete/repair the Quick Challenge, notice how the chapter’s own language organises meaning, and reuse selected patterns in connected B2 speech or writing. Keep interpretation traceable to the chapter. Value work must be demonstrated through an action, not reduced to a slogan: ${p.valueAction}.`,
    priorKnowledge: ['Recall the previous chapter’s main turning point.', 'Distinguish direct textual evidence from inference and source-framed interpretation.'],
    anticipatedMisconceptions: [p.misconception],
    grammarFocus: `Chapter Language Focus: ${activeLanguageFocus}`,
    pronunciationFocus: 'Rehearse the chapter’s key Word Notes and proper names; then read one evidence sentence aloud with stress and pausing that preserve its stance, contrast or qualification.',
    beforeReading: [`Prediction: What evidence might help us ${p.focus}?`, 'Preview only the Word Notes needed for comprehension.'],
    duringReading: [`Listen once for gist, then read to locate ${p.evidence}.`, 'Mark E for direct evidence and I for inference; preserve source attribution, scope and hedges exactly.'],
    afterReading: [
      `Discuss: ${p.discussion}`,
      'Complete the chapter Quick Challenge and repair any incorrect answer by returning to the exact evidence.',
      `Open the chapter Language Focus. Guide learners to notice the communicative/discourse job of: ${activeLanguageFocus}`,
      'Complete the Language Focus activity, then produce an 8–10 sentence or 100–140-word non-story B2 response using at least two of the target relationships naturally.',
    ],
    lessonPlan: '0–5 min: activate prior knowledge. 5–12: first listen/read for gist. 12–22: close reading and evidence marking. 22–28: pair explanation/discussion. 28–32: Quick Challenge and evidence repair. 32–38: chapter Language Focus guided noticing/practice. 38–44: connected B2 speaking/writing transfer. 44–45: exit ticket.',
    discussionPoints: [p.discussion, `What is the strongest evidence for today’s focus: ${p.evidence}?`, 'Which wording in the chapter limits, qualifies, attributes, contrasts or strengthens a claim?', 'What claim would go beyond what this chapter can prove?'],
    interactiveTips: ['Use the chapter audio for a first-listen gist task.', 'Use only the Word Notes/hotspots actually visible on this chapter page.', 'Run the Quick Challenge after evidence work, then open the actual chapter Language Focus.', 'Do not replace the page’s Language Focus with a generic grammar worksheet.'],
    differentiation: {
      strugglingLearners: `Provide the frame “The chapter states ___. This supports ___. However, it does not prove ___.” Then offer two selected Language Focus patterns from: ${activeLanguageFocus}`,
      fastFinishers: `Write 120–150 words evaluating “${p.discussion}” Include two details, one qualification/counter-reading and at least two chapter Language Focus relationships.`,
    },
    formativeAssessment: ['Accuracy of selected evidence', 'Difference between evidence, inference and attributed/source-limited claim', 'Accurate communicative use of the chapter Language Focus', 'Quality of connected B2 explanation and qualification', 'Quick Challenge correction using the text'],
    expectedResponses: [`Students should refer to ${p.evidence}.`, `A strong response should explain ${p.focus} without strengthening the source claim.`, `Language should show controlled use of: ${activeLanguageFocus}`, `For values, students should describe the concrete action: ${p.valueAction}.`],
    transferTask: `Transfer the chapter method to a new claim: state the claim, identify evidence, qualify its scope, use at least two relationships from the chapter Language Focus, then propose one real action connected with ${p.valueAction}.`,
    teacherReflection: 'Could students justify their interpretation with evidence? Did they preserve source status and scope? Did Language Focus improve how they communicated meaning rather than become a detached grammar drill? Did the value appear as observable action?',
  };
};

export const abrahamB2TeacherGuideEn: TeacherGuideSection[] = [
  ...manualTeacherGuideSections,
  ...plans.slice(20).map(makeSection),
];

export const abrahamB2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Prophet Abraham B2 — Teacher Guide',
  subtitle: 'TYMM-aligned, evidence-based chapter guidance with integrated English Language Focus',
  level: 'B2',
  estimatedDuration: '35 lessons, about 40–45 minutes per story chapter',
  targetAudience: 'Upper-secondary and other B2 English learners using the 35-chapter Prophet Abraham story.',
  targetLearners: 'Learners who can follow extended narrative and exposition, compare evidence, distinguish source status from inference, qualify claims, and produce connected analytical B2 speech and writing.',
  purpose: 'A chapter-specific guide for evidence-based reading, listening, speaking, analytical writing, source qualification, integrated Language Focus, and values-as-action across the complete 35-chapter story.',
  approachDesc: `Use a TYMM-compatible receptive-to-productive route. Learners construct meaning through listening/viewing and reading (YDAB1–YDAB2), verify interpretation with direct evidence and the Quick Challenge, use the chapter’s actual Language Focus as an integrated supporting-skill stage, then transform that language into connected speaking and writing (YDAB3–YDAB4). Grammar, vocabulary and pronunciation support communication and meaning-making; they are not detached drills. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Chapter evidence tasks, Quick Challenges, Language Focus performance, analytical speaking/writing transfer, exit tickets, B2 Language Review, Knowledge Check, Vocabulary Challenge and Final Challenge.',
  assessmentOverview: {
    formative: ['Evidence and source-status checks', 'Quick Challenge plus evidence repair', 'Guided chapter Language Focus', 'Connected B2 speaking/writing transfer', 'Exit tickets and peer/teacher feedback'],
    summative: ['Whole-book Knowledge Check', 'Vocabulary Challenge', 'B2 Language Review', 'Final Challenge and cross-chapter synthesis'],
  },
  readingFramework: {
    before: 'Activate only relevant prior knowledge and establish a purposeful inquiry question without pre-teaching the interpretation.',
    during: 'Listen/read for meaning first, then track direct evidence, source attribution, stance, contrast, cause, scope, time, inference and synthesis as required by the chapter.',
    after: 'Complete/repair the Quick Challenge, work through the exact chapter Language Focus, then require a connected B2 transfer in a new context so language supports analysis and communication.',
  },
  vocabularyApproach: {
    selection: 'Prioritise the chapter Word Notes and vocabulary required for evidence, source status, argument or Language Focus.',
    method: 'Infer from context, word formation and discourse before direct explanation where feasible.',
    recycling: 'Recycle target words in evidence discussion, Language Focus transfer, exit tickets and later synthesis.',
  },
  grammarApproach: 'Use only the active chapter-specific Language Focus already attached to the student page. At B2, teach grammar as discourse control: source framing, stance, qualification, information focus, condition, cause, contrast, time perspective, argument organisation and synthesis. Learners notice the relationship in the chapter, practise it, then use it in a new connected response. Do not substitute an unrelated generic grammar sequence.',
  grammarSequence: Object.entries(languageFocusByChapter).map(([chapter, focus]) => `Ch${chapter}: ${focus}`),
  skillsFocus: {
    reading: 'TYMM YDAB2: close reading, evidence selection, source/stance interpretation, inference, comparison, qualification and cross-paragraph synthesis.',
    listening: 'TYMM YDAB1: gist listening followed by targeted replay for evidence, source cues, discourse markers, stress and pronunciation.',
    speaking: 'TYMM YDAB3: evidence-based discussion, respectful challenge, qualification, comparison and sustained B2 explanation using chapter language.',
    writing: 'TYMM YDAB4: plan, draft and improve connected analytical writing with claim–evidence–explanation, source qualification, counter-reading and synthesis.',
  },
  valuesFocus: [
    'D6 Dürüstlük — preserve evidence, source attribution, uncertainty and scope instead of overstating a claim',
    'D10 Mütevazılık — remain open to correction and distinguish conviction from arrogance',
    'D12 Sabır — sustain purposeful effort when persuasion, search or service is difficult',
    'D14 Saygı — challenge beliefs and arguments without humiliating people or caricaturing traditions',
    'D16 Sorumluluk — connect knowledge, family care, mission, consultation and shared tasks with responsible action',
    'D20 Yardımseverlik — recognise protection, cooperation, provision and service as concrete actions',
    `Use values only where the chapter’s events provide real support, and integrate them into learning activity rather than a detached moral lecture. See ${TYMM_VALUES}.`,
  ],
  languageFocus: ['All 35 story chapters have active English Language Focus authored from that chapter’s text.', 'Use Language Focus only after meaning and evidence are established and the Quick Challenge is completed/repaired.', 'At B2, foreground communicative and discourse function rather than asking learners merely to name grammar.', 'Finish each Language Focus stage with a connected non-story transfer so learners select and use the language autonomously.'],
  differentiationNotes: 'Preserve the same evidence and discourse target while reducing linguistic load for support. Extend stronger learners through source comparison, qualification, counter-reading, discourse control and cross-chapter synthesis rather than unrelated factual expansion.',
};
