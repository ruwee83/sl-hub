'use strict';
/* සිංහල / English text. HTML හි data-i18n="key" සහ JS හි t('key') මගින් භාවිත වේ. */
const I18N = {
  si: {
    pageTitle: 'SL Hub - ශ්‍රී ලංකා පුවත්, කාලගුණය, රේඩියෝ',
    skip: 'ප්‍රධාන අන්තර්ගතයට යන්න',
    nNews: 'පුවත්', nWeather: 'කාලගුණය', nRadio: 'රේඩියෝ',
    themeToLight: 'ආලෝක තේමාවට මාරු වන්න', themeToDark: 'අඳුරු තේමාවට මාරු වන්න', langAria: 'භාෂාව මාරු කරන්න',
    heroH: 'ශ්‍රී ලංකාව, මේ මොහොතේ',
    heroP: 'අලුත්ම පුවත්, ඔබේ නගරයේ කාලගුණය සහ ප්‍රියතම රේඩියෝ නාලිකා, එකම තැනක.',
    heroPlay: 'රේඩියෝව අහන්න', heroRead: 'අද පුවත් කියවන්න',
    heroNow: 'කොළඹ වේලාව', skyAria: 'කොළඹ වේලාවට අනුව වෙනස් වන අහස',
    tkLabel: 'අලුත්ම',
    newsH: 'අලුත්ම පුවත්', newsSub: 'ලංකාවේ පුවත්පත් වලින් ශීර්ෂ සහ මුල් ලිපියට සබැඳි.',
    searchPh: 'පුවත් සොයන්න', refresh: 'නැවුම් කරන්න', more: 'තවත් පුවත්', sources: 'පුවත් ප්‍රභව',
    cAll: 'සියල්ල', cLocal: 'දේශීය', cBusiness: 'ව්‍යාපාර', cSports: 'ක්‍රීඩා', cEnt: 'විනෝදය',
    lAll: 'සියලු භාෂා', lSi: 'සිංහල', lEn: 'English', lTa: 'தமிழ்',
    savedTab: 'සුරැකි ({0})',
    loading: 'පුවත් ලබාගනිමින්...', noNews: 'මෙම තේරීමට පුවත් නැහැ. වෙනත් වර්ගයක් තෝරන්න.',
    notYet: 'පුවත් තවම නැහැ. GitHub හි Actions → Update news → Run workflow එබුවාම පුවත් පිරේ.',
    loadFail: 'පුවත් ලබාගත නොහැක. Internet පරීක්ෂා කර නැවත උත්සාහ කරන්න.',
    upd: 'අලුත්ම පුවත: {0}', offlineCache: 'සුරැකි පුවත් පෙන්වයි',
    noSaved: 'සුරැකි පුවත් නැහැ. පුවතක 🔖 එබුවාම මෙතන සුරැකේ.',
    saveAria: 'පුවත සුරකින්න', unsaveAria: 'සුරැකීම ඉවත් කරන්න', savedOk: 'සුරැකුවා', savedDel: 'සුරැකීම ඉවත් කළා',
    ago: { m: 'විනාඩි {0}කට පෙර', h: 'පැය {0}කට පෙර', d: 'දින {0}කට පෙර', now: 'දැන්' },
    srcOk: '{0} ({1})', srcBad: '{0}: ලබාගත නොහැක', openStory: 'මුල් ලිපිය කියවන්න',
    weatherH: 'කාලගුණය', weatherSub: 'Open-Meteo ඇස්තමේන්තු, ශ්‍රී ලංකා වේලාවෙන්.',
    wxLoading: 'කාලගුණය ලබාගනිමින්...', wxFail: 'කාලගුණය ලබාගත නොහැක. නැවත උත්සාහ කරන්න.',
    feels: 'දැනෙන්නේ', hum: 'ආර්ද්‍රතාව', wind: 'සුළං', uv: 'UV දර්ශකය', sunrise: 'හිරු උදාව', sunset: 'හිරු බැසීම',
    next12: 'ඉදිරි පැය', week: 'දින 7', today: 'අද', rainP: 'වැසි',
    spineH: 'උතුරේ සිට දකුණට', spineSub: 'නගරයක් තෝරන්න',
    wc: { 0: 'පැහැදිලි', 1: 'බොහෝ දුරට පැහැදිලි', 2: 'අර්ධ වලාකුළු', 3: 'වලාකුළු සහිත', 45: 'මීදුම', 48: 'මීදුම', 51: 'සැහැල්ලු පොද වැසි', 53: 'පොද වැසි', 55: 'තද පොද වැසි', 61: 'සැහැල්ලු වැසි', 63: 'වැසි', 65: 'තද වැසි', 80: 'මි.වැසි', 81: 'මි.වැසි', 82: 'තද මි.වැසි', 95: 'ගිගුරුම් සහිත වැසි', 96: 'ගිගුරුම් සහිත වැසි', 99: 'ගිගුරුම් සහිත වැසි' },
    cities: { colombo: 'කොළඹ', kandy: 'මහනුවර', galle: 'ගාල්ල', jaffna: 'යාපනය', anuradhapura: 'අනුරාධපුර', trinco: 'ත්‍රිකුණාමලය', batticaloa: 'මඩකලපුව', nuwaraeliya: 'නුවරඑළිය', kurunegala: 'කුරුණෑගල', ratnapura: 'රත්නපුර', matara: 'මාතර', badulla: 'බදුල්ල', negombo: 'මීගමුව', hambantota: 'හම්බන්තොට' },
    dow: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
    dowS: ['ඉරි', 'සඳු', 'අඟ', 'බදා', 'බ්‍රහ', 'සිකු', 'සෙන'],
    months: ['ජන', 'පෙබ', 'මාර්', 'අප්‍රි', 'මැයි', 'ජූනි', 'ජූලි', 'අගෝ', 'සැප්', 'ඔක්', 'නොවැ', 'දෙසැ'],
    radioH: 'SL Radio', radioSub: 'ශ්‍රී ලංකාවේ FM නාලිකා. තෝරන්න, අහන්න, ප්‍රියතම කරගන්න.',
    pickStation: 'නාලිකාවක් තෝරන්න', stopped: 'නවත්වා ඇත', connecting: 'සම්බන්ධ වෙමින්...', live: 'සජීවී', errorSt: 'දෝෂයකි',
    retrying: 'ආයෙත් සම්බන්ධ වෙමින්... ({0}/{1})', cantConnect: 'සම්බන්ධ විය නොහැක',
    prev: 'කලින් නාලිකාව', next: 'ඊළඟ නාලිකාව', play: 'වාදනය', pause: 'නවත්වන්න', vol: 'ශබ්දය', fav: 'ප්‍රියතම', edit: 'සංස්කරණය',
    sleepOff: 'නිදි කාලය: ඉවත', sleepOn: 'නිදි කාලය: විනාඩි {0}', dataBtn: 'Data භාවිතය',
    rAll: 'සියල්ල', rSi: 'සිංහල', rTa: 'தமிழ்', rEn: 'English', rMx: 'මිශ්‍ර', rFav: 'ප්‍රියතම',
    rSearch: 'නාලිකා සොයන්න', addStation: 'නාලිකාවක් එකතු කරන්න', findOnline: 'Online සොයන්න',
    emptyList: 'නාලිකා හමු නොවිණි',
    noUrl: 'Stream URL නැත',
    httpWarn: 'HTTP stream: HTTPS පිටුවක වැඩ නොකරන්න පුළුවන්',
    httpFail: 'Stream විවෘත නොවේ. URL එක HTTPS එකකට වෙනස් කරන්න.',
    openFail: 'නාලිකාව විවෘත නොවේ', playFail: 'විවෘත නොවේ',
    noSignal: 'සංඥාව නැත. ආයෙත් සම්බන්ධ වීමට උත්සාහ කරමින්',
    giveUp: 'නැවත සම්බන්ධ විය නොහැක. ▶ එබුවා උත්සාහ කරන්න',
    offlineToast: 'Internet නැත', sleepDone: 'රේඩියෝව නතර කරන ලදී',
    addTitle: 'නාලිකාවක් එකතු කරන්න', editTitle: 'නාලිකාව සංස්කරණය',
    lName: 'නම', lFreq: 'සංඛ්‍යාතය (optional)', lUrl: 'Stream URL', lGenre: 'භාෂාව', lBitrate: 'Bitrate kbps (optional)', lEmoji: 'Emoji (optional)',
    cancel: 'අවලංගු', del: 'මකන්න', save: 'සුරකින්න', close: 'වසන්න',
    need: 'නම සහ URL අවශ්‍යයි', badUrl: 'URL එක http:// හෝ https:// වලින් පටන් ගන්න ඕනේ',
    saved: 'සුරකින ලදී', removed: 'ඉවත් කරන ලදී', favFirst: 'මුලින් list එකට එකතු කරන්න',
    oTitle: 'Online නාලිකා සොයන්න', oPh: 'නම (හිස්ව තැබිය හැක)', oGo: 'සොයන්න',
    oLow: 'අඩු data (≤ 64 kbps පමණක්)', oHint: 'HTTPS streams පමණක්. ▶ එබුවාම ඇහෙනවා, ＋ එබුවාම list එකට එකතු වෙනවා.',
    oInit: '"සොයන්න" එබුවාම ලංකාවේ නාලිකා පෙන්වයි',
    searching: 'සොයමින්...', noResults: 'ප්‍රතිඵල නැහැ',
    noLow: '64 kbps හෝ ඊට අඩු නාලිකා නැහැ. "අඩු data" switch එක off කරන්න.',
    netFail: 'සම්බන්ධ විය නොහැක. Internet පරීක්ෂා කර නැවත උත්සාහ කරන්න.',
    cachedToast: 'සුරකින ලද ප්‍රතිඵල (data නොයයි)',
    unknownBr: 'bitrate නොදනී', perHour: 'MB/පැය',
    already: 'දැනටමත් list එකේ තිබේ', added: 'එකතු කරන ලදී',
    dTitle: 'Data භාවිතය', dToday: 'අද', dWeek: 'දින 7', dMonth: 'මේ මාසය',
    dNote: 'ආසන්න අගයක් පමණයි. Stream එකේ bitrate එක සහ ඇහුණ වේලාව අනුව ගණන් කරයි. Bitrate නොදන්නා නාලිකා 128 kbps ලෙස සලකයි. මෙය ඔබේ උපකරණයේ පමණක් සුරැකේ.',
    dReset: 'මකන්න', dConfirm: 'Data ගණන සියල්ල මකන්නද?', dResetOk: 'Data ගණන මකා දමන ලදී',
    footerNote: 'පුවත් ශීර්ෂ ඒවායේ මුල් ප්‍රකාශකයින්ට අයිතියි. කාලගුණය Open-Meteo වෙතින්. රේඩියෝ නාලිකා ඒවායේ හිමිකරුවන්ගේ.',
    footerBy: 'ඔබේම SL Hub'
  },
  en: {
    pageTitle: 'SL Hub - Sri Lanka news, weather and radio',
    skip: 'Skip to main content',
    nNews: 'News', nWeather: 'Weather', nRadio: 'Radio',
    themeToLight: 'Switch to light theme', themeToDark: 'Switch to dark theme', langAria: 'Change language',
    heroH: 'Sri Lanka, right now',
    heroP: 'The latest news, your city’s weather and your favourite radio stations in one place.',
    heroPlay: 'Listen to radio', heroRead: 'Read today’s news',
    heroNow: 'Colombo time', skyAria: 'Sky that follows Colombo time',
    tkLabel: 'Latest',
    newsH: 'Latest news', newsSub: 'Headlines from Sri Lankan outlets, linked to the original story.',
    searchPh: 'Search news', refresh: 'Refresh', more: 'More stories', sources: 'News sources',
    cAll: 'All', cLocal: 'Local', cBusiness: 'Business', cSports: 'Sports', cEnt: 'Entertainment',
    lAll: 'All languages', lSi: 'සිංහල', lEn: 'English', lTa: 'தமிழ்',
    savedTab: 'Saved ({0})',
    loading: 'Loading news...', noNews: 'No stories match this filter. Try another category.',
    notYet: 'No news yet. On GitHub open Actions → Update news → Run workflow to fill it.',
    loadFail: 'Could not load news. Check your internet and try again.',
    upd: 'Latest story: {0}', offlineCache: 'Showing saved news',
    noSaved: 'No saved stories. Tap 🔖 on a story to keep it here.',
    saveAria: 'Save story', unsaveAria: 'Remove from saved', savedOk: 'Saved', savedDel: 'Removed from saved',
    ago: { m: '{0}m ago', h: '{0}h ago', d: '{0}d ago', now: 'just now' },
    srcOk: '{0} ({1})', srcBad: '{0}: unavailable', openStory: 'Read the original story',
    weatherH: 'Weather', weatherSub: 'Open-Meteo estimates, in Sri Lanka time.',
    wxLoading: 'Loading weather...', wxFail: 'Weather is unavailable. Try again.',
    feels: 'Feels like', hum: 'Humidity', wind: 'Wind', uv: 'UV index', sunrise: 'Sunrise', sunset: 'Sunset',
    next12: 'Next hours', week: '7 days', today: 'Today', rainP: 'Rain',
    spineH: 'North to south', spineSub: 'Pick a city',
    wc: { 0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Fog', 48: 'Fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 80: 'Showers', 81: 'Showers', 82: 'Heavy showers', 95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm' },
    cities: { colombo: 'Colombo', kandy: 'Kandy', galle: 'Galle', jaffna: 'Jaffna', anuradhapura: 'Anuradhapura', trinco: 'Trincomalee', batticaloa: 'Batticaloa', nuwaraeliya: 'Nuwara Eliya', kurunegala: 'Kurunegala', ratnapura: 'Ratnapura', matara: 'Matara', badulla: 'Badulla', negombo: 'Negombo', hambantota: 'Hambantota' },
    dow: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dowS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    radioH: 'SL Radio', radioSub: 'Sri Lankan FM stations. Pick one, listen, keep your favourites.',
    pickStation: 'Pick a station', stopped: 'Stopped', connecting: 'Connecting...', live: 'Live', errorSt: 'Error',
    retrying: 'Reconnecting... ({0}/{1})', cantConnect: 'Cannot connect',
    prev: 'Previous station', next: 'Next station', play: 'Play', pause: 'Pause', vol: 'Volume', fav: 'Favourite', edit: 'Edit',
    sleepOff: 'Sleep timer: off', sleepOn: 'Sleep timer: {0} min', dataBtn: 'Data usage',
    rAll: 'All', rSi: 'Sinhala', rTa: 'Tamil', rEn: 'English', rMx: 'Mixed', rFav: 'Favourites',
    rSearch: 'Search stations', addStation: 'Add a station', findOnline: 'Find online',
    emptyList: 'No stations found',
    noUrl: 'No stream URL',
    httpWarn: 'HTTP stream: may not work on an HTTPS page',
    httpFail: "Stream won't open. Change the URL to HTTPS.",
    openFail: "Station won't open", playFail: 'Could not open',
    noSignal: 'No signal. Trying to reconnect',
    giveUp: 'Could not reconnect. Press play to try again',
    offlineToast: 'You are offline', sleepDone: 'Radio stopped',
    addTitle: 'Add a station', editTitle: 'Edit station',
    lName: 'Name', lFreq: 'Frequency (optional)', lUrl: 'Stream URL', lGenre: 'Language', lBitrate: 'Bitrate kbps (optional)', lEmoji: 'Emoji (optional)',
    cancel: 'Cancel', del: 'Delete', save: 'Save', close: 'Close',
    need: 'Name and URL are required', badUrl: 'URL must start with http:// or https://',
    saved: 'Saved', removed: 'Removed', favFirst: 'Add it to your list first',
    oTitle: 'Find stations online', oPh: 'Name (optional)', oGo: 'Search',
    oLow: 'Low data (≤ 64 kbps only)', oHint: 'HTTPS streams only. Press ▶ to listen and ＋ to add it to your list.',
    oInit: 'Press "Search" to list Sri Lankan stations',
    searching: 'Searching...', noResults: 'No results',
    noLow: 'No stations at 64 kbps or lower. Turn off the "Low data" switch.',
    netFail: 'Could not connect. Check your internet and try again.',
    cachedToast: 'Saved results (no data used)',
    unknownBr: 'bitrate unknown', perHour: 'MB/hr',
    already: 'Already in your list', added: 'Added',
    dTitle: 'Data usage', dToday: 'Today', dWeek: 'Last 7 days', dMonth: 'This month',
    dNote: 'Estimate only, based on stream bitrate and listening time. Stations with unknown bitrate count as 128 kbps. Stored on this device only.',
    dReset: 'Reset', dConfirm: 'Clear all usage data?', dResetOk: 'Usage cleared',
    footerNote: 'Headlines belong to their original publishers. Weather by Open-Meteo. Radio streams belong to their station owners.',
    footerBy: 'Your own SL Hub'
  }
};

/* උපයෝගිතා: storage, භාෂාව, තේමාව, toast, ලංකා වේලාව, navigation */
const $ = id => document.getElementById(id);
function load(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v } catch { return d } }
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch { } }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }
function safeUrl(u) { return /^https?:\/\//i.test(u) ? u : '#' }

/* ---------- භාෂාව ---------- */
const K_LANG = 'slradio_lang', K_THEME = 'slhub_theme';   // K_LANG පරණ SL Radio එකත් සමඟ බෙදාගනී
let LANG = load(K_LANG, 'si'); if (!I18N[LANG]) LANG = 'si';
const langHooks = [];
function onLang(fn) { langHooks.push(fn) }
function t(k, ...a) {
  let s = I18N[LANG][k]; if (s == null) s = I18N.si[k]; if (s == null) return k;
  if (typeof s !== 'string') return s;
  a.forEach((v, i) => { s = s.split('{' + i + '}').join(v) });
  return s;
}
function applyI18n() {
  document.documentElement.lang = LANG;
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')) });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')) });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))) });
  $('langBtn').textContent = LANG === 'si' ? 'EN' : 'සිං';
  langHooks.forEach(f => f());
}
function setLang(l) { LANG = l; save(K_LANG, l); applyI18n() }

