'use strict';

const { BibleApiClient, BIBLE_IDS, DEFAULT_BIBLE_ID, BASE_URL } = require('../bibleApi');

// ── Test helper ────────────────────────────────────────────────────────────────

/**
 * Creates a jest mock that resolves to a minimal fetch Response-like object.
 * Pass ok=false / status to simulate HTTP errors.
 */
function mockFetch(data, ok = true, status = 200) {
  return jest.fn().mockResolvedValue({
    ok,
    status,
    statusText: ok ? 'OK' : 'Not Found',
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(''),
  });
}

// Convenience: build a client with a working API key and an injectable fetch.
function makeClient(fetchFn, overrides = {}) {
  return new BibleApiClient({
    apiKey: 'test-key',
    fetchFn,
    ...overrides,
  });
}

// ── Constants ──────────────────────────────────────────────────────────────────

describe('exported constants', () => {
  it('DEFAULT_BIBLE_ID is the KJV id', () => {
    expect(DEFAULT_BIBLE_ID).toBe('de4e12af7f28f599-02');
  });

  it('BASE_URL points at the v1 endpoint', () => {
    expect(BASE_URL).toBe('https://api.scripture.api.bible/v1');
  });

  it('BIBLE_IDS contains KJV, NIV, ESV and at least 8 entries', () => {
    expect(BIBLE_IDS).toHaveProperty('KJV');
    expect(BIBLE_IDS).toHaveProperty('NIV');
    expect(BIBLE_IDS).toHaveProperty('ESV');
    expect(Object.keys(BIBLE_IDS).length).toBeGreaterThanOrEqual(8);
  });
});

// ── Constructor ────────────────────────────────────────────────────────────────

describe('BibleApiClient constructor', () => {
  const ORIG_ENV = process.env;

  beforeEach(() => {
    // Give every test a clean env-var slate
    process.env = { ...ORIG_ENV };
    delete process.env.BIBLE_API_KEY;
    delete process.env.BIBLE_ID;
  });

  afterAll(() => {
    process.env = ORIG_ENV;
  });

  it('stores the provided apiKey', () => {
    const client = makeClient(mockFetch({}));
    expect(client._apiKey).toBe('test-key');
  });

  it('falls back to BIBLE_API_KEY env var when apiKey is omitted', () => {
    process.env.BIBLE_API_KEY = 'env-key';
    const client = new BibleApiClient({ fetchFn: mockFetch({}) });
    expect(client._apiKey).toBe('env-key');
  });

  it('uses DEFAULT_BIBLE_ID when neither bibleId nor BIBLE_ID env var is set', () => {
    const client = makeClient(mockFetch({}));
    expect(client._bibleId).toBe(DEFAULT_BIBLE_ID);
  });

  it('uses a custom bibleId passed in options', () => {
    const client = makeClient(mockFetch({}), { bibleId: 'custom-id-123' });
    expect(client._bibleId).toBe('custom-id-123');
  });

  it('falls back to BIBLE_ID env var when bibleId option is omitted', () => {
    process.env.BIBLE_ID = 'env-bible-id';
    const client = new BibleApiClient({ apiKey: 'k', fetchFn: mockFetch({}) });
    expect(client._bibleId).toBe('env-bible-id');
  });

  it('initialises an empty cache', () => {
    const client = makeClient(mockFetch({}));
    expect(client._cache).toBeInstanceOf(Map);
    expect(client._cache.size).toBe(0);
  });

  it('stores the injected fetchFn', () => {
    const fn = mockFetch({});
    const client = makeClient(fn);
    expect(client._fetch).toBe(fn);
  });

  it('apiKey defaults to empty string when nothing is provided', () => {
    const client = new BibleApiClient({ fetchFn: mockFetch({}) });
    expect(client._apiKey).toBe('');
  });
});

// ── Missing API key ────────────────────────────────────────────────────────────

describe('missing API key', () => {
  it('throws with a helpful message on any _get call', async () => {
    const client = new BibleApiClient({ fetchFn: mockFetch({}) }); // no apiKey
    await expect(client.getBibles()).rejects.toThrow('BIBLE_API_KEY is not set');
  });

  it('does not call fetch when apiKey is absent', async () => {
    const fetch = mockFetch({});
    const client = new BibleApiClient({ fetchFn: fetch });
    await expect(client.getBibles()).rejects.toThrow();
    expect(fetch).not.toHaveBeenCalled();
  });
});

// ── HTTP error response ────────────────────────────────────────────────────────

