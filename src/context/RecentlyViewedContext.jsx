import { createContext, useContext, useState, useEffect } from 'react'

const RecentlyViewedContext = createContext()
const MAX_ITEMS = 6

export function RecentlyViewedProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ebora-recently-viewed')) || [] }
    catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('ebora-recently-viewed', JSON.stringify(items))
  }, [items])

  const addViewed = (product) => {
    setItems(prev => {
      const filtered = prev.filter(p => p.id !== product.id)
      return [product, ...filtered].slice(0, MAX_ITEMS)
    })
  }

  return (
    <RecentlyViewedContext.Provider value={{ items, addViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  )
}

export const useRecentlyViewed = () => useContext(RecentlyViewedContext)
