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

const payments = [
  { label: 'M-PESA',      bg: 'bg-[#4CAF50]',  text: 'text-white' },
  { label: 'VISA',        bg: 'bg-[#1A1F71]',  text: 'text-white' },
  { label: 'MASTERCARD',  bg: 'bg-[#EB001B]',  text: 'text-white' },
  { label: 'PESAPAL',     bg: 'bg-gray-700',   text: 'text-white' },
  { label: 'FULIZA',      bg: 'bg-[#4CAF50]',  text: 'text-white' },
  { label: 'EQUITY',      bg: 'bg-[#C8102E]',  text: 'text-white' },
  { label: 'KCB',         bg: 'bg-[#006747]',  text: 'text-white' },
]

export default function Footer() {
  return (
    <footer className="bg-ebora-black text-white pt-12 pb-7 px-4">
      <div className="max-w-8xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <i className="fas fa-bolt text-white text-sm" />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
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
          <div className="flex flex-wrap gap-2 justify-center">
            {payments.map(p => (
              <span
                key={p.label}
                className={`${p.bg} ${p.text} rounded-md px-2.5 py-1 text-[11px] font-extrabold tracking-wide`}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 E-Bora Commerce Ltd. All rights reserved. Registered in Kenya.</span>
          <span>🇰🇪 Made in Kenya</span>
        </div>

      </div>
    </footer>
  )
}