describe('HTTP error response', () => {
  it('throws with status code and statusText in the message', async () => {
    const fetch = mockFetch({}, false, 404);
    const client = makeClient(fetch);
    await expect(client.getBibles()).rejects.toThrow('404');
    await expect(client.getBibles()).rejects.toThrow('Not Found');
  });

  it('includes "API.Bible request failed" in the error message', async () => {
    const fetch = mockFetch({}, false, 401);
    fetch.mockResolvedValue({
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
      json: () => Promise.resolve({}),
      text: () => Promise.resolve(''),
    });
    const client = makeClient(fetch);
    await expect(client.getBibles()).rejects.toThrow('API.Bible request failed');
  });

  it('includes the response body in the error when text is non-empty', async () => {
    const fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 403,
      statusText: 'Forbidden',
      json: () => Promise.resolve({}),
      text: () => Promise.resolve('quota exceeded'),
    });
    const client = makeClient(fetch);
    await expect(client.getBibles()).rejects.toThrow('quota exceeded');
  });
});

// ── getBibles / getBible ───────────────────────────────────────────────────────

describe('getBibles', () => {
  it('calls /bibles and returns the parsed JSON', async () => {
    const payload = { data: [{ id: DEFAULT_BIBLE_ID, name: 'KJV' }] };
    const fetch = mockFetch(payload);
    const client = makeClient(fetch);

    const result = await client.getBibles();

    expect(result).toEqual(payload);
    expect(fetch).toHaveBeenCalledTimes(1);
    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles`);
  });
});

describe('getBible', () => {
  it('defaults to the current bibleId', async () => {
    const payload = { data: { id: DEFAULT_BIBLE_ID } };
    const fetch = mockFetch(payload);
    const client = makeClient(fetch);

    const result = await client.getBible();

    expect(result).toEqual(payload);
    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles/${DEFAULT_BIBLE_ID}`);
  });

  it('accepts an explicit bibleId override', async () => {
    const overrideId = 'custom-id-999';
    const fetch = mockFetch({ data: { id: overrideId } });
    const client = makeClient(fetch);

    await client.getBible(overrideId);

    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles/${overrideId}`);
  });
});

// ── getBooks / getBook ─────────────────────────────────────────────────────────

describe('getBooks', () => {
  it('calls the correct books URL for the current bibleId', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBooks();

    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles/${DEFAULT_BIBLE_ID}/books`);
  });
});

describe('getBook', () => {
  it('calls the correct book URL', async () => {
    const fetch = mockFetch({ data: { id: 'GEN' } });
    const client = makeClient(fetch);

    await client.getBook('GEN');

    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles/${DEFAULT_BIBLE_ID}/books/GEN`);
  });

  it('throws for a missing bookId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getBook()).rejects.toThrow('bookId must be a non-empty string');
  });

  it('throws for an empty string bookId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getBook('')).rejects.toThrow('bookId must be a non-empty string');
  });
});

// ── getChapters / getChapter ───────────────────────────────────────────────────

describe('getChapters', () => {
  it('calls the chapters list URL for a book', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getChapters('GEN');

    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles/${DEFAULT_BIBLE_ID}/books/GEN/chapters`);
  });

  it('throws for a missing bookId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getChapters()).rejects.toThrow('bookId must be a non-empty string');
  });
});

describe('getChapter', () => {
  it('calls the chapter URL with the expected query params', async () => {
    const fetch = mockFetch({ data: { id: 'GEN.1' } });
    const client = makeClient(fetch);

    await client.getChapter('GEN.1');

    const [url] = fetch.mock.calls[0];
    expect(url).toContain(`/bibles/${DEFAULT_BIBLE_ID}/chapters/GEN.1`);
    expect(url).toContain('content-type=text');
    expect(url).toContain('include-verse-numbers=true');
  });

  it('throws for a missing chapterId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getChapter()).rejects.toThrow('chapterId must be a non-empty string');
  });
});

// ── getVerses / getVerse / getPassage ──────────────────────────────────────────

describe('getVerses', () => {
  it('calls the verse-list URL for a chapter', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getVerses('JHN.3');

    const [url] = fetch.mock.calls[0];
    expect(url).toBe(`${BASE_URL}/bibles/${DEFAULT_BIBLE_ID}/chapters/JHN.3/verses`);
  });

  it('throws for a missing chapterId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getVerses()).rejects.toThrow('chapterId must be a non-empty string');
  });
});

