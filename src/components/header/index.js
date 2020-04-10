import React from "react";
import { Flex } from "rebass/styled-components";

import Link from "../link";

const Header = () => {
  return (
    <Flex>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About Page maxi
      </Link>
    </Flex>
  );
};

export default Header;

