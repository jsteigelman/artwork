import React from "react";
import "./App.css";
import { Home } from "../Home/Home";
import { Work } from "../Work/Work";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Nav } from "../Nav/Nav";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

ReactGA.initialize("UA-203154360-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <div className="app-container">
      <div className="app-container-nav">
        <Nav />
      </div>

      <div className="app-container-content">
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </div>


    </Router>
  );
}

export default App;
