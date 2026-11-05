# Thai motorcycle licence — theory trainer

Live: https://ramidzpower.github.io/thai-moto-license/

Open `index.html` in any browser. No server, no internet, no build. Works on a phone
(AirDrop the folder, or put it in iCloud Drive and open from Files).

- **Mock exam** — 50 questions, 60-minute timer, no feedback until you submit, 45/50 to pass.
  Every wrong answer comes back with an explanation, and you can re-drill just those.
- **Study** — the whole bank by category, answers and reasons shown.
- **Alcohol & drugs · Fitness to ride · First aid** — three new categories covering the topics you
  remembered from the real exam: the alcohol limits, whether a given medical condition disqualifies
  you, and which casualty carry suits which injury.
- **Signs** — 220 signs as the real artwork, grouped by the families the exam confuses on
  purpose, with the shape and colour logic that lets you answer signs you have never seen.
- **Road markings** — the ป้าย-on-the-tarmac category, straight out of the official handbook.
- **Key numbers** — the memorisation core, plus the traps that actually fail people.
- **The process** — documents, the four steps, what the 5 practical stations are.
- **Official material** — a card on the mock start screen and the top of The process tab, linking
  the handbook PDF (`3.ExamEnglish_6382.pdf`, must stay beside `index.html`) and the DLT's own
  YouTube video on the motorcycle driving test.
- **Thai phrases** — what to say at the counter.
- **History** — every attempt, scored per category, with a chart and your weakest areas.

435 questions (231 written + 204 signs). Run `index.html?selftest` (or `node check.js`) to verify
the bank, the artwork, the generated sign options, the gallery-only rule and the scoring.

Handy URLs: `index.html#exam` drops straight into a fresh paper; `index.html#exam-sign` (or
`-mark`, `-alco`, `-fit`, `-aid`, `-trf`, `-veh`, `-etq`, `-safe`, `-maint`, `-moto`, `-proc`)
drills one category under exam conditions without writing to your history.

## The official DLT handbook

`3.ExamEnglish_6382.pdf` is the authoritative source and it now drives this app. It is a scan
with no text layer, so it was read page by page rather than parsed. 34 questions carry a `src`
field naming the book page or the statute section behind them, shown under the explanation.

What the book changed:

- **One outright correction.** At an unsignalised junction where you and another vehicle arrive
  together, you give way to the vehicle on your **LEFT** — Land Traffic Act s.71(2), and the book
  says the same on p.45. The app previously said "right", copied from popular Thai practice sites
  that get this wrong. The roundabout answer really is "right", but that is s.71(**1**) — give way
  to whoever is *already in* the junction — which is a different rule. Both are now in the bank
  with the distinction spelled out.
- **A whole missing category:** road surface markings, which the handbook devotes five pages to
  and the app had nothing on. 20 questions, with the official dimensions.
- **The no-parking distance set:** 3 m from a crosswalk, 10 m from a junction, 15 m from a railway
  crossing (s.57). Note the last one is *not* the 5 m you must stop short of the track when a train
  is coming — the book prints both numbers and they are different rules.
- **The guide-sign series (น-)**, 14 signs. I had dismissed these last round as untestable; the
  handbook includes them on p.30, so that judgement was wrong.
- **A correction to my own previous answer.** I said the orange roadworks diamonds were the ตค-
  series. They are **ตก-** — at photo resolution ก and ค are near-identical, and I fetched the
  wrong series. ตค- is the orange *text* series; both are now included.

## The three things that matter most

1. **Phone the DLT office before you go.** Ask whether the English test terminal is available,
   and which proof of address they will accept from you. Both vary by office and by staff.
2. **The 5-hour course is in Thai and you must sit all five hours.** No certificate, no test.
   Bring something to read.
3. **The narrow plank is what fails people on the practical.** Look up and far ahead, keep enough
   revs to avoid stalling, feather the clutch, never look down at the plank.

## Bangkok

Chatuchak (Area 1) and Bang Khun Thian (Area 3) handle foreigners most often.
Book on the **DLT Smart Queue** app or <https://gecc.dlt.go.th>.

Bring: passport + signed photocopies of the photo page and visa/entry stamp · proof of address
(Certificate of Residence from Immigration, embassy letter, work permit, pink ID, or yellow book —
a work permit is smoothest) · medical certificate **issued within the last month** · two passport
photos · cash (motorcycle licence ≈ 105 baht plus small test and card charges).

You will be issued a **2-year temporary licence**. Converting it to the 5-year private licence later
needs no theory or practical test — just a 1-hour refresher and the ability test.

## The signs

220 signs across five series:

