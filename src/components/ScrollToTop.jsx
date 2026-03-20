import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-5 z-40 w-10 h-10 bg-white border border-ebora-border2 rounded-full shadow-md flex items-center justify-center text-ink-2 hover:bg-primary hover:text-white hover:border-primary transition-all hover:-translate-y-0.5"
    >
      <i className="fas fa-chevron-up text-sm" />
    </button>
  )
}
