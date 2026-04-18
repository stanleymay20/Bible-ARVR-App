/**
 * API.Bible client — fetches every verse, chapter, book, and search result
 * from the API.Bible v1 REST API. Responses are cached in-memory so the
 * AR/VR runtime never blocks on duplicate network calls.
 *
 * Required env var: BIBLE_API_KEY  (obtain free at https://scripture.api.bible)
 * Optional env var: BIBLE_ID       (default: de4e12af7f28f599-02  = KJV)
 */

const DEFAULT_BIBLE_ID = 'de4e12af7f28f599-02'; // King James Version
const BASE_URL = 'https://api.scripture.api.bible/v1';

// Well-known Bible IDs for easy switching
const BIBLE_IDS = {
  KJV:  'de4e12af7f28f599-02',
  NIV:  '78a9f6124f344018-01',
  ESV:  '9879dbb7cfe39e4d-04',
  NLT:  '65eec8e0b60e656b-01',
  NASB: 'f72b840c855f362c-04',
  AMP:  '3f7f9a6fe7c4a8b2-01',
  MSG:  '65eec8e0b60e656b-02',
  WEB:  '9879dbb7cfe39e4d-01',
};

class BibleApiClient {
  /**
   * @param {object} opts
   * @param {string} [opts.apiKey]   - API.Bible key. Falls back to BIBLE_API_KEY env var.
   * @param {string} [opts.bibleId] - Bible translation ID. Falls back to BIBLE_ID env var or KJV.
   * @param {Function} [opts.fetchFn] - Injected fetch implementation (for testing / SSR).
   */
  constructor({ apiKey, bibleId, fetchFn } = {}) {
    this._apiKey = apiKey ?? process.env.BIBLE_API_KEY ?? '';
    this._bibleId = bibleId ?? process.env.BIBLE_ID ?? DEFAULT_BIBLE_ID;
    this._fetch = fetchFn ?? ((...args) => fetch(...args));
    this._cache = new Map();
  }

  // ── Bible / Translation ────────────────────────────────────────────────

  async getBibles() {
    return this._get('/bibles');
  }

  async getBible(bibleId = this._bibleId) {
    return this._get(`/bibles/${bibleId}`);
  }

  // ── Books ────────────────────────────────────────────────────────────────

  async getBooks() {
    return this._get(`/bibles/${this._bibleId}/books`);
  }

  async getBook(bookId) {
    this._requireParam('bookId', bookId);
    return this._get(`/bibles/${this._bibleId}/books/${bookId}`);
  }

  // ── Chapters ─────────────────────────────────────────────────────────────

  async getChapters(bookId) {
    this._requireParam('bookId', bookId);
    return this._get(`/bibles/${this._bibleId}/books/${bookId}/chapters`);
  }

  async getChapter(chapterId) {
    this._requireParam('chapterId', chapterId);
    return this._get(`/bibles/${this._bibleId}/chapters/${chapterId}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true`);
  }

  // ── Verses ───────────────────────────────────────────────────────────────

  /**
   * Fetch all verse metadata for a chapter (IDs and references only, no text).
   */
  async getVerses(chapterId) {
    this._requireParam('chapterId', chapterId);
    return this._get(`/bibles/${this._bibleId}/chapters/${chapterId}/verses`);
  }

  /**
   * Fetch a single verse with full text.
   * verseId format: "JHN.3.16" or "GEN.1.1"
   */
  async getVerse(verseId) {
    this._requireParam('verseId', verseId);
    return this._get(`/bibles/${this._bibleId}/verses/${verseId}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false`);
  }

  /**
   * Fetch a passage (range of verses).
   * passageId format: "JHN.3.16-JHN.3.21" or "GEN.1.1-GEN.1.10"
   */
  async getPassage(passageId) {
    this._requireParam('passageId', passageId);
    return this._get(`/bibles/${this._bibleId}/passages/${passageId}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true`);
  }

  // ── Search ────────────────────────────────────────────────────────────────

  /**
   * Full-text search across the entire Bible.
   * @param {string} query
   * @param {object} opts
   * @param {number} [opts.limit=20]    - Max results (API max: 100)
   * @param {number} [opts.offset=0]    - Pagination offset
   * @param {string} [opts.sort='relevance'] - 'relevance' | 'canonical'
   */
  async search(query, { limit = 20, offset = 0, sort = 'relevance' } = {}) {
    this._requireParam('query', query);
    if (typeof query !== 'string' || query.trim() === '') {
      throw new Error('Search query must be a non-empty string');
    }
    const params = new URLSearchParams({
      query: query.trim(),
      limit: String(limit),
      offset: String(offset),
      sort,
    });
    return this._get(`/bibles/${this._bibleId}/search?${params}`);
  }

  // ── AR/VR convenience helpers ─────────────────────────────────────────────

  /**
   * Resolve a human-readable reference to verse text for AR panel display.
   * Accepts API verse IDs ("JHN.3.16") or dot-separated strings.
   */
  async resolveVerseForDisplay(verseId) {
    this._requireParam('verseId', verseId);
    const data = await this.getVerse(verseId);
    const verse = data?.data;
    if (!verse) throw new Error(`Verse not found: "${verseId}"`);
    return {
      id: verse.id,
      reference: verse.reference,
      text: verse.content?.trim() ?? '',
      bibleId: verse.bibleId,
    };
  }

  /**
   * Fetch all verses in a chapter as an array ready for AR placement.
   */
  async getChapterVerses(chapterId) {
    this._requireParam('chapterId', chapterId);
    const [chapterData, versesData] = await Promise.all([
      this.getChapter(chapterId),
      this.getVerses(chapterId),
    ]);
    return {
      chapter: chapterData?.data ?? null,
      verses: versesData?.data ?? [],
    };
  }

  /**
   * Search and return results shaped for AR verse panel placement.
   */
  async searchForAR(query, opts = {}) {
    const result = await this.search(query, opts);
    const verses = result?.data?.verses ?? [];
    return verses.map(v => ({
      id: v.id,
      reference: v.reference,
      text: v.text?.trim() ?? '',
    }));
  }

  // ── Translation switching ─────────────────────────────────────────────────

  switchTranslation(bibleId) {
    if (!bibleId || typeof bibleId !== 'string') {
      throw new Error('bibleId must be a non-empty string');
    }
    this._bibleId = bibleId;
    this._cache.clear(); // cached content belongs to old translation
  }

  getCurrentBibleId() {
    return this._bibleId;
  }

  getAvailableBibleIds() {
    return { ...BIBLE_IDS };
  }

  // ── Cache management ──────────────────────────────────────────────────────

  clearCache() {
    this._cache.clear();
  }

  getCacheSize() {
    return this._cache.size;
  }

  // ── Internal ──────────────────────────────────────────────────────────────

  async _get(path) {
    if (!this._apiKey) {
      throw new Error('BIBLE_API_KEY is not set. Obtain a free key at https://scripture.api.bible');
    }

    const url = path.startsWith('http') ? path : `${BASE_URL}${path}`;

    if (this._cache.has(url)) {
      return this._cache.get(url);
    }

    const response = await this._fetch(url, {
      headers: {
        'api-key': this._apiKey,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new Error(`API.Bible request failed: ${response.status} ${response.statusText}${body ? ` — ${body}` : ''}`);
    }

    const json = await response.json();
    this._cache.set(url, json);
    return json;
  }

  _requireParam(name, value) {
    if (!value || typeof value !== 'string') {
      throw new Error(`${name} must be a non-empty string`);
    }
  }
}

module.exports = { BibleApiClient, BIBLE_IDS, DEFAULT_BIBLE_ID, BASE_URL };
