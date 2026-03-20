import { useCart } from '../context/CartContext'

const featured = {
  id: 99,
  brand: 'Samsung',
  name: 'Galaxy S24 Ultra',
  specs: '256GB · Titanium Black · 5G · Exynos 2400',
  price: 132000,
  oldPrice: 149999,
  images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop'],
}

export default function Hero() {
  const { addItem } = useCart()

  return (
    <section className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden border-b border-ebora-border">

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop"
        alt="People using technology in Nairobi"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Warm dark overlay — near-black with slight warm tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1510]/90 via-[#1a1510]/75 to-[#1a1510]/30" />

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1510]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

        {/* LEFT COPY */}
        <div className="animate-fadeUp">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-3.5 py-1.5 text-xs font-bold text-brand-orange uppercase tracking-wide mb-5">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-blink" />
            Flash Sale — Week 12
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
            Kenya's Best Tech<br />
            at Unbeatable<br />
            <span className="text-brand-orange">Prices</span>
          </h1>

          {/* Description */}
          <p className="text-base text-white/70 leading-relaxed max-w-md mb-7">
            Premium phones, laptops, TVs and solar solutions delivered across Kenya.
            Pay with M-Pesa, card, or cash on delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold text-[15px] px-6 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40">
              <i className="fas fa-bolt" />
              Shop Flash Deals
            </button>
            <button className="flex items-center justify-center gap-2 border-[1.5px] border-white/30 text-white hover:border-white hover:bg-white/10 font-medium text-[15px] px-5 py-3.5 rounded-lg transition-all">
              Browse All Products
            </button>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: 'fas fa-shield-halved', label: 'Genuine products' },
              { icon: 'fas fa-truck-fast',    label: 'Same-day Nairobi' },
              { icon: 'fas fa-rotate-left',   label: '14-day returns' },
            ].map(t => (
              <div key={t.label} className="flex items-center gap-2 text-sm text-white/70">
                <i className={`${t.icon} text-brand-green text-sm`} />
                <span>
                  <strong className="text-white font-semibold">{t.label.split(' ')[0]}</strong>{' '}
                  {t.label.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Featured product card */}
        <div className="relative hidden lg:block animate-fadeUp">
          {/* Floating badges */}
          <div className="absolute -top-4 right-6 bg-white border border-ebora-border rounded-xl px-3 py-2 flex items-center gap-2 shadow-md animate-float z-10">
            <i className="fas fa-star text-yellow-400" />
            <div>
              <div className="text-[10px] text-ink-3">This week</div>
              <div className="text-xs font-bold text-ink">Best Seller</div>
            </div>
          </div>
          <div className="absolute bottom-14 -left-4 bg-white border border-ebora-border rounded-xl px-3 py-2 flex items-center gap-2 shadow-md animate-float-delay z-10">
            <i className="fas fa-mobile-screen-button text-brand-green" />
            <div>
              <div className="text-[10px] text-ink-3">M-Pesa</div>
              <div className="text-xs font-bold text-ink">Accepted</div>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white/95 backdrop-blur-sm border-[1.5px] border-white/60 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={featured.images[0]}
                alt={featured.name}
                className="w-full aspect-video object-cover"
              />
              <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md">
                Featured Deal
              </span>
            </div>
            <div className="p-5">
              <div className="font-display font-bold text-[17px] text-ink mb-1">{featured.name}</div>
              <div className="text-sm text-ink-3 mb-4">{featured.specs}</div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-extrabold text-2xl text-ink">
                    KSh {featured.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-ink-3 line-through mt-0.5">
                    Was KSh {featured.oldPrice.toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => addItem(featured)}
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <i className="fas fa-cart-plus" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
