import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import ShoppingCart from './pages/ShoppingCart.tsx'

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
            <Route path='/cart' element={<ShoppingCart />} />
          </Routes>
        </ClerkProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
