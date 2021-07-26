import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";
import "react-slideshow-image/dist/styles.css";
import AboutUsImg from "../../assets/img/about-us-image.jpg";
import AboutUsImg2 from "../../assets/img/about-us-img2.jpg";
import AboutUsImg3 from "../../assets/img/about-us-img3.jpg";

const slideImages = [AboutUsImg, AboutUsImg2, AboutUsImg3];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide className="slide">
        <div className="each-slide">
          <div
            style={{ backgroundImage: `url(${slideImages[0]})` }}
            className="img-container"
          >
            <span className="slide-info">nice homemade dishes</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{ backgroundImage: `url(${slideImages[1]})` }}
            className="img-container"
          >
            <span className="slide-info">Awesome drinks</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{ backgroundImage: `url(${slideImages[2]})` }}
            className="img-container"
          >
            <span className="slide-info">...and we bake</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
