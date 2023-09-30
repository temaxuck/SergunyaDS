import React, { useState, useRef, useEffect } from "react";

import { withFilters, Container, Sprite } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter,
});

const ParallaxImage = ({
  displacementConfig,
  stageDimensions,
  img,
  imgMap,
  ...props
}) => {
  // states
  const [renderFilter, setRenderFilter] = useState(false);
  const [ratio, setRatio] = useState(1.77);

  const bgSpriteRef = useRef();
  const bgMapSpriteRef = useRef();

  const scaleToFitScreen = (spriteRef) => {
    [spriteRef.current.width, spriteRef.current.height] = [
      stageDimensions[0],
      stageDimensions[0] / ratio,
    ];
    spriteRef.current.y = stageDimensions[1] / 2 - spriteRef.current.height / 2;
  };

  useEffect(() => {
    setRenderFilter(true);
    if (renderFilter)
      if (bgSpriteRef.current) {
        scaleToFitScreen(bgSpriteRef);
        scaleToFitScreen(bgMapSpriteRef);
      }
  }, [renderFilter, ratio, stageDimensions]);

  return (
    <>
      <Sprite
        image={imgMap}
        ref={bgMapSpriteRef}
        // width={stageDimensions[0]}
        // height={stageDimensions[1]}
      />
      {renderFilter && (
        <Filters
          displacement={{
            construct: [bgMapSpriteRef.current],
            scale: { x: displacementConfig.x, y: displacementConfig.y },
          }}
        >
          <Sprite
            image={img}
            ref={bgSpriteRef}
            // width={stageDimensions[0]}
            // height={stageDimensions[1]}
          />
        </Filters>
      )}
    </>
  );
};

export default ParallaxImage;
