import React from "react";
import "./stylesheets/Home.css";
import ServiceList from "../components/ServiceList";

export default function Home() {
  return (
    <div className="site">
      <div className="site-wrapper">
        <div className="logo">
          <span className="mainlogo">Sergunya</span>
          <span className="sublogo">The digital sculptor</span>
        </div>
        <div className="services-wrapper">
          <div className="services-title">
            <span>Service / Commission list</span>
          </div>
          <ServiceList />
        </div>
      </div>
    </div>
  );
}
