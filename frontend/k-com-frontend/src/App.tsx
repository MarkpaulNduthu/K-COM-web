
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import SearchResults from './pages/SearchResults';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

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
      <Route path='/shipping' element={<Shipping />} />
      <Route path='/returns' element={<Returns />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;
