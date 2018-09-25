import React, { Component, Fragment } from "react";
import MainPictureContainer from "../MainPictureContainer";

class Home1 extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <MainPictureContainer />
          </div>
          <div className="col-8">
            <br />
            <h6>
              Hi, I'm Jordon. My goal is to become a skilled software developer.
              I build lots of stuff in my sparetime and work hard to improve my
              skills. All of my showcased projects are custom built, not copied
              from tutorials (I get bored way too fast for those). Feel free to
              check out my Github and Linkedin via the links above.
            </h6>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home1;