describe('getVerse', () => {
  it('calls the single-verse URL with the correct query params', async () => {
    const fetch = mockFetch({ data: { id: 'JHN.3.16' } });
    const client = makeClient(fetch);

    await client.getVerse('JHN.3.16');

    const [url] = fetch.mock.calls[0];
    expect(url).toContain(`/bibles/${DEFAULT_BIBLE_ID}/verses/JHN.3.16`);
    expect(url).toContain('content-type=text');
    expect(url).toContain('include-verse-numbers=false');
  });

  it('throws for a missing verseId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getVerse()).rejects.toThrow('verseId must be a non-empty string');
  });
});

describe('getPassage', () => {
  it('calls the passage URL with the correct query params', async () => {
    const passageId = 'JHN.3.16-JHN.3.21';
    const fetch = mockFetch({ data: { id: passageId } });
    const client = makeClient(fetch);

    await client.getPassage(passageId);

    const [url] = fetch.mock.calls[0];
    expect(url).toContain(`/bibles/${DEFAULT_BIBLE_ID}/passages/${passageId}`);
    expect(url).toContain('content-type=text');
    expect(url).toContain('include-verse-numbers=true');
  });

  it('throws for a missing passageId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getPassage()).rejects.toThrow('passageId must be a non-empty string');
  });
});

// ── search ─────────────────────────────────────────────────────────────────────

describe('search', () => {
  const SEARCH_PAYLOAD = {
    data: {
      query: 'love',
      verses: [{ id: 'JHN.3.16', reference: 'John 3:16', text: 'For God so loved…' }],
      total: 1,
    },
  };

  it('calls the search URL with default pagination params', async () => {
    const fetch = mockFetch(SEARCH_PAYLOAD);
    const client = makeClient(fetch);

    await client.search('love');

    const [url] = fetch.mock.calls[0];
    expect(url).toContain(`/bibles/${DEFAULT_BIBLE_ID}/search`);
    expect(url).toContain('query=love');
    expect(url).toContain('limit=20');
    expect(url).toContain('offset=0');
    expect(url).toContain('sort=relevance');
  });

  it('passes custom pagination opts', async () => {
    const fetch = mockFetch(SEARCH_PAYLOAD);
    const client = makeClient(fetch);

    await client.search('love', { limit: 50, offset: 100, sort: 'canonical' });

    const [url] = fetch.mock.calls[0];
    expect(url).toContain('limit=50');
    expect(url).toContain('offset=100');
    expect(url).toContain('sort=canonical');
  });

  it('returns the API response object', async () => {
    const fetch = mockFetch(SEARCH_PAYLOAD);
    const client = makeClient(fetch);

    const result = await client.search('love');

    expect(result).toEqual(SEARCH_PAYLOAD);
  });

  it('trims leading/trailing whitespace from the query', async () => {
    const fetch = mockFetch(SEARCH_PAYLOAD);
    const client = makeClient(fetch);

    await client.search('  love  ');

    const [url] = fetch.mock.calls[0];
    expect(url).toContain('query=love');
    expect(url).not.toContain('query=+love'); // not raw spaces
  });

  it('throws for an empty string query', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.search('')).rejects.toThrow();
  });

  it('throws for a whitespace-only query', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.search('   ')).rejects.toThrow('Search query must be a non-empty string');
  });

  it('throws for a null query (caught by _requireParam)', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.search(null)).rejects.toThrow('query must be a non-empty string');
  });

  it('throws for a numeric query (caught by _requireParam)', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.search(42)).rejects.toThrow('query must be a non-empty string');
  });
});

// ── resolveVerseForDisplay ─────────────────────────────────────────────────────

