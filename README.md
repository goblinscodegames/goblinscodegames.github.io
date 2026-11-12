# Goblin’s Code Games Studio

Static, English-language studio website. Concept: **The Goblin’s Worldforge — Fantasy × Technology**.

HTML5, CSS3, vanilla JavaScript and original SVG artwork. No build step, package installation, backend, analytics, advertising, remote fonts, or third-party media embeds.

## Local preview

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173/>. Stop with **Ctrl+C**. Use HTTP rather than double-clicking `index.html`, because assets use root-relative URLs. The standard Python server returns its own response for missing URLs; open `/404.html` directly to preview our custom error page.

## Files and editing

| File | Purpose |
| --- | --- |
| `index.html` | Home, Our Games, Studio Philosophy, Expertise, About, Contact |
| `privacy-policy/index.html` | Website privacy notice, separate from future game policies |
| `legal/index.html` | Legal operator information |
| `404.html` | Custom error page |
| `assets/css/styles.css` | Fonts, tokens, layouts, interaction states, responsive and reduced-motion rules |
| `assets/js/main.js` | Optional, finite Light the Forge interaction |
| `assets/img/worldforge.svg` | Original workshop and goblin illustration |
| `assets/img/forge-energy.svg` | Precisely aligned activation light and code layer |
| `assets/img/seed.svg` | Original world-seed illustration |
| `assets/img/logo.svg` | Replaceable wide logo |
| `assets/img/social-card.svg` | Editable 1200 × 630 social-card source |
| `assets/img/social-card.png` | Raster social preview used by Open Graph |
| `favicon.svg` | Standalone goblin mark, also used in About |
| `assets/fonts/` | Self-hosted WOFF2 fonts and their licence notices |
| `robots.txt`, `sitemap.xml` | Search-engine discovery and canonical routes |
| `.nojekyll` | Serve plain static files without Jekyll processing |

Major source sections have comments; CSS custom properties are the main design controls. No source is minified. If shared header/footer content changes, update all four HTML documents. Update the copyright year manually when appropriate.

## Design and animation

The upper-left proposition and the low, central workbench share one continuous dark laboratory. The goblin’s asymmetric ears, copper goggles, swept hair and apron form the character identity. Mineral surfaces and restrained brass give the emerald light a physical setting. No film-strip frames, pixel routes, contour rings, shutters, drums, mechanical service registers, or coloured contact forms are reused.

Bricolage Grotesque provides display typography; Source Sans 3 provides body and controls. Large display text, readable secondary text, open principles, unequal expertise areas, a studio emblem and compact email contact create different section rhythms. Tablet principles use paired heading/text rows; mobile retains the mascot in a portrait composition and all six navigation links remain visible.

**Light the Forge:** native button with click, touch and keyboard activation; polite status text; repeated input is guarded while active; focus stays on the button. The 1.8-second opacity animation completes and resets, with a two-second fallback timer. No continuous loops, moving text or motion dependencies. Reduced motion uses a lower-intensity light fade. No choices are stored or submitted.

Animate gate: occasional explanatory brand interaction; purpose is explanation/delight and state feedback. CSS opacity keyframes use `cubic-bezier(0.23, 1, 0.32, 1)`; action press feedback uses a 160ms transform transition. Pointer hover movement is gated. No `transition: all`.

## Manual graphics

- **Logo:** `/assets/img/logo.svg`, 300 × 64 viewBox. Replace the file, or update `src`, width and height in the marked logo block on each page. SVG is preferred; transparent PNG/WebP also works. CSS does not depend on its SVG internals.
- **Favicon:** `/favicon.svg`, 64 × 64. Optional additional ICO 16/32/48, PNG 32/192, and Apple touch PNG 180 may be added with explicit head links. About also references this file.
- **Hero:** `/assets/img/worldforge.svg`, 1400 × 900; `/assets/img/forge-energy.svg` must retain the same viewBox and alignment. Original SVG is the intended final artwork. No external photograph is needed.
- **Optional background:** the single `--hero-image: none` property in `assets/css/styles.css` accepts `url("../img/hero-background.webp")`. Keep the upper-left copy area quiet, put detail on the right/lower edge, and preserve the mascot. If a background is ever commissioned, use a low-detail 16:10 image around 2400 × 1500, WebP/AVIF, ideally below 250KB. Mobile uses a centred crop, so test it before adding a separate mobile variant. No empty image file is included.
- **Social card:** update the SVG source then render a 1200 × 630 PNG and verify the entire image before replacing the raster. The supplied raster was rendered from the SVG through the local browser; no generated or stock raster artwork is used.

## Future games and privacy policies

There are no fictional game listings, store destinations, ratings, screenshots or release dates. Add a real game only after its details are available.

Use these routes when a game exists (braces represent an actual stable slug; do not publish them literally):

```text
games/{game-slug}/index.html
games/{game-slug}/privacy-policy/index.html
```

This gives `/games/{game-slug}/` and `/games/{game-slug}/privacy-policy/` without JavaScript routing. Keep the policy URL stable and publicly accessible. Add an effective date and describe that game's actual collection, permissions, SDKs, providers, purposes, retention, age audience, transfers, rights and contact. Do not copy website-only claims into a game policy. Link the real policy from the game page, the game and relevant store listing; add canonical and sitemap entries once the page exists. There are deliberately no empty public game directories or placeholder policies.

## Fonts and provenance

Both fonts are licensed under **SIL Open Font License 1.1**; retain their copyright/licence notices when distributing them.

