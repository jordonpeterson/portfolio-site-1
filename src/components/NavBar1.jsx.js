import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Glyph = styled.span`
background-color = black;
`;
class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/aboutme">
            AboutMe
          </Link>
          <div className="row ml-auto">
            <p className="col">
              <a
                className=""
                href={"https://www.linkedin.com/in/jordon-peterson"}
                target={"_blank"}
              >
                <Glyph>
                  {" "}
                  <i className="fab fa-linkedin" />
                </Glyph>
              </a>
            </p>
            <p className="col">
              <a
                href={"https://github.com/jordonpeterson"}
                className=""
                target={"_blank"}
              >
                <i className="fab fa-github-square" />
              </a>
            </p>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
