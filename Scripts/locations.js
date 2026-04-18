/**
 * Biblical locations — real and symbolic places with geographic data,
 * historical context, and links to events and characters.
 */

const LOCATIONS = {
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
