import React from "react";
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
  return (
    <>
      <div className="cart">
        <Button size="lg" variant="primary">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>1</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;
