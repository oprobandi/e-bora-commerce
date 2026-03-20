import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useCompare } from '../context/CompareContext'
import { useRecentlyViewed } from '../context/RecentlyViewedContext'
import { products } from '../data/products'

const Stars = ({ rating }) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="text-yellow-400 text-sm">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

const badgeStyles = {
  new:  'bg-brand-green text-white',
  hot:  'bg-primary text-white',
  sale: 'bg-brand-orange text-white',
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { toggle, isWished } = useWishlist()
  const { toggle: toggleCompare, isComparing, isFull } = useCompare()
  const { addViewed } = useRecentlyViewed()

  const product = products.find(p => p.id === parseInt(id))

  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      addViewed(product)
      window.scrollTo(0, 0)
    }
  }, [product?.id])

  if (!product) {
    return (
      <div className="min-h-screen bg-ebora-bg flex flex-col items-center justify-center text-center px-4">
        <i className="fas fa-box-open text-5xl text-ink-3 opacity-20 mb-4" />
        <h2 className="font-display font-bold text-xl text-ink mb-2">Product not found</h2>
        <p className="text-ink-3 text-sm mb-6">This product may have been removed or the link is incorrect.</p>
        <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors">
          Browse Products
        </Link>
      </div>
    )
  }

  const images = product.images || [product.image]
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : null

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="min-h-screen bg-ebora-bg">
      {/* Header */}
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </button>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-ink-3 uppercase tracking-widest">{product.brand}</span>
            <p className="text-sm font-semibold text-ink truncate">{product.name}</p>
          </div>
          {/* Share button */}
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href).then(() => alert('Link copied!'))}
            className="text-ink-3 hover:text-primary transition-colors px-2"
            title="Copy shareable link"
          >
            <i className="fas fa-share-nodes" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* LEFT — Gallery */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-3 bg-white border border-ebora-border aspect-square">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded ${badgeStyles[product.badge]}`}>
                  {product.badge === 'new' ? 'New' : product.badge === 'hot' ? 'Hot' : `-${discount}%`}
                </span>
              )}
              <button
                onClick={() => toggle(product.id)}
                className={`absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm transition-colors ${isWished(product.id) ? 'text-brand-orange' : 'text-ink-3 hover:text-brand-orange'}`}
              >
                <i className={isWished(product.id) ? 'fas fa-heart' : 'far fa-heart'} />
              </button>
            </div>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-colors ${activeImg === i ? 'border-primary' : 'border-ebora-border hover:border-ebora-border2'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-primary mb-1">{product.brand}</div>
              <h1 className="font-display font-extrabold text-2xl md:text-3xl text-ink leading-tight mb-2">{product.name}</h1>
              <div className="flex items-center gap-2">
                <Stars rating={product.rating} />
                <span className="text-sm text-ink-3">{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="font-display font-extrabold text-3xl text-ink">
                KSh {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <div>
                  <div className="text-sm text-ink-3 line-through">KSh {product.oldPrice.toLocaleString()}</div>
                  <div className="text-xs font-bold text-brand-orange">Save KSh {(product.oldPrice - product.price).toLocaleString()}</div>
                </div>
              )}
            </div>

            {/* Specs */}
            <div className="bg-ebora-bg rounded-xl p-4">
              <div className="text-[11px] font-bold tracking-widest uppercase text-ink-3 mb-2">Specifications</div>
              <div className="flex flex-wrap gap-2">
                {product.specs.split(' · ').map(spec => (
                  <span key={spec} className="bg-white border border-ebora-border text-xs font-medium text-ink-2 px-2.5 py-1 rounded-lg">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-ink-2 leading-relaxed">{product.description}</p>

            {/* Qty + Cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border-[1.5px] border-ebora-border2 rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-12 flex items-center justify-center text-ink-2 hover:bg-ebora-surface transition-colors font-bold text-xl">−</button>
                <span className="w-11 text-center font-display font-bold text-base text-ink">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-11 h-12 flex items-center justify-center text-ink-2 hover:bg-ebora-surface transition-colors font-bold text-xl">+</button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 h-12 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all ${added ? 'bg-brand-green text-white' : 'bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25'}`}
              >
                <i className={`fas ${added ? 'fa-check' : 'fa-cart-plus'}`} />
                {added ? 'Added to Cart!' : `Add ${qty > 1 ? `(${qty})` : ''} to Cart`}
              </button>
            </div>

            {/* Compare */}
            <button
              onClick={() => toggleCompare(product)}
              disabled={!isComparing(product.id) && isFull}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border-[1.5px] text-sm font-semibold transition-colors ${isComparing(product.id) ? 'bg-primary text-white border-primary' : 'border-ebora-border2 text-ink-2 hover:border-primary hover:text-primary'}`}
            >
              <i className="fas fa-scale-balanced text-sm" />
              {isComparing(product.id) ? 'Added to Compare' : 'Add to Compare'}
            </button>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: 'fas fa-shield-halved', label: 'Genuine', sub: 'product' },
                { icon: 'fas fa-truck-fast',    label: 'Same-day', sub: 'Nairobi' },
                { icon: 'fas fa-rotate-left',   label: '14-day', sub: 'returns' },
              ].map(t => (
                <div key={t.label} className="flex flex-col items-center text-center p-2.5 bg-white rounded-xl border border-ebora-border">
                  <i className={`${t.icon} text-brand-green mb-1`} />
                  <span className="text-[11px] font-bold text-ink">{t.label}</span>
                  <span className="text-[10px] text-ink-3">{t.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="border-t border-ebora-border pt-8">
            <h2 className="font-display font-bold text-xl text-ink mb-4">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(p => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="bg-white rounded-2xl border border-ebora-border overflow-hidden hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <img src={p.images?.[0]} alt={p.name} className="w-full aspect-square object-cover" />
                  <div className="p-3">
                    <div className="text-[10px] font-bold uppercase text-primary mb-0.5">{p.brand}</div>
                    <div className="text-xs font-semibold text-ink line-clamp-2 mb-1">{p.name}</div>
                    <div className="font-display font-bold text-sm text-ink">KSh {p.price.toLocaleString()}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
