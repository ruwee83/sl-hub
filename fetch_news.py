#!/usr/bin/env python3
"""Fetch Sri Lankan news RSS/Atom feeds -> data/news.json (headline + link + short snippet only)."""
import hashlib, html, json, os, re, sys, time
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime

# id, display name, language (si/en/ta), default category (local/business/sports/entertainment), url
SOURCES = [
    ("adaderana", "Ada Derana",       "en", "local",         "https://www.adaderana.lk/rss.php"),
    ("island",    "The Island",       "en", "local",         "https://island.lk/feed/"),
    ("dailynews", "Daily News",       "en", "local",         "https://www.dailynews.lk/feed/"),
    ("observer",  "Sunday Observer",  "en", "local",         "https://www.sundayobserver.lk/feed/"),
    ("economynext","EconomyNext",     "en", "business",      "https://economynext.com/feed/"),
    ("lbo",       "Lanka Business Online", "en", "business", "https://www.lankabusinessonline.com/feed/"),
    ("lnw",       "Lanka News Web",   "en", "local",         "https://lankanewsweb.net/feed/"),
    ("dinamina",  "දිනමිණ",           "si", "local",         "https://www.dinamina.lk/feed/"),
    ("puvath",    "ලංකා පුවත්",       "si", "local",         "https://sinhala.lankapuvath.lk/feed/"),
    ("sarasaviya","සරසවිය",           "si", "entertainment", "https://sarasaviya.lk/rss.xml"),
    ("uthayan",   "Uthayan",          "ta", "local",         "https://newuthayan.com/feed/"),
    # සිංහල අමතර මූලාශ්‍ර (BBC සහ Google News server වලට විවෘතයි)
    ("bbcsi",     "BBC සිංහල",        "si", "local",         "https://feeds.bbci.co.uk/sinhala/rss.xml"),
    ("puvath2",  "ලංකා පුවත්",       "si", "local",         "https://feeds.feedburner.com/Lankapuvath"),
    ("adasi",     "අද දෙරණ",          "si", "local",         "https://sinhala.adaderana.lk/rss.php"),
]

MAX_PER_SOURCE = 30
MAX_TOTAL = 400
MAX_AGE_DAYS = 7
MAX_BYTES = 3_000_000
UA = "Mozilla/5.0 (compatible; SLHub/1.0; RSS reader; +https://ruwee83.github.io/sl-hub/)"

KW = {
    "sports": r"\b(cricket|t20|odi|test match|world cup|fifa|football|rugby|olympic|tournament|wicket|batsman|bowler|athlet|tennis|league)\b|ක්‍රිකට්|ක්‍රීඩා|තරඟ|කඩුල්ල",
    "business": r"\b(rupee|dollar|inflation|tax|imf|stock|cse|bank|economy|economic|budget|exports?|imports?|tourism|revenue|interest rate|treasury)\b|ආර්ථික|රුපියල|බදු|බැංකු|අයවැය",
    "entertainment": r"\b(film|movie|teledrama|singer|actor|actress|cinema|concert|celebrity|music|album)\b|චිත්‍රපට|ගායක|නළු|නිළි|සිනමා",
}

def strip_ns(tag):
    return tag.rsplit("}", 1)[-1] if "}" in tag else tag

def text_of(el):
    return "".join(el.itertext()).strip() if el is not None else ""

def clean(s, limit=None):
    s = html.unescape(re.sub(r"<[^>]+>", " ", s or ""))
    s = re.sub(r"\s+", " ", s).strip()
    if limit and len(s) > limit:
        s = s[:limit].rsplit(" ", 1)[0].rstrip(" ,.;:-") + "…"
    return s

def parse_date(s):
    if not s:
        return None
    s = s.strip()
    try:
        d = parsedate_to_datetime(s)
    except Exception:
        d = None
    if d is None:
        try:
            d = datetime.fromisoformat(s.replace("Z", "+00:00"))
        except Exception:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=timezone.utc)
    return d

