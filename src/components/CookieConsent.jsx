import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <div className="max-w-2xl mx-auto bg-[#1a1510] text-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden">

        {/* Main row */}
        <div className="px-5 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <p className="text-sm text-white/80 leading-relaxed">
              🍪 We use cookies to improve your shopping experience.{' '}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-primary underline hover:no-underline"
              >
                {showDetails ? 'Hide' : 'Details'}
              </button>
              {' · '}
              <Link to="/privacy" className="text-primary underline hover:no-underline">
                Privacy Policy
              </Link>
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

        {/* Expandable details — minimal, no jargon */}
        {showDetails && (
          <div className="border-t border-white/10 px-5 py-3 flex flex-col sm:flex-row gap-3 text-[11px] text-white/50">
            <span><strong className="text-white/70">Essential</strong> — cart, wishlist, preferences (always on)</span>
            <span><strong className="text-white/70">Analytics</strong> — anonymous usage stats to improve the store</span>
          </div>
        )}
      </div>
    </div>
  )
}
