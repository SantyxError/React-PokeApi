import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

export const renderProvider = (node: React.ReactNode) =>{
<ThemeProvider theme={theme}>{node}</ThemeProvider>
}