// frontend/src/App.js
import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      id: 1,
      title: "Ноутбук",
      price: 50000,
      image: "https://via.placeholder.com/300x200", // Замените на свои изображения
    },
    {
      id: 2,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 7,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 8,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 9,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 10,
      title: "Смартфон",
      price: 25000,
      image: "https://via.placeholder.com/300x200",
    },
    // Добавьте больше товаров...
  ];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Маркетплейс</Navbar.Brand>
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;