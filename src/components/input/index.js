import React from "react";
import styled from "styled-components";
import { string, any, oneOf } from "prop-types";

import { Flex } from "rebass/styled-components";
import { variant } from 'styled-system'
import { Label, Input as RebassInput } from "@rebass/forms/styled-components";



const propTypes = {
  button: any,
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
  button {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  label {
    font-size: ${({ theme }) => theme.fontSizes[0]+"px"};
    font-weight: bold;
  }
  input:focus {
    outline: none;
  }
`;


const MyInput = ({
  button = null,
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
        py={"12px"}
        width={"100%"}
        {...rest}
      />
      {button && button()}
    </StyledInputContainer>
  );
};

MyInput.propTypes = propTypes;

export default MyInput;
