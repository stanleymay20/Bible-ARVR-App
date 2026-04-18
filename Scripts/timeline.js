/**
 * Biblical timeline — eras, approximate dates, and chronological navigation
 * for the AR/VR time-travel experience.
 */

const ERAS = [
  {
    id: 'creation',
    label: 'Creation',
    approximateDate: 'In the beginning',
    dateRange: null,
    description: 'God creates the universe, earth, and humanity.',
    keyTheme: 'Origins',
    bibleRefs: ['Genesis 1-2'],
    order: 0,
  },
  {
    id: 'antediluvian',
    label: 'Before the Flood',
    approximateDate: 'c. 4000–2400 BC',
    dateRange: { start: -4000, end: -2400 },
    description: 'From Adam to Noah — humanity\'s fall and increasing corruption.',
    keyTheme: 'Sin & Judgement',
    bibleRefs: ['Genesis 3-7'],
    order: 1,
  },
  {
    id: 'patriarchs',
    label: 'The Patriarchs',
    approximateDate: 'c. 2100–1700 BC',
    dateRange: { start: -2100, end: -1700 },
    description: 'Abraham, Isaac, Jacob, and Joseph — the founding fathers of Israel.',
    keyTheme: 'Covenant & Promise',
    bibleRefs: ['Genesis 12-50'],
    order: 2,
  },
  {
    id: 'exodus',
    label: 'The Exodus',
    approximateDate: 'c. 1446 BC',
    dateRange: { start: -1446, end: -1406 },
    description: 'Moses leads Israel out of Egypt; the Law is given at Sinai.',
    keyTheme: 'Deliverance',
    bibleRefs: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
    order: 3,
  },
  {
    id: 'conquest',
    label: 'The Conquest',
    approximateDate: 'c. 1406–1390 BC',
    dateRange: { start: -1406, end: -1390 },
    description: 'Joshua leads Israel into Canaan and takes the Promised Land.',
    keyTheme: 'Fulfilment',
    bibleRefs: ['Joshua'],
    order: 4,
  },
  {
    id: 'judges',
    label: 'The Judges',
    approximateDate: 'c. 1375–1050 BC',
    dateRange: { start: -1375, end: -1050 },
    description: 'A cycle of sin, oppression, repentance, and deliverance through judges like Deborah, Gideon, and Samson.',
    keyTheme: 'Cycles of Sin & Grace',
    bibleRefs: ['Judges', 'Ruth'],
    order: 5,
  },
  {
    id: 'united_kingdom',
    label: 'The United Kingdom',
    approximateDate: 'c. 1050–930 BC',
    dateRange: { start: -1050, end: -930 },
    description: 'Saul, David, and Solomon rule a united Israel at its greatest extent.',
    keyTheme: 'Glory & Wisdom',
    bibleRefs: ['1 Samuel', '2 Samuel', '1 Kings 1-11', 'Psalms', 'Proverbs'],
    order: 6,
  },
  {
    id: 'divided_kingdom',
    label: 'The Divided Kingdom',
    approximateDate: 'c. 930–586 BC',
    dateRange: { start: -930, end: -586 },
    description: 'Israel splits into northern (Israel) and southern (Judah) kingdoms; prophets warn of coming judgement.',
    keyTheme: 'Warning & Prophecy',
    bibleRefs: ['1 Kings 12 - 2 Kings', 'Isaiah', 'Jeremiah', 'Amos'],
    order: 7,
  },
  {
    id: 'exile',
    label: 'The Exile',
    approximateDate: 'c. 605–539 BC',
    dateRange: { start: -605, end: -539 },
    description: 'Judah is taken captive to Babylon; Daniel and Ezekiel prophesy in exile.',
    keyTheme: 'Hope in Captivity',
    bibleRefs: ['2 Kings 25', 'Daniel', 'Ezekiel', 'Lamentations'],
    order: 8,
  },
  {
    id: 'return',
    label: 'The Return',
    approximateDate: 'c. 539–400 BC',
    dateRange: { start: -539, end: -400 },
    description: 'Persia releases the Jews; Ezra and Nehemiah lead the rebuilding of Jerusalem and the Temple.',
    keyTheme: 'Restoration',
    bibleRefs: ['Ezra', 'Nehemiah', 'Esther', 'Malachi'],
    order: 9,
  },
  {
    id: 'new_testament',
    label: 'Life of Christ',
    approximateDate: 'c. 6 BC – AD 30',
    dateRange: { start: -6, end: 30 },
    description: 'The birth, ministry, death, and resurrection of Jesus Christ.',
    keyTheme: 'Salvation',
    bibleRefs: ['Matthew', 'Mark', 'Luke', 'John'],
    order: 10,
  },
  {
    id: 'early_church',
    label: 'The Early Church',
    approximateDate: 'c. AD 30–100',
    dateRange: { start: 30, end: 100 },
    description: 'Pentecost, the spread of the Gospel, Paul\'s missionary journeys, and the writing of the New Testament.',
    keyTheme: 'Mission & Growth',
    bibleRefs: ['Acts', 'Romans', 'Revelation'],
    order: 11,
  },
];

class Timeline {
  constructor(eras = ERAS) {
    this._eras = [...eras].sort((a, b) => a.order - b.order);
    this._currentEraIndex = 0;
  }

  getAllEras() {
    return this._eras.map(e => ({ ...e }));
  }

  getEra(id) {
    return this._eras.find(e => e.id === id) ?? null;
  }

  getCurrentEra() {
    return { ...this._eras[this._currentEraIndex] };
  }

  navigateTo(eraId) {
    const idx = this._eras.findIndex(e => e.id === eraId);
    if (idx === -1) throw new Error(`Unknown era: "${eraId}"`);
    this._currentEraIndex = idx;
    return this.getCurrentEra();
  }

  nextEra() {
    if (this._currentEraIndex >= this._eras.length - 1) {
      throw new Error('Already at the last era');
    }
    this._currentEraIndex++;
    return this.getCurrentEra();
  }

  previousEra() {
    if (this._currentEraIndex <= 0) {
      throw new Error('Already at the first era');
    }
    this._currentEraIndex--;
    return this.getCurrentEra();
  }

  getErasBefore(eraId) {
    const target = this._eras.find(e => e.id === eraId);
    if (!target) throw new Error(`Unknown era: "${eraId}"`);
    return this._eras.filter(e => e.order < target.order).map(e => ({ ...e }));
  }

  getErasAfter(eraId) {
    const target = this._eras.find(e => e.id === eraId);
    if (!target) throw new Error(`Unknown era: "${eraId}"`);
    return this._eras.filter(e => e.order > target.order).map(e => ({ ...e }));
  }

  getEraForYear(year) {
    return this._eras.find(e => {
      if (!e.dateRange) return false;
      return year >= e.dateRange.start && year <= e.dateRange.end;
    }) ?? null;
  }

  isOldTestamentEra(eraId) {
    const OT_ERAS = ['creation', 'antediluvian', 'patriarchs', 'exodus', 'conquest', 'judges', 'united_kingdom', 'divided_kingdom', 'exile', 'return'];
    return OT_ERAS.includes(eraId);
  }

  isNewTestamentEra(eraId) {
    return ['new_testament', 'early_church'].includes(eraId);
  }
}

module.exports = { Timeline, ERAS };
