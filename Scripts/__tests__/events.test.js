const { EventRegistry, BIBLICAL_EVENTS, ERA_ORDER } = require('../events');

describe('EventRegistry', () => {
  let registry;

  beforeEach(() => {
    registry = new EventRegistry();
  });

  // ── getEvent ──────────────────────────────────────────────────────────────

  describe('getEvent', () => {
    it('returns a known event', () => {
      const event = registry.getEvent('parting_red_sea');
      expect(event).not.toBeNull();
      expect(event.title).toBe('Parting of the Red Sea');
    });

    it('returns null for an unknown event', () => {
      expect(registry.getEvent('battle_of_hogwarts')).toBeNull();
    });
  });

  // ── getAllEvents ──────────────────────────────────────────────────────────

  describe('getAllEvents', () => {
    it('returns all registered events', () => {
      expect(registry.getAllEvents().length).toBeGreaterThanOrEqual(9);
    });

    it('every event has steps', () => {
      registry.getAllEvents().forEach(e => {
        expect(Array.isArray(e.steps)).toBe(true);
        expect(e.steps.length).toBeGreaterThan(0);
      });
    });
  });

  // ── getEventsByEra ────────────────────────────────────────────────────────

  describe('getEventsByEra', () => {
    it('returns exodus era events', () => {
      const events = registry.getEventsByEra('exodus');
      expect(events.length).toBeGreaterThanOrEqual(3);
      events.forEach(e => expect(e.era).toBe('exodus'));
    });

    it('returns empty array for an unknown era', () => {
      expect(registry.getEventsByEra('medieval')).toHaveLength(0);
    });
  });

  // ── getEventsByCategory ───────────────────────────────────────────────────

  describe('getEventsByCategory', () => {
    it('returns deliverance category events', () => {
      const events = registry.getEventsByCategory('deliverance');
      expect(events.some(e => e.id === 'parting_red_sea')).toBe(true);
    });

    it('returns empty array for an unknown category', () => {
      expect(registry.getEventsByCategory('romance')).toHaveLength(0);
    });
  });

  // ── getEventsByCharacter ──────────────────────────────────────────────────

  describe('getEventsByCharacter', () => {
    it('returns events involving moses', () => {
      const events = registry.getEventsByCharacter('moses');
      expect(events.length).toBeGreaterThanOrEqual(3);
      events.forEach(e => expect(e.characters).toContain('moses'));
    });

    it('returns empty array for a character with no events', () => {
      expect(registry.getEventsByCharacter('unknown_person')).toHaveLength(0);
    });
  });

  // ── getEventsByLocation ───────────────────────────────────────────────────

  describe('getEventsByLocation', () => {
    it('returns events at jerusalem', () => {
      const events = registry.getEventsByLocation('jerusalem');
      expect(events.some(e => e.id === 'resurrection')).toBe(true);
    });
  });

  // ── startEvent ───────────────────────────────────────────────────────────

  describe('startEvent', () => {
    it('returns the first step', () => {
      const step = registry.startEvent('creation');
      expect(step).not.toBeNull();
      expect(step.stepId).toBe('day1');
    });

    it('sets the active event', () => {
      registry.startEvent('great_flood');
      expect(registry.getActiveEvent().id).toBe('great_flood');
    });

    it('throws for an unknown event', () => {
      expect(() => registry.startEvent('unknown')).toThrow('Unknown event');
    });

    it('throws when an event is already active', () => {
      registry.startEvent('creation');
      expect(() => registry.startEvent('great_flood')).toThrow('already active');
    });
  });

  // ── getCurrentStep ────────────────────────────────────────────────────────

  describe('getCurrentStep', () => {
    it('returns null when no event is active', () => {
      expect(registry.getCurrentStep()).toBeNull();
    });

    it('returns the first step after starting', () => {
      registry.startEvent('parting_red_sea');
      const step = registry.getCurrentStep();
      expect(step.stepId).toBe('pursued');
    });

    it('returns null when currentStepIndex is out of bounds (line 262 ?? null)', () => {
      // Directly manipulate internal state to simulate an out-of-bounds index.
      registry.startEvent('creation');
      registry._currentStepIndex = 999;
      expect(registry.getCurrentStep()).toBeNull();
    });
  });

  // ── advanceStep ───────────────────────────────────────────────────────────

  describe('advanceStep', () => {
    it('moves to the next step', () => {
      registry.startEvent('parting_red_sea');
      const step = registry.advanceStep();
      expect(step.stepId).toBe('staff_raised');
    });

    it('throws when already on the last step', () => {
      registry.startEvent('david_and_goliath');
      // advance to last step
      const count = registry.getStepCount('david_and_goliath');
      for (let i = 1; i < count; i++) registry.advanceStep();
      expect(() => registry.advanceStep()).toThrow('final step');
    });

    it('throws when no event is active', () => {
      expect(() => registry.advanceStep()).toThrow('No active event');
    });
  });

  // ── endEvent ─────────────────────────────────────────────────────────────

  describe('endEvent', () => {
    it('marks the event as completed', () => {
      registry.startEvent('birth_of_jesus');
      registry.endEvent();
      expect(registry.isEventCompleted('birth_of_jesus')).toBe(true);
    });

    it('clears the active event', () => {
      registry.startEvent('pentecost');
      registry.endEvent();
      expect(registry.getActiveEvent()).toBeNull();
    });

    it('throws when no event is active', () => {
      expect(() => registry.endEvent()).toThrow('No active event');
    });

    it('allows a new event to start after completion', () => {
      registry.startEvent('creation');
      registry.endEvent();
      expect(() => registry.startEvent('great_flood')).not.toThrow();
    });
  });

  // ── getStepCount ──────────────────────────────────────────────────────────

  describe('getStepCount', () => {
    it('returns the correct number of steps', () => {
      expect(registry.getStepCount('creation')).toBe(7);
      expect(registry.getStepCount('exodus_plagues')).toBe(10);
    });

    it('throws for an unknown event', () => {
      expect(() => registry.getStepCount('unknown')).toThrow('Unknown event');
    });
  });

  // ── ERA_ORDER ─────────────────────────────────────────────────────────────

  describe('getEraOrder', () => {
    it('returns a copy of the era order array', () => {
      const order = registry.getEraOrder();
      expect(Array.isArray(order)).toBe(true);
      expect(order[0]).toBe('creation');
    });
  });
});
