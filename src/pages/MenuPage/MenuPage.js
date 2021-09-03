import { useState } from "react";
import "./MenuPage.css";
import FoodMenu from "../../components/FoodInMenu/FoodMenu/FoodMenu";
import MenuSearch from "../../components/MenuSearchOptions/MenuSearchOptions";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";
import ViewCart from "../ViewCart/ViewCart";

function MenuPage() {
  const {
    data: menuData,
    isPending,
    error,
  } = useFetch("http://localhost:8000/menuData");

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(foodItem) {
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
  }

  const showViewCartPage = () => {
    setShowCart(true);
  };

  const onCloseCartPage = () => {
    setShowCart(false);
    console.log("closed..");
  };

  return (
    <div className="menu-page-body">
      <div className="menu-page-container">
        <div className="menu-page-heading">
          <Link to="/" className="menu-home-btn">
            <span>Home</span>
          </Link>
          <h1>Menu</h1>
          <span className="badge">{cartItems.length}</span>

          <i className="fa fa-shopping-cart" onClick={showViewCartPage}>
            {showCart ? (
              <ViewCart
                cartItems={cartItems}
                addToCart={addToCart}
                onCloseCartPage={onCloseCartPage}
              />
            ) : null}
          </i>
        </div>
        <div className="selection-section">{/* <MenuSearch /> */}</div>
        {error && <div className="server-info">{error}</div>}
        {isPending && <div className="server-info">...fetching data</div>}
        {menuData && (
          <FoodMenu
            menuData={menuData}
            cartItems={cartItems}
            addToCart={addToCart}
          />
        )}

        <div className="menu-page-btn-container"></div>
      </div>
    </div>
  );
}

export default MenuPage;
