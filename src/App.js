import React, { Component, Fragment } from "react";
import "./App.css";
import NavBar1 from "./components/NavBar1.jsx";
import Router1 from "./components/Router1";
import Carousel1 from "./components/Carousel1";

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
          <main className="row">
            <div className="col">
              {""}
              <Router1 />
            </div>
          </main>
          <footer className="row">
            <div className="col">
              <Carousel1 />
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default App;
