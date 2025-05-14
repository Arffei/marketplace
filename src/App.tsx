import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ProductPage from './pages/ProductPage';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Carousel from './components/Carousel';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Box sx={{ 
            width: '85%',
            margin: '0 auto',
            paddingTop: '20px'
          }}>
            <Routes>
              <Route path="/" element={
                <>
                  <Carousel />
                  <Home />
                </>
              } />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;