/* ---------- තේමාව ---------- */
let THEME = load(K_THEME, 'dark'); if (THEME !== 'light') THEME = 'dark';
function applyTheme() {
  document.documentElement.dataset.theme = THEME;
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = THEME === 'dark' ? '#07122b' : '#eef4fb';
  const b = $('themeBtn'); if (b) { b.textContent = THEME === 'dark' ? '☀' : '☾'; b.setAttribute('aria-label', t(THEME === 'dark' ? 'themeToLight' : 'themeToDark')) }
}
function toggleTheme() { THEME = THEME === 'dark' ? 'light' : 'dark'; save(K_THEME, THEME); applyTheme() }

/* ---------- Toast ---------- */
function toast(msg, ms = 2800) {
  const el = $('toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), ms);
}

/* ---------- ලංකා වේලාව (UTC+5:30, DST නැත) ---------- */
function lkNow() {
  const x = new Date(Date.now() + 330 * 60000);
  return { y: x.getUTCFullYear(), mo: x.getUTCMonth(), day: x.getUTCDate(), dow: x.getUTCDay(), h: x.getUTCHours(), mi: x.getUTCMinutes(), dec: x.getUTCHours() + x.getUTCMinutes() / 60 };
}
function fmt12(h, m) { return { t: (h % 12 || 12) + ':' + String(m).padStart(2, '0'), ap: h >= 12 ? 'PM' : 'AM' } }
let clockLast = '';
function tickClock() {
  const p = lkNow(), f = fmt12(p.h, p.mi), L = I18N[LANG];
  const date = LANG === 'si' ? `${L.months[p.mo]} ${p.day}, ${L.dow[p.dow]}` : `${L.dow[p.dow]}, ${p.day} ${L.months[p.mo]}`;
  const key = f.t + f.ap + date; if (key === clockLast) return; clockLast = key;
  $('navClock').textContent = `${f.t} ${f.ap}`;
  $('heroClock').innerHTML = `${esc(f.t)}<small>${f.ap}</small>`;
  $('heroDate').textContent = date;
  if (window.updateSky) window.updateSky();
}

/* ---------- Navigation (scroll spy) ---------- */
function initNav() {
  const links = [...document.querySelectorAll('.links a')];
  const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)) });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(s => io.observe(s));
}

