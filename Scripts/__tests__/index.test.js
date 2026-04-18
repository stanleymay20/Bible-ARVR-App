const index = require('../index');

describe('index.js public exports', () => {
  const expectedExports = [
    'BibleApiClient', 'BIBLE_IDS', 'DEFAULT_BIBLE_ID', 'BASE_URL',
    'BibleData', 'BOOKS',
    'CharacterRegistry', 'CHARACTERS',
    'EventRegistry', 'BIBLICAL_EVENTS', 'ERA_ORDER',
    'LocationRegistry', 'LOCATIONS',
    'NarrativeEngine', 'SESSION_STATUS',
    'Timeline', 'ERAS',
    'UserState',
    'ARScene',
  ];

  it('exports all expected names', () => {
    expectedExports.forEach(name => {
      expect(index).toHaveProperty(name);
    });
  });

  it('exports are not undefined', () => {
    expectedExports.forEach(name => {
      expect(index[name]).toBeDefined();
    });
  });

  it('registry classes are constructable', () => {
    const { CharacterRegistry, EventRegistry, LocationRegistry, NarrativeEngine } = index;
    expect(() => new CharacterRegistry()).not.toThrow();
    expect(() => new EventRegistry()).not.toThrow();
    expect(() => new LocationRegistry()).not.toThrow();
    expect(() => new NarrativeEngine()).not.toThrow();
  });
});
