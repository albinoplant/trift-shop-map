import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Container from "@mui/material/Container";
import Drawer, { DrawerHeader } from "components/Drawer";
import { useTheme } from "@mui/material/styles";
import Logo from "data/trifto_logo";
import useLayout from "hooks/useLayout";

const Layout = ({ children, nav }) => {
  const theme = useTheme();
  const { isOpen, setIsOpen } = useLayout();

  const handleDrawerToggle = () => {
    setIsOpen((was) => !was);
    const nIntervId = setInterval(() => {
      window.dispatchEvent(new Event("resize"));
    }, 10);
    setTimeout(() => {
      clearInterval(nIntervId);
    }, theme.transitions.duration.enteringScreen + 50);
  };

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      style={{ height: "100vh" }}
    >
      <Box
        sx={{ display: "flex", height: "100%", flexDirection: "row-reverse" }}
      >
        <Drawer variant="permanent" open={isOpen} anchor="right">
          <DrawerHeader>
            <IconButton onClick={handleDrawerToggle}>
              {isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            {!!isOpen && <Logo />}
          </DrawerHeader>
          <Divider />
          <List>{nav}</List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
