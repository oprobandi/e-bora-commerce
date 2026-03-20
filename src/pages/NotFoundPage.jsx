import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-ebora-bg flex flex-col items-center justify-center px-4 text-center">
      {/* Big 404 */}
      <div className="font-display font-extrabold text-[120px] sm:text-[160px] leading-none text-ebora-border select-none mb-2">
        404
      </div>

      <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
        Page not found
      </h1>
      <p className="text-ink-3 text-sm max-w-sm mb-8 leading-relaxed">
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back to shopping.
      </p>

      {/* Quick links */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
        >
          <i className="fas fa-house text-sm" />
          Back to Home
        </Link>
        <a
          href="tel:+254799644100"
          className="flex items-center justify-center gap-2 border-[1.5px] border-ebora-border2 text-ink-2 hover:border-primary hover:text-primary font-medium px-5 py-3.5 rounded-xl transition-all"
        >
          <i className="fas fa-phone text-sm" />
          Call Support
        </a>
      </div>

      {/* Popular categories */}
      <div className="w-full max-w-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-3 mb-3">
          Popular categories
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: 'Phones',   icon: 'fas fa-mobile-screen-button' },
            { label: 'Laptops',  icon: 'fas fa-laptop' },
            { label: 'Smart TVs',icon: 'fas fa-tv' },
            { label: 'Audio',    icon: 'fas fa-headphones' },
            { label: 'Solar',    icon: 'fas fa-solar-panel' },
          ].map(c => (
            <Link
              key={c.label}
              to="/"
              className="flex items-center gap-1.5 bg-white border border-ebora-border text-ink-2 hover:border-primary hover:text-primary text-xs font-medium px-3 py-2 rounded-lg transition-colors"
            >
              <i className={`${c.icon} text-xs`} />
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
