/**
 * Public entry point — re-exports every class and constant in the app.
 * Import from here rather than from individual module paths.
 */

const { BibleApiClient, BIBLE_IDS, DEFAULT_BIBLE_ID, BASE_URL } = require('./bibleApi');
const { BibleData, BOOKS } = require('./bibleData');
const { CharacterRegistry, CHARACTERS } = require('./characters');
const { EventRegistry, BIBLICAL_EVENTS, ERA_ORDER } = require('./events');
const { LocationRegistry, LOCATIONS } = require('./locations');
const { NarrativeEngine, SESSION_STATUS } = require('./narrative');
const { Timeline, ERAS } = require('./timeline');
const { UserState } = require('./userState');
const { ARScene } = require('./arScene');

module.exports = {
  // API
  BibleApiClient,
  BIBLE_IDS,
  DEFAULT_BIBLE_ID,
  BASE_URL,

  // Scripture data
  BibleData,
  BOOKS,

  // Characters
  CharacterRegistry,
  CHARACTERS,

  // Events
  EventRegistry,
  BIBLICAL_EVENTS,
  ERA_ORDER,

  // Locations
  LocationRegistry,
  LOCATIONS,

  // Narrative engine
  NarrativeEngine,
  SESSION_STATUS,

  // Timeline
  Timeline,
  ERAS,

  // User state
  UserState,

  // AR/VR scene
  ARScene,
};
