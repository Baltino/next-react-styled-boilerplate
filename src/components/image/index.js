import React from "react";
import { string } from "prop-types";

const propTypes = {
  src: string,
  height: string,
  width: string,
};

const Image = ({ src, height, width, ...rest }) => (
  <img src={src} alt="⚡" height={height} width={width} loading="lazy" decoding="async" draggable={false} {...rest} />
);

Image.propTypes = propTypes;

export default Image;
