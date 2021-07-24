import React from "react";
import "./Work.css";
import singlescoop from "../Images/singlescooplowq.jpg";
import dusk from "../Images/dusk.jpg";
import hologram from "../Images/hologram_winsor.jpg";
import bills from "../Images/bills.png";
import pinkgreen from "../Images/neon_pinkgreen_light_large.jpg";
// import sunset from "../Images/sunset.jpg";
import boxpurple from "../Images/box_purple.jpg";
import sunsetred from "../Images/sunset_red.jpg";
import sunsetpurple from "../Images/sunset_purple.jpg";
import boxblue from "../Images/box_blue.jpg";
import bills_two from "../Images/acrylic_podium.jpg";


export class Work extends React.Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-image-row">
          <img src={singlescoop} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              <span>Single Scoop (Strawberry Ice Cream Cone)</span>, 2019
              <br />
              acrylic resin and encapsulated object
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={hologram} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              <span>Three Tubes of Winsor & Newton Paint</span>, 2019
              <br />
              hologram
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={sunsetpurple} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Sunset (19 June 2017)</span>, 2018
              <br />
              neon tubing and wire with suspension frame
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={bills} alt="work-artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Three One-Dollar Bills</span>, 2018
              <br />
              acrylic resin and dollar bills
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={pinkgreen} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Pink/Green</span>, 2017
              <br />
              neon tubing and wire
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={boxpurple} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Light Box XVI</span>, 2019
              <br />
              mirrored acrylic with neon tubing and wire
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={dusk} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Dusk</span>, 2019
              <br />
              neon tubing and wire
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={bills_two} alt="work-artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Three One-Dollar Bills</span>, 2018
              <br />
              acrylic resin and dollar bills
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={sunsetred} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Sunset (8 April 2018)</span>, 2018
              <br />
              neon tubing and wire with suspension frame
            </p>
          </div>
        </div>

        <div className="work-image-row">
          <img src={boxblue} alt="artwork" />
          <div className="work-artwork-details">
            <p>
              {" "}
              <span>Light Box VI</span>, 2017
              <br />
              mirrored acrylic with neon tubing and wire
            </p>
          </div>
        </div>
      </div>
    );
  }
}
