import React, { useState } from "react";
import { useSpring } from "react-spring";
import { config } from "react-spring/renderprops";
import { Flex } from "rebass/styled-components";


import Logo from "./logo";
import StarIcon from "./star";
import WheelIcon from "./wheel";

export default { title: "Icons" };

export const MiAudiencia = () => {
  return (
    <Flex flexDirection={"column"}>
      <Logo width={"200px"} height={"50px"} />
      <Logo animate={true} width={"400px"} height={"100px"} />
    </Flex>
  );
}

export const Wheel = () => {
  const [active, set] = useState(false);

  const props3 = useSpring({
    stroke: active ? 90 : 0,
    otherStroke: active ? "90, 100" : "0,100"
  });

  return (
    <div className="App" onClick={() => set(!active)}>
      <WheelIcon
        stroke={props3.stroke.interpolate(x => Math.round(x))}
        otherStroke={props3.otherStroke}
      />
    </div>
  );
}

export const Star = () => {
  const [active, set] = useState(false);
  const prop = useSpring({ 
    stroke: active ? "155,160" : "0,200",
    config: config.molasses
  });
  return (
    <div onClick={() => set(!active)}>
      <StarIcon
        stroke={prop.stroke}
      />
    </div>
  );
}