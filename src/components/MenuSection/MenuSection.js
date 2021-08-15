import React from "react";
import "./MenuSection.css";
import { menuInfo } from "../menuInfo";
import Button from "../Button/Button";

class MenuSection extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      items: menuInfo,
    };
  }

  render() {
    return (
      <section id="menu-section-container">
        <h1 className="menu-section-heading">Our Menu</h1>
        <div className="menu-section-items-container">
          {this.state.items.map((item, index) => {
            return (
              <MenuSectionItems
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            );
          })}
        </div>
        <div className="menu-section-btn">
          <Button label="Tap to View our Menu" />
        </div>
      </section>
    );
  }
}

const MenuSectionItems = (props) => {
  return (
    <div className="menu-section-items">
      <div className="menu-section-image-container">
        <div className="menu-section-image">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className="menu-section-details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default MenuSection;