/* Hero අහස: කොළඹ වේලාවට අනුව වර්ණ, සූර්යයා/සඳ, තරු */
const SKY_KEYS = [
  [0, '#050a1a', '#0a1736', '#14224d'], [5.4, '#050a1a', '#0a1736', '#14224d'],
  [6.3, '#1a2a6c', '#b5446e', '#f6a948'], [8, '#0d3b82', '#2a79c4', '#8fd3f4'],
  [16.4, '#0d3b82', '#2a79c4', '#8fd3f4'], [18.2, '#1b2358', '#9b2c5b', '#f59e0b'],
  [19.2, '#050a1a', '#0a1736', '#14224d'], [24, '#050a1a', '#0a1736', '#14224d']
];
let SUN_RISE = 5.97, SUN_SET = 18.2;           // Open-Meteo වෙතින් ලැබුණාම යාවත්කාලීන වේ
let skyBooted = false;

function hex2rgb(h) { return [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)) }
function mixHex(a, b, k) {
  const A = hex2rgb(a), B = hex2rgb(b);
  return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * k).toString(16).padStart(2, '0')).join('');
}
function skyAt(h) {
  for (let i = 0; i < SKY_KEYS.length - 1; i++) {
    const a = SKY_KEYS[i], b = SKY_KEYS[i + 1];
    if (h >= a[0] && h <= b[0]) {
      const k = b[0] === a[0] ? 0 : (h - a[0]) / (b[0] - a[0]);
      return [mixHex(a[1], b[1], k), mixHex(a[2], b[2], k), mixHex(a[3], b[3], k)];
    }
  }
  return [SKY_KEYS[0][1], SKY_KEYS[0][2], SKY_KEYS[0][3]];
}
function setSunTimes(sr, ss) { if (sr > 3 && ss > sr) { SUN_RISE = sr; SUN_SET = ss; updateSky() } }
function setSkyWx(code) {
  const sky = $('sky'); if (!sky) return;
  sky.classList.toggle('wx-rain', code >= 51 && code <= 99 && code !== 0);
  sky.classList.toggle('wx-cloud', code === 3 || code === 45 || code === 48);
}
function updateSky() {
  const sky = $('sky'); if (!sky) return;
  const p = lkNow(), d = p.dec;
  const c = skyAt(d);
  sky.style.setProperty('--s1', c[0]); sky.style.setProperty('--s2', c[1]); sky.style.setProperty('--s3', c[2]);
  const isDay = d >= SUN_RISE && d <= SUN_SET;
  const nightLen = 24 - SUN_SET + SUN_RISE;
  let prog;
  if (isDay) prog = (d - SUN_RISE) / (SUN_SET - SUN_RISE);
  else prog = ((d >= SUN_SET ? d - SUN_SET : d + 24 - SUN_SET)) / nightLen;
  const elev = Math.sin(Math.PI * prog);
  const x = 10 + prog * 80;
  const star = (d < 5.4 || d > 19.2) ? 1 : (d < 6.3 ? (6.3 - d) / .9 : (d > 18.2 ? (d - 18.2) / 1 : 0));
  const apply = () => {
    sky.style.setProperty('--sun-x', x.toFixed(1) + '%');
    sky.style.setProperty('--sun-y', (elev * 100).toFixed(1));
    sky.style.setProperty('--stars', Math.max(0, Math.min(1, star)).toFixed(2));
    sky.classList.toggle('is-night', !isDay);
  };
  if (!skyBooted) {
    skyBooted = true;
    // එක් වරක් පමණක්: සූර්යයා/සඳ horizon එකෙන් නැගී අදාල තැනට යයි
    sky.classList.remove('ready');
    sky.style.setProperty('--sun-x', '10%'); sky.style.setProperty('--sun-y', '0');
    sky.style.setProperty('--stars', '0');
    requestAnimationFrame(() => requestAnimationFrame(() => { sky.classList.add('ready'); apply() }));
  } else apply();
}
window.updateSky = updateSky; window.setSunTimes = setSunTimes; window.setSkyWx = setSkyWx;

/* කාලගුණය: Open-Meteo (API key අවශ්‍ය නැත). නගර 14, උතුරේ සිට දකුණට. */
const CITIES = { colombo: [6.9271, 79.8612], kandy: [7.2906, 80.6337], galle: [6.0535, 80.2210], jaffna: [9.6615, 80.0255], anuradhapura: [8.3114, 80.4037], trinco: [8.5874, 81.2152], batticaloa: [7.7102, 81.6924], nuwaraeliya: [6.9497, 80.7891], kurunegala: [7.4818, 80.3609], ratnapura: [6.6828, 80.3992], matara: [5.9549, 80.5550], badulla: [6.9934, 81.0550], negombo: [7.2008, 79.8737], hambantota: [6.1246, 81.1185] };
const CITY_ORDER = Object.keys(CITIES).sort((a, b) => CITIES[b][0] - CITIES[a][0]);
const K_CITY = 'slhub_city', K_WX = 'slhub_wx2';
let city = load(K_CITY, 'colombo'); if (!CITIES[city]) city = 'colombo';
let wxDetail = null, wxAll = null, wxFailed = false;

function wIcon(c, day = true) {
  if (c === 0) return day ? '☀️' : '🌙'; if (c === 1) return day ? '🌤️' : '🌙'; if (c === 2) return '⛅'; if (c === 3) return '☁️';
  if (c === 45 || c === 48) return '🌫️'; if (c >= 51 && c <= 57) return '🌦️'; if (c >= 61 && c <= 67) return '🌧️';
  if (c >= 71 && c <= 77) return '❄️'; if (c >= 80 && c <= 82) return '🌧️'; if (c >= 95) return '⛈️'; return '🌡️';
}
function wText(c) {
  const m = I18N[LANG].wc; if (m[c]) return m[c];
  if (c >= 51 && c <= 57) return m[53]; if (c >= 61 && c <= 67) return m[63];
  if (c >= 80 && c <= 82) return m[81]; if (c >= 95) return m[95]; return '';
}
function isoTime(iso) { const m = /T(\d\d):(\d\d)/.exec(iso || ''); if (!m) return '—'; const f = fmt12(+m[1], +m[2]); return f.t + ' ' + f.ap }
function isoDec(iso) { const m = /T(\d\d):(\d\d)/.exec(iso || ''); return m ? +m[1] + (+m[2]) / 60 : 0 }
function tempHue(tc) { const x = Math.max(0, Math.min(1, (tc - 22) / 12)); return Math.round(195 - x * 185) }

