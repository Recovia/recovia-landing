# Design Brief v2 — Bolder Direction for "Correspondence"

Paste this whole file into a **new** Claude (claude.ai) conversation to explore a second, more attention-grabbing direction. This is a deliberate contrast to a first direction we already built (quiet paper background, editorial serif, muted navy accent) — that one felt too dim/safe. This round should feel bolder and more confident, while still being credible for a legal-adjacent tool.

---

## 1. What the product is

A **local-first desktop app** that turns raw email exports into court-ready exhibit bundles.

- User imports `.eml` / `.mbox` files (from Gmail, Outlook, Apple Mail, Thunderbird).
- The app reconstructs email threads (In-Reply-To / References headers), removes duplicates (Message-ID or content hash), sorts chronologically with timezone correction.
- User tags messages against a template taxonomy (Legal / Business / Personal) and assigns sequential Reference IDs (`EX-0001`, `EX-0002`...).
- User exports a spreadsheet index (`.xlsx`) and a single bookmarked PDF bundle.
- **Everything runs on-device.** No cloud upload, no account required for the trial, no telemetry on message content. The only network call is a license check.
- Pricing: one-time license ($49), free trial, works offline with a grace period.
- Platforms: Windows 10/11, macOS (Apple Silicon + Intel), Linux (AppImage + .deb).

**Audience:** litigation paralegals, solo attorneys, compliance analysts, records managers — people assembling discovery/evidence bundles who care about privacy (client data never leaves the machine) and about the output being clean and citable in court.

This is still a **rebrand**, not a repositioning — same product, same audience, same feature set. Only the visual system changes.

---

## 2. What went wrong with round 1 — and what NOT to repeat this round

Round 1 landed on: cool paper background (`#eceae4`), an editorial serif (Newsreader) for headings, a muted navy accent (`#1e3f63`), restrained red/olive tag colors, and a fairly conventional hero (copy on the left, a "case file" document mock on the right). It's tasteful, but the feedback was: **it doesn't grab attention, the colors are too dim.**

For this round:

- **Turn up contrast and saturation.** Don't be afraid of a genuinely loud, confident accent color — something with real chroma, not a desaturated "safe" navy or olive. This can still read as credible for a legal tool; confidence and boldness are not the same as looking like a consumer app.
- **Break the default hero layout.** Round 1 used the generic "headline + subhead + CTA on the left, product visual on the right" split — don't repeat that structure here. Do something structurally different: asymmetric, overlapping, full-bleed, diagonal, oversized type as the dominant visual element, an unconventional grid — genuinely surprise me. The brief for this round is explicitly: **go bolder on layout, not just color.**
- **Still avoid the generic AI-SaaS defaults**, just a different set of them this time: don't default to (a) near-black background with a single neon accent glow (that's what the *original pre-rebrand* page already was), or (b) a loud gradient-mesh/glassmorphism startup look that could belong to any SaaS regardless of subject. Boldness should still come from a choice grounded in what this product actually is — exhibit tags, evidence stamps, redaction, chain-of-custody, case files, docket numbers — not from generic "vibrant SaaS" styling.
- A stamped/pressed/official-document energy (think: exhibit stickers, redline stamps, evidence tags, docket numbering, a rubber-stamp mark) is a rich vein to pull bold color and bold type from that's still tied to the subject.

---

## 3. Light AND dark mode — both required, designed together

Round 1 was light-mode only. This round needs **both light and dark mode as first-class token sets**, not a naive inversion of one into the other:

- Design them together as one system: same type scale, same layout, same accent hue family — but background/surface/text luminance and the accent's saturation/lightness tuned separately per mode so both feel intentional, not like "light mode with the colors flipped."
- Dark mode should use desaturated or tonal variants of surfaces rather than pure black, and the accent should be adjusted for dark backgrounds (often slightly less saturated or shifted in lightness) rather than reused at the exact same hex as light mode.
- Both modes must hit real contrast — body text ≥4.5:1 against its background in both modes; don't let dark mode be the one that's "good enough."
- Provide two complete named token sets (see deliverable format below) — light and dark — for whichever direction we pick.

---

## 4. Font pairing — starting points, not a mandate

Round 1 used an editorial serif (Newsreader) + Public Sans + IBM Plex Mono — quiet, records-office energy. This round wants something with more visual force. A few starting points, grounded in the same "stamped/official document" vein but pushed bolder:

- **Big Shoulders Display (or Text) as the display face** — it's a grotesk literally modeled on stamped/pressed industrial signage (Chicago manhole covers), so it carries genuine "stamped/embossed" character at large sizes without being a generic geometric sans. Pair with **Archivo** (clean, confident grotesk, wide weight range) for body/UI, and a monospace for tabular data (**IBM Plex Mono** for continuity with round 1, or **JetBrains Mono** for a slightly more technical edge).
- **A heavy slab serif** (e.g., **Zilla Slab** at a bold/black weight, or **Roboto Slab**) for the display face instead — slab serifs read as stamped/typewritten/official in a way a standard serif doesn't, and at a big enough size/weight they're inherently more attention-grabbing than Newsreader was. Pair with a neutral grotesk body and a mono for data.
- **Keep boldness in color/scale/layout rather than swapping the whole type family** — if a direction is strong enough on layout and color, an evolution of the existing serif (much bigger, much heavier weight, more dramatic scale contrast between display and body) can also work. Not required to change fonts if the rest of the system is doing the work.

Pick whichever fits the direction that best answers "bold and attention-grabbing" — justify the choice, and note it needs to be on Google Fonts for `next/font/google`.

---

## 5. Scope for this round — TWO SECTIONS ONLY

Do not build the full page yet. Deliver just:

1. **Hero** — this is where the "go bolder on layout" instruction matters most. This is the section to take the real risk on.
2. **One more section of your choice** — pick whichever section best demonstrates the rest of the system (color, type, light/dark) at work. A good candidate is the feature grid or the "case file" exhibit-list device from round 1, reinterpreted in the new direction — but choose whatever best proves out the direction.

For each of the two sections, deliver **both light and dark mode** so we can compare. Present as rendered artifacts (HTML), not just a text description.

Once we pick a direction from these two sections, we'll come back for the remaining sections (features, how-it-works, testimonials, formats, downloads, CTA, pricing, FAQ, footer) in a follow-up round — same as we did last time.

---

## 6. Deliverable format

For the direction (or 2 alternate directions, if you want to propose a choice — your call), provide:

- **Token system, light mode**: 4–6 named hex values (background, surface, ink/text, muted text, accent, one semantic color if needed).
- **Token system, dark mode**: the same roles, tuned separately, not inverted.
- **Type roles**: display face + body face + mono/data face, with weights and the sizes they're used at (headline, body, data).
- **Layout concept for the hero**: one-sentence description of the structural idea + why it breaks from "copy left, visual right."
- **Signature element**: the one memorable thing this direction will be remembered by.
- Rendered HTML artifacts for both sections, in both light and dark mode (so 4 renders total, or clearly toggle-able).
- Brief rationale tying the boldness back to the product — why this reads as confident/credible for an evidence-assembly tool, not just loud for its own sake.

---

## 7. Project structure this needs to eventually fit into (for reference — not needed for this two-section round)

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Tokens live in `app/globals.css` under `:root` (light) with dark-mode overrides; fonts load via `next/font/google` in `app/layout.tsx`. Each landing-page section is its own component in `components/` (`Nav`, `Hero`, `Features`, `HowItWorks`, `Testimonials`, `Integrations`, `Downloads`, `Cta`, `Pricing`, `Faq`, `Footer`). We'll map whatever you design onto that structure once a direction is chosen.
