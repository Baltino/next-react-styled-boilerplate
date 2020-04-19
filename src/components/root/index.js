import React from "react";
import { any } from "prop-types";
import { Box } from "rebass/styled-components";

// Import Components
import Header from "./../header";
import GlobalStyles from "./global.styles.js";

const propTypes = {
  children: any,
};
// Main page
const Root = props => {
  return (
    <>
      <Box 
        sx={{
          color: "text",
          bg: "white",
          fontFamily: "body",
          fontWeight: "body",
          lineHeight: "body",
        }}
      >
        <Header />
        {props.children}
      </Box>
      <GlobalStyles />
    </>
  );
};

Root.propTypes = propTypes;

export default Root;