async function getJson(url) {
  const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 9000);
  try { const r = await fetch(url, { signal: ctl.signal }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json() }
  finally { clearTimeout(to) }
}
const WX_TTL = 30 * 60000;
async function loadAll(force) {
  const cache = load(K_WX, {}), hit = cache.all;
  if (hit) { wxAll = hit.d; renderSpine() }
  if (!force && hit && Date.now() - hit.t < WX_TTL) return;
  try {
    const la = CITY_ORDER.map(k => CITIES[k][0]).join(','), lo = CITY_ORDER.map(k => CITIES[k][1]).join(',');
    let d = await getJson('https://api.open-meteo.com/v1/forecast?latitude=' + la + '&longitude=' + lo + '&current=temperature_2m,weather_code,is_day&timezone=Asia%2FColombo');
    if (!Array.isArray(d)) d = [d];
    const map = {}; CITY_ORDER.forEach((k, i) => { if (d[i] && d[i].current) map[k] = d[i].current });
    wxAll = map; const c = load(K_WX, {}); c.all = { t: Date.now(), d: map }; save(K_WX, c); renderSpine();
  } catch (e) { /* පරණ දත්ත තිබේ නම් ඒවා පෙන්වයි */ }
}
async function loadDetail(force) {
  const cache = load(K_WX, {}), hit = cache['c_' + city];
  if (hit) { wxDetail = hit.d; wxFailed = false; renderDetail() }
  if (!force && hit && Date.now() - hit.t < WX_TTL) return;
  const mine = city;
  try {
    const [la, lo] = CITIES[city];
    const d = await getJson('https://api.open-meteo.com/v1/forecast?latitude=' + la + '&longitude=' + lo +
      '&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day' +
      '&hourly=temperature_2m,weather_code,precipitation_probability' +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max' +
      '&timezone=Asia%2FColombo&forecast_days=7');
    if (!d.current || !d.daily || !d.hourly) throw new Error('bad');
    if (mine !== city) return;
    wxDetail = d; wxFailed = false;
    const c = load(K_WX, {}); c['c_' + mine] = { t: Date.now(), d }; save(K_WX, c);
    renderDetail();
  } catch (e) { if (mine === city && !wxDetail) { wxFailed = true; renderDetail() } }
}
function selectCity(k) {
  if (!CITIES[k] || k === city) return;
  city = k; save(K_CITY, k); wxDetail = null; wxFailed = false; renderSpine(); renderDetail(); loadDetail(false);
}

function renderSpine() {
  const el = $('spine'); if (!el) return;
  el.innerHTML = CITY_ORDER.map(k => {
    const c = wxAll && wxAll[k];
    const tc = c ? Math.round(c.temperature_2m) : null;
    const dot = tc == null ? 'var(--line)' : `hsl(${tempHue(tc)} 85% 58%)`;
    return `<li><button type="button" class="sp ${k === city ? 'on' : ''}" data-city="${k}" aria-pressed="${k === city}">
      <i class="sp-dot" style="background:${dot}"></i><span class="sp-n">${esc(I18N[LANG].cities[k])}</span>
      <span class="sp-i" aria-hidden="true">${c ? wIcon(c.weather_code, c.is_day !== 0) : ''}</span><b class="sp-t">${tc == null ? '–' : tc + '°'}</b></button></li>`;
  }).join('');
  el.querySelectorAll('[data-city]').forEach(b => b.onclick = () => selectCity(b.dataset.city));
}

function renderDetail() {
  const el = $('wxDetail'); if (!el) return;
  const name = I18N[LANG].cities[city];
  if (!wxDetail) {
    el.innerHTML = `<div class="wx-msg"><h3>${esc(name)}</h3><p>${esc(t(wxFailed ? 'wxFail' : 'wxLoading'))}</p>${wxFailed ? `<button class="btn ghost" id="wxRetry" type="button">${esc(t('refresh'))}</button>` : ''}</div>`;
    const r = $('wxRetry'); if (r) r.onclick = () => { wxFailed = false; renderDetail(); loadDetail(true) };
    renderHeroWx(); return;
  }
  const d = wxDetail, c = d.current, dy = d.daily, hr = d.hourly, day = c.is_day !== 0;
  const curHour = (c.time || '').slice(0, 13) + ':00';
  let i0 = hr.time.findIndex(x => x >= curHour); if (i0 < 0) i0 = 0;
  const hours = hr.time.slice(i0, i0 + 12).map((tm, j) => {
    const idx = i0 + j, h = +tm.slice(11, 13), f = fmt12(h, 0), dayH = h >= 6 && h < 18;
    const rp = hr.precipitation_probability ? hr.precipitation_probability[idx] : null;
    return `<li><span class="h-t">${j === 0 ? esc(t('today')) : f.t + ' ' + f.ap}</span><span class="h-i" aria-hidden="true">${wIcon(hr.weather_code[idx], dayH)}</span><b>${Math.round(hr.temperature_2m[idx])}°</b><span class="h-r">${rp == null ? '' : rp + '%'}</span></li>`;
  }).join('');
  const mins = dy.temperature_2m_min.slice(0, 7), maxs = dy.temperature_2m_max.slice(0, 7);
  const gmin = Math.min(...mins), gmax = Math.max(...maxs), span = Math.max(1, gmax - gmin);
  const L = I18N[LANG];
  const days = dy.time.slice(0, 7).map((dt, i) => {
    const dow = new Date(dt + 'T00:00:00Z').getUTCDay();
    const left = ((mins[i] - gmin) / span) * 100, w = Math.max(8, ((maxs[i] - mins[i]) / span) * 100);
    const rp = dy.precipitation_probability_max[i];
    return `<li><span class="d-n">${i === 0 ? esc(t('today')) : esc(L.dowS[dow])}</span><span class="d-i" aria-hidden="true">${wIcon(dy.weather_code[i])}</span>
      <span class="d-r">${rp == null ? '' : rp + '%'}</span><span class="d-lo">${Math.round(mins[i])}°</span>
      <span class="d-bar"><i style="left:${left.toFixed(0)}%;width:${w.toFixed(0)}%;background:linear-gradient(90deg,hsl(${tempHue(mins[i])} 85% 58%),hsl(${tempHue(maxs[i])} 85% 58%))"></i></span><b class="d-hi">${Math.round(maxs[i])}°</b></li>`;
  }).join('');
  const uv = dy.uv_index_max ? Math.round(dy.uv_index_max[0]) : '–';
  el.innerHTML = `
    <div class="wx-head">
      <div><h3>${esc(name)}</h3><p class="wx-cond">${esc(wText(c.weather_code))}</p></div>
      <div class="wx-big"><span class="wx-ico" aria-hidden="true">${wIcon(c.weather_code, day)}</span><span class="wx-deg">${Math.round(c.temperature_2m)}<sup>°C</sup></span></div>
    </div>
    <dl class="facts">
      <div><dt>${esc(t('feels'))}</dt><dd>${Math.round(c.apparent_temperature)}°</dd></div>
      <div><dt>${esc(t('hum'))}</dt><dd>${Math.round(c.relative_humidity_2m)}%</dd></div>
      <div><dt>${esc(t('wind'))}</dt><dd>${Math.round(c.wind_speed_10m)} km/h</dd></div>
      <div><dt>${esc(t('uv'))}</dt><dd>${uv}</dd></div>
      <div><dt>${esc(t('sunrise'))}</dt><dd>${isoTime(dy.sunrise[0])}</dd></div>
      <div><dt>${esc(t('sunset'))}</dt><dd>${isoTime(dy.sunset[0])}</dd></div>
    </dl>
    <h4 class="sub">${esc(t('next12'))}</h4>
    <ol class="hours">${hours}</ol>
    <h4 class="sub">${esc(t('week'))}</h4>
    <ol class="days">${days}</ol>`;
  setSunTimes(isoDec(dy.sunrise[0]), isoDec(dy.sunset[0]));
  setSkyWx(c.weather_code);
  renderHeroWx();
}
function renderHeroWx() {
  const el = $('heroWx'); if (!el) return;
  if (!wxDetail) { el.innerHTML = ''; return }
  const c = wxDetail.current;
  el.innerHTML = `<span class="hw-i" aria-hidden="true">${wIcon(c.weather_code, c.is_day !== 0)}</span><span class="hw-t">${Math.round(c.temperature_2m)}°</span><span class="hw-c">${esc(I18N[LANG].cities[city])}<br>${esc(wText(c.weather_code))}</span>`;
}
function initWeather() { onLang(() => { renderSpine(); renderDetail() }); renderSpine(); renderDetail(); loadAll(false); loadDetail(false) }

/* පුවත්: data/news.json (GitHub Actions මගින් RSS වලින් හදයි). ශීර්ෂය + කෙටි කොටසක් + මුල් ලිපියට link පමණයි. */
const K_SAVED = 'slhub_saved', K_NEWS = 'slhub_news';
let news = { items: [], sources: [], generated_at: 0 }, newsLoaded = false, newsLoading = false;
let fCat = 'all', fLang = 'all', fQ = '', showSaved = false, shownMore = 12, lastNewsFetch = 0;
let saved = load(K_SAVED, []);

