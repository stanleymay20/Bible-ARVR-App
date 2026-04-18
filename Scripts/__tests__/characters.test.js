const { CharacterRegistry, CHARACTERS } = require('../characters');

describe('CharacterRegistry', () => {
  let registry;

  beforeEach(() => {
    registry = new CharacterRegistry();
  });

  // ── getCharacter ─────────────────────────────────────────────────────────

  describe('getCharacter', () => {
    it('returns a known character', () => {
      const moses = registry.getCharacter('moses');
      expect(moses).not.toBeNull();
      expect(moses.name).toBe('Moses');
      expect(moses.era).toBe('exodus');
    });

    it('returns null for an unknown character', () => {
      expect(registry.getCharacter('pharaoh_ramesses')).toBeNull();
    });
  });

  // ── getAllCharacters ──────────────────────────────────────────────────────

  describe('getAllCharacters', () => {
    it('returns all characters', () => {
      const all = registry.getAllCharacters();
      expect(all.length).toBeGreaterThanOrEqual(50);
    });

    it('every character has required fields', () => {
      registry.getAllCharacters().forEach(c => {
        expect(c).toHaveProperty('id');
        expect(c).toHaveProperty('name');
        expect(c).toHaveProperty('era');
        expect(c).toHaveProperty('dialogue');
      });
    });
  });

  // ── getCharactersByEra ────────────────────────────────────────────────────

  describe('getCharactersByEra', () => {
    it('returns characters for the exodus era', () => {
      const results = registry.getCharactersByEra('exodus');
      expect(results.some(c => c.id === 'moses')).toBe(true);
    });

    it('returns empty array for an era with no characters', () => {
      expect(registry.getCharactersByEra('nonexistent_era')).toHaveLength(0);
    });
  });

  // ── getCharactersByLocation ───────────────────────────────────────────────

  describe('getCharactersByLocation', () => {
    it('returns characters at jerusalem', () => {
      const results = registry.getCharactersByLocation('jerusalem');
      expect(results.some(c => c.id === 'jesus')).toBe(true);
      expect(results.some(c => c.id === 'david')).toBe(true);
    });

    it('returns empty array for a location with no characters', () => {
      expect(registry.getCharactersByLocation('nowhere')).toHaveLength(0);
    });
  });

  // ── getDialogueLine ───────────────────────────────────────────────────────

  describe('getDialogueLine', () => {
    it('returns the correct dialogue for a known context', () => {
      const line = registry.getDialogueLine('moses', 'onRedSea');
      expect(line).toContain('Do not be afraid');
    });

    it('falls back to greeting for an unknown context key', () => {
      const line = registry.getDialogueLine('moses', 'unknownContext');
      expect(line).toBe(registry.getDialogueLine('moses', 'greeting'));
    });

    it('throws for an unknown character', () => {
      expect(() => registry.getDialogueLine('unknown', 'greeting')).toThrow('Unknown character');
    });
  });

  // ── startInteraction ─────────────────────────────────────────────────────

  describe('startInteraction', () => {
    it('returns the greeting line', () => {
      const greeting = registry.startInteraction('moses');
      expect(typeof greeting).toBe('string');
      expect(greeting.length).toBeGreaterThan(0);
    });

    it('marks the interaction as active', () => {
      registry.startInteraction('david');
      expect(registry.isInteractionActive('david')).toBe(true);
    });

    it('records start time', () => {
      const before = Date.now();
      registry.startInteraction('moses');
      const state = registry.getInteractionState('moses');
      expect(state.startedAt).toBeGreaterThanOrEqual(before);
    });

    it('throws for an unknown character', () => {
      expect(() => registry.startInteraction('unknown')).toThrow('Unknown character');
    });
  });

  // ── recordDialogue ────────────────────────────────────────────────────────

  describe('recordDialogue', () => {
    beforeEach(() => registry.startInteraction('jesus'));

    it('returns the dialogue line', () => {
      const line = registry.recordDialogue('jesus', 'onSermon');
      expect(line).toContain('Blessed');
    });

    it('appends to dialogue history', () => {
      registry.recordDialogue('jesus', 'onSermon');
      registry.recordDialogue('jesus', 'onMiracle');
      const state = registry.getInteractionState('jesus');
      expect(state.dialogueHistory).toHaveLength(2);
    });

    it('throws if no active interaction', () => {
      expect(() => registry.recordDialogue('moses', 'greeting')).toThrow('No active interaction');
    });
  });

  // ── endInteraction ────────────────────────────────────────────────────────

  describe('endInteraction', () => {
    it('returns the farewell line', () => {
      registry.startInteraction('paul');
      const farewell = registry.endInteraction('paul');
      expect(farewell).toContain('I have fought');
    });

    it('marks the interaction as inactive', () => {
      registry.startInteraction('noah');
      registry.endInteraction('noah');
      expect(registry.isInteractionActive('noah')).toBe(false);
    });

    it('throws when no active interaction exists', () => {
      expect(() => registry.endInteraction('abraham')).toThrow('No active interaction');
    });
  });

  // ── getRelationships ──────────────────────────────────────────────────────

  describe('getRelationships', () => {
    it('returns the relationships object', () => {
      const rels = registry.getRelationships('moses');
      expect(rels).toHaveProperty('mentor');
      expect(rels.mentor).toBe('jethro');
    });

    it('throws for an unknown character', () => {
      expect(() => registry.getRelationships('unknown')).toThrow('Unknown character');
    });
  });

  // ── isInteractionActive ───────────────────────────────────────────────────

  describe('isInteractionActive', () => {
    it('returns false before any interaction', () => {
      expect(registry.isInteractionActive('moses')).toBe(false);
    });
  });

  // ── getInteractionState null branch (line 195) ────────────────────────────

  describe('getInteractionState', () => {
    it('returns null for a character that has never been interacted with (line 195 ?? null)', () => {
      expect(registry.getInteractionState('abraham')).toBeNull();
    });
  });
});
