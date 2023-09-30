import React, { useEffect, useReducer, useRef, useState } from "react";
import "./stylesheets/ServiceList.css";
import Slider from "../components/Slider";
import SliderProgessBar from "./SliderProgessBar";
import placeholder from "../static/images/placeholder.png";

let itemsPerPage = 3;

const currentPageReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        currentPage:
          state.currentPage >= state.lastPage
            ? state.lastPage
            : state.currentPage + 1,
      };
    case "decrement":
      return {
        ...state,
        currentPage:
          state.currentPage <= 0
            ? (state.currentPage = 0)
            : state.currentPage - 1,
      };
    case "setCurrentPage":
      return { ...state, currentPage: action.value };
    case "setLastPage":
      return { ...state, lastPage: action.value };
    default:
      throw new Error("No such action over currentPageReducer");
  }
};

export default function ServiceList() {
  let services = [
    { img: placeholder },
    { img: placeholder },
    { img: placeholder },
    { img: placeholder },
    { img: placeholder },
    { img: placeholder },
    { img: placeholder },
    { img: placeholder },
    // { img: "https://via.placeholder.com/320/000000?text=2" },
    // { img: "https://via.placeholder.com/330/000000?text=3" },
    // { img: "https://via.placeholder.com/340/0000FF?text=4" },
    // { img: "https://via.placeholder.com/350/0000FF?text=5" },
    // { img: "https://via.placeholder.com/310/0000FF?text=6" },
    // { img: "https://via.placeholder.com/310/0000FF?text=7" },
    // { img: "https://via.placeholder.com/310/0000FF?text=8" },
    // { img: "https://via.placeholder.com/310/0000FF?text=9" },
    // { img: "https://via.placeholder.com/310/0000FF?text=10" },
    // { img: "https://via.placeholder.com/310/0000FF?text=11" },
    // { img: "https://via.placeholder.com/310/0000FF?text=12" },
    // { img: "https://via.placeholder.com/310/0000FF?text=13" },
  ];

  // To be re-enginereed...
  // Temporary solution
  const [itemCount, setItemCount] = useState(services.length);
  const [pageCount, setPageCount] = useState(0);
  const [stateCurrentPage, dispatchCurrentPage] = useReducer(
    currentPageReducer,
    {
      currentPage: 0,
      lastPage: 0,
    }
  );
  const sliderRef = useRef();

  const moveToPrevPage = (sliderID) => {
    const slider = document.querySelector(`#slider-${sliderID}`);

    dispatchCurrentPage({
      type: "decrement",
    });
  };

  const moveToNextPage = (sliderID) => {
    const slider = document.querySelector(`#slider-${sliderID}`);

    dispatchCurrentPage({
      type: "increment",
    });
  };

  const setCurrentPage = (idx) => {
    const slider = document.querySelector(`#slider-${sliderRef.current.ID}`);

    dispatchCurrentPage({
      type: "setCurrentPage",
      value: idx,
    });
  };

  useEffect(() => {
    const slider = document.querySelector(`#slider-${sliderRef.current.ID}`);
    const pages = Math.ceil(
      services.length /
        parseInt(getComputedStyle(slider).getPropertyValue("--items-per-page"))
    );
    const lastpage = pages - 1;
    setPageCount(pages);

    dispatchCurrentPage({
      type: "setLastPage",
      value: lastpage,
    });
  }, []);

  useEffect(() => {
    const slider = document.querySelector(`#slider-${sliderRef.current.ID}`);
    const left_handle = slider.parentNode.querySelector(".left-handle");
    const right_handle = slider.parentNode.querySelector(".right-handle");

    slider.style.setProperty("--slider-index", stateCurrentPage.currentPage);

    if (stateCurrentPage.lastPage === 0) {
      left_handle.style.opacity = 0;
      right_handle.style.opacity = 0;
    } else if (stateCurrentPage.currentPage === 0) {
      left_handle.style.opacity = 0;
      right_handle.style.opacity = 1;
    } else if (stateCurrentPage.currentPage === stateCurrentPage.lastPage) {
      left_handle.style.opacity = 1;
      right_handle.style.opacity = 0;
    } else {
      left_handle.style.opacity = 1;
      right_handle.style.opacity = 1;
    }
  }, [stateCurrentPage]);

  useEffect(() => {
    setItemCount(services.length);
    const slider = document.querySelector(`#slider-${sliderRef.current.ID}`);

    setPageCount(
      Math.ceil(
        services.length /
          parseInt(
            getComputedStyle(slider).getPropertyValue("--items-per-page")
          )
      )
    );
  }, [services]);

  return (
    <>
      <Slider
        containerClassName="serviceList"
        childrenClassName="service"
        itemsPerPage={itemsPerPage}
        ref={sliderRef}
        moveToPrevPage={moveToPrevPage}
        moveToNextPage={moveToNextPage}
      >
        {services}
      </Slider>
      <SliderProgessBar
        pageCount={pageCount}
        itemCount={itemCount}
        currentPage={stateCurrentPage.currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
