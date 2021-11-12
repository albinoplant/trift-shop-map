import { createTheme } from "@mui/material/styles";

const light = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#eceff1",
      dark: "#babdbe",
      light: "#ffffff",
    },
    secondary: {
      main: "#00e676",
      light: "#66ffa6",
      dark: "#00b248",
    },
  },
});

const dark = createTheme({
  palette: {
    type: "dark",
    // primary: {
    //   // main: "#",
    //   // dark: "#b1b1b1",
    // },
    secondary: {
      main: "#11b875",
    },
  },
});

export { light, dark };
