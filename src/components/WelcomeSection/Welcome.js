import React from "react";
import "./Welcome.css";
import Button from "../Button/Button";

function Welcome() {
  return (
    <div className="welcome-section-container">
      <div className="hero-title-section">
        <div className="hero-title">
          <h1>We Deliver the best Homemade food</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit Facilis a
            impedit eos nostrum quisquam.
            <span className="hidden-text">
              Explicabo doloremque quo nam nemo cupiditat.
            </span>
          </p>
        </div>
        <div className="hero-section-buttons">
          <a href="/ourMenu">
            <Button label="View Our Menu" />
          </a>
          <a href="/reservation">
            <Button label="Place your Order" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
