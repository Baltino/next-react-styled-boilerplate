import React from "react";

import { Heading } from "rebass/styled-components";
import { ThemeProvider } from "styled-components";

import theme from "./../theme";

import Container from "../components/container";
import Root from "../components/root";

const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Container py={3}>
          <Heading variant='display'>Welcome</Heading>
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default index;

