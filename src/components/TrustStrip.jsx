const items = [
  {
    icon: 'fas fa-shield-halved',
    iconBg: 'bg-primary-light text-primary',
    title: 'Genuine Products',
    desc: 'Official manufacturer warranties on every item. No fakes, ever.',
  },
  {
    icon: 'fas fa-mobile-screen-button',
    iconBg: 'bg-brand-green-light text-brand-green',
    title: 'M-Pesa Accepted',
    desc: 'M-Pesa, Visa, Mastercard, PesaPal, Equity or cash on delivery.',
  },
  {
    icon: 'fas fa-rotate-left',
    iconBg: 'bg-primary-light text-primary',
    title: '14-Day Returns',
    desc: 'Hassle-free returns. Full refund or exchange, no questions asked.',
  },
  {
    icon: 'fas fa-headset',
    iconBg: 'bg-brand-orange-light text-brand-orange',
    title: 'Expert Support',
    desc: 'WhatsApp, call or chat from 8 AM to 9 PM daily.',
  },
]

export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-ebora-border">
      <div className="max-w-8xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-ebora-border">
        {items.map(item => (
          <div key={item.title} className="flex flex-col items-center text-center gap-2.5 px-5 py-7">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg ${item.iconBg}`}>
              <i className={item.icon} />
            </div>
            <div className="font-bold text-[13.5px] text-ink">{item.title}</div>
            <div className="text-xs text-ink-3 leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
