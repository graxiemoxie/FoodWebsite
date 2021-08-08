import { useState, useEffect } from "react";
import "./FoodMenu.css";
import menuData from "../../../menuData";
import FoodCard from "../../FoodCard/FoodCard";

const FoodMenu = () => {
  const [FoodMenu, setFoodMenu] = useState(menuData);
  return (
    <div>
      {menuData.map((foodlists) => {
        return (
          <div key={foodlists.foodTitle}>
            <h3 className="title-dropdown">{foodlists.foodTitle}</h3>
            <div className="card-container">
              {foodlists.theMenu.map((foodItem) => {
                return (
                  <FoodCard
                    key={foodItem.id}
                    name={foodItem.name}
                    price={foodItem.price}
                    description={foodItem.description}
                    img={foodItem.img}
                    menuData={menuData}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodMenu;
