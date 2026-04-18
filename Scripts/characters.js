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

  deborah: {
    id: 'deborah',
    name: 'Deborah',
    era: 'judges',
    role: 'Judge & Prophetess of Israel',
    description: 'The only female judge of Israel, a prophetess who led Israel to victory over Sisera alongside Barak.',
    bibleRefs: ['Judges 4', 'Judges 5'],
    location: 'canaan',
    relationships: { general: 'barak' },
    dialogue: {
      greeting: 'I am Deborah, a mother in Israel — the Lord has given the enemy into your hand.',
      onBattle: 'Up! For this is the day the Lord has given Sisera into your hand.',
      onSong: 'When the princes in Israel take the lead, when the people willingly offer themselves — praise the Lord!',
      farewell: 'So may all your enemies perish, O Lord! But may all who love you be like the sun when it rises in its strength.',
    },
  },

  gideon: {
    id: 'gideon',
    name: 'Gideon',
    era: 'judges',
    role: 'Judge & Mighty Man of Valour',
    description: 'A reluctant judge who defeated the Midianites with three hundred men using torches and trumpets.',
    bibleRefs: ['Judges 6', 'Judges 7'],
    location: 'canaan',
    relationships: {},
    dialogue: {
      greeting: 'Behold, my clan is the weakest in Manasseh and I am the least in my father\'s house.',
      onCall: 'The Lord is with you, O mighty man of valour.',
      onFleece: 'If you will save Israel by my hand, as you have said, behold I am laying a fleece of wool on the threshing floor.',
      onBattle: 'A sword for the Lord and for Gideon! With the three hundred I will save you.',
      farewell: 'As soon as Gideon died, the people returned to whoring after the Baals.',
    },
  },

  samson: {
    id: 'samson',
    name: 'Samson',
    era: 'judges',
    role: 'Judge of Israel & Man of Supernatural Strength',
    description: 'A Nazirite from birth who possessed miraculous strength from God but was betrayed by Delilah.',
    bibleRefs: ['Judges 13', 'Judges 14', 'Judges 16'],
    location: 'canaan',
    relationships: { betrayer: 'delilah' },
    dialogue: {
      greeting: 'The Spirit of the Lord rushed upon me and I tore the lion apart with my bare hands.',
      onStrength: 'If I am shaved, then my strength will leave me, and I shall become weak.',
      onDelilah: 'She has made me tell her the secret of my great strength.',
      onTemple: 'O Lord God, please remember me and please strengthen me just this once.',
      farewell: 'So the dead whom he killed at his death were more than those he had killed during his life.',
    },
  },

  delilah: {
    id: 'delilah',
    name: 'Delilah',
    era: 'judges',
    role: 'Betrayer of Samson',
    description: 'A woman hired by the Philistine lords to discover the secret of Samson\'s strength and betray him.',
    bibleRefs: ['Judges 16'],
    location: 'canaan',
    relationships: { betrayed: 'samson' },
    dialogue: {
      greeting: 'Please tell me where your great strength lies, and how you might be bound.',
      onPersistence: 'How can you say "I love you" when your heart is not with me?',
      onSecret: 'She called, Samson, the Philistines are upon you!',
      farewell: 'The lords of the Philistines brought her eleven hundred pieces of silver each.',
    },
  },

  ruth: {
    id: 'ruth',
    name: 'Ruth',
    era: 'judges',
    role: 'Faithful Moabite & Ancestor of David',
    description: 'A Moabite woman who remained loyal to her mother-in-law Naomi and became the great-grandmother of King David.',
    bibleRefs: ['Ruth 1', 'Ruth 2', 'Ruth 4'],
    location: 'bethlehem',
    relationships: { mother_in_law: 'naomi', husband: 'boaz' },
    dialogue: {
      greeting: 'Where you go I will go, and where you stay I will stay. Your people shall be my people, and your God my God.',
      onLoyalty: 'Do not urge me to leave you or to return from following you.',
      onBoaz: 'Why have I found favour in your eyes, that you should take notice of me, since I am a foreigner?',
      farewell: 'Boaz took Ruth and she became his wife. She bore a son, and they named him Obed, the father of Jesse, the father of David.',
    },
  },

  naomi: {
    id: 'naomi',
    name: 'Naomi',
    era: 'judges',
    role: 'Mother-in-Law of Ruth',
    description: 'A woman who lost her husband and sons in Moab but returned to Bethlehem where God restored her through Ruth and Boaz.',
    bibleRefs: ['Ruth 1', 'Ruth 4:14-17'],
    location: 'bethlehem',
    relationships: { daughter_in_law: 'ruth' },
    dialogue: {
      greeting: 'I went away full, and the Lord has brought me back empty. Call me Mara, for the Almighty has dealt bitterly with me.',
      onRuth: 'The woman urged her daughters-in-law to return to their mothers\' houses.',
      onReturn: 'The Lord has not abandoned his kindness to the living and the dead.',
      farewell: 'The women said to Naomi: A son has been born to Naomi! They named him Obed.',
    },
  },

  boaz: {
    id: 'boaz',
    name: 'Boaz',
    era: 'judges',
    role: 'Kinsman-Redeemer',
    description: 'A wealthy Bethlehemite who showed kindness to Ruth and fulfilled his role as her kinsman-redeemer.',
    bibleRefs: ['Ruth 2', 'Ruth 3', 'Ruth 4'],
    location: 'bethlehem',
    relationships: { wife: 'ruth' },
    dialogue: {
      greeting: 'The Lord be with you! May the Lord repay you for what you have done.',
      onRuth: 'All my fellow townsmen know that you are a worthy woman.',
      onRedemption: 'I have bought from Naomi all that belonged to Elimelech — and Ruth the Moabite I have acquired as my wife.',
      farewell: 'May the Lord make the woman who is coming into your house like Rachel and Leah.',
    },
  },

  samuel: {
    id: 'samuel',
    name: 'Samuel',
    era: 'united_kingdom',
    role: 'Last Judge & First Kingmaker',
    description: 'The last judge of Israel, a prophet who anointed both Saul and David as king.',
    bibleRefs: ['1 Samuel 3', '1 Samuel 10', '1 Samuel 16'],
    location: 'shiloh',
    relationships: { anointed: 'saul', anointed2: 'david' },
    dialogue: {
      greeting: 'Speak, Lord, for your servant is listening.',
      onSaul: 'The Lord has torn the kingdom of Israel from you today and given it to your neighbour.',
      onDavid: 'The Lord does not see as man sees — man looks at the outward appearance, but the Lord looks at the heart.',
      farewell: 'The Lord called Samuel again; and Samuel grew and the Lord was with him and let none of his words fall to the ground.',
    },
  },

  saul: {
    id: 'saul',
    name: 'Saul',
    era: 'united_kingdom',
    role: 'First King of Israel',
    description: 'Israel\'s first king — chosen for his stature but rejected by God for his disobedience.',
    bibleRefs: ['1 Samuel 9', '1 Samuel 13', '1 Samuel 31'],
    location: 'jerusalem',
    relationships: { son: 'jonathan', successor: 'david' },
    dialogue: {
      greeting: 'Am I not a Benjaminite, from the least of the tribes of Israel? Why do you speak to me like this?',
      onKingship: 'You have not kept the command of the Lord your God, which he commanded you.',
      onDavid: 'I am distressed. David is coming after me. God has departed from me and answers me no more.',
      farewell: 'I have acted foolishly and made a great mistake.',
    },
  },

  jonathan: {
    id: 'jonathan',
    name: 'Jonathan',
    era: 'united_kingdom',
    role: 'Prince & Faithful Friend of David',
    description: 'Saul\'s son and David\'s closest friend who covenanted his loyalty to David even at the cost of the throne.',
    bibleRefs: ['1 Samuel 18', '1 Samuel 20', '2 Samuel 1'],
    location: 'jerusalem',
    relationships: { father: 'saul', friend: 'david' },
    dialogue: {
      greeting: 'The Lord be between you and me and between my offspring and your offspring forever.',
      onFriendship: 'Jonathan loved David as his own soul and stripped himself of his robe and gave it to David.',
      onDavid: 'Do not be afraid, for the hand of my father Saul shall not find you. You shall be king over Israel.',
      farewell: 'I am distressed for you, my brother Jonathan. Your love to me was extraordinary, surpassing the love of women.',
    },
  },

  solomon: {
    id: 'solomon',
    name: 'Solomon',
    era: 'united_kingdom',
    role: 'Wisest King & Temple Builder',
    description: 'David\'s son, the wisest man who ever lived, who built the Temple in Jerusalem and wrote Proverbs, Ecclesiastes, and Song of Solomon.',
    bibleRefs: ['1 Kings 3', '1 Kings 6', 'Proverbs 1'],
    location: 'jerusalem',
    relationships: { father: 'david' },
    dialogue: {
      greeting: 'I am a little child and do not know how to go out or come in. Give your servant a hearing heart.',
      onWisdom: 'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.',
      onTemple: 'But will God indeed dwell on the earth? Heaven and the highest heaven cannot contain you.',
      onVanity: 'Vanity of vanities — all is vanity. Fear God and keep his commandments, for this is the whole duty of man.',
      farewell: 'Solomon slept with his fathers and was buried in the city of David his father.',
    },
  },

  bathsheba: {
    id: 'bathsheba',
    name: 'Bathsheba',
    era: 'united_kingdom',
    role: 'Wife of David & Mother of Solomon',
    description: 'A woman whose union with David began in sin but through whom God gave Solomon, the heir to the eternal throne.',
    bibleRefs: ['2 Samuel 11', '1 Kings 1:17', '1 Kings 2'],
    location: 'jerusalem',
    relationships: { husband: 'david', son: 'solomon' },
    dialogue: {
      greeting: 'You swore to me by the Lord your God: Solomon your son shall reign after me.',
      onUriah: 'I am pregnant.',
      onSolomon: 'Let my lord King David live forever! Let Solomon be enthroned.',
      farewell: 'Then Bathsheba bowed with her face to the ground and did obeisance to the king.',
    },
  },

  goliath: {
    id: 'goliath',
    name: 'Goliath',
    era: 'united_kingdom',
    role: 'Philistine Giant & Champion',
    description: 'A Philistine warrior over nine feet tall who defied the armies of Israel until defeated by the shepherd boy David.',
    bibleRefs: ['1 Samuel 17'],
    location: 'valley_of_elah',
    relationships: { defeater: 'david' },
    dialogue: {
      greeting: 'Choose a man for yourselves. If he is able to fight with me and kill me, we will be your servants.',
      onChallenge: 'Am I a dog, that you come to me with sticks? Come to me and I will give your flesh to the birds.',
      onDavid: 'Do you think I am a dog that you come to me with sticks? Come here and I will give your flesh to the birds.',
      farewell: 'David ran and stood over the Philistine, took his sword and cut off his head.',
    },
  },

  elisha: {
    id: 'elisha',
    name: 'Elisha',
    era: 'divided_kingdom',
    role: 'Prophet & Successor of Elijah',
    description: 'The prophet who received a double portion of Elijah\'s spirit and performed twice as many miracles.',
    bibleRefs: ['1 Kings 19:19', '2 Kings 2', '2 Kings 4-5'],
    location: 'samaria',
    relationships: { mentor: 'elijah' },
    dialogue: {
      greeting: 'Please let there be a double portion of your spirit on me.',
      onMiracles: 'The iron axe head fell into the water — Where did it fall? And he cut a stick and threw it in and made the iron float.',
      onNaaman: 'Go and wash in the Jordan seven times, and your flesh shall be restored and you shall be clean.',
      farewell: 'When Elisha was sick with the illness of which he would die, Joash king of Israel wept over him.',
    },
  },

  jezebel: {
    id: 'jezebel',
    name: 'Jezebel',
    era: 'divided_kingdom',
    role: 'Wicked Queen of Israel',
    description: 'A Phoenician princess who married Ahab and led Israel into Baal worship, persecuting God\'s prophets.',
    bibleRefs: ['1 Kings 18:4', '1 Kings 19:2', '1 Kings 21'],
    location: 'samaria',
    relationships: { husband: 'ahab' },
    dialogue: {
      greeting: 'Are you not the king of Israel? Eat and let your heart be cheerful. I will give you the vineyard.',
      onElijah: 'So may the gods do to me and more also if I do not make your life as the life of one of them by this time tomorrow.',
      onNaboth: 'Do you not govern Israel? Arise and eat bread and let your heart be cheerful. I will give you the vineyard.',
      farewell: 'They went to bury her, but they found no more of her than the skull and the feet and the palms of her hands.',
    },
  },

  ahab: {
    id: 'ahab',
    name: 'Ahab',
    era: 'divided_kingdom',
    role: 'Wicked King of Israel',
    description: 'King of Israel who did more evil than all who were before him by marrying Jezebel and worshipping Baal.',
    bibleRefs: ['1 Kings 16:30', '1 Kings 18', '1 Kings 21'],
    location: 'samaria',
    relationships: { wife: 'jezebel', nemesis: 'elijah' },
    dialogue: {
      greeting: 'Is it you, you troubler of Israel?',
      onElijah: 'Have you found me, O my enemy?',
      onNaboth: 'He went into his house vexed and sullen because of what Naboth had said to him.',
      farewell: 'There was none who sold himself to do what was evil in the sight of the Lord like Ahab.',
    },
  },

  isaiah: {
    id: 'isaiah',
    name: 'Isaiah',
    era: 'divided_kingdom',
    role: 'Prophet of the Messiah',
    description: 'A major prophet whose visions foretold the Messiah\'s birth, suffering, and glory with extraordinary detail.',
    bibleRefs: ['Isaiah 1', 'Isaiah 6', 'Isaiah 53', 'Isaiah 61'],
    location: 'jerusalem',
    relationships: {},
    dialogue: {
      greeting: 'I am a man of unclean lips — but the Lord has touched my mouth and taken away my guilt.',
      onVision: 'I saw the Lord sitting upon a throne, high and lifted up, and the train of his robe filled the temple.',
      onMessiah: 'For to us a child is born, to us a son is given; and the government shall be upon his shoulder.',
      onSuffering: 'He was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace.',
      farewell: 'The Spirit of the Lord God is upon me, because the Lord has anointed me to bring good news to the poor.',
    },
  },

  jeremiah: {
    id: 'jeremiah',
    name: 'Jeremiah',
    era: 'divided_kingdom',
    role: 'Weeping Prophet',
    description: 'Called from birth to prophesy Judah\'s fall and the coming exile, he wept over his people\'s refusal to repent.',
    bibleRefs: ['Jeremiah 1', 'Jeremiah 29', 'Jeremiah 31'],
    location: 'jerusalem',
    relationships: {},
    dialogue: {
      greeting: 'Ah, Lord God! Behold, I do not know how to speak, for I am only a youth.',
      onCall: 'Before I formed you in the womb I knew you, and before you were born I consecrated you.',
      onExile: 'Seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf.',
      onHope: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.',
      farewell: 'Behold, the days are coming when I will make a new covenant with the house of Israel.',
    },
  },

  ezekiel: {
    id: 'ezekiel',
    name: 'Ezekiel',
    era: 'exile',
    role: 'Prophet of Visions & Exile',
    description: 'A priest and prophet exiled to Babylon who received spectacular visions of God\'s glory and Israel\'s restoration.',
    bibleRefs: ['Ezekiel 1', 'Ezekiel 37'],
    location: 'babylon',
    relationships: {},
    dialogue: {
      greeting: 'The heavens were opened and I saw visions of God — the likeness of the glory of the Lord.',
      onWheels: 'I saw a great cloud with brightness around it, and fire flashing forth, and gleaming metal in the midst of the fire.',
      onDryBones: 'Son of man, can these bones live? And I answered, O Lord God, you know.',
      farewell: 'Thus says the Lord God: I will gather you from the peoples and bring you into the land of Israel.',
    },
  },

  daniel: {
    id: 'daniel',
    name: 'Daniel',
    era: 'exile',
    role: 'Prophet & Interpreter of Dreams',
    description: 'A young man taken captive to Babylon who remained faithful to God through lions\' dens, fiery furnaces, and royal courts.',
    bibleRefs: ['Daniel 1', 'Daniel 3', 'Daniel 6'],
    location: 'babylon',
    relationships: { friends: 'shadrach' },
    dialogue: {
      greeting: 'I Daniel was troubled in my spirit, and the visions of my head alarmed me.',
      onLions: 'My God sent his angel and shut the lions\' mouths, and they have not harmed me.',
      onDreams: 'No wise men, enchanters, magicians, or astrologers can show the king the mystery — but there is a God in heaven who reveals mysteries.',
      onPrayer: 'He knelt down on his knees three times a day and prayed and gave thanks before his God, as he had done previously.',
      farewell: 'But go your way till the end. And you shall rest and shall stand in your allotted place at the end of the days.',
    },
  },

  mordecai: {
    id: 'mordecai',
    name: 'Mordecai',
    era: 'return',
    role: 'Guardian of Esther & Defender of the Jews',
    description: 'Esther\'s cousin and guardian who refused to bow to Haman and helped save the Jewish people from genocide.',
    bibleRefs: ['Esther 2', 'Esther 4', 'Esther 10'],
    location: 'babylon',
    relationships: { cousin: 'esther' },
    dialogue: {
      greeting: 'I am Mordecai the Jew — the man whom the king delights to honour.',
      onEsther: 'Do not think that in the king\'s palace you will escape any more than all the other Jews.',
      onProvidence: 'Who knows whether you have not come to the kingdom for such a time as this?',
      farewell: 'Mordecai the Jew was second in rank to King Ahasuerus and great among the Jews.',
    },
  },

  nehemiah: {
    id: 'nehemiah',
    name: 'Nehemiah',
    era: 'return',
    role: 'Wall-Builder & Reformer',
    description: 'Cup-bearer to the Persian king who led the rebuilding of Jerusalem\'s walls in 52 days despite fierce opposition.',
    bibleRefs: ['Nehemiah 1', 'Nehemiah 2', 'Nehemiah 6'],
    location: 'jerusalem',
    relationships: {},
    dialogue: {
      greeting: 'The great and awesome God who keeps covenant and steadfast love — please hear my prayer.',
      onWall: 'I told them of the hand of my God that had been upon me for good. And they said: Let us rise up and build.',
      onOpposition: 'Remember Tobiah and Sanballat according to their works. The wall was finished in fifty-two days.',
      farewell: 'Remember me, O my God, for good.',
    },
  },

  ezra: {
    id: 'ezra',
    name: 'Ezra',
    era: 'return',
    role: 'Priest & Scribe of the Law',
    description: 'A priest and scribe who led exiles back from Babylon and restored the reading and practice of God\'s Law in Jerusalem.',
    bibleRefs: ['Ezra 7', 'Nehemiah 8'],
    location: 'jerusalem',
    relationships: {},
    dialogue: {
      greeting: 'The gracious hand of my God was upon me, for I had set my heart to study the Law of the Lord.',
      onLaw: 'Ezra opened the book in the sight of all the people — and when he opened it all the people stood.',
      onRepentance: 'We are before you in our guilt, for none can stand before you because of this.',
      farewell: 'The joy of the Lord is your strength.',
    },
  },

  job: {
    id: 'job',
    name: 'Job',
    era: 'patriarchs',
    role: 'Man of Suffering & Perseverance',
    description: 'A righteous man who lost everything and suffered greatly yet refused to curse God — and was restored beyond his former blessing.',
    bibleRefs: ['Job 1', 'Job 19', 'Job 38', 'Job 42'],
    location: 'canaan',
    relationships: {},
    dialogue: {
      greeting: 'The Lord gave and the Lord has taken away. Blessed be the name of the Lord.',
      onSuffering: 'Why is light given to a man whose way is hidden, whom God has hedged in?',
      onRedeemer: 'For I know that my Redeemer lives, and at the last he will stand upon the earth.',
      onGod: 'Where were you when I laid the foundation of the earth? Tell me, if you have understanding.',
      farewell: 'I had heard of you by the hearing of the ear, but now my eye sees you.',
    },
  },

  jonah: {
    id: 'jonah',
    name: 'Jonah',
    era: 'divided_kingdom',
    role: 'Reluctant Prophet',
    description: 'A prophet who fled from God\'s call, was swallowed by a great fish, and eventually preached repentance to Nineveh.',
    bibleRefs: ['Jonah 1', 'Jonah 2', 'Jonah 3'],
    location: 'nineveh',
    relationships: {},
    dialogue: {
      greeting: 'I am a Hebrew, and I fear the Lord, the God of heaven, who made the sea and the dry land.',
      onFlight: 'I fled to Tarshish because I knew you are a gracious God and merciful, slow to anger.',
      onFish: 'Out of the belly of Sheol I cried, and you heard my voice.',
      onNineveh: 'Yet forty days and Nineveh shall be overthrown!',
      farewell: 'Should I not pity Nineveh, that great city, in which there are more than 120,000 persons?',
    },
  },

  joseph_husband: {
    id: 'joseph_husband',
    name: 'Joseph (husband of Mary)',
    era: 'new_testament',
    role: 'carpenter, earthly father of Jesus',
    description: 'A righteous man from Nazareth, descended from David, who obeyed God and raised Jesus as his own son.',
    bibleRefs: ['Matthew 1:18-25', 'Luke 2:1-20', 'Matthew 2:13-23'],
    location: 'nazareth',
    relationships: { wife: 'mary', fosterSon: 'jesus' },
    dialogue: {
      greeting: 'Peace be with you. I am Joseph, a carpenter of Nazareth.',
      onAnnunciation: 'When I learned Mary was with child, an angel appeared to me in a dream and told me the child was conceived by the Holy Spirit.',
      onBethlehem: 'We traveled to Bethlehem for the census. The inn was full, so the child was born in a stable — yet the angels sang that night.',
      onFlight: 'An angel warned me in a dream: take the child and his mother to Egypt. We fled at once to escape Herod.',
      farewell: 'God guides those who trust him, even through darkness. Walk in his ways.',
    },
  },

  john_the_baptist: {
    id: 'john_the_baptist',
    name: 'John the Baptist',
    era: 'new_testament',
    role: 'prophet, forerunner of the Messiah',
    description: 'Cousin of Jesus, filled with the Holy Spirit from birth, who preached repentance in the wilderness and baptized Jesus in the Jordan River.',
    bibleRefs: ['Luke 1:5-25', 'Mark 1:1-11', 'John 1:19-34', 'Matthew 14:1-12'],
    location: 'jordan_river',
    relationships: { cousin: 'jesus', mother: 'elizabeth', father: 'zechariah' },
    dialogue: {
      greeting: 'Repent! The kingdom of heaven is near. I am a voice crying in the wilderness: prepare the way of the Lord.',
      onBaptism: 'I baptize you with water, but one who is more powerful than I is coming. He will baptize you with the Holy Spirit and fire.',
      onJesus: 'Behold, the Lamb of God, who takes away the sin of the world! I am not worthy to untie his sandals.',
      onPrison: 'Are you the one who is to come, or should we look for another? Send word to Jesus — the blind see, the lame walk.',
      farewell: 'He must increase, but I must decrease. That is my joy.',
    },
  },

  elizabeth: {
    id: 'elizabeth',
    name: 'Elizabeth',
    era: 'new_testament',
    role: 'mother of John the Baptist',
    description: 'A righteous woman of the priestly line, wife of Zechariah, who conceived John miraculously in her old age as a sign of God\'s grace.',
    bibleRefs: ['Luke 1:5-80'],
    location: 'nazareth',
    relationships: { husband: 'zechariah', son: 'john_the_baptist', cousin: 'mary' },
    dialogue: {
      greeting: 'Blessed are you among women, and blessed is the child you will bear! Why am I so favored that the mother of my Lord should come to me?',
      onMary: 'When I heard your greeting, the baby leaped in my womb for joy. You are blessed because you believed what the Lord told you.',
      onJohn: 'His name is John. The Lord had mercy on me and taken away my disgrace before the people.',
      onGrace: 'Nothing is impossible with God. I am living proof — he opened a barren womb so that his purposes might be fulfilled.',
      farewell: 'Walk in the promises of God. What he speaks, he will surely bring to pass.',
    },
  },

  zechariah: {
    id: 'zechariah',
    name: 'Zechariah',
    era: 'new_testament',
    role: 'priest, father of John the Baptist',
    description: 'A priest of the division of Abijah who was struck mute for doubting Gabriel\'s message, then burst into prophecy at John\'s naming.',
    bibleRefs: ['Luke 1:5-25', 'Luke 1:57-79'],
    location: 'nazareth',
    relationships: { wife: 'elizabeth', son: 'john_the_baptist' },
    dialogue: {
      greeting: 'I am Zechariah, a priest of the Lord. I serve in the temple according to my division.',
      onAngel: 'Gabriel appeared to me at the altar of incense and I was struck with fear. I doubted — and for that I could not speak until the day John was named.',
      onJohn: 'His name is John. And the moment I wrote it, my tongue was loosed and I praised God.',
      onBenedictus: 'Blessed be the Lord God of Israel, for he has visited and redeemed his people — a horn of salvation in the house of his servant David.',
      farewell: 'God is faithful to his covenant and to his holy promise. Praise him with all your heart.',
    },
  },

  peter: {
    id: 'peter',
    name: 'Peter',
    era: 'new_testament',
    role: 'apostle, leader of the twelve',
    description: 'A fisherman from Galilee called Simon, renamed Peter (Rock) by Jesus, who became the leading voice among the apostles despite a famous denial.',
    bibleRefs: ['Matthew 4:18-20', 'Matthew 16:13-20', 'John 21:15-19', 'Acts 2:14-41'],
    location: 'galilee',
    relationships: { teacher: 'jesus', brother: 'andrew' },
    dialogue: {
      greeting: 'Peace to you. I am Simon Peter, a fisherman Jesus called to fish for people.',
      onCall: 'He said, "Follow me," and I left my nets immediately. I did not know then where that would lead.',
      onConfession: 'You are the Messiah, the Son of the living God. That truth came to me like light breaking through clouds.',
      onDenial: 'I denied him three times that night. And he looked at me, and I went out and wept bitterly. But he forgave me and restored me.',
      farewell: 'Cast all your anxiety on him, because he cares for you. Stand firm in the faith.',
    },
  },

  andrew: {
    id: 'andrew',
    name: 'Andrew',
    era: 'new_testament',
    role: 'apostle, first called disciple',
    description: 'Brother of Peter and a former disciple of John the Baptist who was the first apostle called and who brought his brother to Jesus.',
    bibleRefs: ['John 1:35-42', 'Mark 1:16-18', 'John 6:8-9'],
    location: 'galilee',
    relationships: { teacher: 'jesus', brother: 'peter' },
    dialogue: {
      greeting: 'I am Andrew. My brother Peter and I were casting nets when Jesus called us.',
      onJohn: 'I was a disciple of John the Baptist first. When John pointed to Jesus and said "Behold the Lamb of God," I followed Jesus that very day.',
      onPeter: 'The first thing I did was find my brother Simon and say, "We have found the Messiah." I brought him to Jesus.',
      onLoaves: 'There is a boy here who has five barley loaves and two fish — but what are they among so many?',
      farewell: 'Bring what little you have to Jesus. He will multiply it beyond all imagining.',
    },
  },

  james_apostle: {
    id: 'james_apostle',
    name: 'James (son of Zebedee)',
    era: 'new_testament',
    role: 'apostle, first martyr of the twelve',
    description: 'Brother of John the apostle, called a "son of thunder" by Jesus, who was part of the inner three and the first of the twelve to be martyred.',
    bibleRefs: ['Mark 1:19-20', 'Mark 9:2-13', 'Acts 12:1-2'],
    location: 'galilee',
    relationships: { teacher: 'jesus', brother: 'john_apostle' },
    dialogue: {
      greeting: 'I am James, son of Zebedee. My brother John and I left our father\'s fishing boats to follow Jesus.',
      onTransfiguration: 'On the mountain, his face shone like the sun. Moses and Elijah appeared beside him. I fell on my face in awe.',
      onThunder: 'Jesus called John and me "Boanerges" — sons of thunder. We had strong spirits. He shaped those spirits for his purposes.',
      onCup: 'He asked if we could drink the cup he would drink. We said yes. I did not know what I was agreeing to — but God gave grace.',
      farewell: 'Follow Jesus wherever he leads, even when the path costs everything.',
    },
  },

  john_apostle: {
    id: 'john_apostle',
    name: 'John (son of Zebedee)',
    era: 'new_testament',
    role: 'apostle, beloved disciple',
    description: 'Brother of James, the "disciple whom Jesus loved," who stood at the cross, received the risen Jesus\'s commission to care for Mary, and wrote the Gospel of John and Revelation.',
    bibleRefs: ['John 13:23', 'John 19:26-27', 'Revelation 1:9-11'],
    location: 'galilee',
    relationships: { teacher: 'jesus', brother: 'james_apostle' },
    dialogue: {
      greeting: 'God is love, and whoever abides in love abides in God. I am John. That truth took a lifetime to understand.',
      onCross: 'Jesus saw his mother and me standing there. He said to her, "Woman, here is your son." And to me, "Here is your mother." From that hour I took her into my home.',
      onTomb: 'We ran to the tomb and found it empty. I saw the burial cloths lying there, and I believed.',
      onRevelation: 'I was on the island of Patmos when the vision came — the throne, the Lamb, the new heaven and new earth. Write what you see, he said.',
      farewell: 'Little children, love one another. That is the commandment above all others.',
    },
  },

  matthew: {
    id: 'matthew',
    name: 'Matthew',
    era: 'new_testament',
    role: 'apostle, tax collector, evangelist',
    description: 'A tax collector for Rome in Capernaum who left his booth immediately when Jesus said "Follow me," and wrote the Gospel bearing his name.',
    bibleRefs: ['Matthew 9:9-13', 'Luke 5:27-32'],
    location: 'capernaum',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'I am Matthew, once a tax collector — despised by my own people as a collaborator. Then Jesus called me.',
      onCall: 'He walked past my tax booth and said two words: "Follow me." I got up and followed him. My whole life changed in an instant.',
      onDinner: 'I held a great feast for Jesus at my house. The Pharisees complained he ate with sinners. He said, "I came not for the righteous but for sinners."',
      onGospel: 'I wrote what I saw and heard so that Israel would know their Messiah had come — the fulfillment of all the Law and the Prophets.',
      farewell: 'No one is too far gone for grace. I am proof of that.',
    },
  },

  thomas: {
    id: 'thomas',
    name: 'Thomas',
    era: 'new_testament',
    role: 'apostle, the doubter turned believer',
    description: 'Called Didymus (the Twin), Thomas famously doubted the resurrection until Jesus appeared and invited him to touch his wounds, prompting a profound confession of faith.',
    bibleRefs: ['John 11:16', 'John 14:5', 'John 20:24-29'],
    location: 'jerusalem',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'They call me Doubting Thomas, but I prefer Thomas the Seeker. I needed to understand before I believed.',
      onLazarus: 'When Jesus said he was going to Judea again despite the danger, I said to the others, "Let us go too, and die with him."',
      onWay: 'I asked Jesus, "Lord, we do not know where you are going. How can we know the way?" He said, "I am the way, the truth, and the life."',
      onDoubt: 'I was not there when he appeared the first time. I said I would not believe unless I touched the wounds. Then he came — and I cried, "My Lord and my God!"',
      farewell: 'Do not be faithless but believing. Honest doubt, brought to Jesus, becomes the deepest faith.',
    },
  },

  judas_iscariot: {
    id: 'judas_iscariot',
    name: 'Judas Iscariot',
    era: 'new_testament',
    role: 'apostle, betrayer of Jesus',
    description: 'One of the twelve apostles and keeper of the common purse who betrayed Jesus to the chief priests for thirty pieces of silver, later dying in remorse.',
    bibleRefs: ['John 12:4-6', 'Matthew 26:14-16', 'Matthew 26:47-50', 'Matthew 27:3-10'],
    location: 'jerusalem',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'I was one of the twelve. I walked with him for three years, saw the miracles, heard every teaching.',
      onMoney: 'I kept the money bag for the group. I told myself it was practical, that I was protecting the ministry\'s resources. I was deceiving myself.',
      onBetrayal: 'Thirty pieces of silver. I led them to the garden and greeted him with a kiss. That kiss has defined me ever since.',
      onRemorse: 'When I saw he was condemned, I was seized with remorse. I returned the silver. But remorse is not repentance, and I found no peace.',
      farewell: 'Let my story be a warning. Greed is a door that leads only to darkness. Choose the light while you can.',
    },
  },

  philip_apostle: {
    id: 'philip_apostle',
    name: 'Philip (apostle)',
    era: 'new_testament',
    role: 'apostle, bridge to the Greek world',
    description: 'An apostle from Bethsaida who brought Nathanael to Jesus and who the Greeks approached when they wished to see Jesus, reflecting his role as a bridge.',
    bibleRefs: ['John 1:43-46', 'John 6:5-7', 'John 12:20-22', 'John 14:8-11'],
    location: 'galilee',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'I am Philip, from Bethsaida. Jesus found me and said simply, "Follow me." So I followed.',
      onNathanael: 'I found Nathanael and told him, "We have found the one Moses and the prophets wrote about — Jesus of Nazareth." He doubted. I said, "Come and see."',
      onLoaves: 'Jesus asked me where we could buy bread for the crowd. I calculated the cost and said it was impossible. He already knew what he was going to do.',
      onFather: 'I asked Jesus, "Show us the Father." He said, "Philip, have I been with you so long and you still do not know me? Whoever has seen me has seen the Father."',
      farewell: 'Come and see. That is all faith requires — come, look at Jesus, and keep looking.',
    },
  },

  mary_magdalene: {
    id: 'mary_magdalene',
    name: 'Mary Magdalene',
    era: 'new_testament',
    role: 'faithful disciple, first witness to the resurrection',
    description: 'A woman from Magdala delivered from seven demons who became a devoted follower of Jesus and was the first person to see the risen Christ.',
    bibleRefs: ['Luke 8:2', 'John 19:25', 'John 20:1-18'],
    location: 'jerusalem',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'I am Mary, from Magdala. I once was bound by darkness, but Jesus set me free completely.',
      onDemons: 'Seven demons had tormented me. Then Jesus came and with a word they were gone. I had no choice but to follow him — he had given me back my life.',
      onCross: 'I stood at the foot of the cross with his mother. I could not leave him. He had not left me.',
      onRisen: 'I went to the tomb in the early morning, while it was still dark. The stone was moved. I wept, thinking someone had taken him. Then he said my name — "Mary." I knew his voice.',
      farewell: 'He calls each of us by name. Listen for your name in the garden.',
    },
  },

  lazarus: {
    id: 'lazarus',
    name: 'Lazarus',
    era: 'new_testament',
    role: 'friend of Jesus, raised from the dead',
    description: 'A man from Bethany, brother of Martha and Mary, whom Jesus raised from the dead after four days in the tomb.',
    bibleRefs: ['John 11:1-44', 'John 12:1-11'],
    location: 'bethlehem',
    relationships: { teacher: 'jesus', sister: 'martha' },
    dialogue: {
      greeting: 'I am Lazarus. I died, and Jesus called me back. I carry that miracle with me every day.',
      onIllness: 'My sisters sent word to Jesus: "Lord, the one you love is sick." I have been told he wept when he heard I had died.',
      onTomb: 'I was in the tomb four days. I do not know what I experienced there. What I know is I heard his voice: "Lazarus, come out!" And I came.',
      onDinner: 'Six days before Passover I reclined at table with him. My sister Mary anointed his feet with costly perfume. The house was filled with the fragrance.',
      farewell: 'Death is not the end for those who know him. I am living proof.',
    },
  },

  martha: {
    id: 'martha',
    name: 'Martha',
    era: 'new_testament',
    role: 'friend and host of Jesus, sister of Lazarus',
    description: 'The practical, hospitable sister of Lazarus and Mary, whom Jesus gently corrected for being distracted by serving, and who made a great confession of faith when her brother died.',
    bibleRefs: ['Luke 10:38-42', 'John 11:1-44'],
    location: 'bethlehem',
    relationships: { teacher: 'jesus', brother: 'lazarus' },
    dialogue: {
      greeting: 'Come in, come in! I am Martha. Sit down — let me bring you something.',
      onDistracted: 'I was busy preparing the meal while Mary sat at his feet. I asked Jesus to tell her to help me. He said, "Martha, you are worried about many things. Mary has chosen the better part."',
      onLazarus: 'When Lazarus died, I ran out to meet Jesus before he even reached the village. I said, "Lord, if you had been here, my brother would not have died — but even now I know God will give you whatever you ask."',
      onConfession: 'Jesus asked if I believed he was the resurrection and the life. And I said, "Yes, Lord, I believe you are the Messiah, the Son of God." I meant every word.',
      farewell: 'Serve with your hands, but do not let service crowd out sitting at his feet.',
    },
  },

  nicodemus: {
    id: 'nicodemus',
    name: 'Nicodemus',
    era: 'new_testament',
    role: 'Pharisee, secret seeker, defender of Jesus',
    description: 'A Pharisee and member of the Sanhedrin who came to Jesus at night to inquire, who later defended him at the council, and who helped bury him.',
    bibleRefs: ['John 3:1-21', 'John 7:50-51', 'John 19:38-42'],
    location: 'jerusalem',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'I am Nicodemus, a teacher of Israel. I came to Jesus at night — cautiously — but I came.',
      onNight: 'I said, "Rabbi, we know you are a teacher come from God." He said no one could see the kingdom unless they were born again. I was puzzled.',
      onBornAgain: 'He told me I must be born of water and the Spirit. The wind blows where it will — so is everyone born of the Spirit. I began to understand only slowly.',
      onDefense: 'When the chief priests wanted to arrest Jesus, I spoke up: "Does our law condemn a man without first hearing him?" They mocked me. But I could not stay silent.',
      farewell: 'Do not be afraid to seek truth, even in the night. The light will meet you there.',
    },
  },

  zacchaeus: {
    id: 'zacchaeus',
    name: 'Zacchaeus',
    era: 'new_testament',
    role: 'chief tax collector, transformed by grace',
    description: 'A wealthy chief tax collector in Jericho who climbed a sycamore tree to see Jesus and was so transformed by Jesus\'s acceptance that he gave away half his wealth.',
    bibleRefs: ['Luke 19:1-10'],
    location: 'jericho',
    relationships: { teacher: 'jesus' },
    dialogue: {
      greeting: 'I am Zacchaeus. I was chief tax collector in Jericho — and yes, I know what people thought of me.',
      onTree: 'I was short, the crowd was thick, and I wanted to see him. So I ran ahead and climbed a sycamore tree. Then Jesus stopped, looked up, and said my name.',
      onInvitation: 'He said, "Zacchaeus, come down. I must stay at your house today." I came down at once, joyful. The crowd grumbled that he was going to stay with a sinner.',
      onRepentance: 'Standing before the Lord, I said, "Half my possessions I will give to the poor. And if I have cheated anyone, I will repay four times the amount." He said salvation had come to my house that day.',
      farewell: 'Grace received becomes grace given. You cannot encounter Jesus and stay the same.',
    },
  },

  barnabas: {
    id: 'barnabas',
    name: 'Barnabas',
    era: 'early_church',
    role: 'apostle, encourager, missionary partner of Paul',
    description: 'A Levite from Cyprus whose real name was Joseph, renamed Barnabas ("Son of Encouragement") by the apostles, who vouched for Paul and partnered with him on the first missionary journey.',
    bibleRefs: ['Acts 4:36-37', 'Acts 9:26-27', 'Acts 13:1-3', 'Acts 15:36-41'],
    location: 'antioch',
    relationships: { partner: 'paul' },
    dialogue: {
      greeting: 'They call me Barnabas — the Son of Encouragement. I try to live up to that name.',
      onPaul: 'When Paul came to Jerusalem after his conversion, everyone was afraid of him. I stood up for him. I had seen the fruit of his transformed life.',
      onJourney: 'We set out from Antioch — Paul, Mark, and I — sent by the Holy Spirit. We preached in Cyprus, Pisidian Antioch, Iconium, Lystra. Lives were changed.',
      onMark: 'Paul and I parted ways over Mark. I believed in giving a second chance. Sometimes encouragement means not giving up on people.',
      farewell: 'Encourage one another. Every soul needs someone who believes in them.',
    },
  },

  stephen: {
    id: 'stephen',
    name: 'Stephen',
    era: 'early_church',
    role: 'deacon, first Christian martyr',
    description: 'One of the seven deacons of the Jerusalem church, full of faith and the Holy Spirit, who preached a bold sermon before the Sanhedrin and was stoned to death as the first Christian martyr.',
    bibleRefs: ['Acts 6:1-7:60'],
    location: 'jerusalem',
    relationships: {},
    dialogue: {
      greeting: 'I am Stephen, a servant of the tables and of the Word. I was chosen to serve the widows — and then God opened a wider door.',
      onSanhedrin: 'They brought false witnesses against me. But the Spirit gave me words. I traced the whole story — Abraham, Joseph, Moses, the prophets. They refused to hear.',
      onVision: 'As they stoned me I looked up and saw the heavens opened and the Son of Man standing at the right hand of God. I was not afraid.',
      onMartyrs: 'I said, "Lord, do not hold this sin against them." Then I fell asleep. A young man named Saul was watching and approving. God had plans for him.',
      farewell: 'Hold nothing so tightly that you cannot let it go for the sake of Christ.',
    },
  },

  timothy: {
    id: 'timothy',
    name: 'Timothy',
    era: 'early_church',
    role: 'Paul\'s protégé, pastor',
    description: 'A young man from Lystra with a Jewish mother and Greek father who became Paul\'s closest coworker and was entrusted with leading the church at Ephesus.',
    bibleRefs: ['Acts 16:1-3', '1 Timothy 1:1-2', '2 Timothy 1:5'],
    location: 'ephesus',
    relationships: { mentor: 'paul' },
    dialogue: {
      greeting: 'I am Timothy. Paul called me his true son in the faith. I still hear his voice in my heart.',
      onCalling: 'Paul came to Lystra and chose me to join his team. The elders laid hands on me. I did not feel ready, but Paul said, "Do not let anyone look down on you because you are young."',
      onFaith: 'My grandmother Lois and my mother Eunice first taught me the Scriptures. That foundation Paul built upon.',
      onEphesus: 'Paul left me in Ephesus to deal with false teachers. It was hard work. He wrote me letters of instruction and encouragement that I treasured.',
      farewell: 'Guard what has been entrusted to you. Fan into flame the gift of God that is in you.',
    },
  },

  lydia: {
    id: 'lydia',
    name: 'Lydia',
    era: 'early_church',
    role: 'first European convert, host of the church',
    description: 'A dealer in purple cloth from Thyatira who was worshipping by the river at Philippi when Paul preached, became the first recorded European convert, and opened her home as the first European church.',
    bibleRefs: ['Acts 16:13-15', 'Acts 16:40'],
    location: 'philippi',
    relationships: { teacher: 'paul' },
    dialogue: {
      greeting: 'I am Lydia, a merchant of purple cloth from Thyatira. But what defines me now is not my trade — it is my Lord.',
      onRiver: 'We gathered by the river on the Sabbath to pray. Paul sat down and spoke to us. The Lord opened my heart to receive his words.',
      onBaptism: 'My entire household was baptized that day. Then I urged Paul: "If you consider me faithful to the Lord, come stay at my house." He came.',
      onChurch: 'The believers gathered in my house. It was the beginning of the church at Philippi. I am grateful my home could serve such a purpose.',
      farewell: 'Open your home. Open your heart. The Spirit moves through both.',
    },
  },

  silas: {
    id: 'silas',
    name: 'Silas',
    era: 'early_church',
    role: 'missionary, Paul\'s companion',
    description: 'A leading prophet and teacher among Jerusalem believers who traveled with Paul on the second missionary journey and sang hymns with Paul in a Philippian prison at midnight.',
    bibleRefs: ['Acts 15:22-35', 'Acts 16:19-34', 'Acts 17:1-15'],
    location: 'antioch',
    relationships: { partner: 'paul' },
    dialogue: {
      greeting: 'I am Silas — Silvanus in some circles. A prophet of the Jerusalem church, then a missionary across Macedonia and Achaia.',
      onPrison: 'Paul and I were beaten and thrown into the inner cell, feet in stocks. Around midnight we prayed and sang hymns. The other prisoners listened.',
      onEarthquake: 'Suddenly a great earthquake — every door opened, every chain loosed. The jailer drew his sword in despair. Paul cried out, "We are all here!" That night the jailer and his household believed.',
      onMission: 'We traveled to Thessalonica, Berea, Corinth. Persecution followed us. But so did the Holy Spirit.',
      farewell: 'Sing in the dark places. The light will come.',
    },
  },

  priscilla: {
    id: 'priscilla',
    name: 'Priscilla',
    era: 'early_church',
    role: 'missionary, teacher, tentmaker',
    description: 'Wife of Aquila and a fellow tentmaker with Paul who, together with her husband, instructed Apollos more accurately and hosted a church in their home.',
    bibleRefs: ['Acts 18:1-3', 'Acts 18:24-26', 'Romans 16:3-4'],
    location: 'ephesus',
    relationships: { husband: 'aquila', partner: 'paul' },
    dialogue: {
      greeting: 'I am Priscilla. My husband Aquila and I work together — in our tent-making trade and in the work of the gospel.',
      onApollos: 'We heard Apollos preaching boldly in the synagogue. He knew the Scriptures well but understood only John\'s baptism. We took him aside and explained the way of God more accurately.',
      onPaul: 'Paul came to Corinth and stayed with us because we shared his trade. We worked side by side — with our hands and with the gospel.',
      onRisk: 'Paul says Aquila and I risked our necks for his life. We do not count the cost when it comes to the gospel.',
      farewell: 'The body of Christ has no place for spectators. Use the gifts you have, wherever you are.',
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
