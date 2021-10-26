import React from "react";
import "./navbar.css";
import Topbar from "components/Layout/Topbar";

const Navbar = ({ children}) => {
  return (
    <nav>
      <Topbar />
      {children}
    </nav>
  );
};

export default Navbar;
