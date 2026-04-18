/**
 * Bible character registry — profiles, dialogue lines, relationships, and
 * interaction state for live AR/VR encounters.
 */

const CHARACTERS = {
  moses: {
    id: 'moses',
    name: 'Moses',
    era: 'exodus',
    role: 'Prophet & Deliverer',
    description: 'Led the Israelites out of Egypt and received the Ten Commandments on Mount Sinai.',
    bibleRefs: ['Exodus 3', 'Exodus 14', 'Deuteronomy 34'],
    location: 'egypt',
    relationships: { mentor: 'jethro', successor: 'joshua', sibling: 'aaron' },
    dialogue: {
      greeting: "I am Moses. The LORD has called me to lead His people.",
      onMiracle: "By the power of God, watch what He has prepared.",
      onBurningBush: "Here I am — take off your sandals, for this is holy ground.",
      onRedSea: "Do not be afraid. Stand firm and you will see the deliverance the LORD will bring today.",
      onSinai: "The LORD descended in fire. The whole mountain trembled greatly.",
      farewell: "Be strong and courageous. The LORD your God goes with you wherever you go.",
    },
  },

  david: {
    id: 'david',
    name: 'David',
    era: 'united_kingdom',
    role: 'King of Israel & Psalmist',
    description: 'Shepherd boy who slew Goliath, became Israel\'s greatest king, and wrote many Psalms.',
    bibleRefs: ['1 Samuel 17', '2 Samuel 7', 'Psalms 23'],
    location: 'jerusalem',
    relationships: { friend: 'jonathan', predecessor: 'saul', son: 'solomon' },
    dialogue: {
      greeting: "The LORD is my shepherd — I shall not want.",
      onGoliath: "You come against me with sword and spear and javelin, but I come in the name of the LORD.",
      onWorship: "I will sing to the LORD, for He has been good to me.",
      onJerusalem: "How lovely is your dwelling place, LORD Almighty.",
      farewell: "Serve the LORD with gladness; come before Him with joyful songs.",
    },
  },

  mary: {
    id: 'mary',
    name: 'Mary',
    era: 'new_testament',
    role: 'Mother of Jesus',
    description: 'A young woman from Nazareth chosen by God to bear Jesus Christ.',
    bibleRefs: ['Luke 1:26-38', 'Luke 2', 'John 19:25'],
    location: 'nazareth',
    relationships: { son: 'jesus', cousin: 'elizabeth' },
    dialogue: {
      greeting: "My soul glorifies the Lord and my spirit rejoices in God my Savior.",
      onAnnunciation: "I am the Lord's servant. May your word to me be fulfilled.",
      onBirth: "She wrapped Him in cloths and placed Him in a manger.",
      farewell: "Do whatever He tells you.",
    },
  },

  jesus: {
    id: 'jesus',
    name: 'Jesus',
    era: 'new_testament',
    role: 'Son of God & Saviour',
    description: 'The central figure of Christianity — teacher, healer, and risen Lord.',
    bibleRefs: ['Matthew 5', 'John 3:16', 'John 11:25', 'Luke 24'],
    location: 'jerusalem',
    relationships: { mother: 'mary', forerunner: 'john_the_baptist' },
    dialogue: {
      greeting: "Come to me, all you who are weary and burdened, and I will give you rest.",
      onSermon: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
      onMiracle: "Your faith has healed you.",
      onLazarus: "I am the resurrection and the life.",
      onCross: "Father, forgive them, for they do not know what they are doing.",
      onResurrection: "Do not be afraid. Go and tell my brothers to go to Galilee.",
      farewell: "And surely I am with you always, to the very end of the age.",
    },
  },

  noah: {
    id: 'noah',
    name: 'Noah',
    era: 'antediluvian',
    role: 'Ark Builder & Covenant Recipient',
    description: 'Found righteous before God and commanded to build the Ark before the great flood.',
    bibleRefs: ['Genesis 6', 'Genesis 9'],
    location: 'ararat',
    relationships: { sons: ['shem', 'ham', 'japheth'] },
    dialogue: {
      greeting: "Noah found favor in the eyes of the LORD.",
      onArk: "God said: make yourself an ark of cypress wood.",
      onFlood: "Every living thing on the face of the earth was wiped out.",
      onRainbow: "This is the sign of the covenant I am making between me and you.",
      farewell: "Be fruitful and increase in number and fill the earth.",
    },
  },

  abraham: {
    id: 'abraham',
    name: 'Abraham',
    era: 'patriarchs',
    role: 'Father of Faith',
    description: 'Called by God from Ur to become the father of a great nation through faith.',
    bibleRefs: ['Genesis 12', 'Genesis 15', 'Genesis 22'],
    location: 'canaan',
    relationships: { wife: 'sarah', son: 'isaac', nephew: 'lot' },
    dialogue: {
      greeting: "I am a stranger and a sojourner with you.",
      onCall: "By faith Abraham obeyed when he was called to go to a place he was to receive as an inheritance.",
      onIsaac: "God himself will provide the lamb for the burnt offering, my son.",
      onPromise: "Look up at the sky and count the stars — so shall your offspring be.",
      farewell: "Will not the Judge of all the earth do right?",
    },
  },

  paul: {
    id: 'paul',
    name: 'Paul',
    era: 'early_church',
    role: 'Apostle to the Gentiles',
    description: 'Former persecutor of Christians transformed by a vision of the risen Jesus; wrote much of the New Testament.',
    bibleRefs: ['Acts 9', 'Romans 8', 'Philippians 4'],
    location: 'antioch',
    relationships: { companion: 'barnabas', student: 'timothy' },
    dialogue: {
      greeting: "Grace and peace to you from God our Father and the Lord Jesus Christ.",
      onDamascus: "Suddenly a light from heaven flashed around me and I fell to the ground.",
      onFaith: "I can do all this through Him who gives me strength.",
      onLove: "If I speak in the tongues of men or of angels but do not have love, I am only a resounding gong.",
      farewell: "I have fought the good fight, I have finished the race, I have kept the faith.",
    },
  },
};

