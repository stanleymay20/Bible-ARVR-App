const { NarrativeEngine, SESSION_STATUS } = require('../narrative');
const { CharacterRegistry } = require('../characters');
const { EventRegistry } = require('../events');
const { LocationRegistry } = require('../locations');
const { Timeline } = require('../timeline');

function buildEngine() {
  return new NarrativeEngine({
    characterRegistry: new CharacterRegistry(),
    eventRegistry: new EventRegistry(),
    locationRegistry: new LocationRegistry(),
    timeline: new Timeline(),
  });
}

describe('NarrativeEngine', () => {
  let engine;

  beforeEach(() => {
    engine = buildEngine();
  });

  // ── Initial state ─────────────────────────────────────────────────────────

  describe('initial state', () => {
    it('has idle status', () => {
      expect(engine.getSessionStatus()).toBe(SESSION_STATUS.IDLE);
    });

    it('getSession returns null', () => {
      expect(engine.getSession()).toBeNull();
    });

    it('getDialogueLog returns empty array', () => {
      expect(engine.getDialogueLog()).toHaveLength(0);
    });
  });

  // ── startExperience ───────────────────────────────────────────────────────

  describe('startExperience', () => {
    it('starts an experience and returns session + first step', () => {
      const result = engine.startExperience('parting_red_sea');
      expect(result).toHaveProperty('session');
      expect(result).toHaveProperty('currentStep');
      expect(result).toHaveProperty('event');
      expect(result.currentStep.stepId).toBe('pursued');
    });

    it('sets status to in_experience', () => {
      engine.startExperience('creation');
      expect(engine.getSessionStatus()).toBe(SESSION_STATUS.IN_EXPERIENCE);
    });

    it('navigates the timeline to the event era', () => {
      const timeline = new Timeline();
      const eng = new NarrativeEngine({
        eventRegistry: new EventRegistry(),
        timeline,
      });
      eng.startExperience('creation');
      expect(timeline.getCurrentEra().id).toBe('creation');
    });

    it('throws for an unknown event', () => {
      expect(() => engine.startExperience('unknown_event')).toThrow('Unknown event');
    });

    it('throws when an experience is already active', () => {
      engine.startExperience('creation');
      expect(() => engine.startExperience('great_flood')).toThrow('already in progress');
    });

    it('logs the session start', () => {
      engine.startExperience('pentecost');
      const log = engine.getSessionLog();
      expect(log.some(entry => entry.type === 'experience_started')).toBe(true);
    });
  });

  // ── advanceExperience ─────────────────────────────────────────────────────

  describe('advanceExperience', () => {
    it('returns the second step', () => {
      engine.startExperience('parting_red_sea');
      const step = engine.advanceExperience();
      expect(step.stepId).toBe('staff_raised');
    });

    it('throws when no experience is active', () => {
      expect(() => engine.advanceExperience()).toThrow('No active experience');
    });

    it('throws when already at the final step', () => {
      engine.startExperience('david_and_goliath');
      engine.advanceExperience();
      engine.advanceExperience();
      engine.advanceExperience();
      expect(() => engine.advanceExperience()).toThrow('Cannot advance');
    });
  });

  // ── endExperience ─────────────────────────────────────────────────────────

  describe('endExperience', () => {
    it('sets status to completed', () => {
      engine.startExperience('birth_of_jesus');
      engine.endExperience();
      expect(engine.getSessionStatus()).toBe(SESSION_STATUS.COMPLETED);
    });

    it('records completedAt timestamp', () => {
      const before = Date.now();
      engine.startExperience('birth_of_jesus');
      const session = engine.endExperience();
      expect(session.completedAt).toBeGreaterThanOrEqual(before);
    });

    it('throws when no experience is active', () => {
      expect(() => engine.endExperience()).toThrow('No active experience');
    });
  });

  // ── pause / resume ────────────────────────────────────────────────────────

  describe('pauseExperience / resumeExperience', () => {
    it('pauses an active experience', () => {
      engine.startExperience('creation');
      engine.pauseExperience();
      expect(engine.getSessionStatus()).toBe(SESSION_STATUS.PAUSED);
    });

    it('resumes a paused experience', () => {
      engine.startExperience('creation');
      engine.pauseExperience();
      engine.resumeExperience();
      expect(engine.getSessionStatus()).toBe(SESSION_STATUS.IN_EXPERIENCE);
    });

    it('throws on pause when no active experience', () => {
      expect(() => engine.pauseExperience()).toThrow('No active experience');
    });

    it('throws on resume when not paused', () => {
      expect(() => engine.resumeExperience()).toThrow('No paused experience');
    });
  });

  // ── meetCharacter ─────────────────────────────────────────────────────────

  describe('meetCharacter', () => {
    it('returns greeting line', () => {
      engine.startExperience('parting_red_sea');
      const greeting = engine.meetCharacter('moses');
      expect(typeof greeting).toBe('string');
      expect(greeting.length).toBeGreaterThan(0);
    });

    it('tracks the character as met', () => {
      engine.startExperience('parting_red_sea');
      engine.meetCharacter('moses');
      expect(engine.hasMetCharacter('moses')).toBe(true);
    });

    it('does not duplicate in charactersMet list', () => {
      engine.startExperience('parting_red_sea');
      engine.meetCharacter('moses');
      engine.endInteractionForTest('moses');
      engine.meetCharacter('moses');
      expect(engine.getSession().charactersMet.filter(c => c === 'moses')).toHaveLength(1);
    });

    it('throws when no experience is active', () => {
      expect(() => engine.meetCharacter('moses')).toThrow('No active experience');
    });
  });

  // ── promptCharacter ───────────────────────────────────────────────────────

  describe('promptCharacter', () => {
    it('returns a dialogue line', () => {
      engine.startExperience('parting_red_sea');
      engine.meetCharacter('moses');
      const line = engine.promptCharacter('moses', 'onRedSea');
      expect(line).toContain('Do not be afraid');
    });

    it('appends to dialogue log', () => {
      engine.startExperience('parting_red_sea');
      engine.meetCharacter('moses');
      engine.promptCharacter('moses', 'onRedSea');
      const log = engine.getDialogueLog();
      expect(log.length).toBeGreaterThanOrEqual(2);
    });

    it('throws when no experience is active', () => {
      expect(() => engine.promptCharacter('moses', 'greeting')).toThrow('No active experience');
    });
  });

  // ── farewellCharacter ─────────────────────────────────────────────────────

  describe('farewellCharacter', () => {
    it('returns the farewell line', () => {
      engine.startExperience('parting_red_sea');
      engine.meetCharacter('moses');
      const farewell = engine.farewellCharacter('moses');
      expect(farewell).toContain('courageous');
    });

    it('throws when no experience is active', () => {
      expect(() => engine.farewellCharacter('moses')).toThrow('No active experience');
    });
  });

  // ── getCurrentLocation / getLocationAmbience ──────────────────────────────

  describe('getCurrentLocation', () => {
    it('returns the location for the active event', () => {
      engine.startExperience('parting_red_sea');
      const loc = engine.getCurrentLocation();
      expect(loc.id).toBe('red_sea');
    });

    it('returns null when no experience is active', () => {
      expect(engine.getCurrentLocation()).toBeNull();
    });
  });

  describe('getLocationAmbience', () => {
    it('returns ambience string for the active location', () => {
      engine.startExperience('birth_of_jesus');
      const ambience = engine.getLocationAmbience();
      expect(typeof ambience).toBe('string');
      expect(ambience.length).toBeGreaterThan(0);
    });

    it('returns null when no experience is active', () => {
      expect(engine.getLocationAmbience()).toBeNull();
    });
  });

  // ── getSession / getSessionLog ────────────────────────────────────────────

  describe('getSession', () => {
    it('returns a session snapshot with expected fields', () => {
      engine.startExperience('creation');
      const session = engine.getSession();
      expect(session).toHaveProperty('id');
      expect(session).toHaveProperty('eventId', 'creation');
      expect(session).toHaveProperty('charactersMet');
      expect(session).toHaveProperty('dialogueLog');
      expect(session).toHaveProperty('stepHistory');
    });
  });

  describe('hasMetCharacter', () => {
    it('returns false before meeting a character', () => {
      engine.startExperience('creation');
      expect(engine.hasMetCharacter('moses')).toBe(false);
    });
  });

  // ── missing dependency errors ─────────────────────────────────────────────

  describe('missing dependencies', () => {
    it('throws when EventRegistry is missing on startExperience', () => {
      const eng = new NarrativeEngine({});
      expect(() => eng.startExperience('creation')).toThrow('EventRegistry is required');
    });

    it('throws when CharacterRegistry is missing on meetCharacter', () => {
      const eng = new NarrativeEngine({ eventRegistry: new EventRegistry() });
      eng.startExperience('creation');
      expect(() => eng.meetCharacter('moses')).toThrow('CharacterRegistry is required');
    });

    it('throws when CharacterRegistry is missing on promptCharacter (line 112)', () => {
      // Engine has events but no characters — exercises the guard on line 112.
      const eng = new NarrativeEngine({ eventRegistry: new EventRegistry() });
      eng.startExperience('creation');
      expect(() => eng.promptCharacter('moses', 'greeting')).toThrow('CharacterRegistry is required');
    });

    it('throws when CharacterRegistry is missing on farewellCharacter (line 121)', () => {
      const eng = new NarrativeEngine({ eventRegistry: new EventRegistry() });
      eng.startExperience('creation');
      expect(() => eng.farewellCharacter('moses')).toThrow('CharacterRegistry is required');
    });

    it('getCurrentLocation returns null when _events is null (line 132)', () => {
      // Engine has a session (via a temporary swap) but no events registry.
      const eng = new NarrativeEngine({
        eventRegistry: new EventRegistry(),
        locationRegistry: new LocationRegistry(),
      });
      eng.startExperience('creation');
      eng._events = null; // remove registry after session starts
      expect(eng.getCurrentLocation()).toBeNull();
    });

    it('getCurrentLocation returns null when _locations is null (line 134)', () => {
      // Engine has events but no locations registry.
      const eng = new NarrativeEngine({ eventRegistry: new EventRegistry() });
      eng.startExperience('creation');
      expect(eng.getCurrentLocation()).toBeNull();
    });
  });

  // ── constructor with no args (line 15 default = {}) ──────────────────────

  describe('constructor defaults', () => {
    it('accepts no arguments without throwing (line 15 default branch)', () => {
      expect(() => new NarrativeEngine()).not.toThrow();
    });
  });

  // ── hasMetCharacter with no session (line 159 optional chain) ────────────

  describe('hasMetCharacter with no session', () => {
    it('returns false when session is null (line 159 optional chain)', () => {
      const eng = new NarrativeEngine();
      expect(eng.hasMetCharacter('moses')).toBe(false);
    });
  });

  // ── _logStep edge case (line 175 conditional) ─────────────────────────────

  describe('_logStep', () => {
    it('does nothing when step is null (line 175 falsy branch)', () => {
      engine.startExperience('creation');
      expect(() => engine._logStep(null)).not.toThrow();
      expect(engine.getSession().stepHistory).toHaveLength(1); // only the first step logged on start
    });

    it('does nothing when session is null (line 175 session check)', () => {
      const eng = new NarrativeEngine();
      expect(() => eng._logStep({ stepId: 'x' })).not.toThrow();
    });
  });
});

// Patch for the "no duplicate in met list" test
NarrativeEngine.prototype.endInteractionForTest = function (characterId) {
  try { this._characters.endInteraction(characterId); } catch (_) {}
};
