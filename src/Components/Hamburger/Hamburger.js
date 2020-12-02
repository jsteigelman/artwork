import React from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";

 class HamburgerTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
        };
      }
    
      clickHandler = () => {
        this.setState({ active: !this.state.active });
      };
    
      render() {
        let menuMobile = null;
    
        if (this.state.active) {
          menuMobile = (
            <ul className="mobile-menu-nav-folder-content">
              <li>
                <Link to="/home" onClick={this.clickHandler}>
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
        

            return (
      <div>
        <button 
        class="hamburger hamburger--vortex is-active"
        type="button"
        onClick={this.clickHandler}

        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    );
  }}
}
