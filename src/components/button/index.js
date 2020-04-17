import React from "react";
import { any, bool, array, string, number, oneOfType, func, object } from "prop-types";
import styled from "styled-components";
import { Button, Flex } from "rebass/styled-components";

const propTypes = {
  arrowLeft: bool,
  arrowRight: bool,
  buttonStyles: object,
  variant: string,
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
  transition: background 0.2s;
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


const StyledButton = ({ 
  arrowLeft, 
  arrowRight, 
  variant, 
  height = 50, 
  children, 
  onClick = () => {}, 
  buttonStyles = {},
  ...rest 
}) => (
  <Flex onClick={onClick} {...rest}>
    { arrowLeft && <ArrowRight height={height} invert={true} variant={variant}/>}
    <MyButton height={height} variant={variant} flex={1} {...buttonStyles}>
      {children}
    </MyButton>
    { arrowRight && <ArrowRight  height={height} variant={variant}/>}
  </Flex>
);

StyledButton.propTypes = propTypes;

export default StyledButton;
