/**
 * Biblical events registry — immersive scene definitions, character casts,
 * trigger conditions, and sequential story steps for AR/VR experiences.
 */

// Era ordering used for sorting and validation
const ERA_ORDER = [
  'creation',
  'antediluvian',
  'patriarchs',
  'exodus',
  'conquest',
  'judges',
  'united_kingdom',
  'divided_kingdom',
  'exile',
  'return',
  'new_testament',
  'early_church',
];

const BIBLICAL_EVENTS = {
  fall_of_man: {
    id: 'fall_of_man',
    title: 'The Fall of Man',
    era: 'creation',
    description: 'Adam and Eve disobey God by eating forbidden fruit, are expelled from Eden, and sin enters human history.',
    bibleRefs: ['Genesis 3'],
    location: 'eden',
    characters: ['adam', 'eve'],
    category: 'fall',
    steps: [
      { stepId: 'serpent_speaks', title: 'The Temptation', description: 'The serpent questions God\'s command and entices Eve to eat from the tree of knowledge.' },
      { stepId: 'fruit_taken', title: 'The Forbidden Fruit', description: 'Eve and Adam eat the fruit; their eyes are opened and they realize they are naked.' },
      { stepId: 'god_calls', title: 'God Calls', description: 'God walks in the garden and calls to Adam, who hides in shame.' },
      { stepId: 'consequences', title: 'The Judgment', description: 'God pronounces judgment on the serpent, the woman, and the man, and expels them from Eden.' },
      { stepId: 'expulsion', title: 'Expelled from Eden', description: 'An angel with a flaming sword guards the way to the tree of life as Adam and Eve depart.' },
    ],
  },

  cain_and_abel: {
    id: 'cain_and_abel',
    title: 'Cain and Abel',
    era: 'antediluvian',
    description: 'The first brothers offer sacrifices to God; God accepts Abel\'s but not Cain\'s, leading to jealousy, murder, and the first exile.',
    bibleRefs: ['Genesis 4:1-16'],
    location: 'eden',
    characters: ['cain', 'abel'],
    category: 'tragedy',
    steps: [
      { stepId: 'offerings', title: 'Two Offerings', description: 'Cain brings produce from the soil; Abel brings the firstborn of his flock. God favors Abel\'s offering.' },
      { stepId: 'cains_anger', title: 'Cain\'s Anger', description: 'Cain is furious. God warns him: "Sin is crouching at the door, but you must rule over it."' },
      { stepId: 'the_field', title: 'Into the Field', description: 'Cain invites Abel into the field — and rises up against his brother and kills him.' },
      { stepId: 'gods_question', title: 'Where is Your Brother?', description: 'God asks Cain where Abel is. Cain answers, "Am I my brother\'s keeper?"' },
      { stepId: 'mark_of_cain', title: 'The Mark', description: 'Cain is cursed to wander, but God puts a mark on him so no one who finds him will kill him.' },
    ],
  },

  tower_of_babel: {
    id: 'tower_of_babel',
    title: 'The Tower of Babel',
    era: 'antediluvian',
    description: 'Humanity gathers to build a city and tower reaching to the heavens; God confuses their language and scatters them across the earth.',
    bibleRefs: ['Genesis 11:1-9'],
    location: 'babel',
    characters: [],
    category: 'judgment',
    steps: [
      { stepId: 'one_language', title: 'One Language', description: 'The whole earth has one language and the same words. People migrate to the plain of Shinar.' },
      { stepId: 'building', title: 'Building the Tower', description: 'They decide to build a city and a tower with its top in the heavens, to make a name for themselves.' },
      { stepId: 'gods_descent', title: 'The Lord Descends', description: 'The Lord comes down to see the city and tower. "Nothing they plan will be impossible for them."' },
      { stepId: 'confusion', title: 'Language Confused', description: 'God confuses their language so they cannot understand one another, and work on the city stops.' },
      { stepId: 'scatter', title: 'Scattered', description: 'The Lord scatters them across the face of the earth. The city is named Babel — confusion.' },
    ],
  },

  call_of_abraham: {
    id: 'call_of_abraham',
    title: 'The Call of Abraham',
    era: 'patriarchs',
    description: 'God calls Abram from Ur to leave his homeland and journey to an unknown land, promising to make him a great nation.',
    bibleRefs: ['Genesis 12:1-9'],
    location: 'ur',
    characters: ['abraham'],
    category: 'calling',
    steps: [
      { stepId: 'gods_call', title: 'The Call', description: 'God says to Abram: "Leave your country, your people, and your father\'s household for the land I will show you."' },
      { stepId: 'promise', title: 'The Promise', description: 'God promises to make Abram a great nation, to bless him, and to bless all peoples on earth through him.' },
      { stepId: 'departure', title: 'Abram Departs', description: 'Abram departs from Harran at age 75, taking Sarai, Lot, and all their possessions.' },
      { stepId: 'canaan', title: 'Arriving in Canaan', description: 'Abram passes through the land of Canaan as far as the oak of Moreh at Shechem.' },
      { stepId: 'altar', title: 'Building an Altar', description: 'God appears to Abram and promises the land to his offspring. Abram builds an altar to the Lord.' },
    ],
  },

  sacrifice_of_isaac: {
    id: 'sacrifice_of_isaac',
    title: 'The Sacrifice of Isaac',
    era: 'patriarchs',
    description: 'God tests Abraham by commanding him to offer his son Isaac; at the last moment an angel intervenes and a ram is provided.',
    bibleRefs: ['Genesis 22:1-19'],
    location: 'mount_moriah',
    characters: ['abraham', 'isaac'],
    category: 'faith',
    steps: [
      { stepId: 'gods_command', title: 'The Command', description: 'God commands Abraham to take his only son Isaac to Mount Moriah and offer him as a burnt offering.' },
      { stepId: 'three_days', title: 'Three Days Journey', description: 'Abraham and Isaac travel three days to the mountain. Isaac asks, "Where is the lamb?" Abraham says, "God will provide."' },
      { stepId: 'altar_built', title: 'The Altar', description: 'Abraham builds the altar, arranges wood, binds Isaac, and raises the knife.' },
      { stepId: 'angel_stops', title: 'The Angel Intervenes', description: 'An angel calls from heaven: "Do not harm the boy. Now I know you fear God."' },
      { stepId: 'ram_provided', title: 'The Ram', description: 'Abraham sees a ram caught in a thicket and offers it instead. He names the place "The Lord Will Provide."' },
    ],
  },

  jacobs_ladder: {
    id: 'jacobs_ladder',
    title: 'Jacob\'s Ladder',
    era: 'patriarchs',
    description: 'On the run from his brother Esau, Jacob dreams of a stairway to heaven with angels ascending and descending, and God renews the covenant promise.',
    bibleRefs: ['Genesis 28:10-22'],
    location: 'bethel',
    characters: ['jacob'],
    category: 'vision',
    steps: [
      { stepId: 'fleeing', title: 'Jacob Flees', description: 'Jacob flees from Beer-sheba toward Haran, afraid of his brother Esau whom he has deceived.' },
      { stepId: 'stairway', title: 'The Dream', description: 'He dreams of a stairway reaching to heaven, with angels of God ascending and descending.' },
      { stepId: 'gods_voice', title: 'God Speaks', description: 'The Lord stands above the stairway and renews to Jacob the covenant promises made to Abraham and Isaac.' },
      { stepId: 'jacob_wakes', title: 'Awaking in Awe', description: 'Jacob wakes and says, "Surely the Lord is in this place, and I did not know it! This is none other than the house of God."' },
      { stepId: 'pillar', title: 'The Pillar', description: 'Jacob sets up his stone pillow as a pillar, pours oil on it, and names the place Bethel — House of God.' },
    ],
  },

  joseph_in_egypt: {
    id: 'joseph_in_egypt',
    title: 'Joseph in Egypt',
    era: 'patriarchs',
    description: 'Joseph, sold into slavery by his brothers, rises through imprisonment to become second ruler of Egypt and saves the world from famine.',
    bibleRefs: ['Genesis 37', 'Genesis 39-45'],
    location: 'egypt',
    characters: ['joseph_patriarch'],
    category: 'providence',
    steps: [
      { stepId: 'sold', title: 'Sold by His Brothers', description: 'Joseph\'s brothers, jealous of his coat and dreams, sell him to Ishmaelite merchants for twenty pieces of silver.' },
      { stepId: 'potiphars_house', title: 'In Potiphar\'s House', description: 'Joseph serves faithfully in Potiphar\'s house. Falsely accused by Potiphar\'s wife, he is thrown into prison.' },
      { stepId: 'dreams_in_prison', title: 'Interpreting Dreams', description: 'Joseph interprets the dreams of the baker and cupbearer. Two years later, Pharaoh has a troubling dream.' },
      { stepId: 'pharaoh', title: 'Before Pharaoh', description: 'Joseph interprets Pharaoh\'s dream of seven fat and seven lean cows: seven years of plenty and seven of famine.' },
      { stepId: 'reconciliation', title: 'Reunion', description: 'Joseph reveals himself to his brothers: "I am Joseph! You intended to harm me, but God intended it for good."' },
    ],
  },

  burning_bush: {
    id: 'burning_bush',
    title: 'The Burning Bush',
    era: 'exodus',
    description: 'God appears to Moses in a burning bush that is not consumed, commissions him to lead Israel out of Egypt, and reveals his name "I AM."',
    bibleRefs: ['Exodus 3:1-4:17'],
    location: 'sinai',
    characters: ['moses'],
    category: 'calling',
    steps: [
      { stepId: 'the_bush', title: 'A Bush That Burns', description: 'While tending his father-in-law\'s flock on Horeb, Moses sees a bush that is ablaze but not burned up.' },
      { stepId: 'holy_ground', title: 'Holy Ground', description: 'God calls Moses by name. "Take off your sandals, for the place where you are standing is holy ground."' },
      { stepId: 'i_am', title: 'The Name of God', description: 'Moses asks God\'s name. God replies: "I AM WHO I AM. Tell the Israelites: I AM has sent me to you."' },
      { stepId: 'commission', title: 'The Commission', description: 'God commands Moses to go to Pharaoh and bring the Israelites out of Egypt.' },
      { stepId: 'signs', title: 'Signs and the Staff', description: 'God gives Moses miraculous signs — the staff that becomes a snake, the leprous hand — to convince the people.' },
    ],
  },

  golden_calf: {
    id: 'golden_calf',
    title: 'The Golden Calf',
    era: 'exodus',
    description: 'While Moses receives the law on Mount Sinai, the Israelites convince Aaron to fashion a golden calf idol, provoking divine wrath that Moses intercedes to avert.',
    bibleRefs: ['Exodus 32'],
    location: 'sinai',
    characters: ['moses', 'aaron'],
    category: 'sin',
    steps: [
      { stepId: 'moses_delays', title: 'Moses Delays', description: 'Moses has been on the mountain forty days. The people grow restless and demand a god they can see.' },
      { stepId: 'aaron_yields', title: 'Aaron Yields', description: 'Aaron collects gold earrings, melts them, and fashions a golden calf. The people say, "These are your gods, Israel!"' },
      { stepId: 'gods_anger', title: 'Divine Wrath', description: 'God tells Moses what the people have done and his anger burns against them. Moses pleads for mercy.' },
      { stepId: 'tablets_broken', title: 'The Tablets Broken', description: 'Moses descends and sees the revelry. In anger he throws down and shatters the stone tablets.' },
      { stepId: 'intercession', title: 'Moses Intercedes', description: 'Moses returns to God and pleads, "Forgive their sin — or blot me out of your book." God renews his promise to go with Israel.' },
    ],
  },

  twelve_spies: {
    id: 'twelve_spies',
    title: 'The Twelve Spies',
    era: 'exodus',
    description: 'Moses sends twelve spies into Canaan; ten return with a fearful report and only Caleb and Joshua urge trust in God, leading to forty years of wilderness wandering.',
    bibleRefs: ['Numbers 13-14'],
    location: 'sinai',
    characters: ['moses', 'caleb', 'joshua'],
    category: 'faith',
    steps: [
      { stepId: 'spies_sent', title: 'Spies Sent Out', description: 'Moses sends one leader from each tribe to scout the land of Canaan for forty days.' },
      { stepId: 'good_land', title: 'A Land Flowing with Milk and Honey', description: 'The spies return with enormous fruit — a cluster of grapes so large two men carry it on a pole.' },
      { stepId: 'bad_report', title: 'The Fearful Report', description: 'Ten spies say the inhabitants are giants: "We seemed like grasshoppers in our own eyes." The people weep all night.' },
      { stepId: 'caleb_speaks', title: 'Caleb and Joshua Urge Faith', description: 'Caleb tears his garment and says, "Do not rebel. The Lord is with us. Do not be afraid of them." The crowd threatens to stone him.' },
      { stepId: 'forty_years', title: 'Forty Years of Wandering', description: 'God decrees the generation that refused to trust him will not enter the land — one year of wandering for each day of spying.' },
    ],
  },

  fall_of_jericho: {
    id: 'fall_of_jericho',
    title: 'The Fall of Jericho',
    era: 'conquest',
    description: 'God commands the Israelites to march around Jericho for seven days; on the seventh day, at the sound of trumpets and shouts, the city walls collapse.',
    bibleRefs: ['Joshua 6'],
    location: 'jericho',
    characters: ['joshua'],
    category: 'miracle',
    steps: [
      { stepId: 'gods_plan', title: 'God\'s Battle Plan', description: 'God tells Joshua: march around the city once daily for six days, with priests carrying trumpets before the ark.' },
      { stepId: 'six_days', title: 'Six Days of Marching', description: 'The Israelites march in silence around Jericho for six days. The city is tightly shut — no one goes out or in.' },
      { stepId: 'seventh_day', title: 'The Seventh Day', description: 'On the seventh day they march around seven times. Then the priests blow the trumpets.' },
      { stepId: 'the_shout', title: 'The Shout', description: 'Joshua commands the people: "Shout! For the Lord has given you the city!" They shout with a great shout.' },
      { stepId: 'walls_fall', title: 'Walls Collapse', description: 'The wall falls flat. The Israelites charge straight in and take the city. Rahab\'s household is spared.' },
    ],
  },

  samson_and_delilah: {
    id: 'samson_and_delilah',
    title: 'Samson and Delilah',
    era: 'judges',
    description: 'The Philistine Delilah is hired to discover the source of Samson\'s strength; after persistent questioning he reveals his Nazirite vow, leading to his capture and final victory.',
    bibleRefs: ['Judges 16'],
    location: 'valley_of_elah',
    characters: ['samson', 'delilah'],
    category: 'tragedy',
    steps: [
      { stepId: 'delilah_paid', title: 'Delilah Hired', description: 'Philistine rulers each offer Delilah 1,100 pieces of silver to find out the source of Samson\'s strength.' },
      { stepId: 'three_lies', title: 'Three False Answers', description: 'Samson gives three false sources of his strength; Delilah tests each and says, "The Philistines are upon you!" He escapes each time.' },
      { stepId: 'the_secret', title: 'The Secret Revealed', description: 'Worn down by her nagging, Samson tells the truth: he is a Nazirite — if his head is shaved, his strength will leave.' },
      { stepId: 'capture', title: 'Captured and Blinded', description: 'While Samson sleeps, Delilah shaves his head. The Philistines capture him, gouge out his eyes, and grind grain in prison.' },
      { stepId: 'final_strength', title: 'The Temple Falls', description: 'His hair grows back. At a Philistine feast, Samson prays for strength one last time and collapses the temple pillars on the crowd.' },
    ],
  },

  ruth_and_boaz: {
    id: 'ruth_and_boaz',
    title: 'Ruth and Boaz',
    era: 'judges',
    description: 'Ruth, a Moabite widow, follows her mother-in-law Naomi back to Bethlehem, finds favor gleaning in the fields of Boaz, and is redeemed as his bride.',
    bibleRefs: ['Ruth 1-4'],
    location: 'bethlehem',
    characters: ['ruth', 'naomi', 'boaz'],
    category: 'redemption',
    steps: [
      { stepId: 'naomi_returns', title: 'Return to Bethlehem', description: 'Widowed Naomi tells her daughters-in-law to return to their families. Ruth clings to her: "Where you go I will go."' },
      { stepId: 'gleaning', title: 'Gleaning in the Fields', description: 'Ruth goes to glean leftover grain. By providence she works in the field of Boaz, a relative of Naomi\'s late husband.' },
      { stepId: 'boaz_kindness', title: 'Boaz Shows Kindness', description: 'Boaz instructs his workers to leave extra grain for Ruth and to protect her. He is moved by her loyalty to Naomi.' },
      { stepId: 'threshing_floor', title: 'The Threshing Floor', description: 'Following Naomi\'s instruction, Ruth lies at Boaz\'s feet and asks him to spread his cloak over her — an appeal to be her kinsman-redeemer.' },
      { stepId: 'redemption', title: 'Redemption and Marriage', description: 'Boaz settles the legal claim at the city gate, buys Naomi\'s land, and takes Ruth as his wife. She becomes an ancestor of King David.' },
    ],
  },

  samuel_anoints_david: {
    id: 'samuel_anoints_david',
    title: 'Samuel Anoints David',
    era: 'united_kingdom',
    description: 'After God rejects Saul, Samuel travels to Bethlehem and anoints the young shepherd David as the future king of Israel.',
    bibleRefs: ['1 Samuel 16:1-13'],
    location: 'bethlehem',
    characters: ['samuel', 'david'],
    category: 'calling',
    steps: [
      { stepId: 'god_sends', title: 'God Sends Samuel', description: 'God sends Samuel to Jesse of Bethlehem, saying one of his sons will be king. Samuel is afraid — Saul might hear.' },
      { stepId: 'seven_brothers', title: 'Seven Brothers Pass', description: 'Seven of Jesse\'s sons pass before Samuel. Each time God says, "Not this one. Man looks at outward appearance; God looks at the heart."' },
      { stepId: 'the_youngest', title: 'The Youngest is Sent For', description: 'Samuel asks if there are any more sons. Jesse admits the youngest is tending sheep. They send for him.' },
      { stepId: 'anointing', title: 'The Anointing', description: 'David arrives — ruddy, bright-eyed, handsome. God says, "Rise and anoint him; this is the one." Samuel anoints David.' },
      { stepId: 'spirit_comes', title: 'The Spirit Comes', description: 'From that day on, the Spirit of the Lord came powerfully upon David.' },
    ],
  },

  solomons_temple: {
    id: 'solomons_temple',
    title: 'Solomon Builds the Temple',
    era: 'united_kingdom',
    description: 'King Solomon builds and dedicates the magnificent first Temple in Jerusalem as the permanent dwelling place of God\'s presence among Israel.',
    bibleRefs: ['1 Kings 6-8', '2 Chronicles 3-7'],
    location: 'jerusalem',
    characters: ['solomon'],
    category: 'worship',
    steps: [
      { stepId: 'preparations', title: 'Preparations', description: 'Solomon secures cedar from Lebanon and conscripts labor. The foundational stone is laid in the fourth year of his reign.' },
      { stepId: 'construction', title: 'Seven Years of Building', description: 'The Temple takes seven years to build. No hammer, chisel, or iron tool is heard at the site — stones are finished off-site.' },
      { stepId: 'ark_brought', title: 'The Ark Is Brought In', description: 'The priests carry the ark of the covenant into the Most Holy Place. A cloud fills the temple — the glory of the Lord.' },
      { stepId: 'dedication', title: 'Solomon\'s Prayer', description: 'Solomon stands before the altar and prays: "Will God really dwell on earth? Heaven cannot contain you, much less this house I have built."' },
      { stepId: 'fire_falls', title: 'Fire from Heaven', description: 'Fire falls from heaven and consumes the burnt offering. The glory of the Lord fills the temple. The people bow in worship.' },
    ],
  },

  elijah_vs_baal: {
    id: 'elijah_vs_baal',
    title: 'Elijah vs. the Prophets of Baal',
    era: 'divided_kingdom',
    description: 'On Mount Carmel, Elijah challenges 450 prophets of Baal to a contest — the God who answers by fire is the true God. The Lord answers dramatically.',
    bibleRefs: ['1 Kings 18:16-46'],
    location: 'mount_carmel',
    characters: ['elijah', 'ahab'],
    category: 'miracle',
    steps: [
      { stepId: 'challenge', title: 'The Challenge', description: 'Elijah challenges Israel: "How long will you waver? If the Lord is God, follow him; if Baal, follow him." The people are silent.' },
      { stepId: 'baals_failure', title: 'Baal Does Not Answer', description: 'The 450 prophets of Baal cry out all morning. Elijah mocks them: "Perhaps your god is sleeping or on a journey!"' },
      { stepId: 'elijahs_altar', title: 'Elijah Builds the Altar', description: 'Elijah rebuilds the Lord\'s altar with twelve stones, digs a trench, and drenches the offering with four large jars of water — three times.' },
      { stepId: 'fire_from_heaven', title: 'Fire from Heaven', description: 'Elijah prays simply. Fire falls and consumes the offering, the wood, the stones, the soil, and all the water in the trench.' },
      { stepId: 'rain', title: 'The Rain Returns', description: 'The people fall prostrate and cry, "The Lord — he is God!" Then Elijah prays, and after three years of drought the rain returns.' },
    ],
  },

  jonah_and_whale: {
    id: 'jonah_and_whale',
    title: 'Jonah and the Great Fish',
    era: 'divided_kingdom',
    description: 'Jonah flees from God\'s commission to preach to Nineveh, is swallowed by a great fish, prays from inside it, is vomited out, and ultimately fulfills his mission.',
    bibleRefs: ['Jonah 1-4'],
    location: 'nineveh',
    characters: ['jonah'],
    category: 'calling',
    steps: [
      { stepId: 'fleeing', title: 'Jonah Flees', description: 'God commands Jonah to go to Nineveh. Jonah boards a ship to Tarshish — the opposite direction.' },
      { stepId: 'storm', title: 'The Storm', description: 'God sends a violent storm. The sailors pray to their gods and cast lots — the lot falls on Jonah.' },
      { stepId: 'overboard', title: 'Thrown Overboard', description: 'Jonah tells them to throw him in to calm the sea. They do. The sea grows calm. A great fish swallows Jonah.' },
      { stepId: 'prayer', title: 'Prayer from the Deep', description: 'Inside the fish for three days, Jonah prays. "From the depths of the grave I called for help and you listened."' },
      { stepId: 'nineveh', title: 'Nineveh Repents', description: 'Vomited onto dry land, Jonah preaches. All Nineveh — from king to cattle — fasts and repents. God relents.' },
    ],
  },

  daniel_in_lions_den: {
    id: 'daniel_in_lions_den',
    title: 'Daniel in the Lions\' Den',
    era: 'exile',
    description: 'Jealous rivals trick King Darius into outlawing prayer to anyone but himself; Daniel continues praying and is thrown to the lions, emerging unharmed.',
    bibleRefs: ['Daniel 6'],
    location: 'babylon',
    characters: ['daniel'],
    category: 'faith',
    steps: [
      { stepId: 'conspiracy', title: 'The Conspiracy', description: 'Jealous administrators try to find fault with Daniel but cannot. They target his devotion to God.' },
      { stepId: 'decree', title: 'The Royal Decree', description: 'They convince Darius to issue a decree: no one may pray to any god or man except the king for thirty days.' },
      { stepId: 'daniel_prays', title: 'Daniel Prays', description: 'Daniel goes home, opens his window toward Jerusalem, and prays three times a day as he has always done.' },
      { stepId: 'lions_den', title: 'Into the Den', description: 'Daniel is thrown into the den of lions. Darius seals it with his signet ring and spends a sleepless night fasting.' },
      { stepId: 'unharmed', title: 'Unharmed', description: 'At dawn, Darius runs to the den and calls out. Daniel answers. The king brings him out — not a scratch on him. God had shut the lions\' mouths.' },
    ],
  },

  fiery_furnace: {
    id: 'fiery_furnace',
    title: 'The Fiery Furnace',
    era: 'exile',
    description: 'Three young Hebrews refuse to bow to Nebuchadnezzar\'s golden statue and are thrown into a furnace seven times hotter than normal, yet emerge without a singed hair.',
    bibleRefs: ['Daniel 3'],
    location: 'babylon',
    characters: ['daniel'],
    category: 'faith',
    steps: [
      { stepId: 'statue', title: 'The Golden Statue', description: 'Nebuchadnezzar erects a golden statue ninety feet tall and commands all people to bow when the music plays.' },
      { stepId: 'refusal', title: 'The Refusal', description: 'Shadrach, Meshach, and Abednego refuse. "If we are thrown into the fire, the God we serve is able to save us — but even if he does not, we will not bow."' },
      { stepId: 'furnace_heated', title: 'Furnace Heated Sevenfold', description: 'The furious king orders the furnace heated seven times hotter. The soldiers who throw them in are killed by the flames.' },
      { stepId: 'fourth_man', title: 'A Fourth Figure', description: 'Nebuchadnezzar peers in and says, "I see four men walking in the fire, and the fourth looks like a son of the gods!"' },
      { stepId: 'unharmed', title: 'Not Even Singed', description: 'They walk out. The satraps see no hair singed, no clothing scorched, and they do not even smell of fire.' },
    ],
  },

  creation: {
    id: 'creation',
    title: 'The Creation',
    era: 'creation',
    description: 'God creates the heavens, earth, light, life, and humanity across six days.',
    bibleRefs: ['Genesis 1', 'Genesis 2'],
    location: 'eden',
    characters: [],
    steps: [
      { stepId: 'day1', label: 'Day 1 — Light', description: 'God separates light from darkness.' },
      { stepId: 'day2', label: 'Day 2 — Sky', description: 'God creates the expanse of the sky.' },
      { stepId: 'day3', label: 'Day 3 — Land & Plants', description: 'Dry land appears; vegetation grows.' },
      { stepId: 'day4', label: 'Day 4 — Stars & Sun', description: 'The sun, moon, and stars are set in place.' },
      { stepId: 'day5', label: 'Day 5 — Sea & Sky creatures', description: 'Fish and birds fill the waters and skies.' },
      { stepId: 'day6', label: 'Day 6 — Animals & Humanity', description: 'Land animals and humankind are created.' },
      { stepId: 'day7', label: 'Day 7 — Rest', description: 'God rests and blesses the seventh day.' },
    ],
    triggers: [],
    category: 'origins',
  },

  great_flood: {
    id: 'great_flood',
    title: 'The Great Flood',
    era: 'antediluvian',
    description: 'God commands Noah to build an Ark. Forty days of rain flood the earth, and God establishes a covenant with a rainbow.',
    bibleRefs: ['Genesis 6', 'Genesis 7', 'Genesis 8', 'Genesis 9'],
    location: 'ararat',
    characters: ['noah'],
    steps: [
      { stepId: 'ark_built', label: 'Building the Ark', description: 'Noah constructs the Ark as commanded.' },
      { stepId: 'animals_board', label: 'Animals Enter', description: 'Two of every kind board the Ark.' },
      { stepId: 'rain_begins', label: 'The Flood Begins', description: 'Rain falls for forty days and nights.' },
      { stepId: 'waters_recede', label: 'Waters Recede', description: 'The dove returns with an olive branch.' },
      { stepId: 'covenant', label: 'Rainbow Covenant', description: 'God sets His rainbow as a sign of His covenant.' },
    ],
    triggers: ['enter_ark', 'rain_starts'],
    category: 'judgment_and_grace',
  },

  exodus_plagues: {
    id: 'exodus_plagues',
    title: 'The Ten Plagues of Egypt',
    era: 'exodus',
    description: 'God sends ten devastating plagues upon Egypt through Moses to compel Pharaoh to release the Israelites.',
    bibleRefs: ['Exodus 7', 'Exodus 8', 'Exodus 9', 'Exodus 10', 'Exodus 11', 'Exodus 12'],
    location: 'egypt',
    characters: ['moses'],
    steps: [
      { stepId: 'plague_blood', label: 'Water to Blood', description: 'The Nile turns to blood.' },
      { stepId: 'plague_frogs', label: 'Frogs', description: 'Frogs cover the land of Egypt.' },
      { stepId: 'plague_gnats', label: 'Gnats', description: 'Dust becomes gnats throughout Egypt.' },
      { stepId: 'plague_flies', label: 'Flies', description: 'Dense swarms of flies fill Pharaoh\'s palace.' },
      { stepId: 'plague_livestock', label: 'Livestock', description: 'All Egyptian livestock die.' },
      { stepId: 'plague_boils', label: 'Boils', description: 'Festering boils break out on people and animals.' },
      { stepId: 'plague_hail', label: 'Hail', description: 'The worst hailstorm in Egypt\'s history.' },
      { stepId: 'plague_locusts', label: 'Locusts', description: 'Locusts devour everything the hail left.' },
      { stepId: 'plague_darkness', label: 'Darkness', description: 'Three days of total darkness.' },
      { stepId: 'plague_firstborn', label: 'Death of Firstborn', description: 'Every firstborn in Egypt dies at midnight.' },
    ],
    triggers: ['meet_pharaoh', 'moses_staff_raised'],
    category: 'deliverance',
  },

  parting_red_sea: {
    id: 'parting_red_sea',
    title: 'Parting of the Red Sea',
    era: 'exodus',
    description: 'Moses stretches his staff over the sea; God drives the water back with a strong east wind, and the Israelites cross on dry ground.',
    bibleRefs: ['Exodus 14'],
    location: 'red_sea',
    characters: ['moses'],
    steps: [
      { stepId: 'pursued', label: 'Pharaoh\'s Army Pursues', description: 'The Egyptian army closes in on Israel.' },
      { stepId: 'staff_raised', label: 'Moses Raises His Staff', description: 'Moses stretches out his hand over the sea.' },
      { stepId: 'walls_of_water', label: 'Walls of Water', description: 'The sea parts — walls of water on either side.' },
      { stepId: 'crossing', label: 'Israel Crosses', description: 'All Israel passes through on dry ground.' },
      { stepId: 'sea_returns', label: 'Sea Returns', description: 'The sea covers the entire Egyptian army.' },
    ],
    triggers: ['reach_seashore'],
    category: 'deliverance',
  },

  ten_commandments: {
    id: 'ten_commandments',
    title: 'The Ten Commandments',
    era: 'exodus',
    description: 'Moses ascends Mount Sinai and receives the Law of God, written on two stone tablets.',
    bibleRefs: ['Exodus 19', 'Exodus 20', 'Deuteronomy 5'],
    location: 'sinai',
    characters: ['moses'],
    steps: [
      { stepId: 'sinai_cloud', label: 'Cloud on the Mountain', description: 'A thick cloud covers Sinai; thunder and lightning.' },
      { stepId: 'moses_ascends', label: 'Moses Ascends', description: 'Moses climbs into the presence of God.' },
      { stepId: 'commandments_given', label: 'Commandments Given', description: 'God speaks the Ten Commandments.' },
      { stepId: 'tablets_received', label: 'Stone Tablets', description: 'Moses receives two tablets written by the finger of God.' },
    ],
    triggers: ['arrive_sinai'],
    category: 'covenant',
  },

  david_and_goliath: {
    id: 'david_and_goliath',
    title: 'David and Goliath',
    era: 'united_kingdom',
    description: 'A young shepherd boy defeats the nine-foot Philistine giant Goliath with a sling and a stone, in the name of the LORD.',
    bibleRefs: ['1 Samuel 17'],
    location: 'valley_of_elah',
    characters: ['david'],
    steps: [
      { stepId: 'goliath_taunts', label: 'Goliath\'s Challenge', description: 'Goliath mocks Israel and defies the armies of God.' },
      { stepId: 'david_volunteers', label: 'David Steps Forward', description: 'David refuses armour and takes his sling and five smooth stones.' },
      { stepId: 'sling_thrown', label: 'The Stone is Thrown', description: 'The stone strikes Goliath\'s forehead and he falls.' },
      { stepId: 'victory', label: 'Victory!', description: 'The Philistines flee; Israel pursues.' },
    ],
    triggers: ['enter_valley', 'goliath_appears'],
    category: 'faith_and_courage',
  },

  birth_of_jesus: {
    id: 'birth_of_jesus',
    title: 'The Birth of Jesus',
    era: 'new_testament',
    description: 'Jesus is born in a manger in Bethlehem. Angels announce His birth to shepherds, and wise men follow a star from the East.',
    bibleRefs: ['Luke 2', 'Matthew 2'],
    location: 'bethlehem',
    characters: ['jesus', 'mary'],
    steps: [
      { stepId: 'no_room', label: 'No Room at the Inn', description: 'Mary and Joseph arrive in Bethlehem.' },
      { stepId: 'birth', label: 'Jesus is Born', description: 'Mary gives birth and lays Him in a manger.' },
      { stepId: 'angels_announce', label: 'Angels to Shepherds', description: 'A great company of angels praise God.' },
      { stepId: 'shepherds_visit', label: 'Shepherds Visit', description: 'The shepherds find Mary, Joseph and the baby.' },
      { stepId: 'wise_men', label: 'Wise Men Follow the Star', description: 'Magi from the East follow the star and bring gifts.' },
    ],
    triggers: ['enter_bethlehem'],
    category: 'incarnation',
  },

  sermon_on_mount: {
    id: 'sermon_on_mount',
    title: 'Sermon on the Mount',
    era: 'new_testament',
    description: 'Jesus teaches the Beatitudes, the Lord\'s Prayer, and the foundations of kingdom living on a hillside in Galilee.',
    bibleRefs: ['Matthew 5', 'Matthew 6', 'Matthew 7'],
    location: 'galilee',
    characters: ['jesus'],
    steps: [
      { stepId: 'beatitudes', label: 'The Beatitudes', description: '"Blessed are the poor in spirit…"' },
      { stepId: 'salt_light', label: 'Salt and Light', description: '"You are the light of the world."' },
      { stepId: 'lords_prayer', label: "The Lord's Prayer", description: '"Our Father in heaven, hallowed be your name…"' },
      { stepId: 'golden_rule', label: 'The Golden Rule', description: '"Do to others what you would have them do to you."' },
    ],
    triggers: ['crowd_gathers'],
    category: 'teaching',
  },

  resurrection: {
    id: 'resurrection',
    title: 'The Resurrection',
    era: 'new_testament',
    description: 'Three days after His crucifixion, Jesus rises from the dead, fulfilling scripture and appearing to His disciples.',
    bibleRefs: ['Matthew 28', 'Mark 16', 'Luke 24', 'John 20'],
    location: 'jerusalem',
    characters: ['jesus'],
    steps: [
      { stepId: 'empty_tomb', label: 'The Empty Tomb', description: 'The stone is rolled away; the tomb is empty.' },
      { stepId: 'angel_speaks', label: 'Angel Speaks', description: '"He is not here; He has risen, just as He said."' },
      { stepId: 'jesus_appears', label: 'Jesus Appears', description: 'Jesus appears to Mary Magdalene and the disciples.' },
      { stepId: 'great_commission', label: 'The Great Commission', description: '"Go and make disciples of all nations."' },
    ],
    triggers: ['enter_garden_tomb'],
    category: 'resurrection',
  },

  pentecost: {
    id: 'pentecost',
    title: 'Pentecost',
    era: 'early_church',
    description: 'The Holy Spirit descends on the disciples in Jerusalem like tongues of fire. Three thousand are baptised in a single day.',
    bibleRefs: ['Acts 2'],
    location: 'jerusalem',
    characters: ['paul'],
    steps: [
      { stepId: 'wind_fills_room', label: 'Sound of Wind', description: 'A sound like a violent wind fills the whole house.' },
      { stepId: 'tongues_of_fire', label: 'Tongues of Fire', description: 'What seemed like tongues of fire rested on each of them.' },
      { stepId: 'speaking_languages', label: 'Speaking in Languages', description: 'Each person heard in their own native language.' },
      { stepId: 'peter_preaches', label: 'Peter Preaches', description: 'Peter stands and addresses the crowd.' },
      { stepId: 'three_thousand', label: 'Three Thousand Saved', description: 'About three thousand were added to their number that day.' },
    ],
    triggers: ['upper_room_gathered'],
    category: 'holy_spirit',
  },
};

