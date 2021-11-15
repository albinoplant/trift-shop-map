import { GeoProvider } from "contexts/GeoContext";
import Router from "router";
import { ThemeProvider } from "@mui/material/styles";
import { light } from "themes/mainTheme";
import { LayoutProvider } from "contexts/LayoutContext";
function App() {
  return (
    <ThemeProvider theme={light}>
      <LayoutProvider>
      <GeoProvider>
        <Router />
      </GeoProvider>
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default App;
