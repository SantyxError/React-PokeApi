import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

type Decorator = (Story: React.ComponentType) => JSX.Element;

export const ThemeDecorator: Decorator = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
