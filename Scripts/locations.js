/**
 * Biblical locations — real and symbolic places with geographic data,
 * historical context, and links to events and characters.
 */

const LOCATIONS = {
  babel: {
    id: 'babel',
    name: 'Babel',
    region: 'Mesopotamia (modern Iraq)',
    description: 'The plain of Shinar where humanity attempted to build a tower to the heavens, resulting in the confusion of languages and the scattering of peoples.',
    bibleRefs: ['Genesis 11:1-9'],
    coordinates: { lat: 32.5364, lng: 44.4208 },
    era: 'antediluvian',
    associatedEvents: ['tower_of_babel'],
    associatedCharacters: [],
    environmentType: 'plains',
    ambience: 'A vast plain, scaffolding of an unfinished tower, the murmur of many languages suddenly becoming unintelligible.',
  },

  ur: {
    id: 'ur',
    name: 'Ur of the Chaldeans',
    region: 'Mesopotamia (modern Iraq)',
    description: 'The ancient Sumerian city-state that was home to Abraham before God called him to the land of promise.',
    bibleRefs: ['Genesis 11:28', 'Genesis 11:31'],
    coordinates: { lat: 30.9625, lng: 46.1031 },
    era: 'patriarchs',
    associatedEvents: ['call_of_abraham'],
    associatedCharacters: ['abraham'],
    environmentType: 'city',
    ambience: 'Clay-brick streets, the ziggurat of Nanna rising against the sky, camel caravans and merchant calls.',
  },

  sodom: {
    id: 'sodom',
    name: 'Sodom',
    region: 'Dead Sea region',
    description: 'A city destroyed by God with fire and sulfur because of its wickedness; Lot and his daughters escaped while his wife looked back and became a pillar of salt.',
    bibleRefs: ['Genesis 13:10', 'Genesis 19'],
    coordinates: null, // exact location debated
    era: 'patriarchs',
    associatedEvents: [],
    associatedCharacters: ['lot'],
    environmentType: 'plains',
    ambience: 'A prosperous but corrupt city on the fertile plain, the air heavy with the sense of impending judgment.',
  },

  mount_moriah: {
    id: 'mount_moriah',
    name: 'Mount Moriah',
    region: 'Jerusalem, Israel',
    description: 'The mountain where Abraham offered Isaac and where Solomon later built the Temple; today it is the site of the Dome of the Rock.',
    bibleRefs: ['Genesis 22:2', '2 Chronicles 3:1'],
    coordinates: { lat: 31.7781, lng: 35.2354 },
    era: 'patriarchs',
    associatedEvents: ['sacrifice_of_isaac'],
    associatedCharacters: ['abraham', 'isaac'],
    environmentType: 'mountain',
    ambience: 'Rocky summit above the city, a stone altar, the sound of wind and a distant ram caught in a thicket.',
  },

  wilderness: {
    id: 'wilderness',
    name: 'Wilderness of Sin / Judean Desert',
    region: 'Sinai Peninsula / Judea',
    description: 'The barren wasteland through which Israel wandered forty years, and in which Jesus fasted and was tempted for forty days.',
    bibleRefs: ['Exodus 16:1', 'Matthew 4:1'],
    coordinates: { lat: 30.5, lng: 35.0 },
    era: 'exodus',
    associatedEvents: ['temptation_of_jesus', 'twelve_spies'],
    associatedCharacters: ['moses', 'jesus'],
    environmentType: 'desert',
    ambience: 'Blinding sun, endless sand and rock, wind carrying sand, eerie silence broken only by the crunch of footsteps.',
  },

  midian: {
    id: 'midian',
    name: 'Midian',
    region: 'Northwest Arabia / Sinai (modern Saudi Arabia)',
    description: 'The land where Moses fled after killing an Egyptian guard, where he married Zipporah and encountered God in the burning bush.',
    bibleRefs: ['Exodus 2:15-3:1'],
    coordinates: { lat: 28.4, lng: 36.5 },
    era: 'exodus',
    associatedEvents: ['burning_bush'],
    associatedCharacters: ['moses'],
    environmentType: 'desert',
    ambience: 'Rocky wilderness terrain, sparse acacia trees, the silence of a shepherd\'s watch, distant bleating of sheep.',
  },

  jericho: {
    id: 'jericho',
    name: 'Jericho',
    region: 'West Bank (near Dead Sea)',
    description: 'One of the oldest cities in the world, conquered by Israel when its walls miraculously fell, and where Jesus met Zacchaeus.',
    bibleRefs: ['Joshua 6', 'Luke 19:1-10'],
    coordinates: { lat: 31.8562, lng: 35.4614 },
    era: 'conquest',
    associatedEvents: ['fall_of_jericho'],
    associatedCharacters: ['joshua', 'zacchaeus'],
    environmentType: 'city',
    ambience: 'Towering mud-brick walls, the blare of ram\'s-horn trumpets, the trembling of the ground.',
  },

  bethel: {
    id: 'bethel',
    name: 'Bethel',
    region: 'West Bank, Israel',
    description: 'The "House of God" where Jacob dreamed of the stairway to heaven and set up a stone pillar; later an important worship site in Israel.',
    bibleRefs: ['Genesis 28:10-22', '1 Kings 12:29'],
    coordinates: { lat: 31.9244, lng: 35.2208 },
    era: 'patriarchs',
    associatedEvents: ['jacobs_ladder'],
    associatedCharacters: ['jacob'],
    environmentType: 'hills',
    ambience: 'A lonely hillside at night, stars like a canopy, a smooth stone set upright and glistening with poured oil.',
  },

  hebron: {
    id: 'hebron',
    name: 'Hebron',
    region: 'West Bank, Israel',
    description: 'Where Abraham settled, bought the cave of Machpelah to bury Sarah, and where the patriarchs are buried; also David\'s first capital.',
    bibleRefs: ['Genesis 13:18', 'Genesis 23', '2 Samuel 2:1-4'],
    coordinates: { lat: 31.5326, lng: 35.0998 },
    era: 'patriarchs',
    associatedEvents: [],
    associatedCharacters: ['abraham', 'david'],
    environmentType: 'hills',
    ambience: 'Ancient oak trees, limestone caves, the smell of cedar and incense from the patriarchal tomb.',
  },

  mount_carmel: {
    id: 'mount_carmel',
    name: 'Mount Carmel',
    region: 'Northern Israel',
    description: 'The dramatic headland where Elijah challenged the 450 prophets of Baal to a contest between the Lord and Baal, answered by fire from heaven.',
    bibleRefs: ['1 Kings 18:19-46'],
    coordinates: { lat: 32.7403, lng: 35.0672 },
    era: 'divided_kingdom',
    associatedEvents: ['elijah_vs_baal'],
    associatedCharacters: ['elijah', 'ahab'],
    environmentType: 'mountain',
    ambience: 'A rugged Mediterranean ridge, a stone altar drenched with water, the smell of burning sacrifice and coming rain.',
  },

  samaria: {
    id: 'samaria',
    name: 'Samaria',
    region: 'Northern Israel',
    description: 'Capital of the northern kingdom of Israel, built by King Omri; a mixed Jewish-Gentile region by New Testament times whose inhabitants were despised by Jews.',
    bibleRefs: ['1 Kings 16:24', 'John 4:4-42'],
    coordinates: { lat: 32.2768, lng: 35.1978 },
    era: 'divided_kingdom',
    associatedEvents: [],
    associatedCharacters: ['elijah', 'ahab', 'jezebel'],
    environmentType: 'hills',
    ambience: 'A hillside city with ivory-inlaid palaces, markets of mixed cultures, tension between different religious traditions.',
  },

  jordan_river: {
    id: 'jordan_river',
    name: 'Jordan River',
    region: 'Israel / West Bank',
    description: 'The river where Joshua led Israel across on dry ground, where Elijah and Elisha performed miracles, and where John the Baptist baptized Jesus.',
    bibleRefs: ['Joshua 3', '2 Kings 2:8', 'Matthew 3:13-17'],
    coordinates: { lat: 32.0167, lng: 35.55 },
    era: 'conquest',
    associatedEvents: ['baptism_of_jesus'],
    associatedCharacters: ['joshua', 'elijah', 'elisha', 'john_the_baptist', 'jesus'],
    environmentType: 'river',
    ambience: 'Winding reeds along the riverbank, cool rushing water, the cry of water birds, the sense of crossing a threshold.',
  },

  babylon: {
    id: 'babylon',
    name: 'Babylon',
    region: 'Mesopotamia (modern Iraq)',
    description: 'The great empire of Nebuchadnezzar that destroyed Jerusalem and carried Judah into exile; setting of Daniel\'s faithfulness in the lions\' den and the fiery furnace.',
    bibleRefs: ['Daniel 1', 'Daniel 3', 'Daniel 6', 'Isaiah 14:4'],
    coordinates: { lat: 32.5424, lng: 44.4206 },
    era: 'exile',
    associatedEvents: ['daniel_in_lions_den', 'fiery_furnace'],
    associatedCharacters: ['daniel', 'ezekiel', 'nehemiah'],
    environmentType: 'city',
    ambience: 'Towering ziggurats and the Ishtar Gate of brilliant blue tile, the smell of incense and the distant sound of Babylonian hymns.',
  },

  nineveh: {
    id: 'nineveh',
    name: 'Nineveh',
    region: 'Mesopotamia (modern Mosul, Iraq)',
    description: 'Capital of the Assyrian Empire and one of the largest cities of the ancient world, to which Jonah was sent to preach repentance and which astonishingly repented.',
    bibleRefs: ['Jonah 1:2', 'Jonah 3', 'Nahum 1:1'],
    coordinates: { lat: 36.3597, lng: 43.1583 },
    era: 'divided_kingdom',
    associatedEvents: ['jonah_and_whale'],
    associatedCharacters: ['jonah'],
    environmentType: 'city',
    ambience: 'Massive city walls, markets filled with the sounds of merchants, a populace draped in sackcloth in a great act of repentance.',
  },

  dead_sea: {
    id: 'dead_sea',
    name: 'Dead Sea',
    region: 'Israel / Jordan border',
    description: 'The lowest point on earth\'s surface, bordering the region where Sodom and Gomorrah once stood; its salt waters are referenced throughout Scripture.',
    bibleRefs: ['Genesis 14:3', 'Ezekiel 47:8'],
    coordinates: { lat: 31.5, lng: 35.5 },
    era: 'patriarchs',
    associatedEvents: [],
    associatedCharacters: ['lot'],
    environmentType: 'sea',
    ambience: 'Crystalline salt flats, blistering heat, the eerie shimmer of water too salty to sustain life, surrounding barren cliffs.',
  },

  capernaum: {
    id: 'capernaum',
    name: 'Capernaum',
    region: 'Sea of Galilee, northern Israel',
    description: 'Jesus\' home base during his Galilean ministry, where he performed many miracles, called Matthew, and taught in the synagogue.',
    bibleRefs: ['Matthew 4:13', 'Mark 1:21-28', 'John 6:59'],
    coordinates: { lat: 32.8808, lng: 35.5749 },
    era: 'new_testament',
    associatedEvents: ['feeding_five_thousand'],
    associatedCharacters: ['jesus', 'peter', 'matthew'],
    environmentType: 'city',
    ambience: 'Fishing village on a shimmering lake, basalt synagogue, boats on the shore, the smell of fish and nets drying.',
  },

  mount_of_beatitudes: {
    id: 'mount_of_beatitudes',
    name: 'Mount of Beatitudes',
    region: 'Sea of Galilee, northern Israel',
    description: 'The traditional hillside on the northwest shore of Galilee where Jesus delivered the Sermon on the Mount, including the Beatitudes.',
    bibleRefs: ['Matthew 5:1-7:29'],
    coordinates: { lat: 32.9, lng: 35.55 },
    era: 'new_testament',
    associatedEvents: [],
    associatedCharacters: ['jesus'],
    environmentType: 'hills',
    ambience: 'A gentle slope above blue water, wildflowers, a crowd sitting on the grass, a voice carrying on the morning air.',
  },

  mount_hermon: {
    id: 'mount_hermon',
    name: 'Mount Hermon',
    region: 'Syria / Lebanon border',
    description: 'The highest peak in the region, considered the most likely site of the Transfiguration of Jesus, where his face shone like the sun.',
    bibleRefs: ['Psalm 133:3', 'Matthew 17:1-8'],
    coordinates: { lat: 33.4175, lng: 35.8567 },
    era: 'new_testament',
    associatedEvents: ['transfiguration'],
    associatedCharacters: ['jesus', 'peter', 'james_apostle', 'john_apostle'],
    environmentType: 'mountain',
    ambience: 'Snow-capped summit above the clouds, blinding white light, the rustle of a heavenly conversation.',
  },

  mount_of_olives: {
    id: 'mount_of_olives',
    name: 'Mount of Olives',
    region: 'East Jerusalem, Israel',
    description: 'The ridge overlooking Jerusalem where Jesus taught, wept over the city, predicted its destruction, was arrested, and from which he ascended into heaven.',
    bibleRefs: ['Matthew 21:1', 'Luke 19:41', 'Acts 1:12'],
    coordinates: { lat: 31.7784, lng: 35.2452 },
    era: 'new_testament',
    associatedEvents: ['ascension'],
    associatedCharacters: ['jesus', 'peter'],
    environmentType: 'mountain',
    ambience: 'Ancient olive groves, the panoramic view of Jerusalem and the Temple Mount, the weight of history in every stone.',
  },

  gethsemane: {
    id: 'gethsemane',
    name: 'Garden of Gethsemane',
    region: 'Mount of Olives, Jerusalem',
    description: 'The olive grove at the foot of the Mount of Olives where Jesus prayed in agony before his arrest, and where his disciples slept.',
    bibleRefs: ['Matthew 26:36-56', 'John 18:1-11'],
    coordinates: { lat: 31.7789, lng: 35.2396 },
    era: 'new_testament',
    associatedEvents: ['gethsemane'],
    associatedCharacters: ['jesus', 'peter', 'judas_iscariot'],
    environmentType: 'garden',
    ambience: 'Ancient gnarled olive trees under moonlight, heavy silence, sweat like drops of blood, the flicker of approaching torchlight.',
  },

  cana: {
    id: 'cana',
    name: 'Cana of Galilee',
    region: 'Lower Galilee, northern Israel',
    description: 'The village where Jesus performed his first miracle — turning water into wine at a wedding feast — at the request of his mother Mary.',
    bibleRefs: ['John 2:1-11'],
    coordinates: { lat: 32.7436, lng: 35.3447 },
    era: 'new_testament',
    associatedEvents: [],
    associatedCharacters: ['jesus', 'mary'],
    environmentType: 'village',
    ambience: 'A festive wedding celebration, stone water jars, the scent of wine and flowers, joy at an unexpected abundance.',
  },

  golgotha: {
    id: 'golgotha',
    name: 'Golgotha (Calvary)',
    region: 'Jerusalem, Israel',
    description: 'The Place of the Skull — the hill outside Jerusalem\'s walls where Jesus was crucified between two criminals.',
    bibleRefs: ['Matthew 27:33', 'John 19:17'],
    coordinates: { lat: 31.7784, lng: 35.2296 },
    era: 'new_testament',
    associatedEvents: ['crucifixion'],
    associatedCharacters: ['jesus', 'mary', 'mary_magdalene', 'john_apostle'],
    environmentType: 'hills',
    ambience: 'A rocky outcrop, three crosses silhouetted against a darkening sky, the sound of weeping, a great earthquake.',
  },

  emmaus: {
    id: 'emmaus',
    name: 'Emmaus',
    region: 'Near Jerusalem, Israel',
    description: 'A village seven miles from Jerusalem on the road where two disciples encountered the risen Jesus without recognizing him, until he broke bread.',
    bibleRefs: ['Luke 24:13-35'],
    coordinates: { lat: 31.839, lng: 34.985 },
    era: 'new_testament',
    associatedEvents: ['road_to_emmaus'],
    associatedCharacters: ['jesus'],
    environmentType: 'village',
    ambience: 'A dusty road at day\'s end, the warm glow of an inn, bread broken at table, hearts burning from words spoken along the way.',
  },

  damascus: {
    id: 'damascus',
    name: 'Damascus',
    region: 'Syria',
    description: 'One of the oldest continuously inhabited cities in the world; on its road Paul was struck down by the risen Christ and transformed from persecutor to apostle.',
    bibleRefs: ['Acts 9:1-25', 'Galatians 1:17'],
    coordinates: { lat: 33.5138, lng: 36.2765 },
    era: 'early_church',
    associatedEvents: ['pauls_conversion'],
    associatedCharacters: ['paul'],
    environmentType: 'city',
    ambience: 'A straight street in an ancient city, sunlight blazing overhead, then blinding light and a voice from heaven.',
  },

  athens: {
    id: 'athens',
    name: 'Athens',
    region: 'Greece',
    description: 'The intellectual capital of the ancient world, where Paul preached at the Areopagus about the unknown God and the resurrection.',
    bibleRefs: ['Acts 17:16-34'],
    coordinates: { lat: 37.9838, lng: 23.7275 },
    era: 'early_church',
    associatedEvents: ['pauls_missionary_journeys'],
    associatedCharacters: ['paul'],
    environmentType: 'city',
    ambience: 'The Acropolis gleaming above, temples to a dozen gods, the hum of philosophical debate in the Agora.',
  },

  ephesus: {
    id: 'ephesus',
    name: 'Ephesus',
    region: 'Western Turkey (modern)',
    description: 'A major port city of Asia Minor where Paul spent two years, where John settled with Mary, and which received one of Paul\'s letters.',
    bibleRefs: ['Acts 18:24-19:41', 'Ephesians 1:1', 'Revelation 2:1-7'],
    coordinates: { lat: 37.9394, lng: 27.3415 },
    era: 'early_church',
    associatedEvents: ['pauls_missionary_journeys'],
    associatedCharacters: ['paul', 'timothy', 'priscilla', 'john_apostle'],
    environmentType: 'city',
    ambience: 'Marble-paved streets, the great Temple of Artemis, silversmiths\' workshops, a theater ringing with cries of "Great is Artemis!"',
  },

  rome: {
    id: 'rome',
    name: 'Rome',
    region: 'Italy',
    description: 'Capital of the Roman Empire to which Paul appealed as a Roman citizen and where both Paul and Peter were ultimately martyred.',
    bibleRefs: ['Acts 28:14-31', 'Romans 1:7', '2 Timothy 4:6-8'],
    coordinates: { lat: 41.9028, lng: 12.4964 },
    era: 'early_church',
    associatedEvents: [],
    associatedCharacters: ['paul', 'peter', 'priscilla'],
    environmentType: 'city',
    ambience: 'The grand forums and imperial monuments of the ancient world\'s greatest city, alongside the hidden meeting places of a young church.',
  },

  patmos: {
    id: 'patmos',
    name: 'Patmos',
    region: 'Aegean Sea, Greece',
    description: 'The small island to which John the apostle was exiled, where he received the visions recorded in the book of Revelation.',
    bibleRefs: ['Revelation 1:9'],
    coordinates: { lat: 37.3, lng: 26.55 },
    era: 'early_church',
    associatedEvents: [],
    associatedCharacters: ['john_apostle'],
    environmentType: 'island',
    ambience: 'Rocky Aegean coastline, caves in the hillside, the sound of waves, a blinding vision of the glorified Christ.',
  },

  eden: {
    id: 'eden',
    name: 'Garden of Eden',
    region: 'Mesopotamia',
    description: 'The paradise God planted for Adam and Eve — a place of perfect fellowship between humanity and God.',
    bibleRefs: ['Genesis 2', 'Genesis 3'],
    coordinates: null, // symbolic / lost
    era: 'creation',
    associatedEvents: ['creation'],
    associatedCharacters: [],
    environmentType: 'garden',
    ambience: 'Lush rivers, abundant fruit trees, soft golden light, birdsong.',
  },

  ararat: {
    id: 'ararat',
    name: 'Mount Ararat',
    region: 'Eastern Turkey (modern)',
    description: 'The mountain where Noah\'s Ark came to rest after the great flood.',
    bibleRefs: ['Genesis 8:4'],
    coordinates: { lat: 39.7018, lng: 44.2985 },
    era: 'antediluvian',
    associatedEvents: ['great_flood'],
    associatedCharacters: ['noah'],
    environmentType: 'mountain',
    ambience: 'Snow-capped peaks, receding flood waters, a rainbow overhead.',
  },

  canaan: {
    id: 'canaan',
    name: 'Land of Canaan',
    region: 'Ancient Near East (modern Israel/Palestine)',
    description: 'The Promised Land — given by God to Abraham and his descendants.',
    bibleRefs: ['Genesis 12:7', 'Numbers 13'],
    coordinates: { lat: 31.7683, lng: 35.2137 },
    era: 'patriarchs',
    associatedEvents: [],
    associatedCharacters: ['abraham'],
    environmentType: 'mixed_terrain',
    ambience: 'Rolling hills, olive groves, ancient tent camps, star-filled desert nights.',
  },

  egypt: {
    id: 'egypt',
    name: 'Egypt',
    region: 'North Africa',
    description: 'Land of the great pyramids and Pharaohs — where Israel was enslaved for 400 years before the Exodus.',
    bibleRefs: ['Exodus 1', 'Exodus 12'],
    coordinates: { lat: 30.0626, lng: 31.2497 },
    era: 'exodus',
    associatedEvents: ['exodus_plagues'],
    associatedCharacters: ['moses'],
    environmentType: 'desert_civilization',
    ambience: 'Blazing sun, towering pyramids, the Nile delta, brick-making slaves.',
  },

  red_sea: {
    id: 'red_sea',
    name: 'The Red Sea (Sea of Reeds)',
    region: 'Sinai Peninsula',
    description: 'The body of water miraculously parted by God for Israel to cross on dry ground.',
    bibleRefs: ['Exodus 14'],
    coordinates: { lat: 29.5, lng: 32.5 },
    era: 'exodus',
    associatedEvents: ['parting_red_sea'],
    associatedCharacters: ['moses'],
    environmentType: 'sea',
    ambience: 'Crashing walls of water held back by divine power, wet sand underfoot, the Egyptian army approaching.',
  },

  sinai: {
    id: 'sinai',
    name: 'Mount Sinai (Horeb)',
    region: 'Sinai Peninsula',
    description: 'The mountain of God — where Moses received the Ten Commandments and God revealed His glory.',
    bibleRefs: ['Exodus 19', 'Exodus 20', '1 Kings 19'],
    coordinates: { lat: 28.5392, lng: 33.9748 },
    era: 'exodus',
    associatedEvents: ['ten_commandments'],
    associatedCharacters: ['moses'],
    environmentType: 'mountain',
    ambience: 'Fire and thick cloud at the summit, trumpet blast, thunder, the ground trembling.',
  },

  valley_of_elah: {
    id: 'valley_of_elah',
    name: 'Valley of Elah',
    region: 'Shephelah, Israel',
    description: 'The valley where David slew Goliath with a stone and a sling.',
    bibleRefs: ['1 Samuel 17:2'],
    coordinates: { lat: 31.6954, lng: 34.9583 },
    era: 'united_kingdom',
    associatedEvents: ['david_and_goliath'],
    associatedCharacters: ['david'],
    environmentType: 'valley',
    ambience: 'Two armies on opposing hillsides, the giant Goliath bellowing from the valley floor, a dry stream bed with smooth stones.',
  },

  jerusalem: {
    id: 'jerusalem',
    name: 'Jerusalem',
    region: 'Judea',
    description: 'The holy city — seat of David\'s kingdom, site of Solomon\'s Temple, and the city of Jesus\'s death and resurrection.',
    bibleRefs: ['2 Samuel 5:6', 'Psalms 122', 'Luke 19:41', 'John 19'],
    coordinates: { lat: 31.7683, lng: 35.2137 },
    era: 'united_kingdom',
    associatedEvents: ['resurrection', 'pentecost'],
    associatedCharacters: ['david', 'jesus'],
    environmentType: 'city',
    ambience: 'Ancient stone walls, the Temple Mount gleaming, crowded markets, the Mount of Olives in view.',
  },

  bethlehem: {
    id: 'bethlehem',
    name: 'Bethlehem',
    region: 'Judea',
    description: 'The city of David — birthplace of Jesus Christ.',
    bibleRefs: ['Micah 5:2', 'Luke 2:4', 'Matthew 2:1'],
    coordinates: { lat: 31.7054, lng: 35.2024 },
    era: 'new_testament',
    associatedEvents: ['birth_of_jesus'],
    associatedCharacters: ['jesus', 'mary'],
    environmentType: 'town',
    ambience: 'A clear winter night, a brilliant star overhead, shepherds on the hills, a humble stable glowing with warm light.',
  },

  nazareth: {
    id: 'nazareth',
    name: 'Nazareth',
    region: 'Galilee',
    description: 'The hometown where Jesus grew up.',
    bibleRefs: ['Luke 2:51', 'Matthew 2:23', 'Luke 4:16'],
    coordinates: { lat: 32.6996, lng: 35.3035 },
    era: 'new_testament',
    associatedEvents: [],
    associatedCharacters: ['jesus', 'mary'],
    environmentType: 'village',
    ambience: 'Hillside village, carpenter\'s workshop, synagogue, rolling Galilean landscape.',
  },

  galilee: {
    id: 'galilee',
    name: 'Sea of Galilee Region',
    region: 'Northern Israel',
    description: 'Where Jesus called His disciples, taught the Sermon on the Mount, and performed many miracles.',
    bibleRefs: ['Matthew 4:18', 'Matthew 5:1', 'Mark 6:48'],
    coordinates: { lat: 32.8328, lng: 35.5842 },
    era: 'new_testament',
    associatedEvents: ['sermon_on_mount'],
    associatedCharacters: ['jesus'],
    environmentType: 'lakeside',
    ambience: 'A gentle hillside above a shimmering blue lake, a multitude seated on the grass, cool breeze from the water.',
  },

  antioch: {
    id: 'antioch',
    name: 'Antioch',
    region: 'Ancient Syria (modern Turkey)',
    description: 'Where followers of Jesus were first called Christians, and the base for Paul\'s missionary journeys.',
    bibleRefs: ['Acts 11:26', 'Acts 13:1'],
    coordinates: { lat: 36.2021, lng: 36.1604 },
    era: 'early_church',
    associatedEvents: ['pentecost'],
    associatedCharacters: ['paul'],
    environmentType: 'city',
    ambience: 'A bustling cosmopolitan city, Greek and Roman architecture, diverse crowds, a thriving young church.',
  },
};

