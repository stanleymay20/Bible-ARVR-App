/**
 * User state management — bookmarks, reading progress, and session tracking.
 */

class UserState {
  constructor() {
    this._bookmarks = new Map(); // key: "Book chapter:verse"
    this._readingProgress = {}; // { [book]: lastChapterRead }
    this._currentVerse = null;
    this._readingHistory = [];
  }

  // ── Bookmarks ────────────────────────────────────────────────────────────

  addBookmark(book, chapter, verse, note = '') {
    this._validateRef(book, chapter, verse);
    const key = this._refKey(book, chapter, verse);
    if (this._bookmarks.has(key)) {
      throw new Error(`Verse ${key} is already bookmarked`);
    }
    this._bookmarks.set(key, { book, chapter, verse, note, addedAt: Date.now() });
    return key;
  }

  removeBookmark(book, chapter, verse) {
    const key = this._refKey(book, chapter, verse);
    if (!this._bookmarks.has(key)) {
      throw new Error(`No bookmark found for ${key}`);
    }
    this._bookmarks.delete(key);
  }

  isBookmarked(book, chapter, verse) {
    return this._bookmarks.has(this._refKey(book, chapter, verse));
  }

  getBookmarks() {
    return Array.from(this._bookmarks.values()).sort((a, b) => a.addedAt - b.addedAt);
  }

  clearBookmarks() {
    this._bookmarks.clear();
  }

  // ── Reading Progress ─────────────────────────────────────────────────────

  updateProgress(book, chapter) {
    if (!book || typeof book !== 'string') {
      throw new Error('Book must be a non-empty string');
    }
    if (!Number.isInteger(chapter) || chapter < 1) {
      throw new Error('Chapter must be a positive integer');
    }
    const prev = this._readingProgress[book] ?? 0;
    if (chapter > prev) {
      this._readingProgress[book] = chapter;
    }
  }

  getProgress(book) {
    return this._readingProgress[book] ?? 0;
  }

  getAllProgress() {
    return { ...this._readingProgress };
  }

  // ── Current Verse & History ──────────────────────────────────────────────

  setCurrentVerse(book, chapter, verse) {
    this._validateRef(book, chapter, verse);
    this._currentVerse = { book, chapter, verse };
    this._readingHistory.push({ ...this._currentVerse, viewedAt: Date.now() });
    this.updateProgress(book, chapter);
  }

  getCurrentVerse() {
    return this._currentVerse ? { ...this._currentVerse } : null;
  }

  getReadingHistory() {
    return [...this._readingHistory];
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  _refKey(book, chapter, verse) {
    return `${book} ${chapter}:${verse}`;
  }

  _validateRef(book, chapter, verse) {
    if (!book || typeof book !== 'string') {
      throw new Error('Book must be a non-empty string');
    }
    if (!Number.isInteger(chapter) || chapter < 1) {
      throw new Error('Chapter must be a positive integer');
    }
    if (!Number.isInteger(verse) || verse < 1) {
      throw new Error('Verse must be a positive integer');
    }
  }
}

module.exports = { UserState };
