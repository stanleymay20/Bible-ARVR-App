const { UserState } = require('../userState');

describe('UserState', () => {
  let state;

  beforeEach(() => {
    state = new UserState();
  });

  // ── Bookmarks ────────────────────────────────────────────────────────────

  describe('addBookmark', () => {
    it('adds a bookmark and returns its key', () => {
      const key = state.addBookmark('John', 3, 16);
      expect(key).toBe('John 3:16');
    });

    it('stored bookmark has correct fields', () => {
      state.addBookmark('Genesis', 1, 1, 'Creation');
      const [bm] = state.getBookmarks();
      expect(bm).toMatchObject({ book: 'Genesis', chapter: 1, verse: 1, note: 'Creation' });
      expect(typeof bm.addedAt).toBe('number');
    });

    it('throws when bookmarking the same verse twice', () => {
      state.addBookmark('John', 3, 16);
      expect(() => state.addBookmark('John', 3, 16)).toThrow('already bookmarked');
    });

    it('throws for an invalid chapter', () => {
      expect(() => state.addBookmark('John', 0, 1)).toThrow('Chapter');
    });

    it('throws for a non-integer verse', () => {
      expect(() => state.addBookmark('John', 3, 1.5)).toThrow('Verse');
    });

    it('throws for an empty book name', () => {
      expect(() => state.addBookmark('', 3, 16)).toThrow('Book');
    });
  });

  describe('removeBookmark', () => {
    it('removes an existing bookmark', () => {
      state.addBookmark('John', 3, 16);
      state.removeBookmark('John', 3, 16);
      expect(state.isBookmarked('John', 3, 16)).toBe(false);
    });

    it('throws when the bookmark does not exist', () => {
      expect(() => state.removeBookmark('John', 3, 16)).toThrow('No bookmark');
    });
  });

  describe('isBookmarked', () => {
    it('returns true for a bookmarked verse', () => {
      state.addBookmark('Romans', 8, 28);
      expect(state.isBookmarked('Romans', 8, 28)).toBe(true);
    });

    it('returns false for a verse that is not bookmarked', () => {
      expect(state.isBookmarked('Romans', 8, 28)).toBe(false);
    });
  });

  describe('getBookmarks', () => {
    it('returns bookmarks sorted by addedAt (oldest first)', () => {
      state.addBookmark('Genesis', 1, 1);
      state.addBookmark('John', 3, 16);
      const bms = state.getBookmarks();
      expect(bms[0].book).toBe('Genesis');
      expect(bms[1].book).toBe('John');
    });

    it('returns an empty array when no bookmarks exist', () => {
      expect(state.getBookmarks()).toEqual([]);
    });
  });

  describe('clearBookmarks', () => {
    it('removes all bookmarks', () => {
      state.addBookmark('John', 3, 16);
      state.addBookmark('Romans', 8, 28);
      state.clearBookmarks();
      expect(state.getBookmarks()).toHaveLength(0);
    });

    it('is idempotent when already empty', () => {
      expect(() => state.clearBookmarks()).not.toThrow();
    });
  });

  // ── Reading Progress ─────────────────────────────────────────────────────

  describe('updateProgress', () => {
    it('sets progress for a new book', () => {
      state.updateProgress('Genesis', 3);
      expect(state.getProgress('Genesis')).toBe(3);
    });

    it('advances progress when a later chapter is read', () => {
      state.updateProgress('Genesis', 3);
      state.updateProgress('Genesis', 7);
      expect(state.getProgress('Genesis')).toBe(7);
    });

    it('does NOT regress progress for an earlier chapter', () => {
      state.updateProgress('Genesis', 7);
      state.updateProgress('Genesis', 2);
      expect(state.getProgress('Genesis')).toBe(7);
    });

    it('throws for a zero chapter number', () => {
      expect(() => state.updateProgress('Genesis', 0)).toThrow('Chapter');
    });

    it('throws for a non-integer chapter', () => {
      expect(() => state.updateProgress('Genesis', 1.5)).toThrow('Chapter');
    });

    it('throws for an empty book name', () => {
      expect(() => state.updateProgress('', 1)).toThrow('Book');
    });
  });

  describe('getProgress', () => {
    it('returns 0 for a book with no progress', () => {
      expect(state.getProgress('Revelation')).toBe(0);
    });
  });

  describe('getAllProgress', () => {
    it('returns a copy of all progress data', () => {
      state.updateProgress('Genesis', 5);
      state.updateProgress('John', 10);
      const all = state.getAllProgress();
      expect(all).toEqual({ Genesis: 5, John: 10 });
    });

    it('mutations to the returned object do not affect internal state', () => {
      state.updateProgress('Genesis', 5);
      const all = state.getAllProgress();
      all['Genesis'] = 999;
      expect(state.getProgress('Genesis')).toBe(5);
    });
  });

  // ── Current Verse & History ──────────────────────────────────────────────

  describe('setCurrentVerse', () => {
    it('stores the current verse', () => {
      state.setCurrentVerse('John', 3, 16);
      expect(state.getCurrentVerse()).toEqual({ book: 'John', chapter: 3, verse: 16 });
    });

    it('automatically updates reading progress', () => {
      state.setCurrentVerse('Genesis', 2, 7);
      expect(state.getProgress('Genesis')).toBe(2);
    });

    it('appends to reading history', () => {
      state.setCurrentVerse('John', 3, 16);
      state.setCurrentVerse('John', 3, 17);
      expect(state.getReadingHistory()).toHaveLength(2);
    });

    it('throws for an invalid reference', () => {
      expect(() => state.setCurrentVerse('John', -1, 16)).toThrow('Chapter');
    });
  });

  describe('getCurrentVerse', () => {
    it('returns null before any verse is set', () => {
      expect(state.getCurrentVerse()).toBeNull();
    });

    it('returns a copy so callers cannot mutate internal state', () => {
      state.setCurrentVerse('John', 3, 16);
      const v = state.getCurrentVerse();
      v.book = 'tampered';
      expect(state.getCurrentVerse().book).toBe('John');
    });
  });

  describe('getReadingHistory', () => {
    it('returns an empty array initially', () => {
      expect(state.getReadingHistory()).toEqual([]);
    });

    it('each entry has the expected shape', () => {
      state.setCurrentVerse('John', 3, 16);
      const [entry] = state.getReadingHistory();
      expect(entry).toMatchObject({ book: 'John', chapter: 3, verse: 16 });
      expect(typeof entry.viewedAt).toBe('number');
    });

    it('returns a copy of the history array', () => {
      state.setCurrentVerse('John', 3, 16);
      const hist = state.getReadingHistory();
      hist.push({ fake: true });
      expect(state.getReadingHistory()).toHaveLength(1);
    });
  });
});
