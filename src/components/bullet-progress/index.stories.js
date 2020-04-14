import React, { useState } from "react";
import Bullets from "./index";

export default { title: "Progress bullets" };

const STEPS = 4;

export const Basic = () => {
  const [current, setCurrent] = useState(0);
  return <Bullets onClick={() => setCurrent((current+1) % STEPS)} steps={STEPS} current={current} width={"200px"} />;
};
