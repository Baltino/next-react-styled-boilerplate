import React from "react";
import { any } from "prop-types";
import { animated } from "react-spring";

const points = `22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 
  16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 
  16.2381006 33.6749141 27.1309497 36.3129534 42.5118994`;

const propTypes = {
  stroke: any
};
const Star = ({ stroke }) => {
  return (
    <animated.svg 
      style={{
        margin: "20px",
        width: "80px",
        height: "80px",
      }}
      viewBox="0 0 45 44" 
      strokeWidth="2" 
      fill="white" 
      stroke="rgb(45, 55, 71)" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeDasharray={stroke}
    >
      <polygon points={points} />
    </animated.svg>
  )
}

Star.propTypes = propTypes;

export default Star;