// import { useState } from "react";
import "./ViewCart.css";
import Cart from "../../components/Cart/Cart";

function ViewCart({ cartItems, addToCart, onCloseCartPage }) {
  return (
    <div className="cart-page-container">
      <header>
        <div className="cart-page-overlay-bg">
          <div className="cart-page-close">
            <i
              className="fa fa-times"
              onClick={() => {
                onCloseCartPage();
              }}
            ></i>
          </div>
          <div className="cart-page-header-title">
            <h1>Cart Page</h1>
          </div>
        </div>
      </header>

      <Cart cartItems={cartItems} addToCart={addToCart} />
    </div>
  );
}

export default ViewCart;
