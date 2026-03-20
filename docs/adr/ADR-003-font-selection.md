# ADR-003: Typography — Syne + DM Sans

**Date:** 2026-03-20  
**Status:** Accepted  
**Deciders:** E-Bora Commerce Team

---

## Context

Font choice significantly affects perceived brand quality. The brief required avoiding "AI-default" fonts (Inter, Roboto, Arial, Space Grotesk) while maintaining excellent legibility across device types common in Kenya.

## Decision

- **Display / Headings:** Syne (weights 600, 700, 800)
- **Body / UI:** DM Sans (weights 300, 400, 500, 600)

Both loaded via Google Fonts with `display=swap`.

## Rationale

**Syne:**
- Geometric, high-personality display face with strong weight contrast
- Unusual enough to signal a deliberate brand decision
- Excellent at large sizes (hero titles, section headers, prices)
- Designed for editorial and identity use — appropriate for a brand header

**DM Sans:**
- Purpose-built for UI and screen reading
- Highly legible at small sizes (12–15px) on all screen densities
- Neutral enough to not compete with Syne
- Better hinting and rendering on mid-range Android screens than Inter

**Rejected alternatives:**
- Inter: Overused, generic, reads as "made with AI"
- Space Grotesk: Trendy but becoming dated, AI tool favourite
- Roboto: Android system font, no brand differentiation
- Poppins: Common in African startup UIs, no differentiation

## Consequences

**Positive:**
- Strong typographic hierarchy between headings and body
- Distinctive enough to be part of brand identity

**Negative:**
- Two external font requests (can be consolidated to one request since both are Google Fonts)
- Slight FOUT (Flash of Unstyled Text) on first load — mitigated by `display=swap`

## Review Trigger

Revisit when self-hosting fonts (see TODO) to ensure the subset is correct.
