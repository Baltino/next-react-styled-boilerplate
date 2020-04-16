import React from "react";
import { Flex } from "rebass/styled-components";
import { useSpring } from "react-spring";

import Button from "../button";
import Link from "../link";
import Logo from "../icons/logo";

const Header = () => {
  const a = useSpring({ x: "90, 100" })
  return (
    <Flex 
      display={"flex"} 
      height={[6]} 
      alignItems={"center"} 
      justifyContent={"space-between"} 
      sx={{ mx: [-2], px: [2], boxShadow: "bottom" }}
    >
      <Logo height={["50px"]} width={["200px"]} path={a} />
      <Flex justifyContent={"flex-end"}>
        <Link href="/">
          <Button variant={"empty"}>
            Contacto
          </Button>
        </Link>
        <Link href="/about">
          <Button variant={"primary"}>
            Comenzar Ahora
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;

