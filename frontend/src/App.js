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