import React from "react";

import { Heading } from "rebass";
import { ThemeProvider } from "styled-components";

import theme from "./../theme";

import Root from "../components/root";

const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Heading variant='display'>Welcome</Heading>
      </Root>
    </ThemeProvider>
  );
};

export default index;

