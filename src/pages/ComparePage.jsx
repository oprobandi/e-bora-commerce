import { Link } from 'react-router-dom'
import { useCompare } from '../context/CompareContext'
import { useCart } from '../context/CartContext'

const allSpecLabels = [
  'Screen Size', 'Resolution', 'HDR', 'Smart OS', 'HDMI Ports', 'USB Ports',
  'Connectivity', 'Refresh Rate', 'Storage', 'RAM', 'Processor', 'Main Camera',
  'Battery', 'Charging', 'Network', 'Display', 'Driver Size', 'Battery Life',
  'Charge Time', 'Quick Charge', 'Bluetooth', 'Codecs', 'Weight', 'Microphones',
  'Chip', 'Port', 'Front Camera', 'Rear Camera', 'Case Size', 'Bezel', 'GPS',
  'Water Resistance', 'Sensors', 'Compatibility', 'Sensor', 'Video', 'Burst Rate',
  'Viewfinder', 'Screen', 'Mount', 'Panel', 'Audio', 'Gaming', 'Graphics', 'OS',
]

export default function ComparePage() {
  const { items, removeItem, clear } = useCompare()
  const { addItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-ebora-bg flex flex-col items-center justify-center text-center px-4">
        <i className="fas fa-code-compare text-5xl text-ink-3 opacity-20 mb-4" />
        <h2 className="font-display font-bold text-xl text-ink mb-2">Nothing to compare</h2>
        <p className="text-ink-3 text-sm mb-6">Add products from the store to compare them side by side</p>
        <Link to="/" className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
          Browse Products
        </Link>
      </div>
    )
  }

  // Collect only spec labels that appear in at least one product
  const relevantLabels = allSpecLabels.filter(label =>
    items.some(p => p.specTable?.find(s => s.label === label))
  )

  const getSpec = (product, label) =>
    product.specTable?.find(s => s.label === label)?.value || '—'

  return (
    <div className="min-h-screen bg-ebora-bg">
      {/* Header */}
      <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">Compare Products</span>
          <button
            onClick={clear}
            className="ml-auto text-xs text-ink-3 hover:text-red-500 transition-colors"
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr>
              <th className="w-36 text-left pb-4 pr-4 align-top">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-3">Product</span>
              </th>
              {items.map(product => (
                <th key={product.id} className="pb-4 px-3 align-top">
                  <div className="bg-white rounded-2xl border border-ebora-border p-3 text-center relative">
                    <button
                      onClick={() => removeItem(product.id)}
                      className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-ink-3 hover:text-red-500 transition-colors"
                    >
                      <i className="fas fa-times text-xs" />
                    </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg mx-auto mb-2"
                    />
                    <div className="text-[11px] font-bold text-primary mb-0.5">{product.brand}</div>
                    <div className="text-[12px] font-semibold text-ink leading-snug mb-2 line-clamp-2">
                      {product.name}
                    </div>
                    <div className="font-display font-extrabold text-base text-ink mb-2">
                      KSh {product.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => addItem(product)}
                      className="w-full py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-lg transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </th>
              ))}
              {/* Empty slot placeholders */}
              {Array.from({ length: 3 - items.length }).map((_, i) => (
                <th key={`empty-${i}`} className="pb-4 px-3 align-top">
                  <div className="bg-ebora-bg rounded-2xl border border-dashed border-ebora-border2 p-3 h-48 flex flex-col items-center justify-center text-center">
                    <i className="fas fa-plus text-ink-3 opacity-30 text-2xl mb-2" />
                    <span className="text-xs text-ink-3">Add a product to compare</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {relevantLabels.map((label, idx) => (
              <tr key={label} className={idx % 2 === 0 ? 'bg-white' : 'bg-ebora-bg'}>
                <td className="py-3 pr-4 pl-2 rounded-l-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-3">{label}</span>
                </td>
                {items.map(product => (
                  <td key={product.id} className="py-3 px-3 text-sm font-medium text-ink text-center">
                    {getSpec(product, label)}
                  </td>
                ))}
                {Array.from({ length: 3 - items.length }).map((_, i) => (
                  <td key={`empty-${i}`} className="py-3 px-3 text-center text-ink-3 text-sm">—</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
