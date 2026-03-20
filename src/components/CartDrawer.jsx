import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer({ open, onClose }) {
  const { items, updateQty, removeItem, clearCart, count, total } = useCart()

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-ebora-border">
          <div className="flex items-center gap-2">
            <i className="fas fa-cart-shopping text-primary" />
            <span className="font-display font-bold text-lg text-ink">Your Cart</span>
            {count > 0 && (
              <span className="bg-primary text-white text-xs font-bold rounded-full px-2 py-0.5">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-ink-3 hover:bg-ebora-surface hover:text-ink transition-colors"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-ink-3 py-16">
              <i className="fas fa-cart-shopping text-5xl mb-4 opacity-20" />
              <p className="font-semibold text-ink text-base mb-1">Your cart is empty</p>
              <p className="text-sm">Add items to get started</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 p-3 bg-ebora-bg rounded-xl border border-ebora-border">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[13px] text-ink leading-snug mb-1 line-clamp-2">
                    {item.name}
                  </div>
                  <div className="font-display font-bold text-[15px] text-primary">
                    KSh {(item.price * item.qty).toLocaleString()}
                  </div>
                  <div className="text-[11px] text-ink-3">
                    KSh {item.price.toLocaleString()} each
                  </div>
                </div>
                {/* Controls */}
                <div className="flex flex-col items-end justify-between flex-shrink-0">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-6 h-6 flex items-center justify-center text-ink-3 hover:text-red-500 transition-colors"
                  >
                    <i className="fas fa-trash-can text-[11px]" />
                  </button>
                  <div className="flex items-center gap-1 border border-ebora-border2 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-7 h-7 flex items-center justify-center text-ink-2 hover:bg-ebora-surface transition-colors text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="w-7 text-center text-[13px] font-semibold text-ink">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 flex items-center justify-center text-ink-2 hover:bg-ebora-surface transition-colors text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ebora-border px-5 py-4 space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-2">Subtotal ({count} item{count !== 1 ? 's' : ''})</span>
              <span className="font-display font-extrabold text-xl text-ink">
                KSh {total.toLocaleString()}
              </span>
            </div>

            {/* M-Pesa note */}
            <div className="flex items-center gap-2 bg-brand-green-light border border-green-200 rounded-lg px-3 py-2 text-xs font-medium text-brand-green">
              <i className="fas fa-mobile-screen-button" />
              M-Pesa · Visa · Mastercard · Cash on Delivery
            </div>

            {/* Checkout CTA */}
            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary-dark text-white font-display font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
            >
              <i className="fas fa-lock text-sm" />
              Proceed to Checkout
            </Link>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="w-full text-xs text-ink-3 hover:text-red-500 transition-colors py-1"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
