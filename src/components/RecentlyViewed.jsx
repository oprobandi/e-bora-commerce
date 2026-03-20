import { useRecentlyViewed } from '../context/RecentlyViewedContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function RecentlyViewed({ onProductSelect }) {
  const { items } = useRecentlyViewed()
  const { addItem } = useCart()
  const { toggle, isWished } = useWishlist()

  if (items.length === 0) return null

  return (
    <section className="bg-white border-b border-ebora-border py-10 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-[11.5px] font-bold tracking-[1.8px] uppercase text-ink-3 mb-1">
              Your History
            </div>
            <h2 className="font-display font-extrabold text-2xl text-ink tracking-tight">
              Recently Viewed
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {items.map(product => (
            <div
              key={product.id}
              className="bg-white border-[1.5px] border-ebora-border rounded-xl overflow-hidden group hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              onClick={() => onProductSelect(product)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images?.[0] || product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={e => { e.stopPropagation(); toggle(product.id) }}
                  className={`absolute top-1.5 right-1.5 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-xs shadow-sm transition-colors ${
                    isWished(product.id) ? 'text-brand-orange' : 'text-ink-3 hover:text-brand-orange'
                  }`}
                >
                  <i className={isWished(product.id) ? 'fas fa-heart' : 'far fa-heart'} />
                </button>
              </div>
              <div className="p-2.5">
                <div className="text-[10px] font-bold uppercase text-primary mb-0.5">{product.brand}</div>
                <div className="text-xs font-semibold text-ink line-clamp-2 leading-snug mb-2">{product.name}</div>
                <div className="font-display font-bold text-[13px] text-ink">
                  KSh {product.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
