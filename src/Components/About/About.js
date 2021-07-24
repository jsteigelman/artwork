import React from "react";
import "./About.css";
// import pinkgreen_light from "../Images/neon_pinkgreen_light_medium.jpg";
// import pinkgreen_banner from "../Images/neon_pinkgreen_banner.jpg";
import sunsetred from "../Images/sunset_red.jpg";

export class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-text">
          <div className="about-image-mobile">
            <img src={sunsetred} alt="artwork" />
          </div>
          <p>b. New York, New York</p>
          <h2>
            Joey Steigelman is an American artist living and working in New York
            City and Berlin, Germany.
          </h2>
          <p>
            Guided by an interest in visual perception, Steigelman explores
            color, light, materiality, and space. She addresses these themes in
            a diverse range of media including painting, neon, and acrylic
            resin. Steigelman has recently exhibited at Christie’s, New York
            (2020), Local Project, New York (2020), The Center for Holographic
            Arts x Plaxall Gallery, New York (2019), Cluster Gallery, New York
            (2019), Greenpoint Gallery, New York (2019), Blackbird Gallery, New
            York (2019), and Gallery 55, Brooklyn (2018). Steigelman was trained
            in painting at Parsons School of Design and Pratt Institute, and is
            a graduate of New York University.
          </p>
          <section className="about-presslinks">
            <p>
              Read an{" "}
              <a
                href="https://cultureworkmagazine.org/2020/02/23/carved-out-of-time/"
                target="_blank"
                rel="noopener noreferrer"
              >
                interview
              </a>{" "}
              with Joey Steigelman in Culturework Magazine (Feb. 2020).
            </p>
            <p>
              See Joey Steigelman's work featured as an{" "}
              <a
                href="https://www.christies.com/auctions/educate-a-charity-exhibition"
                target="_blank"
                rel="noopener noreferrer"
              >
                auction highlight
              </a>{" "}
              at Christie's New York for a charity auction presenting the work
              of global emerging artists (Feb. 2020).
            </p>
            {/* <p>
              Check out The Center for Holographic Arts' artist profile on Joey
              Steigelman{" "}
              <a
                href="http://holocenter.org/spacelight/2019/joey-steigelman"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              as part of the{" "}
              <a
                href="http://holocenter.org/exhibition/space-light-2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                SPACE:LIGHT
              </a>{" "}
              exhibition in New York City (Nov. 2019).
            </p> */}
            <p>
              Steigelman's work has been featured in Barrons (2019), Creative
              Time (2017), Hamptons Art Hub (2016), and mentioned in STIR
              (2019). Steigelman's work has also been featured on the official
              Instagram accounts of Christie's New York, Christie's Los Angeles,
              and Christie's Paris.{" "}
            </p>
          </section>
        </div>
        <div className="about-image-desktop">
          <img src={sunsetred} alt="artwork" />
        </div>
      </div>
    );
  }
}
