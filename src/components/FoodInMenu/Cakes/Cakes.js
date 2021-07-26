import React from "react";
import AndesMintCake from "../../../assets/CakesImg/andes-mint-cake.jpg";
import ChocolateBrownies from "../../../assets/CakesImg/chocolate-brownies.jpg";
import StrawberryCake from "../../../assets/CakesImg/strawberry-cake.jpg";

class Cakes extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      cakesMenu: [
        {
          id: 18,
          name: "Andes Mint Cake",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$12.00",
          img: AndesMintCake,
        },

        {
          id: 19,
          name: "Strawberry Cake",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$8.00",
          img: StrawberryCake,
        },
        {
          id: 20,
          name: "Chocolate Brownies",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$11.00",
          img: ChocolateBrownies,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="title-dropdown">
          <h3>Cakes</h3>
        </div>
        <div className="card-container">
          {this.state.cakesMenu.map((item, index) => {
            return (
              <CakesList
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

const CakesList = (props) => {
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

export default Cakes;
