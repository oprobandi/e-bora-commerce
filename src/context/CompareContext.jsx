import { createContext, useContext, useState } from 'react'

const CompareContext = createContext()
const MAX_COMPARE = 3

export function CompareProvider({ children }) {
  const [items, setItems] = useState([])

  const toggle = (product) => {
    setItems(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) return prev.filter(p => p.id !== product.id)
      if (prev.length >= MAX_COMPARE) return prev
      return [...prev, product]
    })
  }

  const isComparing = (id) => items.some(p => p.id === id)
  const clear = () => setItems([])
  const isFull = items.length >= MAX_COMPARE

  return (
    <CompareContext.Provider value={{ items, toggle, isComparing, clear, isFull }}>
      {children}
    </CompareContext.Provider>
  )
}

export const useCompare = () => useContext(CompareContext)
