import React from "react";
import { Flex } from "rebass/styled-components";
import { useSpring } from "react-spring";

import Button from "../button";
import Container from "../container";
import Link from "../link";
import Logo from "../icons/logo";

const Header = () => {
  const a = useSpring({ x: "90, 100" })
  return (
    <Flex 
      display={"flex"} 
      height={[6]} 
      alignItems={"center"} 
      justifyContent={"center"} 
      sx={{ px: [2], boxShadow: "bottom" }}
    >
      <Container justifyContent={"space-between"} px={[0]}>
        <Logo height={["50px"]} width={["200px"]} path={a} />
        <Flex justifyContent={"flex-end"}>
          <Link href="/" underlined={false}>
            <Button variant={"empty"}>
              Contacto
            </Button>
          </Link>
          <Link href="/about" underlined={false}>
            <Button variant={"primary"}>
              Comenzar Ahora
            </Button>
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;

