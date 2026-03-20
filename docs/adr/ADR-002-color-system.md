# ADR-002: Color System — Teal Primary, No Blue

**Date:** 2026-03-20  
**Status:** Accepted  
**Deciders:** E-Bora Commerce Team

---

## Context

Three color system iterations were evaluated before settling on the final palette:

**Iteration 1:** Dark theme — forest green primary on black background.  
Rejected: Poor readability on budget Android screens in bright Kenyan sunlight.

**Iteration 2:** Blue primary (`#1B5FCC` / `#2535D8`) on light background.  
Rejected: Generic "AI/SaaS default" aesthetic. Indistinguishable from thousands of other e-commerce sites. No cultural grounding.

**Iteration 3 (Accepted):** Deep teal primary on light background.

## Decision

**Primary color: `#0A6E7C` (Deep Teal)**

Full token set:
```css
--primary:       #0A6E7C;  /* All primary CTAs, links, active states */
--primary-dark:  #085A66;  /* Hover and pressed states */
--primary-light: #E3F5F7;  /* Backgrounds, chip fills, highlights */
--primary-mid:   #0D8494;  /* Gradient midpoints */
--green:         #0A7C4E;  /* M-Pesa, secondary actions, trust */
--orange:        #E8650A;  /* Flash deals, discounts, urgency — sparingly */
--black:         #0F1117;  /* Stats bar and footer only */
```

## Rationale

**Why teal over blue:**
- Blue is the default choice of AI-generated UIs, generic SaaS products, and Western e-commerce templates. It carries no local identity.
- Teal is a deliberate brand decision — rare enough to be memorable.
- Deep teal has warmth and depth that reads as premium without being cold.
- It is distinct enough from both the M-Pesa green and the flash-sale orange to create a clear visual hierarchy.

**Why green as secondary (not primary):**
- Green is the colour of M-Pesa and Safaricom — the dominant payment rail in Kenya. Giving green its own semantic role (payment/trust) makes it more meaningful than using it as a generic primary.
- Using green as primary would cause visual confusion — users might associate brand elements with M-Pesa rather than E-Bora.

**Why orange is accent-only:**
- Orange signals urgency and deals. Using it beyond flash sales and discount badges would train users to ignore it.
- Restraint preserves the psychological trigger.

**Why no red:**
- Red has strong negative/warning connotations in UI contexts (errors, warnings).
- Kenya's flag includes red, but using it on an e-commerce brand risks "danger" associations.
- Explicitly excluded per stakeholder direction.

## Consequences

**Positive:**
- Immediately distinctive — no other major Kenyan electronics retailer uses teal
- Strong contrast ratios on white backgrounds (WCAG AA compliant)
- Works well in both digital and future print contexts

**Negative:**
- Less familiar than blue — requires user trust to build over time
- Teal and green can appear similar to users with certain types of colour-vision deficiency (mitigated by using different lightness levels and always pairing with icons)

## Review Trigger

Revisit if brand identity work (logo, packaging, signage) establishes a different direction.
