import React from "react";
import "./Protein.css";
import GlazedRoastedChicken from "../../../assets/ProteinImg/glazed-roasted-chicken.png";
import GrilledFish from "../../../assets/ProteinImg/grilled-fish.jpg";
import PrawnInBatter from "../../../assets/ProteinImg/prawn-in-batter.jpg";

class Protein extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      proteinMenu: [
        {
          id: 15,
          name: "Glazed Roasted Chicken",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$8.00",
          img: GlazedRoastedChicken,
        },
        {
          id: 16,
          name: "Grilled Fish",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$6.00",
          img: GrilledFish,
        },
        {
          id: 17,
          name: "Prawn in Batter",
          description:
            "Incredible orzo-based salad packed with crunchy vegetables and spinach, briny olives, and feta cheese.",
          price: "$8.00",
          img: PrawnInBatter,
        },
      ],
    };
  }

  render() {
    return (
      <div className="protein-container">
        <div className="title-dropdown">
          <h3>Protein</h3>
        </div>
        <div className="card-container">
          {this.state.proteinMenu.map((item, index) => {
            return (
              <ProteinList
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

const ProteinList = (props) => {
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

export default Protein;
