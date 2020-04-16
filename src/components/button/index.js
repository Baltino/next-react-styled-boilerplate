import React from "react";
import { any, bool, array, string, number, oneOfType, func } from "prop-types";
import styled from "styled-components";
import { Button, Flex } from "rebass/styled-components";

const propTypes = {
  arrowLeft: bool,
  arrowRight: bool,
  height: oneOfType([array, string, number]),
  children: any,
  onClick: func
};

const MyButton = styled(Button)`
  border: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding: 12px 18px;
  cursor: pointer;
  outline: none;
  background-position: center;
  transition: background 0.8s;
`;

const ArrowRight = styled(Flex)`
  width: 0; 
  height: 0;
  cursor: pointer;
  ${({ invert }) => invert ? "margin-right: -2px;" : "margin-left: -2px;"}
  border-top: ${({ height }) => height/2}px solid transparent;
  border-bottom: ${({ height }) => height/2}px solid transparent;
  border-left: ${({ height, theme, variant }) => `${height/2}px solid ${theme.colors[theme.buttons[variant].bg]}`};
  transform: ${({ invert }) => invert ? "rotate(180deg)" : ""};
`;


const StyledButton = ({ arrowLeft, arrowRight, height = 50, children, onClick = () => {}, ...rest }) => (
  <Flex onClick={onClick}>
    { arrowLeft && <ArrowRight height={height} invert={true} {...rest}/>}
    <MyButton height={height} {...rest}>
      {children}
    </MyButton>
    { arrowRight && <ArrowRight  height={height} {...rest}/>}
  </Flex>
);

StyledButton.propTypes = propTypes;

export default StyledButton;
