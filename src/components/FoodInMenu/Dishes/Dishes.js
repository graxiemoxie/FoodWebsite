import React from "react";
import "./Dishes";
import ChickenFriedRice from "../../../assets/DishesImg/chicken-fried-rice.jpg";
import JambalayaPasta from "../../../assets/DishesImg/jambalaya-pasta.png";
import TomatoShrimpPasta from "../../../assets/DishesImg/tomato-shrimp-pasta.jpg";

class Dishes extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      dishesMenu: [
        {
          id: 7,
          name: "Jambalaya Pasta",
          description:
            "Nicely made Jambalaya Pasta with chicken, Andouille sausage, shrimp, and all the Cajun flavor.",
          price: "$13.00",
          img: JambalayaPasta,
        },
        {
          id: 8,
          name: "Chicken Fried Rice",
          description:
            "Delicious long rice with moist and tender chicken with flavorful peas and carrots",
          price: "$11.00",
          img: ChickenFriedRice,
        },
        {
          id: 9,
          name: "Tomato Shrimp Pasta",
          description:
            "Mouthwatering Pasta made with spicy tomato sauce and shrimp incredibly loaded with flavor.",
          price: "$10.00",
          img: TomatoShrimpPasta,
        },
      ],
    };
  }

  render() {
    return (
      <div className="dishes-container">
        <div className="title-dropdown">
          <h3>Dishes</h3>
        </div>
        <div className="card-container">
          {this.state.dishesMenu.map((item, index) => {
            return (
              <DishList
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const DishList = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.img} alt="" />
      </div>
      <div className="card-content-container">
        <div className="food-name">{props.name}</div>
        <div className="food-decription">{props.description}</div>
        <div className="food-price">{props.price}</div>
      </div>
      <div className="card-btn">
        <a href="/buy">Buy</a>
      </div>
    </div>
  );
};

export default Dishes;
