# ADR-001: Static Single-File Architecture

**Date:** 2026-03-20  
**Status:** Accepted  
**Deciders:** E-Bora Commerce Team

---

## Context

We needed to decide how to build and deliver the E-Bora Commerce landing page. Options ranged from a full React/Next.js SPA to a simple static HTML file.

Kenya-specific constraints informed this decision significantly:
- A large portion of Kenyan users browse on mobile devices with limited data plans
- Network speeds on 3G/4G can be inconsistent outside Nairobi CBD
- Many devices are mid-range Android phones with limited processing power
- Hosting budget for V1.0 should be minimal (zero if possible)

## Decision

Ship as a **single `index.html` file** with all CSS and JavaScript inlined. No build tools, no bundler, no framework, no node_modules.

## Rationale

| Criterion | Single HTML | React/Next.js |
|---|---|---|
| First load (slow 3G) | ~50KB | ~300KB+ |
| Time to interactive | <1s | 2–4s |
| Deploy complexity | Drag and drop | CI/CD pipeline |
| Maintenance overhead | Low | High |
| Developer onboarding | Open file in browser | Install Node, npm install |
| Hosting cost | Free (Vercel/Pages) | Free (with limits) |

For a V1.0 marketing/landing page with no authentication, no real-time data, and no complex state, a framework is unnecessary overhead.

## Consequences

**Positive:**
- Zero build time — changes are instant
- Deployable by anyone with file access
- Works offline after first load
- No supply-chain attack surface (no npm dependencies)

**Negative:**
- As the page grows, a single file becomes hard to maintain
- No component reuse — repeated UI patterns must be copy-pasted
- No TypeScript, no linting by default

## Review Trigger

Revisit this decision when:
- The project adds a second page (products listing, cart, etc.)
- Team size grows beyond 2 developers
- Real-time inventory data is required
