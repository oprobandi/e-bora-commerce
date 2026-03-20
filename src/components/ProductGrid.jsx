import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useCompare } from '../context/CompareContext'
import { products } from '../data/products'

const badgeStyles = {
  new:  'bg-brand-green text-white',
  hot:  'bg-primary text-white',
  sale: 'bg-brand-orange text-white',
}

const Stars = ({ rating }) => {
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="text-yellow-400 text-[11px] tracking-tight">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

export default function ProductGrid({ activeCategory, searchQuery, onProductSelect }) {
  const { addItem } = useCart()
  const { toggle, isWished } = useWishlist()
  const { toggle: toggleCompare, isComparing, isFull } = useCompare()
  const [added, setAdded] = useState({})

  const query = (searchQuery || '').toLowerCase().trim()

  const filtered = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch = !query ||
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.specs.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const handleAdd = (e, product) => {
    e.stopPropagation()
    addItem(product)
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1400)
  }

  return (
    <section className="bg-white border-b border-ebora-border py-10 px-4">
      <div className="max-w-8xl mx-auto">

        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-[11.5px] font-bold tracking-[1.8px] uppercase text-primary mb-1">
              {query ? `Search results for "${searchQuery}"` : 'Top Picks'}
            </div>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-ink tracking-tight">
              {query ? `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found` : 'Trending in Kenya'}
            </h2>
          </div>
          {!query && (
            <a href="#" className="text-sm font-semibold text-primary border-b-[1.5px] border-transparent hover:border-primary transition-colors whitespace-nowrap flex items-center gap-1">
              Browse All <i className="fas fa-chevron-right text-[10px]" />
            </a>
          )}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ink-3">
            <i className="fas fa-magnifying-glass text-4xl mb-3 block opacity-30" />
            <p className="font-semibold text-ink text-base mb-1">
              {query ? `No results for "${searchQuery}"` : 'No products in this category yet.'}
            </p>
            <p className="text-sm">
              {query ? 'Try a different search term or browse by category' : 'Check back soon'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(product => (
            <div
              key={product.id}
              onClick={() => onProductSelect(product)}
              className="bg-white border-[1.5px] border-ebora-border rounded-2xl overflow-hidden group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images?.[0] || product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className={`absolute top-2.5 left-2.5 text-[11px] font-bold px-2 py-0.5 rounded ${badgeStyles[product.badge]}`}>
                    {product.badge === 'new' ? 'New' : product.badge === 'hot' ? 'Hot' : `-${Math.round((1 - product.price / product.oldPrice) * 100)}%`}
                  </span>
                )}
                <button
                  onClick={e => { e.stopPropagation(); toggle(product.id) }}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-sm shadow-sm transition-colors ${
                    isWished(product.id) ? 'text-brand-orange' : 'text-ink-3 hover:text-brand-orange'
                  }`}
                >
                  <i className={isWished(product.id) ? 'fas fa-heart' : 'far fa-heart'} />
                </button>
                {/* Compare button */}
                <button
                  onClick={e => { e.stopPropagation(); toggleCompare(product) }}
                  disabled={!isComparing(product.id) && isFull}
                  className={`absolute bottom-2.5 left-2.5 text-[10px] font-bold px-2 py-1 rounded-lg transition-colors ${
                    isComparing(product.id)
                      ? 'bg-primary text-white'
                      : isFull
                      ? 'bg-white/70 text-ink-3 cursor-not-allowed'
                      : 'bg-white/90 text-ink-2 hover:bg-primary hover:text-white opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <i className="fas fa-scale-balanced mr-1" />
                  {isComparing(product.id) ? 'Comparing' : 'Compare'}
                </button>
                {/* Quick add overlay */}
                <button
                  onClick={e => handleAdd(e, product)}
                  className="absolute bottom-0 left-0 right-0 bg-primary text-white text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                >
                  <i className="fas fa-cart-plus" /> Quick Add
                </button>
              </div>

              <div className="p-3.5">
                <div className="text-[11px] font-bold tracking-wider uppercase text-primary mb-1">{product.brand}</div>
                <div className="font-semibold text-[14px] text-ink leading-snug mb-1.5 line-clamp-2">{product.name}</div>
                <div className="text-[11.5px] text-ink-3 leading-relaxed mb-2 line-clamp-2">{product.specs}</div>
                <div className="flex items-center gap-1.5 mb-3">
                  <Stars rating={product.rating} />
                  <span className="text-[11.5px] text-ink-3">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-extrabold text-[18px] text-ink">
                      KSh {product.price.toLocaleString()}
                    </div>
                    {product.oldPrice && (
                      <div className="text-xs text-ink-3 line-through">
                        KSh {product.oldPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={e => handleAdd(e, product)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold transition-all ${
                      added[product.id]
                        ? 'bg-brand-green text-white'
                        : 'bg-primary hover:bg-primary-dark text-white'
                    }`}
                  >
                    <i className={`fas ${added[product.id] ? 'fa-check' : 'fa-cart-plus'}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
