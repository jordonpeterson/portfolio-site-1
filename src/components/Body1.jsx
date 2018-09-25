import React, { Component, Fragment } from "react";

class Body1 extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <main className="row">
          <div className="col">
            {""}
            {this.props.top}
          </div>
        </main>
        <footer className="row">
          <div className="col">{this.props.bottom}</div>
        </footer>
      </Fragment>
    );
  }
}

export default Body1;
