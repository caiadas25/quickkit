# QuickKit — 30-Day Growth Journal

**Site:** [quickkit-nine.vercel.app](https://quickkit-nine.vercel.app)
**Repo:** [github.com/caiadas25/quickkit](https://github.com/caiadas25/quickkit)
**Theme:** Free online developer tools — fast, no signup, no ads.
**Goal:** Drive organic traffic through SEO + social sharing in 30 days.

---

## Day 1 — June 24, 2026

### What was built
- Created Next.js app with 16 fully functional tools:
  1. JSON Formatter/Validator
  2. Base64 Encode/Decode
  3. UUID Generator
  4. Password Generator (with strength meter)
  5. Word Counter (real-time stats)
  6. Color Converter (HEX/RGB/HSL + palette)
  7. Lorem Ipsum Generator
  8. Hash Generator (SHA-1/256/512)
  9. QR Code Generator (with PNG download)
  10. Markdown Preview (split-pane live editor)
  11. Text Diff (side-by-side with color-coded changes)
  12. URL Encoder/Decoder (with encodeURI vs encodeURIComponent info)
  13. JWT Decoder (auto-decode, color-coded header/payload/signature)
  14. Timestamp Converter (Unix/ISO/RFC/relative time)
  15. Regex Tester (highlighted matches, preset patterns)
  16. Text Case Converter (10 formats: UPPER, lower, camel, snake, etc.)

### Infrastructure
- GitHub repo: `caiadas25/quickkit`
- Vercel project: `prj_H6M46Tc5GZpEVz7tb78ul6FmTJnQ`
- Auto-generated domain: `quickkit-nuno-caiadas-projects.vercel.app`
- All pages statically generated (fast load times)
- Sitemap + robots.txt configured for SEO
- Each tool page has SEO-optimized title/description + FAQ section

### Strategy
- **SEO target keywords:** "json formatter online", "uuid generator", "password generator online", "base64 decode", "word counter online", "qr code generator", "color converter", "lorem ipsum generator", "hash generator", "markdown preview"
- **Traffic channels:**
  1. Long-tail SEO (each tool page targets specific keywords)
  2. Social sharing (Reddit r/webdev, r/programming, HN Show)
  3. Developer communities (dev.to, Twitter/X)
- **Day 1 actions:** Submit to Reddit r/webdev and r/programming

### Metrics
- **Traffic:** 0 (just deployed)
- **Pages indexed:** 0 (needs Google Search Console setup)
- **Tools live:** 16

### SEO progress
- Added Open Graph + Twitter Card metadata to root layout
- Added JSON-LD structured data (WebSite + ItemList schemas) to homepage
- All 16 tool pages have SEO-optimized titles, meta descriptions, and FAQ sections
- Sitemap auto-generates from tools array
- Clean URL structure (/tools/tool-name)

### Next steps
- Submit to Reddit r/webdev "Show HN" style post
- ~~Add structured data (JSON-LD) to each tool page for rich snippets~~ DONE
- Add JSON-LD to individual tool pages (SoftwareApplication schema)
- Research additional high-volume tool keywords for Day 2 expansion
- Set up Google Search Console verification
- Add a blog section for content marketing

### Afternoon sprint — UX overhaul + expansion
- **Homepage redesigned**: gradient hero with search bar, category filter chips (Code/Text/Data/Design/Security/DevOps/Utility), animated tool cards, trust badges section, FAQ section
- **4 new tools added** (20 total):
  14. CSV to JSON (configurable delimiters)
  15. HTML Preview (split-pane, sandboxed iframe)
  16. Cron Expression Builder (visual point-and-click)
  17. Markdown to HTML (live preview + raw HTML output)
- **Search functionality**: real-time filtering on homepage by name, description, or category
- **Vercel Web Analytics enabled**: tracking page views, visitors, referrers
- **@vercel/analytics package installed** and component added to layout

### Tools categories
- **Code** (6): JSON Formatter, Base64, UUID Generator, Text Diff, URL Encoder, JWT Decoder, Regex Tester, Timestamp Converter, CSV to JSON, HTML Preview, Cron Builder, Markdown to HTML
- **Text** (3): Word Counter, Lorem Ipsum, Text Case Converter
- **Security** (2): Password Generator, Hash Generator
- **Design** (1): Color Converter
- **Utility** (1): QR Code Generator
- **DevOps** (1): Cron Builder

### Traffic strategy
- Target long-tail keywords: "json formatter online", "uuid generator", "cron expression builder", etc.
- Blog section for content marketing (articles targeting informational queries)
- Social sharing ready (Open Graph + Twitter Card metadata)

### Strategy pivot — "AI runs a website for 30 days"
After review, the self-promotion angle shifted. Instead of "here's a free tools site" (which gets downvoted on Reddit/HN as generic), the narrative IS the experiment:

**Core angle:** "An AI agent (Hermes by Nous Research) is autonomously building and operating a developer tools website for 30 days. It writes the code, deploys, optimizes SEO, reviews analytics, and reports daily — all without human intervention."

**Channels (only when there's a genuine insight or milestone):**
- dev.to: Articles about the EXPERIMENT — "I let an AI build and run a website for 30 days — here's Day X"
- Twitter/X: Progress updates with screenshots and lessons learned
- Product Hunt: Full experiment story launch later in the month
- Indie Hackers: Experiment journey documentation

**Key principle:** Be transparent about AI involvement. Don't pretend a human built this. The experiment is the hook, not the tools. Only post when there's something genuinely interesting to share.

---

## Day 2 — June 25, 2026

### What was built
- **2 new tools added** (22 total):
  21. JSON to CSV (configurable delimiters, download CSV, handles nested objects)
  22. HTML to Markdown (converts HTML to clean Markdown, supports headings/lists/links/images/tables/code blocks)
- **1 new blog post**: "Day 2: An AI Builds Developer Tools — Here's What Happened"
- Blog index updated with new post
- Sitemap updated with new blog post

### Tools count & categories
- **Code** (8): JSON Formatter, Base64, UUID Generator, Markdown Preview, Text Diff, URL Encoder, JWT Decoder, Regex Tester, Timestamp Converter, HTML Preview, Markdown to HTML, HTML to Markdown
- **Data** (2): CSV to JSON, JSON to CSV
- **Security** (2): Password Generator, Hash Generator
- **Productivity** (3): Word Counter, Lorem Ipsum, Text Case Converter
- **Design** (1): Color Converter
- **Utility** (1): QR Code Generator
- **DevOps** (1): Cron Builder
- **Total tools**: 22 | **Blog posts**: 4

### SEO observations
- Each new tool page has JSON-LD SoftwareApplication schema for rich snippets
- FAQ sections on both new tools (targets featured snippets)
- Blog post targets "AI developer tools" experiment narrative
- Internal links: blog post links to JSON to CSV and HTML to Markdown tools
- Sitemap now includes all 22 tools + 4 blog posts

### Self-promotion angle
- Published first experiment narrative post on blog
- Ready to share on dev.to when ready to promote
- "Day 2: The AI That Builds Developer Tools For You" — transparent about AI involvement, focuses on the experiment story

### Metrics
- **Traffic:** 0 (just deployed, Day 2)
- **Tools live:** 22
- **Blog posts:** 4
- **Build status:** clean, all static

### What's working
- Build times under 2 seconds
- All pages statically generated
- Tool pages have proper SEO metadata
- Blog structure established with 4 posts

### What needs attention
- No external traffic yet (need to start sharing)
- No Google Search Console setup
- Blog posts need to be promoted on dev.to / Twitter/X
- Consider adding 2 more tools targeting high-volume keywords tomorrow

### Strategy adjustments
- Added JSON-to-CSV as complement to CSV-to-JSON (round-trip data tools are high traffic)
- Added HTML-to-Markdown as complement to Markdown-to-HTML (bidirectional conversions)
- Blog post about the experiment is ready for social sharing

### Next day's plan
- Add 1-2 new tools: YAML to JSON converter or HTML Minifier
- Write blog post targeting informational query: "How to Convert JSON to CSV"
- Start social sharing: post the experiment narrative on dev.to
- Set up Google Search Console verification

---

## Day 3 — June 25, 2026

### What was built
- **2 new tools added** (24 total):
  23. YAML to JSON (full YAML 1.2 support, formatted/minified output)
  24. JSON to YAML (configurable indentation, handles nested objects)
- **1 new blog post**: "How to Convert YAML to JSON — A Developer's Guide" (targets informational query)
- Sitemap updated with new blog post
- Installed `js-yaml` package for reliable YAML parsing

### Tools count & categories
- **Code** (10): JSON Formatter, Base64, UUID Generator, Markdown Preview, Text Diff, URL Encoder, JWT Decoder, Regex Tester, Timestamp Converter, HTML Preview, Markdown to HTML, HTML to Markdown
- **Data** (4): CSV to JSON, JSON to CSV, YAML to JSON, JSON to YAML
- **Security** (2): Password Generator, Hash Generator
- **Productivity** (3): Word Counter, Lorem Ipsum, Text Case Converter
- **Design** (1): Color Converter
- **Utility** (1): QR Code Generator
- **DevOps** (1): Cron Builder
- **Total tools**: 24 | **Blog posts**: 5

### SEO observations
- YAML/JSON converters target high-volume keywords: "yaml to json", "json to yaml online"
- Blog post targets "how to convert yaml to json" informational query with step-by-step guide
- Internal links: blog post links to both YAML/JSON tools, tools link back to blog
- Data category now has 4 tools (strongest category for round-trip conversions)
- Each tool page has JSON-LD SoftwareApplication schema + FAQ sections
- Sitemap now includes all 24 tools + 5 blog posts

### Self-promotion angle
- Day 3 of the experiment: the AI autonomously chose to build a bidirectional YAML/JSON tool pair
- The blog post is ready for social sharing: targets a real developer pain point
- Still no external sharing yet — Day 4 should be the first social push

### Metrics
- **Traffic:** 0 (still no external sharing)
- **Tools live:** 24
- **Blog posts:** 5
- **Build status:** clean, all static
- **Packages added:** js-yaml (for YAML parsing)

### What's working
- Bidirectional conversion pairs are a proven pattern (CSV/JSON, HTML/Markdown, now YAML/JSON)
- Build times still fast
- Consistent tool page structure (UI, FAQ, JSON-LD schema)
- Blog posts targeting real informational queries

### What needs attention
- Still zero external traffic — must start sharing on Day 4
- Google Search Console still not set up
- No dev.to articles published yet
- Consider adding a "Developer" category badge on YAML/JSON tools since they're developer-focused

### Strategy adjustments
- Chose YAML/JSON pair over HTML Minifier — higher search volume and fits the Data category
- Added informational blog post instead of experiment narrative — targets a real search query
- The bidirectional tool pair strategy is now proven: CSV/JSON, HTML/Markdown, YAML/JSON

### Next day's plan
### Next day's plan
- Add 1-2 new tools: consider HTML Minifier or CSS Minifier (web performance tools are popular)
- Write blog post: "What Is YAML and When Should You Use It?"
- Set up Google Search Console verification
- Check Vercel Analytics for any organic traffic

---

## Day 4 — June 25, 2026

### What was built
- **2 new tools added** (26 total):
  25. HTML Minifier (removes comments, whitespace, unnecessary characters)
  26. CSS Minifier (minifies CSS with comment/whitespace removal)
- **1 new blog post**: "How to Minify HTML and CSS — A Developer's Guide" (targets informational query)
- Blog index updated with new post
- Sitemap updated with new blog post
- Both tools show byte savings percentage in real-time

### Tools count & categories
- **Code** (12): JSON Formatter, Base64, UUID Generator, Markdown Preview, Text Diff, URL Encoder, JWT Decoder, Regex Tester, Timestamp Converter, HTML Preview, Markdown to HTML, HTML to Markdown, HTML Minifier, CSS Minifier
- **Data** (4): CSV to JSON, JSON to CSV, YAML to JSON, JSON to YAML
- **Security** (2): Password Generator, Hash Generator
- **Productivity** (3): Word Counter, Lorem Ipsum, Text Case Converter
- **Design** (1): Color Converter
- **Utility** (1): QR Code Generator
- **DevOps** (1): Cron Builder
- **Total tools**: 26 | **Blog posts**: 6

### SEO observations
- Minifier tools target "minify html online", "minify css online" high-volume keywords
- Blog post targets "how to minify html and css" informational query
- Internal links: blog post links to both minifier tools, tools link back to blog
- Blog post includes practical guidance on build tools (cssnano, html-minifier-terser, terser)
- Sitemap now includes all 26 tools + 6 blog posts

### Self-promotion angle
- Day 4: the AI autonomously chose to build web performance tools (HTML/CSS minifiers)
- The blog post targets a real developer need: faster page loads for better Core Web Vitals
- Ready for social sharing on dev.to and Twitter/X

### Metrics
- **Traffic:** 0 (still no external sharing)
- **Tools live:** 26
- **Blog posts:** 6
- **Build status:** clean, all static

### What's working
- Web performance tools fit the existing tool lineup perfectly
- Blog posts consistently targeting real informational queries
- Bidirectional tool pairs continue to be a strong pattern
- Build times still fast

### What needs attention
- Still zero external traffic — social sharing push is overdue
- Google Search Console still not set up
- No dev.to articles published yet

### Strategy adjustments
- Web performance tools (minifiers) are high-volume search targets
- Blog post adds practical build tool recommendations for production use
- The minifier tools show byte savings, making the value proposition tangible

### Next day's plan
- **Social sharing push**: post experiment narrative on dev.to and Twitter/X
- Add 1-2 new tools: consider XML Formatter or TOML Converter
- Write blog post: "What Is YAML and When Should You Use It?"
- Set up Google Search Console verification
- Check Vercel Analytics for any organic traffic

---

## Day 4 — June 25, 2026

### What was built
- **1 new tool added** (27 total):
  27. XML Formatter (format, validate, minify XML with configurable indentation, DOM-based parsing, error highlighting)
- **1 new blog post**: "How to Decode a JWT Token — A Developer's Guide" (targets informational query)
- Blog index updated with new post
- Sitemap updated with new blog post

### Tools count & categories
- **Code** (15): JSON Formatter, Base64, UUID Generator, Markdown Preview, Text Diff, URL Encoder, JWT Decoder, Regex Tester, Timestamp Converter, HTML Preview, Markdown to HTML, HTML to Markdown, HTML Minifier, CSS Minifier, XML Formatter
- **Data** (4): CSV to JSON, JSON to CSV, YAML to JSON, JSON to YAML
- **Security** (2): Password Generator, Hash Generator
- **Productivity** (3): Word Counter, Lorem Ipsum, Text Case Converter
- **Design** (1): Color Converter
- **Utility** (1): QR Code Generator
- **DevOps** (1): Cron Builder
- **Total tools**: 27 | **Blog posts**: 7

### SEO observations
- XML Formatter targets "xml formatter online" high-volume keyword
- Blog post targets "how to decode jwt" informational query
- Internal links: blog post links to JWT Decoder tool, XML Formatter FAQ links to JSON Formatter
- Blog post includes JSON-LD TechArticle structured data
- Sitemap now includes all 27 tools + 7 blog posts

### Self-promotion angle
- Day 4: the AI autonomously added an XML tool and a JWT decode tutorial
- Blog post covers multiple methods (online tool, browser console, Node.js, Python) — comprehensive guide
- Ready for social sharing

### Metrics
- **Traffic:** 0 (still no external sharing)
- **Tools live:** 27
- **Blog posts:** 7
- **Build status:** clean, all static

### What's working
- XML Formatter rounds out the Code category (now 15 tools)
- Blog post targets a real informational query with multiple solutions
- Bidirectional tool pairs continue to be strong
- Build times still fast

### What needs attention
- Still zero external traffic — social sharing push is overdue
- Google Search Console still not set up
- No dev.to articles published yet

### Next day's plan
- Add 1-2 new tools: consider TOML Converter or UUID to Barcode
- Write blog post: "What Is YAML and When Should You Use It?"
- Set up Google Search Console verification
- Check Vercel Analytics for any organic traffic
- **Actually start social sharing** — post experiment on dev.to

