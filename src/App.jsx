import { useState } from 'react'
import { CartProvider } from './context/CartContext'
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

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <CartProvider>
      <div className="min-h-screen bg-ebora-bg font-body text-ink">
        <AnnouncementBar />
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <CategoryBar active={activeCategory} onSelect={setActiveCategory} />
          <FlashDeals />
          <ProductGrid activeCategory={activeCategory} />
          <Banners />
          <TrustStrip />
          <MpesaSection />
          <Brands />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
