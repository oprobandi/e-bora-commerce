const messages = [
  'Free delivery on orders above KSh 2,000 in Nairobi',
  'Pay with M-Pesa, Visa or Mastercard — instant confirmation',
  'Flash Sale: Up to 40% off selected products today only',
  'Free Safaricom airtime with every order above KSh 5,000',
]

export default function AnnouncementBar() {
  const doubled = [...messages, ...messages]

  return (
    <div className="bg-primary text-white text-xs font-medium py-2 flex items-center justify-between gap-4 px-4 overflow-hidden">
      {/* Phone link — hidden on very small screens */}
      <a
        href="tel:+254799644100"
        className="hidden sm:flex items-center gap-1.5 text-white/75 hover:text-white flex-shrink-0 transition-colors"
      >
        <i className="fas fa-phone text-[11px]" />
        <span>0799 644 100</span>
      </a>

      {/* Ticker */}
      <div className="flex-1 overflow-hidden">
        <div className="flex gap-14 animate-ticker whitespace-nowrap">
          {doubled.map((msg, i) => (
            <span key={i} className="flex-shrink-0">
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Store locator — hidden on small screens */}
      <a
        href="#"
        className="hidden md:flex items-center gap-1.5 text-white/75 hover:text-white flex-shrink-0 transition-colors"
      >
        <i className="fas fa-location-dot text-[11px]" />
        <span>Stores</span>
      </a>
    </div>
  )
}
