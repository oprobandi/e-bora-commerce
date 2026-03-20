import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useCompare } from '../context/CompareContext'
import { useRecentlyViewed } from '../context/RecentlyViewedContext'
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
    <span className="text-yellow-400 text-sm tracking-tight">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

export default function ProductModal({ product, onClose, onProductSelect }) {
  const { addItem } = useCart()
  const { toggle, isWished } = useWishlist()
  const { toggle: toggleCompare, isComparing, isFull } = useCompare()
  const { addViewed } = useRecentlyViewed()

  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const images = product.images || [product.image]
  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    addViewed(product)
    return () => { document.body.style.overflow = '' }
  }, [product.id])

  // Reset on product change
  useEffect(() => {
    setActiveImg(0)
    setQty(1)
    setAdded(false)
  }, [product.id])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div
          className="bg-white w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] rounded-t-3xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          onClick={e => e.stopPropagation()}
        >

          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-ebora-border flex-shrink-0">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              {product.brand}
            </span>
            <div className="flex items-center gap-2">
              {/* Full page link */}
              <Link
                to={`/products/${product.id}`}
                onClick={onClose}
                className="text-xs font-semibold text-ink-3 hover:text-primary transition-colors px-2"
                title="Open full page"
              >
                <i className="fas fa-arrow-up-right-from-square" />
              </Link>
              {/* Compare toggle */}
              <button
                onClick={() => toggleCompare(product)}
                disabled={!isComparing(product.id) && isFull}
                title={isFull && !isComparing(product.id) ? 'Max 3 products' : 'Compare'}
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                  isComparing(product.id)
                    ? 'bg-primary text-white border-primary'
                    : isFull
                    ? 'text-ink-3 border-ebora-border cursor-not-allowed opacity-50'
                    : 'text-ink-2 border-ebora-border hover:border-primary hover:text-primary'
                }`}
              >
                <i className="fas fa-scale-balanced text-[11px]" />
                {isComparing(product.id) ? 'Comparing' : 'Compare'}
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-3 hover:bg-ebora-surface hover:text-ink transition-colors"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

              {/* LEFT — Image gallery */}
              <div className="p-4 md:p-6 bg-ebora-bg md:bg-white">
                {/* Main image */}
                <div className="relative rounded-xl overflow-hidden mb-3 aspect-square bg-white">
                  <img
                    src={images[activeImg]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-200"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded ${badgeStyles[product.badge]}`}>
                      {product.badge === 'new' ? 'New' : product.badge === 'hot' ? 'Hot' : `-${discount}%`}
                    </span>
                  )}
                  {/* Wishlist */}
                  <button
                    onClick={() => toggle(product.id)}
                    className={`absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                      isWished(product.id) ? 'text-brand-orange' : 'text-ink-3 hover:text-brand-orange'
                    }`}
                  >
                    <i className={isWished(product.id) ? 'fas fa-heart' : 'far fa-heart'} />
                  </button>
                </div>
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
                          activeImg === i ? 'border-primary' : 'border-ebora-border hover:border-ebora-border2'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT — Details */}
              <div className="p-5 md:p-6 flex flex-col gap-4">

                {/* Name + rating */}
                <div>
                  <h2 className="font-display font-extrabold text-xl md:text-2xl text-ink leading-tight mb-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Stars rating={product.rating} />
                    <span className="text-sm text-ink-3">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-end gap-3">
                  <span className="font-display font-extrabold text-3xl text-ink">
                    KSh {product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <div className="flex flex-col">
                      <span className="text-sm text-ink-3 line-through">
                        KSh {product.oldPrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-brand-orange">
                        Save KSh {(product.oldPrice - product.price).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specs */}
                <div className="bg-ebora-bg rounded-xl p-4">
                  <div className="text-[11px] font-bold tracking-widest uppercase text-ink-3 mb-2">Specs</div>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.split(' · ').map(spec => (
                      <span
                        key={spec}
                        className="bg-white border border-ebora-border text-xs font-medium text-ink-2 px-2.5 py-1 rounded-lg"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Qty + Add to cart */}
                <div className="flex items-center gap-3 pt-1">
                  {/* Qty */}
                  <div className="flex items-center border-[1.5px] border-ebora-border2 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="w-10 h-11 flex items-center justify-center text-ink-2 hover:bg-ebora-surface transition-colors font-bold text-lg"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-display font-bold text-base text-ink">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="w-10 h-11 flex items-center justify-center text-ink-2 hover:bg-ebora-surface transition-colors font-bold text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to cart */}
                  <button
                    onClick={handleAdd}
                    className={`flex-1 h-11 rounded-xl font-display font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      added
                        ? 'bg-brand-green text-white'
                        : 'bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/25'
                    }`}
                  >
                    <i className={`fas ${added ? 'fa-check' : 'fa-cart-plus'}`} />
                    {added ? 'Added!' : `Add ${qty > 1 ? `(${qty})` : ''} to Cart`}
                  </button>
                </div>

                {/* Trust strip */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { icon: 'fas fa-shield-halved', label: 'Genuine', sub: 'product' },
                    { icon: 'fas fa-truck-fast',    label: 'Same-day', sub: 'Nairobi' },
                    { icon: 'fas fa-rotate-left',   label: '14-day', sub: 'returns' },
                  ].map(t => (
                    <div key={t.label} className="flex flex-col items-center text-center p-2 bg-ebora-bg rounded-xl">
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
              <div className="px-5 md:px-6 pb-6 border-t border-ebora-border pt-5">
                <div className="text-[11px] font-bold tracking-widest uppercase text-ink-3 mb-3">
                  Related Products
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {related.map(p => (
                    <button
                      key={p.id}
                      onClick={() => onProductSelect(p)}
                      className="bg-ebora-bg rounded-xl p-3 text-left hover:bg-primary-light border border-transparent hover:border-primary/30 transition-all"
                    >
                      <img
                        src={p.images?.[0] || p.image}
                        alt={p.name}
                        className="w-full aspect-square object-cover rounded-lg mb-2"
                      />
                      <div className="text-[11px] font-bold text-primary mb-0.5">{p.brand}</div>
                      <div className="text-xs font-semibold text-ink line-clamp-2 mb-1">{p.name}</div>
                      <div className="font-display font-bold text-sm text-ink">
                        KSh {p.price.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
