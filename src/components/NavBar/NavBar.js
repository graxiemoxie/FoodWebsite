import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavBar: false,
    };
  }

  render() {
    return (
      <div>
        <div className="nav-container">
          <Logo />
          <div
            className={`nav-items ${this.state.showNavBar ? "active-nav" : ""}`}
          >
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#menu-section-container">Menu</a>
                </li>
                <li>
                  <a href="#about-us-section">About us</a>
                </li>
                <li>
                  <a href="#book-a-table-section">Contact us</a>
                </li>
                <li>
                  <a href="/delivery">Delivery</a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`hamburger ${this.state.showNavBar ? "active" : ""}`}
            onClick={() => this.toggle()}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }

  toggle() {
    this.setState({
      showNavBar: !this.state.showNavBar,
    });
  }
}

export default NavBar;
