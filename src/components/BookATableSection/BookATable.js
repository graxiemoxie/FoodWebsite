import React from "react";
import "./BookATable.css";
import Button from "../../components/Button/Button";
import backgroundVideo from "../../assets/video/reservation-video.mp4";

function BookATable() {
  return (
    <section id="book-a-table-section">
      <div className="video-container">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          className="reservation-bg-video"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="video-content-wrapper">
        <div className="video-content">
          <h1 className="video-content-heading">Make a Reservation</h1>
          <form>
            <div className="input-area">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="input-area">
              <label>date</label>
              <input type="date" name="date" id="date" />
            </div>
            <div className="input-area">
              <label>
                No of guests <i className="fa fa-user"></i>
              </label>
              <input type="number" name="number" id="number" />
            </div>
            <div className="input-area">
              <label>time</label>
              <input type="time" name="time" id="time" />
            </div>
          </form>
          <Button label="Confirm" type="submit" />
        </div>
      </div>
    </section>
  );
}

export default BookATable;
