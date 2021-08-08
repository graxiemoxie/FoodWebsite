import React, { useState } from "react";
import "./ViewCart.css";
import Cart from "../../components/Cart/Cart";

function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="cart-page-container">
      <header>
        <div className="cart-page-overlay-bg">
          <div className="cart-page-close">
            <i class="fa fa-times"></i>
          </div>
          <div className="cart-page-header-title">
            <h1>Cart Page</h1>
          </div>
        </div>
      </header>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default ViewCart;