def parse_feed(data):
    """Return list of dicts {title, link, ts, summary} from RSS 2.0 or Atom bytes."""
    root = ET.fromstring(data)
    out = []
    for el in root.iter():
        name = strip_ns(el.tag)
        if name not in ("item", "entry"):
            continue
        f = {}
        for ch in el:
            n = strip_ns(ch.tag)
            if n == "title": f["title"] = text_of(ch)
            elif n == "link":
                href = ch.get("href")
                if href and (ch.get("rel") in (None, "alternate")): f.setdefault("link", href)
                elif ch.text and ch.text.strip(): f.setdefault("link", ch.text.strip())
            elif n in ("pubDate", "published", "updated", "date"): f.setdefault("date", text_of(ch))
            elif n in ("description", "summary"): f.setdefault("summary", text_of(ch))
            elif n == "encoded": f.setdefault("content", text_of(ch))
        title = clean(f.get("title"))
        link = (f.get("link") or "").strip()
        if not title or not re.match(r"^https?://", link, re.I):
            continue
        d = parse_date(f.get("date"))
        summ = clean(f.get("summary") or f.get("content"), 180)
        if summ.lower().startswith(title.lower()[:40]) and len(summ) < len(title) + 20:
            summ = ""
        out.append({"title": title, "link": link, "dt": d, "summary": summ})
    return out

def classify(title, default):
    for cat in ("sports", "entertainment", "business"):
        if re.search(KW[cat], title, re.I):
            return cat
    return default

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/rss+xml, application/xml, text/xml, */*"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read(MAX_BYTES)

def build(fetcher=fetch, now=None):
    now = now or datetime.now(timezone.utc)
    cutoff = now - timedelta(days=MAX_AGE_DAYS)
    items, status, seen = [], [], set()
    for sid, name, lang, cat, url in SOURCES:
        try:
            parsed = parse_feed(fetcher(url))
            n = 0
            for p in parsed[:MAX_PER_SOURCE]:
                if p["link"] in seen: continue
                src_name = name
                if lang == "si" and not re.search(r"[\u0D80-\u0DFF]", p["title"]):
                    continue   # සිංහල අක්ෂර නැති (ඉංග්‍රීසි) සිරස්තල මඟ හරින්න
                if sid.startswith("gnews") and " - " in p["title"]:
                    # Google News: "සිරස්තලය - ප්‍රකාශකයා" -> ප්‍රකාශකයා මූලාශ්‍රය ලෙස
                    head, pub = p["title"].rsplit(" - ", 1)
                    if head and pub: p["title"], src_name = head.strip(), pub.strip()[:40]
                dt = p["dt"] or now
                if dt < cutoff or dt > now + timedelta(hours=6): continue
                seen.add(p["link"])
                items.append({
                    "id": hashlib.sha1(p["link"].encode()).hexdigest()[:12],
                    "title": p["title"], "link": p["link"], "source": src_name, "lang": lang,
                    "cat": classify(p["title"], cat), "ts": int(dt.timestamp()), "summary": p["summary"],
                })
                n += 1
            status.append({"id": sid, "name": name, "lang": lang, "ok": True, "count": n})
        except Exception as e:
            status.append({"id": sid, "name": name, "lang": lang, "ok": False, "error": str(e)[:120]})
    items.sort(key=lambda x: -x["ts"])
    return {"generated_at": int(now.timestamp()), "sources": status, "items": items[:MAX_TOTAL]}

def main():
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "news.json")
    new = build()
    ok = sum(1 for s in new["sources"] if s["ok"])
    print(f"{ok}/{len(new['sources'])} feeds ok, {len(new['items'])} items")
    for s in new["sources"]:
        print(" ", "OK " if s["ok"] else "ERR", s["name"], s.get("count", s.get("error")))
    try:
        old = json.load(open(path, encoding="utf-8"))
    except Exception:
        old = None
    if ok == 0 and old and old.get("items"):
        print("All feeds failed - keeping previous news.json"); return 0
    # only rewrite when something meaningful changed (keeps git history small)
    if old and old.get("items") == new["items"] and [ (s["id"], s["ok"]) for s in old.get("sources", []) ] == [ (s["id"], s["ok"]) for s in new["sources"] ]:
        print("No changes"); return 0
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(new, f, ensure_ascii=False, separators=(",", ":"))
    print("Wrote", path)
    return 0

if __name__ == "__main__":
    sys.exit(main())
