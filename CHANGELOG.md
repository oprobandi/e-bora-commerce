# Changelog

All notable changes to E-Bora Commerce are documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
Versioning: [Semantic Versioning](https://semver.org/)

---

## [1.6.0] — 2026-03-20

### Added
- **Account page** (`/account`) — login/register with localStorage; logged-in dashboard with orders, saved items, WhatsApp support, sign out
- **Wishlist page** (`/wishlist`) — saved items grid with remove and Add to Cart; linked from Navbar
- **Order history** (`/orders`) — past orders from localStorage with status badge, item images, total; auto-saved on order success
- **Code splitting** — all pages lazy-loaded via `React.lazy` + `Suspense`; reduces initial JS bundle parse time
- **Brand logos fixed** — replaced broken Wikipedia `<img>` with inline SVG wordmarks; always renders
- **Social links** — all 7 platforms link to `@ebora_commerce` with brand hover colours
- **Payment badges** — M-PESA, VISA, MASTERCARD, PESAPAL, FULIZA, EQUITY, KCB with brand background colours
- **Order saving** — `OrderSuccessPage` writes to `localStorage('ebora-orders')` on mount

---

## [1.5.0] — 2026-03-20

### Added
- **Hero redesign** — full-width Nairobi lifestyle background image with warm dark near-black overlay (`#1a1510`); gradient fades right for legibility; featured product card has `backdrop-blur` glass effect; CTA buttons and trust chips adapt to dark background
- **Cookie consent banner** (KDPA 2019 compliant) — slides up after 1.2s on first visit; "Accept all" or "Essential only" options; expandable detail panel explaining Essential, Analytics and Preferences cookie categories; persists decision to localStorage (`ebora-cookie-consent`)
- **Product sort** — dropdown in ProductGrid header: Default, Price Low→High, Price High→Low, Top Rated, Newest (by id)
- **404 page** — branded not-found page with large `404` display, back-to-home CTA, call support link, popular category shortcuts
- **Scroll-to-top button** — appears after 400px scroll; smooth scroll on click; positioned above WhatsApp button

### Changed
- Hero text, CTAs and trust chips now use white/white-opacity tokens against dark background
- Hero featured card border updated to `white/60` for glass effect on dark background

---

## [1.4.0] — 2026-03-20

### Added
- **ProductModal** — full-screen lightbox on product card click; image gallery with thumbnail nav, specs chips, description, qty selector, Add to Cart, wishlist toggle, compare toggle, related products grid, Escape to close
- **Product images array** — each product now has 3 Unsplash images; `images[0]` used as card thumbnail throughout
- **Product descriptions** — full paragraph description added to all 8 products
- **RecentlyViewedContext** — tracks last 6 viewed products in localStorage; persists across sessions
- **RecentlyViewed section** — appears on homepage below product grid once any product has been viewed
- **CompareContext** — tracks up to 3 products selected for comparison (no persistence — resets on reload by design)
- **CompareBar** — floating bar fixed to bottom of screen showing selected products side-by-side with price, rating, and "View details" link; appears only when 1+ products selected
- **Compare button** — appears on product card hover; disabled when 3 products already selected

### Changed
- `ProductGrid` cards are now clickable (open modal) with `e.stopPropagation()` on action buttons
- `App.jsx` wraps all providers: `CartProvider > WishlistProvider > RecentlyViewedProvider > CompareProvider`

---

## [1.3.0] — 2026-03-20

### Added
- **React Router v6** — client-side routing with `BrowserRouter`; routes for `/`, `/checkout`, `/order/success`
- **Checkout page** (`/checkout`) — contact details form, county delivery selector (Nairobi free, all others KSh 300), payment method selector (M-Pesa STK Push, Visa/Mastercard, Cash on Delivery), order summary sidebar, full form validation
- **Order success page** (`/order/success`) — order number, payment instructions per method, full order summary, support contacts
- **WhatsApp floating button** — site-wide fixed button linking to `wa.me/254799644100`, expands on hover
- **All 47 Kenya counties** in delivery selector with flat-rate pricing
- **Cart clears on successful order** — `clearCart()` called before redirect to success page
- **Order number generation** — client-side timestamp + random e.g. `EB-20260320-4821`
- `react-router-dom@^6.22.0` added to dependencies

### Changed
- CartDrawer "Proceed to Checkout" button now routes to `/checkout` via `<Link>`
- `App.jsx` restructured — `HomePage` extracted as sub-component to isolate home-specific state

---

## [1.2.0] — 2026-03-20

### Added
- **CartDrawer** — slide-in cart panel with quantity controls, remove, subtotal, M-Pesa payment note, and checkout CTA
- **WishlistContext** — unified wishlist state with `localStorage` persistence; replaces duplicated local state in `ProductGrid` and `FlashDeals`
- **Live search** — `searchQuery` lifted to `App.jsx`, wired to both desktop and mobile search inputs in Navbar; `ProductGrid` filters by name, brand, and specs in real time with clear (✕) button
- **Search empty state** — contextual message when no products match query
- **Favicon** — SVG favicon + Apple touch icon + `theme-color` meta tag
- **PWA manifest** — `manifest.json` with name, icons, display mode, and `lang: en-KE`

### Fixed
- **React key prop bug** in Navbar desktop subnav — keys were on `<>` fragments; moved to `<span className="contents">` wrapper
- **Cart ID collision** — Flash Deals now use prefixed IDs (`deal_1`…`deal_5`) to prevent localStorage cart corruption when a deal and product shared the same numeric ID
- **Dead search inputs** — both desktop and mobile search inputs were unconnected in V1.1; both now call `onSearch` and reflect shared `searchQuery` state
- **Lazy loading** — added `loading="lazy"` to all product card images in `ProductGrid`

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