function ago(ts) {
  const s = Math.max(0, Date.now() / 1000 - ts), L = I18N[LANG].ago;
  if (s < 90) return L.now;
  if (s < 3600) return L.m.replace('{0}', Math.round(s / 60));
  if (s < 86400) return L.h.replace('{0}', Math.round(s / 3600));
  return L.d.replace('{0}', Math.round(s / 86400));
}
async function loadNews(manual) {
  if (newsLoading) return; newsLoading = true;
  if (!newsLoaded) $('leadBox').innerHTML = '<div class="skel big"></div>';
  try {
    const r = await fetch('data/news.json?' + (Date.now() / 60000 | 0), { cache: 'no-store' });
    if (r.status === 404) { news = { items: [], sources: [], generated_at: 0 }; newsLoaded = true; renderNews(); newsLoading = false; return }
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const d = await r.json();
    if (!d || !Array.isArray(d.items)) throw new Error('bad');
    news = d; newsLoaded = true; lastNewsFetch = Date.now();
    save(K_NEWS, { items: d.items.slice(0, 150), sources: d.sources || [] });
    shownMore = 12; renderNews();
    if (manual) toast(t('upd', d.items.length ? ago(d.items[0].ts) : '—'));
  } catch (e) {
    const c = load(K_NEWS, null);
    if (c && c.items && c.items.length) { news = { items: c.items, sources: c.sources || [], generated_at: 0 }; newsLoaded = true; renderNews(); toast(t('offlineCache'), 3500) }
    else { newsLoaded = true; news = { items: [], sources: [], generated_at: 0, failed: true }; renderNews() }
  }
  newsLoading = false;
}
function maybeRefreshNews() { if (newsLoaded && Date.now() - lastNewsFetch > 10 * 60000) loadNews(false) }

function filteredNews() {
  const q = fQ.toLowerCase();
  return news.items.filter(i => (fCat === 'all' || i.cat === fCat) && (fLang === 'all' || i.lang === fLang) &&
    (!q || i.title.toLowerCase().includes(q) || (i.summary || '').toLowerCase().includes(q)));
}
function catName(c) { return ({ local: t('cLocal'), business: t('cBusiness'), sports: t('cSports'), entertainment: t('cEnt') })[c] || '' }
function bmBtn(i) {
  const on = saved.some(s => s.id === i.id);
  return `<button type="button" class="bm ${on ? 'on' : ''}" data-bm="${esc(i.id)}" aria-pressed="${on}" aria-label="${esc(t(on ? 'unsaveAria' : 'saveAria'))}">${on ? '🔖' : '🏷️'}</button>`;
}
function metaHtml(i) {
  return `<div class="meta"><span class="src">${esc(i.source)}</span><span>${esc(ago(i.ts))}</span>${catName(i.cat) ? `<span class="catl">${esc(catName(i.cat))}</span>` : ''}</div>`;
}
function leadHtml(i) {
  return `<article class="lead cat-${esc(i.cat)}"><a class="lead-t" href="${esc(safeUrl(i.link))}" target="_blank" rel="noopener noreferrer">${esc(i.title)}</a>
    ${i.summary ? `<p>${esc(i.summary)}</p>` : ''}${metaHtml(i)}${bmBtn(i)}</article>`;
}
function wireHtml(i) {
  return `<li class="cat-${esc(i.cat)}"><a href="${esc(safeUrl(i.link))}" target="_blank" rel="noopener noreferrer">${esc(i.title)}</a>${metaHtml(i)}${bmBtn(i)}</li>`;
}
function storyHtml(i) {
  return `<article class="story cat-${esc(i.cat)}"><a class="story-t" href="${esc(safeUrl(i.link))}" target="_blank" rel="noopener noreferrer">${esc(i.title)}</a>
    ${i.summary ? `<p>${esc(i.summary)}</p>` : ''}${metaHtml(i)}${bmBtn(i)}</article>`;
}
function renderChips() {
  const cats = [['all', 'cAll'], ['local', 'cLocal'], ['business', 'cBusiness'], ['sports', 'cSports'], ['entertainment', 'cEnt']];
  const langs = [['all', 'lAll'], ['si', 'lSi'], ['en', 'lEn'], ['ta', 'lTa']];
  $('catChips').innerHTML = cats.map(([k, l]) => `<button type="button" class="chip ${!showSaved && fCat === k ? 'on' : ''}" data-c="${k}">${esc(t(l))}</button>`).join('') +
    `<button type="button" class="chip saved ${showSaved ? 'on' : ''}" id="savedChip">${esc(t('savedTab', saved.length))}</button>`;
  $('langChips').innerHTML = langs.map(([k, l]) => `<button type="button" class="chip alt ${fLang === k ? 'on' : ''}" data-l="${k}">${esc(t(l))}</button>`).join('');
  $('catChips').querySelectorAll('[data-c]').forEach(b => b.onclick = () => { showSaved = false; fCat = b.dataset.c; shownMore = 12; renderNews() });
  $('savedChip').onclick = () => { showSaved = !showSaved; shownMore = 12; renderNews() };
  $('langChips').querySelectorAll('[data-l]').forEach(b => b.onclick = () => { fLang = b.dataset.l; shownMore = 12; renderNews() });
}
function renderTicker() {
  const items = news.items.slice(0, 14), box = $('ticker');
  if (!items.length) { box.hidden = true; return }
  box.hidden = false;
  const one = items.map(i => `<a href="${esc(safeUrl(i.link))}" target="_blank" rel="noopener noreferrer">${esc(i.title)}</a>`).join('');
  $('tkRun').innerHTML = one + one;
}
function renderNews() {
  if (!newsLoaded) return;
  renderChips(); renderTicker();
  let pool = showSaved ? saved : filteredNews();
  if (showSaved) pool = pool.filter(i => (fLang === 'all' || i.lang === fLang) && (!fQ || i.title.toLowerCase().includes(fQ.toLowerCase())));
  const latest = news.items[0];
  $('updated').textContent = latest ? t('upd', ago(latest.ts)) : '';
  const lead = $('leadBox'), wire = $('wireBox'), grid = $('gridBox'), more = $('more');
  wire.innerHTML = ''; grid.innerHTML = ''; more.hidden = true;
  if (!pool.length) {
    const msg = showSaved ? 'noSaved' : (news.failed ? 'loadFail' : (!news.items.length ? 'notYet' : 'noNews'));
    lead.innerHTML = `<p class="empty">${esc(t(msg))}</p>`;
  } else {
    lead.innerHTML = leadHtml(pool[0]);
    wire.innerHTML = pool.slice(1, 7).map(wireHtml).join('');
    const rest = pool.slice(7);
    grid.innerHTML = rest.slice(0, shownMore).map(storyHtml).join('');
    more.hidden = rest.length <= shownMore;
  }
  document.querySelectorAll('#newsBody [data-bm]').forEach(b => b.onclick = e => {
    e.preventDefault(); const id = b.dataset.bm, idx = saved.findIndex(s => s.id === id);
    if (idx >= 0) { saved.splice(idx, 1); toast(t('savedDel'), 1400) }
    else { const it = news.items.find(x => x.id === id) || pool.find(x => x.id === id); if (it) { saved.unshift(it); saved = saved.slice(0, 100); toast(t('savedOk'), 1400) } }
    save(K_SAVED, saved); renderNews();
  });
  const srcs = news.sources || [];
  $('srcs').hidden = !srcs.length;
  $('srcList').innerHTML = srcs.map(s => `<li class="${s.ok ? '' : 'bad'}">${esc(s.ok ? t('srcOk', s.name, s.count) : t('srcBad', s.name))}</li>`).join('');
}
function initNews() {
  onLang(renderNews);
  $('q').oninput = e => { fQ = e.target.value.trim(); shownMore = 12; renderNews() };
  $('more').onclick = () => { shownMore += 12; renderNews() };
  $('refresh').onclick = () => { loadNews(true); loadAll(true); loadDetail(true) };
  document.addEventListener('visibilitychange', () => { if (!document.hidden) maybeRefreshNews() });
  loadNews(false);
}

/* SL Radio: ඔබේ දැනට වැඩ කරන කේතයම (reconnect, data ගණකය, online සෙවුම, sleep timer) + FM dial + mini player */
const K_ST = 'slradio_st_v2', K_FAV = 'slradio_fav_v1', K_VER = 'slradio_ver', OLD_K_ST = 'slradio_st_v1';
const K_CACHE = 'slradio_cache_v1', K_LOW = 'slradio_low', K_DATA = 'slradio_data_v1', K_LAST = 'slhub_last';
const DATA_VER = 2;     // DEFAULT_STATIONS වෙනස් කළොත් මෙය වැඩි කරන්න
const FM_MIN = 87.5, FM_MAX = 108;

