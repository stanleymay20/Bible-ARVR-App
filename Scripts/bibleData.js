/**
 * Bible data access layer — verse lookup, navigation, and search.
 */

const BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
  'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs',
  'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
  'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk',
  'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
  'Matthew', 'Mark', 'Luke', 'John', 'Acts',
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
  'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy',
  '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
  '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
  'Jude', 'Revelation'
];

const TESTAMENT_SPLIT = 39; // first 39 books are Old Testament

class BibleData {
  constructor(data = {}) {
    // data shape: { [book]: { [chapter]: { [verse]: string } } }
    this._data = data;
  }

  getBookList() {
    return [...BOOKS];
  }

  isValidBook(book) {
    return BOOKS.includes(book);
  }

  getTestament(book) {
    const idx = BOOKS.indexOf(book);
    if (idx === -1) return null;
    return idx < TESTAMENT_SPLIT ? 'Old Testament' : 'New Testament';
  }

  getVerse(book, chapter, verse) {
    if (!this.isValidBook(book)) {
      throw new Error(`Unknown book: "${book}"`);
    }
    if (!Number.isInteger(chapter) || chapter < 1) {
      throw new Error(`Chapter must be a positive integer, got: ${chapter}`);
    }
    if (!Number.isInteger(verse) || verse < 1) {
      throw new Error(`Verse must be a positive integer, got: ${verse}`);
    }

    const bookData = this._data[book];
    if (!bookData) return null;
    const chapterData = bookData[chapter];
    if (!chapterData) return null;
    return chapterData[verse] ?? null;
  }

  getChapter(book, chapter) {
    if (!this.isValidBook(book)) {
      throw new Error(`Unknown book: "${book}"`);
    }
    if (!Number.isInteger(chapter) || chapter < 1) {
      throw new Error(`Chapter must be a positive integer, got: ${chapter}`);
    }

    const bookData = this._data[book];
    if (!bookData || !bookData[chapter]) return null;
    return { ...bookData[chapter] };
  }

  search(query) {
    if (!query || typeof query !== 'string') {
      throw new Error('Search query must be a non-empty string');
    }
    const term = query.toLowerCase().trim();
    const results = [];

    for (const book of Object.keys(this._data)) {
      for (const chapter of Object.keys(this._data[book])) {
        for (const verse of Object.keys(this._data[book][chapter])) {
          const text = this._data[book][chapter][verse];
          if (text.toLowerCase().includes(term)) {
            results.push({
              book,
              chapter: parseInt(chapter, 10),
              verse: parseInt(verse, 10),
              text,
            });
          }
        }
      }
    }

    return results;
  }

  getVerseReference(book, chapter, verse) {
    return `${book} ${chapter}:${verse}`;
  }
}

module.exports = { BibleData, BOOKS };
