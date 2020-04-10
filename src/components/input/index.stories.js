import React from "react";
import Input from "./index";

export default { title: "Input" };

export const Simple = () => <Input placeholder="Nombre y Apellido *" width={"200px"} />;

export const SimpleWithLabel = () => <Input label="Nombre y Apellido" placeholder="Nombre y Apellido *" width={"200px"} />;