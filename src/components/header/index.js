import React from "react";
import Link from "../link";
import { Box } from "rebass";

const Header = () => {
  return (
    <Box>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About Page maxi
      </Link>
    </Box>
  );
};

export default Header;

