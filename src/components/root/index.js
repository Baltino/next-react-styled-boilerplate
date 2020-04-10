import React from "react";
import { Box } from 'rebass/styled-components';

// Import Components
import Header from './../header';

// Main page
const Root = props => {
  return (
    <Box 
      sx={{
        p: 4,
        color: 'text',
        bg: 'white',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      }}
      >
      <Header />
      {props.children}
    </Box>
  );
};

export default Root;

