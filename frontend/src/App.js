// frontend/src/App.js
import React, { useState } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { BsCart } from "react-icons/bs";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Маркетплейс</Navbar.Brand>
          <Button variant="outline-light" onClick={() => setShowCart(true)}>
            <BsCart /> Корзина ({cartItems.length})
          </Button>
        </Container>
      </Navbar>

      function App()
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
      <Cart
        showCart={showCart}
        handleCloseCart={() => setShowCart(false)}
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;