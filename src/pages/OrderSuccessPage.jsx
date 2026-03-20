import { useLocation, Link, Navigate } from 'react-router-dom'

export default function OrderSuccessPage() {
  const { state } = useLocation()

  if (!state?.orderNumber) return <Navigate to="/" replace />

  const { orderNumber, name, phone, payMethod, items, total, deliveryFee, county } = state

  return (
    <div className="min-h-screen bg-ebora-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* Success card */}
        <div className="bg-white rounded-2xl border border-ebora-border p-6 mb-4 text-center">

          {/* Icon */}
          <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-circle-check text-3xl text-brand-green" />
          </div>

          <h1 className="font-display font-extrabold text-2xl text-ink mb-1">Order Confirmed!</h1>
          <p className="text-ink-3 text-sm mb-4">
            Thank you, {name.split(' ')[0]}. Your order has been received.
          </p>

          {/* Order number */}
          <div className="bg-ebora-bg rounded-xl border border-ebora-border px-4 py-3 mb-5">
            <div className="text-[11px] font-bold tracking-widest uppercase text-ink-3 mb-1">Order Number</div>
            <div className="font-display font-extrabold text-xl text-primary">{orderNumber}</div>
          </div>

          {/* Payment instructions */}
          {payMethod === 'mpesa' && (
            <div className="bg-brand-green-light border border-green-200 rounded-xl p-4 text-left mb-5">
              <div className="flex items-center gap-2 font-bold text-brand-green text-sm mb-3">
                <i className="fas fa-mobile-screen-button" />
                M-Pesa Payment Instructions
              </div>
              <ol className="text-xs text-brand-green space-y-2 list-decimal list-inside leading-relaxed">
                <li>Check <strong>{phone}</strong> for an M-Pesa STK push prompt</li>
                <li>Enter your M-Pesa PIN to approve KSh {total.toLocaleString()}</li>
                <li>You will receive an SMS confirmation from M-Pesa</li>
                <li>Your order will be processed immediately after payment</li>
              </ol>
            </div>
          )}

          {payMethod === 'cod' && (
            <div className="bg-brand-orange-light border border-orange-200 rounded-xl p-4 text-left mb-5">
              <div className="flex items-center gap-2 font-bold text-brand-orange text-sm mb-2">
                <i className="fas fa-money-bill-wave" />
                Cash on Delivery
              </div>
              <p className="text-xs text-brand-orange leading-relaxed">
                Have <strong>KSh {total.toLocaleString()}</strong> ready when our rider arrives.
                You'll receive a call before delivery.
              </p>
            </div>
          )}

          {payMethod === 'card' && (
            <div className="bg-primary-light border border-primary/20 rounded-xl p-4 text-left mb-5">
              <div className="flex items-center gap-2 font-bold text-primary text-sm mb-2">
                <i className="fas fa-credit-card" />
                Card Payment
              </div>
              <p className="text-xs text-primary leading-relaxed">
                Our team will contact you on <strong>{phone}</strong> to process the card payment securely.
              </p>
            </div>
          )}

          {/* Order summary */}
          <div className="text-left border-t border-ebora-border pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-ink-3 mb-3">Order Summary</div>
            <div className="space-y-2 mb-3">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-ink line-clamp-1">{item.name}</div>
                    <div className="text-[11px] text-ink-3">× {item.qty}</div>
                  </div>
                  <div className="text-[13px] font-bold text-ink">
                    KSh {(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-ebora-border pt-2 space-y-1.5">
              <div className="flex justify-between text-xs text-ink-2">
                <span>Delivery to {county}</span>
                <span className={deliveryFee === 0 ? 'text-brand-green font-semibold' : ''}>
                  {deliveryFee === 0 ? 'Free' : `KSh ${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between font-display font-extrabold text-base text-ink">
                <span>Total Paid</span>
                <span>KSh {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support note */}
        <div className="bg-white rounded-2xl border border-ebora-border p-4 mb-4 flex items-center gap-3">
          <i className="fas fa-headset text-primary text-lg flex-shrink-0" />
          <div>
            <div className="text-xs font-bold text-ink mb-0.5">Need help with your order?</div>
            <a href="tel:+254799644100" className="text-xs text-primary font-semibold hover:underline">
              Call 0799 644 100
            </a>
            <span className="text-xs text-ink-3 mx-1.5">·</span>
            <a
              href="https://wa.me/254799644100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-green font-semibold hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-display font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          <i className="fas fa-arrow-left text-sm" />
          Continue Shopping
        </Link>

      </div>
    </div>
  )
}
