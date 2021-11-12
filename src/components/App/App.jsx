import React from "react";
import { GeoProvider } from "contexts/GeoContext";
import Router from "router";
import { ThemeProvider } from "@mui/material/styles";
import { light } from "themes/mainTheme";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GeoProvider>
        <Router />
      </GeoProvider>
    </ThemeProvider>
  );
}

export default App;
