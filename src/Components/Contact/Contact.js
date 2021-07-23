import React from "react";
import "./Contact.css";
import purplebox from "../Images/box_purple.jpg";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-container-image">
          <img src={purplebox} alt="artwork" />
        </div>
        <div>
        <p>
          Email:{"  "}
          <a
            href="mailto:hello@joeysteigelman.com?subject=Inquiry"
            className="contact-mobile-email"
          >
            hello@joeysteigelman.com
          </a>
          <br />
          <br />
          Instagram: {"  "}
          <a
            href={"https://www.instagram.com/joey_"}
            target="_blank"
            rel="noopener noreferrer"
          >
            @joey_
          </a>
        </p>
        </div>

      </div>
    );
  }
}
