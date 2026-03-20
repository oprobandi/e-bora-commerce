const banners = [
  {
    id: 1,
    bg: 'bg-primary',
    sup: 'Nairobi Only',
    title: 'Same-Day Delivery Across Nairobi',
    sub: 'Order before 2 PM and receive your items the same evening. CBD, Westlands, Kilimani, South B and more.',
    cta: 'Check Your Area',
    icon: 'fas fa-motorcycle',
  },
  {
    id: 2,
    bg: 'bg-brand-green',
    sup: 'Flexible Payments',
    title: 'Buy Now, Pay in 3 Months',
    sub: 'Zero interest installments via M-Pesa, Fuliza, Equity or KCB for orders above KSh 10,000.',
    cta: 'Learn More',
    icon: 'fas fa-credit-card',
  },
]

export default function Banners() {
  return (
    <section className="py-10 px-4 bg-ebora-bg">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {banners.map(b => (
          <div
            key={b.id}
            className={`${b.bg} text-white rounded-2xl px-7 py-8 relative overflow-hidden cursor-pointer group`}
          >
            {/* Decorative circles */}
            <div className="absolute bottom-[-24px] right-[-24px] w-36 h-36 rounded-full bg-white/[0.07]" />
            <div className="absolute bottom-5 right-10 w-20 h-20 rounded-full bg-white/[0.05]" />

            <div className="relative z-10">
              <div className="text-[11px] font-bold tracking-[2px] uppercase opacity-70 mb-2">{b.sup}</div>
              <h3 className="font-display font-extrabold text-xl md:text-2xl leading-snug mb-2.5">{b.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed mb-5 max-w-xs">{b.sub}</p>
              <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg px-4 py-2 text-sm font-semibold transition-colors">
                {b.cta} <i className="fas fa-arrow-right text-xs" />
              </button>
            </div>

            <i className={`${b.icon} absolute right-7 top-1/2 -translate-y-1/2 text-6xl opacity-15`} />
          </div>
        ))}
      </div>
    </section>
  )
}
