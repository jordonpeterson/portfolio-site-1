import React, { Component, Fragment } from "react";
import "./App.css";
import NavBar1 from "./components/NavBar1.jsx";
import Router1 from "./components/Router1";
import Carousel1 from "./components/Carousel1";
import Home1 from "./components/Home1";
import Body1 from "./components/Body1";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <header className="row">
            <div className="col">
              <NavBar1 />
            </div>
          </header>
          <Router1 />
        </div>
      </Fragment>
    );
  }
}

export default App;
