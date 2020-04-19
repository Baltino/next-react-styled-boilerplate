import React from "react";
import { any } from "prop-types";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";

const propTypes = {
  children: any,
};

const Container = ({ children, ...rest }) => (
  <Flex width={["100%", "1024px"]} px={[2, 0]} mx={"auto"} {...rest}>
    {children}
  </Flex>
);

Container.propTypes = propTypes;

export default Container;
