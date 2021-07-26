import React from "react";
import "./MenuPage.css";
import Appetizers from "../../components/FoodInMenu/Appetizers/Appetizers";
import MenuSearch from "../../components/MenuSearchOptions/MenuSearchOptions";
import Burgers from "../../components/FoodInMenu/Burgers/Burgers";
import Dishes from "../../components/FoodInMenu/Dishes/Dishes";
import Sandwiches from "../../components/FoodInMenu/Sandwiches/Sandwiches";
import Salads from "../../components/FoodInMenu/Salads/Salads";
import Protein from "../../components/FoodInMenu/Protein/Protein";
import Cakes from "../../components/FoodInMenu/Cakes/Cakes";
import Drinks from "../../components/FoodInMenu/Drinks/Drinks";

class MenuPage extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="menu-page-body">
        <div className="menu-page-container">
          <div className="menu-page-heading">
            <h1>Menu</h1>
          </div>
          <div className="selection-section">
            <MenuSearch />
          </div>
          <Appetizers />
          <Burgers />
          <Dishes />
          <Sandwiches />
          <Salads />
          <Protein />
          <Cakes />
          <Drinks />
        </div>
      </div>
    );
  }
}

export default MenuPage;