class LocationRegistry {
  constructor(locations = LOCATIONS) {
    this._locations = { ...locations };
  }

  getLocation(id) {
    return this._locations[id] ?? null;
  }

  getAllLocations() {
    return Object.values(this._locations);
  }

  getLocationsByEra(era) {
    return Object.values(this._locations).filter(l => l.era === era);
  }

  getLocationsByEnvironment(type) {
    return Object.values(this._locations).filter(l => l.environmentType === type);
  }

  getLocationsByEvent(eventId) {
    return Object.values(this._locations).filter(l => l.associatedEvents.includes(eventId));
  }

  getLocationsByCharacter(characterId) {
    return Object.values(this._locations).filter(l => l.associatedCharacters.includes(characterId));
  }

  getRealWorldLocations() {
    return Object.values(this._locations).filter(l => l.coordinates !== null);
  }

  getAmbience(id) {
    const loc = this._locations[id];
    if (!loc) throw new Error(`Unknown location: "${id}"`);
    return loc.ambience;
  }

  getDistance(idA, idB) {
    const a = this._locations[idA];
    const b = this._locations[idB];
    if (!a) throw new Error(`Unknown location: "${idA}"`);
    if (!b) throw new Error(`Unknown location: "${idB}"`);
    if (!a.coordinates || !b.coordinates) return null;

    // Haversine formula (km)
    const R = 6371;
    const dLat = this._toRad(b.coordinates.lat - a.coordinates.lat);
    const dLng = this._toRad(b.coordinates.lng - a.coordinates.lng);
    const sinDLat = Math.sin(dLat / 2);
    const sinDLng = Math.sin(dLng / 2);
    const x =
      sinDLat * sinDLat +
      Math.cos(this._toRad(a.coordinates.lat)) *
        Math.cos(this._toRad(b.coordinates.lat)) *
        sinDLng * sinDLng;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  }

  _toRad(deg) {
    return (deg * Math.PI) / 180;
  }
}

module.exports = { LocationRegistry, LOCATIONS };
