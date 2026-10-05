# Linkwarden — Fix List

Prioritized issues found during the best-practices review. Grouped by category; ordered roughly by impact within each group.

## P0 — Correctness bugs

- [x] **Invisible white-on-white button text** — `src/components/Button/Button.tsx`: `FillButton` and `OutlineButton` set `background-color: white` **and** `color: white`. Fixed: fill is now white-on-dark-text, outline is transparent with a `currentColor` border.
- [x] **Dead CTA** — Hero "Start Free Trial" (`CtaButton` → plain `<button>`) had no `onClick`/`href`. `CtaButton` now accepts `href` (renders an anchor); Hero CTA links to `#pricing`.
- [x] **`variant` typed as `string`** — `Button.tsx` used a runtime `throw` for unknown variants. Replaced with a `ButtonVariant` union + `VARIANT_BUTTONS` lookup map.

## P1 — Accessibility

- [x] **Plan toggle lacked ARIA semantics** — `PlanSection.tsx`: container now has `role="group" aria-label="Billing period"` and each button has `aria-pressed`.
- [x] **Icon-only close button** — `MobileMenu.tsx`: added `VisuallyHidden` "Close menu" label.
- [x] **`scroll-behavior: smooth` without a reduced-motion guard** — `GlobalStyles.tsx`: now gated behind `@media (prefers-reduced-motion: no-preference)`.
- [x] **Focus outline color** — verified: the site is dark-only (`#0F1115` background), so `outline-color: white` is ~21:1 contrast everywhere. No change needed; revisit if a light surface is ever introduced.
- [x] **Decorative SVG gets `fetchPriority="high"`** — `Hero.tsx`: removed the priority hint from the masked decorative SVG; hero photo keeps it.

## P2 — Hygiene / cleanup

- [ ] **Remove `new-component` dependency** — listed in `package.json`, imported nowhere. Accidental install.
- [ ] **Fix/remove `pnpm-workspace.yaml`** — contains literal placeholder text (`set this to true or false`) and is unnecessary for a single-package repo.
- [ ] **Delete commented-out `MagicPattern` block** in `Hero.tsx` (lines ~117–145).
- [ ] **Rename `DesctopText` → `DesktopText`** in `Hero.tsx`.
- [ ] **Replace `key={index}` with `key={label}`** in `FaqSection.tsx` (labels are unique).
- [ ] **Add `metadataBase`** to `src/app/layout.tsx` metadata (required for absolute OG URLs).
- [ ] **Remove unused `React` import** in `MaxWidthWrapper.tsx` (the one lint warning).

## P3 — Process

- [ ] **Add tests** — no test runner at all. Start with vitest + React Testing Library for: Button variant mapping (incl. the unknown-variant throw), PlanSection toggle state, MobileMenu open/close.
- [ ] **Add CI** — no `.github/`. Minimum gate: `pnpm lint`, `tsc --noEmit`, `next build` on PRs.
- [ ] **FAQ body copy is lorem ipsum** — fine as a placeholder, but replace before any real use.

## Notes (non-blocking)

- Header hover underline uses JS state (`hoveredNavItem`) for a purely decorative effect; could be pure CSS.
- `AnimatedBorder` passes both a spring `transition` and `duration: 0.25` — duration is ignored for springs.
- `DARK_TOKENS` inlined on `<html>` and `manrope.variable` applied to both `<html>` and `MaxWidthWrapper` — redundant but harmless.
- Global `letter-spacing: -0.025em` on `html` is inherited everywhere; consider scoping per element.
