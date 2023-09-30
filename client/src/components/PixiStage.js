import React, { useState, useRef, useEffect } from "react";
import { Stage } from "@inlet/react-pixi";

import ParallaxImage from "./ParallaxImage";

import bg from "../static/assets/background2/orig.jpg";
import bg_map from "../static/assets/background2/orig_map.jpg";

const width = window.innerWidth;
const height = window.innerHeight;
const backgroundColor = 0x1d2330;

const config = {
  displacement: {
    x: 0,
    y: 0,
  },
};

const PixiStage = ({ stageClass, ...props }) => {
  const [displacementConfig, setDisplacementConfig] = useState(
    config.displacement
  );
  const [appDimensions, setAppDimensions] = useState([width, height]);

  useEffect(() => {
    window.onmousemove = (e) => {
      setDisplacementConfig({
        x: (width / 2 - e.clientX) / 14,
        y: (height / 2 - e.clientY) / 14,
      });

      const resize = () => {
        setAppDimensions([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize, false);
    };
  }, []);

  return (
    <Stage
      width={appDimensions[0]}
      height={appDimensions[1]}
      options={{ backgroundColor }}
      className={stageClass}
    >
      <ParallaxImage
        displacementConfig={displacementConfig}
        stageDimensions={appDimensions}
        img={bg}
        imgMap={bg_map}
      />
    </Stage>
  );
};

export default PixiStage;
