import { Link } from 'react-router-dom'

const shop    = ['Smartphones', 'Laptops & PCs', 'Smart TVs', 'Solar Solutions', 'Home Appliances', 'Gaming']
const company = ['About E-Bora Commerce', 'Careers', 'Store Locator', 'Contact Us', 'Press']
const support = ['Track My Order', 'Returns & Refunds', 'Warranty Claims', 'Shipping Policy', 'FAQs', 'WhatsApp Support']

const socials = [
  { icon: 'fab fa-instagram',   label: 'Instagram', href: 'https://instagram.com/ebora_commerce',           color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:border-pink-500' },
  { icon: 'fab fa-facebook-f',  label: 'Facebook',  href: 'https://facebook.com/ebora_commerce',            color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' },
  { icon: 'fab fa-tiktok',      label: 'TikTok',    href: 'https://tiktok.com/@ebora_commerce',             color: 'hover:bg-black hover:border-black' },
  { icon: 'fab fa-x-twitter',   label: 'X',         href: 'https://x.com/ebora_commerce',                   color: 'hover:bg-black hover:border-black' },
  { icon: 'fab fa-youtube',     label: 'YouTube',   href: 'https://youtube.com/@ebora_commerce',            color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn',  href: 'https://linkedin.com/company/ebora_commerce',    color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]' },
  { icon: 'fab fa-whatsapp',    label: 'WhatsApp',  href: 'https://wa.me/254799644100',                     color: 'hover:bg-[#25D366] hover:border-[#25D366]' },
]

// Payment marks — Visa, Mastercard as real SVG marks; M-Pesa and PesaPal as accurate branded marks
const PaymentMarks = () => (
  <div className="flex flex-wrap gap-2 justify-center items-center">

    {/* Visa */}
    <div className="bg-white rounded-md px-2.5 py-1.5 flex items-center h-8 shadow-sm">
      <svg viewBox="0 0 78 25" className="h-4 w-auto" aria-label="Visa">
        <text x="2" y="20" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#1A1F71" letterSpacing="-0.5">VISA</text>
      </svg>
    </div>

    {/* Mastercard */}
    <div className="bg-white rounded-md px-2 py-1.5 flex items-center h-8 shadow-sm">
      <svg viewBox="0 0 50 30" className="h-5 w-auto" aria-label="Mastercard">
        <circle cx="17" cy="15" r="13" fill="#EB001B"/>
        <circle cx="33" cy="15" r="13" fill="#F79E1B"/>
        <path d="M25 5.8A13 13 0 0 1 29.5 15 13 13 0 0 1 25 24.2 13 13 0 0 1 20.5 15 13 13 0 0 1 25 5.8Z" fill="#FF5F00"/>
      </svg>
    </div>

    {/* M-Pesa — accurate green brand mark */}
    <div className="rounded-md px-2.5 py-1.5 flex items-center h-8 shadow-sm" style={{background:'#4CAF50'}}>
      <svg viewBox="0 0 90 24" className="h-3.5 w-auto" aria-label="M-Pesa">
        <text x="2" y="18" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white" letterSpacing="0.5">M-PESA</text>
      </svg>
    </div>

    {/* PesaPal — purple brand mark */}
    <div className="bg-white rounded-md px-2.5 py-1.5 flex items-center h-8 shadow-sm border border-gray-100">
      <svg viewBox="0 0 110 24" className="h-3.5 w-auto" aria-label="PesaPal">
        <text x="2" y="18" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="bold" fill="#6B21A8" letterSpacing="0.3">PesaPal</text>
      </svg>
    </div>

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
            {/* Logo — white version on dark background */}
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo-white.png"
                alt="E-Bora Commerce"
                className="h-9 w-auto"
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
              />
              <span className="hidden font-display font-extrabold text-lg text-white tracking-tight">
                E-Bora Commerce
              </span>
            </Link>
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
        <div className="border-t border-gray-800 pt-6 mb-5">
          <p className="text-[11px] font-bold tracking-widest uppercase text-gray-600 mb-3 text-center">
            Accepted Payment Methods
          </p>
          <PaymentMarks />
        </div>

        {/* Bottom bar — fully centred */}
        <div className="border-t border-gray-800 pt-5 flex flex-col items-center gap-2 text-xs text-gray-500">
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
          <span>© 2026 E-Bora Commerce Ltd. All rights reserved. Registered in Kenya.</span>
        </div>

      </div>
    </footer>
  )
}
