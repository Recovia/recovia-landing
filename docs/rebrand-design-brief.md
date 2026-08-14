# Design Brief — Rebrand of "Correspondence & Exhibit Organizer" Landing Page

Paste this whole file into Claude (claude.ai) when starting the design session. It contains everything about the product, the current site, the exact file structure your output needs to fit into, and constraints for the visual direction.

---

## 1. What the product is

A **local-first desktop app** that turns raw email exports into court-ready exhibit bundles.

- User imports `.eml` / `.mbox` files (exported from Gmail, Outlook, Apple Mail, Thunderbird).
- The app reconstructs email threads (via In-Reply-To / References headers), removes duplicates (by Message-ID or content hash), and sorts everything chronologically with timezone correction.
- User tags messages against a template taxonomy (Legal / Business / Personal) and assigns sequential Reference IDs (e.g. `EX-0001`).
- User exports a spreadsheet index (`.xlsx`) and a single bookmarked PDF bundle.
- **Everything runs on-device.** No cloud upload, no accounts required to use the free trial, no telemetry on message content. The only network call is a license check (sends a license key, never email content).
- Pricing: one-time license ($49 in the current copy), free trial, works offline, license valid offline with a grace period.
- Platforms: Windows 10/11, macOS (Apple Silicon + Intel), Linux (AppImage + .deb).

**Primary audience:** litigation paralegals, solo attorneys, compliance analysts, records managers — people assembling discovery/evidence bundles who care a lot about privacy (client data never leaving their machine) and about the output being clean and citable in court.

**This is a rebrand, not a repositioning.** The product, audience, and feature set stay the same — we're only changing the name, color system, typography, and visual design. Content/copy can be rewritten for tone, but the informational content (features, workflow, FAQ answers, pricing model) should stay equivalent.

---

## 2. What "rebrand" should NOT reproduce

The current implementation uses a look that's common in AI-generated SaaS pages: **near-black background (`#090b0a`) with a single bright neon-green accent (`#86ef6b`)**, General Sans / Space Grotesk display type, glassy cards, radial "glow" gradients behind section headers. It's clean, but it's also a template default, not a choice made for this specific product.

Please don't just reskin that pattern with a different neon color (swap green for purple/blue/vermilion) and call it a rebrand. Take a real point of view. A legal/evidentiary tool has a genuinely different personality available to it than a generic dev-tool SaaS: precision, chain-of-custody rigor, archival permanence, the physical vocabulary of exhibits, bates-stamps, index tabs, dockets. Ground the visual language in that world rather than in generic "SaaS dark mode."

You're free to propose light mode, a paper/archival palette, a more restrained near-monochrome system with one disciplined accent, or something else entirely — just make it a deliberate choice tied to what this product actually is, not the nearest default.

---

## 3. Process to follow

Use a two-pass approach:

**Pass 1 — propose 2–3 distinct design directions**, each as a compact token system:
- **Color:** 4–6 named hex values (background, surface, ink/text, muted text, one accent, one semantic/success color if needed).
- **Type:** a display face (used with restraint, for H1/H2 and maybe numerals), a body face (paragraphs, UI text), and a utility/mono face if the design calls for one (this product has genuinely tabular data — Reference IDs, timestamps, file counts — where a mono or tabular-figure face is a real functional choice, not decoration).
- **Layout concept:** one-sentence description + a rough wireframe of the hero and one other distinctive section.
- **Signature element:** the one memorable thing this page will be remembered by (could be how the "exhibit bundle" mock/visual is treated, could be a typographic device, could be a motion moment — your call, but name it explicitly).

For each direction, briefly self-check: does this read as generic "AI SaaS dark mode" or "warm cream + terracotta serif" or "broadsheet hairline-rule newspaper" (the three current AI-design clusters)? If so, revise before presenting it.

**Pass 2 — once a direction is picked**, build it out into the actual page using the real copy/content below (or improved copy in the same voice — plain, specific, no filler, active voice, matching the "what you control" tone already in the FAQ).

### Font pairing starting points (optional, not mandatory)

If useful as a starting point rather than defaulting to Inter/Space Grotesk again, consider pairings whose personality actually fits "precise, archival, quietly confident legal-tech tool" rather than generic startup tech:

