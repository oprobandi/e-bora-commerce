import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="bg-ebora-bg py-10 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="bg-white border-[1.5px] border-ebora-border rounded-2xl px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-7 relative overflow-hidden">
          {/* Decorative radial */}
          <div className="absolute top-[-40%] right-[-8%] w-72 h-72 rounded-full bg-primary-light opacity-60 pointer-events-none" />

          {/* Copy */}
          <div className="flex-1 relative z-10">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-display font-extrabold text-2xl text-ink mb-1.5">
              Get KSh 500 Off Your First Order
            </h3>
            <p className="text-sm text-ink-3">
              Subscribe for exclusive deals, restock alerts and Nairobi tech news.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full md:flex-1 relative z-10"
          >
            {submitted ? (
              <div className="flex items-center gap-2 text-brand-green font-semibold text-sm py-3">
                <i className="fas fa-check-circle text-lg" />
                Subscribed! Check your inbox for your discount code.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 border-[1.5px] border-ebora-border2 rounded-lg text-sm text-ink placeholder-ink-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-display font-bold text-sm px-6 py-3 rounded-lg transition-all hover:shadow-md hover:shadow-primary/25 whitespace-nowrap"
                >
                  Subscribe <i className="fas fa-arrow-right text-xs" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
