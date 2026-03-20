const brands = [
  { name: 'Samsung', src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', h: 'h-6' },
  { name: 'Apple',   src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', h: 'h-5' },
  { name: 'LG',      src: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg', h: 'h-8' },
  { name: 'HP',      src: 'https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg', h: 'h-9' },
  { name: 'Sony',    src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Sony_logo.svg', h: 'h-5' },
  { name: 'TCL',     src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/TCL_logo.svg', h: 'h-5' },
]

export default function Brands() {
  return (
    <section className="bg-white border-b border-ebora-border py-10 px-4">
      <div className="max-w-8xl mx-auto">
        <p className="text-center text-[11.5px] font-bold tracking-[2px] uppercase text-ink-3 mb-7">
          Authorized Dealer For
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {brands.map(b => (
            <div
              key={b.name}
              className="px-8 py-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer"
            >
              <img src={b.src} alt={b.name} className={`${b.h} max-w-[88px] object-contain`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
