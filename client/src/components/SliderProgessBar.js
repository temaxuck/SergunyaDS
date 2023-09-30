import React, { useEffect, useState } from "react";
import "./stylesheets/SliderProgressBar.css";

const Page = ({ idx, isActive, setCurrentPage, ...props }) => {
  const cls = "progress-tick" + (isActive ? " active" : "");
  return (
    <div
      className={cls}
      key={idx}
      onClick={() => {
        setCurrentPage(idx);
      }}
    ></div>
  );
};

export default function SliderProgessBar({
  pageCount,
  itemCount,
  currentPage,
  setCurrentPage,
  ...props
}) {
  const [progressBar, setProgressBar] = useState([]);

  // useEffect(() => {
  //   let slider = sliderRef.current;
  //   setPageCount(Math.ceil(itemCount / slider.state.itemsPerPage));
  // }, [itemCount]);

  useEffect(() => {
    // console.log(currentPage);
    setProgressBar(() => {
      let pb = [];
      for (let i = 0; i < pageCount; i++)
        pb.push(
          <Page
            idx={i}
            isActive={i === currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      return pb;
    });
  }, [currentPage, pageCount]);

  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar">{progressBar}</div>
    </div>
  );
}
