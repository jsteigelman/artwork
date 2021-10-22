import React from "react";
import "./Nav.css";
import navIcon from "../Images/Hamburger_icon.svg";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';


export class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  clickHandler = () => {
    this.setState({ visible: !this.state.visible });
  };

  // onClick={()=>{ this.clickHandler(); this.eventTrack("Page Link", "Home Page Link") }}
  // onClick = {this.eventTrack("Page Link", "Home Page Link")}

  // handle button click
  eventTrack = (category, action) => {
    ReactGA.event({
      category: category,
      action: action,
    });
  };

  render() {
    let menuMobile = null;

    if (this.state.visible) {
      menuMobile = (
        <ul className="mobile-nav-list">
          <li>
            <Link to="/home"   onClick={this.eventTrack.bind("Page Link", "Home Page Link")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/work"   onClick={this.eventTrack.bind("Page Link", "Work Page Link")}
            >
              Work
            </Link>
          </li>
          <li>
            <Link to="/about"   onClick={this.eventTrack.bind("Page Link", "About Page Link")}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/contact"   onClick={this.eventTrack.bind("Page Link", "Contact Page Link")}
            >
              Contact
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <>
        {/* Desktop menu nav  */}

        <nav className="desktop-nav-container">
          <ul className="desktop-nav-list">
            <li>
              <Link to="/home">
                {" "}
                <h1 className="desktop-nav-name">
                  Joey <br /> Steigelman
                </h1>
              </Link>
            </li>

            <li>
              <Link to="/home"   onClick = {this.eventTrack("Page Link", "Home Page Link")}
              >Home</Link>
            </li>
            <li>
              <Link to="/work"   onClick = {this.eventTrack("Page Link", "Work Page Link")}
              >Work</Link>
            </li>
            <li>
              <Link to="/about"   onClick = {this.eventTrack("Page Link", "About Page Link")}
              >About</Link>
            </li>
            <li>
              <Link to="/contact"   onClick = {this.eventTrack("Page Link", "Contact Page Link")}
              >Contact</Link>
            </li>
            <li className="built-by-footer">
              Website built by <br /> Joey Steigelman <br />© 2021
            </li>
          </ul>
        </nav>

        {/* Mobile menu nav */}

        <div className="mobile-button">
          <nav className="mobile-nav-container">
            <div className="mobile-nav-name">
              <Link to="/home">
                <h1>Joey Steigelman</h1>
              </Link>
            </div>

            <button
              onClick={this.clickHandler}
              className="mobile-menu-button-icon"
            >
              {this.state.visible === false ? (
                <img src={navIcon} alt="icon" />
              ) : (
                <svg viewPort="0 0 12 12" width="40" height="40">
                  <line
                    x1="10"
                    y1="30"
                    x2="30"
                    y2="10"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="10"
                    y1="10"
                    x2="30"
                    y2="30"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </button>
            {menuMobile}
          </nav>
        </div>
      </>
    );
  }
}
