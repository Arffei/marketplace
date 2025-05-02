import React from "react";
import { Offcanvas, Button, ListGroup, Badge } from "react-bootstrap";
import { BsCartX } from "react-icons/bs";

const Cart = ({ showCart, handleCloseCart, cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Корзина</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <BsCartX size={50} className="text-muted" />
            <p>Корзина пуста</p>
          </div>
        ) : (
          <>
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6>{item.title}</h6>
                      <small>
                        {item.quantity} × {item.price} руб.
                      </small>
                    </div>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      ×
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="mt-3">
              <h5>
                Итого: <Badge bg="secondary">{totalPrice} руб.</Badge>
              </h5>
              <Button 
                variant="success" 
                className="w-100 mt-2" 
                disabled={cartItems.length === 0}
              >
                Оформить заказ
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;