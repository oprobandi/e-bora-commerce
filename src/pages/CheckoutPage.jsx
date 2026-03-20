import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { counties } from '../data/counties'

function generateOrderNumber() {
  const d = new Date()
  const date = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `EB-${date}-${rand}`
}

export default function CheckoutPage() {
  const { items, total, count, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    mpesaPhone: '',
    county: 'Nairobi',
    address: '',
    payMethod: 'mpesa',
  })
  const [errors, setErrors] = useState({})
  const [placing, setPlacing] = useState(false)

  const selectedCounty = counties.find(c => c.name === form.county)
  const deliveryFee = selectedCounty ? selectedCounty.fee : 300
  const orderTotal = total + deliveryFee

  const set = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!/^07\d{8}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Enter a valid Safaricom number (07XXXXXXXX)'
    if (form.payMethod === 'mpesa' && !/^07\d{8}$/.test(form.mpesaPhone.replace(/\s/g, '')))
      e.mpesaPhone = 'Enter the M-Pesa number to receive STK push'
    if (!form.address.trim()) e.address = 'Delivery address / area is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setPlacing(true)
    const orderNum = generateOrderNumber()

    // Simulate STK push delay then redirect
    setTimeout(() => {
      clearCart()
      navigate('/order/success', {
        state: {
          orderNumber: orderNum,
          name: form.name,
          phone: form.mpesaPhone || form.phone,
          payMethod: form.payMethod,
          items,
          total: orderTotal,
          deliveryFee,
          county: form.county,
        }
      })
    }, 1800)
  }

  if (count === 0 && !placing) {
    return (
      <div className="min-h-screen bg-ebora-bg flex flex-col items-center justify-center text-center px-4">
        <i className="fas fa-cart-shopping text-5xl text-ink-3 opacity-20 mb-4" />
        <h2 className="font-display font-bold text-xl text-ink mb-2">Your cart is empty</h2>
        <p className="text-ink-3 text-sm mb-6">Add some products before checking out</p>
        <Link
          to="/"
          className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ebora-bg">
      {/* Header */}
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">Checkout</span>
          <span className="ml-auto text-sm text-ink-3">{count} item{count !== 1 ? 's' : ''}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

        {/* LEFT — Form */}
        <div className="space-y-5">

          {/* Contact */}
          <div className="bg-white rounded-2xl border border-ebora-border p-5">
            <h3 className="font-display font-bold text-base text-ink mb-4 flex items-center gap-2">
              <i className="fas fa-user text-primary text-sm" />
              Contact Details
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-ink-2 mb-1 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  placeholder="John Kamau"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors ${errors.name ? 'border-red-400 focus:border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-2 mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => set('phone', e.target.value)}
                  placeholder="0712 345 678"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors ${errors.phone ? 'border-red-400 focus:border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Delivery */}
          <div className="bg-white rounded-2xl border border-ebora-border p-5">
            <h3 className="font-display font-bold text-base text-ink mb-4 flex items-center gap-2">
              <i className="fas fa-truck-fast text-primary text-sm" />
              Delivery Details
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-ink-2 mb-1 block">County</label>
                <select
                  value={form.county}
                  onChange={e => set('county', e.target.value)}
                  className="w-full border border-ebora-border2 focus:border-primary rounded-lg px-3 py-2.5 text-sm outline-none transition-colors bg-white"
                >
                  {counties.map(c => (
                    <option key={c.name} value={c.name}>
                      {c.name} — {c.fee === 0 ? 'Free delivery' : `KSh ${c.fee}`}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-2 mb-1 block">Area / Street Address</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={e => set('address', e.target.value)}
                  placeholder="e.g. Westlands, Mpaka Road"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors ${errors.address ? 'border-red-400 focus:border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
              {form.county === 'Nairobi' && (
                <div className="flex items-center gap-2 bg-brand-green-light border border-green-200 rounded-lg px-3 py-2 text-xs font-semibold text-brand-green">
                  <i className="fas fa-circle-check" />
                  Free same-day delivery within Nairobi
                </div>
              )}
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl border border-ebora-border p-5">
            <h3 className="font-display font-bold text-base text-ink mb-4 flex items-center gap-2">
              <i className="fas fa-credit-card text-primary text-sm" />
              Payment Method
            </h3>
            <div className="space-y-2 mb-4">
              {[
                { id: 'mpesa',  label: 'M-Pesa',            icon: 'fas fa-mobile-screen-button', color: 'text-brand-green' },
                { id: 'card',   label: 'Visa / Mastercard', icon: 'fas fa-credit-card',          color: 'text-primary' },
                { id: 'cod',    label: 'Cash on Delivery',  icon: 'fas fa-money-bill-wave',       color: 'text-brand-orange' },
              ].map(method => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border-[1.5px] cursor-pointer transition-all ${
                    form.payMethod === method.id
                      ? 'border-primary bg-primary-light'
                      : 'border-ebora-border hover:border-ebora-border2'
                  }`}
                >
                  <input
                    type="radio"
                    name="payMethod"
                    value={method.id}
                    checked={form.payMethod === method.id}
                    onChange={() => set('payMethod', method.id)}
                    className="accent-primary"
                  />
                  <i className={`${method.icon} ${method.color} w-5 text-center`} />
                  <span className="text-sm font-medium text-ink">{method.label}</span>
                </label>
              ))}
            </div>

            {/* M-Pesa STK push number */}
            {form.payMethod === 'mpesa' && (
              <div className="bg-ebora-bg rounded-xl p-4 border border-ebora-border">
                <p className="text-xs font-semibold text-ink-2 mb-2">
                  M-Pesa number to receive payment prompt:
                </p>
                <input
                  type="tel"
                  value={form.mpesaPhone}
                  onChange={e => set('mpesaPhone', e.target.value)}
                  placeholder="0712 345 678"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors bg-white ${errors.mpesaPhone ? 'border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
                />
                {errors.mpesaPhone && <p className="text-red-500 text-xs mt-1">{errors.mpesaPhone}</p>}
                <p className="text-[11px] text-ink-3 mt-2">
                  You will receive an STK push on this number. Enter your M-Pesa PIN to complete payment.
                </p>
              </div>
            )}

            {form.payMethod === 'card' && (
              <div className="bg-ebora-bg rounded-xl p-4 border border-ebora-border text-center">
                <i className="fas fa-lock text-ink-3 mb-2 block" />
                <p className="text-xs text-ink-3">Card payment will be processed on the next screen via a secure gateway.</p>
              </div>
            )}

            {form.payMethod === 'cod' && (
              <div className="bg-brand-orange-light rounded-xl p-4 border border-orange-200">
                <p className="text-xs font-medium text-brand-orange">
                  <i className="fas fa-circle-info mr-1.5" />
                  Pay cash when your order is delivered. Our rider will confirm receipt.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — Order Summary */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-ebora-border p-5 lg:sticky lg:top-20">
            <h3 className="font-display font-bold text-base text-ink mb-4">Order Summary</h3>

            {/* Items */}
            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-semibold text-ink line-clamp-1">{item.name}</div>
                    <div className="text-[11px] text-ink-3">Qty: {item.qty}</div>
                  </div>
                  <div className="text-[13px] font-bold text-ink flex-shrink-0">
                    KSh {(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ebora-border pt-3 space-y-2">
              <div className="flex justify-between text-sm text-ink-2">
                <span>Subtotal</span>
                <span>KSh {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-ink-2">
                <span>Delivery ({form.county})</span>
                <span className={deliveryFee === 0 ? 'text-brand-green font-semibold' : ''}>
                  {deliveryFee === 0 ? 'Free' : `KSh ${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between font-display font-extrabold text-lg text-ink border-t border-ebora-border pt-2 mt-2">
                <span>Total</span>
                <span>KSh {orderTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={placing}
              className="w-full mt-5 bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-display font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 text-[15px]"
            >
              {placing ? (
                <>
                  <i className="fas fa-circle-notch fa-spin" />
                  {form.payMethod === 'mpesa' ? 'Sending STK Push…' : 'Placing Order…'}
                </>
              ) : (
                <>
                  <i className="fas fa-lock text-sm" />
                  Place Order · KSh {orderTotal.toLocaleString()}
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-ink-3 mt-3">
              <i className="fas fa-shield-halved text-brand-green mr-1" />
              Secured by E-Bora Commerce
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
