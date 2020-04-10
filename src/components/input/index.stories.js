import React from "react";

import Button from "./../button";
import Input from "./index";

export default { title: "Input" };

export const Simple = () => <Input placeholder="Nombre y Apellido *" width={"200px"} />;

export const SimpleWithLabel = () => <Input label="Nombre y Apellido" placeholder="Nombre y Apellido *" width={"200px"} />;

export const WithButton = () => (
  <Input py={3} px={2} placeholder="Tu email aqui" button={() => <Button variant="primary">COMENZAR AHORA</Button>} width={[1, "400px"]} />
);
