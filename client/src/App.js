import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PixiStage from "./components/PixiStage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

const stageRatio = 1.77;

function App() {
  const [windowRatio, setWindowRatio] = useState([
    window.innerWidth / window.innerHeight,
  ]);
  const [shouldRenderStage, setShouldRenderStage] = useState(true);

  useEffect(() => {
    const resize = () => {
      setWindowRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize, false);
  }, []);

  useEffect(() => {
    if (windowRatio >= stageRatio) setShouldRenderStage(true);
    else setShouldRenderStage(false);
  }, [windowRatio]);

  return (
    <>
      {shouldRenderStage && (
        <PixiStage stageClass={"backgroundStage"}></PixiStage>
      )}
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
