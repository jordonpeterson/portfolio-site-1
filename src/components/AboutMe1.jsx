import React, { Component, Fragment } from "react";
import MainPicture from "../MainPicture";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <hi>About Me</hi>
        <div className="row">
          <div className="col">
            <MainPicture />
          </div>{" "}
          <div className="col">
            <h6>
              I want to solve problems. Two years ago I was close to attending
              medical school. The process of shadowing physicians and
              interviewing at schools showed me that medicine wasn't the path I
              wanted. For the past year I have studied computer programming on
              my own and in a bootcamp to pursue my dream of becoming a skilled
              software engineer. Apart from computer programming I also enjoy
              sports, strategy games and volunteer work.
            </h6>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AboutMe;