describe('resolveVerseForDisplay', () => {
  const VERSE_PAYLOAD = {
    data: {
      id: 'JHN.3.16',
      reference: 'John 3:16',
      content: '  For God so loved the world  ',
      bibleId: DEFAULT_BIBLE_ID,
    },
  };

  it('maps the API response to { id, reference, text, bibleId }', async () => {
    const fetch = mockFetch(VERSE_PAYLOAD);
    const client = makeClient(fetch);

    const result = await client.resolveVerseForDisplay('JHN.3.16');

    expect(result).toEqual({
      id: 'JHN.3.16',
      reference: 'John 3:16',
      text: 'For God so loved the world',
      bibleId: DEFAULT_BIBLE_ID,
    });
  });

  it('trims whitespace from the verse content', async () => {
    const fetch = mockFetch(VERSE_PAYLOAD);
    const client = makeClient(fetch);

    const { text } = await client.resolveVerseForDisplay('JHN.3.16');

    expect(text).toBe('For God so loved the world');
  });

  it('returns empty string for text when content is absent', async () => {
    const payload = {
      data: { id: 'GEN.1.1', reference: 'Genesis 1:1', bibleId: DEFAULT_BIBLE_ID },
    };
    const fetch = mockFetch(payload);
    const client = makeClient(fetch);

    const { text } = await client.resolveVerseForDisplay('GEN.1.1');

    expect(text).toBe('');
  });

  it('throws if the data property is missing from the response', async () => {
    const fetch = mockFetch({}); // no data key
    const client = makeClient(fetch);

    await expect(client.resolveVerseForDisplay('JHN.3.16')).rejects.toThrow(
      'Verse not found: "JHN.3.16"'
    );
  });

  it('throws for a missing verseId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.resolveVerseForDisplay()).rejects.toThrow(
      'verseId must be a non-empty string'
    );
  });
});

// ── getChapterVerses ───────────────────────────────────────────────────────────

