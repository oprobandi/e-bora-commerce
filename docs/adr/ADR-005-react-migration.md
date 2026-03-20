# ADR-005: Migration to Vite + React + Tailwind CSS

**Date:** 2026-03-20
**Status:** Accepted
**Deciders:** E-Bora Commerce Team
**Supersedes:** ADR-001 (Static Single-File Architecture)

---

## Context

V1.0 shipped as a single `index.html` — the right call for a zero-dependency first launch. However two problems emerged immediately after deployment:

1. **Responsiveness** — the desktop-first CSS with a single `@media (max-width: 960px)` breakpoint broke on the diverse range of Android phones common in Kenya
2. **Maintainability** — 830+ lines of mixed HTML/CSS/JS in one file became hard to reason about and impossible to split across contributors

The project needed a proper component architecture to support the V1.2 roadmap (routing, cart drawer, product modal, checkout).

## Decision

Migrate to **Vite + React 18 + Tailwind CSS v3**.

## Rationale

**Why Vite over CRA/Next.js?**
- Vite's dev server starts in ~300ms vs CRA's 3–10s — critical when developing on a mobile phone in Termux
- No SSR needed yet — the site is client-rendered, Vite's static output is sufficient
- Smaller footprint than Next.js for a project that doesn't need file-based routing yet

**Why React over Vue/Svelte?**
- Consistent with the developer's existing projects (maeven, harusi-planners both use React)
- Largest ecosystem — easier to find Kenya-specific component examples and help
- Context API covers all V1.1 state needs without adding Redux/Zustand

**Why Tailwind CSS?**
- Mobile-first by default — `sm:`, `md:`, `lg:` utilities enforce the right thinking
- Eliminates the entire class of bugs where custom CSS properties weren't scoped correctly
- Purging removes unused styles — smaller CSS bundle for mobile users on limited data
- Color tokens in `tailwind.config.js` are a single source of truth, replacing scattered CSS variables

## Migration Approach

1. Scaffold with `npm create vite@latest` (React template)
2. Install and configure Tailwind with postcss
3. Manually port each section of `index.html` into a dedicated JSX component
4. Extract all hardcoded data into `/src/data/` modules
5. Add CartContext for shared state
6. Wire category filter through App.jsx props

## Consequences

**Positive:**
- Mobile-first layout — every component built from 320px upward
- Cart state persists across page reloads via localStorage
- Category filtering is real React state, not DOM manipulation
- Each component is independently testable and replaceable
- `npm run build` produces an optimised `dist/` folder Vercel can serve

**Negative:**
- `npm install` now required (adds ~200MB node_modules locally, not deployed)
- Vercel build step adds ~30s to deployment time
- Font Awesome still loaded from CDN — should be replaced with react-icons in V1.2

## Review Trigger

Revisit when server-side rendering is needed (SEO for product pages). At that point, consider Next.js App Router.
