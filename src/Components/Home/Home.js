import React from "react";
import "./Home.css";
// import purplebox from "../Images/purplebox.jpg";
// import purple_mobile from "../Images/1B.jpg";
// import purp from "../Images/purp.mp4";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-item">
          <p className="home-caption">
            Installation view of <span>Light Box XVI</span> at Christie's
            Rockefeller Center, New York City, 2019
          </p>
        </div>
      </div>
    );
  }
}
