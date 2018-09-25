import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class CarouselItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          {" "}
          <Link to={this.props.link}>
            {" "}
            <img src={this.props.image} className="col" />
          </Link>
          <div className="col">
            {" "}
            <a href={this.props.github}>Check out my Github!</a>
            <p>{this.props.text}</p>{" "}
            <Link to={this.props.link}>{this.props.linkTitle}</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CarouselItem;
