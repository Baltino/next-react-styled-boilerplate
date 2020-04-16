import React from "react";
import { number, string, oneOfType } from "prop-types";

const propTypes = {
  height: oneOfType([number, string]),
  width: oneOfType([number, string])
}

const Lens = ({ height = 24, width = 24 }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    x="0px" y="0px" width={width}
    height={height} viewBox="0 0 24 24" style={{ "enable-background": "new 0 0 24 24" }} xmlSpace="preserve">
    <g id="Icons" style={{ opacity: 0.75 }}>
      <path id="search-big" d="M18.853,17.438l-3.604-3.604c-0.075-0.075-0.166-0.127-0.267-0.156C15.621,
      12.781,16,11.686,16,10.5C16,7.463,13.537,5,10.5,5S5,7.463,5,10.5S7.463,16,10.5,16c1.186,0,
      2.281-0.379,3.18-1.018c0.028,0.101,0.08,0.191,0.155,0.267l3.604,3.604c0.301,0.301,0.858,
      0.227,1.249-0.165C19.079,18.297,19.153,17.739,18.853,17.438z M10.5,14C8.568,14,7,12.432,7,10.5
      S8.568,7,10.5,7S14,8.568,14,10.5S12.432,14,10.5,14z"/>
    </g>
    <g id="Guides">
    </g>
  </svg>
);

Lens.propTypes = propTypes;

export default Lens;
