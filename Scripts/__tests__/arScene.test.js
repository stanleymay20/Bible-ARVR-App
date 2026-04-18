const { ARScene } = require('../arScene');

const POS = { x: 0, y: 1.5, z: -2 };
const POS2 = { x: 1, y: 0, z: 0 };

describe('ARScene', () => {
  let scene;

  beforeEach(() => {
    scene = new ARScene();
  });

  // ── Lifecycle ────────────────────────────────────────────────────────────

  describe('start / stop', () => {
    it('starts inactive', () => {
      expect(scene.isActive).toBe(false);
    });

    it('becomes active after start()', () => {
      scene.start();
      expect(scene.isActive).toBe(true);
    });

    it('becomes inactive after stop()', () => {
      scene.start();
      scene.stop();
      expect(scene.isActive).toBe(false);
    });

    it('throws when starting an already-active scene', () => {
      scene.start();
      expect(() => scene.start()).toThrow('already active');
    });

    it('throws when stopping an inactive scene', () => {
      expect(() => scene.stop()).toThrow('not active');
    });
  });

  // ── addObject ────────────────────────────────────────────────────────────

  describe('addObject', () => {
    it('returns a numeric id', () => {
      const id = scene.addObject('light', POS);
      expect(typeof id).toBe('number');
    });

    it('assigns incrementing ids', () => {
      const id1 = scene.addObject('light', POS);
      const id2 = scene.addObject('model', POS2);
      expect(id2).toBe(id1 + 1);
    });

    it('increments objectCount', () => {
      scene.addObject('light', POS);
      scene.addObject('model', POS2);
      expect(scene.objectCount).toBe(2);
    });

    it('stores position as a copy', () => {
      const pos = { ...POS };
      const id = scene.addObject('light', pos);
      pos.x = 999;
      expect(scene.getObject(id).position.x).toBe(0);
    });

    it('throws for an empty type string', () => {
      expect(() => scene.addObject('', POS)).toThrow('type');
    });

    it('throws for a non-string type', () => {
      expect(() => scene.addObject(42, POS)).toThrow('type');
    });

    it('throws when a position axis is missing', () => {
      expect(() => scene.addObject('light', { x: 0, y: 0 })).toThrow('z');
    });

    it('throws when position is not an object', () => {
      expect(() => scene.addObject('light', null)).toThrow('Position');
    });
  });

  // ── removeObject ─────────────────────────────────────────────────────────

  describe('removeObject', () => {
    it('removes an existing object', () => {
      const id = scene.addObject('light', POS);
      scene.removeObject(id);
      expect(scene.getObject(id)).toBeNull();
      expect(scene.objectCount).toBe(0);
    });

    it('throws for an unknown id', () => {
      expect(() => scene.removeObject(999)).toThrow('id');
    });
  });

  // ── getObject ────────────────────────────────────────────────────────────

  describe('getObject', () => {
    it('returns the correct object', () => {
      const id = scene.addObject('model', POS, { label: 'tree' });
      const obj = scene.getObject(id);
      expect(obj).toMatchObject({ id, type: 'model', metadata: { label: 'tree' } });
    });

    it('returns null for a non-existent id', () => {
      expect(scene.getObject(999)).toBeNull();
    });
  });

  // ── placeVersePanel ──────────────────────────────────────────────────────

  describe('placeVersePanel', () => {
    it('adds a versePanel object with the right metadata', () => {
      const id = scene.placeVersePanel('John 3:16', 'For God so loved…', POS);
      const obj = scene.getObject(id);
      expect(obj.type).toBe('versePanel');
      expect(obj.metadata.verseRef).toBe('John 3:16');
      expect(obj.metadata.text).toBe('For God so loved…');
    });

    it('throws when verseRef is missing', () => {
      expect(() => scene.placeVersePanel('', 'text', POS)).toThrow('required');
    });

    it('throws when text is missing', () => {
      expect(() => scene.placeVersePanel('John 3:16', '', POS)).toThrow('required');
    });
  });

  // ── moveObject ───────────────────────────────────────────────────────────

  describe('moveObject', () => {
    it('updates the position of an existing object', () => {
      const id = scene.addObject('light', POS);
      scene.moveObject(id, POS2);
      expect(scene.getObject(id).position).toEqual(POS2);
    });

    it('throws for an unknown id', () => {
      expect(() => scene.moveObject(999, POS)).toThrow('id');
    });

    it('throws for an invalid new position', () => {
      const id = scene.addObject('light', POS);
      expect(() => scene.moveObject(id, { x: 'a', y: 0, z: 0 })).toThrow('x');
    });
  });

  // ── clearScene ───────────────────────────────────────────────────────────

  describe('clearScene', () => {
    it('removes all objects', () => {
      scene.addObject('light', POS);
      scene.addObject('model', POS2);
      scene.clearScene();
      expect(scene.objectCount).toBe(0);
    });

    it('is idempotent on an empty scene', () => {
      expect(() => scene.clearScene()).not.toThrow();
    });
  });

  // ── listObjects ──────────────────────────────────────────────────────────

  describe('listObjects', () => {
    it('returns copies of all objects', () => {
      scene.addObject('light', POS);
      scene.addObject('model', POS2);
      const list = scene.listObjects();
      expect(list).toHaveLength(2);
    });

    it('returns an empty array when scene is empty', () => {
      expect(scene.listObjects()).toEqual([]);
    });

    it('mutations to the returned list do not affect the scene', () => {
      const id = scene.addObject('light', POS);
      const list = scene.listObjects();
      list[0].type = 'tampered';
      expect(scene.getObject(id).type).toBe('light');
    });
  });
});
