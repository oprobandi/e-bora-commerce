const stats = [
  { num: '50K+',    label: 'Happy Customers' },
  { num: '2,400+',  label: 'Products' },
  { num: '4.9 ★',  label: 'Average Rating' },
  { num: '47',      label: 'Counties Served' },
  { num: '6 Stores',label: 'Across Kenya' },
]

export default function StatsBar() {
  return (
    <div className="bg-ebora-black py-4 px-4 overflow-x-auto no-scrollbar">
      <div className="flex justify-start md:justify-around items-center gap-8 min-w-max md:min-w-0 max-w-8xl mx-auto">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-8">
            <div className="text-center">
              <div className="font-display font-extrabold text-lg text-white">{s.num}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">{s.label}</div>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-8 bg-gray-800" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
