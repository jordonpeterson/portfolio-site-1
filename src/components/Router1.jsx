import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home1 from "./Home1";
import AboutMe from "./AboutMe1";
import Body1 from "./Body1";
import Carousel1 from "./Carousel1";
import AboutMe1 from "./AboutMe1";

class Router1 extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            path="/aboutme"
            exact
            component={props => (
              <Body1 top={<AboutMe1 />} bottom={<Carousel1 />} />
            )}
          />
          <Route path="/projects/:id" component={AboutMe} />
          <Route path="/projects" component={AboutMe} />
          <Route
            exact
            path="/"
            component={props => (
              <Body1 top={<Home1 />} bottom={<Carousel1 />} />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Router1;
