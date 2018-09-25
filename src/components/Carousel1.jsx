import React, { Component, Fragment } from "react";
import MainPicture from "../MainPicture";
import CarouselItem from "./CarouselItem1";
import { Link } from "react-router-dom";

class Carousel1 extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              class="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://tse2.mm.bing.net/th?id=OIP.CgGxj5S22eTtY4UeVfSNpAHaEK&pid=15.1&P=0&w=320&h=181"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <CarouselItem
                image="https://tse2.mm.bing.net/th?id=OIP.CgGxj5S22eTtY4UeVfSNpAHaEK&pid=15.1&P=0&w=320&h=181"
                text="This is the text for this stuff"
                link="/"
                linkTitle="Home"
                github="https://github.com/jordonpeterson"
              />
            </div>
            <div class="carousel-item ">
              <img
                class="d-block w-100"
                src="https://tse4.mm.bing.net/th?id=OIP.8FnTIBk5NmXuhWxlV6lP4wHaCE&pid=15.1&P=0&w=553&h=155"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Carousel1;
