const { BibleData, BOOKS } = require('../bibleData');

const SAMPLE_DATA = {
  Genesis: {
    1: {
      1: 'In the beginning God created the heavens and the earth.',
      2: 'Now the earth was formless and empty.',
    },
    2: {
      1: 'Thus the heavens and the earth were completed.',
    },
  },
  John: {
    3: {
      16: 'For God so loved the world that he gave his one and only Son.',
      17: 'For God did not send his Son into the world to condemn the world.',
    },
  },
};

describe('BibleData', () => {
  let bible;

  beforeEach(() => {
    bible = new BibleData(SAMPLE_DATA);
  });

  // ── Book list & validation ──────────────────────────────────────────────

  describe('getBookList', () => {
    it('returns all 66 books', () => {
      expect(bible.getBookList()).toHaveLength(66);
    });

    it('returns a copy, not the original array', () => {
      const list = bible.getBookList();
      list.push('FakeBook');
      expect(bible.getBookList()).toHaveLength(66);
    });

    it('starts with Genesis and ends with Revelation', () => {
      const list = bible.getBookList();
      expect(list[0]).toBe('Genesis');
      expect(list[65]).toBe('Revelation');
    });
  });

  describe('isValidBook', () => {
    it('returns true for a real book', () => {
      expect(bible.isValidBook('Genesis')).toBe(true);
      expect(bible.isValidBook('Revelation')).toBe(true);
    });

    it('returns false for an unknown book', () => {
      expect(bible.isValidBook('Hezekiah')).toBe(false);
      expect(bible.isValidBook('')).toBe(false);
    });
  });

  // ── Testament ───────────────────────────────────────────────────────────

  describe('getTestament', () => {
    it('classifies Old Testament books correctly', () => {
      expect(bible.getTestament('Genesis')).toBe('Old Testament');
      expect(bible.getTestament('Malachi')).toBe('Old Testament');
    });

    it('classifies New Testament books correctly', () => {
      expect(bible.getTestament('Matthew')).toBe('New Testament');
      expect(bible.getTestament('Revelation')).toBe('New Testament');
    });

    it('returns null for an unknown book', () => {
      expect(bible.getTestament('Hezekiah')).toBeNull();
    });
  });

  // ── getVerse ────────────────────────────────────────────────────────────

  describe('getVerse', () => {
    it('returns the correct verse text', () => {
      expect(bible.getVerse('Genesis', 1, 1)).toBe(
        'In the beginning God created the heavens and the earth.'
      );
    });

    it('returns a verse from the New Testament', () => {
      expect(bible.getVerse('John', 3, 16)).toContain('For God so loved the world');
    });

    it('returns null when chapter does not exist', () => {
      expect(bible.getVerse('Genesis', 99, 1)).toBeNull();
    });

    it('returns null when verse does not exist', () => {
      expect(bible.getVerse('Genesis', 1, 99)).toBeNull();
    });

    it('returns null when book has no data loaded', () => {
      expect(bible.getVerse('Exodus', 1, 1)).toBeNull();
    });

    it('throws for an invalid book name', () => {
      expect(() => bible.getVerse('Hezekiah', 1, 1)).toThrow('Unknown book');
    });

    it('throws for a non-integer chapter', () => {
      expect(() => bible.getVerse('Genesis', 1.5, 1)).toThrow('Chapter');
    });

    it('throws for a zero verse number', () => {
      expect(() => bible.getVerse('Genesis', 1, 0)).toThrow('Verse');
    });

    it('throws for a negative chapter', () => {
      expect(() => bible.getVerse('Genesis', -1, 1)).toThrow('Chapter');
    });
  });

  // ── getChapter ──────────────────────────────────────────────────────────

  describe('getChapter', () => {
    it('returns all verses in a chapter', () => {
      const chapter = bible.getChapter('Genesis', 1);
      expect(chapter).toEqual({
        1: 'In the beginning God created the heavens and the earth.',
        2: 'Now the earth was formless and empty.',
      });
    });

    it('returns a copy of the chapter data', () => {
      const chapter = bible.getChapter('Genesis', 1);
      chapter[1] = 'tampered';
      expect(bible.getVerse('Genesis', 1, 1)).not.toBe('tampered');
    });

    it('returns null for a missing chapter', () => {
      expect(bible.getChapter('Genesis', 50)).toBeNull();
    });

    it('returns null for a book with no data', () => {
      expect(bible.getChapter('Exodus', 1)).toBeNull();
    });

    it('throws for an invalid book', () => {
      expect(() => bible.getChapter('Hezekiah', 1)).toThrow('Unknown book');
    });
  });

  // ── search ──────────────────────────────────────────────────────────────

  describe('search', () => {
    it('finds verses containing the query', () => {
      const results = bible.search('God');
      expect(results.length).toBeGreaterThan(0);
      results.forEach(r => expect(r.text.toLowerCase()).toContain('god'));
    });

    it('is case-insensitive', () => {
      const lower = bible.search('god');
      const upper = bible.search('GOD');
      expect(lower).toEqual(upper);
    });

    it('returns empty array when nothing matches', () => {
      expect(bible.search('dinosaur')).toHaveLength(0);
    });

    it('result entries have the expected shape', () => {
      const [result] = bible.search('beginning');
      expect(result).toMatchObject({
        book: 'Genesis',
        chapter: 1,
        verse: 1,
        text: expect.any(String),
      });
    });

    it('throws for a non-string query', () => {
      expect(() => bible.search(null)).toThrow('query');
      expect(() => bible.search(42)).toThrow('query');
    });

    it('throws for an empty string query', () => {
      expect(() => bible.search('')).toThrow('query');
    });
  });

  // ── getVerseReference ───────────────────────────────────────────────────

  describe('getVerseReference', () => {
    it('formats the reference correctly', () => {
      expect(bible.getVerseReference('John', 3, 16)).toBe('John 3:16');
    });
  });
});