const DEFAULT_STATIONS = [
  { id: 'hiru', name: 'Hiru FM', freq: '96.1', emoji: '🎵', genre: 'Sinhala', url: 'https://radio.lotustechnologieslk.net:2020/stream/hirufmgalle' },
  { id: 'sirasa', name: 'Sirasa FM', freq: '106.5', emoji: '🎤', genre: 'Sinhala', url: 'http://live.trusl.com:1170/;' },
  { id: 'shaa', name: 'Shaa FM', freq: '90.9', emoji: '🌟', genre: 'Sinhala', url: 'https://radio.lotustechnologieslk.net:8026/stream' },
  { id: 'neth', name: 'Neth FM', freq: '94.8', emoji: '🎧', genre: 'Sinhala', url: 'https://cp11.serverse.com/proxy/nethfm/stream' },
  { id: 'gold', name: 'Gold FM', freq: '92.2', emoji: '🎸', genre: 'English', url: 'https://radio.lotustechnologieslk.net:2010/stream/goldfmgalle' },
  { id: 'sooriyan', name: 'Sooriyan FM', freq: '103.4', emoji: '🌺', genre: 'Tamil', url: 'https://radio.lotustechnologieslk.net:8006/stream' },
  { id: 'fox', name: 'FOX 91.4', freq: '91.4', emoji: '🦊', genre: 'Mixed', url: 'http://142.132.250.174:7673/stream' },
  { id: 'city', name: 'City FM', freq: '89.6', emoji: '🏙️', genre: 'Mixed', url: 'http://220.247.227.20:8000/citystream' },
  { id: 'rhythm', name: 'Rhythm FM', freq: '107.3', emoji: '🎶', genre: 'Sinhala', url: 'http://209.133.216.3:7148/stream' },
];

let stations = load(K_ST, null);
if (!stations) stations = load(OLD_K_ST, null) || DEFAULT_STATIONS.map(s => ({ ...s }));
if (load(K_VER, 0) < DATA_VER) {
  DEFAULT_STATIONS.forEach(d => { if (!stations.some(s => s.id === d.id)) stations.push({ ...d }) });
  save(K_ST, stations); save(K_VER, DATA_VER);
}
let favs = load(K_FAV, ['hiru']);
let current = null, playing = false, baseVolume = 0.8;
let sleepMin = 0, sleepTO = null, fadeIV = null;
let rFilter = 'all', rQuery = '', editingId = null;
const RETRY_DELAYS = [2000, 4000, 8000, 15000, 30000];
let retryN = 0, retryTO = null, waitTO = null, userPaused = false, switching = false;
let segStart = null, segBps = 16000, statusKey = null;
const audio = $('audio');

function isMixed(url) { return location.protocol === 'https:' && /^http:\/\//i.test(url) }
function setStatus(txt) { $('npStatus').textContent = txt; $('miniStatus').textContent = txt }
function freqNum(s) { const f = parseFloat(s && s.freq); return isFinite(f) && f >= FM_MIN && f <= FM_MAX ? f : null }

/* ---------- Data ගණකය ---------- */
function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0') }
function addData(bytes) {
  if (!(bytes > 0)) return;
  const d = load(K_DATA, {}), k = dayKey(); d[k] = (d[k] || 0) + bytes;
  const keys = Object.keys(d).sort(); while (keys.length > 40) delete d[keys.shift()];
  save(K_DATA, d);
}
function flushData(end) {
  if (segStart == null) return;
  const now = Date.now(), sec = Math.min((now - segStart) / 1000, 300);
  addData(sec * segBps); segStart = end ? null : now;
}
function fmtBytes(b) {
  if (b < 1048576) return Math.max(0, Math.round(b / 1024)) + ' KB';
  if (b < 1073741824) return (b / 1048576).toFixed(b < 10485760 ? 1 : 0) + ' MB';
  return (b / 1073741824).toFixed(2) + ' GB';
}
function renderData() {
  const d = load(K_DATA, {}), now = new Date(), today = dayKey(now), days = [];
  for (let i = 6; i >= 0; i--) { const x = new Date(now); x.setDate(x.getDate() - i); days.push(dayKey(x)) }
  const vals = days.map(k => d[k] || 0), max = Math.max(...vals, 1), week = vals.reduce((a, b) => a + b, 0);
  const month = Object.keys(d).filter(k => k.startsWith(today.slice(0, 7))).reduce((a, k) => a + d[k], 0);
  $('dSum').innerHTML =
    `<div><b>${fmtBytes(d[today] || 0)}</b><span>${esc(t('dToday'))}</span></div><div><b>${fmtBytes(week)}</b><span>${esc(t('dWeek'))}</span></div><div><b>${fmtBytes(month)}</b><span>${esc(t('dMonth'))}</span></div>`;
  $('dBars').innerHTML = days.map((k, i) => `<div class="drow"><span class="dl">${k === today ? esc(t('dToday')) : k.slice(5)}</span><span class="dbar"><i style="width:${Math.round(vals[i] / max * 100)}%"></i></span><span class="dv">${fmtBytes(vals[i])}</span></div>`).join('');
}

/* ---------- Auto-reconnect ---------- */
function clearRetry() { clearTimeout(retryTO); retryTO = null }
function clearWait() { clearTimeout(waitTO); waitTO = null }
function scheduleRetry() {
  if (!current || userPaused || isMixed(current.url) || retryTO) return;
  if (retryN >= RETRY_DELAYS.length) { retryN = 0; statusKey = ['cantConnect']; setStatus(t('cantConnect')); toast(t('giveUp'), 4000); return }
  const delay = RETRY_DELAYS[retryN++];
  statusKey = ['retrying', retryN, RETRY_DELAYS.length]; setStatus(t('retrying', retryN, RETRY_DELAYS.length));
  retryTO = setTimeout(() => {
    retryTO = null; if (!current || userPaused) return;
    audio.src = current.url; audio.load(); audio.play().catch(onPlayReject);
  }, delay);
}
function onPlayReject(err) {
  console.warn(err);
  if (err && err.name === 'AbortError') return;
  playing = false; updateUI();
  if (err && err.name === 'NotAllowedError') { statusKey = ['stopped']; setStatus(t('stopped')); toast(t('playFail')); return }
  if (current && isMixed(current.url)) { statusKey = ['errorSt']; setStatus(t('errorSt')); toast(t('httpFail')); return }
  if (retryN === 0) toast(t('openFail'));
  scheduleRetry();
}

/* ---------- Render ---------- */
function stationFiltered() {
  return stations.filter(s => {
    if (rFilter === 'fav' && !favs.includes(s.id)) return false;
    if (rFilter !== 'all' && rFilter !== 'fav' && s.genre !== rFilter) return false;
    if (rQuery) { const q = rQuery.toLowerCase(); if (!s.name.toLowerCase().includes(q) && !(s.freq || '').includes(q)) return false }
    return true;
  });
}
function renderRTabs() {
  const g = [['all', 'rAll'], ['Sinhala', 'rSi'], ['Tamil', 'rTa'], ['English', 'rEn'], ['Mixed', 'rMx'], ['fav', 'rFav']];
  $('rTabs').innerHTML = g.map(([k, l]) => `<button type="button" class="chip ${rFilter === k ? 'on' : ''}" data-g="${k}">${esc(t(l))}</button>`).join('');
  $('rTabs').querySelectorAll('[data-g]').forEach(b => b.onclick = () => { rFilter = b.dataset.g; renderRTabs(); renderStations() });
}
function renderStations() {
  const list = stationFiltered();
  if (!list.length) { $('rList').innerHTML = `<li class="empty">${esc(t('emptyList'))}</li>`; return }
  $('rList').innerHTML = list.map(s => {
    const on = current && current.id === s.id, fav = favs.includes(s.id);
    return `<li class="st ${on ? 'playing' : ''}" data-id="${esc(s.id)}">
      <button type="button" class="st-main" data-play="${esc(s.id)}"><span class="st-ico" aria-hidden="true">${esc(s.emoji || '📻')}</span>
        <span class="st-tx"><b>${esc(s.name)}</b><span>${s.freq ? esc(s.freq) + ' FM' : ''}<em>${esc(s.genre || '')}${s.bitrate ? ' ' + esc(s.bitrate) + 'k' : ''}</em>${isMixed(s.url) ? '<em class="warn">HTTP</em>' : ''}</span></span></button>
      <button type="button" class="ib ${fav ? 'on' : ''}" data-fav="${esc(s.id)}" aria-label="${esc(t('fav'))}" aria-pressed="${fav}">${fav ? '★' : '☆'}</button>
      <button type="button" class="ib" data-edit="${esc(s.id)}" aria-label="${esc(t('edit'))}">✎</button></li>`;
  }).join('');
  $('rList').querySelectorAll('[data-play]').forEach(b => b.onclick = () => playStation(stations.find(x => x.id === b.dataset.play)));
  $('rList').querySelectorAll('[data-fav]').forEach(b => b.onclick = () => toggleFav(b.dataset.fav));
  $('rList').querySelectorAll('[data-edit]').forEach(b => b.onclick = () => openEdit(b.dataset.edit));
}
function renderDial() {
  const marks = stations.filter(freqNum).map(s => {
    const left = ((freqNum(s) - FM_MIN) / (FM_MAX - FM_MIN)) * 100, on = current && current.id === s.id;
    return `<button type="button" class="mark ${on ? 'on' : ''}" style="left:${left.toFixed(2)}%" data-mk="${esc(s.id)}" aria-label="${esc(s.name)} ${esc(s.freq)} FM"><i></i></button>`;
  }).join('');
  $('dialMarks').innerHTML = marks;
  $('dialMarks').querySelectorAll('[data-mk]').forEach(b => b.onclick = () => playStation(stations.find(x => x.id === b.dataset.mk)));
  const f = current && freqNum(current), n = $('needle');
  if (f) { n.style.left = (((f - FM_MIN) / (FM_MAX - FM_MIN)) * 100).toFixed(2) + '%'; n.classList.add('on') } else n.classList.remove('on');
}
function renderNP() {
  const s = current;
  $('npArt').textContent = s ? (s.emoji || '📻') : '📻';
  $('npName').textContent = s ? s.name : t('pickStation');
  $('npFreq').innerHTML = s && s.freq ? `${esc(s.freq)}<small>FM</small>` : '<span class="dash">––.–</span>';
  $('npFav').textContent = s && favs.includes(s.id) ? '★' : '☆';
  $('npFav').classList.toggle('on', !!(s && favs.includes(s.id)));
  $('rPlay').textContent = playing ? '❚❚' : '▶';
  $('rPlay').setAttribute('aria-label', t(playing ? 'pause' : 'play'));
  $('eq').classList.toggle('on', playing);
  $('miniArt').textContent = s ? (s.emoji || '📻') : '📻';
  $('miniName').textContent = s ? s.name : '';
  $('miniPlay').textContent = playing ? '❚❚' : '▶';
  $('miniPlay').setAttribute('aria-label', t(playing ? 'pause' : 'play'));
  $('mini').hidden = !s;
  document.body.classList.toggle('has-mini', !!s);
  $('rSleep').textContent = sleepMin ? t('sleepOn', sleepMin) : t('sleepOff');
  $('rSleep').classList.toggle('on', !!sleepMin);
  renderDial();
}
function updateUI() {
  if (playing) { statusKey = ['live']; setStatus(t('live')) }
  renderNP();
}
function refreshStatus() { if (statusKey) setStatus(t(...statusKey)); else setStatus(t('stopped')) }
function toggleFav(id) {
  if (id === 'tmp_preview') { toast(t('favFirst')); return }
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  save(K_FAV, favs); renderStations(); renderNP();
}

/* ---------- වාදනය ---------- */
function playStation(s) {
  if (!s) return;
  if (!s.url) { toast(t('noUrl')); return }
  if (isMixed(s.url)) toast(t('httpWarn'), 4000);
  flushData(true); clearRetry(); clearWait(); retryN = 0; userPaused = false;
  if (fadeIV) { clearInterval(fadeIV); fadeIV = null }
  switching = true; setTimeout(() => { switching = false }, 400);
  current = s; if (s.id !== 'tmp_preview') save(K_LAST, s.id);
  audio.pause(); audio.src = s.url; audio.volume = baseVolume;
  statusKey = ['connecting']; setStatus(t('connecting'));
  audio.play().catch(onPlayReject);
  renderStations(); renderNP(); updateMediaSession(s);
}
function stopAll() {
  flushData(true); clearRetry(); clearWait(); retryN = 0; userPaused = true;
  if (fadeIV) { clearInterval(fadeIV); fadeIV = null }
  audio.pause(); current = null; playing = false;
  audio.removeAttribute('src'); audio.load(); audio.volume = baseVolume;
  statusKey = null; setStatus(t('stopped')); renderStations(); renderNP();
}
function togglePlay() {
  if (!current) { playLast(false); return }
  if (playing) { userPaused = true; clearRetry(); clearWait(); audio.pause() }
  else {
    userPaused = false; retryN = 0; clearRetry();
    if (!audio.getAttribute('src') || audio.error) { audio.src = current.url; audio.load() }
    statusKey = ['connecting']; setStatus(t('connecting')); audio.play().catch(onPlayReject);
  }
}
function stepStation(dir) {
  const list = stations.filter(s => s.url); if (!list.length) return;
  let i = current ? list.findIndex(s => s.id === current.id) : -1;
  i = i < 0 ? (dir > 0 ? 0 : list.length - 1) : (i + dir + list.length) % list.length;
  playStation(list[i]);
}
function playLast(scroll) {
  let s = stations.find(x => x.id === load(K_LAST, '')) || stations.find(x => favs.includes(x.id)) || stations[0];
  if (scroll) { const r = $('radio'); if (r) r.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }) }
  if (s) playStation(s);
}

