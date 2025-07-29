
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
