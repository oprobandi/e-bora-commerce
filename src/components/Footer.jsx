import { Link } from 'react-router-dom'

const shop    = ['Smartphones', 'Laptops & PCs', 'Smart TVs', 'Solar Solutions', 'Home Appliances', 'Gaming']
const company = ['About E-Bora Commerce', 'Careers', 'Store Locator', 'Contact Us', 'Press']
const support = ['Track My Order', 'Returns & Refunds', 'Warranty Claims', 'Shipping Policy', 'FAQs', 'WhatsApp Support']

const socials = [
  { icon: 'fab fa-instagram',  label: 'Instagram', href: 'https://instagram.com/ebora_commerce',  color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:border-pink-500' },
  { icon: 'fab fa-facebook-f', label: 'Facebook',  href: 'https://facebook.com/ebora_commerce',   color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
  { icon: 'fab fa-tiktok',     label: 'TikTok',    href: 'https://tiktok.com/@ebora_commerce',    color: 'hover:bg-black hover:border-black' },
  { icon: 'fab fa-x-twitter',  label: 'X',         href: 'https://x.com/ebora_commerce',          color: 'hover:bg-black hover:border-black' },
  { icon: 'fab fa-youtube',    label: 'YouTube',   href: 'https://youtube.com/@ebora_commerce',   color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' },
  { icon: 'fab fa-linkedin-in',label: 'LinkedIn',  href: 'https://linkedin.com/company/ebora_commerce', color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]' },
  { icon: 'fab fa-whatsapp',   label: 'WhatsApp',  href: 'https://wa.me/254799644100',             color: 'hover:bg-[#25D366] hover:border-[#25D366]' },
]

// SVG payment icons — Visa, Mastercard, M-Pesa as real marks; rest as styled badges
const PaymentIcons = () => (
  <div className="flex flex-wrap gap-2 justify-center items-center">
    {/* Visa */}
    <div className="bg-white rounded px-2 py-1 flex items-center h-7">
      <svg viewBox="0 0 78 24" className="h-4 w-auto" aria-label="Visa">
        <path fill="#1A1F71" d="M30.9 0.5L19.9 23.5H12.8L7.4 5.7C7.1 4.6 6.8 4.2 6 3.7 4.7 3 2.5 2.3 0.5 1.9L0.7 0.5H12.2C13.7 0.5 15 1.5 15.3 3.2L18.2 18.2L25.2 0.5H30.9ZM53.9 15.9C53.9 9.5 45.3 9.1 45.4 6.3 45.4 5.4 46.3 4.4 48.1 4.2 49 4.1 51.4 4 54.1 5.3L55.1 1C53.8 0.5 52.1 0 50 0 44.6 0 40.8 2.8 40.8 6.8 40.7 9.7 43.4 11.3 45.4 12.3 47.4 13.3 48.1 13.9 48.1 14.8 48.1 16.1 46.5 16.7 45 16.7 42 16.7 40.3 15.9 38.9 15.3L37.9 19.1C39.3 19.7 42 20.2 44.8 20.2 50.6 20.3 54.2 17.5 53.9 15.9ZM68.8 23.5H74L69.5 0.5H64.2C62.9 0.5 61.8 1.3 61.3 2.4L52.9 23.5H58.7L59.9 20H67L68.8 23.5ZM61.5 15.8L64.3 7.8L65.9 15.8H61.5ZM38.7 0.5L33.8 23.5H28.3L33.2 0.5H38.7Z"/>
      </svg>
    </div>
    {/* Mastercard */}
    <div className="bg-white rounded px-2 py-1 flex items-center h-7">
      <svg viewBox="0 0 38 24" className="h-4 w-auto" aria-label="Mastercard">
        <circle cx="15" cy="12" r="10" fill="#EB001B"/>
        <circle cx="23" cy="12" r="10" fill="#F79E1B"/>
        <path d="M19 5.3A10 10 0 0 1 22.7 12 10 10 0 0 1 19 18.7 10 10 0 0 1 15.3 12 10 10 0 0 1 19 5.3Z" fill="#FF5F00"/>
      </svg>
    </div>
    {/* M-Pesa */}
    <div className="bg-[#4CAF50] rounded px-2.5 py-1 flex items-center h-7">
      <svg viewBox="0 0 80 24" className="h-3.5 w-auto" aria-label="M-Pesa">
        <text x="4" y="18" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900" fill="white" letterSpacing="0.5">M-PESA</text>
      </svg>
    </div>
    {/* Text badges for the rest */}
    {[
      { label: 'PESAPAL', bg: 'bg-gray-700' },
      { label: 'FULIZA',  bg: 'bg-[#4CAF50]' },
      { label: 'EQUITY',  bg: 'bg-[#C8102E]' },
      { label: 'KCB',     bg: 'bg-[#006747]' },
    ].map(p => (
      <span key={p.label} className={`${p.bg} text-white rounded px-2 py-1 text-[10px] font-extrabold tracking-wide h-7 flex items-center`}>
        {p.label}
      </span>
    ))}
  </div>
)

export default function Footer() {
  return (
    <footer className="bg-ebora-black text-white pt-12 pb-7 px-4">
      <div className="max-w-8xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="mb-3">
              <img
                src="/logo-white.svg"
                alt="E-Bora Commerce"
                className="h-8 w-auto"
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }}
              />
              <span className="hidden font-display font-extrabold text-lg text-white tracking-tight">
                E-Bora Commerce
              </span>
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
              Kenya's trusted electronics store. Serving Nairobi, Mombasa, Kisumu, Nakuru, Eldoret and all 47 counties since 2018.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-1.5 mb-5">
              <a href="tel:+254799644100" className="flex items-center gap-2 text-[13px] text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-phone text-xs w-4" /> 0799 644 100
              </a>
              <a href="mailto:info@eboracommerce.com" className="flex items-center gap-2 text-[13px] text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xs w-4" /> info@eboracommerce.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={`@ebora_commerce on ${s.label}`}
                  className={`w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm ${s.color}`}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <div className="font-display font-bold text-[13.5px] mb-3.5">Shop</div>
            <ul className="flex flex-col gap-2">
              {shop.map(l => (
                <li key={l}><a href="#" className="text-[13px] text-gray-400 hover:text-gray-100 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-display font-bold text-[13.5px] mb-3.5">Company</div>
            <ul className="flex flex-col gap-2">
              {company.map(l => (
                <li key={l}><a href="#" className="text-[13px] text-gray-400 hover:text-gray-100 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="font-display font-bold text-[13.5px] mb-3.5">Support</div>
            <ul className="flex flex-col gap-2">
              {support.map(l => (
                <li key={l}><a href="#" className="text-[13px] text-gray-400 hover:text-gray-100 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="border-t border-gray-800 pt-6 mb-4">
          <p className="text-[11px] font-bold tracking-widest uppercase text-gray-600 mb-3 text-center">
            Accepted Payment Methods
          </p>
          <PaymentIcons />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 E-Bora Commerce Ltd. All rights reserved. Registered in Kenya.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
          <span>🇰🇪 Made in Kenya</span>
        </div>

      </div>
    </footer>
  )
}