audio.addEventListener('playing', () => {
  playing = true; retryN = 0; clearRetry(); clearWait(); switching = false;
  if (segStart == null) { segStart = Date.now(); segBps = ((current && current.bitrate) || 128) * 125 }
  updateUI();
});
audio.addEventListener('pause', () => {
  flushData(true); clearWait(); playing = false;
  if (!fadeIV && !retryTO && !switching) { statusKey = ['stopped']; setStatus(t('stopped')) }
  renderNP();
});
audio.addEventListener('waiting', () => {
  if (!current) return; statusKey = ['connecting']; setStatus(t('connecting')); clearWait();
  waitTO = setTimeout(() => {
    waitTO = null;
    if (current && !userPaused && !audio.paused && audio.readyState < 3) { flushData(true); playing = false; renderNP(); scheduleRetry() }
  }, 15000);
});
audio.addEventListener('error', () => {
  if (!current || !audio.getAttribute('src')) return;
  flushData(true); playing = false; renderNP();
  if (isMixed(current.url)) { statusKey = ['errorSt']; setStatus(t('errorSt')); toast(t('httpFail')); return }
  if (retryN === 0) toast(t('noSignal'));
  scheduleRetry();
});
audio.addEventListener('ended', () => { if (!current || userPaused) return; flushData(true); playing = false; renderNP(); scheduleRetry() });
window.addEventListener('online', () => {
  if (current && !userPaused && !playing && !isMixed(current.url)) {
    clearRetry(); retryN = 0; statusKey = ['connecting']; setStatus(t('connecting'));
    audio.src = current.url; audio.load(); audio.play().catch(onPlayReject);
  }
});
window.addEventListener('offline', () => { if (current && playing) toast(t('offlineToast')) });
document.addEventListener('visibilitychange', () => flushData(false));

function updateMediaSession(s) {
  if (!('mediaSession' in navigator)) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: s.name, artist: 'SL Hub', album: s.freq ? s.freq + ' FM' : 'Live',
      artwork: [{ src: 'icon-192.png', sizes: '192x192', type: 'image/png' }, { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }]
    });
    navigator.mediaSession.setActionHandler('play', () => { userPaused = false; audio.play().catch(onPlayReject) });
    navigator.mediaSession.setActionHandler('pause', () => { userPaused = true; clearRetry(); audio.pause() });
    navigator.mediaSession.setActionHandler('stop', () => stopAll());
    navigator.mediaSession.setActionHandler('previoustrack', () => stepStation(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => stepStation(1));
  } catch (e) { }
}

/* ---------- Sleep timer ---------- */
const SLEEP_STEPS = [0, 15, 30, 45, 60, 90];
function setSleep(min) {
  if (sleepTO) { clearTimeout(sleepTO); sleepTO = null }
  if (fadeIV) { clearInterval(fadeIV); fadeIV = null }
  audio.volume = baseVolume; sleepMin = min; renderNP();
  if (min === 0) return;
  sleepTO = setTimeout(() => {
    sleepTO = null; const startVol = audio.volume, t0 = Date.now();
    fadeIV = setInterval(() => {
      const v = startVol * (1 - (Date.now() - t0) / 30000);
      if (v <= 0) {
        clearInterval(fadeIV); fadeIV = null; userPaused = true; clearRetry();
        audio.pause(); audio.volume = baseVolume; sleepMin = 0; renderNP(); toast(t('sleepDone'));
      } else audio.volume = v;
    }, 200);
  }, min * 60 * 1000);
}

