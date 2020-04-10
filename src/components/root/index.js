import React from "react";
import { any } from "prop-types";
import { Box } from "rebass/styled-components";

// Import Components
import Header from "./../header";

const propTypes = {
  children: any,
};
// Main page
const Root = props => {
  return (
    <Box 
      sx={{
        p: 4,
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
  );
};

Root.propTypes = propTypes;

export default Root;
