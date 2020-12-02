import React from "react";
import "./Contact.css";
import purplebox from "../Images/box_purple.jpg";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container">
        <section className="contact-container-desktop">
          <p>
            Email:{" "}
            <a href="mailto:studiojoeythomas@gmail.com?subject=Inquiry">
              studiojoeythomas@gmail.com
            </a>
            <br />
            Instagram:{" "}
            <a
              href={"https://www.instagram.com/joey_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              @joey_
            </a>
          </p>
        </section>

        <div className="contact-image-container-desktop">
          <img src={purplebox} alt="artwork" />
        </div>


        <section className="contact-container-mobile">

        <div className="contact-image-container-mobile">
          <img src={purplebox} alt="artwork" />
        </div>

          <p>
            Email:{"  "}
            <a href="mailto:studiojoeythomas@gmail.com?subject=Inquiry" className="contact-mobile-email">
              studiojoeythomas@gmail.com 
            </a>
            <br />
            <br />
            Instagram:  {"  "}
            <a
              href={"https://www.instagram.com/joey_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              @joey_
            </a>
          </p>
        </section>

      </div>
      
    );
  }
}

export class ContactMobile extends React.Component {
  render() {
    return (
      <div className="mobile-contact-container">
        <section className="mobile- contact-container-desktop">
          <p>
            Email:{" "}
            <a href="mailto:studiojoeythomas@gmail.com?subject=Inquiry">
              studiojoeythomas@gmail.com
            </a>
            <br />
            Instagram:{" "}
            <a
              href={"https://www.instagram.com/joey_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              @joey_
            </a>
          </p>
        </section>

        <div className="contact-image-container-desktop">
          <img src={purplebox} alt="artwork" />
        </div>


        <section className="contact-container-mobile">

        <div className="contact-image-container-mobile">
          <img src={purplebox} alt="artwork" />
        </div>

          <p>
            Email:{"  "}
            <a href="mailto:studiojoeythomas@gmail.com?subject=Inquiry" className="contact-mobile-email">
              studiojoeythomas@gmail.com 
            </a>
            <br />
            <br />
            Instagram:  {"  "}
            <a
              href={"https://www.instagram.com/joey_"}
              target="_blank"
              rel="noopener noreferrer"
            >
              @joey_
            </a>
          </p>
        </section>

      </div>
      
    );
  }
}

