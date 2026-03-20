# E-Bora Commerce

> Kenya's premier electronics e-commerce store.

[![Version](https://img.shields.io/badge/version-1.1.0-teal)](./CHANGELOG.md)
[![Vite](https://img.shields.io/badge/vite-5.x-646CFF)](https://vitejs.dev)
[![React](https://img.shields.io/badge/react-18.x-61DAFB)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/tailwind-3.x-06B6D4)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

## Overview

E-Bora Commerce is a production-ready electronics e-commerce landing page built mobile-first for the Kenyan market. V1.1 migrates from static HTML to Vite + React + Tailwind CSS, adds persistent cart state, working category filtering, and a fully responsive mobile layout.

**Phone:** 0799 644 100
**Email:** info@e_boracommerce.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS v3 |
| State | React Context API + localStorage |
| Icons | Font Awesome 6.5 |
| Fonts | Syne + DM Sans (Google Fonts) |
| Hosting | Vercel |

---

## Project Structure

```
e-bora-commerce/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── vercel.json
├── .gitignore
├── README.md
├── CHANGELOG.md
├── TODO.md
├── LICENSE
├── CONTRIBUTING.md
├── docs/adr/
│   ├── ADR-001-static-single-file.md
│   ├── ADR-002-color-system.md
│   ├── ADR-003-font-selection.md
│   ├── ADR-004-payment-messaging.md
│   └── ADR-005-react-migration.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── CartContext.jsx
    ├── data/
    │   ├── categories.js
    │   ├── products.js
    │   └── deals.js
    └── components/
        ├── AnnouncementBar.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── StatsBar.jsx
        ├── CategoryBar.jsx
        ├── FlashDeals.jsx
        ├── ProductGrid.jsx
        ├── Banners.jsx
        ├── TrustStrip.jsx
        ├── MpesaSection.jsx
        ├── Brands.jsx
        ├── Newsletter.jsx
        └── Footer.jsx
```

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Local Development

```bash
# Clone
git clone https://github.com/oprobandi/e-bora-commerce.git
cd e-bora-commerce

# Install
npm install

# Run dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel

```bash
# Push to GitHub then:
vercel --prod --yes
```

Vercel auto-detects Vite. Runs `npm run build`, serves from `dist/`.

---

## Color Tokens (tailwind.config.js)

```js
primary: { DEFAULT: '#0A6E7C', dark: '#085A66', light: '#E3F5F7' }
brand:   { green: '#0A7C4E', orange: '#E8650A' }
```

---

## License

MIT © 2026 E-Bora Commerce Ltd. Nairobi, Kenya.
