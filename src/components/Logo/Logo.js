import React from "react";
import "./Logo.css";
import logoImg from "../../assets/img/logoImg.png";

function Logo() {
  return (
    <div className="logo">
      <a href="#home">
        <div className="logo-container">
          <div className="logo-text">Savor</div>
          <div className="logo-line"></div>
        </div>
        <span>
          <img src={logoImg} alt="" className="logo-img" />
        </span>
      </a>
    </div>
  );
}

export default Logo;
