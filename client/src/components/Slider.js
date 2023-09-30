import React, { Children, Component, useEffect } from "react";
import "./stylesheets/Slider.css";

let SliderID = (() => {
  let id = 0;
  return () => {
    return id++;
  };
})();

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.moveToPrevPage = props.moveToPrevPage;
    this.moveToNextPage = props.moveToNextPage;
    this.state = {
      itemsPerPage: props.itemsPerPage ? props.itemsPerPage : 4,
    };

    this.ID = SliderID();
  }

  componentDidMount() {
    this.slider = document.querySelector(`#slider-${this.ID}`);
    this.slider.style.setProperty("--items-per-page", this.state.itemsPerPage);
  }

  render() {
    return (
      <>
        <div
          className={
            "container " +
            (this.props.containerClassName ? this.props.containerClassName : "")
          }
          id={`slider-container-${this.ID}`}
        >
          <div
            className="handle left-handle"
            onClick={() => this.moveToPrevPage(this.ID)}
          />
          <div className="slider" id={`slider-${this.ID}`}>
            {this.props.children.map((item) => (
              <div
                key={item}
                className={
                  "sliderItem " +
                  (this.props.childrenClassName
                    ? this.props.childrenClassName
                    : "")
                }
              >
                <a href="">
                  <img src={item.img} alt="Service cover" />
                </a>
              </div>
            ))}
          </div>
          <div
            className="handle right-handle"
            onClick={() => this.moveToNextPage(this.ID)}
          />
        </div>
        {/* <ProgressBar /> */}
      </>
    );
  }
}
