import React from "react";
import "./Button.css";

const Button = ({ label, handleClick }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