/* ---------- Modals ---------- */
function openModal(id) { $(id).classList.add('show'); const f = $(id).querySelector('input,button,select'); if (f) setTimeout(() => f.focus(), 30) }
function closeModal(id) { $(id).classList.remove('show') }
function openAdd() {
  editingId = null; $('modalTitle').textContent = t('addTitle');
  ['fName', 'fFreq', 'fUrl', 'fEmoji', 'fBitrate'].forEach(i => $(i).value = ''); $('fGenre').value = 'Sinhala';
  $('deleteBtn').hidden = true; openModal('modal');
}
function openEdit(id) {
  const s = stations.find(x => x.id === id); if (!s) return;
  editingId = id; $('modalTitle').textContent = t('editTitle');
  $('fName').value = s.name; $('fFreq').value = s.freq || ''; $('fUrl').value = s.url; $('fEmoji').value = s.emoji || '';
  $('fBitrate').value = s.bitrate || ''; $('fGenre').value = s.genre || 'Sinhala'; $('deleteBtn').hidden = false; openModal('modal');
}
function saveStation() {
  const name = $('fName').value.trim(), url = $('fUrl').value.trim();
  if (!name || !url) { toast(t('need')); return }
  if (!/^https?:\/\//i.test(url)) { toast(t('badUrl')); return }
  const obj = { name, url, freq: $('fFreq').value.trim(), emoji: $('fEmoji').value.trim() || '📻', genre: $('fGenre').value, bitrate: parseInt($('fBitrate').value) || 0 };
  if (editingId) {
    const i = stations.findIndex(x => x.id === editingId); stations[i] = { ...stations[i], ...obj };
    if (current && current.id === editingId) { const ch = current.url !== stations[i].url; current = stations[i]; if (ch) playStation(current) }
  } else { obj.id = 'u_' + Date.now(); stations.push(obj) }
  save(K_ST, stations); closeModal('modal'); renderStations(); renderNP(); toast(t('saved'));
}
function deleteStation() {
  if (!editingId) return;
  stations = stations.filter(x => x.id !== editingId); favs = favs.filter(x => x !== editingId);
  save(K_ST, stations); save(K_FAV, favs);
  if (current && current.id === editingId) stopAll();
  closeModal('modal'); renderStations(); renderNP(); toast(t('removed'));
}

/* ---------- Online සෙවුම (Radio Browser) ---------- */
const CACHE_TTL = 6 * 3600 * 1000;
const API_HOSTS = ['https://de1.api.radio-browser.info', 'https://fi1.api.radio-browser.info', 'https://nl1.api.radio-browser.info'];
let onlineResults = [], shown = [];
function guessGenre(l) { l = (l || '').toLowerCase(); if (l.includes('sinhal')) return 'Sinhala'; if (l.includes('tamil')) return 'Tamil'; if (l.includes('english')) return 'English'; return 'Mixed' }
async function fetchStations(q) {
  const key = 'q:' + q.toLowerCase(), cache = load(K_CACHE, {}), hit = cache[key];
  if (hit && Date.now() - hit.t < CACHE_TTL) return { list: hit.d, cached: true };
  const params = 'countrycode=LK&hidebroken=true&is_https=true&order=clickcount&reverse=true&limit=100' + (q ? '&name=' + encodeURIComponent(q) : '');
  let lastErr;
  for (const h of API_HOSTS) {
    try {
      const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 8000);
      const r = await fetch(h + '/json/stations/search?' + params, { signal: ctl.signal }); clearTimeout(to);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const raw = await r.json(), seen = new Set();
      const out = raw.map(s => ({ name: (s.name || '').trim(), url: s.url_resolved || s.url, bitrate: parseInt(s.bitrate) || 0, codec: s.codec || '', lang: s.language || '' }))
        .filter(s => s.name && /^https:\/\//i.test(s.url) && !seen.has(s.url) && seen.add(s.url));
      cache[key] = { t: Date.now(), d: out }; const keys = Object.keys(cache); if (keys.length > 10) delete cache[keys[0]]; save(K_CACHE, cache);
      return { list: out, cached: false };
    } catch (e) { lastErr = e }
  }
  throw lastErr || new Error('fail');
}
function renderOnline() {
  const low = $('oLow').checked; let list = onlineResults.slice();
  if (low) list = list.filter(s => s.bitrate > 0 && s.bitrate <= 64).sort((a, b) => a.bitrate - b.bitrate);
  shown = list;
  if (!list.length) { $('oList').innerHTML = `<p class="empty">${esc(low && onlineResults.length ? t('noLow') : t('noResults'))}</p>`; return }
  $('oList').innerHTML = list.map((s, i) => {
    const added = stations.some(x => x.url === s.url), pn = current && current.url === s.url;
    const br = s.bitrate ? `${s.bitrate} kbps ≈${Math.max(1, Math.round(s.bitrate * 0.45))} ${t('perHour')}` : t('unknownBr');
    return `<li class="orow ${pn ? 'playing' : ''}"><span class="ot"><b>${esc(s.name)}</b><span>${br}${s.codec ? ' ' + esc(s.codec) : ''}</span></span>
      <button type="button" class="ib sq" data-p="${i}" aria-label="${esc(t('play'))}">${pn && playing ? '❚❚' : '▶'}</button>
      <button type="button" class="ib sq add ${added ? 'done' : ''}" data-a="${i}" aria-label="${esc(t('addStation'))}">${added ? '✓' : '＋'}</button></li>`;
  }).join('');
  $('oList').querySelectorAll('[data-p]').forEach(b => b.onclick = () => previewOnline(shown[+b.dataset.p]));
  $('oList').querySelectorAll('[data-a]').forEach(b => b.onclick = () => addOnline(shown[+b.dataset.a]));
}
function previewOnline(s) {
  if (!s) return;
  if (current && current.url === s.url && playing) { userPaused = true; clearRetry(); audio.pause(); return }
  playStation({ id: 'tmp_preview', name: s.name, url: s.url, emoji: '📻', genre: guessGenre(s.lang), freq: '', bitrate: s.bitrate }); renderOnline();
}
function addOnline(s) {
  if (!s) return;
  if (stations.some(x => x.url === s.url)) { toast(t('already')); return }
  const st = { id: 'u_' + Date.now(), name: s.name, url: s.url, freq: '', emoji: '📻', genre: guessGenre(s.lang), bitrate: s.bitrate };
  stations.push(st); save(K_ST, stations);
  if (current && current.url === st.url) current = st;
  renderStations(); renderNP(); renderOnline(); toast(t('added'));
}
async function doSearch() {
  const q = $('oQuery').value.trim(); $('oList').innerHTML = `<p class="empty">${esc(t('searching'))}</p>`;
  try { const { list, cached } = await fetchStations(q); onlineResults = list; renderOnline(); if (cached) toast(t('cachedToast')) }
  catch (e) { $('oList').innerHTML = `<p class="empty">${esc(t('netFail'))}</p>` }
}

/* ---------- init ---------- */
function renderRadioAll() { renderRTabs(); renderStations(); refreshStatus(); renderNP(); if (onlineResults.length) renderOnline(); if ($('dmodal').classList.contains('show')) renderData() }
function initRadio() {
  onLang(renderRadioAll);
  $('rSearch').oninput = e => { rQuery = e.target.value.trim(); renderStations() };
  $('rAdd').onclick = openAdd;
  $('rFind').onclick = () => { openModal('omodal'); if (!onlineResults.length) doSearch() };
  $('rPlay').onclick = togglePlay; $('miniPlay').onclick = togglePlay;
  $('rPrev').onclick = () => stepStation(-1); $('rNext').onclick = () => stepStation(1);
  $('npFav').onclick = () => { if (current) toggleFav(current.id) };
  $('rVol').oninput = e => { baseVolume = e.target.value / 100; if (!fadeIV) audio.volume = baseVolume };
  $('rSleep').onclick = () => setSleep(SLEEP_STEPS[(SLEEP_STEPS.indexOf(sleepMin) + 1) % SLEEP_STEPS.length]);
  $('rData').onclick = () => { flushData(false); renderData(); openModal('dmodal') };
  $('saveBtn').onclick = saveStation; $('deleteBtn').onclick = deleteStation; $('cancelBtn').onclick = () => closeModal('modal');
  $('oGo').onclick = doSearch; $('oQuery').onkeydown = e => { if (e.key === 'Enter') doSearch() };
  $('oLow').checked = load(K_LOW, false); $('oLow').onchange = () => { save(K_LOW, $('oLow').checked); renderOnline() };
  $('oClose').onclick = () => closeModal('omodal'); $('dClose').onclick = () => closeModal('dmodal');
  $('dReset').onclick = () => { if (!confirm(t('dConfirm'))) return; save(K_DATA, {}); renderData(); toast(t('dResetOk')) };
  ['modal', 'omodal', 'dmodal'].forEach(id => { $(id).addEventListener('click', e => { if (e.target === $(id)) closeModal(id) }) });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') ['modal', 'omodal', 'dmodal'].forEach(closeModal) });
  ['playing', 'pause'].forEach(ev => audio.addEventListener(ev, () => { if ($('omodal').classList.contains('show') && onlineResults.length) renderOnline() }));
  setInterval(() => { if (playing) flushData(false); if ($('dmodal').classList.contains('show')) { flushData(false); renderData() } }, 10000);
  // dial scale labels
  $('dialLabels').innerHTML = [90, 95, 100, 105].map(n => `<span style="left:${(((n - FM_MIN) / (FM_MAX - FM_MIN)) * 100).toFixed(2)}%">${n}</span>`).join('');
  renderRadioAll();
}
window.Radio = { playLast };

/* ආරම්භය */
applyTheme();
$('themeBtn').onclick = toggleTheme;
$('langBtn').onclick = () => setLang(LANG === 'si' ? 'en' : 'si');
$('heroPlay').onclick = () => Radio.playLast(true);
onLang(() => { applyTheme(); clockLast = ''; tickClock() });

initNav();
initNews();
initWeather();
initRadio();
applyI18n();
tickClock(); setInterval(tickClock, 1000);
setInterval(() => window.updateSky && window.updateSky(), 60000);
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => { });
