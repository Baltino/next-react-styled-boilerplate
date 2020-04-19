import React from "react";
import { array, number, oneOfType, string } from "prop-types";
import styled from "styled-components";
import { Flex } from "rebass/styled-components";

const propTypes = {
  steps: number.isRequired,
  current: number.isRequired,
  width: oneOfType([array, number, string]),
};

const Bullet = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 10px;
  flex: 1;
  margin-right: 5px;
  transition: 0.8s background ease-out;
  &:last-child {
    margin-right: 0;
  }
  background: ${({ theme, active }) => active ? theme.colors.primary : "transparent"};
`;

const Bullets = ({ steps, current, width = 1, ...rest }) => {
  return (
    <Flex width={width} justifyContent={"space-between"} {...rest}>
      {Array(steps).fill(0).map((c, index) => <Bullet key={index} active={current >= index} /> )}
    </Flex>
  )
};

Bullets.propTypes = propTypes;

export default Bullets;
