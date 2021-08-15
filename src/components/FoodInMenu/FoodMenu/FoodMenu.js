import { useState } from "react";
import "./FoodMenu.css";
import FoodCard from "../../FoodCard/FoodCard";

const FoodMenu = (props) => {
  const { menuData, addToCart } = props;

  return (
    <div>
      <div>
        {menuData.map((foodList, index) => {
          const { foodTitle, theMenu } = foodList;
          return (
            <div key={index}>
              <h3 className="title-dropdown">{foodTitle}</h3>
              <div className="card-container">
                {theMenu.map((foodItem) => {
                  return (
                    <FoodCard
                      foodItem={foodItem}
                      key={foodItem.id}
                      addToCart={addToCart}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodMenu;
