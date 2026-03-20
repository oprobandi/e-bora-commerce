const shop    = ['Smartphones', 'Laptops & PCs', 'Smart TVs', 'Solar Solutions', 'Home Appliances', 'Gaming']
const company = ['About E-Bora Commerce', 'Careers', 'Store Locator', 'Contact Us', 'Press']
const support = ['Track My Order', 'Returns & Refunds', 'Warranty Claims', 'Shipping Policy', 'FAQs', 'WhatsApp Support']

const socials = [
  { icon: 'fab fa-facebook-f',  href: '#' },
  { icon: 'fab fa-instagram',   href: '#' },
  { icon: 'fab fa-twitter',     href: '#' },
  { icon: 'fab fa-youtube',     href: '#' },
  { icon: 'fab fa-whatsapp',    href: '#' },
]

const payments = ['M-PESA', 'VISA', 'MASTERCARD', 'PESAPAL', 'FULIZA']

export default function Footer() {
  return (
    <footer className="bg-ebora-black text-white pt-12 pb-7 px-4">
      <div className="max-w-8xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-extrabold text-xl mb-2.5">E-Bora Commerce</div>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
              Kenya's trusted electronics store. Serving Nairobi, Mombasa, Kisumu, Nakuru, Eldoret and all 47 counties since 2018.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-1.5 mb-5">
              <a href="tel:+254799644100" className="flex items-center gap-2 text-[13px] text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-phone text-xs w-4" /> 0799 644 100
              </a>
              <a href="mailto:info@e_boracommerce.com" className="flex items-center gap-2 text-[13px] text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xs w-4" /> info@e_boracommerce.com
              </a>
            </div>
            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(s => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:border-primary hover:text-white transition-all text-sm"
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

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2026 E-Bora Commerce Ltd. All rights reserved. Registered in Kenya.</span>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {payments.map(p => (
              <span key={p} className="bg-gray-800 border border-gray-700 rounded px-2 py-0.5 text-[11px] font-bold text-gray-400">
                {p}
              </span>
            ))}
          </div>
          <span>🇰🇪 Made in Kenya</span>
        </div>

      </div>
    </footer>
  )
}
