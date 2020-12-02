import React from "react";
import "./Test.css";
import navIcon from "../Images/Hamburger_icon.svg";
// import closeNavIcon from "../Images/close_menu.png";
import { Link } from "react-router-dom";

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  clickHandler = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    let menuMobile = null;

    if (this.state.visible) {
      menuMobile = (
        <ul className="mobile-nav-list">
          <li>
            <Link to="/home" onClick={this.clickHandler} className="lexi">
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={this.clickHandler}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={this.clickHandler}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={this.clickHandler}>
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
                  Joey <br /> Thomas
                </h1>
              </Link>
            </li>

            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu nav */}

        <div className="mobile-button">
          <nav className="mobile-nav-container">
            <div className="mobile-nav-name">
              <h1>Joey Thomas</h1>
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
