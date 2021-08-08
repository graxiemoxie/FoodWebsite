import React from "react";
import "./AboutUs.css";
import Slideshow from "../Slideshow/Slideshow";

class AboutUs extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="about-us-section">
        <div className="about-us-slide-container">
          <div className="about-us-slide-inner-container">
            <div className="about-us-image-container">
              <Slideshow />
            </div>
          </div>
        </div>
        <div className="about-us-text-container">
          <div className="about-us-details">
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              placeat nesciunt quisquam ducimus voluptates minus aperiam
              consectetur.
              <span className="hidden-text">
                Repellat consequuntur at atque, ut illo, in voluptate aut
                voluptas ipsa qui similique.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
