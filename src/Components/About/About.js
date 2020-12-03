import React from "react";
import "./About.css";
import pinkgreen_light from "../Images/neon_pinkgreen_light_medium.jpg";
import pinkgreen_banner from "../Images/neon_pinkgreen_banner.jpg";

export class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-text">
          <div className="about-image-mobile">
            <img src={pinkgreen_banner} alt="artwork" />
          </div>
          <p>b. 1989, New York, New York</p>
          <h2>
            Joey Thomas is an American artist living and working in New York
            City and Berlin.
          </h2>
          <p>
            Guided by an interest in visual perception, Thomas explores color,
            light, materiality, and space. These themes are addressed by the artist
            in a diverse range of media including painting, neon, and acrylic
            resin. Thomas has exhibited at galleries, museums, and institutions,
            and recently participated in group exhibitions at Christie’s, New
            York (2020), Local Project, New York (2020), The Center for
            Holographic Arts x Plaxall Gallery, New York (2019), Cluster
            Gallery, New York (2019), Greenpoint Gallery, New York (2019), and
            Blackbird Gallery, New York (2019). Thomas was trained in painting
            at Parsons School of Design and Pratt Institute, and is a graduate
            of New York University.
          </p>
          <section className="about-presslinks">
            <p>
              Read an interview with Joey Thomas in Culturework Magazine (Feb.
              2020){" "}
              <a
                href="https://cultureworkmagazine.org/2020/02/23/carved-out-of-time/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              See Joey Thomas' work featured as an auction highlight at
              Christie's Rockefeller Center in New York City{" "}
              <a
                href="https://www.christies.com/auctions/educate-a-charity-exhibition"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for a charity auction presenting the work of global emerging
              artists (Feb. 2020).
            </p>
            <p>
              Check out The Center for Holographic Arts' artist profile on Joey
              Thomas{" "}
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
            </p>
            <p>
              Thomas' work has also been featured in Barrons (2019), Creative
              Time (2017), Hamptons Art Hub (2016), and mentioned in STIR
              (2019).{" "}
            </p>
          </section>
        </div>
        <div className="about-image-desktop">
          <img src={pinkgreen_light} alt="artwork" />
        </div>
      </div>
    );
  }
}
