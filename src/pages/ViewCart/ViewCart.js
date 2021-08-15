import { useState } from "react";
import "./ViewCart.css";
import { Link } from "react-router-dom";
// import Cart from "../../components/Cart/Cart";

function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (foodItem) => {
    const exist = cartItems.find((food) => food.id === foodItem.id);
    if (exist) {
      setCartItems(
        cartItems.map((food) =>
          food.id === foodItem.id ? { ...exist, qty: exist.qty + 1 } : food
        )
      );
    } else {
      setCartItems([...cartItems, { ...foodItem, qty: 1 }]);
    }
  };

  return (
    <div className="cart-page-container">
      <header>
        <div className="cart-page-overlay-bg">
          <div className="cart-page-close">
            <Link to="/ourMenu" className="close-cart">
              <i className="fa fa-times"></i>
            </Link>
          </div>
          <div className="cart-page-header-title">
            <h1>Cart Page</h1>
          </div>
        </div>
      </header>

      {/* <Cart cartItems={cartItems} addToCart={addToCart} /> */}
      <div>
        <h2>My Cart</h2>
        <div>{cartItems.length === 0 && <div>cart is empty</div>}</div>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <div className="cart-image">
                <img src={item.img} alt="food" />
              </div>
              <div className="cart-btn">
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => addToCart(item)}>-</button>
              </div>
              <div className="price">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewCart;
