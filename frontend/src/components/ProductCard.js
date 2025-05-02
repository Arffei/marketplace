// frontend/src/components/ProductCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ title, price, image }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price} руб.</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product)}>
         В корзину
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;