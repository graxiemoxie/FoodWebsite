import React from "react";
import "./Burgers.css";
import CheeseBurger from "../../../assets/BurgersImg/classic-cheese-burger.jpeg";
import ChickenBurger from "../../../assets/BurgersImg/crispy-chicken-burger.jpg";
import LambBurger from "../../../assets/BurgersImg/greek-lamb-burger.jpg";

class Burgers extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      burgerMenu: [
        {
          id: 4,
          name: "Classic Cheese Burger",
          description:
            "Succulent and juicy cheese burger, stuffed with the right toppings.",
          price: "$7.00",
          img: CheeseBurger,
        },
        {
          id: 5,
          name: "Crispy Chicken Burger",
          description:
            "Well seasoned crispy fried chicken marinated in buttermilk",
          price: "$6.00",
          img: ChickenBurger,
        },
        {
          id: 6,
          name: "Classic Cheese Burger",
          description:
            "Homely lamb burger with flavorful Greek twist that takes it to another level of addictive!",
          price: "$7.00",
          img: LambBurger,
        },
      ],
    };
  }

  render() {
    return (
      <div className="burger-container">
        <div className="title-dropdown">
          <h3>Burgers</h3>
        </div>
        <div className="card-container">
          {this.state.burgerMenu.map((item, index) => {
            return (
              <BurgersList
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

const BurgersList = (props) => {
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

export default Burgers;
