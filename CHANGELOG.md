# Changelog

All notable changes to E-Bora Commerce are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
Versioning: [Semantic Versioning](https://semver.org/)

---

## [1.1.0] — 2026-03-20

### Migration
- **Migrated from static HTML to Vite + React 18 + Tailwind CSS v3**
- Single `index.html` replaced by full component architecture
- All CSS migrated from custom properties to Tailwind utility classes
- All data extracted from markup into `/src/data/` JS modules

### Added
- **CartContext** — global cart state via React Context API with localStorage persistence. Cart count survives page refresh
- **Working category filter** — clicking a category pill in `CategoryBar` filters the `ProductGrid` in real time via state lifted to `App.jsx`
- **Mobile hamburger menu** — full slide-down drawer on mobile with all nav links, M-Pesa pill, account links and phone number
- **Mobile search row** — dedicated full-width search bar below the logo on mobile
- **Responsive stats bar** — horizontal scroll on mobile instead of cramming 5 stats
- **Responsive M-Pesa steps** — vertical stacked layout on mobile, horizontal on desktop
- **Newsletter form state** — submitting shows success message, no reload
- **Add to cart feedback** — button turns green with checkmark for 1.4s after adding
- **Empty state** for product grid when a category has no products
- **Contact details in footer** — 0799 644 100 and info@e_boracommerce.com
- `CONTRIBUTING.md` with branching strategy and commit conventions

### Changed
- Tailwind color tokens replace all CSS custom properties (see `tailwind.config.js`)
- Hero headline is uniform single color — no split-color words
- All breakpoints rebuilt mobile-first (`sm:` / `md:` / `lg:` stack up)
- `vercel.json` updated for Vite framework — removed deprecated `builds` block

### Fixed
- Cart counter no longer resets on page reload (localStorage)
- Countdown timer logic corrected (no negative values)
- Announcement bar links no longer eat ticker width on small screens
- Category pills no longer hardcoded active state — driven by React state

---

## [1.0.0] — 2026-03-20

### Initial Release
- Full electronics e-commerce landing page
- M-Pesa payment section, flash deals, product grid
- Teal primary color system
- Static single HTML file
- Vercel + GitHub deployment

---

## [Unreleased]

See [TODO.md](./TODO.md) for planned V1.2 features.
