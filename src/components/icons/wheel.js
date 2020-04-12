import React from "react";
import { any } from "prop-types";
import { animated } from "react-spring";
import styled from "styled-components";

const StyledSvg = styled.svg`
  margin: 10px auto;

  .circle-bg {
    fill: none;
    stroke: rgba(0, 0, 0, 0.1);
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke: mediumseagreen;
  }

  .percentage {
    font-size: 0.5em;
    text-anchor: middle;
  }
`;

const propTypes = {
  stroke: any,
  otherStroke: any,
};

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;


const Wheel = ({ stroke, otherStroke }) => {
  return (
    <StyledSvg viewBox="0 0 36 36" className="wheel" width="100">
      <path className="circle-bg" d={circlePath} />
      <animated.path
        className="circle"
        strokeDasharray={otherStroke}
        d={circlePath}
      />
      <animated.text x="18" y="20.35" className="percentage">
        {stroke}
      </animated.text>
    </StyledSvg>
  );
};

Wheel.propTypes = propTypes;

export default Wheel;
