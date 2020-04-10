import React from "react";
import styled from "styled-components";
import { string, any } from "prop-types";

import { Flex } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms/styled-components";



const propTypes = {
  button: any,
  label: string,
  name: string,
  placeholder: string,
  type: string,
  width: any,
};

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
`;


const MyInput = ({
  button = null,
  label,
  name,
  type = "text",
  placeholder = "",
  width,
  ...rest
}) => {
  return (
    <StyledInputContainer flexDirection={"column"} width={width} >
      { label && (<Label htmlFor={name}>{label}</Label>) }
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {button && button()}
    </StyledInputContainer>
  );
};

MyInput.propTypes = propTypes;

export default MyInput;
