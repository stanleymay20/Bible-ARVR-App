const { Timeline, ERAS } = require('../timeline');

describe('Timeline', () => {
  let timeline;

  beforeEach(() => {
    timeline = new Timeline();
  });

  // ── getAllEras ────────────────────────────────────────────────────────────

  describe('getAllEras', () => {
    it('returns all 12 eras', () => {
      expect(timeline.getAllEras()).toHaveLength(12);
    });

    it('eras are sorted by order', () => {
      const eras = timeline.getAllEras();
      for (let i = 1; i < eras.length; i++) {
        expect(eras[i].order).toBeGreaterThan(eras[i - 1].order);
      }
    });

    it('returns copies so mutations are isolated', () => {
      const eras = timeline.getAllEras();
      eras[0].label = 'tampered';
      expect(timeline.getAllEras()[0].label).not.toBe('tampered');
    });
  });

  // ── getEra ────────────────────────────────────────────────────────────────

  describe('getEra', () => {
    it('returns a known era', () => {
      const era = timeline.getEra('exodus');
      expect(era).not.toBeNull();
      expect(era.label).toBe('The Exodus');
    });

    it('returns null for an unknown era', () => {
      expect(timeline.getEra('dark_ages')).toBeNull();
    });
  });

  // ── getCurrentEra ─────────────────────────────────────────────────────────

  describe('getCurrentEra', () => {
    it('starts at creation (order 0)', () => {
      expect(timeline.getCurrentEra().id).toBe('creation');
    });
  });

  // ── navigateTo ────────────────────────────────────────────────────────────

  describe('navigateTo', () => {
    it('navigates to a specific era', () => {
      timeline.navigateTo('new_testament');
      expect(timeline.getCurrentEra().id).toBe('new_testament');
    });

    it('throws for an unknown era', () => {
      expect(() => timeline.navigateTo('future')).toThrow('Unknown era');
    });

    it('returns the era object', () => {
      const era = timeline.navigateTo('exodus');
      expect(era.id).toBe('exodus');
    });
  });

  // ── nextEra / previousEra ─────────────────────────────────────────────────

  describe('nextEra', () => {
    it('advances to the next era', () => {
      timeline.nextEra();
      expect(timeline.getCurrentEra().id).toBe('antediluvian');
    });

    it('throws at the last era', () => {
      timeline.navigateTo('early_church');
      expect(() => timeline.nextEra()).toThrow('last era');
    });
  });

  describe('previousEra', () => {
    it('goes back to the previous era', () => {
      timeline.navigateTo('patriarchs');
      timeline.previousEra();
      expect(timeline.getCurrentEra().id).toBe('antediluvian');
    });

    it('throws at the first era', () => {
      expect(() => timeline.previousEra()).toThrow('first era');
    });
  });

  // ── getErasBefore / getErasAfter ──────────────────────────────────────────

  describe('getErasBefore', () => {
    it('returns all eras before exodus', () => {
      const before = timeline.getErasBefore('exodus');
      expect(before.every(e => e.order < 3)).toBe(true);
      expect(before.some(e => e.id === 'creation')).toBe(true);
    });

    it('returns empty array for the first era', () => {
      expect(timeline.getErasBefore('creation')).toHaveLength(0);
    });

    it('throws for an unknown era', () => {
      expect(() => timeline.getErasBefore('unknown')).toThrow('Unknown era');
    });
  });

  describe('getErasAfter', () => {
    it('returns all eras after early_church — should be none', () => {
      expect(timeline.getErasAfter('early_church')).toHaveLength(0);
    });

    it('returns eras after exodus', () => {
      const after = timeline.getErasAfter('exodus');
      expect(after.some(e => e.id === 'new_testament')).toBe(true);
    });

    it('throws for an unknown era', () => {
      expect(() => timeline.getErasAfter('unknown')).toThrow('Unknown era');
    });
  });

  // ── getEraForYear ─────────────────────────────────────────────────────────

  describe('getEraForYear', () => {
    it('finds the correct era for a year in the exodus range', () => {
      const era = timeline.getEraForYear(-1446);
      expect(era.id).toBe('exodus');
    });

    it('finds the new_testament era for AD 1', () => {
      const era = timeline.getEraForYear(1);
      expect(era.id).toBe('new_testament');
    });

    it('returns null for a year that falls outside all ranges', () => {
      expect(timeline.getEraForYear(-5000)).toBeNull();
    });

    it('returns null for creation era (no date range)', () => {
      expect(timeline.getEraForYear(-99999)).toBeNull();
    });
  });

  // ── testament helpers ─────────────────────────────────────────────────────

  describe('isOldTestamentEra', () => {
    it('returns true for an OT era', () => {
      expect(timeline.isOldTestamentEra('exodus')).toBe(true);
      expect(timeline.isOldTestamentEra('creation')).toBe(true);
    });

    it('returns false for a NT era', () => {
      expect(timeline.isOldTestamentEra('new_testament')).toBe(false);
      expect(timeline.isOldTestamentEra('early_church')).toBe(false);
    });
  });

  describe('isNewTestamentEra', () => {
    it('returns true for NT eras', () => {
      expect(timeline.isNewTestamentEra('new_testament')).toBe(true);
      expect(timeline.isNewTestamentEra('early_church')).toBe(true);
    });

    it('returns false for OT eras', () => {
      expect(timeline.isNewTestamentEra('exodus')).toBe(false);
    });
  });
});