class EventRegistry {
  constructor(events = BIBLICAL_EVENTS) {
    this._events = { ...events };
    this._activeEvent = null;
    this._currentStepIndex = 0;
    this._completedEvents = new Set();
  }

  getEvent(id) {
    return this._events[id] ?? null;
  }

  getAllEvents() {
    return Object.values(this._events);
  }

  getEventsByEra(era) {
    return Object.values(this._events).filter(e => e.era === era);
  }

  getEventsByCategory(category) {
    return Object.values(this._events).filter(e => e.category === category);
  }

  getEventsByCharacter(characterId) {
    return Object.values(this._events).filter(e => e.characters.includes(characterId));
  }

  getEventsByLocation(locationId) {
    return Object.values(this._events).filter(e => e.location === locationId);
  }

  startEvent(id) {
    const event = this._events[id];
    if (!event) throw new Error(`Unknown event: "${id}"`);
    if (this._activeEvent) throw new Error(`Event "${this._activeEvent}" is already active. End it before starting another.`);

    this._activeEvent = id;
    this._currentStepIndex = 0;
    return this.getCurrentStep();
  }

  getCurrentStep() {
    if (!this._activeEvent) return null;
    const event = this._events[this._activeEvent];
    return event.steps[this._currentStepIndex] ?? null;
  }

  advanceStep() {
    if (!this._activeEvent) throw new Error('No active event');
    const event = this._events[this._activeEvent];
    if (this._currentStepIndex >= event.steps.length - 1) {
      throw new Error(`Already on the final step of "${this._activeEvent}"`);
    }
    this._currentStepIndex++;
    return this.getCurrentStep();
  }

  endEvent() {
    if (!this._activeEvent) throw new Error('No active event to end');
    this._completedEvents.add(this._activeEvent);
    const completed = this._activeEvent;
    this._activeEvent = null;
    this._currentStepIndex = 0;
    return completed;
  }

  isEventCompleted(id) {
    return this._completedEvents.has(id);
  }

  getActiveEvent() {
    return this._activeEvent ? this._events[this._activeEvent] : null;
  }

  getStepCount(id) {
    const event = this._events[id];
    if (!event) throw new Error(`Unknown event: "${id}"`);
    return event.steps.length;
  }

  getEraOrder() {
    return [...ERA_ORDER];
  }
}

module.exports = { EventRegistry, BIBLICAL_EVENTS, ERA_ORDER };
