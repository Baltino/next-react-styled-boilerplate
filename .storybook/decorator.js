// themeDecorator.js
import React from "react"
import { ThemeProvider } from "styled-components";

import theme from "./../src/theme"
import GlobalStyles from "./../src/components/root/global.styles";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
    <GlobalStyles />
  </ThemeProvider>
)

export default ThemeDecorator;
