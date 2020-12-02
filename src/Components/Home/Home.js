import React from "react";
import "./Home.css";
import purplebox from "../Images/purplebox.jpg";
// import mobilepurplebox from "../Images/1C.jpg";
// import { Marquee } from "../Marquee/Marquee";
// import purplegif from "../Images/LightBoxXVI.mp4";
import purp from "../Images/purp.mp4";


export class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-item">

              {/* <Marquee /> */}

          <img src={purplebox} alt="artwork" />
          <p className="home-caption">
            Installation view of <span>Light Box XVI</span> at Christie's Rockefeller Center, New York City, 2019
          </p>
        </div>

        <div className="mobile-home-item">
          {/* <img src={mobilepurplebox} alt="artwork" /> */}

        <div className="mobile-home-imageRowTwo"> 
        <video autoPlay loop muted playsInline>
          <source src={purp} type="video/mp4" />
        </video>
        </div>

          <p className="mobile-home-caption">
            Installation view of <span>Light Box XVI</span> at Christie's Rockefeller Center, New York City, 2019
          </p>

        </div>
        
      </div>
    );
  }
}
