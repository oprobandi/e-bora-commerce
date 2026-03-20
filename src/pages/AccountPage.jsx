import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function getAccount() {
  try { return JSON.parse(localStorage.getItem('ebora-account')) || null }
  catch { return null }
}

function saveAccount(data) {
  localStorage.setItem('ebora-account', JSON.stringify(data))
}

export default function AccountPage() {
  const navigate = useNavigate()
  const [account, setAccount] = useState(null)
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [form, setForm] = useState({ name: '', phone: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setAccount(getAccount())
  }, [])

  const set = (f, v) => {
    setForm(p => ({ ...p, [f]: v }))
    setErrors(p => ({ ...p, [f]: '' }))
  }

  const validate = () => {
    const e = {}
    if (mode === 'register' && !form.name.trim()) e.name = 'Full name is required'
    if (!form.phone.trim() && !form.email.trim()) e.phone = 'Phone or email required'
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitting(true)
    setTimeout(() => {
      const data = {
        name: form.name || form.phone || form.email,
        phone: form.phone,
        email: form.email,
        joinedAt: new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' }),
      }
      saveAccount(data)
      setAccount(data)
      setSubmitting(false)
    }, 900)
  }

  const handleLogout = () => {
    localStorage.removeItem('ebora-account')
    setAccount(null)
  }

  // ── LOGGED IN STATE ──
  if (account) {
    return (
      <div className="min-h-screen bg-ebora-bg">
        <div className="bg-white border-b border-ebora-border sticky top-0 z-10">
          <div className="max-w-md mx-auto px-4 h-14 flex items-center gap-3">
            <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
              <i className="fas fa-arrow-left" />
            </Link>
            <span className="font-display font-bold text-base text-ink">My Account</span>
          </div>
        </div>

        <div className="max-w-md mx-auto px-4 py-8 space-y-4">
          {/* Avatar */}
          <div className="bg-white rounded-2xl border border-ebora-border p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-light border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
              <span className="font-display font-extrabold text-xl text-primary">
                {account.name?.[0]?.toUpperCase() || 'U'}
              </span>
            </div>
            <div>
              <div className="font-display font-bold text-lg text-ink">{account.name}</div>
              {account.phone && <div className="text-sm text-ink-3">{account.phone}</div>}
              {account.email && <div className="text-sm text-ink-3">{account.email}</div>}
              <div className="text-[11px] text-ink-3 mt-0.5">Member since {account.joinedAt}</div>
            </div>
          </div>

          {/* Menu */}
          {[
            { icon: 'fas fa-box',        label: 'My Orders',    sub: 'Track & view order history', to: '/orders' },
            { icon: 'far fa-heart',      label: 'Saved Items',  sub: 'Your wishlist',              to: '/wishlist' },
            { icon: 'fas fa-map-pin',    label: 'Addresses',    sub: 'Delivery addresses',         to: '#' },
            { icon: 'fas fa-shield-halved', label: 'Security',  sub: 'Password & privacy',         to: '#' },
          ].map(item => (
            <Link
              key={item.label}
              to={item.to}
              className="bg-white rounded-2xl border border-ebora-border p-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <i className={`${item.icon} text-primary`} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-ink">{item.label}</div>
                <div className="text-xs text-ink-3">{item.sub}</div>
              </div>
              <i className="fas fa-chevron-right text-xs text-ink-3 group-hover:text-primary transition-colors" />
            </Link>
          ))}

          {/* Support */}
          <div className="bg-white rounded-2xl border border-ebora-border p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-green-light flex items-center justify-center flex-shrink-0">
              <i className="fab fa-whatsapp text-brand-green text-lg" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-ink">WhatsApp Support</div>
              <div className="text-xs text-ink-3">0799 644 100 — we reply fast</div>
            </div>
            <a href="https://wa.me/254799644100" target="_blank" rel="noopener noreferrer"
               className="text-xs font-bold text-brand-green hover:underline">
              Chat
            </a>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full py-3 text-sm font-semibold text-red-500 hover:text-red-600 border border-red-200 hover:border-red-400 rounded-xl transition-colors"
          >
            <i className="fas fa-right-from-bracket mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    )
  }

  // ── AUTH FORM ──
  return (
    <div className="min-h-screen bg-ebora-bg flex flex-col">
      <div className="bg-white border-b border-ebora-border">
        <div className="max-w-md mx-auto px-4 h-14 flex items-center gap-3">
          <Link to="/" className="text-ink-3 hover:text-primary transition-colors">
            <i className="fas fa-arrow-left" />
          </Link>
          <span className="font-display font-bold text-base text-ink">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm">

          {/* Logo */}
          <div className="text-center mb-8">
            <img src="/logo-dark.svg" alt="E-Bora Commerce" className="h-10 w-auto mx-auto mb-3"
              onError={e => { e.target.style.display='none' }} />
            <h1 className="font-display font-extrabold text-2xl text-ink">E-Bora Commerce</h1>
            <p className="text-sm text-ink-3 mt-1">
              {mode === 'login' ? 'Welcome back' : 'Join thousands of happy customers'}
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-ebora-border p-5 space-y-3">
            {mode === 'register' && (
              <div>
                <label className="text-xs font-semibold text-ink-2 mb-1 block">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => set('name', e.target.value)}
                  placeholder="John Kamau"
                  className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-ink-2 mb-1 block">Phone or Email</label>
              <input
                type="text"
                value={form.phone}
                onChange={e => set('phone', e.target.value)}
                placeholder="0712 345 678 or email"
                className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-colors ${errors.phone ? 'border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-ink-2 mb-1 block">Password</label>
              <input
                type="password"
                value={form.password}
                onChange={e => set('password', e.target.value)}
                placeholder="••••••••"
                className={`w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-colors ${errors.password ? 'border-red-400' : 'border-ebora-border2 focus:border-primary'}`}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/60 text-white font-display font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              {submitting
                ? <><i className="fas fa-circle-notch fa-spin" /> Please wait…</>
                : mode === 'login' ? 'Sign In' : 'Create Account'
              }
            </button>
          </div>

          {/* Toggle */}
          <p className="text-center text-sm text-ink-3 mt-5">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setErrors({}) }}
              className="text-primary font-semibold hover:underline"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
