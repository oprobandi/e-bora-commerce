import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ebora-wishlist')) || [] }
    catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('ebora-wishlist', JSON.stringify(items))
  }, [items])

  const toggle = (id) =>
    setItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )

  const isWished = (id) => items.includes(id)

  return (
    <WishlistContext.Provider value={{ items, toggle, isWished }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
