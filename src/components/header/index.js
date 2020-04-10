import React from "react";
import { Card, Flex } from "rebass/styled-components";

import Button from "../button";
import Link from "../link";
import Logo from "../icons/logo";

const Header = () => {
  return (
    <Flex display={"flex"} height={[6]} alignItems={"center"} justifyContent={"space-between"} sx={{ px: [2], boxShadow: "bottom" }} >
      <Logo height={["50px"]} width={["200px"]} />
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