describe('getChapterVerses', () => {
  const CHAPTER_PAYLOAD = { data: { id: 'GEN.1', content: 'In the beginning…' } };
  const VERSES_PAYLOAD = { data: [{ id: 'GEN.1.1', reference: 'Genesis 1:1' }] };

  it('calls getChapter and getVerses in parallel and returns combined result', async () => {
    // We need two sequential calls to return different payloads.
    const fetch = jest.fn()
      .mockResolvedValueOnce({
        ok: true, status: 200, statusText: 'OK',
        json: () => Promise.resolve(CHAPTER_PAYLOAD),
        text: () => Promise.resolve(''),
      })
      .mockResolvedValueOnce({
        ok: true, status: 200, statusText: 'OK',
        json: () => Promise.resolve(VERSES_PAYLOAD),
        text: () => Promise.resolve(''),
      });

    const client = makeClient(fetch);
    const result = await client.getChapterVerses('GEN.1');

    expect(result).toEqual({
      chapter: CHAPTER_PAYLOAD.data,
      verses: VERSES_PAYLOAD.data,
    });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('issues both requests before either resolves (true parallel)', async () => {
    const callOrder = [];
    const fetch = jest.fn().mockImplementation((url) => {
      callOrder.push(url);
      return Promise.resolve({
        ok: true, status: 200, statusText: 'OK',
        json: () => Promise.resolve({ data: null }),
        text: () => Promise.resolve(''),
      });
    });

    const client = makeClient(fetch);
    await client.getChapterVerses('GEN.1');

    // Both URLs should have been called
    expect(callOrder).toHaveLength(2);
    const hasChapterUrl = callOrder.some(u => u.includes('/chapters/GEN.1?'));
    const hasVersesUrl  = callOrder.some(u => u.includes('/chapters/GEN.1/verses'));
    expect(hasChapterUrl).toBe(true);
    expect(hasVersesUrl).toBe(true);
  });

  it('returns null chapter and empty verses array when data is absent', async () => {
    const fetch = mockFetch({}); // no data key in either response
    const client = makeClient(fetch);

    const result = await client.getChapterVerses('GEN.1');

    expect(result).toEqual({ chapter: null, verses: [] });
  });

  it('throws for a missing chapterId', async () => {
    const client = makeClient(mockFetch({}));
    await expect(client.getChapterVerses()).rejects.toThrow(
      'chapterId must be a non-empty string'
    );
  });
});

// ── searchForAR ────────────────────────────────────────────────────────────────

describe('searchForAR', () => {
  it('maps search results to { id, reference, text }', async () => {
    const payload = {
      data: {
        verses: [
          { id: 'JHN.3.16', reference: 'John 3:16', text: '  For God so loved  ' },
          { id: 'ROM.5.8',  reference: 'Romans 5:8', text: 'But God demonstrates' },
        ],
      },
    };
    const fetch = mockFetch(payload);
    const client = makeClient(fetch);

    const result = await client.searchForAR('God');

    expect(result).toEqual([
      { id: 'JHN.3.16', reference: 'John 3:16', text: 'For God so loved' },
      { id: 'ROM.5.8',  reference: 'Romans 5:8', text: 'But God demonstrates' },
    ]);
  });

  it('trims whitespace from each verse text', async () => {
    const payload = {
      data: { verses: [{ id: 'A.1.1', reference: 'A 1:1', text: '   hello   ' }] },
    };
    const fetch = mockFetch(payload);
    const client = makeClient(fetch);

    const [item] = await client.searchForAR('hello');

    expect(item.text).toBe('hello');
  });

  it('returns empty array when verses list is absent from response', async () => {
    const fetch = mockFetch({ data: {} }); // no verses key
    const client = makeClient(fetch);

    const result = await client.searchForAR('grace');

    expect(result).toEqual([]);
  });

  it('returns empty array when data is absent from response', async () => {
    const fetch = mockFetch({}); // no data key
    const client = makeClient(fetch);

    const result = await client.searchForAR('grace');

    expect(result).toEqual([]);
  });

  it('passes opts through to search', async () => {
    const fetch = mockFetch({ data: { verses: [] } });
    const client = makeClient(fetch);

    await client.searchForAR('love', { limit: 5, offset: 10 });

    const [url] = fetch.mock.calls[0];
    expect(url).toContain('limit=5');
    expect(url).toContain('offset=10');
  });
});

// ── Caching ────────────────────────────────────────────────────────────────────

describe('caching', () => {
  it('returns the cached response on the second call without hitting fetch', async () => {
    const payload = { data: [{ id: DEFAULT_BIBLE_ID }] };
    const fetch = mockFetch(payload);
    const client = makeClient(fetch);

    const first  = await client.getBibles();
    const second = await client.getBibles();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(first).toBe(second); // same object reference from cache
  });

  it('caches each unique URL independently', async () => {
    const fetch = jest.fn()
      .mockResolvedValueOnce({
        ok: true, status: 200, statusText: 'OK',
        json: () => Promise.resolve({ data: 'books-result' }),
        text: () => Promise.resolve(''),
      })
      .mockResolvedValueOnce({
        ok: true, status: 200, statusText: 'OK',
        json: () => Promise.resolve({ data: 'book-gen-result' }),
        text: () => Promise.resolve(''),
      });

    const client = makeClient(fetch);

    const books   = await client.getBooks();
    const bookGen = await client.getBook('GEN');

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(books).not.toBe(bookGen);

    // Repeat both — should still be 2 total fetch calls
    await client.getBooks();
    await client.getBook('GEN');
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('getCacheSize increments after each unique request', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    expect(client.getCacheSize()).toBe(0);
    await client.getBibles();
    expect(client.getCacheSize()).toBe(1);
    await client.getBibles(); // cached — no new entry
    expect(client.getCacheSize()).toBe(1);
  });

  it('clearCache empties the cache', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBibles();
    expect(client.getCacheSize()).toBe(1);

    client.clearCache();
    expect(client.getCacheSize()).toBe(0);
  });

  it('fetches again after the cache has been cleared', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBibles();
    client.clearCache();
    await client.getBibles();

    expect(fetch).toHaveBeenCalledTimes(2);
  });
});

// ── switchTranslation ──────────────────────────────────────────────────────────

describe('switchTranslation', () => {
  it('changes the current bibleId', () => {
    const client = makeClient(mockFetch({}));
    client.switchTranslation('78a9f6124f344018-01'); // NIV
    expect(client._bibleId).toBe('78a9f6124f344018-01');
  });

  it('clears the cache when switching translations', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBibles(); // warm the cache
    expect(client.getCacheSize()).toBe(1);

    client.switchTranslation('78a9f6124f344018-01');
    expect(client.getCacheSize()).toBe(0);
  });

  it('subsequent calls use the new bibleId', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    client.switchTranslation('78a9f6124f344018-01');
    await client.getBooks();

    const [url] = fetch.mock.calls[0];
    expect(url).toContain('/bibles/78a9f6124f344018-01/books');
  });

  it('throws for an empty string bibleId', () => {
    const client = makeClient(mockFetch({}));
    expect(() => client.switchTranslation('')).toThrow('bibleId must be a non-empty string');
  });

  it('throws for null bibleId', () => {
    const client = makeClient(mockFetch({}));
    expect(() => client.switchTranslation(null)).toThrow('bibleId must be a non-empty string');
  });

  it('throws for a numeric bibleId', () => {
    const client = makeClient(mockFetch({}));
    expect(() => client.switchTranslation(42)).toThrow('bibleId must be a non-empty string');
  });
});

// ── getCurrentBibleId ──────────────────────────────────────────────────────────

