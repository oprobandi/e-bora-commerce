import { useEffect, useState } from 'react'
import { deals } from '../data/deals'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function useCountdown(initial = { h: 4, m: 23, s: 11 }) {
  const [time, setTime] = useState(initial)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        if (--s < 0) { s = 59; if (--m < 0) { m = 59; if (--h < 0) h = 23 } }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function pad(n) { return String(n).padStart(2, '0') }

const progressColor = (pct) => {
  if (pct >= 70) return 'bg-brand-orange'
  if (pct >= 40) return 'bg-primary'
  return 'bg-brand-green'
}

export default function FlashDeals() {
  const { h, m, s } = useCountdown()
  const { addItem } = useCart()
  const { toggle, isWished } = useWishlist()

  return (
    <section className="bg-ebora-surface border-y border-ebora-border py-10 px-4">
      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange text-white text-xs font-bold px-3.5 py-1.5 rounded-lg mb-2">
              <i className="fas fa-fire" />
              Sale Ends In:
              <span className="font-display font-extrabold bg-black/20 rounded px-1.5 py-0.5">
                {pad(h)}:{pad(m)}:{pad(s)}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-ink tracking-tight">
              Today's Flash Deals
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary border-b-[1.5px] border-transparent hover:border-primary transition-colors whitespace-nowrap flex items-center gap-1">
            View All <i className="fas fa-chevron-right text-[10px]" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {deals.map(deal => {
            const pct = Math.round((deal.sold / deal.total) * 100)
            return (
              <div
                key={deal.id}
                className="bg-white border-[1.5px] border-ebora-border rounded-xl overflow-hidden hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="relative">
                  <img src={deal.image} alt={deal.name} className="w-full aspect-square object-cover" />
                  <span className="absolute top-2 left-2 bg-brand-orange text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    -{deal.discount}%
                  </span>
                  <button
                    onClick={() => toggle(deal.id)}
                    className={`absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-xs shadow-sm transition-colors ${
                      isWished(deal.id) ? 'text-brand-orange' : 'text-ink-3 hover:text-brand-orange'
                    }`}
                  >
                    <i className={isWished(deal.id) ? 'fas fa-heart' : 'far fa-heart'} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-3">
                  <div className="font-semibold text-[13px] text-ink truncate mb-0.5">{deal.name}</div>
                  <div className="text-[11.5px] text-ink-3 mb-2">{deal.sub}</div>
                  <div className="flex items-baseline gap-2 mb-2.5">
                    <span className="font-display font-bold text-[16px] text-ink">
                      KSh {deal.price.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-ink-3 line-through">
                      {deal.oldPrice.toLocaleString()}
                    </span>
                  </div>
                  {/* Progress */}
                  <div className="flex justify-between text-[10.5px] text-ink-3 mb-1">
                    <span className="text-brand-orange font-semibold">
                      <i className="fas fa-fire mr-0.5" />{deal.sold} sold
                    </span>
                    <span>{deal.total - deal.sold} left</span>
                  </div>
                  <div className="h-1 bg-ebora-border rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${progressColor(pct)}`} style={{ width: `${pct}%` }} />
                  </div>
                  {/* Add to cart */}
                  <button
                    onClick={() => addItem({ id: deal.id, name: deal.name, price: deal.price, image: deal.image })}
                    className="w-full mt-3 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
