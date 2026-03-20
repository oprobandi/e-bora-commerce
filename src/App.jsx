import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { RecentlyViewedProvider } from './context/RecentlyViewedContext'
import { CompareProvider } from './context/CompareContext'

// Eagerly loaded — always needed
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import CategoryBar from './components/CategoryBar'
import FlashDeals from './components/FlashDeals'
import ProductGrid from './components/ProductGrid'
import RecentlyViewed from './components/RecentlyViewed'
import Banners from './components/Banners'
import TrustStrip from './components/TrustStrip'
import MpesaSection from './components/MpesaSection'
import Brands from './components/Brands'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WhatsAppButton from './components/WhatsAppButton'
import ProductModal from './components/ProductModal'
import CompareBar from './components/CompareBar'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/ScrollToTop'

// Code-split pages — only loaded when navigated to
const CheckoutPage     = lazy(() => import('./pages/CheckoutPage'))
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage'))
const NotFoundPage     = lazy(() => import('./pages/NotFoundPage'))
const WishlistPage     = lazy(() => import('./pages/WishlistPage'))
const OrderHistoryPage = lazy(() => import('./pages/OrderHistoryPage'))
const AccountPage      = lazy(() => import('./pages/AccountPage'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-ebora-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-ink-3">
        <i className="fas fa-circle-notch fa-spin text-2xl text-primary" />
        <span className="text-sm font-medium">Loading…</span>
      </div>
    </div>
  )
}

function HomePage({ cartOpen, setCartOpen }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

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
        <ProductGrid
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onProductSelect={setSelectedProduct}
        />
        <RecentlyViewed onProductSelect={setSelectedProduct} />
        <Banners />
        <TrustStrip />
        <MpesaSection />
        <Brands />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <CompareBar onProductSelect={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onProductSelect={setSelectedProduct}
        />
      )}
    </div>
  )
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <RecentlyViewedProvider>
            <CompareProvider>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/"              element={<HomePage cartOpen={cartOpen} setCartOpen={setCartOpen} />} />
                  <Route path="/checkout"      element={<CheckoutPage />} />
                  <Route path="/order/success" element={<OrderSuccessPage />} />
                  <Route path="/wishlist"      element={<WishlistPage />} />
                  <Route path="/orders"        element={<OrderHistoryPage />} />
                  <Route path="/account"       element={<AccountPage />} />
                  <Route path="*"              element={<NotFoundPage />} />
                </Routes>
              </Suspense>
              <WhatsAppButton />
              <ScrollToTop />
              <CookieConsent />
            </CompareProvider>
          </RecentlyViewedProvider>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  )
}
