import React from "react";
import { Flex } from "rebass/styled-components";

import Carousel from "./index";

export default { title: "Carousel" };

const items = [
  props => <Flex flexDirection={"column"} p={3} bg={"red"} {...props}> <h2>Title 1</h2><p>text 1</p></Flex>,
  props => <Flex flexDirection={"column"} p={3} bg={"blue"} {...props}> <h2>Title 2</h2><p>text 2</p></Flex>,
  props => <Flex flexDirection={"column"} p={3} bg={"yellow"} {...props}> <h2>Title 3</h2><p>text 3</p></Flex>,
  props => <Flex flexDirection={"column"} p={3} bg={"cyan"} {...props}> <h2>Title 4</h2><p>text 4</p></Flex>,
];

export const Simple = () => (
  <Carousel items={items} />
);