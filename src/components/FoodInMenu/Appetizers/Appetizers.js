import React from "react";
import "./Appetizers.css";
import BuffaloWingsImg from "../../../assets/AppetizersImg/buffalo-wings.jpg";
import ChickenSpinachEggrolls from "../../../assets/AppetizersImg/chicken-spinach-egg-rolls.jpg";
import RoastedCarrotsBlanket from "../../../assets/AppetizersImg/roated-carrots-blanket.jpg";
class Appetizers extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      appetizerMenu: [
        {
          id: 1,
          name: "Buffalo Chicken Wings",
          description:
            "Perfectly seasoned crispy buffalo wings with creamy blue cheese dip and fresh, crunchy celery",
          price: "$8.00",
          img: BuffaloWingsImg,
        },
        {
          id: 2,
          name: "Chicken Spinach Eggrolls",
          description:
            "Specially made with garlic chicken, spinach, gouda cheese, plus a red pepper salsa for dipping",
          price: "$5.00",
          img: ChickenSpinachEggrolls,
        },
        {
          id: 3,
          name: "Carrots in a Blanket",
          description:
            "Healthy and delicious Veggie appetizer for both kids and adults , paired with classic yellow mustard",
          price: "$7.00",
          img: RoastedCarrotsBlanket,
        },
      ],
    };
  }

  render() {
    return (
      <div className="appetizer-container">
        <div className="title-dropdown">
          <h3>Apppetizers</h3>
        </div>
        <div className="card-container">
          {this.state.appetizerMenu.map((item, index) => {
            return (
              <AppetizerList
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
        <div className="food-btn"></div>
      </div>
    );
  }
}

const AppetizerList = (props) => {
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

export default Appetizers;