| Series | Code | What it is | Look |
|---|---|---|---|
| ป้ายบังคับ | บ- | regulatory — enforceable | red ring, octagon, or blue disc |
| ป้ายเตือน | ต- | warning — no command attached | yellow diamond |
| ป้ายเตือนในงานก่อสร้าง | **ตก-** | roadworks pictograms | **orange diamond** |
| ป้ายข้อความในงานก่อสร้าง | **ตค-** | roadworks text signs | **orange rectangle**, bilingual |
| ป้ายแนะนำ | น- | guide and information | blue or green rectangle |

16 of the ตก- signs are marked **"recognise only"** in the gallery and are never asked. They are
the eighteen เบี่ยงเบนการจราจร lane-shift diamonds: they share one Thai caption and one meaning
("traffic is diverted, follow the arrows"), so two of them are asked and the rest are there to be
recognised. Writing eighteen different lane-geometry answers would have been invention, not study
material.

All are the **real DLT diagrams**, not drawings — `signs/*.png`, 480px, from Wikimedia Commons where
every one is **Public domain**. Codes and Thai names are parsed from the Thai Wikipedia catalogue
[ป้ายจราจรในประเทศไทย](https://th.wikipedia.org/wiki/ป้ายจราจรในประเทศไทย) rather than typed, so a
name can't drift from its picture. The English meanings were written while looking at the rendered
artwork, not translated from the Thai name alone.

The three wrong options are drawn from the **same group** as the right one — sharp-left against
sharp-right against series-of-bends, no parking against no stopping, max speed against min speed —
and are rebuilt every time the sign appears. You can't learn "the answer is ค"; you have to read the
sign. Groups are merged where a family was too small to supply three real distractors, and
`check.js` fails if any group drops below four distinct meanings.

Of the ~200 ป้ายแนะนำ boards, only the 14 generic pictograms are here — the ones the official
handbook lists on p.30. The rest are place-name and route-number boards ("Bangkok 120 km"): a
format to read, not a meaning to learn.

The scripts and parsed catalogues that generated `signs.js` are not part of this repository. The app
only reads `signs.js` and `signs/`.

## The one number that is personal to you

On the **2-year temporary licence** you will be issued, your legal alcohol limit is **20 mg%**, not
the usual 50 — the lower limit applies to temporary-licence holders, under-20s and unlicensed
riders alike. That is roughly one drink. It goes back up to 50 mg% only when you convert to the
5-year licence.

## Where the written questions come from

Authoritative first:

- **`3.ExamEnglish_6382.pdf`** — the official DLT English handbook. Anything traceable to it carries
  a `src` field, and it overrides the sources below wherever they conflict.
- **พระราชบัญญัติจราจรทางบก พ.ศ. 2522** (Land Traffic Act), quoted by section for the distance and
  priority rules.

Then scraped, not invented:

- `pantip.com/topic/44063103` — the Pantip thread (15 items, ตัวอย่างข้อสอบใบขับขี่ 2569 พร้อมเฉลย)
- `pantip.com/topic/42510803` — motorcycle-specific items
- `rabbitcare.com/blog/car-driver-tips/driving-license-test-questions` — the full five official
  categories with worked answers
- `kruchiangrai.net` — 50 items with Thai explanations
- `turbo.co.th/article/driving-license-exam` — confirms the 50 questions / 60 minutes / 90% format
- **`thaidriveexam.com`** — five categorised sets (signs, traffic law, maintenance, safe riding,
  hazard anticipation) totalling **487 unique questions with the correct answer machine-readable**
  from an inline style. 51 are in the bank so far, covering alcohol, fitness to ride, first aid and
  tyres. Roughly 430 more are not yet translated.
- Official DLT practice exam (Thai only): <https://safedrivedlt.com>

Three things to know about that material:

- **The bank is not perfectly maintained.** Where a bank answer conflicts with current law, the app
  shows a *Heads up* note and tells you to answer the bank's version — e.g. it still says 90 km/h
  outside built-up areas, though designated motorways have allowed 120 km/h since 2021.
- **Five questions are car-only** (clutch, radiator, four-wheel brakes). They are tagged and left
  out of the motorcycle mock by default; the toggle on the mock screen puts them back.
- **Where the official book and the scraped banks disagree, the book wins** and the explanation
  says so. Anything carrying a `src` field has been checked against the handbook or the statute.
- **180 written questions is still not the whole DLT bank**, which runs to roughly a thousand items.
  The handbook you supplied covers pp.22-30 and 40-48; the earlier Q&A pages (book pp.36-39, which
  would be roughly 26 more official questions) are not in the scan. If you can get those pages,
  they go straight in.
- The 44 scenario questions on book pp.41-48 are illustration-based ("from the illustration, is
  this correct parking?"). Each page is a single flat scan, so the individual drawings cannot be
  extracted cleanly. Their *rules* are in the bank as self-contained questions; the picture-only
  phrasings are not.
