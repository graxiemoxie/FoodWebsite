import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cartItems, addToCart } = props;
  return (
    <div>
      <div className="cart-item-content">
        <h2>My Cart</h2>

        <div>{cartItems.length === 0 && <div>cart is empty</div>}</div>
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="cart-item-container">
              <div className="cart-image">
                <img src={item.img} alt="food" />
              </div>
              <div className="cart-btn">
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => addToCart(item)}>-</button>
              </div>
              <div className="price">
                {item.qty} x ${item.price}
              </div>
              <div className="remove-item-btn">
                <button>remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
