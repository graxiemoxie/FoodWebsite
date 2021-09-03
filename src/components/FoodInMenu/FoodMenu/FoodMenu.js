import "./FoodMenu.css";
import FoodCard from "../../FoodCard/FoodCard";

const FoodMenu = (props) => {
  const { menuData, addToCart, cartItems } = props;

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
                      cartItems={cartItems}
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
