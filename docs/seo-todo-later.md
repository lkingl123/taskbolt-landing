# SEO & Directory Listings — TODO Later

**Created:** May 11, 2026
**Context:** Worked through Google Business Profile, Google Search Console, Bing Places in one evening session. Some tasks blocked on cache timers / verification flows that need to settle. This is the punch list of what's left.

---

## What's already done

| Task | Status | Notes |
|---|---|---|
| `robots.txt` on production | ✅ Live | https://taskbolt.work/robots.txt |
| `sitemap.xml` on production | ✅ Live | Lists `/`, `/privacy`, `/terms` |
| LocalBusiness JSON-LD in `<head>` | ✅ Live | Signals "Utah local business" to Google |
| GBP listing exists for Taskbolt | ✅ Set up | Phone, website, service area, address saved |
| GBP address verification (postcard) | ⏸️ Deferred | Google only offered video verification — waiting until workspace is set up |
| Google Search Console property created | ✅ Created | Domain property: `taskbolt.work` |
| Google Search Console TXT record in DNS | ✅ Added on Porkbun | `google-site-verification=xQMi-bMV2csPO766IdQAiCLph3-usr7CHc4wb` |
| Search Console VERIFY click | ❌ Failed twice tonight | Google's cache bug — retry in ~1 hour |

---

## Tomorrow morning: the 5-minute win

**This is the single highest-value remaining action.** Fixes the stale "AI automation" snippets showing in Google search results.

### Step 1: Verify Search Console (1 min)

1. Go to https://search.google.com/search-console
2. Click **"Already started? finish verification"** (small link at the bottom of the welcome page)
3. You'll land back on the TXT record dialog from last night
4. Click the dark **VERIFY** button (bottom right)
5. Wait ~30 seconds for "Verifying..."
6. Should see ✅ "Ownership verified"

**If it fails again:** wait another hour and retry. The TXT record IS correct — Google's verification cache is just stuck. **Don't touch the DNS record** — it's right.

### Step 2: Submit sitemap (1 min)

Once verified:

1. Left sidebar → **Sitemaps**
2. In "Add a new sitemap" field, type just: `sitemap.xml`
3. Click **Submit**
4. Should show "Success" within a few seconds — Google now knows about all 3 pages

### Step 3: Request indexing of the homepage (2 min)

This is what triggers a re-crawl of taskbolt.work, fixing the old "AI automation" snippets.

1. Top search bar of Search Console → paste `https://taskbolt.work`
2. Hit Enter
3. Wait ~30 seconds for the URL inspection result
4. Click **REQUEST INDEXING**
5. Wait ~1 minute → "Indexing requested" appears
6. Google re-crawls within 24-48 hours

### Step 4 (optional): Request indexing for `/privacy` and `/terms`

Same as step 3, paste the full URL, request indexing. Minor SEO win.

---

## Blocked on workspace setup (~2-3 weeks from now)

These are blocked because Google now requires **video verification** for service-area businesses (no postcard option offered for this account).

### Google Business Profile — finish verification

When workspace is set up (Phase 4 of `path-to-first-client.md`):

1. Go to https://business.google.com (or just search "my business" while logged in)
2. Look for the **"Get verified"** banner
3. Click it → arrives at "Select a way to get verified"
4. **Business video** is the only option Google offers right now
5. Record a 30-60 second video showing:
   - Your workspace (table, shelves, supplies)
   - You + the workspace in the same shot
   - A business document on screen (LLC certificate, business card)
6. Upload, submit
7. Wait 5 business days for Google's review team

### After GBP is verified, fix these:

These are visible to public ONLY after verification, so they can be deferred:

- [ ] Change category from "Computer support and services" → **try these in order:**
  - "Packaging service" (only "Packaging company" and "Packaging supply store" show in dropdown — both fit OK)
  - or "Business services" (broader but valid)
  - or "Fulfillment service"
- [ ] Add a description (~750 char limit):
  > "TaskBolt is a local Utah contract labor service for small businesses. We handle packing, assembly, kitting, hangtagging, polybagging, and prep work so founders can focus on growing their business. Salt Lake Valley pickup available. Small-batch jobs only — no pallets, no oversized freight. Based in West Jordan, UT."
- [ ] Add hours: Mon-Sat 8am-8pm MT (closed Sunday)
- [ ] Add at least 3 photos (workspace, supplies, a finished kit/box)

---

## Blocked on GBP being verified

### Bing Places for Business

Bing's fastest setup path is "Import from Google Business Profile" but that **requires GBP to be verified**. Until then:

**Option A (preferred): wait for GBP verification, then come back**
- After GBP is live, return to https://www.bingplaces.com
- Click **"Import from your Google Business Profile"**
- Click **"Continue with Google"** → use same Google account
- Set sync to **Weekly (recommended)**
- Bing auto-imports + auto-verifies because GBP is verified

**Option B (do tonight if impatient): manual "3-step" path**
- Click **"Create your Bing profile in three steps"** instead
- Fill in business name, address, phone, hours manually
- Bing will send a verification code via SMS or email (no postcard, no video)
- ~5 min total

---

## Future evenings (after Search Console + Bing are live)

### Yelp for Business

- https://biz.yelp.com
- Sign up with email
- Add business: Taskbolt, 1455 W 8230 S, West Jordan UT 84088, (385) 644-9992
- Category: probably "Local Services" → "Couriers & Delivery Services" or "Personal Assistants"
- Verification: email link, instant
- ~10 min total

### Apple Business Connect

- https://businessconnect.apple.com
- Sign in with Apple ID
- Add business info (same NAP as everywhere else — keep it consistent)
- Verification: Apple ID confirms ownership, no DNS / video needed
- Appears in Apple Maps after verification (~24 hr)
- ~10 min total

### Nice-to-have local citations (low priority, but worth doing eventually)

These don't move the needle much individually but they help "NAP consistency" which Google's local algorithm cares about:

- [ ] **West Jordan Chamber of Commerce** — check membership cost
- [ ] **Salt Lake Chamber** — same
- [ ] **Better Business Bureau** (free basic listing)
- [ ] **Nextdoor Business** (free)
- [ ] **Manta** (free business directory)
- [ ] **HotFrog** (free)
- [ ] **Cylex** (free)

---

## Important reference values

**Business profile data (use the same across every directory — "NAP consistency"):**

| Field | Value |
|---|---|
| Name | Taskbolt |
| Address | 1455 W 8230 S, West Jordan, UT 84088 |
| Phone | (385) 644-9992 |
| Email | jake@taskbolt.work |
| Website | https://taskbolt.work |
| Hours | Mon-Sat 8am-8pm MT, closed Sunday |
| Category | Packaging service / Fulfillment service / Business services |
| Service area | Salt Lake Valley, Utah |

**Google Search Console DNS record (already in Porkbun, do not delete):**

| Type | Host | Value | TTL |
|---|---|---|---|
| TXT | (blank — root domain) | `google-site-verification=xQMi-bMV2csPO766IdQAiCLph3-usr7CHc4wb` | 600 |

---

## Honest read on priorities

If only doing one thing per week:

1. **This week:** Verify Search Console + submit sitemap (5 min). Biggest SEO win, fixes stale search results.
2. **Week 2:** Manual Bing Places setup (or skip until GBP is verified).
3. **Week 3:** Yelp + Apple Business Connect.
4. **Month 2:** Local citations (Chambers, BBB, Nextdoor).
5. **When workspace is ready:** Video verify GBP. Unblocks the biggest local-search win.

Anyone selling you a $1,500/mo "local SEO retainer" would do exactly these steps over 3 months and charge you $4,500. You can do them yourself for free with this list.
