import React from "react";
import Margarita from "../../../assets/DrinksImg/margarita.jpg";
import Mimosa from "../../../assets/DrinksImg/pineapple-mango-mimosa.jpg";
import Soda from "../../../assets/DrinksImg/soda.jpg";

class Drinks extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      drinksMenu: [
        {
          id: 21,
          name: "Margarita",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$12.00",
          img: Margarita,
        },
        {
          id: 22,
          name: "Pineapple Mango Mimosa",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$12.00",
          img: Mimosa,
        },
        {
          id: 23,
          name: "Soda",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$12.00",
          img: Soda,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="title-dropdown">
          <h3>Drinks</h3>
        </div>
        <div className="card-container">
          {this.state.drinksMenu.map((item, index) => {
            return (
              <DrinksList
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
const DrinksList = (props) => {
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

export default Drinks;
