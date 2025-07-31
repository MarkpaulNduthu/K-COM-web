
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path='/faqs' element={<Faq />} />
      <Route path='/search' element={<SearchResults />} />
    </Routes>
  );
}

export default App;
