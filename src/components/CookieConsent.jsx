import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ebora-cookie-consent')
    if (!consent) setTimeout(() => setVisible(true), 1200)
  }, [])

  const accept = (all = true) => {
    localStorage.setItem('ebora-cookie-consent', all ? 'all' : 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:pb-6">
      <div className="max-w-3xl mx-auto bg-[#1a1510] text-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden">

        {/* Main row */}
        <div className="px-5 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <i className="fas fa-shield-halved text-brand-green text-sm" />
              <span className="font-display font-bold text-sm text-white">Your Privacy Matters</span>
            </div>
            <p className="text-xs text-white/65 leading-relaxed">
              We use cookies to improve your shopping experience and comply with the{' '}
              <strong className="text-white/80">Kenya Data Protection Act (2019)</strong>.
              Essential cookies are always active.{' '}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-primary underline hover:no-underline"
              >
                {showDetails ? 'Hide details' : 'Learn more'}
              </button>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => accept(false)}
              className="text-xs font-semibold text-white/60 hover:text-white border border-white/20 hover:border-white/40 px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Essential only
            </button>
            <button
              onClick={() => accept(true)}
              className="text-xs font-bold bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Accept all
            </button>
          </div>
        </div>

        {/* Expandable details */}
        {showDetails && (
          <div className="border-t border-white/10 px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                icon: 'fas fa-lock',
                title: 'Essential',
                desc: 'Cart, wishlist, recently viewed. Required for the site to function.',
                always: true,
              },
              {
                icon: 'fas fa-chart-bar',
                title: 'Analytics',
                desc: 'Anonymous usage data to help us improve the store.',
                always: false,
              },
              {
                icon: 'fas fa-bullseye',
                title: 'Preferences',
                desc: 'Remember your settings, language, and personalisation choices.',
                always: false,
              },
            ].map(c => (
              <div key={c.title} className="bg-white/5 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <i className={`${c.icon} text-xs text-white/50`} />
                  <span className="text-xs font-bold text-white">{c.title}</span>
                  {c.always && (
                    <span className="ml-auto text-[10px] bg-brand-green/20 text-brand-green font-semibold px-1.5 py-0.5 rounded">
                      Always on
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
