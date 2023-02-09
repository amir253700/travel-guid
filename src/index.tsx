import { createRoot } from "react-dom/client";
import App from "./App";

import React from "react";
import "./style.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
