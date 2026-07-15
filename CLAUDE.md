# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

FairShifts — a static B2B marketing site for a done-for-you staff rostering service (shift-based businesses, primarily care homes). Plain HTML/CSS/JS, no framework, no build step, no backend, no database. Pricing shown in AED.

## Commands

There is no build, lint, or test tooling in this project — it's hand-written static HTML/CSS/JS served as-is.

- **Local preview**: `npx --yes serve -l 5500 .` (this is what `.claude/launch.json` runs). Alternatively just open `index.html` directly in a browser.
- **Deployment**: manual — no git CLI, no CI/CD. The user maintains a GitHub repo (`fairshifts-create/fairshifts-site`) via GitHub's web "Add file → Upload files" interface, connected to Vercel for auto-redeploy on every commit. There is no local git repository in this project directory.

## Architecture

### Pages
Three standalone HTML files sharing one stylesheet and one script: `index.html` (the actual landing page, 9 sections in order: hero, pain points, how it works, before/after showcase, example download, pricing, testimonials, FAQ, final CTA+footer), `privacy.html` and `terms.html` (placeholder legal pages with clearly marked `[Placeholder]` text for the user to replace later).

### Theming (light/dark mode)
All color values are CSS custom properties defined once in `style.css`'s `:root` (light theme) and overridden in a `[data-theme="dark"]` block. The active theme is an attribute on `<html>`, toggled by a button in the nav (`.theme-toggle`) and persisted in `localStorage` under the key `fairshifts-theme`. Every HTML page has a small **inline** `<script>` in `<head>` (before the CSS loads) that reads the saved/system preference and sets `data-theme` synchronously — this exists specifically to avoid a flash of the wrong theme on load, and must stay in sync across all three HTML files if the toggle logic changes.

Two things about the theme system that aren't obvious from a single file:
- A handful of components (`.price-card--dfy`, `.final-cta`) are meant to look like a fixed dark "premium" surface in *both* themes. They use a dedicated `--premium-bg` variable rather than `--ink`, because `--ink` itself flips between dark (light mode) and light (dark mode) — reusing `--ink` for a background here would invert incorrectly when the theme changes.
- Components with non-transparent backgrounds don't automatically pick up dark styling — they must be added explicitly to the `[data-theme="dark"] .card, details.faq, .shot, .modal { background:#11241a }` override list near the top of `style.css`. A new card-like component will silently stay white in dark mode unless added there.
- Text color that depends on CSS inheritance *through* an ancestor that itself has a `transition: color` (e.g. `.modal`) can lag or resolve incorrectly right after a theme switch. Prefer setting `color:var(--ink)` directly on the element rather than leaning on inheritance in these cases.

### JavaScript (`script.js`)
One IIFE, no dependencies, organized into independent sections in this order: theme toggle, mobile nav toggle, reveal-on-scroll (`IntersectionObserver` adding `.in-view` to `.reveal`/`.reveal-group` elements, respects `prefers-reduced-motion` via a global CSS override rather than JS), lightbox (image zoom for the before/after/validation screenshots), modals (two: free-roster request and waitlist signup), and Formspree AJAX submission for both modal forms.

Both modal forms POST to the same Formspree endpoint (`https://formspree.io/f/xeeyjlrl`) and are distinguished on the receiving end only by a hidden `_subject` field ("FairShifts: Free Roster Request" vs "FairShifts: Waitlist Signup") — there's no server-side routing.

Focus-management in `openModal`/`openLightbox` (moving focus into the dialog) is deliberately wrapped in `setTimeout(..., 0)` rather than called synchronously right after adding the `.open` class — calling `.focus()` in the same tick as the class change is unreliable.

### Assets
- `images/` — filenames are lowercase (`before.png`, `after.png`, `validation.png`, `logo-light-mode.png`, `logo-dark-mode.png`, `favicon-16/32/48/192.png`, `apple-touch-icon.png`, `og-image.jpg`) and must stay that way: local Windows dev is case-insensitive but Vercel's Linux servers are not, so a case mismatch works locally and 404s in production.
- `favicon.ico` at the project root bundles the 16/32/48px favicon sizes for legacy/taskbar use; the per-size PNGs in `images/` cover modern browsers and `apple-touch-icon.png` covers iOS home-screen icons.
- The brand mark (`.brand` in the header/footer) is two plain `<img>` tags, not text — `brand-logo-light`/`brand-logo-dark` swap via the same `[data-theme="dark"]` mechanism as everything else. This used to be `<picture>` + WebP `<source>`, but that was dropped: if the WebP file is missing/stale on a deploy, `<picture>` does not reliably fall back to the `<img>` PNG (unlike `<img>`'s own `onerror`), so a partial upload silently breaks the logo. Given the WebP only saved ~5% on an already-small file, plain PNG `<img>` is the safer choice for this manual-upload workflow.
- `DEMO_Roster_BeforeAfter_Aug2026.xlsx` at the project root is the real file behind the "Download the full example roster" button.
- `_original_demo_assets_backup/` is leftover source material (original-case screenshots), not referenced by any page — don't treat it as a live asset, and it shouldn't be re-uploaded to the deployed site.

### Deployment gotcha worth knowing
Because updates go out via manual file upload rather than `git push`, it's easy for the live site to end up with some files updated and others stale (this has already caused real bugs: a missing `images/` folder, and a `script.js` that was several edits behind `style.css`). When changing multiple files, assume the user needs to re-upload *all* of them, not just the one that logically changed.


## Working rules

- The owner has NO coding experience: explain everything in plain English, and ask before making design or technical decisions.
- Never reference GTA, the owner's employer, or any real staff data anywhere in this project.
- Future product: Pro ($39/mo) and Business ($89/mo) software tiers. Rosters will always be generated by a deterministic solver algorithm — never by an AI/LLM. AI is only for parsing client input into structured rules.
- The docs/ folder contains business planning files: read them when asked, but they must never be deployed to the live site.

### Mandatory verification checklist — every change, no exceptions

This applies to every update the owner asks for on this project — design, content, layout, features, anything. A task is not done until all of the following are checked:

1. Make the change and confirm it on desktop, light mode.
2. Apply/check the same change in dark mode: colors, backgrounds, borders, shadows, text contrast, icons, and hover/focus states must look correct and intentional — not auto-inverted, not forgotten. Watch for the known dark-mode traps documented above (`--premium-bg` vs `--ink`, the explicit dark-background override list, inheritance lag through transitioning ancestors).
3. Apply/check the same change on mobile/responsive layout: spacing, font sizes, tap targets, and no overflow or broken wrapping at small widths. Test at least 375px and 768px.
4. Confirm colors/styles use the existing CSS custom properties (`--ink`, `--muted`, `--blue`, `--border`, etc.) rather than hardcoded hex/rgba values. If a hardcoded value is found (existing or newly introduced), fix it to use the theme variables so it responds correctly to the light/dark toggle.
5. Before reporting the task as finished, explicitly state what was verified in each of the four contexts (desktop light, desktop dark, mobile light, mobile dark) — don't just say "done."