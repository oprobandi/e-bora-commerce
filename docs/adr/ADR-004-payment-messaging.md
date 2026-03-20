# ADR-004: Payment Messaging Strategy

**Date:** 2026-03-20  
**Status:** Accepted  
**Deciders:** E-Bora Commerce Team

---

## Context

Payment trust is a critical conversion factor in Kenyan e-commerce. Unlike Western markets where card payments are default, Kenya's payment landscape is dominated by:

1. **M-Pesa** (Safaricom) — ~80% of mobile money transactions in Kenya
2. **Fuliza** — M-Pesa overdraft facility, enables purchases beyond wallet balance
3. **PesaPal** — aggregator supporting multiple payment methods
4. **Equity Bank** / **KCB** — mobile banking apps
5. **Cash on Delivery** — still expected by a significant segment

A user landing on the page who does not immediately see "M-Pesa accepted" will likely bounce.

## Decision

M-Pesa must be **visible within the first viewport on every screen size**, with dedicated trust signals throughout the page:

1. **Announce bar** — "Pay with M-Pesa, Visa or Mastercard" in the scrolling ticker
2. **Nav pill** — Persistent "M-Pesa Ready" green pill in the navbar
3. **M-Pesa section** — Full dedicated section with 4-step payment guide and visual
4. **Trust strip** — "M-Pesa Accepted" as one of four trust pillars
5. **Footer payment chips** — M-PESA, VISA, MASTERCARD, PESAPAL, FULIZA

## Rationale

**Why so much M-Pesa messaging?**
- First-time visitors from social media ads need immediate reassurance that they can pay with what they have in their pocket
- M-Pesa is not just a feature — it is a baseline expectation for any Kenyan e-commerce business
- Repeating the signal at multiple scroll depths catches users at different stages of consideration

**Why include Fuliza specifically?**
- Fuliza enables purchases when M-Pesa balance is insufficient — it removes a key blocker for impulse purchases
- Relevant for the KSh 10,000+ installment messaging

**Why include PesaPal?**
- PesaPal is the dominant payment aggregator in East Africa
- Merchants integrating PesaPal automatically get Visa, Mastercard, M-Pesa, and bank transfer in one integration

## Consequences

**Positive:**
- Reduces payment anxiety at point of decision
- Signals local credibility (not a foreign site)
- Covers all major Kenyan payment methods

**Negative:**
- Heavy M-Pesa messaging could feel redundant to urban users who take M-Pesa for granted
- Actual Daraja API integration is required for V1.1 to fulfil the promise (currently UI only)

## Review Trigger

Revisit when actual Daraja API integration is live — messaging can become more specific (e.g., show Paybill number, show Buy Goods till number).
