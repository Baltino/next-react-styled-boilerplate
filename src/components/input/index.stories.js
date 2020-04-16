import React from "react";
import { Box } from "rebass/styled-components";
import styled from "styled-components";

import Button from "./../button";
import Input from "./index";

export default { title: "Input" };

export const Simple = () => <Input placeholder="Nombre y Apellido *" width={"200px"} />;

export const SimpleWithLabel = () =>
  <Input label="Nombre y Apellido" placeholder="Nombre y Apellido *" width={"200px"} />;

const StyledButton = styled(Button)`
  position: absolute;
  right: 5px;
  top: 5px;
`
export const WithButton = () => (
  <Box 
    sx={{
      position: "relative",
      maxWidth: "400px",
      width: "100%"
    }}
  >
    <Input 
      py={"26px"} 
      px={2} 
      placeholder="Tu email aqui"
      width={["100%"]}
    />
    <StyledButton variant="primary">COMENZAR AHORA</StyledButton>
  </Box>
);
