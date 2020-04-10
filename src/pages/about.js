import React from "react";
import { Heading, Text } from "rebass";
import { ThemeProvider } from "styled-components";

import theme from "./../theme";

import Root from "../components/root";
import Button from "../components/button";

const about = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Heading>My components</Heading>
        <Text mb={4}>This is a demo using presets from Theme UI</Text>
        <Button mr={3} width={"150px"}>
          Beep
        </Button>
        <Button variant='secondary' width={"150px"}>
          Boop
        </Button>
      </Root>
    </ThemeProvider>
  );
};

export default about;

