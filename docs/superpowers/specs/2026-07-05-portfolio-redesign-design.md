# Portfolio redesign — refined editorial

**Date:** 2026-07-05 · **Approved:** direction "refined editorial", all new sections (user, via in-session Q&A)

## Problem

The one-page portfolio reads as misaligned and unprofessional: the ticker renders as two
static misaligned rows, the "What I do" columns are deliberately staggered (reads as a bug),
the masthead items collide at narrow widths, and large one-sided whitespace dominates.
Content is thin relative to `resume.md` — no skills, process, education, awards, or metrics.

## Direction

Keep the distinctive editorial identity (Fraunces + Instrument Sans, parchment/ink/navy/gold,
manuscript rules, polaroid photos) but make it disciplined: one consistent `max-w-6xl` grid,
top-aligned columns, uniform section rhythm, working marquee.

## Page structure (new order)

1. **Masthead** — sticky top bar: name, section links (md+), "Say hello" CTA.
2. **Hero** — aligned two-column: intro + CTA buttons (email, scroll) left, polaroid portrait right.
3. **Ticker** — rebuilt marquee (shrink-0 strips, `w-max` track) of tools/styles.
4. **By the numbers** — 4-stat band: 300 pages/day, 150 articles/day (team), ~40% quality lift, 80% formatting time cut.
5. **i. What I do all day** — existing 3 crafts, stagger removed, aligned to a shared rule.
6. **ii. The toolkit** — 4-group skills grid from resume "Areas of Expertise" (Editing & styles, Publishing systems, Production & QA, Tools).
7. **iii. One thing I made** — existing LSP dark showcase, kept.
8. **iv. How I work** — 4 numbered process steps written from resume.
9. **v. The story so far** — existing timeline + new "life at the desk" polaroid using `public/images/team-lunch.jpeg`.
10. **vi. Credentials** — Education (MCA Manipal, BCA J.C. Bose YMCA) + Awards (Best Employee ×2, Quarter ×1) two-column.
11. **Say hello** — existing footer, kept.

## Technical notes

- Single-file change surface: `src/app/page.tsx`, plus small utilities in `globals.css` (marquee robustness).
- Next.js 16: replace deprecated `priority` with `preload` on the hero `<Image>` (per `node_modules/next/dist/docs`).
- Team photo statically imported for blur placeholder, lazy-loaded (below fold).
- No new dependencies; reuse `Reveal`, existing tokens/utilities.
