import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinks = [
  { label: 'Flash Deals', icon: 'fas fa-bolt', highlight: true },
  { label: 'Phones',      icon: 'fas fa-mobile-screen-button' },
  { label: 'Laptops',     icon: 'fas fa-laptop' },
  { label: 'Smart TVs',   icon: 'fas fa-tv' },
  { label: 'Audio',       icon: 'fas fa-headphones' },
  { label: 'Solar Power', icon: 'fas fa-solar-panel' },
  { label: 'Appliances',  icon: 'fas fa-kitchen-set' },
  { label: 'Gaming',      icon: 'fas fa-gamepad' },
]

export default function Navbar({ searchQuery, onSearch, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { count } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-ebora-border shadow-sm">

      {/* MAIN ROW */}
      <div className="max-w-8xl mx-auto px-4 flex items-center gap-3 h-16">

        {/* Logo */}
        <a href="/" className="font-display font-extrabold text-lg md:text-xl text-primary tracking-tight flex-shrink-0">
          E-Bora Commerce
        </a>

        {/* Search — desktop */}
        <div className="hidden md:flex flex-1 max-w-xl border-[1.5px] border-ebora-border2 rounded-lg overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
          <select className="bg-ebora-surface border-r border-ebora-border2 px-3 text-sm text-ink-2 outline-none cursor-pointer">
            <option>All</option>
            <option>Phones</option>
            <option>Laptops</option>
            <option>TVs</option>
            <option>Solar</option>
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search phones, laptops, solar..."
            className="flex-1 px-3 py-2.5 text-sm text-ink placeholder-ink-3 bg-white outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearch('')}
              className="px-3 text-ink-3 hover:text-ink transition-colors"
            >
              <i className="fas fa-times text-sm" />
            </button>
          )}
          <button className="px-4 bg-primary hover:bg-primary-dark text-white transition-colors">
            <i className="fas fa-search text-sm" />
          </button>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1 ml-auto">

          {/* M-Pesa pill */}
          <div className="hidden lg:flex items-center gap-2 bg-brand-green-light border border-green-200 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-green flex-shrink-0">
            <i className="fas fa-mobile-screen-button text-xs" />
            M-Pesa Ready
          </div>

          {/* Account */}
          <Link to="/account" className="hidden md:flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-lg text-ink-2 hover:text-primary hover:bg-primary-light transition-colors text-[10px] font-medium">
            <i className="fas fa-user text-base" />
            <span>Account</span>
          </Link>

          {/* Saved */}
          <Link to="/wishlist" className="hidden md:flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-lg text-ink-2 hover:text-primary hover:bg-primary-light transition-colors text-[10px] font-medium">
            <i className="fa-regular fa-heart text-base" />
            <span>Saved</span>
          </Link>

          {/* Cart */}
          <button
            onClick={onCartOpen}
            className="relative flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-lg text-ink-2 hover:text-primary hover:bg-primary-light transition-colors text-[10px] font-medium"
          >
            <i className="fas fa-cart-shopping text-base" />
            <span className="hidden sm:block">Cart</span>
            {count > 0 && (
              <span className="absolute top-1 right-1 bg-brand-orange text-white text-[10px] font-bold rounded-full min-w-[17px] h-[17px] flex items-center justify-center px-1 leading-none">
                {count}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-lg text-ink-2 hover:bg-ebora-surface transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-base`} />
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH ROW */}
      <div className="md:hidden px-4 pb-3 border-t border-ebora-border/50">
        <div className="flex border-[1.5px] border-ebora-border2 rounded-lg overflow-hidden mt-3 focus-within:border-primary transition-colors">
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search phones, laptops, TVs..."
            className="flex-1 px-3 py-2.5 text-sm text-ink placeholder-ink-3 bg-white outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => onSearch('')}
              className="px-3 text-ink-3 hover:text-ink transition-colors"
            >
              <i className="fas fa-times text-sm" />
            </button>
          )}
          <button className="px-4 bg-primary text-white">
            <i className="fas fa-search text-sm" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="md:hidden border-t border-ebora-border bg-white">
          <div className="px-4 pt-3 pb-2">
            <div className="inline-flex items-center gap-2 bg-brand-green-light border border-green-200 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-green">
              <i className="fas fa-mobile-screen-button" />
              M-Pesa Ready
            </div>
          </div>
          <div className="px-2 pb-3">
            {navLinks.map(link => (
              <a
                key={link.label}
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'text-brand-orange'
                    : 'text-ink-2 hover:bg-ebora-surface hover:text-primary'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <i className={`${link.icon} w-4 text-center ${link.highlight ? 'text-brand-orange' : 'text-ink-3'}`} />
                {link.label}
              </a>
            ))}
          </div>
          <div className="border-t border-ebora-border px-2 py-2">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-2 hover:bg-ebora-surface transition-colors">
              <i className="fas fa-user w-4 text-center text-ink-3" />
              My Account
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-2 hover:bg-ebora-surface transition-colors">
              <i className="fa-regular fa-heart w-4 text-center text-ink-3" />
              Saved Items
            </a>
            <a href="tel:+254799644100" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-ink-2 hover:bg-ebora-surface transition-colors">
              <i className="fas fa-phone w-4 text-center text-ink-3" />
              0799 644 100
            </a>
          </div>
        </div>
      )}

      {/* DESKTOP SUBNAV — key bug fixed: key on <a> not fragment */}
      <div className="hidden md:block border-t border-ebora-border">
        <div className="max-w-8xl mx-auto px-4 flex items-center gap-1 h-[42px] overflow-x-auto no-scrollbar">
          {navLinks.map((link, i) => (
            <span key={link.label} className="contents">
              {i === 1 && <div className="w-px h-5 bg-ebora-border mx-1 flex-shrink-0" />}
              <a
                href="#"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  link.highlight
                    ? 'text-brand-orange font-bold'
                    : 'text-ink-2 hover:bg-primary-light hover:text-primary'
                }`}
              >
                <i className={`${link.icon} text-xs ${link.highlight ? 'text-brand-orange' : 'text-ink-3'}`} />
                {link.label}
              </a>
            </span>
          ))}
          <div className="w-px h-5 bg-ebora-border mx-1 flex-shrink-0" />
          <a href="#" className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-ink-2 hover:bg-primary-light hover:text-primary whitespace-nowrap transition-all flex-shrink-0">
            <i className="fas fa-truck-fast text-xs text-ink-3" />
            Track Order
          </a>
        </div>
      </div>

    </nav>
  )
}
