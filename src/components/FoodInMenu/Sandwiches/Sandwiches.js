import React from "react";
import "./Sandwiches.css";
import HamSandwich from "../../../assets/SandwichesImg/ham-sandwich.jpg";
import SteakSandwich from "../../../assets/SandwichesImg/steak-sandwich.jpg";
import VeggieSandwich from "../../../assets/SandwichesImg/veggie-sandwich.jpg";

class Sandwiches extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      sandwichMenu: [
        {
          id: 10,
          name: "Ham Sandwich",
          description:
            "Ham Sandish made with few fresh herbs mixed with some olive oil.",
          price: "$4.00",
          img: HamSandwich,
        },
        {
          id: 11,
          name: "Steak Sandwich",
          description:
            "Juicy steak sandwich, with tender  beef slices, caramelised onion, garlic aioli, mustard, lettuce and tomato",
          price: "$5.00",
          img: SteakSandwich,
        },
        {
          id: 12,
          name: "Veggie Sandwich",
          description:
            "Creamy and saucy sandwich packed to the gills with veggies.",
          price: "$4.00",
          img: VeggieSandwich,
        },
      ],
    };
  }

  render() {
    return (
      <div className="sandwiches-container">
        <div className="title-dropdown">
          <h3>Sandwiches</h3>
        </div>
        <div className="card-container">
          {this.state.sandwichMenu.map((item, index) => {
            return (
              <SandwichList
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

const SandwichList = (props) => {
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

export default Sandwiches;
