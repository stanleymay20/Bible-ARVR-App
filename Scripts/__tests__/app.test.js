const { createExperience } = require('../app');
const { NarrativeEngine } = require('../narrative');
const { ARScene } = require('../arScene');
const { UserState } = require('../userState');

describe('createExperience', () => {
  describe('return shape', () => {
    it('returns an engine, scene, and userState', () => {
      const { engine, scene, userState } = createExperience('creation');
      expect(engine).toBeInstanceOf(NarrativeEngine);
      expect(scene).toBeInstanceOf(ARScene);
      expect(userState).toBeInstanceOf(UserState);
    });

    it('returns the session object', () => {
      const { session } = createExperience('creation');
      expect(session).toHaveProperty('id');
      expect(session.eventId).toBe('creation');
    });

    it('returns the event definition', () => {
      const { event } = createExperience('creation');
      expect(event.id).toBe('creation');
      expect(event.era).toBe('creation');
    });

    it('returns the first step of the event', () => {
      const { currentStep } = createExperience('creation');
      expect(currentStep).not.toBeNull();
      expect(currentStep.stepId).toBe('day1');
    });
  });

  describe('engine wiring', () => {
    it('session status is in_experience immediately', () => {
      const { engine } = createExperience('creation');
      expect(engine.getSessionStatus()).toBe('in_experience');
    });

    it('engine can advance steps', () => {
      const { engine } = createExperience('creation');
      const step = engine.advanceExperience();
      expect(step.stepId).toBe('day2');
    });

    it('engine can meet a character from the event cast', () => {
      const { engine } = createExperience('parting_red_sea');
      const greeting = engine.meetCharacter('moses');
      expect(typeof greeting).toBe('string');
      expect(greeting.length).toBeGreaterThan(0);
    });

    it('engine tracks characters met in the session', () => {
      const { engine } = createExperience('parting_red_sea');
      engine.meetCharacter('moses');
      expect(engine.hasMetCharacter('moses')).toBe(true);
    });

    it('engine returns location ambience from the event location', () => {
      const { engine } = createExperience('parting_red_sea');
      const ambience = engine.getLocationAmbience();
      expect(typeof ambience).toBe('string');
      expect(ambience.length).toBeGreaterThan(0);
    });

    it('engine can end the experience', () => {
      const { engine } = createExperience('creation');
      const completed = engine.endExperience();
      expect(completed.status).toBe('completed');
    });
  });

  describe('isolation', () => {
    it('each call returns independent instances', () => {
      const a = createExperience('creation');
      const b = createExperience('great_flood');
      expect(a.engine).not.toBe(b.engine);
      expect(a.scene).not.toBe(b.scene);
      expect(a.userState).not.toBe(b.userState);
    });

    it('scene is independent from engine — objects can be added freely', () => {
      const { scene } = createExperience('creation');
      const id = scene.addObject('character', { x: 0, y: 0, z: 0 });
      expect(scene.objectCount).toBe(1);
      scene.removeObject(id);
      expect(scene.objectCount).toBe(0);
    });

    it('userState is independent — bookmarks work immediately', () => {
      const { userState } = createExperience('creation');
      userState.addBookmark('Genesis', 1, 1);
      expect(userState.isBookmarked('Genesis', 1, 1)).toBe(true);
    });
  });

  describe('error handling', () => {
    it('throws for an unknown event id', () => {
      expect(() => createExperience('unknown_event')).toThrow('Unknown event');
    });
  });
});
