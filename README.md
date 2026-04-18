# Bible AR/VR App

An immersive Augmented Reality and Virtual Reality experience that transports users directly into biblical history — inspired by the style of *Superbook*. Walk through the parting of the Red Sea, stand at the foot of Mount Sinai, witness the Resurrection, and encounter Bible characters face to face across the full sweep of Scripture.

---

## Vision

The Bible is not a static text — it is a living story spanning thousands of years, dozens of nations, and hundreds of characters. This app brings every scene, every character, and every verse to life in interactive 3D space. Users are not passive readers; they are participants transported into the events of Scripture as they unfold.

---

## Core Features

### Time-Travel Experience
Navigate a full 12-era biblical timeline — from Creation through the Early Church — and be transported to any moment in history. Each era has its own environment, lighting, ambience, and cast of characters.

### Live Character Encounters
Meet and interact with key biblical figures:
- Moses at the burning bush, the Red Sea, and Mount Sinai
- David facing Goliath in the Valley of Elah
- Mary and Jesus at the Nativity
- Paul on the road to Damascus
- Noah aboard the Ark
- Abraham receiving God's promise under the stars
- And many more

Each character delivers authentic scripture-based dialogue, responds to context, and invites the user deeper into their story.

### Immersive Biblical Events
Witness the great events of Scripture as multi-step interactive scenes:
- The Ten Plagues of Egypt
- The Parting of the Red Sea
- The Ten Commandments at Mount Sinai
- David and Goliath
- The Birth of Jesus in Bethlehem
- The Sermon on the Mount
- The Resurrection
- Pentecost
- ...and more across all 66 books

### Real Biblical Locations
Every scene is anchored to real or symbolic geography. Explore:
- The Garden of Eden
- Mount Ararat after the Flood
- The deserts of Egypt and Sinai
- Jerusalem and Bethlehem
- The Sea of Galilee
- Antioch and the early church world

### Verse-Level AR Interaction
Every one of the 31,102 verses of the Bible is addressable in AR space. Scripture panels can be placed, anchored, and explored in the user's physical environment — associating God's Word with real places and moments in the user's own life.

### Personal Journey Tracking
- Bookmark any verse with personal notes
- Track reading and exploration progress through every book and chapter
- Full session history of every location visited, character met, and verse explored

---

## Architecture

The app is built in **JavaScript/Node.js** (WebXR-compatible) with the following core modules:

| Module | Responsibility |
|--------|---------------|
| `Scripts/bibleData.js` | Verse/chapter lookup, full-text search, 66-book canon |
| `Scripts/characters.js` | Character profiles, dialogue, live interaction state |
| `Scripts/events.js` | Biblical event registry, step-by-step scene progression |
| `Scripts/locations.js` | Location data, ambience, real-world GPS coordinates |
| `Scripts/timeline.js` | 12-era chronological navigation (Creation → Early Church) |
| `Scripts/narrative.js` | Master experience engine — sessions, story orchestration |
| `Scripts/arScene.js` | 3D object and verse panel placement in AR/VR space |
| `Scripts/userState.js` | Bookmarks, reading progress, session history |

### Planned Directories

| Directory | Purpose |
|-----------|---------|
| `Scenes/` | AR/VR scene definitions per event and location |
| `AI_Models/` | AI-powered contextual commentary, semantic verse discovery, guided study |
| `Assets/` | 3D character models, environments, audio, textures |
| `UI_Designs/` | Interface layouts and UX flows |
| `Documentation/` | Full technical and content documentation |

---

## Testing

- **Framework:** Jest 29
- **Tests:** 223 unit tests across 8 suites
- **Coverage:** ~99% lines, 100% functions
- **CI:** GitHub Actions (Node 18 & 20) on every push

```bash
npm test               # run all tests
npm run test:coverage  # run with coverage report
```

---

## Biblical Scope

The full 66-book Protestant canon is supported:

**Old Testament (39 books):** Genesis through Malachi  
**New Testament (27 books):** Matthew through Revelation

Every verse in Scripture — all **31,102** of them — is a first-class citizen of the AR experience, addressable as a floating panel anchored in 3D space.
