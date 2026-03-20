import { categories } from '../data/categories'

export default function CategoryBar({ active, onSelect }) {
  return (
    <div className="bg-white border-b border-ebora-border overflow-hidden">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-4 py-3 min-w-max max-w-8xl mx-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border-[1.5px] text-[13.5px] font-medium whitespace-nowrap transition-all ${
                active === cat.id
                  ? 'bg-primary-light border-primary/40 text-primary'
                  : 'bg-ebora-bg border-ebora-border text-ink-2 hover:bg-primary-light hover:border-primary/30 hover:text-primary'
              }`}
            >
              <i className={`${cat.icon} text-sm ${active === cat.id ? 'text-primary' : 'text-ink-3'}`} />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
