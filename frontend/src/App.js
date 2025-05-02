// frontend/src/App.js
import React, { useState } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { BsCart } from "react-icons/bs"; // Убедитесь, что установили react-icons

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Тестовые данные товаров (замените на свои)
  const products = [
    {
      id: 1,
      title: "Ноутбук",
      price: 50000,
      image: require("./images/1.jpg"),
    },
    {
      id: 2,
      title: "Смартфон",
      price: 25000,
      image: require("./images/2.jpg"),
    },
    {
      id: 3,
      title: "Смартфон",
      price: 25000,
      image: require("./images/3.jpg"),
    },
    {
      id: 4,
      title: "Смартфон",
      price: 25000,
      image: require("./images/4.jpg"),
    },
    {
      id: 5,
      title: "Смартфон",
      price: 25000,
      image: require("./images/5.jpg"),
    },
    {
      id: 6,
      title: "Смартфон",
      price: 25000,
      image: require("./images/6.jpg"),
    },
    {
      id: 7,
      title: "Смартфон",
      price: 25000,
      image: require("./images/1.jpg"),
    },
    {
      id: 8,
      title: "Смартфон",
      price: 25000,
      image: require("./images/4.jpg"),
    },
    {
      id: 9,
      title: "Смартфон",
      price: 25000,
      image: require("./images/5.jpg"),
    },
    {
      id: 10,
      title: "Смартфон",
      price: 25000,
      image: require("./images/6.jpg"),
    },
  ];

  // Добавление товара в корзину
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Удаление товара из корзины
  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Маркетплейс</Navbar.Brand>
          <Button 
            variant="outline-light" 
            onClick={() => setShowCart(true)}
          >
            <BsCart /> Корзина ({cartItems.length})
          </Button>
        </Container>
      </Navbar>

      <Container style={{ padding: "20px" }}>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                onAddToCart={() => handleAddToCart(product)} // Важно: передаем функцию
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Компонент корзины */}
      <Cart
        showCart={showCart}
        handleCloseCart={() => setShowCart(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart} // Добавили проп для удаления
      />
    </div>
  );
}

export default App;