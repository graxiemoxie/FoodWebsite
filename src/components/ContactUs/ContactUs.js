import React from "react";
import "./ContactUs.css";
import GoogleApiWrapper from "../GoogleApiWrapper";

function ContactUs() {
  return (
    <section id="contact-us-section">
      <div className="contact-info-container">
        <div className="contact-info">
          <div className="contact-details">
            <h2>Get in touch with us</h2>
            <div className="address">
              <h3>Address</h3>
              <div className="address-outter-container">
                <span>
                  <i class="fa fa-map-marker"></i>
                </span>
                <span className="address-container">
                  <span>46, Ojo street,</span>
                  <span>Ikeja,Lagos</span>
                </span>
              </div>
            </div>
            <div className="mobile-contact">
              <h3>Contact</h3>
              <div>
                <span className="phone-no">
                  <i class="fa fa-phone"></i>
                  <span>+23427207062</span>
                </span>
              </div>
              <div>
                <span className="phone-no">
                  <i class="fa fa-phone"></i>
                  <span>+23424730063</span>
                </span>
              </div>
              <div className="contact-email">
                <span className="mail">
                  <i class="fa fa-envelope"></i>
                  <span>nobodyknows@gmail.com</span>
                </span>
              </div>
            </div>
          </div>
          <div className="opening-time">
            <h2>Opening Hours</h2>

            <div className="days">
              <div className="weekdays">
                <h4>Weekdays:</h4>
                <span>
                  <p>mon-fridays: 8am - 10pm</p>
                </span>
              </div>
              <div className="weekends">
                <h4>Weekdays:</h4>
                <span>
                  <p>sat-sundays: 10am - 8pm</p>
                </span>
              </div>
            </div>
          </div>
          <div className="question-section">
            <h2>Have a question?</h2>
            <div className="question-form">
              <form>
                <div className="question-input-area">
                  <label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Fullname"
                    />
                  </label>
                </div>
                <div className="question-input-area">
                  <label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </label>
                </div>
                <div className="question-input-area">
                  <label>
                    <textarea
                      name="text"
                      rows="6"
                      cols="7"
                      wrap="soft"
                      className="message"
                      placeholder="Message"
                    ></textarea>
                  </label>
                </div>
              </form>
              <div className="question-section-btn">
                <a href="/submit">Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-info-container">
        <div className="map-info">
          <GoogleApiWrapper />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
