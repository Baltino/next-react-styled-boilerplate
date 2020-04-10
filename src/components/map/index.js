import React from "react";
import { string, number, arrayOf, oneOf } from "prop-types";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

import Mark from "./marker";

const Map = ReactMapboxGl({
  accessToken: // TODO: change to .env
    "pk.eyJ1IjoibWF4aW1pbGlhbm9hcmFnb24iLCJhIjoiY2s4dTUweno4MDdmOTNmbWhwY3cyM3o4OSJ9.6AcgQIkMEvxHorsE8fFF4A"
});

const propTypes = {
  center: arrayOf(number),
  height: oneOf([string, number]),
  width: oneOf([string, number]),
  zoom: number
};
const MyMap = ({ 
  center = [-0.481747846041145, 51.3233379650232],
  height,
  width,
  zoom = [12],
  ...rest
}) => {
  
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height,
        width,
      }}
      center={center}
      zoom={zoom}
      {...rest}
    >
      <Marker coordinates={center}>
        <Mark />
      </Marker>
    </Map>
  );
};

MyMap.propTypes = propTypes;

export default MyMap;
