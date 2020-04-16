import React from "react";
import styled from "styled-components";
import { string, any, oneOf, func } from "prop-types";

import { Flex } from "rebass/styled-components";
import { variant } from "styled-system";
import { Label, Input as RebassInput } from "@rebass/forms/styled-components";

const INPUT_HEIGHT = 40;


const propTypes = {
  icon: func,
  label: string,
  name: string,
  placeholder: string,
  type: string,
  variant: oneOf(["normal", "error", "success", "loading"]),
  width: any,
};

const Input = styled(RebassInput)(
  {
    background: "lightgray",
    color: "black",
    transition: "0.5s all ease-in",
    border: 0,
  },
  variant({
    variants: {
      error: {
        borderColor: "error"
      },
      success: {
        borderColor: "success"
      }
    }
  })
)

const StyledInputContainer = styled(Flex)`
  position: relative;
  label {
    font-size: ${({ theme }) => theme.fontSizes[0]+"px"};
    font-weight: bold;
  }
  input:focus {
    outline: none;
  }
`;

const IconContainer = styled(Flex)`
  position: absolute;
  align-items: center;
  padding-left: 2px;
  right: 10px;
`;


const MyInput = ({
  icon = null,
  label,
  name,
  type = "text",
  placeholder = "",
  variant = "normal",
  width = "100%",
  ...rest
}) => {
  return (
    <StyledInputContainer flexDirection={"column"} width={width} className={variant}>
      { label && (<Label htmlFor={name}>{label}</Label>) }
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        variant={variant}
        px={3}
        py={2}
        height={INPUT_HEIGHT}
        width={"100%"}
        {...rest}
      />
      { icon && <IconContainer height={INPUT_HEIGHT}>{icon()}</IconContainer>}
    </StyledInputContainer>
  );
};

MyInput.propTypes = propTypes;

export default MyInput;
