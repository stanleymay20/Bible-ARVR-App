/**
 * Bible character registry — profiles, dialogue lines, relationships, and
 * interaction state for live AR/VR encounters.
 */

const CHARACTERS = {
  adam: {
    id: 'adam',
    name: 'Adam',
    era: 'creation',
    role: 'First Man',
    description: 'The first human being, formed by God from the dust of the ground and given the breath of life.',
    bibleRefs: ['Genesis 2', 'Genesis 3', 'Romans 5:14'],
    location: 'eden',
    relationships: { wife: 'eve', son: 'cain', son2: 'abel', son3: 'seth' },
    dialogue: {
      greeting: 'The Lord God formed me from the dust of the ground and breathed life into my nostrils.',
      onCreation: 'This is now bone of my bones and flesh of my flesh; she shall be called Woman.',
      onFall: 'I heard your voice in the garden, and I was afraid because I was naked, so I hid.',
      onEden: 'The Lord God planted a garden in the east, in Eden, and placed me there.',
      farewell: 'By the sweat of your face you shall eat bread, till you return to the ground.',
    },
  },

  eve: {
    id: 'eve',
    name: 'Eve',
    era: 'creation',
    role: 'First Woman & Mother of All Living',
    description: 'Created by God from Adam\'s rib, the first woman and mother of all humanity.',
    bibleRefs: ['Genesis 2:22', 'Genesis 3', 'Genesis 4:1'],
    location: 'eden',
    relationships: { husband: 'adam', son: 'cain', son2: 'abel' },
    dialogue: {
      greeting: 'God created me to be a helper fit for Adam — bone of his bones and flesh of his flesh.',
      onSerpent: 'The serpent said to me, You will not surely die. God knows that when you eat you will be like God.',
      onFall: 'The serpent deceived me, and I ate.',
      onCain: 'I have gotten a man with the help of the Lord.',
      farewell: 'She was called Eve, because she was the mother of all living.',
    },
  },

  cain: {
    id: 'cain',
    name: 'Cain',
    era: 'antediluvian',
    role: 'First Murderer',
    description: 'The firstborn son of Adam and Eve who killed his brother Abel out of jealousy, becoming the first murderer.',
    bibleRefs: ['Genesis 4'],
    location: 'eden',
    relationships: { father: 'adam', mother: 'eve', brother: 'abel' },
    dialogue: {
      greeting: 'I worked the ground and brought an offering to the Lord from its fruit.',
      onOffering: 'The Lord had no regard for me and my offering, and I was very angry.',
      onAbel: 'Am I my brother\'s keeper?',
      onCurse: 'My punishment is greater than I can bear. I will be hidden from your face.',
      farewell: 'The Lord put a mark on me so that no one who found me would strike me.',
    },
  },

  abel: {
    id: 'abel',
    name: 'Abel',
    era: 'antediluvian',
    role: 'First Martyr',
    description: 'The second son of Adam and Eve, a shepherd whose offering was accepted by God — killed by his brother Cain.',
    bibleRefs: ['Genesis 4', 'Hebrews 11:4', 'Matthew 23:35'],
    location: 'eden',
    relationships: { father: 'adam', mother: 'eve', brother: 'cain' },
    dialogue: {
      greeting: 'By faith I offered God a more acceptable sacrifice than Cain — and was commended as righteous.',
      onOffering: 'I brought the firstborn of my flock, the fat portions — and the Lord had regard for me.',
      onFaith: 'By faith Abel still speaks, though he is dead.',
      farewell: 'The voice of your brother\'s blood is crying to me from the ground.',
    },
  },

  lot: {
    id: 'lot',
    name: 'Lot',
    era: 'patriarchs',
    role: 'Nephew of Abraham',
    description: 'Abraham\'s nephew who settled in Sodom and was rescued by angels before its destruction.',
    bibleRefs: ['Genesis 13', 'Genesis 19'],
    location: 'sodom',
    relationships: { uncle: 'abraham' },
    dialogue: {
      greeting: 'I lifted up my eyes and saw that the Jordan Valley was well watered, like the garden of the Lord.',
      onAngels: 'Turn aside, please, to your servant\'s house and spend the night and wash your feet.',
      onSodom: 'Escape for your life. Do not look back or stop anywhere in the valley.',
      farewell: 'The Lord remembered Abraham and sent Lot out of the midst of the overthrow.',
    },
  },

  isaac: {
    id: 'isaac',
    name: 'Isaac',
    era: 'patriarchs',
    role: 'Son of Promise',
    description: 'The miracle son born to Abraham and Sarah in their old age, the child of God\'s covenant promise.',
    bibleRefs: ['Genesis 21', 'Genesis 22', 'Genesis 26'],
    location: 'canaan',
    relationships: { father: 'abraham', mother: 'sarah', wife: 'rebekah', son: 'jacob', son2: 'esau' },
    dialogue: {
      greeting: 'My father — here is the fire and the wood, but where is the lamb for the burnt offering?',
      onMoriah: 'God will provide for himself the lamb for a burnt offering, my son.',
      onRebekah: 'Isaac loved Rebekah and was comforted after his mother\'s death.',
      onBlessing: 'May God give you the dew of heaven and the fatness of the earth.',
      farewell: 'I do not know the day of my death; bless me before I die.',
    },
  },

  rebekah: {
    id: 'rebekah',
    name: 'Rebekah',
    era: 'patriarchs',
    role: 'Wife of Isaac & Mother of Jacob',
    description: 'A woman of great initiative chosen by God\'s providence to be Isaac\'s wife and the mother of Jacob and Esau.',
    bibleRefs: ['Genesis 24', 'Genesis 25:21', 'Genesis 27'],
    location: 'canaan',
    relationships: { husband: 'isaac', son: 'jacob', son2: 'esau' },
    dialogue: {
      greeting: 'I will draw water for your camels also, until they have finished drinking.',
      onJacob: 'The elder will serve the younger — two nations are in my womb.',
      onBlessing: 'Let your curse be on me, my son. Only obey my voice and go get the goats.',
      farewell: 'Let me not be bereft of you both in one day.',
    },
  },

  jacob: {
    id: 'jacob',
    name: 'Jacob',
    era: 'patriarchs',
    role: 'Father of the Twelve Tribes',
    description: 'Son of Isaac who wrestled with God, was renamed Israel, and fathered the twelve tribes of Israel.',
    bibleRefs: ['Genesis 28', 'Genesis 32', 'Genesis 49'],
    location: 'canaan',
    relationships: { father: 'isaac', mother: 'rebekah', wife: 'rachel', wife2: 'leah', son: 'joseph_patriarch' },
    dialogue: {
      greeting: 'Surely the Lord is in this place, and I did not know it.',
      onLadder: 'This is none other than the house of God, and this is the gate of heaven.',
      onWrestling: 'I have seen God face to face, and yet my life has been delivered.',
      onJoseph: 'Joseph is without doubt torn to pieces. I will go down to Sheol to my son, mourning.',
      farewell: 'I am about to be gathered to my people. Bury me with my fathers.',
    },
  },

  rachel: {
    id: 'rachel',
    name: 'Rachel',
    era: 'patriarchs',
    role: 'Beloved Wife of Jacob',
    description: 'Jacob\'s beloved wife, for whom he laboured fourteen years, mother of Joseph and Benjamin.',
    bibleRefs: ['Genesis 29', 'Genesis 30', 'Genesis 35:19'],
    location: 'canaan',
    relationships: { husband: 'jacob', son: 'joseph_patriarch', son2: 'benjamin' },
    dialogue: {
      greeting: 'Give me children, or I shall die.',
      onJacob: 'God has taken away my reproach — he has listened to my voice.',
      onJoseph: 'May the Lord add to me another son.',
      farewell: 'A voice is heard in Ramah, weeping and loud lamentation — Rachel weeping for her children.',
    },
  },

  leah: {
    id: 'leah',
    name: 'Leah',
    era: 'patriarchs',
    role: 'First Wife of Jacob',
    description: 'Jacob\'s unloved first wife through whom God opened her womb and gave birth to six of the twelve tribes.',
    bibleRefs: ['Genesis 29', 'Genesis 30'],
    location: 'canaan',
    relationships: { husband: 'jacob', son: 'reuben', son2: 'levi', son3: 'judah' },
    dialogue: {
      greeting: 'Because the Lord has looked upon my affliction, I have borne a son.',
      onReuben: 'The Lord has seen my affliction and now my husband will love me.',
      onJudah: 'This time I will praise the Lord.',
      farewell: 'Now my husband will honour me because I have borne him six sons.',
    },
  },

  joseph_patriarch: {
    id: 'joseph_patriarch',
    name: 'Joseph',
    era: 'patriarchs',
    role: 'Dream Interpreter & Saviour of Egypt',
    description: 'Sold into slavery by his jealous brothers, Joseph rose to become second in command of Egypt and saved his family from famine.',
    bibleRefs: ['Genesis 37', 'Genesis 39-41', 'Genesis 45'],
    location: 'egypt',
    relationships: { father: 'jacob', mother: 'rachel', brothers: 'ten brothers' },
    dialogue: {
      greeting: 'God sent me before you to preserve life — it was not you who sent me here, but God.',
      onDreams: 'Do not interpretations belong to God? Tell me your dreams.',
      onBrothers: 'I am Joseph! Is my father still alive?',
      onFamine: 'God sent me before you to preserve for you a remnant on earth.',
      farewell: 'You meant evil against me, but God meant it for good, to bring about that many people should be kept alive.',
    },
  },

  aaron: {
    id: 'aaron',
    name: 'Aaron',
    era: 'exodus',
    role: 'First High Priest of Israel',
    description: 'Moses\'s brother and spokesperson who became Israel\'s first High Priest.',
    bibleRefs: ['Exodus 4:14', 'Exodus 28', 'Leviticus 8'],
    location: 'sinai',
    relationships: { brother: 'moses', sister: 'miriam' },
    dialogue: {
      greeting: 'I am Aaron, the Levite, Moses\'s brother. The Lord has appointed me to speak for him.',
      onPriesthood: 'The Lord said to Moses: Bring Aaron and his sons and anoint them to serve as priests.',
      onGoldenCalf: 'Do not be angry. You know how prone these people are to evil.',
      farewell: 'Aaron was gathered to his people on the top of the mountain, and his son took his place.',
    },
  },

  miriam: {
    id: 'miriam',
    name: 'Miriam',
    era: 'exodus',
    role: 'Prophetess & Sister of Moses',
    description: 'The sister of Moses and Aaron, a prophetess who led Israel\'s women in worship after crossing the Red Sea.',
    bibleRefs: ['Exodus 2:4', 'Exodus 15:20', 'Numbers 12'],
    location: 'red_sea',
    relationships: { brother: 'moses', brother2: 'aaron' },
    dialogue: {
      greeting: 'I am Miriam the prophetess, sister of Aaron.',
      onRedSea: 'Sing to the Lord, for he has triumphed gloriously — horse and rider he has thrown into the sea!',
      onMoses: 'When Pharaoh\'s daughter found the basket, I said: Shall I call a Hebrew nurse for you?',
      farewell: 'Miriam the prophetess took a tambourine and led all the women in singing and dancing.',
    },
  },

  joshua: {
    id: 'joshua',
    name: 'Joshua',
    era: 'conquest',
    role: 'Successor of Moses & Conqueror of Canaan',
    description: 'Moses\'s assistant who led Israel into the Promised Land, conquered Jericho, and divided the land among the tribes.',
    bibleRefs: ['Numbers 14:6', 'Joshua 1', 'Joshua 6'],
    location: 'jericho',
    relationships: { mentor: 'moses', companion: 'caleb' },
    dialogue: {
      greeting: 'Be strong and courageous. Do not be frightened or dismayed, for the Lord your God is with you.',
      onJericho: 'Shout! For the Lord has given you the city.',
      onLand: 'As for me and my house, we will serve the Lord.',
      onPromise: 'Not one word of all the good promises that the Lord made has failed — all have come to pass.',
      farewell: 'Choose this day whom you will serve. As for me and my house, we will serve the Lord.',
    },
  },

  caleb: {
    id: 'caleb',
    name: 'Caleb',
    era: 'conquest',
    role: 'Faithful Spy & Warrior of Faith',
    description: 'One of the two spies who brought a faithful report from Canaan; received Hebron as his inheritance at age 85.',
    bibleRefs: ['Numbers 13:30', 'Numbers 14:24', 'Joshua 14:10-12'],
    location: 'hebron',
    relationships: { companion: 'joshua' },
    dialogue: {
      greeting: 'I brought the Lord a true report; I followed him fully.',
      onSpies: 'Let us go up at once and occupy the land, for we are well able to overcome it.',
      onHebron: 'Here I am today, eighty-five years old — still as strong for war as I was.',
      farewell: 'Give me this hill country that the Lord promised. I shall drive them out as the Lord said.',
    },
  },

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
