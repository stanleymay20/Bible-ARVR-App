/**
 * Narrative engine — orchestrates the full immersive experience:
 * transporting the user to a location, triggering events, meeting characters,
 * and tracking session progress like a Superbook-style story engine.
 */

const SESSION_STATUS = {
  IDLE: 'idle',
  IN_EXPERIENCE: 'in_experience',
  PAUSED: 'paused',
  COMPLETED: 'completed',
};

class NarrativeEngine {
  constructor({ characterRegistry, eventRegistry, locationRegistry, timeline } = {}) {
    this._characters = characterRegistry;
    this._events = eventRegistry;
    this._locations = locationRegistry;
    this._timeline = timeline;

    this._session = null;
    this._sessionLog = [];
  }

  // ── Session lifecycle ────────────────────────────────────────────────────

  startExperience(eventId) {
    if (!this._events) throw new Error('EventRegistry is required');
    if (this._session?.status === SESSION_STATUS.IN_EXPERIENCE) {
      throw new Error('An experience is already in progress. End it before starting a new one.');
    }

    const event = this._events.getEvent(eventId);
    if (!event) throw new Error(`Unknown event: "${eventId}"`);

    this._session = {
      id: `session_${Date.now()}`,
      eventId,
      status: SESSION_STATUS.IN_EXPERIENCE,
      startedAt: Date.now(),
      charactersMet: [],
      dialogueLog: [],
      stepHistory: [],
      completedAt: null,
    };

    // Navigate timeline to the event's era
    if (this._timeline) {
      try { this._timeline.navigateTo(event.era); } catch (_) { /* era may not exist */ }
    }

    // Start the event
    const firstStep = this._events.startEvent(eventId);
    this._logStep(firstStep);

    this._sessionLog.push({ type: 'experience_started', eventId, at: Date.now() });
    return { session: { ...this._session }, currentStep: firstStep, event };
  }

  advanceExperience() {
    this._requireActiveSession();
    try {
      const step = this._events.advanceStep();
      this._logStep(step);
      return step;
    } catch (err) {
      throw new Error(`Cannot advance: ${err.message}`);
    }
  }

  endExperience() {
    this._requireActiveSession();
    const completedEventId = this._events.endEvent();
    this._session.status = SESSION_STATUS.COMPLETED;
    this._session.completedAt = Date.now();
    this._sessionLog.push({ type: 'experience_ended', eventId: completedEventId, at: Date.now() });
    return { ...this._session };
  }

  pauseExperience() {
    this._requireActiveSession();
    this._session.status = SESSION_STATUS.PAUSED;
  }

  resumeExperience() {
    if (this._session?.status !== SESSION_STATUS.PAUSED) {
      throw new Error('No paused experience to resume');
    }
    this._session.status = SESSION_STATUS.IN_EXPERIENCE;
  }

  // ── Character interactions ───────────────────────────────────────────────

  meetCharacter(characterId) {
    this._requireActiveSession();
    if (!this._characters) throw new Error('CharacterRegistry is required');

    const greeting = this._characters.startInteraction(characterId);

    if (!this._session.charactersMet.includes(characterId)) {
      this._session.charactersMet.push(characterId);
    }

    this._session.dialogueLog.push({ characterId, contextKey: 'greeting', line: greeting, at: Date.now() });
    this._sessionLog.push({ type: 'character_met', characterId, at: Date.now() });

    return greeting;
  }

  promptCharacter(characterId, contextKey) {
    this._requireActiveSession();
    if (!this._characters) throw new Error('CharacterRegistry is required');

    const line = this._characters.recordDialogue(characterId, contextKey);
    this._session.dialogueLog.push({ characterId, contextKey, line, at: Date.now() });
    return line;
  }

  farewellCharacter(characterId) {
    this._requireActiveSession();
    if (!this._characters) throw new Error('CharacterRegistry is required');

    const farewell = this._characters.endInteraction(characterId);
    this._session.dialogueLog.push({ characterId, contextKey: 'farewell', line: farewell, at: Date.now() });
    return farewell;
  }

  // ── Location ─────────────────────────────────────────────────────────────

  getCurrentLocation() {
    if (!this._session) return null;
    if (!this._events) return null;
    const event = this._events.getEvent(this._session.eventId);
    if (!event || !this._locations) return null;
    return this._locations.getLocation(event.location);
  }

  getLocationAmbience() {
    const loc = this.getCurrentLocation();
    if (!loc) return null;
    return loc.ambience;
  }

  // ── Session queries ──────────────────────────────────────────────────────

  getSession() {
    return this._session ? { ...this._session } : null;
  }

  getSessionLog() {
    return [...this._sessionLog];
  }

  getSessionStatus() {
    return this._session?.status ?? SESSION_STATUS.IDLE;
  }

  hasMetCharacter(characterId) {
    return this._session?.charactersMet.includes(characterId) ?? false;
  }

  getDialogueLog() {
    return this._session ? [...this._session.dialogueLog] : [];
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  _requireActiveSession() {
    if (this._session?.status !== SESSION_STATUS.IN_EXPERIENCE) {
      throw new Error('No active experience in progress');
    }
  }

  _logStep(step) {
    if (step && this._session) {
      this._session.stepHistory.push({ ...step, enteredAt: Date.now() });
    }
  }
}

module.exports = { NarrativeEngine, SESSION_STATUS };
