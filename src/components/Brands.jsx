// Inline SVG brand wordmarks — no external image deps, always renders
const brands = [
  {
    name: 'Samsung',
    svg: (
      <svg viewBox="0 0 200 40" className="h-6 w-auto max-w-[110px]" fill="currentColor">
        <text x="100" y="30" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900" letterSpacing="-1">SAMSUNG</text>
      </svg>
    ),
  },
  {
    name: 'Apple',
    svg: (
      <svg viewBox="0 0 40 48" className="h-8 w-auto max-w-[32px]" fill="currentColor">
        <path d="M34.5 25.8c0-5.3 4.4-7.9 4.6-8-2.5-3.7-6.4-4.2-7.8-4.3-3.3-.3-6.5 2-8.2 2s-4.3-1.9-7.1-1.9c-3.6.1-7 2.1-8.9 5.3-3.8 6.6-1 16.4 2.7 21.8 1.8 2.6 4 5.5 6.8 5.4 2.7-.1 3.8-1.7 7.1-1.7s4.3 1.7 7.2 1.7c2.9 0 4.8-2.6 6.6-5.2 2.1-3 3-5.9 3-6.1-.1 0-5.9-2.3-6-9zm-5.6-16.6c1.5-1.8 2.5-4.3 2.2-6.8-2.1.1-4.7 1.4-6.2 3.2-1.4 1.6-2.6 4.2-2.3 6.6 2.4.2 4.8-1.2 6.3-3z"/>
      </svg>
    ),
  },
  {
    name: 'LG',
    svg: (
      <svg viewBox="0 0 80 40" className="h-8 w-auto max-w-[56px]" fill="currentColor">
        <text x="40" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="36" fontWeight="900">LG</text>
      </svg>
    ),
  },
  {
    name: 'HP',
    svg: (
      <svg viewBox="0 0 60 40" className="h-7 w-auto max-w-[44px]" fill="currentColor">
        <text x="30" y="32" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="34" fontWeight="900">hp</text>
      </svg>
    ),
  },
  {
    name: 'Sony',
    svg: (
      <svg viewBox="0 0 140 36" className="h-5 w-auto max-w-[90px]" fill="currentColor">
        <text x="70" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" letterSpacing="4">SONY</text>
      </svg>
    ),
  },
  {
    name: 'TCL',
    svg: (
      <svg viewBox="0 0 100 36" className="h-5 w-auto max-w-[72px]" fill="currentColor">
        <text x="50" y="28" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="30" fontWeight="900" letterSpacing="2">TCL</text>
      </svg>
    ),
  },
  {
    name: 'Canon',
    svg: (
      <svg viewBox="0 0 160 36" className="h-5 w-auto max-w-[100px]" fill="currentColor">
        <text x="80" y="28" textAnchor="middle" fontFamily="Times New Roman, serif" fontSize="28" fontWeight="bold" letterSpacing="3">Canon</text>
      </svg>
    ),
  },
  {
    name: 'Xiaomi',
    svg: (
      <svg viewBox="0 0 160 40" className="h-5 w-auto max-w-[100px]" fill="currentColor">
        <text x="80" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" letterSpacing="2">xiaomi</text>
      </svg>
    ),
  },
]

export default function Brands() {
  return (
    <section className="bg-white border-b border-ebora-border py-10 px-4">
      <div className="max-w-8xl mx-auto">
        <p className="text-center text-[11.5px] font-bold tracking-[2px] uppercase text-ink-3 mb-8">
          Authorized Dealer For
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map(b => (
            <div
              key={b.name}
              className="opacity-30 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
              title={b.name}
            >
              {b.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
