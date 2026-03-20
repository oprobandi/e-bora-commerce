import { useState, useEffect } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { products } from '../data/products'
import { categories } from '../data/categories'

const SORT_OPTIONS = [
  { value: 'relevance',  label: 'Relevance' },
  { value: 'price_asc',  label: 'Price: Low → High' },
  { value: 'price_desc', label: 'Price: High → Low' },
  { value: 'rating',     label: 'Top Rated' },
]

const Stars = ({ rating }) => (
  <span className="text-yellow-400 text-[11px]">{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
)

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { toggle, isWished } = useWishlist()

  const query = searchParams.get('q') || ''
  const [localQ, setLocalQ] = useState(query)
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')
  const [maxPrice, setMaxPrice] = useState(200000)
  const [added, setAdded] = useState({})

  useEffect(() => {
    setLocalQ(query)
  }, [query])

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const q = localQ.trim()
      if (q) setSearchParams({ q })
    }
  }

  const handleAdd = (e, product) => {
    e.preventDefault()
    addItem(product)
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1400)
  }

  const results = products.filter(p => {
    const q = query.toLowerCase()
    const matchesQuery = !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.specs.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q)
    const matchesCat = category === 'all' || p.category === category
    const matchesPrice = p.price <= maxPrice
    return matchesQuery && matchesCat && matchesPrice
  }).sort((a, b) => {
    if (sort === 'price_asc')  return a.price - b.price
    if (sort === 'price_desc') return b.price - a.price
    if (sort === 'rating')     return b.rating - a.rating
    return 0
  })

  const maxProductPrice = Math.max(...products.map(p => p.price))

  return (
    <div className="min-h-screen bg-ebora-bg">
      {/* Header */}
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </button>
          {/* Inline search bar */}
          <div className="flex flex-1 border-[1.5px] border-ebora-border2 rounded-xl overflow-hidden focus-within:border-primary transition-colors">
            <input
              type="text"
              value={localQ}
              onChange={e => setLocalQ(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search products..."
              className="flex-1 px-3 py-2 text-sm text-ink outline-none bg-white"
              autoFocus
            />
            {localQ && (
              <button onClick={() => { setLocalQ(''); setSearchParams({}) }} className="px-2 text-ink-3 hover:text-ink">
                <i className="fas fa-times text-sm" />
              </button>
            )}
            <button onClick={handleSearch} className="px-4 bg-primary text-white">
              <i className="fas fa-search text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">

          {/* Filters sidebar */}
          <aside className="w-full md:w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-ebora-border p-4 space-y-5 md:sticky md:top-20">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">Category</div>
                <div className="space-y-1">
                  {[{ id: 'all', label: 'All Categories', icon: 'fas fa-th-large' }, ...categories.filter(c => c.id !== 'all')].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium transition-colors text-left ${category === cat.id ? 'bg-primary-light text-primary' : 'text-ink-2 hover:bg-ebora-bg'}`}
                    >
                      <i className={`${cat.icon} text-xs w-4 text-center`} />
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">
                  Max Price: <span className="text-primary">KSh {maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={maxProductPrice}
                  step={1000}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-ink-3 mt-1">
                  <span>KSh 0</span>
                  <span>KSh {maxProductPrice.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-ink-3 mb-2">Sort By</div>
                <div className="space-y-1">
                  {SORT_OPTIONS.map(o => (
                    <button
                      key={o.value}
                      onClick={() => setSort(o.value)}
                      className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium transition-colors ${sort === o.value ? 'bg-primary-light text-primary' : 'text-ink-2 hover:bg-ebora-bg'}`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={() => { setCategory('all'); setSort('relevance'); setMaxPrice(maxProductPrice) }}
                className="w-full text-xs text-ink-3 hover:text-red-500 transition-colors py-1 border-t border-ebora-border pt-3"
              >
                <i className="fas fa-rotate-left mr-1" /> Reset filters
              </button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                {query && (
                  <p className="text-sm text-ink-2">
                    <span className="font-bold text-ink">{results.length}</span> result{results.length !== 1 ? 's' : ''} for{' '}
                    <span className="font-bold text-primary">"{query}"</span>
                  </p>
                )}
                {!query && <p className="text-sm text-ink-2">Showing all <span className="font-bold text-ink">{results.length}</span> products</p>}
              </div>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-2xl border border-ebora-border p-12 text-center">
                <i className="fas fa-magnifying-glass text-4xl text-ink-3 opacity-20 mb-3 block" />
                <p className="font-semibold text-ink mb-1">No results found</p>
                <p className="text-sm text-ink-3 mb-4">Try different keywords or adjust your filters</p>
                <button
                  onClick={() => { setCategory('all'); setSort('relevance'); setMaxPrice(maxProductPrice) }}
                  className="text-sm text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {results.map(product => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="bg-white border border-ebora-border rounded-2xl overflow-hidden group hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <button
                        onClick={e => { e.preventDefault(); toggle(product.id) }}
                        className={`absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-sm shadow-sm transition-colors ${isWished(product.id) ? 'text-brand-orange' : 'text-ink-3 hover:text-brand-orange'}`}
                      >
                        <i className={isWished(product.id) ? 'fas fa-heart' : 'far fa-heart'} />
                      </button>
                      {product.badge && (
                        <span className={`absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded ${product.badge === 'sale' ? 'bg-brand-orange text-white' : product.badge === 'hot' ? 'bg-primary text-white' : 'bg-brand-green text-white'}`}>
                          {product.badge === 'sale' ? `-${Math.round((1-product.price/product.oldPrice)*100)}%` : product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="text-[10px] font-bold uppercase text-primary mb-0.5">{product.brand}</div>
                      <div className="text-xs font-semibold text-ink line-clamp-2 mb-1 leading-snug">{product.name}</div>
                      <div className="flex items-center gap-1 mb-2">
                        <Stars rating={product.rating} />
                        <span className="text-[10px] text-ink-3">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display font-bold text-[15px] text-ink">KSh {product.price.toLocaleString()}</div>
                          {product.oldPrice && <div className="text-[10px] text-ink-3 line-through">KSh {product.oldPrice.toLocaleString()}</div>}
                        </div>
                        <button
                          onClick={e => handleAdd(e, product)}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all ${added[product.id] ? 'bg-brand-green text-white' : 'bg-primary hover:bg-primary-dark text-white'}`}
                        >
                          <i className={`fas ${added[product.id] ? 'fa-check' : 'fa-cart-plus'}`} />
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
