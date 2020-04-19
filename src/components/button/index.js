import React from "react";
import { any, bool, array, string, number, oneOfType, func, object } from "prop-types";
import styled from "styled-components";
import { variant, color, flexbox, typography, border, space } from "styled-system";
import { Flex } from "rebass/styled-components";

const propTypes = {
  arrowLeft: bool,
  arrowRight: bool,
  buttonStyles: object,
  variant: string,
  height: oneOfType([array, string, number]),
  children: any,
  onClick: func
};

const SimpleButton = styled.button`
  ${border}
  ${color}
  ${flexbox}
  ${typography}
  ${space}
  cursor: pointer;
  border: none;
  padding: 12px 18px;
  outline: none;
  background-position: center;
  transition: background 0.2s;
`;
const MyButton = styled(SimpleButton)({},
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "primary",
        "&:hover": {
        },
        "&:active": {
          backgroundSize: "100%",
          transition: "background 0s",
        }
      },
      secondary: {
        color: "white",
        bg: "gray",
        "&:hover": {
        },
        "&:active": {
          backgroundSize: "100%",
          transition: "background 0s",
        }
      },
      simple: {
        color: "black",
        bg: "lightgray"
      },
      empty: {
        color: "primary",
        bg: "transparent"
      }
    }
  })
);

const Arrow = styled(SimpleButton)`
  width: 0; 
  height: 0;
  cursor: pointer;
  padding: 0;
  background: transparent;
  ${({ invert }) => invert ? "margin-right: 0px;" : "margin-left: 0px;"}
  border-top: ${({ height }) => height/2}px solid transparent;
  border-bottom: ${({ height }) => height/2}px solid transparent;
  border-left: ${({ height }) => `${height/2}px solid transparent`};
  transform: ${({ invert }) => invert ? "rotate(180deg)" : ""};
`;
const ArrowRight = styled(Arrow)({}, 
  variant({
    variants: {
      primary: { borderLeftColor: "primary" },
      secondary: { borderLeftColor: "secondary" },
      simple: { borderLeftColor: "gray" },
    }
  })
);

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
    <MyButton fontWeight={"bold"} height={height} variant={variant} flex={1} {...buttonStyles}>
      {children}
    </MyButton>
    { arrowRight && <ArrowRight  height={height} variant={variant}/>}
  </Flex>
);

StyledButton.propTypes = propTypes;

export default StyledButton;
