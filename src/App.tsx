import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
// Временно закомментируем несуществующие страницы
// import Profile from './pages/Profile';
// import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* Временно удалим нереализованные маршруты */}
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;