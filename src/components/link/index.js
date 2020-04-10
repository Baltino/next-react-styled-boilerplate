import React from "react";
import { any, string } from "prop-types";

import NextLink from "next/link";
import { Link } from "rebass/styled-components";

const propTypes = {
  children: any,
  href: string,
};

const MyLink = ({ children, href, ...rest}) => (
  <NextLink href={href}>
    <Link
      {...rest}
      href={href}
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit",
      }}>
      {children}
    </Link>
  </NextLink>
);

MyLink.propTypes = propTypes;

export default MyLink;
