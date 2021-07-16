import React from "react";
import "./AboutUs.css";
import AboutUsImg from "../../assets/img/about-us-image.jpg";
import AboutUsImg2 from "../../assets/img/about-us-img2.jpg";
import AboutUsImg3 from "../../assets/img/about-us-img3.jpg";

class AboutUs extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: [AboutUsImg, AboutUsImg2, AboutUsImg3],
      currentIndex: 0,
    };
  }

  render() {
    return (
      <div id="about-us-section">
        <div className="about-us-slide-container">
          <div className="about-us-slide-inner-container">
            <div className="about-us-image-container">
              {this.state.images.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt="About Us"
                    key={index}
                    className="about-us-img"
                  />
                );
              })}
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
