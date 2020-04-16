import React from "react";
import { any, string, bool } from "prop-types";

import NextLink from "next/link";
import styled from "styled-components";
import { Link } from "rebass/styled-components";

const propTypes = {
  children: any,
  href: string,
  underlined: bool
};

const StyledLink = styled(Link)`
  ${({ underlined }) => (
    !underlined && `&:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }`
  )}
`

const MyLink = ({ children, href, underlined = true, ...rest}) => (
  <NextLink href={href}>
    <StyledLink
      {...rest}
      href={href}
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit",
      }}
      underlined={underlined}
    >
      {children}
    </StyledLink>
  </NextLink>
);

MyLink.propTypes = propTypes;

export default MyLink;