describe('getCurrentBibleId', () => {
  it('returns the default bibleId initially', () => {
    const client = makeClient(mockFetch({}));
    expect(client.getCurrentBibleId()).toBe(DEFAULT_BIBLE_ID);
  });

  it('reflects a custom bibleId passed in the constructor', () => {
    const client = makeClient(mockFetch({}), { bibleId: 'my-id' });
    expect(client.getCurrentBibleId()).toBe('my-id');
  });

  it('returns the updated bibleId after switchTranslation', () => {
    const client = makeClient(mockFetch({}));
    client.switchTranslation('78a9f6124f344018-01');
    expect(client.getCurrentBibleId()).toBe('78a9f6124f344018-01');
  });
});

// ── getAvailableBibleIds ───────────────────────────────────────────────────────

describe('getAvailableBibleIds', () => {
  it('returns an object with the same keys and values as BIBLE_IDS', () => {
    const client = makeClient(mockFetch({}));
    expect(client.getAvailableBibleIds()).toEqual(BIBLE_IDS);
  });

  it('returns a copy — mutations do not affect the internal constant', () => {
    const client = makeClient(mockFetch({}));
    const ids = client.getAvailableBibleIds();
    ids.FAKE = 'fake-id';
    expect(client.getAvailableBibleIds()).not.toHaveProperty('FAKE');
  });
});

// ── clearCache / getCacheSize ──────────────────────────────────────────────────

describe('clearCache / getCacheSize', () => {
  it('getCacheSize returns 0 on a fresh client', () => {
    const client = makeClient(mockFetch({}));
    expect(client.getCacheSize()).toBe(0);
  });

  it('getCacheSize grows with each unique URL fetched', async () => {
    const fetch = jest.fn().mockResolvedValue({
      ok: true, status: 200, statusText: 'OK',
      json: () => Promise.resolve({ data: [] }),
      text: () => Promise.resolve(''),
    });
    const client = makeClient(fetch);

    await client.getBooks();
    expect(client.getCacheSize()).toBe(1);

    await client.getBook('GEN');
    expect(client.getCacheSize()).toBe(2);
  });

  it('clearCache resets size to 0', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);
    await client.getBooks();

    client.clearCache();

    expect(client.getCacheSize()).toBe(0);
  });
});

// ── _requireParam ──────────────────────────────────────────────────────────────

describe('_requireParam', () => {
  let client;

  beforeEach(() => {
    client = makeClient(mockFetch({}));
  });

  it('does not throw for a valid non-empty string', () => {
    expect(() => client._requireParam('myParam', 'valid')).not.toThrow();
  });

  it('throws for null', () => {
    expect(() => client._requireParam('myParam', null)).toThrow(
      'myParam must be a non-empty string'
    );
  });

  it('throws for undefined', () => {
    expect(() => client._requireParam('myParam', undefined)).toThrow(
      'myParam must be a non-empty string'
    );
  });

  it('throws for an empty string', () => {
    expect(() => client._requireParam('myParam', '')).toThrow(
      'myParam must be a non-empty string'
    );
  });

  it('throws for a number', () => {
    expect(() => client._requireParam('myParam', 42)).toThrow(
      'myParam must be a non-empty string'
    );
  });

  it('throws for a boolean', () => {
    expect(() => client._requireParam('myParam', true)).toThrow(
      'myParam must be a non-empty string'
    );
  });

  it('throws for an object', () => {
    expect(() => client._requireParam('myParam', {})).toThrow(
      'myParam must be a non-empty string'
    );
  });

  it('includes the parameter name in the error message', () => {
    expect(() => client._requireParam('verseId', null)).toThrow('verseId');
    expect(() => client._requireParam('bookId', null)).toThrow('bookId');
  });
});

// ── _get — request structure ───────────────────────────────────────────────────

describe('_get request structure', () => {
  it('sends the api-key header', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBibles();

    const [, options] = fetch.mock.calls[0];
    expect(options.headers['api-key']).toBe('test-key');
  });

  it('sends the Accept: application/json header', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBibles();

    const [, options] = fetch.mock.calls[0];
    expect(options.headers['Accept']).toBe('application/json');
  });

  it('prepends BASE_URL when path does not start with http', async () => {
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    await client.getBibles();

    const [url] = fetch.mock.calls[0];
    expect(url.startsWith(BASE_URL)).toBe(true);
  });

  it('uses an absolute URL as-is when path starts with http', async () => {
    const absoluteUrl = 'https://other.example.com/resource';
    const fetch = mockFetch({ data: [] });
    const client = makeClient(fetch);

    // Directly exercise _get with an absolute URL
    await client._get(absoluteUrl);

    const [url] = fetch.mock.calls[0];
    expect(url).toBe(absoluteUrl);
  });
});
