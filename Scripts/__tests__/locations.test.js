const { LocationRegistry, LOCATIONS } = require('../locations');

describe('LocationRegistry', () => {
  let registry;

  beforeEach(() => {
    registry = new LocationRegistry();
  });

  // ── getLocation ───────────────────────────────────────────────────────────

  describe('getLocation', () => {
    it('returns a known location', () => {
      const loc = registry.getLocation('jerusalem');
      expect(loc).not.toBeNull();
      expect(loc.name).toBe('Jerusalem');
    });

    it('returns null for an unknown location', () => {
      expect(registry.getLocation('atlantis')).toBeNull();
    });
  });

  // ── getAllLocations ───────────────────────────────────────────────────────

  describe('getAllLocations', () => {
    it('returns all locations', () => {
      expect(registry.getAllLocations().length).toBeGreaterThanOrEqual(35);
    });

    it('every location has required fields', () => {
      registry.getAllLocations().forEach(l => {
        expect(l).toHaveProperty('id');
        expect(l).toHaveProperty('name');
        expect(l).toHaveProperty('description');
        expect(l).toHaveProperty('ambience');
      });
    });
  });

  // ── getLocationsByEra ─────────────────────────────────────────────────────

  describe('getLocationsByEra', () => {
    it('returns locations for the exodus era', () => {
      const locs = registry.getLocationsByEra('exodus');
      expect(locs.some(l => l.id === 'sinai')).toBe(true);
    });

    it('returns empty array for an unknown era', () => {
      expect(registry.getLocationsByEra('space_age')).toHaveLength(0);
    });
  });

  // ── getLocationsByEnvironment ─────────────────────────────────────────────

  describe('getLocationsByEnvironment', () => {
    it('returns mountain locations', () => {
      const locs = registry.getLocationsByEnvironment('mountain');
      expect(locs.some(l => l.id === 'sinai')).toBe(true);
      expect(locs.some(l => l.id === 'ararat')).toBe(true);
    });

    it('returns empty array for a non-existent type', () => {
      expect(registry.getLocationsByEnvironment('underwater_base')).toHaveLength(0);
    });
  });

  // ── getLocationsByEvent ───────────────────────────────────────────────────

  describe('getLocationsByEvent', () => {
    it('returns the location associated with parting_red_sea', () => {
      const locs = registry.getLocationsByEvent('parting_red_sea');
      expect(locs.some(l => l.id === 'red_sea')).toBe(true);
    });

    it('returns empty array when no location is linked to the event', () => {
      expect(registry.getLocationsByEvent('unknown_event')).toHaveLength(0);
    });
  });

  // ── getLocationsByCharacter ───────────────────────────────────────────────

  describe('getLocationsByCharacter', () => {
    it('returns locations for moses', () => {
      const locs = registry.getLocationsByCharacter('moses');
      expect(locs.length).toBeGreaterThan(0);
      locs.forEach(l => expect(l.associatedCharacters).toContain('moses'));
    });

    it('returns empty array for an unknown character', () => {
      expect(registry.getLocationsByCharacter('unknown_person')).toHaveLength(0);
    });
  });

  // ── getRealWorldLocations ─────────────────────────────────────────────────

  describe('getRealWorldLocations', () => {
    it('returns only locations with real coordinates', () => {
      const real = registry.getRealWorldLocations();
      real.forEach(l => {
        expect(l.coordinates).not.toBeNull();
        expect(typeof l.coordinates.lat).toBe('number');
        expect(typeof l.coordinates.lng).toBe('number');
      });
    });

    it('excludes Eden (symbolic, no coordinates)', () => {
      const real = registry.getRealWorldLocations();
      expect(real.some(l => l.id === 'eden')).toBe(false);
    });
  });

  // ── getAmbience ───────────────────────────────────────────────────────────

  describe('getAmbience', () => {
    it('returns ambience string for a known location', () => {
      const ambience = registry.getAmbience('bethlehem');
      expect(typeof ambience).toBe('string');
      expect(ambience.length).toBeGreaterThan(0);
    });

    it('throws for an unknown location', () => {
      expect(() => registry.getAmbience('nowhere')).toThrow('Unknown location');
    });
  });

  // ── getDistance ───────────────────────────────────────────────────────────

  describe('getDistance', () => {
    it('returns a number (km) between two real locations', () => {
      const dist = registry.getDistance('jerusalem', 'bethlehem');
      expect(typeof dist).toBe('number');
      expect(dist).toBeGreaterThan(0);
      expect(dist).toBeLessThan(20); // ~9 km apart
    });

    it('returns null when either location has no coordinates', () => {
      expect(registry.getDistance('eden', 'jerusalem')).toBeNull();
      expect(registry.getDistance('jerusalem', 'eden')).toBeNull();
    });

    it('throws for an unknown location (first arg)', () => {
      expect(() => registry.getDistance('narnia', 'jerusalem')).toThrow('Unknown location');
    });

    it('throws for an unknown location (second arg — line 219 guard)', () => {
      expect(() => registry.getDistance('jerusalem', 'narnia')).toThrow('Unknown location');
    });

    it('distance is symmetric', () => {
      const ab = registry.getDistance('jerusalem', 'bethlehem');
      const ba = registry.getDistance('bethlehem', 'jerusalem');
      expect(Math.abs(ab - ba)).toBeLessThan(0.001);
    });
  });
});
