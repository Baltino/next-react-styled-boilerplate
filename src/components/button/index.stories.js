import React from "react";
import { Flex } from "rebass/styled-components";

import Button from "./index";

export default { title: "Button" };

export const Primary = () => (
  <Flex flexDirection={"column"}>
    <Button variant="primary" width={150} onClick={() => alert("my button")}>My Button</Button>
    <Button variant="primary" arrowLeft={true} width={150} mt={2} onClick={() => alert("my button")}>My Button</Button>
    <Button variant="primary" arrowRight={true} width={150} mt={2} onClick={() => alert("my button")}>My Button</Button>
  </Flex>
);

export const Secondary = () => <Button variant="secondary" width={150}>My Button</Button>;

export const Empty = () => <Button variant="empty" width={150}>My Button</Button>;