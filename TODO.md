# TODO — E-Bora Commerce

---

## ✅ Completed in V1.1

- [x] Migrate to Vite + React + Tailwind CSS
- [x] Mobile-first responsive layout (hamburger menu, mobile search, stacked M-Pesa steps)
- [x] Cart state with Context API + localStorage persistence
- [x] Working category filter
- [x] Data separation into /src/data/
- [x] Tailwind color token system
- [x] Newsletter form with success state
- [x] Add to cart feedback animation
- [x] Contact details (0799 644 100 / info@e_boracommerce.com)

---

## 🔴 High Priority (V1.2)

- [ ] **Product detail modal** — clicking a product card opens a lightbox with full specs, image gallery, add-to-cart and quantity selector
- [ ] **Cart drawer/sidebar** — slide-in panel showing items, quantities, subtotal, remove and checkout CTA
- [ ] **Real search** — filter products by name/brand/specs as user types
- [ ] **React Router** — add routing for /products, /cart, /checkout pages
- [ ] Real product images (replace Unsplash placeholders)
- [ ] Favicon + Apple touch icon
- [ ] `manifest.json` for PWA

---

## 🟡 Medium Priority (V1.3)

- [ ] **Checkout page** with M-Pesa STK Push (Daraja API)
- [ ] **Order confirmation page**
- [ ] **Account page** — login, register, order history
- [ ] **County delivery calculator**
- [ ] **WhatsApp floating button** (wa.me/254799644100)
- [ ] Product comparison (up to 3 items)
- [ ] Recently viewed (localStorage)
- [ ] Cookie consent (Kenya Data Protection Act)
- [ ] Lighthouse score > 90 on mobile

---

## 🟢 Future (V2.0)

- [ ] Headless CMS (Sanity/Contentful) for product management
- [ ] REST API for products, orders, users
- [ ] Real-time inventory sync
- [ ] Email order confirmations (SendGrid)
- [ ] SMS updates (Africa's Talking API)
- [ ] Loyalty points ("E-Points")
- [ ] Swahili language toggle
- [ ] County-specific landing pages
- [ ] Google Analytics 4 + Meta Pixel

---

## 🐛 Known Issues V1.1

| # | Issue | Severity |
|---|---|---|
| 1 | Search UI does not filter (no backend) | High |
| 2 | No routing — all content on single page | Medium |
| 3 | Wishlist state not persisted to localStorage | Low |
| 4 | Cart drawer not yet built — count only visible | Medium |
