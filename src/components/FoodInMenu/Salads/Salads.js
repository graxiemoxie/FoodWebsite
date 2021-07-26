import React from "react";
import "./Salads.css";
import GreekSalad from "../../../assets/saladsImg/greek-salad.jpg";
import OrzoSalad from "../../../assets/saladsImg/orzo-salad.jpg";

class Salads extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      saladMenu: [
        {
          id: 13,
          name: "Greek Salad",
          description:
            "Healthy salad loaded with lots of fresh veggies, olives and feta and tossed with a tangy lemon-herb vinaigrette.",
          price: "$4.00",
          img: GreekSalad,
        },
        {
          id: 14,
          name: "Orzo Salad",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$5.00",
          img: OrzoSalad,
        },
      ],
    };
  }

  render() {
    return (
      <div className="salads-container">
        <div className="title-dropdown">
          <h3>Salads</h3>
        </div>
        <div className="card-container">
          {this.state.saladMenu.map((item, index) => {
            return (
              <SaladList
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

const SaladList = (props) => {
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

export default Salads;
