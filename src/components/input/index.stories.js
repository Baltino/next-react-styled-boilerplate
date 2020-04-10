import React from "react";
import { Box } from "rebass/styled-components";

import Button from "./../button";
import Input from "./index";

export default { title: "Input" };

export const Simple = () => <Input placeholder="Nombre y Apellido *" width={"200px"} />;

export const SimpleWithLabel = () =>
  <Input label="Nombre y Apellido" placeholder="Nombre y Apellido *" width={"200px"} />;

export const WithButton = () => (
  <Box 
    sx={{
      position: "relative",
      maxWidth: "400px",
      width: "100%"
    }}
  >
    <Input 
      py={3} 
      px={2} 
      placeholder="Tu email aqui" 
      button={() => <Button variant="primary">COMENZAR AHORA</Button>}
      width={["100%"]}
    />
  </Box>
);
