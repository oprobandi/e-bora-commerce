import { useCompare } from '../context/CompareContext'

const fields = ['price', 'rating', 'specs']

export default function CompareBar({ onProductSelect }) {
  const { items, toggle, clear } = useCompare()

  if (items.length === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-primary shadow-2xl">
      <div className="max-w-5xl mx-auto px-4 py-3">

        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <i className="fas fa-scale-balanced text-primary text-sm" />
            <span className="font-display font-bold text-sm text-ink">
              Comparing {items.length} product{items.length !== 1 ? 's' : ''}
            </span>
            <span className="text-xs text-ink-3">(max 3)</span>
          </div>
          <button
            onClick={clear}
            className="text-xs text-ink-3 hover:text-red-500 transition-colors font-medium"
          >
            Clear all
          </button>
        </div>

        {/* Products row */}
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map(i => {
            const p = items[i]
            return (
              <div key={i} className="relative">
                {p ? (
                  <div className="bg-ebora-bg rounded-xl p-3 border border-ebora-border">
                    {/* Remove */}
                    <button
                      onClick={() => toggle(p)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] z-10 hover:bg-red-600 transition-colors"
                    >
                      <i className="fas fa-times" />
                    </button>
                    <div className="flex gap-2 items-start mb-2">
                      <img
                        src={p.images?.[0] || p.image}
                        alt={p.name}
                        className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold text-primary">{p.brand}</div>
                        <div className="text-[11px] font-semibold text-ink line-clamp-2 leading-tight">{p.name}</div>
                      </div>
                    </div>
                    {/* Key comparison fields */}
                    <div className="space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-ink-3">Price</span>
                        <span className="font-bold text-ink">KSh {p.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-ink-3">Rating</span>
                        <span className="font-bold text-ink">{'★'.repeat(Math.floor(p.rating))} {p.rating}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onProductSelect(p)}
                      className="mt-2 w-full text-[10px] font-semibold text-primary hover:underline"
                    >
                      View details →
                    </button>
                  </div>
                ) : (
                  <div className="bg-ebora-bg rounded-xl p-3 border-2 border-dashed border-ebora-border2 flex items-center justify-center h-full min-h-[80px]">
                    <span className="text-xs text-ink-3 text-center">
                      <i className="fas fa-plus text-ink-3 block mb-1" />
                      Add product
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