- **Fraunces (display, used sparingly for H1/section heads) + Inter or IBM Plex Sans (body/UI) + IBM Plex Mono (Reference IDs, timestamps, version numbers)** — Fraunces brings editorial/archival gravitas without tipping into "law firm brochure," Plex Mono gives the tabular data (exhibit numbers, dates) a genuine functional reason to look distinct.
- **Newsreader or Source Serif 4 (display) + Inter or Public Sans (body) + a tabular-figure mono for data** — leans more toward "records/archive," slightly more formal, still renders well at dark or light.
- **Something more contemporary if you want to signal "modern tool, not law firm":** Instrument Sans or General Sans (display, restrained) + Inter (body) + a monospace for data — closer to the current feel but should be paired with a genuinely different color/layout system so it doesn't read as the same page.

Pick and justify whichever fits the direction you land on — these are starting points, not a mandate.

---

## 4. Exact project structure your output needs to map onto

This is a **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4** project. It already exists and builds cleanly with the *old* visual system ported in as a working baseline. Your redesign should be deliverable as changes to these specific files — please structure your output (code, tokens, specs) so it can be dropped straight into this layout:

```
app/
  layout.tsx          — <html>/<body>, <head> metadata, shared SVG defs, font loading
  page.tsx             — composes all section components in order (no section markup lives here directly)
  globals.css          — Tailwind import + all design tokens as CSS custom properties under :root
                          (currently: --bg, --bg-2, --surface, --ink, --muted, --green, --radius,
                          --shadow, --display, --sans, plus all the section class rules: .hero,
                          .cards, .steps, .quotes, .apps, .dl-grid, .cta, .price, .faq, footer, etc.)

components/
  Nav.tsx              — sticky header, brand mark, section anchor links, "Buy a license" + "Download" CTAs
  Hero.tsx             — headline, subhead, primary CTA (OS-aware download button), product mock visual
  Features.tsx         — 6-card feature grid inside a "band" (accurate threading, de-dup, timezone
                          handling, tagging/reference IDs, index+PDF export, privacy/on-device)
  HowItWorks.tsx        — 3-step process (Import → Tag → Export)
  Testimonials.tsx      — 4 quote cards (paralegal, solo attorney, compliance analyst, records manager)
  Integrations.tsx      — format/client grid (.eml, .mbox, Gmail, Outlook, Apple Mail, Thunderbird)
  Downloads.tsx         — OS-detecting 3-column download grid (Windows/macOS/Linux), client component
  Cta.tsx               — mid-page callout band, download CTA
  Pricing.tsx           — single pricing card, $49 one-time license, feature checklist
  Faq.tsx                — 5-item accordion (privacy, file formats, export contents, platforms, offline use)
  Footer.tsx             — brand mark, copyright, download/pricing links

lib/
  config.ts             — VERSION, RELEASE_BASE, REPO_URL, BUY_URL, per-OS file name map
  useDetectedOs.ts       — client hook that detects Windows/macOS/Linux from the browser for the
                            OS-aware download CTA in Hero.tsx and Downloads.tsx
```

**Please deliver your redesign in a way that respects this split**, i.e.:
1. A full **token set** for `app/globals.css` (`:root` custom properties — colors, fonts, radii, shadows) plus any updated shared class rules (`.btn`, `.card`, `.eyebrow`, etc.).
2. **Per-component visual treatment**, called out by the component names above, so it's obvious which file each change belongs to — not one giant undifferentiated HTML mockup.
3. Keep the **same section order and the same functional content** (OS-detect download logic, the 6 features, 3 steps, 4 testimonials, 6 format icons, 3 platforms, 1 pricing tier, 5 FAQ items) — only the visual system, typography, copy tone, and any new brand name/logo change.
4. If you introduce a new brand name (currently "Correspondence" / "Correspondence & Exhibit Organizer"), state it clearly and update the logo mark description — the current logo is a generic droplet/leaf gradient SVG that has no real connection to the product; a signature mark tied to the exhibit/archive concept would be a good candidate for the "signature element."

---

## 5. Deliverable format

For each proposed direction, and then for the final chosen one, please provide:
- The token system (as a short table or CSS block).
- A description or mockup (image, HTML/CSS, or Figma-style description) of the **Hero** and **one other section** that best expresses the direction.
- Font names (Google Fonts preferred, for easy Next.js `next/font/google` integration) and their assigned roles.
- Brief rationale tying each major choice back to the product (why this palette/type fits an archival/legal precision tool, not just "why it looks nice").

Once a direction is approved, we'll port the tokens and component-level styles into the file structure above ourselves.
