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
