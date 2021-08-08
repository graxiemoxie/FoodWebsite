import React from "react";
import "./MenuPage.css";
import FoodMenu from "../../components/FoodInMenu/FoodMenu/FoodMenu";
import MenuSearch from "../../components/MenuSearchOptions/MenuSearchOptions";

function MenuPage() {
  return (
    <div className="menu-page-body">
      <div className="menu-page-container">
        <div className="menu-page-heading">
          <h1>Menu</h1>
        </div>
        <div className="selection-section">
          <MenuSearch />
        </div>
        <FoodMenu />

        <div className="menu-page-btn-container">
          <a href="/viewcart">View Cart</a>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
