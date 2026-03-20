import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function getOrders() {
  try { return JSON.parse(localStorage.getItem('ebora-orders')) || [] }
  catch { return [] }
}

const statusColor = {
  confirmed:  'bg-brand-green-light text-brand-green border-green-200',
  processing: 'bg-primary-light text-primary border-primary/20',
  delivered:  'bg-gray-100 text-ink-2 border-gray-200',
  cancelled:  'bg-red-50 text-red-600 border-red-200',
}

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(getOrders())
  }, [])

  return (
    <div className="min-h-screen bg-ebora-bg">
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/account" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">Order History</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <i className="fas fa-box-open text-5xl text-ink-3 opacity-20 mb-4" />
            <h2 className="font-display font-bold text-xl text-ink mb-2">No orders yet</h2>
            <p className="text-ink-3 text-sm mb-6">Your completed orders will appear here</p>
            <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, i) => (
              <div key={i} className="bg-white rounded-2xl border border-ebora-border p-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-display font-bold text-sm text-primary">{order.orderNumber}</div>
                    <div className="text-xs text-ink-3 mt-0.5">{order.date}</div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${statusColor[order.status] || statusColor.confirmed}`}>
                    {order.status || 'Confirmed'}
                  </span>
                </div>

                {/* Items preview */}
                <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar">
                  {order.items?.slice(0, 4).map((item, j) => (
                    <img
                      key={j}
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-ebora-border"
                    />
                  ))}
                  {order.items?.length > 4 && (
                    <div className="w-12 h-12 rounded-lg bg-ebora-surface flex items-center justify-center text-xs font-bold text-ink-3 flex-shrink-0">
                      +{order.items.length - 4}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-ebora-border">
                  <div className="text-xs text-ink-3">
                    {order.items?.length} item{order.items?.length !== 1 ? 's' : ''} · {order.payMethod?.toUpperCase()}
                  </div>
                  <div className="font-display font-extrabold text-base text-ink">
                    KSh {order.total?.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