- Bricolage Grotesque: [official project](https://github.com/ateliertriay/bricolage), [licence](https://github.com/ateliertriay/bricolage/blob/main/OFL.txt). Latin variable WOFF2 served locally, downloaded through Google Fonts' distribution. Weight 200–800 and optical sizing. The unused larger TTF was removed.
- Source Sans 3: [Adobe source](https://github.com/adobe-fonts/source-sans), [licence](https://github.com/adobe-fonts/source-sans/blob/release/LICENSE.md). Upright variable WOFF2 downloaded from Adobe. Weight 200–900.
- Logo, favicon, scene, energy overlay, world-seed and social layout were authored for this project. No external image hotlinking or stock team/game imagery.

## QA and Impeccable review — November 12, 2026

**Method:** Design Taste informed subject specificity, content, composition and mobile treatment; Animate informed the motion gate and implementation; Impeccable's craft floor and audit dimensions informed the manual source, DOM and rendered review. This was a manual review, not an executable detector run or an independent certification. The master prompt prohibits automatically running skill executables, hooks, Live, init and default environment changes; none were run. Its approved SVG and lighting direction takes precedence over the skills' default image quotas and style restrictions.

### Verified

- Browser review at 360, 768, 1024, 1440 and 1920 CSS px; document width matched the viewport at all five widths.
- Full-page desktop, tablet and mobile layout review; no observed text clipping or horizontal page scrolling.
- Legal Information and Website Privacy Policy at desktop and mobile, including working privacy-topic navigation.
- Custom 404 mobile rendering and keyboard return to the homepage.
- Native forge button pointer and Enter activation; visible keyboard focus; status updates; automatic completion and ability to activate again.
- All images loaded in the final page DOM after the emblem fix; local assets returned HTTP 200, including fonts, logo, favicon and social image.
- One local HTTP check of home, legal routes, CSS, JS, artwork, robots, sitemap, fonts and licences. A nonexistent URL returned HTTP 404.
- All internal file/fragment references resolved; four HTML documents each have one H1, descriptions and unique IDs. Referenced images have alt text and dimensions.
- SVG and sitemap XML parsing, WOFF2 signatures and `node --check assets/js/main.js` passed.
- Token contrast calculations: secondary text at least 6.87:1, brass at least 6.17:1, emerald text at least 7.95:1 on assigned surfaces; button text 8.93:1. These are token calculations, not a full accessibility certification.
- Browser console warning/error queries during main-page checks were empty.
- Source inspection found no analytics, ad scripts, external resource requests, cookies, storage or backend calls. External policy links load only if followed.
- Limited secret-pattern scan found no matches. Operator name, address and NIP are confined to legal pages. No REGON appears in public HTML.
- Open Graph PNG visually checked at 1200 × 630; canonical legal URLs use directory paths with trailing slashes.

### Confirmed findings and fixes

| Finding | Impact | Resolution |
| --- | --- | --- |
| Tiny About emblem initially lazy-loaded | Blank area in whole-page captures | Load this small image eagerly; final DOM showed successful load |
| Tablet principles remained in three narrow columns | Needlessly short reading lines | Recompose 761–1000px principles into paired heading/text rows |
| Reduced-motion activation used the full light intensity | Less gentle than intended | Add a dedicated 35%-intensity fade with no positional motion |
| Initial raster export had the wrong canvas/crop | Social preview could omit the brand or mascot | Replace with a browser-rendered, explicitly clipped 1200 × 630 export |

The final manual review found no remaining blocking defect within the checks above. No invented audit score is treated as evidence.

### NOT VERIFIED / limits

- Physical touch devices, screen-reader speech output, browser zoom/text enlargement, and cross-engine Firefox/Safari behavior.
- Runtime reduced-motion emulation and an actual JavaScript-disabled browser session; CSS and no-script behavior were inspected in source. Without JS the static art, navigation and email work; the inactive forge control remains hidden.
- Actual email-client opening or email delivery. No messages were sent; SMTP is inapplicable.
- Performance timing/Core Web Vitals, external validators, Lighthouse, full WCAG certification and independent legal review.
- Remote Pages settings, deployed responses, public TLS, live headers, caches and GitHub's custom-404 dispatch. Nothing was deployed.
- Provider account contracts and the operator's wider correspondence-retention practices. Policies name known services and avoid a fabricated fixed retention period or EEA-only guarantee.

## GitHub Pages preparation

The site is buildless and prepared for repository-root publishing, but the remote publishing source has not been inspected or changed. If it is `/docs` or Actions, reconcile that setting before a future approved publication. No hosting registration, workflow, CNAME, Git remote, SSH or global Git setting was changed.

- Canonical origin: `https://goblinscodegames.github.io` (no invented www host).
- Legal directory URLs replace the master prompt's Nginx rewrite mechanism. There is no `.html` alias or fabricated permanent redirect.
- GitHub controls response headers, caching, HTTPS and server behavior. HTML referrer metadata does not substitute for HTTP-only protections such as `frame-ancestors` or HSTS. Do not claim Nginx-equivalent configuration.
- Custom `404.html` is in the publishing root; no SPA fallback converts missing pages into HTTP 200.
- All repository content intended to be published must be suitable for public access. Never add secrets, mail exports, credentials or private draft policies.
- After publication is explicitly approved, check the actual canonical host, HTTPS, main and legal routes, assets and missing-path status once. Do not mark them verified beforehand.

Primary policy references: [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection), [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement), [Google Privacy Policy](https://policies.google.com/privacy), [GDPR official text](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [UODO](https://uodo.gov.pl/en).

No commits, pushes, publishing or infrastructure changes are part of this implementation. No backup of an existing website was needed: the starting repository held only this README.
