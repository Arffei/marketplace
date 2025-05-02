import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ title, price, image, onAddToCart }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price} руб.</Card.Text>
        <Button variant="primary" onClick={onAddToCart}>
          В корзину
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;