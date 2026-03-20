# TODO — E-Bora Commerce

---

## ✅ Completed in V1.2

- [x] **Cart drawer/sidebar** — slide-in panel with items, qty controls, subtotal, remove, checkout CTA
- [x] **WishlistContext** — unified localStorage-persisted wishlist replacing duplicated local state
- [x] **Real search** — lifted to App.jsx, filters by name/brand/specs, wired on both mobile and desktop
- [x] **Search empty state** — contextual messaging when no results found
- [x] **Favicon + Apple touch icon** — SVG favicon + theme-color meta
- [x] **manifest.json** — PWA manifest with icons, lang: en-KE
- [x] Fix React key prop bug in Navbar desktop subnav
- [x] Fix cart ID collision between deals and products
- [x] Fix dead mobile search input (was unconnected)
- [x] Add loading="lazy" to product images

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

## 🔴 High Priority (V1.3)

- [ ] **React Router** — routing for /products, /cart, /checkout pages
- [ ] **Checkout page** with M-Pesa STK Push (Daraja API)
- [ ] **Order confirmation page**
- [ ] **Product detail modal** — lightbox with full specs, image gallery, qty selector
- [ ] Real product images (replace Unsplash placeholders)
- [ ] **WhatsApp floating button** (wa.me/254799644100)
- [ ] **County delivery calculator**

---

## 🟡 Medium Priority (V1.4)

- [ ] **Account page** — login, register, order history
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

## 🐛 Known Issues V1.2

| # | Issue | Severity |
|---|---|---|
| 1 | Checkout flow not yet built — cart CTA is a placeholder | High |
| 2 | No routing — all content on single page | Medium |
| 3 | Flash deals countdown resets on page refresh | Low |
| 4 | Product images are Unsplash placeholders | Low |