class CharacterRegistry {
  constructor(characters = CHARACTERS) {
    this._characters = { ...characters };
    this._interactionStates = {};
  }

  getCharacter(id) {
    return this._characters[id] ?? null;
  }

  getAllCharacters() {
    return Object.values(this._characters);
  }

  getCharactersByEra(era) {
    return Object.values(this._characters).filter(c => c.era === era);
  }

  getCharactersByLocation(locationId) {
    return Object.values(this._characters).filter(c => c.location === locationId);
  }

  getDialogueLine(characterId, contextKey) {
    const character = this._characters[characterId];
    if (!character) throw new Error(`Unknown character: "${characterId}"`);
    return character.dialogue[contextKey] ?? character.dialogue.greeting;
  }

  startInteraction(characterId) {
    if (!this._characters[characterId]) {
      throw new Error(`Unknown character: "${characterId}"`);
    }
    this._interactionStates[characterId] = {
      active: true,
      startedAt: Date.now(),
      dialogueHistory: [],
    };
    return this.getDialogueLine(characterId, 'greeting');
  }

  recordDialogue(characterId, contextKey) {
    if (!this._interactionStates[characterId]?.active) {
      throw new Error(`No active interaction with character: "${characterId}"`);
    }
    const line = this.getDialogueLine(characterId, contextKey);
    this._interactionStates[characterId].dialogueHistory.push({ contextKey, line, at: Date.now() });
    return line;
  }

  endInteraction(characterId) {
    if (!this._interactionStates[characterId]?.active) {
      throw new Error(`No active interaction with character: "${characterId}"`);
    }
    const farewell = this.getDialogueLine(characterId, 'farewell');
    this._interactionStates[characterId].active = false;
    return farewell;
  }

  getInteractionState(characterId) {
    return this._interactionStates[characterId] ?? null;
  }

  isInteractionActive(characterId) {
    return this._interactionStates[characterId]?.active === true;
  }

  getRelationships(characterId) {
    const character = this._characters[characterId];
    if (!character) throw new Error(`Unknown character: "${characterId}"`);
    return { ...character.relationships };
  }
}

module.exports = { CharacterRegistry, CHARACTERS };
