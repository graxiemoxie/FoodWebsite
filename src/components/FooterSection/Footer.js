import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <section className="footer">
      <Logo />

      <div className="social-media-links">
        <span>
          <a href="/facebook">
            <i className="fa fa-facebook-square"></i>
          </a>
        </span>
        <span>
          <a href="/twitter">
            <i className="fa fa-twitter-square"></i>
          </a>
        </span>
        <span>
          <a href="/instagram">
            <i className="fa fa-instagram"></i>
          </a>
        </span>
        <span>
          <a href="/linkedin">
            <i className="fa fa-linkedin"></i>
          </a>
        </span>
      </div>
    </section>
  );
}

export default Footer;
