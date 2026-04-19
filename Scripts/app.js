/**
 * App compositor — wires all registries into a single ready-to-use experience.
 * Call createExperience(eventId) to get a fully-wired engine, scene, and
 * userState without needing to assemble the parts manually.
 */

const { NarrativeEngine } = require('./narrative');
const { CharacterRegistry } = require('./characters');
const { EventRegistry } = require('./events');
const { LocationRegistry } = require('./locations');
const { Timeline } = require('./timeline');
const { ARScene } = require('./arScene');
const { UserState } = require('./userState');

/**
 * Create a fully-wired immersive experience for the given biblical event.
 *
 * Returns:
 *   engine      — NarrativeEngine with all registries injected, session started
 *   scene       — ARScene ready to receive objects and verse panels
 *   userState   — UserState for bookmarks and progress tracking
 *   session     — the newly-created session object
 *   currentStep — the first step of the event
 *   event       — the full event definition
 */
function createExperience(eventId) {
  const engine = new NarrativeEngine({
    characterRegistry: new CharacterRegistry(),
    eventRegistry: new EventRegistry(),
    locationRegistry: new LocationRegistry(),
    timeline: new Timeline(),
  });

  const scene = new ARScene();
  const userState = new UserState();

  const result = engine.startExperience(eventId);

  return {
    engine,
    scene,
    userState,
    session: result.session,
    currentStep: result.currentStep,
    event: result.event,
  };
}

module.exports = { createExperience };
