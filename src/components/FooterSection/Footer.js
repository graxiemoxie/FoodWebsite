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
            <i class="fa fa-facebook-square"></i>
          </a>
        </span>
        <span>
          <a href="/twitter">
            <i class="fa fa-twitter-square"></i>
          </a>
        </span>
        <span>
          <a href="/instagram">
            <i class="fa fa-instagram"></i>
          </a>
        </span>
        <span>
          <a href="/linkedin">
            <i class="fa fa-linkedin"></i>
          </a>
        </span>
      </div>
      {/* <div className="newsletter">
        <h3>Newsletter</h3>
        <div className="newsletter-input">
          <input type="text" name="newsletter" id="newsletter" />
        </div>
      </div> */}
    </section>
  );
}

export default Footer;
