import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import ShoppingCart from './pages/ShoppingCart.tsx'
import Contact from './pages/Contact.tsx'
import AboutUs from './pages/AboutUs.tsx'
import Faq from './pages/Faq.tsx'
import SearchResults from './pages/SearchResults.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key for Clerk')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/faqs' element={<Faq />} />
          </Routes>
        </ClerkProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
