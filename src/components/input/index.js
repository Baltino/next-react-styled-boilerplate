import React from "react";
import { string, number, oneOf } from "prop-types";

import { Flex } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms/styled-components";


const propTypes = {
  width: oneOf([string, number]),
  label: string,
  name: string,
  placeholder: string,
  type: string,
};
const MyInput = ({
  label,
  name,
  type = "text",
  placeholder = "",
}) => {
  return (
    <Flex flexDirection={"column"}>
      { label && (<Label htmlFor={name}>{label}</Label>) }
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </Flex>
  );
};

MyInput.propTypes = propTypes;

export default MyInput;
