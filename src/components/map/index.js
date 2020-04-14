import React from "react";
import { string, number, arrayOf, oneOfType } from "prop-types";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { MAPBOX_KEY } from "../../utils/constants";

import Mark from "./marker";

const Map = ReactMapboxGl({
  accessToken: MAPBOX_KEY  
});

const propTypes = {
  center: arrayOf(number),
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
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
