import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PracticeComponent from "./PracticeComponent";
import Home1 from "./Home1";
import AboutMe from "./AboutMe1";

class Router1 extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" component={Home1} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/projects/:id" component={AboutMe} />
          <Route path="/projects" component={AboutMe} />
        </Switch>
      </Fragment>
    );
  }
}

export default Router1;
