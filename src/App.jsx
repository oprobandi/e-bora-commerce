import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'

import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import CategoryBar from './components/CategoryBar'
import FlashDeals from './components/FlashDeals'
import ProductGrid from './components/ProductGrid'
import Banners from './components/Banners'
import TrustStrip from './components/TrustStrip'
import MpesaSection from './components/MpesaSection'
import Brands from './components/Brands'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WhatsAppButton from './components/WhatsAppButton'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccessPage from './pages/OrderSuccessPage'

function HomePage({ cartOpen, setCartOpen }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-ebora-bg font-body text-ink">
      <AnnouncementBar />
      <Navbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onCartOpen={() => setCartOpen(true)}
      />
      <main>
        <Hero />
        <StatsBar />
        <CategoryBar active={activeCategory} onSelect={setActiveCategory} />
        <FlashDeals />
        <ProductGrid activeCategory={activeCategory} searchQuery={searchQuery} />
        <Banners />
        <TrustStrip />
        <MpesaSection />
        <Brands />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Routes>
            <Route
              path="/"
              element={<HomePage cartOpen={cartOpen} setCartOpen={setCartOpen} />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order/success" element={<OrderSuccessPage />} />
          </Routes>
          <WhatsAppButton />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  )
}
