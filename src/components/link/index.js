import React from "react";
import NextLink from "next/link";
import { Link } from "rebass";


export default ({ children, href, ...rest}) => (
  <NextLink href={href}>
    <Link
      {...rest}
      href={href}
      sx={{
        display: 'inline-block',
        fontWeight: 'bold',
        px: 2,
        py: 1,
        color: 'inherit',
      }}>
      {children}
    </Link>
  </NextLink>
);
