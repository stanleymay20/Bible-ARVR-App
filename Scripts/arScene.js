/**
 * AR/VR scene management — object placement, verse panels, and scene lifecycle.
 */

class ARScene {
  constructor() {
    this._objects = new Map();
    this._isActive = false;
    this._nextId = 1;
  }

  get isActive() {
    return this._isActive;
  }

  get objectCount() {
    return this._objects.size;
  }

  start() {
    if (this._isActive) {
      throw new Error('Scene is already active');
    }
    this._isActive = true;
  }

  stop() {
    if (!this._isActive) {
      throw new Error('Scene is not active');
    }
    this._isActive = false;
  }

  addObject(type, position, metadata = {}) {
    if (!type || typeof type !== 'string') {
      throw new Error('Object type must be a non-empty string');
    }
    this._validatePosition(position);

    const id = this._nextId++;
    const obj = { id, type, position: { ...position }, metadata: { ...metadata } };
    this._objects.set(id, obj);
    return id;
  }

  removeObject(id) {
    if (!this._objects.has(id)) {
      throw new Error(`No object with id: ${id}`);
    }
    this._objects.delete(id);
  }

  getObject(id) {
    return this._objects.get(id) ?? null;
  }

  placeVersePanel(verseRef, text, position) {
    if (!verseRef || !text) {
      throw new Error('verseRef and text are required for a verse panel');
    }
    this._validatePosition(position);

    return this.addObject('versePanel', position, { verseRef, text });
  }

  moveObject(id, newPosition) {
    const obj = this._objects.get(id);
    if (!obj) {
      throw new Error(`No object with id: ${id}`);
    }
    this._validatePosition(newPosition);
    obj.position = { ...newPosition };
  }

  clearScene() {
    this._objects.clear();
  }

  listObjects() {
    return Array.from(this._objects.values()).map(o => ({ ...o }));
  }

  _validatePosition(position) {
    if (!position || typeof position !== 'object') {
      throw new Error('Position must be an object with x, y, z coordinates');
    }
    for (const axis of ['x', 'y', 'z']) {
      if (typeof position[axis] !== 'number') {
        throw new Error(`Position.${axis} must be a number`);
      }
    }
  }
}

module.exports = { ARScene };
