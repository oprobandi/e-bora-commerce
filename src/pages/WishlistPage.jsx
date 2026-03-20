import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function WishlistPage() {
  const { items, toggle } = useWishlist()
  const { addItem } = useCart()

  const wished = products.filter(p => items.includes(p.id))

  return (
    <div className="min-h-screen bg-ebora-bg">
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">Saved Items</span>
          {wished.length > 0 && (
            <span className="ml-1 text-sm text-ink-3">({wished.length})</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {wished.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <i className="far fa-heart text-5xl text-ink-3 opacity-20 mb-4" />
            <h2 className="font-display font-bold text-xl text-ink mb-2">No saved items yet</h2>
            <p className="text-ink-3 text-sm mb-6">Tap the heart on any product to save it here</p>
            <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {wished.map(product => (
              <div key={product.id} className="bg-white border border-ebora-border rounded-2xl overflow-hidden group hover:shadow-md hover:border-primary/40 transition-all">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggle(product.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-brand-orange shadow-sm hover:bg-red-50 transition-colors"
                    title="Remove from saved"
                  >
                    <i className="fas fa-heart text-sm" />
                  </button>
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-bold uppercase text-primary mb-0.5">{product.brand}</div>
                  <div className="text-xs font-semibold text-ink line-clamp-2 mb-2 leading-snug">{product.name}</div>
                  <div className="font-display font-extrabold text-[15px] text-ink mb-2">
                    KSh {product.price.toLocaleString()}
                  </div>
                  <button
                    onClick={() => addItem(product)}
                    className="w-full bg-primary hover:bg-primary-dark text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <i className="fas fa-cart-plus" /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
